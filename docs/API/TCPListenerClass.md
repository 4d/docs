---
id: TCPListenerClass
title: TCPListener
---

The `TCPListener` class allows you to create and configure a TCP server in 4D. Once the TCP listener is instantiated, you can receive client TCP connections and communicate using any protocol supporting TCP.

The `TCPListener` class is available from the `4D` class store. You can create a TCP server using the [4D.TCPListener.new()](#4dtcplistenernew) function, which returns a [TCPListener object](#tcplistener-object).

All `TCPListener` class functions are thread-safe.


<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R9|Class added|

</details>

### Example
***

### TCPListener Object

A TCPListener object is a shared object.

TCPListener objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #4D.TCPListener.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #4D.TCPConnection.terminate().Summary -->|


<!-- REF #4D.TCPListener.new().Desc -->
## 4D.TCPListener.new()


<!-- REF #4D.TCPListener.new().Syntax -->**4D.TCPListener.new**( *port* : Number ; *options* : Object  ) : 4D.TCPListener<!-- END REF -->

<!-- REF #4D.TCPListener.new().params -->
|Parameter|Type| |Description|
|---|---|---|---|
|port|Number|->|TCP port to listen|
|options|Object|->|Configuration [options](#options-parameter) for the listener|
|Result|4D.TCPListener|<-|New TCPListener object| 

<!-- END REF -->

#### Description


The `4D.TCPListener.new()` function <!-- REF #4D.TCPListener.new().Summary -->creates a new TCP server listening to the specified *port* using the defined *options*, and returns a `4D.TCPListener` object<!-- END REF -->.


#### `options` parameter

In the *options* parameter, pass an object to configure the listener and all the `TCPConnections` it creates:

|Property|Type|Description|Default|
|---|---|---|---|
|onConnection|Formula|Callback when a new connection is established. The Formula receives two parameters (*$listener* and *$event*, see below) and must return either null/undefined to prevent the connection or an *option* object that will be used to create the [`TCPConnection`](./TCPConnectionClass.md).|Undefined|
|onError|Formula|Callback triggered in case of an error. The Formula receives the `TCPListener` object in *$listener*|Undefined|
|onTerminate|Formula|Callback triggered just before the TCPListener is closed. The Formula receives the `TCPListener` object in *$listener*|Undefined|


#### Callback functions

Callback functions receive up to two parameters:

|Parameter|Type|Description|
|---|---|---|
|$listener|[`TCPListener` object](#tcplistener-object)|The current TCP listener instance.|
|$event|[`TCPEvent` object](#tcpevent-object)|Contains information about the event.|

**Sequence of Callback Calls:**

1. `onConnection` is triggered when the connection is established.
2. `onError` is triggered if an error occurs.
3. `onTerminate` is always triggered just before the `TCPConnection` is released (connection is closed or an error occured).


#### TCPEvent object

A [`TCPEvent`](TCPEventClass.md) object is returned when a [callback function](#callback-functions) is called.

<!-- END REF -->


<!-- REF #4D.TCPListener.terminate().Desc -->
## .terminate()

<!-- REF #4D.TCPListener.terminate().Syntax -->**.terminate**()<!-- END REF -->

<!-- REF #4D.TCPListener.terminate().params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `terminate()` function <!-- REF #4D.TCPListener.terminate().Summary -->closes the listener and releases the port<!-- END REF -->.


<!-- END REF -->

