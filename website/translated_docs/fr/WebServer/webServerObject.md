---
id: webServerObject
title: Objet Serveur Web
---

## Aperçu

A 4D project can start and monitor a web server for the main (host) database as well as each hosted component.

For example, if you installed two components in your main database, you can start and monitor up to three independant web servers from your application:

- one web server for the host database,
- one web server for the component #1,
- one web server for the component #2.

Other than memory, there is no limit to the number of components and thus, of web servers, that can be attached to a single 4D database project.

Each 4D web server, including the main database's web server, is exposed as a specific **object**. Once instantiated, a web server object can be handled from the current database or from any component.

> The legacy [WEB commands](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) of the 4D language are supported but cannot control the web server to which they apply (see below).

Each web server (host database or component) can be used in its own separate context, including:
- `On Web Authentication` and `On Web Connection` database method calls
- 4D tags processing and method calls,
- managing web sessions and TLS protocols.

This feature allows you to develop independant components and features that come with their own web interfaces.


## Instancier un objet serveur web

The web server object of the host database (default web server) is automatically loaded by 4D at startup. Thus, if you write in a newly created database:

```4d
$nbSrv:=WEB Server list.length   
//$nbSrv value is 1
```

To instantiate a web server object, call the `WEB Server` command:

```4d
C_OBJECT(webServer)
    //call the web server from the current context
webServer:=WEB Server  
    //equivalent to
webServer:=WEB Server(Web server database)
```

If the database uses components and you want to call:
- the host database's web server from a component or
- the server that received the request (whatever the server),

you can also use:

```4d
C_OBJECT(webServer)  
    //call the host web server from a component  
webServer:=WEB Server(Web server host database)  
    //call the target web server
webServer:=WEB Server(Web server receiving request)  
```


## Méthodes du serveur web

Un objet serveur Web contient les méthodes membres suivantes :

| Méthode   | Paramètres       | Valeur retournée | Description            |
| --------- | ---------------- | ---------------- | ---------------------- |
| `start()` | settings (objet) | status (object)  | Démarre le serveur web |
| `stop()`  | -                | -                | Stoppe le serveur web  |

Pour démarrer et arrêter un serveur Web, il suffit d'appeler les méthodes membres `start()` et `stop()` de l'objet serveur Web :

```4d
C_OBJECT($status)
    //pour démarrer un serveur web avec les paramètres par défaut
$status:=webServer.start()
    //pour démarrer un serveur web avec des paramètres personnalisés   
    //objet $settings contenant des propriétés du serveur web
webServer.start($settings)

    //pour stopper le serveur web
$status:=webServer.stop()
```


## Propriétés du serveur web

Un objet serveur Web contient les propriétés suivantes.

