---
id: WebSocketClass
title: WebSocket
---

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v20 R2|Added|

</details>


The `WebSocket` class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection.

WebSocket client connections are useful, for example, to receive financial data in real time or send and receive messages from a chat.


### WebSocket object

WebSocket objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.dataType.Summary -->|
|[<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.handler.Summary -->|
|[<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.id.Summary -->|
|[<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.send().Summary -->|
|[<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.status.Summary -->|
|[<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.terminate().Summary -->|
|[<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.url.Summary -->|



## 4D.WebSocket.new()


<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->


<!-- REF #4D.WebSocket.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|url|Text|->|URL to which to connect|
|[connectionHandler](#connectionHandler-parameter)|Object|->|Object declaring WebSocket callbacks|
|Result|4D.WebSocket|<-|New [WebSocket object](#websocket-object)|<!-- END REF -->


The `4D.WebSocket.new()` function <!-- REF #4D.WebSocket.new().Summary -->creates and returns a new [`4D.WebSocket` object](#websocket-object) connected to the WebSocket server at the address you passed in *url*<!-- END REF -->. The `4D.WebSocket` object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to an from the server.

In *url*, pass the URL to which the WebSocket server will respond.

If the connection is not possible, a `null` object is returned.


### *connectionHandler* parameter

In *connectionHandler*, you can pass an object containing callback functions to be called according to connection events, and data type to handle. Callbacks are called in the context of the dialog/worker that initiates the connection. The lifetime of the WebSocket must be at least the same as the lifetime of the dialog process/worker.

|Property|Type|Description|Default|
|---|---|---|---|
|onMessage|[Function](FunctionClass.md)|Callback function for WebSocket data. Called each time the WebSocket has received data. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "message"</li><li>`$2.data` (text, blob, or object, see `dataType`): Received data</li></ul>|undefined|
|onError|[Function](FunctionClass.md)|Callback function for execution errors. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "error"</li><li>`$2.errors`: collection of 4D errors stack in case of execution error.<ul><li>`[].errCode` (number): 4D error code</li><li>`[].message` (text): Description of the 4D error</li><li>`[].componentSignature` (text): Signature of the internal component which returned the error</li></ul></li></ul>|undefined|
|onTerminate|[Function](FunctionClass.md)|Callback function when the WebSocket is terminated. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.code` (number, read-only): unsigned short containing the close code sent by the server.</li><li>`$2.reason` (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol.</li><li>`$2.wasClean` (boolean, read-only): Indicates whether or not the connection was cleanly closed.</li></ul>|undefined|
|onOpen|[Function](FunctionClass.md)|Callback function when the websocket is open. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "open"</li></ul>|undefined|
|dataType|Text|Type of the data received or sent. Available values: "text", "blob", "object" ("text" = utf-8)|"text"|



<!-- REF #WebSocketClass.dataType.Desc -->
## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Description

The `.dataType` property contains <!-- REF #WebSocketClass.dataType.Summary -->the type of the response body content<!-- END REF -->. It can be "text", "blob", or "object".

This property is read-only.
<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->
## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Description

The `.handler` property contains <!-- REF #WebSocketClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

This property is read-only.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->
## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Longint<!-- END REF -->

#### Description

The `.id` property contains <!-- REF #WebSocketClass.id.Summary -->the unique identifier of the connection<!-- END REF -->.

This property is read-only.
<!-- END REF -->




<!-- REF #WebSocketClass.send().Desc -->
## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )**.send**( *message* : Object )<!-- END REF -->


<!-- REF #WebSocketClass.send().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|message|Text, Blob, Object|->|Message to be sent|
<!-- END REF -->


#### Description

The `.send()` function <!-- REF #WebSocketClass.send().Summary -->sends *message* to the WebSocket server in the defined data type (Text, Blob, or Object)<!-- END REF -->. 

<!-- END REF -->



<!-- REF #WebSocketClass.status.Desc -->
## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Description

The `.status` property contains <!-- REF #WebSocketClass.status.Summary -->the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")<!-- END REF -->.

This property is read-only.

<!-- END REF -->


<!-- REF #WebSocketClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->


<!-- REF #WebSocketClass.terminate().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|code|Integer|->|Status code explaining why the connection is being closed|
|reason|Text|->|The reason why the connection is closing|<!-- END REF -->



#### Description

The `.terminate()` function <!-- REF #WebSocketClass.terminate().Summary -->closes the WebSocket connection, along with optional *code* and *reason* parameters<!-- END REF -->.

In *code*, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5):

- If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed.
- If specified, the value of this code parameter overrides the automatic setting. The value must be an integer. Either 1000, or a custom code in the range 3000-4999. If you specify a *code* value, you should also specify a *reason* value.

In *reason*, you can pass a string describing why the connection is being closed. 


<!-- END REF -->


<!-- REF #WebSocketClass.url.Desc -->
## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Description

The `.url` property contains <!-- REF #WebSocketClass.connections.Summary -->the URL to which the WebSocket connects<!-- END REF -->. It should be the URL to which the WebSocket server will respond.

This property is read-only.

<!-- END REF -->






