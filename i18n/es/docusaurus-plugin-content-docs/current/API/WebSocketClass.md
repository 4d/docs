---
id: WebSocketClass
title: WebSocket
---

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20 R2  | Añadidos       |

</details>


La clase `WebSocket` permite abrir una conexión de cliente WebSocket con un servidor, enviar y recibir datos y cerrar la conexión.

Las conexiones cliente WebSocket son útiles, por ejemplo, para recibir datos financieros en tiempo real o enviar y recibir mensajes de un chat.

### Ejemplo

En este ejemplo, creamos un cliente WebSocket muy básico.

1. Cree la clase usuario `WSConnectionHandler` que contiene la(s) función(es) de retrollamada utilizada(s) para gestionar las retrollamadas evento WebSocket:

```4d
// WSConnectionHandler class

Class constructor

Function onMessage($ws : 4D.WebSocket; $event : Object)
   ALERT($event.data)

Function onTerminate($ws : 4D.WebSocket; $event : Object)
   ALERT("Connection closed")
```

2. Conécte al servidor WebSocket desde un formulario 4D instanciando un 4D.WebSocket:

```4d
Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())
```

3. Para enviar mensajes al servidor WebSocket desde el formulario 4D, puede escribir:

```4d
Form.webSocket.send("Hello world")

```




### Objeto WebSocket

