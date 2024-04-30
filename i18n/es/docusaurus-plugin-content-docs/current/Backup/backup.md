---
id: backup
slug: backup
title: Copia de seguridad
---

Una copia de seguridad puede iniciarse de tres maneras:

- Manually, using the **Backup...** item of the 4D **File** menu or the **Backup** button of the [Maintenance and Security Center](MSC/backup.md).
- Automáticamente, utilizando el programador que se puede definir en las Propiedades,
- Programmatically, using the `BACKUP` command.

> 4D Server: A backup can be started manually from a remote machine using a method that calls the `BACKUP` command. El comando se ejecutará, en todos los casos, en el servidor.

## Copia de seguridad manual

1. Select the **Backup...** command in the 4D **File** menu.
   The backup window appears:
   ![](../assets/en/Backup/backup01.png)
   You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. This location is set on the **Backup/Configuration** page of the Database Settings.

- You can also open the [Maintenance and Security Center](MSC/overview.md) of 4D and display the [Backup page](MSC/backup.md).

The **Database properties...** button causes the Backup/Configuration page of the Structure Settings to be displayed.

2. Click **Backup** to start the backup using current parameters.

## Backup automático periódico

Las copias de seguridad programadas se inician automáticamente. They are configured in the **Backup/Scheduler** page of the **Settings**.

Las copias de seguridad se realizan automáticamente a las horas definidas en esta página sin ningún tipo de intervención del usuario. For more information on using this dialog box, refer to [Scheduler in backup settings](settings.md#scheduler).

## Comando BACKUP

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Settings. You can use the `On Backup Startup` and `On Backup Shutdown` database methods for handling the backup process (see the _4D Language Reference_ manual).

## Cómo funciona la copia de seguridad

Una vez iniciada la copia de seguridad, 4D muestra una caja de diálogo con un termómetro que indica el progreso de la copia de seguridad:

![](../assets/en/Backup/backupProgress.png)

This thermometer is also displayed on the [Backup page of the MSC](MSC/backup.md) if you have used this dialog box.

The **Stop** button lets the user interrupt the backup at any time (refer to [Handling backup issues](backup.md#handling-backup-issues) below).

The status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server. It is also recorded in the database **Backup journal.txt**.

### Acceso a la aplicación durante la copia de seguridad

4D bloquea los procesos relacionados con los tipos de archivos incluidos en la copia de seguridad: si sólo se hace una copia de seguridad de los archivos del proyecto, no se podrá acceder a la estructura pero sí a los datos. Durante una copia de seguridad, el acceso a la aplicación está restringido por 4D en función del contexto.

Por el contrario, si sólo se hace una copia de seguridad del archivo de datos, se sigue permitiendo el acceso a la estructura. En este caso, las posibilidades de acceso a la aplicación son las siguientes:

- Con 4D versión monopuesto, la aplicación está bloqueada tanto para lectura como para escritura; todos los procesos están congelados. No se puede realizar ninguna acción.
- Con 4D Server, la aplicaci´n sólo está bloqueada en escritura; las máquinas cliente pueden ver los datos. Si una máquina cliente envía una petición de adición, eliminación o cambio al servidor, aparece una ventana que pide al usuario que espere hasta el final de la copia de seguridad. Una vez guardada la aplicación, la ventana desaparece y se realiza la acción. To cancel the request in process and not wait for the end of the backup, simply click the **Cancel operation** button. Sin embargo, si la acción que espera ser ejecutada proviene de un método lanzado antes de la copia de seguridad, no debe cancelarla porque sólo se cancelan las operaciones que quedan por realizar. Además, un método parcialmente ejecutado puede causar inconsistencias lógicas en los datos.

> When the action waiting to be executed comes from a method and the user clicks the **Cancel operation** button, 4D Server returns error -9976 (This command cannot be executed because the database backup is in progress).

### Gestión de los problemas de las copias de seguridad

Puede ocurrir que una copia de seguridad no se ejecute correctamente. Puede haber varias causas de fallo en la copia de seguridad: interrupción del usuario, archivo adjunto no encontrado, problemas en el disco de destino, transacción incompleta, etc. 4D procesa la incidencia según la causa.

In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server, as well as in the **Backup journal.txt**.

- **User interruption**: The **Stop** button in the progress dialog box allows users to interrupt the backup at any time. En este caso, la copia de elementos se detiene y se genera el error 1406. You can intercept this error in the `On Backup Shutdown` database method.
- **Attached file not found**: When an attached file cannot be found, 4D performs a partial backup (backup of application files and accessible attached files) and returns an error.
- **Backup impossible** (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.):
  If this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the **Backup/Backup & Restore** page of the Settings.
  Si el segundo intento falla, se muestra una caja de diálogo de alerta del sistema y se genera un error. You can intercept this error in the `On Backup Shutdown` database method.

## Historial de copias de seguridad (Backup Journal)

Para facilitar el seguimiento y la verificación de las copias de seguridad, el módulo de copia de seguridad escribe un resumen de cada operación realizada en un archivo especial, que es similar a un diario de actividades. Al igual que un manual de a bordo, todas las operaciones de la base de datos (copias de seguridad, restauraciones, integraciones de archivos de registro) se registran en este archivo, tanto si se han programado como si se han realizado manualmente. La fecha y la hora en que se produjeron estas operaciones también se anotan en el diario.

El historial de copia de seguridad se llama "Backup Journal[001].txt" y se coloca en la carpeta "Logs" del proyecto. El historial de copias de seguridad puede abrirse con cualquier editor de texto.

#### Gestión del tamaño del historial de copias de seguridad

En determinadas estrategias de copia de seguridad (por ejemplo, en el caso de que se realicen copias de seguridad de numerosos archivos adjuntos), el historial de copias de seguridad puede alcanzar rápidamente un gran tamaño. Se pueden utilizar dos mecanismos para controlar este tamaño:

- **Automatic backup**: Before each backup, the application examines the size of the current backup journal file. Si es superior a 10 MB, se archiva el archivo actual y se crea un nuevo archivo con el número [xxx] incrementado, por ejemplo "Backup Journal[002].txt”. Una vez alcanzado el número de archivo 999, la numeración vuelve a empezar por el 1 y los archivos existentes serán sustituidos.
- **Possibility of reducing the amount of information recorded**: To do this, simply modify the value of the `VerboseMode` key in the _Backup.4DSettings_ file of the project. Por defecto, esta llave está definida como True. Si cambia el valor de esta llave a False, sólo se almacenará en el diario de copias de seguridad la información principal: fecha y hora de inicio de la operación y los errores encontrados. The XML keys concerning backup configuration are described in the _4D XML Keys Backup_ manual.

## backupHistory.json

All information regarding the latest backup and restore operations are stored in the application's **backupHistory.json** file. Registra la ruta de cada archivo guardado (incluidos los adjuntos), así como el número, la fecha, la hora, la duración y el estado de cada operación. Para limitar el tamaño del archivo, el número de operaciones registradas es el mismo que el número de copias de seguridad disponibles ("Conservar sólo los últimos X archivos de copia de seguridad") definido en las propiedades de la copia de seguridad.

The **backupHistory.json** file is created in the current backup destination folder. Puede obtener la ruta real de este archivo utilizando la siguiente declaración:

```4d
$backupHistory:=Get 4D file(Backup history file)
```

> **WARNING**\
> Deleting or moving the **backupHistory.json** file will cause the next backup number to be reset.

> The **backupHistory.json** file is formatted to be used by the 4D application. Si lo que busca es un informe legible en las operaciones de copia de seguridad, quizá le resulte más preciso el diario de copias de seguridad.