| Propriété                  | Type               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| certificateFolder          | Texte              | Dossier dans lequel les fichiers de certificat sont sauvegardés. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| characterSet               | Numérique ou texte | Jeu de caractères devant être utilisé par 4D Web Server pour communiquer avec les navigateurs connectés à la base. The default value actually depends on the language of the OS. Can be a MIBEnum longint or Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets) supported by the 4D Web Server: <li>4 = ISO-8859-1</li><li>12 = ISO-8859-9</li><li>13 = ISO-8859-10</li><li>17 = Shift-JIS</li><li>2024 = Windows-31J</li><li>2026 = Big5</li><li>38 = euc-kr</li><li>106 = UTF-8</li><li>2250 = Windows-1250</li><li>2251 = Windows-1251</li><li>2253 = Windows-1253</li><li>2255 = Windows-1255</li><li>2256 = Windows-1256                                                     |
| cipherSuite                | Texte              | Cipher list used for the secure protocol. Sets the priority of ciphering algorithms implemented by the web server. Can be a sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| debugLog                   | number             | Status of the HTTP request log file (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number). <li>0 = disabled</li><li>1 = enabled without body parts (body size is provided in this case)</li><li>3 = enabled with body parts in response only</li><li>5 = enabled with body parts in request only</li><li>7 = enabled with body parts in response and request</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| defaultHomepage            | Texte              | Name of the default home page or "" to not send the custom home page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HSTSEnabled                | boolean            | HTTP Strict Transport Security (HSTS) status. HSTS allows the Web server to declare that browsers should only interact with it via secure HTTPS connections. Browsers will record the HSTS information the first time they receive a response from the web server, then any future HTTP requests will automatically be transformed into HTTPS requests. The length of time this information is stored by the browser is specified with the `HSTSMaxAge` property. HSTS requires that HTTPS is enabled on the server. HTTP must also be enabled to allow initial client connections.                                                                                                                                                                    |
| HSTSMaxAge                 | number             | Maximum length of time (in seconds) that HSTS is active for each new client connection. This information is stored on the client side for the specified duration. <p><p>Default value: 63072000 (2 years)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| HTTPCompressionLevel       | number             | Compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies). This selector lets you optimize exchanges by either prioritizing speed of execution (less compression) or the amount of compression (less speed). <p><p>Possible values: <ul><li>1 to 9 (where 1 is the fastest compression and 9 the highest).</li><li> -1 = set a compromise between speed and rate of compression.</li></ul> Default = 1 (faster compression).                                                                                                                                                                                                                                                                                                                                                      |
| HTTPCompressionThreshold   | number             | Size threshold (bytes) for requests below which exchanges should not be compressed. This setting is useful in order to avoid losing machine time by compressing small exchanges. <p><p>Default compression threshold = 1024 bytes                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| HTTPEnabled                | boolean            | HTTP protocol state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| HTTPPort                   | number             | Listening IP port number for HTTP. <p><p>Default = 80                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| HTTPTrace                  | boolean            | HTTP TRACE activation. For security reasons, by default the Web server rejects HTTP TRACE requests with an error 405. When enabled, the web server replies to HTTP TRACE requests with the request line, header, and body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| HTTPSEnabled               | boolean            | HTTPS protocol state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HTTPSPort                  | number             | Listening IP port number for HTTPS. <p><p>Default = 443                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| inactiveProcessTimeout     | number             | Life duration (in minutes) of the inactive session processes. At the end of the timeout, the process is killed on the server, the `On Web Close Process` database method is called, then the session context is destroyed. <p><p>Default = 480 minutes                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| inactiveSessionTimeout     | number             | Life duration (in minutes) of inactive sessions (duration set in cookie). At the end of this period, the session cookie expires and is no longer sent by the HTTP client. <p><p>Default = 480 minutes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| IPAddressToListen          | Texte              | IP address on which the 4D Web Server will receive HTTP requests. Both IPv6 string formats and IPv4 string formats are supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| *isRunning*                | boolean            | Web server running state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| keepSession                | boolean            | Session management enabling status <p><p>Default = true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| logRecording               | number             | Log requests (logweb.txt) recording value. <li>0 = Do not record (default)</li><li>1 = Record in CLF format</li><li>2 = Record in DLF format</li><li>3 = Record in ELF format</li><li>4 = Record in WLF format</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| maxConcurrentProcesses     | number             | Maximum number of concurrent web processes supported by the web server. When this number (minus one) is reached, 4D will not create any other processes and returns the HTTP status 503 - Service Unavailable to all new requests. <p><p>Possible values: 10 - 32000 <p><p>Default = 100                                                                                                                                                                                                                                                                                                                                                                   |
| maxRequestSize             | number             | Maximum size (in bytes) of incoming HTTP requests (POST) that the Web server is allowed to process. Passing the maximum value (2147483648) means that, in practice, no limit is set. This limit is used to avoid web server saturation due to incoming requests that are too large. If a request reaches this limit, the web server rejects it. <p><p>Possible values: 500000 - 2147483648                                                                                                                                                                                                                                                                                                             |
| maxSessions                | number             | Maximum number of simultaneous sessions. When you reach the limit, the oldest session is closed (and `On Web Close Process` database method is called) if the web server needs to create a new one. The number of simultaneous sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)                                                                                                                                                                                                                                                                                                                                                                                                            |
| minTLSVersion              | number             | Minimum TLS version accepted for connections. Connection attempts from clients supporting only versions below the minimum will be rejected. <p><p>Possible values:<li>1 = `TLSv1_0`</li><li>2 = `TLSv1_1`</li><li>3 = `TLSv1_2` (default)</li><p><p>If modified, the server must be restarted to use the new value.                                                                                                                                                                                                                                                                                                                                  |
| *name*                     | Texte              | Name of the web server database                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| *openSSLVersion*           | Texte              | Version of the OpenSSL library used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| *perfectForwardSecrecy*    | boolean            | PFS availability on the server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| rootFolder                 | Texte              | Path of web server root folder. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sessionCookieDomain        | Texte              | "domain" field of the session cookie. Used to control the scope of the session cookies. If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sessionCookieName          | Texte              | Name of the cookie used for storing the session ID. <p><p>Default = "4DSID"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| sessionCookiePath          | Texte              | "path" field of the session cookie. Used to control the scope of the session cookies. If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sessionIPAddressValidation | boolean            | IP address validation for session cookies. For security reasons, by default the web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. For example when mobile devices switch between Wifi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change. <p><p>Note: this setting lowers the security level of your application |

