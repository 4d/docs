---
id: select-log-file
title: SELECT LOG FILE
slug: /commands/select-log-file
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *logFile* )<!-- END REF-->
<!--REF #_command_.SELECT LOG FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| logFile | *, Text | &#8594;  | Name of the log file or "*" for closing the current log file |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SELECT LOG FILE.Summary-->The **SELECT LOG FILE** command creates, or closes the log file according to the value you pass in *logFile*.<!-- END REF-->

In *logFile*, pass the name or the full pathname of the log file to be created. If you only pass a name, the file will be created in the "Logs" folder of the database located next to the database structure file.

If you pass an empty string in *logFile*, **SELECT LOG FILE** presents an Save File dialog box, allowing the user to choose the name and location of the log file to be created. If the file is created correctly, the OK variable is set to 1\. Otherwise, if the user clicks Cancel or if the log file could not be created, OK is set to 0.

**Note:** The new log file is not generated immediately after execution of the command, but rather after the next backup (the parameter is kept in the data file and will be taken into account even if the database is closed in the meantime). You can call the [BACKUP](backup.md) command to trigger the creation of the log file.

If you pass *"\*"* in *logFile*, **SELECT LOG FILE** closes the current log file for the database. The OK variable is set to 1 when the log file is closed.

If you use **SELECT LOG FILE** to create a log file when a full backup has not yet been performed and the data file already contains records, 4D then generates an error *\-4447,* which you can intercept with an [ON ERR CALL](on-err-call.md) method.

#### System variables and sets 

OK is set to 1 if the log file is correctly created, or closed.

#### Error management 

An error -4447 is generated if the operation cannot be performed because the database needs to be backed up. You can intercept the error with an [ON ERR CALL](on-err-call.md) method. 

#### See also 

[ON ERR CALL](on-err-call.md)  