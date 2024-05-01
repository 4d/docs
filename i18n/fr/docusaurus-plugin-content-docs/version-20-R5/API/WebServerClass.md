---
id: WebServerClass
title: WebServer
---

The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). This class is available from the `4D` class store.

### Objet Web Server

Web server objects are instantiated with the [`WEB Server`](#web-server) command.

Leurs propriétés et fonctions sont les suivantes :

### Sommaire

|                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->                               |
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->                                                       |
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->                                  |
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->                                                 |
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->                   |
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->       |
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->                                                       |
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->             |
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->             |
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->             |
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->                                                                   |
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->                |
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->                                                 |
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->                                  |
| [<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->                      |
| [<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->                |
| [<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary --> |
| [<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->                                                            |
| [<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->                                                               |

## WEB Server

<details><summary>Historique</summary>

| Release | Modifications                                             |
| ------- | --------------------------------------------------------- |
| 18 R3   | Ajout                                                     |
| 19      | prise en charge de .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->

<!-- REF #_command_.WEB Server.Params -->

| Paramètres | Type                         |    | Description                                                                       |
| ---------- | ---------------------------- | -- | --------------------------------------------------------------------------------- |
| option     | Integer                      | -> | Web server to get (default if omitted = `Web server database`) |
| Résultat   | 4D.WebServer | <- | Objet Serveur Web                                                                 |

<!-- END REF -->

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the _option_ parameter<!-- END REF -->.

By default, if the _option_ parameter is omitted, the command returns a reference to the Web server of the database, i.e. the default Web server. To designate the Web server to return, you can pass one of the following constants in the _option_ parameter:

| Constante                      | Valeur | Commentaire                                                                 |
| ------------------------------ | ------ | --------------------------------------------------------------------------- |
| `Web server database`          | 1      | Le serveur Web de la base courante (par défaut si omis)  |
| `Web server host database`     | 2      | Le serveur Web de la base hôte du composant                                 |
| `Web server receiving request` | 3      | Le serveur Web ayant reçu la requête (serveur Web cible) |

L'objet Web server retourné contient les valeurs courantes des propriétés du serveur Web.

#### Exemple

L'objet Web server retourné contient les valeurs courantes des propriétés du serveur Web.

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

| Release | Modifications |
| ------- | ------------- |
| 18 R3   | Ajout         |

</details>

<!-- REF #_command_.WEB Server list.Syntax -->**WEB Server list** : Collection<!-- END REF -->

<!-- REF #_command_.WEB Server list.Params -->

| Paramètres | Type       |    | Description                                  |
| ---------- | ---------- | -- | -------------------------------------------- |
| Résultat   | Collection | <- | Collection des objets Web server disponibles |

<!-- END REF -->

The `WEB Server list` command <!-- REF #_command_.WEB Server list.Summary -->returns a collection of all Web server objects available in the 4D application<!-- END REF -->.

Une application 4D peut contenir de un à plusieurs serveurs Web :

- un serveur Web pour la base de données hôte (serveur Web par défaut)
- un serveur Web pour chaque composant.

All available Web servers are returned by the `WEB Server list` command, whether they are actually running or not.

> L'objet serveur Web par défaut est automatiquement chargé par 4D au démarrage. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](#web-server) command.

You can use the [.name](#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.

#### Exemple

Nous voulons savoir combien de serveurs web en fonctionnement sont disponibles :

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")

```

## .accessKeyDefined

<!-- REF #WebServerClass.accessKeyDefined.Syntax -->**.accessKeyDefined** : Boolean<!-- END REF -->

The **.accessKeyDefined** property contains <!-- REF #WebServerClass.accessKeyDefined.Summary -->true if an access key is defined in the settings of the web server<!-- END REF -->. Cette propriété est utilisée par le serveur web WebAdmin pour valider la configuration de sécurité de l'interface d'administration.

<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder

<!-- REF #WebServerClass.certificateFolder.Syntax -->**.certificateFolder** : Text<!-- END REF -->

Chemin du <!-- REF #WebServerClass.certificateFolder.Summary -->dossier contenant les fichiers des certificats<!-- END REF -->. Chemin d'accès complet au format POSIX utilisant des filesystems. When using this property in the `settings` parameter of the [`.start()`](#start) function, it can be a [`Folder` object](FolderClass.md).

<!-- END REF -->

<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet

<!-- REF #WebServerClass.characterSet.Syntax -->**.characterSet** : Number<br/>**.characterSet** : Text<!-- END REF -->

Jeu de caractères que le serveur Web doit utiliser pour communiquer avec les navigateurs se connectant à l'application<!-- END REF -->. La valeur par défaut dépend de la langue du système d'exploitation. Can be a MIBEnum integer or a Name string, identifiers [defined by IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Voici la liste des identifiants correspondant aux jeux de caractères pris en charge par le serveur Web de 4D :

- 4 = ISO-8859-1
- 12 = ISO-8859-9
- 13 = ISO-8859-10
- 17 = Shift-JIS
- 2024 = Windows-31J
- 2026 = Big5
- 38 = euc-kr
- 106 = UTF-8
- 2250 = Windows-1250
- 2251 = Windows-1251
- 2253 = Windows-1253
- 2255 = Windows-1255
- 2256 = Windows-1256

<!-- END REF -->

<!-- REF WebServerClass.cipherSuite.Desc -->

## .cipherSuite

<!-- REF #WebServerClass.cipherSuite.Syntax -->**.cipherSuite** : Text<!-- END REF -->

Liste de chiffrement utilisée pour le protocole sécurisé<!-- END REF -->. Définit la priorité des algorithmes de chiffrement implémentés par le serveur Web de 4D. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

<!-- END REF -->

<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->**.CORSEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (_Cross-origin resource sharing_) service status for the web server<!-- END REF -->. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. When enabled (True), XHR calls (e.g. REST requests) from Web pages outside the domain can be allowed in your application (you need to define the list of allowed addresses in the CORS domain list, see `CORSSettings` below). Lorsqu'il est désactivé (False, par défaut), toutes les requêtes entre sites (cross site) envoyées avec CORS sont ignorées. Lorsqu'il est activé (True) et qu'un domaine ou une méthode non autorisé(e) envoie une requête entre sites, elle est rejetée avec une réponse d'erreur "403 - forbidden".

Par défaut : False (désactivé)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

<!-- END REF -->

<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings

<!-- REF #WebServerClass.CORSSettings.Syntax -->**.CORSSettings** : Collection<!-- END REF -->

Contains the <!-- REF #WebServerClass.CORSSettings.Summary -->list of allowed hosts and methods for the CORS service<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Each object must contain a **host** property and, optionally, a **methods** property:

- **host** (text, mandatory): Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Plusieurs attributs de domaine peuvent être ajoutés pour créer une liste blanche. If _host_ is not present or empty, the object is ignored. Plusieurs syntaxes sont supportées :
  - 192.168.5.17:8081
  - 192.168.5.17
  - 192.168.\*
  - 192.168.\*:8081
  - http://192.168.5.17:8081
  - http://\*.myDomain.com
  - http://myProject.myDomain.com
  - \*.myDomain.com
  - myProject.myDomain.com
  - \*

- **methods** (text, optional): Accepted HTTP method(s) for the corresponding CORS host. Séparez chaque méthode par un ";" (ex : "post;get"). If _methods_ is empty, null, or undefined, all methods are enabled.

<!-- END REF -->

<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog

<!-- REF #WebServerClass.debugLog.Syntax -->**.debugLog** : Number<!-- END REF -->

Statut du fichier de log des requêtes HTTP<!-- END REF --> (HTTPDebugLog_nn.txt, stocké dans le dossier "Logs" de l'application -- nn est le numéro de fichier).

- 0 = désactivé
- 1 = activé sans les parties du corps (la taille du corps est fournie dans ce cas)
- 3 = activé avec les parties du corps en réponse uniquement
- 5 = activé avec des parties du corps sur requête uniquement
- 7 = activé avec des parties du corps en réponse et requête

<!-- END REF -->

<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage

<!-- REF #WebServerClass.defaultHomepage.Syntax -->**.defaultHomepage** : Text<!-- END REF -->

Nom de la page home par défaut<!-- END REF --> ou "" pour ne pas envoyer de page home personnalisée.

<!-- END REF -->

<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->**.HSTSEnabled** : Boolean<!-- END REF -->

Statut du HTTP Strict Transport Security (HSTS)<!-- END REF -->. HSTS permet au serveur Web de déclarer que les navigateurs doivent interagir avec lui uniquement via des connexions HTTPS sécurisées. Les navigateurs enregistreront les informations HSTS la première fois qu'ils recevront une réponse du serveur Web, puis toutes les futures requêtes HTTP seront automatiquement transformées en requêtes HTTPS. The length of time this information is stored by the browser is specified with the `HSTSMaxAge` property. HSTS nécessite l'activation de HTTPS sur le serveur. HTTP doit également être activé pour permettre des connexions client initiales.

<!-- END REF -->

<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->**.HSTSMaxAge** : Number<!-- END REF -->

Durée maximum (en secondes) pendant laquelle HSTS est actif pour chaque nouvelle connexion cliente<!-- END REF -->. Ces informations sont stockées côté client pendant la durée spécifiée.

Valeur par défaut : 63072000 (2 ans).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->**.HTTPCompressionLevel** : Number<!-- END REF -->

Niveau de compression pour tous les échanges HTTP compressés du serveur (requêtes clientes ou réponses du serveur)<!-- END REF -->. Ce sélecteur vous permet d'optimiser les échanges en priorisant soit la vitesse d'exécution (moins de compression), soit la quantité de compression (moins de vitesse).

Valeurs possibles :

- 1 à 9 (où 1 correspond à la compression la plus rapide et 9 la plus élevée).
- -1 = définir un compromis entre la vitesse et le taux de compression.

Valeurs possibles :

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->**.HTTPCompressionThreshold** : Number<!-- END REF -->

Limite de la taille des requêtes (en octets) au-dessous de laquelle les échanges ne doivent pas être compressés<!-- END REF -->. Ce paramètre est utile pour éviter de perdre du temps machine en compressant les petits échanges.

Seuil de compression par défaut = 1024 octets

<!-- END REF -->

<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<!-- REF #WebServerClass.HTTPEnabled.Syntax -->**.HTTPEnabled** : Boolean<!-- END REF -->

Statut du protocole HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort

<!-- REF #WebServerClass.HTTPPort.Syntax -->**.HTTPPort** : Number<!-- END REF -->

Statut du protocole HTTPS<!-- END REF -->.

Par défaut = 80

<!-- END REF -->

<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->**.HTTPTrace** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled

<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->**.HTTPSEnabled** : Boolean<!-- END REF -->

<em x-id="3">Propriété en lecture seulement.</em> <!-- REF #WebServerClass.isRunning.Summary -->Statut démarré du serveur Web<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<!-- REF #WebServerClass.HTTPSPort.Syntax -->**.HTTPSPort** : Number<!-- END REF -->

<!-- REF #WebServerClass.HTTPPort.Summary -->Numéro de port IP d'écoute pour HTTPS<!-- END REF -->.

Par défaut = 443

<!-- END REF -->

<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->**.inactiveProcessTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

Cette propriété n'est pas retournée <a href="#scalablesession">en mode sessions évolutives</a>.<!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->Durée de vie (en minutes) des sessions legacy inactives<!-- END REF -->. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Par défaut = 480 minutes

<!-- END REF -->

<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->**.inactiveSessionTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

<!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->Durée de vie (en minutes) des process de session legacy inactifs<!-- END REF -->. À la fin de cette période, le cookie de session expire et n'est plus envoyé par le client HTTP.

Par défaut = 480 minutes

<!-- END REF -->

<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen

<!-- REF #WebServerClass.IPAddressToListen.Syntax -->**.IPAddressToListen** : Text<!-- END REF -->

Adresse IP sur laquelle le serveur Web recevra les requêtes HTTP<!-- END REF -->. Par défaut, aucune adresse spécifique n'est définie. Les formats de chaîne IPv6 et IPv4 sont pris en charge.

<!-- END REF -->

<!-- REF WebServerClass.isRunning.Desc -->

## .isRunning

<!-- REF #WebServerClass.isRunning.Syntax -->**.isRunning** : Boolean<!-- END REF -->

_Read-only property_

Vrai si les sessions legacy sont activées dans le serveur Web, sinon Faux<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->**.keepSession** : Boolean<!-- END REF -->

Contains <!-- REF #WebServerClass.keepSession.Summary -->`True` if legacy sessions are enabled in the web server, `False` otherwise<!-- END REF -->.

##### Voir également

[.scalableSession](#scalablesession)

<!-- END REF -->

<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording

<!-- REF #WebServerClass.logRecording.Syntax -->**.logRecording** : Number<!-- END REF -->

Mode d'enregistrement du log des requêtes (logweb.txt)<!-- END REF -->.

- 0 = Ne pas enregistrer (par défaut)
- 1 = Enregistrer au format CLF
- 2 = Enregistrer au format DLF
- 3 = Enregistrer au format ELF
- 4 = Enregistrer au format WLF

<!-- END REF -->

<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses

<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->**.maxConcurrentProcesses** : Number<!-- END REF -->

Nombre maximum de process web simultanés accepté par le serveur Web<!-- END REF -->. Lorsque ce nombre (moins un) est atteint, 4D ne crée aucun autre process et retourne le statut HTTP 503 - Service Unavailable to all new requests.

Valeurs possibles : 500000 - 2147483648

Par défaut = 80

<!-- END REF -->

<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<!-- REF #WebServerClass.maxRequestSize.Syntax -->**.maxRequestSize** : Number<!-- END REF -->

Contains the <!-- REF #WebServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passer la valeur maximale (2147483647) signifie qu'en pratique, aucune limite n'est définie. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses. Si une requête atteint cette limite, le serveur Web la rejette.

Valeurs possibles : 500000 - 2147483647

<!-- END REF -->

<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->**.maxSessions** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

Contains the <!-- REF #WebServerClass.maxSessions.Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)

<!-- END REF -->

<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->**.minTLSVersion** : Number<!-- END REF -->

Version minimum de TLS acceptée pour les connexions<!-- END REF -->. Les tentatives de connexion de clients prenant en charge uniquement les versions inférieures au minimum seront rejetées.

Valeurs possibles :

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (par défaut)
- 4 = TLSv1_3

En cas de modification, le serveur doit être redémarré pour utiliser la nouvelle valeur.

<!-- END REF -->

<!-- REF WebServerClass.name.Desc -->

## .name

<!-- REF #WebServerClass.name.Syntax -->**.name** : Text<!-- END REF -->

_Read-only property_

<em x-id="3">Propriété en lecture seulement.</em> <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->Disponibilité du PFS sur le serveur<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->**.openSSLVersion** : Text<!-- END REF -->

_Read-only property_

<em x-id="3">Propriété en lecture seulement.</em> <!-- REF #WebServerClass.openSSLVersion.Summary -->Version de la librairie OpenSSL utilisée<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->**.perfectForwardSecrecy** : Boolean<!-- END REF -->

_Read-only property_

La fonction <code>.start()</code> function <!-- REF #WebServerClass.start().Summary -->démarre le serveur Web server auquel elle est appliquée<!-- END REF -->, en utilisant les propriétés définies dans le paramètre optionnel <em x-id="3">settings</em>.

<!-- END REF -->

<!-- REF WebServerClass.rootFolder.Desc -->

## .rootFolder

<!-- REF #WebServerClass.rootFolder.Syntax -->**.rootFolder** : Text<!-- END REF -->

Chemin du dossier racine du serveur Web<!-- END REF -->. Chemin d'accès complet au format POSIX utilisant des filesystems. When using this property in the `settings` parameter, it can be a `Folder` object.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->

## .scalableSession

<!-- REF #WebServerClass.scalableSession.Syntax -->**.scalableSession** : Boolean<!-- END REF -->

Contains <!-- REF #WebServerClass.scalableSession.Summary -->`True` if scalable sessions are used in the web server, and `False` otherwise<!-- END REF -->.

##### Voir également

[.keepSession](#keepsession)

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->**.sessionCookieDomain** : Text<!-- END REF -->

Champ "domain" du cookie de session<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Si vous définissez, par exemple, la valeur "/\*.4d.fr" pour ce sélecteur, le client n'enverra un cookie que lorsque la demande est adressée au domaine ".4d.fr", ce qui exclut les serveurs hébergeant des données statiques externes.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<!-- REF #WebServerClass.sessionCookieName.Syntax -->**.sessionCookieName** : Text<!-- END REF -->

Nom du cookie utilisé pour stocker l'ID de session<!-- END REF -->.

_Read-only property_

<!-- END REF -->

<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath

<!-- REF #WebServerClass.sessionCookiePath.Syntax -->**.sessionCookiePath** : Text<!-- END REF -->

<!-- REF #WebServerClass.sessionCookiePath.Summary -->Champ "path" du cookie de session<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/4DACTION" pour ce sélecteur, le client enverra un cookie uniquement pour les requêtes dynamiques commençant par 4DACTION, et non pour les images, les pages statiques, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->**.sessionCookieSameSite** : Text<!-- END REF -->

Valeur "SameSite" du cookie de session<!-- END REF -->. Valeurs possibles (avec constantes) :

| Constante           | Valeur   | Description                                                                                                                                                                                            |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Web SameSite Strict | "Strict" | _Default value_ - Cookies are only sent in a first-party context                                                                                                                                       |
| Web SameSite Lax    | "Lax"    | Les cookies sont également envoyés aux sous-requêtes intersites mais uniquement lorsque l'internaute navigue vers le site d'origine (i.e.           |
| Web SameSite None   | "None"   | Les cookies sont envoyés dans tous les contextes, i.e. en réponse aux requêtes internes (first-party) et aux requêtes cross-origin. |

See the [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) description for detailed information.

<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> This property is not used in [scalable sessions mode](#scalablesession) (there is no IP address validation).

<!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->Validation de l'adresse IP des cookies de session<!-- END REF -->. Pour des raisons de sécurité, le serveur Web vérifie par défaut l'adresse IP de chaque requête contenant un cookie de session et la rejette si cette adresse ne correspond pas à l'adresse IP utilisée pour créer le cookie. Dans certaines applications spécifiques, vous souhaiterez peut-être désactiver cette validation et accepter les cookies de session, même lorsque leurs adresses IP ne correspondent pas. Par exemple, lorsque les appareils mobiles basculent entre les réseaux Wifi et 3G/4G, leur adresse IP change. Dans ce cas, vous pouvez permettre aux clients de continuer à utiliser leurs sessions Web même lorsque les adresses IP changent (ce paramétrage abaisse le niveau de sécurité de votre application).

<!-- END REF -->

<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R3   | Ajout         |

</details>

<!-- REF #WebServerClass.start().Syntax -->

**.start**() : Object<br/>**.start**( _settings_ : Object ) : Object<!-- END REF -->

<!-- REF #WebServerClass.start().Params -->

| Paramètres | Type   |    | Description                            |
| ---------- | ------ | -- | -------------------------------------- |
| settings   | Object | -> | Paramètres du serveur web au démarrage |
| Résultat   | Object | <- | État du démarrage du serveur web       |

<!-- END REF -->

The `.start()` function <!-- REF #WebServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional _settings_ object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the _settings_ parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

Customized session settings will be reset when the [`.stop()`](#stop) function is called.

#### Objet retourné

La fonction retourne un objet décrivant le statut démarré du serveur Web. Cet objet peut avoir les propriétés suivantes :

| Propriété |                                                                                             | Type       | Description                                                                                  |
| --------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------- |
| success   |                                                                                             | Boolean    | Vrai si le serveur web a été correctement démarré, sinon Faux                                |
| errors    |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si le serveur web a démarré avec succès) |
|           | \[].errCode            | Number     | Code d'erreur 4D                                                                             |
|           | \[].message            | Text       | Description de l'erreur 4D                                                                   |
|           | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                       |

> Si le serveur Web a déjà été lancé, une erreur est générée.

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

| Release | Modifications |
| ------- | ------------- |
| 18 R3   | Ajout         |

</details>

<!-- REF #WebServerClass.stop().Syntax -->**.stop()**<!-- END REF -->

<!-- REF #WebServerClass.stop().Params -->

| Paramètres | Type |   | Description                 |
| ---------- | ---- | - | --------------------------- |
|            |      |   | Ne requiert aucun paramètre |

<!-- END REF -->

The `.stop()` function <!-- REF #WebServerClass.stop().Summary -->stops the web server on which it is applied<!-- END REF -->.

Si le serveur Web était lancé, toutes les connexions Web et tous les process Web sont fermés une fois que les requêtes actuellement traitées sont terminées. Si le serveur Web n'était pas démarré, la fonction ne fait rien.

> This function resets the customized web settings defined for the session using the _settings_ parameter of the [`.start()`](#start) function, if any.

#### Exemple

Pour arrêter le serveur Web de la base :

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->
