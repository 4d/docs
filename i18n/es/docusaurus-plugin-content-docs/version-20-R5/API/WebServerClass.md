---
id: WebServerClass
title: WebServer
---

The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). This class is available from the `4D` class store.

### Objeto servidor web

Web server objects are instantiated with the [`WEB Server`](#web-server) command.

Ofrecen las siguientes propiedades y funciones:

### Resumen

|                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->                               |
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->                                                       |
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->                                  |
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->                                                 |
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->                   |
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->       |
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->                                                       |
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->             |
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->             |
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->             |
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->                                                                   |
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->                |
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->                                                 |
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->                                  |
| [<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->                      |
| [<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->                |
| [<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary --> |
| [<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->                                                            |
| [<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->                                                               |

## WEB Server

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                    |
| ----------- | ------------------------------------------------- |
| 18 R3       | Añadidos                                          |
| 19          | soporte de .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->

<!-- REF #_command_.WEB Server.Params -->

| Parámetros | Tipo                         |    | Descripción                                                                       |
| ---------- | ---------------------------- | -- | --------------------------------------------------------------------------------- |
| option     | Integer                      | -> | Web server to get (default if omitted = `Web server database`) |
| Result     | 4D.WebServer | <- | Objeto servidor web                                                               |

<!-- END REF -->

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the _option_ parameter<!-- END REF -->.

By default, if the _option_ parameter is omitted, the command returns a reference to the Web server of the database, i.e. the default Web server. To designate the Web server to return, you can pass one of the following constants in the _option_ parameter:

| Constante                      | Valor | Comentario                                                                           |
| ------------------------------ | ----- | ------------------------------------------------------------------------------------ |
| `Web server database`          | 1     | Servidor web de la base actual (por defecto si se omite)          |
| `Web server host database`     | 2     | Servidor web de la base local de un componente                                       |
| `Web server receiving request` | 3     | Servidor web que ha recibido la solicitud (servidor web objetivo) |

El objeto servidor web devuelto contiene los valores actuales de las propiedades del servidor web.

#### Ejemplo

El objeto servidor web devuelto contiene los valores actuales de las propiedades del servidor web.

```4d
  // Method of a component
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |

</details>

<!-- REF #_command_.WEB Server list.Syntax -->**WEB Server list** : Collection<!-- END REF -->

<!-- REF #_command_.WEB Server list.Params -->

| Parámetros | Tipo       |    | Descripción                                           |
| ---------- | ---------- | -- | ----------------------------------------------------- |
| Result     | Collection | <- | Colección de los objetos del servidor web disponibles |

<!-- END REF -->

The `WEB Server list` command <!-- REF #_command_.WEB Server list.Summary -->returns a collection of all Web server objects available in the 4D application<!-- END REF -->.

Queremos saber cuántos servidores web en funcionamiento hay disponibles:

- un servidor web para la base de datos del host (servidor web por defecto)
- un servidor web para cada componente.

All available Web servers are returned by the `WEB Server list` command, whether they are actually running or not.

> El objeto servidor web por defecto es cargado automáticamente por 4D al inicio. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](#web-server) command.

You can use the [.name](#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.

#### Ejemplo

Puede utilizar la propiedad <a href="#nombre">.name</a> del objeto servidor web para identificar el proyecto o componente al que está unido cada objeto servidor web de la lista.

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")

```

## .accessKeyDefined

<!-- REF #WebServerClass.accessKeyDefined.Syntax -->**.accessKeyDefined** : Boolean<!-- END REF -->

The **.accessKeyDefined** property contains <!-- REF #WebServerClass.accessKeyDefined.Summary -->true if an access key is defined in the settings of the web server<!-- END REF -->. Esta propiedad es utilizada por el servidor web de WebAdmin para validar la configuración de seguridad de la interfaz de administración.

<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder

<!-- REF #WebServerClass.certificateFolder.Syntax -->**.certificateFolder** : Text<!-- END REF -->

Ruta de la carpeta <!-- REF #WebServerClass.certificateFolder.Summary -->donde se encuentran los archivos de los certificados<!-- END REF -->. La ruta se formatea en la ruta completa POSIX utilizando filesystems. When using this property in the `settings` parameter of the [`.start()`](#start) function, it can be a [`Folder` object](FolderClass.md).

<!-- END REF -->

<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet

<!-- REF #WebServerClass.characterSet.Syntax -->**.characterSet** : Number<br/>**.characterSet** : Text<!-- END REF -->

El <!-- REF #WebServerClass.characterSet.Summary -->conjunto de caracteres que el Servidor Web 4D debe utilizar para comunicarse con los navegadores que se conectan a la aplicación<!-- END REF -->. El valor por defecto depende del lenguaje del sistema operativo. Can be a MIBEnum integer or a Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Aquí está la lista de identificadores correspondientes a los conjuntos de caracteres soportados por el servidor web 4D:

- 4 = ISO-8859-1
- 12 = ISO-8859-9
- 13 = ISO-8859-10
- 17 = Shift-JIS
- 2024 = Windows-31J
- 2026 = Big5
- 38 = euc-kr
- 106 = UTF-8
- 2250 = Windows-1250
- 2251 = Windows-1251
- 2253 = Windows-1253
- 2255 = Windows-1255
- 2256 = Windows-1256

<!-- END REF -->

<!-- REF WebServerClass.cipherSuite.Desc -->

## .cipherSuite

<!-- REF #WebServerClass.cipherSuite.Syntax -->**.cipherSuite** : Text<!-- END REF -->

La lista de cifrado <!-- REF #WebServerClass.cipherSuite.Summary -->utilizada para el protocolo seguro<!-- END REF -->. Define la prioridad de los algoritmos de cifrado implementados por el servidor web de 4D. Puede ser una secuencia de cadenas separadas por dos puntos (por ejemplo "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

<!-- END REF -->

<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->**.CORSEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (_Cross-origin resource sharing_) service status for the web server<!-- END REF -->. Por razones de seguridad, las peticiones "cross-domain" están prohibidas por defecto a nivel del navegador. When enabled (True), XHR calls (e.g. REST requests) from Web pages outside the domain can be allowed in your application (you need to define the list of allowed addresses in the CORS domain list, see `CORSSettings` below). Cuando se desactiva (False, por defecto), se ignoran todas las peticiones cruzadas enviadas con CORS. Cuando se activa (True) y un dominio o método no permitido envía una solicitud de sitio cruzado, se rechaza con una respuesta de error "403 - prohibido".

Por defecto: False (desactivado)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

<!-- END REF -->

<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings

<!-- REF #WebServerClass.CORSSettings.Syntax -->**.CORSSettings** : Collection<!-- END REF -->

Contains the <!-- REF #WebServerClass.CORSSettings.Summary -->list of allowed hosts and methods for the CORS service<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:

- **host** (text, mandatory): Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Se pueden añadir múltiples atributos de dominio para crear una lista blanca. If _host_ is not present or empty, the object is ignored. Se soportan varias sintaxis:
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

- **methods** (text, optional): Accepted HTTP method(s) for the corresponding CORS host. Separe cada método con un ";" (por ejemplo: "post;get"). If _methods_ is empty, null, or undefined, all methods are enabled.

<!-- END REF -->

<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog

<!-- REF #WebServerClass.debugLog.Syntax -->**.debugLog** : Number<!-- END REF -->

El <!-- REF #WebServerClass.debugLog.Summary -->estado del archivo de registro de peticiones HTTP<!-- END REF --> (HTTPDebugLog_nn.txt, almacenado en la carpeta "Logs" de la aplicación -- nn es el número de archivo).

- 0 = desactivado
- 1 = activado sin partes del cuerpo (en este caso se suministra el tamaño del cuerpo)
- 3 = activado con las partes del cuerpo en respuesta únicamente
- 5 = activado con las partes del cuerpo en petición únicamente
- 7 = activado con las partes del cuerpo en respuesta y petición

<!-- END REF -->

<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage

<!-- REF #WebServerClass.defaultHomepage.Syntax -->**.defaultHomepage** : Text<!-- END REF -->

El <!-- REF #WebServerClass.defaultHomepage.Summary -->nombre de la página de inicio por defecto<!-- END REF --> o "" para no enviar la página de inicio personalizada.

<!-- END REF -->

<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->**.HSTSEnabled** : Boolean<!-- END REF -->

El estado <!-- REF #WebServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS)<!-- END REF -->. HSTS permite al servidor web declarar que los navegadores sólo deben interactuar con él a través de conexiones HTTPS seguras. Los navegadores registrarán la información HSTS la primera vez que reciban una respuesta del servidor web, luego cualquier solicitud HTTP futura se transformará automáticamente en solicitudes HTTPS. The length of time this information is stored by the browser is specified with the `HSTSMaxAge` property. HSTS requiere que HTTPS esté activado en el servidor. HTTP también debe estar activado para permitir las conexiones cliente iniciales.

<!-- END REF -->

<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->**.HSTSMaxAge** : Number<!-- END REF -->

El <!-- REF #WebServerClass.HSTSMaxAge.Summary -->máximo de tiempo (en segundos) que HSTS está activo para cada nueva conexión cliente<!-- END REF -->. Esta información se almacena del lado del cliente durante el tiempo especificado.

Valor por defecto: 63072000 (2 años).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->**.HTTPCompressionLevel** : Number<!-- END REF -->

El <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->nivel de compresión para todos los intercambios HTTP comprimidos para el servidor HTTP 4D (peticiones del cliente o respuestas del servidor)<!-- END REF -->. Este selector permite optimizar los intercambios priorizando la velocidad de ejecución (menos compresión) o la cantidad de compresión (menos velocidad).

Valores posibles:

- 1 a 9 (donde 1 es la compresión más rápida y 9 la más alta).
- -1 = definir un compromiso entre la velocidad y la tasa de compresión.

Valores posibles:

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->**.HTTPCompressionThreshold** : Number<!-- END REF -->

El <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->umbral de tamaño (bytes) para las solicitudes por debajo del cual los intercambios no deben ser comprimidos<!-- END REF -->. Este parámetro es útil para evitar la pérdida de tiempo de la máquina al comprimir los intercambios pequeños.

Umbral de compresión por defecto = 1024 bytes

<!-- END REF -->

<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<!-- REF #WebServerClass.HTTPEnabled.Syntax -->**.HTTPEnabled** : Boolean<!-- END REF -->

El estado del protocolo <!-- REF #WebServerClass.HTTPEnabled.Summary -->HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort

<!-- REF #WebServerClass.HTTPPort.Syntax -->**.HTTPPort** : Number<!-- END REF -->

El estado del protocolo<!-- REF #WebServerClass.HTTPnabled.Summary -->HTTPS<!-- END REF -->.

El <!-- REF #WebServerClass.HTTPPort.Summary -->número de puerto IP de escucha para HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->**.HTTPTrace** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled

<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->**.HTTPSEnabled** : Boolean<!-- END REF -->

El <!-- REF #WebServerClass.isRunning.Summary -->estado de ejecución del servidor web<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<!-- REF #WebServerClass.HTTPSPort.Syntax -->**.HTTPSPort** : Number<!-- END REF -->

La disponibilidad de <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->PFS en el servidor<!-- END REF -->.

El <!-- REF #WebServerClass.HTTPSPort.Summary -->número de puerto IP de escucha para HTTPS<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->**.inactiveProcessTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

La <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->duración (en minutos) de los procesos de sesión heredados inactivos<!-- END REF -->. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Por defecto = 480 minutos

<!-- END REF -->

<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->**.inactiveSessionTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

La <!-- REF #WebServerClass.inactiveSessionTimeout.Summary -->duración (en minutos) de las sesiones heredadas inactivas (duración establecida en la cookie)<!-- END REF -->. Al final de este periodo, la cookie de sesión expira y deja de ser enviada por el cliente HTTP.

Por defecto = 480 minutos

<!-- END REF -->

<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen

<!-- REF #WebServerClass.IPAddressToListen.Syntax -->**.IPAddressToListen** : Text<!-- END REF -->

La <!-- REF #WebServerClass.IPAddressToListen.Summary -->dirección IP en la que el servidor web 4D recibirá las peticiones HTTP<!-- END REF -->. Por defecto, no se define ninguna dirección específica. Se soportan tanto los formatos de cadena IPv6 como los IPv4.

<!-- END REF -->

<!-- REF WebServerClass.isRunning.Desc -->

## .isRunning

<!-- REF #WebServerClass.isRunning.Syntax -->**.isRunning** : Boolean<!-- END REF -->

_Propiedad de sólo lectura_

La función <code>.stop()</code> <!-- REF #WebServerClass.stop().Summary -->detiene el servidor web sobre el que se aplica<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->**.keepSession** : Boolean<!-- END REF -->

Contains <!-- REF #WebServerClass.keepSession.Summary -->`True` if legacy sessions are enabled in the web server, `False` otherwise<!-- END REF -->.

##### Ver también

[.scalableSession](#scalablesession)

<!-- END REF -->

<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording

<!-- REF #WebServerClass.logRecording.Syntax -->**.logRecording** : Number<!-- END REF -->

El valor de registro <!-- REF #WebServerClass.logRecording.Summary -->log (logweb.txt)<!-- END REF -->.

- 0 = No registrar (por defecto)
- 1 = Registro en formato CLF
- 2 = Registro en formato DLF
- 3 = Registro en formato ELF
- 4 = Registro en formato WLF

<!-- END REF -->

<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses

<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->**.maxConcurrentProcesses** : Number<!-- END REF -->

El <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->número máximo de procesos web concurrentes que soporta el servidor web<!-- END REF -->. Cuando se alcance este número (menos uno), 4D no creará ningún otro proceso y devolverá el estado HTTP 503 - Servicio no disponible a todas las nuevas peticiones.

Valores posibles: 500000 - 2147483647

Valores posibles: 500000 - 2147483648

<!-- END REF -->

<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<!-- REF #WebServerClass.maxRequestSize.Syntax -->**.maxRequestSize** : Number<!-- END REF -->

Contains the <!-- REF #WebServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Pasar el valor máximo (2147483647) significa que, en la práctica, no se define ningún límite. Este límite se utiliza para evitar la saturación del servidor web debido a peticiones entrantes demasiado grandes. Si una petición alcanza este límite, el servidor web la rechaza.

Valores posibles: 500000 - 2147483647

<!-- END REF -->

<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->**.maxSessions** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

Contains the <!-- REF #WebServerClass.maxSessions.Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)

<!-- END REF -->

<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->**.minTLSVersion** : Number<!-- END REF -->

La <!-- REF #WebServerClass.minTLSVersion.Summary -->versión TLS mínima aceptada para las conexiones<!-- END REF -->. Se rechazarán los intentos de conexión de clientes que sólo soporten versiones inferiores a la mínima.

Valores posibles:

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (por defecto)
- 4 = TLSv1_3

Valores posibles:

<!-- END REF -->

<!-- REF WebServerClass.name.Desc -->

## .name

<!-- REF #WebServerClass.name.Syntax -->**.name** : Text<!-- END REF -->

_Propiedad de sólo lectura_

El <!-- REF #WebServerClass.sessionCookieName.Summary -->nombre de la cookie utilizada para almacenar el ID de sesión<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->**.openSSLVersion** : Text<!-- END REF -->

_Propiedad de sólo lectura_

La <!-- REF #WebServerClass.openSSLVersion.Summary -->versión de la librería OpenSSL utilizada<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->**.perfectForwardSecrecy** : Boolean<!-- END REF -->

_Propiedad de sólo lectura_

La disponibilidad de <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->PFS en el servidor<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.rootFolder.Desc -->

## .rootFolder

<!-- REF #WebServerClass.rootFolder.Syntax -->**.rootFolder** : Text<!-- END REF -->

La <!-- REF #WebServerClass.rootFolder.Summary -->ruta de la carpeta raíz del servidor web<!-- END REF -->. La ruta se formatea en la ruta completa POSIX utilizando filesystems. When using this property in the `settings` parameter, it can be a `Folder` object.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->

## .scalableSession

<!-- REF #WebServerClass.scalableSession.Syntax -->**.scalableSession** : Boolean<!-- END REF -->

Contains <!-- REF #WebServerClass.scalableSession.Summary -->`True` if scalable sessions are used in the web server, and `False` otherwise<!-- END REF -->.

##### Ver también

[.keepSession](#keepsession)

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->**.sessionCookieDomain** : Text<!-- END REF -->

El campo <!-- REF #WebServerClass.sessionCookieDomain.Summary -->"domain" de la cookie de sesión<!-- END REF -->. Se utiliza para controlar el alcance de las cookies de sesión. Si define, por ejemplo, el valor "/\*.4d.fr" para este selector, el cliente sólo enviará una cookie cuando la solicitud se dirija al dominio ".4d.fr", lo que excluye a los servidores que alojan datos estáticos externos.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<!-- REF #WebServerClass.sessionCookieName.Syntax -->**.sessionCookieName** : Text<!-- END REF -->

Ver la descripción de <a href="WebServer/webServerConfig.md#session-cookie-samesite">Session Cookie SameSite</a> para obtener información detallada.

_Propiedad de sólo lectura_

<!-- END REF -->

<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath

<!-- REF #WebServerClass.sessionCookiePath.Syntax -->**.sessionCookiePath** : Text<!-- END REF -->

El campo <!-- REF #WebServerClass.sessionCookiePath.Summary -->"path" de la cookie de sesión<!-- END REF -->. Se utiliza para controlar el alcance de las cookies de sesión. Si define, por ejemplo, el valor "/4DACTION" para este selector, el cliente sólo enviará una cookie para las peticiones dinámicas que empiecen por 4DACTION, y no para las imágenes, páginas estáticas, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->**.sessionCookieSameSite** : Text<!-- END REF -->

El valor de la cookie de sesión <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->"SameSite"<!-- END REF -->. Valores posibles (utilizando constantes):

| Constante           | Valor    | Descripción                                                                                                                                                                                                   |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | _Default value_ - Cookies are only sent in a first-party context                                                                                                                                              |
| Web SameSite Lax    | "Lax"    | Las cookies también se envían en las sub-solicitudes entre sitios, pero sólo cuando un usuario está navegando hacia el sitio de origen (es decir, cuando sigue un enlace). |
| Web SameSite None   | "None"   | Las cookies se envían en todos los contextos, es decir, en las respuestas a las solicitudes de primera parte y de origen cruzado.                                                             |

See the [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) description for detailed information.

<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> This property is not used in [scalable sessions mode](#scalablesession) (there is no IP address validation).

La <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->validación de la dirección IP para las cookies de sesión<!-- END REF -->. Por razones de seguridad, por defecto el servidor web comprueba la dirección IP de cada solicitud que contiene una cookie de sesión y la rechaza si esta dirección no coincide con la dirección IP utilizada para crear la cookie. En algunas aplicaciones específicas, es posible que desee desactivar esta validación y aceptar las cookies de sesión, incluso cuando sus direcciones IP no coinciden. Por ejemplo, cuando los dispositivos móviles cambian entre las redes WiFi y 3G/4G, su dirección IP cambiará. En este caso, puede permitir que los clientes puedan seguir utilizando sus sesiones web incluso cuando las direcciones IP cambien (esta configuración reduce el nivel de seguridad de su aplicación).

<!-- END REF -->

<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |

</details>

<!-- REF #WebServerClass.start().Syntax -->

**.start**() : Object<br/>**.start**( _settings_ : Object ) : Object<!-- END REF -->

<!-- REF #WebServerClass.start().Params -->

| Parámetros | Tipo   |    | Descripción                                     |
| ---------- | ------ | -- | ----------------------------------------------- |
| settings   | Object | -> | Parámetros del servidor web a definir al inicio |
| Result     | Object | <- | Estado del inicio del servidor web              |

<!-- END REF -->

The `.start()` function <!-- REF #WebServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional _settings_ object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the _settings_ parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

Customized session settings will be reset when the [`.stop()`](#stop) function is called.

#### Objeto devuelto

La función devuelve un objeto que describe el estado de lanzamiento del servidor web. Este objeto puede contener las siguientes propiedades:

| Propiedad |                                                                                             | Tipo       | Descripción                                                                                   |
| --------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------- |
| success   |                                                                                             | Boolean    | True si el servidor web se ha iniciado correctamente, False en caso contrario                 |
| errors    |                                                                                             | Collection | Pila de errores 4D (no se devuelve si el servidor web se inició con éxito) |
|           | \[].errCode            | Number     | Código de error 4D                                                                            |
|           | \[].message            | Text       | Descripción del error 4D                                                                      |
|           | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                         |

> Si el servidor web ya fue lanzado, se devuelve un error.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |

</details>

<!-- REF #WebServerClass.stop().Syntax -->**.stop()**<!-- END REF -->

<!-- REF #WebServerClass.stop().Params -->

| Parámetros | Tipo |   | Descripción                  |
| ---------- | ---- | - | ---------------------------- |
|            |      |   | No requiere ningún parámetro |

<!-- END REF -->

The `.stop()` function <!-- REF #WebServerClass.stop().Summary -->stops the web server on which it is applied<!-- END REF -->.

Si el servidor web se ha iniciado, todas las conexiones y procesos web se cierran, una vez que las peticiones actualmente gestionadas han finalizado. Si el servidor web no se ha iniciado, el método no hace nada.

> This function resets the customized web settings defined for the session using the _settings_ parameter of the [`.start()`](#start) function, if any.

#### Ejemplo

Para detener el servidor web de la base:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->
