---
id: analysis
title: Página Análisis de actividades
sidebar_label: Página Análisis de actividades
---

The Activity analysis page allows viewing the contents of the current log file. Esta función es útil para analizar el uso de una base de datos o detectar la(s) operación(es) que ha(n) causado errores o mal funcionamiento. En el caso de una base de datos en modo cliente-servidor, permite verificar las operaciones realizadas por cada máquina cliente.
> It is also possible to rollback the operations carried out on the data of the database. For more information, refer to [Rollback page](rollback.md).

![](assets/en/MSC/MSC_analysis.png)

Every operation recorded in the log file appears as a row. The columns provide various information on the operation. You can reorganize the columns as desired by clicking on their headers.

This information allows you to identify the source and context of each operation:

- **Operation**: Sequence number of operation in the log file.
- **Action**: Type of operation performed on the data. This column can contain one of the following operations:
    - Opening of Data File: Opening of a data file.
    - Closing of Data File: Closing of an open data file.
    - Creation of a Context: Creation of a process that specifies an execution context.
    - Closing of a Context: Closing of process.
    - Addition: Creation and storage of a record.
    - Adding a BLOB: Storage of a BLOB in a BLOB field.
    - Deletion: Deletion of a record.
    - Modification: Modification of a record.
    - Start of Transaction: Transaction started.
    - Validation of Transaction: Transaction validated.
    - Cancellation of Transaction: Transaction cancelled.

- **Table**: Table to which the added/deleted/modified record or BLOB belongs.
- **Primary Key/BLOB**: contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.
- **Process**: Internal number of process in which the operation was carried out. This internal number corresponds to the context of the operation.
- **Size**: Size (in bytes) of data processed by the operation.
- **Date and Hour**: Date and hour when the operation was performed.
- **Usuario**: nombre del usuario que ha realizado la operación. En modo cliente-servidor, se muestra el nombre de la máquina del lado del cliente; en el modo monopuesto, se muestra el ID del usuario. Si las contraseñas de 4D no están activadas, esta columna está vacía.
- **Values**: Values of fields for the record in the case of addition or modification. The values are separated by “;”. Only values represented in alphanumeric form are displayed.  
  ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Records**: Record number.

Haga clic en **Analizar** para actualizar el contenido del archivo de historial actual de la base seleccionada (llamado por defecto nomdatos.journal). El botón Navegar puede utilizarse para seleccionar y abrir otro archivo de historial para la base. The **Export...** button can be used to export the contents of the file as text.
