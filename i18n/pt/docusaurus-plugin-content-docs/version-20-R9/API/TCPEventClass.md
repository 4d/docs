---
id: TCPEventClass
title: TCPEvent
---

The `TCPEvent` class provides information about events occurring during the lifecycle of a TCP connection. Ele é gerado quando um [TCPConnection](TCPConnectionClass.md) é aberto e normalmente utilizado em callbacks como `onConnection`, `onData`, `onError`, entre outros.

<details><summary>História</summary>

| Release | Mudanças                      |
| ------- | ----------------------------- |
| 20 R9   | Novos atributos `ip` e `port` |
| 20 R8   | Classe adicionada             |

</details>

### Objeto TCPEvent

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

<!-- REF #TCPEvent.data.Syntax -->**data**: Blob<!-- END REF -->

#### Descrição

A propriedade `.data` contém <!-- REF #TCPEvent.data.Summary -->os dados associados ao evento<!-- END REF -->. É válido apenas para eventos do tipo `"data"`.

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

- `"conexão"`: indica que uma TCPConnection foi estabelecida com sucesso.
- `"data"`: Indicates that data has been received.
- `"error"`: indica que um erro ocorreu durante a TCPConnection.
- `"close"`: indica que a TCPConnection foi fechada corretamente.
- `"terminate"`: indica que a TCPConnection está prestes a ser liberada.

<!-- END REF -->



