---
id: web-server
title: WEB Server
slug: /commands-legacy/web-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server.Syntax-->**WEB Server** {( *option* )} -> Function result<!-- END REF-->
<!--REF #_command_.WEB Server.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Longint | &#x1F852; | Web server to get (default if omitted = database Web server) |
| Function result | Object | &#x1F850; | Web server object |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Server.Summary-->The **WEB Server** command returns the database Web server object, or the Web server object defined through the *option* parameter.<!-- END REF--> 

By default, if the *option* parameter is omitted, the command returns a reference to the Web server of the database, *i.e.* the default Web server. To designate the Web server to return, you can pass one of the following constants from the *Web Server* theme in the *option* parameter:

| Constant                     | Value | Comment                                                  |
| ---------------------------- | ----- | -------------------------------------------------------- |
| Web server database          | 1     | Current database Web server (default if omitted)         |
| Web server host database     | 2     | Web server of the host database of a component           |
| Web server receiving request | 3     | Web server that received the request (target Web server) |

##### Returned object 

The returned *Web server* object contains the following read-only properties and methods:

| **Property**               | **Type**   | **Description**                                                                                                                                                    |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| certificateFolder          | Text       | Folder where the certificate files are saved. POSIX full path format using filesystems. Can be passed as a [Folder](folder.md) object in the *settings* parameter. |
| characterSet               | Number     | Character set number                                                                                                                                               |
| cipherSuite                | Text       | Cipher list used for the secure protocol                                                                                                                           |
| CORSEnabled                | Boolean    | CORS service state                                                                                                                                                 |
| CORSSettings               | Collection | List of allowed hosts and methods for the CORS service (collection of objects with *host* and *methods* text properties)                                           |
| debugLog                   | Number     | Debug log selector value                                                                                                                                           |
| defaultHomepage            | Text       | Default homepage                                                                                                                                                   |
| HSTSEnabled                | Boolean    | HSTS protocol state                                                                                                                                                |
| HSTSMaxAge                 | Number     | HSTS life duration                                                                                                                                                 |
| HTTPCompressionLevel       | Number     | HTTP compression level                                                                                                                                             |
| HTTPCompressionThreshold   | Number     | HTTP compression threshold                                                                                                                                         |
| HTTPEnabled                | Boolean    | HTTP protocol state                                                                                                                                                |
| HTTPPort                   | Number     | Listening IP port for HTTP                                                                                                                                         |
| HTTPTrace                  | Boolean    | HTTP TRACE activation                                                                                                                                              |
| HTTPSEnabled               | Boolean    | HTTPS protocol state                                                                                                                                               |
| HTTPSPort                  | Number     | Listening IP port for HTTPS                                                                                                                                        |
| inactiveSessionTimeout     | Number     | Life duration of the inactive session processes                                                                                                                    |
| inactiveProcessTimeout     | Number     | Life duration of the inactive sessions                                                                                                                             |
| IPAddressToListen          | Text       | IP address to listen or "0.0.0.0" for Any                                                                                                                          |
| isRunning                  | Boolean    | Web server running state - *Cannot be set with the settings object*                                                                                                |
| keepSession                | Boolean    | Legacy session status                                                                                                                                              |
| logRecording               | Number     | Log recording value                                                                                                                                                |
| maxConcurrentProcesses     | Number     | Maximum number of concurrent web processes                                                                                                                         |
| maxRequestSize             | Number     | Max request size                                                                                                                                                   |
| maxSessions                | Number     | Max sessions                                                                                                                                                       |
| minTLSVersion              | Number     | Minimum TLS version accepted for connections                                                                                                                       |
| name                       | Text       | Name of the web server database - *Cannot be set with the* *settings* *object*                                                                                     |
| openSSLVersion             | Text       | Version of the used OpenSSL library - *Cannot be set with the* *settings* *object*                                                                                 |
| perfectForwardSecrecy      | Boolean    | PFS availability on the server - *Cannot be set with the* *settings* *object*                                                                                      |
| rootFolder                 | Text       | Root folder path. POSIX full path format using filesystems. Can be passed as a [Folder](folder.md) object in the *settings* parameter                              |
| scalableSession            | Boolean    | Scalable session management status                                                                                                                                 |
| sessionCookieDomain        | Text       | Session cookie domain                                                                                                                                              |
| sessionCookieName          | Text       | Session cookie name - *Cannot be set with the* *settings* *object in scalable session management mode*                                                             |
| sessionCookiePath          | Text       | Session cookie path                                                                                                                                                |
| sessionIPAddressValidation | Boolean    | Session IP address validation                                                                                                                                      |

These properties are defined in the database settings of the host database or the component. For the host database, they can be overriden using the [WEB SET OPTION](web-set-option.md) command. 

**Note:** These properties can also be modified using the *settings* parameter of the *webServer.start( )* method (except those tagged *Cannot be set with the settings object*). Once the Web server has started, values modified by the *settings* parameter are updated accordingly in the object returned by **WEB Server**. These values are used only during the subsequent Web server session (they are reset when the *webServer.stop( )* method is called). 

| **Method**           | **Description**       |
| -------------------- | --------------------- |
| *webServer.start( )* | Starts the Web server |
| *webServer.stop( )*  | Stops the Web server  |

#### Example 

From your component, you want to know if the Web server of the host database is started:

```4d
  // Method of a component
 var $hostWS : Object
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

#### See also 

[WEB Server list](web-server-list.md)  
*webServer.stop( )*  