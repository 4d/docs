---
id: WebSocketConnectionClass
title: WebSocketConnection
---

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20     | Añadidos       |

</details>

La API de la clase `WebSocketConnection` permite gestionar conexiones WebSocket, una vez definidas mediante la clase [`WebSocketServer`](WebSocketServerClass.md).

|

Para obtener una visión general y algunos ejemplos de la implementación del servidor WebSocket en 4D, consulte la clase [`WebSocketServer`](WebSocketServerClass.md).

:::


### Objeto WebSocketConnection

Un objeto `WebSocketConnection` se crea automáticamente cuando la función de retrollamada [`WSHandler.onConnection`](WebSocketServerClass.md#wsshandler-parameter) del objeto [WebSocketServer](WebSocketServerClass.md#4dwebsocketservernew) devuelve un objeto [`connectionHandler`](WebSocketServerClass.md#connectionhandler-object).

Los objetos WebSocketConnection ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketConnectionClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.id.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.send().Syntax -->](#send())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.send().Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.status.Syntax -->](#status)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.status.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.terminate().Syntax -->](#terminate())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.wss.Syntax -->](#wss)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.wss.Summary -->|



<!-- REF #WebSocketConnectionClass.handler.Desc -->
## .handler

<!-- REF #WebSocketConnectionClass.handler.Syntax -->**handler** : Object<!-- END REF -->

#### Descripción

La propiedad `.handler` contiene <!-- REF #WebSocketConnectionClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

<!-- END REF -->




<!-- REF #WebSocketConnectionClass.id.Desc -->
## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**id**: Integer<!-- END REF -->

#### Descripción

La propiedad `.id` contiene <!-- REF #WebSocketConnectionClass.id.Summary -->el identificador único de la conexión<!-- END REF -->.

Esta propiedad es de sólo lectura.
<!-- END REF -->


<!-- REF #WebSocketConnectionClass.send().Desc -->
## .send()

<!-- REF #WebSocketConnectionClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->


<!-- REF #WebSocketConnectionClass.send().Params -->
| Parámetros | Tipo                 |    | Descripción                                    |
| ---------- | -------------------- |:--:| ---------------------------------------------- |
| message    | Text / Blob / Object | -> | The message to send|<!-- END REF -->

|

#### Descripción

La función `.send()` <!-- REF #WebSocketConnectionClass.send().Summary -->sends a *message* to the client<!-- END REF -->.

Los siguientes contenidos se envían en función del tipo de *mensaje*:

| Tipo   | Contenido                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| Text   | Text in UTF-8                                                                                                        |
| Blob   | Binary data                                                                                                          |
| Object | Text in JSON UTF-8 (same result as with [`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/en/page1217.html)) |

<!-- END REF -->




<!-- REF #WebSocketConnectionClass.status.Desc -->
## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**status** : Text<!-- END REF -->

#### Descripción

The `.status` property contains <!-- REF #WebSocketConnectionClass.status.Summary -->the connection status (can be "Closing", "Closed" or  "Connected")<!-- END REF -->.

Esta propiedad es de sólo lectura.
<!-- END REF -->



<!-- REF #WebSocketConnectionClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->


<!-- REF #WebSocketConnectionClass.terminate().Params -->
| Parámetros | Tipo    |    | Descripción                                                                       |
| ---------- | ------- |:--:| --------------------------------------------------------------------------------- |
| code       | Integer | -> | Error code sent to the client (must be > 3000, otherwise the message is not sent) |
| message    | Text    | -> | Error message sent to the client|<!-- END REF -->


|


#### Descripción

La función `.terminate()` <!-- REF #WebSocketConnectionClass.terminate().Summary -->forces the connection to close<!-- END REF -->.

A *code* and *message* can be sent to the client during the closure to indicate the reason of the termination.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->
## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**wss**: 4D.WebSocketServer<!-- END REF -->

#### Descripción

The `.wss` property contains <!-- REF #WebSocketConnectionClass.wss.Summary -->the [`WebSocketServer`](WebSocketServerClass.md#4dwebsocketservernew) parent object of the connection<!-- END REF -->.

Esta propiedad es de sólo lectura.
<!-- END REF -->

