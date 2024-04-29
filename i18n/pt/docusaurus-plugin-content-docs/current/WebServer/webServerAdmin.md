---
id: webServerAdmin
title: Administração
---

4D provides several integrated tools to start, stop, or monitor the integrated web server.

## Iniciando o servidor Web 4D

> To be able to launch the web server of 4D or 4D Server, you must have a "4D Web Application" license. For more information, please refer to the [4D Web site](https://www.4d.com).

A 4D project can start and monitor a web server for the main (host) application as well as for each hosted component.

O servidor web principal de 4D pode ser iniciado de diferentes maneiras:

- Utilizar um botão/comando de menu.
  - 4D: **Run\>Start Web Server** menu<br/>![](../assets/en/WebServer/start1.png)
  - 4D Server: **Start HTTP server** button of the HTTP Server page<br/>![](../assets/en/WebServer/start2.png)

- Inicia automaticamente cada vez que a aplicação 4D é aberta. To do this, display the **Web\/Configuration** page of the Settings and select the **Launch Web Server at Startup** check box:<br/>![](../assets/en/WebServer/config.png)

- Programmatically, by calling the [`webServer.start()`](API/WebServerClass.md#start) function or `WEB START SERVER` command.

The web server of any component can be launched by calling the [`webServer.start()`](API/WebServerClass.md#start) function on the component's web server object.

> You do not need to relaunch the 4D application to start or stop the web server.

## Parando o servidor Web 4D

O servidor web principal de 4D pode ser parado de diferentes maneiras:

- Using the **Run\>Stop Web Server** menu of 4D or the **Stop HTTP server** button of the HTTP Server page of 4D Server (both items show **Start...** when the server is not already started).

- Programmatically, by calling the [`webServer.stop()`](API/WebServerClass.md#stop) function or `WEB STOP SERVER` command.

The web server of any component can be stopped by calling the `webServer.stop()` function on the component's web server object.

## Teste do Servidor Web 4D

The **Test Web Server** command can be used to make sure the built-in web server is functioning correctly (4D only). This command is accessible in the **Run** menu when the web server is launched:

![](../assets/en/WebServer/test1.png)

When you select this command, the home page of the website published by the 4D application is displayed in a window of your default web browser:

![](../assets/en/WebServer/defaultHomePage.png)

This command lets you verify that the web server, home page display, etc. work correctly. The page is called using the _localhost_ URL, which is the standard shortcut designating the IP address of the machine on which the web browser is executed. The command takes into account the [TCP publication port](#http-port) number specified in the settings.

## Limpar a cache

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).

Para o fazer, pode:

- 4D: click on the **Clear Cache** button in the [Web/Options (I) page](../settings/web.md) of the Settings dialog box.
- 4D Server: click on the **Clear Cache** button in the HTTP page of the 4D Server Administration window.

A cache é então imediatamente limpa.

> You can also use the [/4DCACHECLEAR](#cacheclear) URL.

## Explorador de execução

The **Watch** page (**Web** heading) in the Runtime Explorer displays web server information, particularly:

- **Web Cache Usage**: indicates the number of pages present in the web cache as well as its use percentage. This information is only available if the web server is active and if the cache size is greater than 0.

- **Web Server Elapsed Time**: indicates the duration of use (in hours:minutes:seconds format) of the Web server. Esta informação só está disponível se o servidor Web estiver ativo.

- **Web Hits Count**: indicates the total number of HTTP requests received since the web server boot, as well as an instantaneous number of requests per second (measure taken between two Runtime Explorer updates). Esta informação só está disponível se o servidor Web estiver ativo.

## URLs de administração

Website administration URLS allow you to control the website published on your server. 4D Web Server accepts four particular URLs: _/4DSTATS_, _/4DHTMLSTATS_, /_4DCACHECLEAR_ and _/4DWEBTEST_.

> _/4DSTATS_, _/4DHTMLSTATS_ and _/4DCACHECLEAR_ are only available to the Designer and Administrator of the database. If the 4D password system has not been activated, these URLs are available to all the users. /4DWEBTEST está sempre disponível.

### /4DSTATS

The **/4DSTATS** URL returns several items of information in an HTML table (displayable in a browser):

| Elemento                | Descrição                                                            |
| ----------------------- | -------------------------------------------------------------------- |
| Tamanho actual da cache | Tamanho atual da cache do servidor Web (em bytes) |
| Tamanho máximo da cache | Tamanho máximo da cache (em bytes)                |
| Cached Object Max Size  | Tamanho máximo de cada objeto na cache (em bytes) |
| Cache Use               | Porcentagem do cache usado                                           |
| Cached Objects          | Number of objects found in the cache, **including pictures**         |

This information can allow you to check the functioning of your server and eventually adapt the corresponding parameters.

> The `WEB GET STATISTICS` command allows you to also obtain information about how the cache is being used for static pages.

### /4DHTMLSTATS

The _/4DHTMLSTATS_ URL returns, also as an HTML table, the same information as the _/4DSTATS_ URL. The difference is that the **Cached Objects** field only counts HTML pages (without counting picture files). Moreover, this URL returns the **Filtered Objects** field.

| Elemento                | Descrição                                                               |
| ----------------------- | ----------------------------------------------------------------------- |
| Tamanho actual da cache | Tamanho atual da cache do servidor Web (em bytes)    |
| Tamanho máximo da cache | Tamanho máximo da cache (em bytes)                   |
| Cached Object Max Size  | Tamanho máximo de cada objeto na cache (em bytes)    |
| Cache Use               | Porcentagem do cache usado                                              |
| Cached Objects          | Number of objects found in the cache, **without pictures**              |
| Objectos filtrados      | Número de objetos no cache não contados por URL, em particular, imagens |

### /4DCACHECLEAR

The _/4DCACHECLEAR_ URL immediately clears the cache of the static pages and images. It allows you to therefore “force” the update of the pages that have been modified.

### /4DWEBTEST

The _/4DWEBTEST_ URL is designed to check the web server status. Quando esse URL é chamado, 4D retorna um arquivo texto com os campos HTTP seguintes preenchidos:

| Campo HTTP | Descrição                                           | Exemplo                                                                                                                                                                                                                                                                                                                                            |
| ---------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Date       | data atual no formato RFC 822                       | Mon, 7 Dec 2020 13:12:50 GMT                                                                                                                                                                                                                                                                                       |
| Server     | 4D/número da versão                                 | 4D/18.5.0 (Build 18R5.257368)                                                                                                                                                                                                                                                   |
| User-Agent | nome e versão @ endereço IP do cliente | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 @ 127.0.0.1 |

## Logs

4D permite gerar dois logs de pedidos web:

- a debug log, useful in the web server development phase (_HTTPDebugLog.txt_),
- a standardized web request log, rather used for statistic purposes (_logweb.txt_).

Both log files are automatically created in the **Logs** folder of the application project.

### HTTPDebugLog.txt

The [http debug file](webServerConfig.md#debug-log) can be enabled using the [`web server` object](webServerObject.md) or the `WEB SET OPTION` command.

Este arquivo registra cada petição HTTP e cada resposta em modo raw (não processado). Petições inteiras, incluindo cabeçalhos, são registradas; opcionalmente, partes do corpo podem ser registradas também.

Os campos abaixo são registrados tanto para Request quanto para Response:

| Campo nome     | Descrição                                                                      |
| -------------- | ------------------------------------------------------------------------------ |
| SocketID       | ID da socked usada para comunicação                                            |
| PeerIP         | Endereço IPv4 do host (cliente)                             |
| PeerPort       | Porta usada por host (cliente)                              |
| TimeStamp      | Timestamp em milisegundos (desde início sistema)            |
| ConnectionID   | Connection UUID (UUID de VTCPSocket usada para comunicação) |
| SequenceNumber | Número de operação único e sequencial da sessão de histórico                   |

### logweb.txt

The [web log recording file](webServerConfig.md#log-recording) can be enabled using the [`web server` object](webServerObject.md), the `WEB SET OPTION` command, or the **Web/Log (type)** page of the settings. É necessário selecionar o formato do registo.

#### CLF/DLF

Each line of the file represents a request, such as:
_host rfc931 user \[DD/MMM/YYYY:HH:MM:SS] "request" state length_
Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

DLF (Combined Log Format) format is similar to CLF (Common Log Format) format and uses exactly the same structure. Simplesmente adiciona dois campos HTTP adicionais no final de cada solicitação: Referer e User-agent. Eis a descrição dos formatos CLF/DLF (não personalizáveis):

| Campo nome                                                           | Descrição                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host                                                                 | Endereço IP do cliente (por exemplo: 192.100.100.10)                                                                                                                                                                                                                                 |
| rfc931                                                               | informação não gerada por 4D, é sempre - (um sinal de menos                                                                                                                                                                                                                                                                                          |
| user                                                                 | nome de usuário conforme é autenticado, ou então é - (um sinal de menos). Se o nome de usuário contiver espaços, eles serão substituídos por _ (um sublinhado).                                                                                                              |
| DD/MMM/YYYY:HH:MM:SS | DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds. A data e a hora são locais para o servidor. |
| request                                                              | petição enviada pelo cliente (por exemplo, GET /index.htm HTTP/1.0                                                                                                                                                                                                                                                   |
| state                                                                | resposta dada pelo servidor                                                                                                                                                                                                                                                                                                                                             |
| length                                                               | tamanho dos dados retornados (HTTP header exceto) ou 0                                                                                                                                                                                                                                                                                               |
| Referer                                                              | DLF apenas- Contém a URL da página apontando para o documento solicitado.                                                                                                                                                                                                                                                                               |
| User-agent                                                           | DLF only- Contains the name and version of the browser or software of the client at the origin of the request                                                                                                                                                                                                                                                           |

#### ELF/WLF

O formato ELF (Extended Log Format) é muito difundido no mundo dos navegadores HTTP. Ele pode ser usado para criar registros sofisticados que atendam a necessidades específicas. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

The WLF (WebStar Log Format) was developed specifically for the 4D WebSTAR server.

##### Configuração dos campos

When you choose the ELF or WLF format, the “Web Log Token Selection” area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, check the desired fields. Para o efeito, assinalar os campos pretendidos.

> Não é possível selecionar o mesmo campo duas vezes.

The following table lists the fields available for each format (in alphabetical order) and describes its contents:

| Campo                                                  | ELF | WLF | Valor                                                                                                                                                                                                                                    |
| ------------------------------------------------------ | --- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BYTES_RECEIVED                    |     | X   | Número de bytes recebidos pelo servidor                                                                                                                                                                                                  |
| BYTES_SENT                        | X   | X   | Número de bytes enviados pelo servidor ao cliente                                                                                                                                                                                        |
| C_DNS                             | X   | X   | Endereço IP do DNS (ELF: campo idêntico ao campo C_IP)                                                                                                                           |
| C_IP                              | X   | X   | Endereço IP do cliente (por exemplo, 192.100.100.10)                                                                                                                  |
| CONNECTION_ID                     |     | X   | Número de identificação da ligação                                                                                                                                                                                                       |
| CS(COOKIE)                          | X   | X   | Informações sobre as cookies contidas na petição HTTP                                                                                                                                                                                    |
| CS(HOST)                            | X   | X   | Campo Host do pedido HTTP                                                                                                                                                                                                                |
| CS(REFERER)                         | X   | X   | URL da página que aponta para o documento solicitado                                                                                                                                                                                     |
| CS(USER_AGENT) | X   | X   | Informações sobre o software e o sistema operacional do cliente                                                                                                                                                                          |
| CS_SIP                            | X   | X   | Endereço IP do servidor                                                                                                                                                                                                                  |
| CS_URI                            | X   | X   | URI onde o pedido é efectuado                                                                                                                                                                                                            |
| CS_URI_QUERY | X   | X   | Parâmetros da consulta                                                                                                                                                                                                                   |
| CS_URI_STEM  | X   | X   | Parte da solicitação sem parâmetros de consulta                                                                                                                                                                                          |
| DATE                                                   | X   | X   | DDD: dia, MMM: abreviação de 3 letras por mês (jan, fev, etc.), YYYY: ano                                                                             |
| METHOD                                                 | X   | X   | Método HTTP utilizado para o pedido enviado ao servidor                                                                                                                                                                                  |
| PATH_ARGS                         |     | X   | Parâmetros CGI: cadeia de caracteres localizada após o carácter "$"                                                                                                                                                      |
| STATUS                                                 | X   | X   | Resposta fornecida pelo servidor                                                                                                                                                                                                         |
| TIME                                                   | X   | X   | HH: hora, MM: minutos, SS: segundos                                                                                                                                                      |
| TRANSFER_TIME                     | X   | X   | Tempo solicitado pelo servidor para gerar a resposta                                                                                                                                                                                     |
| USER                                                   | X   | X   | Nome do usuário se estiver autenticado; caso contrário, - (sinal de menos). Se o nome do usuário contiver espaços, eles serão substituídos por _ (sublinhado) |
| URL                                                    |     | X   | URL solicitado pelo cliente                                                                                                                                                                                                              |

> As datas e horas são indicadas em GMT.

#### Frequência do backup

Since a _logweb.txt_ file can become considerably large, it is possible to set up an automatic archiving mechanism. The triggering of a backup can be based on a certain period of time (expressed in hours, days, week or months), or based on the file size; when the set deadline (or file size) is reached, 4D automatically closes and archives the current log file and creates a new one.

When the web log file backup is triggered, the log file is archived in a folder named "Logweb Archives," which is created at the same level as the _logweb.txt_ file.

The archived file is renamed based on the following example: “DYYYY_MM_DD_Thh_mm_ss.txt.” For instance, for a file archived on September 4, 2020 at 3:50 p.m. and 7 seconds: and 7 seconds: e 7 segundos: “D2020_09_04_T15_50_07.txt.”

#### Parâmetros de backup

The automatic backup parameters for the logweb.txt are set on the **Web/Log (backup)** page of the Settings:

![](../assets/en/WebServer/backup.png)

First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. Você deve então especificar o momento exato do backup, se necessário.

- **No Backup**: The scheduled backup function is deactivated.

- **Every X hour(s)**: This option is used to program backups on an hourly basis. Pode digitar um valor entre 1 e 24.
  - **starting at**: Used to set the time at which the first back up will begin.

- **Every X day(s) at X**: This option is used to program backups on a daily basis. Introduza 1 se pretender efetuar uma cópia de segurança diária. When this option is checked, you must indicate the time when the backup must be started.

- **Every X week(s), day at X**: This option is used to program backups on a weekly basis. Digite 1 se quiser realizar o backup 1 vez por semana. Digite 1 se quiser realizar o backup 1 vez por semana. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started.

- **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. Digite 1 se quiser realizar uma cópia de segurança mensal. Digite 1 se quiser realizar uma cópia de segurança mensal.

- **Every X MB**: This option is used to program backups based on the size of the current request log file. Um backup é acionado automaticamente quando o arquivo atinge o tamanho definido. Pode definir um limite de tamanho de 1, 10, 100 ou 1000 MB.
