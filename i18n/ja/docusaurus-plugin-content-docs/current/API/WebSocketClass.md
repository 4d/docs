---
id: WebSocketClass
title: WebSocket
---

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v20 R2 | 追加 |

</details>


`WebSocket` クラスを使用すると、サーバーとの WebSocket クライアント接続を開いて、データを送受信し、接続を閉じることができます。

WebSocketクライアント接続は、たとえばリアルタイムで財務データを受信したり、チャットでメッセージを送受信したりするのに便利です。

### 例題

この例題では、基本的な WebSocketクライアントを作成します。

1. WebSocket イベントコールバックを処理するためのコールバック関数を含む `WSConnectionHandler` ユーザークラスを作成します:

```4d
// WSConnectionHandler クラス

Class constructor

Function onMessage($ws : 4D.WebSocket; $event : Object)
   ALERT($event.data)

Function onTerminate($ws : 4D.WebSocket; $event : Object)
   ALERT("接続を終了しました")
```

2. 4D.WebSocket をインスタンス化して、4Dフォームから WebSocketサーバーに接続します:

```4d
Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())
```

3. 4Dフォームから WebSocketサーバーにメッセージを送るには、次のように書きます:

```4d
Form.webSocket.send("Hello world")

```




### WebSocket オブジェクト

WebSocketオブジェクトは、以下のプロパティと機能を提供します:

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.dataType.Summary -->|
| [<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.id.Summary -->|
| [<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.send().Summary -->|
| [<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.status.Summary -->|
| [<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.url.Summary -->|



## 4D.WebSocket.new()


<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->


<!-- REF #4D.WebSocket.new().Params -->
| 引数                                             | タイプ          |    | 説明                                                                  |
| ---------------------------------------------- | ------------ |:--:| ------------------------------------------------------------------- |
| url                                            | Text         | -> | 接続先の URL                                                            |
| [connectionHandler](#connectionHandler-パラメーター) | Object       | -> | WebSocket用コールバックを宣言しているオブジェクト                                       |
| 戻り値                                            | 4D.WebSocket | <- | 新規の [WebSocketオブジェクト](#websocket-オブジェクト)|<!-- END REF -->


|


`4D.WebSocket.new()` 関数は、 <!-- REF #4D.WebSocket.new().Summary -->*url* で指定したアドレスの WebSocketサーバーに接続された新しい [`4D.WebSocket` オブジェクト](#websocket-オブジェクト) を作成して返します<!-- END REF -->。 `4D.WebSocket` オブジェクトは、サーバーとの WebSocket接続の作成と管理、およびデータの送受信のための API を提供します。

*url*には、WebSocketサーバーが応答する URL を渡します。 以下の URLパターンが使用できます:

- 標準接続用: `ws://host[:port]path[?query]`
- TLSセキュア接続用: `wss://host[:port]path[?query]`

接続できない場合、`null` オブジェクトが返され、エラーが生成されます (このエラーは `ON ERR CALL` で実装したメソッドによっtwインターセプトできます)。


### *connectionHandler* パラメーター

*connectionHandler* には、接続イベントや処理するデータ型に応じて呼び出されるコールバック関数を含むオブジェクトを渡すことができます。

- コールバックは、接続を開始したフォームまたはワーカーのコンテキストで自動的に呼び出されます。
- The lifetime of the WebSocket must be at least the same as the lifetime of the form or worker.

| プロパティ       | タイプ                          | 説明                                                                                                                                                      |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | WebSocket データ用のコールバック関数。 WebSocket がデータを受信するたびに呼び出されます。 コールバックは以下の引数を受け取ります:<li>`$1`: WebSocket オブジェクト</li><li>`$2`: Object</li><ul><li>`$2.type` (text): 常に "message"</li><li>`$2.data` (text, BLOB, または object。`dataType` 参照): 受信データ</li></ul> |
| onError     | [Function](FunctionClass.md) | 実行エラー用のコールバック関数。 コールバックは以下の引数を受け取ります:<li>`$1`: WebSocket オブジェクト</li><li>`$2`: Object</li><ul><li>`$2.type` (text): 常に "error"</li><li>`$2.errors`: collection of 4D errors stack in case of execution error.<ul><li>`[].errCode` (number): 4D error code</li><li>`[].message` (text): Description of the 4D error</li><li>`[].componentSignature` (text): Signature of the internal component which returned the error</li></ul></li></ul>                                        |
| onTerminate | [Function](FunctionClass.md) | Callback function when the WebSocket is terminated. コールバックは以下の引数を受け取ります:<li>`$1`: WebSocket オブジェクト</li><li>`$2`: Object</li><ul><li>`$2.code` (number, read-only): unsigned short containing the close code sent by the server.</li><li>`$2.reason` (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol.</li><li>`$2.wasClean` (boolean, read-only): Indicates whether or not the connection was cleanly closed.</li></ul>     |
| onOpen      | [Function](FunctionClass.md) | Callback function when the websocket is open. コールバックは以下の引数を受け取ります:<li>`$1`: WebSocket オブジェクト</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "open"</li></ul>        |
| dataType    | Text                         | Type of the data received or sent. Available values: "text" (default), "blob", "object". "text" = utf-8                                                 |

以下は、コールバック呼び出しの流れです:

1. `onOpen` is executed once
2. Zero or several `onMessage` are executed
3. Zero or one `onError` is executed (stops the processing)
4. `onTerminate` は常に実行されます。


#### 例題


<!-- REF #WebSocketClass.dataType.Desc -->
## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### 説明

`.dataType` プロパティは、 <!-- REF #WebSocketClass.dataType.Summary -->the type of the response body content<!-- END REF -->。 It can be "text", "blob", or "object".

このプロパティは 読み取り専用 です。
<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->
## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### 説明

`.handler` プロパティは、 <!-- REF #WebSocketClass.handler.Summary -->接続を開始するのに使用された `connectionHandler` オブジェクトを取得するアクセサーを格納します<!-- END REF -->。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->
## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Longint<!-- END REF -->

#### 説明

`.id` プロパティは、 <!-- REF #WebSocketClass.id.Summary -->接続の一意な識別子を格納しあmす<!-- END REF -->。

このプロパティは 読み取り専用 です。
<!-- END REF -->




<!-- REF #WebSocketClass.send().Desc -->
## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->


<!-- REF #WebSocketClass.send().Params -->
| 引数      | タイプ                |    | 説明                 |
| ------- | ------------------ |:--:| ------------------ |
| message | Text, Blob, Object | -> | Message to be sent |
<!-- END REF -->


#### 説明

`.send()` 関数は、 <!-- REF #WebSocketClass.send().Summary -->sends *message* to the WebSocket server in the defined data type (Text, Blob, or Object)<!-- END REF -->。

*メッセージ* の型によって、以下の内容が送信されます:

| タイプ    | 内容                                                                                                    |
| ------ | ----------------------------------------------------------------------------------------------------- |
| Text   | UTF-8 のテキスト                                                                                           |
| Blob   | バイナリデータ                                                                                               |
| Object | JSON UTF-8 のテキスト ([`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/ja/page1217.html) と同じ結果)。 |


<!-- END REF -->



<!-- REF #WebSocketClass.status.Desc -->
## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### 説明

`.status` プロパティは、 <!-- REF #WebSocketClass.status.Summary -->the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")<!-- END REF -->。

このプロパティは 読み取り専用 です。

<!-- END REF -->


<!-- REF #WebSocketClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->


<!-- REF #WebSocketClass.terminate().Params -->
| 引数     | タイプ     |    | 説明                                                                  |
| ------ | ------- |:--:| ------------------------------------------------------------------- |
| code   | Integer | -> | Status code explaining why the connection is being closed           |
| reason | Text    | -> | The reason why the connection is closing|<!-- END REF -->



|



#### 説明

`.terminate()` 関数は、 <!-- REF #WebSocketClass.terminate().Summary -->closes the WebSocket connection, along with optional *code* and *reason* parameters<!-- END REF -->。

In *code*, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed.
- If specified, the value of this code parameter overrides the automatic setting. The value must be an integer. Either 1000, or a custom code in the range 3000-4999. If you specify a *code* value, you should also specify a *reason* value.

In *reason*, you can pass a string describing why the connection is being closed. 


<!-- END REF -->


<!-- REF #WebSocketClass.url.Desc -->
## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### 説明

`.url` プロパティは、 <!-- REF #WebSocketClass.connections.Summary -->the URL to which the WebSocket has connected<!-- END REF -->。 It is the URL you passed to the [`new()`](#4dwebsocketnew) function.

このプロパティは 読み取り専用 です。

<!-- END REF -->






