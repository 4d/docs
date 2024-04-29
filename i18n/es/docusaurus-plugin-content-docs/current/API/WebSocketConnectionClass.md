---
id: WebSocketConnectionClass
title: WebSocketConnection
---

The `WebSocketConnection` class API allows you to handle WebSocket connections, once established using the [`WebSocketServer` class](WebSocketServerClass.md).

:::info

For an overview and some examples of the WebSocket server implementation in 4D, please refer to the [`WebSocketServer` class](WebSocketServerClass.md).

:::

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

### Objeto WebSocketConnection

A `WebSocketConnection` object is automatically created when the [`WSHandler.onConnection`](WebSocketServerClass.md#wsshandler-parameter) callback function of the [WebSocketServer object](WebSocketServerClass.md#4dwebsocketservernew) returns a [`connectionHandler`](WebSocketServerClass.md#connectionhandler-object) object.

Los objetos WebSocketConnection ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketConnectionClass.handler.Syntax -->](#handler)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketConnectionClass.handler.Summary -->               |
| [<!-- INCLUDE #WebSocketConnectionClass.id.Syntax -->](#id)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketConnectionClass.id.Summary -->                              |
| [<!-- INCLUDE #WebSocketConnectionClass.send().Syntax -->](#send\(\))&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketConnectionClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketConnectionClass.status.Syntax -->](#status)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketConnectionClass.status.Summary -->                  |
| [<!-- INCLUDE #WebSocketConnectionClass.terminate().Syntax -->](#terminate\(\))&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketConnectionClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketConnectionClass.wss.Syntax -->](#wss)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketConnectionClass.wss.Summary -->                           |

<!-- REF #WebSocketConnectionClass.handler.Desc -->

## .handler

<!-- REF #WebSocketConnectionClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descripción

The `.handler` property contains <!-- REF #WebSocketConnectionClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.id.Desc -->

## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Descripción

The `.id` property contains <!-- REF #WebSocketConnectionClass.id.Summary -->the unique identifier of the connection<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.send().Desc -->

## .send()

<!-- REF #WebSocketConnectionClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.send().Params -->

| Parámetros | Tipo                 |     | Descripción         |
| ---------- | -------------------- | :-: | ------------------- |
| message    | Text / Blob / Object |  -> | El mensaje a enviar |

<!-- END REF -->

#### Descripción

The `.send()` function <!-- REF #WebSocketConnectionClass.send().Summary -->sends a _message_ to the client<!-- END REF -->.

The following contents are sent depending on the _message_ type:

| Tipo   | Contenido                                                                                                                               |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto en UTF-8                                                                                                                          |
| Blob   | Datos binarios                                                                                                                          |
| Object | Text in JSON UTF-8 (same result as with [`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.status.Desc -->

## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descripción

The `.status` property contains <!-- REF #WebSocketConnectionClass.status.Summary -->the connection status (can be "Closing", "Closed" or  "Connected")<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Params -->

| Parámetros | Tipo    |     | Descripción                                                                                          |
| ---------- | ------- | :-: | ---------------------------------------------------------------------------------------------------- |
| code       | Integer |  -> | Error code sent to the client (must be > 3000, otherwise the message is not sent) |
| message    | Text    |  -> | Mensaje de error enviado al cliente                                                                  |

<!-- END REF -->

#### Descripción

The `.terminate()` function <!-- REF #WebSocketConnectionClass.terminate().Summary -->forces the connection to close<!-- END REF -->.

A _code_ and _message_ can be sent to the client during the closure to indicate the reason of the termination.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->

## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**.wss** : 4D.WebSocketServer<!-- END REF -->

#### Descripción

The `.wss` property contains <!-- REF #WebSocketConnectionClass.wss.Summary -->the [`WebSocketServer`](WebSocketServerClass.md#4dwebsocketservernew) parent object of the connection<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->
