---
id: HTTPRequestClass
title: HTTPRequest
---

`HTTPRequest` クラスを使って、[`HTTPRequest オブジェクト`](#httprequest-オブジェクト) を扱うことができます。このオブジェクトは、HTTPサーバーへのリクエストの設定と送信、および HTTPサーバーのレスポンスを処理するのに使用します。

`HTTPRequest` クラスは、`4D` クラスストアにて提供されています。 HTTPリクエストを作成・送信するには、[`HTTPRequest オブジェクト`](#httprequest-オブジェクト) を返す [4D.HTTPRequest.new()](#4dhttprequestnew) 関数を使用します。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 19 R6 | クラスを追加 |

</details>

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

|                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPRequestClass.agent.Syntax -->](#agent)<br/><!-- INCLUDE #HTTPRequestClass.agent.Summary -->                                        |
| [<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #HTTPRequestClass.dataType.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)<br/><!-- INCLUDE #HTTPRequestClass.encoding.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)<br/><!-- INCLUDE #HTTPRequestClass.errors.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #HTTPRequestClass.headers.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)<br/><!-- INCLUDE #HTTPRequestClass.method.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)<br/><!-- INCLUDE #HTTPRequestClass.protocol.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)<br/><!-- INCLUDE #HTTPRequestClass.response.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#returnResponseBody)<br/><!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary --> |
| [<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #HTTPRequestClass.terminate().Summary -->                        |
| [<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #HTTPRequestClass.terminated.Summary -->                         |
| [<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)<br/><!-- INCLUDE #HTTPRequestClass.timeout.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)<br/><!-- INCLUDE #HTTPRequestClass.url.Summary -->                                              |
| [<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #HTTPRequestClass.wait().Summary -->                                       |

<!-- REF #4D.HTTPRequest.new().Desc -->

## 4D.HTTPRequest.new()

<details><summary>履歴</summary>

| リリース  | 内容                                                   |
| ----- | ---------------------------------------------------- |
| 20    | TLS検証がデフォルトに                                         |
| 19 R7 | *automaticRedirections* および *decodeData* プロパティをサポート。 |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->

| 引数      | 型                              |                             | 説明                    |
| ------- | ------------------------------ | :-------------------------: | --------------------- |
| url     | Text                           |              ->             | リクエストの送信先URL          |
| options | Object                         |              ->             | リクエスト設定プロパティ          |
| 戻り値     | 4D.HTTPRequest | <- | 新規 HTTPRequest オブジェクト |

<!-- END REF -->

#### 説明

`4D.HTTPRequest.new()` 関数は、<!-- REF #4D.HTTPRequest.new().Summary -->*options* 引数で指定した設定に基づいて HTTPリクエストを作成し、*url* 引数で定義される HTTPサーバーに送信して、`4D.HTTPRequest` オブジェクトを返します<!-- END REF -->。

返される `HTTPRequest` オブジェクトは、HTTPサーバーのレスポンスの処理と、メソッドを呼び出すのに使用されます。

*url* には、リクエスト送信先の URL を渡します。 シンタックスは以下の通りです:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

スキーム部分 (`http://` または `https://`) を省略した場合には、https リクエストが送信されます。

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

| プロパティ                  | 型                                                 | 説明                                                                                                                                                                                                          | デフォルト             |
| ---------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| agent                  | [4D.HTTPAgent](HTTPAgentClass.md) | HTTPRequest で使用する HTTPAgent。 エージェントオプションはリクエストオプションと統合されます (リクエストオプションが優先されます)。 特定のエージェントが定義されていない場合、デフォルト値を持つグローバルエージェントが使用されます。                                                        | グローバルエージェントオブジェクト |
| automaticRedirections  | Boolean                                           | true の場合、リダイレクトは自動的に実行されます (最大 5回までのリダイレクトが処理され、もしあれば 6回目のリダイレクトレスポンスが返されます)                                                                                                             | true              |
| body                   | Variant                                           | リクエストの本文 (`post` または `put` リクエストの場合に必須)。 テキスト、BLOB、またはオブジェクトを指定できます。 ヘッダー内で設定されていない限り、content-type は当プロパティの型によって決定されます。                                                                  | undefined         |
| certificatesFolder     | [Folder](FolderClass.md)                          | 使用するクライアント証明書フォルダーを指定します。                                                                                                                                                                                   | undefined         |
| dataType               | Text                                              | レスポンス本文のデータ型。 値: "text", "blob", "object", または "auto"。 "auto" の場合、本文の型は MIMEタイプから推定されます (JSON ならオブジェクト、テキスト・javascript・xml・httpメッセージ・URLエンコードされたフォームなどはテキスト、それ以外は BLOB)。 | "auto"            |
| decodeData             | Boolean                                           | true の場合、`onData` コールバックが受け取るデータは非圧縮です                                                                                                                                                                      | false             |
| encoding               | Text                                              | `body` のあるリクエストの場合にのみ使用 (`post` または `put` メソッド)。 本文がテキストの場合のエンコーディング。ヘッダーにて content-type が指定されている場合は無視されます。                                                                              | "UTF-8"           |
| headers                | Object                                            | リクエストのヘッダー。 シンタックス: `headers.key=value` (同じ key に対して *value* を複数指定する場合、*value* にコレクションを使用できます)                                                                           | 空のオブジェクト          |
| method                 | Text                                              | "POST"、"GET"、またはその他のメソッド                                                                                                                                                                                    | "GET"             |
| minTLSVersion          | Text                                              | TLS の最小バージョンを指定します: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                      | "`TLSv1_2`"       |
| onData                 | [Function](FunctionClass.md)                      | 本文のデータ受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                   | undefined         |
| onError                | [Function](FunctionClass.md)                      | エラー発生時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                      | undefined         |
| onHeaders              | [Function](FunctionClass.md)                      | ヘッダー受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                     | undefined         |
| onResponse             | [Function](FunctionClass.md)                      | レスポンス受信時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                    | undefined         |
| onTerminate            | [Function](FunctionClass.md)                      | リクエスト終了時のコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                                                    | undefined         |
| protocol               | Text                                              | "auto" または "HTTP1"。 "auto" は現在の実装における HTTP1 を意味します。                                                                                                                                                         | "auto"            |
| proxyAuthentication    | [authentication オブジェクト](#authentication-オブジェクト)   | プロキシ認証のためのオブジェクト                                                                                                                                                                                            | undefined         |
| serverAuthentication   | [authentication オブジェクト](#authentication-オブジェクト)   | サーバー認証のためのオブジェクト                                                                                                                                                                                            | undefined         |
| returnResponseBody     | Boolean                                           | false の場合、レスポンス本文は [`response` オブジェクト](#response) に返されません。 false かつ `onData` が未定義の場合にエラーを返します。                                                                                                              | true              |
| timeout                | Real                                              | タイムアウト (秒単位) 未定義 = タイムアウトなし                                                                                                                                                              | 未定義               |
| validateTLSCertificate | Boolean                                           | false の場合、4D は TLS証明書の検証をおこなわず、無効 (期限切れ、自己署名など) であってもエラーを返しません。 重要: 現在の実装では、認証局そのものは検証されません。                                                                             | true              |

#### コールバック関数

すべてのコールバック関数は、2つのオブジェクト引数を受け取ります:

| 引数      | 型                                           |
| ------- | ------------------------------------------- |
| $param1 | [`HTTPRequest` オブジェクト](#httprequest-オブジェクト) |
| $param2 | [`Event` オブジェクト](#event-オブジェクト)             |

以下は、コールバック呼び出しの流れです:

1. `onHeaders` は常に 1回呼び出されます。

2. `onData` は 0回または複数回呼び出されます (リクエストに本文がない場合は呼び出されません)。

3. エラーが発生しなかった場合、`onResponse` は常に 1回呼び出されます。

4. エラーが発生した場合、 `onError` が 1回実行されます (そしてリクエストを終了します)。

5. `onTerminate` は常に 1回実行されます。

:::info

[`wait()`](#wait) を使用しない場合 (非同期呼び出し) にコールバック関数が呼び出されるためには、そのプロセスは [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/ja/page1389.html) で作成された [ワーカー](../Develop/processes.md#ワーカープロセス) である必要があります ([`New process`](https://doc.4d.com/4dv20/help/command/ja/page317.html) は使えません)。

:::

#### event オブジェクト

`event` オブジェクトは、[コールバック関数](#コールバック関数) が呼ばれたときに返されます。 このオブジェクトには次のプロパティが含まれます:

| プロパティ                 | 型    | 説明                                                                                     |
| --------------------- | ---- | -------------------------------------------------------------------------------------- |
| .data | blob | 取得データ。 *onData* コールバック以外の場合は常に `undefined` です。                                         |
| .type | text | イベントの種類。 取り得る値: "response", "error", "headers", "data", または "terminate |

#### authentication オブジェクト

authentication オブジェクトは `options.serverAuthentication` または `options.proxyAuthentication` プロパティに使用します。 このオブジェクトには以下のプロパティを含めることができます:

| プロパティ    | 型    | 説明                                              | デフォルト     |
| -------- | ---- | ----------------------------------------------- | --------- |
| name     | Text | 認証に使用する名前                                       | undefined |
| password | Text | 認証に使用するパスワード                                    | undefined |
| method   | Text | 認証方法: "basic", "digest", "auto" | "auto"    |

<!-- END REF -->

<!-- REF #HTTP Parse message.Desc -->

## HTTP Parse message

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R4 | 追加 |

</details>

<!-- REF #HTTP Parse message.Syntax -->**HTTP Parse message**( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF -->

<!-- REF #HTTP Parse message.Params -->

| 引数   | 型          |                             | 説明                                                |
| ---- | ---------- | :-------------------------: | ------------------------------------------------- |
| data | Text, Blob |              ->             | 解析するデータ                                           |
| 戻り値  | Object     | <- | オブジェクト (各プロパティは、マルチパートの各データです) |

<!-- END REF -->

#### 説明

`HTTP Parse message` コマンドは、<!-- REF #HTTP Parse message.Summary -->multipart/form-*data* のテキストまたは Blob (HTTP "response" メッセージ) をパースし、コンテンツをオブジェクトに抽出します。 戻り値のオブジェクトの各プロパティは、マルチパートの各データに対応します<!-- END REF -->。

:::info

HTTP 自体はステートレスな通信プロトコルです。 このフレームワークの中で、クライアントは、メソッド・ターゲット・ヘッダー・コンテンツなどの詳細を指定した "request" メッセージをサーバーに送ることによって通信を開始します。 サーバーは、同じ詳細を含む "response" メッセージで応答します。 `HTTP Parse message` コマンドは、"request" または "response" メッセージを解析し、オブジェクトの形式に整えます。

:::

#### 例題

次の例では、HTTPリクエストを格納するテキストファイルのデータを解析します。

ファイルの中身は次のとおりです:

```
POST /batch/gmail/v1/ HTTP/1.1
Accept-Encoding: gzip, deflate
Authorization: Bearer xxxxxx
Connection: Close
Content-Length: 442
Content-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8
Date: Wed, 29 Nov 2023 13:51:35 GMT
Host: gmail.googleapis.com
User-Agent: 4D/20.4.0


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item1>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item2>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1

--batch_19438756D576A14ABA87C112F56B9396--
```

ファイルを解析します:

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}],
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```

<!-- END REF -->

<!-- REF #HTTPRequestClass.agent.Desc -->

## .agent

<!-- REF #HTTPRequestClass.agent.Syntax -->**agent** : 4D.HTTPAgent<!-- END REF -->

#### 説明

`.agent` プロパティは、<!-- REF #HTTPRequestClass.agent.Summary -->[`options`](#options-引数) で渡された `agent` オブジェクト、もしくは省略された場合はグローバルなエージェントオブジェクト<!-- END REF -->を格納します。

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->

## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### 説明

`.dataType` プロパティは、<!-- REF #HTTPRequestClass.dataType.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `dataType` を格納します (省略時は "auto"<!-- END REF -->)。

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->

## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### 説明

`.encoding` プロパティは、<!-- REF #HTTPRequestClass.encoding.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `encoding` を格納します (省略時は "UTF-8")<!-- END REF -->。

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->

## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### 説明

`.errors`プロパティは、<!-- REF #HTTPRequestClass.errors.Summary -->少なくとも 1つのエラーが発生した場合、全エラーのコレクションを格納します<!-- END REF -->。

`.errors` プロパティの内容は次の通りです:

| プロパティ  |                                                                                           | 型          | 説明                  |
| ------ | ----------------------------------------------------------------------------------------- | ---------- | ------------------- |
| errors |                                                                                           | Collection | エラー発生時の 4Dエラースタック   |
|        | [].errCode            | Number     | 4Dエラーコード            |
|        | [].message            | Text       | 4Dエラーの詳細            |
|        | [].componentSignature | Text       | エラーを返した内部コンポーネントの署名 |

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->

## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### 説明

`.headers` プロパティは、<!-- REF #HTTPRequestClass.headers.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `headers` を格納します<!-- END REF -->。 (省略された場合は空のオブジェクト)

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->

## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### 説明

`.method` プロパティは、<!-- REF #HTTPRequestClass.method.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `method` を格納します<!-- END REF -->。 (省略された場合は "GET")

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->

## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### 説明

`.protocol` プロパティは、<!-- REF #HTTPRequestClass.protocol.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `protocol` を格納します<!-- END REF -->。 (省略時、または "auto" の場合は、使用されたプロトコルのバージョン)

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->

## .response

<details><summary>履歴</summary>

| リリース  | 内容                                              |
| ----- | ----------------------------------------------- |
| 19 R8 | `.headers` は小文字の名前を返します。 `.rawHeaders` プロパティの追加 |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### 説明

`.response` プロパティは、<!-- REF #HTTPRequestClass.response.Summary -->少なくともステータスコードを受け取った場合には、リクエストへのレスポンスを格納します (それ以外の場合は未定義)<!-- END REF -->。

`response` オブジェクトは共有できないオブジェクトです。 このオブジェクトは次のプロパティを提供します:

| プロパティ                       | 型       | 説明                                                                                                                                                                                                         |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Variant | レスポンスのボディ。 メッセージのデータ型は [`dataType`](#datatype) プロパティによって定義されています。 ボディがまだ受信されていない場合は未定義です。                                                                                                                  |
| .headers    | Object  | レスポンスのヘッダー。 ヘッダー名は小文字で返されます。 `<headername>.key` = value (同じ key が複数指定されている場合、*value* はコレクションでありえます) ヘッダーがまだ受信されていない場合は未定義です。 ヘッダーがまだ受信されていない場合は未定義です。                                   |
| .status     | Number  | レスポンスのステータスコード                                                                                                                                                                                             |
| .statusText | Text    | ステータスコードを説明するメッセージ                                                                                                                                                                                         |
| .rawHeaders | Object  | レスポンスのヘッダー。 ヘッダー名はそのまま (大文字小文字を変えずに) 返されます。 `<headerName>.key` = value (同じ key が複数指定されている場合、*value* はコレクションでありえます) ヘッダーがまだ受信されていない場合は未定義です。 ヘッダーがまだ受信されていない場合は未定義です。 |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->

## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### 説明

`.returnResponseBody` プロパティは、<!-- REF #HTTPRequestClass.returnResponseBody.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された` returnResponseBody` を格納します<!-- END REF -->。 (省略された場合は true)。

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->

## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

> この関数はスレッドセーフです。

`.terminate()` 関数は、<!-- REF #HTTPRequestClass.terminate().Summary -->HTTPリクエストを中止します<!-- END REF -->。 また、`onTerminate` イベントをトリガーします。

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->

## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### 説明

`.terminated` プロパティは、<!-- REF #HTTPRequestClass.terminated.Summary -->リクエストが終了された場合 (`onTerminate` への呼び出し後) は true を格納します (それ以外は false)<!-- END REF -->。

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->

## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### 説明

`.timeout` プロパティは、<!-- REF #HTTPRequestClass.timeout.Summary -->[new()](#4dhttprequestnew) を呼び出す際に [`options`](#options-引数) オブジェクトに渡された `timeout` を格納します<!-- END REF -->。 (省略された場合は未定義)。

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->

## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### 説明

`.url` プロパティは、<!-- REF #HTTPRequestClass.url.Summary -->HTTPリクエストの URL を格納します<!-- END REF -->。

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->

## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : Real } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Params -->

| 引数   | 型                              |                             | 説明                                    |
| ---- | ------------------------------ | :-------------------------: | ------------------------------------- |
| time | Real                           |              ->             | レスポンスを待機する最長時間 (秒) |
| 戻り値  | 4D.HTTPRequest | <- | HTTPRequest オブジェクト                    |

<!-- END REF -->

#### 説明

> この関数はスレッドセーフです。

`wait()` 関数は、<!-- REF #HTTPRequestClass.wait().Summary -->サーバーのレスポンスを待ちます<!-- END REF -->。

*time* 引数が渡されると、関数は最長で、定義された秒数だけ待機します。

サーバーのレスポンスがすでに到着している場合、関数は即座に返されます。

`.wait()` の実行中、他の `HTTPRequest` や [`SystemWorker`](SystemWorkerClass.md) インスタンス、または他の [`CALL WORKER`](../commands-legacy/call-worker.md) の呼び出しによるコールバック関数は実行されます。 コールバックから [`terminate()`](#terminate) を呼び出すことで、`.wait()` を終了することができます。

<!-- END REF -->
