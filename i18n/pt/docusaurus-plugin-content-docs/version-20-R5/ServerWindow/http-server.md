---
id: http-server
title: Página Servidor HTTP
---

The **HTTP Server** page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. O servidor SOAP gere a publicação de serviços Web. Esses servidores dependem do servidor HTTP interno de 4D Server.

![](../assets/en/Admin/server-admin-web-page.png)

A parte superior da página fornece informações sobre o estado atual do servidor HTTP do 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the HTTP server was last launched.
- **Uptime**: Time elapsed since last startup of the HTTP server.
- **Total HTTP hits**: Number of (low level) HTTP hits received by the HTTP server since it was started.

## Iniciar/parar o servidor HTTP

Esse botão alterna e pode ser usado para controlar a ativação do servidor HTTP do 4D Server.

- When the HTTP server state is "Started," the button is titled **Stop HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests.
- When the HTTP server state is "Stopped," the button is titled **Start HTTP Server**. Se você clicar nesse botão, o servidor HTTP de 4D Server será iniciado imediatamente; solicitações Web, REST e SOAP serão aceitas.

> Você deve ter uma licença adequada para poder iniciar o servidor HTTP.
>
> The HTTP server can also be launched automatically on application startup (Settings) or by programming.

## Informação Web

Esta área fornece informações específicas sobre o servidor Web de 4D Server.

- **Web requests**: Accepted or Rejected. Esta informação indica se o servidor Web está ativado. Como o servidor da Web está diretamente vinculado ao servidor HTTP, as solicitações Web são aceitas quando o servidor HTTP é iniciado e rejeitadas quando ele é interrompido.
- **Maximum connections**: Maximum number of Web connections allowed. Este valor depende da licença instalada na máquina do servidor.

## Informação SOAP

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **SOAP requests**: Accepted or Rejected. Esta informação indica se o servidor SOAP está ativado. Para que as solicitações SOAP sejam aceitas, o servidor HTTP deve ser iniciado e o servidor SOAP deve aceitar explicitamente as solicitações (consulte o botão Aceitar/Rejeitar).
- **Maximum connections**: Maximum number of SOAP connections allowed. Este valor depende da licença instalada na máquina do servidor.
- **Accept/Reject SOAP requests** button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the **Allow Web Services Requests** option on the "Web Services" page of the Settings (and vice versa). You can also use the [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) command to refuse new SOAP requests, however this does not modify the value of the **Allow Web Services Requests** option.

If you click on the **Accept SOAP requests** button and the HTTP server is stopped, 4D automatically starts it.

## Configuração servidor HTTP

This area provides information about the configuration parameters and operation of the HTTP server:

- **Auto-launched at startup**: parameter set via the Settings.
- **HTTP Server processes (used/total)**: number of HTTP processes created on the server (current number of processes / total of all processes created).
- **Cache memory**: size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Log file information**: name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).
