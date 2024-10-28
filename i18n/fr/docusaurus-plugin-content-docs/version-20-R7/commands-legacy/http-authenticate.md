---
id: http-authenticate
title: HTTP AUTHENTICATE
slug: /commands/http-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.HTTP AUTHENTICATE.Syntax-->**HTTP AUTHENTICATE** ( *nom* ; *motDePasse* {; *méthodeAuth*} {; *} )<!-- END REF-->
<!--REF #_command_.HTTP AUTHENTICATE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nom | Text | &#8594;  | Nom de l’utilisateur |
| motDePasse | Text | &#8594;  | Mot de passe de l’utilisateur |
| méthodeAuth | Integer | &#8594;  | Méthode d’authentification : 0 ou omis=non définie, 1=BASIC, 2=DIGEST |
| * | Opérateur | &#8594;  | Si passé : authentification par proxy |

<!-- END REF-->

:::info Compatibilité

Cette commande est maintenue pour des raisons de compatibilité uniquement. Il est maintenant recommandé d'utiliser la classe [`4D.HTTPRequest`](../API/HTTPRequestClass.md).

:::

#### Description 

<!--REF #_command_.HTTP AUTHENTICATE.Summary-->La commande **HTTP AUTHENTICATE** vous permet d’effectuer des requêtes HTTP vers des serveurs nécessitant l’authentification de l’application cliente.<!-- END REF--> Les méthodes BASIC et DIGEST sont prises en charge ainsi que la présence d’un proxy.

Passez dans les paramètres *nom* et *motDePasse* les informations d’identification requises (nom d’utilisateur et mot de passe). Ces informations seront encodées et ajoutées à la prochaine requête HTTP envoyée via la commande [HTTP Request](http-request.md) ou [HTTP Get](http-get.md). Il est donc nécessaire d’appeler la commande **HTTP AUTHENTICATE** avant chaque requête HTTP.

Le paramètre facultatif *méthodeAuth* permet d’indiquer la méthode d’authentification à utiliser. Vous pouvez passer l’une des constantes suivantes, placées dans le thème *Client HTTP* :

| Constante   | Type        | Valeur | Comment                                       |
| ----------- | ----------- | ------ | --------------------------------------------- |
| HTTP basic  | Entier long | 1      | Utiliser la méthode d’authentification BASIC  |
| HTTP digest | Entier long | 2      | Utiliser la méthode d’authentification DIGEST |

Si vous omettez le paramètre *méthodeAuth* (ou passez 0), vous laissez le programme utiliser la méthode appropriée. Dans ce cas, 4D envoie une requête supplémentaire afin de négocier la méthode d’authentification.

Si vous passez le paramètre *\**, vous indiquez que les informations d’authentification s’adressent à un proxy HTTP. Ce paramétrage doit être mis en oeuvre lorsqu’il existe un proxy nécessitant une authentification entre le client et le serveur HTTP. Si le serveur est lui-même authentifié, une double authentification est requise.

Par défaut, les informations d’authentification sont conservées et réutilisées dans le process courant. Vous pouvez toutefois les effacer après chaque requête à l’aide d'une option de la commande [HTTP SET OPTION](http-set-option.md). Dans ce cas, il sera nécessaire d’exécuter la commande **HTTP AUTHENTICATE** avant tout appel à [HTTP Request](http-request.md) ou [HTTP Get](http-get.md).

#### Exemple 

Exemples de requêtes avec authentification :

```4d
  //Authentification sur un serveur HTTP en mode DIGEST
 HTTP AUTHENTICATE("httpUser";"123";2)
  //Authentification sur un proxy en mode par défaut
 HTTP AUTHENTICATE("ProxyUser";"456";*)
 $httpStatus:=HTTP Get(...)
```

#### Voir aussi 

[HTTP SET OPTION](http-set-option.md)  