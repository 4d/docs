---
id: webServerClass
title: Web Server
---

The `Web Server` class in the 4D language manages the settings of the 4D Web Server.

The settings can be defined with [WEB Server](#web-server) command.

## Example



## Summary


||
|---|
|[<!-- INCLUDE #webServerClass.start().Syntax -->](#average-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.start().Summary -->|
|[<!-- INCLUDE #webServerClass.clear().Syntax -->](#clear-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.clear().Summary --> |


---

<!-- REF webServerClass.WEB Server.Desc -->
## WEB Server 

Number: 1674

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|
</details>

<!-- REF #webServerClass.WEB Server.Syntax -->
**WEB Server**{ ( *option* ) } -> object<!-- END REF -->

<!-- REF #webServerClass.WEB Server.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|option|longint|->|Web server to get (default if omitted = database Web server)|
|Result|object|<-|Web server object|
<!-- END REF -->


#### Description
The `WEB Server` command <!-- REF #webServerClass.WEB Server.Summary -->returns the database Web server object<!-- END REF -->, or the Web server object defined through the *option* parameter. 

By default, if the *option* parameter is omitted, the command returns a reference to the web server of the database, i.e. the default web server. To designate the web server to return, you can pass one of the following constants from the **Web Server** theme in the option parameter:

|Constant|	Value|	Comment|
|---|---|---|
|Web server database|1|Current database Web server (default if omitted)|
|Web server host database|2	|Web server of the host database of a component|
|Web server receiving request|3|Web server that received the request (target Web server)|


**Returned object**

The returned *Web server* object contains the following read-only properties and methods:

|Property|Type |Description| 
|---|---|---|
|certificateFolder|	Text|	Folder where the certificate files are saved. POSIX full path format using filesystems. Can be passed as a [Folder](API/folderClass.md) object in the settings parameter.|
|characterSet|	Number	|Character set number|
|cipherSuite|	Text|	Cipher list used for the secure protocol|
|debugLog|	Number|	Debug log selector value|
|defaultHomepage|	Text |	Default homepage|
|HSTSEnabled|	Boolean|	HSTS protocol state|
|HSTSMaxAge|	Number|	HSTS life duration|
|HTTPCompressionLevel|	Number|	HTTP compression level|
|HTTPCompressionThreshold|	Number|	HTTP compression threshold|
|HTTPEnabled|	Boolean	|HTTP protocol state|
|HTTPPort|	Number	|Listening IP port for HTTP|
|HTTPTrace|	Boolean|	HTTP TRACE activation|
|HTTPSEnabled|	Boolean	|HTTPS protocol state|
|HTTPSPort|	Number|	Listening IP port for HTTPS|
|inactiveSessionTimeout|	Number|	Life duration of the inactive session processes|
|inactiveProcessTimeout|	Number	|Life duration of the inactive sessions|
|IPAddressToListen	|Text	|IP address to listen or "0.0.0.0" for Any|
|isRunning|	Boolean|	Web server running state - Cannot be set with the settings object|
|keepSession|	Boolean|	Keep session|
|logRecording	|Number	|Log recording value|
|maxConcurrentProcesses|	Number	|Maximum number of concurrent web processes|
|maxRequestSize|	Number|	Max request size|
|maxSessions	|Number	|Max sessions|
|minTLSVersion	|Number|	Minimum TLS version accepted for connections|
|name	|Text|	Name of the web server database - Cannot be set with the settings object|
|openSSLVersion	|Text|	Version of the used OpenSSL library - Cannot be set with the settings object|
|perfectForwardSecrecy	|Boolean|	PFS availability on the server - Cannot be set with the settings object|
|rootFolder|	Text	|Root folder path. POSIX full path format using filesystems. Can be passed as a Bool object in the settings parameter|
|sessionCookieDomain|	Text|	Session cookie domain|
|sessionCookieName	|Text|	Session cookie name|
|sessionCookiePath	|Text|	Session cookie path|
|sessionIPAddressValidation	|Boolean|	Session IP address validation|

These properties are defined in the database settings of the host database or the component. For the host database, they can be overriden using the `WEB SET OPTION` command. 

>These properties can also be modified using the settings parameter of the `.start( )` function (except those tagged *Cannot be set with the settings object*). Once the web server has started, values modified by the settings parameter are updated accordingly in the object returned by `WEB Server`. These values are used only during the subsequent web server session (they are reset when the `.stop( )` function is called). 


|Method	|Description|
|---|---|
|[.start( )](#start-)|Starts the web server|
|[.stop( )](#stop-)|Stops the web server|

#### Example

From your component, you want to know if the web server of the host database is started:

```4d
  // Method of a component
 C_OBJECT($hostWS)
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

<!-- END REF -->

---

<!-- REF webServerClass.start().Desc -->
## .start( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|
</details>

<!-- REF #webServerClass.start().Syntax -->
**.start**{ ( *settings* ) } -> object<!-- END REF -->

<!-- REF #webServerClass.start().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|settings|object|->|Web server settings to set at startup|
|Result|object|<-|Status of the Web server startup|
<!-- END REF -->


#### Description
The `.start( )` function <!-- REF #webServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional settings object parameter. 

The web server starts with default settings defined in the settings file of the database or (host database only) using the `WEB SET OPTION` command. However, using the settings parameter, you can define customized settings for the Web server session. Customized session settings will be reset when the `.stop( )` function is called. You can set all properties described in the ****Returned object**** of the `WEB Server` command, except those tagged 'Cannot be set in the settings object'. 

**Returned object** 

The method returns an object describing the web server launch status. This object can contain the following properties:


|Property||Type|Description|
|---|---|---|---|
|success||boolean|True if the check is successful, False otherwise|
|errors	||collection|4D error stack (not returned if the web server started successfully)|
||\[ ].errCode|number|4D error code|
||\[ ].message|text|Description of the 4D error|
||\[ ].componentSignature|text|Signature of the internal component which returned the error|

>If the web server was already launched, an error is returned. 

#### Example

```4d
 C_OBJECT($settings;$webServer;$result)
 $settings:=New object("HTTPPort";8080;"defaultHomepage";"myAdminHomepage.html")
 
 $webServer:=WEB Server
 $result:=$webServer.start($settings)
 If($result.success)
  //...
 End if
``` 


<!-- END REF -->

