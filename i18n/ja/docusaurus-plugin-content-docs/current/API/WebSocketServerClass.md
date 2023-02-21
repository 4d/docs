---
id: WebSocketServerClass
title: WebSocketServer
---

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>


The `WebSocketServer` class allows you to create and configure a WebSocket server in 4D. Once the 4D WebSocket server is active, you can open and use WebSocket connections between 4D and clients using the [`WebSocketConnection` class](WebSocketConnectionClass.md).

:::note About WebSocket Servers

The WebSocket protocol provides full-duplex communication channel between a WebSocket Server and a client (e.g. a Web browser). For more information on WebSocket servers, read [this page on Wikipedia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info See also

See also [this blog post](https://blog.4d.com/websocket-server/) about the 4D WebSocket server.

:::

### 要件

To create and handle your WebSocket Server in 4D, you will have to use two 4D build-in classes:

- this class (`4D.WebSocketServer`) to manage the server itself,
- the [`4D.WebSocketConnection`](WebSocketConnectionClass.md) class to manage connections and messages.

In addition, you will have to create two user classes that will contain callback functions:

- a user class to handle server connections,
- a user class to handle messages.

You must [create the WebSocket server](#4dwebsocketservernew) within a [worker](https://doc.4d.com/4dv19R/help/command/en/page1389.html) to keep the connection alive.

The [4D Web Server](WebServerClass.md) must started.


### 例題

In this basic example, our WebSocket server will return messages in uppercase.

1. Create the WebSocket server using a worker (mandatory) and pass your server connection class as parameter:

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

Function onConnection($wss : Object; $param : Object) : Object
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

### WebSocketServer object

WebSocket server objects provide the following properties and functions:

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.connections.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.dataType.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.path.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminated.Summary -->|



## 4D.WebSocketServer.new()


<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->


<!-- REF #4D.HTTPRequest.new().Params -->
| 引数                                  | タイプ                |    | 説明                                                                |
| ----------------------------------- | ------------------ |:--:| ----------------------------------------------------------------- |
| [WSSHandler](#wsshandler-parameter) | Object             | -> | Object of the user class declaring the WebSocket Server callbacks |
| [options](#options-parameter)       | Object             | -> | WebSocket configuration parameters                                |
| 戻り値                                 | 4D.WebSocketServer | <- | New WebSocketServer object|<!-- END REF -->


|


The `4D.WebSocketServer.new()` function <!-- REF #4D.WebSocketServer.new().Summary -->creates and starts a WebSocket server that will use the specified *WSSHandler* callbacks and (optionally) *options*, and returns a `4D.WebSocketServer` object<!-- END REF -->。

Calling this function requires that the [4D Web Server](WebServerClass.md) is started. The **host** and **port** of the WebSocket server are the same as the host and port of the 4D Web Server.




### *WSSHandler* parameter

In the *WSSHandler* parameter, pass an instance of a user class that will be called every time an event occurs on the WebSocket server --essentially, connection events. The class should define the following callback functions (only `onConnection` is mandatory):

| プロパティ        | タイプ                          | 説明                                                                       | デフォルト     |
| ------------ | ---------------------------- | ------------------------------------------------------------------------ | --------- |
| onConnection | [Function](FunctionClass.md) | (mandatory) Callback when a new client connection is started (see below) | undefined |
| onOpen       | [Function](FunctionClass.md) | Callback when the WebSocket server is started (see below)                | undefined |
| onTerminate  | [Function](FunctionClass.md) | Callback when the WebSocket server is terminated (see below)             | undefined |
| onError      | [Function](FunctionClass.md) | Callback when an error has occurred (see below)                          | undefined |


**WSHandler.onConnection**(*WSServer* : Object ; *param* : Object) : Object | null

| 引数          |         | タイプ                |    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------- | ------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer    |         | 4D.WebSocketServer | <- | Current WebSocket server object                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| param       |         | Object             | <- | 引数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|             | type    | Text               |    | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|             | request | Object             |    | `request` object. Contains information on the connection request (see below)                                                                                                                                                                                                                                                                                                                                                                                                        |
| ファンクションの戻り値 |         | Object             | -> | [`connectionHandler` object](#connectionhandler-object) (see below). If this function returns a `connectionHandler` object, a [`4D.WebSocketConnection` object](WebSocketConnectionClass.md#websocketconnection-object) is automatically created and added to the [collection of connections](#connections). This object is then received as parameter in each function of the `connectionHandler` object. If the returned value is null or undefined, the connection is cancelled. |

This callback is called when the handshake is complete. It must be called with a valid [`connectionHandler` object](#connectionhandler-object) to create the WebSocket connection, otherwise the connection is cancelled.


**WSHandler.onOpen**(*WSServer* : Object ; *param* : Object)

| 引数       |      | タイプ                |    | 説明                              |
| -------- | ---- | ------------------ |:--:| ------------------------------- |
| WSServer |      | 4D.WebSocketServer | <- | Current WebSocket server object |
| param    |      | Object             | <- | 引数                              |
|          | type | Text               |    | "open"                          |

Event emitted when the websocket server is started.


**WSHandler.onTerminate**(*WSServer* : Object ; *param* : Object)

| 引数       |      | タイプ                |    | 説明                              |
| -------- | ---- | ------------------ |:--:| ------------------------------- |
| WSServer |      | 4D.WebSocketServer | <- | Current WebSocket server object |
| param    |      | Object             | <- | 引数                              |
|          | type | Text               |    | "terminate"                     |

Event emitted when the HTTP server or the WebSocket server is closed.


**WSHandler.onError**(*WSServer* : Object ; *param* : Object)

| 引数       |            | タイプ                |    | 説明                                                                                                                                  |
| -------- | ---------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------------------------------------------- |
| WSServer |            | 4D.WebSocketServer | <- | Current WebSocket server object                                                                                                     |
| param    |            | Object             | <- | 引数                                                                                                                                  |
|          | type       | Text               |    | "error"                                                                                                                             |
|          | statusText | Text               |    | HTTP error or last error returned in the 4D error stack                                                                             |
|          | errors     | Collection         |    | Collection of 4D errors stack in case of execution error<li>[ ].errCode (number) -  4D error code</li><li>[ ].message (text) - Description of the 4D error</li><li>[ ].componentSignature (text) - Signature of the internal component which returned the error</li> |


Event emitted when an error occurs on the WebSocket server.

**WSHandler.onError**(*WSServer* : Object ; *param* : Object)

| 引数       |            | タイプ                |    | 説明                                                                                                                                  |
| -------- | ---------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------------------------------------------- |
| WSServer |            | 4D.WebSocketServer | <- | Current WebSocket server object                                                                                                     |
| param    |            | Object             | <- | 引数                                                                                                                                  |
|          | type       | Text               |    | "error"                                                                                                                             |
|          | statusText | Text               |    | HTTP error or last error returned in the 4D error stack                                                                             |
|          | errors     | Collection         |    | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |


Event emitted when an error occurs on the WebSocket server.

### Example of `WSSHandler` class

This example of a basic chat feature illustrates how to handle WebSocket server connections in a *WSSHandler* class.

```4d
//myWSServerHandler class 

Function onConnection($wss : Object; $param : Object) : Object

    If (VerifyAddress($param.request.remoteAddress))
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

Function onOpen($wss : Object; $param : Object)
LogFile("*** Server started")

Function onTerminate($wss : Object; $param : Object)
LogFile("*** Server closed")

Function onError($wss : Object; $param : Object)
LogFile("!!! Server error: "+$param.statusText)

```

### `request` object

A `request` object contains the following properties:

| 引数            | タイプ    | 説明                                                                                                                                                  |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | The client HTTP GET request. `headers.key=value` (value can be a collection if the same key appears multiple times)                                 |
| query         | Object | Object that contains the URL parameters. For example, if parameters are: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contains only the URL that is present in the actual HTTP request. Ex: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"                   |
| remoteAddress | Text   | IP Address of the client                                                                                                                            |


### `connectionHandler` object

As a result of the `WSHandler.onConnection` callback, pass a `connectionHandler` object, which is an instance of a user class that will be called every time an event occurs in the WebSocket connection --essentially, messages received. The class should define the following callback functions (only `onMessage` is mandatory):

| 引数          | タイプ                          | 説明                                                                              |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | (mandatory) Function called when a new message is received from this connection |
| onOpen      | [Function](FunctionClass.md) | Function called when the `4D.WebSocketConnection` is created                    |
| onTerminate | [Function](FunctionClass.md) | Function called when this connection is terminated                              |
| onError     | [Function](FunctionClass.md) | Function called when an error occured                                           |


**connectionHandler.onMessage**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| 引数    |      | タイプ                                                     |    | 説明                                  |
| ----- | ---- | ------------------------------------------------------- |:--:| ----------------------------------- |
| ws    |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Current WebSocket connection object |
| param |      | Object                                                  | <- | 引数                                  |
|       | type | Text                                                    |    | "message"                           |
|       | data | Text / Blob / Object                                    |    | data sent by the client             |

This Callback for WebSocket data. Called each time the WebSocket receives data.


**connectionHandler.onOpen**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| 引数    |      | タイプ                                                     |    | 説明                                  |
| ----- | ---- | ------------------------------------------------------- |:--:| ----------------------------------- |
| ws    |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Current WebSocket connection object |
| param |      | Object                                                  | <- | 引数                                  |
|       | type | Text                                                    |    | "open"                              |

Called when the `connectionHandler` object is created (after `WSS.onConnection` event).


**connectionHandler.onTerminate**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| 引数    |        | タイプ                                                     |    | 説明                                                                                                                                                                                      |
| ----- | ------ | ------------------------------------------------------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws    |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Current WebSocket connection object                                                                                                                                                     |
| param |        | Object                                                  | <- | 引数                                                                                                                                                                                      |
|       | type   | Text                                                    |    | "terminate"                                                                                                                                                                             |
|       | code   | Number                                                  |    | Status code indicating why the connection has been closed. If the WebSocket does not return an error code, `code` is set to 1005 if no error occurred or to 1006 if there was an error. |
|       | reason | Text                                                    |    | String explaining why the connection has been closed. If the websocket doesn't return an reason, code is undefined                                                                      |

Function called when the WebSocket is closed.

**connectionHandler.onError**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| 引数    |        |           | タイプ                                                     |    | 説明                                                                                                                                  |
| ----- | ------ | --------- | ------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------------------------- |
| ws    |        |           | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Current WebSocket connection object                                                                                                 |
| param |        |           | Object                                                  | <- | 引数                                                                                                                                  |
|       | type   |           | Text                                                    |    | "terminate"                                                                                                                         |
|       | status |           | Object                                                  |    |                                                                                                                                     |
|       |        | HTTPError | Text                                                    |    | HTTP error or last error returned in the 4D error stack                                                                             |
|       |        | errors    | Collection                                              |    | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |

Function called when an error has occurred.

### Example of `connectionHandler` class

This example of a basic chat feature illustrates how to handle messages in a *connectionHandler* class.

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


### *options* parameter

In the optional *options* parameter, pass an object that contains the following properties:

| プロパティ    | タイプ  | 説明                                                                                                                                                                                                                                                                                                                                           | デフォルト     |
| -------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| path     | Text | Represents the path to access the WebSocket server. If no path is defined, the WebSocket server manages all the connections                                                                                                                                                                                                                  | undefined |
| dataType | Text | Type of the data received through the `connectionHandler.onMessage` and the data send by [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) function. Values: "text", "blob","object"). If "object": (send) transforms object into a json format and sends it; (reception): receives json format and transforms it into object | text      |


<!-- REF #WebSocketServerClass.connections.Desc -->
## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**connections** : Collection<!-- END REF -->

#### 説明

The `.connections` property contains <!-- REF #WebSocketServerClass.connections.Summary -->all current connections handled by the WebSocket server<!-- END REF -->。 Each element of the collection is a [`WebSocketConnection` object](WebSocketConnectionClass.md).

When a connection is terminated, its [`status`](WebSocketConnectionClass.md#status) changes to "Closed" and it is removed from this collection.

<!-- END REF -->



<!-- REF #WebSocketServerClass.dataType.Desc -->
## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### 説明

`.dataType` プロパティは、 <!-- REF #WebSocketServerClass.dataType.Summary -->the type of the data received or sent<!-- END REF -->。

This property is read-only.
<!-- END REF -->


<!-- REF #WebSocketServerClass.handler.Desc -->
## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**handler** : Object<!-- END REF -->

#### 説明

The `.handler` property contains <!-- REF #WebSocketServerClass.handler.Summary -->the accessor that gets the `WSSHandler` object used to initiate the WebSocket server<!-- END REF -->。

<!-- END REF -->


<!-- REF #WebSocketServerClass.path.Desc -->
## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**path** : Text<!-- END REF -->

#### 説明

`.path` プロパティは、 <!-- REF #WebSocketServerClass.path.Summary -->the pattern of the path to access the WebSocket server<!-- END REF -->。 If no path was defined, the WebSocket server manages all connections.

This property is read-only.
<!-- END REF -->


<!-- REF #WebSocketServerClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate()**<!-- END REF -->


<!-- REF #WebSocketServerClass.terminate().Params -->
| 引数 | タイプ |  | 説明                                           |
| -- | --- |::| -------------------------------------------- |
|    |     |  | このコマンドは引数を必要としません|<!-- END REF -->


|


#### 説明

`.terminate()` 関数は、 <!-- REF #WebSocketServerClass.terminate().Summary -->closes the WebSocket server<!-- END REF -->。 

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->
## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### 説明

`.terminated` プロパティは、 <!-- REF #WebSocketServerClass.terminated.Summary -->True if the WebSocket server is closed<!-- END REF -->。

This property is read-only.
<!-- END REF -->

