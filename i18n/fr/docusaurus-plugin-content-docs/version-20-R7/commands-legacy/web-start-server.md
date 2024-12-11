---
id: web-start-server
title: WEB START SERVER
slug: /commands/web-start-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB START SERVER.Syntax-->**WEB START SERVER**<!-- END REF-->
<!--REF #_command_.WEB START SERVER.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB START SERVER.Summary-->La commande **WEB START SERVER** démarre le serveur Web de l'application 4D sur laquelle elle a été exécutée (4D ou 4D Server).<!-- END REF--> La base est alors publiée sur votre réseau Intranet ou sur Internet.

Si le serveur Web a été correctement lancé, la variable système OK prend la valeur 1, sinon — si par exemple le protocole réseau TCP/IP n'est pas correctement configuré — OK prend la valeur 0 (zéro).

#### Variables et ensembles système 

Si le serveur Web est correctement démarré, OK prend la valeur 1, sinon OK prend la valeur 0 (zéro).

#### Voir aussi 

[WEB STOP SERVER](web-stop-server.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 617 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


