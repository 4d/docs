---
id: webServerOverview
title: Web Server object
---

## Overview

A 4D application can start and monitor a web server related to the main (host) database, and also another web server related to each hosted component.

It means that, if you installed for example two components in your host database, you will be able to start and monitor up to 3 independant web servers from your application:

- one web server for the host database,
- one web server for the component #1,
- one web server for the component #2.

There is no other limit than memory to the number of components and thus, of web servers, that can be attached to a single 4D database. 

Each 4D web server, including the web server of the main database, is exposed as a specific **object**. Once instantiated, a web server object can be handled from the current database or any component. 

> The WEB commands of the 4D language are supported but can only apply to the main web server, or to the web servers of the remote application (with 4D Server). 

This feature allows you to develop independant components and features that come with their own web interface. 


## Instantiating a Web Server object

To instantiate a web server object from the current database, just call the `WEB Server` command:

```4d
C_OBJECT(webServer)
	//call the current web server
webServer:=WEB Server  
	//equivalent to:
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


## Web Server object properties

A web server object contains the following properties. 

|Property|Type|Description|Possible values|init object|
|---|---|---|---|---|
|certificateFolder|text|Folder where the certificate files are located|-|x|
|characterSet|number|Character set that the 4D Web Server should use to communicate with browsers connecting to the database. The default value actually depends on the language of the OS.|  MIBEnum longint or Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets) supported by the 4D Web server: <li>4=ISO-8859-1</li><li>12=ISO-8859-9</li><li>13=ISO-8859-10</li><li>17=Shift-JIS</li><li>2024=Windows-31J</li><li>2026=Big5</li><li>38=euc-kr</li><li>106=UTF-8</li><li>2250=Windows-1250</li><li>2251=Windows-1251</li><li>2253=Windows-1253</li><li>2255=Windows-1255</li><li>2256=Windows-1256|x|
|cipherSuite|text|Cipher list used for the secure protocol. Sets the priority of ciphering algorithms implemented by the web server. See |Sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.|x|



