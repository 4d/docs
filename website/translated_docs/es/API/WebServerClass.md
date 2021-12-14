---
id: WebServerClass
title: WebServer
---


The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). This class is available from the `4D` class store.



### Objeto servidor web

Web server objects are instantiated with the [`WEB Server`](#web-server) command.

They provide the following properties and functions:


### Resumen
|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->|
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->|
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->|
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->|
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->|
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->|
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->|


[<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary -->| |[<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->| |[<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->|



## WEB Server

<details><summary>Histórico</summary>
| Versión | Modificaciones                    |
| ------- | --------------------------------- |
| v18 R3  | Añadidos                          |
| v19     | soporte de .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->
**WEB Server** : 4D.WebServer<br>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->


<!-- REF #_command_.WEB Server.Params -->

| Parámetros | Tipo         |    | Descripción                                                    |
| ---------- | ------------ | -- | -------------------------------------------------------------- |
| option     | Integer      | -> | Web server to get (default if omitted = `Web server database`) |
| Resultado  | 4D.WebServer | <- | Objeto servidor web                                            |

<!-- END REF -->

El comando `WEB Server` <!-- REF #_command_.WEB Server.Summary -->devuelve el objeto servidor web por defecto, o el objeto servidor web definido a través del parámetro *option*<!-- END REF -->.

Por defecto, si se omite el parámetro *option*, el comando devuelve una referencia al servidor web de la base de datos, es decir, al servidor web por defecto. Para designar el servidor web a devolver, puede pasar una de las siguientes constantes en el parámetro *option*:

| Constante                      | Valor | Comentario                                               |
| ------------------------------ | ----- | -------------------------------------------------------- |
| `Web server database`          | 1     | Current database Web server (default if omitted)         |
| `Web server host database`     | 2     | Web server of the host database of a component           |
| `Web server receiving request` | 3     | Web server that received the request (target Web server) |

El objeto servidor web devuelto contiene los valores actuales de las propiedades del servidor web.

#### Ejemplo

Desde su componente, quiere saber si el servidor web de la base de datos anfitriona está iniciado:

```4d
  // Method of a component
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |
</details>

<!-- REF #_command_.WEB Server list.Syntax -->
**WEB Server list** : Collection<!-- END REF -->


<!-- REF #_command_.WEB Server list.Params -->

| Parámetros | Tipo       |    | Descripción                                    |
| ---------- | ---------- | -- | ---------------------------------------------- |
| Resultado  | Collection | <- | Collection of the available Web server objects |

<!-- END REF -->

El comando `WEB Server list` <!-- REF #_command_.WEB Server list.Summary -->devuelve una colección de todos los objetos del servidor web disponibles en la aplicación 4D<!-- END REF -->.

Una aplicación 4D puede contener de uno a varios servidores web:

- one Web server for the host database (default Web server)
- one Web server for each component.

El comando `WEB Server list` devuelve todos los servidores web disponibles, estén o no en funcionamiento.

> The default Web server object is automatically loaded by 4D at startup. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](#web-server) command.

Puede utilizar la propiedad [.name](#nombre) del objeto servidor web para identificar el proyecto o componente al que está unido cada objeto servidor web de la lista.


#### Ejemplo

Queremos saber cuántos servidores web en funcionamiento hay disponibles:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")

```




## .accessKeyDefined


<!-- REF #WebServerClass.accessKeyDefined.Syntax -->
**.accessKeyDefined** : Boolean<!-- END REF -->


La propiedad **.accessKeyDefined** contiene <!-- REF #WebServerClass.accessKeyDefined.Summary -->true si se define una llave de acceso en la configuración del servidor web<!-- END REF -->. Esta propiedad es utilizada por el servidor web de WebAdmin para validar la configuración de seguridad de la interfaz de administración.


<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder



<!-- REF #WebServerClass.certificateFolder.Syntax -->
**.certificateFolder** : Text<!-- END REF -->


Ruta de la carpeta <!-- REF #WebServerClass.certificateFolder.Summary -->donde se encuentran los archivos de los certificados<!-- END REF -->. La ruta se formatea en la ruta completa POSIX utilizando filesystems. Cuando se utiliza esta propiedad en el parámetro `settings` de la función [`.start()`](#start), puede ser un objeto [`Folder`](FolderClass.md).

<!-- END REF -->


<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet


<!-- REF #WebServerClass.characterSet.Syntax -->
**.characterSet** : Number<br>**.characterSet** : Text<!-- END REF -->


El <!-- REF #WebServerClass.characterSet.Summary -->conjunto de caracteres que el Servidor Web 4D debe utilizar para comunicarse con los navegadores que se conectan a la aplicación<!-- END REF -->. The default value actually depends on the language of the OS. Puede ser un entero MIBEnum o una cadena Name, identificadores [definidos por IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Aquí está la lista de identificadores correspondientes a los conjuntos de caracteres soportados por el servidor web 4D:

*   4 = ISO-8859-1
*   12 = ISO-8859-9
*   13 = ISO-8859-10
*   17 = Shift-JIS
*   2024 = Windows-31J
*   2026 = Big5
*   38 = euc-kr
*   106 = UTF-8
*   2250 = Windows-1250
*   2251 = Windows-1251
*   2253 = Windows-1253
*   2255 = Windows-1255
*   2256 = Windows-1256

<!-- END REF -->


<!-- REF WebServerClass.cipherSuite.Desc -->

## .cipherSuite


<!-- REF #WebServerClass.cipherSuite.Syntax -->
**.cipherSuite** : Text<!-- END REF -->


La lista de cifrado <!-- REF #WebServerClass.cipherSuite.Summary -->utilizada para el protocolo seguro<!-- END REF -->. Define la prioridad de los algoritmos de cifrado implementados por el servidor web de 4D. Can be a sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

<!-- END REF -->



<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->
**.CORSEnabled** : Boolean<!-- END REF -->


El estado del servicio <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (*Cross-origin resource sharing*) para el servidor web<!-- END REF -->. For security reasons, "cross-domain" requests are forbidden at the browser level by default. Cuando está habilitado (True), las llamadas XHR (por ejemplo, peticiones REST) de páginas web fuera del dominio pueden ser permitidas en su aplicación (necesita definir la lista de direcciones permitidas en la lista de dominios CORS, ver `CORSSettings` abajo). Cuando se desactiva (False, por defecto), se ignoran todas las peticiones cruzadas enviadas con CORS. Cuando se activa (True) y un dominio o método no permitido envía una solicitud de sitio cruzado, se rechaza con una respuesta de error "403 - prohibido".

Por defecto: False (desactivado)

Para más información sobre CORS, consulte la página [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) en Wikipedia.

<!-- END REF -->


<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings


<!-- REF #WebServerClass.CORSSettings.Syntax -->
**.CORSSettings** : Collection<!-- END REF -->


Una <!-- REF #WebServerClass.CORSSettings.Summary -->lista de hosts y métodos permitidos para el servicio CORS<!-- END REF --> (ver la propiedad [`CORSEnabled`](#corsenabled)). Cada objeto debe contener una propiedad **host** y, opcionalmente, una propiedad **methods**:

*   **host** (text, mandatory): Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Multiple domain attributes can be added to create a white list. If *host* is not present or empty, the object is ignored. Several syntaxes are supported:
    -   192.168.5.17:8081
    -   192.168.5.17
    -   192.168.*
    -   192.168.*:8081
    -   http://192.168.5.17:8081
    -   http://*.myDomain.com
    -   http://myProject.myDomain.com
    -   *.myDomain.com
    -   myProject.myDomain.com
    -   \*

*   **methods** (text, optional): Accepted HTTP method(s) for the corresponding CORS host. Separate each method with a ";" (e,g,: "post;get"). If *methods* is empty, null, or undefined, all methods are enabled.

<!-- END REF -->


<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog


<!-- REF #WebServerClass.debugLog.Syntax -->
**.debugLog** : Number<!-- END REF -->


El <!-- REF #WebServerClass.debugLog.Summary -->estado del archivo de registro de peticiones HTTP<!-- END REF --> (HTTPDebugLog_nn.txt, almacenado en la carpeta "Logs" de la aplicación -- nn es el número de archivo).

*   0 = desactivado
*   1 = enabled without body parts (body size is provided in this case)
*   3 = enabled with body parts in response only
*   5 = enabled with body parts in request only
*   7 = enabled with body parts in response and request

<!-- END REF -->


<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage


<!-- REF #WebServerClass.defaultHomepage.Syntax -->
**.defaultHomepage** : Text<!-- END REF -->


El <!-- REF #WebServerClass.defaultHomepage.Summary -->nombre de la página de inicio por defecto<!-- END REF --> o "" para no enviar la página de inicio personalizada.

<!-- END REF -->


<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->
**.HSTSEnabled** : Boolean<!-- END REF -->


El estado <!-- REF #WebServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS)<!-- END REF -->. HSTS permite al servidor web declarar que los navegadores sólo deben interactuar con él a través de conexiones HTTPS seguras. Los navegadores registrarán la información HSTS la primera vez que reciban una respuesta del servidor web, luego cualquier solicitud HTTP futura se transformará automáticamente en solicitudes HTTPS. El tiempo que esta información es almacenada por el navegador se especifica con la propiedad `HSTSMaxAge`. HSTS requiere que HTTPS esté activado en el servidor. HTTP también debe estar activado para permitir las conexiones cliente iniciales.

<!-- END REF -->


<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->
**.HSTSMaxAge** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HSTSMaxAge.Summary -->máximo de tiempo (en segundos) que HSTS está activo para cada nueva conexión cliente<!-- END REF -->. This information is stored on the client side for the specified duration.

Valor por defecto: 63072000 (2 años).

<!-- END REF -->


<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->
**.HTTPCompressionLevel** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->nivel de compresión para todos los intercambios HTTP comprimidos para el servidor HTTP 4D (peticiones del cliente o respuestas del servidor)<!-- END REF -->. Este selector permite optimizar los intercambios priorizando la velocidad de ejecución (menos compresión) o la cantidad de compresión (menos velocidad).

Valores posibles:

*   1 to 9 (where 1 is the fastest compression and 9 the highest).
*   -1 = set a compromise between speed and rate of compression.

Por defecto = 1 (compresión más rápida).

<!-- END REF -->


<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->
**.HTTPCompressionThreshold** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->umbral de tamaño (bytes) para las solicitudes por debajo del cual los intercambios no deben ser comprimidos<!-- END REF -->. This setting is useful in order to avoid losing machine time by compressing small exchanges.

Umbral de compresión por defecto = 1024 bytes

<!-- END REF -->


<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled


<!-- REF #WebServerClass.HTTPEnabled.Syntax -->
**.HTTPEnabled** : Boolean<!-- END REF -->


El estado del protocolo <!-- REF #WebServerClass.HTTPEnabled.Summary -->HTTP<!-- END REF -->.

<!-- END REF -->



<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort


<!-- REF #WebServerClass.HTTPPort.Syntax -->
**.HTTPPort** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HTTPPort.Summary -->número de puerto IP de escucha para HTTP<!-- END REF -->.

Por defecto = 80

<!-- END REF -->


<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->
**.HTTPTrace** : Boolean<!-- END REF -->


La <!-- REF #WebServerClass.HTTPTrace.Summary -->activación de `HTTP TRACE`<!-- END REF -->. Por razones de seguridad, por defecto el servidor web rechaza las peticiones `HTTP TRACE` con un error 405. Cuando se activa, el servidor web responde a las peticiones `HTTP TRACE` con la línea de petición, el encabezado y el cuerpo.

<!-- END REF -->


<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled


<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->
**.HTTPSEnabled** : Boolean<!-- END REF -->

El estado del protocolo<!-- REF #WebServerClass.HTTPnabled.Summary -->HTTPS<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort


<!-- REF #WebServerClass.HTTPSPort.Syntax -->
**.HTTPSPort** : Number<!-- END REF -->

El <!-- REF #WebServerClass.HTTPSPort.Summary -->número de puerto IP de escucha para HTTPS<!-- END REF -->.

Por defecto = 443

<!-- END REF -->


<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->
**.inactiveProcessTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

La <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->duración (en minutos) de los procesos de sesión heredados inactivos<!-- END REF -->. Al final del tiempo de espera, el proceso se mata en el servidor, se llama al método base `On Web Legacy Close Session` y se destruye el contexto de la sesión heredada.

Por defecto = 480 minutos

<!-- END REF -->


<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->
**.inactiveSessionTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

La <!-- REF #WebServerClass.inactiveSessionTimeout.Summary -->duración (en minutos) de las sesiones heredadas inactivas (duración establecida en la cookie)<!-- END REF -->. At the end of this period, the session cookie expires and is no longer sent by the HTTP client.

Por defecto = 480 minutos

<!-- END REF -->


<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen


<!-- REF #WebServerClass.IPAddressToListen.Syntax -->
**.IPAddressToListen** : Text<!-- END REF -->


La <!-- REF #WebServerClass.IPAddressToListen.Summary -->dirección IP en la que el servidor web 4D recibirá las peticiones HTTP<!-- END REF -->. Por defecto, no se define ninguna dirección específica. Se soportan tanto los formatos de cadena IPv6 como los IPv4.

<!-- END REF -->


<!-- REF WebServerClass.isRunning.Desc -->


## .isRunning


<!-- REF #WebServerClass.isRunning.Syntax -->
**.isRunning** : Boolean<!-- END REF -->


*Propiedad de sólo lectura*

El <!-- REF #WebServerClass.isRunning.Summary -->estado de ejecución del servidor web<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->
**.keepSession** : Boolean<!-- END REF -->


<!-- REF #WebServerClass.keepSession.Summary -->True si las sesiones heredadas están activadas en el servidor web, False en caso contrario<!-- END REF -->.

##### Ver también:
[.scalableSession](#scalablesession)

<!-- END REF -->


<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording


<!-- REF #WebServerClass.logRecording.Syntax -->
**.logRecording** : Number<!-- END REF -->


El valor de registro <!-- REF #WebServerClass.logRecording.Summary -->log (logweb.txt)<!-- END REF -->.

*   0 = Do not record (default)
*   1 = Record in CLF format
*   2 = Record in DLF format
*   3 = Record in ELF format
*   4 = Record in WLF format

<!-- END REF -->


<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses


<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->
**.maxConcurrentProcesses** : Number<!-- END REF -->


El <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->número máximo de procesos web concurrentes que soporta el servidor web<!-- END REF -->. Cuando se alcance este número (menos uno), 4D no creará ningún otro proceso y devolverá el estado HTTP 503 - Servicio no disponible a todas las nuevas peticiones.

Valores posibles: 500000 - 2147483648

Por defecto = 100

<!-- END REF -->


<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize


<!-- REF #WebServerClass.maxRequestSize.Syntax -->
**.maxRequestSize** : Number<!-- END REF -->


El <!-- REF #WebServerClass.maxRequestSize.Summary -->tamaño máximo (en bytes) de las peticiones HTTP entrantes (POST) que el servidor web puede procesar<!-- END REF -->. Pasar el valor máximo (2147483647) significa que, en la práctica, no se define ningún límite. This limit is used to avoid web server saturation due to incoming requests that are too large. Si una petición alcanza este límite, el servidor web la rechaza.

Valores posibles: 500000 - 2147483647

<!-- END REF -->


<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->
**.maxSessions** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

El <!-- REF #WebServerClass.maxSessions.Summary -->número máximo de sesiones simultáneas legacy<!-- END REF -->. Cuando se alcanza el límite, se cierra la sesión heredada más antigua (y se llama al método base `On Web Legacy Close Session`) si el servidor web necesita crear una nueva. El número de sesiones heredadas simultáneas no puede superar el número total de procesos web (propiedad `maxConcurrentProcesses`, 100 por defecto)

<!-- END REF -->


<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->
**.minTLSVersion** : Number<!-- END REF -->


La <!-- REF #WebServerClass.minTLSVersion.Summary -->versión TLS mínima aceptada para las conexiones<!-- END REF -->. Connection attempts from clients supporting only versions below the minimum will be rejected.

Valores posibles:

*   1 = TLSv1_0
*   2 = TLSv1_1
*   3 = TLSv1_2 (por defecto)
*   4 = TLSv1_3

If modified, the server must be restarted to use the new value.

<!-- END REF -->


<!-- REF WebServerClass.name.Desc -->

## .name


<!-- REF #WebServerClass.name.Syntax -->
**.name** : Text<!-- END REF -->


*Propiedad de sólo lectura*

El <!-- REF #WebServerClass.name.Summary -->nombre de la aplicación del servidor web<!-- END REF -->.

<!-- END REF -->



<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->
**.openSSLVersion** : Text<!-- END REF -->


*Propiedad de sólo lectura*

La <!-- REF #WebServerClass.openSSLVersion.Summary -->versión de la librería OpenSSL utilizada<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy


<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->
**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*Propiedad de sólo lectura*

La disponibilidad de <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->PFS en el servidor<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.rootFolder.Desc -->
## .rootFolder


<!-- REF #WebServerClass.rootFolder.Syntax -->
**.rootFolder** : Text<!-- END REF -->


La <!-- REF #WebServerClass.rootFolder.Summary -->ruta de la carpeta raíz del servidor web<!-- END REF -->. La ruta se formatea en la ruta completa POSIX utilizando filesystems. Cuando se utiliza esta propiedad en el parámetro `settings`, puede ser un objeto `Folder`.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->
## .scalableSession


<!-- REF #WebServerClass.scalableSession.Syntax -->
**.scalableSession** : Boolean<!-- END REF -->


<!-- REF #WebServerClass.scalableSession.Summary -->True si las sesiones escalables son utilizadas en el servidor web, False en caso contrario<!-- END REF -->.

##### Ver también:
[.keepSession](#keepsession)
<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain


<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->
**.sessionCookieDomain** : Text<!-- END REF -->


El campo <!-- REF #WebServerClass.sessionCookieDomain.Summary -->"domain" de la cookie de sesión<!-- END REF -->. Used to control the scope of the session cookies. If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.

<!-- END REF -->


<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName


<!-- REF #WebServerClass.sessionCookieName.Syntax -->
**.sessionCookieName** : Text<!-- END REF -->


El <!-- REF #WebServerClass.sessionCookieName.Summary -->nombre de la cookie utilizada para almacenar el ID de sesión<!-- END REF -->.

*Propiedad de sólo lectura*

<!-- END REF -->


<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath


<!-- REF #WebServerClass.sessionCookiePath.Syntax -->
**.sessionCookiePath** : Text<!-- END REF -->


El campo <!-- REF #WebServerClass.sessionCookiePath.Summary -->"path" de la cookie de sesión<!-- END REF -->. Used to control the scope of the session cookies. If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->
**.sessionCookieSameSite** : Text<!-- END REF -->


El valor de la cookie de sesión <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->"SameSite"<!-- END REF -->. Valores posibles (utilizando constantes):

| Constante           | Valor    | Descripción                                                                                                                         |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *Default value* - Cookies are only sent in a first-party context                                                                    |
| Web SameSite Lax    | "Lax"    | Cookies are also sent on cross-site subrequests but only when a user is navigating to the origin site (i.e. when following a link). |
| Web SameSite None   | "None"   | Cookies are sent in all contexts, i.e in responses to both first-party and cross-origin requests.                                   |

Ver la descripción de [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) para obtener información detallada.


<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation


<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->
**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> This property is not used in [scalable sessions mode](#scalablesession) (there is no IP address validation).

La <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->validación de la dirección IP para las cookies de sesión<!-- END REF -->. Por razones de seguridad, por defecto el servidor web comprueba la dirección IP de cada solicitud que contiene una cookie de sesión y la rechaza si esta dirección no coincide con la dirección IP utilizada para crear la cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. Por ejemplo, cuando los dispositivos móviles cambian entre las redes WiFi y 3G/4G, su dirección IP cambiará. En este caso, puede permitir que los clientes puedan seguir utilizando sus sesiones web incluso cuando las direcciones IP cambien (esta configuración reduce el nivel de seguridad de su aplicación).

<!-- END REF -->


<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |
</details>

<!-- REF #WebServerClass.start().Syntax -->
**.start**() : Object<br>**.start**( *settings* : Object ) : Object<!-- END REF -->



<!-- REF #WebServerClass.start().Params -->

| Parámetros | Tipo   |    | Descripción                           |
| ---------- | ------ | -- | ------------------------------------- |
| parámetros | Objeto | -> | Web server settings to set at startup |
| Resultado  | Objeto | <- | Status of the web server startup      |

<!-- END REF -->

La función `.start()` <!-- REF #WebServerClass.start().Summary -->inicia el servidor web sobre el que se aplica<!-- END REF -->, utilizando las propiedades establecidas en el parámetro opcional del objeto *settings*.

El servidor web se inicia con la configuración por defecto definida en el archivo de configuración del proyecto o (sólo en la base host) utilizando el comando `WEB SET OPTION`. Sin embargo, utilizando el parámetro *settings*, se pueden definir propiedades personalizadas para la sesión del servidor web.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

La configuración de la sesión personalizada se restablecerá cuando se llame a la función [`.stop()`](#stop).


#### Objeto devuelto

La función devuelve un objeto que describe el estado de lanzamiento del servidor web. This object can contain the following properties:

| Propiedad |                         | Tipo       | Descripción                                                          |
| --------- | ----------------------- | ---------- | -------------------------------------------------------------------- |
| success   |                         | Booleano   | True if the web server was correctly started, False otherwise        |
| errors    |                         | Collection | 4D error stack (not returned if the web server started successfully) |
|           | \[].errCode            | Número     | Código de error 4D                                                   |
|           | \[].message            | Texto      | Description of the 4D error                                          |
|           | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                |
> If the Web server was already launched, an error is returned.

#### Ejemplo

```4d
 var $settings;$result : Object
 var $webServer : 4D.WebServer

 $settings:=New object("HTTPPort";8080;"defaultHomepage";"myAdminHomepage.html")

 $webServer:=WEB Server
 $result:=$webServer.start($settings)
 If($result.success)
  //...
 End if
```

<!-- END REF -->


<!-- REF WebServerClass.stop().Desc -->

## .stop()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |
</details>

<!-- REF #WebServerClass.stop().Syntax -->
**.stop()** <!-- END REF -->

<!-- REF #WebServerClass.stop().Params -->

| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |  | ---------------------------- |
|            |      |  | No requiere ningún parámetro |

 <!-- END REF -->

La función `.stop()` <!-- REF #WebServerClass.stop().Summary -->detiene el servidor web sobre el que se aplica<!-- END REF -->.

Si el servidor web se ha iniciado, todas las conexiones y procesos web se cierran, una vez que las peticiones actualmente gestionadas han finalizado. Si el servidor web no se ha iniciado, el método no hace nada.
> This function resets the customized web settings defined for the session using the *settings* parameter of the [`.start()`](#start) function, if any.


#### Ejemplo

Para detener el servidor web de la base de datos:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
