---
id: ldap-logout
title: LDAP LOGOUT
slug: /commands/ldap-logout
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGOUT.Syntax-->**LDAP LOGOUT**<!-- END REF-->
<!--REF #_command_.LDAP LOGOUT.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.LDAP LOGOUT.Summary-->La commande **LDAP LOGOUT** referme la connexion LDAP active dans le process courant (le cas échéant).<!-- END REF--> S'il n'y a pas de connexion avec un server LDAP, l'erreur 1003 indiquant que vous n'êtes pas connecté est retournée. 

#### Voir aussi 

[LDAP LOGIN](ldap-login.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1327 |
| Thread safe | &check; |
| Interdite sur le serveur ||


