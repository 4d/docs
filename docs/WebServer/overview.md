---
id: webServerOverview
title: Web Server object
---

## Overview

A 4D application can start and monitor a web server for the main (host) database, and also a web server for each hosted component.

It means that, if you installed for example two components in your host database, you will be able to start and monitor up to 3 independant web servers from your application:

- one web server for the host database,
- one web server for the component #1,
- one web server for the component #2.

There is no other limit than memory to the number of components and thus, of web servers, that can be attached to a single 4D database. 

Each 4D web server, including the web server of the main database, is exposed as a specific **object**. Once instantiated, a web server object can be handled from the current database or any component. 

> The WEB commands of the 4D language are supported but can only apply to the main web server, or to the web servers of the remote application (with 4D Server). 

This feature allows you to develop independant components and features that come with their own web interface. 


## Instantiating a Web Server object

The Web server object of the host database (default Web server) is automatically loaded by 4D at startup. Thus, if you write in a fresh new database:

```4d
$nbSrv:=WEB Server list.length //$nbSrv=1
```

To instantiate a web server object, call the `WEB Server` command:

```4d
C_OBJECT(webServer)
	//call the web server from the current context
webServer:=WEB Server  
	//equivalent to
webServer:=WEB Server(Web server database)
```

If the database uses components and you want to call either the web server of the host database from a component, or the server that received the request (whatever the server), you can use also:

```4d
C_OBJECT(webServer)  
	//call the host web server from a component  
webServer:=WEB Server(Web server host database)  
	//call the target web server
webServer:=WEB Server(Web server receiving request)  
```


## Web Server methods

A web server object contains the following member methods: 

|Method|Parameter|Return value|Description|
|---|---|---|---|
|`start()`|settings (object)|webServer (object)|Starts the web server|
|`stop()`|-|-|Stops the web server|

To start and stop a web server, just call the `start()` and `stop()` member methods of the web server object:

```4d
	//to start the web server with default settings
webServer.start()
	//to start the web server with custom settings  
	//$settings object contains web server properties
webServer.start($settings)

	//to stop the web server
webServer.stop()
``` 


## Web Server properties

A web server object contains the following properties. 

