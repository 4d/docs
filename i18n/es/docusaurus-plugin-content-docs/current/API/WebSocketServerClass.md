---
id: WebSocketServerClass
title: WebSocketServer
---

<details><summary>History</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20     | Añadidos       |

</details>

The `WebSocketServer` class allows you to create and configure a WebSocket server in 4D. Once the 4D WebSocket server is active, you can open and use WebSocket connections between 4D and clients using the [`WebSocketConnection` class](WebSocketConnectionClass.md).

:::note Acerca de los servidores WebSocket

El protocolo WebSocket ofrece un canal de comunicación full-duplex entre un servidor WebSocket y un cliente (por ejemplo, un navegador web). For more information on WebSocket servers, read [this page on Wikipedia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info Ver también

See also [this blog post](https://blog.4d.com/new-built-in-websocket-server/) about the 4D WebSocket server.

:::

### Requisitos

Para crear y manejar su Servidor WebSocket en 4D, tendrá que utilizar dos clases 4D integradas:

- this class (`4D.WebSocketServer`) to manage the server itself,
- the [`4D.WebSocketConnection`](WebSocketConnectionClass.md) class to manage connections and messages.

Además, tendrá que crear dos clases de usuario que contendrán funciones de retrollamada:

- una clase usuario para gestionar las conexiones al servidor,
- una clase usuario para gestionar mensajes.

You must [create the WebSocket server](#4dwebsocketservernew) within a [worker](https://doc.4d.com/4dv19R/help/command/en/page1389.html) to keep the connection alive.

The [4D Web Server](WebServerClass.md) must be started.

### Ejemplo

En este ejemplo básico, nuestro servidor WebSocket devolverá los mensajes en mayúsculas.

1. Crea el servidor WebSocket utilizando un worker (obligatorio) y pasa su clase de conexión al servidor como parámetro:

```4d
	//create an instance of the user class
	//that will handle the connections to the server
var $handler:cs.myServerHandler
$handler:=cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss:=4D.WebSocketServer.new($handler)))  
	//assign a variable (wss) to the WebSocket allows you  
	//to call wss.terminate() afterwards
```

2. Define the `myServerHandler` user class containing callback function(s) used to handle connections to the server:

```4d
//myServerHandler class

Function onConnection($wss : Object; $event : Object) : Object
	//returns an instance of the user class
	//that will handle the messages
	return cs.myConnectionHandler.new() 
```

3. Define the `myConnectionHandler` user class containing callback function(s) used to handle messages:

```4d
// myConnectionHandler class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	//resends the message in uppercase	
	$ws.send(Uppercase($message.data))

```

:::tip JS del lado del cliente

See [this blog post](https://blog.4d.com/websocket-server/) for an example of client-side Javascript code handling a WebSocket connection.

:::

### Objeto WebSocketServer

Los objetos de servidor WebSocket ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.connections.Summary --> |
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.dataType.Summary -->          |
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.handler.Summary -->             |
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.path.Summary -->                      |
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminate().Summary -->   |
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminated.Summary -->    |

## 4D.WebSocketServer.new()

<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->

<!-- REF #4D.WebSocketServer.new().Params -->

| Parámetros                          | Tipo               |     | Descripción                                                                     |                  |
| ----------------------------------- | ------------------ | :-: | ------------------------------------------------------------------------------- | ---------------- |
| [WSSHandler](#wsshandler-parameter) | Object             |  -> | Objeto de la clase usuario que declara las retrollamadas del servidor WebSocket |                  |
| [options](#options-parameter)       | Object             |  -> | Parámetros de configuración de WebSocket                                        |                  |
| Result                              | 4D.WebSocketServer |  <- | Nuevo objeto WebSocketServer                                                    | <!-- END REF --> |

The `4D.WebSocketServer.new()` function <!-- REF #4D.WebSocketServer.new().Summary -->creates and starts a WebSocket server that will use the specified _WSSHandler_ callbacks and (optionally) _options_, and returns a `4D.WebSocketServer` object<!-- END REF -->.

Calling this function requires that the [4D Web Server](WebServerClass.md) is started. The **host** and **port** of the WebSocket server are the same as the host and port of the 4D Web Server.

### Parámetro _WSSHandler_

In the _WSSHandler_ parameter, pass an instance of a user class that will be called every time an event occurs on the WebSocket server --essentially, connection events. The class should define the following callback functions (only `onConnection` is mandatory):

| Propiedad    | Tipo                         | Descripción                                                                             | Por defecto |
| ------------ | ---------------------------- | --------------------------------------------------------------------------------------- | ----------- |
| onConnection | [Function](FunctionClass.md) | (obligatorio) Retro llamada cuando se inicia una nueva conexión cliente (ver más abajo) | indefinido  |
| onOpen       | [Function](FunctionClass.md) | Retrollamada cuando se inicia el servidor WebSocket (ver más abajo)                     | indefinido  |
| onTerminate  | [Function](FunctionClass.md) | Retrollamada cuando se termina el servidor WebSocket (ver abajo)                        | indefinido  |
| onError      | [Function](FunctionClass.md) | Retrollamada cuando se ha producido un error (ver abajo)                                | indefinido  |

**WSHandler.onConnection**(_WSServer_ : Object ; _event_ : Object) : Object | null

| Parámetros |         | Tipo               |     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------- | ------------------ | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |         | 4D.WebSocketServer |  <- | Objeto servidor WebSocket actual                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| evento     |         | Object             |  <- | Parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|            | type    | Text               |     | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|            | request | Object             |     | objeto `request`. Contiene información sobre la solicitud de conexión (ver abajo)                                                                                                                                                                                                                                                                                                                                                                                             |
| Resultado  |         | Object             |  -> | [`connectionHandler` object](#connectionhandler-object) (see below). If this function returns a `connectionHandler` object, a [`4D.WebSocketConnection` object](WebSocketConnectionClass.md#websocketconnection-object) is automatically created and added to the [collection of connections](#connections). This object is then received as parameter in each function of the `connectionHandler` object. Si el valor devuelto es nulo o indefinido, se cancela la conexión. |

Esta retrollamada se llama cuando el establecimiento de la comunicación se ha completado. It must be called with a valid [`connectionHandler` object](#connectionhandler-object) to create the WebSocket connection, otherwise the connection is cancelled.

**WSHandler.onOpen**(_WSServer_ : Object ; _event_ : Object)

| Parámetros |      | Tipo               |     | Descripción                      |
| ---------- | ---- | ------------------ | :-: | -------------------------------- |
| WSServer   |      | 4D.WebSocketServer |  <- | Objeto servidor WebSocket actual |
| evento     |      | Object             |  <- | Parámetros                       |
|            | type | Text               |     | "open"                           |

Evento emitido cuando se inicia el servidor websocket.

**WSHandler.onTerminate**(_WSServer_ : Object ; _event_ : Object)

| Parámetros |      | Tipo               |     | Descripción                      |
| ---------- | ---- | ------------------ | :-: | -------------------------------- |
| WSServer   |      | 4D.WebSocketServer |  <- | Objeto servidor WebSocket actual |
| evento     |      | Object             |  <- | Parámetros                       |
|            | type | Text               |     | "terminate"                      |

Evento emitido cuando se cierra el servidor HTTP o el servidor WebSocket.

**WSHandler.onError**(_WSServer_ : Object ; _event_ : Object)

| Parámetros |        | Tipo               |     | Descripción                                                                                                                                                                                                                                                         |
| ---------- | ------ | ------------------ | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |        | 4D.WebSocketServer |  <- | Objeto servidor WebSocket actual                                                                                                                                                                                                                                    |
| evento     |        | Object             |  <- | Parámetros                                                                                                                                                                                                                                                          |
|            | type   | Text               |     | "error"                                                                                                                                                                                                                                                             |
|            | errors | Collection         |     | Collection of 4D error stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |

Evento emitido cuando se produce un error en el servidor WebSocket.

### Ejemplo de clase \`WSSHandler

This example of a basic chat feature illustrates how to handle WebSocket server connections in a _WSSHandler_ class.

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

### `request` object

A `request` object contains the following properties:

| Parámetros    | Tipo   | Descripción                                                                                                                                          |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | La petición HTTP GET del cliente. `headers.key=value` (value can be a collection if the same key appears multiple times)                             |
| query         | Object | Objeto que contiene los parámetros de la URL. For example, if parameters are: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contiene sólo la URL que está presente en la petición HTTP real. Ex: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"                     |
| remoteAddress | Text   | Dirección IP del cliente                                                                                                                             |

### objeto `connectionHandler`

As a result of the `WSHandler.onConnection` callback, pass a `connectionHandler` object, which is an instance of a user class that will be called every time an event occurs in the WebSocket connection --essentially, messages received. The class should define the following callback functions (only `onMessage` is mandatory):

| Parámetros  | Tipo                         | Descripción                                                                      |
| ----------- | ---------------------------- | -------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | (obligatorio) Función llamada cuando se recibe un nuevo mensaje de esta conexión |
| onOpen      | [Function](FunctionClass.md) | Function called when the `4D.WebSocketConnection` is created                     |
| onTerminate | [Function](FunctionClass.md) | Función a la que se llama cuando finaliza esta conexión                          |
| onError     | [Function](FunctionClass.md) | Función llamada cuando se produce un error                                       |

**connectionHandler.onMessage**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Parámetros |      | Tipo                                                    |     | Descripción                         |
| ---------- | ---- | ------------------------------------------------------- | :-: | ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objeto de conexión WebSocket actual |
| evento     |      | Object                                                  |  <- | Parámetros                          |
|            | type | Text                                                    |     | "message"                           |
|            | data | Text / Blob / Object                                    |     | datos enviados por el cliente       |

Esta retrollamada para datos WebSocket. Llamada cada vez que el WebSocket recibe datos.

**connectionHandler.onOpen**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Parámetros |      | Tipo                                                    |     | Descripción                         |
| ---------- | ---- | ------------------------------------------------------- | :-: | ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objeto de conexión WebSocket actual |
| evento     |      | Object                                                  |  <- | Parámetros                          |
|            | type | Text                                                    |     | "open"                              |

Called when the `connectionHandler` object is created (after `WSS.onConnection` event).

**connectionHandler.onTerminate**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Parámetros |        | Tipo                                                    |     | Descripción                                                                                                                                                                                 |
| ---------- | ------ | ------------------------------------------------------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objeto de conexión WebSocket actual                                                                                                                                                         |
| evento     |        | Object                                                  |  <- | Parámetros                                                                                                                                                                                  |
|            | type   | Text                                                    |     | "terminate"                                                                                                                                                                                 |
|            | code   | Number                                                  |     | Código de estado que indica por qué se ha cerrado la conexión. If the WebSocket does not return an error code, `code` is set to 1005 if no error occurred or to 1006 if there was an error. |
|            | reason | Text                                                    |     | Cadena que explica porque se ha cerrado la conexión. Si el websocket no devuelve una razón, el código es indefinido                                                                         |

Función llamada cuando se cierra el WebSocket.

**connectionHandler.onError**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Parámetros |        |            | Tipo                                                    |                                                                                                                                                                                                                                                                      | Descripción                         |
| ---------- | ------ | ---------- | ------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ----------------------------------- |
| ws         |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                                                                                  <-                                                                                                                                  | Objeto de conexión WebSocket actual |
| evento     |        |            | Object                                                  |                                                                                                                                  <-                                                                                                                                  | Parámetros                          |
|            | type   |            | Text                                                    |                                                                                                                                                                                                                                                                      | "error"                             |
|            | errors | Collection |                                                         | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |                                     |

Función llamada cuando se ha producido un error.

### Example of `connectionHandler` class

This example of a basic chat feature illustrates how to handle messages in a _connectionHandler_ class.

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

### Parámetro _options_

In the optional _options_ parameter, pass an object that contains the following properties:

| Propiedad | Tipo | Descripción                                                                                                                                                                                                                                                                                                                         | Por defecto |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| path      | Text | Representa la ruta de acceso al servidor WebSocket. Si no se define ninguna ruta, el servidor WebSocket gestiona todas las conexiones                                                                                                                                                                                               | indefinido  |
| dataType  | Text | Type of the data received through the `connectionHandler.onMessage` and the data send by [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) function. Valores: "text", "blob","object"). Si "object": (send) transforma object en formato json y lo envía; (reception): recibe formato json y lo transforma en object | text        |

<!-- REF #WebSocketServerClass.connections.Desc -->

## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### Descripción

The `.connections` property contains <!-- REF #WebSocketServerClass.connections.Summary -->all current connections handled by the WebSocket server<!-- END REF -->. Each element of the collection is a [`WebSocketConnection` object](WebSocketConnectionClass.md).

When a connection is terminated, its [`status`](WebSocketConnectionClass.md#status) changes to "Closed" and it is removed from this collection.

<!-- END REF -->

<!-- REF #WebSocketServerClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descripción

The `.dataType` property contains <!-- REF #WebSocketServerClass.dataType.Summary -->the type of the data received or sent<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketServerClass.handler.Desc -->

## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descripción

The `.handler` property contains <!-- REF #WebSocketServerClass.handler.Summary -->the accessor that gets the `WSSHandler` object used to initiate the WebSocket server<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.path.Desc -->

## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descripción

The `.path` property contains <!-- REF #WebSocketServerClass.path.Summary -->the pattern of the path to access the WebSocket server<!-- END REF -->. Si no se ha definido ninguna ruta, el servidor WebSocket gestiona todas las conexiones.

Esta propiedad es de sólo lectura.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Params -->

| Parámetros | Tipo |     | Descripción                     |                  |
| ---------- | ---- | :-: | ------------------------------- | ---------------- |
|            |      |     | Does not require any parameters | <!-- END REF --> |

#### Descripción

The `.terminate()` function <!-- REF #WebSocketServerClass.terminate().Summary -->closes the WebSocket server<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->

## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Descripción

The `.terminated` property contains <!-- REF #WebSocketServerClass.terminated.Summary -->True if the WebSocket server is closed<!-- END REF -->.

Esta propiedad es de sólo lectura.

<!-- END REF -->
