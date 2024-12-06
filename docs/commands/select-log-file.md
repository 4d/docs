---
id: select-log-file
title: SELECT LOG FILE
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *logFile* )<br/>**SELECT LOG FILE** ( * )<!-- END REF-->
<!--REF #_command_.SELECT LOG FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| logFile | Text | &#8594;  | Name of the log file  |
| \* |  | &#8594;  | Close the current log file |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SELECT LOG FILE.Summary-->The **SELECT LOG FILE** command creates, or closes the log file according to the value you pass in parameter<!-- END REF-->.

In *logFile*, pass the name or the full pathname of the log file to be created. If you only pass a name, the file will be created in the "Logs" folder of the database located next to the database structure file.

If you pass an empty string in *logFile*, **SELECT LOG FILE** presents an Save File dialog box, allowing the user to choose the name and location of the log file to be created. If the file is created correctly, the OK variable is set to 1\. Otherwise, if the user clicks Cancel or if the log file could not be created, OK is set to 0.

**Note:** The new log file is not generated immediately after execution of the command, but after the next backup (the parameter is kept in the data file and will be taken into account even if the database is closed in the meantime) or a call to the [New log file](new-log-file.md) command. You can call the [BACKUP](../commands-legacy/backup.md) command to trigger the creation of the log file.

If you pass *\** in *logFile*, **SELECT LOG FILE** closes the current log file for the database. The OK variable is set to 1 when the log file is closed.


#### System variables and sets 

OK is set to 1 if the log file is correctly created, or closed.


#### See also 

[New log file](new-log-file.md)  