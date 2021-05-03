---
id: backup
title: Backup
---


## Iniciar una copia de seguridad

A backup can be started in three ways:

- Manually, using the **Backup...** item of the 4D **File** menu or the **Backup** button of the [Maintenance and Security Center](MSC/backup.md).
- Automáticamente, utilizando el programador que se puede definir en las Propiedades de la base,
- Programmatically, using the `BACKUP` command.

> 4D Server: A backup can be started manually from a remote machine using a method that calls the `BACKUP` command. The command will be executed, in all cases, on the server.

### Copia de seguridad manual

1. Select the **Backup...** command in the 4D **File** menu.   
   The backup window appears: ![](assets/en/Backup/backup01.png) You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. This location is set on the **Backup/Configuration** page of the Database Settings.

- You can also open the [Maintenance and Security Center](MSC/overview.md) of 4D and display the [Backup page](MSC/backup.md).

El botón **Propiedades de la base...** hace que se muestre la página Backup/Propiedades de la base.

 2. Click **Backup** to start the backup using current parameters.


### Backup automático periódico

Scheduled backups are started automatically. Se configuran en la página **Backup/Planificador** de las ** Propiedades de la base**.

Backups are automatically performed at the times defined on this page without any type of user intervention. For more information on using this dialog box, refer to [Scheduler in backup settings](settings.md#scheduler).


### Comando BACKUP

Cuando el comando `BACKUP` del lenguaje 4D se ejecuta desde un método, la copia de seguridad se inicia utilizando los parámetros actuales definidos en las propiedades de la base. You can use the `On Backup Startup` and `On Backup Shutdown` database methods for handling the backup process (see the *4D Language Reference* manual).


## Cómo funciona la copia de seguridad

Once a backup is started, 4D displays a dialog box with a thermometer indicating the progress of the backup:

![](assets/en/Backup/backupProgress.png)

This thermometer is also displayed on the [Backup page of the MSC](MSC/backup.md) if you have used this dialog box.

The **Stop** button lets the user interrupt the backup at any time (refer to [Handling backup issues](backup.md#handling-backup-issues) below).

The status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server. It is also recorded in the database **Backup journal.txt**.

### Acceso a la base durante la copia

Durante una copia de seguridad, el acceso a la base está restringido por 4D según el contexto. 4D locks any processes related to the types of files included in the backup: if only the project files are being backed up, access to the structure is not possible but access to the data will be allowed.

Conversely, if only the data file is being backed up, access to the structure is still allowed. En este caso, las posibilidades de acceso a los datos son las siguientes:

- Con 4D versión monopuesto, la base está bloqueada tanto para lectura como para escritura; todos los procesos están congelados. No actions can be performed.
- Con 4D Server, la base sólo está bloqueada en escritura; las máquinas cliente pueden ver los datos. If a client machine sends an add, remove or change request to the server, a window appears asking the user to wait until the end of the backup. Una vez guardada la base, la ventana desaparece y se realiza la acción. To cancel the request in process and not wait for the end of the backup, simply click the **Cancel operation** button. However, if the action waiting to be executed comes from a method launched prior to the backup, you should not cancel it because only operations remaining to be performed are cancelled. Además, un método parcialmente ejecutado puede causar inconsistencias lógicas en la base. > When the action waiting to be executed comes from a method and the user clicks the **Cancel operation** button, 4D Server returns error -9976 (This command cannot be executed because the database backup is in progress).

### Gestión de los problemas de las copias de seguridad

It may happen that a backup is not executed properly. There may be several causes of a failed backup: user interruption, attached file not found, destination disk problems, incomplete transaction, etc. 4D processes the incident according to the cause.

En todos los casos, tenga en cuenta que el estado de la última copia de seguridad (correcta o fallida) se almacena en el área de información de la [página de copias de seguridad en el CSM](MSC/backup.md) o en la **página de mantenimiento** de 4D Server, así como en la base **Backup journal.txt**.

- **User interruption**: The **Stop** button in the progress dialog box allows users to interrupt the backup at any time. In this case, the copying of elements is stopped and the error 1406 is generated. You can intercept this error in the `On Backup Shutdown` database method.
- **Archivo adjunto no encontrado**: cuando no se encuentra un archivo adjunto, 4D realiza una copia de seguridad parcial (copia de seguridad de los archivos de la base y de los archivos adjuntos accesibles) y devuelve un error.
- **Copia de seguridad imposible** (disco lleno o protegido contra escritura, disco ausente, fallo de disco, transacción incompleta, base no lanzada en el momento de la copia de seguridad automática programada, etc.): si se trata de un primer error, 4D hará un segundo intento de realizar la copia de seguridad. La espera entre los dos intentos se define en la página **Backup/Backup y Restauración** de las Propiedades de la base. If the second attempt fails, a system alert dialog box is displayed and an error is generated. You can intercept this error in the `On Backup Shutdown` database method.

## Historial de copias de seguridad (Backup Journal)

To make following up and verifying database backups easier, the backup module writes a summary of each operation performed in a special file, which is similar to an activity journal. Like an on-board manual, all database operations (backups, restores, log file integrations) are logged in this file whether they were scheduled or performed manually. The date and time that these operations occurred are also noted in the journal.

The backup journal is named "Backup Journal[001].txt" and is placed in the "Logs" folder of the database. The backup journal can be opened with any text editor.

#### Management of backup journal size

In certain backup strategies (for example, in the case where numerous attached files are being backed up), the backup journal can quickly grow to a large size. Two mechanisms can be used to control this size:

- **Automatic backup**: Before each backup, the application examines the size of the current backup journal file. If it is greater than 10 MB, the current file is archived and a new file is created with the [xxx] number incremented, for example "Backup Journal[002].txt”. Once file number 999 is reached, the numbering begins at 1 again and the existing files will be replaced.
- **Possibility of reducing the amount of information recorded**: To do this, simply modify the value of the `VerboseMode` key in the *Backup.4DSettings* file of the database. By default, this key is set to True. If you change the value of this key to False, only the main information will be stored in the backup journal: date and time of start of operation and any errors encountered. The XML keys concerning backup configuration are described in the *4D XML Keys Backup* manual.



## backupHistory.json

All information regarding the latest backup and restore operations are stored in the database's **backupHistory.json** file. It logs the path of each saved file (including attachments) as well as number, date, time, duration, and status of each operation. To limit the size of the file, the number of logged operations is the same as the number of available backups ("Keep only the last X backup files") defined in the backup settings.

The **backupHistory.json** file is created in the current backup destination folder. You can get the actual path for this file using the following statement:

```4d
$backupHistory:=Get 4D file(Backup history file)
```
> **WARNING**  
> Deleting or moving the **backupHistory.json** file will cause the next backup number to be reset.
> The **backupHistory.json** file is formatted to be used by the 4D application. If you are looking for a human-readable report on backup operations, you might find the Backup journal more accurate. 
