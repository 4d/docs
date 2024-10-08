---
id: WebSocketServerClass
title: WebSocketServer
---

La clase `WebSocketServer` permite crear y configurar un servidor WebSocket en 4D. Una vez que el servidor WebSocket 4D está activo, puede abrir y utilizar las conexiones WebSocket entre 4D y los clientes utilizando la clase [`WebSocketConnection`](WebSocketConnectionClass.md).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

:::note Acerca de los servidores WebSocket

El protocolo WebSocket ofrece un canal de comunicación full-duplex entre un servidor WebSocket y un cliente (por ejemplo, un navegador web). Para más información sobre servidores WebSocket, lea [esta página en Wikipedia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info Ver también

Ver también [esta entrada de blog](https://blog.4d.com/new-built-in-websocket-server/) sobre el servidor WebSocket 4D.

:::

### Requisitos

Para crear y manejar su Servidor WebSocket en 4D, tendrá que utilizar dos clases 4D integradas:

- esta clase (`4D.WebSocketServer`) para gestionar el propio servidor,
- la clase [`4D.WebSocketConnection`](WebSocketConnectionClass.md) para administrar conexiones y mensajes.

Además, tendrá que crear dos clases de usuario que contendrán funciones de retrollamada:

- una clase usuario para gestionar las conexiones al servidor,
- una clase usuario para gestionar mensajes.

Debe [crear el servidor WebSocket](#4dwebsocketservernew) dentro de un [worker](https://doc.4d.com/4dv19R/help/command/en/page1389.html) para mantener viva la conexión.

El [servidor Web 4D](WebServerClass.md) debe estar iniciado.

### Ejemplo

En este ejemplo básico, nuestro servidor WebSocket devolverá los mensajes en mayúsculas.

1. Crea el servidor WebSocket utilizando un worker (obligatorio) y pasa su clase de conexión al servidor como parámetro:

```4d
// crear una instancia de la clase usuario
    // que manejará las conexiones al servidor
var $handler:cs.myServerHandler
$handler:=cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss:=4D.WebSocketServer.new($handler)))  
    //asignar una variable (wss) al WebSocket permite   
    //llamar a wss.terminate() después
```

2. Defina la clase usuario `myServerHandler` que contiene las funciones de retrollamada utilizadas para manejar las conexiones al servidor:

```4d
//myServerHandler class

Function onConnection($wss : Object; $event : Object) : Object
	//returns an instance of the user class
	//that will handle the messages
	return cs.myConnectionHandler.new()
```

3. Define la clase usuario `myConnectionHandler` que contiene las funciones de retrollamada utilizadas para manejar los mensajes:

```4d
// myConnectionHandler class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	//resends the message in uppercase
	$ws.send(Uppercase($message.data))

```

:::tip JS del lado del cliente

Consulte [esta entrada de blog](https://blog.4d.com/websocket-server/) para ver un ejemplo de código Javascript del lado del cliente que gestiona una conexión WebSocket.

:::

### Objeto WebSocketServer

Los objetos de servidor WebSocket ofrecen las siguientes propiedades y funciones:

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)<br/><!-- INCLUDE #WebServerClass.scalableSession.Summary --> |
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #WebSocketServerClass.dataType.Summary -->          |
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketServerClass.handler.Summary -->             |
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)<br/><!-- INCLUDE #WebSocketServerClass.path.Summary -->                      |
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketServerClass.terminate().Summary -->   |
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #WebSocketServerClass.terminated.Summary -->    |

## 4D.WebSocketServer.new()

<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->

<!-- REF #4D.WebSocketServer.new().Params -->

| Parámetros                          | Tipo                               |     | Descripción                                                                     |
| ----------------------------------- | ---------------------------------- | :-: | ------------------------------------------------------------------------------- |
| [WSSHandler](#wsshandler-parameter) | Object                             |  -> | Objeto de la clase usuario que declara las retrollamadas del servidor WebSocket |
| [options](#options-parameter)       | Object                             |  -> | Parámetros de configuración de WebSocket                                        |
| Result                              | 4D.WebSocketServer |  <- | Nuevo objeto WebSocketServer                                                    |

<!-- END REF -->

La función `4D.WebSocketServer.new()` <!-- REF #4D.WebSocketServer.new().Summary -->crea e inicia un servidor WebSocket que utilizará las retrollamadas *WSSHandler* y (opcionalmente) *options* especificados, y devuelve un objeto `4D.WebSocketServer`<!-- END REF -->.

Llamar a esta función requiere que el [servidor web 4D](WebServerClass.md) esté iniciado. El **host** y el **port** del servidor WebSocket son los mismos que el host y el puerto del servidor Web 4D.

### Parámetro *WSSHandler*

En el parámetro *WSSHandler*, pasa una instancia de una clase de usuario que será llamada cada vez que ocurra un evento en el servidor WebSocket --esencialmente, eventos de conexión. La clase debe definir las siguientes funciones de retrollamada (solo `onConnection` es obligatoria):

| Propiedad    | Tipo                         | Descripción                                                                                                                   | Por defecto |
| ------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| onConnection | [Function](FunctionClass.md) | (obligatorio) Retro llamada cuando se inicia una nueva conexión cliente (ver más abajo) | indefinido  |
| onOpen       | [Function](FunctionClass.md) | Retrollamada cuando se inicia el servidor WebSocket (ver más abajo)                                        | indefinido  |
| onTerminate  | [Function](FunctionClass.md) | Retrollamada cuando se termina el servidor WebSocket (ver abajo)                                           | indefinido  |
| onError      | [Function](FunctionClass.md) | Retrollamada cuando se ha producido un error (ver abajo)                                                   | indefinido  |

**WSHandler.onConnection**(*WSServer* : Object ; *event* : Object) : Object | null

| Parámetros |         | Tipo                               |     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------- | ---------------------------------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |         | 4D.WebSocketServer |  <- | Objeto servidor WebSocket actual                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| evento     |         | Object                             |  <- | Parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|            | type    | Text                               |     | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|            | request | Object                             |     | objeto `request`. Contiene información sobre la solicitud de conexión (ver abajo)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Resultado  |         | Object                             |  -> | [objeto `connectionHandler`](#connectionhandler-object) (ver más abajo). Si esta función devuelve un objeto `connectionHandler`, se crea automáticamente un objeto [4D.WebSocketConnection`](WebSocketConnectionClass.md#websocketconnection-object) y se añade a la [colección de conexiones](#connections). Este objeto se recibe entonces como parámetro en cada función del objeto `connectionHandler\`. Si el valor devuelto es nulo o indefinido, se cancela la conexión. |

Esta retrollamada se llama cuando el establecimiento de la comunicación se ha completado. Debe ser llamado con un objeto [`connectionHandler` válido](#connectionhandler-object) para crear la conexión WebSocket, de lo contrario la conexión se cancela.

**WSHandler.onOpen**(*WSServer* : Object ; *event* : Object)

| Parámetros |      | Tipo                               |     | Descripción                      |
| ---------- | ---- | ---------------------------------- | :-: | -------------------------------- |
| WSServer   |      | 4D.WebSocketServer |  <- | Objeto servidor WebSocket actual |
| evento     |      | Object                             |  <- | Parámetros                       |
|            | type | Text                               |     | "open"                           |

Evento emitido cuando se inicia el servidor websocket.

**WSHandler.onTerminate**(*WSServer* : Object ; *event* : Object)

| Parámetros |      | Tipo                               |     | Descripción                      |
| ---------- | ---- | ---------------------------------- | :-: | -------------------------------- |
| WSServer   |      | 4D.WebSocketServer |  <- | Objeto servidor WebSocket actual |
| evento     |      | Object                             |  <- | Parámetros                       |
|            | type | Text                               |     | "terminate"                      |

Evento emitido cuando se cierra el servidor HTTP o el servidor WebSocket.

**WSHandler.onError**(*WSServer* : Object ; *event* : Object)

| Parámetros |        | Tipo                               |     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | ---------------------------------- | :-: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |        | 4D.WebSocketServer |  <- | Objeto servidor WebSocket actual                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| evento     |        | Object                             |  <- | Parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|            | type   | Text                               |     | "error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|            | errors | Collection                         |     | Colección de la pila de errores 4D en caso de error de ejecución<li>\[].errCode (number) - Código de error 4D</li><li>\[].message (text) - Descripción del error 4D</li><li>\[].componentSignature (text) - Firma del componente interno que ha devuelto el error</li> |

Evento emitido cuando se produce un error en el servidor WebSocket.

### Ejemplo de clase \`WSSHandler

Este ejemplo de una función básica de chat ilustra cómo manejar conexiones de servidor WebSocket en una clase *WSSHandler*.

```4d
//myWSServerHandler class

Function onConnection($wss : Object; $event : Object) : Object

	If (VerifyAddress($event.request.remoteAddress))
		// The VerifyAddress method validates the client address
		// The returned WSConnectionHandler object will be used
		// by 4D to instantiate the 4D.WebSocketConnection object
		// related to this connection
		return cs.myConnectionHandler.new()   
		// See connectionHandler object
	Else
		// The connection is cancelled		
		return Null
	End if

Function onOpen($wss : Object; $event : Object)
LogFile("*** Server started")

Function onTerminate($wss : Object; $event : Object)
LogFile("*** Server closed")

Function onError($wss : Object; $event : Object)
LogFile("!!! Server error: "+$event.errors.first().message)

```

### objeto `request`

Un objeto `request` contiene las siguientes propiedades:

| Parámetros    | Tipo   | Descripción                                                                                                                                                             |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | La petición HTTP GET del cliente. `headers.key=value` (value puede ser una colección si la misma llave aparece varias veces)         |
| query         | Object | Objeto que contiene los parámetros de la URL. Por ejemplo, si los parámetros son `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contiene sólo la URL que está presente en la petición HTTP real. Ej: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"        |
| remoteAddress | Text   | Dirección IP del cliente                                                                                                                                                |

### objeto `connectionHandler`

Como resultado de la retrollamada `WSHandler.onConnection`, pasa un objeto `connectionHandler`, que es una instancia de una clase de usuario que será llamada cada vez que ocurra un evento en la conexión WebSocket --esencialmente, mensajes recibidos. La clase debe definir las siguientes funciones de retrollamada (sólo `onMessage` es obligatoria):

| Parámetros  | Tipo                         | Descripción                                                                                         |
| ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | (obligatorio) Función llamada cuando se recibe un nuevo mensaje de esta conexión |
| onOpen      | [Function](FunctionClass.md) | Función llamada cuando se crea el `4D.WebSocketConnection`                                          |
| onTerminate | [Function](FunctionClass.md) | Función a la que se llama cuando finaliza esta conexión                                             |
| onError     | [Function](FunctionClass.md) | Función llamada cuando se produce un error                                                          |

**connectionHandler.onMessage**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Parámetros |      | Tipo                                                    |     | Descripción                         |
| ---------- | ---- | ------------------------------------------------------- | :-: | ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objeto de conexión WebSocket actual |
| evento     |      | Object                                                  |  <- | Parámetros                          |
|            | type | Text                                                    |     | "message"                           |
|            | data | Text / Blob / Object                                    |     | datos enviados por el cliente       |

Esta retrollamada para datos WebSocket. Llamada cada vez que el WebSocket recibe datos.

**connectionHandler.onOpen**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Parámetros |      | Tipo                                                    |     | Descripción                         |
| ---------- | ---- | ------------------------------------------------------- | :-: | ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objeto de conexión WebSocket actual |
| evento     |      | Object                                                  |  <- | Parámetros                          |
|            | type | Text                                                    |     | "open"                              |

Llamada cuando se crea el objeto `connectionHandler` (después del evento `WSS.onConnection`).

**connectionHandler.onTerminate**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Parámetros |        | Tipo                                                    |     | Descripción                                                                                                                                                                                                                                        |
| ---------- | ------ | ------------------------------------------------------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objeto de conexión WebSocket actual                                                                                                                                                                                                                |
| evento     |        | Object                                                  |  <- | Parámetros                                                                                                                                                                                                                                         |
|            | type   | Text                                                    |     | "terminate"                                                                                                                                                                                                                                        |
|            | code   | Number                                                  |     | Código de estado que indica por qué se ha cerrado la conexión. Si el WebSocket no devuelve un código de error, `code` se toma el valor 1005 si no se ha producido ningún error o 1006 si se ha producido un error. |
|            | reason | Text                                                    |     | Cadena que explica porque se ha cerrado la conexión. Si el websocket no devuelve una razón, el código es indefinido                                                                                                                |

Función llamada cuando se cierra el WebSocket.

**connectionHandler.onError**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Parámetros |        |            | Tipo                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Descripción                         |
| ---------- | ------ | ---------- | ------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ----------------------------------- |
| ws         |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                                                                                                                                                                                                                       <-                                                                                                                                                                                                                                                                       | Objeto de conexión WebSocket actual |
| evento     |        |            | Object                                                  |                                                                                                                                                                                                                                                                       <-                                                                                                                                                                                                                                                                       | Parámetros                          |
|            | type   |            | Text                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | "error"                             |
|            | errors | Collection |                                                         | Colección de la pila de errores 4D en caso de error de ejecución<li>\[].errCode (number) - Código de error 4D</li><li>\[].message (text) - Descripción del error 4D</li><li>\[].componentSignature (text) - Firma del componente interno que ha devuelto el error</li> |                                     |

Función llamada cuando se ha producido un error.

### Ejemplo de clase \`connectionHandler

Este ejemplo de una función básica de chat ilustra cómo gestionar mensajes en una clase *connectionHandler*.

```4d
// myConnectionHandler Class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	// Resend the message to all chat clients
	This.broadcast($ws;$message.data)

Function onOpen($ws : 4D.WebSocketConnection; $message : Object)
	// Send a message to new connected users
	$ws.send("Welcome on the chat!")
	// Send "New client connected" message to all other chat clients
	This.broadcast($ws;"New client connected")

Function onTerminate($ws : 4D.WebSocketConnection; $message : Object)
	// Send "Client disconnected" message to all other chat clients
	This.broadcast($ws;"Client disconnected")

Function broadcast($ws : 4D.WebSocketConnection; $message:text)
	var $client:4D.WebSocketConnection
	// Resend the message to all chat clients
	For each ($client; $ws.wss.connections)
		// Check that the id is not the current connection
		If ($client.id#$ws.id)
			$client.send($message)
		End if
	End for each

```

### Parámetro *options*

En el parámetro opcional *options*, pase un objeto que contenga las siguientes propiedades:

| Propiedad | Tipo | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Por defecto |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| path      | Text | Representa la ruta de acceso al servidor WebSocket. Si no se define ninguna ruta, el servidor WebSocket gestiona todas las conexiones                                                                                                                                                                                                                                                                                                             | indefinido  |
| dataType  | Text | Tipo de los datos recibidos a través de `connectionHandler.onMessage` y los datos enviados por la función [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send). Valores: "text", "blob","object"). Si "object": (send) transforma object en formato json y lo envía; (reception): recibe formato json y lo transforma en object | text        |

<!-- REF #WebSocketServerClass.connections.Desc -->

## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### Descripción

La propiedad `.connections` contiene <!-- REF #WebSocketServerClass.connections.Summary -->todas las conexiones actuales gestionadas por el servidor WebSocket<!-- END REF -->. Cada elemento de la colección es un objeto [`WebSocketConnection`](WebSocketConnectionClass.md).

Cuando se finaliza una conexión, su [`status`](WebSocketConnectionClass.md#status) cambia a "Closed" y se elimina de esta colección.

<!-- END REF -->

<!-- REF #WebSocketServerClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descripción

La propiedad `.dataType` contiene <!-- REF #WebSocketServerClass.dataType.Summary -->el tipo de los datos recibidos o enviados<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketServerClass.handler.Desc -->

## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descripción

La propiedad `.handler` contiene <!-- REF #WebSocketServerClass.handler.Summary -->el accessor que obtiene el objeto `WSSHandler` utilizado para iniciar el servidor WebSocket<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.path.Desc -->

## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descripción

La propiedad `.path` contiene <!-- REF #WebSocketServerClass.path.Summary -->el patrón de la ruta para acceder al servidor WebSocket<!-- END REF -->. Si no se ha definido ninguna ruta, el servidor WebSocket gestiona todas las conexiones.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate**()<br/>**.terminate**( *timeout* : Integer )<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Params -->

| Parámetros | Tipo    |     | Descripción                                                     |
| ---------- | ------- | :-: | --------------------------------------------------------------- |
| timeout    | Integer |  -> | Waiting time in seconds before terminating the WebSocket server |

<!-- END REF -->

#### Descripción

La función `.terminate()` <!-- REF #WebSocketServerClass.terminate().Summary -->cierra el servidor WebSocket<!-- END REF -->.

By default, if no *timeout* value is set, the function initializes close handshake and waits to receive close frame from the peer, after that sending FIN packet in attempt to perform a clean socket close. When answer received, the socket is destroyed.

If a *timeout* value is set:

- when the waiting time is reached, forcibly destroys the socket.
- if *timeout* = 0, forcibly destroys the socket without closing frames or fin packets exchange, and does it instantly without waiting time.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->

## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.terminated` contiene <!-- REF #WebSocketServerClass.terminated.Summary -->True si el servidor WebSocket está cerrado<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->
