---
id: on-backup-startup-database-method
title: On Backup Startup database method
slug: /commands/on-backup-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Startup database method.Syntax-->**On Backup Startup database method**  -> $0<!-- END REF-->
<!--REF #_command_.On Backup Startup database method.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| $0 | Integer | &#8592; | 0 = backup can be launched; value other than 0 = backup not authorized |

<!-- END REF-->

#### 

<!--REF #_command_.On Backup Startup database method.Summary-->The **On Backup Startup database method** is called every time a database backup is about to start (manual backup, scheduled automatic backup, or using the [BACKUP](backup.md) command).<!-- END REF-->   
This concerns all 4D environments: 4D (all modes), 4D Server and databases merged with 4D Volume Desktop.

The **On Backup Startup database method**  allows verifying that the backup started. In this method, you should return a value that authorizes or refuses the backup in the $0 parameter:

* If $0 = 0, the backup can be launched.
* If $0 # 0, the backup is not authorized. The operation is cancelled and an error is returned. You can get the error using the [BACKUP INFO](backup-info.md) command.

You can use this database method to verify backup execution conditions (user, date of the last backup, etc.).

**Note:** You must declare the *$0* parameter (longint) in the database method:

```4d
 var $0 : Integer.
```
