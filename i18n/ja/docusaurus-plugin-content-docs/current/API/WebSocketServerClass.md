---
id: WebSocketServerClass
title: WebSocketServer
---

<details><summary>History</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>

The `WebSocketServer` class allows you to create and configure a WebSocket server in 4D. Once the 4D WebSocket server is active, you can open and use WebSocket connections between 4D and clients using the [`WebSocketConnection` class](WebSocketConnectionClass.md).

:::note About WebSocket Servers

WebSocketプロトコルは、WebSocketサーバーとクライアント (Webブラウザーなど) の間の双方向通信のチャンネルを提供します。 For more information on WebSocket servers, read [this page on Wikipedia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info 参照

See also [this blog post](https://blog.4d.com/new-built-in-websocket-server/) about the 4D WebSocket server.

:::

### 要件

4D で WebSocketサーバーを作成し、扱うには、4Dビルトインクラスを 2つ使用する必要があります。

- this class (`4D.WebSocketServer`) to manage the server itself,
- the [`4D.WebSocketConnection`](WebSocketConnectionClass.md) class to manage connections and messages.

さらに、2つのユーザークラスを作成し、コールバック関数を定義する必要があります:

- サーバー接続を処理するためのユーザークラス
- メッセージを処理するためのユーザークラス

You must [create the WebSocket server](#4dwebsocketservernew) within a [worker](https://doc.4d.com/4dv19R/help/command/en/page1389.html) to keep the connection alive.

The [4D Web Server](WebServerClass.md) must be started.

### 例題

この基本的な例では、WebSocketサーバーはメッセージを大文字で返します。

1. ワーカーを使用して (必須) WebSocketサーバーを作成し、サーバー接続処理用のユーザークラスをパラメーターとして渡します。

```4d
	//create an instance of the user class
	//that will handle the connections to the server
var $handler:cs.myServerHandler
$handler:=cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss:=4D.WebSocketServer.new($handler)))  
	//assign a variable (wss) to the WebSocket allows you  
	//to call wss.terminate() afterwards
```

2. Define the `myServerHandler` user class containing callback function(s) used to handle connections to the server:

```4d
//myServerHandler class

Function onConnection($wss : Object; $event : Object) : Object
	//returns an instance of the user class
	//that will handle the messages
	return cs.myConnectionHandler.new() 
```

3. Define the `myConnectionHandler` user class containing callback function(s) used to handle messages:

```4d
// myConnectionHandler class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	//resends the message in uppercase	
	$ws.send(Uppercase($message.data))

```

:::tip Client-Side JS

See [this blog post](https://blog.4d.com/websocket-server/) for an example of client-side Javascript code handling a WebSocket connection.

:::

### WebSocketServer オブジェクト

WebSocketサーバーオブジェクトは、以下のプロパティと機能を提供します:

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.connections.Summary --> |
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.dataType.Summary -->          |
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.handler.Summary -->             |
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.path.Summary -->                      |
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminate().Summary -->   |
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminated.Summary -->    |

## 4D.WebSocketServer.new()

<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->

<!-- REF #4D.WebSocketServer.new().Params -->

| 引数                                  | タイプ                |     | 説明                                        |                  |
| ----------------------------------- | ------------------ | :-: | ----------------------------------------- | ---------------- |
| [WSSHandler](#wsshandler-parameter) | Object             |  -> | WebSocketサーバー用コールバックを宣言しているユーザークラスのオブジェクト |                  |
| [options](#options-parameter)       | Object             |  -> | WebSocket の設定パラメーター                       |                  |
| 戻り値                                 | 4D.WebSocketServer |  <- | New WebSocketServer object                | <!-- END REF --> |

The `4D.WebSocketServer.new()` function <!-- REF #4D.WebSocketServer.new().Summary -->creates and starts a WebSocket server that will use the specified _WSSHandler_ callbacks and (optionally) _options_, and returns a `4D.WebSocketServer` object<!-- END REF -->.

Calling this function requires that the [4D Web Server](WebServerClass.md) is started. The **host** and **port** of the WebSocket server are the same as the host and port of the 4D Web Server.

### _WSSHandler_ parameter

In the _WSSHandler_ parameter, pass an instance of a user class that will be called every time an event occurs on the WebSocket server --essentially, connection events. The class should define the following callback functions (only `onConnection` is mandatory):

| プロパティ        | タイプ                          | 説明                                  | デフォルト     |
| ------------ | ---------------------------- | ----------------------------------- | --------- |
| onConnection | [Function](FunctionClass.md) | (必須) 新規クライアント接続が開始した時のコールバック (後述参照) | undefined |
| onOpen       | [Function](FunctionClass.md) | WebSocketサーバーが起動した時のコールバック (後述参照)   | undefined |
| onTerminate  | [Function](FunctionClass.md) | WebSocketサーバーが終了した時のコールバック (後述参照)   | undefined |
| onError      | [Function](FunctionClass.md) | エラーが発生した時のコールバック (後述参照)             | undefined |

**WSHandler.onConnection**(_WSServer_ : Object ; _event_ : Object) : Object | null

| 引数       |         | タイプ                |     | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------- | ------- | ------------------ | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer |         | 4D.WebSocketServer |  <- | カレントの WebSocketサーバーオブジェクト                                                                                                                                                                                                                                                                                                                                                                                                                         |
| event    |         | Object             |  <- | 引数                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|          | type    | Text               |     | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|          | request | Object             |     | `request` object. 接続要求に関する情報を格納します (後述参照)                                                                                                                                                                                                                                                                                                                                                                                                         |
| 戻り値      |         | Object             |  -> | [`connectionHandler` object](#connectionhandler-object) (see below). If this function returns a `connectionHandler` object, a [`4D.WebSocketConnection` object](WebSocketConnectionClass.md#websocketconnection-object) is automatically created and added to the [collection of connections](#connections). This object is then received as parameter in each function of the `connectionHandler` object. 戻り値が null または undefined の場合、接続は解除されます。 |

このコールバックは、ハンドシェイクが完了したときに呼び出されます。 It must be called with a valid [`connectionHandler` object](#connectionhandler-object) to create the WebSocket connection, otherwise the connection is cancelled.

**WSHandler.onOpen**(_WSServer_ : Object ; _event_ : Object)

| 引数       |      | タイプ                |     | 説明                        |
| -------- | ---- | ------------------ | :-: | ------------------------- |
| WSServer |      | 4D.WebSocketServer |  <- | カレントの WebSocketサーバーオブジェクト |
| event    |      | Object             |  <- | 引数                        |
|          | type | Text               |     | "open"                    |

WebSocketサーバーが起動したときに発生するイベントです。

**WSHandler.onTerminate**(_WSServer_ : Object ; _event_ : Object)

| 引数       |      | タイプ                |     | 説明                        |
| -------- | ---- | ------------------ | :-: | ------------------------- |
| WSServer |      | 4D.WebSocketServer |  <- | カレントの WebSocketサーバーオブジェクト |
| event    |      | Object             |  <- | 引数                        |
|          | type | Text               |     | "terminate"               |

HTTPサーバーまたは WebSocketサーバーが終了したときに発生するイベントです。

**WSHandler.onError**(_WSServer_ : Object ; _event_ : Object)

| 引数       |        | タイプ                |     | 説明                                                                                                                                                                                                                                                                  |
| -------- | ------ | ------------------ | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer |        | 4D.WebSocketServer |  <- | カレントの WebSocketサーバーオブジェクト                                                                                                                                                                                                                                           |
| event    |        | Object             |  <- | 引数                                                                                                                                                                                                                                                                  |
|          | type   | Text               |     | "error"                                                                                                                                                                                                                                                             |
|          | errors | Collection         |     | Collection of 4D error stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |

WebSocketサーバーでエラーが発生したときに発生するイベントです。

### Example of `WSSHandler` class

This example of a basic chat feature illustrates how to handle WebSocket server connections in a _WSSHandler_ class.

```4d
//myWSServerHandler class 

Function onConnection($wss : Object; $event : Object) : Object

	If (VerifyAddress($event.request.remoteAddress))
		// The VerifyAddress method validates the client address
		// The returned WSConnectionHandler object will be used 
		// by 4D to instantiate the 4D.WebSocketConnection object
		// related to this connection
		return cs.myConnectionHandler.new()   
		// See connectionHandler object
	Else 
		// The connection is cancelled		
		return Null 
	End if 

Function onOpen($wss : Object; $event : Object)
LogFile("*** Server started")

Function onTerminate($wss : Object; $event : Object)
LogFile("*** Server closed")

Function onError($wss : Object; $event : Object)
LogFile("!!! Server error: "+$event.errors.first().message)

```

### `request` object

A `request` object contains the following properties:

| 引数            | タイプ    | 説明                                                                                                                      |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | クライアントの HTTP GET リクエスト。 `headers.key=value` (value can be a collection if the same key appears multiple times)          |
| query         | Object | URL 引数を含むオブジェクト。 For example, if parameters are: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | 実際の HTTPリクエストにおける URL の部分を格納します。 Ex: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"                        |
| remoteAddress | Text   | クライアントの IPアドレス                                                                                                          |

### `connectionHandler` object

As a result of the `WSHandler.onConnection` callback, pass a `connectionHandler` object, which is an instance of a user class that will be called every time an event occurs in the WebSocket connection --essentially, messages received. The class should define the following callback functions (only `onMessage` is mandatory):

| 引数          | タイプ                          | 説明                                                           |
| ----------- | ---------------------------- | ------------------------------------------------------------ |
| onMessage   | [Function](FunctionClass.md) | (必須) この接続から新しいメッセージを受信したときに呼び出される関数                          |
| onOpen      | [Function](FunctionClass.md) | Function called when the `4D.WebSocketConnection` is created |
| onTerminate | [Function](FunctionClass.md) | 接続が終了したときに呼び出される関数                                           |
| onError     | [Function](FunctionClass.md) | エラーが発生したときに呼び出される関数                                          |

**connectionHandler.onMessage**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| 引数    |      | タイプ                                                     |     | 説明                       |
| ----- | ---- | ------------------------------------------------------- | :-: | ------------------------ |
| ws    |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | カレントの WebSocket 接続オブジェクト |
| event |      | Object                                                  |  <- | 引数                       |
|       | type | Text                                                    |     | "message"                |
|       | data | Text / Blob / Object                                    |     | クライアントから送信されたデータ         |

WebSocket データ用のコールバックです。 WebSocket がデータを受信するたびに呼び出されます。

**connectionHandler.onOpen**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| 引数    |      | タイプ                                                     |     | 説明                       |
| ----- | ---- | ------------------------------------------------------- | :-: | ------------------------ |
| ws    |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | カレントの WebSocket 接続オブジェクト |
| event |      | Object                                                  |  <- | 引数                       |
|       | type | Text                                                    |     | "open"                   |

Called when the `connectionHandler` object is created (after `WSS.onConnection` event).

**connectionHandler.onTerminate**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| 引数    |        | タイプ                                                     |     | 説明                                                                                                                                                  |
| ----- | ------ | ------------------------------------------------------- | :-: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws    |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | カレントの WebSocket 接続オブジェクト                                                                                                                            |
| event |        | Object                                                  |  <- | 引数                                                                                                                                                  |
|       | type   | Text                                                    |     | "terminate"                                                                                                                                         |
|       | code   | Number                                                  |     | 接続が切断された理由を示すステータスコード。 If the WebSocket does not return an error code, `code` is set to 1005 if no error occurred or to 1006 if there was an error. |
|       | reason | Text                                                    |     | 接続が切断された理由を説明するテキスト。 WebSocket が理由を返さない場合、reason は未定義です。                                                                                            |

WebSocket 終了したときに呼び出されます。

**connectionHandler.onError**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| 引数    |        |            | タイプ                                                     |                                                                                                                                                                                                                                                                      | 説明                       |
| ----- | ------ | ---------- | ------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------ |
| ws    |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                                                                                  <-                                                                                                                                  | カレントの WebSocket 接続オブジェクト |
| event |        |            | Object                                                  |                                                                                                                                  <-                                                                                                                                  | 引数                       |
|       | type   |            | Text                                                    |                                                                                                                                                                                                                                                                      | "error"                  |
|       | errors | Collection |                                                         | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |                          |

エラーが発生したときに呼び出されます。

### Example of `connectionHandler` class

This example of a basic chat feature illustrates how to handle messages in a _connectionHandler_ class.

```4d
// myConnectionHandler Class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	// Resend the message to all chat clients	
	This.broadcast($ws;$message.data)

Function onOpen($ws : 4D.WebSocketConnection; $message : Object)
	// Send a message to new connected users
	$ws.send("Welcome on the chat!")	
	// Send "New client connected" message to all other chat clients
	This.broadcast($ws;"New client connected")

Function onTerminate($ws : 4D.WebSocketConnection; $message : Object)
	// Send "Client disconnected" message to all other chat clients
	This.broadcast($ws;"Client disconnected")

Function broadcast($ws : 4D.WebSocketConnection; $message:text)
	var $client:4D.WebSocketConnection
	// Resend the message to all chat clients
	For each ($client; $ws.wss.connections)
		// Check that the id is not the current connection
		If ($client.id#$ws.id)
			$client.send($message)
		End if 
	End for each 

```

### _options_ parameter

In the optional _options_ parameter, pass an object that contains the following properties:

| プロパティ    | タイプ  | 説明                                                                                                                                                                                                                                                                            | デフォルト     |
| -------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| path     | Text | WebSocketサーバーにアクセスするためのパス。 パスが定義されていない場合、WebSocketサーバーはすべての接続を管理します                                                                                                                                                                                                           | undefined |
| dataType | Text | Type of the data received through the `connectionHandler.onMessage` and the data send by [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) function. 値: "text", "blob", "object"。 "object" の場合: (送信) object を json形式に変換して送信します; (受信) json形式を受信して object に変換します | text      |

<!-- REF #WebSocketServerClass.connections.Desc -->

## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### 説明

The `.connections` property contains <!-- REF #WebSocketServerClass.connections.Summary -->all current connections handled by the WebSocket server<!-- END REF -->. Each element of the collection is a [`WebSocketConnection` object](WebSocketConnectionClass.md).

When a connection is terminated, its [`status`](WebSocketConnectionClass.md#status) changes to "Closed" and it is removed from this collection.

<!-- END REF -->

<!-- REF #WebSocketServerClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### 説明

The `.dataType` property contains <!-- REF #WebSocketServerClass.dataType.Summary -->the type of the data received or sent<!-- END REF -->.

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketServerClass.handler.Desc -->

## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### 説明

The `.handler` property contains <!-- REF #WebSocketServerClass.handler.Summary -->the accessor that gets the `WSSHandler` object used to initiate the WebSocket server<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.path.Desc -->

## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

The `.path` property contains <!-- REF #WebSocketServerClass.path.Summary -->the pattern of the path to access the WebSocket server<!-- END REF -->. パスが定義されなかった場合、WebSocketサーバーはすべての接続を管理します。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Params -->

| 引数 | タイプ |     | 説明         |                  |
| -- | --- | :-: | ---------- | ---------------- |
|    |     |     | 引数を必要としません | <!-- END REF --> |

#### 説明

The `.terminate()` function <!-- REF #WebSocketServerClass.terminate().Summary -->closes the WebSocket server<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->

## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### 説明

The `.terminated` property contains <!-- REF #WebSocketServerClass.terminated.Summary -->True if the WebSocket server is closed<!-- END REF -->.

このプロパティは 読み取り専用 です。

<!-- END REF -->
