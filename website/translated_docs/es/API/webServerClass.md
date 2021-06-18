---
id: webServerClass
title: WebServer
---


The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). This class is available from the `4D` class store.



### Objeto servidor web

Web server objects are instantiated with the [`WEB Server`](#web-server) command.

They provide the following properties and functions:


### Summary
|                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #webServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.accessKeyDefined.Summary -->|
| [<!-- INCLUDE #webServerClass.certificateFolder.Syntax -->](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #webServerClass.characterSet.Syntax -->](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #webServerClass.cipherSuite.Syntax -->](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #webServerClass.CORSEnabled.Syntax -->](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #webServerClass.CORSSettings.Syntax -->](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #webServerClass.debugLog.Syntax -->](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #webServerClass.defaultHomepage.Syntax -->](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #webServerClass.HSTSEnabled.Syntax -->](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #webServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HSTSMaxAge.Summary -->|
|[<!-- INCLUDE #webServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPCompressionLevel.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPCompressionThreshold.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPEnabled.Syntax -->](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPEnabled.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPPort.Syntax -->](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPPort.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPTrace.Syntax -->](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPTrace.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPSEnabled.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPSPort.Syntax -->](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPSPort.Summary -->| |[<!-- INCLUDE #webServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.inactiveProcessTimeout.Summary -->| |[<!-- INCLUDE #webServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.inactiveSessionTimeout.Summary -->| |[<!-- INCLUDE #webServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.IPAddressToListen.Summary -->| |[<!-- INCLUDE #webServerClass.isRunning.Syntax -->](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.isRunning.Summary -->| |[<!-- INCLUDE #webServerClass.keepSession.Syntax -->](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.keepSession.Summary -->| |[<!-- INCLUDE #webServerClass.logRecording.Syntax -->](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.logRecording.Summary -->| |[<!-- INCLUDE #webServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxConcurrentProcesses.Summary -->| |[<!-- INCLUDE #webServerClass.maxRequestSize.Syntax -->](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxRequestSize.Summary -->| |[<!-- INCLUDE #webServerClass.maxSessions.Syntax -->](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxSessions.Summary -->| |[<!-- INCLUDE #webServerClass.minTLSVersion.Syntax -->](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.minTLSVersion.Summary -->| |[<!-- INCLUDE #webServerClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.name.Summary -->| |[<!-- INCLUDE #webServerClass.openSSLVersion.Syntax -->](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.openSSLVersion.Summary -->| |[<!-- INCLUDE #webServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.perfectForwardSecrecy.Summary -->| |[<!-- INCLUDE #webServerClass.rootFolder.Syntax -->](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.rootFolder.Summary -->| |[<!-- INCLUDE #webServerClass.scalableSession.Syntax -->](#scalableSession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.scalableSession.Summary -->| [<!-- INCLUDE #webServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookieDomain.Summary -->| |[<!-- INCLUDE #webServerClass.sessionCookieName.Syntax -->](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookieName.Summary -->| |[<!-- INCLUDE #webServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookiePath.Summary -->| |[<!-- INCLUDE #webServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionIPAddressValidation.Summary -->| |[<!-- INCLUDE #webServerClass.start().Syntax -->](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.start().Summary -->| |[<!-- INCLUDE #webServerClass.stop().Syntax -->](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.stop().Summary -->|



## WEB Server

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |
</details>

<!-- REF #_command_.WEB Server.Syntax -->
**WEB Server** : 4D.WebServer<br>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->


<!-- REF #_command_.WEB Server.Params -->

| Parameter | Tipo         |    | Descripción                                                    |
| --------- | ------------ | -- | -------------------------------------------------------------- |
| option    | Entero       | -> | Web server to get (default if omitted = `Web server database`) |
| Resultado | 4D.WebServer | <- | Web server object                                              |

<!-- END REF -->

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the *option* parameter<!-- END REF -->.

By default, if the *option* parameter is omitted, the command returns a reference to the Web server of the database, i.e. the default Web server. To designate the Web server to return, you can pass one of the following constants in the *option* parameter:

| Constant                       | Valor | Comment                                                  |
| ------------------------------ | ----- | -------------------------------------------------------- |
| `Web server database`          | 1     | Current database Web server (default if omitted)         |
| `Web server host database`     | 2     | Web server of the host database of a component           |
| `Web server receiving request` | 3     | Web server that received the request (target Web server) |

The returned Web server object contains the current values of the Web server properties.

#### Ejemplo

From your component, you want to know if the Web server of the host database is started:

```4d
  // Method of a component
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |
</details>

<!-- REF #_command_.WEB Server list.Syntax -->
**WEB Server list** : Collection<!-- END REF -->


<!-- REF #_command_.WEB Server list.Params -->

| Parameter | Tipo      |    | Descripción                                    |
| --------- | --------- | -- | ---------------------------------------------- |
| Resultado | Colección | <- | Collection of the available Web server objects |

<!-- END REF -->

The `WEB Server list` command<!-- REF #_command_.WEB Server list. Summary -->returns a collection of all Web server objects available in the 4D application<!-- END REF -->.

A 4D application can contain anywhere from one to several Web servers:

- one Web server for the host database (default Web server)
- one Web server for each component.

All available Web servers are returned by the `WEB Server list` command, whether they are actually running or not.

> The default Web server object is automatically loaded by 4D at startup. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](#web-server) command.

You can use the [.name](#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.


#### Ejemplo

We want to know how many running web servers are available:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")

```




## .accessKeyDefined


<!-- REF #webServerClass.accessKeyDefined.Syntax -->
**.accessKeyDefined** : Boolean<!-- END REF -->


The **.accessKeyDefined** property contains <!-- REF #webServerClass.accessKeyDefined.Summary -->true if an access key is defined in the settings of the web server<!-- END REF -->. This property is used by the WebAdmin web server to validate the security configuration of the administration interface.


<!-- REF webServerClass.certificateFolder.Desc -->

## .certificateFolder


<!-- REF #webServerClass.certificateFolder.Syntax -->
**.certificateFolder** : Text<!-- END REF -->


Path of the <!-- REF #webServerClass.certificateFolder.Summary -->folder where the certificate files are located<!-- END REF -->. The path is formatted in POSIX full path using filesystems. When using this property in the `settings` parameter of the [`.start()`](#start) function, it can be a [`Folder` object](folderClass.md).

<!-- END REF -->


<!-- REF webServerClass.characterSet.Desc -->

## .characterSet


<!-- REF #webServerClass.characterSet.Syntax -->
**.characterSet** : Number<br>**.characterSet** : Text<!-- END REF -->


The <!-- REF #webServerClass.characterSet.Summary -->character set that the 4D Web Server should use to communicate with browsers connecting to the application<!-- END REF -->. The default value actually depends on the language of the OS. Can be a MIBEnum integer or a Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Here is the list of identifiers corresponding to the character sets supported by the 4D Web Server:

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


<!-- REF webServerClass.cipherSuite.Desc -->

## .cipherSuite


<!-- REF #webServerClass.cipherSuite.Syntax -->
**.cipherSuite** : Text<!-- END REF -->


The <!-- REF #webServerClass.cipherSuite.Summary -->cipher list used for the secure protocol<!-- END REF -->. Sets the priority of ciphering algorithms implemented by the 4D web server. Can be a sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

<!-- END REF -->



<!-- REF webServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #webServerClass.CORSEnabled.Syntax -->
**.CORSEnabled** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.CORSEnabled.Summary -->CORS (*Cross-origin resource sharing*) service status for the web server<!-- END REF -->. For security reasons, "cross-domain" requests are forbidden at the browser level by default. When enabled (True), XHR calls (e.g. REST requests) from Web pages outside the domain can be allowed in your application (you need to define the list of allowed addresses in the CORS domain list, see `CORSSettings` below). When disabled (False, default), all cross site requests sent with CORS are ignored. When enabled (True) and a non-allowed domain or method sends a cross site request, it is rejected with a "403 - forbidden" error response.

Default: False (disabled)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

<!-- END REF -->


<!-- REF webServerClass.CORSSettings.Desc -->

## .CORSSettings


<!-- REF #webServerClass.CORSSettings.Syntax -->
**.CORSSettings** : Collection<!-- END REF -->


A <!-- REF #webServerClass.CORSSettings.Summary -->list of allowed hosts and methods for the CORS service<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:

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


<!-- REF webServerClass.debugLog.Desc -->

## .debugLog


<!-- REF #webServerClass.debugLog.Syntax -->
**.debugLog** : Number<!-- END REF -->


The <!-- REF #webServerClass.debugLog.Summary -->status of the HTTP request log file<!-- END REF --> (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number).

*   0 = disabled
*   1 = enabled without body parts (body size is provided in this case)
*   3 = enabled with body parts in response only
*   5 = enabled with body parts in request only
*   7 = enabled with body parts in response and request

<!-- END REF -->


<!-- REF webServerClass.defaultHomepage.Desc -->

## .defaultHomepage


<!-- REF #webServerClass.defaultHomepage.Syntax -->
**.defaultHomepage** : Text<!-- END REF -->


The <!-- REF #webServerClass.defaultHomepage.Summary -->name of the default home page<!-- END REF --> or "" to not send the custom home page.

<!-- END REF -->


<!-- REF webServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #webServerClass.HSTSEnabled.Syntax -->
**.HSTSEnabled** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS) status<!-- END REF -->. HSTS allows the Web server to declare that browsers should only interact with it via secure HTTPS connections. Browsers will record the HSTS information the first time they receive a response from the web server, then any future HTTP requests will automatically be transformed into HTTPS requests. The length of time this information is stored by the browser is specified with the `HSTSMaxAge` property. HSTS requires that HTTPS is enabled on the server. HTTP must also be enabled to allow initial client connections.

<!-- END REF -->


<!-- REF webServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<!-- REF #webServerClass.HSTSMaxAge.Syntax -->
**.HSTSMaxAge** : Number<!-- END REF -->


The <!-- REF #webServerClass.HSTSMaxAge.Summary -->maximum length of time (in seconds) that HSTS is active for each new client connection<!-- END REF -->. This information is stored on the client side for the specified duration.

Default value: 63072000 (2 years).

<!-- END REF -->


<!-- REF webServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #webServerClass.HTTPCompressionLevel.Syntax -->
**.HTTPCompressionLevel** : Number<!-- END REF -->


The <!-- REF #webServerClass.HTTPCompressionLevel.Summary -->compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies)<!-- END REF -->. This selector lets you optimize exchanges by either prioritizing speed of execution (less compression) or the amount of compression (less speed).

Possible values:

*   1 to 9 (where 1 is the fastest compression and 9 the highest).
*   -1 = set a compromise between speed and rate of compression.

Default = 1 (faster compression).

<!-- END REF -->


<!-- REF webServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #webServerClass.HTTPCompressionThreshold.Syntax -->
**.HTTPCompressionThreshold** : Number<!-- END REF -->


The <!-- REF #webServerClass.HTTPCompressionThreshold.Summary -->size threshold (bytes) for requests below which exchanges should not be compressed<!-- END REF -->. This setting is useful in order to avoid losing machine time by compressing small exchanges.

Default compression threshold = 1024 bytes

<!-- END REF -->


<!-- REF webServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled


<!-- REF #webServerClass.HTTPEnabled.Syntax -->
**.HTTPEnabled** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.HTTPEnabled.Summary -->HTTP protocol state<!-- END REF -->.

<!-- END REF -->



<!-- REF webServerClass.HTTPPort.Desc -->

## .HTTPPort


<!-- REF #webServerClass.HTTPPort.Syntax -->
**.HTTPPort** : Number<!-- END REF -->


The <!-- REF #webServerClass.HTTPPort.Summary -->listening IP port number for HTTP<!-- END REF -->.

Default = 80

<!-- END REF -->


<!-- REF webServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #webServerClass.HTTPTrace.Syntax -->
**.HTTPTrace** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->


<!-- REF webServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled


<!-- REF #webServerClass.HTTPSEnabled.Syntax -->
**.HTTPSEnabled** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.HTTPSEnabled.Summary -->HTTPS protocol state<!-- END REF -->.

<!-- END REF -->


<!-- REF webServerClass.HTTPSPort.Desc -->

## .HTTPSPort


<!-- REF #webServerClass.HTTPSPort.Syntax -->
**.HTTPSPort** : Number<!-- END REF -->

The <!-- REF #webServerClass.HTTPSPort.Summary -->listening IP port number for HTTPS<!-- END REF -->.

Default = 443

<!-- END REF -->


<!-- REF webServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #webServerClass.inactiveProcessTimeout.Syntax -->
**.inactiveProcessTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #webServerClass.inactiveProcessTimeout.Summary -->life duration (in minutes) of the inactive legacy session processes<!-- END REF -->. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Default = 480 minutes

<!-- END REF -->


<!-- REF webServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #webServerClass.inactiveSessionTimeout.Syntax -->
**.inactiveSessionTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #webServerClass.inactiveSessionTimeout.Summary -->life duration (in minutes) of inactive legacy sessions (duration set in cookie)<!-- END REF -->. At the end of this period, the session cookie expires and is no longer sent by the HTTP client.

Default = 480 minutes

<!-- END REF -->


<!-- REF webServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen


<!-- REF #webServerClass.IPAddressToListen.Syntax -->
**.IPAddressToListen** : Text<!-- END REF -->


The <!-- REF #webServerClass.IPAddressToListen.Summary -->IP address on which the 4D Web Server will receive HTTP requests<!-- END REF -->. By default, no specific address is defined. Both IPv6 string formats and IPv4 string formats are supported.

<!-- END REF -->


<!-- REF webServerClass.isRunning.Desc -->


## .isRunning


<!-- REF #webServerClass.isRunning.Syntax -->
**.isRunning** : Boolean<!-- END REF -->


*Read-only property*

The <!-- REF #webServerClass.isRunning.Summary -->web server running state<!-- END REF -->.

<!-- END REF -->


<!-- REF webServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #webServerClass.keepSession.Syntax -->
**.keepSession** : Boolean<!-- END REF -->


<!-- REF #webServerClass.keepSession.Summary -->True if legacy sessions are enabled in the web server, False otherwise<!-- END REF -->.

##### See also:
[.scalableSession](#scalablesession)

<!-- END REF -->


<!-- REF webServerClass.logRecording.Desc -->

## .logRecording


<!-- REF #webServerClass.logRecording.Syntax -->
**.logRecording** : Number<!-- END REF -->


The <!-- REF #webServerClass.logRecording.Summary -->log requests (logweb.txt) recording value<!-- END REF -->.

*   0 = Do not record (default)
*   1 = Record in CLF format
*   2 = Record in DLF format
*   3 = Record in ELF format
*   4 = Record in WLF format

<!-- END REF -->


<!-- REF webServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses


<!-- REF #webServerClass.maxConcurrentProcesses.Syntax -->
**.maxConcurrentProcesses** : Number<!-- END REF -->


The <!-- REF #webServerClass.maxConcurrentProcesses.Summary -->maximum number of concurrent web processes supported by the web server<!-- END REF -->. When this number (minus one) is reached, 4D will not create any other processes and returns the HTTP status 503 - Service Unavailable to all new requests.

Possible values: 10 - 32000

Default = 100

<!-- END REF -->


<!-- REF webServerClass.maxRequestSize.Desc -->

## .maxRequestSize


<!-- REF #webServerClass.maxRequestSize.Syntax -->
**.maxRequestSize** : Number<!-- END REF -->


The <!-- REF #webServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passing the maximum value (2147483648) means that, in practice, no limit is set. This limit is used to avoid web server saturation due to incoming requests that are too large. If a request reaches this limit, the web server rejects it.

Possible values: 500000 - 2147483648

<!-- END REF -->


<!-- REF webServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #webServerClass.maxSessions.Syntax -->
**.maxSessions** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #webServerClass.maxSessions.Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)

<!-- END REF -->


<!-- REF webServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #webServerClass.minTLSVersion.Syntax -->
**.minTLSVersion** : Number<!-- END REF -->


The <!-- REF #webServerClass.minTLSVersion.Summary -->minimum TLS version accepted for connections<!-- END REF -->. Connection attempts from clients supporting only versions below the minimum will be rejected.

Possible values:

*   1 = TLSv1_0
*   2 = TLSv1_1
*   3 = TLSv1_2 (default)

If modified, the server must be restarted to use the new value.

<!-- END REF -->


<!-- REF webServerClass.name.Desc -->

## .name


<!-- REF #webServerClass.name.Syntax -->
**.name** : Text<!-- END REF -->


*Read-only property*

The <!-- REF #webServerClass.name.Summary -->name of the web server application<!-- END REF -->.

<!-- END REF -->



<!-- REF webServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #webServerClass.openSSLVersion.Syntax -->
**.openSSLVersion** : Text<!-- END REF -->


*Read-only property*

The <!-- REF #webServerClass.openSSLVersion.Summary -->version of the OpenSSL library used<!-- END REF -->.

<!-- END REF -->


<!-- REF webServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy


<!-- REF #webServerClass.perfectForwardSecrecy.Syntax -->
**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*Read-only property*

The <!-- REF #webServerClass.perfectForwardSecrecy.Summary -->PFS availability on the server<!-- END REF -->.

<!-- END REF -->


<!-- REF webServerClass.rootFolder.Desc -->
## .rootFolder


<!-- REF #webServerClass.rootFolder.Syntax -->
**.rootFolder** : Text<!-- END REF -->


The <!-- REF #webServerClass.rootFolder.Summary -->path of web server root folder<!-- END REF -->. The path is formatted in POSIX full path using filesystems. When using this property in the `settings` parameter, it can be a `Folder` object.

<!-- END REF -->

<!-- REF webServerClass.scalableSession.Desc -->
## .scalableSession


<!-- REF #webServerClass.scalableSession.Syntax -->
**.scalableSession** : Boolean<!-- END REF -->


<!-- REF #webServerClass.scalableSession.Summary -->True if scalable sessions are used in the web server, and False otherwise<!-- END REF -->.

##### See also:
[.keepSession](#keepsession)
<!-- END REF -->

<!-- REF webServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain


<!-- REF #webServerClass.sessionCookieDomain.Syntax -->
**.sessionCookieDomain** : Text<!-- END REF -->


The <!-- REF #webServerClass.sessionCookieDomain.Summary -->"domain" field of the session cookie<!-- END REF -->. Used to control the scope of the session cookies. If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.

<!-- END REF -->


<!-- REF webServerClass.sessionCookieName.Desc -->

## .sessionCookieName


<!-- REF #webServerClass.sessionCookieName.Syntax -->
**.sessionCookieName** : Text<!-- END REF -->


The <!-- REF #webServerClass.sessionCookieName.Summary -->name of the cookie used for storing the session ID<!-- END REF -->.

*Read-only property*

<!-- END REF -->


<!-- REF webServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath


<!-- REF #webServerClass.sessionCookiePath.Syntax -->
**.sessionCookiePath** : Text<!-- END REF -->


The <!-- REF #webServerClass.sessionCookiePath.Summary -->"path" field of the session cookie<!-- END REF -->. Used to control the scope of the session cookies. If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.

<!-- END REF -->


<!-- REF webServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation


<!-- REF #webServerClass.sessionIPAddressValidation.Syntax -->
**.sessionIPAddressValidation** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.sessionIPAddressValidation.Summary -->IP address validation for session cookies<!-- END REF -->. For security reasons, by default the web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. For example when mobile devices switch between WiFi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change (this setting lowers the security level of your application).

<!-- END REF -->


<!-- REF webServerClass.start().Desc -->

## .start()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |
</details>

<!-- REF #webServerClass.start().Syntax -->
**.start**() : Object<br>**.start**( *settings* : Object ) : Object<!-- END REF -->



<!-- REF #webServerClass.start().Params -->

| Parameter  | Tipo   |    | Descripción                           |
| ---------- | ------ | -- | ------------------------------------- |
| parámetros | Objeto | -> | Web server settings to set at startup |
| Resultado  | Objeto | <- | Status of the web server startup      |

<!-- END REF -->

The `.start()` function <!-- REF #webServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional *settings* object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

Customized session settings will be reset when the [`.stop()`](#stop) function is called.


#### Returned object

The function returns an object describing the Web server launch status. This object can contain the following properties:

| Property |                         | Tipo      | Descripción                                                          |
| -------- | ----------------------- | --------- | -------------------------------------------------------------------- |
| success  |                         | Booleano  | True if the web server was correctly started, False otherwise        |
| errors   |                         | Colección | 4D error stack (not returned if the web server started successfully) |
|          | \[].errCode            | Número    | 4D error code                                                        |
|          | \[].message            | Texto     | Description of the 4D error                                          |
|          | \[].componentSignature | Texto     | Signature of the internal component which returned the error         |
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


<!-- REF webServerClass.stop().Desc -->

## .stop()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |
</details>

<!-- REF #webServerClass.stop().Syntax -->
**.stop()** <!-- END REF -->

<!-- REF #webServerClass.stop().Params -->

| Parameter | Tipo |  | Descripción                     |
| --------- | ---- |  | ------------------------------- |
|           |      |  | Does not require any parameters |

 <!-- END REF -->

The `.stop()` function <!-- REF #webServerClass.stop().Summary -->stops the web server on which it is applied<!-- END REF -->.

If the web server was started, all web connections and web processes are closed, once the currently handled requests are finished. If the web server was not started, the method does nothing.
> This function resets the customized web settings defined for the session using the *settings* parameter of the [`.start()`](#start) function, if any.


#### Ejemplo

To stop the database Web server:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
