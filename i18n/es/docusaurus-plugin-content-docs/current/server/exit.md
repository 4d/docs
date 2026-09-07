---
id: exit
title: Salir de 4D Server
---

Para apagar el servidor:

1. Seleccione el comando **Salir** en el menú **Archivo** de 4D Server (Windows) o en el menú **4D Server** (macOS).

La ventana siguiente se muestra en la máquina servidor:

![](../assets/en/server/exit-1.png)

2. Introduzca el número de minutos tras los cuales desea que se apague el servidor, o seleccione una opción de desconexión de los clientes.

En cuanto haga esto, ningún cliente nuevo podrá conectarse al servidor.

Las siguientes opciones están disponibles:

- **Desconectar el servidor en XX min.**

Transcurrido el tiempo especificado, el servidor se cierra y todos los usuarios quedan desconectados, incluidos los clientes que se encuentren en modo de suspensión. La siguiente ventana aparece en el servidor:

![](../assets/en/server/exit-2.png)

Aparecerá una ventana idéntica en cada máquina 4D remota. Esta ventana se repite o se actualiza en cada ordenador cliente cada 20 segundos aproximadamente, con el fin de pedirles que cierren la aplicación. Cuando se alcanza el límite de tiempo, el servidor se cierra incluso si aún hay máquinas cliente conectadas.

- **Espere a que todos los clientes se desconecten.**

El servidor solo se cerrará una vez que todos los clientes, incluidos los que estén en modo de suspensión, se hayan desconectado. Esta opción podría ser inadecuada para operaciones de mantenimiento durante el almuerzo, por ejemplo, ya que es probable que haya clientes en [modo inactivo](../ServerWindow/users.md#managing-sleeping-users).

- **Espere a que los clientes activos se desconecten. (Ignorar a los clientes inactivos)**

El servidor solo se cerrará después de que todos los clientes activos se hayan desconectado (en otras palabras, todas las máquinas cliente que no están en [modo inactivo](../ServerWindow/users.md#managing-sleeping-users)). Con esta opción, los clientes que se encuentren en modo inactivo no se consideran conectados. Utilice esta opción si desea realizar operaciones de mantenimiento durante el almuerzo, por ejemplo. Cuando se utiliza esta opción, cualquier cliente que se encuentre en modo inactivo experimentará un error de conexión al reactivarse.

:::note

A *sleeping client* refers to a remote 4D application on a machine that has switched to [sleep mode](../ServerWindow/users.md#managing-sleeping-users) while the connection to the server machine was still active.

:::

When you choose one of these options, the following window appears, which indicates the number of clients that are still connected:

![](../assets/en/server/exit-3.png)

On each 4D client machine, the following window appears displaying a default message:

![](../assets/en/server/exit-4.png)

If you entered a custom message in the 4D Server shutdown dialog box, it is displayed instead of the default message on each client machine. Por ejemplo:

![](../assets/en/server/exit-5.png)

- **Disconnect all clients and quit**

The server ends all processes and all connections and quits after a few seconds.

:::note Notas

- In all cases, if no client is connected to the server when the shutting down window is validated, 4D Server quits immediately.
- If you click **Cancel** in the 4D Server shutdown window, the process of shutting down the server is canceled.
- You can close the database (and disconnect the clients) without quitting the 4D Server using the **Close project...** menu command.

:::