---
id: log
title: Log file (.journal)
---

Una base de uso continuo siempre registra cambios, adiciones o supresiones. Performing regular backups of data is important but does not allow (in case of incident) restoring data entered since the last backup. To respond to this need, 4D now offers a specific tool: the log file. Este archivo permite garantizar la seguridad permanente de los datos de la base.

In addition, 4D works continuously with a data cache in memory. Todos los cambios realizados en los datos de la base se almacenan temporalmente en la caché antes de escribirse en el disco duro. This accelerates the operation of applications; in fact, accessing memory is faster than accessing the hard disk. Si se produce un incidente en la base antes de que los datos almacenados en la caché puedan escribirse en el disco, deberá incluir el archivo de historial actual para poder restaurar la base por completo.

Por último, 4D dispone de funciones que analizan el contenido del archivo de historial, permitiendo revertir las operaciones realizadas sobre los datos de la base. These functions area available in the MSC: refer to the [Activity analysis](MSC/analysis.md) page and the [Rollback](MSC/rollback.md) page.

## How the log file works

El archivo de historial generado por 4D contiene una descripción de todas las operaciones realizadas en los datos de las tablas registradas en el diario de la base, que se registran de forma secuencial. By default, all the tables are journaled, i.e. included in the log file, but you can deselect individual tables using the **Include in Log File** table property.

Así, cada operación realizada por un usuario provoca dos acciones simultáneas: la primera en la base de datos (la instrucción se ejecuta normalmente) y la segunda en el archivo de registro (se registra la descripción de la operación). The log file is created independently without disturbing or slowing down the work of the user. Una base sólo puede trabajar con un archivo de historial a la vez. The log file records the following action types:

- Opening and closing of the data file,
- Opening and closing of the process (contexts),
- Adding of records or BLOBs,
- Modifying of records,
- Deleting of records,
- Creating and closing of transactions.

For more information about these actions, refer to the [Activity analysis](MSC/analysis.md) page of the MSC.

4D manages the log file. It takes into account all operations that affect the data file equally, regardless of any manipulations performed by a user, a 4D method, the SQL engine, plug-ins, or from a Web browser or a mobile applicaton.

The following illustration sums up how the log file works:

![](assets/en/Backup/backup05.png)


The current log file is automatically saved with the current data file. This mechanism has two distinct advantages:

- Its avoids saturating the disk volume where the log file is stored. Without a backup, the log file would get bigger and bigger with use, and would eventually use all available disk space. For each data file backup, 4D or 4D Server closes the current log file and immediately starts a new, empty file, thereby avoiding the risk of saturation. The old log file is then archived and eventually destroyed depending on the mechanism for managing the backup sets.
- Conservar los archivos de historial correspondientes a las copias de seguridad para poder analizar o reparar una base en un momento posterior. La integración de un archivo de historial sólo puede hacerse en la base a la que corresponde. It is important, in order to be able to properly integrate a log file into a backup, to have backups and log files archived simultaneously.


## Creating the log file

Por defecto, toda base creada con 4D utiliza un archivo de historial (opción definida en la página **General** de las Preferencias). The log file is named *data.journal* and is placed in the Data folder.

Puede averiguar si su base utiliza un archivo de historial en cualquier momento: sólo tiene que comprobar si la opción **Utilizar el archivo de historial** está seleccionada en la página **Backup/Configuración** de las Propiedades de la base. Si deselecciona esta opción, o si utiliza una base sin archivo de historial y desea configurar una estrategia de copia de seguridad con un archivo de historial, tendrá que crear uno.

To create a log file:

1. En la página **Copia de seguridad/Configuración** de las Propiedades de la base, marque la opción **Utilizar el archivo de historial**. The program displays a standard open/new file dialog box. By default, the log file is named *data.journal*.

2. Keep the default name or rename it, and then select the file location. Si tiene al menos dos discos duros, se recomienda colocar el archivo de historial en un disco distinto al que contiene la base. Si se pierde el disco duro de la base de datos, aún puede recuperar su archivo de historial.

3. Click **Save**. The disk and the name of the open log file are now displayed in the **Use Log** area of the dialog box. You can click on this area in order to display a pop-up menu containing the log path on the disk.

4. Valide la caja de diálogo de las Propiedades de la base.

Para poder crear un archivo de historial directamente, la base de datos debe estar en una de las siguientes situaciones:

- The data file is blank,
- Acaba de realizar una copia de seguridad de la base y aún no se han realizado cambios en los datos.

En todos los demás casos, al validar el cuadro de diálogo de las Propiedades de la base, aparecerá un cuadro de diálogo de alerta para informarle que es necesario realizar una copia de seguridad. If you click **OK**, the backup begins immediately, then the log file is activated. Si hace clic en **Cancelar**, la solicitud se guarda pero la creación del archivo de historial se pospone y en realidad sólo se creará después de la siguiente copia de seguridad de la base de datos. Esta precaución es indispensable porque, para restaurar una base de datos después de algún incidente, necesitará una copia de la base en la que se integrarán las operaciones registradas en el archivo de historial.

Sin tener que hacer nada más, todas las operaciones realizadas sobre los datos se registran en este archivo y se utilizarán en el futuro cuando se abra la base.

You must create another log file if you create a new data file. You must set or create another log file if you open another data file that is not linked to a log file (or if the log file is missing).


## Stopping a log file

Si desea dejar de registrar las operaciones en el archivo de historial actual, sólo tiene que anular la selección de la opción **Utilizar el archivo de historial** en la página **Copia de seguridad/Configuración** de las Propiedades de la base.

4D then displays an alert message to remind you that this action prevents you from taking advantage of the security that the log file provides:

![](assets/en/Backup/backup06.png)

Si hace clic en el botón **Parar**, el archivo de historial actual se cierra inmediatamente (la caja de dialogo de las Propiedades de la base no necesita ser validada después).

If you wish to close the current log file because it is too large, you might consider performing a data file backup, which will cause the log file to be backed up as well.

> **4D Server:** The `New log file` command automatically closes the current log file and starts a new one. If for some reason the log file becomes unavailable during a working session, error 1274 is generated and 4D Server does not allow users to write data anymore. When the log file is available again, it is necessary to do a backup.
