---
id: sql-server
title: Página servidor SQL
---

La página **Servidor SQL** agrupa información sobre el servidor SQL integrado de 4D Server. It also includes a button that can be used to control the activation of the server.

![](../assets/en/Admin/server-admin-sql-page.png)

The upper part of the page provides information about the current status of the SQL server of 4D Server.

- **Estado**: Iniciado o Detenido
- **Hora de inicio**: fecha y hora en que el servidor SQL se inició por última vez.
- **Duración del funcionamiento**: tiempo transcurrido desde el último arranque del servidor SQL.

## Iniciar / Parar o SQL Server

Este botão alterna e pode ser usado para controlar a ativação do servidor SQL de 4D Server.

- Cuando el estado del servidor SQL es "Iniciado", el botón se etiqueta **Detener el servidor SQL**. If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port.
- Cuando el estado del servidor SQL es "Detenido", el botón se etiqueta **Iniciar el servidor SQL**. If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server.

> The SQL server can also be launched automatically on application startup (option in the Settings) or by programming.

## Informação

### Configuração

This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections).

Estes parâmetros podem ser modificados através das Preferências 4D.

### Conexões

Número de ligações SQL atualmente abertas no 4D Server.

### Ligações máximas

Número máximo de ligações SQL simultâneas permitidas. Este valor depende da licença instalada na máquina do servidor.
