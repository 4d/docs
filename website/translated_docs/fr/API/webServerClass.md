---
id: webServerClass
title: Serveur Web
---

<style> h2 { background: #d9ebff;}</style>

The `WebServer` class in the 4D language allows you to start and monitor a web server for the main (host) application as well as each hosted component.


### Objet Serveur Web

Web server objects are instantiated with the `WEB Server` command.

They provide the following properties and functions:


### Summary
|                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #webServerClass.certificateFolder.Syntax -->](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #webServerClass.characterSet.Syntax -->](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #webServerClass.cipherSuite.Syntax -->](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #webServerClass.CORSEnabled.Syntax -->](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #webServerClass.CORSSettings.Syntax -->](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #webServerClass.debugLog.Syntax -->](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #webServerClass.defaultHomepage.Syntax -->](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #webServerClass.HSTSEnabled.Syntax -->](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #webServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HSTSMaxAge.Summary -->|
| [<!-- INCLUDE #webServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPCompressionLevel.Summary -->|
| [<!-- INCLUDE #webServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPCompressionThreshold.Summary -->|
| [<!-- INCLUDE #webServerClass.HTTPEnabled.Syntax -->](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPEnabled.Summary -->|
| [<!-- INCLUDE #webServerClass.HTTPPort.Syntax -->](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPPort.Summary -->|
| [<!-- INCLUDE #webServerClass.HTTPTrace.Syntax -->](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPTrace.Summary -->|
| [<!-- INCLUDE #webServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPSEnabled.Summary -->|
| [<!-- INCLUDE #webServerClass.HTTPSPort.Syntax -->](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.HTTPSPort.Summary -->|
| [<!-- INCLUDE #webServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.inactiveProcessTimeout.Summary -->|
| [<!-- INCLUDE #webServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.inactiveSessionTimeout.Summary -->|
| [<!-- INCLUDE #webServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.IPAddressToListen.Summary -->|
| [<!-- INCLUDE #webServerClass.isRunning.Syntax -->](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.isRunning.Summary -->|
| [<!-- INCLUDE #webServerClass.keepSession.Syntax -->](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.keepSession.Summary -->|
| [<!-- INCLUDE #webServerClass.logRecording.Syntax -->](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.logRecording.Summary -->|
| [<!-- INCLUDE #webServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxConcurrentProcesses.Summary -->|
| [<!-- INCLUDE #webServerClass.maxRequestSize.Syntax -->](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxRequestSize.Summary -->|
| [<!-- INCLUDE #webServerClass.maxSessions.Syntax -->](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.maxSessions.Summary -->|
| [<!-- INCLUDE #webServerClass.minTLSVersion.Syntax -->](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.minTLSVersion.Summary -->|
| [<!-- INCLUDE #webServerClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.name.Summary -->|
| [<!-- INCLUDE #webServerClass.openSSLVersion.Syntax -->](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.openSSLVersion.Summary -->|
| [<!-- INCLUDE #webServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.perfectForwardSecrecy.Summary -->|
| [<!-- INCLUDE #webServerClass.rootFolder.Syntax -->](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.rootFolder.Summary -->|
| [<!-- INCLUDE #webServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookieDomain.Summary -->|
| [<!-- INCLUDE #webServerClass.sessionCookieName.Syntax -->](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookieName.Summary -->|
| [<!-- INCLUDE #webServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionCookiePath.Summary -->|
| [<!-- INCLUDE #webServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.sessionIPAddressValidation.Summary -->|
| [<!-- INCLUDE #webServerClass.start().Syntax -->](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.start().Summary -->|
| [<!-- INCLUDE #webServerClass.stop().Syntax -->](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #webServerClass.stop().Summary -->|



<!-- REF webServerClass.certificateFolder.Desc -->

## .certificateFolder

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.certificateFolder.Syntax -->
**.certificateFolder** : Text<!-- END REF -->

The <!-- REF #webServerClass.certificateFolder.Summary -->folder where the certificate files are located<!-- END REF -->. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.

<!-- END REF -->


<!-- REF webServerClass.characterSet.Desc -->

## .characterSet

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>


<!-- REF #webServerClass.characterSet.Syntax -->
**.characterSet** : Number<br>**.characterSet** : Text<!-- END REF -->

The <!-- REF #webServerClass.characterSet.Summary -->character set that the 4D Web Server should use to communicate with browsers<!-- END REF --> connecting to the application. La valeur par défaut dépend de la langue du système d'exploitation. Can be a MIBEnum longint or Name string, identifiers defined by IANA supported by the 4D Web Server:

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

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.cipherSuite.Syntax -->
**.cipherSuite** : Text<!-- END REF -->


The <!-- REF #webServerClass.cipherSuite.Summary -->cipher list used for the secure protocol<!-- END REF -->. Définit la priorité des algorithmes de chiffrement mis en œuvre par le serveur Web. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). Voir la [page des chiffrements](https://www.openssl.org/docs/manmaster/man1/ciphers.html) sur le site OpenSSL.

<!-- END REF -->


<!-- REF webServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.CORSEnabled.Syntax -->
**.CORSEnabled** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.CORSEnabled.Summary -->CORS (Cross-origin resource sharing) service status for the web server<!-- END REF -->. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Lorsqu'il est activé (True), les appels XHR (par exemple les requêtes REST) à partir de pages Web hors du domaine peuvent être autorisés dans votre application (vous devez définir la liste des adresses autorisées dans la liste des domaines CORS, voir `CORSSettings` ci-dessous). Lorsqu'il est désactivé (False, par défaut), toutes les requêtes entre sites (cross site) envoyées avec CORS sont ignorées. Lorsqu'il est activé (True) et qu'un domaine ou une méthode non autorisé(e) envoie une requête entre sites, elle est rejetée avec une réponse d'erreur «403 - forbidden».

Par défaut : False (désactivé)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

<!-- END REF -->


<!-- REF webServerClass.CORSSettings.Desc -->

## .CORSSettings

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.CORSSettings.Syntax -->
**.CORSSettings** : Collection<!-- END REF -->

A <!-- REF #webServerClass.CORSSettings.Summary -->list of allowed hosts and methods for the CORS service<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:

*   **host** (texte, obligatoire) : nom de domaine ou adresse IP à partir duquel les pages externes sont autorisées à envoyer des requêtes de données au serveur via CORS. Plusieurs attributs de domaine peuvent être ajoutés pour créer une liste blanche. Si *host* n'est pas présent ou vide, l'objet est ignoré.

   Several syntaxes are supported:

   *    192.168.5.17:8081

   *    192.168.5.17
   *    192.168.*
   *    192.168.*:8081
   *    http://192.168.5.17:8081
   *    http://*.myDomain.com
   *    http://myProject.myDomain.com
   *    *.myDomain.com
   *    myProject.myDomain.com
   *    *

*   **methods** (texte, facultatif) : méthode(s) HTTP acceptée(s) pour l'hôte CORS correspondant. Séparez chaque méthode par un ";" (ex : "post;get"). Si *methods* est vide, null ou non défini, toutes les méthodes sont activées.

<!-- END REF -->


<!-- REF webServerClass.debugLog.Desc -->

## .debugLog

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

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

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.defaultHomepage.Syntax -->
**.defaultHomepage** : Text<!-- END REF -->

The <!-- REF #webServerClass.defaultHomepage.Summary -->name of the default home page<!-- END REF --> or "" to not send the custom home page.

<!-- END REF -->


<!-- REF webServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HSTSEnabled.Syntax -->
**.HSTSEnabled** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS) status<!-- END REF -->. HSTS permet au serveur Web de déclarer que les navigateurs doivent interagir avec uniquement via des connexions HTTPS sécurisées. Les navigateurs enregistreront les informations HSTS la première fois qu'ils recevront une réponse du serveur Web, puis toutes les futures requêtes HTTP seront automatiquement transformées en requêtes HTTPS. La durée de stockage de ces informations par le navigateur est indiquée avec la propriété `HSTSMaxAge`. HSTS nécessite l'activation de HTTPS sur le serveur. HTTP doit également être activé pour permettre des connexions client initiales.

<!-- END REF -->


<!-- REF webServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HSTSMaxAge.Syntax -->
**.HSTSMaxAge** : Number<!-- END REF -->

The <!-- REF #webServerClass.HSTSMaxAge.Summary -->maximum length of time (in seconds) that HSTS is active for each new client connection<!-- END REF -->. Ces informations sont stockées côté client pendant la durée spécifiée.

Default value: 63072000 (2 years).

<!-- END REF -->


<!-- REF webServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HTTPCompressionLevel.Syntax -->
**.HTTPCompressionLevel** : Number<!-- END REF -->

The <!-- REF #webServerClass.HTTPCompressionLevel.Summary -->compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies)<!-- END REF -->. Ce sélecteur vous permet d'optimiser les échanges en priorisant soit la vitesse d'exécution (moins de compression), soit la quantité de compression (moins de vitesse).

Valeurs possibles :

*   1 à 9 (où 1 correspond à la compression la plus rapide et 9 la plus élevée).
*   -1 = définir un compromis entre la vitesse et le taux de compression.

Par défaut = 1 (compression plus rapide).

<!-- END REF -->


<!-- REF webServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HTTPCompressionThreshold.Syntax -->
**.HTTPCompressionThreshold** : Number<!-- END REF -->

The <!-- REF #webServerClass.HTTPCompressionThreshold.Summary -->size threshold (bytes) for requests below which exchanges should not be compressed<!-- END REF -->. Ce paramètre est utile pour éviter de perdre du temps machine en compressant les petits échanges.

Seuil de compression par défaut = 1024 octets

<!-- END REF -->


<!-- REF webServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HTTPEnabled.Syntax -->
**.HTTPEnabled** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.HTTPEnabled.Summary -->HTTP protocol state<!-- END REF -->. 

<!-- END REF -->



<!-- REF webServerClass.HTTPPort.Desc -->

## .HTTPPort

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HTTPPort.Syntax -->
**.HTTPPort** : Number<!-- END REF -->

The <!-- REF #webServerClass.HTTPPort.Summary -->listening IP port number for HTTP<!-- END REF -->.

Par défaut = 80

<!-- END REF -->


<!-- REF webServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HTTPTrace.Syntax -->
**.HTTPTrace** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->


<!-- REF webServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled


<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HTTPSEnabled.Syntax -->
**.HTTPSEnabled** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.HTTPSEnabled.Summary -->HTTPS protocol state<!-- END REF -->. 

<!-- END REF -->


<!-- REF webServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.HTTPSPort.Syntax -->
**.HTTPSPort** : Number<!-- END REF -->

The <!-- REF #webServerClass.HTTPSPort.Summary -->listening IP port number for HTTPS<!-- END REF -->.

Par défaut = 443

<!-- END REF -->


<!-- REF webServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.inactiveProcessTimeout.Syntax -->
**.inactiveProcessTimeout** : Number<!-- END REF -->

The <!-- REF #webServerClass.inactiveProcessTimeout.Summary -->life duration (in minutes) of the inactive session processes<!-- END REF -->. À la fin du délai d'attente (tiemout), le process est tué sur le serveur, la méthode base `On Web Close Process` est appelée, puis le contexte de session est détruit.

Par défaut = 480 minutes

<!-- END REF -->


<!-- REF webServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.inactiveSessionTimeout.Syntax -->
**.inactiveSessionTimeout** : Number<!-- END REF -->

The <!-- REF #webServerClass.inactiveSessionTimeout.Summary -->life duration (in minutes) of inactive sessions (duration set in cookie)<!-- END REF -->. À la fin de cette période, le cookie de session expire et n'est plus envoyé par le client HTTP.

Par défaut = 480 minutes

<!-- END REF -->


<!-- REF webServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.IPAddressToListen.Syntax -->
**.IPAddressToListen** : Text<!-- END REF -->

The <!-- REF #webServerClass.IPAddressToListen.Summary -->IP address on which the 4D Web Server will receive HTTP requests<!-- END REF -->. Les formats de chaîne IPv6 et IPv4 sont pris en charge.

<!-- END REF -->


<!-- REF webServerClass.isRunning.Desc -->

## .isRunning

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.isRunning.Syntax -->
***.isRunning*** : Boolean<!-- END REF -->

*Read-only property*

The <!-- REF #webServerClass.isRunning.Summary -->web server running state<!-- END REF -->. 

<!-- END REF -->


<!-- REF webServerClass.keepSession.Desc -->

## .keepSession

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.keepSession.Syntax -->
**.keepSession** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.keepSession.Summary -->session management enabling status<!-- END REF -->.

Par défaut = true

<!-- END REF -->


<!-- REF webServerClass.logRecording.Desc -->

## .logRecording

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

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

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.maxConcurrentProcesses.Syntax -->
**.maxConcurrentProcesses** : Number<!-- END REF -->

The <!-- REF #webServerClass.maxConcurrentProcesses.Summary -->maximum number of concurrent web processes supported by the web server<!-- END REF -->. Lorsque ce nombre (moins un) est atteint, 4D ne crée aucun autre process et retourne le statut HTTP 503 - Service Unavailable to all new requests.


Valeurs possibles : 10 - 32000

Par défaut = 100

<!-- END REF -->


<!-- REF webServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.maxRequestSize.Syntax -->
**.maxRequestSize** : Number<!-- END REF -->

The <!-- REF #webServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passer la valeur maximale (2147483648) signifie qu'en pratique, aucune limite n'est définie. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses. Si une requête atteint cette limite, le serveur Web la rejette.

Valeurs possibles : 500000 - 2147483648

<!-- END REF -->


<!-- REF webServerClass.maxSessions.Desc -->

## .maxSessions

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.maxSessions.Syntax -->
**.maxSessions** : Number<!-- END REF -->

The <!-- REF #webServerClass.maxSessions.Summary -->maximum number of simultaneous sessions<!-- END REF -->. Lorsque vous atteignez la limite, la session la plus ancienne est fermée (et la méthode base `On Web Close Process` est appelée) si le serveur Web doit en créer une nouvelle. The number of simultaneous sessions cannot exceed the total number of web processes (maxConcurrentProcesses property, 100 by default)

<!-- END REF -->


<!-- REF webServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.minTLSVersion.Syntax -->
**.minTLSVersion** : Number<!-- END REF -->

The <!-- REF #webServerClass.minTLSVersion.Summary -->maximum number of simultaneous sessions<!-- END REF -->minimum TLS version accepted for connections<!-- END REF -->. Les tentatives de connexion de clients prenant en charge uniquement les versions inférieures au minimum seront rejetées.

Valeurs possibles :

*   1 = TLSv1_0
*   2 = TLSv1_1
*   3 = TLSv1_2 (default)

En cas de modification, le serveur doit être redémarré pour utiliser la nouvelle valeur.

<!-- END REF -->


<!-- REF webServerClass.name.Desc -->

## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.name.Syntax -->
***.name*** : Text<!-- END REF -->

*Read-only property*

The <!-- REF #webServerClass.name.Summary -->name of the web server application<!-- END REF -->. 

<!-- END REF -->



<!-- REF webServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.openSSLVersion.Syntax -->
***.openSSLVersion*** : Text<!-- END REF -->

*Read-only property*

The <!-- REF #webServerClass.openSSLVersion.Summary -->version of the OpenSSL library used<!-- END REF -->. 

<!-- END REF -->


<!-- REF webServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.perfectForwardSecrecy.Syntax -->
***.perfectForwardSecrecy*** : Boolean<!-- END REF -->

*Read-only property*

The <!-- REF #webServerClass.perfectForwardSecrecy.Summary -->PFS availability on the server<!-- END REF -->. 

<!-- END REF -->


<!-- REF webServerClass.rootFolder.Desc -->
## .rootFolder

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>


<!-- REF #webServerClass.rootFolder.Syntax -->
**.rootFolder** : Text<!-- END REF -->

The <!-- REF #webServerClass.rootFolder.Summary -->path of web server root folder<!-- END REF -->. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.

<!-- END REF -->


<!-- REF webServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>


<!-- REF #webServerClass.sessionCookieDomain.Syntax -->
**.sessionCookieDomain** : Text<!-- END REF -->

The <!-- REF #webServerClass.sessionCookieDomain.Summary -->"domain" field of the session cookie<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/*.4d.fr" pour ce sélecteur, le client enverra un cookie uniquement lorsque la requête est adressée au domaine ".4d.fr", ce qui exclut les serveurs hébergeant des données statiques externes.

<!-- END REF -->


<!-- REF webServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.sessionCookieName.Syntax -->
**.sessionCookieName** : Text<!-- END REF -->

The <!-- REF #webServerClass.sessionCookieName.Summary -->name of the cookie used for storing the session ID<!-- END REF -->.

Par défaut = "4DSID"

<!-- END REF -->


<!-- REF webServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.sessionCookiePath.Syntax -->
**.sessionCookiePath** : Text<!-- END REF -->

The <!-- REF #webServerClass.sessionCookiePath.Summary -->"path" field of the session cookie<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/4DACTION" pour ce sélecteur, le client enverra un cookie uniquement pour les requêtes dynamiques commençant par 4DACTION, et non pour les images, les pages statiques, etc.

<!-- END REF -->


<!-- REF webServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
|         |               |
</details>

<!-- REF #webServerClass.sessionIPAddressValidation.Syntax -->
**.sessionIPAddressValidation** : Boolean<!-- END REF -->

The <!-- REF #webServerClass.sessionIPAddressValidation.Summary -->IP address validation for session cookies<!-- END REF -->. Pour des raisons de sécurité, le serveur Web vérifie par défaut l'adresse IP de chaque requête contenant un cookie de session et la rejette si cette adresse ne correspond pas à l'adresse IP utilisée pour créer le cookie. Dans certaines applications spécifiques, vous souhaiterez peut-être désactiver cette validation et accepter les cookies de session, même lorsque leurs adresses IP ne correspondent pas. For example when mobile devices switch between WiFi and 3G/4G networks, their IP address will change. Dans ce cas, vous pouvez permettre aux clients de continuer à utiliser leurs sessions Web même lorsque les adresses IP changent.
> This setting lowers the security level of your application

<!-- END REF -->


<!-- REF webServerClass.start().Desc -->

## .start()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

<!-- REF #webServerClass.start().Syntax -->
**.start**( *settings* : Object ) : Object<!-- END REF -->


<!-- REF #webServerClass.start().Params -->

| Paramètres | Type  |    | Description                           |
| ---------- | ----- | -- | ------------------------------------- |
| settings   | Objet | -> | Web server settings to set at startup |
| Résultat   | Objet | <- | Status of the web server startup      |

<!-- END REF -->

The `.start()` function <!-- REF #webServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional `settings` object parameter.

The web server starts with default settings defined in the settings file of the database or (host database only) using the `WEB SET OPTION` command. However, using the settings parameter, you can define customized settings for the web server session. For a description of the settings, see the Returned object of the `WEB Server` command or the [Web server object](#web-server-object) section (some properties cannot be defined in the settings object).

Customized session settings will be reset when the `.stop()` function is called.


#### Returned object

The function returns an object describing the Web server launch status. This object can contain the following properties:

| Propriété |  | Type | Description |
| --------- |  | ---- | ----------- |
|           |  |      |             |

|success||Boolean|True if the web server was correctly started, False otherwise |errors ||Collection|4D error stack (not returned if the web server started successfully)| | |\[].errcode|Number|    4D error code| | |\[].message|Text|Description of the 4D error | | |\[].componentSignature|Text|Signature of the internal component which returned the error|
> If the Web server was already launched, an error is returned.

#### Exemple

```4d
C_OBJECT($status)

//to start a web server with default settings
$status:=webServer.start()

//to start the web server with custom settings  
//$settings object contains web server properties
webServer.start($settings)
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
> This function resets the customized web settings defined for the session using the settings parameter of the `.start()` function, if any.


#### Exemple

```4d
C_OBJECT($status)

//to stop the web server
$status:=webServer.stop()
```

<!-- END REF -->
