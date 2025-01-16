---
id: WebSocketClass
title: WebSocket
---

La clase `WebSocket` permite abrir una conexión de cliente WebSocket con un servidor, enviar y recibir datos y cerrar la conexión.

Las conexiones cliente WebSocket son útiles, por ejemplo, para recibir datos financieros en tiempo real o enviar y recibir mensajes de un chat.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R2       | Añadidos       |

</details>

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

| Lanzamiento | Modificaciones                                           |
| ----------- | -------------------------------------------------------- |
| 20 R3       | Soporte de la propiedad `headers` en *connectionHandler* |

</details>

<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->

<!-- REF #4D.WebSocket.new().Params -->

| Parámetros                                        | Tipo                         |                             | Descripción                                    |
| ------------------------------------------------- | ---------------------------- | :-------------------------: | ---------------------------------------------- |
| url                                               | Text                         |              ->             | URL a la que conectarse                        |
| [connectionHandler](#connectionHandler-parameter) | Object                       |              ->             | Objeto que declara las retrollamadas WebSocket |
| Result                                            | 4D.WebSocket | <- | Nuevo [objeto WebSocket](#websocket-object)    |

<!-- END REF -->

La función `4D.WebSocket.new()` <!-- REF #4D.WebSocket.new().Summary -->crea y devuelve un nuevo [objeto `4D.WebSocket`](#websocket-object) conectado al servidor WebSocket en la dirección especificada en *url*<!-- END REF -->. El objeto `4D.WebSocket` ofrece una API para crear y gestionar una conexión WebSocket a un servidor, así como para enviar y recibir datos hacia y desde el servidor.

En *url*, pase la URL a la que responderá el servidor WebSocket. Se pueden utilizar los siguientes patrones de URL:

- `ws://host[:port]path[?query]` para conexiones estándar
- `wss://host[:port]path[?query]` para conexiones seguras TLS

Si la conexión no es posible, se devuelve un objeto `null` y se genera un error (que puede interceptar utilizando un método instalado con `ON ERR CALL`).

### Parámetro *connectionHandler*

En *connectionHandler*, puede pasar un objeto que contenga funciones de retrollamada a ser llamadas según los eventos de conexión, así como el tipo de datos y encabezados a manejar.

- Las retrollamadas se llaman automáticamente en el contexto del formulario o worker que inicia la conexión.
- El WebSocket será válido siempre y cuando el formulario o trabajador no esté cerrado.

| Propiedad   | Tipo                         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | Función de retrollamada para datos WebSocket. Llamada cada vez que el WebSocket ha recibido datos. La retrollamada recibe los siguientes parámetros<li>:`$1`: objeto WebSocket`$2`</li><li>: objeto</li><ul><li>`$2.type` (texto): siempre "message"</li><li>`$2.data` (texto, blob u objeto, ver `dataType`): datos recibidos</li></ul>                                                                                                                                                                                                                                                                 |
| onError     | [Function](FunctionClass.md) | Función de retrollamada para errores de ejecución. La retrollamada recibe los siguientes parámetros<li>:`$1`: objeto WebSocket`$2`</li><li>: objeto</li><ul><li>`$2.type` (texto): siempre "error"</li><li>`$2.errors`: colección de pilas de errores 4D en caso de error de ejecución.<ul><li>`[].errCode` (número): código de error 4D</li><li>`[].message` (texto): descripción del error 4D</li><li>`[].componentSignature` (texto): firma del componente interno que ha devuelto el error</li></ul></li></ul> |
| onTerminate | [Function](FunctionClass.md) | Función de retrollamada cuando el WebSocket se termina. La retrollamada recibe los siguientes parámetros: <li>`$1`: objeto WebSocket</li><li>`$2`: objeto</li><ul><li>`$2.code` (número, solo lectura): unsigned short contiene el código de cierre enviado por el servidor.</li><li>`$2.reason` (texto, solo lectura): razón por la cual el servidor cerró la conexión. Esto es específico al servidor y al subprotocolo particular.</li></ul>                                                                                                                          |
| onOpen      | [Function](FunctionClass.md) | Función de retrollamada cuando el webSocket está abierto. La retrollamada recibe los siguientes parámetros<li>:`$1`: objeto WebSocket</li><li>:`$2` objeto</li><ul><li>`$2.type` (texto): siempre "open"</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| dataType    | Text                         | Tipo de datos recibidos o enviados. Valores disponibles: "text" (por defecto), "blob", "object". "text" = utf-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| headers     | Object                       | Encabezados del WebSocket.<li>Sintaxis para la asignación de llave estándar: `headers.*llave*:=*value*` (*value* puede ser una Colección si la misma llave aparece varias veces)</li><li>Sintaxis para asignación de Cookie (caso particular): `headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"`</li>                                                                                                                                                                                                                                                                                                                                                     |

Esta es la secuencia de llamadas de retorno:

1. `onOpen` se ejecuta una vez
2. Cero o varios `onMessage` son ejecutados
3. Cero o un `onError` es ejecutado (detiene el procesamiento)
4. `onTerminate` se ejecuta siempre una vez

#### Ejemplo

Quiere definir los encabezados en la clase usuario `WSConnectionHandler`:

```4d
// Clase WSConnectionHandler

Class constructor($myToken:Text)

// Creación de los encabezados enviados al servidor
This.headers:=New object("x-authorization";$myToken)
// Definimos dos cookies
This.headers.Cookie:="yummy_cookie=choco; tasty_cookie=fresa"
...

```

<!-- REF #WebSocketClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descripción

La propiedad `.dataType` contiene <!-- REF #WebSocketClass.dataType.Summary -->el tipo de contenido del cuerpo de la respuesta<!-- END REF -->. Puede ser "text", "blob" u "object".

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->

## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descripción

La propiedad `.handler` contiene <!-- REF #WebSocketClass.handler.Summary -->el accessor que obtiene el objeto `connectionHandler` utilizado para iniciar la conexión<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->

## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Descripción

La propiedad `.id` contiene <!-- REF #WebSocketClass.id.Summary -->el identificador único de la conexión<!-- END REF -->.

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

La función `.send()` <!-- REF #WebSocketClass.send().Summary -->envía *message* al servidor WebSocket en el tipo de datos definido (Texto, Blob u Objeto)<!-- END REF -->.

Los siguientes contenidos se envían en función del tipo de *message*:

| Tipo   | Contenido                                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto en UTF-8                                                                                                                              |
| Blob   | Datos binarios                                                                                                                              |
| Object | Texto en JSON UTF-8 (mismo resultado que con [`JSON Stringify`](https://doc.4d.com/4dv20/help/command/en/page1217.html)) |

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

| Parámetros | Tipo    |     | Descripción                                                |
| ---------- | ------- | :-: | ---------------------------------------------------------- |
| code       | Integer |  -> | Código de estado que explica por qué se cierra la conexión |
| reason     | Text    |  -> | La razón por la que se cierra la conexión                  |

<!-- END REF -->

#### Descripción

La función `.terminate()` <!-- REF #WebSocketClass.terminate().Summary -->cierra la conexión WebSocket, junto con los parámetros opcionales *code* y *reason*<!-- END REF -->.

En *code*, puede pasar un código de estado que explique por qué se está cerrando la conexión (ver también [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- Si no se especifica, el código de cierre de la conexión se establece automáticamente en 1000 para un cierre normal o, en caso contrario, en otro valor estándar del rango 1001-1015 que indique la razón real por la que se cerró la conexión.
- Si se especifica, el valor de este parámetro de código anula el ajuste automático. El valor debe ser un número entero. O 1000, o un código personalizado en el rango 3000-4999. Si especifica un valor *code*, también debe especificar un valor *reason*.

En *reason*, puede pasar una cadena que describa por qué se está cerrando la conexión.

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Descripción

La propiedad `.url` contiene <!-- REF #WebSocketClass.url.Summary -->la URL a la que se ha conectado el WebSocket<!-- END REF -->. Es la URL que ha pasado a la función [`new()`](#4dwebsocketnew).

Esta propiedad es de sólo lectura.

<!-- END REF -->
