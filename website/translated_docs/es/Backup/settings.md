---
id: settings
title: Backup Settings
---

Los parámetros de copia de seguridad se definen a través de tres páginas en la caja de diálogo Propiedades de la base. You can set:

- the scheduler for automatic backups
- the files to include in every backup
- the advanced features allowing to execute automatic tasks

> Settings defined in this dialog box are written in the *Backup.4DSettings* file, stored in the [Settings folder](Project/architecture.md#settings-folder).

## Scheduler

Puede automatizar la copia de seguridad de las bases abiertas con 4D o 4D Server (incluso cuando no hay máquinas cliente conectadas). This involves setting a backup frequency (in hours, days, weeks or months); for each session, 4D automatically starts a backup using the current backup settings.

Si esta aplicación no se inició en el momento teórico de la copia de seguridad, la próxima vez que se inicie 4D, considerará que la copia de seguridad ha fallado y procederá según lo establecido en la Configuración de la base (consulte [Manejo de problemas de la copia de seguridad](backup.md#handling-backup-issues)).

Los parámetros n de la copia de seguridad del programador se definen en la página **Backup/Periodicidad** de las Propiedades de la base:

![](assets/en/Backup/backup02.png)

Las opciones que se encuentran en esta pestaña le permiten establecer y configurar las copias de seguridad automáticas programadas de la base. You can choose a standard quick configuration or you can completely customize it. Various options appear depending on the choice made in the **Automatic Backup** menu:

- **Never**: The scheduled backup feature is disabled.
- **Every Hour**: Programs an automatic backup every hour, starting with the next hour.
- **Every Day**: Programs an automatic backup every day. You can then enter the time when the backup should start.
- **Every Week**: Programs an automatic backup every week. Two additional entry areas let you indicate the day and time when the backup should start.
- **Every Month**: Programs an automatic backup every month. Two additional entry areas let you indicate the day of the month and the time when the backup should start.
- **Personalized**: Used to configure "tailormade" automatic backups. When you select this option, several additional entry areas appear:
    + **Every X hour(s)**: Allows programming backups on an hourly basis. You can enter a value between 1 and 24.
    - **Every X day(s) at x**: Allows programming backups on a daily basis. For example, enter 1 if you want to perform a daily backup. When this option is checked, you must enter the time when the backup should start.
    - **Every X week(s) day at x**: Allows programming backups on a weekly basis. Enter 1 if you want to perform a weekly backup. When this option is checked, you must enter the day(s) of the week and the time when the backup should start. You can select several days of the week, if desired. For example, you can use this option to set two weekly backups: one on Wednesday and one on Friday.
    - **Every X month(s), Xth Day at x**: Allows programming backups on a monthly basis. Enter 1 if you want to perform a monthly backup. When this option is checked, you must indicate the day of the month and the time when the backup should start.

## Configuration

La página Copia de seguridad/Configuración de las Propiedades de la base permite designar los archivos de copia de seguridad y su ubicación, así como la del archivo de historial. Estos parámetros son específicos de cada base de datos abierta por la aplicación 4D.

![](assets/en/Backup/backup03.png)

> **4D Server:** These parameters can only be set from the 4D Server machine.

### Content
This area allows you to set which files and/or folders to copy during the next backup.

- **Archivo de datos**: archivo de datos de la base. Cuando esta opción está seleccionada, el archivo de historial actual de la base, si existe, se respalda al mismo tiempo que los datos.
- **Archivo de estructura**: carpetas y archivos de la base. En el caso de bases compiladas, esta opción permite hacer una copia de seguridad del archivo .4dz.
- **User Structure File (only for binary database)**: *deprecated feature*
- **Archivos adjuntos**: esta área permite especificar un conjunto de archivos y/o carpetas que se respaldarán al mismo tiempo que la base. These files can be of any type (documents or plug-in templates, labels, reports, pictures, etc.). You can set either individual files or folders whose contents will be fully backed up. Each attached element is listed with its full access path in the “Attachments” area.
    - **Delete**: Removes the selected file from the list of attached files.
    - **Add folder...**: Displays a dialog box that allows selecting a folder to add to the backup. In the case of a restore, the folder will be recovered with its internal structure. Puede seleccionar toda carpeta o volumen conectado a la máquina, a excepción de la carpeta que contiene los archivos de la base.
    - **Add file...**: Displays a dialog box that allows you to select a file to add to the backup.


### Backup File Destination Folder

This area lets you view and change the location where backup files as well as log backup files (where applicable) will be stored.

To view the location of the files, click in the area in order to display their pathname as a pop-up menu.

To modify the location where these files are stored, click the **...** button. A selection dialog box appears, which allows you to select a folder or disk where the backups will be placed. The "Used Space" and "Free Space" areas are updated automatically and indicate the remaining space on the disk of the selected folder.

### Log management

La opción **Utilizar el archivo de historial**, cuando está marcada, indica que la base utiliza un archivo de historial. Its pathname is specified below the option. Cuando esta opción está marcada, no es posible abrir la base sin un archivo de historial.

Por defecto, toda base creada con 4D utiliza un archivo de historial (opción seleccionada en la **página General** de las **Preferencias**). The log file is named *data.journal* and is placed in the Data folder.

> La activación de un nuevo archivo de historial requiere una copia de seguridad previa de los datos de la base. When you check this option, a warning message informs you that a backup is necessary. La creación del archivo de historial se pospone y se creará realmente sólo después de la siguiente copia de seguridad de la base.


## Backup & Restore

Modifying backup and restore options is optional. Their default values correspond to a standard use of the function.

![](assets/en/Backup/backup04.png)

### General settings

- **Keep only the last X backup files**: This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. This feature works as follows: Once the current backup is complete, 4D deletes the oldest archive if it is found in the same location as the archive being backed up and has the same name (you can request that the oldest archive be deleted before the backup in order to save space). If, for example, the number of sets is set to 3, the first three backups create the archives MyBase-0001, MyBase-0002, and MyBase-0003 respectively. During the fourth backup, the archive MyBase-0004 is created and MyBase-0001 is deleted. By default, the mechanism for deleting sets is enabled and 4D keeps 3 backup sets. To disable the mechanism, simply deselect the option.
> Este parámetro se refiere tanto a las copias de seguridad de la base como de los archivos de registro.

- **Copia de seguridad sólo si el archivo de datos ha sido modificado**: cuando se marca esta opción, 4D inicia las copias de seguridad programadas sólo si se han añadido, modificado o eliminado datos en la base desde la última copia de seguridad. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. No error is generated; however the backup journal notes that the backup has been postponed. Esta opción también permite ahorrar tiempo de máquina para la copia de seguridad de las bases utilizadas principalmente para su visualización. Please note that enabling this option does not take any modifications made to the project files or attached files into account.
> Este parámetro se refiere tanto a las copias de seguridad de la base como de los archivos de registro.

- **Delete oldest backup file before/after backup**: This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (**before** option) or whether the deletion should take place once the backup is completed (**after** option). In order for this mechanism to work, the oldest archive must not have been renamed or moved.

- **If backup fails**: This option allows setting the mechanism used to handle failed backups (backup impossible). When a backup cannot be performed, 4D lets you carry out a new attempt.
    -  **Retry at the next scheduled date and time**: This option only makes sense when working with scheduled automatic backups. It amounts to cancelling the failed backup. An error is generated.
    - **Retry after X second(s), minute(s) or hour(s)**: When this option is checked, a new backup attempt is executed after the wait period. This mechanism allows anticipating certain circumstances that may block the backup. You can set a wait period in seconds, minutes or hours using the corresponding menu. If the new attempt also fails, an error is generated and the failure is noted in the status area of the last backup and in the backup journal file.
    - **Cancel the operation after X attempts**: This parameter is used to set the maximum number of failed backup attempts. If the backup has not been carried out successfully after the maximum number of attempts set has been reached, it is cancelled and the error 1401 is generated ("The maximum number of backup attempts has been reached; automatic backup is temporarily disabled"). In this case, no new automatic backup will be attempted as long as the application has not been restarted, or a manual backup has been carried out successfully. This parameter is useful in order to avoid a case where an extended problem (requiring human intervention) that prevented a backup from being carried out would have led to the application repeatedly attempting the backup to the detriment of its overall performance. By default, this parameter is not checked.

> 4D considers a backup as failed if the database was not launched at the time when the scheduled automatic backup was set to be carried out.

### Archive
These options apply to main backup files and to log backup files.

- **Segment Size (Mb)** 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.). During restore, 4D will automatically merge the segments. Each segment is called MyDatabase[xxxx-yyyy].4BK, where xxxx is the backup number and yyyy is the segment number. For example, the three segments of the MyDatabase database backup are called MyDatabase[0006-0001].4BK, MyDatabase[0006-0002].4BK and MyDatabase[0006-0003].4BK. The **Segment Size** menu is a combo box that allows you to set the size in MB for each segment of the backup. You can choose one of the preset sizes or enter a specific size between 0 and 2048. If you pass 0, no segmentation occurs (this is the equivalent of passing **None**).

- **Compression Rate** By default, 4D compresses backups to help save disk space. However, the file compression phase can noticeably slow down backups when dealing with large volumes of data. The **Compression Rate** option allows you to adjust file compression:
    - **None:** No file compression is applied. The backup is faster but the archive files are considerably larger.
    - **Fast** (default): This option is a compromise between backup speed and archive size.
    - **Compact**: The maximum compression rate is applied to archives. The archive files take up the least amount of space possible on the disk, but the backup is noticeable slowed.

- **Interlacing Rate and Redundancy Rate** 4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. You can set these mechanisms according to your needs. The menus for these options contain rates of **Low**, **Medium**, **High** and **None** (default).
    - **Interlacing Rate**: Interlacing consists of storing data in non-adjacent sectors in order to limit risks in the case of sector damage. The higher the rate, the higher the security; however, data processing will use more memory.
    - **Redundancy Rate**: Redundancy allows securing data present in a file by repeating the same information several times. The higher the redundancy rate, the better the file security; however, storage will be slower and the file size will increase accordingly.


### Automatic Restore

- **Restore last backup if database is damaged**: When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the database, if an anomaly is detected (corrupted file, for example) during database launch. No intervention is required on the part of the user; however, the operation is logged in the backup journal.
> In the case of an automatic restore, only the data file is restored. If you wish to get the attached files or the project files, you must perform a manual restore.

- **Integrate last log file if database is incomplete**: When this option is checked, the program automatically integrates the log file when opening or restoring the database.
    - When opening a database, the current log file is automatically integrated if 4D detects that there are operations stored in the log file that are not present in the data. This situation arises, for example, if a power outage occurs when there are operations in the data cache that have not yet been written to the disk.
    - When restoring a database, if the current log file or a log backup file having the same number as the backup file is stored in the same folder, 4D examines its contents. If it contains operations not found in the data file, the program automatically integrates it.

The user does not see any dialog box; the operation is completely automatic. The goal is to make use as easy as possible. The operation is logged in the backup journal.
