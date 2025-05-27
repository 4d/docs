---
id: TCPConnectionClass
title: TCPConnection
---

La classe `TCPConnection` vous permet de gérer des connexions TCP (Transmission Control Protocol) clientes à un serveur pour l'envoi et la réception des données ainsi que la gestion des événements du cycle de vie de la connexion via des rétroappels.

La classe `TCPConnection` est disponible dans le class store `4D`. Vous pouvez créer une connexion TCP à l'aide de la fonction [4D.TCPConnection.new()](#4dtcpconnectionnew), qui renvoie un objet [TCPConnection](#tcpconnection-object).

Toutes les fonctions de la classe `TCPConnection` sont thread-safe.

Grâce au *refcounting* d'objet standard de 4D, une TCPConnection est automatiquement libérée lorsqu'elle n'est plus référencée. Par conséquent, les ressources associées sont correctement refermées sans qu'il soit nécessaire de procéder à une clôture explicite.

Les objets TCPConnection sont libérés lorsqu'il n'existe plus de références à ces objets dans la mémoire. Cela se produit généralement, par exemple, à la fin de l'exécution d'une méthode pour les variables locales. Si vous souhaitez "forcer" la fermeture d'une connexion à tout moment, [**nullifiez** ses références en leur attribuant la valeur **Null**](../Concepts/dt_object.md#resources).

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R8   | Classe ajoutée |

</details>

### Exemples

Les exemples suivants montrent comment utiliser les classes 4D.TCPConnection et 4D.TCPEvent pour gérer une connexion client TCP, traiter les événements, envoyer des données et fermer correctement la connexion. Des exemples synchrones et asynchrones sont fournis.

#### Exemple synchrone

Cet exemple montre comment établir une connexion, envoyer des données et la fermer en utilisant un objet simple pour la configuration :

```4d
var $domain : Text := "127.0.0.1"
var $port : Integer := 10000
var $options : Object := New object() // objet de configuration
var $tcpClient : 4D.TCPConnection
var $message : Text := "test message"

// Ouvrir une connexion
$tcpClient := 4D.TCPConnection.new($domain; $port; $options)

// Envoyer des données
var $blobData : Blob
TEXT TO BLOB($message; $blobData; UTF8 text without length)
$tcpClient.send($blobData)

// Shutdown
$tcpClient.shutdown()
$tcpClient.wait(0)

```

#### Exemple asynchrone

Cet exemple définit une classe qui gère le cycle de vie de la connexion et les événements, et montre comment travailler de manière asynchrone :

```4d
// classe : cs.MyAsyncTCPConnection

Class constructor($url : Text ; $port : Integer)
    This.connection := Null
    This.url := $url
    This.port := $port

// Se connecter à l'un des serveurs lancés à l'intérieur de workers
Function connect()
    This.connection := 4D.TCPConnection.new(This.url ; This.port ; This)

// Se déconnecter du serveur
Function disconnect()
    This.connection.shutdown()
    This.connection := Null

// Envoyer des données au serveur
Function getInfo()
    var $blob : Blob
    TEXT TO BLOB("Information" ; $blob)
    This.connection.send($blob)

// Callback appelée lorsque la connexion est établie avec succès
Function onConnection($connection : 4D.TCPConnection ; $event : 4D.TCPEvent)
    ALERT("Connection established")

// Callback appelée lorsque la connexion est correctement fermée
Function onShutdown($connection : 4D.TCPConnection ; $event : 4D.TCPEvent)
    ALERT("Connection closed")

// Callback appelée lors de la réception de données du serveur
Function onData($connection : 4D.TCPConnection ; $event : 4D.TCPEvent)
    ALERT(BLOB to text($event.data ; UTF8 text without length))

	//Attention: Il n'y a aucune garantie que vous recevrez toutes les données dont vous avez besoin dans un seul paquet réseau.
	
// Callback appelée lorsque la connexion est fermée de manière inattendue
Function onError($connection : 4D.TCPConnection ; $event : 4D.TCPEvent)
    ALERT("Connection error")

// Callback appelé après onShutdown/onError juste avant que l'objet TCPConnection ne soit libéré
Function onTerminate($connection : 4D.TCPConnection ; $event : 4D.TCPEvent)
	ALERT("Connection terminated")


```

##### Exemple d'utilisation

Créer une nouvelle méthode nommée AsyncTCP, pour initialiser et gérer la connexion TCP :

