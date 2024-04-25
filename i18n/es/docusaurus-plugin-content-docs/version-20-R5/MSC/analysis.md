---
id: analysis
title: Página Análisis de actividades
sidebar_label: Página Análisis de actividades
---

La página Análisis de actividades permite ver el contenido del archivo de registro actual. Esta función es útil para analizar el uso de una aplicación o detectar la(s) operación(es) que ha(n) causado errores o mal funcionamiento. En el caso de una aplicación en modo cliente-servidor, permite verificar las operaciones realizadas por cada máquina cliente.

> También es posible revertir las operaciones realizadas sobre los datos de la base. For more information, refer to [Rollback page](rollback.md).

![](../assets/en/MSC/MSC_analysis.png)

Cada operación registrada en el archivo de registro aparece como una línea. Las columnas ofrecen información variada sobre la operación. Puede reorganizar las columnas como desee haciendo clic en sus encabezados.

Esta información permite identificar la fuente y el contexto de cada operación:

- **Operation**: Sequence number of operation in the log file.

- **Action**: Type of operation performed on the data. Esta columna puede contener una de las siguientes operaciones:
  - Apertura del archivo de datos: apertura de un archivo de datos.
  - Cierre del archivo de datos: cierre de un archivo de datos abierto.
  - Creación de un contexto: creación de un proceso que especifica un contexto de ejecución.
  - Cierre de un contexto: cierre de un proceso.
  - Adición: creación y almacenamiento de un registro.
  - Añadir un BLOB: almacenamiento de un BLOB en un campo BLOB.
  - Eliminación: eliminación de un registro.
  - Modificación: modificación de un registro.
  - Inicio de la transacción: transacción iniciada.
  - Validación de transacción: transacción validada.
  - Cancelación de transacción: transacción cancelada.
  - Update context: Change in extra data (e.g. a call to `CHANGE CURRENT USER` or `SET USER ALIAS`).

- **Table**: Table to which the added/deleted/modified record or BLOB belongs.

- **Primary Key/BLOB**: contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.

- **Process**: Internal number of process in which the operation was carried out. Este número interno corresponde al contexto de la operación.

- **Size**: Size (in bytes) of data processed by the operation.

- **Date and Hour**: Date and hour when the operation was performed.

- **System User**: System name of the user that performed the operation. En modo cliente-servidor, se muestra el nombre de la máquina del lado del cliente; en el modo monopuesto, se muestra el nombre del usuario de la sesión.

- **4D User**: 4D user name of the user that performed the operation. Si se define un alias para el usuario, el alias se muestra en lugar del nombre de usuario 4D.

- **Values**: Values of fields for the record in the case of addition or modification. Los valores están separados por ";". Only values represented in alphanumeric form are displayed.\
  _**Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column._

- **Records**: Record number.

Click on **Analyze** to update the contents of the current log file of the selected application (named by default dataname.journal). El botón Navegar puede utilizarse para seleccionar y abrir otro archivo de historial para la aplicación. The **Export...** button can be used to export the contents of the file as text.
