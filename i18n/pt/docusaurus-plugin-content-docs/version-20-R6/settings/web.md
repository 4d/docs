---
id: web
title: Página da Web
---

A través de las pestañas de la página **Web**, puede configurar varios aspectos del servidor web integrado de 4D (seguridad, inicio, conexiones, servicios web, etc.). Para más información sobre el funcionamiento del servidor web de 4D, consulte [Servidor web](../WebServer/webServer.md). Para más información sobre los servicios web de 4D, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html).

## Configuração

### Informações de publicação

#### Iniciar o servidor Web no arranque

Indicates whether the Web server will be launched on startup of the 4D application. Esta opción se describe en la sección [Administración del servidor web](../WebServer/webServerAdmin.md#starting-the-4d-web-server).

#### Ativar HTTP

Indicates whether or not the Web server will accept non-secure connections. Ver [Activar HTTP](../WebServer/webServerConfig.md#enable-http).

#### Porta HTTP

Número da porta IP (TCP) de escuta para HTTP. Ver [Puerto HTTP](../WebServer/webServerConfig.md#http-port).

#### Endereço IP

Endereço IP em que o servidor web 4D vai receber solicitações HTTP (4D local e 4D Server). Ver [Dirección IP a escuchar](../WebServer/webServerConfig.md#ip-address-to-listen).

#### Ativar HTTPS

Indicates whether or not the Web server will accept secure connections. Ver [Activar HTTPS](../WebServer/webServerConfig.md#enable-https).

#### Porta HTTPS

Permite modificar o número da porta TCP/IP usada pelo servidor Web para as conexões HTTP seguras sobre TLS (protocolo HTTPS). Ver [Puerto HTTPS](../WebServer/webServerConfig.md#https-port).

#### Allow database Access through 4DSYNC URLs

*Nota de compatibilidad:* esta opción es [obsoleta](../WebServer/webServerConfig.md#deprecated-settings). For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests.

### Caminhos

#### Raiz HTML predefinida

Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. Ver [Carpeta raíz](../WebServer/webServerConfig.md#root-folder).

#### Página inicial predefinida

Designar uma página inicial padrão para o servidor Web. Ver [Página de inicio por defecto](../WebServer/webServerConfig.md#default-home-page).

## Options (I)

### Cache

#### Usar o cache Web 4D

Ativar o cache da página Web. Ver [Caché](../WebServer/webServerConfig.md#cache).

#### Tamanho da cache das Páginas

Define o tamanho da cache. Ver [Caché](../WebServer/webServerConfig.md#cache).

#### Limpar cache

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).
At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache). A cache é então imediatamente limpa.

> También puede utilizar la URL especial [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Processo Web

This area allows you to configure how the web server will handle user sessions and their associated processes.

> La opción **Sesiones heredadas** solo está disponible para la compatibilidad en las bases/proyectos creados con las versiones de 4D anteriores a 4D v18 R6.

#### Sessões escaláveis (sessões multi-processo)

Cuando selecciona esta opción (recomendado), una sesión usuario se gestiona a través de un objeto **Session**. Ver la [página Sesiones usuario](../WebServer/sessions.md#enabling-sessions).

#### Sem sessões

Cuando se selecciona esta opción, el servidor web no ofrece ningún soporte específico para las [sesiones usuario](../WebServer/sessions.md). Successive requests from web clients are always independent and no context is maintained on the server.

Neste modo, pode configurar parâmetros do servidor Web adicionais:

- [Maximum Concurrent Web Processes](#maximum-concurrent-web-processes)
- [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
- [Use preemptive processes](#use-preemptive-web-processes)

#### Sessões herdadas (sessões de processo único)

*Nota de compatibilidad:* esta opción sólo está disponible en las bases/proyectos creados con una versión 4D anterior a 4D v18 R6.

Esta opção permite o gerenciamento de sessões de usuário legadas pelo servidor 4D HTTP. Este mecanismo se describe en la sección [Gestión de Sesiones Web (Legado)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html). Ver [Mantener sesión](../WebServer/webServerConfig.md#keep-session).

Cuando se selecciona, la opción [Reutilización de los contextos temporales (4D en modo remoto)](#reuse-temporary-contexts) es marcada automáticamente (y bloqueada).

#### Processos Web em simultâneo máximo

No disponible con las [sesiones extensibles](../WebServer/sessions.md).

Limite estritamente superior de processos Web em simultâneo. Ver [Procesos Web simultáneos máximos](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).

#### Reutilização de contextos temporários

No disponible con las [sesiones extensibles](../WebServer/sessions.md).

Allows you to optimize the operation of the 4D Web server in remote mode. Ver [Reutilización de los contextos temporales en modo remoto)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utilizar processos preemptivos

No disponible con las [sesiones extensibles](../WebServer/sessions.md).

Permite processos web preemptivos nas suas aplicações compiladas. Cuando se selecciona **Utilizar los procesos apropiativos**, la elegibilidad de su código relacionado con la web (incluyendo las etiquetas 4D y los métodos base Web) para la ejecución apropiativa será evaluada durante la compilación. Para más información, consulte [Utilizar los procesos web apropiativos](../WebServer/preemptiveWeb.md).

> This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  Ver [Activar el modo apropiativo para el servidor web](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).

#### Tempo limite do processo inativo

No disponible con las [sesiones extensibles](../WebServer/sessions.md).

Allows you to set the maximum timeout before closing for inactive Web processes on the server. Ver [Duración de los procesos inactivos](../WebServer/webServerConfig.md#inactive-process-timeout).

### Palavras-passe Web

Set the authentication system that you want to apply to your Web server. São propostas três opções:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Se recomienda utilizar la autenticación **personalizada**. Veja o capítulo [**Autenticação**](../WebServer/authentication.md) na documentação *Desenvolvimento Web*.

## Opções (II)

### Conversão texto

#### Enviar diretamente caracteres expandidos

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Defina o conjunto de caracteres a serem usados pelo servidor Web 4D. Ver [Conjunto de caracteres](../WebServer/webServerConfig.md#character-set).

### Ligações Keep-Alive

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#keep-alive-connections).

### Parâmetros CORS

#### Ativar CORS

Ativa o serviço Cross-origin resource sharing (CORS). Ver [Activar Cors](../WebServer/webServerConfig.md#activer-cors).

#### Nomes de domínio/Métodos HTTP permitidos

Lista de hosts e métodos permitidos para o serviço CORS. Ver [Parámetros CORS](../WebServer/webServerConfig.md#cors-settings).

## Registo (tipo)

### Formato do histórico

Inicia o detiene el registro de las peticiones recibidas por el servidor web 4D en el archivo *logweb.txt* y define su formato. Ver [Registro de logs](../WebServer/webServerConfig.md#log-recording).

> La activación y desactivación del archivo de historial de peticiones también se puede efectuar por programación utilizando el comando [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html).

O menu de formato do histórico oferece as seguintes opções:

- **Sin archivo de registro**: cuando se selecciona esta opción, 4D no generará un archivo de historial de peticiones.

- **CLF (Common Log Format)**: cuando se selecciona esta opción, el historial de peticiones se genera en formato CLF. With the CLF format, each line of the file represents a request, such as:\
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

> **Nota:** por razones de rendimiento, las operaciones se guardan en una memoria búfer por paquetes de 1Kb antes de ser escritas en el disco. The operations are also written to disk if no request has been sent every 5 seconds.
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

- **DLF (Combined Log Format)**: cuando se selecciona esta opción, el historial de peticiones se genera en formato DLF. DLF format is similar to CLF format and uses exactly the same structure. Simplesmente adiciona dois campos HTTP adicionais no final de cada solicitação: Referer e User-agent.

  - Referer: Contains the URL of the page pointing to the requested document.
  - User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> O formato DLF não pode ser personalizado.

- **ELF (Extended Log Format)**: cuando se selecciona esta opción, el historial de peticiones se genera en formato ELF. O formato ELF está muito difundido no mundo dos navegadores HTTP. Ele pode ser usado para criar registros sofisticados que atendam a necessidades específicas. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

- **WLF (WebStar Log Format)**: cuando se selecciona esta opción, el historial de peticiones se genera en formato WLF. O formato WLF foi desenvolvido especificamente para o servidor 4D WebSTAR. Ele é semelhante ao formato ELF, com apenas alguns campos adicionais. Tal como o formato ELF, pode ser personalizado.

**Configuring the fields** When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, check the desired fields. You will need to select each field to be included in the log. To do so, check the desired fields.

**Nota**: no puede seleccionar el mismo campo dos veces.

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

- **Sin copia de seguridad**: la función de copia de seguridad programada está desactivada.
- **Cada X hora(s)**: esta opción se utiliza para programar las copias de seguridad con una base horaria. Pode digitar um valor entre 1 e 24.

  - **a partir de**: permite definir la hora de activación de la primera copia de seguridad.
- **Cada X día(s) a las X**: esta opción se utiliza para programar las copias de seguridad con una base diaria. Introduza 1 se pretender efetuar uma cópia de segurança diária. When this option is checked, you must indicate the time when the backup must be started.
- **Cada X semana(s), día a las X**: esta opción se utiliza para programar las copias de seguridad con una base semanal. Digite 1 se quiser realizar o backup 1 vez por semana. Digite 1 se quiser realizar o backup 1 vez por semana. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started.
- **Cada X mes(es), el día X a las X**: esta opción se utiliza para programar las copias de seguridad con una base mensual. Digite 1 se quiser realizar uma cópia de segurança mensal. Digite 1 se quiser realizar uma cópia de segurança mensal.
- **Todos los X MB**: esta opción se utiliza para programar las copias de seguridad en función del tamaño del archivo de registro actual. Um backup é acionado automaticamente quando o arquivo atinge o tamanho definido. Pode definir um limite de tamanho de 1, 10, 100 ou 1000 MB.

> In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.

## Serviços Web

You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).

Para más información sobre el soporte de los servicios web en 4D, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html).

### Servidor

This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.

- **Autorizar peticiones de servicios web**: esta opción le permite inicializar la publicación de servicios web. Si esta opción no ha sido seleccionada, 4D rechaza las peticiones SOAP y no genera una WSDL - incluso si los métodos tienen el atributo *Publicado en WSDL*. Quando essa opção está marcada, 4D cria o arquivo WSDL.
- **Nombre del Servicio Web**: esta área le permite cambiar el "nombre genérico" del Servicio Web. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. Por padrão, 4D usa o nome A_WebService.
- **Espacio de nombres de Servicios Web**: esta área se utiliza para cambiar el espacio de nombres (namespace) de los Servicios Web publicados por 4D. Cada serviço Web publicado na Internet deve ser único. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Normalmente, o namespace começa com a URL da empresa (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. Por padrão, o 4D usa o seguinte namespace: http://www.4d.com/namespace/default.

> In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).

### Cliente

This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.

- **Prefijo de los métodos creados por el asistente**: esta área le permite cambiar el prefijo que se añade automáticamente por 4D al nombre de los métodos proxy generados por el asistente de servicios web. Proxy project methods form a link between the 4D application and the Web Services server. Por padrão, 4D usa o prefixo "proxy_".

## Funcionalidades Web

This page contains the options used to enable and control advanced Web features such as the REST server.

### Publicação

#### Expor como servidor REST

Inicia e pára o servidor REST. Ver [Configuración del servidor REST](../REST/configuration.md).

### Acesso

:::info Obsoleto

**Esta seção está obsoleta** a partir de 4D 20 R6. Se a configuração atual do projeto estiver obsoleta e precisar ser atualizada, essa seção, incluindo o botão **Ativar autenticação REST por meio da função ds.authentify()** (veja abaixo), será exibida. Se o seu projeto já for compatível com o modo [Force login](../REST/configuration.md#configuring-rest-access), a seção não estará presente e você poderá ignorar este parágrafo.

:::

Consulte [Configurando o acesso REST](../REST/configuration.md#configuring-rest-access) para conhecer a maneira recomendada de controlar e gerenciar o acesso REST em seus projetos 4D.

#### Ativar a autenticação REST por meio da função ds.authentify()

Clique no botão **Ativar autenticação REST por meio da função ds.authentify()** para atualizar automaticamente o projeto em relação ao acesso do usuário REST. Observe que essa operação não pode ser revertida e pode exigir que você modifique seu código (uma caixa de diálogo de aviso é exibida quando você clica no botão).

:::note

Esse botão só está disponível em projetos abertos com a aplicação 4D (usuário único).

:::

O botão aciona a seguinte sequência de atualização:

- O grupo de usuários da API REST definido no menu **Leitura/Escrita** é removido.
- O método de banco de dados `On REST Authentication` é excluído (movido para a lixeira do sistema).
- Um arquivo padrão ["roles.json"](../ORDA/privileges.md#rolesjson-file) é criado na pasta [Sources](../Project/architecture.md#sources) do projeto, caso ainda não exista, com seu atributo `forceLogin` como `True`.

Lembre-se de reiniciar seu projeto após realizar essa atualização.

A próxima etapa é modificar seu código adequadamente. [**See this blog post to know how to proceed**](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/).

### Qodly Studio

#### Ativar o acesso a Qodly Studio

:::note

Essa opção só aparece se a licença do Qodly Studio estiver ativada.

:::

Essa opção permite o acesso do usuário ao [Qodly Studio](../WebServer/qodly-studio.md) para o projeto atual. Tenga en cuenta que el acceso global debe permitirse al [nivel de la aplicación](../Admin/webAdmin.md).
