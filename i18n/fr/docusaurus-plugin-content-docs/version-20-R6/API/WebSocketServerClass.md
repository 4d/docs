---
id: WebSocketServerClass
title: WebSocketServer
---

La classe `WebSocketServer` vous permet de créer et configurer un serveur WebSocket en 4D. Une fois que le serveur WebSocket 4D est actif, vous pouvez ouvrir et utiliser des connexions WebSocket entre 4D et les clients en utilisant la classe [`WebSocketConnection`](WebSocketConnectionClass.md).

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

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

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)<br/><!-- INCLUDE #WebSocketServerClass.connections.Summary --> |
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #WebSocketServerClass.dataType.Summary -->          |
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketServerClass.handler.Summary -->             |
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)<br/><!-- INCLUDE #WebSocketServerClass.path.Summary -->                      |
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketServerClass.terminate().Summary -->   |
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #WebSocketServerClass.terminated.Summary -->    |

## 4D.WebSocketServer.new()

<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->

<!-- REF #4D.WebSocketServer.new().Params -->

| Paramètres                          | Type                               |                             | Description                                                                 |
| ----------------------------------- | ---------------------------------- | :-------------------------: | --------------------------------------------------------------------------- |
| [WSSHandler](#wsshandler-parameter) | Object                             |              ->             | Objet de la classe utilisateur déclarant les callbacks du serveur WebSocket |
| [options](#options-parameter)       | Object                             |              ->             | Paramètres de configuration du WebSocket                                    |
| Résultat                            | 4D.WebSocketServer | <- | Nouvel objet WebSocketServer                                                |

<!-- END REF -->

La fonction `4D.WebSocketServer.new()` <!-- REF #4D.WebSocketServer.new().Summary -->crée et démarre un serveur WebSocket qui utilisera les callbacks *WSSHandler* et les *options* spécifiées (optionnellement), et renvoie un objet `4D.WebSocketServer`<!-- END REF -->.

L'appel de cette fonction nécessite que le [serveur Web 4D](WebServerClass.md) soit démarré. Le **host** et le **port** du serveur WebSocket sont les mêmes que l'hôte et le port du serveur Web 4D.

### Paramètre *WSSHandler*

Dans le paramètre *WSSHandler*, passez une instance d'une classe utilisateur qui sera appelée chaque fois qu'un événement se produit sur le serveur WebSocket -- essentiellement des événements de connexion. La classe doit définir les fonctions de callback suivantes (seule la fonction `onConnection` est obligatoire) :

| Propriété    | Type                         | Description                                                                                                                      | Par défaut |
| ------------ | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| onConnection | [Function](FunctionClass.md) | (obligatoire) Callback quand une nouvelle connexion cliente est démarrée (voir ci-dessous) | undefined  |
| onOpen       | [Function](FunctionClass.md) | Callback quand le serveur WebSocket est démarré (voir ci-dessous)                                             | undefined  |
| onTerminate  | [Function](FunctionClass.md) | Callback quand le serveur WebSocket est stoppé (voir ci-dessous)                                              | undefined  |
| onError      | [Function](FunctionClass.md) | Callback quand une erreur est survenue (voir ci-dessous)                                                      | undefined  |

**WSHandler.onConnection**(*WSServer* : Object ; *event* : Object) : Object | null

| Paramètres |         | Type                               |                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | ------- | ---------------------------------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |         | 4D.WebSocketServer | <- | Objet serveur WebSocket courant                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| event      |         | Object                             | <- | Paramètres                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|            | type    | Text                               |                             | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|            | request | Object                             |                             | Objet `request`. Contient les informations de la requête de connexion (voir ci-dessous)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Résultat   |         | Object                             |              ->             | [objet `connectionHandler`](#connectionhandler-object) (voir ci-dessous). Si cette fonction renvoie un objet `connectionHandler`, un [objet `4D.WebSocketConnection`](WebSocketConnectionClass.md#objet-websocketconnection) est automatiquement créé et ajouté à la [collection de connexions](#connections). Cet objet est alors reçu comme paramètre dans chaque fonction de l'objet `connectionHandler`. Si la valeur renvoyée est null ou undefined, la connexion est annulée. |

Cette callback est appelée lorsque le handshake est terminé. Elle doit être appelée avec un [objet `connectionHandler`](#objet-connectionhandler) valide pour créer la connexion WebSocket, sinon la connexion est annulée.

**WSHandler.onOpen**(*WSServer* : Object ; *event* : Object)

| Paramètres |      | Type                               |                             | Description                     |
| ---------- | ---- | ---------------------------------- | :-------------------------: | ------------------------------- |
| WSServer   |      | 4D.WebSocketServer | <- | Objet serveur WebSocket courant |
| event      |      | Object                             | <- | Paramètres                      |
|            | type | Text                               |                             | "open"                          |

Événement émis lorsque le serveur websocket est démarré.

**WSHandler.onTerminate**(*WSServer* : Object ; *event* : Object)

| Paramètres |      | Type                               |                             | Description                     |
| ---------- | ---- | ---------------------------------- | :-------------------------: | ------------------------------- |
| WSServer   |      | 4D.WebSocketServer | <- | Objet serveur WebSocket courant |
| event      |      | Object                             | <- | Paramètres                      |
|            | type | Text                               |                             | "terminate"                     |

Événement émis lors de la fermeture du serveur HTTP ou du serveur WebSocket.

**WSHandler.onError**(*WSServer* : Object ; *event* : Object)

| Paramètres |        | Type                               |                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------ | ---------------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |        | 4D.WebSocketServer | <- | Objet serveur WebSocket courant                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| event      |        | Object                             | <- | Paramètres                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|            | type   | Text                               |                             | "error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|            | errors | Collection                         |                             | Collection de pile d'erreurs 4D en cas d'erreur d'exécution<li>\[].errCode (number) - Code d'erreur 4D</li><li>\[].message (text) - Description de l'erreur 4D</li><li>\[].componentSignature (text) - Signature du composant interne qui a renvoyé l'erreur</li> |

Événement émis lorsqu'une erreur se produit sur le serveur WebSocket.

### Exemple de classe `WSSHandler`

Cet exemple de fonctionnalité de chat basique montre comment gérer les connexions au serveur WebSocket dans une classe *WSSHandler*.

```4d
//myWSServerHandler class 

Function onConnection($wss : Object; $event : Object) : Object

	If (VerifyAddress($event.request.remoteAddress))
		// La méthode VerifyAddress valide l'adresse du client
		// L'objet WSConnectionHandler retourné sera utilisé 
		// par 4D pour instancier l'objet 4D.WebSocketConnection
		// lié à cette connexion
		return cs.myConnectionHandler.new()   
		// Voir objet connectionHandler 
	Else 
		// La connexion est annulée		
		return Null 
	End if 

Function onOpen($wss : Object; $event : Object)
LogFile("*** Server started")

Function onTerminate($wss : Object; $event : Object)
LogFile("*** Server closed")

Function onError($wss : Object; $event : Object)
LogFile("!!! Server error: "+$event.errors.first().message)

```

### Objet `request`

Un objet `request` contient les propriétés suivantes :

| Paramètres    | Type   | Description                                                                                                                                                                              |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | La requête HTTP GET du client. `headers.key=value` (value peut être une collection si la même clé apparaît plusieurs fois)                            |
| query         | Object | Objet qui contient les paramètres de l'URL. Par exemple, si les paramètres sont : `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contient uniquement l'URL qui est présente dans la requête HTTP réelle. Ex : `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"                 |
| remoteAddress | Text   | Adresse IP du client                                                                                                                                                                     |

### Objet `connectionHandler`

En résultat d'une callback `WSHandler.onConnection`, passez un objet `connectionHandler`, qui est une instance d'une classe utilisateur qui sera appelée à chaque fois qu'un événement se produira dans la connexion WebSocket -- essentiellement, les messages reçus. La classe doit définir les fonctions de callback suivantes (seule la fonction `onMessage` est obligatoire) :

| Paramètres  | Type                         | Description                                                                                             |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | (obligatoire) Fonction appelée lorsqu'un nouveau message est reçu de cette connexion |
| onOpen      | [Function](FunctionClass.md) | Fonction appelée lorsque la `4D.WebSocketConnection` est créée                                          |
| onTerminate | [Function](FunctionClass.md) | Fonction appelée lorsque cette connexion est terminée                                                   |
| onError     | [Function](FunctionClass.md) | Fonction appelée en cas d'erreur                                                                        |

**connectionHandler.onMessage**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Paramètres |      | Type                                                    |                             | Description                       |
| ---------- | ---- | ------------------------------------------------------- | :-------------------------: | --------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objet connexion WebSocket courant |
| event      |      | Object                                                  | <- | Paramètres                        |
|            | type | Text                                                    |                             | "message"                         |
|            | data | Text / Blob / Object                                    |                             | données envoyées par le client    |

Callback pour les données WebSocket. Appelée à chaque fois que le WebSocket reçoit des données.

**connectionHandler.onOpen**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Paramètres |      | Type                                                    |                             | Description                       |
| ---------- | ---- | ------------------------------------------------------- | :-------------------------: | --------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objet connexion WebSocket courant |
| event      |      | Object                                                  | <- | Paramètres                        |
|            | type | Text                                                    |                             | "open"                            |

Appelée lorsque l'objet `connectionHandler` est créé (après l'événement `WSS.onConnection`).

**connectionHandler.onTerminate**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Paramètres |        | Type                                                    |                             | Description                                                                                                                                                                                                                                   |
| ---------- | ------ | ------------------------------------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objet connexion WebSocket courant                                                                                                                                                                                                             |
| event      |        | Object                                                  | <- | Paramètres                                                                                                                                                                                                                                    |
|            | type   | Text                                                    |                             | "terminate"                                                                                                                                                                                                                                   |
|            | code   | Number                                                  |                             | Code de statut indiquant la cause de la fermeture de la connexion. Si la WebSocket ne renvoie pas de code d'erreur, `code` vaut 1005 si aucune erreur ne s'est produite ou 1006 si une erreur s'est produite. |
|            | reason | Text                                                    |                             | Chaîne expliquant pourquoi la connexion a été fermée. Si le websocket ne renvoie pas de raison, le code est undefined                                                                                                         |

Fonction appelée lorsque la WebSocket est fermée.

**connectionHandler.onError**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Paramètres |        |            | Type                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                       |
| ---------- | ------ | ---------- | ------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------- |
| ws         |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                                                                                                                                                                                                         <-                                                                                                                                                                                                                                                        | Objet connexion WebSocket courant |
| event      |        |            | Object                                                  |                                                                                                                                                                                                                                                         <-                                                                                                                                                                                                                                                        | Paramètres                        |
|            | type   |            | Text                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | "error"                           |
|            | errors | Collection |                                                         | Collection de piles d'erreurs 4D en cas d'erreur d'exécution<li>\[].errCode (number) - Code d'erreur 4D</li><li>\[].message (text) - Description de l'erreur 4D</li><li>\[].componentSignature (text) - Signature du composant interne qui a renvoyé l'erreur</li> |                                   |

Fonction appelée en cas d'erreur.

### Exemple de classe `connectionHandler`

Cet exemple de fonctionnalité de chat basique montre comment gérer les messages dans une classe *connectionHandler*.

```4d
// Classe myConnectionHandler

Function onMessage($ws : 4D.WebSocketConnection ; $message : Object)
	// Renvoyer le message à tous les clients du chat	
	This.broadcast($ws;$message.data)

Function onOpen($ws : 4D.WebSocketConnection ; $message : Object)
	// Envoyer un message aux nouveaux utilisateurs connectés
	$ws.send("Welcome on the chat !")	
	// Envoyer le message "New client connected" à tous les autres clients de chat
	This.broadcast($ws; "New client connected")

Function onTerminate($ws : 4D.WebSocketConnection ; $message : Object)
	// Envoi du message "Client déconnecté" à tous les autres clients de chat
	This.broadcast($ws; "Client déconnecté")

Function broadcast($ws : 4D.WebSocketConnection ; $message:text)
	var $client:4D.WebSocketConnection
	// Renvoyer le message à tous les clients de chat
	For each ($client; $ws.wss.connections)
		// Vérifier que l'id n'est pas la connexion actuelle
		If ($client.id#$ws.id)
			$client.send($message)
		End if 
	End for each 

```

### Paramètre *options*

Dans le paramètre facultatif *options*, passez un objet contenant les propriétés suivantes :

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                          | Par défaut |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| path      | Text | Représente le chemin d'accès au serveur WebSocket. Si aucun chemin n'est défini, le serveur WebSocket gère toutes les connexions                                                                                                                                                                                                                                                                                                     | undefined  |
| dataType  | Text | Type de données reçues par `connectionHandler.onMessage` et envoyées par la fonction [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send). Valeurs : "text", "blob", "object"). Si "objet" : (envoi) transforme l'objet au format json et l'envoie ; (réception) : reçoit le format json et le transforme en objet | text       |

<!-- REF #WebSocketServerClass.connections.Desc -->

## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### Description

La propriété `.connections` contient <!-- REF #WebSocketServerClass.connections.Summary -->toutes les connexions courantes gérées par le serveur WebSocket<!-- END REF -->. Chaque élément de la collection est un [objet `WebSocketConnection`] (WebSocketConnectionClass.md).

Lorsqu'une connexion est terminée, son [`status`](WebSocketConnectionClass.md#status) devient "Closed" et elle est supprimée de cette collection.

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

La propriété `.path` contient <!-- REF #WebSocketServerClass.path.Summary -->le pattern du chemin d'accès au serveur WebSocket<!-- END REF -->. Si aucun chemin n'a été défini, le serveur WebSocket gère toutes les connexions.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate**()<br/>**.terminate**( *timeout* : Integer )<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Params -->

| Paramètres | Type    |     | Description                                                        |
| ---------- | ------- | :-: | ------------------------------------------------------------------ |
| timeout    | Integer |  -> | Temps d'attente en secondes avant de terminer le serveur WebSocket |

<!-- END REF -->

#### Description

La fonction `.terminate()` <!-- REF #WebSocketServerClass.terminate().Summary -->referme le serveur WebSocket<!-- END REF -->.

Par défaut, si aucune valeur *timeout* n'est définie, la fonction initialise le handshake de fermeture et attend de recevoir la trame de fermeture de l'homologue, après quoi elle envoie le paquet FIN pour tenter de fermer proprement la socket. Lorsque la réponse est reçue, le socket est détruit.

Si une valeur *timeout* est définie :

- lorsque le temps d'attente est atteint, détruit de force la socket.
- si *timeout* = 0, détruit de force la socket sans trame de fermeture ni d'échange de paquets FIN, et le fait instantanément sans délai d'attente.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->

## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Description

La propriété `.terminated` contient <!-- REF #WebSocketServerClass.terminated.Summary -->True si le serveur WebSocket est fermé<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->
