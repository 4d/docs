---
id: http-server
title: Página Servidor HTTP
---


The **HTTP Server** page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. O servidor SOAP gere a publicação de serviços Web. Esses servidores dependem do servidor HTTP interno de 4D Server.

![](../assets/en/Admin/server-admin-web-page.png)


The upper part of the page provides information about the current status of the HTTP server of 4D Server.

- **Estado**: Iniciado ou Parado
- **Starting time**: Date and time the HTTP server was last launched.
- **Tempo de atividade**: tempo decorrido desde a última inicialização do servidor HTTP.
- **Total HTTP hits**: Number of (low level) HTTP hits received by the HTTP server since it was started.


## Iniciar/parar o servidor HTTP

This button toggles and can be used to control the activation of the 4D Server HTTP server.

- When the HTTP server state is "Started," the button is titled **Stop HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests.
- When the HTTP server state is "Stopped," the button is titled **Start HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately started; Web, REST, and SOAP requests are accepted.

> Você deve ter uma licença adequada para poder iniciar o servidor HTTP.
> 
> The HTTP server can also be launched automatically on application startup (Settings) or by programming.

## Informação Web

Esta área fornece informações específicas sobre o servidor Web de 4D Server.

- **Pedidos Web**: aceites ou rejeitados. Esta informação indica se o servidor Web está ativado. Since the Web server is directly linked to the HTTP server, Web requests are accepted when the HTTP server is started and rejected when it is stopped.
- **Maximum connections**: Maximum number of Web connections allowed. Este valor depende da licença instalada na máquina do servidor.

## Informação SOAP

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **Pedidos SOAP**: aceites ou rejeitados. Esta informação indica se o servidor SOAP está ativado. In order for SOAP requests to be accepted, the HTTP server must be started and the SOAP server must explicitly accept the requests (see the Accept/Reject button).
- **Máximo de ligações**: Número máximo de ligações SOAP permitidas. Este valor depende da licença instalada na máquina do servidor.
- **Accept/Reject SOAP requests** button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the **Allow Web Services Requests** option on the "Web Services" page of the Settings (and vice versa). You can also use the [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) command to refuse new SOAP requests, however this does not modify the value of the **Allow Web Services Requests** option.

If you click on the **Accept SOAP requests** button and the HTTP server is stopped, 4D automatically starts it.

## Configuração servidor HTTP

This area provides information about the configuration parameters and operation of the HTTP server:

- **Auto-launched at startup**: parameter set via the Settings.
- **HTTP Server processes (used/total)**: number of HTTP processes created on the server (current number of processes / total of all processes created).
- **Cache memory**: size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Log file information**: name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).

