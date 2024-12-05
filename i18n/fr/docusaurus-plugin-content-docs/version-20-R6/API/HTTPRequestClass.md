---
id: HTTPRequestClass
title: HTTPRequest
---

La classe `HTTPRequest` vous permet de manipuler des [`objets HTTPRequest`](#httprequest-object) qui peuvent être utilisés pour configurer et envoyer des requêtes à un serveur HTTP, ainsi que pour traiter les réponses du serveur HTTP.

La classe `HTTPRequest` est disponible dans le class store `4D`. Vous créez et envoyez des requêtes HTTP à l'aide de la fonction [4D.HTTPRequest.new()](#4dhttprequestnew), qui renvoie un objet [`HTTPRequest`](#httprequest-object).

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 19 R6   | Classe ajoutée |

</details>

### Exemple

Création d'une classe `MyHttpRequestOptions` pour les options de la requête :

```4d
Class constructor($method : Text ; $headers : Object ; $body : Text)
This.method:=$method
This.headers:=$headers
This.body:=$body

Function onResponse($request : 4D.HTTPRequest ; $event : Object)
//Méthode onResponse, si vous souhaitez traiter la requête de manière asynchrone

Function onError($request : 4D.HTTPRequest ; $event : Object)
//Méthode onError, si vous souhaitez traiter la requête de manière asynchrone
```

Vous pouvez maintenant créer votre requête :

```4d
var $headers : Object
$headers:=New object()
$headers["field1"]:="value1"

var myHttpRequestOptions : cs.MyHttpRequestOptions
myHttpRequestOptions := cs.MyHttpRequestOptions.new("GET" ; $headers; "")

var $request : 4D.HTTPRequest
$request:=4D.HTTPRequest.new("www.google.com" ; myHttpRequestOptions)
$request.wait() //Si vous voulez traiter la requête de manière synchrone
//Maintenant vous pouvez utiliser $request.response pour accéder au résultat de la requête ou $request.error pour vérifier l'erreur qui s'est produite.
```

### Objet HTTPRequest

Un objet HTTPRequest est un objet non partageable.

Les objets HTTPRequest fournissent les propriétés et fonctions suivantes :

|                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPRequestClass.agent.Syntax -->](#agent)<br/><!-- INCLUDE #HTTPRequestClass.agent.Summary -->                                        |
| [<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #HTTPRequestClass.dataType.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)<br/><!-- INCLUDE #HTTPRequestClass.encoding.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)<br/><!-- INCLUDE #HTTPRequestClass.errors.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #HTTPRequestClass.headers.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)<br/><!-- INCLUDE #HTTPRequestClass.method.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)<br/><!-- INCLUDE #HTTPRequestClass.protocol.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)<br/><!-- INCLUDE #HTTPRequestClass.response.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#returnResponseBody)<br/><!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary --> |
| [<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #HTTPRequestClass.terminate().Summary -->                        |
| [<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #HTTPRequestClass.terminated.Summary -->                         |
| [<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)<br/><!-- INCLUDE #HTTPRequestClass.timeout.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)<br/><!-- INCLUDE #HTTPRequestClass.url.Summary -->                                              |
| [<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #HTTPRequestClass.wait().Summary -->                                       |

<!-- REF #4D.HTTPRequest.new().Desc -->

## 4D.HTTPRequest.new()

<details><summary>Historique</summary>

| Release | Modifications                                                          |
| ------- | ---------------------------------------------------------------------- |
| 20      | Validation TLS par défaut                                              |
| 19 R7   | Prise en charge des propriétés *automaticRedirections* et *decodeData* |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->

| Paramètres | Type                           |                             | Description                               |
| ---------- | ------------------------------ | :-------------------------: | ----------------------------------------- |
| url        | Text                           |              ->             | URL à laquelle envoyer la requête         |
| options    | Object                         |              ->             | Propriétés de configuration de la requête |
| Résultat   | 4D.HTTPRequest | <- | Nouvel objet HTTPRequest                  |

<!-- END REF -->

#### Description

La fonction `4D.HTTPRequest.new()` <!-- REF #4D.HTTPRequest.new().Summary -->crée et envoie une requête HTTP au serveur HTTP défini dans *url* avec les *options* définies, et renvoie un objet `4D.HTTPRequest`<!-- END REF -->.

L'objet `HTTPRequest` retourné est utilisé pour traiter les réponses du serveur HTTP et appeler des méthodes.

Dans *url*, passez l'URL où vous voulez envoyer la requête. La syntaxe à utiliser est la suivante :

```
{http://}[{user}:[{password}]@]host[ :{port}][/{path}][ ?{queryString}]
{https://}[{user}:[{password}]@]host[ :{port}][/{path}][ ?{queryString}]
```

Si vous omettez la partie "scheme" (`http://` ou `https://`), une requête https est envoyée.

Par exemple, vous pouvez passer les chaînes suivantes :

```
    http://www.myserver.com
    www.myserver.com/path
    http://www.myserver.com/path?name="jones"
    https://www.myserver.com/login
    http://123.45.67.89:8083
    http://john:smith@123.45.67.89:8083
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

#### Paramètre `options`

Dans le paramètre *options*, passez un objet qui peut contenir les propriétés suivantes :

| Propriété              | Type                                               | Description                                                                                                                                                                                                                                                                                                                                             | Par défaut         |
| ---------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| agent                  | [4D.HTTPAgent](HTTPAgentClass.md)  | HTTPAgent à utiliser pour la requête HTTPRequest. Les options de l'agent seront fusionnées avec les options de la requête (les options de la requête sont prioritaires). Si aucun agent spécifique n'est défini, un agent global avec des valeurs par défaut est utilisé.            | Objet agent global |
| automaticRedirections  | Boolean                                            | Si true, les redirections sont effectuées automatiquement (jusqu'à 5 redirections sont gérées, la 6e réponse de redirection est renvoyée s'il y en a une)                                                                                                                                                                            | True               |
| body                   | Variant                                            | Corps de la requête (requis dans le cas des requêtes `post` ou `put`). Il peut s'agir d'un texte, d'un blob ou d'un objet. Le content-type est déterminé à partir du type de cette propriété, sauf s'il est défini dans les headers                                                                  | undefined          |
| certificatesFolder     | [Folder](FolderClass.md)                           | Définit le dossier actif des certificats du client                                                                                                                                                                                                                                                                                                      | undefined          |
| dataType               | Text                                               | Type de l'attribut response body. Valeurs : "text", "blob", "object", ou "auto". Si "auto", le type du contenu du corps sera déduit de son type MIME (object pour JSON, text pour texte, javascript, xml, message http et url sous forme encodée, blob sinon)                        | "auto"             |
| decodeData             | Boolean                                            | Si vrai, les données reçues dans le callback `onData` sont décompressées                                                                                                                                                                                                                                                                                | False              |
| encoding               | Text                                               | Utilisé uniquement dans le cas de requêtes avec un `body` (méthodes `post` ou `put`). Encodage du body content de la requête s'il s'agit d'un texte, ignoré si le content-type est défini dans les headers                                                                                                           | "UTF-8"            |
| headers                | Object                                             | Headers de la requête. Syntaxe : `headers.key=value` (*value* peut être une Collection si la même clé doit apparaître plusieurs fois)                                                                                                                                                                | Objet vide         |
| method                 | Text                                               | "POST", "GET", ou autre méthode                                                                                                                                                                                                                                                                                                                         | "GET"              |
| minTLSVersion          | Text                                               | Définit la version minimale de TLS : "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                                                                                                 | "`TLSv1_2`"        |
| onData                 | [Function](FunctionClass.md)                       | Callback lorsque les données du body sont reçues. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                            | undefined          |
| onError                | [Function](FunctionClass.md)                       | Callback lorsqu'une erreur se produit. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                       | undefined          |
| onHeaders              | [Function](FunctionClass.md)                       | Callback lorsque les headers sont reçus. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                     | undefined          |
| onResponse             | [Function](FunctionClass.md)                       | Rappel lorsqu'une réponse est reçue. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                         | undefined          |
| onTerminate            | [Function](FunctionClass.md)                       | Rappel lorsque la requête est terminée. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                      | undefined          |
| protocol               | Text                                               | "auto" ou "HTTP1". "auto" signifie HTTP1 dans l'implémentation actuelle                                                                                                                                                                                                                                                                 | "auto"             |
| proxyAuthentication    | [objet d'authentification](#authentication-object) | Objet manipulant l'authentification du proxy                                                                                                                                                                                                                                                                                                            | undefined          |
| serverAuthentication   | [objet d'authentification](#authentication-object) | Objet manipulant l'authentification par serveur                                                                                                                                                                                                                                                                                                         | undefined          |
| returnResponseBody     | Boolean                                            | Si false, le body de la réponse n'est pas renvoyé dans l'[objet `response`](#response). Renvoie une erreur si faux et `onData` est undefined                                                                                                                                                                                            | True               |
| timeout                | Real                                               | Timeout en secondes. Undefined = pas de timeout                                                                                                                                                                                                                                                                                         | Undefined          |
| validateTLSCertificate | Boolean                                            | Si faux, 4D ne valide pas le certificat TLS et ne renvoie pas d'erreur s'il est invalide (c'est-à-dire expiré, auto-signé...). Important : dans l'implémentation actuelle, l'autorité de certification elle-même n'est pas vérifiée. | True               |

#### Fonctions de callback

Toutes les fonctions de callback reçoivent deux paramètres objet:

| Paramètres | Type                                       |
| ---------- | ------------------------------------------ |
| $param1    | [`Objet HTTPRequest`](#httprequest-object) |
| $param2    | [`Objet Event`](#event-object)             |

Voici la séquence des appels de callbacks :

1. `onHeaders` est toujours appelé une fois

2. `onData` est appelé zéro ou plusieurs fois (non appelé si la requête n'a pas de body)

3. Si aucune erreur ne s'est produite, `onResponse` est toujours appelé une fois

4. Si une erreur se produit, `onError` est exécuté une fois (et termine la requête)

5. `onTerminate` est toujours exécuté une fois

:::info

Pour que les fonctions de rappel soient appelées lorsque vous n'utilisez pas [`wait()`](#wait) (appel asynchrone), le process doit être un [process worker](../Develop/processes.md#worker-processes) créé avec [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html), et NON [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html).

:::

#### event object

Un objet `event` est renvoyé lorsqu'une [fonction de callback](#callback-functions) est appelée. Il contient les propriétés suivantes :

| Propriété             | Type | Description                                                                                                                  |
| --------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| .data | blob | Données reçues. Toujours *undefined* sauf dans la callback `onData`                                          |
| .type | text | Type d'événement. Valeurs possibles : "response", "error", "headers", "data", or "terminate" |

#### authentication object

Un objet d'authentification gère la propriété `options.serverAuthentication` ou `options.proxyAuthentication` . Il peut contenir les propriétés suivantes :

| Propriété | Type | Description                                                                          | Par défaut |
| --------- | ---- | ------------------------------------------------------------------------------------ | ---------- |
| name      | Text | Nom utilisé pour l'authentification                                                  | undefined  |
| password  | Text | Mot de passe utilisé pour l'authentification                                         | undefined  |
| method    | Text | Méthode utilisée pour l'authentification : "basic", "digest", "auto" | "auto"     |

<!-- END REF -->

<!-- REF #HTTP Parse message.Desc -->

## HTTP Parse message

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R4   | Ajout         |

</details>

<!-- REF #HTTP Parse message.Syntax -->**HTTP Parse message**( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF -->

<!-- REF #HTTP Parse message.Params -->

| Paramètres | Type       |                             | Description                                                         |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------- |
| data       | Text, Blob |              ->             | Données à analyser                                                  |
| Résultat   | Object     | <- | Objet dont chaque propriété est une partie des données multiparties |

<!-- END REF -->

#### Description

La commande `HTTP Parse message` <!-- REF #HTTP Parse message.Summary -->analyse un texte ou un blob multipart/form-data (message HTTP "response") et extrait le contenu vers un objet. Chaque propriété de l'objet renvoyé correspond à une partie des données multipart<!-- END REF -->.

:::info

HTTP lui-même est un protocole de communication sans état. Dans ce cadre, les clients initient la communication en envoyant des messages "request" aux serveurs, en spécifiant des détails tels que la méthode, la cible, les en-têtes, le contenu, etc. Les serveurs, à leur tour, répondent par des messages "response" qui contiennent les mêmes détails. `HTTP Parse message` analyse le message "request" ou "response" et retourne un objet structuré.

:::

#### Exemple

Dans l'exemple suivant, nous analysons les données d'un fichier texte contenant des requêtes HTTP.

Voici le contenu du fichier :

```
POST /batch/gmail/v1/ HTTP/1.1
Accept-Encoding: gzip, deflate
Authorization: Bearer xxxxxx
Connection: Close
Content-Length: 442
Content-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8
Date: Wed, 29 Nov 2023 13:51:35 GMT
Host: gmail.googleapis.com
User-Agent: 4D/20.4.0


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item1>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item2>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1

--batch_19438756D576A14ABA87C112F56B9396--
```

Pour analyser le fichier :

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}],
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```

<!-- END REF -->

<!-- REF #HTTPRequestClass.agent.Desc -->

## .agent

<!-- REF #HTTPRequestClass.agent.Syntax -->**agent** : 4D.HTTPAgent<!-- END REF -->

#### Description

La propriété `.agent` contient <!-- REF #HTTPRequestClass.agent.Summary -->l'objet `agent` passé dans [`options`](#paramètre-options) ou l'objet agent global s'il a été omis<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->

## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### Description

La propriété `.dataType` contient <!-- REF #HTTPRequestClass.dataType.Summary -->le `dataType` passé dans l'objet [`options`](#options-parameter) lors de l'appel à [new()](#4dhttprequestnew), "auto" s'il a été omis<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->

## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### Description

La propriété `.encoding` contient <!-- REF #HTTPRequestClass.encoding.Summary -->l'`encoding` passé dans l'objet [`options`](#options-parameter) lors de l'appel à [new()](#4dhttprequestnew), "UTF-8" s'il a été omis<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->

## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Description

La propriété `.errors` contient <!-- REF #HTTPRequestClass.errors.Summary -->la collection de toutes les erreurs si au moins une erreur a été générée<!-- END REF -->.

Voici le contenu de la propriété `.errors` :

| Propriété |                                                                                           | Type       | Description                                            |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------ |
| errors    |                                                                                           | Collection | Pile d'erreurs 4D en cas d'erreur                      |
|           | [].errCode            | Number     | Code d'erreur 4D                                       |
|           | [].message            | Text       | Description de l'erreur 4D                             |
|           | [].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur |

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->

## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Description

La propriété `.headers` contient <!-- REF #HTTPRequestClass.headers.Summary -->les `headers` passés dans l'objet [`options`](#options-parameter) lors de l'appel à [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis, contient un objet vide.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->

## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### Description

La propriété `.method` contient <!-- REF #HTTPRequestClass.method.Summary -->la `méthode` passée dans l'objet [`options`](#options-parameter) lors de l'appel à [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis, elle contient "GET".

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->

## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### Description

La propriété `.protocol` contient <!-- REF #HTTPRequestClass.protocol.Summary -->le `protocole` passé dans l'objet [`options`](#options-parameter) lors de l'appel à [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis ou si "auto" a été utilisé, contient la version du protocole utilisé.

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->

## .response

<details><summary>Historique</summary>

| Release | Modifications                                                                               |
| ------- | ------------------------------------------------------------------------------------------- |
| 19 R8   | `.headers` renvoie les noms en minuscules. Nouvelle propriété `.rawHeaders` |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### Description

La propriété `.response` contient <!-- REF #HTTPRequestClass.response.Summary -->la réponse à la requête si elle a reçu au moins le code de statut, sinon undefined<!-- END REF -->.

Un objet `response` est un objet non partageable. Il contient les propriétés suivantes :

| Propriété                   | Type    | Description                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Variant | Body de la réponse. Le type du message est défini selon l'attribut [`dataType`](#datatype). Undefined si le body n'a pas encore été reçu                                                                                                                                                                                               |
| .headers    | Object  | Headers de la réponse. Les noms des headers sont retournés en minuscules. `<headername>.key` = valeur (la valeur peut être une collection si la même clé apparaît plusieurs fois). Undefined si les headers n'ont pas encore été reçus.                                             |
| .status     | Number  | Status code de la réponse                                                                                                                                                                                                                                                                                                                                              |
| .statusText | Text    | Message expliquant le status code                                                                                                                                                                                                                                                                                                                                      |
| .rawHeaders | Object  | Headers de la réponse. Les noms des headers sont retournés tels quels (avec leur casse d'origine). `<headername>.key` = valeur (la valeur peut être une collection si la même clé apparaît plusieurs fois). Undefined si les headers n'ont pas encore été reçus. |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->

## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### Description

La propriété `.returnResponseBody` contient <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->le `returnResponseBody` passé dans l'objet [`options`](#options-parameter) lors de l'appel à [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis, il contient True.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->

## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

> Cette fonction est thread-safe.

La fonction `.terminate()` <!-- REF #HTTPRequestClass.terminate().Summary -->interrompt la requête HTTP<!-- END REF -->. Elle déclenche l'événement `onTerminate` .

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->

## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### Description

La propriété `.terminated` contient <!-- REF #HTTPRequestClass.terminated.Summary -->True si la requête est terminée (après l'appel à `onTerminate`), false sinon<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->

## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### Description

La propriété `.timeout` contient <!-- REF #HTTPRequestClass.timeout.Summary -->le `timeout` passé dans l'objet [`options`](#options-parameter) lors de l'appel à [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis, il contient Undefined.

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->

## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Description

La propriété `.url` contient <!-- REF #HTTPRequestClass.url.Summary -->l'URL de la requête HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->

## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : Real } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Params -->

| Paramètres | Type                           |                             | Description                                         |
| ---------- | ------------------------------ | :-------------------------: | --------------------------------------------------- |
| time       | Real                           |              ->             | Délai d'attente maximum en secondes pour la réponse |
| Résultat   | 4D.HTTPRequest | <- | Objet HTTPRequest                                   |

<!-- END REF -->

#### Description

> Cette fonction est thread-safe.

La fonction `wait()` <!-- REF #HTTPRequestClass.wait().Summary -->attend la réponse du serveur<!-- END REF -->.

Si un paramètre *time* est passé, la fonction attendra au maximum le nombre de secondes défini.

Si la réponse du serveur est déjà arrivée, la fonction rend la main immédiatement.

During a `.wait()` execution, callback functions are executed, whether from other `HTTPRequest` or [`SystemWorker`](SystemWorkerClass.md) instances, or other `CALL WORKER` calls. Vous pouvez sortir d'un `.wait()` en appelant [`terminate()`](#terminate) à partir d'une callback.

<!-- END REF -->
