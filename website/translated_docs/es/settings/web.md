---
id: web
title: Página Web
---

Using the tabs on the **Web** page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see [Web server](../WebServer/webServer.md). For more information about 4D Web services, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html) chapter.

## Configuración

### Información de publicación

#### Lanzar el servidor web al inicio

Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the [Web server administration](../WebServer/webServerAdmin.md#starting-the-4d-web-server) section.

#### Activar HTTP

Indicates whether or not the Web server will accept non-secure connections. See [Enable HTTP](../WebServer/webServerConfig.md#enable-http).


#### Puerto HTTP

Número de puerto IP (TCP) de escucha para HTTP. See [HTTP Port](../WebServer/webServerConfig.md#http-port).

#### Dirección IP

IP address on which the 4D web server will receive HTTP requests (4D local and 4D Server). See [IP Address to listen](../WebServer/webServerConfig.md#ip-address-to-listen).


#### Activar HTTPS

Indicates whether or not the Web server will accept secure connections. See [Enable HTTPS](../WebServer/webServerConfig.md#enable-https).


#### Puerto HTTPS

Allows you to modify the TCP/IP port number used by the Web server for secured HTTP connections over TLS (HTTPS protocol). See [HTTPS Port](../WebServer/webServerConfig.md#https-port).

#### Autorizar el acceso a la base de datos a través de las URL 4DSYNC

*Compatibility Note*: This option is [deprecated](../WebServer/webServerConfig.md#deprecated-settings). For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests.


### Rutas

#### Raíz HTML por defecto

Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. See [Root Folder](../WebServer/webServerConfig.md#root-folder).

#### Página de inicio por defecto

Designa una página de inicio por defecto para el servidor web. See [Default Home page](../WebServer/webServerConfig.md#default-home-page).




## Options (I)

### Caché


#### Utilizar la caché Web de 4D

Activa la caché de la página web. See [Cache](../WebServer/webServerConfig.md#cache).

#### Tamaño de la caché de las páginas

Define el tamaño de la caché. See [Cache](../WebServer/webServerConfig.md#cache).


#### Vaciar la caché

En cualquier momento, puede vacíar la caché de las páginas y de las imágenes que contiene (si, por ejemplo, ha modificado una página estática y quiere volver a cargarla en la caché). En cualquier momento, puede vacíar la caché de las páginas y de las imágenes que contiene (si, por ejemplo, ha modificado una página estática y quiere volver a cargarla en la caché). La caché se borra inmediatamente.

> You can also use the special URL [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Procesos Web

This area allows you to configure how the web server will handle user sessions and their associated processes.

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Sesiones extensibles (sesiones multiproceso)

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).


#### Sin sesiones

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Successive requests from web clients are always independent and no context is maintained on the server.

En este modo, puede configurar los parámetros del servidor web adicionales:

-   [Procesos Web simultáneos maximos](#maximum-concurrent-web-processes)
-   [Reutilización de los contextos temporales (4D en modo remoto)](#reuse-temporary-contexts)
-   [Utilizar los procesos apropiativos](#use-preemptive-web-processes)

#### Sesiones antiguas (sesiones procesos únicos)

*Compatibility Note:* This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### Procesos Web simultáneos maximos

Not available with [scalable sessions](../WebServer/sessions.md).

Límite estrictamente superior de procesos web simultáneos. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).


#### Reutilización de los contextos temporales

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to optimize the operation of the 4D Web server in remote mode. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utilizar los procesos apropiativos

Not available with [scalable sessions](../WebServer/sessions.md).

Enables preemptive web processes in your compiled applications. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

> Esta opción no se aplica a las sesiones extensibles, a los procesos REST (modo compilado) ni a los procesos de servicios web (servidor o cliente).  Ver [Activar el modo apropiativo para el servidor web](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).


#### Tiempo de espera del proceso inactivo

Not available with [scalable sessions](../WebServer/sessions.md).

Le permite definir el tiempo de espera máximo antes de cerrar los procesos Web inactivos en el servidor. Ver [Duración de los procesos inactivos](../WebServer/webServerConfig.md#inactive-process-timeout).



### Contraseñas Web

Define el sistema de autenticación que desea aplicar a su servidor web. Se proponen tres opciones:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Se recomienda utilizar la autenticación **personalizada**. Ver el capítulo [**Autenticación**](../WebServer/authentication.md) en la sección *Desarrollo Web*.


## Options (II)

### Conversión texto

#### Enviar directamente los caracteres extendidos

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define el conjunto de caracteres a utilizar por el servidor web 4D. Ver [Conjunto de caracteres](../WebServer/webServerConfig.md#character-set).

### Conexiones Keep-Alive

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#keep-alive-connections).

### Parámetros CORS

#### Activar CORS

Activa el servicio Cross-origin resource sharing (CORS). Ver [Activar Cors](../WebServer/webServerConfig.md#activer-cors).

#### Nombres de dominios/métodos HTTP permitidos

Lista de hosts y métodos permitidos para el servicio CORS. Ver [Parámetros CORS](../WebServer/webServerConfig.md#cors-settings).



## Log (tipo)


### Formato del historial

Starts or stops the recording of requests received by the 4D web server in the *logweb.txt* file and sets its format. Ver [Registro de logs](../WebServer/webServerConfig.md#log-recording).

> La activación y desactivación del archivo de historial de peticiones también se puede efectuar por programación utilizando el comando [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html).


El menú de formato de registro ofrece las siguientes opciones:

-   **No Log File**: When this option is selected, 4D will not generate a log file of requests.

-   **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\
  host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\
  Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

    -   host: dirección IP del cliente (por ejemplo: "192.100.100.10)
    -   rfc931: information not generated by 4D, it's always - (a minus sign)
    -   user: user name as it is authenticated, or else it is - (a minus sign). Si el nombre de usuario contiene espacios, se remplazan por _ (un guión bajo).
    -   DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds

> La fecha y hora son locales al servidor.

-   petición: solicitud enviada por el cliente (por ejemplo, GET /index.htm HTTP/1.0)
-   estado: respuesta dada por el servidor.
-   length: size of the data returned (except the HTTP header) or 0.

> **Nota:** por razones de rendimiento, las operaciones se guardan en una memoria búfer por paquetes de 1Kb antes de ser escritas en el disco. Las operaciones también se escriben en disco si no se ha enviado ninguna petición cada 5 segundos. Los valores posibles del estado son los siguientes: 200: OK 204: Sin contenido 302: Redirección 304: No modificado 400: Petición incorrecta 401: Autenticación requerida 404: No encontrada 500: Error interno El formato CLF no puede ser personalizado.

-   **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent.

    -   Referer: Contains the URL of the page pointing to the requested document.
    -   User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> El formato DLF no se puede personalizar.

-   **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

-   **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. Es similar al formato ELF, con sólo unos pocos campos adicionales. Al igual que el formato ELF, se puede personalizar.

**Configurar los campos** Cuando selecciona el formato ELF (Extended Log Format) o WLF (WebStar Log Format), el área "Weg Log Token Selection" muestra los campos disponibles para el formato elegido. You will need to select each field to be included in the log. Deberá seleccionar cada campo para incluirlo en el registro.

**Nota**: no puede seleccionar el mismo campo dos veces.

The following table lists the fields available for each format (in alphabetical order) and describes its contents:

| Campo          | ELF | WLF | Valor                                                                      |
| -------------- | --- | --- | -------------------------------------------------------------------------- |
| BYTES_RECEIVED |     | X   | Número de bytes recibidos por el servidor                                  |
| BYTES_SENT     | X   | X   | Número de bytes enviados por el servidor al cliente                        |
| C_DNS          | X   | X   | IP address of the DNS (ELF: field identical to the C_IP field)             |
| C_IP           | X   | X   | Dirección IP del cliente (por ejemplo 192.100.100.10)                      |
| CONNECTION_ID  |     | X   | Número de identificación de la conexión                                    |
| CS(COOKIE)     | X   | X   | Información sobre las cookies contenidas en la petición HTTP               |
| CS(HOST)       | X   | X   | Campo Host de la petición HTTP                                             |
| CS(REFERER)    | X   | X   | URL de la página que apunta al documento solicitado                        |
| CS(USER_AGENT) | X   | X   | Información sobre el software y el sistema operativo del cliente           |
| CS_SIP         | X   | X   | Dirección IP del servidor                                                  |
| CS_URI         | X   | X   | URI sobre el que se realiza la petición                                    |
| CS_URI_QUERY | X   | X   | Parámetros de consulta de la petición                                      |
| CS_URI_STEM  | X   | X   | Parte de la petición sin los parámetros de consulta                        |
| DATE           | X   | X   | DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year |
| METHOD         | X   | X   | Método HTTP utilizado para la petición enviada al servidor                 |
| PATH_ARGS      |     | X   | Parámetros de la CGI: cadena situada después del caracter "$"              |
| STATUS         | X   | X   | Respuesta ofrecida por el servidor                                         |
| TIME           | X   | X   | HH: hour, MM: minutes, SS: seconds                                         |
| TRANSFER_TIME  | X   | X   | Tiempo solicitado por el servidor para generar la respuesta                |
| USER           | X   | X   | Nombre de usuario si está autenticado; en caso contrario, - (signo menos). |
|                |     |     | If the user name contains spaces, they are replaced by _ (underlines)      |
| URL            |     | X   | URL solicitado por el cliente                                              |

> Las fechas y horas se indican en GMT.

## Historial (periodicidad)

Configure los parámetros de copia de seguridad automática para el registro de las peticiones. Primero debe elegir la frecuencia (días, semanas, etc.) o el criterio de límite de tamaño de los archivos haciendo clic en el botón de opción correspondiente. A continuación, debe especificar el momento preciso de la copia de seguridad si es necesario.

-   **No Backup**: The scheduled backup function is deactivated.
-   **Every X hour(s)**: This option is used to program backups on an hourly basis. Puede introducir un valor entre 1 y 24 .

    -   **starting at**: Used to set the time at which the first back up will begin.
-   **Every X day(s) at X**: This option is used to program backups on a daily basis. Introduzca 1 si desea realizar una copia de seguridad diaria. When this option is checked, you must indicate the time when the backup must be started.
-   **Every X week(s), day at X**: This option is used to program backups on a weekly basis. Introduzca 1 si desea realizar una copia de seguridad semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired.
-   **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. Introduzca 1 si desea realizar una copia de seguridad mensual. Introduzca 1 si desea realizar una copia de seguridad mensual.
-   **Every X MB**: This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. Puede definir un límite de tamaño de 1, 10, 100 o 1000 MB.

> En el caso de las copias de seguridad programadas, si el servidor web no fue lanzado cuando se programó la copia de seguridad, en el siguiente lanzamiento 4D considera que la copia de seguridad ha fallado y aplica los parámetros adecuados, definidos en las Propiedades de la base.

## Web Services

Las opciones de esta pestaña permiten activar y configurar los servicios Web para el proyecto 4D, tanto por su publicación (lado del servidor) y su suscripción (lado del cliente).

Para más información sobre el soporte de los servicios web en 4D, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html).

### Servidor

Esta área contiene varias opciones relativas con el uso de 4D como un "servidor" de Servicios Web, es decir la publicación de los métodos proyecto en forma de Servicios Web.

-   **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the *Published in WSDL* attribute. Cuando esta opción está marcada, 4D crea el archivo WSDL.
-   **Web Service Name**: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. Por defecto, 4D utiliza el nombre A_WebService.
-   **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: http://www.4d.com/namespace/default.

> Conforme al estándar XML para los nombres de etiquetas, las cadenas de caracteres utilizadas no deben contener espacios ni comenzar con un número. Además, para evitar cualquier riesgo de incompatibilidad, recomendamos que no utilice ningún caracter extendido (como los caracteres acentuados).

### Cliente

Esta área contiene varias opciones relacionadas con el uso de 4D como un "cliente" de Servicios Web, es decir, suscribirse a los servicios publicados en la red.

-   **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. Por defecto, 4D utiliza el prefijo "proxy_".


## Funcionalidades Web

Esta página contiene las opciones utilizadas para activar y controlar las funcionalidades web avanzadas, como el servidor REST.

### Publicación

#### Activar el servicio REST

Inicia y detiene el servidor REST. Ver [Configuración del servidor REST](../REST/configuration.md).

### Acceso

Esta opción especifica un grupo de usuarios 4D que está autorizado a establecer la conexión a la base 4D utilizando las peticiones REST. Ver [Configuración del acceso REST](../REST/configuration.md#configuring-rest-access).

### Web Studio

#### Enable access to the web studio

Activa el acceso general al studio web. Todavía hay que configurarlo en cada nivel del proyecto.