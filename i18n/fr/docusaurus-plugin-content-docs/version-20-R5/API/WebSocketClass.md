---
id: WebSocketClass
title: WebSocket
---

The `WebSocket` class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection.

Les connexions clientes WebSocket sont utiles, par exemple, pour recevoir des données financières en temps réel ou pour envoyer et recevoir des messages à partir d'une messagerie instantanée.

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R2   | Ajout         |

</details>

### Exemple

Dans cet exemple, nous créons un client WebSocket très basique.

1. Create the `WSConnectionHandler` user class containing callback function(s) used to handle WebSocket event callbacks:

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

|                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.dataType.Summary -->        |
| [<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.handler.Summary -->           |
| [<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.id.Summary -->                          |
| [<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.status.Summary -->              |
| [<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebSocketClass.url.Summary -->                       |

## 4D.WebSocket.new()

<details><summary>Historique</summary>

| Release | Modifications                                        |
| ------- | ---------------------------------------------------- |
| 20 R3   | Support of `headers` property in _connectionHandler_ |

</details>

<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->

<!-- REF #4D.WebSocket.new().Params -->

| Paramètres                                        | Type                         |     | Description                               |
| ------------------------------------------------- | ---------------------------- | :-: | ----------------------------------------- |
| url                                               | Text                         |  -> | URL à laquelle se connecter               |
| [connectionHandler](#connectionHandler-parameter) | Object                       |  -> | Objet déclarant les callbacks WebSocket   |
| Résultat                                          | 4D.WebSocket |  <- | New [WebSocket object](#websocket-object) |

<!-- END REF -->

The `4D.WebSocket.new()` function <!-- REF #4D.WebSocket.new().Summary -->creates and returns a new [`4D.WebSocket` object](#websocket-object) connected to the WebSocket server at the address you passed in _url_<!-- END REF -->. The `4D.WebSocket` object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server.

In _url_, pass the URL to which the WebSocket server will respond. Les modèles d'URL suivants peuvent être utilisés :

- `ws://host[:port]path[?query]` for standard connections
- `wss://host[:port]path[?query]` for TLS secured connections

If the connection is not possible, a `null` object is returned and an error is generated (that you can intercept using a method installed with `ON ERR CALL`).

### _connectionHandler_ parameter

In _connectionHandler_, you can pass an object containing callback functions to be called according to connection events, as well as data type and headers to handle.

- Les callbacks sont automatiquement appelées dans le contexte du formulaire ou du worker qui initie la connexion.
- La WebSocket reste valide tant que le formulaire ou le worker n'est pas fermé.

| Propriété   | Type                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | Fonction de callback pour les données WebSocket. Appelée à chaque fois que le WebSocket a reçu des données. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "message"</li><li>`$2.data` (text, blob, or object, see `dataType`): Received data</li></ul>                                                                                                                                                                                                                                                                        |
| onError     | [Function](FunctionClass.md) | Fonction de callback pour les erreurs d'exécution. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "error"</li><li>`$2.errors`: collection of 4D errors stack in case of execution error.<ul><li>`[].errCode` (number): 4D error code</li><li>`[].message` (text): Description of the 4D error</li><li>`[].componentSignature` (text): Signature of the internal component which returned the error</li></ul></li></ul>                   |
| onTerminate | [Function](FunctionClass.md) | Fonction de callback lorsque la WebSocket est terminée. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.code` (number, read-only): unsigned short containing the close code sent by the server.</li><li>`$2.reason` (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol.</li><li>`$2.wasClean` (boolean, read-only): Indicates whether or not the connection was cleanly closed.</li></ul> |
| onOpen      | [Function](FunctionClass.md) | Fonction de callback lorsque la WebSocket est ouverte. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "open"</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| dataType    | Text                         | Type de données reçues ou envoyées. Valeurs disponibles : "text" (par défaut), "blob", "object". "text" = utf-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| headers     | Object                       | Headers of the WebSocket.<li>Syntax for standard key assignment: `headers.*key*:=*value*` (_value_ can be a Collection if the same key appears multiple times)</li><li>Syntax for Cookie assignment (particular case): `headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"`</li>                                                                                                                                                                                                                                                                                                                                                                                        |

Voici la séquence des appels de callbacks :

1. `onOpen` is executed once
2. Zero or several `onMessage` are executed
3. Zero or one `onError` is executed (stops the processing)
4. `onTerminate` is always executed

#### Exemple

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

#### Description

The `.dataType` property contains <!-- REF #WebSocketClass.dataType.Summary -->the type of the response body content<!-- END REF -->. Peut être "text", "blob" ou "object".

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->

## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Description

The `.handler` property contains <!-- REF #WebSocketClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->

## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Longint<!-- END REF -->

#### Description

The `.id` property contains <!-- REF #WebSocketClass.id.Summary -->the unique identifier of the connection<!-- END REF -->.

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

The `.send()` function <!-- REF #WebSocketClass.send().Summary -->sends _message_ to the WebSocket server in the defined data type (Text, Blob, or Object)<!-- END REF -->.

The following contents are sent depending on the _message_ type:

| Type   | Contenu                                                                                                                                |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texte en UTF-8                                                                                                                         |
| Blob   | Données binaires                                                                                                                       |
| Object | Text in JSON UTF-8 (same result as with [`JSON Stringify`](https://doc.4d.com/4dv20/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketClass.status.Desc -->

## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Description

The `.status` property contains <!-- REF #WebSocketClass.status.Summary -->the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")<!-- END REF -->.

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

The `.terminate()` function <!-- REF #WebSocketClass.terminate().Summary -->closes the WebSocket connection, along with optional _code_ and _reason_ parameters<!-- END REF -->.

In _code_, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- S'il n'est pas spécifié, le code de fermeture de la connexion est automatiquement fixé à 1000 pour une fermeture normale, ou à une autre valeur standard dans la plage 1001-1015 qui indique la raison réelle de la fermeture de la connexion.
- Si elle est spécifiée, la valeur de ce paramètre de code remplace le réglage automatique. La valeur doit être un nombre entier. Soit 1000, soit un code personnalisé compris entre 3000 et 4999. If you specify a _code_ value, you should also specify a _reason_ value.

In _reason_, you can pass a string describing why the connection is being closed.

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Description

The `.url` property contains <!-- REF #WebSocketClass.url.Summary -->the URL to which the WebSocket has connected<!-- END REF -->. It is the URL you passed to the [`new()`](#4dwebsocketnew) function.

Cette propriété est en lecture seule.

<!-- END REF -->
