---
id: IncomingMessageClass
title: IncomingMessage
---

La classe `4D.IncomingMessage` vous permet de gérer l'objet reçu par un [**HTTP request handler**](../WebServer/http-request-handler.md) personnalisé. Les requêtes HTTP et leurs propriétés sont automatiquement reçues en tant qu'instance de la classe `4D.IncomingMessage`. Les paramètres fournis directement dans la requête avec le verbe GET sont gérés par la propriété [`.urlQuery`](#urlquery), tandis que les paramètres passés dans le corps de la requête sont disponibles via des fonctions telles que [`.getBlob()`](#getblob) ou [`getText()`](#gettext).

Le gestionnaire de requêtes HTTP peut renvoyer n'importe quelle valeur (ou rien). Il renvoie généralement une instance de la classe [`4D.OutgoingMessage`](OutgoingMessageClass.md).

Toutes les propriétés de cette classe sont en lecture seule. Elles sont automatiquement remplies par le request handler.

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R8   | Classe ajoutée |

</details>

### Exemple

Le fichier [**HTTPHandlers.json**](../WebServer/http-request-handler.md) suivant a été défini :

```json
[
    {
        "class": "GeneralHandling",
        "method": "gettingStarted",
        "pattern": "start",
        "verbs": "get, post"
    }
]
```

La requête `http://127.0.0.1/start/example?param=demo&name=4D` est exécutée avec un verbe `GET` dans un navigateur. Elle est gérée par la fonction *gettingStarted* de la classe singleton *GeneralHandling* suivante :

```4d
shared singleton Class constructor()
        
Function gettingStarted($request : 4D.IncomingMessage) : 4D.OutgoingMessage
    
    var $result:=4D.OutgoingMessage.new()
    var $body : Text
    
    $body:="Called URL: "+$request.url+"\n"
    
    $body+="The parameters are received as an object: \n"+JSON Stringify($request.urlQuery; *)+"\n"
    
    $body+="The verb is: "+$request.verb+"\n"
    
    $body+="There are "+String($request.urlPath.length)+" url parts - Url parts are: "\
    +$request.urlPath.join(" - ")+"\n\n"
    
    
    $result.setBody($body)
    $result.setHeader("Content-Type"; "text/plain")
    
    return $result

```

La requête est reçue sur le serveur en tant que *$request*, une instance d'objet de la classe `4D.IncomingMessage`.

Voici la réponse :

```json
Called URL: /start/example? param=demo&name=4D 
The parameters are received as an object:
{
  "param": "demo",
  "name": "4D"
}
The verb is: GET
There are 2 url parts - Url parts are: start - example
```

### Objet IncomingMessage

Les objets 4D.IncomingMessage offrent les propriétés et fonctions suivantes :

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #IncomingMessageClass.getBlob().Syntax -->](#getblob)<br/><!-- INCLUDE #IncomingMessageClass.getBlob().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.getHeader().Syntax -->](#getheader)<br/><!-- INCLUDE #IncomingMessageClass.getHeader().Summary -->    |
| [<!-- INCLUDE #IncomingMessageClass.getJSON().Syntax -->](#getjson)<br/><!-- INCLUDE #IncomingMessageClass.getJSON().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.getPicture().Syntax -->](#getpicture)<br/><!-- INCLUDE #IncomingMessageClass.getPicture().Summary --> |
| [<!-- INCLUDE #IncomingMessageClass.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #IncomingMessageClass.getText().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #IncomingMessageClass.headers.Summary -->              |
| [<!-- INCLUDE #IncomingMessageClass.url.Syntax -->](#url)<br/><!-- INCLUDE #IncomingMessageClass.url.Summary -->                          |
| [<!-- INCLUDE #IncomingMessageClass.urlPath.Syntax -->](#urlpath)<br/><!-- INCLUDE #IncomingMessageClass.urlPath.Summary -->              |
| [<!-- INCLUDE #IncomingMessageClass.urlQuery.Syntax -->](#urlquery)<br/><!-- INCLUDE #IncomingMessageClass.urlQuery.Summary -->           |
| [<!-- INCLUDE #IncomingMessageClass.verb.Syntax -->](#verb)<br/><!-- INCLUDE #IncomingMessageClass.verb.Summary -->                       |

:::note

Un objet 4D.IncomingMessage est [non partageable](../Concepts/shared.md).

:::

<!-- REF #IncomingMessageClass.getBlob().Desc -->

## .getBlob()

<!-- REF #IncomingMessageClass.getBlob().Syntax -->**.getBlob**() : Blob<!-- END REF -->

<!-- REF #IncomingMessageClass.getBlob().Params -->

| Paramètres | Type |                             | Description                         |
| ---------- | ---- | --------------------------- | ----------------------------------- |
| Résultat   | Blob | <- | Body de la requête en tant que Blob |

<!-- END REF -->

#### Description

La fonction `.getBlob()` <!-- REF #IncomingMessageClass.getBlob().Summary -->renvoie le body de la requête sous forme de Blob<!-- END REF -->.

Si le body n'a pas été fourni sous forme de contenu binaire, la fonction tente de convertir la valeur, mais elle peut donner des résultats inattendus.

<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Desc -->

## .getHeader()

<!-- REF #IncomingMessageClass.getHeader().Syntax -->**.getHeader**( *key* : Text ) : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Params -->

| Paramètres | Type |                             | Description                                                |
| ---------- | ---- | --------------------------- | ---------------------------------------------------------- |
| key        | Text | ->                          | Propriété de header (en-tête) à obtenir |
| Résultat   | Text | <- | Valeur de la propriété de header                           |

<!-- END REF -->

#### Description

La fonction `.getHeader()` <!-- REF #IncomingMessageClass.getHeader().Summary -->renvoie la valeur de l'en-tête *key*<!-- END REF -->.

:::note

Le paramètre *key* n'est pas sensible à la casse.

:::

#### Exemple

```4d
var $value : Texte
var $request : 4D.IncomingMessage
$value := $request.getHeader("content-type")
```

<!-- END REF -->

<!-- REF #IncomingMessageClass.getJSON().Desc -->

## .getJSON()

<!-- REF #IncomingMessageClass.getJSON().Syntax -->**.getJSON**() : Variant<!-- END REF -->

<!-- REF #IncomingMessageClass.getJSON().Params -->

| Paramètres | Type    |                             | Description                           |
| ---------- | ------- | --------------------------- | ------------------------------------- |
| Résultat   | Variant | <- | Résolution JSON du body de la requête |

<!-- END REF -->

#### Description

La fonction `.getJSON()` <!-- REF #IncomingMessageClass.getJSON().Summary -->renvoie le body de la requête sous forme de résolution JSON<!-- END REF -->.

Si le body n'a pas été fourni sous la forme d'un contenu JSON valide, une erreur est générée.

<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Desc -->

## .getPicture()

<!-- REF #IncomingMessageClass.getPicture().Syntax -->**.getPicture**() : Picture<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Params -->

| Paramètres | Type    |                             | Description                         |
| ---------- | ------- | --------------------------- | ----------------------------------- |
| Résultat   | Picture | <- | Body de la requête en tant qu'image |

<!-- END REF -->

#### Description

La fonction `.getPicture()` <!-- REF #IncomingMessageClass.getPicture().Summary -->renvoie le body de la requête sous forme d'image (dans le cas d'un body envoyé en tant qu'image)<!-- END REF -->.

Le content-type doit être fourni dans les headers pour indiquer que le body est une image.

:::note

Si la requête est construite en utilisant la classe [`HTTPRequest`](HTTPRequestClass.md), l'image doit être envoyée dans le body sous forme de Blob avec le content-type approprié.

:::

Si le body n'est pas reçu comme une image valide, la fonction renvoie null.

<!-- END REF -->

<!-- REF #IncomingMessageClass.getText().Desc -->

## .getText()

<!-- REF #IncomingMessageClass.getText().Syntax -->**.getText**() : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getText().Params -->

| Paramètres | Type |                             | Description                          |
| ---------- | ---- | --------------------------- | ------------------------------------ |
| Résultat   | Text | <- | Body de la requête en tant que texte |

<!-- END REF -->

#### Description

La fonction `.getText()` <!-- REF #IncomingMessageClass.getText().Summary -->renvoie le body de la requête sous forme de texte<!-- END REF -->.

Si le body n'a pas été fourni sous forme de chaine, la fonction tente de convertir la valeur, mais elle peut donner des résultats inattendus.

<!-- END REF -->

<!-- REF #IncomingMessageClass.headers.Desc -->

## .headers

<!-- REF #IncomingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Description

La propriété `.headers` contient <!-- REF #IncomingMessageClass.headers.Summary -->les headers courants du message entrant sous forme de paires clé/valeur (chaînes)<!-- END REF -->.

La propriété `.headers` est en lecture seule.

Les noms des en-têtes (clés) sont en minuscules. Les noms des headers sont sensibles à la casse.

<!-- END REF -->

<!-- REF #IncomingMessageClass.url.Desc -->

## .url

<!-- REF #IncomingMessageClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Description

La propriété `.url` contient <!-- REF #IncomingMessageClass.url.Summary -->l'URL de la requête sans la partie *IP:port* et sous forme de chaîne<!-- END REF -->.

Par exemple, si la requête est adressée à: "http://127.0.0.1:80/docs/invoices/today", la propriété `.url` est "/docs/invoices/today".

La propriété `.url` est en lecture seule.

:::note

La partie "host" de la requête (*IP:port*) est fournie par le header [`host`](#headers).

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlPath.Desc -->

## .urlPath

<!-- REF #IncomingMessageClass.urlPath.Syntax -->**urlPath** : Collection<!-- END REF -->

#### Description

La propriété `.urlPath` contient <!-- REF #IncomingMessageClass.urlPath.Summary -->l'URL de la requête sans la partie *IP:port* et sous la forme d'une collection de chaînes<!-- END REF -->.

Par exemple, si la requête est adressée à: "http://127.0.0.1:80/docs/invoices/today", la propriété `.urlPath` est ["docs", "invoices" ,"today"].

La propriété `.urlPath` est en lecture seule.

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlQuery.Desc -->

## .urlQuery

<!-- REF #IncomingMessageClass.urlQuery.Syntax -->**urlQuery** : Object<!-- END REF -->

#### Description

La propriété `.urlQuery` contient <!-- REF #IncomingMessageClass.urlQuery.Summary -->les paramètres de la requête lorsqu'ils ont été passés dans l'URL sous forme de paires clé/valeur<!-- END REF -->.

La propriété `.urlQuery` est en lecture seule.

Les paramètres peuvent être passés dans l'URL des requêtes **directement** ou **en tant que contenu JSON**.

#### Paramètres directs

Exemple : `http://127.0.0.1:8044/myCall?firstname=Marie&id=2&isWoman=true`

Dans ce cas, les paramètres sont reçus sous forme de valeurs "stringifiées" dans la propriété `urlQuery` : `urlQuery = {"firstname" : "Marie" , "id" : "2" , "isWoman" : "true"}`

#### Paramètres contenu JSON

Exemple : `http://127.0.0.1:8044/myCall/?myparams='[{"firstname" : "Marie", "isWoman" : true, "id" : 3}]'`.

Les paramètres sont passés au format JSON et sont inclus dans une collection.

Dans ce cas, les paramètres sont reçus sous forme de texte JSON dans la propriété `urlQuery` et peuvent être analysés à l'aide de [`JSON Parse`](../commands-legacy/json-parse.md).

```4d
//urlQuery.myparams: "[{"firstname": "Marie","isWoman": true,"id": 3}]"
$test:=Value type(JSON Parse($r.urlQuery.myparams))=Is collection) //true
```

Les caractères spéciaux tels que les guillemets simples ou les retours à la ligne doivent être échappés.

Exemple : `http://127.0.0.1:8044/syntax/?mdcode=%60%60%604d`

````4d
//urlQuery.mdcode = ```4d
$test:=Length($r.urlQuery.mdcode) //5
````

:::note

Les paramètres fournis dans le body de la requête à l'aide des verbes POST ou PUT sont traités par des fonctions dédiées : [`getText()`](#gettext), [`getPicture()`](#getpicture), [`getBlob()`](#getblob), [`getJSON()`](#getjson).

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.verb.Desc -->

## .verb

<!-- REF #IncomingMessageClass.verb.Syntax -->**verb** : Text<!-- END REF -->

#### Description

La propriété `.verb` contient <!-- REF #IncomingMessageClass.verb.Summary -->le verbe utilisé par la requête<!-- END REF -->.

Les verbes de requête HTTP et HTTPS incluent par exemple "get", "post", "put", etc.

La propriété `.verb` est en lecture seule.

<!-- END REF -->

