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

Un *cliente inactivo* se refiere a una aplicación 4D remota en una máquina que ha pasado a [modo inactivo](../ServerWindow/users.md#managing-sleeping-users) mientras la conexión a la máquina servidor seguía activa.

:::

Cuando elige una de estas opciones, aparece la siguiente ventana, lo que indica el número de clientes que todavía están conectados:

![](../assets/en/server/exit-3.png)

En cada equipo cliente 4D, aparece la siguiente ventana con un mensaje predeterminado:

![](../assets/en/server/exit-4.png)

Si introduce un mensaje personalizado en el cuadro de diálogo de apagado de 4D Server, este se mostrará en cada máquina cliente en lugar del mensaje por defecto. Por ejemplo:

![](../assets/en/server/exit-5.png)

- **Desconectar todos los clientes y salir**

El servidor termina todos los procesos y todas las conexiones y se cierra después de unos segundos.

:::note Notas

- En todos los casos, si no hay ningún cliente conectado al servidor en el momento de validar la ventana de apagado, 4D Server se cierra inmediatamente.
- Si hace clic en **Cancelar** en la ventana de apagado de 4D Server, el proceso de apagado del servidor se cancela.
- Puede cerrar el proyecto (y desconectar los clientes) sin salir de 4D Server utilizando el comando de menú **Cerrar el proyecto...**.

:::