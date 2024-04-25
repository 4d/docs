---
id: HTTPRequestClass
title: HTTPRequest
---

The `HTTPRequest` class allows you to handle [`HTTPRequest objects`](#httprequest-object) that can be used to configure and send requests to an HTTP server, as well as to process the HTTP server responses.

The `HTTPRequest` class is available from the `4D` class store. You create and send HTTP requests using the [4D.HTTPRequest.new()](#4dhttprequestnew) function, that returns a [`HTTPRequest object`](#httprequest-object).

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 19 R6   | Classe ajoutée |

</details>

### Exemple

Create a `MyHttpRequestOptions` class for the request options:

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

|                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#dataType)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.dataType.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.encoding.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.errors.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.headers.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.method.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.protocol.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.response.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#returnResponseBody)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary --> |
| [<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.terminate().Summary -->                        |
| [<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.terminated.Summary -->                         |
| [<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.timeout.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.url.Summary -->                                              |
| [<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.wait().Summary -->                                       |

<!-- REF #4D.HTTPRequest.new().Desc -->

## 4D.HTTPRequest.new()

<details><summary>Historique</summary>

| Release | Modifications                                                  |
| ------- | -------------------------------------------------------------- |
| 20      | Validation TLS par défaut                                      |
| 19 R7   | Support of _automaticRedirections_ and _decodeData_ properties |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->

| Paramètres | Type                           |     | Description                               |
| ---------- | ------------------------------ | :-: | ----------------------------------------- |
| url        | Text                           |  -> | URL à laquelle envoyer la requête         |
| options    | Object                         |  -> | Propriétés de configuration de la requête |
| Résultat   | 4D.HTTPRequest |  <- | Nouvel objet HTTPRequest                  |

<!-- END REF -->

#### Description

The `4D.HTTPRequest.new()` function <!-- REF #4D.HTTPRequest.new().Summary -->creates and sends a HTTP request to the HTTP server defined in _url_ with the defined _options_, and returns a `4D.HTTPRequest` object<!-- END REF -->.

The returned `HTTPRequest` object is used to process responses from the HTTP server and call methods.

In _url_, pass the URL where you want to send the request. La syntaxe à utiliser est la suivante :

```
{http://}[{user}:[{password}]@]host[ :{port}][/{path}][ ?{queryString}]
{https://}[{user}:[{password}]@]host[ :{port}][/{path}][ ?{queryString}]
```

If you omit the scheme part (`http://` or `https://`), a https request is sent.

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

#### `options` parameter

In the _options_ parameter, pass an object that can contain the following properties:

| Propriété              | Type                                            | Description                                                                                                                                                                                                                                                                                                                                             | Par défaut  |
| ---------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| automaticRedirections  | Boolean                                         | Si true, les redirections sont effectuées automatiquement (jusqu'à 5 redirections sont gérées, la 6e réponse de redirection est renvoyée s'il y en a une)                                                                                                                                                                            | True        |
| body                   | Variant                                         | Body of the request (required in case of `post` or `put` requests). Il peut s'agir d'un texte, d'un blob ou d'un objet. Le content-type est déterminé à partir du type de cette propriété, sauf s'il est défini dans les headers                                                                     | undefined   |
| certificatesFolder     | [Folder](FolderClass.md)                        | Définit le dossier actif des certificats du client                                                                                                                                                                                                                                                                                                      | undefined   |
| dataType               | Text                                            | Type de l'attribut response body. Valeurs : "text", "blob", "object", ou "auto". Si "auto", le type du contenu du corps sera déduit de son type MIME (object pour JSON, text pour texte, javascript, xml, message http et url sous forme encodée, blob sinon)                        | "auto"      |
| decodeData             | Boolean                                         | If true, the data received in the `onData` callback is uncompressed                                                                                                                                                                                                                                                                                     | False       |
| encoding               | Text                                            | Used only in case of requests with a `body` (`post` or `put` methods). Encodage du body content de la requête s'il s'agit d'un texte, ignoré si le content-type est défini dans les headers                                                                                                                          | "UTF-8"     |
| headers                | Object                                          | Headers de la requête. Syntax: `headers.key=value` (_value_ can be a Collection if the same key must appear multiple times)                                                                                                                                                                          | Objet vide  |
| method                 | Text                                            | "POST", "GET", ou autre méthode                                                                                                                                                                                                                                                                                                                         | "GET"       |
| minTLSVersion          | Text                                            | Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                                                                                                     | "`TLSv1_2`" |
| onData                 | [Function](FunctionClass.md)                    | Callback lorsque les données du body sont reçues. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                            | undefined   |
| onError                | [Function](FunctionClass.md)                    | Callback lorsqu'une erreur se produit. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                       | undefined   |
| onHeaders              | [Function](FunctionClass.md)                    | Callback lorsque les headers sont reçus. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                     | undefined   |
| onResponse             | [Function](FunctionClass.md)                    | Rappel lorsqu'une réponse est reçue. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                         | undefined   |
| onTerminate            | [Function](FunctionClass.md)                    | Rappel lorsque la requête est terminée. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                      | undefined   |
| protocol               | Text                                            | "auto" ou "HTTP1". "auto" signifie HTTP1 dans l'implémentation actuelle                                                                                                                                                                                                                                                                 | "auto"      |
| proxyAuthentication    | [authentication object](#authentication-object) | Objet manipulant l'authentification du proxy                                                                                                                                                                                                                                                                                                            | undefined   |
| serverAuthentication   | [authentication object](#authentication-object) | Objet manipulant l'authentification par serveur                                                                                                                                                                                                                                                                                                         | undefined   |
| returnResponseBody     | Boolean                                         | If false, the response body is not returned in the [`response` object](#response). Returns an error if false and `onData` is undefined                                                                                                                                                                                                  | True        |
| timeout                | Real                                            | Timeout en secondes. Undefined = pas de timeout                                                                                                                                                                                                                                                                                         | Undefined   |
| validateTLSCertificate | Boolean                                         | Si faux, 4D ne valide pas le certificat TLS et ne renvoie pas d'erreur s'il est invalide (c'est-à-dire expiré, auto-signé...). Important : dans l'implémentation actuelle, l'autorité de certification elle-même n'est pas vérifiée. | True        |

#### Fonctions de callback

Toutes les fonctions de callback reçoivent deux paramètres objet:

| Paramètres | Type                                        |
| ---------- | ------------------------------------------- |
| $param1    | [`HTTPRequest` object](#httprequest-object) |
| $param2    | [`Event` object](#event-object)             |

Voici la séquence des appels de callbacks :

1. `onHeaders` is always called once

2. `onData` is called zero or several times (not called if the request does not have a body)

3. If no error occured, `onResponse` is always called once

4. If an error occurs, `onError` is executed once (and terminates the request)

5. `onTerminate` is always executed once

#### event object

An `event` object is returned when a [callback function](#callback-functions) is called. Il contient les propriétés suivantes :

| Propriété             | Type | Description                                                                                                                  |
| --------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| .data | blob | Données reçues. It is always _undefined_ except in the `onData` callback                                     |
| .type | text | Type d'événement. Valeurs possibles : "response", "error", "headers", "data", or "terminate" |

#### authentication object

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. Il peut contenir les propriétés suivantes :

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

| Paramètres | Type       |     | Description                                                         |
| ---------- | ---------- | :-: | ------------------------------------------------------------------- |
| data       | Text, Blob |  -> | Données à analyser                                                  |
| Résultat   | Object     |  <- | Objet dont chaque propriété est une partie des données multiparties |

<!-- END REF -->

#### Description

The `HTTP Parse message` command <!-- REF #HTTP Parse message.Summary -->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Each property of the returned object corresponds to a part of the multipart data<!-- END REF -->.

:::info

HTTP lui-même est un protocole de communication sans état. Dans ce cadre, les clients initient la communication en envoyant des messages "request" aux serveurs, en spécifiant des détails tels que la méthode, la cible, les en-têtes, le contenu, etc. Les serveurs, à leur tour, répondent par des messages "response" qui contiennent les mêmes détails. `HTTP Parse message` parses either the "request" or the "response" message into a well-organized object.

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

<!-- REF #HTTPRequestClass.dataType.Desc -->

## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### Description

The `.dataType` property contains <!-- REF #HTTPRequestClass.dataType.Summary -->the `dataType` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "auto" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->

## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### Description

The `.encoding` property contains <!-- REF #HTTPRequestClass.encoding.Summary -->the `encoding` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "UTF-8" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->

## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Description

The `.errors` property contains <!-- REF #HTTPRequestClass.errors.Summary -->the collection of all the errors if at least one error has been triggered<!-- END REF -->.

Here is the contents of the `.errors` property:

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

The `.headers` property contains <!-- REF #HTTPRequestClass.headers.Summary -->the `headers` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis, contient un objet vide.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->

## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### Description

The `.method` property contains <!-- REF #HTTPRequestClass.method.Summary -->the `method` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis, elle contient "GET".

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->

## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### Description

The `.protocol` property contains <!-- REF #HTTPRequestClass.protocol.Summary -->the `protocol` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis ou si "auto" a été utilisé, contient la version du protocole utilisé.

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->

## .response

<details><summary>Historique</summary>

| Release | Modifications                                                                  |
| ------- | ------------------------------------------------------------------------------ |
| 19 R8   | `.headers` returns lowercase names. New `.rawHeaders` property |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### Description

The `.response` property contains <!-- REF #HTTPRequestClass.response.Summary -->the response to the request if it has received at least the status code, undefined otherwise<!-- END REF -->.

A `response` object is a non-sharable object. Il contient les propriétés suivantes :

| Propriété                   | Type    | Description                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| .body       | Variant | Body de la réponse. The type of the message is defined according to the [`dataType`](#datatype) property. Undefined si le body n'a pas encore été reçu                                                                                                                                                                       |
| .headers    | Object  | Headers de la réponse. Les noms des headers sont retournés en minuscules. `<headername>.key` = value (value can be a collection if the same key appears multiple times). Undefined si les headers n'ont pas encore été reçus.                                             |
| .status     | Number  | Status code de la réponse                                                                                                                                                                                                                                                                                                                                    |
| .statusText | Text    | Message expliquant le status code                                                                                                                                                                                                                                                                                                                            |
| .rawHeaders | Object  | Headers de la réponse. Les noms des headers sont retournés tels quels (avec leur casse d'origine). `<headerName>.key` = value (value can be a collection if the same key appears multiple times). Undefined si les headers n'ont pas encore été reçus. |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->

## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### Description

The `.returnResponseBody` property contains <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->the `returnResponseBody` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis, il contient True.

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

The `.terminate()` function <!-- REF #HTTPRequestClass.terminate().Summary -->aborts the HTTP request<!-- END REF -->. It triggers the `onTerminate` event.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->

## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### Description

The `.terminated` property contains <!-- REF #HTTPRequestClass.terminated.Summary -->True if the request is terminated (after the call to `onTerminate`), false otherwise<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->

## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### Description

The `.timeout` property contains <!-- REF #HTTPRequestClass.timeout.Summary -->the `timeout` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. S'il a été omis, il contient Undefined.

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->

## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Description

The `.url` property contains <!-- REF #HTTPRequestClass.url.Summary -->the URL of the HTTP request<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->

## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : Real } ) : HTTPRequestClass<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Params -->

| Paramètres | Type                           |     | Description                                         |
| ---------- | ------------------------------ | :-: | --------------------------------------------------- |
| time       | Real                           |  -> | Délai d'attente maximum en secondes pour la réponse |
| Résultat   | 4D.HTTPRequest |  <- | Objet HTTPRequest                                   |

<!-- END REF -->

#### Description

> Cette fonction est thread-safe.

The `wait()` function <!-- REF #HTTPRequestClass.wait().Summary -->waits for the response from the server<!-- END REF -->.

If a _time_ parameter is passed, the function will wait at most the defined number of seconds.

Si la réponse du serveur est déjà arrivée, la fonction rend la main immédiatement.

<!-- END REF -->
