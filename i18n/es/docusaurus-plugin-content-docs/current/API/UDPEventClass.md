---
id: UDPEventClass
title: UDPEvent
---

The `UDPEvent` class provides information about events occurring during the lifecycle of a UDP socket. It is generated when a [UDPSocket](UDPSocketClass.md) is opened and is utilized in callbacks `onData`, `onError`, and `onTerminate`.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R10      | Clase añadida  |

</details>

### UDPEvent Object

A `UDPEvent` object is immutable and non-streamable.

Las siguientes propiedades están disponibles:

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #UDPEvent.data.Summary --> |
| [<!-- INCLUDE #UDPEvent.ip.Syntax -->](#ip)<br/><!-- INCLUDE #UDPEvent.ip.Summary -->       |
| [<!-- INCLUDE #UDPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPEvent.port.Summary --> |
| [<!-- INCLUDE #UDPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #UDPEvent.type.Summary --> |

<!-- REF #UDPEvent.data.Desc -->

## .data

<!-- REF #UDPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Descripción

The `.data` property contains <!-- REF #UDPEvent.data.Summary -->the data associated with the event<!-- END REF -->. It is only valid for events of type "data".

<!-- END REF -->

<!-- REF #UDPEvent.ip.Desc -->

## .ip

<!-- REF #UDPEvent.ip.Syntax -->**ip**: Text<!-- END REF -->

#### Descripción

The `.ip` property contains <!-- REF #UDPEvent.ip.Summary -->the IP address of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #UDPEvent.port.Desc -->

## .port

<!-- REF #UDPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### Descripción

The `.port` property contains <!-- REF #UDPEvent.port.Summary -->the port number of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #UDPEvent.type.Desc -->

## .type

<!-- REF #UDPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### Descripción

The `.type` property contains <!-- REF #UDPEvent.type.Summary -->the type of the event<!-- END REF -->. Los valores posibles son:

- `"data"`: indica que los datos han sido recibidos.
- `"error"`: Indicates that an error occurred during the UDPSocket.
- `"terminate"`: Indicates that the UDPSocket is about to be released.

<!-- END REF -->

#### Ver también

[UDPSocket](UDPSocketClass.md)