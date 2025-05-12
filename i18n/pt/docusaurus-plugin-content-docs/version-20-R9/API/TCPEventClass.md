---
id: TCPEventClass
title: TCPEvent
---

The `TCPEvent` class provides information about events occurring during the lifecycle of a TCP connection. It is generated when a [TCPConnection](TCPConnectionClass.md) is opened and is typically utilized in callbacks such as `onConnection`, `onData`, `onError`, and others.

<details><summary>História</summary>

| Release | Mudanças                        |
| ------- | ------------------------------- |
| 20 R9   | New `ip`, and `port` attributes |
| 20 R8   | Classe adicionada               |

</details>

### TCPEvent Object

A `TCPEvent` object is immutable and non-streamable.

As seguintes propriedades estão disponíveis:

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #TCPEvent.data.Summary --> |
| [<!-- INCLUDE #TCPEvent.ip.Syntax -->](#ip)<br/><!-- INCLUDE #TCPEvent.ip.Summary -->       |
| [<!-- INCLUDE #TCPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPEvent.port.Summary --> |
| [<!-- INCLUDE #TCPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #TCPEvent.type.Summary --> |

<!-- REF #TCPEvent.data.Desc -->

## .data

<!-- REF #TCPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Descrição

A propriedade `.data` contém <!-- REF #TCPEvent.data.Summary -->os dados associados ao evento<!-- END REF -->. It is only valid for events of type `"data"`.

:::note

When working with low-level TCP/IP connections, keep in mind there is no guarantee that all data will arrive in a single packet. Data arrives in order but may be fragmented across multiple packets.

:::

<!-- END REF -->

<!-- REF #TCPEvent.ip.Desc -->

## .ip

<!-- REF #TCPEvent.ip.Syntax -->**ip** : Text<!-- END REF -->

#### Descrição

A propriedade `.ip` contém <!-- REF #TCPEvent.ip.Summary -->o endereço IP da máquina remota<!-- END REF -->.

<!-- END REF -->

<!-- REF #TCPEvent.port.Desc -->

## .port

<!-- REF #TCPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### Descrição

A propriedade `.port` contém <!-- REF #TCPEvent.port.Summary --> o número da porta da máquina remota <!-- END REF -->.

<!-- END REF -->

<!-- REF #TCPEvent.type.Desc -->

## .type

<!-- REF #TCPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### Descrição

A propriedade `.type` contém <!-- REF #TCPEvent.type.Summary -->o tipo do evento<!-- END REF -->. Valores possíveis:

- `"connection"`: Indicates that a TCPConnection was successfully established.
- `"data"`: Indicates that data has been received.
- `"error"`: Indicates that an error occurred during the TCPConnection.
- `"close"`: Indicates that the TCPConnection has been properly closed.
- `"terminate"`: Indicates that the TCPConnection is about to be released.

<!-- END REF -->



