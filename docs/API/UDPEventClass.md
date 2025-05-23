---
id: UDPEventClass
title: UDPEvent
---

The `UDPEvent` class provides information about events occurring during the lifecycle of a UDP socket. It is generated when a [UDPSocket](UDPSocketClass.md) is opened and is utilized in callbacks `onData`, `onError`, and `onTerminate`.


<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R10|Class added|

</details>

### UDPEvent Object

A `UDPEvent` object is immutable and non-streamable.

The following properties are available:

||
|---|
|[<!-- INCLUDE #UDPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #UDPEvent.data.Summary -->|
|[<!-- INCLUDE #UDPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #UDPEvent.type.Summary -->|

<!-- REF #UDPEvent.data.Desc -->
## .data


<!-- REF #UDPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Description

The `.data` property contains <!-- REF #UDPEvent.data.Summary -->the data associated with the event<!-- END REF -->. It is only valid for events of type "data".

<!-- END REF -->


<!-- REF #UDPEvent.type.Desc -->
## .type

<!-- REF #UDPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### Description

The `.type` property contains <!-- REF #UDPEvent.type.Summary -->the type of the event<!-- END REF -->. Possible values are:
- `"data"`: Indicates that data has been received.
- `"error"`: Indicates that an error occurred during the UDPSocket.
- `"terminate"`: Indicates that the UDPSocket is about to be released.

<!-- END REF -->



#### See also

[UDPSocket](UDPSocketClass.md)