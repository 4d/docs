---
id: debugging-remote
title: Depuración desde máquinas remotas
---

## Generalidades

Cuando una base de datos 4D se ejecuta en 4D Server en modo interpretado, puede depurar el código 4D que se ejecuta en el servidor desde un cliente 4D remoto conectado al proyecto. Sólo tiene que adjuntar el depurador a una máquina remota específica y la ejecución del código puede ser monitoreada en el depurador directamente en la máquina remota.

En una máquina remota, la [ventana de depuración](debugger.md) muestra un icono de servidor específico y un color de fondo azul para indicar que está depurando el código servidor:

![debugger-window-remote](../assets/en/Debugging/debuggerWindowRemote.png)

Esta funcionalidad es especialmente útil cuando 4D Server se ejecuta en modo sin interfaz (ver [Command Line Interface](../Admin/cli.md)), o cuando el acceso a la máquina del servidor no es fácil.


## Depuradores adjuntos

Sólo un depurador puede depurar una aplicación 4D Server en un momento dado. Se llama el **depurador asociado**. El depurador asociado puede ser:

* el depurador local de 4D Server (por defecto) - si el servidor no está ejecutando sin interfaz.
* el depurador de un cliente 4D remoto - si la sesión remota tiene acceso al modo Diseño.

El depurador asociado es llamado cada vez que se encuentra un 4D Server:
* un punto de ruptura
* un comando `TRACE`
* un comando de captura
* un error

Tenga en cuenta que los mensajes de error se envían a la máquina depuradora asociada. Esto significa que en el caso de un depurador remoto, los mensajes de error del servidor se muestran en el cliente 4D remoto.

Note que:
* El código ejecutado en el método `On Server Startup Database` no se puede depurar de forma remota. Sólo se puede depurar del lado del servidor
* Si no hay un depurador asociado, el código en ejecución no se detiene con los comandos de depuración


## Asociar al depurador

Por defecto, cuando se inicia una aplicación interpretada:

* si 4D Server no se está ejecutando sin interfaz, el depurador está conectado al servidor,
* si 4D Server se ejecuta sin interfaz, no se asocia ningún depurador.

Puede asociar el depurador a cualquier cliente 4D remoto que pueda conectarse a la aplicación 4D Server.

> La sesión usuario del cliente 4D remoto debe tener acceso al entorno de diseño de la base de datos.

Para asociar el depurador a un cliente 4D remoto:

1. En la barra de menús de 4D Server, seleccione **Editar** > **Separar depurador** para que el depurador esté disponible para las máquinas remotas (este paso es inútil si 4D Server está funcionando sin interfaz).
2. En un cliente 4D remoto conectado al servidor, seleccione **Ejecutar** > **Adjuntar depurador remoto**

Si se acepta el archivo adjunto (ver [Solicitudes de archivo adjunto rechazadas](#rejected-attachment-requests)), el comando de menú se convierte en **Desconectar depurador remoto**.

El depurador se conecta entonces al cliente 4D remoto:
* hasta el final de la sesión usuario
* hasta que se seleccione `Detach Remote Debugger`

Para volver a conectar el depurador al servidor:

1. En el cliente 4D remoto que tiene el depurador conectado, seleccione **Ejecutar** > **Separar depurador remoto**.
2. En la barra de menú de 4D Server, seleccione **Editar** > **Adjuntar depurador**.

> When the debugger is attached to the server (default), all server processes are automatically executed in cooperative mode to enable debugging. Esto puede tener un impacto significativo en el rendimiento. When you don't need to debug on the server machine, it is recommended to detach the debugger and attach it to a remote machine if necessary.



## Adjuntar el depurador al inicio

4D allows you to automatically attach the debugger to a remote 4D client or the server at startup:

* On the server (if not headless), this option is named **Attach Debugger At Startup**. When the server is started, it automatically attaches the debugger (default).

> **Warning**: If this option is selected for a server which is subsequently launched in headless mode, the debugger won't be available for this server.

* On a remote 4D client, this option is named **Attach Remote Debugger At Startup**. When selected, the remote 4D client will automatically try to attach the remote debugger at each subsequent connection to the same 4D Server database. If the attachment is accepted (see [Rejected attachment requests](#rejected-attachment-requests)), the remote debugger is automatically attached to the remote 4D client and the **Detach Remote Debugger option is displayed**.

> This setting is applied per project and is stored locally in the [`.4DPreferences`](Project/architecture.md#userpreferencesusername) file.

## Peticiones de adjuntos rechazadas

While the debugger is already attached to a remote 4D client or to 4D Server, no other machine can attach the debugger.

If a machine tries to attach the debugger while it is already attached, the attachment is rejected and a dialog box appears:

![attach-debugger-dialog](../assets/en/Debugging/attach-debugger-dialog.png)

![attach-debugger-dialog-2](../assets/en/Debugging/attach-debugger-dialog-2.png)

Adjuntar el depurador en este caso requiere que:

* the attached debugger is detached from the server or from the remote 4D client using respectively the **Detach debugger** or **Detach remote debugger** menu command,
* se cierra la sesión del cliente 4D remoto adjunto.
