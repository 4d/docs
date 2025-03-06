---
id: WebServerClass
title: WebServer
---


La API de la clase `WebServer` permite iniciar y supervisar un servidor web para la aplicación principal (host), así como para cada componente alojado (ver la descripción general de [Objeto servidor web](WebServer/webServerObject.md)). Esta clase está disponible en el almacén de clases de `4D`.

### Objeto servidor web

Los objetos del servidor web se instancian con el comando [`WEB Server`](#web-server).

Ofrecen las siguientes propiedades y funciones:

### Resumen

|                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->|
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->|
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->|
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->|
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->|
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->|
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary -->|
| [<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->|
| [<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->|

## WEB Server

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones                    |
| ----------- | --------------------------------- |
| 18 R3       | Añadidos                          |
| 19          | soporte de .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->


<!-- REF #_command_.WEB Server.Params -->

| Parámetros | Tipo         |    | Descripción                                                              |
| ---------- | ------------ | -- | ------------------------------------------------------------------------ |
| option     | Integer      | -> | Servidor web a obtener (por defecto si se omite = `Web server database`) |
| Resultado  | 4D.WebServer | <- | Objeto servidor web                                                      |

<!-- END REF -->

El comando `WEB Server` <!-- REF #_command_.WEB Server.Summary -->devuelve el objeto Web server por defecto o el objeto Web server definido por el parámetro *option*<!-- END REF -->.

Por defecto, si se omite el parámetro *option*, el comando devuelve una referencia al servidor web de la base de datos, es decir, al servidor web por defecto. Para designar el servidor web a devolver, puede pasar una de las siguientes constantes en el parámetro *option*:

| Constante                      | Valor | Comentario                                                        |
| ------------------------------ | ----- | ----------------------------------------------------------------- |
| `Web server database`          | 1     | Servidor web de la base actual (por defecto si se omite)          |
| `Web server host database`     | 2     | Servidor web de la base local de un componente                    |
| `Web server receiving request` | 3     | Servidor web que ha recibido la solicitud (servidor web objetivo) |

El objeto servidor web devuelto contiene los valores actuales de las propiedades del servidor web.

#### Ejemplo

El objeto servidor web devuelto contiene los valores actuales de las propiedades del servidor web.

```4d
  // Método de un componente
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |
</details>

<!-- REF #_command_.WEB Server list.Syntax -->**WEB Server list** : Collection<!-- END REF -->


<!-- REF #_command_.WEB Server list.Params -->

| Parámetros | Tipo       |    | Descripción                                           |
| ---------- | ---------- | -- | ----------------------------------------------------- |
| Resultado  | Collection | <- | Colección de los objetos del servidor web disponibles |

<!-- END REF -->

El comando `WEB Server list` <!-- REF #_command_.WEB Server list.Summary -->devuelve una colección de todos los objetos Web server disponibles en la aplicación 4D<!-- END REF -->.

Queremos saber cuántos servidores web en funcionamiento hay disponibles:

- un servidor web para la base de datos del host (servidor web por defecto)
- un servidor web para cada componente.

Una aplicación 4D puede contener de uno a varios servidores web:

> El objeto servidor web por defecto es cargado automáticamente por 4D al inicio. Por otro lado, cada componente servidor web que se quiera utilizar debe ser instanciado utilizando el comando [`WEB Server`](#web-server).

El comando `WEB Server list` devuelve todos los servidores web disponibles, estén o no en funcionamiento.

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

<!-- REF #WebServerClass.accessKeyDefined.Syntax -->**.accessKeyDefined** : Boolean<!-- END REF -->


La propiedad **.accessKeyDefined** contiene <!-- REF #WebServerClass.accessKeyDefined.Summary -->true si se define una llave de acceso en la configuración del servidor web<!-- END REF -->. Esta propiedad es utilizada por el servidor web de WebAdmin para validar la configuración de seguridad de la interfaz de administración.

<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder

<!-- REF #WebServerClass.certificateFolder.Syntax -->**.certificateFolder** : Text<!-- END REF -->


Camino de la <!-- REF #WebServerClass.certificateFolder.Summary -->carpeta donde se encuentran los archivos de los certificados<!-- END REF -->. La ruta se formatea en la ruta completa POSIX utilizando filesystems. Cuando se utiliza esta propiedad en el parámetro `settings` de la función [`.start()`](#start), puede ser un objeto [`Folder`](FolderClass.md).

<!-- END REF -->

<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet

<!-- REF #WebServerClass.characterSet.Syntax -->**.characterSet** : Number<br/>**.characterSet** : Text<!-- END REF -->


El <!-- REF #WebServerClass.characterSet.Summary -->conjunto de caracteres que el servidor web 4D debe utilizar para comunicarse con los navegadores conectados a la aplicación<!-- END REF -->. El valor por defecto depende del lenguaje del sistema operativo. Puede ser un entero MIBEnum o una cadena Name, identificadores [definidos por IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Aquí está la lista de identificadores correspondientes a los conjuntos de caracteres soportados por el servidor web 4D:

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


El <!-- REF #WebServerClass.cipherSuite.Summary -->lista de cifrado utilizada para el protocolo seguro<!-- END REF -->. Define la prioridad de los algoritmos de cifrado implementados por el servidor web de 4D. Puede ser una secuencia de cadenas separadas por dos puntos (por ejemplo "ECDHE-RSA-AES128-..."). Ver la [página de cifrados](https://www.openssl.org/docs/manmaster/man1/ciphers.html) en el sitio OpenSSL.

<!-- END REF -->

<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->**.CORSEnabled** : Boolean<!-- END REF -->


El <!-- REF #WebServerClass.CORSEnabled.Summary -->estado del servicio CORS (*Cross-origin resource sharing*) para el servidor web<!-- END REF -->. Por razones de seguridad, las peticiones "cross-domain" están prohibidas por defecto a nivel del navegador. Cuando está habilitado (True), las llamadas XHR (por ejemplo, peticiones REST) de páginas web fuera del dominio pueden ser permitidas en su aplicación (necesita definir la lista de direcciones permitidas en la lista de dominios CORS, ver `CORSSettings` abajo). Cuando se desactiva (False, por defecto), se ignoran todas las peticiones cruzadas enviadas con CORS. Cuando se activa (True) y un dominio o método no permitido envía una solicitud de sitio cruzado, se rechaza con una respuesta de error "403 - prohibido".

Por defecto: False (desactivado)

Para más información sobre CORS, consulte la página [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) en Wikipedia.

<!-- END REF -->

<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings

<!-- REF #WebServerClass.CORSSettings.Syntax -->**.CORSSettings** : Collection<!-- END REF -->


Contiene el <!-- REF #WebServerClass.CORSSettings.Summary -->lista de hosts y métodos permitidos para el servicio CORS<!-- END REF --> (ver [`propiedad CORSEnabled`](#corsenabled)). Cada objeto debe contener una propiedad **host** y, opcionalmente, una propiedad **methods**:


- **host** (texto, obligatorio): nombre de dominio o dirección IP desde donde las páginas externas pueden enviar solicitudes de datos al Servidor a través de CORS. Se pueden añadir múltiples atributos de dominio para crear una lista blanca. Si *host* no está presente o está vacío, el objeto se ignora. Se soportan varias sintaxis:
  - 192.168.5.17:8081
  - 192.168.5.17
  - 192.168.*
  - 192.168.*:8081
  - <http://192.168.5.17:8081>
  - <http://*.myDomain.com>
  - <http://myProject.myDomain.com>
  - *.myDomain.com
  - myProject.myDomain.com
  - \*

- **methods** (texto, opcional): método(s) HTTP aceptado(s) para el host CORS correspondiente. Separe cada método con un ";" (por ejemplo: "post;get"). Si *methods* está vacío, null o indefinido, todos los métodos están activos.

<!-- END REF -->

<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog

<!-- REF #WebServerClass.debugLog.Syntax -->**.debugLog** : Number<!-- END REF -->


El <!-- REF #WebServerClass.debugLog.Summary -->estado del archivo de log de las peticiones HTTP<!-- END REF --> (HTTPDebugLog_nn.txt, almacenado en la carpeta "Logs" de la aplicación -- nn es el número del archivo).

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


El <!-- REF #WebServerClass.HSTSEnabled.Summary -->estado del HTTP Strict Transport Security (HSTS)<!-- END REF -->. HSTS permite al servidor web declarar que los navegadores sólo deben interactuar con él a través de conexiones HTTPS seguras. Los navegadores registrarán la información HSTS la primera vez que reciban una respuesta del servidor web, luego cualquier solicitud HTTP futura se transformará automáticamente en solicitudes HTTPS. El tiempo que esta información es almacenada por el navegador se especifica con la propiedad `HSTSMaxAge`. HSTS requiere que HTTPS esté activado en el servidor. HTTP también debe estar activado para permitir las conexiones cliente iniciales.

<!-- END REF -->

<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge



<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->**.HSTSMaxAge** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HSTSMaxAge.Summary -->duración máxima (en segundos) de activación de HSTS para cada nueva conexión cliente<!-- END REF -->. Esta información se almacena del lado del cliente durante el tiempo especificado.

Valor por defecto: 63072000 (2 años).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->**.HTTPCompressionLevel** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->nivel de compresión para todos los intercambios HTTP comprimidos para el servidor HTTP 4D (peticiones clientes o respuestas servidor)<!-- END REF -->. Este selector permite optimizar los intercambios priorizando la velocidad de ejecución (menos compresión) o la cantidad de compresión (menos velocidad).

Valores posibles:

- 1 a 9 (donde 1 es la compresión más rápida y 9 la más alta).
- -1 = definir un compromiso entre la velocidad y la tasa de compresión.

Valores posibles:

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->**.HTTPCompressionThreshold** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->umbral de tamaño (bytes) de las peticiones por debajo del cual no se deben comprimir los intercambios<!-- END REF -->. Este parámetro es útil para evitar la pérdida de tiempo de la máquina al comprimir los intercambios pequeños.

Umbral de compresión por defecto = 1024 bytes

<!-- END REF -->

<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<!-- REF #WebServerClass.HTTPEnabled.Syntax -->**.HTTPEnabled** : Boolean<!-- END REF -->


El <!-- REF #WebServerClass.HTTPEnabled.Summary -->estado del protocolo HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort

<!-- REF #WebServerClass.HTTPPort.Syntax -->**.HTTPPort** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HTTPPort.Summary -->número de puerto IP de escucha para HTTP<!-- END REF -->.

Por defecto = 80

<!-- END REF -->

<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->**.HTTPTrace** : Boolean<!-- END REF -->


El <!-- REF #WebServerClass.HTTPTrace.Summary -->activación de `HTTP TRACE`<!-- END REF -->. Por razones de seguridad, por defecto el servidor web rechaza las peticiones `HTTP TRACE` con un error 405. Cuando se activa, el servidor web responde a las peticiones `HTTP TRACE` con la línea de petición, el encabezado y el cuerpo.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled

<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->**.HTTPSEnabled** : Boolean<!-- END REF -->


El <!-- REF #WebServerClass.HTTPSEnabled.Summary -->estado del protocolo HTTPS<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<!-- REF #WebServerClass.HTTPSPort.Syntax -->**.HTTPSPort** : Number<!-- END REF -->


El <!-- REF #WebServerClass.HTTPSPort.Summary -->número de puerto IP de escucha para HTTPS<!-- END REF -->.

Por defecto = 443

<!-- END REF -->

<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->**.inactiveProcessTimeout** : Number<!-- END REF -->

> Esta propiedad no se devuelve en [modo sesiones escalables](#scalablesession).

El <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->duración de vida (en minutos) de los procesos de sesión legacy inactivos<!-- END REF -->. Al final del tiempo de espera, el proceso se mata en el servidor, se llama al método base `On Web Legacy Close Session` y se destruye el contexto de la sesión heredada.

Por defecto = 480 minutos

<!-- END REF -->

<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->**.inactiveSessionTimeout** : Number<!-- END REF -->

> Esta propiedad no se devuelve en [modo sesiones escalables](#scalablesession).

El <!-- REF #WebServerClass.inactiveSessionTimeout.Summary -->duración de vida (en minutos) de las sesiones legacy inactivas (duración definida en la cookie)<!-- END REF -->. Al final de este periodo, la cookie de sesión expira y deja de ser enviada por el cliente HTTP.

Por defecto = 480 minutos

<!-- END REF -->

<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen

<!-- REF #WebServerClass.IPAddressToListen.Syntax -->**.IPAddressToListen** : Text<!-- END REF -->


El <!-- REF #WebServerClass.IPAddressToListen.Summary -->Dirección IP en la que el servidor web 4D recibirá las peticiones HTTP<!-- END REF -->. Por defecto, no se define ninguna dirección específica. Se soportan tanto los formatos de cadena IPv6 como los IPv4.

<!-- END REF -->

<!-- REF WebServerClass.isRunning.Desc -->

## .isRunning

<!-- REF #WebServerClass.isRunning.Syntax -->**.isRunning** : Boolean<!-- END REF -->


*Propiedad de sólo lectura*

El <!-- REF #WebServerClass.isRunning.Summary -->estado de ejecución del servidor web<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->**.keepSession** : Boolean<!-- END REF -->


Contiene <!-- REF #WebServerClass.keepSession.Summary -->`True` si las sesiones heredadas son activadas en el servidor web, `False` en caso contrario<!-- END REF -->.

##### Ver también

[.scalableSession](#scalablesession)

<!-- END REF -->

<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording

<!-- REF #WebServerClass.logRecording.Syntax -->**.logRecording** : Number<!-- END REF -->


El <!-- REF #WebServerClass.logRecording.Summary -->valor de registro del log de peticiones (logweb.txt)<!-- END REF -->.

- 0 = No registrar (por defecto)
- 1 = Registro en formato CLF
- 2 = Registro en formato DLF
- 3 = Registro en formato ELF
- 4 = Registro en formato WLF

<!-- END REF -->

<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses

<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->**.maxConcurrentProcesses** : Number<!-- END REF -->


El <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->número máximo de procesos web simultáneos soportados por el servidor web<!-- END REF -->. Cuando se alcance este número (menos uno), 4D no creará ningún otro proceso y devolverá el estado HTTP 503 - Servicio no disponible a todas las nuevas peticiones.

Valores posibles: 500000 - 2147483647

Valores posibles: 500000 - 2147483648

<!-- END REF -->

<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<!-- REF #WebServerClass.maxRequestSize.Syntax -->**.maxRequestSize** : Number<!-- END REF -->


Contiene el <!-- REF #WebServerClass.maxRequestSize.Summary -->tamaño máximo (en bytes) de las peticiones HTTP entrantes (POST) que el servidor web puede procesar<!-- END REF -->. Pasar el valor máximo (2147483647) significa que, en la práctica, no se define ningún límite. Este límite se utiliza para evitar la saturación del servidor web debido a peticiones entrantes demasiado grandes. Si una petición alcanza este límite, el servidor web la rechaza.

Valores posibles: 500000 - 2147483647

<!-- END REF -->

<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->**.maxSessions** : Number<!-- END REF -->

> Esta propiedad no se devuelve en [modo sesiones escalables](#scalablesession).

Contiene el <!-- REF #WebServerClass.maxSessions.Summary -->número máximo de sesiones legacy simultáneas<!-- END REF -->. Cuando se alcanza el límite, se cierra la sesión heredada más antigua (y se llama al método base `On Web Legacy Close Session`) si el servidor web necesita crear una nueva. El número de sesiones heredadas simultáneas no puede superar el número total de procesos web (propiedad `maxConcurrentProcesses`, 100 por defecto)

<!-- END REF -->

<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->**.minTLSVersion** : Number<!-- END REF -->


El <!-- REF #WebServerClass.minTLSVersion.Summary -->versión mínima de TLS aceptada para las conexiones<!-- END REF -->. Se rechazarán los intentos de conexión de clientes que sólo soporten versiones inferiores a la mínima.

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


*Propiedad de sólo lectura*

El <!-- REF #WebServerClass.name.Summary -->nombre de la aplicación del servidor web<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->**.openSSLVersion** : Text<!-- END REF -->


*Propiedad de sólo lectura*

El <!-- REF #WebServerClass.openSSLVersion.Summary -->versión de la librería OpenSSL utilizada<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*Propiedad de sólo lectura*

El <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->disponibilidad de PFS en el servidor<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.rootFolder.Desc -->
## .rootFolder

<!-- REF #WebServerClass.rootFolder.Syntax -->**.rootFolder** : Text<!-- END REF -->


El <!-- REF #WebServerClass.rootFolder.Summary -->ruta de la carpeta raíz del servidor web<!-- END REF -->. La ruta se formatea en la ruta completa POSIX utilizando filesystems. Cuando se utiliza esta propiedad en el parámetro `settings`, puede ser un objeto `Folder`.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->
## .scalableSession

<!-- REF #WebServerClass.scalableSession.Syntax -->**.scalableSession** : Boolean<!-- END REF -->


Contiene <!-- REF #WebServerClass.scalableSession.Summary -->`True` si las sesiones evolutivas se utilizan en el servidor web, y `False` en caso contrario<!-- END REF -->.

##### Ver también

[.keepSession](#keepsession)
<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->**.sessionCookieDomain** : Text<!-- END REF -->


El <!-- REF #WebServerClass.sessionCookieDomain.Summary -->campo "domain" de la cookie de sesión<!-- END REF -->. Se utiliza para controlar el alcance de las cookies de sesión. Si define, por ejemplo, el valor "/*.4d.fr" para este selector, el cliente sólo enviará una cookie cuando la solicitud se dirija al dominio ".4d.fr", lo que excluye a los servidores que alojan datos estáticos externos.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<!-- REF #WebServerClass.sessionCookieName.Syntax -->**.sessionCookieName** : Text<!-- END REF -->


El <!-- REF #WebServerClass.sessionCookieName.Summary -->nombre de la cookie utilizada para almacenar el ID de sesión<!-- END REF -->.

*Propiedad de sólo lectura*

<!-- END REF -->

<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath

<!-- REF #WebServerClass.sessionCookiePath.Syntax -->**.sessionCookiePath** : Text<!-- END REF -->


El <!-- REF #WebServerClass.sessionCookiePath.Summary -->campo "path" de la cookie de sesión<!-- END REF -->. Se utiliza para controlar el alcance de las cookies de sesión. Si define, por ejemplo, el valor "/4DACTION" para este selector, el cliente sólo enviará una cookie para las peticiones dinámicas que empiecen por 4DACTION, y no para las imágenes, páginas estáticas, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->**.sessionCookieSameSite** : Text<!-- END REF -->


El <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->valor de la cookie de session "SameSite"<!-- END REF -->. Valores posibles (utilizando constantes):

| Constante           | Valor    | Descripción                                                                                                                                                                |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *Valor por defecto* - Las cookies sólo se envían en un contexto de primera parte                                                                                           |
| Web SameSite Lax    | "Lax"    | Las cookies también se envían en las sub-solicitudes entre sitios, pero sólo cuando un usuario está navegando hacia el sitio de origen (es decir, cuando sigue un enlace). |
| Web SameSite None   | "None"   | Las cookies se envían en todos los contextos, es decir, en las respuestas a las solicitudes de primera parte y de origen cruzado.                                          |

Ver la descripción de [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) para obtener información detallada.

<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> Esta propiedad no se utiliza en el modo [sesiones escalables](#scalablesession) (no hay validación de la dirección IP).


El <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->validación de la dirección IP para las cookies de sesión<!-- END REF -->. Por razones de seguridad, por defecto el servidor web comprueba la dirección IP de cada solicitud que contiene una cookie de sesión y la rechaza si esta dirección no coincide con la dirección IP utilizada para crear la cookie. En algunas aplicaciones específicas, es posible que desee desactivar esta validación y aceptar las cookies de sesión, incluso cuando sus direcciones IP no coinciden. Por ejemplo, cuando los dispositivos móviles cambian entre las redes WiFi y 3G/4G, su dirección IP cambiará. En este caso, puede permitir que los clientes puedan seguir utilizando sus sesiones web incluso cuando las direcciones IP cambien (esta configuración reduce el nivel de seguridad de su aplicación).

<!-- END REF -->

<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |
</details>

<!-- REF #WebServerClass.start().Syntax -->
**.start**() : Object<br/>**.start**( *settings* : Object ) : Object<!-- END REF -->


<!-- REF #WebServerClass.start().Params -->

| Parámetros | Tipo   |    | Descripción                                     |
| ---------- | ------ | -- | ----------------------------------------------- |
| settings   | Object | -> | Parámetros del servidor web a definir al inicio |
| Resultado  | Object | <- | Estado del inicio del servidor web              |

<!-- END REF -->

La función `.start()` <!-- REF #WebServerClass.start().Summary -->inicia el servidor web en el que se aplica<!-- END REF -->, utilizando las propiedades definidas en el parámetro objeto opcional *settings*.

El servidor web se inicia con la configuración por defecto definida en el archivo de configuración del proyecto o (sólo en la base host) utilizando el comando `WEB SET OPTION`. Sin embargo, utilizando el parámetro *settings*, se pueden definir propiedades personalizadas para la sesión del servidor web.

Todas las configuraciones de los [objetos del Servidor Web](#web-server-object) pueden personalizarse, excepto las propiedades de sólo lectura ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy) y [.sessionCookieName](#sessioncookiename)).

Todas las configuraciones de los [objetos del Servidor Web](#web-server-object) pueden personalizarse, excepto las propiedades de sólo lectura ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy) y [.sessionCookieName](#sessioncookiename)).

#### Objeto devuelto

La función devuelve un objeto que describe el estado de lanzamiento del servidor web. Este objeto puede contener las siguientes propiedades:

| Propiedad |                         | Tipo       | Descripción                                                                   |
| --------- | ----------------------- | ---------- | ----------------------------------------------------------------------------- |
| success   |                         | Boolean    | True si el servidor web se ha iniciado correctamente, False en caso contrario |
| errors    |                         | Collection | Pila de errores 4D (no se devuelve si el servidor web se inició con éxito)    |
|           | \[].errCode            | Number     | Código de error 4D                                                            |
|           | \[].message            | Text       | Descripción del error 4D                                                      |
|           | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                         |
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

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |
</details>

<!-- REF #WebServerClass.stop().Syntax -->**.stop()**<!-- END REF -->


<!-- REF #WebServerClass.stop().Params -->
| Parámetros | Tipo |  | Descripción                                             |
| ---------- | ---- |  | ------------------------------------------------------- |
|            |      |  | No requiere ningún parámetro|<!-- END REF -->

|

La función `.stop()` <!-- REF #WebServerClass.stop().Summary -->detiene el servidor web en el que se aplica<!-- END REF -->.

Si el servidor web se ha iniciado, todas las conexiones y procesos web se cierran, una vez que las peticiones actualmente gestionadas han finalizado. Si el servidor web no se ha iniciado, el método no hace nada.
> Esta función reinicia los parámetros web personalizados definidos para la sesión mediante el parámetro *settings* de la función [`.start()`](#start), si la hubiera.

#### Ejemplo

Para detener el servidor web de la base:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->
