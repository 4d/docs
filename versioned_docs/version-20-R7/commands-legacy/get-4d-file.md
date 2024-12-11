---
id: get-4d-file
title: Get 4D file
slug: /commands/get-4d-file
displayed_sidebar: docs
---

<!--REF #_command_.Get 4D file.Syntax-->**Get 4D file** ( *file* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Get 4D file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| file | Integer | &#8594;  | File type |
| * | Operator | &#8594;  | Return file path of host database |
| Function result | Text | &#8592; | Pathname to 4D file |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get 4D file.Summary-->The **Get 4D file** command returns the pathname to the 4D environment file specified by the *file* parameter.<!-- END REF--> The path is returned using the system syntax. 

This command allows you to get the actual pathname of specific files, whose name or location can depend on database context. It also helps you to write generic code which is independent from the 4D version or the OS. 

In *file*, pass a value to specify the file for which you want to get the full pathname. You can use one of the following constants, located in the "*4D Environment*" theme:

| Constant                          | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | Integer | 19    | Backup history file (see *Configuration and trace files*). Stored in the backup destination folder.                                                                                                                                                                                                                                                                                                                                                            |
| Backup log file                   | Integer | 13    | Current backup journal file (see *Configuration and trace files*). Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                                                                                                  |
| Backup settings file              | Integer | 18    | Default backup.4DSettings file (xml format), stored in the Settings folder of the database                                                                                                                                                                                                                                                                                                                                                                     |
| Backup settings file for data     | Integer | 17    | backup.4DSettings file (xml format) for the data file, stored in the Settings folder of the data folder                                                                                                                                                                                                                                                                                                                                                        |
| Build application log file        | Integer | 14    | Current log file in xml format of the default application builder configuration file (buildApp.4DSettings). Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                                                         |
| Build application settings file   | Integer | 20    | Default settings file of the application builder ("buildApp.4DSettings"). Stored in the Settings folder of the database.                                                                                                                                                                                                                                                                                                                                       |
| Compacting log file               | Integer | 6     | Log file of the most recent compacting done with the [Compact data file](compact-data-file.md) command or the Maintenance and security center. Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                      |
| Current backup settings file      | Integer | 1     | backup.4DSettings file currently used by the application. It can be the backup settings file (default) or a custom user backup settings file defined for the data file                                                                                                                                                                                                                                                                                         |
| Debug log file                    | Integer | 12    | Log file created by the [SET DATABASE PARAMETER](set-database-parameter.md)(Debug log recording) command. Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                                                           |
| Diagnostic log file               | Integer | 11    | Log file created by the [SET DATABASE PARAMETER](set-database-parameter.md)(Diagnostic log recording) command. Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                                                      |
| Directory file                    | Integer | 16    | directory.json file, containing the description of users and groups (if any) for the project database. It can be located either in the user database settings folder (default, global to the project), or in the data settings folder (specific to a data file).                                                                                                                                                                                               |
| HTTP Client log file              | Integer | 24    | Log file created by the [HTTP SET OPTION](http-set-option.md)(HTTP client log;value) command. Stored in the Logs folder.                                                                                                                                                                                                                                                                                                                                       |
| HTTP debug log file               | Integer | 9     | Log file created by the [WEB SET OPTION](web-set-option.md)(Web debug log) command. Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                                                                                 |
| HTTP log file                     | Integer | 8     | Log file created by the [WEB SET OPTION](web-set-option.md)(Web log recording) command. Stored in Logs folder of the database.                                                                                                                                                                                                                                                                                                                                 |
| IMAP Log file                     | Integer | 23    | Log file created by the [SET DATABASE PARAMETER](set-database-parameter.md)(IMAP Log) command. Stored in the Logs folder of the database                                                                                                                                                                                                                                                                                                                       |
| Last backup file                  | Integer | 2     | Last backup file, named <databaseName>\[bkpNum\].4BK, stored at a custom location.                                                                                                                                                                                                                                                                                                                                                                             |
| Last journal integration log file | Integer | 22    | Full pathname of the last journal integration log file (stored in the Logs folder of the restored application), if any. This file is created, in auto-repair mode, as soon as a log file integration occurred (see ).                                                                                                                                                                                                                                          |
| POP3 Log file                     | Integer | 21    | Log file created by the [SET DATABASE PARAMETER](set-database-parameter.md)(POP3 Log) command. Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                                                                      |
| Repair log file                   | Integer | 7     | Log file of database repairs made on the database in the Maintenance and Security Center (MSC). Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                                                                     |
| Request log file                  | Integer | 10    | Standard client/server request log file (excluding Web requests) created by the [SET DATABASE PARAMETER](set-database-parameter.md)(4D Server log recording) or [SET DATABASE PARAMETER](set-database-parameter.md)(Client log recording) commands. If executed on the server, the server log file is returned (stored in the Logs folder on the server). If executed on the client, the client log file is returned (stored in the client local Logs folder). |
| SMTP log file                     | Integer | 15    | Log file created by the [SET DATABASE PARAMETER](set-database-parameter.md)(SMTP Log) command. Stored in the Logs folder of the database.                                                                                                                                                                                                                                                                                                                      |
| User settings file                | Integer | 3     | settings.4DSettings file for all data files, stored in Settings folder next to database structure file if enabled.                                                                                                                                                                                                                                                                                                                                             |
| User settings file for data       | Integer | 4     | settings.4DSettings file for current data file, stored in Settings folder next to the data file.                                                                                                                                                                                                                                                                                                                                                               |
| Verification log file             | Integer | 5     | Log files created by the [VERIFY CURRENT DATA FILE](verify-current-data-file.md) and [VERIFY DATA FILE](verify-data-file.md) commands or the Maintenance and Security Center (MSC). Stored in the Logs folder of the database.                                                                                                                                                                                                                                 |

If the target *file* does not exist, an empty path is returned. No errors are raised.

When the command is called from a component, pass the optional *\** parameter to get the *file* path of the host database. In this case, if you omit the *\** parameter, an empty string is always returned. 

Regarding User settings file for data and User settings file, a path is returned only if the **Enable User Settings in External File** security option has been checked in the "Database Settings" dialog box (see ). 

#### Example 

You want to get the path of the last backup file:

```4d
 var $path : Text
 $path:=Get 4D file(Last backup file)
  // $path = "C:\Backups\Countries\Countries[0025].4BK" for example
```

#### See also 

[File](../commands/file.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1418 |
| Thread safe | &check; |
| Forbidden on the server ||


