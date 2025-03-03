---
id: IncomingMessageClass
title: IncomingMessage
---

`4D.IncomingMessage` クラスを使用すると、カスタムの[**HTTP リクエストハンドラー**](../WebServer/http-request-handler.md) が受信したオブジェクトを管理できるようになります。  HTTP リクエストおよびそのプロパティは`4D.IncomingMessage` クラスのインスタンスとして自動的に受信されます。 GET 動詞とともにリクエストに直接渡された引数は[`.urlQuery`](#urlquery) プロパティで管理される一方、リクエストの本文に渡された引数は[`.getBlob()`](#getblob) あるいは [`getText()`](#gettext) といった関数を通して利用可能です。

HTTP リクエストハンドラーはあらゆる値を返すことが可能です(あるいは返さないことも可能です)。 通常は、[`4D.OutgoingMessage`](OutgoingMessageClass.md) クラスのインスタンスを返します。 通常は、[`4D.OutgoingMessage`](OutgoingMessageClass.md) クラスのインスタンスを返します。

このクラスの全てのプロパティは読み出し専用です。 これらはリクエストハンドラーによって自動的に値が入れられます。 これらはリクエストハンドラーによって自動的に値が入れられます。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 20 R8 | クラスを追加 |

</details>

### 例題

[**HTTPHandlers.json** ファイル](../WebServer/http-request-handler.md) が、以下のように定義されているとします:

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

`http://127.0.0.1/start/example?param=demo&name=4D` リクエストが、`GET` 動詞とともにブラウザ内で実行されます。 このリクエストは、以下の*GeneralHandling* シングルトンクラスの*gettingStarted* 関数によって管理されます: このリクエストは、以下の*GeneralHandling* シングルトンクラスの*gettingStarted* 関数によって管理されます:

```4d
shared singleton Class constructor()
        
Function gettingStarted($request : 4D.IncomingMessage) : 4D.OutgoingMessage
    
    var $result:=4D.OutgoingMessage.new()
    var $body : Text
    
    $body:="Called URL: "+$request.url+"\n"
    
    $body+="The parameters are received as an object: \n"+JSON Stringify($request.urlQuery; *)+"\n"
    
    $body+="The verb is: "+$request.verb+"\n"
    
    $body+="There are "+String($request.urlPath.length)+" url parts - Url parts are: "\
    +$request.urlPath.join(" - ")+"\n\n"
    
    
    $result.setBody($body)
    $result.setHeader("Content-Type"; "text/plain")
    
    return $result

```

このリクエストはサーバー上では\*$request\* として受信されます。これは`4D.IncomingMessage` クラスのインスタンスのオブジェクトです。

レスポンスのヘッダーは以下のようになります:

```json
Called URL: /start/example? param=demo&name=4D 
The parameters are received as an object:
{
  "param": "demo",
  "name": "4D"
}
The verb is: GET
There are 2 url parts - Url parts are: start - example
```

### IncomingMessageオブジェクト

4D.IncomingMessage オブジェクトは、以下のプロパティと関数を提供します:

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #IncomingMessageClass.getBlob().Syntax -->](#getblob)<br/><!-- INCLUDE #IncomingMessageClass.getBlob().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.getHeader().Syntax -->](#getheader)<br/><!-- INCLUDE #IncomingMessageClass.getHeader().Summary -->    |
| [<!-- INCLUDE #IncomingMessageClass.getJSON().Syntax -->](#getjson)<br/><!-- INCLUDE #IncomingMessageClass.getJSON().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.getPicture().Syntax -->](#getpicture)<br/><!-- INCLUDE #IncomingMessageClass.getPicture().Summary --> |
| [<!-- INCLUDE #IncomingMessageClass.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #IncomingMessageClass.getText().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #IncomingMessageClass.headers.Summary -->              |
| [<!-- INCLUDE #IncomingMessageClass.url.Syntax -->](#url)<br/><!-- INCLUDE #IncomingMessageClass.url.Summary -->                          |
| [<!-- INCLUDE #IncomingMessageClass.urlPath.Syntax -->](#urlPath)<br/><!-- INCLUDE #IncomingMessageClass.urlPath.Summary -->              |
| [<!-- INCLUDE #IncomingMessageClass.urlQuery.Syntax -->](#urlQuery)<br/><!-- INCLUDE #IncomingMessageClass.urlQuery.Summary -->           |
| [<!-- INCLUDE #IncomingMessageClass.verb.Syntax -->](#verb)<br/><!-- INCLUDE #IncomingMessageClass.verb.Summary -->                       |

:::note

4D.IncomingMessage オブジェクトは[共有不可](../Concepts/shared.md) のオブジェクトです。

:::

<!-- REF #IncomingMessageClass.getBlob().Desc -->

## .getBlob()

<!-- REF #IncomingMessageClass.getBlob().Syntax -->**.getBlob**() : Blob<!-- END REF -->

<!-- REF #IncomingMessageClass.getBlob().Params -->

| 引数  | 型    |                             | 説明               |
| --- | ---- | --------------------------- | ---------------- |
| 戻り値 | BLOB | <- | Blob 形式のリクエストの本文 |

<!-- END REF -->

#### 説明

`.getBlob()` 関数は、<!-- REF #IncomingMessageClass.getBlob().Summary -->リクエストの本文部分をBlob として返します<!-- END REF -->。

本文がバイナリーコンテンツとして渡されていない場合、この関数は値をBlob に変換することを試みますが、想定外の結果を返す可能性もあります。

<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Desc -->

## .getHeader()

<!-- REF #IncomingMessageClass.getHeader().Syntax -->**.getHeader**( *key* : Text ) : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Params -->

| 引数  | 型    |                             | 説明             |
| --- | ---- | --------------------------- | -------------- |
| key | Text | ->                          | 取得したいヘッダープロパティ |
| 戻り値 | Text | <- | ヘッダープロパティの値    |

<!-- END REF -->

#### 説明

`.getHeader()` 関数は、<!-- REF #IncomingMessageClass.getHeader().Summary -->*key* 引数でキーを指定したヘッダーの値を返しますheader<!-- END REF -->。

:::note

*key* 引数は大文字と小文字を区別しません。

:::

#### 例題

```4d
var $value : Text
var $request : 4D.IncomingMessage
$value := $request.getHeader("content-type")
```

<!-- END REF -->

<!-- REF #IncomingMessageClass.getJSON().Desc -->

## .getJSON()

<!-- REF #IncomingMessageClass.getJSON().Syntax -->**.getJSON**() : Variant<!-- END REF -->

<!-- REF #IncomingMessageClass.getJSON().Params -->

| 引数  | 型       |                             | 説明               |
| --- | ------- | --------------------------- | ---------------- |
| 戻り値 | Variant | <- | JSON解決したリクエストの本文 |

<!-- END REF -->

#### 説明

`.getJSON()` 関数は、<!-- REF #IncomingMessageClass.getJSON().Summary -->JSON 解決をしたリクエストの本文を返します<!-- END REF -->。

本文がJSON として有効なコンテンツとして与えられていなかった場合、エラーが発生します。

<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Desc -->

## .getPicture()

<!-- REF #IncomingMessageClass.getPicture().Syntax -->**.getPicture**() : Picture<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Params -->

| 引数  | 型       |                             | 説明               |
| --- | ------- | --------------------------- | ---------------- |
| 戻り値 | Picture | <- | ピクチャー形式のリクエストの本文 |

<!-- END REF -->

#### 説明

`.getPicture()` 関数は、<!-- REF #IncomingMessageClass.getPicture().Summary -->リクエストの本文をピクチャーとして返します(本文がピクチャーとして送信されていた場合)<!-- END REF -->。

本文がピクチャーであるということを示すために、ヘッダー内でcontent-type が与えられている必要があります。

:::note

リクエストが[`HTTPRequest` クラス](HTTPRequestClass.md) を使用してビルドされていた場合、ピクチャーは本文内にてBlob として送信されるとともに、適切なcontent-type が指定されている必要があります。

:::

本文が有効なピクチャーとして受信されていない場合、この関数はnull を返します。

<!-- END REF -->

<!-- REF #IncomingMessageClass.getText().Desc -->

## .getText()

<!-- REF #IncomingMessageClass.getText().Syntax -->**.getText**() : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getText().Params -->

| 引数  | 型    |                             | 説明              |
| --- | ---- | --------------------------- | --------------- |
| 戻り値 | Text | <- | テキスト形式のリクエストの本文 |

<!-- END REF -->

#### 説明

`.getText()` 関数は、<!-- REF #IncomingMessageClass.getText().Summary -->リクエストの本文部分をテキスト値として返します<!-- END REF -->。

本文が文字列の値として渡されていない場合、この関数は値をテキストに変換することを試みますが、想定外の結果を返す可能性もあります。

<!-- END REF -->

<!-- REF #IncomingMessageClass.headers.Desc -->

## .headers

<!-- REF #IncomingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### 説明

`.headers` プロパティには<!-- REF #IncomingMessageClass.headers.Summary -->受信したメッセージのカレントのヘッダーがキー/値のペア(文字列)が格納されています<!-- END REF -->。

`.headers` プロパティは、読み出し専用です。

ヘッダー名(キー)は全て小文字となっています。 ヘッダー名は全て大文字・小文字は区別されます。 ヘッダー名は全て大文字・小文字は区別されます。

<!-- END REF -->

<!-- REF #IncomingMessageClass.url.Desc -->

## .url

<!-- REF #IncomingMessageClass.url.Syntax -->**url** : Text<!-- END REF -->

#### 説明

`.url` プロパティには、<!-- REF #IncomingMessageClass.url.Summary -->リクエストのURL から*IP:port* 部分を抜いたものが文字列として格納されています<!-- END REF -->。

例えば、リクエストが "http://127.0.0.1:80/docs/invoices/today" だった場合、`.url` プロパティには"/docs/invoices/today" が格納されています。

`.url` プロパティは、読み出し専用です。

:::note

リクエストの"host" 部分(*IP:port*) は、[`host` ヘッダー](#headers) にて提供されています。

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlPath.Desc -->

## .urlPath

<!-- REF #IncomingMessageClass.urlPath.Syntax -->**urlPath** : Collection<!-- END REF -->

#### 説明

`.urlPath` プロパティには、<!-- REF #IncomingMessageClass.urlPath.Summary -->リクエストのURL から*IP:port* 部分を抜いたものが文字列のコレクションとして格納されています<!-- END REF -->。

例えば、リクエストが "http://127.0.0.1:80/docs/invoices/today" だった場合、`.urlPath` プロパティには、["docs", "invoices" ,"today"] が格納されています。

`.urlPath` プロパティは、読み出し専用です。

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlQuery.Desc -->

## .urlQuery

<!-- REF #IncomingMessageClass.urlQuery.Syntax -->**urlQuery** : Object<!-- END REF -->

#### 説明

`.urlQuery` プロパティには、<!-- REF #IncomingMessageClass.urlQuery.Summary -->リクエストの引数がURL 内でキー/値のペアとして渡されていた場合にはそれが格納されています<!-- END REF -->。

`.urlQuery` プロパティは、読み出し専用です。

引数はリクエストのURL 内に**直接**または**JSON コンテンツとして**渡すことができます。

#### 直接引数

例: `http://127.0.0.1:8044/myCall?firstname=Marie&id=2&isWoman=true`

この場合、引数は`urlQuery` プロパティ内に文字列化された値として受け取られます: `urlQuery = {"firstname":"Marie" ,"id":"2" ,"isWoman":"true"}`

#### JSONコンテンツ引数

例: `http://127.0.0.1:8044/myCall/?myparams='[{"firstname": "Marie","isWoman": true,"id": 3}]'`

引数はJSON フォーマットで渡されかつコレクションとして括られています。

この場合、引数は`urlQuery` プロパティ内にJSON テキストとして受け取られ、[`JSON Parse`](../commands-legacy/json-parse.md) を使用することでパースすることができます。

```4d
//urlQuery.myparams: "[{"firstname": "Marie","isWoman": true,"id": 3}]"
$test:=Value type(JSON Parse($r.urlQuery.myparams))=Is collection) //true
```

シングルクオーテーションやキャリッジリターンなどの特殊文字はエスケープする必要があります。

例: `http://127.0.0.1:8044/syntax/?mdcode=%60%60%604d`

````4d
//urlQuery.mdcode = ```4d
$test:=Length($r.urlQuery.mdcode) //5
````

:::note

POST または PUT 動詞を使用してリクエストの本文部分に渡された引数は、専用の関数を通して管理されます: [`getText()`](#gettext)、[`getPicture()`](#getpicture)、[`getBlob()`](#getblob)、[`getJSON()`](#getjson)

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.verb.Desc -->

## .verb

<!-- REF #IncomingMessageClass.verb.Syntax -->**verb** : Text<!-- END REF -->

#### 説明

`.verb` プロパティには、<!-- REF #IncomingMessageClass.verb.Summary -->リクエストで使用された動詞が格納されています<!-- END REF -->。

HTTP または HTTPS リクエスト動詞には、例えば"get"、"post"、"put" などと言ったものが含まれます。

`.verb` プロパティは、読み出し専用です。

<!-- END REF -->

