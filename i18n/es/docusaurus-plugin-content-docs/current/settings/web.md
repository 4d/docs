---
id: web
title: Página Web
---

Using the tabs on the **Web** page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see [Web server](../WebServer/webServer.md). For more information about 4D Web services, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html) chapter.

## Configuración

### Información de publicación

#### Lanzar el servidor web al inicio

Indica si el servidor web se lanzará al iniciar la aplicación 4D. This option is described in the [Web server administration](../WebServer/webServerAdmin.md#starting-the-4d-web-server) section.

#### Activar HTTP

Indica si el servidor web aceptará o no conexiones no seguras. See [Enable HTTP](../WebServer/webServerConfig.md#enable-http).

#### Puerto HTTP

Número de puerto IP (TCP) de escucha para HTTP. See [HTTP Port](../WebServer/webServerConfig.md#http-port).

#### Dirección IP

Dirección IP en la que el servidor web 4D recibirá las peticiones HTTP (4D local y 4D Server). See [IP Address to listen](../WebServer/webServerConfig.md#ip-address-to-listen).

#### Activar HTTPS

Indica si el servidor web acepta conexiones seguras. See [Enable HTTPS](../WebServer/webServerConfig.md#enable-https).

#### Puerto HTTPS

Permite modificar el número de puerto TCP/IP utilizado por el servidor web para las conexiones HTTP seguras sobre TLS (protocolo HTTPS). See [HTTPS Port](../WebServer/webServerConfig.md#https-port).

#### Autorizar el acceso a la base de datos a través de las URL 4DSYNC

_Compatibility Note_: This option is [deprecated](../WebServer/webServerConfig.md#deprecated-settings). Para el acceso a la base de datos a través de HTTP, ahora se recomienda utilizar las funcionalidades del almacén de datos remoto ORDA y las peticiones REST.

### Rutas

#### Raíz HTML por defecto

Definir la ubicación por defecto de los archivos del sitio web e indicar el nivel jerárquico en el disco por encima del cual los archivos no serán accesibles. See [Root Folder](../WebServer/webServerConfig.md#root-folder).

#### Página de inicio por defecto

Designa una página de inicio por defecto para el servidor web. See [Default Home page](../WebServer/webServerConfig.md#default-home-page).

## Options (I)

### Caché

#### Utilizar la caché Web de 4D

Activa la caché de la página web. See [Cache](../WebServer/webServerConfig.md#cache).

#### Tamaño de la caché de las páginas

Define el tamaño de la caché. See [Cache](../WebServer/webServerConfig.md#cache).

#### Vaciar la caché

En cualquier momento, puede vacíar la caché de las páginas y de las imágenes que contiene (si, por ejemplo, ha modificado una página estática y quiere volver a cargarla en la caché).
To do so, you just have to click on the **Clear Cache** button. La caché se borra inmediatamente.

> You can also use the special URL [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Procesos Web

Esta área le permite configurar cómo el servidor web manejará las sesiones usuario y sus procesos asociados.

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Sesiones extensibles (sesiones multiproceso)

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).

#### Sin sesiones

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Las solicitudes de sucesivas de los clientes web siempre son independientes y no se mantiene ningún contexto en el servidor.

En este modo, puede configurar los parámetros del servidor web adicionales:

- [Maximum Concurrent Web Processes](#maximum-concurrent-web-processes)
- [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
- [Use preemptive processes](#use-preemptive-web-processes)

#### Sesiones antiguas (sesiones procesos únicos)

_Compatibility Note:_ This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

Esta opción permite gestionar las antiguas sesiones usuario por el servidor HTTP de 4D. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### Procesos Web simultáneos maximos

Not available with [scalable sessions](../WebServer/sessions.md).

Límite estrictamente superior de procesos web simultáneos. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).

#### Reutilización de los contextos temporales

Not available with [scalable sessions](../WebServer/sessions.md).

Le permite optimizar el funcionamiento del servidor Web de 4D en modo remoto. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utilizar procesos apropiativos

Not available with [scalable sessions](../WebServer/sessions.md).

Activa los procesos web apropiativos en sus aplicaciones compiladas. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

> Esta opción no se aplica a las sesiones extensibles, a los procesos REST (modo compilado) ni a los procesos de servicios web (servidor o cliente).  See [Enabling the preemptive mode for the web server](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).

#### Tiempo de espera del proceso inactivo

Not available with [scalable sessions](../WebServer/sessions.md).

Le permite definir el tiempo de espera máximo antes de cerrar los procesos Web inactivos en el servidor. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).

### Contraseñas Web

Define el sistema de autenticación que desea aplicar a su servidor web. Se proponen tres opciones:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the _Web Development_ documentation.

## Options (II)

### Conversión texto

#### Enviar directamente los caracteres extendidos

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define el conjunto de caracteres a utilizar por el servidor web 4D. See [Character Set](../WebServer/webServerConfig.md#character-set).

### Conexiones Keep-Alive

See [Deprecated Settings](../WebServer/webServerConfig.md#keep-alive-connections).

### Parámetros CORS

#### Activar CORS

Activa el servicio Cross-origin resource sharing (CORS). See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### Nombres de dominios/métodos HTTP permitidos

Lista de hosts y métodos permitidos para el servicio CORS. See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).

## Historial (tipo)

### Formato del historial

Starts or stops the recording of requests received by the 4D web server in the _logweb.txt_ file and sets its format. See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.

El menú de formato de registro ofrece las siguientes opciones:

- **No Log File**: When this option is selected, 4D will not generate a log file of requests.

- **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\
  host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\
  Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

  - host: dirección IP del cliente (por ejemplo: "192.100.100.10)
  - rfc931: información no generada por 4D, siempre es - (un signo menos)
  - usuario: nombre del usuario como está autenticado, o - (un signo menos). Si el nombre de usuario contiene espacios, se remplazan por _ (un guión bajo).
  - DD: día, MMM: una abreviatura de 3 letras para el nombre del mes (Jan, Feb,...), YYYY: año, HH: hora, MM: minutos, SS: segundos

> La fecha y hora son locales al servidor.

- petición: solicitud enviada por el cliente (por ejemplo, GET /index.htm HTTP/1.0)
- estado: respuesta dada por el servidor.
- longitud: tamaño de los datos devueltos (excepto el encabezado HTTP) o 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. Las operaciones también se escriben en disco si no se ha enviado ninguna petición cada 5 segundos.
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

- **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. El formato DLF es similar al formato CLF y utiliza exactamente la misma estructura. Simplemente añade dos campos HTTP adicionales al final de cada petición: Referer y User-agent.

  - Referer: contiene la URL de la página que apunta al documento solicitado.
  - User-agent: contiene el nombre y la versión del navegador o del software cliente en el origen de la petición.

> El formato DLF no se puede personalizar.

- **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. El formato ELF está muy extendido en el mundo de los navegadores HTTP. Puede utilizarse para construir historiales sofisticados que respondan a necesidades específicas. Por esta razón, el formato ELF se puede personalizar: es posible elegir los campos que se van a registrar, así como su orden de inserción en el archivo.

- **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. El formato WLF se desarrolló específicamente para el servidor 4D WebSTAR. Es similar al formato ELF, con sólo unos pocos campos adicionales. Al igual que el formato ELF, se puede personalizar.

**Configuring the fields**
When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. Deberá seleccionar cada campo para incluirlo en el registro. You will need to select each field to be included in the log.

**Note**: You cannot select the same field twice.

La siguiente tabla enumera los campos disponibles para cada formato (en orden alfabético) y describe su contenido:

| Campo                                                  | ELF | WLF | Valor                                                                                                                                                                                          |
| ------------------------------------------------------ | --- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BYTES_RECEIVED                    |     | X   | Número de bytes recibidos por el servidor                                                                                                                                                      |
| BYTES_SENT                        | X   | X   | Número de bytes enviados por el servidor al cliente                                                                                                                                            |
| C_DNS                             | X   | X   | Dirección IP del DNS (ELF: campo idéntico al campo C_IP)                                                                               |
| C_IP                              | X   | X   | Dirección IP del cliente (por ejemplo 192.100.100.10)                                                                       |
| CONNECTION_ID                     |     | X   | Número de identificación de la conexión                                                                                                                                                        |
| CS(COOKIE)                          | X   | X   | Información sobre las cookies contenidas en la petición HTTP                                                                                                                                   |
| CS(HOST)                            | X   | X   | Campo Host de la petición HTTP                                                                                                                                                                 |
| CS(REFERER)                         | X   | X   | URL de la página que apunta al documento solicitado                                                                                                                                            |
| CS(USER_AGENT) | X   | X   | Información sobre el software y el sistema operativo del cliente                                                                                                                               |
| CS_SIP                            | X   | X   | Dirección IP del servidor                                                                                                                                                                      |
| CS_URI                            | X   | X   | URI sobre el que se realiza la petición                                                                                                                                                        |
| CS_URI_QUERY | X   | X   | Parámetros de consulta de la petición                                                                                                                                                          |
| CS_URI_STEM  | X   | X   | Parte de la solicitud sin los parámetros de la consulta                                                                                                                                        |
| DATE                                                   | X   | X   | DD: día, MMM: abreviación de 3 letras para el mes (Jan, Feb,...), YYYY: año |
| METHOD                                                 | X   | X   | Método HTTP utilizado para la solicitud enviada al servidor                                                                                                                                    |
| PATH_ARGS                         |     | X   | Parámetros de la CGI: cadena situada después del caracter "$"                                                                                                                  |
| STATUS                                                 | X   | X   | Respuesta ofrecida por el servidor                                                                                                                                                             |
| TIME                                                   | X   | X   | HH: hora, MM: minutos, SS: segundos                                                                                                            |
| TRANSFER_TIME                     | X   | X   | Tiempo solicitado por el servidor para generar la respuesta                                                                                                                                    |
| USER                                                   | X   | X   | Nombre de usuario si está autenticado; en caso contrario, - (signo menos).                                                                                  |
|                                                        |     |     | Si el nombre de usuario contiene espacios, se sustituyen por _ (subrayado)                                                                             |
| URL                                                    |     | X   | URL solicitado por el cliente                                                                                                                                                                  |

> Las fechas y horas se indican en GMT.

## Historial (periodicidad)

Configure los parámetros de copia de seguridad automática para el registro de las peticiones. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. A continuación, debe especificar el momento preciso de la copia de seguridad si es necesario.

- **No Backup**: The scheduled backup function is deactivated.
- **Every X hour(s)**: This option is used to program backups on an hourly basis. Puede introducir un valor entre 1 y 24 .

  - **starting at**: Used to set the time at which the first back up will begin.
- **Every X day(s) at X**: This option is used to program backups on a daily basis. Introduzca 1 si desea realizar una copia de seguridad diaria. Cuando esta opción está marcada, debe indicar la hora a la que debe comenzar la copia de seguridad.
- **Every X week(s), day at X**: This option is used to program backups on a weekly basis. Introduzca 1 si desea realizar una copia de seguridad semanal. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired.
- **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. Introduzca 1 si desea realizar una copia de seguridad mensual. Enter 1 if you want to perform a monthly backup.
- **Every X MB**: This option is used to program backups based on the size of the current request log file. Una copia de seguridad se activa automáticamente cuando el archivo alcanza el tamaño especificado. Puedes definir un límite de tamaño de 1, 10, 100 o 1000 MB.

> En el caso de las copias de seguridad programadas, si el servidor web no fue lanzado cuando se programó la copia de seguridad, en el siguiente lanzamiento 4D considera que la copia de seguridad ha fallado y aplica los parámetros adecuados, definidos en las Propiedades de la base.

## Web Services

Las opciones de esta pestaña permiten activar y configurar los servicios Web para el proyecto 4D, tanto por su publicación (lado del servidor) y su suscripción (lado del cliente).

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Servidor

Esta área contiene varias opciones relativas con el uso de 4D como un "servidor" de Servicios Web, es decir la publicación de los métodos proyecto en forma de Servicios Web.

- **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the _Published in WSDL_ attribute. Cuando esta opción está marcada, 4D crea el archivo WSDL.
- **Web Service Name**: This area lets you change the "generic name" of the Web Service. Este nombre se utiliza para diferenciar los servicios tanto a nivel de servidor SOAP (cuando el servidor publica varios Servicios Web diferentes), así como en los directorios de Servicios Web. Por defecto, 4D utiliza el nombre A_WebService.
- **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Cada Servicio Web publicado en Internet debe ser único. La unicidad de los nombres de los Servicios Web se asegura mediante el uso de espacios de nombres XML. Un namespace es una cadena de caracteres arbitraria usada para identificar de manera única un conjunto de etiquetas XML. Por lo general, el espacio de nombres comienza por la URL de la empresa (http://mycompany.com/mynamespace). En este caso, no es indispensable tener nada en particular en la URL indicada; lo que importa es que la cadena de caracteres utilizada sea única. Por defecto, 4D utiliza el siguiente espacio de nombres: http://www.4d.com/namespace/default.

> Conforme al estándar XML para los nombres de etiquetas, las cadenas de caracteres utilizadas no deben contener espacios ni comenzar con un número. Además, para evitar cualquier riesgo de incompatibilidad, recomendamos que no utilice ningún caracter extendido (como los caracteres acentuados).

### Cliente

Esta área contiene varias opciones relacionadas con el uso de 4D como un "cliente" de Servicios Web, es decir, suscribirse a los servicios publicados en la red.

- **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Los métodos proyecto proxy forman un enlace entre la aplicación 4D y el servidor de Servicios Web. Por defecto, 4D utiliza el prefijo "proxy_".

## Funcionalidades Web

Esta página contiene las opciones utilizadas para activar y controlar las funcionalidades web avanzadas, como el servidor REST.

### Publicación

#### Activar el servicio REST

Inicia y detiene el servidor REST. See [REST Server Configuration](../REST/configuration.md).

### Acceso

Esta opción especifica un grupo de usuarios 4D que está autorizado a establecer la conexión a la base 4D utilizando las peticiones REST. See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Qodly Studio

#### Activar el acceso a Qodly Studio

:::note

Esta opción sólo aparece si la licencia de Qodly Studio está activa.

:::

This option enables user access to [Qodly Studio](XXX) for the current project. Note that global access must be allowed at the [application level](../Admin/webAdmin.md).
