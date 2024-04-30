---
id: maintenance
title: Página Mantenimiento
---

The **Maintenance** page of the 4D Server Administration window provides information concerning the current operation of the application. También ofrece acceso a las funciones básicas de mantenimiento:

![](../assets/en/Admin/server-maintenance.png)

## Última verificación/compactación

These areas indicate the date, time and status of the last [data verification](MSC/verify.md) and [compacting operation](MSC/compact.md) carried out on the database.

### Verificar registros e índices

Este botón permite lanzar directamente la operación de verificación, sin interrumpir el servidor. Tenga en cuenta que el servidor puede ralentizarse notablemente durante la operación.

Se verifican todos los registros y todos los índices de la base de datos. If you want to be able to target the verification or have additional options available, you will need to use the [Maintenance and Security Center](MSC/overview.md) (MSC).

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.

### Compactar los datos...

Este botón puede utilizarse para lanzar directamente una operación de compactación de datos. Esta operación requiere detener el servidor: al hacer clic en este botón, aparece la caja de diálogo de cierre de 4D Server para que pueda elegir cómo interrumpir la operación:

![](../assets/en/Admin/server-shut.png)

Tras la interrupción efectiva del servicio de la aplicación, 4D Server efectúa una operación estándar de compactación de los datos de la base. If you want to have additional options available, you will need to use the [MSC](MSC/overview.md).

Una vez finalizada la compactación, 4D Server relanza automáticamente la aplicación. A continuación, los usuarios de 4D pueden volver a conectarse.

> Si la solicitud de compactación se realizó desde una máquina remota 4D, esta máquina es reconectada automáticamente por 4D Server.

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.

## Tiempo de funcionamiento

Esta área indica la duración de la ejecución de la aplicación 4D Server desde la última vez que se inició (días, horas y minutos).

### Reiniciar el servidor...

Este botón permite cerrar inmediatamente el proyecto y reiniciarlo. Cuando presione este botón, aparecerá la caja de diálogo de cierre de 4D Server para que pueda elegir cómo interrumpir la operación. Tras la validación, 4D Server cierra automáticamente el proyecto y lo vuelve a abrir. A continuación, los usuarios de 4D pueden volver a conectarse.

> Si la solicitud de reinicio se realizó desde una máquina 4D remota, esta máquina es reconectada automáticamente por 4D Server.

## Última copia de seguridad

This area indicates the date and time of the [last backup](MSC/backup.md) of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the **Scheduler** page of the structure settings.

- **Last backup**: date and time of last backup.
- **Next backup**: date and time of next scheduled backup.
- **Needed space**: estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file.
- **Available space**: space available on the backup volume.

The **Start backup** button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the **Settings...** button. Durante una copia de seguridad en el servidor, los equipos cliente quedan "bloqueados" (pero no desconectados) y no es posible que se conecten nuevos clientes.

## Historial de peticiones y depuración

Esta área indica la duración de registro de los archivos de historial (cuando se activan) y le permite controlar su activación.

Refer to the [**Description of log files**](Debugging/debugLogFiles.md) section for details on log files.

### Iniciar/Detener Solicitud y Depurar Registros

The **Start Request and Debug Logs** button starts log files. Dado que esto puede deteriorar notablemente el rendimiento del servidor, debe reservarse para la fase de desarrollo de la aplicación.

> Este botón sólo registra las operaciones que se ejecutan en el servidor.

When the logs have been activated, the button title changes to **Stop Request and Debug Logs**, so that you can stop recording requests at any time. Preste atención al hecho de que reiniciar el registro después de detenerlo "borra" el archivo anterior.

### Ver el informe

The **View Report** button (named **Download report** if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file.

### Cargar archivo de configuración de logs

This button allows you to load a special server [log configuration file](Debugging/debugLogFiles.md#using-a-log-configuration-file) (`.json` file). Este archivo puede ser facilitado por los servicios técnicos de 4D para el seguimiento y estudio de casos concretos.

### Detener el registro

Este botón suspende todas las operaciones de registro iniciadas en el servidor. Esta funcionalidad puede ser útil para aligerar temporalmente las tareas del servidor.

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> You can pause and resume logging using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command.
