---
id: backup
title: BACKUP
slug: /commands/backup
displayed_sidebar: docs
---

<!--REF #_command_.BACKUP.Syntax-->**BACKUP**<!-- END REF-->
<!--REF #_command_.BACKUP.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.BACKUP.Summary-->The BACKUP command starts the backup of the database using the current backup settings.<!-- END REF--> No confirmation dialog is displayed; however, a progress bar appears on screen.

Backup settings are set in the Database Settings. They are stored in the *backup.4DSettings* file in the database Settings folder or in the data folder (see *Configuration and trace files*). 

The BACKUP command calls the *On Backup Startup Database Method* at the beginning of its execution and the *On Backup Shutdown Database Method* at the end of its execution. 

Because of this mechanism, the command should not be called from one of these database methods.

**4D Server:** When called from a client machine, BACKUP is considered as a stored procedure; it is still executed on the server.

#### System variables and sets 

If the backup is performed correctly, the system variable OK is set to 1; otherwise, it is set to 0\. 

#### Error management 

If an incident occurs during backup, information about the incident is written in the backup log and the top-level error is sent only to the [On Backup Shutdown database method](on-backup-shutdown-database-method.md). It is therefore particularly important to use this database method in order to be able to manage back-up related errors using programming.

#### See also 

[BACKUP INFO](backup-info.md)  
*On Backup Startup Database Method*  
[RESTORE](restore.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 887 |
| Thread safe | &cross; |
| Modifies variables | OK |


