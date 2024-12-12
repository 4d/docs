---
id: restore
title: RESTORE
slug: /commands/restore
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE.Syntax-->**RESTORE** {( *archivePath* {; *destFolderPath*} )}<!-- END REF-->
<!--REF #_command_.RESTORE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| archivePath | Text | &#8594;  | Pathname of archive to restore |
| destFolderPath | Text | &#8594;  | Pathname of destination folder |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.RESTORE.Summary-->The RESTORE command can be used to restore the file(s) included in a 4D archive.<!-- END REF--> This command is useful as part of custom interfaces for managing backups. 

If you do not pass the *archivePath* parameter, the command displays an open file dialog box so that the user can select the archive to restore.

The *archivePath* parameter lets you indicate the pathname of the archive file to be restored. This pathname must be expressed with the system syntax. You can pass an absolute pathname or a pathname relative to the database structure file.   
In this case (if the *destFolderPath* parameter is omitted), the standard restore dialog box appears with the archive pre-selected, so that the user can designate the destination folder. When the procedure is completed, a warning dialog box appears and the folder containing the restored elements is displayed. 

You can also pass the *destFolderPath* parameter with the pathname of the destination folder of the restored elements. This pathname must be expressed with the system syntax. You can pass an absolute pathname or a pathname relative to the database structure file. If you pass this parameter, a preconfigured restore dialog box appears so that only the user can launch or cancel the restore procedure. When the procedure is completed, the window is simply reclosed without displaying any additional information. 

The RESTORE command modifies the value of the *OK* and *Document* variables: if the restore was carried out correctly, *OK* is set to 1 and *Document* contains the path of the restoration folder. If the user cancels the restoration dialog box, interrupts the restoration or if an error occurs, *OK* is set to 0 and *Document* contains an empty string. You can intercept the error using a method installed via the [ON ERR CALL](on-err-call.md) command.

**Note:** In a 4D application that is compiled and merged with 4D Volume Desktop, the RESTORE command causes the display of a standard open file dialog box that lists by default any files having the “4BK” extension. 

#### See also 

[BACKUP](backup.md)  
[RESTORE INFO](restore-info.md)  