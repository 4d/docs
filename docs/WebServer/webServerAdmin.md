---
id: webServerAdmin
title: Web Server Administration
---


> To be able to launch the web server of 4D or 4D Server, you must have a "4D Web Application" license. For more information, please refer to the [4D Web site](https://www.4d.com).


## Starting the 4D Web Server

A 4D project can start and monitor a web server for the main (host) application as well as for each hosted component. 

The main 4D web server can be started in different ways:

*	Using the **Run\>Start Web Server** menu of 4D or the **Start HTTP server** button of the HTTP Server page of 4D Server (both items show **Stop...** when the server is already started):
	*	4D:<br>![](assets/en/WebServer/start1.png)
	*	4D Server:<br>![](assets/en/WebServer/start2.png)
	
*	Automatically starting it each time the 4D application is opened. To do this, display the **Web\/Configuration** page of the Settings and select the **Launch Web Server at Startup** check box:<br>![](assets/en/WebServer/config.png)
	
*	Programmatically, by calling the `webServer.start()` function or `WEB START SERVER` command.

The web server of any component can be launched by calling the `webServer.start()` function on the component's web server object. 

>You do not need to relaunch the 4D application to start or stop the web server.

## Stopping the 4D Web Server 

The main 4D web server can be stopped in different ways:

*	Using the **Run\>Stop Web Server** menu of 4D or the **Stop HTTP server** button of the HTTP Server page of 4D Server (both items show **Start...** when the server is not already started).
	
*	Programmatically, by calling the `webServer.stop()` function or `WEB STOP SERVER` command.

The web server of any component can be stopped by calling the `webServer.stop()` function on the component's web server object. 


## Testing the 4D Web Server  
 
The **Test Web Server** command can be used to make sure the built-in web server is functioning correctly (4D only). This command is accessible in the **Run** menu when the web server is launched:

![](assets/en/WebServer/test1.png)


When you select this command, the home page of the website published by the 4D application is displayed in a window of your default web browser:

![](assets/en/WebServer/defaultHomePage.png)


This command lets you verify that the web server, home page display, etc. work correctly. The page is called using the *localhost* URL, which is the standard shortcut designating the IP address of the machine on which the web browser is executed. The command takes into account the [TCP publication port](#http-port) number specified in the settings.

## Configuration Settings

You can configure the operation of the 4D Web Server using the parameters set on the **Web** page of the Database Settings. This section describes the parameters of the **Configuration**, **Options (I)** and **(II)** tabs of this page.

*	The parameters of the **Log** pages are covered in the [Server Management](webServerMgmt.md#connection-log-file) section.

*	The parameters of the  **Web Services** page are covered in the *Design Reference* manual.

>**Compatibility note:** Certain web mechanisms found in previous versions of 4D are now considered obsolete (for example, "Do not remove “/” on unknown URLs"). For compatibility's sake, these mechanisms can still be used in converted databases. In this case, you can display them and if necessary disable them on the **Compatibility** page of the Database Settings.

### Configuration page 

![](assets/en/WebServer/config.png)

#### Launch Web Server at Startup
  
Indicates whether the web server will be launched when the 4D application starts. This option is described in the [Starting the 4D Web Server](#starting-the-4d-web-server) section.

#### Enable HTTP  

Indicates whether or not the web server will accept non-secure connections. This option is described in the [Managing secured connections (HSTS)](webServerConnectSecurity.html#managing-secured-connections-hsts) section of the [Connection Security](webServerConnectSecurity.html) page.

#### HTTP Port  

By default, 4D publishes a web database on the regular Web HTTP Port (TCP port), which is port 80. If that port is already used by another web service, you need to change the HTTP Port used by 4D for this database. 
In macOS, modifying the HTTP port allows you to start the 4D Web Server without being the root user of the machine (see [macOS HelperTool](#macos-helpertool)).

To do so, go to the HTTP Port enterable area and indicate an appropriate value (a TCP port not already used by another TCP/IP service running on the same machine).

>If you specify 0, 4D will use the default HTTP port number 80.

From a web browser, you need to include the non-default HTTP port number into the address you enter for connecting to the web database. The address must have a suffix consisting of a colon followed by the port number. For example, if you are using the HTTP port number 8080, you will specify "123.4.567.89:8080".

>**WARNING**<br>If you use TCP port numbers other than the default numbers (80 for standard HTTP and 443 for HTTPS), be careful not to use port numbers that are defaults for other services that you might want to use simultaneously. For example, if you also plan to use the FTP protocol on your web server machine, do not use the TCP port 20 and 21, which are the default ports for that protocol (unless you know what you are doing). To find out the standard assignment of TCP port numbers, refer to the *Appendix B, TCP Port Numbers* section in the documentation of the *4D Internet Commands*. Ports numbers below 256 are reserved for well known services and ports numbers from 256 to 1024 are reserved for specific services originated on the UNIX platforms. For maximum security, specify a port number beyond these intervals(for example, in the 2000's or 3000's).


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

#### Defining a Default Home Page  

You can designate a default home page for all the browsers that connect to the database. This page can be static or semi-dynamic.

By default, when the web server is launched for the first time, 4D creates a home page named “index.html” and puts it in the HTML root folder. If you do not modify this configuration, any browser connecting to the web server will obtain the following page:


![](assets/en/WebServer/defaultHomePage.png)


To modify the default home page, simply replace it in the database root folder with your own “index.html” page or enter the relative access path of the page that you want to define in the “Default Home Page” entry area.

The access path must be set up in relation to the default HTML root folder.

In order to ensure multi-platform compatibility of your databases, the 4D Web Server uses particular writing conventions to define access paths. The syntax rules are as follows:

*	folders are separated by a slash (“/”)
the access path must not end with a slash (“/”)

*	to “go up” one level in the folder hierarchy, enter “..” (two periods) before the folder name

*	the access path must not start with a slash (“/”)

For example, if you want the default home page to be “MyHome.htm”, and it is located in the “Web” folder (itself located in the default HTML root folder of the database), enter “Web/MyHome.htm”.

>You can also define a default home page for each web process by using the routine `WEB SET HOME PAGE`.

If you do not specify a default custom home page, the `On Web Connection` database method is called. It is up to you to process the request procedurally.

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

#### Reuse temporary contexts (in remote mode)  

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

#### Standard Sets  

The **Standard Set** drop-down list allows you to define the set of characters to be used by the 4D Web Server. By default, the character set is UTF-8.

>This setting is also used for generating Quick Reports in HTML format (see *Executing a quick report*).

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
