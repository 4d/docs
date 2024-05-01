---
id: webServerConfig
title: Configuración
---

Los parámetros del servidor web 4D incluye parámetros de seguridad, puertos de escucha, rutas por defecto y varias opciones que cubren todas las funcionalidades del servidor. 4D ofrece valores por defecto para todos los parámetros.

## ¿Dónde configurar los parámetros?

Hay diferentes maneras de configurar los parámetros del servidor web 4D, en función del alcance y del servidor que se quiera configurar:

| Ubicación del parámetro                                                          | Alcance                                                                     | Servidor web a utilizar                                               |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [webServer object](webServerObject.md)                                           | Temporal (sesión actual)                                 | Todos los servidores web, incluidos los servidores web de componentes |
| `WEB SET OPTION` or a `WEB XXX` command                                          | Temporal (sesión actual)                                 | Servidor principal                                                    |
| [**Settings** dialog box](../settings/web.md) (**Web** pages) | Permanente (todas las sesiones, almacenadas en el disco) | Servidor principal                                                    |

> Algunos parámetros no están disponibles desde todos los lugares.

## Caché

| Puede ajustarse con           | Nombre                                                                             | Comentarios |
| ----------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Configuration page/Use the 4D Web cache](../settings/web.md#use-the-4d-web-cache) |             |
| Caja de diálogo de parámetros | [Configuration page/Page Cache Size](../settings/web.md#page-cache-size)           |             |

Activa y configura la caché de las páginas web.

The 4D web server has a cache that allows you to load static pages, GIF images, JPEG images (<512 kb) and style sheets (.css files) in memory, as they are requested. El uso de la caché permite aumentar considerablemente el rendimiento del servidor web cuando se envían páginas estáticas. El caché se comparte entre todos los procesos web. Cuando la caché está activada, el servidor web de 4D busca primero en la caché toda página estática solicitada por el navegador. Si encuentra la página, la envía inmediatamente. Si no, 4D carga la página desde el disco y la coloca en la caché.

You can modify the size of the cache in the **Pages Cache Size** area. El valor a definir depende del número y del tamaño de las páginas estáticas de su sitio web, así como de los recursos de que dispongan las máquinas locales.

> While using your web database, you can check the performance of the cache by using the `WEB GET STATISTICS` command. Si, por ejemplo, observa que la tasa de uso de la caché se acerca al 100%, puede considerar aumentar el tamaño que se le ha asignado. Los URL [/4DSTATS] y [/4DHTMLSTATS] también permiten obtener información sobre el estado de la caché.

## Carpeta de certificados

| Puede ajustarse con | Nombre              | Comentarios                                                                                                                                            |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| objeto webServer    | `certificateFolder` | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the _settings_ parameter of the `start()` function. |

Carpeta donde se encuentran los archivos del certificado TLS para el servidor web.

By default with 4D or 4D Server, these files must be placed next to the [project folder](Project/architecture.md#project-folder).

With 4D in remote mode, these files must be located in the local resources folder of the database on the remote machine (see `4D Client Database Folder` paragraph of the `Get 4D folder` command). Debe copiar estos archivos manualmente en la máquina remota.

> TLS certificate files are _key.pem_ (document containing the private encryption key) and _cert.pem_ (document containing the certificate).

## Conjunto de caracteres

| Puede ajustarse con           | Nombre                                                                               | Comentarios                  |
| ----------------------------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| objeto webServer              | `characterSet`                                                                       | Entero MIBEnum o cadena Name |
| `WEB SET OPTION`              | `Web character set`                                                                  | Entero MIBEnum o cadena Name |
| Caja de diálogo de parámetros | [Options (II) page/Standard Set](../settings/web.md#standard-set) | Menú popup                   |

Define el conjunto de caracteres que utilizará el servidor web de 4D. El valor por defecto depende del lenguaje del sistema operativo.

> Esta configuración también se utiliza para generar informes rápidos en formato HTML.

## Lista de cifrado

| Puede ajustarse con | Nombre                                             | Comentarios |
| ------------------- | -------------------------------------------------- | ----------- |
| objeto webServer    | [`cipherSuite`](API/WebServerClass.md#ciphersuite) | Text        |

Lista de cifrado utilizada para el protocolo seguro; establece la prioridad de los algoritmos de cifrado implementados por el servidor web. Puede ser una secuencia de cadenas separadas por dos puntos (por ejemplo "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

> The default cipher list used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server, client/server connections, as well as the HTTP client and all the 4D commands that make use of the secure protocol.

## Parámetros CORS

| Puede ajustarse con           | Nombre                                                                                                                             | Comentarios                                                                                                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer              | [`CORSSettings`](API/WebServerClass.md#corssettings)                                                                               | Colección de objetos (Lista de hosts y métodos permitidos para el servicio CORS)                                                                              |
| `WEB SET OPTION`              | `Web CORS settings`                                                                                                                | Colección de objetos (Lista de hosts y métodos permitidos para el servicio CORS)                                                                              |
| Caja de diálogo de parámetros | [Options (II) page/Domain names and HTTP methods allowed](../settings/web.md#domain-names-HTTP-methods-allowed) | Haga clic en el botón [+] para añadir un nombre de dominio permitido y su(s) método(s) |

Lista de hosts y métodos permitidos para el servicio CORS.

#### Nombres de dominio (propiedad local)

Nombre de dominio o dirección IP desde donde las páginas externas pueden enviar solicitudes de datos al Servidor a través de CORS. Se pueden añadir múltiples atributos de dominio para crear una lista blanca. Se soportan varias sintaxis:

- 192.168.5.17:8081
- 192.168.5.17
- 192.168.\*
- 192.168.\*:8081
- http://192.168.5.17:8081
- http://\*.myDomain.com
- http://myProject.myDomain.com
- \*.myDomain.com
- myProject.myDomain.com
- \*

#### Métodos HTTP autorizados (propiedad methods)

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

[Enable CORS Service](#enable-cors-service)

## Debug log

| Puede ajustarse con | Nombre          | Comentarios |
| ------------------- | --------------- | ----------- |
| objeto webServer    | `debugLog`      | number      |
| `WEB SET OPTION`    | `Web debug log` | number      |

Status of the HTTP request log file of the web server ([_HTTPDebugLog_nn.txt_](../Debugging/debugLogFiles.md#httpdebuglogtxt), stored in the "Logs" folder of the application -- nn is the file number). Es útil para depurar problemas relacionados con el servidor web. Registra cada solicitud y cada respuesta en modo bruto. Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, también se pueden registrar las partes del cuerpo.

| Valor | Constante                      | Descripción                                                                                                                      |
| ----- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 0     | wdl disable                    | Los debug logs Web HTTP son desactivados                                                                                         |
| 1     | wdl enable without body        | Los debug logs Web HTTP son activados sin partes del cuerpo (en este caso se suministra el tamaño del cuerpo) |
| 3     | wdl enable with response body  | Los debug logs Web HTTP son activados con la partes del cuerpo únicamente                                                        |
| 5     | wdl enable with request body   | Los debug logs Web HTTP son activados con la partes del cuerpo en la petición únicamente                                         |
| 7     | wdl enable with all body parts | Los debug logs Web HTTP son activados con las partes del cuerpo en respuesta y petición                                          |

## Página de inicio por defecto

| Puede ajustarse con           | Nombre                                                                       | Comentarios                               |
| ----------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------- |
| objeto webServer              | [`defaultHomepage`](API/WebServerClass.md#defaulthomepage)                   | Text                                      |
| `WEB SET HOME PAGE`           |                                                                              | Puede ser diferente para cada proceso web |
| Caja de diálogo de parámetros | [Configuration page/Default Home Page](../settings/web.md#default-home-page) |                                           |

Designa una página de inicio por defecto para el servidor web. Esta página puede ser estática o [semi-dynamic].

Por defecto, cuando el servidor web se lanza por primera vez, 4D crea una página de inicio llamada "index.html" y la coloca en la carpeta raíz HTML. Si no modifica esta configuración, todo navegador que se conecte al servidor web obtendrá la siguiente página:

![](../assets/en/WebServer/defaultHomePage.png)

Puede designar otra página de inicio por defecto introduciendo su nombre de ruta.

- The path is relative to the [default HTML root folder](#root-folder).
- La ruta se expresa con la sintaxis POSIX (las carpetas se separan con una barra ("/"))
- La ruta no debe comenzar ni terminar con una barra.

Por ejemplo, si quiere que la página de inicio por defecto sea "MyHome.htm", y se encuentra en la carpeta "Web" (situada a su vez en la carpeta raíz HTML por defecto), utilice "Web/MyHome.htm".

If you do not specify any default home page, the `On Web Connection` database method is called. Le corresponde a usted gestionar la petición de manera procesal.

## Activar CORS

| Puede ajustarse con           | Nombre                                                                             | Comentarios                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| objeto webServer              | [`CORSEnabled`](API/WebServerClass.md#corsenabled)                                 | Booleano, true para activar CORS (False por defecto)           |
| `WEB SET OPTION`              | `Web CORS enabled`                                                                 | 0 (desactivado, por defecto) o 1 (activado) |
| Caja de diálogo de parámetros | [Options (II) page/Enable CORS](../settings/web.md#enable-cors) | Sin marcar por defecto                                                            |

El servidor web 4D implementa el cross-origin resource sharing (CORS) para permitir que páginas web específicas servidas desde otro dominio accedan a los recursos de la aplicación web actual a través de llamadas XHR, por ejemplo, utilizando REST. Por razones de seguridad, las peticiones "cross-domain" están prohibidas por defecto a nivel del navegador. Cuando está habilitado, las llamadas XHR (por ejemplo, peticiones REST) de páginas web fuera del dominio pueden ser permitidas en su aplicación (necesita definir la lista de direcciones permitidas en la lista de dominios CORS, ver Parámetros CORS más adelante). En este caso, si un dominio o un método no autorizado envía una petición cross-site, se rechaza con una respuesta de error "403 - prohibido".

Cuando se desactiva (por defecto), se ignoran todas las peticiones cruzadas enviadas con CORS.

For more information about CORS, please refer to the [Cross-origin resource sharing page](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

#### Ver también

[CORS Settings](#cors-settings)

## Activar HTTP

| Puede ajustarse con           | Nombre                                                           | Comentarios |
| ----------------------------- | ---------------------------------------------------------------- | ----------- |
| objeto webServer              | [`HTTPEnabled`](API/WebServerClass.md#httpenabled)               | boolean     |
| `WEB SET OPTION`              | `Web HTTP enabled`                                               |             |
| Caja de diálogo de parámetros | [Configuration page/Enable HTTP](../settings/web.md#enable-http) |             |

Indica si el servidor web acepta o no conexiones no seguras.

## Activar HTTPS

| Puede ajustarse con           | Nombre                                               | Comentarios |
| ----------------------------- | ---------------------------------------------------- | ----------- |
| objeto webServer              | [`HTTPSEnabled`](API/WebServerClass.md#httpsenabled) | boolean     |
| `WEB SET OPTION`              | `Web HTTPS enabled`                                  |             |
| Caja de diálogo de parámetros | Página configuración/Activar HTTPS                   |             |

Estado de la comunicación a través de HTTPS. This option is described in [this section](Admin/tls.md).

## Activar HSTS

| Puede ajustarse con | Nombre                                             | Comentarios                                                                       |
| ------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------- |
| objeto webServer    | [`HSTSEnabled`](API/WebServerClass.md#hstsenabled) | Booleano, true para activar HSTS (por defecto es false)        |
| `WEB SET OPTION`    | `Web HSTS enabled`                                 | 0 (desactivado, por defecto) o 1 (activado) |

Estado de HTTP Strict Transport Security (HSTS).

When [HTTPS is enabled](#enable-https), keep in mind that if [HTTP is also enabled](#enable-http), the browser can still switch between HTTPS and HTTP (for example, in the browser URL area, the user can replace "https" by "http"). To forbid http redirections, you can [disable HTTP](#enable-http), however in this case an error message is displayed to client HTTP requests.

HSTS permite al servidor web 4D declarar que los navegadores sólo deben interactuar con él a través de conexiones HTTPS seguras. Una vez activado, el servidor web 4D añadirá automáticamente información relacionada con HSTS a todos los encabezadoss de las respuestas. Los navegadores registrarán la información HSTS la primera vez que reciban una respuesta del servidor web 4D, luego cualquier solicitud HTTP futura se transformará automáticamente en solicitudes HTTPS. The length of time this information is stored by the browser is specified with the Web **HSTS max age** setting.

> HSTS requires that [HTTPS is enabled](#enable-https) on the server. [HTTP](#enable-http) must also be enabled to allow client initial connections.

> You can get the current connection mode using the `WEB Is secured connection` command.

## HSTS Max Age

| Puede ajustarse con | Nombre                                           | Comentarios        |
| ------------------- | ------------------------------------------------ | ------------------ |
| objeto webServer    | [`HSTSMaxAge`](API/WebServerClass.md#hstsmaxage) | número en segundos |
| `WEB SET OPTION`    | `Web HSTS max age`                               | número en segundos |

Especifica el tiempo máximo (en segundos) de activación de HSTS para cada nueva conexión cliente. Esta información se almacena del lado del cliente durante el tiempo especificado.
El valor por defecto es 63072000 (2 años)

> **Warning:** Once HSTS is enabled, client connections will continue to use this mechanism for the specified duration. Cuando esté probando sus aplicaciones, se recomienda definir una duración corta para poder cambiar entre los modos de conexión segura y no segura si es necesario.

## Nivel de compresión

| Puede ajustarse con | Nombre                                                               | Comentarios                          |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------ |
| objeto webServer    | [`HTTPCompressionLevel`](API/WebServerClass.md#httpcompressionlevel) |                                      |
| `WEB SET OPTION`    | `Web HTTP compression level`                                         | Se aplica a la Web y al servicio Web |

Nivel de compresión para todos los intercambios HTTP comprimidos para el servidor web 4D (peticiones clientes o respuestas servidor). Esta opción permite optimizar los intercambios privilegiando la velocidad de ejecución (menos compresión) o la cantidad de compresión (menos velocidad). La elección de un valor depende del tamaño y del tipo de datos intercambiados.

Pase un valor de 1 a 9 donde 1 es la compresión más rápida y 9 la más alta. También puede pasar -1 para un compromiso entre velocidad y tasa de compresión. Por defecto, el nivel de compresión es 1 (compresión más rápida).

## Umbral de compresión HTTP

| Puede ajustarse con | Nombre                                                                       | Comentarios |
| ------------------- | ---------------------------------------------------------------------------- | ----------- |
| objeto webServer    | [`HTTPCompressionThreshold`](API/WebServerClass.md#httpcompressionthreshold) |             |
| `WEB SET OPTION`    | `Web HTTP compression threshold`                                             |             |

En el contexto de los intercambios HTTP optimizados, un umbral de tamaño de peticiones por debajo del cual los intercambios no deben comprimirse. Este parámetro es útil para evitar la pérdida de tiempo de la máquina al comprimir los intercambios pequeños.

Pasa el tamaño expresado en bytes como valor. Por defecto, el umbral de compresión está en 1024 bytes.

## Puerto HTTP

| Puede ajustarse con           | Nombre                                                       | Comentarios |
| ----------------------------- | ------------------------------------------------------------ | ----------- |
| objeto webServer              | [`HTTPPort`](API/WebServerClass.md#httpport)                 | number      |
| `WEB SET OPTION`              | `Web port ID`                                                |             |
| Caja de diálogo de parámetros | [Configuration page/HTTP Port](../settings/web.md#http-port) |             |

Número de puerto IP (TCP) de escucha para HTTP. Por defecto, 4D publica una aplicación web en el puerto web HTTP normal (puerto TCP), que es el puerto 80. Si ese puerto ya es utilizado por otro servicio web, debe cambiar el puerto HTTP utilizado por 4D para esta base de datos.

> In macOS, modifying the HTTP port allows you to start the 4D web server without being the root user of the machine (see [macOS HelperTool](#macos-helpertool)).

Desde un navegador web, es necesario incluir el número de puerto HTTP no predeterminado en la dirección que se introduce para conectarse a la aplicación web. La dirección debe tener un sufijo formado por dos puntos seguido del número de puerto. Por ejemplo, si está utilizando el puerto HTTP número 8080, especificará "123.4.567.89:8080".

> **Warning**: If you use TCP port numbers other than the default numbers (80 for standard HTTP and 443 for HTTPS), be careful not to use port numbers that are defaults for other services that you might want to use simultaneously. Por ejemplo, si también tiene previsto utilizar el protocolo FTP en su equipo servidor web, no utilice los puertos TCP 20 y 21, que son los puertos por defecto para ese protocolo. Los números de puertos inferiores a 256 están reservados para servicios conocidos y los números de puertos de 256 a 1024 están reservados para servicios específicos originados en las plataformas UNIX. Para obtener la máxima seguridad, especifique un número de puerto más allá de estos intervalos (por ejemplo, en los 2000 o 3000).

Si especifica 0, 4D utilizará el número de puerto HTTP 80 por defecto.

## HTTP Trace

| Puede ajustarse con | Nombre                                         | Comentarios                                             |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------- |
| objeto webServer    | [`HTTPTrace`](API/WebServerClass.md#httptrace) | Booleano, falso por defecto                             |
| `WEB SET OPTION`    | `Web HTTP TRACE`                               | Integer, 0 por defecto (desactivado) |

Activación del método HTTP TRACE en el servidor web 4D. Por razones de seguridad, por defecto el servidor web 4D rechaza las peticiones HTTP TRACE con un error 405. Si es necesario, puede activar el método HTTP TRACE, en cuyo caso el servidor web 4D responde a las peticiones HTTP TRACE con la línea de petición, el encabezado y el cuerpo.

## Puerto HTTPS

| Puede ajustarse con           | Nombre                                                         | Comentarios |
| ----------------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer              | [`HTTPSPort`](API/WebServerClass.md#httpsport)                 | number      |
| `WEB SET OPTION`              | `Web HTTPS port ID`                                            |             |
| Caja de diálogo de parámetros | [Configuration page/HTTPS Port](../settings/web.md#https-port) |             |

Número de puerto IP de escucha para las conexiones HTTPS vía TLS. Por defecto, el valor es 443 (valor estándar). See also [HTTP Port](#http-port) for information on port numbers.

## Tiempo de espera del proceso inactivo

| Puede ajustarse con           | Nombre                                                                                                      | Comentarios |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer              | [`inactiveProcessTimeout`](API/WebServerClass.md#inactiveprocesstimeout)                                    |             |
| `WEB SET OPTION`              | `Web inactive process timeout`                                                                              |             |
| Caja de diálogo de parámetros | [Options (I) page/Inactive Process Timeout](../settings/web.md#inactive-process-timeout) | Cursor      |

Duración de vida (en minutos) de los procesos inactivos asociados a las sesiones. At the end of the timeout, the process is killed on the server, the `On Web Close Process` database method is called, then the session context is destroyed.

Por defecto: 480 minutos (pase 0 para restaurar el valor por defecto)

## Tiempo de espera de las sesiones inactivas

| Puede ajustarse con | Nombre                                                                   | Comentarios |
| ------------------- | ------------------------------------------------------------------------ | ----------- |
| objeto webServer    | [`inactiveSessionTimeout`](API/WebServerClass.md#inactivesessiontimeout) |             |
| `WEB SET OPTION`    | `Web inactive session timeout`                                           |             |

Duración de vida (en minutos) de las sesiones inactivas (duración definida en la cookie). Al final de este periodo, la cookie de sesión expira y deja de ser enviada por el cliente HTTP.

Por defecto: 480 minutos (pase 0 para restaurar el valor por defecto)

## Dirección IP de escucha

| Puede ajustarse con           | Nombre                                                         | Comentarios |
| ----------------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer              | [`IPAddressToListen`](API/WebServerClass.md#ipaddresstolisten) |             |
| `WEB SET OPTION`              | `Web IP address to listen`                                     |             |
| Caja de diálogo de parámetros | [Configuration page/IP Address](../settings/web.md#ip-address) | Menú popup  |

Dirección IP (cadenas) en la que el servidor web 4D recibirá las peticiones HTTP (4D local y 4D Server).

By default, no specific address is defined (**Any** value in the Settings dialog box), which means that the server responds to all IP addresses. Cuando designa una dirección específica, el servidor sólo responde a las solicitudes enviadas a esta dirección. Esta función está diseñada para servidores web 4D ubicados en máquinas con múltiples direcciones TCP/IP. Es por ejemplo, el caso frecuente de la mayoría de los proveedores de hosting.

Valores posibles: cadena de direcciones IP. Los formatos IPv6 (por ejemplo "2001:0db8:0000:0000:0000:ff00:0042:8329") y IPv4 (e.g. "123.45.67.89") son soportados.

#### Acerca de la compatibilidad con IPv6

- **No warning when TCP port is occupied**<br/>
  When the server is set to respond on "Any" IP addresses, if the TCP port is being used by another application, this is not indicated when the server is started. De hecho, el servidor 4D no detecta ningún error en este caso porque el puerto permanece libre en la dirección IPv6. Sin embargo, no es posible acceder a ella utilizando la dirección IPv4 de la máquina, ni mediante la dirección local 127.0.0.1.

Si su servidor 4D no parece responder en el puerto definido, puede probar la dirección [::1] en la máquina del servidor (equivalente a 127.0.0.1 para IPv6, añada [:portNum] para probar otro número de puerto). Si 4D responde, es probable que otra aplicación esté utilizando el puerto en IPv4.

- **IPv4-mapped IPv6 addresses**<br/>
  To standardize processing, 4D provides a standard hybrid representation of IPv4 addresses in IPv6. Estas direcciones se escriben con un prefijo de 96 bits en formato IPv6, seguido de 32 bits escritos en la notación decimal punto de IPv4. Por ejemplo, ::ffff:192.168.2.34 representa la dirección IPv4 192.168.2.34.

- **Indication of port numbers**<br/>
  Since IPv6 notation uses colons (:), adding port numbers may lead to some confusion, for example:

```code4d
	2001:0DB8::85a3:0:ac1f:8001 // IPv6 address
	2001:0DB8::85a3:0:ac1f:8001:8081 // IPv6 address with port 8081
```

Para evitar esta confusión, se recomienda utilizar la notación [ ] siempre que se combine una dirección IPv6 con un número de puerto, por ejemplo:

```code4d
	[2001:0DB8::85a3:0:ac1f:8001]:8081 //IPv6 address with port 8081
```

## Keep Session

| Puede ajustarse con           | Nombre                                                                                                                                                         | Comentarios                       |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| objeto webServer              | [`keepSession`](API/WebServerClass.md#keepsession)                                                                                                             |                                   |
| `WEB SET OPTION`              | `Web keep session`                                                                                                                                             |                                   |
| Caja de diálogo de parámetros | [Options (I) page/Legacy sessions (single process sessions)](../settings/web.md#legacy-sessions-single-process-sessions) | sólo en los proyectos convertidos |

Estado de activación de la gestión de sesiones heredada para el servidor web 4D (obsoleto).

> Cuando esta opción está marcada, la opción "Reutilización de los contextos temporales" se marca automáticamente (y se bloquea).

## Registro de los logs

| Puede ajustarse con           | Nombre                                                              | Comentarios |
| ----------------------------- | ------------------------------------------------------------------- | ----------- |
| objeto webServer              | [`logRecording`](API/WebServerClass.md#logrecording)                |             |
| `WEB SET OPTION`              | `Web log recording`                                                 |             |
| Caja de diálogo de parámetros | [Log (type) page](../settings/web.md#log-format) | Menú popup  |

Starts or stops the recording of requests received by the 4D web server in the _logweb.txt_ file and sets its format. Por defecto, las peticiones no se registran (0/Sin archivo de registro). When enabled, the _logweb.txt_ file is automatically placed in the Logs folder.

Este parámetro permite seleccionar el formato de este archivo. Valores disponibles:

| Valor | Nombre del formato          | Descripción                                                                                                                                                                                                                                              |
| ----- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | No hay archivo de historial | Por defecto                                                                                                                                                                                                                                              |
| 1     | Registro en formato CLF     | Common Log Format - Each line of the file represents a request, such as: `host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length` - Each field is separated by a space and each line ends by the CR/LF sequence. |
| 2     | Registro en formato DLF     | Combined Log Format - Similar al formato CLF, pero añade dos campos HTTP adicionales al final de cada solicitud: Referer y User-agent.                                                                                   |
| 3     | Registro en formato ELF     | Extended Log Format - A personalizar en la caja de diálogo de las Propiedades                                                                                                                                                                            |
| 4     | Registro en formato WLF     | WebStar Log Format - A personalizar en la caja de diálogo de las Propiedades                                                                                                                                                                             |

> Formats 3 and 4 are custom formats whose contents must be set beforehand in the [Settings dialog box](../settings/web.md#log-format). Si utiliza uno de estos formatos sin haber seleccionado ninguno de sus campos en esta página, el archivo de registro no se generará.

## Procesos Web simultáneos maximos

| Puede ajustarse con           | Nombre                                                                                                                      | Comentarios |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer              | [`maxConcurrentProcesses`](API/WebServerClass.md#maxconcurrentprocesses)                                                    |             |
| `WEB SET OPTION`              | `Web max concurrent processes`                                                                                              |             |
| Caja de diálogo de parámetros | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#maximum-concurrent-web-processes) |             |

Strictly high limit of concurrent web processes that can be simultaneously open on the server when **no sessions** or **legacy sessions** are used (**scalable sessions** support an [unlimited number](sessions.md) of preemptive processes). Este parámetro permite evitar la saturación del servidor como resultado de un número masivo de peticiones. When the maximum number of concurrent Web processes (minus one) is reached, 4D no longer creates new processes and sends the HTTP status `503 - Service Unavailable` to all new requests.

Por defecto, el valor es 100. Puede definir el número entre 10 y 32000.

## Tamaño máximo de la petición

| Puede ajustarse con | Nombre                                                   | Comentarios |
| ------------------- | -------------------------------------------------------- | ----------- |
| objeto webServer    | [`maxRequestSize`](API/WebServerClass.md#maxrequestsize) |             |
| `WEB SET OPTION`    | `Web maximum requests size`                              |             |

Tamaño máximo (en bytes) de las peticiones HTTP entrantes (POST) que el servidor web está autorizado a procesar. Por defecto, el valor es de 2 000 000, es decir, algo menos de 2 MB. Pasar el valor máximo (2 147 483 648) significa que, en la práctica, no se define ningún límite.

Este límite se utiliza para evitar la saturación del servidor web debido a peticiones entrantes demasiado grandes. This limit is used to avoid web server saturation due to incoming requests that are too large.

Valores posibles: 500 000 a 2 147 483 648.

## Número máximo de sesiones

| Puede ajustarse con | Nombre                                             | Comentarios |
| ------------------- | -------------------------------------------------- | ----------- |
| objeto webServer    | [`maxSessions`](API/WebServerClass.md#maxsessions) |             |
| `WEB SET OPTION`    | `Web max sessions	`                                |             |

Número máximo de sesiones simultáneas. When you reach the limit set, the oldest session is closed (and `On Web Close Process` database method is called) if the Web server needs to create a new one. The number of simultaneous sessions cannot exceed the [maximum number of Web processes](#maximum-concurrent-web-processes) (100 by default).

Valor por defecto: 100 (pase 0 para restaurar el valor por defecto).

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

> The minimum TLS version used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server and client/server connections.

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

| Puede ajustarse con           | Nombre                                                                                                              | Comentarios |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#reuse-temporary-contexts) |             |

> This option is only available when **No sessions** option is checked.

Permite optimizar el funcionamiento del Servidor Web 4D en modo remoto reutilizando los procesos web creados para procesar peticiones web anteriores. De hecho, el servidor web de 4D necesita un proceso web específico para el procesamiento de cada petición web; en modo remoto, cuando es necesario, este proceso se conecta a la máquina de 4D Server para acceder al motor de datos y de la base de datos. Así, genera un contexto temporal utilizando sus propias variables, selecciones, etc. Una vez atendida la petición, este proceso se cierra.

When the **Reuse Temporary Contexts** option is checked, in remote mode 4D maintains the specific web processes and reuses them for subsequent requests. Al eliminar la etapa de creación del proceso, se mejora el rendimiento del servidor web.

A cambio, debe asegurarse en este caso de inicializar sistemáticamente las variables utilizadas en los métodos 4D para evitar obtener resultados incorrectos. Del mismo modo, es necesario borrar las selecciones actuales o los registros definidos durante la petición anterior.

> Esta opción sólo tiene efecto con un servidor web 4D en modo remoto. Con un 4D en modo local, todos los procesos web (que no sean procesos de sesión) son eliminados después de su uso.

## Robots.txt

Certain robots (query engines, spiders...) scroll through web servers and static pages. Si no quiere que los robots puedan acceder a todo su sitio, puede definir las URLs
a las que no pueden acceder.

Para ello, ponga el archivo ROBOTS.TXT en la raíz del servidor. Este archivo debe estar estructurado de la siguiente manera:

```4d
   User-Agent: <name>
   Disallow: <URL> or <beginning of the URL>
```

Por ejemplo:

```4d
   User-Agent: *
   Disallow: /4D
   Disallow: /%23%23
   Disallow: /GIFS/
```

- “User-Agent: \*” - todos los robots son afectados.
- “Disallow: /4D” - Los robots no están autorizados a acceder a los URLs comenzando por/4D.
- “Disallow: /%23%23” - Los robots no están autorizados a acceder a los URLs comenzando por/%23%23.
- “Disallow: /GIFS/’ - Los robots no pueden acceder a la carpeta /GIFS/ ni a sus subcarpetas.

Otro ejemplo:

```code4d
   User-Agent: *
   Disallow: /
```

En este caso, los robots no pueden acceder a todo el sitio.

## Carpeta raíz

| Puede ajustarse con           | Nombre                                                                       | Comentarios                                                                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer              | [`rootFolder`](API/WebServerClass.md#rootfolder)                             | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the _settings_ parameter of the `start()` function |
| `WEB SET ROOT FOLDER`         |                                                                              |                                                                                                                                       |
| Caja de diálogo de parámetros | [Configuration page/Default HTML Root](../settings/web.md#default-html-root) |                                                                                                                                       |

Ruta de la carpeta raíz del servidor web, es decir, la carpeta en la que 4D buscará las páginas HTML estáticas y semidinámicas, imágenes, etc., para enviarlas a los navegadores. La ruta de acceso está en formato POSIX (ruta completa). Será necesario reiniciar el servidor web para que se tenga en cuenta la nueva carpeta raíz.

Además, la carpeta raíz HTML define, en el disco duro del servidor web, el nivel jerárquico por encima del cual los archivos no serán accesibles. Si una URL solicitada o un comando 4D intenta acceder a un archivo situado por encima de la carpeta raíz de HTML, se devuelve un error indicando que el archivo no se ha encontrado.

By default, 4D defines a HTML Root folder named **WebFolder**. Si no existe, la carpeta raíz HTML se crea físicamente en el disco en el momento en que se lanza el servidor web por primera vez. Se crea la carpeta raíz:

- with 4D (local) and 4D Server, at the same level as the [Project folder](Project/architecture.md#project-folder).
- con 4D en modo remoto, en la carpeta de recursos locales.

Puede designar otra página carpeta HTML raíz por defecto introduciendo su ruta de acceso.

- The path is relative to the [Project folder](Project/architecture.md#project-folder) (4D local and 4D Server) or to the folder containing the 4D application or software package (4D in remote mode).
- La ruta se expresa con la sintaxis POSIX (las carpetas se separan con una barra ("/"))
- Para "subir" un nivel en la jerarquía de las carpetas, introduzca "." (dos puntos) antes del nombre de la carpeta
- La ruta no debe comenzar con una barra (excepto si quiere que la carpeta raíz HTML sea la carpeta remota del proyecto o de 4D, pero que el acceso a las carpetas anteriores esté prohibido, en cuyo caso puede pasar "/" como carpeta raíz).

Por ejemplo, si quiere que la carpeta raíz HTML sea la subcarpeta "Web" de la carpeta "MyWebApp", introduzca "MyWebApp/Web".

> Cuando se modifica la carpeta raíz HTML, la caché se borra para no almacenar archivos cuyo acceso está restringido.

## Sesiones escalables

| Puede ajustarse con           | Nombre                                                                                                                                                           | Comentarios |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer              | [`scalableSession`](API/WebServerClass.md#scalablesession)                                                                                                       |             |
| `WEB SET OPTION`              | `Sesión escalable web`                                                                                                                                           |             |
| Caja de diálogo de parámetros | [Options (I) page/Scalable sessions (multi-process sessions)](../settings/web.md#scalable-sessions-multi-process-sessions) |             |

Estado de activación de la gestión de sesiones escalable para el servidor web 4D. Web server sessions are detailed in the [User sessions](sessions.md) page.

## Dominio de la cookie de sesión

| Puede ajustarse con | Nombre                                                             | Comentarios |
| ------------------- | ------------------------------------------------------------------ | ----------- |
| objeto webServer    | [`sessionCookieDomain`](API/WebServerClass.md#sessioncookiedomain) |             |
| `WEB SET OPTION`    | `Web session cookie domain`                                        |             |

Campo "path" de la cookie de sesión. Utilizado para controlar el alcance de las cookies de sesión. Si define, por ejemplo, el valor "/\*.4d.fr" para este selector, el cliente sólo enviará una cookie cuando la solicitud se dirija al dominio ".4d.fr", lo que excluye a los servidores que alojan datos estáticos externos.

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

Value of the `SameSite` attribute value of the session cookie. This attribute allows you to declare if your cookie should be restricted to a first-party or same-site context, as a protection from some cross-site request forgery ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)) attacks.

> For a detailed description of the `SameSite` attribute, please refer to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) or [this web.dev page](https://web.dev/samesite-cookies-explained/).

Hay tres valores disponibles:

- "Strict" (default `SameSite` attribute value for 4D session cookies): cookies will only be sent in the first-party context, i.e. context matching the domain of the current site, and never to third-party websites.
- "Lax": las cookies no se envían en las subpeticiones de sitios cruzados (por ejemplo, para cargar imágenes o marcos en un sitio de terceros), sino que se envían cuando un usuario está navegando hacia el sitio de origen (es decir, sigue un enlace).
- "Ninguna": las cookies se envían en todos los contextos, es decir, en las respuestas a las solicitudes de primera parte y de origen cruzado. When "None" value is used, the cookie `Secure` attribute must also be set (or the cookie will be blocked).

The `Secure` attribute value of the session cookie is automatically set to "True" if the connection is HTTPS (whatever the `SameSite` attribute value).

> It is not recommended to set `SameSite=None` on a HTTP server since the `Secure` attribute will be missing (used in HTTPS only) and cookies will be blocked.

## Utilizar procesos apropiativos

| Puede ajustarse con           | Nombre                                                                                                              | Comentarios |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#use-preemptive-processes) |             |

This option enables the preemptive mode for your application's web server code when **No sessions** option is selected (the preemptive mode is always enabled with **scalable sessions**). When this option is checked in this context, the 4D compiler will automatically evaluate the thread-safety property of each piece of [web-related code](preemptiveWeb.md#thread-safety-of-4d-web-code) and return errors in case of incompatibility.

## Parámetros obsoletos

Los parámetros siguientes siguen siendo compatibles, pero se basan en funcionalidades o tecnologías obsoletas. Generalmente se recomienda mantener los valores por defecto.

#### Autorizar el acceso a la base de datos a través de las URL 4DSYNC

This option controls the support of HTTP synchronization requests containing deprecated _/4DSYNC_ URLs.

#### Validación de la dirección IP de la sesión

> This option is not not available in [scalable sessions mode](WebServer/sessions.md) (there is no validation).

Estado de validación de la dirección IP para las cookies de sesión. Por razones de seguridad, por defecto el servidor web 4D verifica la dirección IP de cada solicitud que contiene una cookie de sesión y la rechaza si esta dirección no coincide con la dirección IP utilizada para crear la cookie. En algunas aplicaciones específicas, es posible que desee desactivar esta validación y aceptar las cookies de sesión, incluso cuando sus direcciones IP no coinciden. Por ejemplo, cuando los dispositivos móviles cambian entre las redes Wifi y 4G/5G, su dirección IP cambiará. En este caso, debe pasar 0 en esta opción para permitir que los clientes puedan seguir utilizando sus sesiones web aunque las direcciones IP cambien. Tenga en cuenta que este parámetro reduce el nivel de seguridad de su aplicación. Cuando se modifica, esta configuración es efectiva inmediatamente (no es necesario reiniciar el servidor HTTP).

#### Enviar directamente los caracteres extendidos

Cuando esta opción está marcada, el servidor web envía los caracteres extendidos "tal cual" en las páginas semidinámicas, sin convertirlos en entidades HTML. Esta opción ha demostrado un aumento de la velocidad en la mayoría de los sistemas operativos extranjeros (especialmente el sistema japonés).

#### Conexiones Keep-Alive

El servidor web 4D puede utilizar conexiones persistentes. La opción keep-alive permite mantener una única conexión TCP abierta para el conjunto de intercambios entre el navegador y el servidor para ahorrar recursos del sistema y optimizar las transferencias.

The **Use Keep-Alive Connections** option enables or disables keep-alive TCP connections for the web server. Esta opción está activada por defecto. En la mayoría de los casos, es aconsejable mantener esta opción marcada ya que acelera los intercambios. Si el navegador web no soporta el mantenimiento de la conexión, el servidor web 4D cambia automáticamente a HTTP/1.0.

La función de conexiones persistentes del servidor web 4D afecta a todas las conexiones TCP/IP (HTTP, HTTPS). Tenga en cuenta, sin embargo, que las conexiones keep-alive no siempre se utilizan para todos los procesos web de 4D.

En algunos casos, se pueden invocar otras funciones internas optimizadas. Las conexiones persistentes son útiles principalmente para las páginas estáticas.

Dos opciones le permiten definir cómo funcionan las conexiones persistentes:

- **Number of requests by connection**: Allows you to set the maximum number of requests and responses able to travel over a connection keep alive. Limiting the number of requests per connection allows you to prevent server flooding due to a large number of incoming requests (a technique used by hackers).<p>
  The default value (100) can be increased or decreased depending on the resources of the machine hosting the 4D Web Server.</p>

- **Timeout**: This value defines the maximum wait period (in seconds) during which the web server maintains an open TCP connection without receiving any requests from the web browser. Once this period is over, the server closes the connection.<p>
  If the web browser sends a request after the connection is closed, a new TCP connection is automatically created. This operation is not visible for the user.</p>
