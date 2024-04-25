---
id: application-server
title: Página Servidor de aplicación
---

La página Servidor de aplicaciones agrupa información sobre la aplicación de escritorio publicada por 4D Server y puede utilizarse para gestionar esta publicación.

![](../assets/en/Admin/server-admin-application-page.png)

La parte superior de la página ofrece información sobre el estado actual del servidor de aplicaciones de 4D Server.

- **State**: Started or Stopped.
- **Starting time**: Date and time the application server was launched. Esta fecha corresponde a la apertura del proyecto por parte de 4D Server.
- **Uptime**: Time elapsed since last opening of the project by the server.

## Aceptar/Rechazar nuevas conexiones

Este botón se activa y se puede utilizar para gestionar el acceso de nuevas máquinas cliente de escritorio al servidor de aplicaciones.

Por defecto, cuando se publica el proyecto:

- La etiqueta del botón es "Rechazar nuevas conexiones."
- Los nuevos clientes de escritorio pueden conectarse libremente (dentro de los límites de las conexiones permitidas por la licencia).
- El nombre del proyecto se publica en la caja de diálogo de conexión remota (si la opción "Publicar el nombre de la base al inicio en el diálogo de conexión" está marcada en las Preferencias).

If you click on the **Reject new connections** button:

- El título del botón cambia a "Aceptar nuevas conexiones."
- Ningún nuevo cliente puede entonces conectarse. Los clientes que intenten conectarse recibirán el siguiente mensaje:

![](../assets/en/Admin/server-error.png)

- El nombre del proyecto ya no aparece en el diálogo de conexión remota.
- Los clientes de escritorio que ya están conectados no se desconectan y pueden seguir trabajando con normalidad.

> You can perform the same action with the [`REJECT NEW REMOTE CONNECTIONS`](https://doc.4d.com/4dv19/help/command/en/page1635.html) command.

- If you click on the **Accept new connections button**, the application server returns to its default state.

This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. Si el administrador utiliza una conexión remota, puede estar seguro de ser el único que modifica los datos. También es posible utilizar esta función para preparar una operación de mantenimiento que requiera que no haya ninguna máquina cliente conectada.

## Información

### Configuración

Esta área ofrece información sobre el proyecto 4D publicado por el servidor: nombre y ubicación de los archivos de datos y de estructura y nombre del archivo de historial de la base. Puede hacer clic en el nombre del archivo de estructura o de datos para ver su ruta de acceso completa.

The **Mode** field indicates the current execution mode of the application: compiled or interpreted.

La parte inferior del área indica los parámetros de configuración del servidor (lanzados como servicio, puerto y dirección IP) y la activación del TLS para las conexiones cliente-servidor (no afecta a las conexiones SQL ni HTTP).

### Memoria

This area indicates the **Total cache memory** (parameter set in the settings) and the **Used cache memory** (dynamic allocation by 4D Server according to its needs).

### Conexiones aplicación servidor

- **Maximum**: maximum number of simultaneous client connections allowed for the application server. Este valor depende de la licencia instalada en el equipo servidor.
- **Used**: actual number of connections currently being used.
