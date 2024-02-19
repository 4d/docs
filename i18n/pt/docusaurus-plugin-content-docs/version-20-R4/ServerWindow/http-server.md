---
id: http-server
title: HTTP Server Page
---


A página **HTTP Server** agrupa as informações sobre as operações do servidor Web e do servidor SOAP de 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. O servidor SOAP gere a publicação de serviços Web. Esses servidores dependem do servidor HTTP interno de 4D Server.

![](../assets/en/Admin/server-admin-web-page.png)


A parte superior da página fornece informações sobre o estado atual do servidor HTTP do 4D Server.

- **Estado**: Iniciado ou Parado
- **Hora de início**: data e hora em que o servidor HTTP foi iniciado pela última vez.
- **Tempo de atividade**: tempo decorrido desde a última inicialização do servidor HTTP.
- **Total de hits HTTP**: Número de hits (em baixo nível) HTTP recebidos pelo servidor HTTP desde que foi iniciado.


## Iniciar/parar o servidor HTTP

Esse botão alterna e pode ser usado para controlar a ativação do servidor HTTP do 4D Server.

- When the HTTP server state is "Started," the button is titled **Stop HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests.
- Quando o estado do servidor HTTP é "interrompido", o botão é intitulado **Iniciar o servidor HTTP**. Se você clicar nesse botão, o servidor HTTP de 4D Server será iniciado imediatamente; solicitações Web, REST e SOAP serão aceitas.

> Você deve ter uma licença adequada para poder iniciar o servidor HTTP.
> 
> The HTTP server can also be launched automatically on application startup (Settings) or by programming.

## Informação Web

Esta área fornece informações específicas sobre o servidor Web de 4D Server.

- **Pedidos Web**: aceites ou rejeitados. Esta informação indica se o servidor Web está ativado. Como o servidor da Web está diretamente vinculado ao servidor HTTP, as solicitações Web são aceitas quando o servidor HTTP é iniciado e rejeitadas quando ele é interrompido.
- **Maximum connections**: Maximum number of Web connections allowed. Este valor depende da licença instalada na máquina do servidor.

## Informação SOAP

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **Pedidos SOAP**: aceites ou rejeitados. Esta informação indica se o servidor SOAP está ativado. Para que as solicitações SOAP sejam aceitas, o servidor HTTP deve ser iniciado e o servidor SOAP deve aceitar explicitamente as solicitações (consulte o botão Aceitar/Rejeitar).
- **Máximo de ligações**: Número máximo de ligações SOAP permitidas. Este valor depende da licença instalada na máquina do servidor.
- **Accept/Reject SOAP requests** button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the **Allow Web Services Requests** option on the "Web Services" page of the Settings (and vice versa). You can also use the [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) command to refuse new SOAP requests, however this does not modify the value of the **Allow Web Services Requests** option.

Se você clicar no botão **Aceitar solicitações SOAP** e o servidor HTTP for interrompido, o 4D automaticamente o inicia.

## Configuração servidor HTTP

This area provides information about the configuration parameters and operation of the HTTP server:

- **Auto-launched at startup**: parameter set via the Settings.
- **Processos servidor HTTP (usados/total)**: número de processos HTTP criados no servidor (número atual de processos / total de todos os processos criados).
- **Cache memory**: size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Log file information**: name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).