Los objetos WebSocket ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.dataType.Summary -->|
| [<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.id.Summary -->|
| [<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.send().Summary -->|
| [<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.status.Summary -->|
| [<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.url.Summary -->|



## 4D.WebSocket.new()


<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->


<!-- REF #4D.WebSocket.new().Params -->
| Parámetros                                        | Tipo         |    | Descripción                                                            |
| ------------------------------------------------- | ------------ |:--:| ---------------------------------------------------------------------- |
| url                                               | Text         | -> | URL a la que conectarse                                                |
| [connectionHandler](#connectionHandler-parameter) | Object       | -> | Objeto que declara las retrollamadas WebSocket                         |
| Resultado                                         | 4D.WebSocket | <- | Nuevo [objeto WebSocket](#websocket-object)|<!-- END REF -->


|


The `4D.WebSocket.new()` function <!-- REF #4D.WebSocket.new().Summary -->creates and returns a new [`4D.WebSocket` object](#websocket-object) connected to the WebSocket server at the address you passed in *url*<!-- END REF -->. The `4D.WebSocket` object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server.

In *url*, pass the URL to which the WebSocket server will respond. The following URL patterns can be used:

- `ws://host[:port]path[?query]` for standard connections
- `wss://host[:port]path[?query]` for TLS secured connections

If the connection is not possible, a `null` object is returned and an error is generated (that you can intercept using a method installed with `ON ERR CALL`).


### Parámetro *connectionHandler*

In *connectionHandler*, you can pass an object containing callback functions to be called according to connection events, and data type to handle.

- Callbacks are automatically called in the context of the form or worker that initiates the connection.
- The lifetime of the WebSocket must be at least the same as the lifetime of the form or worker.

| Propiedad   | Tipo                         | Descripción                                                                                                                                                                                                          |
| ----------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | Callback function for WebSocket data. Called each time the WebSocket has received data. La retrollamada recibe los siguientes parámetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Objeto</li><ul><li>`$2.type` (text): siempre "message"</li><li>`$2.data` (text, blob, or object, see `dataType`): Received data</li></ul> |
| onError     | [Function](FunctionClass.md) | Callback function for execution errors. La retrollamada recibe los siguientes parámetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Objeto</li><ul><li>`$2.type` (text): always "error"</li><li>`$2.errors`: collection of 4D errors stack in case of execution error.<ul><li>`[].errCode` (number): 4D error code</li><li>`[].message` (text): Description of the 4D error</li><li>`[].componentSignature` (text): Signature of the internal component which returned the error</li></ul></li></ul>                                                 |
| onTerminate | [Function](FunctionClass.md) | Callback function when the WebSocket is terminated. La retrollamada recibe los siguientes parámetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Objeto</li><ul><li>`$2.code` (number, read-only): unsigned short containing the close code sent by the server.</li><li>`$2.reason` (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol.</li><li>`$2.wasClean` (boolean, read-only): Indicates whether or not the connection was cleanly closed.</li></ul>                                     |
| onOpen      | [Function](FunctionClass.md) | Callback function when the websocket is open. La retrollamada recibe los siguientes parámetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Objeto</li><ul><li>`$2.type` (texto): siempre "open"</li></ul>                                        |
| dataType    | Text                         | Type of the data received or sent. Available values: "text" (default), "blob", "object". "text" = utf-8                                                                                                              |

Esta es la secuencia de llamadas de retorno:

1. `onOpen` is executed once
2. Zero or several `onMessage` are executed
3. Zero or one `onError` is executed (stops the processing)
4. `onTerminate` se ejecuta siempre


#### Ejemplo


<!-- REF #WebSocketClass.dataType.Desc -->
## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descripción

La propiedad `.dataType` contiene <!-- REF #WebSocketClass.dataType.Summary -->the type of the response body content<!-- END REF -->. It can be "text", "blob", or "object".

Esta propiedad es de sólo lectura.
<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->
## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descripción

La propiedad `.handler` contiene <!-- REF #WebSocketClass.handler.Summary -->el accesor que obtiene el objeto `connectionHandler` utilizado para iniciar la conexión<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->
## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Longint<!-- END REF -->

#### Descripción

La propiedad `.id` contiene <!-- REF #WebSocketClass.id.Summary -->el identificador único de la conexión<!-- END REF -->.

Esta propiedad es de sólo lectura.
<!-- END REF -->




<!-- REF #WebSocketClass.send().Desc -->
## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->


<!-- REF #WebSocketClass.send().Params -->
| Parámetros | Tipo               |    | Descripción      |
| ---------- | ------------------ |:--:| ---------------- |
| message    | Text, Blob, Object | -> | Mensaje a enviar |
<!-- END REF -->


#### Descripción

La función `.send()` <!-- REF #WebSocketClass.send().Summary -->envía *message* al servidor WebSocket en el tipo de datos definido (Text, Blob u Object)<!-- END REF -->.

Los siguientes contenidos se envían en función del tipo de *mensaje*:

| Tipo   | Contenido                                                                                                                 |
| ------ | ------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto en UTF-8                                                                                                            |
| Blob   | Datos binarios                                                                                                            |
| Object | Texto en JSON UTF-8 (mismo resultado que con [`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/en/page1217.html)) |


<!-- END REF -->



<!-- REF #WebSocketClass.status.Desc -->
## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descripción

La propiedad `.status` contiene <!-- REF #WebSocketClass.status.Summary -->el estado actual de la conexión (puede ser "Connecting", "Closing", "Closed", o "Connected")<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->


<!-- REF #WebSocketClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->


<!-- REF #WebSocketClass.terminate().Params -->
| Parámetros | Tipo    |    | Descripción                                                         |
| ---------- | ------- |:--:| ------------------------------------------------------------------- |
| code       | Integer | -> | Código de estado que explica por qué se cierra la conexión          |
| reason     | Text    | -> | The reason why the connection is closing|<!-- END REF -->



|



#### Descripción

La función `.terminate()` <!-- REF #WebSocketClass.terminate().Summary -->closes the WebSocket connection, along with optional *code* and *reason* parameters<!-- END REF -->.

In *code*, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed.
- If specified, the value of this code parameter overrides the automatic setting. The value must be an integer. Either 1000, or a custom code in the range 3000-4999. If you specify a *code* value, you should also specify a *reason* value.

In *reason*, you can pass a string describing why the connection is being closed. 


<!-- END REF -->


<!-- REF #WebSocketClass.url.Desc -->
## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Descripción

La propiedad `.url` contiene <!-- REF #WebSocketClass.connections.Summary -->the URL to which the WebSocket has connected<!-- END REF -->. It is the URL you passed to the [`new()`](#4dwebsocketnew) function.

Esta propiedad es de sólo lectura.

<!-- END REF -->






