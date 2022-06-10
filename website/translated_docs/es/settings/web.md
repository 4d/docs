---
id: web
title: Página Web
---

A través de las pestañas de la página **Web**, puede configurar varios aspectos del servidor web integrado de 4D (seguridad, inicio, conexiones, servicios web, etc.). Para más información sobre el funcionamiento del servidor web de 4D, consulte [Servidor web](../WebServer/webServer.md). Para más información sobre los servicios web de 4D, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html).

## Configuración

### Información de publicación

#### Lanzar el servidor web al inicio

Indica si el servidor web se lanzará al iniciar la aplicación 4D. Esta opción se describe en la sección [Administración del servidor web](../WebServer/webServerAdmin.md#starting-the-4d-web-server).

#### Activar HTTP

Indica si el servidor web aceptará o no conexiones no seguras. Ver [Activar HTTP](../WebServer/webServerConfig.md#enable-http).


#### Puerto HTTP

Número de puerto IP (TCP) de escucha para HTTP. Ver [Puerto HTTP](../WebServer/webServerConfig.md#http-port).

#### Dirección IP

Dirección IP en la que el servidor web 4D recibirá las peticiones HTTP (4D local y 4D Server). Ver [Dirección IP a escuchar](../WebServer/webServerConfig.md#ip-address-to-listen).


#### Activar HTTPS

Indica si el servidor web aceptará o no conexiones seguras. Ver [Activar HTTPS](../WebServer/webServerConfig.md#enable-https).


#### Puerto HTTPS

Permite modificar el número de puerto TCP/IP utilizado por el servidor web para las conexiones HTTP seguras sobre TLS (protocolo HTTPS). Ver [Puerto HTTPS](../WebServer/webServerConfig.md#https-port).

#### Autorizar el acceso a la base de datos a través de las URL 4DSYNC

*Nota de compatibilidad:* esta opción es [obsoleta](../WebServer/webServerConfig.md#deprecated-settings). Para el acceso a la base de datos a través de HTTP, ahora se recomienda utilizar las funcionalidades del almacén de datos remoto ORDA y las peticiones REST.


### Rutas

#### Raíz HTML por defecto

Definir la ubicación por defecto de los archivos del sitio web e indicar el nivel jerárquico en el disco por encima del cual los archivos no serán accesibles. Ver [Carpeta raíz](../WebServer/webServerConfig.md#root-folder).

#### Página de inicio por defecto

Designa una página de inicio por defecto para el servidor web. Ver [Página de inicio por defecto](../WebServer/webServerConfig.md#default-home-page).




## Options (I)

### Caché


#### Utilizar la caché Web de 4D

Activa la caché de la página web. Ver [Caché](../WebServer/webServerConfig.md#cache).

#### Tamaño de la caché de las páginas

Define el tamaño de la caché. Ver [Caché](../WebServer/webServerConfig.md#cache).


#### Vaciar la caché

En cualquier momento, puede vacíar la caché de las páginas y de las imágenes que contiene (si, por ejemplo, ha modificado una página estática y quiere volver a cargarla en la caché). Para ello, basta con hacer clic en el botón **Borrar caché**. La caché se borra inmediatamente.

> También puede utilizar la URL especial [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Proceso Web

This area allows you to configure how the web server will handle user sessions and their associated processes.

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Scalable sessions (multi-process sessions)

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).


#### Sin sesiones

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Successive requests from web clients are always independent and no context is maintained on the server.

In this mode, you can configure additional web server setttings:

-   [Procesos Web simultáneos maximos](#maximum-concurrent-web-processes)
-   [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
-   [Utilizar los procesos apropiativos](#use-preemptive-web-processes)

#### Legacy sessions (single process sessions)

*Compatibility Note:* This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### Procesos Web simultáneos maximos

Not available with [scalable sessions](../WebServer/sessions.md).

Strictly high limit of concurrent web processes. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).


#### Reutilización de los contextos temporales

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to optimize the operation of the 4D Web server in remote mode. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utilizar los procesos apropiativos

Not available with [scalable sessions](../WebServer/sessions.md).

Enables preemptive web processes in your compiled applications. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

> This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  See [Enabling the preemptive mode for the web server](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).


#### Tiempo de espera del proceso inactivo

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to set the maximum timeout before closing for inactive Web processes on the server. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).



### Web Passwords

Set the authentication system that you want to apply to your Web server. Se proponen tres opciones:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the *Web Development* documentation.


## Options (II)

### Conversión texto

#### Send Extended Characters Directly

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define the set of characters to be used by the 4D Web server. See [Character Set](../WebServer/webServerConfig.md#character-set).

### Conexiones Keep-Alive

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#keep-alive-connections).

### Parámetros CORS

#### Activar CORS

Enables Cross-origin resource sharing (CORS) service. See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### Domain names/HTTP methods allowed

Lista de hosts y métodos permitidos para el servicio CORS. See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).



## Log (tipo)


### Formato del historial

Starts or stops the recording of requests received by the 4D web server in the *logweb.txt* file and sets its format. See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.


The log format menu provides the following options:

-   **No Log File**: When this option is selected, 4D will not generate a log file of requests.

-   **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\ host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\ Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

    -   host: dirección IP del cliente (por ejemplo: "192.100.100.10)
    -   rfc931: información no generada por 4D, siempre es - (un signo menos)
    -   usuario: nombre de usuario como está autenticado, o - (un signo menos). Si el nombre de usuario contiene espacios, se remplazan por _ (un guión bajo).
    -   DD: día, MMM: una abreviatura de 3 letras para el nombre del mes (Jan, Feb,...), YYYY: año, HH: hora, MM: minutos, SS: segundos

> La fecha y hora son locales al servidor.

-   solicitud: solicitud enviada por el cliente (por ejemplo, GET /index.htm HTTP/1.0)
-   estado: respuesta dada por el servidor.
-   longitud: tamaño de los datos devueltos (excepto el encabezado HTTP) o 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds. The possible values of state are as follows: 200: OK 204: No contents 302: Redirection 304: Not modified 400: Incorrect request 401: Authentication required 404: Not found 500: Internal error The CLF format cannot be customized.

-   **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent.

    -   Referer: Contains the URL of the page pointing to the requested document.
    -   User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> El formato DLF no se puede personalizar.

-   **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

-   **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Like the ELF format, it can be customized.

**Configuring the fields** When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. Deberá seleccionar cada campo para incluirlo en el registro. You will need to select each field to be included in the log.

**Nota**: no puede seleccionar el mismo campo dos veces.

La siguiente tabla enumera los campos disponibles para cada formato (en orden alfabético) y describe su contenido:

| Campo          | ELF | WLF | Valor                                                                       |
| -------------- | --- | --- | --------------------------------------------------------------------------- |
| BYTES_RECEIVED |     | X   | Número de bytes recibidos por el servidor                                   |
| BYTES_SENT     | X   | X   | Número de bytes enviados por el servidor al cliente                         |
| C_DNS          | X   | X   | Dirección IP del DNS (ELF: campo idéntico al campo C_IP)                    |
| C_IP           | X   | X   | Dirección IP del cliente (por ejemplo 192.100.100.10)                       |
| CONNECTION_ID  |     | X   | Número de identificación de la conexión                                     |
| CS(COOKIE)     | X   | X   | Información sobre las cookies contenidas en la petición HTTP                |
| CS(HOST)       | X   | X   | Campo Host de la petición HTTP                                              |
| CS(REFERER)    | X   | X   | URL de la página que apunta al documento solicitado                         |
| CS(USER_AGENT) | X   | X   | Información sobre el software y el sistema operativo del cliente            |
| CS_SIP         | X   | X   | Dirección IP del servidor                                                   |
| CS_URI         | X   | X   | URI sobre el que se realiza la petición                                     |
| CS_URI_QUERY | X   | X   | Parámetros de consulta de la petición                                       |
| CS_URI_STEM  | X   | X   | Parte de la solicitud sin los parámetros de la consulta                     |
| DATE           | X   | X   | DD: día, MMM: abreviación de 3 letras para el mes (Jan, Feb,...), YYYY: año |
| METHOD         | X   | X   | Método HTTP utilizado para la solicitud enviada al servidor                 |
| PATH_ARGS      |     | X   | Parámetros CGI: cadena situada después del caracter "$"                     |
| STATUS         | X   | X   | Respuesta ofrecida por el servidor                                          |
| TIME           | X   | X   | HH: hora, MM: minutos, SS: segundos                                         |
| TRANSFER_TIME  | X   | X   | Tiempo solicitado por el servidor para generar la respuesta                 |
| USER           | X   | X   | Nombre de usuario si está autenticado; en caso contrario, - (signo menos).  |
|                |     |     | Si el nombre de usuario contiene espacios, se sustituyen por _ (subrayado)  |
| URL            |     | X   | URL solicitado por el cliente                                               |

> Las fechas y horas son dadas en GMT.

## Historial (periodicidad)

Configure los parámetros de copia de seguridad automática para el registro de las peticiones. Primero debe elegir la frecuencia (días, semanas, etc.) o el criterio de límite de tamaño de los archivos haciendo clic en el botón de opción correspondiente. A continuación, debe especificar el momento preciso de la copia de seguridad si es necesario.

-   **Sin copia de seguridad**: la función de copia de seguridad programada está desactivada.
-   **Cada X hora(s)**: esta opción se utiliza para programar las copias de seguridad con una base horaria. Puede introducir un valor entre 1 y 24 .

    -   **a partir de**: permite definir la hora de activación de la primera copia de seguridad.
-   **Cada X día(s) a las X**: esta opción se utiliza para programar las copias de seguridad con una base diaria. Introduzca 1 si desea realizar una copia de seguridad diaria. Cuando esta opción está marcada, debe indicar la hora a la que debe comenzar la copia de seguridad.
-   **Cada X semana(s), día a las X**: esta opción se utiliza para programar las copias de seguridad con una base semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired.
-   **Cada X mes(es), el día X a las X**: esta opción se utiliza para programar las copias de seguridad con una base mensual. Introduzca 1 si desea realizar una copia de seguridad mensual. Introduzca 1 si desea realizar una copia de seguridad mensual.
-   **Todos los X MB**: esta opción se utiliza para programar las copias de seguridad en función del tamaño del archivo de registro actual. Una copia de seguridad se activa automáticamente cuando el archivo alcanza el tamaño especificado. Puede definir un límite de tamaño de 1, 10, 100 o 1000 MB.

> In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.

## Web Services

You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Servidor

This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.

-   **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the *Published in WSDL* attribute. When this option is checked, 4D creates the WSDL file.
-   **Web Service Name**: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. By default, 4D uses the name A_WebService.
-   **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: http://www.4d.com/namespace/default.

> In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).

### Cliente

This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.

-   **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. By default, 4D uses the prefix "proxy_".


## Funcionalidades Web

Esta página contiene las opciones utilizadas para activar y controlar las funcionalidades web avanzadas, como el servidor REST.

### Publicación

#### Activar el servicio REST

Inicia y detiene el servidor REST. Ver [Configuración del servidor REST](../REST/configuration.md).

### Acceso

This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Web Studio

#### Activar el acceso al studio web

Activa el acceso general al studio web. Todavía hay que configurarlo en cada nivel del proyecto.