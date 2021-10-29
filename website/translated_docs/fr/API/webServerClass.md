---
id: WebServerClass
title: WebServer
---


The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). Cette classe est disponible depuis le "class store" de `4D`.



### Objet Serveur Web

Les objets Web server sont installés à l'aide de la commande [`WEB Server`](#web-server).

Leurs propriétés et fonctions sont les suivantes :


### Sommaire
|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->|
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->|
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->|
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->|
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->|
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->|
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->|


[<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary -->| |[<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->| |[<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->|



## WEB Server

<details><summary>Historique</summary>
| Version | Modifications                      |
| ------- | ---------------------------------- |
| v18 R3  | Ajout                              |
| v19     | support for .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->
**WEB Server** : 4D.WebServer<br>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->


<!-- REF #_command_.WEB Server.Params -->

| Paramètres | Type         |    | Description                                                    |
| ---------- | ------------ | -- | -------------------------------------------------------------- |
| option     | Entier long  | -> | Web server to get (default if omitted = `Web server database`) |
| Résultat   | 4D.WebServer | <- | Objet Serveur Web                                              |

<!-- END REF -->

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the *option* parameter<!-- END REF -->.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

| Constant                       | Valeur | Commentaire                                              |
| ------------------------------ | ------ | -------------------------------------------------------- |
| `Web server database`          | 1      | Le serveur Web de la base courante (par défaut si omis)  |
| `Web server host database`     | 2      | Web server of the host database of a component           |
| `Web server receiving request` | 3      | Le serveur Web ayant reçu la requête (serveur Web cible) |

The returned Web server object contains the current values of the Web server properties.

#### Exemple

From your component, you want to know if the Web server of the host database is started:

```4d
  // Méthode d'un composant
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
| v18 R3  | Ajout         |
</details>

<!-- REF #_command_.WEB Server list.Syntax -->
**WEB Server list** : Collection<!-- END REF -->


<!-- REF #_command_.WEB Server list.Params -->

| Paramètres | Type       |    | Description                                  |
| ---------- | ---------- | -- | -------------------------------------------- |
| Résultat   | Collection | <- | Collection des objets Web server disponibles |

<!-- END REF -->

The `WEB Server list` command <!-- REF #_command_.WEB Server list.Summary -->returns a collection of all Web server objects available in the 4D application<!-- END REF -->.

A 4D application can contain anywhere from one to several Web servers:

- un serveur Web pour la base de données hôte (serveur Web par défaut)
- un serveur Web pour chaque composant.

All available Web servers are returned by the `WEB Server list` command, whether they are actually running or not.

> L'objet serveur Web par défaut est automatiquement chargé par 4D au démarrage. En revanche, chaque composant serveur Web que vous souhaitez utiliser doit être instancié à l'aide de la commande [`WEB Server`](#web-server).

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


<!-- REF #WebServerClass.accessKeyDefined.Syntax -->
**.accessKeyDefined** : Boolean<!-- END REF -->


The **.accessKeyDefined** property contains <!-- REF #WebServerClass.accessKeyDefined.Summary -->true if an access key is defined in the settings of the web server<!-- END REF -->. This property is used by the WebAdmin web server to validate the security configuration of the administration interface.


<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder



<!-- REF #WebServerClass.certificateFolder.Syntax -->
**.certificateFolder** : Text<!-- END REF -->


Path of the <!-- REF #WebServerClass.certificateFolder.Summary -->folder where the certificate files are located<!-- END REF -->. Format POSIX du chemin d'accès complet à l'aide de filesystem. When using this property in the `settings` parameter of the [`.start()`](#start) function, it can be a [`Folder` object](FolderClass.md).

<!-- END REF -->


<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet


<!-- REF #WebServerClass.characterSet.Syntax -->
**.characterSet** : Number<br>**.characterSet** : Text<!-- END REF -->


The <!-- REF #WebServerClass.characterSet.Summary -->character set that the 4D Web Server should use to communicate with browsers connecting to the application<!-- END REF -->. La valeur par défaut dépend de la langue du système d'exploitation. Can be a MIBEnum integer or a Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Here is the list of identifiers corresponding to the character sets supported by the 4D Web Server:

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


<!-- REF WebServerClass.cipherSuite.Desc -->

## .cipherSuite


<!-- REF #WebServerClass.cipherSuite.Syntax -->
**.cipherSuite** : Text<!-- END REF -->


The <!-- REF #WebServerClass.cipherSuite.Summary -->cipher list used for the secure protocol<!-- END REF -->. Sets the priority of ciphering algorithms implemented by the 4D web server. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). Voir la [page des chiffrements](https://www.openssl.org/docs/manmaster/man1/ciphers.html) sur le site OpenSSL.

<!-- END REF -->



<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->
**.CORSEnabled** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (*Cross-origin resource sharing*) service status for the web server<!-- END REF -->. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Lorsqu'il est activé (True), les appels XHR (par exemple les requêtes REST) à partir de pages Web hors du domaine peuvent être autorisés dans votre application (vous devez définir la liste des adresses autorisées dans la liste des domaines CORS, voir `CORSSettings` ci-dessous). Lorsqu'il est désactivé (False, par défaut), toutes les requêtes entre sites (cross site) envoyées avec CORS sont ignorées.

Par défaut : False (désactivé)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

<!-- END REF -->


<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings


<!-- REF #WebServerClass.CORSSettings.Syntax -->
**.CORSSettings** : Collection<!-- END REF -->


A <!-- REF #WebServerClass.CORSSettings.Summary -->list of allowed hosts and methods for the CORS service<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:

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


<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog


<!-- REF #WebServerClass.debugLog.Syntax -->
**.debugLog** : Number<!-- END REF -->


The <!-- REF #WebServerClass.debugLog.Summary -->status of the HTTP request log file<!-- END REF --> (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number).

*   0 = désactivé
*   1 = activé sans les parties du corps (la taille du corps est fournie dans ce cas)
*   3 = activé avec les parties du corps en réponse uniquement
*   5 = activé avec des parties du corps sur requête uniquement
*   7 = activé avec des parties du corps en réponse et requête

<!-- END REF -->


<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage


<!-- REF #WebServerClass.defaultHomepage.Syntax -->
**.defaultHomepage** : Text<!-- END REF -->


The <!-- REF #WebServerClass.defaultHomepage.Summary -->name of the default home page<!-- END REF --> or "" to not send the custom home page.

<!-- END REF -->


<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->
**.HSTSEnabled** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS) status<!-- END REF -->. HSTS permet au serveur Web de déclarer que les navigateurs doivent interagir avec uniquement via des connexions HTTPS sécurisées. Les navigateurs enregistreront les informations HSTS la première fois qu'ils recevront une réponse du serveur Web, puis toutes les futures requêtes HTTP seront automatiquement transformées en requêtes HTTPS. La durée de stockage de ces informations par le navigateur est indiquée avec la propriété `HSTSMaxAge`. HSTS nécessite l'activation de HTTPS sur le serveur. HTTP doit également être activé pour permettre des connexions client initiales.

<!-- END REF -->


<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->
**.HSTSMaxAge** : Number<!-- END REF -->


The <!-- REF #WebServerClass.HSTSMaxAge.Summary -->maximum length of time (in seconds) that HSTS is active for each new client connection<!-- END REF -->. Ces informations sont stockées côté client pendant la durée spécifiée.

Default value: 63072000 (2 years).

<!-- END REF -->


<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->
**.HTTPCompressionLevel** : Number<!-- END REF -->


The <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies)<!-- END REF -->. Ce sélecteur vous permet d'optimiser les échanges en priorisant soit la vitesse d'exécution (moins de compression), soit la quantité de compression (moins de vitesse).

Valeurs possibles :

*   1 à 9 (où 1 correspond à la compression la plus rapide et 9 la plus élevée).
*   -1 = définir un compromis entre la vitesse et le taux de compression.

Valeurs possibles :

<!-- END REF -->


<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->
**.HTTPCompressionThreshold** : Number<!-- END REF -->


The <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->size threshold (bytes) for requests below which exchanges should not be compressed<!-- END REF -->. Ce paramètre est utile pour éviter de perdre du temps machine en compressant les petits échanges.

Seuil de compression par défaut = 1024 octets

<!-- END REF -->


<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled


<!-- REF #WebServerClass.HTTPEnabled.Syntax -->
**.HTTPEnabled** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.HTTPEnabled.Summary -->HTTP protocol state<!-- END REF -->.

<!-- END REF -->



<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort


<!-- REF #WebServerClass.HTTPPort.Syntax -->
**.HTTPPort** : Number<!-- END REF -->


The <!-- REF #WebServerClass.HTTPPort.Summary -->listening IP port number for HTTP<!-- END REF -->.

Par défaut = 80

<!-- END REF -->


<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->
**.HTTPTrace** : Boolean<!-- END REF -->


The <!-- REF #WebServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->


<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled


<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->
**.HTTPSEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HTTPSEnabled.Summary -->HTTPS protocol state<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort


<!-- REF #WebServerClass.HTTPSPort.Syntax -->
**.HTTPSPort** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPSPort.Summary -->listening IP port number for HTTPS<!-- END REF -->.

Par défaut = 443

<!-- END REF -->


<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->
**.inactiveProcessTimeout** : Number<!-- END REF -->

> Cette propriété n'est pas retournée [en mode sessions évolutives](#scalablesession).

The <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->life duration (in minutes) of the inactive legacy session processes<!-- END REF -->. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Par défaut = 480 minutes

<!-- END REF -->


<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->
**.inactiveSessionTimeout** : Number<!-- END REF -->

> Cette propriété n'est pas retournée [en mode sessions évolutives](#scalablesession).

The <!-- REF #WebServerClass.inactiveSessionTimeout.Summary -->life duration (in minutes) of inactive legacy sessions (duration set in cookie)<!-- END REF -->. À la fin de cette période, le cookie de session expire et n'est plus envoyé par le client HTTP.

Par défaut = 480 minutes

<!-- END REF -->


<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen


<!-- REF #WebServerClass.IPAddressToListen.Syntax -->
**.IPAddressToListen** : Text<!-- END REF -->


The <!-- REF #WebServerClass.IPAddressToListen.Summary -->IP address on which the 4D Web Server will receive HTTP requests<!-- END REF -->. By default, no specific address is defined. Les formats de chaîne IPv6 et IPv4 sont pris en charge.

<!-- END REF -->


<!-- REF WebServerClass.isRunning.Desc -->


## .isRunning


<!-- REF #WebServerClass.isRunning.Syntax -->
**.isRunning** : Boolean<!-- END REF -->


*Read-only property*

The <!-- REF #WebServerClass.isRunning.Summary -->web server running state<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->
**.keepSession** : Boolean<!-- END REF -->


<!-- REF #WebServerClass.keepSession.Summary -->True if legacy sessions are enabled in the web server, False otherwise<!-- END REF -->.

##### See also:
[.scalableSession](#scalablesession)

<!-- END REF -->


<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording


<!-- REF #WebServerClass.logRecording.Syntax -->
**.logRecording** : Number<!-- END REF -->


The <!-- REF #WebServerClass.logRecording.Summary -->log requests (logweb.txt) recording value<!-- END REF -->.

*   0 = Ne pas enregistrer (par défaut)
*   1 = Enregistrer au format CLF
*   2 = Enregistrer au format DLF
*   3 = Enregistrer au format ELF
*   4 = Enregistrer au format WLF

<!-- END REF -->


<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses


<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->
**.maxConcurrentProcesses** : Number<!-- END REF -->


The <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->maximum number of concurrent web processes supported by the web server<!-- END REF -->. Lorsque ce nombre (moins un) est atteint, 4D ne crée aucun autre process et retourne le statut HTTP 503 - Service Unavailable to all new requests.

Valeurs possibles : 500000 - 2147483648

Valeurs possibles : 10 - 32000

<!-- END REF -->


<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize


<!-- REF #WebServerClass.maxRequestSize.Syntax -->
**.maxRequestSize** : Number<!-- END REF -->


The <!-- REF #WebServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passing the maximum value (2147483647) means that, in practice, no limit is set. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses.

Possible values: 500000 - 2147483647

<!-- END REF -->


<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->
**.maxSessions** : Number<!-- END REF -->

> Cette propriété n'est pas retournée [en mode sessions évolutives](#scalablesession).

The <!-- REF #WebServerClass.maxSessions.Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)

<!-- END REF -->


<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->
**.minTLSVersion** : Number<!-- END REF -->


The <!-- REF #WebServerClass.minTLSVersion.Summary -->minimum TLS version accepted for connections<!-- END REF -->. Les tentatives de connexion de clients prenant en charge uniquement les versions inférieures au minimum seront rejetées.

Valeurs possibles :

*   1 = TLSv1_0
*   2 = TLSv1_1
*   3 = TLSv1_2 (default)
*   4 = TLSv1_3

En cas de modification, le serveur doit être redémarré pour utiliser la nouvelle valeur.

<!-- END REF -->


<!-- REF WebServerClass.name.Desc -->

## .name


<!-- REF #WebServerClass.name.Syntax -->
**.name** : Text<!-- END REF -->


*Read-only property*

The <!-- REF #WebServerClass.name.Summary -->name of the web server application<!-- END REF -->.

<!-- END REF -->



<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->
**.openSSLVersion** : Text<!-- END REF -->


*Read-only property*

The <!-- REF #WebServerClass.openSSLVersion.Summary -->version of the OpenSSL library used<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy


<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->
**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*Read-only property*

The <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->PFS availability on the server<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.rootFolder.Desc -->
## .rootFolder


<!-- REF #WebServerClass.rootFolder.Syntax -->
**.rootFolder** : Text<!-- END REF -->


The <!-- REF #WebServerClass.rootFolder.Summary -->path of web server root folder<!-- END REF -->. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->
## .scalableSession


<!-- REF #WebServerClass.scalableSession.Syntax -->
**.scalableSession** : Boolean<!-- END REF -->


<!-- REF #WebServerClass.scalableSession.Summary -->True if scalable sessions are used in the web server, and False otherwise<!-- END REF -->.

##### See also:
[.keepSession](#keepsession)
<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain


<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->
**.sessionCookieDomain** : Text<!-- END REF -->


The <!-- REF #WebServerClass.sessionCookieDomain.Summary -->"domain" field of the session cookie<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/*.4d.fr" pour ce sélecteur, le client enverra un cookie uniquement lorsque la requête est adressée au domaine ".4d.fr", ce qui exclut les serveurs hébergeant des données statiques externes.

<!-- END REF -->


<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName


<!-- REF #WebServerClass.sessionCookieName.Syntax -->
**.sessionCookieName** : Text<!-- END REF -->


The <!-- REF #WebServerClass.sessionCookieName.Summary -->name of the cookie used for storing the session ID<!-- END REF -->.

*Read-only property*

<!-- END REF -->


<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath


<!-- REF #WebServerClass.sessionCookiePath.Syntax -->
**.sessionCookiePath** : Text<!-- END REF -->


The <!-- REF #WebServerClass.sessionCookiePath.Summary -->"path" field of the session cookie<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/4DACTION" pour ce sélecteur, le client enverra un cookie uniquement pour les requêtes dynamiques commençant par 4DACTION, et non pour les images, les pages statiques, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->
**.sessionCookieSameSite** : Text<!-- END REF -->


The <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->"SameSite" session cookie value<!-- END REF -->. Possible values (using constants):

| Constant            | Valeur   | Description                                                                                                                         |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *Default value* - Cookies are only sent in a first-party context                                                                    |
| Web SameSite Lax    | "Lax"    | Cookies are also sent on cross-site subrequests but only when a user is navigating to the origin site (i.e. when following a link). |
| Web SameSite None   | "None"   | Cookies are sent in all contexts, i.e in responses to both first-party and cross-origin requests.                                   |

See the [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) description for detailed information.


<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation


<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->
**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> This property is not used in [scalable sessions mode](#scalablesession) (there is no IP address validation).

The <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->IP address validation for session cookies<!-- END REF -->. Pour des raisons de sécurité, le serveur Web vérifie par défaut l'adresse IP de chaque requête contenant un cookie de session et la rejette si cette adresse ne correspond pas à l'adresse IP utilisée pour créer le cookie. Dans certaines applications spécifiques, vous souhaiterez peut-être désactiver cette validation et accepter les cookies de session, même lorsque leurs adresses IP ne correspondent pas. For example when mobile devices switch between WiFi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change (this setting lowers the security level of your application).

<!-- END REF -->


<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajout         |
</details>

<!-- REF #WebServerClass.start().Syntax -->
**.start**() : Object<br>**.start**( *settings* : Object ) : Object<!-- END REF -->



<!-- REF #WebServerClass.start().Params -->

| Paramètres | Type  |    | Description                            |
| ---------- | ----- | -- | -------------------------------------- |
| settings   | Objet | -> | Paramètres du serveur web au démarrage |
| Résultat   | Objet | <- | État du démarrage du serveur web       |

<!-- END REF -->

The `.start()` function <!-- REF #WebServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional *settings* object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName](#sessioncookiename)).

Customized session settings will be reset when the [`.stop()`](#stop) function is called.


#### Returned object

The function returns an object describing the Web server launch status. This object can contain the following properties:

| Propriété |                         | Type       | Description                                                               |
| --------- | ----------------------- | ---------- | ------------------------------------------------------------------------- |
| success   |                         | Booléen    | Vrai si le serveur web a été correctement démarré, sinon Faux             |
| errors    |                         | Collection | Pile d'erreurs 4D (non retournée si le serveur web a démarré avec succès) |
|           | \[].errCode            | Nombre     | 4D error code                                                             |
|           | \[].message            | Texte      | Description of the 4D error                                               |
|           | \[].componentSignature | Texte      | Signature of the internal component which returned the error              |
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


<!-- REF WebServerClass.stop().Desc -->

## .stop()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajout         |
</details>

<!-- REF #WebServerClass.stop().Syntax -->
**.stop()** <!-- END REF -->

<!-- REF #WebServerClass.stop().Params -->

| Paramètres | Type |  | Description                 |
| ---------- | ---- |  | --------------------------- |
|            |      |  | Ne requiert aucun paramètre |

 <!-- END REF -->

The `.stop()` function <!-- REF #WebServerClass.stop().Summary -->stops the web server on which it is applied<!-- END REF -->.

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
