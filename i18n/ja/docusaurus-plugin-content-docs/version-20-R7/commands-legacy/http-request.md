---
id: http-request
title: HTTP Request
slug: /commands/http-request
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Request.Syntax-->**HTTP Request** ( *httpMethod* ; *url* ; *contents* ; *response* {; *headerNames* ; *headerValues*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Request.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| httpMethod | Text | &#8594;  | リクエストで使用するHTTPメソッド |
| url | Text | &#8594;  | リクエストの送信先URL |
| contents | Text, Blob, Picture, Object | &#8594;  | リクエストボディの内容 |
| response | Text, Blob, Picture, Object | &#8592; | レスポンスの内容 |
| headerNames | Text array | &#8594;  | リクエストのヘッダー名 |
| &#8592; | 返されたヘッダー名 |
| headerValues | Text array | &#8594;  | リクエストのヘッダー値 |
| &#8592; | 返されたヘッダー値 |
| * | 演算子 | &#8594;  | 指定時: 接続を保持する (keep-alive)省略時: 自動で接続を閉じる |
| 戻り値 | Integer | &#8592; | HTTPステータスコード |

<!-- END REF-->

:::info 互換性

このコマンドは互換性のためだけに維持されています。現在は [`4D.HTTPRequest クラス`](../API/HTTPRequestClass.md) を使用することが推奨されています。

:::

#### 

<!--REF #_command_.HTTP Request.Summary-->**HTTP Request**コマンドは指定したURLに任意のメソッドでHTTPリクエストを送信し、HTTPサーバーのレスポンスを処理することを可能にします。<!-- END REF-->

*httpMethod* 引数にはHTTPリクエストのメソッドを渡します。*HTTP Client*テーマの以下の定数を使用できます:

| 定数                  | 型   | 値       | コメント                                           |
| ------------------- | --- | ------- | ---------------------------------------------- |
| HTTP DELETE method  | 文字列 | DELETE  | *RFC 2616*参照                                   |
| HTTP GET method     | 文字列 | GET     | *RFC 2616*参照。[HTTP Get](http-get.md)を使用するのと同等。 |
| HTTP HEAD method    | 文字列 | HEAD    | *RFC 2616*参照                                   |
| HTTP OPTIONS method | 文字列 | OPTIONS |                                                |
| HTTP POST method    | 文字列 | POST    | *RFC 2616*参照                                   |
| HTTP PUT method     | 文字列 | PUT     | *RFC 2616*参照                                   |
| HTTP TRACE method   | 文字列 | TRACE   | *RFC 2616*参照                                   |

リクエストの送信先を *url* 引数に渡します。使用されるシンタックスは以下の通りです:  

```RAW
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

例えば以下の文字列を渡すことができます:  

```RAW
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name=jones    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

(\*) HTTPSリクエストを行う場合でも、証明書の発行局は検証されません。  
(\*\*) IPv6 アドレスをURLに使用する場合についての詳細は [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt) を参照ください。

*contents* 引数にはリクエストのボディを渡します。この引数に渡されるデータはリクエストのHTTPメソッドにより異なります。   
テキストやBLOB、ピクチャー、オブジェクトデータを送信できます。*content-type* が指定されない場合、以下のタイプが使用されます:

* テキスト: text/plain - UTF8
* BLOB: application/byte-stream
* ピクチャー: 既知のMIMEタイプ (best for Web).
* オブジェクト: application/json

コマンド実行後、*response* 引数はサーバーから返された結果を受け取ります。この結果はレスポンスからヘッダーを取り除いたボディー部になります。   
*response*には異なる型のレスポンスを渡せます:

* テキスト: 期待される結果がテキストの場合(以下参照)。
* BLOB: 期待される結果がバイナリの場合。
* ピクチャー: 期待される結果がピクチャーの場合。
* オブジェクト: 期待される結果がオブジェクトの場合。

**注:** *response* 引数にテキスト変数が渡された場合、4Dはサーバーから返されたデータを解読しようとします。4Dはまず*content-type* ヘッダーから文字セットを取得しようとし、次にBOMの中身を使用し、最後は*http-equiv charset* (html コンテンツ内) あるいは *encoding* (xml用) 属性を探します。それでも文字セットが見つからない場合、4DはレスポンスをANSIで解読しようとします。変換が失敗した場合、返されるテキストは空になります。サーバーが文字セット情報あるいはBOMを返すかどうかが分からない一方エンコーディング情報を知っている場合には、BLOBに*response*変数を渡して[Convert to text](convert-to-text.md)を呼び出す方が正確です。

オブジェクト型の変数を *response* 引数に渡したとき、リクエストが テキストコンテンツ型と結果を返してきた場合、4D はコンテンツをJSONとして解析しようとし、解析された結果をオブジェクトとして返します。そうでない場合*4D.Blob* オブジェクトが返されます。

サーバーから返された結果が*response*の変数型に対応しない場合、変数は空のままです。

*headerNames* と *headerValues*にはリクエストヘッダーの名前と値をそれぞれ格納した配列を渡します。  
このコマンド実行後、これらの配列にはHTTPサーバーから返されたレスポンスのヘッダー情報で置き換えられます。これにより特にCookieを管理できます。

*\** 引数を使用してサーバー接続時にkeep-aliveメカニズムを有効にできます。デフォルトではこの引数が省略されると、keep-aliveは有効になりません。

コマンドからは標準のHTTPステータスコードが返されます (200=OK等)。HTTPステータスコードについては*RFC 2616*を参照してください。   
ネットワークに関連する理由 (DNS解決に失敗した、サーバーに接続できないなど...) により、サーバーに接続できない場合、コマンドは0を返し、エラーが生成されます。エラーは [ON ERR CALL](on-err-call.md) コマンドを使用してインストールされたエラー処理メソッドで処理できます。

#### 例題 1 

リモートデータベースからレコード削除を要求する:

```4d
 $body_t:="{record_id:25}"
 $httpStatus_l:=HTTP Request(HTTP DELETE method;"database.example.com";$body_t)
```

**注:** サーバー側では受け付けたリクエストに応じて適切な処理を実装しなければなりません。**HTTP Request**はリクエストの送信と返される結果を処理するだけです。

#### 例題 2 

リモートデータベースにレコード追加を要求する:

```4d
 $body_t:="{fName:'john',fName:'Doe'}"
 $httpStatus_l:=HTTP Request(HTTP PUT method;"database.example.com";$body_t)
```

**注:** サーバー側では受け付けたリクエストに応じて適切な処理を実装しなければなりません。**HTTP Request**はリクエストの送信と返される結果を処理するだけです。

#### 例題 3 

リモートデータベースにJSON形式のレコードを追加するリクエスト:

```4d
 var $content : Object
 OB SET($content;"lastname";"Doe";"firstname";"John")
 $result:=HTTP Request(HTTP PUT method;"database.example.com";$content;$response)
```

#### 参照 

[HTTP Get](http-get.md)  