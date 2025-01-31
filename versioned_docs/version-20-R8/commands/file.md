---
id: file
title: File
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R4|New `HTTP Client log file` constant|
|17 R5|Added|

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File<!-- END REF -->


<!-- REF #_command_.File.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|path|Text|&#8594; |File path|
|fileConstant|Integer|&#8594;|4D file constant|
|pathType|Integer|&#8594; |`fk posix path` (default) or `fk platform path`|
|*|operator|&#8594; |* to return file of host database|
|Result|4D.File|&#8592;|New file object|
<!-- END REF -->

#### Description

The `File` command <!-- REF #_command_.File.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. The command accepts two syntaxes:

**File ( path { ; pathType } { ; * })**

In the *path* parameter, pass a file path string. You can use a custom string or a [filesystem](../Concepts/paths.md#filesystem-pathnames) (e.g., "/DATA/myfile.txt").

> Only absolute pathnames are supported with the `File` command.

By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. The following constants are available:

|Constant|Value|Comment|
|---|---|---|
|fk platform path|1|Path expressed with a platform-specific syntax (mandatory in case of platform pathname)|
|fk posix path|0|Path expressed with POSIX syntax (default)

**File ( fileConstant { ; * } )**

In the *fileConstant* parameter, pass a 4D built-in or system file, using one of the following constants:

|Constant|Value|Comment|
|---|---|---|
|Backup history file|19|Backup history file (see Configuration and trace files). Stored in the backup destination folder. |
|Backup log file|13|Current backup journal file. Stored in the application Logs folder.|
|Backup settings file|1|Default backup.4DSettings file (xml format), stored in the Settings folder of the project|
|Backup settings file for data|17|backup.4DSettings file (xml format) for the data file, stored in the Settings folder of the data folder|
|Build application log file|14|Current log file in xml format of the application builder. Stored in the Logs folder. |
|Build application settings file|20|Default settings file of the application builder ("buildApp.4DSettings"). Stored in the Settings folder of the project.|
|Compacting log file|6|Log file of the most recent compacting done with the Compact data file command or the Maintenance and security center. Stored in the Logs folder.|
|Current backup settings file|18|backup.4DSettings file currently used by the application. It can be the backup settings file (default) or a custom user backup settings file defined for the data file|
|Debug log file|12|Log file created by the `SET DATABASE PARAMETER(Debug log recording)` command. Stored in the Logs folder. |
|Diagnostic log file|11|Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Stored in the Logs folder. |
|Directory file|16|directory.json file, containing the description of users and groups (if any) for the project application. It can be located either in the user settings folder (default, global to the project), or in the data settings folder (specific to a data file). |
|HTTP Client log file|24|Log file created by the `HTTP SET OPTION(HTTP client log)` command. Stored in the Logs folder. |
|HTTP debug log file|9|Log file created by the `WEB SET OPTION(Web debug log)` command. Stored in the Logs folder. |
|HTTP log file|8|Log file created by the `WEB SET OPTION(Web log recording)` command. Stored in Logs folder.|
|IMAP Log file|23|Log file created by the `SET DATABASE PARAMETER(IMAP Log)` command. Stored in the Logs folder.|  
|Last backup file|2|Last backup file, named `\<applicationName>[bkpNum].4BK`, stored at a custom location.|
|Last journal integration log file|22|Full pathname of the last journal integration log file (stored in the Logs folder of the restored application), if any. This file is created, in auto-repair mode, as soon as a log file integration occurred|
|Repair log file|7|Log file of database repairs made on the database in the Maintenance and Security Center (MSC). Stored in the Logs folder.|
|Request log file|10|Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. If executed on the server, the server log file is returned (stored in the Logs folder on the server). If executed on the client, the client log file is returned (stored in the client local Logs folder). |
|SMTP log file|15|Log file created by the `SET DATABASE PARAMETER(SMTP Log)` command. Stored in the Logs folder. |
|User settings file|3|settings.4DSettings file for all data files, stored in Preferences folder next to structure file if enabled.|
|User settings file for data|4|settings.4DSettings file for current data file, stored in Preferences folder next to the data file.|
|Verification log file|5|Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Stored in the Logs folder. |

If the target *fileConstant* does not exist, a null object is returned. No errors are raised.

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Otherwise, if you omit the `*` parameter, a null object is always returned.  

#### See also 

[Folder](folder.md)  
[Get 4D file](../commands-legacy/get-4d-file.md)  
[Object to path](../commands-legacy/object-to-path.md)  
[Path to object](../commands-legacy/path-to-object.md)  



#### Properties

|  |  |
| --- | --- |
| Command number | 1566 |
| Thread safe | &check; |


