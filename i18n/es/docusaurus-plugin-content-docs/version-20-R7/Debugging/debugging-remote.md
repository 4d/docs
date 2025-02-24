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

- el depurador local de 4D Server (por defecto) - si el servidor no está ejecutando sin interfaz.
- el depurador de un cliente 4D remoto - si la sesión remota tiene acceso al modo Diseño.
- el [depurador Qodly](../WebServer/qodly-studio.md#using-qodly-debugger-on-4d-server) en el servidor 4D - si el servidor permite el acceso a Qodly Studio.

El depurador asociado es llamado cada vez que se encuentra un 4D Server:

- un punto de ruptura
- a `TRACE` command
- un comando de captura
- un error

Tenga en cuenta que los mensajes de error se envían a la máquina depuradora asociada. Esto significa que en el caso de un depurador remoto, los mensajes de error del servidor se muestran en el cliente 4D remoto.

Note que:

- The code executed in the `On Server Startup Database` Method cannot be debugged remotely. Sólo se puede depurar del lado del servidor
- Si no hay un depurador asociado, el código en ejecución no se detiene con los comandos de depuración

## Asociar al depurador

Por defecto, cuando se inicia una aplicación interpretada:

- si 4D Server no se está ejecutando sin interfaz, el depurador está conectado al servidor,
- si 4D Server se ejecuta sin interfaz, no se asocia ningún depurador.

Puede asociar el depurador a cualquier cliente 4D remoto que pueda conectarse a la aplicación 4D Server.

> La sesión usuario del cliente 4D remoto debe tener acceso al entorno de diseño de la base de datos.

Para asociar el depurador a un cliente 4D remoto:

1. In the 4D Server menu bar, select **Edit** > **Detach Debugger** so that the debugger becomes available to remote machines (this step is useless if the 4D Server is running headless).
2. In a remote 4D client connected to the server, select **Run** > **Attach Remote Debugger**

If the attachment is accepted (see [Rejected attachment requests](#rejected-attachment-requests)), the menu command becomes **Detach Remote Debugger**.

El depurador se conecta entonces al cliente 4D remoto:

- hasta el final de la sesión usuario
- until you select `Detach Remote Debugger`

Para volver a conectar el depurador al servidor:

1. On the remote 4D client that has the debugger attached, select **Run** > **Detach Remote Debugger**.
2. In the 4D Server menu bar, select **Edit** > **Attach debugger**.

> Cuando el depurador está conectado al servidor (por defecto), todos los procesos del servidor se ejecutan automáticamente en modo cooperativo para permitir la depuración. Esto puede tener un impacto significativo en el rendimiento. Cuando no necesite depurar en la máquina del servidor, se recomienda separar el depurador y adjuntarlo a una máquina remota si es necesario.

## Adjuntar el depurador al inicio

4D le permite adjuntar automáticamente el depurador a un cliente 4D remoto o al servidor al inicio:

- On the server (if not headless), this option is named **Attach Debugger At Startup**. Cuando el servidor se inicia, adjunta automáticamente el depurador (por defecto).

> **Warning**: If this option is selected for a server which is subsequently launched in headless mode, the debugger won't be available for this server.

- On a remote 4D client, this option is named **Attach Remote Debugger At Startup**. Cuando se selecciona, el cliente 4D remoto intentará automáticamente adjuntar el depurador remoto en cada conexión posterior a la misma base de datos 4D Server. If the attachment is accepted (see [Rejected attachment requests](#rejected-attachment-requests)), the remote debugger is automatically attached to the remote 4D client and the **Detach Remote Debugger option is displayed**.

> This setting is applied per project and is stored locally in the [`.4DPreferences`](Project/architecture.md#userpreferencesusername) file.

## Peticiones de adjuntos rechazadas

Mientras el depurador esté conectado a un cliente 4D remoto o a 4D Server, ninguna otra máquina puede conectar el depurador.

Si una máquina intenta conectar el depurador cuando ya está conectado, se rechaza la conexión y aparece una caja de diálogo:

![attach-debugger-dialog](../assets/en/Debugging/attach-debugger-dialog.png)

![attach-debugger-dialog-2](../assets/en/Debugging/attach-debugger-dialog-2.png)

Adjuntar el depurador en este caso requiere que:

- the attached debugger is detached from the server or from the remote 4D client using respectively the **Detach debugger** or **Detach remote debugger** menu command,
- se cierra la sesión del cliente 4D remoto adjunto.
