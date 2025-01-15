---
id: WebServerClass
title: WebServer
---


The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). This class is available from the `4D` class store.

### Web Server object

Web server objects are instantiated with the [`WEB Server`](#web-server) command.

They provide the following properties and functions:

### Summary

||
|---|
|[<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)<br/><!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->|
|[<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)<br/><!-- INCLUDE #WebServerClass.certificateFolder.Summary -->|
|[<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)<br/><!-- INCLUDE #WebServerClass.characterSet.Summary -->|
|[<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)<br/><!-- INCLUDE #WebServerClass.cipherSuite.Summary -->|
|[<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)<br/><!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->|
|[<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)<br/><!-- INCLUDE #WebServerClass.CORSSettings.Summary --> |
|[<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)<br/><!-- INCLUDE #WebServerClass.debugLog.Summary -->|
|[<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)<br/><!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->|
|[<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)<br/><!-- INCLUDE #WebServerClass.HSTSEnabled.Summary --> |
|[<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)<br/><!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->|
|[<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)<br/><!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->|
|[<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)<br/><!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->|
|[<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)<br/><!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->|
|[<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)<br/><!-- INCLUDE #WebServerClass.HTTPPort.Summary -->|
|[<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)<br/><!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->|
|[<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)<br/><!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->|
|[<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)<br/><!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->|
|[<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)<br/><!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->|
|[<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)<br/><!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->|
|[<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<br/><!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->|
|[<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)<br/><!-- INCLUDE #WebServerClass.isRunning.Summary -->|
|[<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)<br/><!-- INCLUDE #WebServerClass.keepSession.Summary -->|
|[<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)<br/><!-- INCLUDE #WebServerClass.logRecording.Summary -->|
|[<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)<br/><!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->|
|[<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)<br/><!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->|
|[<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)<br/><!-- INCLUDE #WebServerClass.maxSessions.Summary -->|
|[<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)<br/><!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->|
|[<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)<br/><!-- INCLUDE #WebServerClass.name.Summary -->|
|[<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)<br/><!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->|
|[<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)<br/><!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->|
|[<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)<br/><!-- INCLUDE #WebServerClass.rootFolder.Summary -->|
|[<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)<br/><!-- INCLUDE #WebServerClass.scalableSession.Summary -->|
|[<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)<br/><!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->|
|[<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)<br/><!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->|
|[<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)<br/><!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->|
|[<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)<br/><!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->|
|[<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)<br/><!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary -->|
|[<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)<br/><!-- INCLUDE #WebServerClass.start().Summary -->|
|[<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)<br/><!-- INCLUDE #WebServerClass.stop().Summary -->|



## .accessKeyDefined

<!-- REF #WebServerClass.accessKeyDefined.Syntax -->**.accessKeyDefined** : Boolean<!-- END REF -->


The **.accessKeyDefined** property contains <!-- REF #WebServerClass.accessKeyDefined.Summary -->true if an access key is defined in the settings of the web server<!-- END REF -->. This property is used by the WebAdmin web server to validate the security configuration of the administration interface.

<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder

<!-- REF #WebServerClass.certificateFolder.Syntax -->**.certificateFolder** : Text<!-- END REF -->


Path of the <!-- REF #WebServerClass.certificateFolder.Summary -->folder where the certificate files are located<!-- END REF -->. The path is formatted in POSIX full path using filesystems. When using this property in the `settings` parameter of the [`.start()`](#start) function, it can be a [`Folder` object](FolderClass.md).

<!-- END REF -->

<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet

<!-- REF #WebServerClass.characterSet.Syntax -->**.characterSet** : Number<br/>**.characterSet** : Text<!-- END REF -->


The <!-- REF #WebServerClass.characterSet.Summary -->character set that the 4D Web Server should use to communicate with browsers connecting to the application<!-- END REF -->. The default value actually depends on the language of the OS. Can be a MIBEnum integer or a Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Here is the list of identifiers corresponding to the character sets supported by the 4D Web Server:

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


The <!-- REF #WebServerClass.cipherSuite.Summary -->cipher list used for the secure protocol<!-- END REF -->. Sets the priority of ciphering algorithms implemented by the 4D web server. Can be a sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

<!-- END REF -->

<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->**.CORSEnabled** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (*Cross-origin resource sharing*) service status for the web server<!-- END REF -->. For security reasons, "cross-domain" requests are forbidden at the browser level by default. When enabled (True), XHR calls (e.g. REST requests) from Web pages outside the domain can be allowed in your application (you need to define the list of allowed addresses in the CORS domain list, see `CORSSettings` below). When disabled (False, default), all cross site requests sent with CORS are ignored. When enabled (True) and a non-allowed domain or method sends a cross site request, it is rejected with a "403 - forbidden" error response.

Default: False (disabled)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

<!-- END REF -->

<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings

<!-- REF #WebServerClass.CORSSettings.Syntax -->**.CORSSettings** : Collection<!-- END REF -->


Contains the <!-- REF #WebServerClass.CORSSettings.Summary -->list of allowed hosts and methods for the CORS service<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:


- **host** (text, mandatory): Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Multiple domain attributes can be added to create a white list. If *host* is not present or empty, the object is ignored. Several syntaxes are supported:
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

- **methods** (text, optional): Accepted HTTP method(s) for the corresponding CORS host. Separate each method with a ";" (e,g,: "post;get"). If *methods* is empty, null, or undefined, all methods are enabled.

<!-- END REF -->

<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog

<!-- REF #WebServerClass.debugLog.Syntax -->**.debugLog** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.debugLog.Summary -->status of the HTTP request log file<!-- END REF --> (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number).

- 0 = disabled
- 1 = enabled without body parts (body size is provided in this case)
- 3 = enabled with body parts in response only
- 5 = enabled with body parts in request only
- 7 = enabled with body parts in response and request

<!-- END REF -->

<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage

<!-- REF #WebServerClass.defaultHomepage.Syntax -->**.defaultHomepage** : Text<!-- END REF -->


The <!-- REF #WebServerClass.defaultHomepage.Summary -->name of the default home page<!-- END REF --> or "" to not send the custom home page.

<!-- END REF -->

<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->**.HSTSEnabled** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS) status<!-- END REF -->. HSTS allows the Web server to declare that browsers should only interact with it via secure HTTPS connections. Browsers will record the HSTS information the first time they receive a response from the web server, then any future HTTP requests will automatically be transformed into HTTPS requests. The length of time this information is stored by the browser is specified with the `HSTSMaxAge` property. HSTS requires that HTTPS is enabled on the server. HTTP must also be enabled to allow initial client connections.

<!-- END REF -->

<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge



<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->**.HSTSMaxAge** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.HSTSMaxAge.Summary -->maximum length of time (in seconds) that HSTS is active for each new client connection<!-- END REF -->. This information is stored on the client side for the specified duration.

Default value: 63072000 (2 years).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->**.HTTPCompressionLevel** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies)<!-- END REF -->. This selector lets you optimize exchanges by either prioritizing speed of execution (less compression) or the amount of compression (less speed).

