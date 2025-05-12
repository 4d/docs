---
id: new-log-file
title: New log file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file** : Text<!-- END REF-->

<!--REF #_command_.New log file.Params-->

| Parámetros | Tipo |                             | Descripción                      |
| ---------- | ---- | --------------------------- | -------------------------------- |
| Resultado  | Text | &#8592; | Full pathname of closed log file |

<!-- END REF-->

## Descripción

**Preliminary note:** This command only works with 4D Server. Sólo puede ejecutarse mediante el comando [Execute on server](../commands-legacy/execute-on-server.md) o en un procedimiento almacenado.

<!--REF #_command_.New log file.Summary-->The **New log file** command closes the current log file, renames it and creates a new one with the same name in the same location as the previous one<!-- END REF-->. This command is meant to be used for setting up a backup system using a logical mirror (see the section *Setting up a logical mirror* in the [4D Server Reference Manual](https://doc/4d.com)). 

The command returns the full pathname (access path + name) of the log file being closed (called the “segment”). Este archivo se almacena en la misma ubicación que el archivo de registro actual (especificado en la [página de configuración](../Backup/settings.md#configuration) en el tema de copia de seguridad de la configuración). The command does not carry out any processing (compression, segmentation) on the saved file. No aparece ninguna
caja de diálogo.

The file is renamed with the current backup numbers of the database and of the log file, as shown in the following example: DatabaseName\[BackupNum-LogBackupNum\].journal. Por ejemplo:

- If the MyDatabase.4DD database has been saved 4 times, the last backup file will be named MyDatabase\[0004\].4BK. The name of the first “segment” of the log file will therefore be MyDatabase\[0004-0001\].journal.
- If the MyDatabase.4DD database has been saved 3 times and the log file has been saved 5 times since, the name of the 6th backup of the log file will be MyDatabase\[0003-0006\].journal.

:::warning

A log file must always be related to a data file. If you call this command just after a log file activation (without backup) using [`SELECT LOG FILE`](select-log-file.md) or the [Settings dialog box](../Backup/settings.md#configuration), make sure to have a matching copy of your data file, otherwise the log file could not be integrated.

:::

## Gestión de errores

In the event of an error, the command generates a code that can be intercepted using the [ON ERR CALL](../commands-legacy/on-err-call.md) command.

## Ver también

[SELECT LOG FILE](select-log-file.md)