---
id: OutgoingMessageClass
title: OutgoingMessage
---

La classe `4D.OutgoingMessage` vous permet de construire des messages qui seront renvoyés par les fonctions de votre application en réponse aux [requêtes REST](../REST/REST_requests.md). Lorsque la réponse est de type `4D.OutgoingMessage`, le serveur REST ne renvoie pas un objet mais une instance d'objet de la classe `OutgoingMessage`.

Typiquement, cette classe peut être utilisée dans des fonctions personnalisées de [HTTP request handler](../WebServer/http-request-handler.md#function-configuration) ou dans des fonctions déclarées avec le mot-clé [`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) et conçues pour gérer des requêtes HTTP GET. Ces requêtes sont utilisées, par exemple, pour implémenter des fonctionnalités telles que le téléchargement de fichier, la génération et le téléchargement d'images ainsi que la réception de tout content-type via un navigateur.

Une instance de cette classe est construite sur 4D Server et peut être envoyée au navigateur via le [serveur REST 4D](../REST/gettingStarted.md) uniquement. Cette classe permet d'utiliser d'autres technologies que HTTP (par exemple, mobile).

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R7   | Classe ajoutée |

</details>

### Exemple

Dans cet exemple, une fonction `getFile()` est implémentée dans la [Datastore class](../ORDA/ordaClasses.md#datastore-class) et peut être [appelée](../ORDA/ordaClasses.md#onhttpget-keyword) par une requête REST. Le but est de retourner un fichier **testFile.pdf** en réponse à la requête :

```4d
Class extends DataStoreImplementation

exposed onHTTPGet Function getFile() : 4D.OutgoingMessage
	
	var $result:=4D.OutgoingMessage.new()
	var $file:=File("/RESOURCES/testFile.pdf")
	
	$result.setBody($file.getContent())  // contenu binaire
	$result.setHeader("Content-Type"; "application/pdf")
	return $result
```

### Objet OutgoingMessage

Les objets 4D.OutgoingMessage fournissent les propriétés et fonctions suivantes :

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #OutgoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutgoingMessageClass.body.Summary -->                    |
| [<!-- INCLUDE #OutgoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutgoingMessageClass.headers.Summary -->           |
| [<!-- INCLUDE #OutgoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutgoingMessageClass.setBody().Summary -->       |
| [<!-- INCLUDE #OutgoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutgoingMessageClass.setHeader().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutgoingMessageClass.setStatus().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutgoingMessageClass.status.Summary -->              |

:::note

Un objet 4D.OutgoingMessage est [non partageable](../Concepts/shared.md).

:::

<!-- REF #OutgoingMessageClass.body.Desc -->

## .body

<!-- REF #OutgoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### Description

La propriété `.body` contient <!-- REF #OutgoingMessageClass.body.Summary -->le body du message sortant<!-- END REF -->. Les types de données suivants sont pris en charge dans la propriété `.body` :

- text
- blob
- object
- image

La propriété `.body` est en lecture-écriture.

Vous pouvez également définir la propriété `.body` en utilisant la fonction [`setBody()`](#setbody), auquel cas l'en-tête `content-type` est automatiquement défini.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.headers.Desc -->

## .headers

<!-- REF #OutgoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Description

La propriété `.headers` contient <!-- REF #OutgoingMessageClass.headers.Summary -->les headers courants du message sortant sous forme de paires clé/valeur<!-- END REF -->.

La propriété `.headers` est en lecture seule. Pour définir un header, utilisez la fonction [`setHeader()`](#setheader).

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutgoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Params -->

| Paramètres | Type |    | Description             |
| ---------- | ---- | -- | ----------------------- |
| body       | any  | -> | Body du message sortant |

<!-- END REF -->

#### Description

La fonction `.setBody()` <!-- REF #OutgoingMessageClass.setBody().Summary -->définit le *body* du message sortant<!-- END REF -->.

Les types de données suivants sont pris en charge dans la propriété *body* :

- Text
- Blob
- Object
- Image

Lorsque cette fonction est utilisée, le header content-type est automatiquement défini en fonction du type de *body* :

- Content-Type:text/plain si le body est un texte
- Content-Type:application/octet-stream si le body est un Blob
- Content-Type:application/json si le body est un objet
- Content-Type:image/jpeg, image/gif... si le body est une image

Si *body* n'est pas un type de valeur pris en charge, une erreur est renvoyée.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Desc -->

## .setHeader()

<!-- REF #OutgoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Params -->

| Paramètres | Type |    | Description                      |
| ---------- | ---- | -- | -------------------------------- |
| key        | Text | -> | Propriété de header à définir    |
| value      | Text | -> | Valeur de la propriété de header |

<!-- END REF -->

#### Description

La fonction `.setHeader()` <!-- REF #OutgoingMessageClass.setHeader().Summary -->fixe la clé *key* du header du message sortant avec la *value* fournie<!-- END REF -->. Si les deux paramètres ne sont pas des valeurs texte, une erreur est générée.

Lorsqu'il renvoie une instance d'objet 4D.OutgoingMessage, 4D définit automatiquement certains headers (par exemple `Set-Cookie` avec `WASID4D=...` et `4DSID__ProjectName_=....`).

:::note

Si vous définissez une *value* pour la *key* du header "Content-Type", assurez-vous d'appeler cette fonction après l'appel à [`setBody()`](#setbody), car `setBody()` remplit automatiquement ce header. Pour une liste des valeurs du header "Content-Type", veuillez vous référer à la documentation de [`WEB SEND BLOB`](../commands-legacy/web-send-blob.md).

:::

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Desc -->

## .setStatus()

<!-- REF #OutgoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Params -->

| Paramètres | Type    |    | Description      |
| ---------- | ------- | -- | ---------------- |
| status     | Integer | -> | Statut à définir |

<!-- END REF -->

#### Description

La fonction `.setStatus()` <!-- REF #OutgoingMessageClass.setStatus().Summary -->définit la propriété `status` à la valeur *status* passée<!-- END REF -->.

Si *status* n'est pas un nombre entier, une erreur est générée.

Pour une liste des codes de statut HTTP, veuillez consulter la [liste des codes de statut HTTP](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) sur Wikipedia.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.status.Desc -->

## .status

<!-- REF #OutgoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Description

La propriété `.status` contient <!-- REF #OutgoingMessageClass.status.Summary -->le statut courant du message sortant<!-- END REF -->. Cette propriété peut être définie à l'aide de la fonction [`setStatus()`](setstatus).

<!-- END REF -->
