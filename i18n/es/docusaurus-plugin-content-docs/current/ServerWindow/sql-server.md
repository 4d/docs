---
id: sql-server
title: Página servidor SQL
---


La página **Servidor SQL** agrupa información sobre el servidor SQL integrado de 4D Server. También incluye un botón que puede utilizarse para controlar la activación del servidor.

![](../assets/en/Admin/server-admin-sql-page.png)


La parte superior de la página provee información sobre el estado actual del servidor SQL de 4D Server.

- **Estado**: Iniciado o Detenido
- **Hora de inicio**: fecha y hora en que el servidor SQL se inició por última vez.
- **Duración del funcionamiento**: tiempo transcurrido desde el último arranque del servidor SQL.

## Iniciar/detener el servidor SQL

This button toggles and can be used to control the activation of the 4D Server SQL server.

- When the SQL server state is "Started," the button is titled **Stop SQL Server**. If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port.
- When the SQL server state is "Stopped," the button is titled **Start SQL Server**. If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server.

> The SQL server can also be launched automatically on application startup (option in the Settings) or by programming.

## Información

### Configuración

This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections).

Estos parámetros pueden modificarse a través de las Preferencias de 4D.

### Conecciones

Número de conexiones SQL abiertas actualmente en 4D Server.

### Conexiones máximas

Número máximo de conexiones SQL simultáneas autorizadas. Este valor depende de la licencia instalada en el equipo servidor.
