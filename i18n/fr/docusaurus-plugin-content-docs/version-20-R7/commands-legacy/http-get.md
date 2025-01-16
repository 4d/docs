---
id: http-get
title: HTTP Get
slug: /commands/http-get
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get.Syntax-->**HTTP Get** ( *url* ; *réponse* {; *nomsEnTêtes* ; *valeursEnTêtes*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Get.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| url | Text | &#8594;  | URL auquel envoyer la requête |
| réponse | Text, Blob, Picture, Object | &#8592; | Résultat de la requête |
| nomsEnTêtes | Text array | &#8594;  | Noms des en-têtes de la requête |
| &#8592; | Noms d’en-têtes retournés |
| valeursEnTêtes | Text array | &#8594;  | Valeurs d’en-têtes de la requête |
| &#8592; | Valeurs d’en-têtes retournées |
| * | Opérateur | &#8594;  | Si passé, la connexion est maintenue (keep-alive)<br/>Si omis, la connexion est automatiquement refermée |
| Résultat | Integer | &#8592; | Code de statut HTTP |

<!-- END REF-->

:::info Compatibilité

Cette commande est maintenue pour des raisons de compatibilité uniquement. Il est maintenant recommandé d'utiliser la classe [`4D.HTTPRequest`](../API/HTTPRequestClass.md).

:::

#### Description 

<!--REF #_command_.HTTP Get.Summary-->La commande **HTTP Get** permet d’envoyer directement une requête HTTP GET vers un URL spécifique et de traiter la réponse du serveur HTTP.<!-- END REF-->

Passez dans le paramètre *url* l’URL auquel adresser la requête. La syntaxe à utiliser est :

```RAW
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

Par exemple, les chaînes suivantes peuvent être passées :  

```RAW
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name="jones"    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

*(\*)* Lors des requêtes https, l’autorité du certificat n’est pas vérifiée.  
*(\*\*)* Pour plus d'informations sur les adresses IPv6 dans les urls, veuillez vous référer à la [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt).

Après exécution de la commande, le paramètre *réponse* récupère le résultat de la requête retourné par le serveur. Ce résultat correspond à la partie corps (*body*) de la réponse, sans les en-têtes (*headers*). Vous pouvez passer des variables de différents types dans *réponse* :

* Texte : lorsque le résultat est attendu sous forme de texte (cf. note)
* BLOB : lorsque le résultat est attendu sous forme binaire
* Image : lorsque le résultat est attendu sous forme d’image
* Objet : lorsque le résultat est attendu sous forme d'objet *C\_OBJECT*

**Note :** Lorsqu'une variable texte est passée dans *réponse*, 4D tente de décoder les données retournées par le serveur. Le programme essaie d'abord de récupérer le charset depuis l'en-tête *content-type*, ou à défaut via la BOM de la page ; en dernier lieu 4D recherche tout attribut *http-equiv charset* (dans le contenu html) ou *encoding* (pour le xml). Si aucun charset ne peut être détecté, 4D décode la réponse en ANSI. Si la conversion échoue, le texte résultant est vide. Si vous n'êtes pas sûr que le serveur retourne une information de charset ou une BOM, mais si vous connaissez l'encodage, il est préférable de passer un BLOB dans *réponse* et d'utiliser la commande [Convert to text](convert-to-text.md).

Si vous passez un BLOB, il contiendra le texte, l’image ou tout type de contenu (.wav, .zip...) retourné par le serveur. Vous devrez alors gérer la récupération de ce contenu (les en-têtes ne sont pas inclus dans le BLOB).   
Si vous passez un objet de type *C\_OBJECT* et si la requête retourne un résultat ayant le content-type text, 4D tentera d’analyser le contenu en tant que JSON et retournera le résultat analysé sous forme d'objet, sinon un objet *4D.Blob* sera retourné.

Vous pouvez passer dans les paramètres *nomsEnTêtes* et *valeursEnTêtes* des tableaux contenant respectivement les noms et les valeurs des en-têtes de la requête.

A l’issue de l’exécution de la méthode, ces tableaux contiendront les noms et valeurs d’en-têtes retournés par le serveur HTTP. Ce principe permet notamment de gérer des cookies. 

Le paramètre *\** permet d’activer le mécanisme de *keep-alive* pour la connexion au serveur. Par défaut, si ce paramètre est omis, le *keep-alive* n’est pas activé. 

La commande retourne le code de statut HTTP standard (200=OK...) tel que renvoyé par le serveur. La liste des codes de statut HTTP est fournie dans la *RFC 2616*. Si la connexion au serveur est impossible pour une raison liée au réseau (*DNS Failed*, *Server not reachable*...) la commande retourne 0 et une erreur est générée. Vous pouvez intercepter les erreurs à l’aide d’une méthode d’appel sur erreur installée par la commande [ON ERR CALL](on-err-call.md).

#### Exemple 1 

Récupération du logo 4D sur le site Web de 4D :

```4d
 var URLPic_t : Text
 URLPic_t:="http://www.4d.com/sites/all/themes/dimention/images/home/logo4D.jpg"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 var Pic_i : Picture
 $httpResponse:=HTTP Get(URLPic_t;Pic_i;HeaderNames_at;HeaderValues_at)
```

#### Exemple 2 

Récupération d’une RFC :

```4d
 var URLText_t : Text
 var Text_t : Text
 URLText_t:="http://tools.ietf.org/rfc/rfc1.txt"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 $httpResponse:=HTTP Get(URLText_t;Text_t;HeaderNames_at;HeaderValues_at)
```

#### Exemple 3 

Récupération d’une vidéo :

```4d
 var vBlob : Blob
 $httpResponse:=HTTP Get("http://www.example.com/video.flv";vBlob)
 BLOB TO DOCUMENT("video.flv";vBlob)
```

#### Voir aussi 

[HTTP Request](http-request.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1157 |
| Thread safe | &check; |
| Modifie les variables | error |


