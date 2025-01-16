---
id: log-file
title: Log File
slug: /commands/log-file
displayed_sidebar: docs
---

<!--REF #_command_.Log File.Syntax-->**Log File**  : Text<!-- END REF-->
<!--REF #_command_.Log File.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Long name of the database log file |

<!-- END REF-->

#### Description 

<!--REF #_command_.Log File.Summary-->The Log File command returns the long name (i.e. the complete pathname of the file, including its name) of the current log file of the open database.<!-- END REF--> 

If the database is operating without a log file, the command returns an empty string and the system variable OK is set to 0\. 

If the database operates with a log file, the system variable OK is set to 1\. The pathname returned by the command is expressed with the syntax of the current platform.

**WARNING:** If you execute this command from a 4D Client machine, only the log file name is returned, not the long name

#### System variables and sets 

* If the database is operating without a log file, the system variable OK is set to 0; otherwise, it is set to 1.
* If for some reason the log file becomes unavailable during a working session, error 1274 is generated and 4D Server does not allow users to write data anymore. When the log file is available again, it is necessary to do a backup.

#### See also 

[SELECT LOG FILE](select-log-file.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 928 |
| Thread safe | &check; |
| Modifies variables | OK |


