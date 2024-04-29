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

Indicates whether or not the Web server will accept non-secure connections. See [Enable HTTP](../WebServer/webServerConfig.md#enable-http).

#### Porta HTTP

Número da porta IP (TCP) de escuta para HTTP. See [HTTP Port](../WebServer/webServerConfig.md#http-port).

#### Endereço IP

Endereço IP em que o servidor web 4D vai receber solicitações HTTP (4D local e 4D Server). See [IP Address to listen](../WebServer/webServerConfig.md#ip-address-to-listen).

#### Ativar HTTPS

Indicates whether or not the Web server will accept secure connections. See [Enable HTTPS](../WebServer/webServerConfig.md#enable-https).

#### Porta HTTPS

Permite modificar o número da porta TCP/IP usada pelo servidor Web para as conexões HTTP seguras sobre TLS (protocolo HTTPS). See [HTTPS Port](../WebServer/webServerConfig.md#https-port).

#### Allow database Access through 4DSYNC URLs

_Compatibility Note_: This option is [deprecated](../WebServer/webServerConfig.md#deprecated-settings). For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests.

### Caminhos

#### Raiz HTML predefinida

Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. See [Root Folder](../WebServer/webServerConfig.md#root-folder).

#### Página inicial predefinida

Designar uma página inicial padrão para o servidor Web. See [Default Home page](../WebServer/webServerConfig.md#default-home-page).

## Options (I)

### Cache

#### Usar o cache Web 4D

Ativar o cache da página Web. See [Cache](../WebServer/webServerConfig.md#cache).

#### Tamanho da cache das Páginas

Define o tamanho da cache. See [Cache](../WebServer/webServerConfig.md#cache).

#### Limpar cache

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).
To do so, you just have to click on the **Clear Cache** button. A cache é então imediatamente limpa.

> You can also use the special URL [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Processo Web

This area allows you to configure how the web server will handle user sessions and their associated processes.

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Sessões escaláveis (sessões multi-processo)

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).

#### Sem sessões

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Successive requests from web clients are always independent and no context is maintained on the server.

Neste modo, pode configurar parâmetros do servidor Web adicionais:

- [Maximum Concurrent Web Processes](#maximum-concurrent-web-processes)
- [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
- [Use preemptive processes](#use-preemptive-web-processes)

#### Sessões herdadas (sessões de processo único)

_Compatibility Note:_ This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

Esta opção permite o gerenciamento de sessões de usuário legadas pelo servidor 4D HTTP. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### Processos Web em simultâneo máximo

Not available with [scalable sessions](../WebServer/sessions.md).

Limite estritamente superior de processos Web em simultâneo. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).

#### Reutilização de contextos temporários

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to optimize the operation of the 4D Web server in remote mode. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utilizar processos preemptivos

Not available with [scalable sessions](../WebServer/sessions.md).

Permite processos web preemptivos nas suas aplicações compiladas. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

> This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  See [Enabling the preemptive mode for the web server](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).

#### Tempo limite do processo inativo

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to set the maximum timeout before closing for inactive Web processes on the server. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).

### Palavras-passe Web

Set the authentication system that you want to apply to your Web server. São propostas três opções:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the _Web Development_ documentation.

## Opções (II)

### Conversão texto

#### Enviar diretamente caracteres expandidos

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Defina o conjunto de caracteres a serem usados pelo servidor Web 4D. See [Character Set](../WebServer/webServerConfig.md#character-set).

### Ligações Keep-Alive

See [Deprecated Settings](../WebServer/webServerConfig.md#keep-alive-connections).

### Parâmetros CORS

#### Ativar CORS

Ativa o serviço Cross-origin resource sharing (CORS). See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### Nomes de domínio/Métodos HTTP permitidos

Lista de hosts e métodos permitidos para o serviço CORS. See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).

## Registo (tipo)

### Formato do histórico

Starts or stops the recording of requests received by the 4D web server in the _logweb.txt_ file and sets its format. See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.

O menu de formato do histórico oferece as seguintes opções:

- **No Log File**: When this option is selected, 4D will not generate a log file of requests.

- **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\
  host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\
  Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

  - host: endereço IP do cliente (ex. 192.100.100.10)
  - rfc931: informação não é gerada por 4D, é sempre - (um sinal de menos)
  - usuário: nome de usuário como ele está autenticado, ou então é - (um sinal menos). Se o nome de usuário contiver espaços, eles serão substituídos por _ (um sublinhado).
  - DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds

> A data e a hora são locais para o servidor.

- petição: petição enviada pelo cliente (por exemplo, GET /index.htm HTTP/1.0)
- estado: resposta dada pelo servidor.
- length: tamanho dos dados devolvidos (exceto o cabeçalho HTTP) ou 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds.
> The possible values of state are as follows:
> 200: OK
> 204: No contents
> 302: Redirection
> 304: Not modified
> 400: Incorrect request
> 401: Authentication required
> 404: Not found
> 500: Internal error
> The CLF format cannot be customized.

- **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. Simplesmente adiciona dois campos HTTP adicionais no final de cada solicitação: Referer e User-agent.

  - Referer: Contains the URL of the page pointing to the requested document.
  - User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> O formato DLF não pode ser personalizado.

- **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. O formato ELF está muito difundido no mundo dos navegadores HTTP. Ele pode ser usado para criar registros sofisticados que atendam a necessidades específicas. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

- **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. O formato WLF foi desenvolvido especificamente para o servidor 4D WebSTAR. Ele é semelhante ao formato ELF, com apenas alguns campos adicionais. Tal como o formato ELF, pode ser personalizado.

**Configuring the fields**
When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, check the desired fields. You will need to select each field to be included in the log. To do so, check the desired fields.

**Note**: You cannot select the same field twice.

The following table lists the fields available for each format (in alphabetical order) and describes its contents:

| Campo                                                  | ELF | WLF | Valor                                                                                                                                                        |
| ------------------------------------------------------ | --- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BYTES_RECEIVED                    |     | X   | Número de bytes recebidos pelo servidor                                                                                                                      |
| BYTES_SENT                        | X   | X   | Número de bytes enviados pelo servidor ao cliente                                                                                                            |
| C_DNS                             | X   | X   | Endereço IP do DNS (ELF: campo idêntico ao campo C_IP)                                               |
| C_IP                              | X   | X   | Endereço IP do cliente (por exemplo, 192.100.100.10)                                      |
| CONNECTION_ID                     |     | X   | Número de identificação da ligação                                                                                                                           |
| CS(COOKIE)                          | X   | X   | Informações sobre as cookies contidas na petição HTTP                                                                                                        |
| CS(HOST)                            | X   | X   | Campo Host do pedido HTTP                                                                                                                                    |
| CS(REFERER)                         | X   | X   | URL da página que aponta para o documento solicitado                                                                                                         |
| CS(USER_AGENT) | X   | X   | Informações sobre o software e o sistema operacional do cliente                                                                                              |
| CS_SIP                            | X   | X   | Endereço IP do servidor                                                                                                                                      |
| CS_URI                            | X   | X   | URI onde o pedido é efectuado                                                                                                                                |
| CS_URI_QUERY | X   | X   | Parâmetros da consulta                                                                                                                                       |
| CS_URI_STEM  | X   | X   | Parte da solicitação sem parâmetros de consulta                                                                                                              |
| DATE                                                   | X   | X   | DDD: dia, MMM: abreviação de 3 letras por mês (jan, fev, etc.), YYYY: ano |
| METHOD                                                 | X   | X   | Método HTTP utilizado para o pedido enviado ao servidor                                                                                                      |
| PATH_ARGS                         |     | X   | Parâmetros CGI: cadeia de caracteres localizada após o caractere "$"                                                                         |
| STATUS                                                 | X   | X   | Resposta fornecida pelo servidor                                                                                                                             |
| TIME                                                   | X   | X   | HH: hora, MM: minutos, SS: segundos                                                                          |
| TRANSFER_TIME                     | X   | X   | Tempo solicitado pelo servidor para gerar a resposta                                                                                                         |
| USER                                                   | X   | X   | Nome do usuário se estiver autenticado; caso contrário, - (sinal de menos).                                               |
|                                                        |     |     | Se o nome do usuário contiver espaços, eles serão substituídos por _ (sublinhado)                                    |
| URL                                                    |     | X   | URL solicitado pelo cliente                                                                                                                                  |

> As datas e horas são indicadas em GMT.

## Histórico (backup)

Configure the automatic backup parameters for the request log. Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. Você deve então especificar o momento exato do backup, se necessário.

- **No Backup**: The scheduled backup function is deactivated.
- **Every X hour(s)**: This option is used to program backups on an hourly basis. Pode digitar um valor entre 1 e 24.

  - **starting at**: Used to set the time at which the first back up will begin.
- **Every X day(s) at X**: This option is used to program backups on a daily basis. Introduza 1 se pretender efetuar uma cópia de segurança diária. When this option is checked, you must indicate the time when the backup must be started.
- **Every X week(s), day at X**: This option is used to program backups on a weekly basis. Digite 1 se quiser realizar o backup 1 vez por semana. Digite 1 se quiser realizar o backup 1 vez por semana. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started.
- **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. Digite 1 se quiser realizar uma cópia de segurança mensal. Digite 1 se quiser realizar uma cópia de segurança mensal.
- **Every X MB**: This option is used to program backups based on the size of the current request log file. Um backup é acionado automaticamente quando o arquivo atinge o tamanho definido. Pode definir um limite de tamanho de 1, 10, 100 ou 1000 MB.

> In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.

## Serviços Web

You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Servidor

This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.

- **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the _Published in WSDL_ attribute. Quando essa opção está marcada, 4D cria o arquivo WSDL.
- **Web Service Name**: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. Por padrão, 4D usa o nome A_WebService.
- **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Cada serviço Web publicado na Internet deve ser único. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Normalmente, o namespace começa com a URL da empresa (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. Por padrão, o 4D usa o seguinte namespace: http://www.4d.com/namespace/default.

> In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).

### Cliente

This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.

- **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. Por padrão, 4D usa o prefixo "proxy_".

## Funcionalidades Web

This page contains the options used to enable and control advanced Web features such as the REST server.

### Publicação

#### Expor como servidor REST

Inicia e pára o servidor REST. See [REST Server Configuration](../REST/configuration.md).

### Acesso

This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Qodly Studio

#### Ativar o acesso a Qodly Studio

:::note

Essa opção só aparece se a licença do Qodly Studio estiver ativada.

:::

This option enables user access to [Qodly Studio](XXX) for the current project. Note that global access must be allowed at the [application level](../Admin/webAdmin.md).
