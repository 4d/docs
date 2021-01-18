---
id: webServerConnect
title: Connection Management
---
## Connecting to a published 4D database 

After you have started publishing a 4D database on the web, you can connect to it using a web browser. To do so:

*	If your website has a registered name (*i.e.*, “ www.flowersforever.com”), indicate that name in the Open, Address, or Location area of your browser. Then press **Enter** to connect.

*	If your Web Site does not have a registered name, indicate the IP address of your machine
(*i.e.*, 123.4.567.89) in the Open, Address, or Location area of your browser. Then press **Enter**.

At this time, your browser should display the home page of your website. If you have published a database in keeping with standard configurations, you should obtain the default home page of the 4D Web server. This page lets you test the connection and the server operation.

You may also encounter one of the following situations:

1. The connection fails and you get a message such as “...the server may not be accepting connections or may be busy...”.
In this case, check the following:
	*	Verify that the name or the IP address you entered is correct.
	*	Verify that 4D or 4D Server is up and running and has started its web server.
	*	Check if the database is configured for being served on a TCP Port other than the default web TCP Port (see situation 3).
	*	Check whether TCP/IP is correctly configured on both the server and browser machines. Both machines must be on the same net and subnet, or your routers must be correctly configured.
	*	Check your hardware connections.
	*	If you are not locally testing your own site, but rather attempting to connect to a web database served on Internet or Intranet by someone else, ultimately, the message might be true: the server may be off or busy. So, retry later until you can log on, or contact the web provider.

