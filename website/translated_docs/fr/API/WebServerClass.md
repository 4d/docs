---
id: WebServerClass
title: WebServer
---


The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). Cette classe est disponible depuis le "class store" de `4D`.



### Objet Serveur Web

Web server objects are instantiated with the [`WEB Server`](#web-server) command.

They provide the following properties and functions:


### Sommaire
|                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.accessKeyDefined** : Boolean](#accesskeydefined)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if an access key is defined in the settings of the web server                                                                  |
| [**.certificateFolder** : Text](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;folder where the certificate files are located                                                                                       |
| [**.characterSet** : Number<br>**.characterSet** : Text](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;character set that the 4D Web Server should use to communicate with browsers connecting to the application |
| [**.cipherSuite** : Text](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;cipher list used for the secure protocol                                                                                                         |
| [**.CORSEnabled** : Boolean](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;CORS (*Cross-origin resource sharing*) service status for the web server                                                                      |
| [**.CORSSettings** : Collection](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;list of allowed hosts and methods for the CORS service                                                                                   |
| [**.debugLog** : Number](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;status of the HTTP request log file                                                                                                                  |
| [**.defaultHomepage** : Text](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;name of the default home page                                                                                                            |
| [**.HSTSEnabled** : Boolean](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTP Strict Transport Security (HSTS) status                                                                                                  |
| [**.HSTSMaxAge** : Number](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;maximum length of time (in seconds) that HSTS is active for each new client connection                                                           |
| [**.HTTPCompressionLevel** : Number](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies)               |
| [**.HTTPCompressionThreshold** : Number](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;size threshold (bytes) for requests below which exchanges should not be compressed                                   |
| [**.HTTPEnabled** : Boolean](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTP protocol state                                                                                                                           |
| [**.HTTPPort** : Number](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;listening IP port number for HTTP                                                                                                                    |
| [**.HTTPTrace** : Boolean](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;activation of `HTTP TRACE`                                                                                                                        |
| [**.HTTPSEnabled** : Boolean](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTPS protocol state                                                                                                                        |
| [**.HTTPSPort** : Number](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;listening IP port number for HTTPS                                                                                                                 |
| [**.inactiveProcessTimeout** : Number](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;life duration (in minutes) of the inactive legacy session processes                                                      |
| [**.inactiveSessionTimeout** : Number](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;life duration (in minutes) of inactive legacy sessions (duration set in cookie)                                          |
| [**.IPAddressToListen** : Text](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;IP address on which the 4D Web Server will receive HTTP requests                                                                     |
| [**.isRunning** : Boolean](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;web server running state                                                                                                                          |
| [**.keepSession** : Boolean](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;True if legacy sessions are enabled in the web server, False otherwise                                                                        |
| [**.logRecording** : Number](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;log requests (logweb.txt) recording value                                                                                                    |
| [**.maxConcurrentProcesses** : Number](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;maximum number of concurrent web processes supported by the web server                                                   |
| [**.maxRequestSize** : Number](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process                                       |
| [**.maxSessions** : Number](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;maximum number of simultaneous legacy sessions                                                                                                 |
| [**.minTLSVersion** : Number](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;minimum TLS version accepted for connections                                                                                               |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;name of the web server application                                                                                                                             |
| [**.openSSLVersion** : Text](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;version of the OpenSSL library used                                                                                                        |
| [**.perfectForwardSecrecy** : Boolean](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;PFS availability on the server                                                                                            |
| [**.rootFolder** : Text](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;path of web server root folder                                                                                                                     |
| [**.scalableSession** : Boolean](#scalablesession)<p>&nbsp;&nbsp;&nbsp;&nbsp;True if scalable sessions are used in the web server, and False otherwise                                                             |


[**.sessionCookieDomain** : Text](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;"domain" field of the session cookie| |[**.sessionCookieName** : Text](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;name of the cookie used for storing the session ID| |[**.sessionCookiePath** : Text](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;"path" field of the session cookie| |[**.sessionCookieSameSite** : Text](#sessioncookiesamesite)<p>&nbsp;&nbsp;&nbsp;&nbsp;"SameSite" session cookie value| |[**.sessionIPAddressValidation** : Boolean](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;IP address validation for session cookies| |[ **.start**() : Object<br>**.start**( *settings* : Object ) : Object](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;starts the web server on which it is applied| |[**.stop()** ](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;stops the web server on which it is applied|



## WEB Server

<details><summary>Historique</summary>
| Version | Modifications                      |
| ------- | ---------------------------------- |
| v18 R3  | Ajoutées                           |
| v19     | support for .sessionCookieSameSite |

</details>

**WEB Server** : 4D.WebServer<br>**WEB Server**( *option* : Integer ) : 4D.WebServer


| Paramètres | Type         |    | Description                                                    |
| ---------- | ------------ | -- | -------------------------------------------------------------- |
| option     | Integer      | -> | Web server to get (default if omitted = `Web server database`) |
| Résultat   | 4D.WebServer | <- | Web server object                                              |


The `WEB Server` command returns the default Web server object, or the Web server object defined through the *option* parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

| Constant                       | Valeur | Commentaire                                              |
| ------------------------------ | ------ | -------------------------------------------------------- |
| `Web server database`          | 1      | Current database Web server (default if omitted)         |
| `Web server host database`     | 2      | Web server of the host database of a component           |
| `Web server receiving request` | 3      | Web server that received the request (target Web server) |

The returned Web server object contains the current values of the Web server properties.

#### Exemple

From your component, you want to know if the Web server of the host database is started:

```4d
  // Method of a component
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

**WEB Server list** : Collection


| Paramètres | Type       |    | Description                                    |
| ---------- | ---------- | -- | ---------------------------------------------- |
| Résultat   | Collection | <- | Collection of the available Web server objects |


The `WEB Server list` command returns a collection of all Web server objects available in the 4D application.

A 4D application can contain anywhere from one to several Web servers:

- one Web server for the host database (default Web server)
- one Web server for each component.

All available Web servers are returned by the `WEB Server list` command, whether they are actually running or not.

> The default Web server object is automatically loaded by 4D at startup. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](#web-server) command.

You can use the [.name](#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.


#### Exemple

We want to know how many running web servers are available:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")

```




## .accessKeyDefined


**.accessKeyDefined** : Boolean

The **.accessKeyDefined** property contains true if an access key is defined in the settings of the web server. This property is used by the WebAdmin web server to validate the security configuration of the administration interface.



## .certificateFolder



**.certificateFolder** : Text

Path of the folder where the certificate files are located. Format POSIX du chemin d'accès complet à l'aide de filesystem. When using this property in the `settings` parameter of the [`.start()`](#start) function, it can be a [`Folder` object](FolderClass.md).




## .characterSet


**.characterSet** : Number<br>**.characterSet** : Text

The character set that the 4D Web Server should use to communicate with browsers connecting to the application. La valeur par défaut dépend de la langue du système d'exploitation. Can be a MIBEnum integer or a Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Here is the list of identifiers corresponding to the character sets supported by the 4D Web Server:

*   4 = ISO-8859-1
*   12 = ISO-8859-9
*   13 = ISO-8859-10
*   17 = Shift-JIS
*   2024 = Windows-31J
*   2026 = Big5
*   38 = euc-kr
*   106 = UTF-8
*   2250 = Windows-1250
*   2251 = Windows-1251
*   2253 = Windows-1253
*   2255 = Windows-1255
*   2256 = Windows-1256




## .cipherSuite


**.cipherSuite** : Text

The cipher list used for the secure protocol. Sets the priority of ciphering algorithms implemented by the 4D web server. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). Voir la [page des chiffrements](https://www.openssl.org/docs/manmaster/man1/ciphers.html) sur le site OpenSSL.





## .CORSEnabled

**.CORSEnabled** : Boolean

The CORS (*Cross-origin resource sharing*) service status for the web server. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Lorsqu'il est activé (True), les appels XHR (par exemple les requêtes REST) à partir de pages Web hors du domaine peuvent être autorisés dans votre application (vous devez définir la liste des adresses autorisées dans la liste des domaines CORS, voir `CORSSettings` ci-dessous). Lorsqu'il est désactivé (False, par défaut), toutes les requêtes entre sites (cross site) envoyées avec CORS sont ignorées.

Par défaut : False (désactivé)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.




## .CORSSettings


**.CORSSettings** : Collection

A list of allowed hosts and methods for the CORS service (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:

*   **host** (texte, obligatoire) : nom de domaine ou adresse IP à partir duquel les pages externes sont autorisées à envoyer des requêtes de données au serveur via CORS. Plusieurs attributs de domaine peuvent être ajoutés pour créer une liste blanche. Si *host* n'est pas présent ou vide, l'objet est ignoré. Several syntaxes are supported:
    -   192.168.5.17:8081
    -   192.168.5.17
    -   192.168.*
    -   192.168.*:8081
    -   http://192.168.5.17:8081
    -   http://*.myDomain.com
    -   http://myProject.myDomain.com
    -   *.myDomain.com
    -   myProject.myDomain.com
    -   \*

*   **methods** (texte, facultatif) : méthode(s) HTTP acceptée(s) pour l'hôte CORS correspondant. Séparez chaque méthode par un ";" (ex : "post;get"). Si *methods* est vide, null ou non défini, toutes les méthodes sont activées.




## .debugLog


**.debugLog** : Number

The status of the HTTP request log file (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number).

*   0 = désactivé
*   1 = activé sans les parties du corps (la taille du corps est fournie dans ce cas)
*   3 = activé avec les parties du corps en réponse uniquement
*   5 = activé avec des parties du corps sur requête uniquement
*   7 = activé avec des parties du corps en réponse et requête




## .defaultHomepage


**.defaultHomepage** : Text

The name of the default home page or "" to not send the custom home page.




## .HSTSEnabled

**.HSTSEnabled** : Boolean

The HTTP Strict Transport Security (HSTS) status. HSTS permet au serveur Web de déclarer que les navigateurs doivent interagir avec uniquement via des connexions HTTPS sécurisées. Les navigateurs enregistreront les informations HSTS la première fois qu'ils recevront une réponse du serveur Web, puis toutes les futures requêtes HTTP seront automatiquement transformées en requêtes HTTPS. La durée de stockage de ces informations par le navigateur est indiquée avec la propriété `HSTSMaxAge`. HSTS nécessite l'activation de HTTPS sur le serveur. HTTP doit également être activé pour permettre des connexions client initiales.




## .HSTSMaxAge

**.HSTSMaxAge** : Number

The maximum length of time (in seconds) that HSTS is active for each new client connection. Ces informations sont stockées côté client pendant la durée spécifiée.

Default value: 63072000 (2 years).




## .HTTPCompressionLevel

**.HTTPCompressionLevel** : Number

The compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies). Ce sélecteur vous permet d'optimiser les échanges en priorisant soit la vitesse d'exécution (moins de compression), soit la quantité de compression (moins de vitesse).

Valeurs possibles :

*   1 à 9 (où 1 correspond à la compression la plus rapide et 9 la plus élevée).
*   -1 = définir un compromis entre la vitesse et le taux de compression.

Valeurs possibles :




## .HTTPCompressionThreshold

**.HTTPCompressionThreshold** : Number

The size threshold (bytes) for requests below which exchanges should not be compressed. Ce paramètre est utile pour éviter de perdre du temps machine en compressant les petits échanges.

Seuil de compression par défaut = 1024 octets




## .HTTPEnabled


**.HTTPEnabled** : Boolean

The HTTP protocol state.





## .HTTPPort


**.HTTPPort** : Number

The listening IP port number for HTTP.

Par défaut = 80




## .HTTPTrace

**.HTTPTrace** : Boolean

The activation of `HTTP TRACE`. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.




## .HTTPSEnabled


**.HTTPSEnabled** : Boolean The HTTPS protocol state.




## .HTTPSPort


**.HTTPSPort** : Number The listening IP port number for HTTPS.

Par défaut = 443




## .inactiveProcessTimeout

**.inactiveProcessTimeout** : Number
> This property is not returned in [scalable sessions mode](#scalablesession).

The life duration (in minutes) of the inactive legacy session processes. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Par défaut = 480 minutes




## .inactiveSessionTimeout

**.inactiveSessionTimeout** : Number
> This property is not returned in [scalable sessions mode](#scalablesession).

The life duration (in minutes) of inactive legacy sessions (duration set in cookie). À la fin de cette période, le cookie de session expire et n'est plus envoyé par le client HTTP.

Par défaut = 480 minutes




## .IPAddressToListen


**.IPAddressToListen** : Text

The IP address on which the 4D Web Server will receive HTTP requests. By default, no specific address is defined. Les formats de chaîne IPv6 et IPv4 sont pris en charge.





## .isRunning


**.isRunning** : Boolean

*Read-only property*

The web server running state.




## .keepSession

**.keepSession** : Boolean

True if legacy sessions are enabled in the web server, False otherwise.

##### See also:
[.scalableSession](#scalablesession)




## .logRecording


**.logRecording** : Number

The log requests (logweb.txt) recording value.

*   0 = Ne pas enregistrer (par défaut)
*   1 = Enregistrer au format CLF
*   2 = Enregistrer au format DLF
*   3 = Enregistrer au format ELF
*   4 = Enregistrer au format WLF




## .maxConcurrentProcesses


**.maxConcurrentProcesses** : Number

The maximum number of concurrent web processes supported by the web server. Lorsque ce nombre (moins un) est atteint, 4D ne crée aucun autre process et retourne le statut HTTP 503 - Service Unavailable to all new requests.

Valeurs possibles : 500000 - 2147483648

Valeurs possibles : 10 - 32000




## .maxRequestSize


**.maxRequestSize** : Number

The maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process. Passing the maximum value (2147483647) means that, in practice, no limit is set. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses.

Possible values: 500000 - 2147483647




## .maxSessions

**.maxSessions** : Number
> This property is not returned in [scalable sessions mode](#scalablesession).

The maximum number of simultaneous legacy sessions. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)




## .minTLSVersion

**.minTLSVersion** : Number

The minimum TLS version accepted for connections. Les tentatives de connexion de clients prenant en charge uniquement les versions inférieures au minimum seront rejetées.

Valeurs possibles :

*   1 = TLSv1_0
*   2 = TLSv1_1
*   3 = TLSv1_2 (default)
*   4 = TLSv1_3

En cas de modification, le serveur doit être redémarré pour utiliser la nouvelle valeur.




## .name


**.name** : Text

*Read-only property*

The name of the web server application.





## .openSSLVersion

**.openSSLVersion** : Text

*Read-only property*

The version of the OpenSSL library used.




## .perfectForwardSecrecy


**.perfectForwardSecrecy** : Boolean

*Read-only property*

The PFS availability on the server.



## .rootFolder


**.rootFolder** : Text

The path of web server root folder. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.


## .scalableSession


**.scalableSession** : Boolean

True if scalable sessions are used in the web server, and False otherwise.

##### See also:
[.keepSession](#keepsession)


## .sessionCookieDomain


**.sessionCookieDomain** : Text

The "domain" field of the session cookie. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/*.4d.fr" pour ce sélecteur, le client enverra un cookie uniquement lorsque la requête est adressée au domaine ".4d.fr", ce qui exclut les serveurs hébergeant des données statiques externes.




## .sessionCookieName


**.sessionCookieName** : Text

The name of the cookie used for storing the session ID.

*Read-only property*




## .sessionCookiePath


**.sessionCookiePath** : Text

The "path" field of the session cookie. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/4DACTION" pour ce sélecteur, le client enverra un cookie uniquement pour les requêtes dynamiques commençant par 4DACTION, et non pour les images, les pages statiques, etc.



## .sessionCookieSameSite

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajoutées      |
</details>

**.sessionCookieSameSite** : Text

The "SameSite" session cookie value. Possible values (using constants):

| Constant            | Valeur   | Description                                                                                                                         |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *Default value* - Cookies are only sent in a first-party context                                                                    |
| Web SameSite Lax    | "Lax"    | Cookies are also sent on cross-site subrequests but only when a user is navigating to the origin site (i.e. when following a link). |
| Web SameSite None   | "None"   | Cookies are sent in all contexts, i.e in responses to both first-party and cross-origin requests.                                   |

See the [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) description for detailed information.




## .sessionIPAddressValidation


**.sessionIPAddressValidation** : Boolean

The IP address validation for session cookies. Pour des raisons de sécurité, le serveur Web vérifie par défaut l'adresse IP de chaque requête contenant un cookie de session et la rejette si cette adresse ne correspond pas à l'adresse IP utilisée pour créer le cookie. Dans certaines applications spécifiques, vous souhaiterez peut-être désactiver cette validation et accepter les cookies de session, même lorsque leurs adresses IP ne correspondent pas. For example when mobile devices switch between WiFi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change (this setting lowers the security level of your application).




## .start()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>


**.start**() : Object<br>**.start**( *settings* : Object ) : Object



| Paramètres | Type   |    | Description                           |
| ---------- | ------ | -- | ------------------------------------- |
| settings   | Object | -> | Web server settings to set at startup |
| Résultat   | Object | <- | Status of the web server startup      |


The `.start()` function starts the web server on which it is applied, using properties set in the optional *settings* object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

Customized session settings will be reset when the [`.stop()`](#stop) function is called.


#### Returned object

The function returns an object describing the Web server launch status. This object can contain the following properties:

| Propriété |                         | Type       | Description                                                          |
| --------- | ----------------------- | ---------- | -------------------------------------------------------------------- |
| success   |                         | Booléen    | True if the web server was correctly started, False otherwise        |
| errors    |                         | Collection | 4D error stack (not returned if the web server started successfully) |
|           | \[].errCode            | Nombre     | 4D error code                                                        |
|           | \[].message            | Texte      | Description of the 4D error                                          |
|           | \[].componentSignature | Texte      | Signature of the internal component which returned the error         |
> If the Web server was already launched, an error is returned.

#### Exemple

```4d
 var $settings;$result : Object
 var $webServer : 4D.WebServer

 $settings:=New object("HTTPPort";8080;"defaultHomepage";"myAdminHomepage.html")

 $webServer:=WEB Server
 $result:=$webServer.start($settings)
 If($result.success)
  //...
 End if
```




## .stop()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

**.stop()**

| Paramètres | Type |  | Description                     |
| ---------- | ---- |  | ------------------------------- |
|            |      |  | Does not require any parameters |


The `.stop()` function stops the web server on which it is applied.

If the web server was started, all web connections and web processes are closed, once the currently handled requests are finished. If the web server was not started, the method does nothing.
> This function resets the customized web settings defined for the session using the *settings* parameter of the [`.start()`](#start) function, if any.


#### Exemple

To stop the database Web server:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```





<style> h2 { background: #d9ebff;}</style>
