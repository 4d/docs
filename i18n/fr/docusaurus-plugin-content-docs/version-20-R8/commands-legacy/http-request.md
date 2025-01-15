---
id: http-request
title: HTTP Request
slug: /commands/http-request
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Request.Syntax-->**HTTP Request** ( *méthodeHTTP* ; *url* ; *contenu* ; *réponse* {; *nomsEnTêtes* ; *valeursEnTêtes*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Request.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| méthodeHTTP | Text | &#8594;  | Méthode HTTP pour la requête |
| url | Text | &#8594;  | URL auquel envoyer la requête |
| contenu | Text, Blob, Picture, Object | &#8594;  | Contenu du corps (body) de la requête |
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

<!--REF #_command_.HTTP Request.Summary-->La commande **HTTP Request** permet d’envoyer tout type de requête HTTP vers un URL spécifique et de traiter la réponse du serveur HTTP.<!-- END REF-->

Passez dans le paramètre *méthodeHTTP* la méthode HTTP de la requête. Vous pouvez utiliser une des constantes suivantes, placées dans le thème *Client HTTP* :

| Constante           | Type   | Valeur  | Comment                                                                     |
| ------------------- | ------ | ------- | --------------------------------------------------------------------------- |
| HTTP DELETE method  | Chaîne | DELETE  | Voir la *RFC 2616*                                                          |
| HTTP GET method     | Chaîne | GET     | Voir la *RFC 2616*. Equivaut à utiliser la commande [HTTP Get](http-get.md) |
| HTTP HEAD method    | Chaîne | HEAD    | Voir la *RFC 2616*                                                          |
| HTTP OPTIONS method | Chaîne | OPTIONS | Voir la *RFC 2616*                                                          |
| HTTP POST method    | Chaîne | POST    | Voir la *RFC 2616*                                                          |
| HTTP PUT method     | Chaîne | PUT     | Voir la *RFC 2616*                                                          |
| HTTP TRACE method   | Chaîne | TRACE   | Voir la *RFC 2616*                                                          |

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

Passez dans le paramètre *contenu* le corps (*body*) de la requête. Les données à passer dans ce paramètre dépendent de la méthode HTTP de la requête.   
Vous pouvez envoyer des données de type texte, BLOB, image ou objet. Lorsque le *content-type* n’est pas spécifié, les types suivants sont utilisés :

* pour les textes : text/plain - UTF8
* pour les BLOB : application/octet-stream
* pour les images : type mime connu (*best for Web*)
* pour les objets : application/json

Après exécution de la commande, le paramètre *réponse* récupère le résultat de la requête retourné par le serveur. Ce résultat correspond à la partie "corps" (*body*) de la réponse, sans les "en-têtes" (*headers*). Vous pouvez passer des variables de différents types dans *réponse* :

* Texte : lorsque le résultat est attendu sous forme de texte (cf. note ci-dessous).
* BLOB : lorsque le résultat est attendu sous forme binaire.
* Image : lorsque le résultat est attendu sous forme d’image.
* Objets : lorsque le résultat est attendu sous forme d'objet.

**Note :** Lorsqu'une variable texte est passée dans *réponse*, 4D tente de décoder les données retournées par le serveur. Le programme essaie d'abord de récupérer le charset depuis l'en-tête *content-type*, ou à défaut via la BOM de la page ; en dernier lieu 4D recherche tout attribut *http-equiv charset* (dans le contenu html) ou *encoding* (pour le xml). Si aucun charset ne peut être détecté, 4D décode la réponse en ANSI. Si la conversion échoue, le texte résultant est vide. Si vous n'êtes pas sûr que le serveur retourne une information de charset ou une BOM, mais si vous connaissez l'encodage, il est préférable de passer un BLOB dans *réponse* et d'utiliser la commande [Convert to text](convert-to-text.md).

Si vous passez une variable de type objet dans le paramètre *réponse* et si la requête retourne un résultat ayant le content-type texte, 4D tentera d’analyser le contenu en tant que JSON et retournera le résultat analysé sous forme d'objet. Sinon, un objet *4D.Blob* sera retourné.

Si le résultat retourné par le serveur ne correspond pas au type de la variable *réponse*, elle est laissée vide. 

Vous pouvez passer dans les paramètres *nomsEnTêtes* et *valeursEnTêtes* des tableaux contenant respectivement les noms et les valeurs des en-têtes de la requête.   
A l’issue de l’exécution de la méthode, ces tableaux contiendront les noms et valeurs des en-têtes retournés par le serveur HTTP. Ce principe permet notamment de gérer des cookies. 

Le paramètre *\** permet d’activer le mécanisme de *keep-alive* pour la connexion au serveur. Par défaut, si ce paramètre est omis, le *keep-alive* n’est pas activé. 

La commande retourne le code de statut HTTP standard (200=OK...) tel que renvoyé par le serveur. La liste des codes de statut HTTP est fournie dans la *RFC 2616*.   
Si la connexion au serveur est impossible pour une raison liée au réseau (*DNS Failed*, *Server not reachable*...) la commande retourne 0 et une erreur est générée. Vous pouvez intercepter les erreurs à l’aide d’une méthode installée par la commande [ON ERR CALL](on-err-call.md).

#### Exemple 1 

Demande de suppression d’un enregistrement dans une base distante :

```4d
 var $response : Text
 $body_t:="{record_id:25}"
 $httpStatus_l:=HTTP Request(HTTP DELETE method;"database.example.com";$body_t;$response)
```

**Note :** Il vous appartient de traiter la demande de manière appropriée au niveau du serveur distant, la commande **HTTP Request** gère uniquement la requête et le résultat retourné.

#### Exemple 2 

Demande d'ajout d’un enregistrement dans une base distante :

```4d
 var $response : Text
 $body_t:="{fName:'john',fName:'Doe'}"
 $httpStatus_l:=HTTP Request(HTTP PUT method;"database.example.com";$body_t;$response)
```

**Note :** Il vous appartient de traiter la demande de manière appropriée au niveau du serveur distant, la commande **HTTP Request** gère uniquement la requête et le résultat retourné.

#### Exemple 3 

Demande d’ajout d’enregistrement en JSON dans une base distante :

```4d
 var $content : Object
 OB SET($content;"nom";"Doe";"prénom";"John")
 $result:=HTTP Request(HTTP PUT method;"database.example.com";$content;$response)
```

#### Voir aussi 

[HTTP Get](http-get.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1158 |
| Thread safe | &check; |


