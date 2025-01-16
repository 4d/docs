---
id: web
title: Web page
---

Using the tabs on the **Web** page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see [Web server](../WebServer/webServer.md). For more information about 4D Web services, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html) chapter.

## Configuration

### Publishing Information

#### Launch Web Server at Startup  

Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the [Web server administration](../WebServer/webServerAdmin.md#starting-the-4d-web-server) section.

#### Enable HTTP  

Indicates whether or not the Web server will accept non-secure connections. See [Enable HTTP](../WebServer/webServerConfig.md#enable-http).


#### HTTP Port  

Listening IP (TCP) port number for HTTP. See [HTTP Port](../WebServer/webServerConfig.md#http-port).

#### IP Address  

IP address on which the 4D web server will receive HTTP requests (4D local and 4D Server). See [IP Address to listen](../WebServer/webServerConfig.md#ip-address-to-listen).


#### Enable HTTPS  

Indicates whether or not the Web server will accept secure connections. See [Enable HTTPS](../WebServer/webServerConfig.md#enable-https).


#### HTTPS Port  

Allows you to modify the TCP/IP port number used by the Web server for secured HTTP connections over TLS (HTTPS protocol). See [HTTPS Port](../WebServer/webServerConfig.md#https-port).

#### Allow database access through 4DSYNC URLs

*Compatibility Note*: This option is [deprecated](../WebServer/webServerConfig.md#deprecated-settings). For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests.


### Paths

#### Default HTML Root

Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. See [Root Folder](../WebServer/webServerConfig.md#root-folder).

#### Default Home Page

Designate a default home page for the Web server. See [Default Home page](../WebServer/webServerConfig.md#default-home-page).




## Options (I)

### Cache  


#### Use the 4D Web cache

Enables the web page cache. See [Cache](../WebServer/webServerConfig.md#cache).

#### Pages Cache Size

Sets the cache size. See [Cache](../WebServer/webServerConfig.md#cache).


#### Clear Cache  

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).
To do so, you just have to click on the **Clear Cache** button. The cache is then immediately cleared.

> You can also use the special URL [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Web Process  

This area allows you to configure how the web server will handle user sessions and their associated processes.

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Scalable sessions (multi-process sessions)  

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).


#### No sessions  

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Successive requests from web clients are always independent and no context is maintained on the server.

In this mode, you can configure additional web server setttings:

-   [Maximum Concurrent Web Processes](#maximum-concurrent-web-processes)
-   [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
-   [Use preemptive processes](#use-preemptive-web-processes)

#### Legacy sessions (single process sessions)



*Compatibility Note:* This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### Maximum Concurrent Web Processes

Not available with [scalable sessions](../WebServer/sessions.md).

Strictly high limit of concurrent web processes. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).


#### Reuse Temporary Contexts

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to optimize the operation of the 4D Web server in remote mode. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Use preemptive processes  

Not available with [scalable sessions](../WebServer/sessions.md).

Enables preemptive web processes in your compiled applications. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

> This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  See [Enabling the preemptive mode for the web server](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).


#### Inactive Process Timeout  

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to set the maximum timeout before closing for inactive Web processes on the server. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).



### Web Passwords  

Set the authentication system that you want to apply to your Web server. Three options are proposed:

Custom (default)
Passwords with BASIC protocol
Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the *Web Development* documentation.


## Options (II)

### Text Conversion  

#### Send Extended Characters Directly

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define the set of characters to be used by the 4D Web server. See [Character Set](../WebServer/webServerConfig.md#character-set).

### Keep-Alive Connections  

See [Deprecated Settings](../WebServer/webServerConfig.md#keep-alive-connections).

### CORS Settings

#### Enable CORS

Enables Cross-origin resource sharing (CORS) service. See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### Domain names/HTTP methods allowed

List of allowed hosts and methods for the CORS service. See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).



## Log (type)


### Log Format  

Starts or stops the recording of requests received by the 4D web server in the *logweb.txt* file and sets its format. See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.


The log format menu provides the following options:

-   **No Log File**: When this option is selected, 4D will not generate a log file of requests.

-   **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\
    host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\
    Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

    -   host: IP address of the client (ex. 192.100.100.10)
    -   rfc931: information not generated by 4D, it's always - (a minus sign)
    -   user: user name as it is authenticated, or else it is - (a minus sign). If the user name contains spaces, they will be replaced by _ (an underscore).
    -   DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds

> The date and time are local to the server.

-   request: request sent by the client (ex. GET /index.htm HTTP/1.0)
-   state: reply given by the server.
-   length: size of the data returned (except the HTTP header) or 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds.
> The possible values of state are as follows:
> 200: OK
> 204: No contents
> 302: Redirection
> 304: Not modified
> 400: Incorrect request
> 401: Authentication required
> 404: Not found
> 500: Internal error
> The CLF format cannot be customized.

-   **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent.

    -   Referer: Contains the URL of the page pointing to the requested document.
    -   User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> The DLF format cannot be customized.

-   **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

-   **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Like the ELF format, it can be customized.

**Configuring the fields**
When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, use the arrow buttons or simply drag and drop the desired fields into the "Selected Tokens" area.

**Note**: You cannot select the same field twice.

The following table lists the fields available for each format (in alphabetical order) and describes its contents:

| Field | ELF | WLF | Value |
| --- | --- | --- | --- |
| BYTES_RECEIVED |  | X | Number of bytes received by the server |
| BYTES_SENT | X | X | Number of bytes sent by the server to the client |
| C_DNS | X | X | IP address of the DNS (ELF: field identical to the C_IP field) |
| C_IP | X | X | IP address of the client (for example 192.100.100.10) |
| CONNECTION_ID |  | X | Connection ID number |
| CS(COOKIE) | X | X | Information about cookies contained in the HTTP request |
| CS(HOST) | X | X | Host field of the HTTP request |
| CS(REFERER) | X | X | URL of the page pointing to the requested document |
| CS(USER_AGENT) | X | X | Information about the software and operating system of the client |
| CS_SIP | X | X | IP address of the server |
| CS_URI | X | X | URI on which the request is made |
| CS_URI_QUERY | X | X | Request query parameters |
| CS_URI_STEM | X | X | Part of request without query parameters |
| DATE | X | X | DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year |
| METHOD | X | X | HTTP method used for the request sent to the server |
| PATH_ARGS |  | X | CGI parameters: string located after the "$" character |
| STATUS | X | X | Reply provided by the server |
| TIME | X | X | HH: hour, MM: minutes, SS: seconds |
| TRANSFER_TIME | X | X | Time requested by server to generate the reply |
| USER | X | X | User name if authenticated; otherwise - (minus sign). |
|  |  |  | If the user name contains spaces, they are replaced by _ (underlines) |
| URL |  | X | URL requested by the client |

> Dates and times are given in GMT.

## Log (backup)

Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. You must then specify the precise moment of the backup if necessary.

-   **No Backup**: The scheduled backup function is deactivated.
-   **Every X hour(s)**: This option is used to program backups on an hourly basis. You can enter a value between 1 and 24 .

    -   **starting at**: Used to set the time at which the first back up will begin.
-   **Every X day(s) at X**: This option is used to program backups on a daily basis. Enter 1 if you want to perform a daily backup. When this option is checked, you must indicate the time when the backup must be started.
-   **Every X week(s), day at X**: This option is used to program backups on a weekly basis. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired. For example, you can use this option to set two weekly backups: one on Wednesdays and one on Fridays.
-   **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. Enter 1 if you want to perform a monthly backup. When this option is checked, you must indicate the day of the month and the time when the backup must be started.
-   **Every X MB**: This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. You can set a size limit of 1, 10, 100 or 1000 MB.

> In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.

## Web Services

You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Server Side  

This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.  

-   **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the *Published in WSDL* attribute. When this option is checked, 4D creates the WSDL file.
-   **Web Service Name**: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. By default, 4D uses the name A_WebService.
-   **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: http://www.4d.com/namespace/default.

> In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).

### Client Side

This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.

-   **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. By default, 4D uses the prefix "proxy_".


## Web Features

This page contains the options used to enable and control advanced Web features such as the REST server.

### Publishing  

#### Expose as REST server

Starts and stops the REST Server. See [REST Server Configuration](../REST/configuration.md).

### Access

:::info Deprecated

**This section is deprecated** as of 4D 20 R6. If the current project configuration is obsolete and needs to be upgraded, this section, including the **Activate REST authentication through ds.authentify() function** button (see below), is displayed. If your project is already compatible with the [Force login](../REST/authUsers.md#force-login-mode) mode, the section is missing and you can ignore this paragraph.

:::

See [Users and sessions](../REST/authUsers.md) to know the recommended way to control and manage REST access in your 4D projects.


#### Activate REST authentication through ds.authentify() function

Click on the **Activate REST authentication through ds.authentify() function** button to automatically upgrade your project regarding REST user access. Note that this operation cannot be reverted and may require that you modify your code (a warning dialog box is displayed when you click on the button).

:::note

This button is only available in projects opened with the 4D application (single-user).

:::

The button triggers the following upgrade sequence:

- The group of REST API users set in the **Read/Write** menu is removed.
- The `On REST Authentication` database method is deleted (moved into the system bin).
- A default ["roles.json" file](../ORDA/privileges.md#rolesjson-file) is created in the [Sources folder](../Project/architecture.md#sources) of the project if it does not already exist, with its `forceLogin` attribute to `True`.

Remember to restart your project after performing this upgrade.

The next step is to modify your code accordingly. [**See this blog post to know how to proceed**](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/).



### Qodly Studio

#### Enable access to Qodly Studio

:::note

This option only appears if the Qodly Studio license is activated.

:::

This option enables user access to [Qodly Studio](../WebServer/qodly-studio.md) for the current project. Note that global access must be allowed at the [application level](../Admin/webAdmin.md).
