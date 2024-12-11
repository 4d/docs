---
id: start-sql-server
title: START SQL SERVER
slug: /commands/start-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.START SQL SERVER.Syntax-->**START SQL SERVER**<!-- END REF-->
<!--REF #_command_.START SQL SERVER.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.START SQL SERVER.Summary-->La commande **START SQL SERVER** démarre le serveur SQL intégré de l’application 4D sur laquelle elle a été exécutée.<!-- END REF--> Une fois lancé, le serveur SQL peut répondre aux requêtes SQL externes.

**Note :** Cette commande n’influe pas sur le fonctionnement du moteur SQL interne de 4D. Le moteur SQL est toujours disponible pour les requêtes internes.

#### Variables et ensembles système 

Si le serveur SQL a été correctement lancé, la variable système OK prend la valeur 1, sinon elle prend la valeur 0.

#### Voir aussi 

[STOP SQL SERVER](stop-sql-server.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 962 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


