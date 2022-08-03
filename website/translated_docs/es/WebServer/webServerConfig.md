---
id: webServerConfig
title: Configuración
---

Los parámetros del servidor web 4D incluye parámetros de seguridad, puertos de escucha, rutas por defecto y varias opciones que cubren todas las funcionalidades del servidor. 4D ofrece valores por defecto para todos los parámetros.


## ¿Dónde configurar los parámetros?

Hay diferentes maneras de configurar los parámetros del servidor web 4D, en función del alcance y del servidor que se quiera configurar:

| Ubicación del parámetro                                       | Alcance                                                  | Servidor web a utilizar                                               |
| ------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------- |
| [objeto webServer](webServerObject.md)                        | Temporal (sesión actual)                                 | Todos los servidores web, incluidos los servidores web de componentes |
| `WEB SET OPTION` o comando `WEB XXX`                          | Temporal (sesión actual)                                 | Servidor principal                                                    |
| [**Settings** dialog box](../settings/web.md) (**Web** pages) | Permanente (todas las sesiones, almacenadas en el disco) | Servidor principal                                                    |

> Algunos parámetros no están disponibles desde todos los lugares.

## Caché

| Puede ajustarse con           | Nombre                                                                                            | Comentarios |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Página de configuración/Utilización de la caché Web 4D](../settings/web.md#use-the-4d-web-cache) |             |
| Caja de diálogo de parámetros | [Página de configuración/Tamaño de la caché de las páginas](../settings/web.md#page-cache-size)   |             |

Activa y configura la caché de las páginas web.

El servidor web 4D dispone de una caché que permite cargar las páginas estáticas, las imágenes GIF, las imágenes JPEG (<512 kb) y las hojas de estilo (archivos.css) en memoria, a medida que se solicitan. El uso de la caché permite aumentar considerablemente el rendimiento del servidor web cuando se envían páginas estáticas. El caché se comparte entre todos los procesos web. When the cache is enabled, the 4D Web server looks for any static page requested by the browser in the cache first. Si encuentra la página, la envía inmediatamente. If not, 4D loads the page from disk and places it in the cache.

Puede modificar el tamaño de la caché en el área **Tamaño de la caché de las páginas**. El valor a definir depende del número y del tamaño de las páginas estáticas de su sitio web, así como de los recursos de que dispongan las máquinas locales.
> Mientras utiliza su base de datos web, puede verificar el rendimiento de la caché utilizando el comando `WEB GET STATISTICS`. Si, por ejemplo, observa que la tasa de uso de la caché se acerca al 100%, puede considerar aumentar el tamaño que se le ha asignado. Los URL [/4DSTATS] y [/4DHTMLSTATS] también permiten obtener información sobre el estado de la caché.


## Carpeta de certificados

| Puede ajustarse con | Nombre              | Comentarios                                                                                                                                          |
| ------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer    | `certificateFolder` | La propiedad Text, pero puede ser un objeto [`4D.Folder`](API/FolderClass.md) cuando se utiliza con el parámetro *settings* de la función `start()`. |

Carpeta donde se encuentran los archivos del certificado TLS para el servidor web.

Por defecto con 4D o 4D Server, estos archivos deben colocarse junto a la [carpeta Project](Project/architecture.md#project-folder).

Con 4D en modo remoto, estos archivos deben estar ubicados en la carpeta de recursos locales de la base de datos en la máquina remota (ver `Carpeta base 4D Client` del comando `Get 4D folder`). Debe copiar estos archivos manualmente en la máquina remota.

> Los archivos de certificados TLS son *key.pem* (documento que contiene la llave de cifrado privada) y *cert.pem* (documento que contiene el certificado).


## Conjunto de caracteres

| Puede ajustarse con           | Nombre                                                                     | Comentarios                  |
| ----------------------------- | -------------------------------------------------------------------------- | ---------------------------- |
| objeto webServer              | `characterSet`                                                             | Entero MIBEnum o cadena Name |
| `WEB SET OPTION`              | `Web character set`                                                        | Entero MIBEnum o cadena Name |
| Caja de diálogo de parámetros | [Página Opciones (II) /Conjunto estándar](../settings/web.md#standard-set) | Menú popup                   |

Define el conjunto de caracteres que utilizará el servidor web de 4D. El valor por defecto depende del lenguaje del sistema operativo.
> Esta configuración también se utiliza para generar informes rápidos en formato HTML.


## Lista de cifrado

| Puede ajustarse con | Nombre                                             | Comentarios |
| ------------------- | -------------------------------------------------- | ----------- |
| objeto webServer    | [`cipherSuite`](API/WebServerClass.md#ciphersuite) | Texto       |

Lista de cifrado utilizada para el protocolo seguro; establece la prioridad de los algoritmos de cifrado implementados por el servidor web. Puede ser una secuencia de cadenas separadas por dos puntos (por ejemplo "ECDHE-RSA-AES128-..."). Ver la [página de cifrados](https://www.openssl.org/docs/manmaster/man1/ciphers.html) en el sitio OpenSSL.

> La lista de cifrado por defecto utilizada por 4D puede ser modificada para la sesión utilizando el comando `SET DATABASE PARAMETER`, en cuyo caso la modificación se aplica a toda la aplicación 4D, incluyendo el servidor web, el servidor SQL, las conexiones cliente/servidor, así como el cliente HTTP y todos los comandos de 4D que hacen uso del protocolo seguro.

## Parámetros CORS

| Puede ajustarse con           | Nombre                                                                                                                    | Comentarios                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| objeto webServer              | [`CORSSettings`](API/WebServerClass.md#corssettings)                                                                      | Colección de objetos (Lista de hosts y métodos permitidos para el servicio CORS)       |
| `WEB SET OPTION`              | `Web CORS settings`                                                                                                       | Colección de objetos (Lista de hosts y métodos permitidos para el servicio CORS)       |
| Caja de diálogo de parámetros | [Página Options (II)/Nombres de dominio y Métodos HTTP autorizados](../settings/web.md#domain-names-HTTP-methods-allowed) | Haga clic en el botón [+] para añadir un nombre de dominio permitido y su(s) método(s) |

Lista de hosts y métodos permitidos para el servicio CORS.

#### Nombres de dominio (propiedad local)

Nombre de dominio o dirección IP desde donde las páginas externas pueden enviar solicitudes de datos al Servidor a través de CORS. Se pueden añadir múltiples atributos de dominio para crear una lista blanca. Se soportan varias sintaxis:

- 192.168.5.17:8081
- 192.168.5.17
- 192.168.*
- 192.168.*:8081
- http://192.168.5.17:8081
- http://*.myDomain.com
- http://myProject.myDomain.com
- *.myDomain.com
- myProject.myDomain.com
- \*


#### Métodos HTTP autorizados (propiedad métodos)

Métodos HTTP aceptados para el host CORS correspondiente. Se soportan los siguientes métodos HTTP:

- GET
- HEAD
- POST
- PUT
- DELETE
- OPTIONS
- TRACE
- PATCH

Separe cada método con un ";" (por ejemplo: "post;get"). Si methods está vacío, null o indefinido, todos los métodos están activos.

#### Ver también

[Activar CORS](#enable-cors-service)



## Debug log

| Puede ajustarse con | Nombre          | Comentarios |
| ------------------- | --------------- | ----------- |
| objeto webServer    | `debugLog`      | number      |
| `WEB SET OPTION`    | `Web debug log` | number      |

Status of the HTTP request log file of the web server ([*HTTPDebugLog_nn.txt*](../Debugging/debugLogFiles.md#httpdebuglogtxt), stored in the "Logs" folder of the application -- nn is the file number). Es útil para depurar problemas relacionados con el servidor web. Registra cada solicitud y cada respuesta en modo bruto. Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, también se pueden registrar las partes del cuerpo.

| Valor | Constante                      | Descripción                                                                              |
| ----- | ------------------------------ | ---------------------------------------------------------------------------------------- |
| 0     | wdl disable                    | Los debug logs Web HTTP son desactivados                                                 |
| 1     | wdl enable without body        | Web HTTP debug log is enabled without body parts (body size is provided in this case)    |
| 3     | wdl enable with response body  | Web HTTP debug log is enabled with body part in response only                            |
| 5     | wdl enable with request body   | Los debug logs Web HTTP son activados con la partes del cuerpo en la petición únicamente |
| 7     | wdl enable with all body parts | Web HTTP debug log is enabled with body parts in response and request                    |


## Página de inicio por defecto

| Puede ajustarse con           | Nombre                                                                                        | Comentarios                               |
| ----------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------- |
| objeto webServer              | [`defaultHomepage`](API/WebServerClass.md#defaulthomepage)                                    | Texto                                     |
| `WEB SET HOME PAGE`           |                                                                                               | Puede ser diferente para cada proceso web |
| Caja de diálogo de parámetros | [Página Configuración/Página de bienvenida por defecto](../settings/web.md#default-home-page) |                                           |

Designa una página de inicio por defecto para el servidor web. Esta página puede ser estática o [semi-dynamic].

By default, when the web server is launched for the first time, 4D creates a home page named "index.html" and puts it in the HTML root folder. If you do not modify this configuration, any browser connecting to the web server will obtain the following page:

![](assets/en/WebServer/defaultHomePage.png)

You can designate another default home page by entering its pathname.

- La ruta es relativa a la [carpeta HTML raíz ](#root-folder),.
- La ruta se expresa con la sintaxis POSIX (las carpetas se separan con una barra ("/"))
- La ruta no debe comenzar ni terminar con una barra.

For example, if you want the default home page to be "MyHome.htm", and it is located in the "Web" folder (itself located in the default HTML root folder), use "Web/MyHome.htm".

If you do not specify any default home page, the `On Web Connection` database method is called. Le corresponde a usted gestionar la petición procesalmente.

## Activar CORS

| Puede ajustarse con           | Nombre                                                             | Comentarios                                          |
| ----------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| objeto webServer              | [`CORSEnabled`](API/WebServerClass.md#corsenabled)                 | Booleano, true para activar CORS (False por defecto) |
| `WEB SET OPTION`              | `Web CORS enabled`                                                 | 0 (desactivado, por defecto) o 1 (activado)          |
| Caja de diálogo de parámetros | [Página Options (II)/Activar CORS](../settings/web.md#enable-cors) | Sin marcar por defecto                               |

The 4D web server implements cross-origin resource sharing (CORS) to allow specific Web pages served from another domain to access the current Web application's resources via XHR calls, e.g., using REST. Por razones de seguridad, las peticiones "cross-domain" están prohibidas por defecto a nivel del navegador. When enabled, XHR calls (e.g. REST requests) from Web pages outside the domain can be allowed in your application (you need to define the list of allowed addresses in the CORS domain list, see CORS Settings below). In this case, if a non-allowed domain or method sends a cross site request, it is rejected with a "403 - forbidden" error response.

When disabled (default), all cross site requests sent with CORS are ignored.

For more information about CORS, please refer to the [Cross-origin resource sharing page](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

#### Ver también
[Parámetros CORS](#cors-settings)

## Activar HTTP

| Puede ajustarse con           | Nombre                                                       | Comentarios |
| ----------------------------- | ------------------------------------------------------------ | ----------- |
| objeto webServer              | [`HTTPEnabled`](API/WebServerClass.md#httpenabled)           | booleano    |
| `WEB SET OPTION`              | `Web HTTP enabled`                                           |             |
| Caja de diálogo de parámetros | [Configuración/Activar HTTP](../settings/web.md#enable-http) |             |

Indica si el servidor web acepta o no conexiones no seguras.


## Activar HTTPS

| Puede ajustarse con           | Nombre                                               | Comentarios |
| ----------------------------- | ---------------------------------------------------- | ----------- |
| objeto webServer              | [`HTTPSEnabled`](API/WebServerClass.md#httpsenabled) | booleano    |
| `WEB SET OPTION`              | `Web HTTPS enabled`                                  |             |
| Caja de diálogo de parámetros | Página configuración/Activar HTTPS                   |             |

Estado de la comunicación a través de HTTPS. Esta opción se describe en [esta sección](Admin/tls.md).


## Activar HSTS

| Puede ajustarse con | Nombre                                             | Comentarios                                             |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| objeto webServer    | [`HSTSEnabled`](API/WebServerClass.md#hstsenabled) | Booleano, true para activar HSTS (por defecto es false) |
| `WEB SET OPTION`    | `Web HSTS enabled`                                 | 0 (desactivado, por defecto) o 1 (activado)             |

Estado de HTTP Strict Transport Security (HSTS).

When [HTTPS is enabled](#enable-https), keep in mind that if [HTTP is also enabled](#enable-http), the browser can still switch between HTTPS and HTTP (for example, in the browser URL area, the user can replace "https" by "http"). To forbid http redirections, you can [disable HTTP](#enable-http), however in this case an error message is displayed to client HTTP requests.

HSTS allows the 4D web server to declare that browsers should only interact with it via secure HTTPS connections. Once activated, the 4D web server will automatically add HSTS-related information to all response headers. Browsers will record the HSTS information the first time they receive a response from the 4D web server, then any future HTTP requests will automatically be transformed into HTTPS requests. The length of time this information is stored by the browser is specified with the Web **HSTS max age** setting.

> HSTS requires that [HTTPS is enabled](#enable-https) on the server. [HTTP](#enable-http) must also be enabled to allow client initial connections.

> Puede obtener el modo de conexión actual utilizando el comando `WEB Is secured connection`.


## HSTS Max Age

| Puede ajustarse con | Nombre                                           | Comentarios        |
| ------------------- | ------------------------------------------------ | ------------------ |
| objeto webServer    | [`HSTSMaxAge`](API/WebServerClass.md#hstsmaxage) | número en segundos |
| `WEB SET OPTION`    | `Web HSTS max age`                               | número en segundos |

Specifies the maximum length of time (in seconds) that HSTS is active for each new client connection. Esta información se almacena del lado del cliente durante el tiempo especificado. El valor por defecto es 63072000 (2 años)

> **Atención:** una vez activado HSTS, las conexiones de los clientes seguirán utilizando este mecanismo durante el tiempo especificado. Cuando esté probando sus aplicaciones, se recomienda definir una duración corta para poder cambiar entre los modos de conexión segura y no segura si es necesario.





## Nivel de compresión

| Puede ajustarse con | Nombre                                                               | Comentarios                          |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------ |
| objeto webServer    | [`HTTPCompressionLevel`](API/WebServerClass.md#httpcompressionlevel) |                                      |
| `WEB SET OPTION`    | `Web HTTP compression level`                                         | Se aplica a la Web y al servicio Web |

Compression level for all compressed HTTP exchanges for the 4D web server (client requests or server replies). This setting lets you optimize exchanges by either privileging speed of execution (less compression) or the amount of compression (less speed). The choice of a value depends on the size and type of data exchanged.

Pass 1 to 9 as value where 1 is the fastest compression and 9 the highest. You can also pass -1 to get a compromise between speed and rate of compression. Por defecto, el nivel de compresión es 1 (compresión más rápida).

## Umbral de compresión HTTP

| Puede ajustarse con | Nombre                                                                       | Comentarios |
| ------------------- | ---------------------------------------------------------------------------- | ----------- |
| objeto webServer    | [`HTTPCompressionThreshold`](API/WebServerClass.md#httpcompressionthreshold) |             |
| `WEB SET OPTION`    | `Web HTTP compression threshold`                                             |             |

In the framework of optimized HTTP exchanges, size threshold for requests below which exchanges should not be compressed. Este parámetro es útil para evitar la pérdida de tiempo de la máquina al comprimir los intercambios pequeños.

Pasa el tamaño expresado en bytes como valor. Por defecto, el límite de compresión está fijado en 1024 bytes.


## Puerto HTTP

| Puede ajustarse con           | Nombre                                                           | Comentarios |
| ----------------------------- | ---------------------------------------------------------------- | ----------- |
| objeto webServer              | [`HTTPPort`](API/WebServerClass.md#httpport)                     | number      |
| `WEB SET OPTION`              | `Web port ID`                                                    |             |
| Caja de diálogo de parámetros | [Página Configuración/Puerto HTTP](../settings/web.md#http-port) |             |

Número de puerto IP (TCP) de escucha para HTTP. By default, 4D publishes a web application on the regular Web HTTP Port (TCP port), which is port 80. If that port is already used by another web service, you need to change the HTTP Port used by 4D for this database.

> En macOS, la modificación del puerto HTTP permite iniciar el servidor web 4D sin ser el usuario raíz de la máquina (ver [macOS HelperTool](#macos-helpertool)).

From a web browser, you need to include the non-default HTTP port number into the address you enter for connecting to the web application. The address must have a suffix consisting of a colon followed by the port number. For example, if you are using the HTTP port number 8080, you will specify "123.4.567.89:8080".
> **Atención**: si utiliza números de puerto TCP distintos a los predeterminados (80 para HTTP estándar y 443 para HTTPS), tenga cuidado de no utilizar números de puerto que sean predeterminados para otros servicios que pueda querer utilizar simultáneamente. Por ejemplo, si también tiene previsto utilizar el protocolo FTP en su equipo servidor web, no utilice los puertos TCP 20 y 21, que son los puertos por defecto para ese protocolo. Los números de puertos inferiores a 256 están reservados para servicios conocidos y los números de puertos de 256 a 1024 están reservados para servicios específicos originados en las plataformas UNIX. Para obtener la máxima seguridad, especifique un número de puerto más allá de estos intervalos (por ejemplo, en los 2000 o 3000).

If you specify 0, 4D will use the default HTTP port number 80.


## HTTP Trace

| Puede ajustarse con | Nombre                                         | Comentarios                          |
| ------------------- | ---------------------------------------------- | ------------------------------------ |
| objeto webServer    | [`HTTPTrace`](API/WebServerClass.md#httptrace) | Booleano, falso por defecto          |
| `WEB SET OPTION`    | `Web HTTP TRACE`                               | Integer, 0 por defecto (desactivado) |

Activación del método HTTP TRACE en el servidor web 4D. For security reasons, by default the 4D web server rejects HTTP TRACE requests with an error 405. If necessary, you can enable the HTTP TRACE method, in which case the 4D Web server replies to HTTP TRACE requests with the request line, header, and body.




## Puerto HTTPS

| Puede ajustarse con | Nombre                                         | Comentarios |
| ------------------- | ---------------------------------------------- | ----------- |
| objeto webServer    | [`HTTPSPort`](API/WebServerClass.md#httpsport) | number      |


|`WEB SET OPTION`|`Web HTTPS port ID`||

|Settings dialog box|[Configuration page/HTTPS Port](../settings/web.md#https-port)||

Número de puerto IP de escucha para las conexiones HTTPS vía TLS. Por defecto, el valor es 443 (valor estándar). See also [HTTP Port](#http-port) for information on port numbers.


## Tiempo de espera del proceso inactivo

| Puede ajustarse con           | Nombre                                                                                                    | Comentarios |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer              | [`inactiveProcessTimeout`](API/WebServerClass.md#inactiveprocesstimeout)                                  |             |
| `WEB SET OPTION`              | `Web inactive process timeout`                                                                            |             |
| Caja de diálogo de parámetros | [Página Opciones (I)/Tiempo de espera de procesos inactivos](../settings/web.md#inactive-process-timeout) | Cursor      |

Life duration (in minutes) of inactive processes associated with sessions. At the end of the timeout, the process is killed on the server, the `On Web Close Process` database method is called, then the session context is destroyed.

Por defecto: 480 minutos (pase 0 para restaurar el valor por defecto)


## Tiempo de espera de las sesiones inactivas

| Puede ajustarse con | Nombre                                                                   | Comentarios |
| ------------------- | ------------------------------------------------------------------------ | ----------- |
| objeto webServer    | [`inactiveSessionTimeout`](API/WebServerClass.md#inactivesessiontimeout) |             |
| `WEB SET OPTION`    | `Web inactive session timeout`                                           |             |

Duración de vida (en minutos) de las sesiones inactivas (duración definida en la cookie). Al final de este periodo, la cookie de sesión expira y deja de ser enviada por el cliente HTTP.

Por defecto: 480 minutos (pase 0 para restaurar el valor por defecto)


## Dirección IP de escucha

| Puede ajustarse con           | Nombre                                                             | Comentarios |
| ----------------------------- | ------------------------------------------------------------------ | ----------- |
| objeto webServer              | [`IPAddressToListen`](API/WebServerClass.md#ipaddresstolisten)     |             |
| `WEB SET OPTION`              | `Web IP address to listen`                                         |             |
| Caja de diálogo de parámetros | [Página Configuración/Dirección IP](../settings/web.md#ip-address) | Menú popup  |

IP address strings on which the 4D web server will receive HTTP requests (4D local and 4D Server).

By default, no specific address is defined (**Any** value in the Settings dialog box), which means that the server responds to all IP addresses. When you designate a specific address, the server only responds to requests sent to this address. This feature is designed for 4D web servers located on machines with multiple TCP/IP addresses. Por ejemplo, es el caso frecuente de la mayoría de los proveedores de hosting.

Valores posibles: cadena de direcciones IP. Both IPv6 string formats (e.g. "2001:0db8:0000:0000:0000:ff00:0042:8329") and IPv4 string formats (e.g. "123.45.67.89") are supported.

#### Acerca de la compatibilidad con IPv6

*   **No hay aviso cuando el puerto TCP está ocupado**<br> Cuando el servidor está configurado para responder en las direcciones IP "Todas", si el puerto TCP está siendo utilizado por otra aplicación, esto no se indica cuando se inicia el servidor. De hecho, el servidor 4D no detecta ningún error en este caso porque el puerto permanece libre en la dirección IPv6. Sin embargo, no es posible acceder a ella utilizando la dirección IPv4 de la máquina, ni mediante la dirección local 127.0.0.1.<p> Si su servidor 4D no parece responder en el puerto definido, puede probar la dirección [::1] en la máquina del servidor (equivalente a 127.0.0.1 para IPv6, añada [:portNum] para probar otro número de puerto). Si 4D responde, es probable que otra aplicación esté utilizando el puerto en IPv4.

*   **Direcciones IPv6 mapeadas en IPv4**<br> Para estandarizar el procesamiento, 4D ofrece una representación híbrida estándar de las direcciones IPv4 en IPv6. Estas direcciones se escriben con un prefijo de 96 bits en formato IPv6, seguido de 32 bits escritos en la notación decimal punto de IPv4. Por ejemplo, ::ffff:192.168.2.34 representa la dirección IPv4 192.168.2.34.

*   **Indicación de los números de puerto**<br> Dado que la notación IPv6 utiliza dos puntos (:), la adición de números de puerto puede dar lugar a cierta confusión, por ejemplo:

```code4d
    2001:0DB8::85a3:0:ac1f:8001 // dirección IPv6
    2001:0DB8::85a3:0:ac1f:8001:8081 // dirección IPv6 con puerto 8081
```

To avoid this confusion, we recommend using the [ ] notation whenever you combine an IPv6 address with a port number, for instance:

```code4d
    [2001:0DB8::85a3:0:ac1f:8001]:8081 //Dirección IPv6 con puerto 8081
```

## Sesiones Keep

| Puede ajustarse con           | Nombre                                                                                                                   | Comentarios                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| objeto webServer              | [`keepSession`](API/WebServerClass.md#keepsession)                                                                       |                                   |
| `WEB SET OPTION`              | `Web keep session`                                                                                                       |                                   |
| Caja de diálogo de parámetros | [Options (I) page/Legacy sessions (single process sessions)](../settings/web.md#legacy-sessions-single-process-sessions) | sólo en los proyectos convertidos |

Legacy session management enabling status for the 4D web server (deprecated).

> Cuando esta opción está marcada, la opción "Reutilización de los contextos temporales" se marca automáticamente (y se bloquea).


## Registro de los logs

| Puede ajustarse con           | Nombre                                               | Comentarios |
| ----------------------------- | ---------------------------------------------------- | ----------- |
| objeto webServer              | [`logRecording`](API/WebServerClass.md#logrecording) |             |
| `WEB SET OPTION`              | `Web log recording`                                  |             |
| Caja de diálogo de parámetros | [Página log (tipo)](../settings/web.md#log-format)   | Menú popup  |

Starts or stops the recording of requests received by the 4D web server in the *logweb.txt* file and sets its format. Por defecto, las peticiones no se registran (0/Sin archivo de registro). When enabled, the *logweb.txt* file is automatically placed in the Logs folder.

Este parámetro permite seleccionar el formato de este archivo. Valores disponibles:

| Valor | Nombre del formato          | Descripción                                                                                                                                                                                                                               |
| ----- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | No hay archivo de historial | Por defecto                                                                                                                                                                                                                               |
| 1     | Registro en formato CLF     | Formato de historial común - Cada línea del archivo representa una petición, como:`host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length` - Cada campo está separado por un espacio y cada línea termina con la secuencia CR/LF. |
| 2     | Registro en formato DLF     | Combined Log Format - Similar al formato CLF, pero añade dos campos HTTP adicionales al final de cada solicitud: Referer y User-agent.                                                                                                    |
| 3     | Registro en formato ELF     | Extended Log Format - A personalizar en la caja de diálogo de las Propiedades                                                                                                                                                             |
| 4     | Registro en formato WLF     | WebStar Log Format - A personalizar en la caja de diálogo de las Propiedades                                                                                                                                                              |

> Formats 3 and 4 are custom formats whose contents must be set beforehand in the [Settings dialog box](../settings/web.md#log-format). Si utiliza uno de estos formatos sin haber seleccionado ninguno de sus campos en esta página, el archivo de registro no se generará.


## Procesos Web simultáneos maximos

| Puede ajustarse con           | Nombre                                                                                                        | Comentarios |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer              | [`maxConcurrentProcesses`](API/WebServerClass.md#maxconcurrentprocesses)                                      |             |
| `WEB SET OPTION`              | `Web max concurrent processes`                                                                                |             |
| Caja de diálogo de parámetros | [Página Opciones (I)/Máximo de Procesos Web simultáneos](../settings/web.md#maximum-concurrent-web-processes) |             |

Strictly high limit of concurrent web processes that can be simultaneously open on the server when **no sessions** or **legacy sessions** are used (**scalable sessions** support an [unlimited number](sessions.md) of preemptive processes). This parameter allows prevention of server saturation as the result of massive number of requests. When the maximum number of concurrent Web processes (minus one) is reached, 4D no longer creates new processes and sends the HTTP status `503 - Service Unavailable` to all new requests.

Por defecto, el valor es 100. Puede definir el número entre 10 y 32000.


## Tamaño máximo de la petición

| Puede ajustarse con | Nombre                                                   | Comentarios |
| ------------------- | -------------------------------------------------------- | ----------- |
| objeto webServer    | [`maxRequestSize`](API/WebServerClass.md#maxrequestsize) |             |
| `WEB SET OPTION`    | `Web maximum requests size`                              |             |

Maximum size (in bytes) of incoming HTTP requests (POST) that the web server is authorized to process. Por defecto, el valor es de 2 000 000, es decir, algo menos de 2 MB. Passing the maximum value (2 147 483 648) means that, in practice, no limit is set.

Este límite se utiliza para evitar la saturación del servidor web debido a peticiones entrantes demasiado grandes. Este límite se utiliza para evitar la saturación del servidor web debido a peticiones entrantes demasiado grandes.

Valores posibles: 500 000 a 2 147 483 648.


## Número máximo de sesiones

| Puede ajustarse con | Nombre                                             | Comentarios |
| ------------------- | -------------------------------------------------- | ----------- |
| objeto webServer    | [`maxSessions`](API/WebServerClass.md#maxsessions) |             |
| `WEB SET OPTION`    | `Web max sessions`                                 |             |

Número máximo de sesiones simultáneas. When you reach the limit set, the oldest session is closed (and `On Web Close Process` database method is called) if the Web server needs to create a new one. The number of simultaneous sessions cannot exceed the [maximum number of Web processes](#maximum-concurrent-web-processes) (100 by default).

Default value: 100 (pass 0 to restore the default value).


## Versión TLS mínima

| Puede ajustarse con | Nombre                                                 | Comentarios |
| ------------------- | ------------------------------------------------------ | ----------- |
| objeto webServer    | [`minTLSVersion`](API/WebServerClass.md#mintlsversion) | number      |

Versión mínima de TLS aceptada para las conexiones. Se rechazarán los intentos de conexión de clientes que sólo soporten versiones inferiores a la mínima.

Valores posibles:

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (por defecto)
- 4 = TLSv1_3

Valores posibles:

> La versión TLS mínima utilizada por 4D puede ser modificada para la sesión utilizando el comando `SET DATABASE PARAMETER`, en cuyo caso la modificación se aplica a toda la aplicación 4D, incluyendo el servidor web, el servidor SQL y las conexiones cliente/servidor.


## Nombre

| Puede ajustarse con | Nombre                               | Comentarios |
| ------------------- | ------------------------------------ | ----------- |
| objeto webServer    | [`name`](API/WebServerClass.md#name) |             |


Nombre de la aplicación del servidor web. Útil cuando se inician los servidores web de los componentes.

## Versión OpenSSL

| Puede ajustarse con | Nombre                                                   | Comentarios  |
| ------------------- | -------------------------------------------------------- | ------------ |
| objeto webServer    | [`openSSLVersion`](API/WebServerClass.md#opensslversion) | Sólo lectura |

Versión de la librería OpenSSL utilizada.


## Perfect Forward Secrecy

| Puede ajustarse con | Nombre                                                                 | Comentarios               |
| ------------------- | ---------------------------------------------------------------------- | ------------------------- |
| objeto webServer    | [`perfectForwardSecrecy`](API/WebServerClass.md#perfectforwardsecrecy) | Booleano, de sólo lectura |

True if PFS is available on the web server (see [TLS](Admin/tls.md#perfect-forward-secrecy-pfs) section).


## Reutilizar los contextos temporales (en modo remoto)

| Puede ajustarse con           | Nombre                                                                                                | Comentarios |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Página Opciones (I)/Máximo de Procesos Web simultáneos](../settings/web.md#reuse-temporary-contexts) |             |

> This option is only available when **No sessions** option is checked.

Allows you to optimize the operation of the 4D Web Server in remote mode by reusing web processes created for processing previous web requests. In fact, the web server in 4D needs a specific web process for the handling of each web request; in remote mode, when necessary, this process connects to the 4D Server machine in order to access the data and database engine. It thus generates a temporary context using its own variables, selections, etc. Once the request has been dealt with, this process is killed.

When the **Reuse Temporary Contexts** option is checked, in remote mode 4D maintains the specific web processes and reuses them for subsequent requests. Al eliminar la etapa de creación del proceso, se mejora el rendimiento del servidor web.

In return, you must make sure in this case to systematically initialize the variables used in 4D methods in order to avoid getting incorrect results. Similarly, it is necessary to erase any current selections or records defined during the previous request.

> Esta opción sólo tiene efecto con un servidor web 4D en modo remoto. With a 4D in local mode, all web processes (other than session processes) are killed after their use.


## Robots.txt

Certain robots (query engines, spiders...) scroll through web servers and static pages. If you do not want robots to be able to access your entire site, you can define which URLs they are not allowed to access.

To do so, put the ROBOTS. TXT file at the server's root. Este archivo debe estar estructurado de la siguiente manera:

```4d
   User-Agent: <name>
   Disallow: <URL> o <beginning of the URL>
```

Por ejemplo:

```4d
   User-Agent: *
   Disallow: /4D
   Disallow: /%23%23
   Disallow: /GIFS/
```

*   “User-Agent: *” - todos los robots son afectados.
*   “Disallow: /4D” - Los robots no están autorizados a acceder a los URLs comenzando por/4D.
*   “Disallow: /%23%23” - Los robots no están autorizados a acceder a los URLs comenzando por/%23%23.
*   “Disallow: /GIFS/’ - Los robots no pueden acceder a la carpeta /GIFS/ ni a sus subcarpetas.

Otro ejemplo:

```code4d
   User-Agent: *
   Disallow: /
```

En este caso, los robots no pueden acceder a todo el sitio.


## Carpeta raíz

| Puede ajustarse con           | Nombre                                                                             | Comentarios                                                                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer              | [`rootFolder`](API/WebServerClass.md#rootfolder)                                   | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the *settings* parameter of the `start()` function |
| `WEB SET ROOT FOLDER`         |                                                                                    |                                                                                                                                       |
| Caja de diálogo de parámetros | [Página Configuración/Raiz HTML por defecto](../settings/web.md#default-html-root) |                                                                                                                                       |

Path of web server root folder, i.e. the folder in which 4D will search for the static and semi-dynamic HTML pages, pictures, etc., to send to the browsers. La ruta de acceso está en formato POSIX (ruta completa). The web server will need to be restarted in order for the new root folder to be taken into account.

Moreover, the HTML root folder defines, on the web server hard drive, the hierarchical level above which the files will not be accessible. If a requested URL or a 4D command tries to access a file located above the HTML root folder, an error is returned indicating that the file has not been found.

By default, 4D defines a HTML Root folder named **WebFolder**. If it does not already exist, the HTML root folder is physically created on disk at the moment the Web server is launched for the first time. Se crea la carpeta raíz:
- con 4D (local) y 4D Server, en el mismo nivel de la [carpeta del proyecto](Project/architecture.md#project-folder).
- con 4D en modo remoto, en la carpeta de recursos locales.

You can designate another default HTML root folder by entering its pathname.

- La ruta es relativa a la [carpeta del proyecto](Project/architecture.md#project-folder) (4D local y 4D Server) o a la carpeta que contiene la aplicación 4D o el paquete de software (4D en modo remoto).
- La ruta se expresa con la sintaxis POSIX (las carpetas se separan con una barra ("/"))
- Para "subir" un nivel en la jerarquía de las carpetas, introduzca "." (dos puntos) antes del nombre de la carpeta
- La ruta no debe comenzar con una barra (excepto si quiere que la carpeta raíz HTML sea la carpeta remota del proyecto o de 4D, pero que el acceso a las carpetas anteriores esté prohibido, en cuyo caso puede pasar "/" como carpeta raíz).

For example, if you want the HTML root folder to be the "Web" subfolder in the "MyWebApp" folder, enter "MyWebApp/Web".

> When the HTML root folder is modified, the cache is cleared so as to not store files whose access is restricted.


## Sesiones escalables

| Puede ajustarse con           | Nombre                                                                                                                         | Comentarios |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| objeto webServer              | [`scalableSession`](API/WebServerClass.md#scalablesession)                                                                     |             |
| `WEB SET OPTION`              | `Sesión escalable web`                                                                                                         |             |
| Caja de diálogo de parámetros | [Página Opciones (I)/Sesiones escalables (sesiones multiproceso)](../settings/web.md#scalable-sessions-multi-process-sessions) |             |

Scalable session management enabling status for the 4D web server. Web server sessions are detailed in the [User sessions](sessions.md) page.



## Session Cookie Domain

| Puede ajustarse con | Nombre                                                             | Comentarios |
| ------------------- | ------------------------------------------------------------------ | ----------- |
| objeto webServer    | [`sessionCookieDomain`](API/WebServerClass.md#sessioncookiedomain) |             |
| `WEB SET OPTION`    | `Web session cookie domain`                                        |             |

Campo "path" de la cookie de sesión. Utilizado para controlar el alcance de las cookies de sesión. Si define, por ejemplo, el valor "/*.4d.fr" para este selector, el cliente sólo enviará una cookie cuando la solicitud se dirija al dominio ".4d.fr", lo que excluye a los servidores que alojan datos estáticos externos.


## Nombre de la cookie de sesión

| Puede ajustarse con | Nombre                                                         | Comentarios |
| ------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer    | [`sessionCookieName`](API/WebServerClass.md#sessioncookiename) |             |
| `WEB SET OPTION`    | `Web session cookie name`                                      |             |

Nombre de la cookie utilizada para guardar el ID de sesión. Por defecto = "4DSID".


## Ruta de la cookie de sesión

| Puede ajustarse con | Nombre                                                         | Comentarios |
| ------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer    | [`sessionCookiePath`](API/WebServerClass.md#sessioncookiepath) |             |
| `WEB SET OPTION`    | `Web session cookie path`                                      |             |

Campo "path" de la cookie de sesión. Se utiliza para controlar el alcance de las cookies de sesión. Si define, por ejemplo, el valor "/4DACTION" para este selector, el cliente sólo enviará una cookie para las peticiones dinámicas que empiecen por 4DACTION, y no para las imágenes, páginas estáticas, etc.

## Session Cookie SameSite

| Puede ajustarse con | Nombre                                                                 | Comentarios |
| ------------------- | ---------------------------------------------------------------------- | ----------- |
| objeto webServer    | [`sessionCookieSameSite`](API/WebServerClass.md#sessioncookiesamesite) |             |

Valor del atributo `SameSite` de la cookie de sesión. This attribute allows you to declare if your cookie should be restricted to a first-party or same-site context, as a protection from some cross-site request forgery ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)) attacks.

> For a detailed description of the `SameSite` attribute, please refer to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) or [this web.dev page](https://web.dev/samesite-cookies-explained/).

Hay tres valores disponibles:

- "Estricto" (valor predeterminado del atributo `SameSite` para las cookies de sesión de 4D): las cookies sólo se enviarán en el contexto de primera parte, es decir, el contexto correspondiente al dominio del sitio y nunca a sitios web de terceros.
- "Lax": las cookies no se envían en las subpeticiones de sitios cruzados (por ejemplo, para cargar imágenes o marcos en un sitio de terceros), sino que se envían cuando un usuario está navegando hacia el sitio de origen (es decir, sigue un enlace).
- "Ninguna": las cookies se envían en todos los contextos, es decir, en las respuestas a las solicitudes de primera parte y de origen cruzado. Cuando se utiliza el valor "None", el atributo cookie `Secure` también debe ser definido (o la cookie será bloqueada).

The `Secure` attribute value of the session cookie is automatically set to "True" if the connection is HTTPS (whatever the `SameSite` attribute value).

> It is not recommended to set `SameSite=None` on a HTTP server since the `Secure` attribute will be missing (used in HTTPS only) and cookies will be blocked.



## Utilizar los procesos apropiativos

| Puede ajustarse con           | Nombre                                                                                                | Comentarios |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Página Opciones (I)/Máximo de Procesos Web simultáneos](../settings/web.md#use-preemptive-processes) |             |

This option enables the preemptive mode for your application's web server code when **No sessions** option is selected (the preemptive mode is always enabled with **scalable sessions**). When this option is checked in this context, the 4D compiler will automatically evaluate the thread-safety property of each piece of [web-related code](preemptiveWeb.md#thread-safety-of-4d-web-code) and return errors in case of incompatibility.




## Parámetros obsoletos

The following settings are still supported but rely on deprecated features or technologies. Generalmente se recomienda mantener los valores por defecto.

#### Autorizar el acceso a la base de datos a través de las URL 4DSYNC

This option controls the support of HTTP synchronization requests containing deprecated */4DSYNC* URLs.

#### Validación de la dirección IP de la sesión

> This option is not not available in [scalable sessions mode](WebServer/sessions.md) (there is no validation).

Estado de validación de la dirección IP para las cookies de sesión. For security reasons, by default the 4D web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. En algunas aplicaciones específicas, es posible que desee desactivar esta validación y aceptar las cookies de sesión, incluso cuando sus direcciones IP no coinciden. For example when mobile devices switch between Wifi and 4G/5G networks, their IP address will change. In this case, you must pass 0 in this option to allow clients to be able to continue using their Web sessions even when the IP addresses change. Note that this setting lowers the security level of your application. When it is modified, this setting is effective immediately (you do not need to restart the HTTP server).




#### Enviar directamente los caracteres extendidos

When this option is checked, the web server sends extended characters “as is” in semi-dynamic pages, without converting them into HTML entities. This option has shown a speed increase on most foreign operating systems (especially the Japanese system).


#### Conexiones Keep-Alive

El servidor web 4D puede utilizar conexiones persistentes. The keep-alive option allows you to maintain a single open TCP connection for the set of exchanges between the web browser and the server to save system resources and to optimize transfers.

The **Use Keep-Alive Connections** option enables or disables keep-alive TCP connections for the web server. Esta opción está activada por defecto. In most cases, it is advisable to keep this option check since it accelerates the exchanges. If the web browser does not support connection keep alive, the 4D Web Server automatically switches to HTTP/1.0.

The 4D Web Server keep-alive function concerns all TCP/IP connections (HTTP, HTTPS). Note however that keep-alive connections are not always used for all 4D web processes.

En algunos casos, se pueden invocar otras funciones internas optimizadas. Keep-alive connections are useful mainly for static pages.

Dos opciones le permiten definir cómo funcionan las conexiones persistentes:

*   **Número de peticiones por conexión**: permite definir el número máximo de peticiones y de respuestas capaces de viajar por una conexión persistente. Limitar el número de peticiones por conexión permite evitar la inundación del servidor debido a un gran número de peticiones entrantes (una técnica utilizada por los hackers).<p> El valor por defecto (100) puede ser aumentado o disminuido en función de los recursos de la máquina que aloja el servidor 4D web.

*   **Tiempo de espera antes de desconexión**: este valor define el periodo máximo de espera (en segundos) durante el cual el servidor web mantiene una conexión TCP abierta sin recibir ninguna petición del navegador web. Una vez finalizado este periodo, el servidor cierra la conexión.<p> Si el navegador web envía una solicitud después de cerrar la conexión, se crea automáticamente una nueva conexión TCP. Esta operación no es visible para el usuario.