```4d
var $myObject : cs.MyAsyncTCPConnection
$myObject := cs.MyAsyncTCPConnection.new("myURL"; 10000)
$myObject.connect()
$myObject.getInfo()
$myObject.disconnect()

```

Appeler la méthode AsyncTCP dans un worker :

```4d
CALL WORKER("new process"; "Async_TCP")

```

### Objet TCPConnection

Un objet TCPConnection est un objet non partageable.

Les objets TCPConnection offrent les propriétés et fonctions suivantes :

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPConnection.closed.Syntax -->](#closed)<br/><!-- INCLUDE #TCPConnection.closed.Summary -->           |
| [<!-- INCLUDE #TCPConnection.errors.Syntax -->](#errors)<br/><!-- INCLUDE #TCPConnection.errors.Summary -->           |
| [<!-- INCLUDE #TCPConnection.noDelay.Syntax -->](#nodelay)<br/><!-- INCLUDE #TCPConnection.noDelay.Summary -->        |
| [<!-- INCLUDE #TCPConnection.send().Syntax -->](#send)<br/><!-- INCLUDE #TCPConnection.send().Summary -->             |
| [<!-- INCLUDE #TCPConnection.shutdown().Syntax -->](#shutdown)<br/><!-- INCLUDE #TCPConnection.shutdown().Summary --> |
| [<!-- INCLUDE #TCPConnection.wait().Syntax -->](#wait)<br/><!-- INCLUDE #TCPConnection.wait().Summary -->             |

<!-- REF #4D.TCPConnection.new().Desc -->

## 4D.TCPConnection.new()

<!-- REF #4D.TCPConnection.new().Syntax -->**4D.TCPConnection.new**( *serverAddress* : Text ; *serverPort* : Number ; *options* : Object  ) : 4D.TCPConnection<!-- END REF -->

<!-- REF #4D.TCPConnection.new().params -->

| Paramètres    | Type          |                             | Description                                                    |
| ------------- | ------------- | --------------------------- | -------------------------------------------------------------- |
| serverAddress | Text          | ->                          | Nom de domaine ou adresse IP du serveur                        |
| serverPort    | Integer       | ->                          | Numéro de port du serveur                                      |
| options       | Object        | ->                          | [options](#options-parameter) de configuration de la connexion |
| Résultat      | TCPConnection | <- | Nouvel objet TCPConnection                                     |

<!-- END REF -->

#### Description

La fonction `4D.TCPConnection.new()` <!-- REF #4D.TCPConnection.new().Summary -->crée une nouvelle connexion TCP vers les *serverAddress* et *serverPort* spécifiés, en utilisant les *options* définies, et renvoie un objet `4D.HTTPRequest`<!-- END REF -->.

#### Paramètre `options`

Dans le paramètre *options*, passez un objet qui peut contenir les propriétés suivantes :

| Propriété    | Type    | Description                                                           | Par défaut |
| ------------ | ------- | --------------------------------------------------------------------- | ---------- |
| onConnection | Formula | Callback déclenchée lorsque la connexion est établie. | Undefined  |
| onData       | Formula | Callback déclenchée lors de la réception de données                   | Undefined  |
| onShutdown   | Formula | Callback déclenchée lorsque la connexion est correctement fermée      | Undefined  |
| onError      | Formula | Callback déclenchée en cas d'erreur                                   | Undefined  |
| onTerminate  | Formula | Callback déclenchée juste avant que la TCPConnection ne soit libérée  | Undefined  |
| noDelay      | Boolean | **Lecture seulement** Désactive l'algorithme de Nagle si `true`       | False      |

#### Fonctions de callback

Toutes les fonctions de callback reçoivent deux paramètres :

| Paramètres  | Type                                           | Description                                                |
| ----------- | ---------------------------------------------- | ---------------------------------------------------------- |
| $connection | [objet `TCPConnection`](#tcpconnection-object) | L'instance de connexion TCP courante.      |
| $event      | [objet `TCPEvent`](#tcpevent-object)           | Contient des informations sur l'événement. |

**Séquence des appels de callbacks :**

1. `onConnection` est déclenchée lorsque la connexion est établie.
2. `onData` est déclenchée à chaque fois que des données sont reçues.
3. `onShutdown` ou `onError` est déclenchée :
   - `onShutdown` est déclenchée lorsque la connexion est correctement fermée.
   - `onError` est déclenchée en cas d'erreur.
4. `onTerminate` est toujours déclenchée juste avant que la TCPConnection soit libérée (la connexion est fermée ou une erreur s'est produite).

#### Objet TCPEvent

Un objet [`TCPEvent`](TCPEventClass.md) est renvoyé lorsqu'une [fonction de callback](#callback-functions) est appelée.

<!-- END REF -->

<!-- REF #TCPConnection.closed.Desc -->

## .closed

<!-- REF #TCPConnection.closed.Syntax -->**closed** : Boolean<!-- END REF -->

#### Description

La propriété `.closed` indique <!-- REF #TCPConnection.closed.Summary -->si la connexion est fermée<!-- END REF -->. Retourne `true` si la connexion est fermée en raison d'une erreur, d'un appel à `shutdown()`, ou de la fermeture par le serveur.

<!-- END REF -->

<!-- REF #TCPConnection.errors.Desc -->

## .errors

<!-- REF #TCPConnection.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Description

La propriété `.errors` contient <!-- REF #TCPConnection.errors.Summary -->une collection d'objets erreur associés à la connexion<!-- END REF -->. Chaque objet erreur comprend le code d'erreur, une description et la signature du composant qui a provoqué l'erreur.

| Propriété |                                                                                           | Type       | Description                                            |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------ |
| errors    |                                                                                           | Collection | Pile d'erreurs 4D en cas d'erreur                      |
|           | [].errCode            | Number     | Code d'erreur 4D                                       |
|           | [].message            | Text       | Description de l'erreur 4D                             |
|           | [].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur |

<!-- END REF -->

<!-- REF #TCPConnection.noDelay.Desc -->

## .noDelay

<!-- REF #TCPConnection.noDelay.Syntax -->**noDelay** : Boolean<!-- END REF -->

#### Description

La propriété `.noDelay` indique<!-- REF #TCPConnection.noDelay.Summary -->si l'algorithme de Nagle est désactivé (`true`) ou activé (`false`)<!-- END REF -->. Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF #TCPConnection.send().Desc -->

## .send()

<!-- REF #TCPConnection.send().Syntax -->**.send**( *data* : Blob )<!-- END REF -->

<!-- REF #TCPConnection.send().params -->

| Paramètres | Type |    | Description       |
| ---------- | ---- | -- | ----------------- |
| data       | Blob | -> | Données à envoyer |

<!-- END REF -->

#### Description

La fonction `send()` <!-- REF #TCPConnection.send().Summary -->envoie les données au serveur<!-- END REF -->. Si la connexion n'est pas encore établie, les données sont envoyées une fois la connexion établie.

<!-- END REF -->

<!-- REF #TCPConnection.shutdown().Desc -->

## .shutdown()

<!-- REF #TCPConnection.shutdown().Syntax -->**.shutdown**()<!-- END REF -->

<!-- REF #TCPConnection.shutdown().params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

La fonction `shutdown()` <!-- REF #TCPConnection.shutdown().Summary -->ferme le canal *écriture* de la connexion (flux client vers serveur)<!-- END REF --> tout en gardant le canal *lecture* (flux serveur vers client) ouvert, ce qui vous permet de continuer à recevoir des données jusqu'à ce que la connexion soit complètement fermée par le serveur ou qu'une erreur se produise.

<!-- END REF -->

<!-- REF #TCPConnection.wait().Desc -->

## .wait()

<!-- REF #TCPConnection.wait().Syntax -->**.wait**( { *timeout* : Real } )<!-- END REF -->

<!-- REF #TCPConnection.wait().params -->

| Paramètres | Type |     | Description                                         |
| ---------- | ---- | :-: | --------------------------------------------------- |
| timeout    | Real |  -> | Délai d'attente maximum en secondes pour la réponse |

<!-- END REF -->

#### Description

La fonction `wait()` <!-- REF #TCPConnection.wait().Summary -->attend que la connexion TCP soit fermée ou que le `timeout` spécifié soit atteint<!-- END REF -->

:::note

Pendant une exécution `.wait()`, les fonctions de callback sont exécutées, en particulier les callbacks provenant d'autres événements ou d'autres instances de `SystemWorker`. Vous pouvez sortir d'un `.wait()` en appelant [`shutdown()`](#shutdown) depuis un callback.

:::

<!-- END REF -->

