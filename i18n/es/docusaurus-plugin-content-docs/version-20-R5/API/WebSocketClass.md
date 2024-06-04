---
id: WebSocketClass
title: WebSocket
---

The `WebSocket` class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection.

Las conexiones cliente WebSocket son útiles, por ejemplo, para recibir datos financieros en tiempo real o enviar y recibir mensajes de un chat.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R2       | Añadidos       |

</details>

### Ejemplo

En este ejemplo, creamos un cliente WebSocket muy básico.

1. Create the `WSConnectionHandler` user class containing callback function(s) used to handle WebSocket event callbacks:

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

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #WebSocketClass.dataType.Summary -->        |
| [<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketClass.handler.Summary -->           |
| [<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)<br/><!-- INCLUDE #WebSocketClass.id.Summary -->                          |
| [<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)<br/><!-- INCLUDE #WebSocketClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)<br/><!-- INCLUDE #WebSocketClass.status.Summary -->              |
| [<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)<br/><!-- INCLUDE #WebSocketClass.url.Summary -->                       |

## 4D.WebSocket.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                       |
| ----------- | ---------------------------------------------------- |
| 20 R3       | Support of `headers` property in _connectionHandler_ |

</details>

<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->

<!-- REF #4D.WebSocket.new().Params -->

| Parámetros                                        | Tipo                         |     | Descripción                                    |
| ------------------------------------------------- | ---------------------------- | :-: | ---------------------------------------------- |
| url                                               | Text                         |  -> | URL a la que conectarse                        |
| [connectionHandler](#connectionHandler-parameter) | Object                       |  -> | Objeto que declara las retrollamadas WebSocket |
| Result                                            | 4D.WebSocket |  <- | New [WebSocket object](#websocket-object)      |

<!-- END REF -->

The `4D.WebSocket.new()` function <!-- REF #4D.WebSocket.new().Summary -->creates and returns a new [`4D.WebSocket` object](#websocket-object) connected to the WebSocket server at the address you passed in _url_<!-- END REF -->. The `4D.WebSocket` object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server.

In _url_, pass the URL to which the WebSocket server will respond. Se pueden utilizar los siguientes patrones de URL:

- `ws://host[:port]path[?query]` for standard connections
- `wss://host[:port]path[?query]` for TLS secured connections

If the connection is not possible, a `null` object is returned and an error is generated (that you can intercept using a method installed with `ON ERR CALL`).

### _connectionHandler_ parameter

In _connectionHandler_, you can pass an object containing callback functions to be called according to connection events, as well as data type and headers to handle.

- Las retrollamadas se llaman automáticamente en el contexto del formulario o worker que inicia la conexión.
- El WebSocket será válido siempre y cuando el formulario o trabajador no esté cerrado.

| Propiedad   | Tipo                         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | Función de retrollamada para datos WebSocket. Llamada cada vez que el WebSocket ha recibido datos. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "message"</li><li>`$2.data` (text, blob, or object, see `dataType`): Received data</li></ul>                                                                                                                                                                                                                                                               |
| onError     | [Function](FunctionClass.md) | Función de retrollamada para errores de ejecución. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "error"</li><li>`$2.errors`: collection of 4D errors stack in case of execution error.<ul><li>`[].errCode` (number): 4D error code</li><li>`[].message` (text): Description of the 4D error</li><li>`[].componentSignature` (text): Signature of the internal component which returned the error</li></ul></li></ul> |
| onTerminate | [Function](FunctionClass.md) | Función de retrollamada cuando el WebSocket se termina. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.code` (number, read-only): unsigned short containing the close code sent by the server.</li><li>`$2.reason` (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol.</li></ul>                                                                                                                                          |
| onOpen      | [Function](FunctionClass.md) | Función de retrollamada cuando el webSocket está abierto. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "open"</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| dataType    | Text                         | Tipo de datos recibidos o enviados. Valores disponibles: "text" (por defecto), "blob", "object". "text" = utf-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| headers     | Object                       | Headers of the WebSocket.<li>Syntax for standard key assignment: `headers.*key*:=*value*` (_value_ can be a Collection if the same key appears multiple times)</li><li>Syntax for Cookie assignment (particular case): `headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"`</li>                                                                                                                                                                                                                                                                                                                                                                      |

Esta es la secuencia de llamadas de retorno:

1. `onOpen` se ejecuta una vez
2. Zero or several `onMessage` are executed
3. Zero or one `onError` is executed (stops the processing)
4. `onTerminate` is always executed

#### Ejemplo

You want to set headers in the `WSConnectionHandler` user class:

```4d
// WSConnectionHandler class

Class constructor($myToken:Text)

// Creation of the headers sent to the server
This.headers:=New object("x-authorization";$myToken)
// We define two cookies
This.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"
...

```

<!-- REF #WebSocketClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descripción

The `.dataType` property contains <!-- REF #WebSocketClass.dataType.Summary -->the type of the response body content<!-- END REF -->. Puede ser "text", "blob" u "object".

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->

## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descripción

The `.handler` property contains <!-- REF #WebSocketClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->

## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Longint<!-- END REF -->

#### Descripción

The `.id` property contains <!-- REF #WebSocketClass.id.Summary -->the unique identifier of the connection<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketClass.send().Desc -->

## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketClass.send().Params -->

| Parámetros | Tipo               |     | Descripción      |
| ---------- | ------------------ | :-: | ---------------- |
| message    | Text, Blob, Object |  -> | Mensaje a enviar |

<!-- END REF -->

#### Descripción

The `.send()` function <!-- REF #WebSocketClass.send().Summary -->sends _message_ to the WebSocket server in the defined data type (Text, Blob, or Object)<!-- END REF -->.

The following contents are sent depending on the _message_ type:

| Tipo   | Contenido                                                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto en UTF-8                                                                                                                         |
| Blob   | Datos binarios                                                                                                                         |
| Object | Text in JSON UTF-8 (same result as with [`JSON Stringify`](https://doc.4d.com/4dv20/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketClass.status.Desc -->

## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descripción

The `.status` property contains <!-- REF #WebSocketClass.status.Summary -->the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Params -->

| Parámetros | Tipo    |     | Descripción                                                |
| ---------- | ------- | :-: | ---------------------------------------------------------- |
| code       | Integer |  -> | Código de estado que explica por qué se cierra la conexión |
| reason     | Text    |  -> | La razón por la que se cierra la conexión                  |

<!-- END REF -->

#### Descripción

The `.terminate()` function <!-- REF #WebSocketClass.terminate().Summary -->closes the WebSocket connection, along with optional _code_ and _reason_ parameters<!-- END REF -->.

In _code_, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- Si no se especifica, el código de cierre de la conexión se establece automáticamente en 1000 para un cierre normal o, en caso contrario, en otro valor estándar del rango 1001-1015 que indique la razón real por la que se cerró la conexión.
- Si se especifica, el valor de este parámetro de código anula el ajuste automático. El valor debe ser un número entero. O 1000, o un código personalizado en el rango 3000-4999. If you specify a _code_ value, you should also specify a _reason_ value.

In _reason_, you can pass a string describing why the connection is being closed.

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Descripción

The `.url` property contains <!-- REF #WebSocketClass.url.Summary -->the URL to which the WebSocket has connected<!-- END REF -->. It is the URL you passed to the [`new()`](#4dwebsocketnew) function.

Esta propiedad es de sólo lectura.

<!-- END REF -->
