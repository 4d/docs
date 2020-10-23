---
id: webServerConfig
title: Configuration
---

The 4D web server settings include security parameters, listening ports, defaults paths, and various options covering all the server features. 4D provides default values for every settings.


## How to configure settings?

There are different ways to configure the 4D web server settings, depending on the scope and the server you want to set:

- using **Web** pages of the Settings dialog box: settings for the main web server. They are stored on disk and thus reused after application is restart. 
- using the `WEB SET OPTION` or a `WEB` command: settings for the main web server and the current session only.  
- using the properties of the [webServer object](webServerObject.md): settings for any web server, including component web servers, and the current session only. 


## Certificate folder

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`certificateFolder`|Text property but can be a [`4D.Folder`](API/folderClass.md) object when used with the settings parameter of the `start()` function.

Folder where the TLS certificate files for the web server are located. 

By default with 4D or 4D Server, these files must be placed next to the [project folder](Project/architecture.md#project-folder). 

With 4D in remote mode, these files must be located in the local resources folder of the database on the remote machine (see `4D Client Database Folder` paragraph of the `Get 4D folder` command). You must copy these files manually on the remote machine.

> TLS certificate files are *key.pem* (document containing the private encryption key) and *cert.pem* (document containing the certificate). 




## Character Set

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`characterSet`|MIBEnum integer or Name string|
|`WEB SET OPTION`|`Web character set`|MIBEnum integer or Name string|
|Settings dialog box|Options (II) page/Standard Set|Pop up menu|

Defines the set of characters to be used by the 4D web server. The default value actually depends on the language of the OS. 

>This setting is also used for generating Quick Reports in HTML format .


## Cipher list

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`cipherSuite`|Text|

Cipher list used for the secure protocol; sets the priority of ciphering algorithms implemented by the web server. Can be a sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

> The default cipher list used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server, client/server connections, as well as the HTTP client and all the 4D commands that make use of the secure protocol. 


## CORS

### Enabling CORS Service

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`CORSEnabled`|Boolean, true to enable the CORS (false by default)|
|`WEB SET OPTION`|`Web CORS enabled`|0 (disabled, default) or 1 (enabled)|
|Settings dialog box|Options (II) page/Enable CORS|Unchecked by default|

The 4D web server implements cross-origin resource sharing (CORS) to allow specific Web pages served from another domain to access the current Web application's resources via XHR calls, e.g., using REST. For security reasons, "cross-domain" requests are forbidden at the browser level by default. When enabled, XHR calls (e.g. REST requests) from Web pages outside the domain can be allowed in your application (you need to define the list of allowed addresses in the CORS domain list, see CORS Settings below). In this case, if a non-allowed domain or method sends a cross site request, it is rejected with a "403 - forbidden" error response.

When disabled (default), all cross site requests sent with CORS are ignored. 

For more information about CORS, please refer to the [Cross-origin resource sharing page](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.



### CORS Settings

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`CORSSettings`|Collection of objects (List of allowed hosts and methods for the CORS service)|
|`WEB SET OPTION`|`Web CORS settings`|Collection of objects (List of allowed hosts and methods for the CORS service)|
|Settings dialog box|Options (II) page/Domain names and HTTP methods allowed|Click on the [+] button to add an allowed domain name and its method(s)|

List of allowed hosts and methods for the CORS service. 

#### Domain names (host property)

Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Multiple domain attributes can be added to create a white list. Several syntaxes are supported:

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


#### HTTP methods allowed (methods property)

Accepted HTTP method(s) for the corresponding CORS host. The following HTTP methods are supported:

- GET
- HEAD
- POST
- PUT
- DELETE
- OPTIONS
- TRACE
- PATCH

Separate each method with a ";" (e,g,: "post;get"). If methods is empty, null, or undefined, all methods are enabled.


## Debug log

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`debugLog`|number|
|`WEB SET OPTION`|`Web debug log`|number|

Status of the HTTP request log file of the web server (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number). It is useful for debugging issues related to the Web server. It records each request and each response in raw mode. Whole requests, including headers, are logged; optionally, body parts can be logged as well. 

|Value|Constant|Description|
|---|---|---|
|0|wdl disable|Web HTTP debug log is disabled|
|1|wdl enable without body|Web HTTP debug log is enabled without body parts (body size is provided in this case)|
|3|wdl enable with response body|Web HTTP debug log is enabled with body part in response only|
|5|wdl enable with request body|Web HTTP debug log is enabled with body part in request only|
|7|wdl enable with all body parts|Web HTTP debug log is enabled with body parts in response and request|


## Defaut Home page

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`defaultHomepage`|Text|
|`WEB SET HOME PAGE`||Can be different for each web process|
|Settings dialog box|Configuration page/Default Home Page||

Designate a default home page for the web server. This page can be static or [semi-dynamic].

By default, when the web server is launched for the first time, 4D creates a home page named "index.html" and puts it in the HTML root folder. If you do not modify this configuration, any browser connecting to the web server will obtain the following page:

![](assets/en/WebServer/defaultHomePage.png)

You can designate another default home page by entering its pathname. 

- The path is relative to the [default HTML root folder].
- The path is expressed with the POSIX syntax (folders are separated by a slash ("/"))
- The path must neither start not end with a slash.

For example, if you want the default home page to be "MyHome.htm", and it is located in the "Web" folder (itself located in the default HTML root folder), use "Web/MyHome.htm".

If you do not specify any default home page, the `On Web Connection` database method is called. It is up to you to process the request procedurally.


## HSTS

### Enabling HSTS

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HSTSEnabled`|Boolean, true to enable HSTS (default is false)|
|`WEB SET OPTION`|`Web HSTS enabled`|0 (disabled, default) or 1 (enabled)|

HTTP Strict Transport Security (HSTS) status. HSTS allows the 4D web server to declare that browsers should only interact with it via secure HTTPS connections. Once activated, the 4D web server will automatically add HSTS-related information to all response headers. Browsers will record the HSTS information the first time they receive a response from the 4D web server, then any future HTTP requests will automatically be transformed into HTTPS requests. The length of time this information is stored by the browser is specified with the Web **HSTS max age** setting.

> HSTS requires that HTTPS is enabled on the server. HTTP must also be enabled to allow client initial connections.


### HSTS Max Age

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HSTSMaxAge`|number in seconds|
|`WEB SET OPTION`|`Web HSTS max age`|number in seconds|

Specifies the maximum length of time (in seconds) that HSTS is active for each new client connection. This information is stored on the client side for the specified duration.
Default value is 63072000 (2 years)

> **Warning:** Once HSTS is enabled, client connections will continue to use this mechanism for the specified duration. When you are testing your applications, it is recommended to set a short duration to be able to switch between secured and non-secured connection modes if necessary.

## HTTP

### Enable HTTP

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HTTPEnabled`|boolean|
|`WEB SET OPTION`|`Web HTTP enabled`||
|Settings dialog box|Configuration page/Enable HTTP||

Indicates whether or not the web server will accept non-secure connections. 

### HTTP Port

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HTTPPort`|number|
|`WEB SET OPTION`|`Web port ID`||
|Settings dialog box|Configuration page/HTTP Port||

Listening IP (TCP) port number for HTTP. By default, 4D publishes a web application on the regular Web HTTP Port (TCP port), which is port 80. If that port is already used by another web service, you need to change the HTTP Port used by 4D for this database. 

> In macOS, modifying the HTTP port allows you to start the 4D web server without being the root user of the machine (see [macOS HelperTool](#macos-helpertool)).

From a web browser, you need to include the non-default HTTP port number into the address you enter for connecting to the web application. The address must have a suffix consisting of a colon followed by the port number. For example, if you are using the HTTP port number 8080, you will specify "123.4.567.89:8080".

>**Warning**: If you use TCP port numbers other than the default numbers (80 for standard HTTP and 443 for HTTPS), be careful not to use port numbers that are defaults for other services that you might want to use simultaneously. For example, if you also plan to use the FTP protocol on your web server machine, do not use the TCP port 20 and 21, which are the default ports for that protocol. Ports numbers below 256 are reserved for well known services and ports numbers from 256 to 1024 are reserved for specific services originated on the UNIX platforms. For maximum security, specify a port number beyond these intervals (for example, in the 2000's or 3000's).

If you specify 0, 4D will use the default HTTP port number 80. 


## HTTP Compression

### HTTP Compression Level

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HTTPCompressionLevel`||
|`WEB SET OPTION`|`Web HTTP compression level`|Applies to Web and Web Service |

Compression level for all compressed HTTP exchanges for the 4D web server (client requests or server replies). This setting lets you optimize exchanges by either privileging speed of execution (less compression) or the amount of compression (less speed). The choice of a value depends on the size and type of data exchanged. 

Pass 1 to 9 as value where 1 is the fastest compression and 9 the highest. You can also pass -1 to get a compromise between speed and rate of compression. By default, the compression level is 1 (faster compression).

### HTTP Compression Threshold

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HTTPCompressionThreshold`||
|`WEB SET OPTION`|`Web HTTP compression threshold`||

In the framework of optimized HTTP exchanges, size threshold for requests below which exchanges should not be compressed. This setting is useful in order to avoid losing machine time by compressing small exchanges.

Pass the size expressed in bytes as value. By default, the compression threshold is set to 1024 bytes.

## HTTP Trace

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HTTPTrace`|Boolean, default = false |
|`WEB SET OPTION`|`Web HTTP TRACE`|Integer, default = 0 (disabled)|

HTTP TRACE method activation in the 4D web server. For security reasons, by default the 4D web server rejects HTTP TRACE requests with an error 405. If necessary, you can enable the HTTP TRACE method, in which case the 4D Web server replies to HTTP TRACE requests with the request line, header, and body.


## HTTPS

### Enable HTTPS 

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HTTPSEnabled`|boolean|
|`WEB SET OPTION`|`Web HTTPS enabled`||
|Settings dialog box|Configuration page/Enable HTTPS||

Status for communication over HTTPS. This option is described in the [Connection Security](webServerConnectSecurity.md#managing-secured-connections-hsts) page.

### HTTPS Port

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`HTTPSPort`|number|
|`WEB SET OPTION`|`Web HTTPS port ID`||
|Settings dialog box|Configuration page/HTTPS Port||

Listening IP port number for HTTPS connections via TLS. By default, the value is 443 (standard value). See also [HTTP Port](#http-port) for information on port numbers. 



## Inactive Process Timeout

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`inactiveProcessTimeout`||
|`WEB SET OPTION`|`Web inactive process timeout`||
|Settings dialog box|Options (I) page/Inactive Process Timeout|Slider|

Life duration (in minutes) of inactive processes associated with sessions. At the end of the timeout, the process is killed on the server, the `On Web Close Process` database method is called, then the session context is destroyed.

Default: 480 minutes (pass 0 to restore the default value)


## Inactive Session Timeout

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`inactiveSessionTimeout`||
|`WEB SET OPTION`|`Web inactive session timeout`||

Life duration (in minutes) of inactive sessions (duration set in cookie). At the end of this period, the session cookie expires and is no longer sent by the HTTP client.

Default: 480 minutes (pass 0 to restore the default value)


## IP Address to listen

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`IPAddressToListen`||
|`WEB SET OPTION`|`Web IP address to listen`||
|Settings dialog box|Configuration page/IP Address|Pop up menu|

IP address strings on which the 4D web server will receive HTTP requests (4D local and 4D Server).

By default, no specific address is defined (**Any** value in the Settings dialog box), which means that the server responds to all IP addresses. When you designate a specific address, the server only responds to requests sent to this address. This feature is designed for 4D web servers located on machines with multiple TCP/IP addresses. It is, for example, frequently the case of most host providers. 

Possible values: IP address string. Both IPv6 string formats (e.g. "2001:0db8:0000:0000:0000:ff00:0042:8329") and IPv4 string formats (e.g. "123.45.67.89") are supported.


## Keep Session

|Can be set with|Name|Comments|
|---|---|---|
|webServer object|`keepSession`||
|`WEB SET OPTION`|`Web keep session`||
|Settings dialog box|Options (I) page/Automatic Session Management||

Session management enabling status for the 4D web server. Session mechanism is described in the [Session Management](webServerSessions.md) section.

Default is true (enabled).

> When this option is checked, the "Reuse Temporary Contexts" option is automatically checked (and locked).








## Configuration Settings

You can configure the operation of the 4D Web Server using the parameters set on the **Web** page of the Database Settings. This section describes the parameters of the **Configuration**, **Options (I)** and **(II)** tabs of this page.

*	The parameters of the **Log** pages are covered in the [Server Management](webServerMgmt.md#connection-log-file) section.

*	The parameters of the  **Web Services** page are covered in the *Design Reference* manual.

>**Compatibility note:** Certain web mechanisms found in previous versions of 4D are now considered obsolete (for example, "Do not remove “/” on unknown URLs"). For compatibility's sake, these mechanisms can still be used in converted databases. In this case, you can display them and if necessary disable them on the **Compatibility** page of the Database Settings.

### Configuration page 

![](assets/en/WebServer/config.png)

#### Launch Web Server at Startup
  
Indicates whether the web server will be launched when the 4D application starts. This option is described in the [Starting the 4D Web Server](#starting-the-4d-web-server) section.






#### Defining the IP Address for the HTTP Requests 
 
You can define the IP address on which the web server must receive HTTP requests.

>The HTTP server automatically supports IPv6 address notation when the All option is selected in the "IP Address" list. For more information, refer to [IPv6 Support](webServerConnect.md#ipv6-support).

By default, the server responds to all IP addresses (**All** option).

The drop-down list automatically lists all available IP addresses on the machine. When you select a specific address, the server only responds to requests sent to this address. This feature is for 4D Web Servers located on machines with multiple TCP/IP addresses. It is, for example, frequently the case of most host providers. Implementing such a MultiHoming system requires specific configurations on the web server machine:

##### Installing secondary IP addresses on Mac OS

To configure a MultiHoming system on macOS:

1.	Open the **TCP/IP** Control Panel.

2.	Select the **Manually** option from the **Configuration** popup menu.

3.	Create a text file called "Secondary IP Addresses" and save it in the Preferences subfolder of your System folder.<p>
Each line of the "Secondary IP Addresses" file should contain a secondary IP address and an optional subnet mask and router address for the secondary IP address.

Please check the Apple documentation for more information.

##### Installing secondary IP addresses on Windows

To configure a MultiHoming system on Windows:

1.	Select the following sequences of commands (or their equivalents according to your version of Windows):<p>**Start** menu > **Control Panel** **> Network and Internet Connections** > **Network connections** > **Local Area Connection** (Properties) > **Internet Protocol (TCP/IP)** > **Properties** button > **Advanced...** button. <p>The "Advanced TCP/IP Settings" dialog is displayed.

2.	Click the **Add....** button in the "IP Addresses" area, and add additional IP addresses.
	
You can define up to 5 different IP addresses. You may need to consult your systems administrator in order to do so.

#### Enable HTTPS  

Indicates whether or not the Web server will accept secure connections. This option is described in the [Connection Security](webServerConnectSecurity.md#managing-secured-connections-hsts) page.

#### HTTPS Port Number 
 
Allows you to modify the TCP/IP port number used by the web server for secured HTTP connections over TLS (HTTPS protocol). By default, the HTTPS port number is set to 443 (standard value).

You may consider changing this port number for two main reasons:

*	for security reasons — attacks against web servers are generally concentrated on standard TCP ports (80 and 443).
*	in macOS, in order to allow “standard” users to launch the web server in a secured mode — in macOS, the use of TCP/IP ports reserved for web publications (0 to 1023) requires specific access privileges: only the root user can launch an application using these ports. In order for standard users to be able to launch the web server, one solution is to modify the TCP/IP port number.<p>
You can pass any valid value (in order to avoid access restrictions in macOS, you should pass a value greater than 1023). For more information about TCP port numbers, refer to the [TCP port number](#tcp-port-number) paragraph above.

#### Database Access through 4DSYNC URLs  

This option controls support of HTTP synchronization requests containing */4DSYNC* URLs. It is covered in the [Connection Management](webServerConnect.md#connection-security) section.

#### Default HTML Root  

Allows you to define the default location of the website files and to indicate the hierarchical level on the disk above which the files will not be accessible. This option is described in the [Connection Management](webServerConnect.md#connection-security) section.


### Options (I) Page  

![](assets/en/WebServer/option1.png)

#### Cache for Static Pages  

The 4D Web Server has a cache that allows you to load static pages, GIF images, JPEG images (<512 kb) and style sheets (.css files) in memory, as they are requested.
Using the cache allows you to significantly increase the web server’s performance when sending static pages.

The cache is shared between all the web processes. You can set the size of the cache in the Preferences. By default, the cache of the static pages is not enabled. To activate it, simply check the **Use the 4D Web cache** option.

You can modify the size of the cache in the **Pages Cache Size** area. The value you set depends on the number and size of your website’s static pages, as well as the resources that the host machines has at its disposal.

>While using your web database, you can check the performance of the cache by using the routine `WEB GET STATISTICS`. If, for example, you notice that the cache’s rate of use is close to 100%, you may want to consider increasing the size that has been allocated to it.<p>
The */4DSTATS* and */4DHTMLSTATS* URLs allow you to also obtain information about the cache’s state. Please refer to Information about the Web Site.

Once the cache has been enabled, the 4D Web Server looks for the page requested by the browser first in the cache. If it finds the page, it sends it immediately. If not, 4D loads the page from disk and places it in the cache.

When the cache is full and additional space is required, 4D “unloads” the oldest pages first, among the least demanded ones.

##### Clearing the Cache  

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).

To do so, you just have to click on the **Clear Cache** button. The cache is then immediately cleared.

>You can also use the special URL */4DCACHECLEAR*.

#### Inactive Process Timeout  

Allows you to set the maximum timeout before closing for inactive web processes on the server.

#### Maximum Concurrent Web Processes 
 
This option indicates the strictly high limit of **Maximum Concurrent Web Processes** of any type (standard web processes or belonging to the“pool of processes”) that can be simultaneously open on the server. This parameter allows prevention of 4D Server saturation as the result of massive number of requests.

By default, this value is 32000. You can set the number anywhere between 10 and 32000.

When the maximum number of concurrent Web processes (minus one) is reached, 4D no longer creates new processes and sends the following *“Server unavailable”* message (status HTTP 503 – Service Unavailable) for each new request.

>You can also set the maximum number of web processes using the `WEB SET OPTION` command.

##### About the Pool of Web Processes  

The “pool” of web processes allows increasing the reactivity of the web server. This reserve is sized by a minimum (0 by default) and a maximum (10 by default) of processes to recycle. These processes can be modified using the `SET DATABASE PARAMETER` command. Once the maximum number of web processes has been changed, if this number is inferior to the superior limit in the “pool”, this limit is lowered to the maximum number of Web processes.

##### How to determine the right value?  

In theory, the maximum number of web processes is the result of the following formula: **available memory / web process stack size**(\*)

Another solution is to visualize the information on web processes displayed in the Runtime Explorer: the current number of web processes and the maximum number reached since the web server boot are indicated.

*(\*) The stack size allocated by 4D for a web process is around 512 KB (indicative value, ​​which may vary based on context).* 

#### Automatic Session Management   

Enables or disables the internal mechanism for automatic handling of user sessions by the 4D HTTP server. This mechanism is described in the [Session Management](webServerSessions.md) section.

By default, this mechanism is enabled in databases created with 4D v13 and later versions. However, for compatibility reasons, it is disabled in databases converted from previous versions of 4D. You must enable it explicitly in order to benefit from this functionality.

When this option is checked, the "Reuse Temporary Contexts" option is automatically checked (and locked).


## Deprecated Settings

The following settings are still supported but rely on deprecated feautures or technologies. It is usually recommended to keep default values. 


### Reuse temporary contexts (in remote mode)  

Allows you to optimize the operation of the 4D Web Server in remote mode by reusing web processes created for processing previous web requests. In fact, the web server in 4D needs a specific web process for the handling of each web request; in remote mode, when necessary, this process connects to the 4D Server machine in order to access the data and database engine. It thus generates a temporary context using its own variables, selections, etc. Once the request has been dealt with, this process is killed.

When the **Reuse Temporary Contexts** option is checked, in remote mode 4D maintains the specific web processes and reuses them for subsequent requests. By removing the process creation stage, web server performance is improved.

In return, you must make sure in this case to systematically initialize the variables used in 4D methods in order to avoid getting incorrect results. Similarly, it is necessary to erase any current selections or records defined during the previous request.

>*	This option is checked (and locked) automatically when the **Automatic Session Management** option is checked. In fact, the session management mechanism is actually based on the principle of recycling web processes: each session uses the same process that is maintained during the lifespan of the session. However, note that session processes cannot be "shared" between different sessions: once the session is over, the process is automatically killed (and not reused). It is therefore unnecessary to reset the selections or variables in this case.
>
>*	This option only has an effect with a 4D Web Server in remote mode. With a 4D in local mode, all web processes (other than session processes) are killed after their use.

#### “Passwords” area  

Configuration of website access protection using passwords. This option is described in the [Server Security](webServerSecurity.md#password-management) section.

### Options (II) Page  

![](assets/en/WebServer/option2.png)

#### Directly Sending Extended Characters  

By default, the 4D Web Server converts the extended characters in the dynamic and static web pages according to HTML standards before sending them. They are then interpreted by the browsers.

You can set the web server so that the extended characters are sent “as is”, without converting them into HTML entities. This option has shown a speed increase on most foreign operating systems (especially the Japanese system).

To do this, check the **Send Extended Characters Directly** option.

#### Keep-Alive Connections  

The 4D Web Server can use keep-alive connections. The keep-alive option allows you to maintain a single open TCP connection for the set of exchanges between the web browser and the server to save system resources and to optimize transfers.

The **Use Keep-Alive Connections** option enables or disables keep-alive TCP connections for the web server. This option is enabled by default. In most cases, it is advisable to keep this option check since it accelerates the exchanges. If the web browser does not support connection keep alive, the 4D Web Server automatically switches to HTTP/1.0.

The 4D Web Server keep-alive function concerns all TCP/IP connections (HTTP, HTTPS). Note however that keep-alive connections are not always used for all 4D web processes.

In some cases, other optimized internal functions may be invoked. Keep-alive connections are useful mainly for static pages.

Two options allow you to set how the keep-alive connections work:

*	**Number of requests by connection**: Allows you to set the maximum number of requests and responses able to travel over a connection keep alive. Limiting the number of requests per connection allows you to prevent server flooding due to a large number of incoming requests (a technique used by hackers).<p>
The default value (100) can be increased or decreased depending on the resources of the machine hosting the 4D Web Server.

*	**Timeout**: This value defines the maximum wait period (in seconds) during which the web server maintains an open TCP connection without receiving any requests from the web browser. Once this period is over, the server closes the connection.<p>
If the web browser sends a request after the connection is closed, a new TCP connection is automatically created. This operation is not visible for the user.


### macOS HelperTool   

In macOS, using TCP/IP ports reserved for web publishing (ports 0 to 1023) requires specific access privileges. In order for you to be able to use these ports, 4D provides a utility program named HelperTool. When this program is installed, it retrieves the appropriate access rights and automatically takes charge of opening the web ports. This mechanism functions with 4D (all modes), 4D Server and 4D Volume Desktop executable applications.

The HelperTool application is included in the 4D software. Installation takes place automatically during the first opening of a port <1024 on the machine. The user is informed that a tool is going to be installed and is prompted to enter a name and an administrator password for the machine. This operation only takes place once.

The application is renamed "com.4D.Helper" and is installed in the "/Library/PrivilegedHelperTools/" folder (with current macOS releases). After the initial sequence, the 4D Web Server can be started and stopped transparently, regardless of the 4D version used.
