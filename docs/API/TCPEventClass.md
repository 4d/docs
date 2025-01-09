---
id: TCPEventClass
title: TCPEvent
---

The `TCPEvent` class provides information about events occurring during the lifecycle of a TCP connection. It is generated when a [TCPConnection](TCPConnectionClass.md) is opened and is typically utilized in callbacks such as `onConnection`, `onData`, `onError`, and others.


<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R8|Class added|

</details>

### TCPEvent Object

A `TCPEvent` object is immutable and non-streamable.

The following properties are available:

||
|---|
|[<!-- INCLUDE ##4D.TCPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE ##4D.TCPEvent.type.Summary -->|
|[<!-- INCLUDE #4D.TCPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #4D.TCPEvent.data.Summary -->|

<!-- REF #4D.TCPEvent.type.Desc -->
## .type

<!-- REF #4D.TCPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### Description

The `.type` property contains <!-- REF #4D.TCPEvent.type.Summary -->the type of the event<!-- END REF -->. Possible values are:
- `"connection"`: Indicates that a connection was successfully established.
- `"data"`: Indicates that data has been received.
- `"error"`: Indicates that an error occurred during the connection.
- `"close"`: Indicates that the connection has been properly closed.
- `"terminate"`: Indicates that the connection is about to be released.

<!-- END REF -->

<!-- REF #4D.TCPEvent.data.Desc -->
## .data

<!-- REF #4D.TCPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Description

The `.data` property contains <!-- REF #4D.TCPEvent.data.Summary -->the data associated with the event<!-- END REF -->. It is only valid for events of type `"data"`.

<!-- END REF -->


