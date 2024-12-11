---
id: backup
title: BACKUP
slug: /commands/backup
displayed_sidebar: docs
---

<!--REF #_command_.BACKUP.Syntax-->**BACKUP**<!-- END REF-->
<!--REF #_command_.BACKUP.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.BACKUP.Summary-->La commande **BACKUP** déclenche la sauvegarde de la base de données avec les paramétrages de sauvegarde courants.<!-- END REF--> Aucune boîte de dialogue de confirmation n’est affichée. Une fenêtre de progression apparaît à l’écran.

Les paramétrages de sauvegarde sont définis dans les Propriétés de la base. Ils sont stockés dans le fichier *backup.4DSettings* situé dans le dossier Settings de la base ou dans le dossier Data (voir *Fichiers de configuration et de suivi*).

La commande **BACKUP** appelle la *Méthode base Sur démarrage sauvegarde* au début de son exécution et la *Méthode base Sur arrêt sauvegarde* à la fin de son exécution. 

Attention, du fait de ce mécanisme, la commande ne doit PAS être appelée depuis l'une de ces méthodes base.

**4D Server :** Lorsqu’elle est appelée depuis un poste client, la commande **BACKUP** est considérée comme une procédure stockée, elle est toujours exécutée sur le serveur.

#### Variables et ensembles système 

Si la sauvegarde se déroule correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. 

#### Gestion des erreurs 

En cas d’incident au cours de la sauvegarde, les informations relatives à l'incident sont écrites dans le journal des sauvegardes et l'erreur de plus haut niveau est transmise uniquement à la [On Backup Shutdown database method](on-backup-shutdown-database-method.md). Il est donc particulièrement important d'utiliser cette méthode base afin de pouvoir gérer par programmation les erreurs liées à la sauvegarde.

#### Voir aussi 

[BACKUP INFO](backup-info.md)  
*Méthode base Sur démarrage sauvegarde*  
[RESTORE](restore.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 887 |
| Thread safe | &check; |
| Modifie les variables | OK |


