---
id: notify-resources-folder-modification
title: NOTIFY RESOURCES FOLDER MODIFICATION
slug: /commands/notify-resources-folder-modification
displayed_sidebar: docs
---

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Syntax-->**NOTIFY RESOURCES FOLDER MODIFICATION**<!-- END REF-->
<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Summary-->La commande **NOTIFY RESOURCES FOLDER MODIFICATION** permet de "forcer" l’envoi par 4D Server d’une notification indiquant à tous les postes 4D connectés que le contenu du dossier **Resources** de la base a été modifié, afin de leur permettre de synchroniser leur dossier **Resources** local.<!-- END REF--> Cette commande permet en particulier de gérer la synchronisation des dossiers **Resources** téléchargés sur les postes distants lorsque le dossier **Resources** de la base est modifié via une procédure stockée sur le serveur.  
Pour plus d’informations sur la gestion du dossier **Resources** en mode distant, reportez-vous au *Guide de référence de 4D Server*.

Seule l’information de modification est envoyée par cette commande. Les postes distants réagiront en fonction du paramétrage courant. Les options sont :

* pas de synchronisation du dossier **Resources** local en cours de session,
* synchronisation automatique du dossier **Resources** local en cours de session,
* affichage d’une alerte afin que l'utilisateur effectue une synchronisation s'il le souhaite.

Le paramétrage courant peut être défini soit :

* au niveau global de la base via le paramètre des Propriétés de la base. Dans ce cas, il s'applique à tous les postes distants ;
* localement, à l'aide de la commande [SET DATABASE PARAMETER](set-database-parameter.md) exécutée sur le poste distant (sélecteur Auto synchro resources folder). Dans ce cas, il "surcharge" celui de la base et s'applique uniquement au poste distant pour la session.

#### Voir aussi 

[Get 4D folder](get-4d-folder.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1052 |
| Thread safe | &check; |
| Interdite sur le serveur ||