Possible values:

- 1 to 9 (where 1 is the fastest compression and 9 the highest).
- -1 = set a compromise between speed and rate of compression.

Default = 1 (faster compression).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->**.HTTPCompressionThreshold** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->size threshold (bytes) for requests below which exchanges should not be compressed<!-- END REF -->. This setting is useful in order to avoid losing machine time by compressing small exchanges.

Default compression threshold = 1024 bytes

<!-- END REF -->

<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<!-- REF #WebServerClass.HTTPEnabled.Syntax -->**.HTTPEnabled** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.HTTPEnabled.Summary -->HTTP protocol state<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort

<!-- REF #WebServerClass.HTTPPort.Syntax -->**.HTTPPort** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.HTTPPort.Summary -->listening IP port number for HTTP<!-- END REF -->.

Default = 80

<!-- END REF -->

<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->**.HTTPTrace** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled

<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->**.HTTPSEnabled** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.HTTPSEnabled.Summary -->HTTPS protocol state<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<!-- REF #WebServerClass.HTTPSPort.Syntax -->**.HTTPSPort** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.HTTPSPort.Summary -->listening IP port number for HTTPS<!-- END REF -->.

Default = 443

<!-- END REF -->

<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->**.inactiveProcessTimeout** : Integer<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->life duration (in minutes) of the inactive legacy session processes<!-- END REF -->. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Default = 480 minutes

