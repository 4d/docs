---
id: TCPConnectionClass
title: TCPConnection
---

The `TCPConnection` class allows you to manage Transmission Control Protocol (TCP) client connections to a server, enabling you to send and receive data, and handle connection lifecycle events using callbacks.

The `TCPConnection` class is available from the `4D` class store. You can create a TCP connection using the [4D.TCPConnection.new()](#4dtcpconnectionnew) function, which returns a [TCPConnection object](#tcpconnection-object).

All `TCPConnection` class functions are thread-safe.
 
<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R8|Class added|

</details>

### Example

The following examples demonstrate how to use the 4D.TCPConnection and 4D.TCPEvent classes to manage a TCP client connection, handle events, send data, and properly close the connection.

Define and set up callback functions:

```4d

property result : Object
property noDelay : Boolean

Class constructor()
This.noDelay:=True
This.result:={data: ""; type: ""}

Function onConnection($client : 4D.TCPConnection; $event : 4D.TCPEvent)
This.result.type:=$event.type

Function onData($client : 4D.TCPConnection; $event : 4D.TCPEvent)
This.result.data:=$event.data
This.result.type:=$event.type

Function onError($client : 4D.TCPConnection; $event : 4D.TCPEvent)

Function onTerminate($client : 4D.TCPConnection; $event : 4D.TCPEvent)

Function onShutdown($client : 4D.TCPConnection; $event : 4D.TCPEvent)
```

You can use the 4D.TCPConnection class to establish a connection, send data, and shut it down:

```4d
var $domain : Text:="127.0.0.1"
var $port : Integer:=10000
var $timeout : Integer:=1
var $options : cs.Options
var $tcpClient : 4D.TCPConnection
var $message : Text:="test message"

//Open a connection
$options:=cs.Options.new()
$tcpClient:=4D.TCPConnection.new($domain; $port; $options)
$tcpClient.wait($timeout)

//Send data
If ($options.result.type="connection")
var $blobData : Blob
SET BLOB SIZE($blobData; 0)
TEXT TO BLOB($message; $blobData; UTF8 text without length)
$result:=$tcpClient.send($blobData)
$tcpClient.wait($timeout)
Else
ALERT("connection error")
End if

//Showdown
$tcpClient.shutdown()
$tcpClient.wait($timeout)

```

### TCPConnection Object

A TCPConnection object is a non-sharable object.

TCPConnection objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE ##4D.TCPConnection.closed.Syntax -->](#closed)<br/><!-- INCLUDE ##4D.TCPConnection.closed.Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.errors.Syntax -->](#errors)<br/><!-- INCLUDE #4D.TCPConnection.errors.Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.noDelay.Syntax -->](#noDelay)<br/><!-- INCLUDE #4D.TCPConnection.noDelay.Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.send().Syntax -->](#send)<br/><!-- INCLUDE #4D.TCPConnection.send().Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.shutdown().Syntax -->](#shutdown)<br/><!-- INCLUDE #4D.TCPConnection.shutdown().Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.wait().Syntax -->](#wait)<br/><!-- INCLUDE #4D.TCPConnection.wait().Summary -->|


<!-- REF #4D.TCPConnection.new().Desc -->
## 4D.TCPConnection.new()


<!-- REF #4D.TCPConnection.new().Syntax -->**4D.TCPConnection.new**( *serverAddress* : Text ; *serverPort* : Number ; *options* : Object  ) : 4D.TCPConnection<!-- END REF -->


<!-- REF #4D.TCPConnection.new().Params -->
|Parameter|Type| |Description|
|---|---|---|---|
|serverAddress|Text|->|Domain name or IP address of the server|
|serverPort|Number|->|Port number of the server|                          
|options|Object|->|Configuration [options](#options-parameter) for the connection|
|Result|TCPConnection|<-|New TCPConnection object|                                

<!-- END REF -->

#### Description


The `4D.TCPConnection.new()` function <!-- REF #4D.TCPConnection.new().Summary -->creates a new TCP connection to the specified *serverAddress* and *serverPort*, using the defined *options*, and returns a `4D.HTTPRequest` object<!-- END REF -->.


#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties:

|Property|Type|Description|Default|
|---|---|---|---|
|onConnection|Formula|Callback triggered when the connection is established.|Undefined|
|onData|Formula|Callback triggered when data is received|Undefined|
|onShutdown|Formula|Callback triggered when the connection is properly closed|Undefined|
|onError|Formula|Callback triggered in case of an error|Undefined|
|onTerminate|Formula|Callback triggered just before the connection is released|Undefined|
|noDelay|Boolean|Disables Nagle's algorithm if `true`|False|


#### Callback functions

All callback functions receive two parameters:

|Parameter|Type|Description|
|---|---|---|
|$connection|[`TCPConnection` object](#tcpconnection-object)|The current TCP connection instance.|
|$event|[`TCPEvent` object](#tcpevent-object)|Contains information about the event.|

**Sequence of Callback Calls:**

1. `onConnection` is triggered when the connection is established.
2. `onData` is triggered each time data is received.
3. `onShutdown` is triggered when the connection is properly closed.
4. `onError` is triggered if an error occurs.
5. `onTerminate` is always triggered just before the connection is released (connection is closed or an error occured).


#### TCPEvent object

A [`TCPEvent`](TCPEventClass.md) object is returned when a [callback function](#callback-functions) is called.

<!-- END REF -->

<!-- REF #4D.TCPConnection.closed.Desc -->
## .closed

<!-- REF #4D.TCPConnection.closed.Syntax -->**closed** : Boolean<!-- END REF -->

#### Description

The `.closed` property contains <!-- REF #4D.TCPConnection.closed.Summary -->whether the connection is closed<!-- END REF -->. Returns `true` if the connection is closed, either due to an error, a call to `shutdown()`, or closure by the server.

<!-- END REF -->

<!-- REF #4D.TCPConnection.errors.Desc -->
## .errors

<!-- REF #4D.TCPConnection.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Description

The `.errors` property contains <!-- REF #4D.TCPConnection.errors.Summary -->a collection of error objects associated with the connection<!-- END REF -->. Each error object includes the error code, a description, and the signature of the component that caused the error.

|Property||Type|Description|
|---|---|---|---|
|errors||Collection|4D error stack in case of error|
||[].errCode|Number|4D error code|
||[].message|Text|Description of the 4D error|
||[].componentSignature|Text|Signature of the internal component which returned the error|


<!-- END REF -->

<!-- REF #4D.TCPConnection.noDelay.Desc -->
## .noDelay

<!-- REF #4D.TCPConnection.noDelay.Syntax -->**noDelay** : Boolean<!-- END REF -->

#### Description

The `.noDelay` property contains <!-- REF #4D.TCPConnection.noDelay.Summary -->whether Nagle's algorithm is disabled (`true`) or enabled (`false`)<!-- END REF -->.


<!-- END REF -->

<!-- REF #4D.TCPConnection.send().Desc -->
## .send()

<!-- REF #4D.TCPConnection.send().Syntax -->**.send**( *data* : Blob )<!-- END REF -->

<!-- REF #4D.TCPConnection.send().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|data|Blob|->|Data to be sent|
<!-- END REF -->

#### Description

The `send()` function <!-- REF #4D.TCPConnection.send().Summary -->sends data to the server<!-- END REF -->. If the connection is not established yet, the data is sent once the connection is established.

<!-- END REF -->

<!-- REF #4D.TCPConnection.shutdown().Desc -->
## .shutdown()

<!-- REF #4D.TCPConnection.shutdown().Syntax -->**.shutdown**()<!-- END REF -->

<!-- REF #4D.TCPConnection.shutdown().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `shutdown()` function <!-- REF #4D.TCPConnection.shutdown().Summary --> closes the TCP connection<!-- END REF -->.


<!-- END REF -->

<!-- REF #4D.TCPConnection.wait().Desc -->
## .wait()

<!-- REF #4D.TCPConnection.wait().Syntax -->**.wait**( { *timeout* : Number } )<!-- END REF -->

<!-- REF #4D.TCPConnection..wait().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|time|Integer|->|The maximum wait time in seconds|
<!-- END REF -->

#### Description

The `wait()` function <!-- REF #4D.TCPConnection.wait().Summary -->waits until the connection is closed or the specified timeout is reached<!-- END REF -->.

<!-- END REF -->

