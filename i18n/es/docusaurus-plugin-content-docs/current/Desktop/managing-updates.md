---
id: managing-updates
title: Managing Updates
---

En principio, la actualización de las aplicaciones servidor o de las aplicaciones monopuesto fusionadas requiere la intervención del usuario (o la programación de rutinas de sistema personalizadas): cada vez que esté disponible una nueva versión de la aplicación fusionada, hay que salir de la aplicación en producción y sustituir manualmente los archivos antiguos por los nuevos; a continuación, reiniciar la aplicación y seleccionar el archivo de datos actual.

Puede automatizar este procedimiento en gran medida utilizando los siguientes comandos del lenguaje: [`SET UPDATE FOLDER`](../commands/set-update-folder), [`RESTART 4D`](../commands/restart-4d), y también [`Last update log path`](../commands/last-update-log-path) para operaciones de monitoreo. La idea es implementar una función en su aplicación 4D que active la secuencia de actualización automática descrita a continuación. Puede ser un comando de menú o un proceso que se ejecuta en segundo plano y comprueba a intervalos regulares la presencia de un archivo en un servidor.

> You also have XML keys to elevate installation privileges so that you can use protected files under Windows (see the [AutoUpdate XML keys](../BuildApplication/auto-update.md)).

Este es el escenario para actualizar un servidor o una aplicación unipersonal fusionada:

1. Se transfiere, por ejemplo utilizando un servidor HTTP, la nueva versión de la aplicación servidor o la aplicación monopuesto fusionada a la máquina en producción.
2. In the application in production, you call the [`SET UPDATE FOLDER`](../commands/set-update-folder) command: this command designates the location of the folder where the "pending" update of the current application is found. Opcionalmente, puede copiar en esta carpeta los elementos personalizados de la versión en producción (archivos usuario).
3. In the application in production, call the [`RESTART 4D`](../commands/restart-4d) command: this command automatically triggers execution of a utility program named "updater" that exits the current application, replaces it using the "pending" update if one is specified, and restarts the application with the current data file. La versión anterior ha sido renombrada.

> Esta secuencia es compatible con las aplicaciones de servidor de Windows [ejecutadas como servicio](../server/service.md).

### Historial de actualización

El procedimiento de instalación genera un archivo de registro en el que se detallan las operaciones de actualización de las aplicaciones fusionadas (cliente, servidor o monopuesto) en los equipos de destino. Este archivo es útil para analizar cualquier error que se produzca durante el proceso de instalación.

El historial de actualización se denomina `YYYY-MM-DD_HH-MM-SS_log_X.txt`, por ejemplo, `2021-08-25_14-23-00_log_1.txt` para un archivo creado el 25 de agosto de 2021 a las 14:23.

Este archivo se crea en la carpeta de la aplicación "Updater", dentro de la carpeta de usuario del sistema. Puede encontrar la ubicación de este archivo en cualquier momento utilizando el comando [`Last update log path`](../commands/last-update-log-path).

