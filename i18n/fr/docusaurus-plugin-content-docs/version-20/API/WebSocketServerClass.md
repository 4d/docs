---
id: WebSocketServerClass
title: WebSocketServer
---


La classe `WebSocketServer` vous permet de créer et configurer un serveur WebSocket en 4D. Une fois le serveur WebSocket 4D actif, vous pouvez ouvrir et utiliser les connexions WebSocket entre 4D et les clients en utilisant la classe [`WebSocketConnection`](WebSocketConnectionClass.md).

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>


:::note À propos des serveurs WebSocket

Le protocole WebSocket fournit un canal de communication full-duplex entre un serveur WebSocket et un client (par exemple un navigateur Web). Pour plus d'informations sur les serveurs WebSocket, lisez [cette page sur Wikipedia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info Voir aussi

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

The [4D Web Server](WebServerClass.md) must be started.


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
    // d'appeler wss.terminate() par la suite
```

2. Définissez la classe utilisateur `myServerHandler` contenant la ou les fonction(s) de callback utilisée(s) pour gérer les connexions au serveur :

```4d
// Classe myServerHandler

Function onConnection($wss: Object; $event: Object): Object
    // retourne une instance de la classe utilisateur
    // qui traitera les messages
    return cs.myConnectionHandler.new()
```

3. Définissez la classe utilisateur `myConnectionHandler` contenant la ou les fonction(s) de callback utilisée(s) pour gérer les messages :

```4d
// myConnectionHandler class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
    //resends the message in uppercase
    $ws.send(Uppercase($message.data))

