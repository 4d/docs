---
id: http-request-handler
title: HTTP Request handler
---

デフォルトで、4D Web サーバーで受信されたHTTP リクエストは[ビルトイン処理機能](httpRequests.md) または[REST サーバー](../REST/REST_requests.md) で管理されます。

これに加えて、4D では**カスタムのHTTP リクエストハンドラー** の実装をサポートしており、これによって受信した特定のHTTP リクエストに割り込み、自分のコードを使用して処理することができるようになります。

カスタムのHTTP リクエストハンドラーがリクエストに割り込んだ場合、そのリクエストは直接処理され、他の処理機能(例: [On Web authentication](./authentication.md#on-web-authentication) データベースメソッドや [On Web connection](./httpRequests.md#on-web-connection) データベースメソッド)が呼び出されることはありません。

カスタムのHTTP リクエストハンドラーを使用することで、以下のような用途に応えることができます:

- 与えられたURL をリソースプロバイダやファイルアップロードボックスとして使用する(これにより様々なファイルのダウンロード/アップロードが可能になります)。
- コンテキスト(認証されたユーザー、与えられた権限など)に応じて、特定のページへとリダイレクトする
- oAuth 2.0 経由での認証を管理する

## 要件

カスタムのHTTP リクエストハンドラーは以下の条件の元にサポートされます:

- [スケーラブルセッション](./sessions.md#enabling-web-sessions) が有効化されていること
- メインのWeb サーバーでのみ利用可能です([コンポーネントのWeb サーバー](../WebServer/webServerObject.md) で定義されていたHTTP リクエストハンドラーがあったとしてもそれは無視されます)。

## HTTPHandlers.json ファイル

カスタムHTTP リクエストハンドラーは、[`Project/Sources`](../Project/architecture.md#sources) にある**HTTPHandlers.json** という設定ファイル内で定義します。

このファイルはサーバーが聞いている全てのURL パターン、管理される動詞(メソッド)、そして呼び出されるべきコードが格納されています。 ハンドラーはJSON フォーマットのコレクションとして提供されます。

ランタイムでは、URLに合致する最初のパターンのみが実行され、他のパターンは無視されます。

以下は*HTTPHandlers.json* ファイルのコンテンツの一例です:

```json

[
    {
        "class": "GeneralHandling",
        "method": "gettingStarted",
        "pattern": "start",
        "verbs": "get, post"
    }
]
```

このハンドラー宣言は以下のように解釈することができます: `/start/` から始まり`GET` または`POST`動詞がついたリクエストがサーバーで受信された場合、`GeneralHandling` シングルトンクラスの`gettingStarted` 関数が実行されます。

:::note

このファイルに対して行った変更が反映されるためには、Web サーバーを再起動する必要があります。

:::

## ハンドラー定義

ハンドラーは以下の3つの要素から定義されます:

- 聞くべきURL パターン
- 受信したURL パターンを処理するためのコードが実装されているクラスとその関数
- そのURL とともに使用することでハンドラーをトリガーする動詞(メソッド)

ハンドラーの識別子は、[パターン + 動詞のリストの中にある動詞]の組み合わせとなります。

### URL パターン

URL パターンは**接頭辞** として、あるいは**正規表現** を使用して定義することできます。

- 正規表現パターンを宣言するためには、HTTPHandlers.json ファイル内において"regexPattern" プロパティ名を使用します。 正規表現パターンは直接管理されます。\
   例: `"regexPattern" : "/docs/**/index.html"`

- 接頭辞パターンを宣言するためには、HTTPHandlers.json ファイルの"pattern" プロパティ名を使用します。 接頭辞は開始と終了の`/` を既に格納している正規表現とみなされます。
   例: `"regexPattern" : "/docs/**/index.html"`

"Pattern" と "regexPattern" プロパティは同じハンドラー定義内で同時に使用することはできません(使用した場合、"regexPattern" プロパティのみが有効となります)。

#### パターンの合致

URL パターンは以下の指定された順番に基づいてトリガーされます:

- 最初に合致したパターンが実行されます。
- それ以降のパターンは、URL に合致していたとしても実行されません。

結果として、ハンドラーを作成する際には正確な戦略を適用する必要があります。つまり、もっとも詳細なパターンを先に、そして最も一般的なパターンを後に書く必要があります。

```json
[
    {
        "class": "InvoiceslHandling",
        "method": "handleTheInvoice",
        "regexPattern": "/docs/invoices/details/theInvoice",
        "verbs": "GET"
    },
    {
        "class": "InvoiceslHandling",
        "method": "handleUnauthorizedVerbs",
        "regexPattern": "/docs/invoices/details/theInvoice",
        "comment": "This handler is triggered for all verbs except GET (handled above)"
    },
    {
        "class": "DocsHandling",
        "method": "handleDocs",
        "regexPattern": "/docs",
        "comment": "This handler is triggered for all the verbs"
    }
]

```

#### 禁止されているパターン

カスタムのHTTP ハンドラーでは、4D ビルトインのHTTP 処理機能に合致するURL パターンは許可されていません。 例えば、以下のようなパターンは管理することができません:

- `/4DACTION`
- `/rest`
- `/$lib/renderer`
- `/$shared`

### クラスとメソッド

定義されたURL パターンを検知して割り込んだときに実行されるべきコードを宣言するためには、"class" および "method" プロパティを使用します。

- "class": `cs.` を除いたクラス名。例: `cs.UsersHandling` ユーザークラスの場合は、"UsersHandling" このクラスは[**共有**](../Concepts/classes.md#共有シングルトン) クラスかつ[**シングルトン**](../Concepts/classes.md#シングルトンクラス) クラスである必要があります。
- "method": クラスに属性ているクラス関数

リクエストハンドラーコードについての情報に関しては、[後述の説明](#リクエストハンドラーコード) を参照してください。

### Verbs

ハンドラー定義内で"verbs" プロパティを使用することで、そのハンドラーが受信するリクエスト内でサポートされるHTTP 動詞(メソッド) を宣言することができます。 明示的に許可されていない動詞を使用するリクエストは、サーバーによって自動的に拒否されます。

カンマで区切ることで、複数の動詞を宣言することができます。 動詞の名前の大文字・小文字は区別されます。

例: `"verbs" : "PUT, POST"`

:::note

動詞名に対する制約はありません。 全ての動詞名を使用することが可能です。

:::

デフォルトで、"verbs" プロパティがハンドラーにおいて使用されていない場合、そのハンドラーが受信するリクエストに対しては、**全ての** HTTP 動詞がサポートされることになります(ただし前述の例のように、より詳細なパターンによって先に使用されているものを除く)。

:::note

HTTP 動詞はまた、[リクエストハンドラーコード内で`.verb` プロパティを使用](../API/IncomingMessageClass.md#verb) して評価することで受け入れるか拒否するかを決めることができます。

:::

## 例題

以下はHTTPHandlers.json ファイルの詳細な例です:

```json

[
   {
        "class": "GeneralHandling",
        "method": "handle",
        "pattern": "info", //URL 接頭辞
        "verbs": "GET"
    }, 
    {
        "class": "UsersHandling",
        "method": "manageAccount",
        "pattern": "userAccount/update",   //URL 接頭辞
        "verbs": "PUT,POST"
    }, 
    {
        "class": "FinancialHandling",
        "method": "handleInvoices",
        "regexPattern": "/docs/invoices/(past|today)", // 正規表現として指定されたURL 接頭辞
        "verbs": "GET"
    },
    {
        "class": "DocsHandling",
        "method": "handleDocs",
        "regexPattern": "/docs/myPage.html",  // 正規表現として指定されたURL 接頭辞
        "verbs": "GET"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleTheInvoice",
        "pattern": "docs/invoices/details/theInvoice", // 最も厳密なURL を最初に
        "verbs": "GET,POST"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleDetails",
        "pattern": "docs/invoices/details",    // 一般的なURL を後に
        "verbs": "GET"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleInvoices",   // 一般的なURL を後に
        "pattern": "docs/invoices",
        "verbs": "GET"
    }
]

```

この例においては、以下の関数を実装する必要があります:

- *GeneralHandling* クラス内の*handle 関数*
- *UsersHandling* クラス内の *manageAccount*
- *FinancialHandling* クラス内の *handleInvoices*
- *DocsHandling* クラス内の *handleDocs*
- *InvoicesHandling* クラス内の *handleTheInvoice* / *handleDetails* / *handleInvoices*

以下はハンドラーをトリガーするURL の一例です:

`IP:port/info/` とGET 動詞
`IP:port/info/general` とGET 動詞

`IP:port/userAccount/update/` とPOST 動詞
`IP:port/userAccount/update/profile` とPOST 動詞

`IP:port/docs/invoices/past` とGET 動詞
`IP:port/docs/invoices/today/latest` とGET 動詞

`IP:port//docs/myPage.html` とGET 動詞

`IP:port//docs/invoices/` を GET 動詞と使用すると、*handleInvoices* 関数を呼び出します(*InvoicesHandling* クラス)
`IP:port//docs/invoices/details/` を GET 動詞と使用すると、*handleDetails* 関数を呼び出します(*InvoicesHandling* クラス)
`IP:port//docs/invoices/details/theInvoice/xxxxxx` を GET 動詞と使用すると、*handleTheInvoice* 関数を呼び出します(*InvoiceslHandling* クラス)

## リクエストハンドラーコード

### Function configuration

HTTP リクエストハンドラーコードは、[**共有された**](../Concepts/classes.md#共有シングルトン) 、 [**シングルトンクラス**](../Concepts/classes.md#シングルトンクラス) の関数内に実装されている必要があります。

シングルトンがないかあるいは共有されていない場合、"シングルトンが見つかりません" エラーがサーバーから返されます。 HTTPHandlers.json 内で[ハンドラーとして定義されている](#ハンドラー定義) クラスまたは関数が見つからない場合、"シングルトン関数が見つかりません" エラーがサーバーによって返されます。

リクエストハンドラーのプロパティが関数によってアップデートされていない限り、リクエストハンドラー関数は必ずしも共有されているわけではありません。 この場合、[`shared` キーワード](../Concepts/classes.md#共有関数) を使用して関数を宣言する必要があります。

:::note

[`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) または [`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) キーワードを使用してリクエストハンドラー関数を外部REST 呼び出しへと公開することは**推奨されていません**。

:::

### 入力: 4D.IncomingMessage クラスのインスタンス

ハンドラーがリクエストを検知して割り込んだ場合、[4D.IncomingMessage クラス](../API/IncomingMessageClass.md) のインスタンスとしてサーバーで受信されます。

リクエストURL、動詞、ヘッダー、そしてあれば(URL 内に渡された)引数や本文など、リクエストに関して必要な情報は全てこのオブジェクト内に揃っています。

そのため、リクエストハンドラーはこれらの情報を使用して適切なビジネスロジックをトリガーすることができます。

### 出力: 4D.OutgoingMessage クラスのインスタンス

リクエストハンドラーは[4D.OutGoingMessage クラス](../API/OutgoingMessageClass.md)のオブジェクトインスタンスを返すことができます。つまりファイルのコンテンツなど、ブラウザが管理可能な完全なWeb コンテンツを返すことができるということです。

### 例題

[4D.IncomingMessage クラス](../API/IncomingMessageClass.md) は、リクエストの[ヘッダー](../API/IncomingMessageClass.md#headers) および[本文](../API/IncomingMessageClass.md#gettext) を取得するための関数を提供しています。

以下はサーバーにファイルをアップロードするためのシンプルな例です。

**HTTPHandlers.json** ファイル:

```json
[
    {
        "class": "UploadFile",
        "method": "uploadFile",
        "regexPattern": "/putFile",
        "verbs": "POST"
    }
]
```

呼び出されたURL: http://127.0.0.1:8044/putFile?fileName=testFile

ファイルのバイナリーのコンテンツはリクエストの本文に置かれ、またPOST 動詞が使用されています。 ファイル名はURL 内に引数(*fileName*) として渡されています。 これはリクエストの[`urlQuery`](../API/IncomingMessageClass.md#urlquery) オブジェクト内に受け取られます。

```4d
    //UploadFile クラス

shared singleton Class constructor()
	
	
Function uploadFile($request : 4D.IncomingMessage) : 4D.OutgoingMessage
	
	var $response:=4D.OutgoingMessage.new()
	
	var $body:="Not supported file"
	var $fileName; $fileType : Text
	var $file : 4D.File
	var $picture : Picture
	var $created : Boolean
	
	$fileName:=$request.urlQuery.fileName
	$fileType:=$request.getHeader("Content-Type")
	
	Case of 
		: ($fileType="application/pdf")
			$file:=File("/PACKAGE/Files/"+$fileName+".pdf")
			$created:=$file.create()
			$file.setContent($request.getBlob())
			$body:="Upload OK - File size: "+String($file.size)
			
		: ($fileType="image/jpeg")
			$file:=File("/PACKAGE/Files/"+$fileName+".jpg")
			$picture:=$request.getPicture()
			WRITE PICTURE FILE($file.platformPath; $picture)
			$body:="Upload OK - Image size: "+String($file.size)
			
	End case 
	
	$response.setBody($body)
	$response.setHeader("Content-Type"; "text/plain")
	
	return $response

```

## 参照

[Perfect mastery of your back end business logic thanks to HTTP requests handlers](https://blog.4d.com/perfect-mastery-of-your-back-end-business-logic-thanks-to-HTTP-requests-handlers) (blog post)