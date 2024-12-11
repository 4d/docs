---
id: web-service-authenticate
title: WEB SERVICE AUTHENTICATE
slug: /commands/web-service-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Syntax-->**WEB SERVICE AUTHENTICATE** ( *nom* ; *motDePasse* {; *méthodeAuth*} {; *} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE AUTHENTICATE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nom | Text | &#8594;  | Nom de l’utilisateur |
| motDePasse | Text | &#8594;  | Mot de passe de l’utilisateur |
| méthodeAuth | Integer | &#8594;  | Méthode d’authentification : 0 ou omis=non définie, 1=BASIC, 2=DIGEST |
| * | Opérateur | &#8594;  | Si passé : authentification par proxy |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Summary-->La commande **WEB SERVICE AUTHENTICATE** vous permet d’utiliser des Web Services nécessitant l’authentification de l’application cliente.<!-- END REF--> Les méthodes BASIC et DIGEST sont prises en charge ainsi que la présence d'un proxy.

**Note :** Pour plus d’informations sur les méthodes d’authentification BASIC et DIGEST, reportez-vous à la section *Sécurité des connexions*.

Passez dans les paramètres *nom* et *motDePasse* les informations d’identification requises (nom d’utilisateur et mot de passe). Ces informations seront encodées et ajoutées à la requête HTTP envoyée au Web Service via la commande [WEB SERVICE CALL](web-service-call.md). Il est donc nécessaire d’appeler la commande **WEB SERVICE AUTHENTICATE** avant la commande [WEB SERVICE CALL](web-service-call.md). 

Le paramètre facultatif *méthodeAuth* permet d’indiquer la méthode d’authentification à utiliser pour le prochain appel de la commande [WEB SERVICE CALL](web-service-call.md). Vous pouvez passer l’une des valeurs suivantes :

* 2 = utiliser la méthode d’authentification DIGEST
* 1 = utiliser la méthode d’authentification BASIC
* 0 (ou paramètre omis) = utiliser la méthode appropriée. Dans ce cas, 4D envoie une requête supplémentaire afin de négocier la méthode d'authentification.

Si vous passez le paramètre *\**, vous indiquez que les informations d’authentification s’adressent à un proxy HTTP. Ce paramétrage doit être mis en oeuvre lorsqu’il existe un proxy nécessitant une authentification entre le client du Web Service et le Web Service lui-même. Si le Web Service est lui-même authentifié, une double authentification est requise (cf. exemple). 

Par défaut, les informations d’authentification sont réinitialisées après chaque requête. Vous devez donc utiliser la commande [WEB SERVICE AUTHENTICATE](web-service-authenticate.md) avant chaque [WEB SERVICE CALL](web-service-call.md). Il est toutefois possible de conserver temporairement ces informations à l'aide d'une option de la commande [WEB SERVICE SET OPTION](web-service-set-option.md). Dans ce cas, il n'est pas nécessaire d'exécuter la commande **WEB SERVICE AUTHENTICATE** avant chaque [WEB SERVICE CALL](web-service-call.md).

En cas d’échec de l’authentification, le serveur SOAP retourne une erreur que vous pouvez identifier à l’aide de la commande [WEB SERVICE Get info](web-service-get-info.md).

#### Exemple 

Authentification auprès d’un Web Service situé derrière un proxy :

```4d
  //Authentification au Web Service en mode DIGEST
 WEB SERVICE AUTHENTICATE("SoapUser";"123";2)
  //Authentification au proxy en mode par défaut
 WEB SERVICE AUTHENTICATE("ProxyUser";"456";*)
 WEB SERVICE CALL(...)
```

#### Voir aussi 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE Get info](web-service-get-info.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 786 |
| Thread safe | &check; |
| Interdite sur le serveur ||


