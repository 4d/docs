---
id: WebServerClass
title: WebServer
---


La classe `WebServer` vous permet de démarrer et de contrôler un serveur web pour l'application principale (hôte) ainsi que pour chaque composant (voir la présentation de l'[objet Web Server](WebServer/webServerObject.md)). Cette classe est disponible depuis le "class store" de `4D`.

### Objet Serveur Web

Les objets Web server sont installés à l'aide de la commande [`WEB Server`](#web-server).

Leurs propriétés et fonctions sont les suivantes :

### Sommaire

|                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->                         |
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->                      |
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->                                                 |
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->             |
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary --> |
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->                                                 |
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->       |
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->       |
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->                      |
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->       |
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->                               |
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->                                  |
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->                                                             |
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->                               |
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->          |
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->                            |


[<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary -->| |[<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->| |[<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->|

## WEB Server

<details><summary>Historique</summary>

| Version | Modifications                             |
| ------- | ----------------------------------------- |
| v18 R3  | Ajoutées                                  |
| v19     | prise en charge de .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->

**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->

<!-- REF #_command_.WEB Server.Params -->

| Paramètres | Type         |    | Description                                                       |
| ---------- | ------------ | -- | ----------------------------------------------------------------- |
| option     | Integer      | -> | Serveur Web à référencer (défaut si omis = `Web server database`) |
| Result     | 4D.WebServer | <- | Objet Serveur Web                                                 |


<!-- END REF -->

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the *option* parameter<!-- END REF -->.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

| Constante                      | Value | Commentaire                                              |
| ------------------------------ | ----- | -------------------------------------------------------- |
| `Web server database`          | 1     | Le serveur Web de la base courante (par défaut si omis)  |
| `Web server host database`     | 2     | Le serveur Web de la base hôte du composant              |
| `Web server receiving request` | 3     | Le serveur Web ayant reçu la requête (serveur Web cible) |

L'objet Web server retourné contient les valeurs courantes des propriétés du serveur Web.

#### Exemple

L'objet Web server retourné contient les valeurs courantes des propriétés du serveur Web.

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
| v18 R3  | Ajoutées      |
</details>

<!-- REF #_command_.WEB Server list.Syntax -->

**WEB Server list** : Collection<!-- END REF -->

<!-- REF #_command_.WEB Server list.Params -->

| Paramètres | Type        |    | Description                                  |
| ---------- | ----------- | -- | -------------------------------------------- |
| Result     | Collections | <- | Collection des objets Web server disponibles |


<!-- END REF -->

The `WEB Server list` command <!-- REF #_command_.WEB Server list.Summary -->returns a collection of all Web server objects available in the 4D application<!-- END REF -->.

La commande `WEB Server list` <!-- REF #_command_.WEB Server list.Summary -->retourne une collection de tous les objets Web server disponibles dans l'application 4D<!-- END REF -->.

- un serveur Web pour la base de données hôte (serveur Web par défaut)
- un serveur Web pour chaque composant.

Une application 4D peut contenir de 1 à N serveurs Web :

> L'objet serveur Web par défaut est automatiquement chargé par 4D au démarrage. En revanche, chaque composant serveur Web que vous souhaitez utiliser doit être instancié à l'aide de la commande [`WEB Server`](#web-server).

La commande `WEB Server list` retourne tous les serveurs Web disponibles, qu'ils soient en cours d'exécution ou non.

#### Exemple

Vous pouvez utiliser la propriété [.name](#name) de l'objet Web server pour identifier le projet ou le composant auquel chaque objet Web server de la liste appartient.

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

The **.accessKeyDefined** property contains <!-- REF #WebServerClass.accessKeyDefined.Summary -->true if an access key is defined in the settings of the web server<!-- END REF -->. Cette propriété est utilisée par le serveur web WebAdmin pour valider la configuration de sécurité de l'interface d'administration.

<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder

<!-- REF #WebServerClass.certificateFolder.Syntax -->

**.certificateFolder** : Text<!-- END REF -->

Path of the <!-- REF #WebServerClass.certificateFolder.Summary -->dossier dans lequel les fichiers de certificat sont sauvegardés<!-- END REF -->. Chemin d'accès complet au format POSIX utilisant des filesystems. Lorsque cette propriété est utilisée dans le paramètre `settings` de la fonction [`.start()`](#start), il peut s'agir d'un objet [`Folder`](FolderClass.md).

<!-- END REF -->

<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet

<!-- REF #WebServerClass.characterSet.Syntax -->

**.characterSet** : Number<br/>**.characterSet** : Text<!-- END REF -->

The <!-- REF #WebServerClass.characterSet.Summary -->jeu de caractères devant être utilisé par 4D Web Server pour communiquer avec les navigateurs connectés à l'application<!-- END REF -->. La valeur par défaut dépend de la langue du système d'exploitation. Peut être un numéro MIBEnum ou un nom (chaîne), identifiants [définis par l'IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Voici la liste des identifiants correspondant aux jeux de caractères pris en charge par le serveur Web de 4D :

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

<!-- REF #WebServerClass.cipherSuite.Syntax -->

**.cipherSuite** : Text<!-- END REF -->

The <!-- REF #WebServerClass.cipherSuite.Summary -->liste de chiffrement utilisée pour le protocole sécurisé<!-- END REF -->. Définit la priorité des algorithmes de chiffrement implémentés par le serveur Web de 4D. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). Voir la [page des chiffrements](https://www.openssl.org/docs/manmaster/man1/ciphers.html) sur le site OpenSSL.

<!-- END REF -->

<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->

**.CORSEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (*Cross-origin resource sharing*) service status for the web server<!-- END REF -->. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Lorsqu'il est activé (True), les appels XHR (par exemple les requêtes REST) à partir de pages Web hors du domaine peuvent être autorisés dans votre application (vous devez définir la liste des adresses autorisées dans la liste des domaines CORS, voir `CORSSettings` ci-dessous). Lorsqu'il est désactivé (False, par défaut), toutes les requêtes entre sites (cross site) envoyées avec CORS sont ignorées.

Par défaut : False (désactivé)

Par défaut : False (désactivé)

<!-- END REF -->

<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings

<!-- REF #WebServerClass.CORSSettings.Syntax -->

**.CORSSettings** : Collection<!-- END REF -->

A <!-- REF #WebServerClass.CORSSettings.Summary -->liste des hôtes et méthodes autorisées pour le service CORS<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Chaque objet doit contenir une propriété **host** et, optionnellement, une propriété **methods** :

- **host** (texte, obligatoire) : nom de domaine ou adresse IP à partir duquel les pages externes sont autorisées à envoyer des requêtes de données au serveur via CORS. Plusieurs attributs de domaine peuvent être ajoutés pour créer une liste blanche. Si *host* n'est pas présent ou vide, l'objet est ignoré. Plusieurs syntaxes sont supportées :
  - 192.168.5.17:8081
  - 192.168.5.17
  - 192.168.*
  - 192.168.*:8081
  - <http://192.168.5.17:8081>
  - <http://*.myDomain.com>
  - <http://myProject.myDomain.com>
  - *.myDomain.com
  - myProject.myDomain.com
  - \*

- **methods** (texte, facultatif) : méthode(s) HTTP acceptée(s) pour l'hôte CORS correspondant. Séparez chaque méthode par un ";" (ex : "post;get"). Si *methods* est vide, null ou non défini, toutes les méthodes sont activées.

<!-- END REF -->

<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog

<!-- REF #WebServerClass.debugLog.Syntax -->

**.debugLog** : Number<!-- END REF -->

The <!-- REF #WebServerClass.debugLog.Summary -->status of the HTTP request log file<!-- END REF --> (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number).

- 0 = désactivé
- 1 = activé sans les parties du corps (la taille du corps est fournie dans ce cas)
- 3 = activé avec les parties du corps en réponse uniquement
- 5 = activé avec des parties du corps sur requête uniquement
- 7 = activé avec des parties du corps en réponse et requête

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

The <!-- REF #WebServerClass.HSTSMaxAge.Summary -->durée maximale (en secondes) d'activation de HSTS pour chaque nouvelle connexion client<!-- END REF -->. Ces informations sont stockées côté client pendant la durée spécifiée.

Valeur par défaut : 63072000 (2 ans).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->

**.HTTPCompressionLevel** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->niveau de compression pour tous les échanges HTTP compressés pour le serveur HTTP 4D (requêtes clients ou réponses serveur)<!-- END REF -->. Ce sélecteur vous permet d'optimiser les échanges en priorisant soit la vitesse d'exécution (moins de compression), soit la quantité de compression (moins de vitesse).

Valeurs possibles :

- 1 à 9 (où 1 correspond à la compression la plus rapide et 9 la plus élevée).
- -1 = définir un compromis entre la vitesse et le taux de compression.

Valeurs possibles :

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->

**.HTTPCompressionThreshold** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->seuil de taille (octets) pour les requêtes en dessous desquelles les échanges ne doivent pas être compressés<!-- END REF -->. Ce paramètre est utile pour éviter de perdre du temps machine en compressant les petits échanges.

Seuil de compression par défaut = 1024 octets

<!-- END REF -->

<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<!-- REF #WebServerClass.HTTPEnabled.Syntax -->

**.HTTPEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HTTPEnabled.Summary -->État du protocole HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort

<!-- REF #WebServerClass.HTTPPort.Syntax -->

**.HTTPPort** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPPort.Summary -->numéro de port IP d'écoute pour HTTP<!-- END REF -->.

Numéro de port IP d'écoute pour HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->

**.HTTPTrace** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. Pour des raisons de sécurité, le serveur Web rejette par défaut les requêtes `HTTP TRACE` avec une erreur 405. Lorsque le `HTTP TRACE` est activé, le serveur Web répond aux requêtes `HTTP TRACE` avec la ligne, l'en-tête et le corps de la requête.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled

<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->

**.HTTPSEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HTTPSEnabled.Summary -->État du protocole HTTPS<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<!-- REF #WebServerClass.HTTPSPort.Syntax -->

**.HTTPSPort** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPSPort.Summary -->numéro de port IP d'écoute pour HTTPS<!-- END REF -->.

Numéro de port IP d'écoute pour HTTPS<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->

**.inactiveProcessTimeout** : Number<!-- END REF -->

> Cette propriété n'est pas retournée [en mode sessions évolutives](#scalablesession).

The <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->life duration (in minutes) of the inactive legacy session processes<!-- END REF -->. À la fin de cette période, le cookie de session expire et n'est plus envoyé par le client HTTP.

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

The <!-- REF #WebServerClass.IPAddressToListen.Summary -->Adresse IP sur laquelle le serveur Web 4D recevra les requêtes HTTP<!-- END REF -->. Par défaut, aucune adresse spécifique n'est définie. Les formats de chaîne IPv6 et IPv4 sont pris en charge.

<!-- END REF -->

<!-- REF WebServerClass.isRunning.Desc -->

## .isRunning

<!-- REF #WebServerClass.isRunning.Syntax -->

**.isRunning** : Boolean<!-- END REF -->

*Propriété en lecture seulement.*

The <!-- REF #WebServerClass.isRunning.Summary -->état d'exécution du serveur Web<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->

**.keepSession** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.keepSession.Summary -->`True` if legacy sessions are enabled in the web server, `False` otherwise<!-- END REF -->.

##### Voir également

[.scalableSession](#scalablesession)

<!-- END REF -->

<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording

<!-- REF #WebServerClass.logRecording.Syntax -->

**.logRecording** : Number<!-- END REF -->

The <!-- REF #WebServerClass.logRecording.Summary -->log requests (logweb.txt) recording value<!-- END REF -->.

- 0 = Ne pas enregistrer (par défaut)
- 1 = Enregistrer au format CLF
- 2 = Enregistrer au format DLF
- 3 = Enregistrer au format ELF
- 4 = Enregistrer au format WLF

<!-- END REF -->

<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses

<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->

**.maxConcurrentProcesses** : Number<!-- END REF -->

The <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->nombre maximal de process Web simultanés pris en charge par le serveur Web<!-- END REF -->. Lorsque ce nombre (moins un) est atteint, 4D ne crée aucun autre process et retourne le statut HTTP 503 - Service Unavailable to all new requests.

Valeurs possibles : 500000 - 2147483648

Par défaut = 80

<!-- END REF -->

<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<!-- REF #WebServerClass.maxRequestSize.Syntax -->

**.maxRequestSize** : Number<!-- END REF -->

The <!-- REF #WebServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passer la valeur maximale (2147483647) signifie qu'en pratique, aucune limite n'est définie. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses. Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses.

Valeurs possibles : 500000 - 2147483647

<!-- END REF -->

<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->

**.maxSessions** : Number<!-- END REF -->

> Cette propriété n'est pas retournée [en mode sessions évolutives](#scalablesession).

The <!-- REF #WebServerClass.maxSessions.Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. Lorsque vous atteignez la limite, la session la plus ancienne est fermée (et la méthode base `On Web Legacy Close Session` est appelée) si le serveur Web doit en créer une nouvelle. Le nombre de sessions legacy simultanées ne peut pas dépasser le nombre total de processus Web (propriété `maxConcurrentProcesses`, 100 par défaut)

<!-- END REF -->

<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->

**.minTLSVersion** : Number<!-- END REF -->

The <!-- REF #WebServerClass.minTLSVersion.Summary -->version TLS minimale acceptée pour les connexions<!-- END REF -->. Les tentatives de connexion de clients prenant en charge uniquement les versions inférieures au minimum seront rejetées.

Valeurs possibles :

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (par défaut)
- 4 = TLSv1_3

En cas de modification, le serveur doit être redémarré pour utiliser la nouvelle valeur.

<!-- END REF -->

<!-- REF WebServerClass.name.Desc -->

## .name

<!-- REF #WebServerClass.name.Syntax -->

**.name** : Text<!-- END REF -->

*Propriété en lecture seulement.*

The <!-- REF #WebServerClass.name.Summary -->nom de l'application de serveur Web<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->

**.openSSLVersion** : Text<!-- END REF -->

*Propriété en lecture seulement.*

The <!-- REF #WebServerClass.openSSLVersion.Summary -->version de la bibliothèque OpenSSL utilisée<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->

**.perfectForwardSecrecy** : Boolean<!-- END REF -->

*Propriété en lecture seulement.*

The <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->Disponibilité PFS sur le serveur<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.rootFolder.Desc -->
## .rootFolder

<!-- REF #WebServerClass.rootFolder.Syntax -->

**.rootFolder** : Text<!-- END REF -->

The <!-- REF #WebServerClass.rootFolder.Summary -->chemin du dossier racine du serveur Web<!-- END REF -->. Chemin d'accès complet au format POSIX utilisant des filesystems. Peut être passé comme objet `Folder` dans le paramètre `settings`.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->
## .scalableSession

<!-- REF #WebServerClass.scalableSession.Syntax -->

**.scalableSession** : Boolean<!-- END REF -->

t<!-- REF #WebServerClass.scalableSession.Summary -->`True` if scalable sessions are used in the web server, and `False` otherwise<!-- END REF -->.

##### Voir également

[.keepSession](#keepsession)
<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->

**.sessionCookieDomain** : Text<!-- END REF -->

The <!-- REF #WebServerClass.sessionCookieDomain.Summary -->"domain" field of the session cookie<!-- END REF -->. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/4DACTION" pour ce sélecteur, le client enverra un cookie uniquement pour les requêtes dynamiques commençant par 4DACTION, et non pour les images, les pages statiques, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<!-- REF #WebServerClass.sessionCookieName.Syntax -->

**.sessionCookieName** : Text<!-- END REF -->

The <!-- REF #WebServerClass.sessionCookieName.Summary -->nom du cookie utilisé pour stocker l'ID de session<!-- END REF -->.

*Propriété en lecture seulement.*

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
| v19     | Ajoutées      |

</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->

**.sessionCookieSameSite** : Text<!-- END REF -->

The <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->"SameSite" session cookie value<!-- END REF -->. Valeurs possibles (avec constantes):

| Constante           | Value    | Description                                                                                                                               |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *Valeur par défaut* - Les cookies sont envoyés uniquement dans un contexte interne (first-party)                                          |
| Web SameSite Lax    | "Lax"    | Les cookies sont également envoyés aux sous-requêtes intersites mais uniquement lorsque l'internaute navigue vers le site d'origine (i.e. |
| Web SameSite None   | "None"   | Les cookies sont envoyés dans tous les contextes, i.e. en réponse aux requêtes internes (first-party) et aux requêtes cross-origin.       |

Tous les paramètres des [objets Web Server](#web-server-object) peuvent être personnalisés, hormis les propriétés en lecture seule ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), et [.sessionCookieName](#sessioncookiename)).

<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->

**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> Cette propriété n'est pas utilisée dans le [mode de sessions évolutives](#scalablesession) (il n'existe pas de validation d'adresse IP).

The <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->Validation d'adresse IP pour les cookies de session<!-- END REF -->. Pour des raisons de sécurité, le serveur Web vérifie par défaut l'adresse IP de chaque requête contenant un cookie de session et la rejette si cette adresse ne correspond pas à l'adresse IP utilisée pour créer le cookie. Dans certaines applications spécifiques, vous souhaiterez peut-être désactiver cette validation et accepter les cookies de session, même lorsque leurs adresses IP ne correspondent pas. Par exemple, lorsque les appareils mobiles basculent entre les réseaux Wifi et 3G/4G, leur adresse IP change. Dans ce cas, vous pouvez permettre aux clients de continuer à utiliser leurs sessions Web même lorsque les adresses IP changent (ce paramétrage abaisse le niveau de sécurité de votre application).

<!-- END REF -->

<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

<!-- REF #WebServerClass.start().Syntax -->


**.start**() : Object<br/>**.start**( *settings* : Object ) : Object<!-- END REF -->

<!-- REF #WebServerClass.start().Params -->

| Paramètres | Type   |    | Description                            |
| ---------- | ------ | -- | -------------------------------------- |
| settings   | Object | -> | Paramètres du serveur web au démarrage |
| Result     | Object | <- | État du démarrage du serveur web       |


<!-- END REF -->

The `.start()` function <!-- REF #WebServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional *settings* object parameter.

Le serveur Web démarre avec les paramètres par défaut définis dans le fichier de settings du projet ou (base hôte uniquement) à l'aide de la commande `WEB SET OPTION`. Cependant, à l'aide du paramètre *settings*, vous pouvez définir des paramètres personnalisés pour la session du serveur Web.

Tous les paramètres des [objets Web Server](#web-server-object) peuvent être personnalisés, hormis les propriétés en lecture seule ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), et [.sessionCookieName](#sessioncookiename)).

Pour arrêter le serveur Web de la base :

#### Objet retourné

La fonction retourne un objet décrivant le statut démarré du serveur Web. Cet objet peut avoir les propriétés suivantes :

| Propriété |                         | Type        | Description                                                               |
| --------- | ----------------------- | ----------- | ------------------------------------------------------------------------- |
| success   |                         | Boolean     | Vrai si le serveur web a été correctement démarré, sinon Faux             |
| errors    |                         | Collections | Pile d'erreurs 4D (non retournée si le serveur web a démarré avec succès) |
|           | \[].errCode            | Number      | Code d'erreur 4D                                                          |
|           | \[].message            | Text        | Description de l'erreur 4D                                                |
|           | \[].componentSignature | Text        | Signature du composant interne qui a retourné l'erreur                    |
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

| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

<!-- REF #WebServerClass.stop().Syntax -->

**.stop()** <!-- END REF -->

<!-- REF #WebServerClass.stop().Params -->

| Paramètres | Type |  | Description                                            |
| ---------- | ---- |  | ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF --> |

The `.stop()` function <!-- REF #WebServerClass.stop().Summary -->stops the web server on which it is applied<!-- END REF -->.

Si le serveur Web était lancé, toutes les connexions Web et tous les process Web sont fermés une fois que les requêtes actuellement traitées sont terminées. Si le serveur Web n'était pas démarré, la fonction ne fait rien.
> Cette fonction réinitialise les paramètres Web personnalisés définis pour la session à l'aide du paramètre *settings* de la fonction [`.start()`](#start), le cas échéant.

#### Exemple

Pour arrêter le serveur Web de la base :

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```


<!-- END REF -->