<!-- END REF -->

<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->**.inactiveSessionTimeout** : Integer<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #WebServerClass.inactiveSessionTimeout.Summary -->life duration (in minutes) of inactive legacy sessions (duration set in cookie)<!-- END REF -->. At the end of this period, the session cookie expires and is no longer sent by the HTTP client.

Default = 480 minutes

<!-- END REF -->

<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen

<!-- REF #WebServerClass.IPAddressToListen.Syntax -->**.IPAddressToListen** : Text<!-- END REF -->


The <!-- REF #WebServerClass.IPAddressToListen.Summary -->IP address on which the 4D Web Server will receive HTTP requests<!-- END REF -->. By default, no specific address is defined. Both IPv6 string formats and IPv4 string formats are supported.

<!-- END REF -->

<!-- REF WebServerClass.isRunning.Desc -->

## .isRunning

<!-- REF #WebServerClass.isRunning.Syntax -->**.isRunning** : Boolean<!-- END REF -->


*Read-only property*

The <!-- REF #WebServerClass.isRunning.Summary -->web server running state<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->**.keepSession** : Boolean<!-- END REF -->


Contains <!-- REF #WebServerClass.keepSession.Summary -->`True` if legacy sessions are enabled in the web server, `False` otherwise<!-- END REF -->.

##### See also

