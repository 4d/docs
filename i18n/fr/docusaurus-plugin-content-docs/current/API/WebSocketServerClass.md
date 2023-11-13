---
id: WebSocketServerClass
title: WebSocketServer
---

<details><summary>History</summary>

| Version | Modifications |
| ------- | ------------- |
| v20     | Ajout         |

</details>

La classe `WebSocketServer` vous permet de créer et configurer un serveur WebSocket en 4D. Une fois que le serveur WebSocket 4D est actif, vous pouvez ouvrir et utiliser des connexions WebSocket entre 4D et les clients en utilisant la classe [`WebSocketConnection`](WebSocketConnectionClass.md).

:::note À propos des serveurs WebSocket

Le protocole WebSocket fournit un canal de communication full-duplex entre un serveur WebSocket et un client (par exemple un navigateur Web). Pour plus d'informations sur les serveurs WebSocket, lisez [cette page sur Wikipedia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info Voir également

Voir également [cet article de blog](https://blog.4d.com/new-built-in-websocket-server/) sur le serveur WebSocket 4D.

:::

### Conditions requises

Pour créer et gérer votre serveur WebSocket dans 4D, vous devrez utiliser deux classes intégrées à 4D :

- cette classe (`4D.WebSocketServer`) pour gérer le serveur lui-même,
- la classe [`4D.WebSocketConnection`](WebSocketConnectionClass.md) pour gérer les connexions et les messages.

De plus, vous devrez créer deux classes utilisateurs qui contiendront les fonctions de callback :

- une classe utilisateur pour gérer les connexions serveur,
- une classe utilisateur pour gérer les messages.

Vous devez [créer le serveur WebSocket](#4dwebsocketservernew) au sein d'un [worker](https://doc.4d.com/4dv20/help/command/fr/page1389.html) pour maintenir la connexion active.

Le [serveur Web 4D](WebServerClass.md) doit être démarré.

### Exemple

Dans cet exemple de base, notre serveur WebSocket renverra les messages en majuscules.

1. Créez le serveur WebSocket en utilisant un worker (obligatoire) et passez votre classe de connexion serveur en tant que paramètre :

```4d
// Créer une instance de la classe utilisateur
	// qui gérera les connexions vers le serveur
var $handler: cs.myServerHandler
$handler := cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss := 4D.WebSocketServer.new($handler)))
    // attribuer une variable (wss) au WebSocket vous permet
    // d'appeler wss.terminate() par la suite.
```

2. Définissez la classe utilisateur `myServerHandler` contenant la ou les fonction(s) de rappel utilisée(s) pour gérer les connexions au serveur :

```4d
// Classe myServerHandler

Function onConnection($wss: Object; $event: Object): Object
    // retourne une instance de la classe utilisateur
    // qui traitera les messages
    return cs.myConnectionHandler.new()
```

3. Définissez la classe utilisateur `myConnectionHandler` contenant la ou les fonction(s) de callback utilisée(s) pour gérer les messages :

```4d
// Classe myConnectionHandler

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	// renvoie le message en majuscules
	$ws.send(Uppercase($message.data))
```

:::tip JS Côté client

Voir [cet article de blog](https://blog.4d.com/websocket-server/) pour un exemple de code Javascript côté client gérant une connexion WebSocket.

:::

### Objet WebSocketServer

Les objets WebSocketServer offrent les propriétés et fonctions suivantes :

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

| Paramètres                          | Type               |     | Description                                                                 |                  |
| ----------------------------------- | ------------------ | :-: | --------------------------------------------------------------------------- | ---------------- |
| [WSSHandler](#wsshandler-parameter) | Object             |  -> | Objet de la classe utilisateur déclarant les callbacks du serveur WebSocket |                  |
| [options](#options-parameter)       | Object             |  -> | Paramètres de configuration du WebSocket                                    |                  |
| Résultat                            | 4D.WebSocketServer |  <- | Nouvel objet WebSocketServer                                                | <!-- END REF --> |

The `4D.WebSocketServer.new()` function <!-- REF #4D.WebSocketServer.new().Summary -->creates and starts a WebSocket server that will use the specified _WSSHandler_ callbacks and (optionally) _options_, and returns a `4D.WebSocketServer` object<!-- END REF -->.

Calling this function requires that the [4D Web Server](WebServerClass.md) is started. The **host** and **port** of the WebSocket server are the same as the host and port of the 4D Web Server.

### _WSSHandler_ parameter

In the _WSSHandler_ parameter, pass an instance of a user class that will be called every time an event occurs on the WebSocket server --essentially, connection events. The class should define the following callback functions (only `onConnection` is mandatory):

| Propriété    | Type                         | Description                                                              | Par défaut |
| ------------ | ---------------------------- | ------------------------------------------------------------------------ | ---------- |
| onConnection | [Function](FunctionClass.md) | (mandatory) Callback when a new client connection is started (see below) | undefined  |
| onOpen       | [Function](FunctionClass.md) | Callback when the WebSocket server is started (see below)                | undefined  |
| onTerminate  | [Function](FunctionClass.md) | Callback when the WebSocket server is terminated (see below)             | undefined  |
| onError      | [Function](FunctionClass.md) | Callback when an error has occurred (see below)                          | undefined  |

**WSHandler.onConnection**(_WSServer_ : Object ; _event_ : Object) : Object | null

| Paramètres |         | Type               |     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------- | ------------------ | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |         | 4D.WebSocketServer |  <- | Current WebSocket server object                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| evénement  |         | Object             |  <- | Paramètres                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|            | type    | Text               |     | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|            | request | Object             |     | `request` object. Contains information on the connection request (see below)                                                                                                                                                                                                                                                                                                                                                                                                        |
| Résultat   |         | Object             |  -> | [`connectionHandler` object](#connectionhandler-object) (see below). If this function returns a `connectionHandler` object, a [`4D.WebSocketConnection` object](WebSocketConnectionClass.md#websocketconnection-object) is automatically created and added to the [collection of connections](#connections). This object is then received as parameter in each function of the `connectionHandler` object. If the returned value is null or undefined, the connection is cancelled. |

This callback is called when the handshake is complete. It must be called with a valid [`connectionHandler` object](#connectionhandler-object) to create the WebSocket connection, otherwise the connection is cancelled.

**WSHandler.onOpen**(_WSServer_ : Object ; _event_ : Object)

| Paramètres |      | Type               |     | Description                     |
| ---------- | ---- | ------------------ | :-: | ------------------------------- |
| WSServer   |      | 4D.WebSocketServer |  <- | Current WebSocket server object |
| evénement  |      | Object             |  <- | Paramètres                      |
|            | type | Text               |     | "open"                          |

Event emitted when the websocket server is started.

**WSHandler.onTerminate**(_WSServer_ : Object ; _event_ : Object)

| Paramètres |      | Type               |     | Description                     |
| ---------- | ---- | ------------------ | :-: | ------------------------------- |
| WSServer   |      | 4D.WebSocketServer |  <- | Current WebSocket server object |
| evénement  |      | Object             |  <- | Paramètres                      |
|            | type | Text               |     | "terminate"                     |

Event emitted when the HTTP server or the WebSocket server is closed.

**WSHandler.onError**(_WSServer_ : Object ; _event_ : Object)

| Paramètres |        | Type               |     | Description                                                                                                                                                                                                                                                         |
| ---------- | ------ | ------------------ | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |        | 4D.WebSocketServer |  <- | Current WebSocket server object                                                                                                                                                                                                                                     |
| evénement  |        | Object             |  <- | Paramètres                                                                                                                                                                                                                                                          |
|            | type   | Text               |     | "error"                                                                                                                                                                                                                                                             |
|            | errors | Collection         |     | Collection of 4D error stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |

Event emitted when an error occurs on the WebSocket server.

### Example of `WSSHandler` class

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

| Paramètres    | Type   | Description                                                                                                                                     |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | The client HTTP GET request. `headers.key=value` (value can be a collection if the same key appears multiple times)                             |
| query         | Object | Object that contains the URL parameters. For example, if parameters are: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contains only the URL that is present in the actual HTTP request. Ex: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"               |
| remoteAddress | Text   | IP Address of the client                                                                                                                        |

### `connectionHandler` object

As a result of the `WSHandler.onConnection` callback, pass a `connectionHandler` object, which is an instance of a user class that will be called every time an event occurs in the WebSocket connection --essentially, messages received. The class should define the following callback functions (only `onMessage` is mandatory):

| Paramètres  | Type                         | Description                                                                     |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | (mandatory) Function called when a new message is received from this connection |
| onOpen      | [Function](FunctionClass.md) | Function called when the `4D.WebSocketConnection` is created                    |
| onTerminate | [Function](FunctionClass.md) | Function called when this connection is terminated                              |
| onError     | [Function](FunctionClass.md) | Function called when an error occured                                           |

**connectionHandler.onMessage**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Paramètres |      | Type                                                    |     | Description                         |
| ---------- | ---- | ------------------------------------------------------- | :-: | ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Current WebSocket connection object |
| evénement  |      | Object                                                  |  <- | Paramètres                          |
|            | type | Text                                                    |     | "message"                           |
|            | data | Texte / Blob / Objet                                    |     | data sent by the client             |

This Callback for WebSocket data. Called each time the WebSocket receives data.

**connectionHandler.onOpen**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Paramètres |      | Type                                                    |     | Description                         |
| ---------- | ---- | ------------------------------------------------------- | :-: | ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Current WebSocket connection object |
| evénement  |      | Object                                                  |  <- | Paramètres                          |
|            | type | Text                                                    |     | "open"                              |

Called when the `connectionHandler` object is created (after `WSS.onConnection` event).

**connectionHandler.onTerminate**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Paramètres |        | Type                                                    |     | Description                                                                                                                                                                             |
| ---------- | ------ | ------------------------------------------------------- | :-: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Current WebSocket connection object                                                                                                                                                     |
| evénement  |        | Object                                                  |  <- | Paramètres                                                                                                                                                                              |
|            | type   | Text                                                    |     | "terminate"                                                                                                                                                                             |
|            | code   | Number                                                  |     | Status code indicating why the connection has been closed. If the WebSocket does not return an error code, `code` is set to 1005 if no error occurred or to 1006 if there was an error. |
|            | reason | Text                                                    |     | String explaining why the connection has been closed. If the websocket doesn't return an reason, code is undefined                                                                      |

Function called when the WebSocket is closed.

**connectionHandler.onError**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Paramètres |        |            | Type                                                    |                                                                                                                                                                                                                                                                      | Description                         |
| ---------- | ------ | ---------- | ------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ----------------------------------- |
| ws         |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                                                                                  <-                                                                                                                                  | Current WebSocket connection object |
| evénement  |        |            | Object                                                  |                                                                                                                                  <-                                                                                                                                  | Paramètres                          |
|            | type   |            | Text                                                    |                                                                                                                                                                                                                                                                      | "error"                             |
|            | errors | Collection |                                                         | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |                                     |

Function called when an error has occurred.

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

### _options_ parameter

In the optional _options_ parameter, pass an object that contains the following properties:

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                                                  | Par défaut |
| --------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| path      | Text | Represents the path to access the WebSocket server. If no path is defined, the WebSocket server manages all the connections                                                                                                                                                                                                                  | undefined  |
| dataType  | Text | Type of the data received through the `connectionHandler.onMessage` and the data send by [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) function. Values: "text", "blob","object"). If "object": (send) transforms object into a json format and sends it; (reception): receives json format and transforms it into object | text       |

<!-- REF #WebSocketServerClass.connections.Desc -->

## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### Description

The `.connections` property contains <!-- REF #WebSocketServerClass.connections.Summary -->all current connections handled by the WebSocket server<!-- END REF -->. Each element of the collection is a [`WebSocketConnection` object](WebSocketConnectionClass.md).

When a connection is terminated, its [`status`](WebSocketConnectionClass.md#status) changes to "Closed" and it is removed from this collection.

<!-- END REF -->

<!-- REF #WebSocketServerClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Description

The `.dataType` property contains <!-- REF #WebSocketServerClass.dataType.Summary -->the type of the data received or sent<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketServerClass.handler.Desc -->

## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Description

The `.handler` property contains <!-- REF #WebSocketServerClass.handler.Summary -->the accessor that gets the `WSSHandler` object used to initiate the WebSocket server<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.path.Desc -->

## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Description

The `.path` property contains <!-- REF #WebSocketServerClass.path.Summary -->the pattern of the path to access the WebSocket server<!-- END REF -->. Si aucun chemin n'a été défini, le serveur WebSocket gère toutes les connexions.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Params -->

| Paramètres | Type |     | Description                 |                  |
| ---------- | ---- | :-: | --------------------------- | ---------------- |
|            |      |     | Ne requiert aucun paramètre | <!-- END REF --> |

#### Description

The `.terminate()` function <!-- REF #WebSocketServerClass.terminate().Summary -->closes the WebSocket server<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->

## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Description

The `.terminated` property contains <!-- REF #WebSocketServerClass.terminated.Summary -->True if the WebSocket server is closed<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->
