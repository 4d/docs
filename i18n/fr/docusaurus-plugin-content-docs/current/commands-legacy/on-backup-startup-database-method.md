---
id: on-backup-startup-database-method
title: On Backup Startup database method
slug: /commands/on-backup-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Startup database method.Syntax-->**On Backup Startup database method**  -> $0<!-- END REF-->
<!--REF #_command_.On Backup Startup database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $0 | Integer | &#8592; | 0 = sauvegarde autorisée, valeur autre que 0 = sauvegarde non autorisée |

<!-- END REF-->

#### 

<!--REF #_command_.On Backup Startup database method.Summary-->La **On Backup Startup database method**  est appelée à chaque fois qu’une sauvegarde de la base est sur le point d’avoir lieu (sauvegarde manuelle, sauvegarde automatique périodique ou via la commande [BACKUP](backup.md)).<!-- END REF-->   
Tous les environnements 4D sont concernés : 4D (tous modes), 4D Server ainsi que les applications 4D compilées et fusionnées avec 4D Volume Desktop. 

La **On Backup Startup database method**  permet de contrôler le déclenchement de la sauvegarde. Au sein de la méthode, vous devez retourner dans le paramètre $0 une valeur autorisant ou refusant la sauvegarde :

* si $0 = 0, vous autorisez la sauvegarde.
* si $0 # 0, vous n'autorisez pas la sauvegarde. L’opération est annulée et une erreur est retournée. Vous pouvez récupérer l’erreur à l’aide de la commande [BACKUP INFO](backup-info.md).

Vous pouvez utiliser cette méthode base pour contrôler les conditions d’exécution de la sauvegarde (utilisateur, date de la dernière sauvegarde, etc.).

**Note :** Vous devez impérativement déclarer le paramètre *$0* (entier long) dans la méthode base :

```4d
 var $0 : Integer
```
