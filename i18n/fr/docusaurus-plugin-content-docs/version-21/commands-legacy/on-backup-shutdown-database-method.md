---
id: on-backup-shutdown-database-method
title: On Backup Shutdown database method
slug: /commands/on-backup-shutdown-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Shutdown database method.Syntax-->On Backup Shutdown ($status)<!-- END REF-->
<!--REF #_command_.On Backup Shutdown database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $status | Integer | &#8592; | 0 = sauvegarde terminée normalement, autre valeur = erreur, interruption utilisateur ou code retourné par Sur démarrage sauvegarde |

<!-- END REF-->

## 

<!--REF #_command_.On Backup Shutdown database method.Summary-->La **On Backup Shutdown database method** est appelée à chaque fois qu’une sauvegarde de la base vient de se terminer.<!-- END REF--> Les causes de l’arrêt de la sauvegarde peuvent être la fin de la copie, l’interruption par l’utilisateur ou une erreur.  
Tous les environnements 4D sont concernés : 4D (tous modes), 4D Server ainsi que les applications 4D compilées et fusionnées avec 4D Volume Desktop. 

La **On Backup Shutdown database method** permet de vérifier que la sauvegarde s’est correctement déroulée. Elle reçoit dans le paramètre *$status* une valeur indiquant le statut de la sauvegarde à l’issue de son exécution :

* Si la sauvegarde s’est terminée normalement, *$status* vaut 0.
* Si la sauvegarde a été interrompue à la suite d'une erreur ou par l'utilisateur, *$status* est différent de 0.  
   * Si la sauvegarde a été stoppée par la *Méthode base Sur démarrage sauvegarde* (*$result* \# 0), *$status* retourne le code effectivement retourné dans le paramètre *$result*. Ce principe vous permet de mettre en place un système de gestion d’erreurs personnalisé.  
   * Si la sauvegarde a été stoppée à la suite d'une erreur, le code de l'erreur est retourné dans *$status*.  
Dans tous les cas, vous pouvez obtenir des informations sur l'erreur à l’aide de la commande [BACKUP INFO](backup-info.md).

**Note** : Vous devez impérativement déclarer le paramètre *$status* (entier long) dans la méthode base :

```4d
 #DECLARE( $status : Integer)
```

Il est important de noter qu'en cas d'erreur durant la sauvegarde (disque plein, support inaccessible...), les informations relatives à l'erreur sont uniquement affichées dans le moniteur de 4D Server ou dans le CSM, et reportées dans le journal des sauvegardes. Aucune boîte de dialogue d'alerte n'est affichée et la variable *error* n'est pas modifiée. Si vous souhaitez pouvoir notifier l'administrateur qu'une erreur s'est produite, en particulier dans le contexte d'une application en mode client/serveur, il est nécessaire d'utiliser la **On Backup Shutdown database method**.