```

:::tip Client-Side JS

Voir [cet article de blog](https://blog.4d.com/websocket-server/) pour un exemple de code Javascript côté client gérant une connexion WebSocket.

:::

### Objet WebSocketServer

Les objets WebSocketServer offrent les propriétés et fonctions suivantes :

|                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)<br/><!-- INCLUDE #WebSocketServerClass.connections.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#datatype)<br/><!-- INCLUDE #WebSocketServerClass.dataType.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketServerClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)<br/><!-- INCLUDE #WebSocketServerClass.path.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketServerClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #WebSocketServerClass.terminated.Summary -->|



## 4D.WebSocketServer.new()


<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->


<!-- REF #4D.WebSocketServer.new().Params -->
| Paramètres                          | Type               |    | Description                                                                 |
| ----------------------------------- | ------------------ |:--:| --------------------------------------------------------------------------- |
| [WSSHandler](#wsshandler-parameter) | Object             | -> | Objet de la classe utilisateur déclarant les callbacks du serveur WebSocket |
| [options](#options-parameter)       | Object             | -> | Paramètres de configuration du WebSocket                                    |
| Résultat                            | 4D.WebSocketServer | <- | Nouvel objet WebSocketServer                                                |
<!-- END REF -->


The `4D.WebSocketServer.new()` function <!-- REF #4D.WebSocketServer.new().Summary -->creates and starts a WebSocket server that will use the specified *WSSHandler* callbacks and (optionally) *options*, and returns a `4D.WebSocketServer` object<!-- END REF -->.

Calling this function requires that the [4D Web Server](WebServerClass.md) is started. The **host** and **port** of the WebSocket server are the same as the host and port of the 4D Web Server.




### *WSSHandler* parameter

In the *WSSHandler* parameter, pass an instance of a user class that will be called every time an event occurs on the WebSocket server --essentially, connection events. The class should define the following callback functions (only `onConnection` is mandatory):

| Propriété    | Type                         | Description                                                                                | Par défaut |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------------ | ---------- |
| onConnection | [Function](FunctionClass.md) | (obligatoire) Callback quand une nouvelle connexion cliente est démarrée (voir ci-dessous) | undefined  |
| onOpen       | [Function](FunctionClass.md) | Callback quand le serveur WebSocket est démarré (voir ci-dessous)                          | undefined  |
| onTerminate  | [Function](FunctionClass.md) | Callback quand le serveur WebSocket est stoppé (voir ci-dessous)                           | undefined  |
| onError      | [Function](FunctionClass.md) | Callback quand une erreur est survenue (voir ci-dessous)                                   | undefined  |


**WSHandler.onConnection**(*WSServer* : Object ; *event* : Object) : Object | null

| Paramètres |         | Type               |    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------- | ------------------ |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |         | 4D.WebSocketServer | <- | Objet serveur WebSocket courant                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| event      |         | Object             | <- | Paramètres                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|            | type    | Text               |    | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|            | request | Object             |    | `request` object. Contient les informations de la requête de connexion (voir ci-dessous)                                                                                                                                                                                                                                                                                                                                                                                          |
| Résultat   |         | Object             | -> | [`connectionHandler` object](#connectionhandler-object) (see below). If this function returns a `connectionHandler` object, a [`4D.WebSocketConnection` object](WebSocketConnectionClass.md#websocketconnection-object) is automatically created and added to the [collection of connections](#connections). This object is then received as parameter in each function of the `connectionHandler` object. Si la valeur renvoyée est null ou undefined, la connexion est annulée. |

Cette callback est appelée lorsque le handshake est terminé. It must be called with a valid [`connectionHandler` object](#connectionhandler-object) to create the WebSocket connection, otherwise the connection is cancelled.


**WSHandler.onOpen**(*WSServer* : Object ; *event* : Object)

| Paramètres |      | Type               |    | Description                     |
| ---------- | ---- | ------------------ |:--:| ------------------------------- |
| WSServer   |      | 4D.WebSocketServer | <- | Objet serveur WebSocket courant |
| event      |      | Object             | <- | Paramètres                      |
|            | type | Text               |    | "open"                          |

Événement émis lorsque le serveur websocket est démarré.


**WSHandler.onTerminate**(*WSServer* : Object ; *event* : Object)

| Paramètres |      | Type               |    | Description                     |
| ---------- | ---- | ------------------ |:--:| ------------------------------- |
| WSServer   |      | 4D.WebSocketServer | <- | Objet serveur WebSocket courant |
| event      |      | Object             | <- | Paramètres                      |
|            | type | Text               |    | "terminate"                     |

Événement émis lors de la fermeture du serveur HTTP ou du serveur WebSocket.


**WSHandler.onError**(*WSServer* : Object ; *event* : Object)

| Paramètres |        | Type               |    | Description                                                                                                                        |
| ---------- | ------ | ------------------ |:--:| ---------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |        | 4D.WebSocketServer | <- | Objet serveur WebSocket courant                                                                                                    |
| event      |        | Object             | <- | Paramètres                                                                                                                         |
|            | type   | Text               |    | "error"                                                                                                                            |
|            | errors | Collection         |    | Collection of 4D error stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |


Événement émis lorsqu'une erreur se produit sur le serveur WebSocket.

### Example of `WSSHandler` class

This example of a basic chat feature illustrates how to handle WebSocket server connections in a *WSSHandler* class.

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

| Paramètres    | Type   | Description                                                                                                                                            |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| headers       | Object | La requête HTTP GET du client. `headers.key=value` (value can be a collection if the same key appears multiple times)                                  |
| query         | Object | Objet qui contient les paramètres de l'URL. For example, if parameters are: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contient uniquement l'URL qui est présente dans la requête HTTP réelle. Ex: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"                |
| remoteAddress | Text   | Adresse IP du client                                                                                                                                   |


### `connectionHandler` object

As a result of the `WSHandler.onConnection` callback, pass a `connectionHandler` object, which is an instance of a user class that will be called every time an event occurs in the WebSocket connection --essentially, messages received. The class should define the following callback functions (only `onMessage` is mandatory):

| Paramètres  | Type                         | Description                                                                          |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------ |
| onMessage   | [Function](FunctionClass.md) | (obligatoire) Fonction appelée lorsqu'un nouveau message est reçu de cette connexion |
| onOpen      | [Function](FunctionClass.md) | Function called when the `4D.WebSocketConnection` is created                         |
| onTerminate | [Function](FunctionClass.md) | Fonction appelée lorsque cette connexion est terminée                                |
| onError     | [Function](FunctionClass.md) | Fonction appelée en cas d'erreur                                                     |


**connectionHandler.onMessage**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Paramètres |      | Type                                                    |    | Description                       |
| ---------- | ---- | ------------------------------------------------------- |:--:| --------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objet connexion WebSocket courant |
| event      |      | Object                                                  | <- | Paramètres                        |
|            | type | Text                                                    |    | "message"                         |
|            | data | Text / Blob / Object                                    |    | données envoyées par le client    |

Callback pour les données WebSocket. Appelée à chaque fois que le WebSocket reçoit des données.


**connectionHandler.onOpen**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Paramètres |      | Type                                                    |    | Description                       |
| ---------- | ---- | ------------------------------------------------------- |:--:| --------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objet connexion WebSocket courant |
| event      |      | Object                                                  | <- | Paramètres                        |
|            | type | Text                                                    |    | "open"                            |

Called when the `connectionHandler` object is created (after `WSS.onConnection` event).


**connectionHandler.onTerminate**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Paramètres |        | Type                                                    |    | Description                                                                                                                                                                                     |
| ---------- | ------ | ------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objet connexion WebSocket courant                                                                                                                                                               |
| event      |        | Object                                                  | <- | Paramètres                                                                                                                                                                                      |
|            | type   | Text                                                    |    | "terminate"                                                                                                                                                                                     |
|            | code   | Number                                                  |    | Code de statut indiquant la cause de la fermeture de la connexion. If the WebSocket does not return an error code, `code` is set to 1005 if no error occurred or to 1006 if there was an error. |
|            | reason | Text                                                    |    | Chaîne expliquant pourquoi la connexion a été fermée. Si le websocket ne renvoie pas de raison, le code est undefined                                                                           |

Fonction appelée lorsque la WebSocket est fermée.

**connectionHandler.onError**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Paramètres |        |            | Type                                                    |                                                                                                                                     | Description                       |
| ---------- | ------ | ---------- | ------------------------------------------------------- |:-----------------------------------------------------------------------------------------------------------------------------------:| --------------------------------- |
| ws         |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                 <-                                                                  | Objet connexion WebSocket courant |
| event      |        |            | Object                                                  |                                                                 <-                                                                  | Paramètres                        |
|            | type   |            | Text                                                    |                                                                                                                                     | "error"                           |
|            | errors | Collection |                                                         | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |                                   |

Fonction appelée en cas d'erreur.

### Example of `connectionHandler` class

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

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                                                 | Par défaut |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| path      | Text | Représente le chemin d'accès au serveur WebSocket. Si aucun chemin n'est défini, le serveur WebSocket gère toutes les connexions                                                                                                                                                                                                            | undefined  |
| dataType  | Text | Type of the data received through the `connectionHandler.onMessage` and the data send by [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) function. Valeurs : "text", "blob", "object"). Si "objet" : (envoi) transforme l'objet au format json et l'envoie ; (réception) : reçoit le format json et le transforme en objet | text       |


<!-- REF #WebSocketServerClass.connections.Desc -->
## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### Description

La propriété `.connections` contient <!-- REF #WebSocketServerClass.connections.Summary -->toutes les connexions courantes gérées par le serveur WebSocket<!-- END REF -->. Chaque élément de la collection est un objet [`WebSocketConnection`](WebSocketConnectionClass.md).

When a connection is terminated, its [`status`](WebSocketConnectionClass.md#status) changes to "Closed" and it is removed from this collection.

<!-- END REF -->



<!-- REF #WebSocketServerClass.dataType.Desc -->
## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Description

La propriété `.dataType` contient <!-- REF #WebSocketServerClass.dataType.Summary -->le type de données reçues ou envoyées<!-- END REF -->.

Cette propriété est en lecture seule.
<!-- END REF -->


<!-- REF #WebSocketServerClass.handler.Desc -->
## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Description

La propriété `.handler` contient <!-- REF #WebSocketServerClass.handler.Summary -->l'accesseur qui récupère l'objet `WSSHandler` utilisé pour initier le serveur WebSocket<!-- END REF -->.

<!-- END REF -->


<!-- REF #WebSocketServerClass.path.Desc -->
## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Description

La propriété `.path` contient <!-- REF #WebSocketServerClass.path.Summary -->le modèle du chemin d'accès au serveur WebSocket<!-- END REF -->. Si aucun chemin n'a été défini, le serveur WebSocket gère toutes les connexions.

Cette propriété est en lecture seule.
<!-- END REF -->


<!-- REF #WebSocketServerClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate**()<br/>**.terminate**( *timeout* : Integer )<!-- END REF -->


<!-- REF #WebSocketServerClass.terminate().Params -->
| Paramètres | Type    |    | Description                                                        |
| ---------- | ------- |:--:| ------------------------------------------------------------------ |
| timeout    | Integer | -> | Temps d'attente en secondes avant de terminer le serveur WebSocket |
<!-- END REF -->


#### Description

La fonction `.terminate()` <!-- REF #WebSocketServerClass.terminate().Summary -->closes the WebSocket server<!-- END REF -->.

By default, if no *timeout* value is set, the function initializes close handshake and waits to receive close frame from the peer, after that sending FIN packet in attempt to perform a clean socket close. Lorsque la réponse est reçue, le socket est détruit.

If a *timeout* value is set:
- lorsque le temps d'attente est atteint, détruit de force la socket.
- if *timeout* = 0, forcibly destroys the socket without closing frames or fin packets exchange, and does it instantly without waiting time.




<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->
## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Description

La propriété `.terminated` contient <!-- REF #WebSocketServerClass.terminated.Summary -->True si le serveur WebSocket est fermé<!-- END REF -->.

Cette propriété est en lecture seule.
<!-- END REF -->
