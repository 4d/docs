---
id: check-log-file
title: CHECK LOG FILE
displayed_sidebar: docs
---

<!--REF #_command_.CHECK LOG FILE.Syntax-->**CHECK LOG FILE**<!-- END REF-->
<!--REF #_command_.CHECK LOG FILE.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 



The **CHECK LOG FILE** command displays the dialog box for viewing the current log file of the database (which can also be accessed via the Maintenance Security Center window):

![](../assets/en/commands/pict4835044.en.png)

This dialog box includes the **Rollback** button that can be used to cancel operations carried out on the data of the database. For more information about this dialog box, please refer to the Design Reference manual of 4D.

**Note:** Since the rollback function is relatively powerful, it is recommended that access to the CHECK LOG FILE command be restricted to the database administrators.

This command can only be used in the context of single-user applications. More particularly, it allows access to the rollback function from 4D Volume Desktop applications (applications with no Design mode). If it is called within a client/server application, the command has no effect and the error 1421 is returned.

#### Error Handling 

* If this command is executed in a database operating without a log file, it does nothing and the error 1403 is returned.
* If this command is executed in a client/server database, it does nothing and the error 1421 is returned.  
You can intercept these errors using an error-handling method installed with the [ON ERR CALL](on-err-call.md) command.

#### See also 

[Backup Manager Errors (1401 -> 1421)](../../4D/20-R6/Backup-Manager-Errors-1401-1421.300-6958287.en.html)  
[RESTORE](restore.md)  