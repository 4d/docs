---
id: maintenance
title: Página Mantenimiento
---


The **Maintenance** page of the 4D Server Administration window provides information concerning the current operation of the application. También ofrece acceso a las funciones básicas de mantenimiento:

![](../assets/en/Admin/server-maintenance.png)


## Última verificación/compactación

These areas indicate the date, time and status of the last [data verification](MSC/verify.md) and [compacting operation](MSC/compact.md) carried out on the database.

### Verificar registros e índices

This button can be used to launch the verification operation directly, without interrupting the server. Note that the server may be noticeably slowed down during the operation.

Se verifican todos los registros y todos los índices de la base de datos. If you want to be able to target the verification or have additional options available, you will need to use the [Maintenance and Security Center](MSC/overview.md) (MSC).

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.

### Compactar los datos...

Este botón puede utilizarse para lanzar directamente una operación de compactación de datos. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:

![](../assets/en/Admin/server-shut.png)

After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the [MSC](MSC/overview.md).

Once the compacting is finished, 4D Server automatically restarts the application. A continuación, los usuarios de 4D pueden volver a conectarse.

> If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server.

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.


## Tiempo de funcionamiento

This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes).


### Reiniciar el servidor...

This button can be used to immediately close and restart the project. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. Tras la validación, 4D Server cierra automáticamente el proyecto y lo vuelve a abrir. A continuación, los usuarios de 4D pueden volver a conectarse.

> If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server.

## Última copia de seguridad

This area indicates the date and time of the [last backup](MSC/backup.md) of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the **Scheduler** page of the structure settings.

- **Última copia de seguridad**: fecha y hora de la última copia de seguridad.
- **Next backup**: date and time of next scheduled backup.
- **Needed space**: estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file.
- **Available space**: space available on the backup volume.


The **Start backup** button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the **Settings...** button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.


## Historial de peticiones y depuración

This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation.

Refer to the [**Description of log files**](Debugging/debugLogFiles.md) section for details on log files.

### Iniciar/Detener Solicitud y Depurar Registros

The **Start Request and Debug Logs** button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application.

> Este botón sólo registra las operaciones que se ejecutan en el servidor.

When the logs have been activated, the button title changes to **Stop Request and Debug Logs**, so that you can stop recording requests at any time. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.

### Ver el informe

The **View Report** button (named **Download report** if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file.

### Cargar archivo de configuración de logs

This button allows you to load a special server [log configuration file](Debugging/debugLogFiles.md#using-a-log-configuration-file) (`.json` file). Such a file can be provided by 4D technical services to monitor and study specific cases.


### Detener el registro

This button suspends all currently logging operations started on the server. Esta funcionalidad puede ser útil para aligerar temporalmente las tareas del servidor.

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> You can pause and resume logging using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command.
