---
id: WebSocketConnectionClass
title: WebSocketConnection
---

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R8|Added|

</details>

The `WebSocketConnection` class API allows you to handle WebSocket connections, once established using the [`WebSocketServer` class API](WebSocketServerClass.md). 


### Example

This example of a basic chat feature illustrates how to handle messages in a WebSocket connection. See the example for the [WebSocketServer class](WebSocketServerClass.md#example) to know how the `4D.WebSocketConnection` object is instantiated. 

```4d
// WSConnectionHandler Class

Class constructor
Function onOpen($ws : 4D.WebSocketConnection; $message : Object)
	// Send a message to new connected users
	$ws.send("Welcome on the chat!")	
	// Send "New client connected" message to all other chat clients
	This.broadcast($ws;"New client connected")

Function onTerminate($ws : 4D.WebSocketConnection; $message : Object)
	// Send "Client disconnected" message to all other chat clients
	This.broadcast($ws;"Client disconnected")

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	// Resend the message to all chat clients	
	This.broadcast($ws;$message.data)

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

:::tip Client-Side JS

See [this blog post]( https://blog.4d.com/websocket-server/) for an example of client-side Javascript code handling a WebSocket connection.

:::


### WebSocketConnection object

A `WebSocketConnection` object is automatically created when the `WSHandler.onConnection` callback function of the [WebSocketServer object](WebSocketServerClass.md#4dwebsocketservernew) returns a `connectionHandler` object.

WebSocketConnection objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #WebSocketConnectionClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.handler.Summary -->|
|[<!-- INCLUDE #WebSocketConnectionClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.id.Summary -->|
|[<!-- INCLUDE #WebSocketConnectionClass.send().Syntax -->](#send())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.send().Summary -->|
|[<!-- INCLUDE #WebSocketConnectionClass.status.Syntax -->](#status)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.status.Summary -->|
|[<!-- INCLUDE #WebSocketConnectionClass.terminate().Syntax -->](#terminate())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.terminate().Summary -->|
|[<!-- INCLUDE #WebSocketConnectionClass.wss.Syntax -->](#wss)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.wss.Summary -->|



<!-- REF #WebSocketConnectionClass.handler.Desc -->
## .handler

<!-- REF #WebSocketConnectionClass.handler.Syntax -->**handler** : Object<!-- END REF -->

#### Description

The `.handler` property contains <!-- REF #WebSocketConnectionClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

<!-- END REF -->




<!-- REF #WebSocketConnectionClass.id.Desc -->
## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**id** : Integer<!-- END REF -->

#### Description

The `.id` property contains <!-- REF #WebSocketConnectionClass.id.Summary -->the unique identifier of the connection<!-- END REF -->.

This property is read-only.
<!-- END REF -->


<!-- REF #WebSocketConnectionClass.send().Desc -->
## .send()

<!-- REF #WebSocketConnectionClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->


<!-- REF #WebSocketConnectionClass.send().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|message|Text / Blob / Object|->|The message to send|<!-- END REF -->

#### Description

The `.send()` function <!-- REF #WebSocketConnectionClass.send().Summary -->sends a *message* to the client<!-- END REF -->.

<!-- END REF -->




<!-- REF #WebSocketConnectionClass.status.Desc -->
## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**status** : Text<!-- END REF -->

#### Description

The `.status` property contains <!-- REF #WebSocketConnectionClass.status.Summary -->the connection status (can be "Closing", "Closed" or  "Connected")<!-- END REF -->.

This property is read-only.
<!-- END REF -->



<!-- REF #WebSocketConnectionClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->


<!-- REF #WebSocketConnectionClass.terminate().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|code|Integer|->|Error code sent to the client (must be > 3000, otherwise the message is not sent)|
|message|Text|->|Error message sent to the client|<!-- END REF -->


#### Description

The `.terminate()` function <!-- REF #WebSocketConnectionClass.terminate().Summary -->forces the connection to close<!-- END REF -->. 

A *code* and *message* can be sent to the client during the closure to indicate the reason of the termination.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->
## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**wss** : 4D.WebSocketServer<!-- END REF -->

#### Description

The `.wss` property contains <!-- REF #WebSocketConnectionClass.wss.Summary -->the [`WebSocketServer`](WebSocketServerClass.md#4dwebsocketservernew) parent object of the connection<!-- END REF -->.

This property is read-only.
<!-- END REF -->

