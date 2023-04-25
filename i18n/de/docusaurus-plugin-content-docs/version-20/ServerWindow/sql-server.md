---
id: sql-server
title: SQL Server Page
---


The **SQL Server** page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server.

![](../assets/en/Admin/server-admin-sql-page.png)


The upper part of the page provides information about the current status of the SQL server of 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the SQL server was last launched.
- **Uptime**: Time elapsed since last startup of the SQL server.

## Start / Stop SQL Server

This button toggles and can be used to control the activation of the 4D Server SQL server.

- When the SQL server state is "Started," the button is titled **Stop SQL Server**. If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port.
- When the SQL server state is "Stopped," the button is titled **Start SQL Server**. If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server.

> The SQL server can also be launched automatically on application startup (option in the Settings) or by programming.

## Information

### Configuration

This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections).

These parameters can be modified via the 4D Settings.

### Connections

Number of SQL connections currently open on 4D Server.

### Maximum Connections

Maximum number of simultaneous SQL connections allowed. This value depends on the license installed on the server machine.
