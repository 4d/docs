---
id: WebSocketServerClass
title: WebSocketServer
---

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20     | Añadidos       |

</details>


The `WebSocketServer` class allows you to create and configure a WebSocket server in 4D. Once the 4D WebSocket server is active, you can open and use WebSocket connections between 4D and clients using the [`WebSocketConnection` class](WebSocketConnectionClass.md).

:::note Sobre los servidores WebSocket

El protocolo WebSocket ofrece un canal de comunicación full-duplex entre un servidor WebSocket y un cliente (por ejemplo, un navegador web). Para más información sobre servidores WebSocket, consulte [esta página en Wikipedia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info Ver también

Ver también [esta entrada del blog](https://blog.4d.com/websocket-server/) sobre el servidor 4D WebSocket.

:::

### Requisitos

Para crear y manejar su Servidor WebSocket en 4D, tendrá que utilizar dos clases 4D integradas:

- esta clase (`4D.WebSocketServer`) para gestionar el propio servidor,
- la clase [`4D.WebSocketConnection`](WebSocketConnectionClass.md) para gestionar conexiones y mensajes.

Además, tendrá que crear dos clases de usuario que contendrán funciones de retrollamada:

- a user class to handle server connections,
- a user class to handle messages.

Debe [crear el servidor WebSocket](#4dwebsocketservernew) dentro de un [worker](https://doc.4d.com/4dv19R/help/command/en/page1389.html) para mantener viva la conexión.

El [4D Web Server](WebServerClass.md) debe estar iniciado.


### Ejemplo

En este ejemplo básico, nuestro servidor WebSocket devolverá los mensajes en mayúsculas.

1. Crea el servidor WebSocket utilizando un worker (obligatorio) y pasa su clase de conexión al servidor como parámetro:

```4d
    //crea una instancia de la clase usuario
    //que manejará las conexiones al servidor
var $handler:cs.myServerHandler
$handler:=cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss:=4D.WebSocketServer.new($handler)))  
    //asignar una variable (wss) al WebSocket permite  
    //llamar después a wss.terminate()
```

2. Define the `myServerHandler` user class containing callback function(s) used to handle connections to the server:

```4d
//myServerHandler class

Function onConnection($wss : Object; $param : Object) : Object
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

WebSocket server objects provide the following properties and functions:

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.connections.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.dataType.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.path.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminated.Summary -->|



## 4D.WebSocketServer.new()


<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->


<!-- REF #4D.HTTPRequest.new().Params -->
| Parámetros                          | Tipo               |    | Descripción                                                       |
| ----------------------------------- | ------------------ |:--:| ----------------------------------------------------------------- |
| [WSSHandler](#wsshandler-parameter) | Object             | -> | Object of the user class declaring the WebSocket Server callbacks |
| [options](#options-parameter)       | Object             | -> | Parámetros de configuración de WebSocket                          |
| Result                              | 4D.WebSocketServer | <- | New WebSocketServer object|<!-- END REF -->


|


La función `4D.WebSocketServer.new()` <!-- REF #4D.WebSocketServer.new().Summary -->creates and starts a WebSocket server that will use the specified *WSSHandler* callbacks and (optionally) *options*, and returns a `4D.WebSocketServer` object<!-- END REF -->.

Calling this function requires that the [4D Web Server](WebServerClass.md) is started. The **host** and **port** of the WebSocket server are the same as the host and port of the 4D Web Server.




### Parámetro *WSSHandler*

In the *WSSHandler* parameter, pass an instance of a user class that will be called every time an event occurs on the WebSocket server --essentially, connection events. The class should define the following callback functions (only `onConnection` is mandatory):

| Propiedad    | Tipo                         | Descripción                                                              | Por defecto |
| ------------ | ---------------------------- | ------------------------------------------------------------------------ | ----------- |
| onConnection | [Function](FunctionClass.md) | (mandatory) Callback when a new client connection is started (see below) | indefinido  |
| onOpen       | [Function](FunctionClass.md) | Callback when the WebSocket server is started (see below)                | indefinido  |
| onTerminate  | [Function](FunctionClass.md) | Callback when the WebSocket server is terminated (see below)             | indefinido  |
| onError      | [Function](FunctionClass.md) | Callback when an error has occurred (see below)                          | indefinido  |


**WSHandler.onConnection**(*WSServer* : Object ; *param* : Object) : Object | null

| Parámetros |         | Tipo               |    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------- | ------------------ |:--:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |         | 4D.WebSocketServer | <- | Objeto servidor WebSocket actual                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| param      |         | Object             | <- | Parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|            | type    | Text               |    | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|            | request | Object             |    | objeto `request`. Contiene información sobre la solicitud de conexión (ver abajo)                                                                                                                                                                                                                                                                                                                                                                                            |
| Resultado  |         | Object             | -> | objeto [`connectionHandler`](#connectionhandler-object) (ver abajo). Si esta función devuelve un objeto `connectionHandler`, se crea automáticamente un objeto [`4D.WebSocketConnection`](WebSocketConnectionClass.md#websocketconnection-object) y se añade a la colección de conexiones [](#connections). This object is then received as parameter in each function of the `connectionHandler` object. Si el valor devuelto es nulo o indefinido, se cancela la conexión. |

This callback is called when the handshake is complete. It must be called with a valid [`connectionHandler` object](#connectionhandler-object) to create the WebSocket connection, otherwise the connection is cancelled.


**WSHandler.onOpen**(*WSServer* : Object ; *param* : Object)

| Parámetros |      | Tipo               |    | Descripción                      |
| ---------- | ---- | ------------------ |:--:| -------------------------------- |
| WSServer   |      | 4D.WebSocketServer | <- | Objeto servidor WebSocket actual |
| param      |      | Object             | <- | Parámetros                       |
|            | type | Text               |    | "open"                           |

Evento emitido cuando se inicia el servidor websocket.


**WSHandler.onTerminate**(*WSServer* : Object ; *param* : Object)

| Parámetros |      | Tipo               |    | Descripción                      |
| ---------- | ---- | ------------------ |:--:| -------------------------------- |
| WSServer   |      | 4D.WebSocketServer | <- | Objeto servidor WebSocket actual |
| param      |      | Object             | <- | Parámetros                       |
|            | type | Text               |    | "terminate"                      |

Evento emitido cuando se cierra el servidor HTTP o el servidor WebSocket.


**WSHandler.onError**(*WSServer* : Object ; *param* : Object)

| Parámetros |            | Tipo               |    | Descripción                                                                                                                         |
| ---------- | ---------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |            | 4D.WebSocketServer | <- | Objeto servidor WebSocket actual                                                                                                    |
| param      |            | Object             | <- | Parámetros                                                                                                                          |
|            | type       | Text               |    | "error"                                                                                                                             |
|            | statusText | Text               |    | HTTP error or last error returned in the 4D error stack                                                                             |
|            | errors     | Collection         |    | Collection of 4D errors stack in case of execution error<li>[ ].errCode (número) - Código de error 4D</li><li>[ ].message (text) - Descripción del error 4D</li><li>[ ].componentSignature (text) - Firma del componente interno que ha devuelto el error</li> |


Evento emitido cuando se produce un error en el servidor WebSocket.

**WSHandler.onError**(*WSServer* : Object ; *param* : Object)

| Parámetros |            | Tipo               |    | Descripción                                                                                                                         |
| ---------- | ---------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |            | 4D.WebSocketServer | <- | Objeto servidor WebSocket actual                                                                                                    |
| param      |            | Object             | <- | Parámetros                                                                                                                          |
|            | type       | Text               |    | "error"                                                                                                                             |
|            | statusText | Text               |    | HTTP error or last error returned in the 4D error stack                                                                             |
|            | errors     | Collection         |    | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  Código de error 4D</li><li>\[].message (text) - Descripción del error 4D</li><li>\[].componentSignature (text) - Firma del componente interno que ha devuelto el error</li> |


Evento emitido cuando se produce un error en el servidor WebSocket.

### Ejemplo de clase `WSSHandler`

This example of a basic chat feature illustrates how to handle WebSocket server connections in a *WSSHandler* class.

```4d
//myWSServerHandler class 

Function onConnection($wss : Object; $param : Object) : Object

    If (VerifyAddress($param.request.remoteAddress))
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

Function onOpen($wss : Object; $param : Object)
LogFile("*** Server started")

Function onTerminate($wss : Object; $param : Object)
LogFile("*** Server closed")

Function onError($wss : Object; $param : Object)
LogFile("!!! Error del servidor: "+$param.statusText)

```

### `request` objeto

Un objeto `request` contiene las siguientes propiedades:

| Parámetros    | Tipo   | Descripción                                                                                                                                                 |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | La petición HTTP GET del cliente. `headers.key=value` (el valor puede ser una colección si la misma llave aparece varias veces)                             |
| query         | Object | Objeto que contiene los parámetros de la URL. Por ejemplo, si los parámetros son `?key1=valor1&key2=valor2` -> `query.key1=valor1`, `query.key2=valor2` |
| url           | Text   | contiene sólo la URL que está presente en la petición HTTP real. Ejemplo: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"                       |
| remoteAddress | Text   | Dirección IP del cliente                                                                                                                                    |


### Objeto `connectionHandler`

Como resultado de la retrollamada `WSHandler.onConnection`, pasa un objeto `connectionHandler`, que es una instancia de una clase de usuario que será llamada cada vez que ocurra un evento en la conexión WebSocket --esencialmente, mensajes recibidos. La clase debe definir las siguientes funciones de retrollamada (sólo `onMessage` es obligatoria):

| Parámetros  | Tipo                         | Descripción                                                                      |
| ----------- | ---------------------------- | -------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | (obligatorio) Función llamada cuando se recibe un nuevo mensaje de esta conexión |
| onOpen      | [Function](FunctionClass.md) | Función llamada cuando se crea `4D.WebSocketConnection`                          |
| onTerminate | [Function](FunctionClass.md) | Función a la que se llama cuando finaliza esta conexión                          |
| onError     | [Function](FunctionClass.md) | Función llamada cuando se produce un error                                       |


**connectionHandler.onMessage**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| Parámetros |      | Tipo                                                    |    | Descripción                         |
| ---------- | ---- | ------------------------------------------------------- |:--:| ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objeto de conexión WebSocket actual |
| param      |      | Object                                                  | <- | Parámetros                          |
|            | type | Text                                                    |    | "message"                           |
|            | data | Text / Blob / Object                                    |    | datos enviados por el cliente       |

This Callback for WebSocket data. Called each time the WebSocket receives data.


**connectionHandler.onOpen**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| Parámetros |      | Tipo                                                    |    | Descripción                         |
| ---------- | ---- | ------------------------------------------------------- |:--:| ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objeto de conexión WebSocket actual |
| param      |      | Object                                                  | <- | Parámetros                          |
|            | type | Text                                                    |    | "open"                              |

Called when the `connectionHandler` object is created (after `WSS.onConnection` event).


**connectionHandler.onTerminate**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| Parámetros |        | Tipo                                                    |    | Descripción                                                                                                                                                                             |
| ---------- | ------ | ------------------------------------------------------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objeto de conexión WebSocket actual                                                                                                                                                     |
| param      |        | Object                                                  | <- | Parámetros                                                                                                                                                                              |
|            | type   | Text                                                    |    | "terminate"                                                                                                                                                                             |
|            | code   | Number                                                  |    | Status code indicating why the connection has been closed. If the WebSocket does not return an error code, `code` is set to 1005 if no error occurred or to 1006 if there was an error. |
|            | reason | Text                                                    |    | String explaining why the connection has been closed. Si el websocket no devuelve una razón, el código es indefinido                                                                    |

Función llamada cuando se cierra el WebSocket.

**connectionHandler.onError**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| Parámetros |        |           | Tipo                                                    |    | Descripción                                                                                                                         |
| ---------- | ------ | --------- | ------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        |           | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objeto de conexión WebSocket actual                                                                                                 |
| param      |        |           | Object                                                  | <- | Parámetros                                                                                                                          |
|            | type   |           | Text                                                    |    | "terminate"                                                                                                                         |
|            | status |           | Object                                                  |    |                                                                                                                                     |
|            |        | HTTPError | Text                                                    |    | HTTP error or last error returned in the 4D error stack                                                                             |
|            |        | errors    | Collection                                              |    | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  Código de error 4D</li><li>\[].message (text) - Descripción del error 4D</li><li>\[].componentSignature (text) - Firma del componente interno que ha devuelto el error</li> |

Función llamada cuando se ha producido un error.

### Ejemplo de class `connectionHandler`

This example of a basic chat feature illustrates how to handle messages in a *connectionHandler* class.

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


### *options* parameter

In the optional *options* parameter, pass an object that contains the following properties:

| Propiedad | Tipo | Descripción                                                                                                                                                                                                                                                                                                                                   | Por defecto |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| path      | Text | Representa la ruta de acceso al servidor WebSocket. If no path is defined, the WebSocket server manages all the connections                                                                                                                                                                                                                   | indefinido  |
| dataType  | Text | Type of the data received through the `connectionHandler.onMessage` and the data send by [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) function. Valores: "text", "blob","object"). If "object": (send) transforms object into a json format and sends it; (reception): receives json format and transforms it into object | text        |


<!-- REF #WebSocketServerClass.connections.Desc -->
## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**connections** : Collection<!-- END REF -->

#### Descripción

La propiedad `.connections` contiene <!-- REF #WebSocketServerClass.connections.Summary -->todas las conexiones actuales gestionadas por el servidor WebSocket<!-- END REF -->. Cada elemento de la colección es un objeto [`WebSocketConnection`](WebSocketConnectionClass.md).

Cuando se finaliza una conexión, su estado [``](WebSocketConnectionClass.md#status) cambia a "Closed" y se elimina de esta colección.

<!-- END REF -->



<!-- REF #WebSocketServerClass.dataType.Desc -->
## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**dataType**: Text<!-- END REF -->

#### Descripción

La propiedad `.dataType` contiene <!-- REF #WebSocketServerClass.dataType.Summary -->el tipo de datos recibidos o enviados<!-- END REF -->.

Esta propiedad es de sólo lectura.
<!-- END REF -->


<!-- REF #WebSocketServerClass.handler.Desc -->
## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**handler**: Object<!-- END REF -->

#### Descripción

La propiedad `.handler` contiene <!-- REF #WebSocketServerClass.handler.Summary -->the accessor that gets the `WSSHandler` object used to initiate the WebSocket server<!-- END REF -->.

<!-- END REF -->


<!-- REF #WebSocketServerClass.path.Desc -->
## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**path**: Text<!-- END REF -->

#### Descripción

La propiedad `.path` contiene <!-- REF #WebSocketServerClass.path.Summary -->the pattern of the path to access the WebSocket server<!-- END REF -->. If no path was defined, the WebSocket server manages all connections.

Esta propiedad es de sólo lectura.
<!-- END REF -->


<!-- REF #WebSocketServerClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate()**<!-- END REF -->


<!-- REF #WebSocketServerClass.terminate().Params -->
| Parámetros | Tipo |  | Descripción                                             |
| ---------- | ---- |::| ------------------------------------------------------- |
|            |      |  | No requiere ningún parámetro|<!-- END REF -->


|


#### Descripción

La función `.terminate()` <!-- REF #WebSocketServerClass.terminate().Summary -->cierra el servidor WebSocket<!-- END REF -->. 

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->
## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**terminated**: Boolean<!-- END REF -->

#### Descripción

La propiedad `.terminated` contiene <!-- REF #WebSocketServerClass.terminated.Summary -->True si el servidor WebSocket está cerrado<!-- END REF -->.

Esta propiedad es de sólo lectura.
<!-- END REF -->

