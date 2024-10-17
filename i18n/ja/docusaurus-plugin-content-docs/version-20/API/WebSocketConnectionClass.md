---
id: WebSocketConnectionClass
title: WebSocketConnection
---

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

`WebSocketConnection` クラス API は、[`WebSocketServer` クラス](WebSocketServerClass.md) を使って確立された WebSocket 接続を管理するのに使用します。

:::info

4D における WebSocketサーバーの実装の概要といくつかの例題については、[`WebSocketServer` クラス](WebSocketServerClass.md) を参照ください。

:::


### WebSocketConnection オブジェクト

`WebSocketConnection` オブジェクトは、[WebSocketServer オブジェクト](WebSocketServerClass.md#4dwebsocketservernew) の [`WSHandler.onConnection`](WebSocketServerClass.md#wsshandler-引数) コールバック関数が [`connectionHandler`](WebSocketServerClass.md#connectionhandler-オブジェクト) オブジェクトを返すと自動的に作成されます。

WebSocketConnection オブジェクトは、次のプロパティと関数を提供します:

|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketConnectionClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.id.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.send().Syntax -->](#send())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.send().Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.status.Syntax -->](#status)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.status.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.terminate().Syntax -->](#terminate())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.wss.Syntax -->](#wss)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.wss.Summary -->|



<!-- REF #WebSocketConnectionClass.handler.Desc -->
## .handler

<!-- REF #WebSocketConnectionClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### 説明

`.handler` プロパティは、 <!-- REF #WebSocketConnectionClass.handler.Summary -->接続を開始するのに使用された `connectionHandler` オブジェクトを取得するアクセサーを格納します<!-- END REF -->.

<!-- END REF -->




<!-- REF #WebSocketConnectionClass.id.Desc -->
## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### 説明

`.id` プロパティは、 <!-- REF #WebSocketConnectionClass.id.Summary -->接続の一意な識別子を格納します<!-- END REF -->.

このプロパティは 読み取り専用 です。
<!-- END REF -->


<!-- REF #WebSocketConnectionClass.send().Desc -->
## .send()

<!-- REF #WebSocketConnectionClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->


<!-- REF #WebSocketConnectionClass.send().Params -->
| 引数      | 型                    |    | 説明                                   |
| ------- | -------------------- |:--:| ------------------------------------ |
| message | Text / Blob / Object | -> | 送信するメッセージ|<!-- END REF -->

|

#### 説明

`.send()` 関数は、 <!-- REF #WebSocketConnectionClass.send().Summary -->クライアントに *メッセージ* を送信します<!-- END REF -->.

*メッセージ* の型によって、以下の内容が送信されます:

| 型      | 内容                                                                                                    |
| ------ | ----------------------------------------------------------------------------------------------------- |
| Text   | UTF-8 のテキスト                                                                                           |
| BLOB   | バイナリデータ                                                                                               |
| Object | JSON UTF-8 のテキスト ([`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/ja/page1217.html) と同じ結果)。 |

<!-- END REF -->




<!-- REF #WebSocketConnectionClass.status.Desc -->
## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### 説明

`.status` プロパティは、 <!-- REF #WebSocketConnectionClass.status.Summary -->接続ステータスを格納します ("Closing"、"Closed"、"Connected" のいずれか)。<!-- END REF -->.

このプロパティは 読み取り専用 です。
<!-- END REF -->



<!-- REF #WebSocketConnectionClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->


<!-- REF #WebSocketConnectionClass.terminate().Params -->
| 引数      | 型       |    | 説明                                                        |
| ------- | ------- |:--:| --------------------------------------------------------- |
| code    | Integer | -> | クライアントに送信されるエラーコード (> 3000 である必要があり、そうでない場合メッセージは送信されません) |
| message | Text    | -> | クライアントに送信されるエラーメッセージ|<!-- END REF -->


|


#### 説明

`.terminate()` 関数は、 <!-- REF #WebSocketConnectionClass.terminate().Summary -->接続を強制終了します<!-- END REF -->.

終了時に、*code* と *message* をクライアントに送信し、終了の理由を示すことができます。

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->
## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**.wss** : 4D.WebSocketServer<!-- END REF -->

#### 説明

`.wss` プロパティは、 <!-- REF #WebSocketConnectionClass.wss.Summary -->接続の [`WebSocketServer`](WebSocketServerClass.md#4dwebsocketservernew) 親オブジェクトを格納します<!-- END REF -->.

このプロパティは 読み取り専用 です。
<!-- END REF -->

