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
|[**.accessKeyDefined** : Boolean](#accesskeydefined)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if an access key is defined in the settings of the web server|
|[**.certificateFolder** : Text](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;folder where the certificate files are located|
|[**.characterSet** : Number<br>**.characterSet** : Text](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;character set that the 4D Web Server should use to communicate with browsers connecting to the application|
|[**.cipherSuite** : Text](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;cipher list used for the secure protocol|
|[**.CORSEnabled** : Boolean](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;CORS (*Cross-origin resource sharing*) service status for the web server|
|[**.CORSSettings** : Collection](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;list of allowed hosts and methods for the CORS service |
|[**.debugLog** : Number](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;status of the HTTP request log file|
|[**.defaultHomepage** : Text](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;name of the default home page|
|[**.HSTSEnabled** : Boolean](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTP Strict Transport Security (HSTS) status |
|[**.HSTSMaxAge** : Number](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;maximum length of time (in seconds) that HSTS is active for each new client connection|
|[**.HTTPCompressionLevel** : Number](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies)|
|[**.HTTPCompressionThreshold** : Number](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;size threshold (bytes) for requests below which exchanges should not be compressed|
|[**.HTTPEnabled** : Boolean](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTP protocol state|
|[**.HTTPPort** : Number](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;listening IP port number for HTTP|
|[**.HTTPTrace** : Boolean](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;activation of `HTTP TRACE`|
|[**.HTTPSEnabled** : Boolean](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTPS protocol state|
|[**.HTTPSPort** : Number](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;listening IP port number for HTTPS|
|[**.inactiveProcessTimeout** : Number](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;life duration (in minutes) of the inactive legacy session processes|
|[**.inactiveSessionTimeout** : Number](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;life duration (in minutes) of inactive legacy sessions (duration set in cookie)|
|[**.IPAddressToListen** : Text](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;IP address on which the 4D Web Server will receive HTTP requests|
|[**.isRunning** : Boolean](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;web server running state|
|[**.keepSession** : Boolean](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;True if legacy sessions are enabled in the web server, False otherwise|
|[**.logRecording** : Number](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;log requests (logweb.txt) recording value|
|[**.maxConcurrentProcesses** : Number](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;maximum number of concurrent web processes supported by the web server|
|[**.maxRequestSize** : Number](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process|
|[**.maxSessions** : Number](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;maximum number of simultaneous legacy sessions|
|[**.minTLSVersion** : Number](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;minimum TLS version accepted for connections|
|[**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;name of the web server application|
|[**.openSSLVersion** : Text](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;version of the OpenSSL library used|
|[**.perfectForwardSecrecy** : Boolean](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;PFS availability on the server|
|[**.rootFolder** : Text](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;path of web server root folder|
|[**.scalableSession** : Boolean](#scalableSession)<p>&nbsp;&nbsp;&nbsp;&nbsp;True if scalable sessions are used in the web server, and False otherwise|
[**.sessionCookieDomain** : Text](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;"domain" field of the session cookie|
|[**.sessionCookieName** : Text](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;name of the cookie used for storing the session ID|
|[**.sessionCookiePath** : Text](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;"path" field of the session cookie|
|[**.sessionCookieSameSite** : Text](#sessionCookieSameSite)<p>&nbsp;&nbsp;&nbsp;&nbsp;"SameSite" session cookie value|
|[**.sessionIPAddressValidation** : Boolean](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;IP address validation for session cookies|
|[
**.start**() : Object<br>**.start**( *settings* : Object ) : Object](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;starts the web server on which it is applied|
|[**.stop()** ](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;stops the web server on which it is applied|



## WEB Server

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|
|v19|support for .sessionCookieSameSite|

</details>

**WEB Server** : 4D.WebServer<br>**WEB Server**( *option* : Integer ) : 4D.WebServer


|Parameter|Type||Description|
|---|---|----|---|
|option|Integer|->|Web server to get (default if omitted = `Web server database`)|  
|Result|4D.WebServer|<-|Web server object|


The `WEB Server` command returns the default Web server object, or the Web server object defined through the *option* parameter.

By default, if the *option* parameter is omitted, the command returns a reference to the Web server of the database, i.e. the default Web server. To designate the Web server to return, you can pass one of the following constants in the *option* parameter:

|Constant|Value|Comment|
|---|---|---|
|`Web server database`|1|Current database Web server (default if omitted)|
|`Web server host database`|2|Web server of the host database of a component|
|`Web server receiving request`|3|Web server that received the request (target Web server)|

The returned Web server object contains the current values of the Web server properties.

#### Example  

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
|Version|Changes|
|---|---|
|v18 R3|Added
</details>

**WEB Server list** : Collection


|Parameter|Type||Description|
|---|---|----|---|
|Result|Collection|<-|Collection of the available Web server objects|


The `WEB Server list` command returns a collection of all Web server objects available in the 4D application.

A 4D application can contain anywhere from one to several Web servers:

- one Web server for the host database (default Web server)
- one Web server for each component.

All available Web servers are returned by the `WEB Server list` command, whether they are actually running or not.

> The default Web server object is automatically loaded by 4D at startup. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](#web-server) command.

You can use the [.name](#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.


#### Example  

We want to know how many running web servers are available:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")

```




## .accessKeyDefined


**.accessKeyDefined** : Boolean

The **.accessKeyDefined** property contains true if an access key is defined in the settings of the web server. This property is used by the WebAdmin web server to validate the security configuration of the administration interface.



## .certificateFolder



**.certificateFolder** : Text

Path of the folder where the certificate files are located. The path is formatted in POSIX full path using filesystems. When using this property in the `settings` parameter of the [`.start()`](#start) function, it can be a [`Folder` object](FolderClass.md).




## .characterSet


**.characterSet** : Number<br>**.characterSet** : Text

The character set that the 4D Web Server should use to communicate with browsers connecting to the application. The default value actually depends on the language of the OS. Can be a MIBEnum integer or a Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Here is the list of identifiers corresponding to the character sets supported by the 4D Web Server:

*	4 = ISO-8859-1
*	12 = ISO-8859-9
*	13 = ISO-8859-10
*	17 = Shift-JIS
*	2024 = Windows-31J
*	2026 = Big5
*	38 = euc-kr
*	106 = UTF-8
*	2250 = Windows-1250
*	2251 = Windows-1251
*	2253 = Windows-1253
*	2255 = Windows-1255
*	2256 = Windows-1256




## .cipherSuite


**.cipherSuite** : Text

The cipher list used for the secure protocol. Sets the priority of ciphering algorithms implemented by the 4D web server. Can be a sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.





## .CORSEnabled

**.CORSEnabled** : Boolean

The CORS (*Cross-origin resource sharing*) service status for the web server. For security reasons, "cross-domain" requests are forbidden at the browser level by default. When enabled (True), XHR calls (e.g. REST requests) from Web pages outside the domain can be allowed in your application (you need to define the list of allowed addresses in the CORS domain list, see `CORSSettings` below). When disabled (False, default), all cross site requests sent with CORS are ignored. When enabled (True) and a non-allowed domain or method sends a cross site request, it is rejected with a "403 - forbidden" error response.

Default: False (disabled)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.




## .CORSSettings


**.CORSSettings** : Collection

A list of allowed hosts and methods for the CORS service (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:

*	**host** (text, mandatory): Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Multiple domain attributes can be added to create a white list. If *host* is not present or empty, the object is ignored. Several syntaxes are supported:
	-	192.168.5.17:8081
	-	192.168.5.17
	-	192.168.*
	-	192.168.*:8081
	-	http://192.168.5.17:8081
	-	http://*.myDomain.com
	-	http://myProject.myDomain.com
	-	*.myDomain.com
	-	myProject.myDomain.com
	- 	\*

*	**methods** (text, optional): Accepted HTTP method(s) for the corresponding CORS host. Separate each method with a ";" (e,g,: "post;get"). If *methods* is empty, null, or undefined, all methods are enabled.




## .debugLog


**.debugLog** : Number

The status of the HTTP request log file (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number).

*	0 = disabled
*	1 = enabled without body parts (body size is provided in this case)
*	3 = enabled with body parts in response only
*	5 = enabled with body parts in request only
*	7 = enabled with body parts in response and request




## .defaultHomepage


**.defaultHomepage** : Text

The name of the default home page or "" to not send the custom home page.




## .HSTSEnabled

**.HSTSEnabled** : Boolean

The HTTP Strict Transport Security (HSTS) status. HSTS allows the Web server to declare that browsers should only interact with it via secure HTTPS connections. Browsers will record the HSTS information the first time they receive a response from the web server, then any future HTTP requests will automatically be transformed into HTTPS requests. The length of time this information is stored by the browser is specified with the `HSTSMaxAge` property. HSTS requires that HTTPS is enabled on the server. HTTP must also be enabled to allow initial client connections.




## .HSTSMaxAge

**.HSTSMaxAge** : Number

The maximum length of time (in seconds) that HSTS is active for each new client connection. This information is stored on the client side for the specified duration.

Default value: 63072000 (2 years).




## .HTTPCompressionLevel

**.HTTPCompressionLevel** : Number

The compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies). This selector lets you optimize exchanges by either prioritizing speed of execution (less compression) or the amount of compression (less speed).

Possible values:

*	1 to 9 (where 1 is the fastest compression and 9 the highest).
*	-1 = set a compromise between speed and rate of compression.

Default = 1 (faster compression).




## .HTTPCompressionThreshold

**.HTTPCompressionThreshold** : Number

The size threshold (bytes) for requests below which exchanges should not be compressed. This setting is useful in order to avoid losing machine time by compressing small exchanges.

Default compression threshold = 1024 bytes




## .HTTPEnabled


**.HTTPEnabled** : Boolean

The HTTP protocol state.





## .HTTPPort


**.HTTPPort** : Number

The listening IP port number for HTTP.

Default = 80




## .HTTPTrace

**.HTTPTrace** : Boolean

The activation of `HTTP TRACE`. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.




## .HTTPSEnabled


**.HTTPSEnabled** : Boolean
The HTTPS protocol state.




## .HTTPSPort


**.HTTPSPort** : Number
The listening IP port number for HTTPS.

Default = 443




## .inactiveProcessTimeout

**.inactiveProcessTimeout** : Number
> This property is not returned in [scalable sessions mode](#scalablesession).

The life duration (in minutes) of the inactive legacy session processes. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Default = 480 minutes




## .inactiveSessionTimeout

**.inactiveSessionTimeout** : Number
> This property is not returned in [scalable sessions mode](#scalablesession).

The life duration (in minutes) of inactive legacy sessions (duration set in cookie). At the end of this period, the session cookie expires and is no longer sent by the HTTP client.

Default = 480 minutes




## .IPAddressToListen


**.IPAddressToListen** : Text

The IP address on which the 4D Web Server will receive HTTP requests. By default, no specific address is defined. Both IPv6 string formats and IPv4 string formats are supported.





## .isRunning


**.isRunning** : Boolean

*Read-only property*

The web server running state.




## .keepSession

**.keepSession** : Boolean

True if legacy sessions are enabled in the web server, False otherwise.

##### See also:
[.scalableSession](#scalablesession)




## .logRecording


**.logRecording** : Number

The log requests (logweb.txt) recording value.

*	0 = Do not record (default)
*	1 = Record in CLF format
*	2 = Record in DLF format
*	3 = Record in ELF format
*	4 = Record in WLF format




## .maxConcurrentProcesses


**.maxConcurrentProcesses** : Number

The maximum number of concurrent web processes supported by the web server. When this number (minus one) is reached, 4D will not create any other processes and returns the HTTP status 503 - Service Unavailable to all new requests.

Possible values: 10 - 32000

Default = 100




## .maxRequestSize


**.maxRequestSize** : Number

The maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process. Passing the maximum value (2147483648) means that, in practice, no limit is set. This limit is used to avoid web server saturation due to incoming requests that are too large. If a request reaches this limit, the web server rejects it.

Possible values: 500000 - 2147483648




## .maxSessions

**.maxSessions** : Number
> This property is not returned in [scalable sessions mode](#scalablesession).

The maximum number of simultaneous legacy sessions. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)




## .minTLSVersion

**.minTLSVersion** : Number

The minimum TLS version accepted for connections. Connection attempts from clients supporting only versions below the minimum will be rejected.

Possible values:

*	1 = TLSv1_0
*	2 = TLSv1_1
*	3 = TLSv1_2 (default)
*	4 = TLSv1_3

If modified, the server must be restarted to use the new value.




## .name


**.name** : Text

*Read-only property*

The name of the web server application.





## .openSSLVersion

**.openSSLVersion** : Text

*Read-only property*

The version of the OpenSSL library used.




## .perfectForwardSecrecy


**.perfectForwardSecrecy** : Boolean

*Read-only property*

The PFS availability on the server.



## .rootFolder


**.rootFolder** : Text

The path of web server root folder. The path is formatted in POSIX full path using filesystems. When using this property in the `settings` parameter, it can be a `Folder` object.


## .scalableSession


**.scalableSession** : Boolean

True if scalable sessions are used in the web server, and False otherwise.

##### See also:
[.keepSession](#keepsession)


## .sessionCookieDomain


**.sessionCookieDomain** : Text

The "domain" field of the session cookie. Used to control the scope of the session cookies. If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.




## .sessionCookieName


**.sessionCookieName** : Text

The name of the cookie used for storing the session ID.

*Read-only property*




## .sessionCookiePath


**.sessionCookiePath** : Text

The "path" field of the session cookie. Used to control the scope of the session cookies. If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.



## .sessionCookieSameSite

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19|Added|
</details>

**.sessionCookieSameSite** : Text

The "SameSite" session cookie value. Possible values (using constants):

|Constant|Value|Description|
|---|---|---|
|Web SameSite Strict|"Strict"|*Default value* - Cookies are only sent in a first-party context|
|Web SameSite Lax|"Lax"|Cookies are also sent on cross-site subrequests but only when a user is navigating to the origin site (i.e. when following a link).|
|Web SameSite None|"None"|Cookies are sent in all contexts, i.e in responses to both first-party and cross-origin requests. 

See the [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) description for detailed information.




## .sessionIPAddressValidation


**.sessionIPAddressValidation** : Boolean

The IP address validation for session cookies. For security reasons, by default the web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. For example when mobile devices switch between WiFi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change (this setting lowers the security level of your application).




## .start()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added
</details>


**.start**() : Object<br>**.start**( *settings* : Object ) : Object



|Parameter|Type||Description|
|---|---|----|---|
|settings|Object|->|Web server settings to set at startup|  
|Result|Object|<-|Status of the web server startup|


The `.start()` function starts the web server on which it is applied, using properties set in the optional *settings* object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

Customized session settings will be reset when the [`.stop()`](#stop) function is called.


#### Returned object

The function returns an object describing the Web server launch status. This object can contain the following properties:

|Property||	Type|	Description|
|---|---|---|---|
|success||Boolean|True if the web server was correctly started, False otherwise
|errors ||Collection|4D error stack (not returned if the web server started successfully)|
||\[].errCode|Number|	4D error code|
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




## .stop()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added
</details>

**.stop()** 

|Parameter|Type||Description|
|---|---|----|---|
||||Does not require any parameters|

 
The `.stop()` function stops the web server on which it is applied.

If the web server was started, all web connections and web processes are closed, once the currently handled requests are finished. If the web server was not started, the method does nothing.

>This function resets the customized web settings defined for the session using the *settings* parameter of the [`.start()`](#start) function, if any.


#### Example

To stop the database Web server:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```





<style> h2 { background: #d9ebff;}</style>
