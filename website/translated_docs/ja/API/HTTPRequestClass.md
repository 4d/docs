---
id: HTTPRequestClass
title: HTTPRequest
---

<details><summary>履歴</summary>
| バージョン  | 内容     |
| ------ | ------ |
| v19 R6 | クラスを追加 |
</details>


`HTTPRequest` クラスを使って、[`HTTPRequest オブジェクト`](#httprequest-オブジェクト) を扱うことができます。このオブジェクトは、HTTPサーバーへのリクエストの設定と送信、および HTTPサーバーのレスポンスを処理するのに使用します。

`HTTPRequest` クラスは、`4D` クラスストアにて提供されています。 HTTPリクエストを作成・送信するには、[`HTTPRequest オブジェクト`](#httprequest-オブジェクト) を返す [4D.HTTPRequest.new()](#4dhttprequestnew) 関数を使用します。

### 例題

リクエスト設定用の `MyHttpRequestOptions` クラスを作成します:

```4d
Class constructor($method : Text; $headers : Object; $body : Text)
This.method:=$method
This.headers:=$headers
This.body:=$body

Function onResponse($request : 4D.HTTPRequest; $event : Object)
// リクエストを非同期的に処理する場合、onResponse メソッドをここに書きます

Function onError($request : 4D.HTTPRequest; $event : Object)
// リクエストを非同期的に処理する場合、onError メソッドをここに書きます
```

このクラスを使って、次のようにリクエストを作成できます:

```4d
var $headers : Object
$headers:=New object()
$headers["field1"]:="value1" 

var myHttpRequestOptions : cs.MyHttpRequestOptions
myHttpRequestOptions := cs.MyHttpRequestOptions.new("GET"; $headers; "")

var $request : 4D.HTTPRequest
$request:=4D.HTTPRequest.new("www.google.com"; myHttpRequestOptions)
$request.wait() // リクエストを同期的に処理する場合
// $request.response からリクエストの結果を取得したり、$request.error からエラーの詳細を確認したりできます
```

### HTTPRequest オブジェクト

HTTPRequest オブジェクトは共有できないオブジェクトです。

HTTPRequest オブジェクトは次のプロパティや関数を提供します:

|                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #4D.HTTPRequest.dataType.Syntax -->](#dataType)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.dataType.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.encoding.Syntax -->](#encoding)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.encoding.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.errors.Syntax -->](#errors)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.errors.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.headers.Syntax -->](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.headers.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.method.Syntax -->](#method)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.method.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.protocol.Syntax -->](#protocol)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.protocol.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.response.Syntax -->](#response)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.response.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.returnResponseBody.Syntax -->](#returnResponseBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.returnResponseBody.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.terminate().Syntax -->](#terminate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.terminate().Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.terminated.Syntax -->](#terminated)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.terminated.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.timeout.Syntax -->](#timeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.timeout.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.url.Syntax -->](#url)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.url.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.wait().Syntax -->](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.wait().Summary -->|



<!-- REF #4D.HTTPRequest.new().Desc -->
## 4D.HTTPRequest.new()

<!-- REF #4D.HTTPRequest.new().Syntax -->
**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->
| 引数      | タイプ            |    | 説明                    |
| ------- | -------------- |:--:| --------------------- |
| url     | テキスト           | -> | リクエストの送信先URL          |
| options | オブジェクト         | -> | リクエスト設定プロパティ          |
| 戻り値     | 4D.HTTPRequest | <- | 新規 HTTPRequest オブジェクト |
<!-- END REF -->


#### 説明

`4D.HTTPRequest.new()` 関数は、 <!-- REF #4D.HTTPRequest.new().Summary -->*options* 引数で指定した設定に基づいて HTTPリクエストを作成し、*url* 引数で定義される HTTPサーバーに送信して、`4D.HTTPRequest` オブジェクトを返します<!-- END REF -->.

返される `HTTPRequest` オブジェクトは、HTTPサーバーのレスポンスの処理と、メソッドを呼び出すのに使用されます。

*url* には、リクエスト送信先の URL を渡します。 シンタックスは以下の通りです:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```
プロトコル部分 (`http://` または `https://`) を省略した場合には、https リクエストが送信されます。

たとえば、次の文字列を受け渡すことができます:

```
    http://www.myserver.com
    www.myserver.com/path
    http://www.myserver.com/path?name="jones"
    https://www.myserver.com/login
    http://123.45.67.89:8083
    http://john:smith@123.45.67.89:8083
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

#### `options` 引数

*options* に渡すオブジェクトは、次のプロパティを持つことができます:

| プロパティ                | タイプ                                             | 説明                                                                                                                                                                       | デフォルト       |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| body                 | バリアント                                           | リクエストの本文 (`post` または `put` リクエストの場合に必須)。 テキスト、BLOB、またはオブジェクトを指定できます。 ヘッダー内で設定されていない限り、content-type は当プロパティの型によって決定されます。                                                  | 未定義         |
| certificatesFolder   | [Folder](#FolderClass.md)                       | 使用するクライアント証明書フォルダーを指定します。                                                                                                                                                | 未定義         |
| dataType             | テキスト                                            | レスポンス本文のデータ型。 値: "text", "blob", "object", または "auto"。 "auto" の場合、本文の型は MIMEタイプから推定されます (JSON ならオブジェクト、テキスト・javascript・xml・httpメッセージ・URLエンコードされたフォームなどはテキスト、それ以外は BLOB)。 | "auto"      |
| encoding             | テキスト                                            | `body` のあるリクエストの場合にのみ使用 (`post` または `put` メソッド)。 本文がテキストの場合のエンコーディング。ヘッダーにて content-type が指定されている場合は無視されます。                                                              | "UTF-8"     |
| headers              | オブジェクト                                          | リクエストのヘッダー。 シンタックス: `headers.key=value` (同じ key に対して *value* を複数指定する場合、*value* にコレクションを使用できます)                                                                           | 空のオブジェクト    |
| method               | テキスト                                            | "POST"、"GET"、またはその他のメソッド                                                                                                                                                 | "GET"       |
| minTLSVersion        | テキスト                                            | TLS の最小バージョンを指定します: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                   | "`TLSv1_2`" |
| onData               | [Function](#FunctionClass.md)                   | 本文のデータ受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                   | 未定義         |
| onError              | [Function](#FunctionClass.md)                   | エラー発生時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                      | 未定義         |
| onHeaders            | [Function](#FunctionClass.md)                   | ヘッダー受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                     | 未定義         |
| onResponse           | [Function](#FunctionClass.md)                   | レスポンス受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                    | 未定義         |
| onTerminate          | [Function](#FunctionClass.md)                   | リクエスト終了時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                    | 未定義         |
| protocol             | テキスト                                            | "auto" または "HTTP1"。 "auto" は現在の実装における HTTP1 を意味します。                                                                                                                      | "auto"      |
| proxyAuthentication  | [authentication object](#authentication-object) | プロキシ認証のためのオブジェクト                                                                                                                                                         | 未定義         |
| serverAuthentication | [authentication object](#authentication-object) | サーバー認証のためのオブジェクト                                                                                                                                                         | 未定義         |
| returnResponseBody   | ブール                                             | false の場合、レスポンス本文は [`response` オブジェクト](#response) に返されません。 false かつ `onData` が未定義の場合にエラーを返します。                                                                           | True        |
| timeout              | 実数                                              | タイムアウト (秒単位) 未定義 = タイムアウトなし                                                                                                                                              | 未定義         |

#### コールバック関数

すべてのコールバック関数は、2つのオブジェクト引数を受け取ります:

| 引数      | タイプ                                         |
| ------- | ------------------------------------------- |
| $param1 | [`HTTPRequest` オブジェクト](#httprequest-object) |
| $param2 | [`event` オブジェクト](#event-object)             |


以下は、コールバック呼び出しの流れです:

1. `onHeaders` は常に 1回呼び出されます。
2. `onData` は 0回または複数回呼び出されます (リクエストに本文がない場合は呼び出されません)。
3. エラーが発生しなかった場合、`onResponse` は常に 1回呼び出されます。
4. エラーが発生した場合、 `onError` が 1回実行されます (そしてリクエストを終了します)。
5. `onTerminate` は常に 1回実行されます。



#### event オブジェクト

`event` オブジェクトは、[コールバック関数](#コールバック関数) が呼ばれたときに返されます。 このオブジェクトには次のプロパティが含まれます:

| プロパティ | タイプ  | 説明                                                                     |
| ----- | ---- | ---------------------------------------------------------------------- |
| .data | blob | 取得データ。 *onData* コールバック以外の場合は常に `undefined` です。                         |
| .type | テキスト | イベントの種類。 取り得る値: "response", "error", "headers", "data", または "terminate |




#### authentication object

authentication オブジェクトは `options.serverAuthentication` または `options.proxyAuthentication` プロパティに使用します。 このオブジェクトには以下のプロパティを含めることができます:

| プロパティ    | タイプ  | 説明                              | デフォルト  |
| -------- | ---- | ------------------------------- | ------ |
| name     | テキスト | 認証に使用する名前                       | 未定義    |
| password | テキスト | 認証に使用するパスワード                    | 未定義    |
| method   | テキスト | 認証方法: "basic", "digest", "auto" | "auto" |


<!-- END REF -->




<!-- REF #4D.HTTPRequest.dataType.Desc -->
## .dataType


<!-- REF #4D.HTTPRequest.dataType.Syntax -->
**dataType** : Text<!-- END REF -->

#### 説明

`.dataType` プロパティは、 <!-- REF #4D.HTTPRequest.dataType.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `dataType` を格納します (省略時は "auto")。<!-- END REF -->. 

<!-- END REF -->

<!-- REF #4D.HTTPRequest.encoding.Desc -->
## .encoding

<!-- REF #4D.HTTPRequest.encoding.Syntax -->
**encoding** : Text<!-- END REF -->

#### 説明

`.encoding` プロパティは、 <!-- REF #4D.HTTPRequest.encoding.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `encoding` を格納します (省略時は "UTF-8")。<!-- END REF -->. 

<!-- END REF -->

<!-- REF #4D.HTTPRequest.errors.Desc -->
## .errors

<!-- REF #4D.HTTPRequest.errors.Syntax -->
**errors** : Collection<!-- END REF -->

#### 説明

`.errors` プロパティは、 <!-- REF #4D.HTTPRequest.errors.Summary -->少なくとも 1つのエラーが発生した場合、全エラーのコレクションを格納します<!-- END REF -->.

`.errors` プロパティの内容は次の通りです:

| プロパティ  |                       | タイプ    | 説明                  |
| ------ | --------------------- | ------ | ------------------- |
| errors |                       | コレクション | エラー発生時の 4Dエラースタック   |
|        | [].errCode            | 数値     | 4Dエラーコード            |
|        | [].message            | テキスト   | 4Dエラーの詳細            |
|        | [].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名 |

<!-- END REF -->



<!-- REF #4D.HTTPRequest.headers.Desc -->
## .headers

<!-- REF #4D.HTTPRequest.headers.Syntax -->
**headers** : Object<!-- END REF -->

#### 説明

`.headers` プロパティは、 <!-- REF #4D.HTTPRequest.headers.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `headers` を格納します。<!-- END REF -->. (省略された場合は空のオブジェクト) 

<!-- END REF -->


<!-- REF #4D.HTTPRequest.method.Desc -->
## .method

<!-- REF #4D.HTTPRequest.method.Syntax -->
**method** : Text<!-- END REF -->

#### 説明

`.method` プロパティは、 <!-- REF #4D.HTTPRequest.method.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `method` を格納します。<!-- END REF -->. (省略された場合は "GET") 

<!-- END REF -->

<!-- REF #4D.HTTPRequest.protocol.Desc -->
## .protocol

<!-- REF #4D.HTTPRequest.protocol.Syntax -->
**protocol** : Text<!-- END REF -->

#### 説明

`.protocol` プロパティは、 <!-- REF #4D.HTTPRequest.protocol.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `protocol` を格納します。<!-- END REF -->. (省略時、または "auto" の場合は、使用されたプロトコルのバージョン) 

<!-- END REF -->

<!-- REF #4D.HTTPRequest.response.Desc -->
## .response


<!-- REF #4D.HTTPRequest.response.Syntax -->
**response** : Object<!-- END REF -->

#### 説明

`.response` プロパティは、 <!-- REF #4D.HTTPRequest.response.Summary -->少なくともステータスコードを受け取った場合には、リクエストへのレスポンスを格納します (それ以外の場合は未定義)。<!-- END REF -->.

`response` オブジェクトは共有できないオブジェクトです。 このオブジェクトは次のプロパティを提供します:

| プロパティ       | タイプ    | 説明                                                                                                     |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------ |
| .body       | バリアント  | レスポンスのボディ。 メッセージのデータ型は [`dataType`](#datatype) プロパティによって定義されています。 ボディがまだ受信されていない場合は未定義です。              |
| .headers    | オブジェクト | レスポンスのヘッダー。 `headers.key` = value (同じ key が複数指定されている場合、*value* はコレクションでありえます) ヘッダーがまだ受信されていない場合は未定義です。 |
| .status     | 数値     | レスポンスのステータスコード                                                                                         |
| .statusText | テキスト   | ステータスコードを説明するメッセージ                                                                                     |



<!-- END REF -->


<!-- REF #4D.HTTPRequest.returnResponseBody.Desc -->
## .returnResponseBody

<!-- REF #4D.HTTPRequest.returnResponseBody.Syntax -->
**returnResponseBody** : Boolean<!-- END REF -->

#### 説明

`.returnResponseBody` プロパティは、 <!-- REF #4D.HTTPRequest.returnResponseBody.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `returnResponseBody` を格納します<!-- END REF -->. (省略された場合は true)。 

<!-- END REF -->


<!-- REF #4D.HTTPRequest.terminate().Desc -->
## .terminate()

<!-- REF #4D.HTTPRequest.terminate().Syntax -->
**.terminate()**<!-- END REF -->

<!-- REF #4D.HTTPRequest.terminate().Params -->

| 引数 | タイプ |  | 説明                |
| -- | --- |  | ----------------- |
|    |     |  | このコマンドは引数を必要としません |

<!-- END REF -->


#### 説明

> この関数はスレッドセーフです。

`.terminate()` 関数は、 <!-- REF #4D.HTTPRequest.terminate().Summary -->HTTPリクエストを中止します。<!-- END REF -->. また、`onTerminate` イベントをトリガーします。 

<!-- END REF -->


<!-- REF #4D.HTTPRequest.terminated.Desc -->
## .terminated

<!-- REF #4D.HTTPRequest.terminated.Syntax -->
**terminated** : Boolean<!-- END REF -->

#### 説明

`.terminated` プロパティは、 <!-- REF #4D.HTTPRequest.terminated.Summary -->リクエストが終了された場合 (`onTerminate` への呼び出し後) は true を格納します (それ以外は false)。<!-- END REF -->.

<!-- END REF -->


<!-- REF #4D.HTTPRequest.timeout.Desc -->
## .timeout

<!-- REF #4D.HTTPRequest.timeout.Syntax -->
**timeout** : Real<!-- END REF -->

#### 説明

`.timeout` プロパティは、 <!-- REF #4D.HTTPRequest.timeout.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `timeout` を格納します<!-- END REF -->. (省略された場合は未定義)。 

<!-- END REF -->



<!-- REF #4D.HTTPRequest.url.Desc -->
## .url

<!-- REF #4D.HTTPRequest.url.Syntax -->
**url** : Text<!-- END REF -->

#### 説明

`.url` プロパティは、 <!-- REF #4D.HTTPRequest.url.Summary -->HTTPリクエストの URL を格納します。<!-- END REF -->. 

<!-- END REF -->



<!-- REF #4D.HTTPRequest.wait().Desc -->
## .wait()

<!-- REF #4D.HTTPRequest.wait().Syntax -->
**.wait**( { *time* : Real } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.wait().Params -->
| 引数   | タイプ            |    | 説明                 |
| ---- | -------------- |:--:| ------------------ |
| time | 実数             | -> | レスポンスを待機する最長時間 (秒) |
| 戻り値  | 4D.HTTPRequest | <- | HTTPRequest オブジェクト |
<!-- END REF -->


#### 説明

> この関数はスレッドセーフです。

`4D.HTTPRequest.wait()` 関数は、 <!-- REF #4D.HTTPRequest.wait().Summary -->サーバーのレスポンスを待ちます。<!-- END REF -->.

*time* 引数が渡されると、関数は最長で、定義された秒数だけ待機します。

サーバーのレスポンスがすでに到着している場合、関数は即座に返されます。
<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
