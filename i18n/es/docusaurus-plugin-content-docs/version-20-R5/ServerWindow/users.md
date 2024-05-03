---
id: users
title: Página Usuarios
---

The **Users** page lists the 4D users connected to the server.

![](../assets/en/Admin/server-users.png)

El botón "Usuarios" indica, entre paréntesis, el número total de usuarios conectados al servidor (este número no tiene en cuenta los filtros de visualización aplicados a la ventana). La página también contiene un área de búsqueda dinámica y botones de control. Puede modificar el orden de las columnas arrastrando y soltando sus áreas de encabezados.

También puede ordenar la lista de los valores de las columnas haciendo clic en su encabezado. Haga clic varias veces para especificar a su vez un orden ascendente/descendente.

![](../assets/en/Admin/server-users-sort.png)

## Lista de usuarios

Para cada usuario conectado al servidor, la lista ofrece la siguiente información:

- Sistema de la máquina cliente (macOS o Windows) como un icono.
- **4D User**: Name of the 4D user, or alias if set with the [`SET USER ALIAS`](https://doc.4d.com/4dv19/help/command/en/page1666.html) command on the user machine. Si las contraseñas no están activadas y no se ha definido ningún alias, todos los usuarios se denominan "Diseñador".
- **Machine name**: Name of the remote machine.
- **Session name**: Name of the session opened on the remote machine.
- **IP Address**: IP address of the remote machine.
- **Login date**: Date and time of the remote machine connection.
- **CPU Time**: CPU time consumed by this user since connecting.
- **Activity**: Ratio of time that 4D Server devotes to this user (dynamic display). "En reposo" si la máquina remota ha pasado al modo reposo (ver abajo).

### Gestión de usuarios dormidos

4D Server gestiona específicamente los casos en los que una máquina que ejecuta una aplicación remota 4D pasa al modo de reposo mientras su conexión con la máquina servidor sigue activa. En este caso, la aplicación remota 4D conectada notifica automáticamente a 4D Server su desconexión inminente. On the server, the connected user changes to a **Sleeping** activity status:

![](../assets/en/Admin/server-sleeping.png)

Este estado libera recursos en el servidor. Además, la aplicación 4D remota se reconecta automáticamente a 4D Server después de despertar del modo de suspensión.

Se soporta el siguiente escenario: un usuario remoto deja de trabajar durante un tiempo, por ejemplo durante una pausa para comer, pero mantiene abierta la conexión con el servidor. La máquina pasa al modo reposo. Cuando el usuario regresa, despierta la máquina y la aplicación 4D remota recupera automáticamente su conexión con el servidor, así como el contexto de la sesión.

> Una sesión remota durmiente es abandonada automáticamente por el servidor tras 48 horas de inactividad. You can modify this default timeout using the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv19/help/command/en/page642.html) command with the `Remote connection sleep timeout` selector.

## Área de búsqueda/filtrado

Esta función permite reducir el número de líneas que aparecen en la lista a las que corresponden al texto introducido en el área de búsqueda. El área indica las columnas en las que se realizará la búsqueda/filtrado. En la página Usuarios, serán las columnas Usuario 4D, Nombre de máquina y Nombre de sesión.

La lista se actualiza en tiempo real a medida que se introduce texto en el área. Es posible introducir más de un valor a buscar: separe los valores con punto y coma. The `OR` type operator is used in this case. Por ejemplo, si introduce "Juan;María;Pedro", sólo se conservarán las líneas con Juan O María O Pedro en las columnas objetivo.

## Botones de administración

Esta página incluye tres botones de control. Estos botones están activos si se selecciona al menos una línea. You can select several rows by holding down the **Shift** key for an adjacent selection or **Ctrl** (Windows) / **Command** (macOS) key for a non-adjacent selection.

### Enviar mensaje

Este botón permite enviar un mensaje a los usuarios 4D seleccionados en la ventana. Si no se selecciona ningún usuario, el botón no está activo. Al hacer clic en este botón, aparece un diálogo que le permite introducir el mensaje. El diálogo indica el número de usuarios que recibirán este mensaje:

![](../assets/en/Admin/server-message.png)

El mensaje se mostrará como una alerta en las máquinas remotas.

> You can perfom the same action for remote users with the [`SEND MESSAGE TO REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1632.html) command.

### Visualizar procesos

This button can be used to directly show the processes of the user(s) selected on the [**Processes** page](processes.md) of the window. Al hacer clic en este botón, 4D Server cambia a la página Procesos e introduce los nombres de usuario seleccionados en el área de búsqueda/filtrado.

### Desconectar

Este botón puede utilizarse para forzar al usuario(s) seleccionado a desconectarse. When you click on this button, a warning dialog box appears so that you can confirm or cancel this operation (hold down **Alt** key while clicking on the **Drop user** button to disconnect the selected user(s) directly without displaying the confirmation dialog box).

> You can perfom the same action for remote users with the [`DROP REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1633.html) command.
