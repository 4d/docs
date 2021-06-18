---
id: webServerClass
title: WebServer
---


The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). Cette classe est disponible depuis le "class store" de `4D`.



### Objet Serveur Web

Web server objects are instantiated with the [`WEB Server`](#web-server) command.

They provide the following properties and functions:


### Sommaire
|                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #webServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.accessKeyDefined.Summary -->|
| [<!-- INCLUDE #webServerClass.certificateFolder.Syntax -->](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #webServerClass.characterSet.Syntax -->](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #webServerClass.cipherSuite.Syntax -->](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #webServerClass.CORSEnabled.Syntax -->](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #webServerClass.CORSSettings.Syntax -->](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #webServerClass.debugLog.Syntax -->](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #webServerClass.defaultHomepage.Syntax -->](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #webServerClass.HSTSEnabled.Syntax -->](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #webServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HSTSMaxAge.Summary -->|
|[<!-- INCLUDE #webServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPCompressionLevel.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPCompressionThreshold.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPEnabled.Syntax -->](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPEnabled.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPPort.Syntax -->](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPPort.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPTrace.Syntax -->](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPTrace.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPSEnabled.Summary -->| |[<!-- INCLUDE #webServerClass.HTTPSPort.Syntax -->](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPSPort.Summary -->| |[<!-- INCLUDE #webServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.inactiveProcessTimeout.Summary -->| |[<!-- INCLUDE #webServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.inactiveSessionTimeout.Summary -->| |[<!-- INCLUDE #webServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.IPAddressToListen.Summary -->| |[<!-- INCLUDE #webServerClass.isRunning.Syntax -->](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.isRunning.Summary -->| |[<!-- INCLUDE #webServerClass.keepSession.Syntax -->](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.keepSession.Summary -->| |[<!-- INCLUDE #webServerClass.logRecording.Syntax -->](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.logRecording.Summary -->| |[<!-- INCLUDE #webServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxConcurrentProcesses.Summary -->| |[<!-- INCLUDE #webServerClass.maxRequestSize.Syntax -->](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxRequestSize.Summary -->| |[<!-- INCLUDE #webServerClass.maxSessions.Syntax -->](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxSessions.Summary -->| |[<!-- INCLUDE #webServerClass.minTLSVersion.Syntax -->](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.minTLSVersion.Summary -->| |[<!-- INCLUDE #webServerClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.name.Summary -->| |[<!-- INCLUDE #webServerClass.openSSLVersion.Syntax -->](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.openSSLVersion.Summary -->| |[<!-- INCLUDE #webServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.perfectForwardSecrecy.Summary -->| |[<!-- INCLUDE #webServerClass.rootFolder.Syntax -->](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.rootFolder.Summary -->| |[<!-- INCLUDE #webServerClass.scalableSession.Syntax -->](#scalableSession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.scalableSession.Summary -->| [<!-- INCLUDE #webServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookieDomain.Summary -->| |[<!-- INCLUDE #webServerClass.sessionCookieName.Syntax -->](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookieName.Summary -->| |[<!-- INCLUDE #webServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookiePath.Summary -->| |[<!-- INCLUDE #webServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionIPAddressValidation.Summary -->| |[<!-- INCLUDE #webServerClass.start().Syntax -->](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.start().Summary -->| |[<!-- INCLUDE #webServerClass.stop().Syntax -->](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.stop().Summary -->|



## WEB Server

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

<!-- REF #_command_.WEB Server.Syntax -->
**WEB Server** : 4D.WebServer<br>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->


<!-- REF #_command_.WEB Server.Params -->

| Paramètres | Type         |    | Description                                                    |
| ---------- | ------------ | -- | -------------------------------------------------------------- |
| option     | Entier long  | -> | Web server to get (default if omitted = `Web server database`) |
| Résultat   | 4D.WebServer | <- | Web server object                                              |

<!-- END REF -->

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the *option* parameter<!-- END REF -->.

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

<!-- REF #_command_.WEB Server list.Syntax -->
**WEB Server list** : Collection<!-- END REF -->


<!-- REF #_command_.WEB Server list.Params -->

| Paramètres | Type       |    | Description                                    |
| ---------- | ---------- | -- | ---------------------------------------------- |
| Résultat   | Collection | <- | Collection of the available Web server objects |

<!-- END REF -->

The `WEB Server list` command <!-- REF #_command_.WEB Server list.Summary -->returns a collection of all Web server objects available in the 4D application<!-- END REF -->.

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


<!-- REF #webServerClass.accessKeyDefined.Syntax -->
**.accessKeyDefined** : Boolean<!-- END REF -->


The **.accessKeyDefined** property contains <!-- REF #webServerClass.accessKeyDefined.Summary -->true if an access key is defined in the settings of the web server<!-- END REF -->. This property is used by the WebAdmin web server to validate the security configuration of the administration interface.


<!-- REF webServerClass.certificateFolder.Desc -->

## .certificateFolder


<!-- REF #webServerClass.certificateFolder.Syntax -->
**.certificateFolder** : Text<!-- END REF -->


Path of the <!-- REF #webServerClass.certificateFolder.Summary -->folder where the certificate files are located<!-- END REF -->. Format POSIX du chemin d'accès complet à l'aide de filesystem. When using this property in the `settings` parameter of the [`.start()`](#start) function, it can be a [`Folder` object](folderClass.md).

<!-- END REF -->


<!-- REF webServerClass.characterSet.Desc -->

## .characterSet


<!-- REF #webServerClass.characterSet.Syntax -->
**.characterSet** : Number<br>**.characterSet** : Text<!-- END REF -->


The <!-- REF #webServerClass.characterSet.Summary -->character set that the 4D Web Server should use to communicate with browsers connecting to the application<!-- END REF -->. La valeur par défaut dépend de la langue du système d'exploitation. Can be a MIBEnum integer or a Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Here is the list of identifiers corresponding to the character sets supported by the 4D Web Server:

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

<!-- END REF -->


<!-- REF webServerClass.cipherSuite.Desc -->

## .cipherSuite


<!-- REF #webServerClass.cipherSuite.Syntax -->
**.cipherSuite** : Text<!-- END REF -->


The <!-- REF #webServerClass.cipherSuite.Summary -->cipher list used for the secure protocol<!-- END REF -->. Sets the priority of ciphering algorithms implemented by the 4D web server. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). Voir la [page des chiffrements](https://www.openssl.org/docs/manmaster/man1/ciphers.html) sur le site OpenSSL.

<!-- END REF -->



<!-- REF webServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #webServerClass.CORSEnabled.Syntax -->
**.CORSEnabled** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.CORSEnabled.Summary -->CORS (*Cross-origin resource sharing*) service status for the web server<!-- END REF -->. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Lorsqu'il est activé (True), les appels XHR (par exemple les requêtes REST) à partir de pages Web hors du domaine peuvent être autorisés dans votre application (vous devez définir la liste des adresses autorisées dans la liste des domaines CORS, voir `CORSSettings` ci-dessous). Lorsqu'il est désactivé (False, par défaut), toutes les requêtes entre sites (cross site) envoyées avec CORS sont ignorées.

Par défaut : False (désactivé)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

<!-- END REF -->


<!-- REF webServerClass.CORSSettings.Desc -->

## .CORSSettings


<!-- REF #webServerClass.CORSSettings.Syntax -->
**.CORSSettings** : Collection<!-- END REF -->


A <!-- REF #webServerClass.CORSSettings.Summary -->list of allowed hosts and methods for the CORS service<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:

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

<!-- END REF -->


<!-- REF webServerClass.debugLog.Desc -->

## .debugLog


<!-- REF #webServerClass.debugLog.Syntax -->
**.debugLog** : Number<!-- END REF -->


The <!-- REF #webServerClass.debugLog.Summary -->status of the HTTP request log file<!-- END REF --> (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number).

*   0 = désactivé
*   1 = activé sans les parties du corps (la taille du corps est fournie dans ce cas)
*   3 = activé avec les parties du corps en réponse uniquement
*   5 = activé avec des parties du corps sur requête uniquement
*   7 = activé avec des parties du corps en réponse et requête

<!-- END REF -->


<!-- REF webServerClass.defaultHomepage.Desc -->

## .defaultHomepage


<!-- REF #webServerClass.defaultHomepage.Syntax -->
**.defaultHomepage** : Text<!-- END REF -->


The <!-- REF #webServerClass.defaultHomepage.Summary -->name of the default home page<!-- END REF --> or "" to not send the custom home page.

<!-- END REF -->


<!-- REF webServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #webServerClass.HSTSEnabled.Syntax -->
**.HSTSEnabled** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS) status<!-- END REF -->. HSTS permet au serveur Web de déclarer que les navigateurs doivent interagir avec uniquement via des connexions HTTPS sécurisées. Les navigateurs enregistreront les informations HSTS la première fois qu'ils recevront une réponse du serveur Web, puis toutes les futures requêtes HTTP seront automatiquement transformées en requêtes HTTPS. La durée de stockage de ces informations par le navigateur est indiquée avec la propriété `HSTSMaxAge`. HSTS nécessite l'activation de HTTPS sur le serveur. HTTP doit également être activé pour permettre des connexions client initiales.

<!-- END REF -->


<!-- REF webServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<!-- REF #webServerClass.HSTSMaxAge.Syntax -->
**.HSTSMaxAge** : Number<!-- END REF -->


The <!-- REF #webServerClass.HSTSMaxAge.Summary -->maximum length of time (in seconds) that HSTS is active for each new client connection<!-- END REF -->. Ces informations sont stockées côté client pendant la durée spécifiée.

Default value: 63072000 (2 years).

<!-- END REF -->


<!-- REF webServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #webServerClass.HTTPCompressionLevel.Syntax -->
**.HTTPCompressionLevel** : Number<!-- END REF -->


The <!-- REF #webServerClass.HTTPCompressionLevel.Summary -->compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies)<!-- END REF -->. Ce sélecteur vous permet d'optimiser les échanges en priorisant soit la vitesse d'exécution (moins de compression), soit la quantité de compression (moins de vitesse).

Valeurs possibles :

*   1 à 9 (où 1 correspond à la compression la plus rapide et 9 la plus élevée).
*   -1 = définir un compromis entre la vitesse et le taux de compression.

Valeurs possibles :

<!-- END REF -->


<!-- REF webServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #webServerClass.HTTPCompressionThreshold.Syntax -->
**.HTTPCompressionThreshold** : Number<!-- END REF -->


The <!-- REF #webServerClass.HTTPCompressionThreshold.Summary -->size threshold (bytes) for requests below which exchanges should not be compressed<!-- END REF -->. Ce paramètre est utile pour éviter de perdre du temps machine en compressant les petits échanges.

Seuil de compression par défaut = 1024 octets

<!-- END REF -->


<!-- REF webServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled


<!-- REF #webServerClass.HTTPEnabled.Syntax -->
**.HTTPEnabled** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.HTTPEnabled.Summary -->HTTP protocol state<!-- END REF -->.

<!-- END REF -->



<!-- REF webServerClass.HTTPPort.Desc -->

## .HTTPPort


<!-- REF #webServerClass.HTTPPort.Syntax -->
**.HTTPPort** : Number<!-- END REF -->


The <!-- REF #webServerClass.HTTPPort.Summary -->listening IP port number for HTTP<!-- END REF -->.

Par défaut = 80

<!-- END REF -->


<!-- REF webServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #webServerClass.HTTPTrace.Syntax -->
**.HTTPTrace** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->


<!-- REF webServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled


<!-- REF #webServerClass.HTTPSEnabled.Syntax -->
**.HTTPSEnabled** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.HTTPSEnabled.Summary -->HTTPS protocol state<!-- END REF -->.

<!-- END REF -->


<!-- REF webServerClass.HTTPSPort.Desc -->

## .HTTPSPort


<!-- REF #webServerClass.HTTPSPort.Syntax -->
**.HTTPSPort** : Number<!-- END REF -->

The <!-- REF #webServerClass.HTTPSPort.Summary -->listening IP port number for HTTPS<!-- END REF -->.

Par défaut = 443

<!-- END REF -->


<!-- REF webServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #webServerClass.inactiveProcessTimeout.Syntax -->
**.inactiveProcessTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #webServerClass.inactiveProcessTimeout.Summary -->life duration (in minutes) of the inactive legacy session processes<!-- END REF -->. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Par défaut = 480 minutes

<!-- END REF -->


<!-- REF webServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #webServerClass.inactiveSessionTimeout.Syntax -->
**.inactiveSessionTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #webServerClass.inactiveSessionTimeout.Summary -->life duration (in minutes) of inactive legacy sessions (duration set in cookie)<!-- END REF -->. À la fin de cette période, le cookie de session expire et n'est plus envoyé par le client HTTP.

Par défaut = 480 minutes

<!-- END REF -->


<!-- REF webServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen


<!-- REF #webServerClass.IPAddressToListen.Syntax -->
**.IPAddressToListen** : Text<!-- END REF -->


The <!-- REF #webServerClass.IPAddressToListen.Summary -->IP address on which the 4D Web Server will receive HTTP requests<!-- END REF -->. By default, no specific address is defined. Les formats de chaîne IPv6 et IPv4 sont pris en charge.

<!-- END REF -->


<!-- REF webServerClass.isRunning.Desc -->


## .isRunning


<!-- REF #webServerClass.isRunning.Syntax -->
**.isRunning** : Boolean<!-- END REF -->


*Read-only property*

The <!-- REF #webServerClass.isRunning.Summary -->web server running state<!-- END REF -->.

<!-- END REF -->


<!-- REF webServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #webServerClass.keepSession.Syntax -->
**.keepSession** : Boolean<!-- END REF -->


<!-- REF #webServerClass.keepSession.Summary -->True if legacy sessions are enabled in the web server, False otherwise<!-- END REF -->.

##### See also:
[.scalableSession](#scalablesession)

<!-- END REF -->


<!-- REF webServerClass.logRecording.Desc -->

## .logRecording


<!-- REF #webServerClass.logRecording.Syntax -->
**.logRecording** : Number<!-- END REF -->


The <!-- REF #webServerClass.logRecording.Summary -->log requests (logweb.txt) recording value<!-- END REF -->.

*   0 = Ne pas enregistrer (par défaut)
*   1 = Enregistrer au format CLF
*   2 = Enregistrer au format DLF
*   3 = Enregistrer au format ELF
*   4 = Enregistrer au format WLF

<!-- END REF -->


<!-- REF webServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses


<!-- REF #webServerClass.maxConcurrentProcesses.Syntax -->
**.maxConcurrentProcesses** : Number<!-- END REF -->


The <!-- REF #webServerClass.maxConcurrentProcesses.Summary -->maximum number of concurrent web processes supported by the web server<!-- END REF -->. Lorsque ce nombre (moins un) est atteint, 4D ne crée aucun autre process et retourne le statut HTTP 503 - Service Unavailable to all new requests.

Valeurs possibles : 500000 - 2147483648

Valeurs possibles : 10 - 32000

<!-- END REF -->


<!-- REF webServerClass.maxRequestSize.Desc -->

## .maxRequestSize


<!-- REF #webServerClass.maxRequestSize.Syntax -->
**.maxRequestSize** : Number<!-- END REF -->


The <!-- REF #webServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passer la valeur maximale (2147483648) signifie qu'en pratique, aucune limite n'est définie. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses.

Valeurs possibles : 500000 - 2147483648

<!-- END REF -->


<!-- REF webServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #webServerClass.maxSessions.Syntax -->
**.maxSessions** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #webServerClass.maxSessions.Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)

<!-- END REF -->


<!-- REF webServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #webServerClass.minTLSVersion.Syntax -->
**.minTLSVersion** : Number<!-- END REF -->


The <!-- REF #webServerClass.minTLSVersion.Summary -->minimum TLS version accepted for connections<!-- END REF -->. Les tentatives de connexion de clients prenant en charge uniquement les versions inférieures au minimum seront rejetées.

Valeurs possibles :

*   1 = TLSv1_0
*   2 = TLSv1_1
*   3 = TLSv1_2 (default)

En cas de modification, le serveur doit être redémarré pour utiliser la nouvelle valeur.

<!-- END REF -->


<!-- REF webServerClass.name.Desc -->

## .name


<!-- REF #webServerClass.name.Syntax -->
**.name** : Text<!-- END REF -->


*Read-only property*

The <!-- REF #webServerClass.name.Summary -->name of the web server application<!-- END REF -->.

<!-- END REF -->



<!-- REF webServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #webServerClass.openSSLVersion.Syntax -->
**.openSSLVersion** : Text<!-- END REF -->


*Read-only property*

The <!-- REF #webServerClass.openSSLVersion.Summary -->version of the OpenSSL library used<!-- END REF -->.

<!-- END REF -->


<!-- REF webServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy


<!-- REF #webServerClass.perfectForwardSecrecy.Syntax -->
**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*Read-only property*

The <!-- REF #webServerClass.perfectForwardSecrecy.Summary -->PFS availability on the server<!-- END REF -->.

<!-- END REF -->


<!-- REF webServerClass.rootFolder.Desc -->
## .rootFolder


<!-- REF #webServerClass.rootFolder.Syntax -->
**.rootFolder** : Text<!-- END REF -->


The <!-- REF #webServerClass.rootFolder.Summary -->path of web server root folder<!-- END REF -->. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.

<!-- END REF -->

<!-- REF webServerClass.scalableSession.Desc -->
## .scalableSession


<!-- REF #webServerClass.scalableSession.Syntax -->
**.scalableSession** : Boolean<!-- END REF -->


<!-- REF #webServerClass.scalableSession.Summary -->True if scalable sessions are used in the web server, and False otherwise<!-- END REF -->.

##### See also:
[.keepSession](#keepsession)
<!-- END REF -->

<!-- REF webServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain


<!-- REF #webServerClass.sessionCookieDomain.Syntax -->
**.sessionCookieDomain** : Text<!-- END REF -->


The <!-- REF #webServerClass.sessionCookieDomain.Summary -->"domain" field of the session cookie<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/*.4d.fr" pour ce sélecteur, le client enverra un cookie uniquement lorsque la requête est adressée au domaine ".4d.fr", ce qui exclut les serveurs hébergeant des données statiques externes.

<!-- END REF -->


<!-- REF webServerClass.sessionCookieName.Desc -->

## .sessionCookieName


<!-- REF #webServerClass.sessionCookieName.Syntax -->
**.sessionCookieName** : Text<!-- END REF -->


The <!-- REF #webServerClass.sessionCookieName.Summary -->name of the cookie used for storing the session ID<!-- END REF -->.

*Read-only property*

<!-- END REF -->


<!-- REF webServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath


<!-- REF #webServerClass.sessionCookiePath.Syntax -->
**.sessionCookiePath** : Text<!-- END REF -->


The <!-- REF #webServerClass.sessionCookiePath.Summary -->"path" field of the session cookie<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/4DACTION" pour ce sélecteur, le client enverra un cookie uniquement pour les requêtes dynamiques commençant par 4DACTION, et non pour les images, les pages statiques, etc.

<!-- END REF -->


<!-- REF webServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation


<!-- REF #webServerClass.sessionIPAddressValidation.Syntax -->
**.sessionIPAddressValidation** : Boolean<!-- END REF -->


The <!-- REF #webServerClass.sessionIPAddressValidation.Summary -->IP address validation for session cookies<!-- END REF -->. Pour des raisons de sécurité, le serveur Web vérifie par défaut l'adresse IP de chaque requête contenant un cookie de session et la rejette si cette adresse ne correspond pas à l'adresse IP utilisée pour créer le cookie. Dans certaines applications spécifiques, vous souhaiterez peut-être désactiver cette validation et accepter les cookies de session, même lorsque leurs adresses IP ne correspondent pas. For example when mobile devices switch between WiFi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change (this setting lowers the security level of your application).

<!-- END REF -->


<!-- REF webServerClass.start().Desc -->

## .start()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

<!-- REF #webServerClass.start().Syntax -->
**.start**() : Object<br>**.start**( *settings* : Object ) : Object<!-- END REF -->



<!-- REF #webServerClass.start().Params -->

| Paramètres | Type  |    | Description                           |
| ---------- | ----- | -- | ------------------------------------- |
| settings   | Objet | -> | Web server settings to set at startup |
| Résultat   | Objet | <- | Status of the web server startup      |

<!-- END REF -->

The `.start()` function <!-- REF #webServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional *settings* object parameter.

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

<!-- END REF -->


<!-- REF webServerClass.stop().Desc -->

## .stop()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

<!-- REF #webServerClass.stop().Syntax -->
**.stop()** <!-- END REF -->

<!-- REF #webServerClass.stop().Params -->

| Paramètres | Type |  | Description                     |
| ---------- | ---- |  | ------------------------------- |
|            |      |  | Does not require any parameters |

 <!-- END REF -->

The `.stop()` function <!-- REF #webServerClass.stop().Summary -->stops the web server on which it is applied<!-- END REF -->.

If the web server was started, all web connections and web processes are closed, once the currently handled requests are finished. If the web server was not started, the method does nothing.
> This function resets the customized web settings defined for the session using the *settings* parameter of the [`.start()`](#start) function, if any.


#### Exemple

To stop the database Web server:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
