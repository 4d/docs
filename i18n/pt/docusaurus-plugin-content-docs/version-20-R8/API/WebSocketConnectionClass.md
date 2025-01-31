---
id: WebSocketConnectionClass
title: WebSocketConnection
---

The `WebSocketConnection` class API allows you to handle WebSocket connections, once established using the [`WebSocketServer` class](WebSocketServerClass.md).

:::info

For an overview and some examples of the WebSocket server implementation in 4D, please refer to the [`WebSocketServer` class](WebSocketServerClass.md).

:::

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

### Objecto WebSocketConnection

A `WebSocketConnection` object is automatically created when the [`WSHandler.onConnection`](WebSocketServerClass.md#wsshandler-parameter) callback function of the [WebSocketServer object](WebSocketServerClass.md#4dwebsocketservernew) returns a [`connectionHandler`](WebSocketServerClass.md#connectionhandler-object) object.

Os objectos Httprequest fornecem as seguintes propriedades e funções:

|                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketConnectionClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketConnectionClass.handler.Summary -->               |
| [<!-- INCLUDE #WebSocketConnectionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #WebSocketConnectionClass.id.Summary -->                              |
| [<!-- INCLUDE #WebSocketConnectionClass.send().Syntax -->](#send\(\))<br/><!-- INCLUDE #WebSocketConnectionClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketConnectionClass.status.Syntax -->](#status)<br/><!-- INCLUDE #WebSocketConnectionClass.status.Summary -->                  |
| [<!-- INCLUDE #WebSocketConnectionClass.terminate().Syntax -->](#terminate\(\))<br/><!-- INCLUDE #WebSocketConnectionClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketConnectionClass.wss.Syntax -->](#wss)<br/><!-- INCLUDE #WebSocketConnectionClass.wss.Summary -->                           |

<!-- REF #WebSocketConnectionClass.handler.Desc -->

## .handler

<!-- REF #WebSocketConnectionClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descrição

The `.handler` property contains <!-- REF #WebSocketConnectionClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.id.Desc -->

## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Descrição

The `.id` property contains <!-- REF #WebSocketConnectionClass.id.Summary -->the unique identifier of the connection<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.send().Desc -->

## .send()

<!-- REF #WebSocketConnectionClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.send().Params -->

| Parâmetro | Tipo                 |     | Descrição           |
| --------- | -------------------- | :-: | ------------------- |
| message   | Text / Blob / Object |  -> | A mensagem a enviar |

<!-- END REF -->

#### Descrição

The `.send()` function <!-- REF #WebSocketConnectionClass.send().Summary -->sends a *message* to the client<!-- END REF -->.

Os conteúdos seguintes são enviados em função do tipo de *message*:

| Tipo   | Conteúdo                                                                                                                                       |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto em UTF-8                                                                                                                                 |
| Blob   | Dados binários                                                                                                                                 |
| Object | Texto em JSON UTF-8 (o mesmo resultado que com [`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.status.Desc -->

## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descrição

The `.status` property contains <!-- REF #WebSocketConnectionClass.status.Summary -->the connection status (can be "Closing", "Closed" or  "Connected")<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Params -->

| Parâmetro | Tipo    |     | Descrição                                                                                            |
| --------- | ------- | :-: | ---------------------------------------------------------------------------------------------------- |
| code      | Integer |  -> | Error code sent to the client (must be > 3000, otherwise the message is not sent) |
| message   | Text    |  -> | Mensagem de erro enviada ao cliente                                                                  |

<!-- END REF -->

#### Descrição

The `.terminate()` function <!-- REF #WebSocketConnectionClass.terminate().Summary -->forces the connection to close<!-- END REF -->.

A *code* and *message* can be sent to the client during the closure to indicate the reason of the termination.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->

## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**.wss** : 4D.WebSocketServer<!-- END REF -->

#### Descrição

The `.wss` property contains <!-- REF #WebSocketConnectionClass.wss.Summary -->the [`WebSocketServer`](WebSocketServerClass.md#4dwebsocketservernew) parent object of the connection<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->
