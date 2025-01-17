---
id: WebSocketConnectionClass
title: WebSocketConnection
---

La API de la clase `WebSocketConnection` te permite gestionar conexiones WebSocket, una vez establecidas usando la clase [`WebSocketServer`](WebSocketServerClass.md).

:::info

Para una visión general y algunos ejemplos de la implementación del servidor WebSocket en 4D, por favor consulte la clase [`WebSocketServer` class](WebSocketServerClass.md).

:::

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

### Objeto WebSocketConnection

Un objeto `WebSocketConnection` se crea automáticamente cuando la función de retrollamada [`WSHandler.onConnection`](WebSocketServerClass.md#wsshandler-parameter) del objeto [WebSocketServer](WebSocketServerClass.md#4dwebsocketservernew) devuelve un objeto [`connectionHandler`](WebSocketServerClass.md#connectionhandler-object).

Los objetos WebSocketConnection ofrecen las siguientes propiedades y funciones:

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

#### Descripción

La propiedad `.handler` contiene <!-- REF #WebSocketConnectionClass.handler.Summary -->el accessor que recupera el objeto `connectionHandler` utilizado para iniciar la conexión<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.id.Desc -->

## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Descripción

La propiedad `.id` contiene <!-- REF #WebSocketConnectionClass.id.Summary -->el identificador único de la conexión<!-- END REF -->.

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

La función `.send()` <!-- REF #WebSocketConnectionClass.send().Summary -->envía un *message* al cliente<!-- END REF -->.

Los siguientes contenidos se envían en función del tipo de *message*:

| Tipo   | Contenido                                                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto en UTF-8                                                                                                                               |
| Blob   | Datos binarios                                                                                                                               |
| Object | Texto en JSON UTF-8 (mismo resultado que con [`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.status.Desc -->

## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descripción

La propiedad `.status` contiene <!-- REF #WebSocketConnectionClass.status.Summary -->el estado de la conexión (puede ser "Closing", "Closed" o  "Connected")<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Params -->

| Parámetros | Tipo    |     | Descripción                                                                                                     |
| ---------- | ------- | :-: | --------------------------------------------------------------------------------------------------------------- |
| code       | Integer |  -> | Código de error enviado al cliente (debe ser > 3000, de lo contrario el mensaje no se envía) |
| message    | Text    |  -> | Mensaje de error enviado al cliente                                                                             |

<!-- END REF -->

#### Descripción

La función `.terminate()` <!-- REF #WebSocketConnectionClass.terminate().Summary -->fuerza el cierre de la conexión<!-- END REF -->.

Un *code* y un *message* pueden ser enviados al cliente durante el cierre para indicar la razón de la terminación.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->

## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**.wss** : 4D.WebSocketServer<!-- END REF -->

#### Descripción

La propiedad `.wss` contiene <!-- REF #WebSocketConnectionClass.wss.Summary -->el objeto padre [WebSocketServer\`](WebSocketServerClass.md#4dwebsocketservernew) de la conexión<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->