|Property|Type|Description|Possible values|
|---|---|---|---|
|certificateFolder|text|Folder where the certificate files are located|-|
|characterSet|number|Character set that the 4D Web Server should use to communicate with browsers connecting to the database. The default value actually depends on the language of the OS.|  MIBEnum longint or Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets) supported by the 4D Web server: <li>4 = ISO-8859-1</li><li>12 = ISO-8859-9</li><li>13 = ISO-8859-10</li><li>17 = Shift-JIS</li><li>2024 = Windows-31J</li><li>2026 = Big5</li><li>38 = euc-kr</li><li>106 = UTF-8</li><li>2250 = Windows-1250</li><li>2251 = Windows-1251</li><li>2253 = Windows-1253</li><li>2255 = Windows-1255</li><li>2256 = Windows-1256|
|cipherSuite|text|Cipher list used for the secure protocol. Sets the priority of ciphering algorithms implemented by the web server.|Sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.|
|clientIPAddressToListen|text|IP address to listen on 4D remote web server or * for Any|IP address string. Both IPv6 string formats and IPv4 string formats are supported.|
|debugLog|number|Status of the HTTP request log file (HTTPDebugLog.txt). When enabled, this file, named "HTTPDebugLog_nn.txt", is stored in the "Logs" folder of the application (nn is the file number). |<li>0 = disabled</li><li>1 = enabled without body parts (body size is provided in this case)</li><li>3 = enabled with body part in response only</li><li>5 = enabled with body part in request only</li><li>7 = enabled with body parts in response and request</li>|
|defaultHomepage|text|Default homepage|Pathname of the home page or "" to not send the custom home page|
|HSTSEnabled|boolean|HTTP Strict Transport Security (HSTS) status. HSTS allows the Web server to declare that browsers should only interact with it via secure HTTPS connections. Browsers will record the HSTS information the first time they receive a response from the Web server, then any future HTTP requests will automatically be transformed into HTTPS requests. The length of time this information is stored by the browser is specified with the `HSTSMaxAge` property. HSTS requires that HTTPS is enabled on the server. HTTP must also be enabled to allow client initial connections.|true/false|
|HSTSMaxAge|number|Maximum length of time that HSTS is active for each new client connection. This information is stored on the client side for the specified duration|Seconds. Default value: 63072000 (2 years)|
|HTTPCompressionLevel|number|Compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies). This selector lets you optimize exchanges by either privileging speed of execution (less compression) or the amount of compression (less speed).|1 to 9 where 1 is the fastest compression and 9 the highest. -1 = set a compromise between speed and rate of compression. Default = 1 (faster compression).|
|HTTPCompressionThreshold|number|Size threshold for requests below which exchanges should not be compressed. This setting is useful in order to avoid losing machine time by compressing small exchanges.|Any Longint type value. Pass the size expressed in bytes in vaue. By default, the compression threshold is set to 1024 bytes|
|HTTPEnabled|boolean|HTTP protocol state|true/false|
|HTTPPort|number|Listening IP port number for HTTP|Default = 80|x|
|HTTPTrace|boolean|HTTP TRACE activation. For security reasons, by default the Web server rejects HTTP TRACE requests with an error 405. When enabled, the Web server replies to HTTP TRACE requests with the request line, header, and body.|true/false (default)|
|HTTPSEnabled|boolean|HTTPS protocol state|true/false|
|HTTPSPort|number|Listening IP port number for HTTPS|Default = 443|
|inactiveProcessTimeout|number|Life duration of the inactive session processes. At the end of the timeout, the process is killed on the server, the `On Web Close Process` database method is called, then the session context is destroyed.|Minutes, default = 480|
|inactiveSessionTimeout|number|Life duration of inactive sessions (duration set in cookie). At the end of this period, the session cookie expires and is no longer sent by the HTTP client.|Minutes, default = 480|
|IPAddressToListen|text|IP address on which the 4D Web server will receive HTTP requests|IP address string. Both IPv6 string formats and IPv4 string formats are supported.|
|isRunning|boolean|Web server running state|true/false|
|keepSession|boolean|Session management enabling status.|true (default)/false|
|logRecording|number|Log requests (logweb.txt) recording value|<li>0 = Do not record (default)</li><li>1 = Record in CLF format</li><li>2 = Record in DLF format</li><li>3 = Record in ELF format</li><li>4 = Record in WLF format</li>|
|maxConcurrentProcesses|number|Maximum number of concurrent Web processes supported by the Web Server. When this number (minus one) is reached, 4D will not create any other processes and returns the HTTP status 503 - Service Unavailable to all new requests.|Any value between 10 and 32 000. Default = 100.|
|maxRequestSize|number|Maximum size (in bytes) of incoming HTTP requests (POST) that the Web server is allowed to process. Passing the maximum value (2 147 483 648) means that, in practice, no limit is set. This limit is used to avoid Web server saturation due to incoming requests that are too large. If a request reaches this limit, the Web server rejects it.|500 000 to 2 147 483 648|
|maxSessions|number|Maximum number of simultaneous sessions. When you reach the limit, the oldest session is closed (and `On Web Close Process` database method is called) if the Web server needs to create a new one|Number of simultaneous sessions cannot exceed the total number of Web processes (`maxConcurrentProcesses` property, 100 by default)|
|minTLSVersion|number|Minimum TLS version accepted for connections. Connection attempts from clients supporting only versions below the minimum will be rejected. Once modified, the server must be restarted to use the new value.|<li>1 = TLS 1.0</li><li>2 = TLS 1.1</li><li>3 = TLS 1.2</li>|
|name|text|Name of the web server database|-|
|openSSLVersion|text|Version of the used OpenSSL library|-|
|perfectForwardSecrecy|boolean|PFS availability on the server|true/false|
|rootFolder|text|Pathname of Web server root folder|Posix or system syntax|
|sessionCookieDomain|text|"domain" field of the session cookie. Used to control the scope of the session cookies. If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.|text|
|sessionCookieName|text|Name of the cookie used for storing the session ID|Default = "4DSID"|
|sessionCookiePath|text|"path" field of the session cookie. Used to control the scope of the session cookies. If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.|text|
|sessionIPAddressValidation|boolean|IP address validation for session cookies. For security reasons, by default the Web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. For example when mobile devices switch between Wifi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their Web sessions even when the IP addresses change. Note that this setting lowers the security level of your application|true (default)/false|


## Scope of the 4D Web commands

The 4D Language contains several commands that can be used to control the Web server. However, these commands are designed to work with a single (default) Web server. When using these commands in the context of Web server objects, make sure their scope is appropriate. 

|Command|Scope|
|---|---|
|`SET DATABASE PARAMETER`|Host database web server|
|`WEB CLOSE SESSION`|Web server that received the request|
|`WEB GET BODY PART`|Web server that received the request|
|`WEB Get body part count`|Web server that received the request|
|`WEB Get Current Session ID`|Web server that received the request|
|`WEB GET HTTP BODY`|Web server that received the request|
|`WEB GET HTTP HEADER`|Web server that received the request|
|`WEB GET OPTION`|Host database web server|
|`WEB Get server info`|Host database web server|
|`WEB GET SESSION EXPIRATION`|Web server that received the request|
|`WEB Get session process count`|Web server that received the request|
|`WEB GET STATISTICS`|Host database web server|
|`WEB GET VARIABLES`|Web server that received the request|
|`WEB Is secured connection`|Web server that received the request|
|`WEB Is server running`|Host database web server|
|`WEB SEND BLOB`|Web server that received the request|
|`WEB SEND FILE`|Web server that received the request|
|`WEB SEND HTTP REDIRECT`|Web server that received the request|
|`WEB SEND RAW DATA`|Web server that received the request|
|`WEB SEND TEXT`|Web server that received the request|
|`WEB SET HOME PAGE`|Host database web server|
|`WEB SET HTTP HEADER`|Web server that received the request|
|`WEB SET OPTION`|Host database web server|
|`WEB SET ROOT FOLDER`|Host database web server|
|`WEB START SERVER`|Host database web server|
|`WEB STOP SERVER`|Host database web server|
|`WEB Validate digest`|Web server that received the request|
