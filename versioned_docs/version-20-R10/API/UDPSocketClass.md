---
id: UDPSocketClass
title: UDPSocket
---

The `UDPSocket` class allows you to send and receive UDP packets. UDP (User Datagram Protocol) is an easy-to-implement protocol for sending data. It is faster and simpler than TCP (only 8 bytes of header as opposed to at least 20 bytes in TCP), but it does not offer the same level of reliability. It is useful for applications where data must arrive at their destination quickly. However, it does not allow verification of delivery, nor does it allow error-checking or recovery of data that was not delivered correctly.

The `UDPSocket` class is available from the `4D` class store. You can create a UDP connection using the [4D.UDPSocket.new()](#4dudpsocketnew) function, which returns a [UDPSocket object](#udpsocket-object).

Thanks to the standard 4D object *refcounting*, a UDPSocket is automatically released when it is no longer referenced, i.e. when no more references to them exist in memory. This typically occurs, for example, at the end of a method execution for local variables. Consequently, the associated resources are properly cleaned up without requiring explicit closure. However, if you want to "force" the closure of a socket at any moment, [**nullify** its references by setting them to **Null**](../Concepts/dt_object.md#resources).

:::info 4DTCPUDPLog.txt file

For debugging and monitoring, you can use the [4DTCPUDPLog.txt log file] that records events related to UDP sockets. Events include data transmission, errors, and connection lifecycle information. 

:::

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R10|Class added|

</details>

### Example


### UDPSocket Object

A UDPSocket object is immutable, non streamable.

UDPSocket objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #UDPSocket.errors.Syntax -->](#errors)<br/><!-- INCLUDE #UDPSocket.errors.Summary -->|
|[<!-- INCLUDE #UDPSocket.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPSocket.port.Summary -->|
|[<!-- INCLUDE #UDPSocket.send().Syntax -->](#send)<br/><!-- INCLUDE #UDPSocket.send().Summary -->|


<!-- REF #4D.UDPSocket.new().Desc -->
## 4D.UDPSocket.new()


<!-- REF #4D.UDPSocket.new().Syntax -->**4D.UDPSocket.new**( *options* : Object  ) : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *port* : Integer ; *options* : Object  ) : 4D.UDPSocket<!-- END REF -->


<!-- REF #4D.UDPSocket.new().params -->
|Parameter|Type| |Description|
|---|---|---|---|
|port|Integer|->|Local port used for UDP socket (0 or omitted = find any unused port to use)|
|options|Object|->|Configuration [options](#options-parameter) for the socket|
|Result|UDPSocket|<-|New UDPSocket object|                                

<!-- END REF -->

#### Description


The `4D.UDPSocket.new()` function <!-- REF #4D.UDPSocket.new().Summary -->creates a new UDP socket using the defined *options* on the specified *port* (if any) or on a random unused port, and returns a `4D.UDPSocket` object<!-- END REF -->.


#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties:

|Property|Type|Description|Default|
|---|---|---|---|
|onData|Formula|Callback triggered when data is received|Undefined|
|onError|Formula|Callback triggered in case of an error|Undefined|
|onTerminate|Formula|Callback triggered when the port is released|Undefined|



#### Callback functions

All callback functions receive two parameters: 

|Parameter|Type|Description|
|---|---|---|
|$socket|[`UDPSocket` object](#udpsocket-object)|The current UDPSocket instance.|
|$event|[`UDPEvent` object](#udppevent-object)|Contains information about the event.|

**Sequence of Callback Calls:**

1. `onData` is triggered each time data is received.
2. `onError` is triggered if an error occurs.
3. `onTerminate` is always triggered just before the port is released (socket is closed or an error occured).


#### UDPEvent object

A [`UDPEvent`](UDPEventClass.md) object is returned when a [callback function](#callback-functions) is called.

<!-- END REF -->


<!-- REF #UDPSocket.errors.Desc -->
## .errors

<!-- REF #UDPSocket.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Description

The `.errors` property contains <!-- REF #UDPSocket.errors.Summary -->a collection of error objects associated with the socket<!-- END REF -->. Each error object includes the error code, a description, and the signature of the component that caused the error.

|Property||Type|Description|
|---|---|---|---|
|errors||Collection|4D error stack in case of error|
||[].errCode|Number|4D error code|
||[].message|Text|Description of the 4D error|
||[].componentSignature|Text|Signature of the internal component which returned the error|


<!-- END REF -->



<!-- REF #UDPSocket.port.Desc -->
## .port

<!-- REF #UDPSocket.port.Syntax -->**port** : Number<!-- END REF -->

#### Description

The `.port` property contains <!-- REF #UDPSocket.port.Summary -->the port number to listen to<!-- END REF -->. This property is **read-only**.



<!-- END REF -->



<!-- REF #UDPSocket.send().Desc -->
## .send()

<!-- REF #UDPSocket.send().Syntax -->**.send**( *data* : Blob ; *hostName* : Text ; *remotePort* : Integer )<!-- END REF -->

<!-- REF #UDPSocket.send().params -->
|Parameter|Type||Description|
|---|---|---|---|
|data|Blob|->|Data to be sent|
|hostName|Text|->|Name or IP address of server|
|remotePort|Integer|->|Remote port to connect to (0=any)|

<!-- END REF -->

#### Description

The `send()` function <!-- REF #UDPSocket.send().Summary -->sends *data* to the remote *hostName* server on the specified *remotePort*<!-- END REF -->. 

*hostName* is the name or IP address of the server where the data will be sent. 

*remotePort* is the number of the port to be connected to. If you pass 0, any available port will be used.

<!-- END REF -->


#### See also

[UDPEvent](UDPEventClass.md)