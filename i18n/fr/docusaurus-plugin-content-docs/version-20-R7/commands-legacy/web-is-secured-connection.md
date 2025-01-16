---
id: web-is-secured-connection
title: WEB Is secured connection
slug: /commands/web-is-secured-connection
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is secured connection.Syntax-->**WEB Is secured connection**  : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is secured connection.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai = la connexion Web est sécurisée, Faux = la connexion Web n’est pas sécurisée |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Is secured connection.Summary-->La commande **WEB Is secured connection** retourne un booléen indiquant si la connexion au serveur Web 4D s’effectue en mode sécurisé via TLS/SSL (la requête débute par “https:” au lieu de “http:”).<!-- END REF--> 

* Si la connexion est effectuée en TLS ou SSL, la fonction retourne Vrai.
* Si la connexion est effectuée en mode classique (non sécurisé), la fonction retourne Faux.

Cette commande permet par exemple, le cas échéant, de refuser les tentatives de connexion en mode non sécurisé. Pour plus d’informations sur ce point, reportez-vous à la section [WEB SERVICE SET PARAMETER](web-service-set-parameter.md). 

#### Voir aussi 

[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 698 |
| Thread safe | &check; |


