---
id: webServerGetStart
title: Getting Started
---

This "Getting started" section is geared at first-time users who want an overall overview on how to go from zero to a 4D website that handles data from the database. Let's start!


## Hello World Example

Let's start by making the web server send "Hello World" to the browser. The most simple way to do this is to create a project, start the web server and call the On Web Connection database method.

### Starting the web server

To start the 4D web server, you first need to create a project:

1. Launch your 4D application and create a new, empty 4D project. 
2. In the **Run** menu, just select **Start Web Server**.

That's all! The web server is started and ready to handle requests. To check it, we'll display the default home page. 

### Displaying the default home page

The 4D web server creates automatically a default `index.html` page in the default `WebFolder` root folder, created at the same level as the Project folder.

1. Launch a web browser and connect to the web server IP address (default http port for 4D web server is 80). If the web server and the browser are on the same machine, you can select **Test Web Server** in the **Run** menu. 

The default home page is displayed:

![](assets/en/WebServer/defaultHomePage.png)

### Displaying Hello World

1. Open the Explorer and double-click on the `On Web Connection` database method. 

2. Enter the following line of code:

```4d
WEB SEND TEXT("Hello World!")
```

This very simple line only sends the text passed as parameter to the browser. 

The `On Web Connection` database method can be used as a fallback: it is called when the server receives an invalid request. 

3. Enter a non-existing page in the URL, for example:

```
http://localhost/hello
```

The web server handles the invalid request and executes the `On Web Connection` database method, which returns:

![](assets/en/WebServer/hello.png)





 4D project can start and monitor a web server for the main (host) application as well as for each hosted component. 

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




### Defining the IP Address for the HTTP Requests 
 
You can define the IP address on which the web server must receive HTTP requests.

>The HTTP server automatically supports IPv6 address notation when the All option is selected in the "IP Address" list. For more information, refer to [IPv6 Support](webServerConnect.md#ipv6-support).

By default, the server responds to all IP addresses (**All** option).

The drop-down list automatically lists all available IP addresses on the machine. When you select a specific address, the server only responds to requests sent to this address. This feature is for 4D Web Servers located on machines with multiple TCP/IP addresses. It is, for example, frequently the case of most host providers. Implementing such a MultiHoming system requires specific configurations on the web server machine:


## Installing secondary IP addresses

Using the [IP Address configuration option](webServerConfig/#ip-address-to-listen) may require that you install secondary IP addresses.

### Installing secondary IP addresses on macOS

To configure a MultiHoming system on macOS:

1.	Open the **TCP/IP** Control Panel.

2.	Select the **Manually** option from the **Configuration** popup menu.

3.	Create a text file called "Secondary IP Addresses" and save it in the Preferences subfolder of your System folder.<p>
Each line of the "Secondary IP Addresses" file should contain a secondary IP address and an optional subnet mask and router address for the secondary IP address.

Please check the Apple documentation for more information.

### Installing secondary IP addresses on Windows

To configure a MultiHoming system on Windows:

1.	Select the following sequences of commands (or their equivalents according to your version of Windows):<p>**Start** menu > **Control Panel** **> Network and Internet Connections** > **Network connections** > **Local Area Connection** (Properties) > **Internet Protocol (TCP/IP)** > **Properties** button > **Advanced...** button. <p>The "Advanced TCP/IP Settings" dialog is displayed.

2.	Click the **Add....** button in the "IP Addresses" area, and add additional IP addresses.
	
You can define up to 5 different IP addresses. You may need to consult your systems administrator in order to do so.


## Clearing the Cache  

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).

To do so, you just have to click on the **Clear Cache** button in the Web/Options (I) page of the Settings dialog box. The cache is then immediately cleared.

>You can also use the special URL */4DCACHECLEAR*.



## macOS HelperTool   

In macOS, using TCP/IP ports reserved for web publishing (ports 0 to 1023) requires specific access privileges. In order for you to be able to use these ports, 4D provides a utility program named HelperTool. When this program is installed, it retrieves the appropriate access rights and automatically takes charge of opening the web ports. This mechanism functions with 4D (all modes), 4D Server and 4D Volume Desktop executable applications.

The HelperTool application is included in the 4D software. Installation takes place automatically during the first opening of a port <1024 on the machine. The user is informed that a tool is going to be installed and is prompted to enter a name and an administrator password for the machine. This operation only takes place once.

The application is renamed "com.4D.Helper" and is installed in the "/Library/PrivilegedHelperTools/" folder (with current macOS releases). After the initial sequence, the 4D Web Server can be started and stopped transparently, regardless of the 4D version used.