2. You connect, but you get an HTTP 404 "File not found" error. This means that the site home page has not be served. In this case, check that the home page actually exists at the location defined in the database settings (see the [Configuration Settings](webServerConfig.md#configuration-settings) section) or using the `WEB SET HOME PAGE` command.

3. You connect, but you do NOT obtain the web page you were expecting! This can occur when you have several web servers running simultaneously on the same machine. Examples:
	*	You are running only one 4D web database on a Windows system that is already running its own web server.
	*	You are running several 4D web databases on the same machine.

	In this kind of situation, you need to change the TCP port number on which your 4D Web database is published. To do so, refer to the Web Server Settings section.

>If your database is protected by a password system, you may have to enter a valid user name and password (for more information, refer to the [Server Security](webServerSecurity.md#password-management) section).


## Web Processes  

Each time a web browser attempts to connect to the database, the request is handled as follows:

*	First, one or more temporary local 4D processes called **Web Connection Processes** are created in order to evaluate and manage the connection with the web browser.

	These temporary processes manage every HTTP request. They execute quickly and are then aborted or delayed. In order to optimize the web server, once a request has been handled, 4D freezes this “pool” of web processes for a few seconds so that it can reuse them if necessary when another request arrives. You can customize this behavior (timeout, minimum and maximum number of processes to be kept in the "pool") using the `SET DATABASE PARAMETER` command.

*	The web process handles the processing of the request and sends a response (if necessary) to the browser. The temporary process is then aborted or delayed (see above).

### Using preemptive web processes  

The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.

For in-depth information on preemptive process in 4D, please refer to the *Preemptive 4D processes* section in the *Language Reference*.

#### Availability of preemptive mode for web processes  

The use of preemptive mode for web processes is only available in the following contexts:

*	use of 4D Server or 4D local mode (4D in remote mode does not support preemptive mode)

*	use of a compiled database

*	**Use preemptive processes** database setting checked (see below)

*	all web-related database methods and project methods are confirmed thread-safe by 4D Compiler

If any requirement is missing, the web server will use cooperative processes.

#### Enabling the preemptive mode for the web server  

To enable the preemptive mode for your application's web server code, you must check the **Use preemptive processes** option on the "Web/Options (I)" page of the Database Settings dialog box:

![](assets/en/WebServer/preemptive.png)

When this option is checked, the 4D compiler will automatically evaluate the thread-safety property of each piece of web-related code (see below) and return errors in case of incompatibility.

>This option does not apply to web service processes (server or client). Preemptive mode is supported by web service processes at method level: you just have to select "Can be run in preemptive processes" property for published SOAP server methods (see *Publishing a Web Service with 4D*) or proxy client methods (see *Subscribing to a Web Service in 4D*) and make sure they are confirmed thread-safe by the compiler. 

#### Writing thread-safe web server code  

All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. When the **Use preemptive processes** option is checked in the Database Settings dialog box, the following parts of the application will be automatically evaluated by the 4D compiler:

*	All web-related database methods:
	*	[`On Web Authentication`](webServerConnectMethods.md#on-web-authentication) database method
	*	[`On Web Connection`](webServerConnectMethods.md#on-web-connection) database method
	*	[`On Web Close Process`](webServerConnectMethods.md#on-web-close-process) database method
	*	`On REST Authentication` database method
	*	`On Mobile App Authentication` database method

*	The `compiler_web` project method (regardless of its actual "Execution mode" property);

*	Basically any code processed by the `PROCESS 4D TAGS` command in the web context, for example through .shtml pages.

*	Any project method with the "Available through 4D HTML tags and URLS (`4DACTION`, etc.)" attribute

*	Triggers for tables with "Expose with 4D Mobile Service" attribute

*	Project methods available through 4D Mobile ("4D Mobile" property checked)

For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. For more information about thread-safety rules, please refer to the *Writing a thread-safe method* paragraph in the *Processes* chapter.

#### Thread-safety of 4D commands and Web URLs  

As of 4D v16, most of the web-related 4D commands, database methods and URLs are thread-safe and can be used in preemptive mode:

##### 4D commands  

All 4D web-related commands are thread-safe, *i.e.*:

*	all commands from the *Web Server* theme,
*	all commands from the *HTTP Client* theme.

##### Database methods  

The following database methods are thread-safe and can be used in preemptive mode:

*	[`On Web Authentication`](webServerConnectMethods.md#on-web-authentication) database method
*	[`On Web Connection`](webServerConnectMethods.md#on-web-connection) database method
*	[`On Web Close Process`](webServerConnectMethods.md#on-web-close-process) database method
*	`On REST Authentication` database method

Of course, the code executed by these methods must also be thread-safe.

##### Web Server URLs  

The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:

*	*4daction/* (the called project method must also be thread-safe)
*	*4dcgi/* (the called database methods must also be thread-safe)
*	*4dscript/* (deprecated as URL, used as a tag)
*	*[4dwebtest/](webServerMgmt.md#4dwebtest)*
*	*4dblank/*
*	*[4dstats/](webServerMgmt.md#4dstats)*
*	*[4dhtmlstats/](webServerMgmt.md#4dhtmlstats)*
*	*[4dcacheclear/](webServerMgmt.md#4dcacheclear)*
*	*rest/*
*	*4dimgfield/* (generated by `PROCESS 4D TAGS` for web request on picture fields)
*	*4dimg/* (generated by `PROCESS 4D TAGS` for web request on picture variables)

The following 4D Web Server URLs are not thread-safe and not supported in preemptive mode:

*	*4dsync*
*	*4dsqlauth* (deprecated, used for Flex 1.1)

##### Preemptive web process icon  

Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:

|Process type|Icon|
|---|---|
|Preemptive web method| ![](assets/en/WebServer/processIcon.png)|


## IPv6 Support  

Starting with version 14, 4D supports IPv6 address notation. This concerns the following 4D integrated servers:

*	the web server as well as the SOAP server,
*	the SQL server.

>For more information about IPv6, refer to the following specification: RFC 2460.

Support of IPv6 is transparent for users and for 4D developers: the program accepts either IPv6 or IPv4 connections indiscriminately when the listening "IP address" of the server is set to All (see Defining the IP Address for the HTTP Requests (HTTP server) and SQL Server Publishing Preferences (SQL server).

However, you should pay attention to the following points:

*	**Indication of port numbers**<br>
Since IPv6 notation uses colons (:), adding port numbers may lead to some confusion, for example:

	```code4d
	2001:0DB8::85a3:0:ac1f:8001 // IPv6 address
	2001:0DB8::85a3:0:ac1f:8001:8081 // IPv6 address with port 8081
	```

	To avoid this confusion, we recommend using the [ ] notation whenever you combine an IPv6 address with a port number, for instance:

	```code4d
	[2001:0DB8::85a3:0:ac1f:8001]:8081 //IPv6 address with port 8081
	```

*	**No warning when TCP port is occupied**<br>
Unlike previous versions of 4D, when the server is set to respond on "all" IP addresses with 4D v14, if the TCP port is being used by another application, this is no longer indicated when the server is started. In fact, 4D server does not detect any error in this case because the port remains free on the IPv6 address. However, it is not possible to access it using the IPv4 address of the machine, nor by means of the local address: 127.0.0.1.<p>
If your 4D server does not seem to be responding on the port defined, you can test the address [::1] on the server machine (equivalent to 127.0.0.1 for IPv6, add :portNum to test another port number). If 4D responds, it is likely that another application is using the port in IPv4.

*	**IPv4-mapped IPv6 addresses**<br>
To standardize processing, 4D provides a standard hybrid representation of IPv4 addresses in IPv6. These addresses are written with a 96-bit prefix in IPv6 format, followed by 32 bits written in the dot-decimal notation of IPv4. For example, ::ffff:192.168.2.34 represents the IPv4 address 192.168.2.34.