These properties are defined:

1. using the `settings` parameter of the `webServer.start( )` method (except for read-only properties, see below),
2. if not used, using the `WEB SET OPTION` command (host databases only),
3. if not used, in the database settings of the host database or the component.

- If the web server is not started, the properties contain the values that will be used at the next web server startup.
- If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the `settings` parameter of the `webServer.start()` method.

> *isRunning*, *name*, *openSSLVersion*, and *perfectForwardSecrecy* are read-only properties that cannot be predefined in the `settings` object parameter for the `start()` method.


## Portée des commandes 4D Web

The 4D Language contains [several commands](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) that can be used to control the web server. However, these commands are designed to work with a single (default) web server. When using these commands in the context of web server objects, make sure their scope is appropriate.

| Commande                        | Portée                               |
| ------------------------------- | ------------------------------------ |
| `SET DATABASE PARAMETER`        | Host database web server             |
| `WEB CLOSE SESSION`             | Web server that received the request |
| `WEB GET BODY PART`             | Web server that received the request |
| `WEB Get body part count`       | Web server that received the request |
| `WEB Get Current Session ID`    | Web server that received the request |
| `WEB GET HTTP BODY`             | Web server that received the request |
| `WEB GET HTTP HEADER`           | Web server that received the request |
| `WEB GET OPTION`                | Host database web server             |
| `WEB Get server info`           | Host database web server             |
| `WEB GET SESSION EXPIRATION`    | Web server that received the request |
| `WEB Get session process count` | Web server that received the request |
| `WEB GET STATISTICS`            | Host database web server             |
| `WEB GET VARIABLES`             | Web server that received the request |
| `WEB Is secured connection`     | Web server that received the request |
| `WEB Is server running`         | Host database web server             |
| `WEB SEND BLOB`                 | Web server that received the request |
| `WEB SEND FILE`                 | Web server that received the request |
| `WEB SEND HTTP REDIRECT`        | Web server that received the request |
| `WEB SEND RAW DATA`             | Web server that received the request |
| `WEB SEND TEXT`                 | Web server that received the request |
| `WEB SET HOME PAGE`             | Host database web server             |
| `WEB SET HTTP HEADER`           | Web server that received the request |
| `WEB SET OPTION`                | Host database web server             |
| `WEB SET ROOT FOLDER`           | Host database web server             |
| `WEB START SERVER`              | Host database web server             |
| `WEB STOP SERVER`               | Host database web server             |
| `WEB Validate digest`           | Web server that received the request |
