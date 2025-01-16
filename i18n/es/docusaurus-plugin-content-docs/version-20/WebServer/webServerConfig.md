---
id: webServerConfig
title: Configuración
---

Los parámetros del servidor web 4D incluye parámetros de seguridad, puertos de escucha, rutas por defecto y varias opciones que cubren todas las funcionalidades del servidor. 4D ofrece valores por defecto para todos los parámetros.


## ¿Dónde configurar los parámetros?

Hay diferentes maneras de configurar los parámetros del servidor web 4D, en función del alcance y del servidor que se quiera configurar:

| Ubicación del parámetro                                                        | Alcance                                                  | Servidor web a utilizar                                               |
| ------------------------------------------------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------- |
| [objeto webServer](webServerObject.md)                                         | Temporal (sesión actual)                                 | Todos los servidores web, incluidos los servidores web de componentes |
| `WEB SET OPTION` o comando `WEB XXX`                                           | Temporal (sesión actual)                                 | Servidor principal                                                    |
| [Caja de diálogo de las **Propiedades**](../settings/web.md) (páginas **Web**) | Permanente (todas las sesiones, almacenadas en el disco) | Servidor principal                                                    |

> Algunos parámetros no están disponibles desde todos los lugares.

## Caché

| Puede ajustarse con           | Nombre                                                                           | Comentarios |
| ----------------------------- | -------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Options (I) page/Use the 4D Web cache](../settings/web.md#use-the-4d-web-cache) |             |
| Caja de diálogo de parámetros | [Options (I) page/Page Cache Size](../settings/web.md#page-cache-size)           |             |

Activa y configura la caché de las páginas web.

El servidor web 4D dispone de una caché que permite cargar las páginas estáticas, las imágenes GIF, las imágenes JPEG (<512 kb) y las hojas de estilo (archivos.css) en memoria, a medida que se solicitan. El uso de la caché permite aumentar considerablemente el rendimiento del servidor web cuando se envían páginas estáticas. El caché se comparte entre todos los procesos web. Cuando la caché está activada, el servidor web de 4D busca primero en la caché toda página estática solicitada por el navegador. Si encuentra la página, la envía inmediatamente. Si no, 4D carga la página desde el disco y la coloca en la caché.

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
| objeto webServer    | [`cipherSuite`](API/WebServerClass.md#ciphersuite) | Text        |

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

[Activar CORS](#enable-cors-service)



## Debug log

| Puede ajustarse con | Nombre          | Comentarios |
| ------------------- | --------------- | ----------- |
| objeto webServer    | `debugLog`      | number      |
| `WEB SET OPTION`    | `Web debug log` | number      |

Estado del archivo de registro de peticiones HTTP del servidor web ([*HTTPDebugLog_nn.txt*](../Debugging/debugLogFiles.md#httpdebuglogtxt), almacenado en la carpeta "Logs" de la aplicación -- nn es el número de archivo). Es útil para depurar problemas relacionados con el servidor web. Registra cada solicitud y cada respuesta en modo bruto. Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, también se pueden registrar las partes del cuerpo.

| Valor | Constante                      | Descripción                                                                                                   |
| ----- | ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| 0     | wdl disable                    | Los debug logs Web HTTP son desactivados                                                                      |
| 1     | wdl enable without body        | Los debug logs Web HTTP son activados sin partes del cuerpo (en este caso se suministra el tamaño del cuerpo) |
| 3     | wdl enable with response body  | Los debug logs Web HTTP son activados con la partes del cuerpo únicamente                                     |
| 5     | wdl enable with request body   | Los debug logs Web HTTP son activados con la partes del cuerpo en la petición únicamente                      |
| 7     | wdl enable with all body parts | Los debug logs Web HTTP son activados con las partes del cuerpo en respuesta y petición                       |


## Página de inicio por defecto

| Puede ajustarse con           | Nombre                                                                                        | Comentarios                               |
| ----------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------- |
| objeto webServer              | [`defaultHomepage`](API/WebServerClass.md#defaulthomepage)                                    | Text                                      |
| `WEB SET HOME PAGE`           |                                                                                               | Puede ser diferente para cada proceso web |
| Caja de diálogo de parámetros | [Página configuración/Página de bienvenida por defecto](../settings/web.md#default-home-page) |                                           |

Designa una página de inicio por defecto para el servidor web. Esta página puede ser estática o [semi-dynamic].

Por defecto, cuando el servidor web se lanza por primera vez, 4D crea una página de inicio llamada "index.html" y la coloca en la carpeta raíz HTML. Si no modifica esta configuración, todo navegador que se conecte al servidor web obtendrá la siguiente página:

![](../assets/en/WebServer/defaultHomePage.png)

Puede designar otra página de inicio por defecto introduciendo su nombre de ruta.

- La ruta es relativa a la [carpeta HTML raíz ](#root-folder),.
- La ruta se expresa con la sintaxis POSIX (las carpetas se separan con una barra ("/"))
- La ruta no debe comenzar ni terminar con una barra.

Por ejemplo, si quiere que la página de inicio por defecto sea "MyHome.htm", y se encuentra en la carpeta "Web" (situada a su vez en la carpeta raíz HTML por defecto), utilice "Web/MyHome.htm".

Si no se especifica ninguna página de inicio por defecto, se llama al método base `On Web Connection`. Le corresponde a usted gestionar la petición de manera procesal.

## Activar CORS

| Puede ajustarse con           | Nombre                                                             | Comentarios                                          |
| ----------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| objeto webServer              | [`CORSEnabled`](API/WebServerClass.md#corsenabled)                 | Booleano, true para activar CORS (False por defecto) |
| `WEB SET OPTION`              | `Web CORS enabled`                                                 | 0 (desactivado, por defecto) o 1 (activado)          |
| Caja de diálogo de parámetros | [Página Options (II)/Activar CORS](../settings/web.md#enable-cors) | Sin marcar por defecto                               |

El servidor web 4D implementa el cross-origin resource sharing (CORS) para permitir que páginas web específicas servidas desde otro dominio accedan a los recursos de la aplicación web actual a través de llamadas XHR, por ejemplo, utilizando REST. Por razones de seguridad, las peticiones "cross-domain" están prohibidas por defecto a nivel del navegador. Cuando está habilitado, las llamadas XHR (por ejemplo, peticiones REST) de páginas web fuera del dominio pueden ser permitidas en su aplicación (necesita definir la lista de direcciones permitidas en la lista de dominios CORS, ver Parámetros CORS más adelante). En este caso, si un dominio o un método no autorizado envía una petición cross-site, se rechaza con una respuesta de error "403 - prohibido".

Cuando se desactiva (por defecto), se ignoran todas las peticiones cruzadas enviadas con CORS.

Para más información sobre CORS, consulte la página [Cross-origin resource sharing page](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) en Wikipedia.

#### Ver también
[Parámetros CORS](#cors-settings)

## Activar HTTP

| Puede ajustarse con           | Nombre                                                       | Comentarios |
| ----------------------------- | ------------------------------------------------------------ | ----------- |
| objeto webServer              | [`HTTPEnabled`](API/WebServerClass.md#httpenabled)           | boolean     |
| `WEB SET OPTION`              | `Web HTTP enabled`                                           |             |
| Caja de diálogo de parámetros | [Configuración/Activar HTTP](../settings/web.md#enable-http) |             |

Indica si el servidor web acepta o no conexiones no seguras.


## Activar HTTPS

| Puede ajustarse con           | Nombre                                               | Comentarios |
| ----------------------------- | ---------------------------------------------------- | ----------- |
| objeto webServer              | [`HTTPSEnabled`](API/WebServerClass.md#httpsenabled) | boolean     |
| `WEB SET OPTION`              | `Web HTTPS enabled`                                  |             |
| Caja de diálogo de parámetros | Página configuración/Activar HTTPS                   |             |

Estado de la comunicación a través de HTTPS. Esta opción se describe en [esta sección](Admin/tls.md).


## Activar HSTS

| Puede ajustarse con | Nombre                                             | Comentarios                                             |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| objeto webServer    | [`HSTSEnabled`](API/WebServerClass.md#hstsenabled) | Booleano, true para activar HSTS (por defecto es false) |
| `WEB SET OPTION`    | `Web HSTS enabled`                                 | 0 (desactivado, por defecto) o 1 (activado)             |

Estado de HTTP Strict Transport Security (HSTS).

Cuando [HTTPS está activado](#enable-https), recuerde que si [HTTP está también activado](#enable-http), el navegador puede cambiar entre HTTPS y HTTP (por ejemplo, en la zona de la URL del navegador, el usuario puede sustituir "https" por "http"). Para prohibir las redirecciones http, puede [desactivar el HTTP](#enable-http), sin embargo en este caso se muestra un mensaje de error a las peticiones HTTP del cliente.

HSTS permite al servidor web 4D declarar que los navegadores sólo deben interactuar con él a través de conexiones HTTPS seguras. Una vez activado, el servidor web 4D añadirá automáticamente información relacionada con HSTS a todos los encabezadoss de las respuestas. Los navegadores registrarán la información HSTS la primera vez que reciban una respuesta del servidor web 4D, luego cualquier solicitud HTTP futura se transformará automáticamente en solicitudes HTTPS. El tiempo que esta información es almacenada por el navegador se especifica con el parámetro web **HSTS max age**.

> HSTS requiere que [HTTPS esté activado](#enable-https) en el servidor. [El HTTP](#enable-http) también debe estar activado para permitir las conexiones iniciales del cliente.

> Puede obtener el modo de conexión actual utilizando el comando `WEB Is secured connection`.


## HSTS Max Age

| Puede ajustarse con | Nombre                                           | Comentarios        |
| ------------------- | ------------------------------------------------ | ------------------ |
| objeto webServer    | [`HSTSMaxAge`](API/WebServerClass.md#hstsmaxage) | número en segundos |
| `WEB SET OPTION`    | `Web HSTS max age`                               | número en segundos |

Especifica el tiempo máximo (en segundos) de activación de HSTS para cada nueva conexión cliente. Esta información se almacena del lado del cliente durante el tiempo especificado. El valor por defecto es 63072000 (2 años)

> **Atención:** una vez activado HSTS, las conexiones de los clientes seguirán utilizando este mecanismo durante el tiempo especificado. Cuando esté probando sus aplicaciones, se recomienda definir una duración corta para poder cambiar entre los modos de conexión segura y no segura si es necesario.





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

| Puede ajustarse con           | Nombre                                                           | Comentarios |
| ----------------------------- | ---------------------------------------------------------------- | ----------- |
| objeto webServer              | [`HTTPPort`](API/WebServerClass.md#httpport)                     | number      |
| `WEB SET OPTION`              | `Web port ID`                                                    |             |
| Caja de diálogo de parámetros | [Página Configuración/Puerto HTTP](../settings/web.md#http-port) |             |

Número de puerto IP (TCP) de escucha para HTTP. Por defecto, 4D publica una aplicación web en el puerto web HTTP normal (puerto TCP), que es el puerto 80. Si ese puerto ya es utilizado por otro servicio web, debe cambiar el puerto HTTP utilizado por 4D para esta base de datos.

> En macOS, la modificación del puerto HTTP permite iniciar el servidor web 4D sin ser el usuario raíz de la máquina (ver [macOS HelperTool](#macos-helpertool)).

Desde un navegador web, es necesario incluir el número de puerto HTTP no predeterminado en la dirección que se introduce para conectarse a la aplicación web. La dirección debe tener un sufijo formado por dos puntos seguido del número de puerto. Por ejemplo, si está utilizando el puerto HTTP número 8080, especificará "123.4.567.89:8080".
> **Atención**: si utiliza números de puerto TCP distintos a los predeterminados (80 para HTTP estándar y 443 para HTTPS), tenga cuidado de no utilizar números de puerto que sean predeterminados para otros servicios que pueda querer utilizar simultáneamente. Por ejemplo, si también tiene previsto utilizar el protocolo FTP en su equipo servidor web, no utilice los puertos TCP 20 y 21, que son los puertos por defecto para ese protocolo. Los números de puertos inferiores a 256 están reservados para servicios conocidos y los números de puertos de 256 a 1024 están reservados para servicios específicos originados en las plataformas UNIX. Para obtener la máxima seguridad, especifique un número de puerto más allá de estos intervalos (por ejemplo, en los 2000 o 3000).

Si especifica 0, 4D utilizará el número de puerto HTTP 80 por defecto.


## HTTP Trace

| Puede ajustarse con | Nombre                                         | Comentarios                          |
| ------------------- | ---------------------------------------------- | ------------------------------------ |
| objeto webServer    | [`HTTPTrace`](API/WebServerClass.md#httptrace) | Booleano, falso por defecto          |
| `WEB SET OPTION`    | `Web HTTP TRACE`                               | Integer, 0 por defecto (desactivado) |

Activación del método HTTP TRACE en el servidor web 4D. Por razones de seguridad, por defecto el servidor web 4D rechaza las peticiones HTTP TRACE con un error 405. Si es necesario, puede activar el método HTTP TRACE, en cuyo caso el servidor web 4D responde a las peticiones HTTP TRACE con la línea de petición, el encabezado y el cuerpo.




## Puerto HTTPS

| Puede ajustarse con           | Nombre                                                             | Comentarios |
| ----------------------------- | ------------------------------------------------------------------ | ----------- |
| objeto webServer              | [`HTTPSPort`](API/WebServerClass.md#httpsport)                     | number      |
| `WEB SET OPTION`              | `Web HTTPS port ID`                                                |             |
| Caja de diálogo de parámetros | [Página Configuración/Puerto HTTPS](../settings/web.md#https-port) |             |

Número de puerto IP de escucha para las conexiones HTTPS vía TLS. Por defecto, el valor es 443 (valor estándar). Ver también [HTTP Port](#http-port) para obtener información sobre los números de puerto.


## Tiempo de espera del proceso inactivo

| Puede ajustarse con           | Nombre                                                                                                    | Comentarios |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer              | [`inactiveProcessTimeout`](API/WebServerClass.md#inactiveprocesstimeout)                                  |             |
| `WEB SET OPTION`              | `Web inactive process timeout`                                                                            |             |
| Caja de diálogo de parámetros | [Página Opciones (I)/Tiempo de espera de procesos inactivos](../settings/web.md#inactive-process-timeout) | Cursor      |

Duración de vida (en minutos) de los procesos inactivos asociados con sesiones heredadas. Al final del tiempo de espera, el proceso se mata en el servidor, se llama al método base `On Web Legacy Close Session` y se destruye el contexto de la sesión.

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

Dirección IP (cadenas) en la que el servidor web 4D recibirá las peticiones HTTP (4D local y 4D Server).

Por defecto, no se define ninguna dirección específica (**valor ninguno** en la caja de diálogo Parámetros), lo que significa que el servidor responde a todas las direcciones IP. Cuando designa una dirección específica, el servidor sólo responde a las solicitudes enviadas a esta dirección. Esta función está diseñada para servidores web 4D ubicados en máquinas con múltiples direcciones TCP/IP. Es por ejemplo, el caso frecuente de la mayoría de los proveedores de hosting.

Valores posibles: cadena de direcciones IP. Los formatos IPv6 (por ejemplo "2001:0db8:0000:0000:0000:ff00:0042:8329") y IPv4 (e.g. "123.45.67.89") son soportados.

#### Acerca de la compatibilidad con IPv6

*   **No warning when TCP port is occupied**<br/> When the server is set to respond on "Any" IP addresses, if the TCP port is being used by another application, this is not indicated when the server is started. De hecho, el servidor 4D no detecta ningún error en este caso porque el puerto permanece libre en la dirección IPv6. Sin embargo, no es posible acceder a ella utilizando la dirección IPv4 de la máquina, ni mediante la dirección local 127.0.0.1.

Si su servidor 4D no parece responder en el puerto definido, puede probar la dirección [::1] en la máquina del servidor (equivalente a 127.0.0.1 para IPv6, añada [:portNum] para probar otro número de puerto). Si 4D responde, es probable que otra aplicación esté utilizando el puerto en IPv4.

*   **IPv4-mapped IPv6 addresses**<br/> To standardize processing, 4D provides a standard hybrid representation of IPv4 addresses in IPv6. Estas direcciones se escriben con un prefijo de 96 bits en formato IPv6, seguido de 32 bits escritos en la notación decimal punto de IPv4. Por ejemplo, ::ffff:192.168.2.34 representa la dirección IPv4 192.168.2.34.

*   **Indication of port numbers**<br/> Since IPv6 notation uses colons (:), adding port numbers may lead to some confusion, for example:

```code4d
    2001:0DB8::85a3:0:ac1f:8001 // dirección IPv6
    2001:0DB8::85a3:0:ac1f:8001:8081 // dirección IPv6 con puerto 8081
```

Para evitar esta confusión, se recomienda utilizar la notación [ ] siempre que se combine una dirección IPv6 con un número de puerto, por ejemplo:

```code4d
    [2001:0DB8::85a3:0:ac1f:8001]:8081 //Dirección IPv6 con puerto 8081
```

## Keep Session

| Puede ajustarse con           | Nombre                                                                                                                        | Comentarios                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| objeto webServer              | [`keepSession`](API/WebServerClass.md#keepsession)                                                                            |                                   |
| `WEB SET OPTION`              | `Web keep session`                                                                                                            |                                   |
| Caja de diálogo de parámetros | [Página Opciones (I)/Sesiones Legacy (sesiones de proceso único)](../settings/web.md#legacy-sessions-single-process-sessions) | sólo en los proyectos convertidos |

Estado de activación de la gestión de sesiones heredada para el servidor web 4D (obsoleto).

> Cuando esta opción está marcada, la opción "Reutilización de los contextos temporales" se marca automáticamente (y se bloquea).


## Registro de los logs

| Puede ajustarse con           | Nombre                                               | Comentarios |
| ----------------------------- | ---------------------------------------------------- | ----------- |
| objeto webServer              | [`logRecording`](API/WebServerClass.md#logrecording) |             |
| `WEB SET OPTION`              | `Web log recording`                                  |             |
| Caja de diálogo de parámetros | [Página log (tipo)](../settings/web.md#log-format)   | Menú popup  |

Inicia o detiene el registro de las peticiones recibidas por el servidor web 4D en el archivo *logweb.txt* y define su formato. Por defecto, las peticiones no se registran (0/Sin archivo de registro). Cuando se activa, el archivo *logweb.txt* se coloca automáticamente en la carpeta Logs.

Este parámetro permite seleccionar el formato de este archivo. Valores disponibles:

| Valor | Nombre del formato          | Descripción                                                                                                                                                                                                                               |
| ----- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | No hay archivo de historial | Por defecto                                                                                                                                                                                                                               |
| 1     | Registro en formato CLF     | Formato de historial común - Cada línea del archivo representa una petición, como:`host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length` - Cada campo está separado por un espacio y cada línea termina con la secuencia CR/LF. |
| 2     | Registro en formato DLF     | Combined Log Format - Similar al formato CLF, pero añade dos campos HTTP adicionales al final de cada solicitud: Referer y User-agent.                                                                                                    |
| 3     | Registro en formato ELF     | Extended Log Format - A personalizar en la caja de diálogo de las Propiedades                                                                                                                                                             |
| 4     | Registro en formato WLF     | WebStar Log Format - A personalizar en la caja de diálogo de las Propiedades                                                                                                                                                              |

> Los formatos 3 y 4 son formatos personalizados cuyo contenido debe establecerse previamente en la [caja de diálogo Parámetros](../settings/web.md#log-format). Si utiliza uno de estos formatos sin haber seleccionado ninguno de sus campos en esta página, el archivo de registro no se generará.


## Procesos Web simultáneos maximos

| Puede ajustarse con           | Nombre                                                                                                         | Comentarios |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer              | [`maxConcurrentProcesses`](API/WebServerClass.md#maxconcurrentprocesses)                                       |             |
| `WEB SET OPTION`              | `Web max concurrent processes`                                                                                 |             |
| Caja de diálogo de parámetros | [Página Opciones (I)/Máximo de Procesos Web Concurrentes](../settings/web.md#maximum-concurrent-web-processes) |             |

Límite estrictamente superior de procesos web concurrentes que pueden estar abiertos simultáneamente en el servidor cuando **no sessions** o **legacy sessions** están siendo utilizados (**scalable sessions** soporta un [número ilimitado](sessions.md) de procesos apropiativos). Este parámetro permite evitar la saturación del servidor como resultado de un número masivo de peticiones. Cuando se alcanza el número máximo de procesos web concurrentes (menos uno), 4D deja de crear nuevos procesos y envía el estado HTTP `503 - Servicio no disponible` a todas las nuevas peticiones.

Por defecto, el valor es 100. Puede definir el número entre 10 y 32000.


## Tamaño máximo de la petición

| Puede ajustarse con | Nombre                                                   | Comentarios |
| ------------------- | -------------------------------------------------------- | ----------- |
| objeto webServer    | [`maxRequestSize`](API/WebServerClass.md#maxrequestsize) |             |
| `WEB SET OPTION`    | `Web maximum requests size`                              |             |

Tamaño máximo (en bytes) de las peticiones HTTP entrantes (POST) que el servidor web está autorizado a procesar. Por defecto, el valor es de 2 000 000, es decir, algo menos de 2 MB. Pasar el valor máximo (2 147 483 648) significa que, en la práctica, no se define ningún límite.

Este límite se utiliza para evitar la saturación del servidor web debido a peticiones entrantes demasiado grandes. Cuando una petición alcanza este límite, el servidor web 4D la rechaza.

Valores posibles: 500 000 a 2 147 483 648.


## Número máximo de sesiones

| Puede ajustarse con | Nombre                                             | Comentarios |
| ------------------- | -------------------------------------------------- | ----------- |
| objeto webServer    | [`maxSessions`](API/WebServerClass.md#maxsessions) |             |
| `WEB SET OPTION`    | `Web max sessions`                                 |             |

Número máximo de sesiones heredadas simultáneas. Cuando alcanza el límite establecido, se cierra la sesión heredada más antigua (y se llama al método base `On Web Legacy Close Session`) si el servidor web necesita crear una nueva. El número de sesiones heredadas simultáneas no puede superar el [número máximo de procesos web](#maximum-concurrent-web-processes) (100 por defecto).

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

Verdadero si PFS está disponible en el servidor web (ver la sección [TLS](Admin/tls.md#perfect-forward-secrecy-pfs)).


## Reutilizar los contextos temporales (en modo remoto)

| Puede ajustarse con           | Nombre                                                                                   | Comentarios |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Options (I) page/Reuse Temporary Contexts](../settings/web.md#reuse-temporary-contexts) |             |

> Esta opción sólo está disponible cuando la opción **Sin sesiones** está marcada.

Permite optimizar el funcionamiento del Servidor Web 4D en modo remoto reutilizando los procesos web creados para procesar peticiones web anteriores. De hecho, el servidor web de 4D necesita un proceso web específico para el procesamiento de cada petición web; en modo remoto, cuando es necesario, este proceso se conecta a la máquina de 4D Server para acceder al motor de datos y de la base de datos. Así, genera un contexto temporal utilizando sus propias variables, selecciones, etc. Una vez atendida la petición, este proceso se cierra.

Cuando la opción **Reutilizar los contextos temporales** está seleccionada, en modo remoto, 4D mantiene los procesos web específicos y los reutiliza para las siguientes peticiones. Al eliminar la etapa de creación del proceso, se mejora el rendimiento del servidor web.

A cambio, debe asegurarse en este caso de inicializar sistemáticamente las variables utilizadas en los métodos 4D para evitar obtener resultados incorrectos. Del mismo modo, es necesario borrar las selecciones actuales o los registros definidos durante la petición anterior.

> Esta opción sólo tiene efecto con un servidor web 4D en modo remoto. Con un 4D en modo local, todos los procesos web (que no sean procesos de sesión) son eliminados después de su uso.


## Robots.txt

Algunos robots (motores de búsqueda, arañas...) recorren los servidores web y las páginas estáticas. Si no quiere que los robots puedan acceder a todo su sitio, puede definir las URLs a las que no pueden acceder.

Para ello, ponga el archivo ROBOTS.TXT en la raíz del servidor. Este archivo debe estar estructurado de la siguiente manera:

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

| Puede ajustarse con           | Nombre                                                                             | Comentarios                                                                                                                                         |
| ----------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer              | [`rootFolder`](API/WebServerClass.md#rootfolder)                                   | La propiedad Text, pero puede ser un objeto [`4D.Folder`](API/FolderClass.md) cuando se utiliza con el parámetro *settings* de la función `start()` |
| `WEB SET ROOT FOLDER`         |                                                                                    |                                                                                                                                                     |
| Caja de diálogo de parámetros | [Página configuración/Raiz HTML por defecto](../settings/web.md#default-html-root) |                                                                                                                                                     |

Ruta de la carpeta raíz del servidor web, es decir, la carpeta en la que 4D buscará las páginas HTML estáticas y semidinámicas, imágenes, etc., para enviarlas a los navegadores. La ruta de acceso está en formato POSIX (ruta completa). Será necesario reiniciar el servidor web para que se tenga en cuenta la nueva carpeta raíz.

Además, la carpeta raíz HTML define, en el disco duro del servidor web, el nivel jerárquico por encima del cual los archivos no serán accesibles. Si una URL solicitada o un comando 4D intenta acceder a un archivo situado por encima de la carpeta raíz de HTML, se devuelve un error indicando que el archivo no se ha encontrado.

Por defecto, 4D define una carpeta raíz HTML llamada **WebFolder**. Si no existe, la carpeta raíz HTML se crea físicamente en el disco en el momento en que se lanza el servidor web por primera vez. Se crea la carpeta raíz:
- con 4D (local) y 4D Server, en el mismo nivel de la [carpeta del proyecto](Project/architecture.md#project-folder).
- con 4D en modo remoto, en la carpeta de recursos locales.

Puede designar otra página carpeta HTML raíz por defecto introduciendo su ruta de acceso.

- La ruta es relativa a la [carpeta del proyecto](Project/architecture.md#project-folder) (4D local y 4D Server) o a la carpeta que contiene la aplicación 4D o el paquete de software (4D en modo remoto).
- La ruta se expresa con la sintaxis POSIX (las carpetas se separan con una barra ("/"))
- Para "subir" un nivel en la jerarquía de las carpetas, introduzca "." (dos puntos) antes del nombre de la carpeta
- La ruta no debe comenzar con una barra (excepto si quiere que la carpeta raíz HTML sea la carpeta remota del proyecto o de 4D, pero que el acceso a las carpetas anteriores esté prohibido, en cuyo caso puede pasar "/" como carpeta raíz).

Por ejemplo, si quiere que la carpeta raíz HTML sea la subcarpeta "Web" de la carpeta "MyWebApp", introduzca "MyWebApp/Web".

> Cuando se modifica la carpeta raíz HTML, la caché se borra para no almacenar archivos cuyo acceso está restringido.


## Sesiones escalables

| Puede ajustarse con           | Nombre                                                                                                                         | Comentarios |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| objeto webServer              | [`scalableSession`](API/WebServerClass.md#scalablesession)                                                                     |             |
| `WEB SET OPTION`              | `Sesión escalable web`                                                                                                         |             |
| Caja de diálogo de parámetros | [Página Opciones (I)/Sesiones escalables (sesiones multiproceso)](../settings/web.md#scalable-sessions-multi-process-sessions) |             |

Estado de activación de la gestión de sesiones escalable para el servidor web 4D. Las sesiones del servidor web se detallan en la página [Sesiones Web](sessions.md).



## Dominio de la cookie de sesión

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

Valor del atributo `SameSite` de la cookie de sesión. Este atributo le permite declarar si su cookie debe estar restringida a un contexto de primera parte o del mismo sitio, como una protección contra ciertos ataques CSRF ([cross-site request forgery](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)).

> Para una descripción detallada del atributo `SameSite`, consulte la [documentación de Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) o [esta página web.dev](https://web.dev/samesite-cookies-explained/).

Hay tres valores disponibles:

- "Estricto" (valor predeterminado del atributo `SameSite` para las cookies de sesión de 4D): las cookies sólo se enviarán en el contexto de primera parte, es decir, el contexto correspondiente al dominio del sitio y nunca a sitios web de terceros.
- "Lax": las cookies no se envían en las subpeticiones de sitios cruzados (por ejemplo, para cargar imágenes o marcos en un sitio de terceros), sino que se envían cuando un usuario está navegando hacia el sitio de origen (es decir, sigue un enlace).
- "Ninguna": las cookies se envían en todos los contextos, es decir, en las respuestas a las solicitudes de primera parte y de origen cruzado. Cuando se utiliza el valor "None", el atributo cookie `Secure` también debe ser definido (o la cookie será bloqueada).

El valor del atributo `Secure` de la cookie de sesión se define automáticamente en "True" si la conexión es HTTPS (sea cual sea el valor del atributo `SameSite`).

> No se recomienda definir `SameSite=None` en un servidor HTTP ya que faltará el atributo `Secure` (utilizado sólo en HTTPS) y se bloquearán las cookies.



## Utilizar procesos apropiativos

| Puede ajustarse con           | Nombre                                                                                   | Comentarios |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| Caja de diálogo de parámetros | [Options (I) page/Use Preemptive Processes](../settings/web.md#use-preemptive-processes) |             |

Esta opción activa el modo apropiativo para el código del servidor web de su aplicación cuando se selecciona la opción **Sin sesiones** (el modo apropiativo siempre está activado con **sesiones escalables**). Cuando esta opción está marcada en este contexto, el compilador 4D evaluará automáticamente la propiedad hilo seguro de cada pieza de [código relacionado con la web](preemptiveWeb.md#thread-safety-of-4d-web-code) y devolverá errores en caso de incompatibilidad.




## Parámetros obsoletos

Los parámetros siguientes siguen siendo compatibles, pero se basan en funcionalidades o tecnologías obsoletas. Generalmente se recomienda mantener los valores por defecto.

#### Autorizar el acceso a la base de datos a través de las URL 4DSYNC

Esta opción controla el soporte de las peticiones de sincronización HTTP que contienen las URLs obsoletas */4DSYNC*.

#### Validación de la dirección IP de la sesión

> Esta opción no está disponible en [modo sesiones evolutivas](WebServer/sessions.md) (no hay validación).

Estado de validación de la dirección IP para las cookies de sesión. Por razones de seguridad, por defecto el servidor web 4D verifica la dirección IP de cada solicitud que contiene una cookie de sesión y la rechaza si esta dirección no coincide con la dirección IP utilizada para crear la cookie. En algunas aplicaciones específicas, es posible que desee desactivar esta validación y aceptar las cookies de sesión, incluso cuando sus direcciones IP no coinciden. Por ejemplo, cuando los dispositivos móviles cambian entre las redes Wifi y 4G/5G, su dirección IP cambiará. En este caso, debe pasar 0 en esta opción para permitir que los clientes puedan seguir utilizando sus sesiones web aunque las direcciones IP cambien. Tenga en cuenta que este parámetro reduce el nivel de seguridad de su aplicación. Cuando se modifica, esta configuración es efectiva inmediatamente (no es necesario reiniciar el servidor HTTP).




#### Enviar directamente los caracteres extendidos

Cuando esta opción está marcada, el servidor web envía los caracteres extendidos "tal cual" en las páginas semidinámicas, sin convertirlos en entidades HTML. Esta opción ha demostrado un aumento de la velocidad en la mayoría de los sistemas operativos extranjeros (especialmente el sistema japonés).


#### Conexiones Keep-Alive

El servidor web 4D puede utilizar conexiones persistentes. La opción keep-alive permite mantener una única conexión TCP abierta para el conjunto de intercambios entre el navegador y el servidor para ahorrar recursos del sistema y optimizar las transferencias.

La opción **Utilizar las conexiones persistentes** activa o desactiva las conexiones TCP persistentes para el servidor web. Esta opción está activada por defecto. En la mayoría de los casos, es aconsejable mantener esta opción marcada ya que acelera los intercambios. Si el navegador web no soporta el mantenimiento de la conexión, el servidor web 4D cambia automáticamente a HTTP/1.0.

La función de conexiones persistentes del servidor web 4D afecta a todas las conexiones TCP/IP (HTTP, HTTPS). Tenga en cuenta, sin embargo, que las conexiones keep-alive no siempre se utilizan para todos los procesos web de 4D.

En algunos casos, se pueden invocar otras funciones internas optimizadas. Las conexiones persistentes son útiles principalmente para las páginas estáticas.

Dos opciones le permiten definir cómo funcionan las conexiones persistentes:

*   **Número de peticiones por conexión**: permite definir el número máximo de peticiones y de respuestas capaces de viajar por una conexión persistente. Limitar el número de peticiones por conexión permite evitar la inundación del servidor debido a un gran número de peticiones entrantes (una técnica utilizada por los hackers).<p>
El valor por defecto (100) puede ser aumentado o disminuido en función de los recursos de la máquina que aloja el servidor 4D web.</p>

*   **Tiempo de espera antes de desconexión**: este valor define el periodo máximo de espera (en segundos) durante el cual el servidor web mantiene una conexión TCP abierta sin recibir ninguna petición del navegador web. Una vez finalizado este periodo, el servidor cierra la conexión.<p>
Si el navegador web envía una solicitud después de cerrar la conexión, se crea automáticamente una nueva conexión TCP. Esta operación no es visible para el usuario.</p>

