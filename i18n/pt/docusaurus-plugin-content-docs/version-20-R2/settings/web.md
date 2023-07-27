---
id: web
title: Página da Web
---

Using the tabs on the **Web** page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see [Web server](../WebServer/webServer.md). For more information about 4D Web services, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html) chapter.

## Configuração

### Informações de publicação

#### Iniciar o servidor Web no arranque

Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the [Web server administration](../WebServer/webServerAdmin.md#starting-the-4d-web-server) section.

#### Ativar HTTP

Indicates whether or not the Web server will accept non-secure connections. Ver [Ativar HTTP](../WebServer/webServerConfig.md#enable-http).


#### Porta HTTP

Número da porta IP (TCP) de escuta para HTTP. Ver [Porta HTTP](../WebServer/webServerConfig.md#http-port).

#### Endereço IP

Endereço IP em que o servidor web 4D vai receber solicitações HTTP (4D local e 4D Server). See [IP Address to listen](../WebServer/webServerConfig.md#ip-address-to-listen).


#### Ativar HTTPS

Indicates whether or not the Web server will accept secure connections. See [Enable HTTPS](../WebServer/webServerConfig.md#enable-https).


#### Porta HTTPS

Allows you to modify the TCP/IP port number used by the Web server for secured HTTP connections over TLS (HTTPS protocol). See [HTTPS Port](../WebServer/webServerConfig.md#https-port).

#### Allow database Access through 4DSYNC URLs

*Compatibility Note*: This option is [deprecated](../WebServer/webServerConfig.md#deprecated-settings). For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests.


### Caminhos

#### Raiz HTML predefinida

Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. See [Root Folder](../WebServer/webServerConfig.md#root-folder).

#### Página inicial predefinida

Designate a default home page for the Web server. See [Default Home page](../WebServer/webServerConfig.md#default-home-page).




## Options (I)

### Cache


#### Usar o cache Web 4D

Ativar o cache da página Web. Ver [Cache](../WebServer/webServerConfig.md#cache).

#### Tamanho da cache das Páginas

Define o tamanho da cache. Ver [Cache](../WebServer/webServerConfig.md#cache).


#### Limpar cache

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache). At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache). The cache is then immediately cleared.

> Também pode utilizar o URL especial [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Processo Web

This area allows you to configure how the web server will handle user sessions and their associated processes.

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Sessões escaláveis (sessões multi-processo)

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).


#### Sem sessões

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Successive requests from web clients are always independent and no context is maintained on the server.

In this mode, you can configure additional web server setttings:

-   [Processos Web em simultâneo máximo](#maximum-concurrent-web-processes)
-   [Reutilização dos contextos temporários (4D em modo remoto)](#reuse-temporary-contexts)
-   [Use preemptive processes](#use-preemptive-web-processes)

#### Sessões herdadas (sessões de processo único)

*Compatibility Note:* This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### Processos Web em simultâneo máximo

Não disponível com [sessões expansíveis](../WebServer/sessions.md).

Limite estritamente superior de processos Web em simultâneo. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).


#### Reuse Temporary Contexts

Não disponível com [sessões expansíveis](../WebServer/sessions.md).

Allows you to optimize the operation of the 4D Web server in remote mode. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Use preemptive processes

Não disponível com [sessões expansíveis](../WebServer/sessions.md).

Enables preemptive web processes in your compiled applications. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

> This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  See [Enabling the preemptive mode for the web server](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).


#### Inactive Process Timeout

Não disponível com [sessões expansíveis](../WebServer/sessions.md).

Allows you to set the maximum timeout before closing for inactive Web processes on the server. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).



### Palavras-passe Web

Set the authentication system that you want to apply to your Web server. São propostas três opções:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the *Web Development* documentation.


## Opções (II)

### Conversão texto

#### Enviar diretamente caracteres expandidos

Ver [Propriedades obsoletas](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define the set of characters to be used by the 4D Web server. Ver [Conjunto de caracteres](../WebServer/webServerConfig.md#character-set).

### Ligações Keep-Alive

Ver [Propriedades obsoletas](../WebServer/webServerConfig.md#keep-alive-connections).

### Parâmetros CORS

#### Ativar CORS

Enables Cross-origin resource sharing (CORS) service. Ver [Ativar CORS](../WebServer/webServerConfig.md#enable-cors-service).

#### Nomes de domínio/Métodos HTTP permitidos

List of allowed hosts and methods for the CORS service. Ver [Parâmetros CORS](../WebServer/webServerConfig.md#cors-settings).



## Registo (tipo)


### Formato do histórico

Starts or stops the recording of requests received by the 4D web server in the *logweb.txt* file and sets its format. See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.


The log format menu provides the following options:

-   **No Log File**: When this option is selected, 4D will not generate a log file of requests.

-   **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\
  host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\
  Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

    -   host: IP address of the client (ex. 192.100.100.10)
    -   rfc931: information not generated by 4D, it's always - (a minus sign)
    -   user: user name as it is authenticated, or else it is - (a minus sign). If the user name contains spaces, they will be replaced by _ (an underscore).
    -   DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds

> A data e a hora são locais para o servidor.

-   request: request sent by the client (ex. GET /index.htm HTTP/1.0)
-   estado: resposta dada pelo servidor.
-   length: size of the data returned (except the HTTP header) or 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds. The possible values of state are as follows: 200: OK 204: No contents 302: Redirection 304: Not modified 400: Incorrect request 401: Authentication required 404: Not found 500: Internal error The CLF format cannot be customized.

-   **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent.

    -   Referer: Contains the URL of the page pointing to the requested document.
    -   User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> O formato DLF não pode ser personalizado.

-   **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

-   **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Tal como o formato ELF, pode ser personalizado.

**Configuring the fields** When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, check the desired fields. You will need to select each field to be included in the log. To do so, check the desired fields.

**Nota**: Não é possível selecionar duas vezes o mesmo campo.

The following table lists the fields available for each format (in alphabetical order) and describes its contents:

| Campo          | ELF | WLF | Valor                                                                      |
| -------------- | --- | --- | -------------------------------------------------------------------------- |
| BYTES_RECEIVED |     | X   | Número de bytes recebidos pelo servidor                                    |
| BYTES_SENT     | X   | X   | Número de bytes enviados pelo servidor ao cliente                          |
| C_DNS          | X   | X   | IP address of the DNS (ELF: field identical to the C_IP field)             |
| C_IP           | X   | X   | IP address of the client (for example 192.100.100.10)                      |
| CONNECTION_ID  |     | X   | Número de identificação da ligação                                         |
| CS(COOKIE)     | X   | X   | Information about cookies contained in the HTTP request                    |
| CS(HOST)       | X   | X   | Campo Host do pedido HTTP                                                  |
| CS(REFERER)    | X   | X   | URL of the page pointing to the requested document                         |
| CS(USER_AGENT) | X   | X   | Information about the software and operating system of the client          |
| CS_SIP         | X   | X   | Endereço IP do servidor                                                    |
| CS_URI         | X   | X   | URI onde o pedido é efectuado                                              |
| CS_URI_QUERY | X   | X   | Request query parameters                                                   |
| CS_URI_STEM  | X   | X   | Part of request without query parameters                                   |
| DATE           | X   | X   | DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year |
| METHOD         | X   | X   | HTTP method used for the request sent to the server                        |
| PATH_ARGS      |     | X   | CGI parameters: string located after the "$" character                     |
| STATUS         | X   | X   | Resposta fornecida pelo servidor                                           |
| TIME           | X   | X   | HH: hora, MM: minutos, SS: segundos                                        |
| TRANSFER_TIME  | X   | X   | Tempo solicitado pelo servidor para gerar a resposta                       |
| USER           | X   | X   | User name if authenticated; otherwise - (minus sign).                      |
|                |     |     | If the user name contains spaces, they are replaced by _ (underlines)      |
| URL            |     | X   | URL solicitado pelo cliente                                                |

> As datas e horas são indicadas em GMT.

## Log (backup)

Configure the automatic backup parameters for the request log. Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. You must then specify the precise moment of the backup if necessary.

-   **No Backup**: The scheduled backup function is deactivated.
-   **Every X hour(s)**: This option is used to program backups on an hourly basis. Pode digitar um valor entre 1 e 24.

    -   **starting at**: Used to set the time at which the first back up will begin.
-   **Every X day(s) at X**: This option is used to program backups on a daily basis. Introduza 1 se pretender efetuar uma cópia de segurança diária. When this option is checked, you must indicate the time when the backup must be started.
-   **Every X week(s), day at X**: This option is used to program backups on a weekly basis. Digite 1 se quiser realizar o backup 1 vez por semana. Digite 1 se quiser realizar o backup 1 vez por semana. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started.
-   **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. Digite 1 se quiser realizar uma cópia de segurança mensal. Digite 1 se quiser realizar uma cópia de segurança mensal.
-   **Every X MB**: This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. You can set a size limit of 1, 10, 100 or 1000 MB.

> In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.

## Serviços Web

You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Servidor

This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.

-   **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the *Published in WSDL* attribute. When this option is checked, 4D creates the WSDL file.
-   **Web Service Name**: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. Por padrão, 4D usa o nome A_WebService.
-   **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: http://www.4d.com/namespace/default.

> In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).

### Cliente

This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.

-   **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. Por padrão, 4D usa o prefixo "proxy_".


## Funcionalidades Web

This page contains the options used to enable and control advanced Web features such as the REST server.

### Publishing

#### Expor como servidor REST

Inicia e pára o servidor REST. Ver [Configuração do servidor REST](../REST/configuration.md).

### Acesso

This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Web Studio

#### Enable access to the web studio

Ativa o acesso geral ao Web studio. You still need to configure it at every project level.