---
id: select-log-file
title: SELECT LOG FILE
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *logFile* )<br/>**SELECT LOG FILE** ( * )<!-- END REF-->

<!--REF #_command_.SELECT LOG FILE.Params-->

| Parámetros | Tipo |                             | Descripción                          |
| ---------- | ---- | --------------------------- | ------------------------------------ |
| logFile    | Text | &#8594; | Nombre del archivo de registro       |
| \*         |      | &#8594; | Cerrar el archivo de registro actual |

<!-- END REF-->

## Descripción

<!--REF #_command_.SELECT LOG FILE.Summary-->The **SELECT LOG FILE** command creates, or closes the log file according to the value you pass in parameter<!-- END REF-->.

In *logFile*, pass the name or the full pathname of the log file to be created. If you only pass a name, the file will be created in the "Logs" folder of the database located next to the database structure file.

If you pass an empty string in *logFile*, **SELECT LOG FILE** presents an Save File dialog box, allowing the user to choose the name and location of the log file to be created. If the file is created correctly, the OK variable is set to 1. Otherwise, if the user clicks Cancel or if the log file could not be created, OK is set to 0.

**Note:** The new log file is not generated immediately after execution of the command, but after the next backup (the parameter is kept in the data file and will be taken into account even if the database is closed in the meantime) or a call to the [New log file](new-log-file.md) command. Puede llamar al comando [BACKUP](../commands-legacy/backup.md) para activar la creación del archivo de registro.

If you pass *\** in *logFile*, **SELECT LOG FILE** closes the current log file for the database. La variable OK toma el valor 1 cuando se cierra el archivo de registro.

## Variables y conjuntos sistema

OK is set to 1 if the log file is correctly created, or closed.

## Ver también

[New log file](new-log-file.md)\
[ON ERR CALL](../commands-legacy/on-err-call.md)

## Propiedades

|                        |                             |
| ---------------------- | --------------------------- |
| Número de comando      | 345                         |
| Hilo seguro            | &cross; |
| Modifica las variables | OK, error                   |

