---
id: application-server
title: Página Servidor de aplicación
---


The Application Server page groups together information about the desktop application published by 4D Server and can be used to manage this publication.

![](../assets/en/Admin/server-admin-application-page.png)


La parte superior de la página ofrece información sobre el estado actual del servidor de aplicaciones de 4D Server.

- **Estado**: Iniciado o Detenido.
- **Starting time**: Date and time the application server was launched. Esta fecha corresponde a la apertura del proyecto por parte de 4D Server.
- **Uptime**: Time elapsed since last opening of the project by the server.

## Aceptar/Rechazar nuevas conexiones

This button toggles and can be used to manage the access of new desktop client machines to the application server.

Por defecto, cuando se publica el proyecto:
- La etiqueta del botón es "Rechazar nuevas conexiones."
- New desktop clients can connect freely (within the limit of the connections permitted by the license).
- The project name is published in the remote connection dialog box (if the "At Startup Publish Database Name in the Connection Dialog" option is checked in the Preferences).

If you click on the **Reject new connections** button:
- El título del botón cambia a "Aceptar nuevas conexiones."
- Ningún nuevo cliente puede entonces conectarse. Los clientes que intenten conectarse recibirán el siguiente mensaje:

![](../assets/en/Admin/server-error.png)

- El nombre del proyecto ya no aparece en el diálogo de conexión remota.
- Desktop clients that are already connected are not disconnected and can continue to work normally.

> You can perform the same action with the [`REJECT NEW REMOTE CONNECTIONS`](https://doc.4d.com/4dv19/help/command/en/page1635.html) command.

- If you click on the **Accept new connections button**, the application server returns to its default state.

This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. Si el administrador utiliza una conexión remota, puede estar seguro de ser el único que modifica los datos. It is also possible to use this function in preparation of a maintenance operation which requires that there be no desktop client machine connected.

## Información

### Configuración

This area provides information about the 4D project published by the server: name and location of data and structure files and name of database log file. You can click on the structure or data file name in order to view its complete pathname.

The **Mode** field indicates the current execution mode of the application: compiled or interpreted.

The lower part of the area indicates the server configuration parameters (launched as service, port and IP address) and the enabling of TLS for client-server connections (does not concern SQL nor HTTP connections).

### Memoria

This area indicates the **Total cache memory** (parameter set in the settings) and the **Used cache memory** (dynamic allocation by 4D Server according to its needs).


### Conexiones aplicación servidor

- **Maximum**: maximum number of simultaneous client connections allowed for the application server. Este valor depende de la licencia instalada en el equipo servidor.
- **Used**: actual number of connections currently being used.

