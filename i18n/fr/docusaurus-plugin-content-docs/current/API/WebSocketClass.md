---
id: WebSocketClass
title: WebSocket
---

La classe `WebSocket` permet d'ouvrir une connexion cliente WebSocket avec un serveur, d'envoyer et de recevoir des données et de fermer la connexion.

Les connexions clientes WebSocket sont utiles, par exemple, pour recevoir des données financières en temps réel ou pour envoyer et recevoir des messages à partir d'une messagerie instantanée.

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R2   | Ajout         |

</details>

### Exemple

Dans cet exemple, nous créons un client WebSocket très basique.

1. Créez la classe utilisateur `WSConnectionHandler` contenant la ou les fonction(s) de callback utilisée(s) pour gérer les callbacks d'événements WebSocket :

```4d
// WSConnectionHandler class

Class constructor

Function onMessage($ws : 4D.WebSocket; $event : Object)
   ALERT($event.data)

Function onTerminate($ws : 4D.WebSocket; $event : Object)
   ALERT("Connection closed")
```

2. Connexion au serveur WebSocket à partir d'un formulaire 4D en instanciant un 4D.WebSocket :

```4d
Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())
```

3. Pour envoyer des messages au serveur WebSocket à partir du formulaire 4D, vous pouvez écrire :

```4d
Form.webSocket.send("Hello world")

```

### Objet WebSocket

Les objets WebSocket exposent les propriétés et fonctions suivantes :

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

<details><summary>Historique</summary>

| Release | Modifications                                                      |
| ------- | ------------------------------------------------------------------ |
| 20 R3   | Prise en charge de la propriété `headers` dans *connectionHandler* |

</details>

<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->

<!-- REF #4D.WebSocket.new().Params -->

