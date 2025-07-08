---
id: UDPEventClass
title: UDPEvent
---

The `UDPEvent` class provides information about events occurring during the lifecycle of a UDP socket. It is generated when a [UDPSocket](UDPSocketClass.md) is opened and is utilized in callbacks `onData`, `onError`, and `onTerminate`.

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R10  | Classe adicionada |

</details>

### UDPEvent Object

A `UDPEvent` object is immutable and non-streamable.

As seguintes propriedades estão disponíveis:

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #UDPEvent.data.Summary --> |
| [<!-- INCLUDE #UDPEvent.ip.Syntax -->](#ip)<br/><!-- INCLUDE #UDPEvent.ip.Summary -->       |
| [<!-- INCLUDE #UDPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPEvent.port.Summary --> |
| [<!-- INCLUDE #UDPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #UDPEvent.type.Summary --> |

<!-- REF #UDPEvent.data.Desc -->

## .data

<!-- REF #UDPEvent.data.Syntax -->**data**: Blob<!-- END REF -->

#### Descrição

The `.data` property contains <!-- REF #UDPEvent.data.Summary -->the data associated with the event<!-- END REF -->. It is only valid for events of type "data".

<!-- END REF -->

<!-- REF #UDPEvent.ip.Desc -->

## .ip

<!-- REF #UDPEvent.ip.Syntax -->**ip** : Text<!-- END REF -->

#### Descrição

The `.ip` property contains <!-- REF #UDPEvent.ip.Summary -->the IP address of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #UDPEvent.port.Desc -->

## .port

<!-- REF #UDPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### Descrição

The `.port` property contains <!-- REF #UDPEvent.port.Summary -->the port number of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #UDPEvent.type.Desc -->

## .type

<!-- REF #UDPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### Descrição

The `.type` property contains <!-- REF #UDPEvent.type.Summary -->the type of the event<!-- END REF -->. Valores possíveis:

- `"data"`: Indica que os dados foram recebidos.
- `"error"`: Indicates that an error occurred during the UDPSocket.
- `"terminate"`: Indicates that the UDPSocket is about to be released.

<!-- END REF -->

#### Veja também

[UDPSocket](UDPSocketClass.md)