[.scalableSession](#scalablesession)

<!-- END REF -->

<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording

<!-- REF #WebServerClass.logRecording.Syntax -->**.logRecording** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.logRecording.Summary -->log requests (logweb.txt) recording value<!-- END REF -->.

- 0 = Do not record (default)
- 1 = Record in CLF format
- 2 = Record in DLF format
- 3 = Record in ELF format
- 4 = Record in WLF format

<!-- END REF -->

<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses

<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->**.maxConcurrentProcesses** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->maximum number of concurrent web processes supported by the web server<!-- END REF -->. When this number (minus one) is reached, 4D will not create any other processes and returns the HTTP status 503 - Service Unavailable to all new requests.

Possible values: 10 - 32000

Default = 100

<!-- END REF -->

<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<!-- REF #WebServerClass.maxRequestSize.Syntax -->**.maxRequestSize** : Integer<!-- END REF -->


Contains the <!-- REF #WebServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passing the maximum value (2147483647) means that, in practice, no limit is set. This limit is used to avoid web server saturation due to incoming requests that are too large. If a request reaches this limit, the web server rejects it.

Possible values: 500000 - 2147483647

<!-- END REF -->

<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->**.maxSessions** : Integer<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

Contains the <!-- REF #WebServerClass.maxSessions.Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)

<!-- END REF -->

<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->**.minTLSVersion** : Integer<!-- END REF -->


The <!-- REF #WebServerClass.minTLSVersion.Summary -->minimum TLS version accepted for connections<!-- END REF -->. Connection attempts from clients supporting only versions below the minimum will be rejected.

Possible values:

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (default)
- 4 = TLSv1_3

If modified, the server must be restarted to use the new value.

<!-- END REF -->

<!-- REF WebServerClass.name.Desc -->

## .name

<!-- REF #WebServerClass.name.Syntax -->**.name** : Text<!-- END REF -->


*Read-only property*

The <!-- REF #WebServerClass.name.Summary -->name of the web server application<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->**.openSSLVersion** : Text<!-- END REF -->


*Read-only property*

The <!-- REF #WebServerClass.openSSLVersion.Summary -->version of the OpenSSL library used<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*Read-only property*

The <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->PFS availability on the server<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.rootFolder.Desc -->
## .rootFolder

<!-- REF #WebServerClass.rootFolder.Syntax -->**.rootFolder** : Text<!-- END REF -->


The <!-- REF #WebServerClass.rootFolder.Summary -->path of web server root folder<!-- END REF -->. The path is formatted in POSIX full path using filesystems. When using this property in the `settings` parameter, it can be a `Folder` object.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->

## .scalableSession

<!-- REF #WebServerClass.scalableSession.Syntax -->**.scalableSession** : Boolean<!-- END REF -->


Contains <!-- REF #WebServerClass.scalableSession.Summary -->`True` if scalable sessions are used in the web server, and `False` otherwise<!-- END REF -->.

##### See also

[.keepSession](#keepsession)

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->**.sessionCookieDomain** : Text<!-- END REF -->


The <!-- REF #WebServerClass.sessionCookieDomain.Summary -->"domain" field of the session cookie<!-- END REF -->. Used to control the scope of the session cookies. If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<!-- REF #WebServerClass.sessionCookieName.Syntax -->**.sessionCookieName** : Text<!-- END REF -->


The <!-- REF #WebServerClass.sessionCookieName.Summary -->name of the cookie used for storing the session ID<!-- END REF -->.

*Read-only property*

<!-- END REF -->

<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath

<!-- REF #WebServerClass.sessionCookiePath.Syntax -->**.sessionCookiePath** : Text<!-- END REF -->


The <!-- REF #WebServerClass.sessionCookiePath.Summary -->"path" field of the session cookie<!-- END REF -->. Used to control the scope of the session cookies. If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Added|

</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->**.sessionCookieSameSite** : Text<!-- END REF -->


The <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->"SameSite" session cookie value<!-- END REF -->. Possible values (using constants):

|Constant|Value|Description|
|---|---|---|
|Web SameSite Strict|"Strict"|*Default value* - Cookies are only sent in a first-party context|
|Web SameSite Lax|"Lax"|Cookies are also sent on cross-site subrequests but only when a user is navigating to the origin site (i.e. when following a link).|
|Web SameSite None|"None"|Cookies are sent in all contexts, i.e in responses to both first-party and cross-origin requests.

See the [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) description for detailed information.

<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> This property is not used in [scalable sessions mode](#scalablesession) (there is no IP address validation).


The <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->IP address validation for session cookies<!-- END REF -->. For security reasons, by default the web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. For example when mobile devices switch between WiFi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change (this setting lowers the security level of your application).

<!-- END REF -->

<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R3|Added
</details>

<!-- REF #WebServerClass.start().Syntax -->**.start**() : Object<br/>**.start**( *settings* : Object ) : Object<!-- END REF -->


<!-- REF #WebServerClass.start().Params -->

|Parameter|Type||Description|
|---|---|----|---|
|settings|Object|->|Web server settings to set at startup|  
|Result|Object|<-|Status of the web server startup|

<!-- END REF -->

The `.start()` function <!-- REF #WebServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional *settings* object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

Customized session settings will be reset when the [`.stop()`](#stop) function is called.

#### Returned object

The function returns an object describing the Web server launch status. This object can contain the following properties:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the web server was correctly started, False otherwise
|errors ||Collection|4D error stack (not returned if the web server started successfully)|
||\[].errCode|Number| 4D error code|
||\[].message|Text|Description of the 4D error |
||\[].componentSignature|Text|Signature of the internal component which returned the error|

>If the Web server was already launched, an error is returned.

#### Example

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

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R3|Added
</details>

<!-- REF #WebServerClass.stop().Syntax -->**.stop()**<!-- END REF -->


<!-- REF #WebServerClass.stop().Params -->
|Parameter|Type||Description|
|---|---|----|---|
||||Does not require any parameters|
<!-- END REF -->

The `.stop()` function <!-- REF #WebServerClass.stop().Summary -->stops the web server on which it is applied<!-- END REF -->.

If the web server was started, all web connections and web processes are closed, once the currently handled requests are finished. If the web server was not started, the method does nothing.

>This function resets the customized web settings defined for the session using the *settings* parameter of the [`.start()`](#start) function, if any.

#### Example

To stop the database Web server:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->