| Paramètres                                        | Type                         |                             | Description                                 |
| ------------------------------------------------- | ---------------------------- | :-------------------------: | ------------------------------------------- |
| url                                               | Text                         |              ->             | URL à laquelle se connecter                 |
| [connectionHandler](#connectionHandler-parameter) | Object                       |              ->             | Objet déclarant les callbacks WebSocket     |
| Résultat                                          | 4D.WebSocket | <- | Nouvel [objet WebSocket](#websocket-object) |

<!-- END REF -->

La fonction `4D.WebSocket.new()` <!-- REF #4D.WebSocket.new().Summary -->crée et renvoie un nouvel objet [`4D.WebSocket`](#websocket-object) connecté au serveur WebSocket à l'adresse que vous avez spécifiée dans *url*<!-- END REF -->. L'objet `4D.WebSocket` fournit une API pour la création et la gestion d'une connexion WebSocket à un serveur, ainsi que pour l'envoi et la réception de données vers et depuis le serveur.

Dans *url*, indiquez l'URL à laquelle le serveur WebSocket répondra. Les modèles d'URL suivants peuvent être utilisés :

- `ws://host[:port]path[?query]` pour les connexions standard
- `wss://host[:port]path[?query]` pour les connexions TLS sécurisées

Si la connexion n'est pas possible, un objet `null` est renvoyé et une erreur est générée (que vous pouvez intercepter à l'aide d'une méthode installée avec `ON ERR CALL`).

### Paramètre *connectionHandler*

Dans *connectionHandler*, vous pouvez transmettre un objet contenant des fonctions de callback à appeler selon les événements de connexion, ainsi que le type de données et les en-têtes à gérer.

- Les callbacks sont automatiquement appelées dans le contexte du formulaire ou du worker qui initie la connexion.
- La WebSocket reste valide tant que le formulaire ou le worker n'est pas fermé.

| Propriété   | Type                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | Fonction de callback pour les données WebSocket. Appelée à chaque fois que le WebSocket a reçu des données. La callback reçoit les paramètres suivants :<li>`$1`: objet WebSocket</li><li>`$2`: Objet</li><ul><li>`$2.type` (texte) : toujours "message"</li><li>`$2.data` (texte, blob ou objet, voir `dataType`) : Données reçues</li></ul>                                                                                                                                                                                                                                                       |
| onError     | [Function](FunctionClass.md) | Fonction de callback pour les erreurs d'exécution. La callback reçoit les paramètres suivants:<li>`$1`: objet WebSocket</li><li>`$2`: Objet</li><ul><li>`$2.type` (texte) : toujours "error"</li><li>`$2.errors`: collection de piles d'erreurs 4D en cas d'erreur d'exécution.<ul><li>`[].errCode` (nombre) : Code d'erreur 4D</li><li>`[].message` (texte) : Description de l'erreur 4D</li><li>`[].componentSignature` (texte) : Signature du composant interne qui a renvoyé l'erreur</li></ul></li></ul> |
| onTerminate | [Function](FunctionClass.md) | Fonction de callback lorsque la WebSocket est terminée. La callback reçoit les paramètres suivants : <li>`$1`: objet WebSocket</li><li>`$2`: Objet</li><ul><li>`$2.code` (nombre, lecture seule) : unsigned short contenant le code de fermeture envoyé par le serveur.</li><li>`$2.reason` (texte, lecture seule) : Raison pour laquelle le serveur a fermé la connexion. Elle est spécifique au serveur et au sous-protocole particulier.</li></ul>                                                                                                               |
| onOpen      | [Function](FunctionClass.md) | Fonction de callback lorsque la WebSocket est ouverte. La callback reçoit les paramètres suivants:<li>`$1`: objet WebSocket</li><li>`$2`: Objet</li><ul><li>`$2.type` (texte): toujours "open"</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| dataType    | Text                         | Type de données reçues ou envoyées. Valeurs disponibles : "text" (par défaut), "blob", "object". "text" = utf-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| headers     | Object                       | En-têtes du WebSocket.<li>Syntaxe pour l'assignation de clé standard : `headers.*clé*:=*valeur*` (*valeur* peut être une Collection si la même clé apparaît plusieurs fois)</li><li>Syntaxe pour l'assignation de Cookie (cas particulier) : `headers.Cookie:="*nom*=*valeur* {; *nom2*=*valeur2*{; ... } }"`</li>                                                                                                                                                                                                                                                                                                                                                  |

Voici la séquence des appels de callbacks :

1. `onOpen` est exécuté une fois
2. Zéro ou plusieurs `onMessage` sont exécutés
3. Zéro ou un `onError` est exécuté (stoppe le traitement)
4. `onTerminate` est toujours exécuté

#### Exemple

Vous souhaitez définir des en-têtes dans la classe utilisateur `WSConnectionHandler` :

```4d
// Classe WSConnectionHandler

Class constructor($myToken:Text)

// Création des en-têtes envoyés au serveur
This.headers:=New object("x-authorization" ;$myToken)
// Nous définissons deux cookies
This.headers.Cookie:="yummy_cookie=choco ; tasty_cookie=strawberry"
...

```

<!-- REF #WebSocketClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Description

La propriété `.dataType` contient <!-- REF #WebSocketClass.dataType.Summary -->le type de contenu du body de la réponse<!-- END REF -->. Peut être "text", "blob" ou "object".

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->

## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Description

La propriété `.handler` contient <!-- REF #WebSocketClass.handler.Summary -->l'accesseur qui récupère l'objet `connectionHandler` utilisé pour initier la connexion<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->

## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Description

La propriété `.id` contient <!-- REF #WebSocketClass.id.Summary -->l'identifiant unique de la connexion<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketClass.send().Desc -->

## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketClass.send().Params -->

| Paramètres | Type               |     | Description       |
| ---------- | ------------------ | :-: | ----------------- |
| message    | Text, Blob, Object |  -> | Message à envoyer |

<!-- END REF -->

#### Description

La fonction `.send()` <!-- REF #WebSocketClass.send().Summary -->envoie *message* au serveur WebSocket dans le type de données défini (Text, Blob ou Object)<!-- END REF -->.

Les contenus suivants sont envoyés en fonction du type de *message* :

| Type   | Contenu                                                                                                                                   |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texte en UTF-8                                                                                                                            |
| Blob   | Données binaires                                                                                                                          |
| Object | Texte en JSON UTF-8 (même résultat qu'avec [`JSON Stringify`](https://doc.4d.com/4dv20/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketClass.status.Desc -->

## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Description

La propriété `.status` contient <!-- REF #WebSocketClass.status.Summary -->le statut courant de la connexion (peut être "Connecting", "Closing", "Closed" ou "Connected")<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Params -->

| Paramètres | Type    |     | Description                                                       |
| ---------- | ------- | :-: | ----------------------------------------------------------------- |
| code       | Integer |  -> | Code de statut indiquant la cause de la fermeture de la connexion |
| reason     | Text    |  -> | Cause de la fermeture de la connexion                             |

<!-- END REF -->

#### Description

La fonction `.terminate()` <!-- REF #WebSocketClass.terminate().Summary -->referme la connexion WebSocket, avec les paramètres optionnels *code* et *reason*<!-- END REF -->.

Dans *code*, vous pouvez passer un code d'état expliquant pourquoi la connexion est fermée (voir aussi [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)) :

- S'il n'est pas spécifié, le code de fermeture de la connexion est automatiquement fixé à 1000 pour une fermeture normale, ou à une autre valeur standard dans la plage 1001-1015 qui indique la raison réelle de la fermeture de la connexion.
- Si elle est spécifiée, la valeur de ce paramètre de code remplace le réglage automatique. La valeur doit être un nombre entier. Soit 1000, soit un code personnalisé compris entre 3000 et 4999. Si vous spécifiez la valeur du \*code \* , vous devez également spécifier une *reason*.

Dans *reason*, vous pouvez passer une chaîne de caractères décrivant la raison pour laquelle la connexion est fermée.

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Description

La propriété `.url` contient <!-- REF #WebSocketClass.url.Summary -->l'URL auquel le WebSocket s'est connecté<!-- END REF -->. Il s'agit de l'URL que vous avez passé à la fonction [`new()`](#4dwebsocketnew).

Cette propriété est en lecture seule.

<!-- END REF -->
