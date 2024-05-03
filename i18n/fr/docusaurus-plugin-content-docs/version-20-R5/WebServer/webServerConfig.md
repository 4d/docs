---
id: webServerConfig
title: Configuration
---

Les paramètres du serveur web 4D comprennent les paramètres de sécurité, les ports d'écoute, les chemins par défaut et diverses options couvrant toutes les fonctionnalités du serveur. 4D fournit des valeurs par défaut pour tous les paramètres.

## Configurer les paramètres

Vous pouvez configurer les paramètres du serveur web 4D, en fonction de la portée et du serveur que vous souhaitez configurer :

| Emplacement du paramètre                                                         | Portée                                                                   | Serveur web concerné                                                 |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| [webServer object](webServerObject.md)                                           | Temporaire (session courante)                         | N'importe quel serveur web, y compris les serveurs Web de composants |
| `WEB SET OPTION` or a `WEB XXX` command                                          | Temporaire (session courante)                         | Serveur principal                                                    |
| [**Settings** dialog box](../settings/web.md) (**Web** pages) | Permanent (toutes les sessions, stocké sur le disque) | Serveur principal                                                    |

> Certains paramètres ne sont pas disponibles depuis tous les emplacements.

## Cache

| Peut être configuré via  | Nom                                                                                | Commentaires |
| ------------------------ | ---------------------------------------------------------------------------------- | ------------ |
| Fenêtre de configuration | [Configuration page/Use the 4D Web cache](../settings/web.md#use-the-4d-web-cache) |              |
| Fenêtre de configuration | [Configuration page/Page Cache Size](../settings/web.md#page-cache-size)           |              |

Active et configure le cache des pages web.

The 4D web server has a cache that allows you to load static pages, GIF images, JPEG images (<512 kb) and style sheets (.css files) in memory, as they are requested. L'utilisation du cache permet d'augmenter considérablement les performances du serveur web lors de l'envoi de pages statiques. Le cache est partagé entre tous les processus web. Lorsque le cache est activé, le serveur Web 4D recherche d'abord dans le cache toute page statique demandée par le navigateur. S'il trouve la page, il l'envoie immédiatement. Sinon, 4D charge la page à partir du disque et la place dans le cache.

You can modify the size of the cache in the **Pages Cache Size** area. La valeur à définir dépend du nombre et de la taille des pages statiques de votre site Web, ainsi que des ressources dont dispose la machine hôte.

> While using your web database, you can check the performance of the cache by using the `WEB GET STATISTICS` command. Si, par exemple, vous remarquez que le taux d'utilisation du cache est proche de 100 %, vous pouvez envisager d'augmenter la taille qui lui a été allouée. Les URL [/4DSTATS] et [/4DHTMLSTATS] vous permettent également d'obtenir des informations sur l'état du cache.

## Dossier de certificat

| Peut être configuré via | Nom                 | Commentaires                                                                                                                                           |
| ----------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| objet webServer         | `certificateFolder` | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the _settings_ parameter of the `start()` function. |

Dossier qui contient les fichiers de certificat TLS pour le serveur web.

By default with 4D or 4D Server, these files must be placed next to the [project folder](Project/architecture.md#project-folder).

With 4D in remote mode, these files must be located in the local resources folder of the database on the remote machine (see `4D Client Database Folder` paragraph of the `Get 4D folder` command). Vous devez copier ces fichiers manuellement sur la machine distante.

> TLS certificate files are _key.pem_ (document containing the private encryption key) and _cert.pem_ (document containing the certificate).

## Jeu de caractères

| Peut être configuré via  | Nom                                                                                  | Commentaires                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| objet webServer          | `characterSet`                                                                       | Entier long (MIBEnum) ou chaîne de caractères (nom) |
| `WEB SET OPTION`         | `Web character set`                                                                  | Entier long (MIBEnum) ou chaîne de caractères (nom) |
| Fenêtre de configuration | [Options (II) page/Standard Set](../settings/web.md#standard-set) | Menu popup                                                                                |

Définit le jeu de caractères à utiliser par le serveur web 4D. La valeur par défaut dépend de la langue du système d'exploitation.

> Ce paramètre est également utilisé pour générer des États Rapides au format HTML.

## Suite cryptographique

| Peut être configuré via | Nom                                                | Commentaires |
| ----------------------- | -------------------------------------------------- | ------------ |
| objet webServer         | [`cipherSuite`](API/WebServerClass.md#ciphersuite) | Text         |

Suite cryptographique utilisée pour le protocole sécurisé. Fixe la priorité des algorithmes de chiffrement implémentés par le serveur web. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

> The default cipher list used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server, client/server connections, as well as the HTTP client and all the 4D commands that make use of the secure protocol.

## Paramètres CORS

| Peut être configuré via  | Nom                                                                                                                                | Commentaires                                                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| objet webServer          | [`CORSSettings`](API/WebServerClass.md#corssettings)                                                                               | Collection d'objets (Liste des hôtes et méthodes autorisées pour le service CORS)                                        |
| `WEB SET OPTION`         | `Web CORS settings`                                                                                                                | Collection d'objets (Liste des hôtes et méthodes autorisées pour le service CORS)                                        |
| Fenêtre de configuration | [Options (II) page/Domain names and HTTP methods allowed](../settings/web.md#domain-names-HTTP-methods-allowed) | Cliquez sur le bouton [+] pour ajouter un nom de domaine autorisé et sa ou ses méthodes |

Liste des hôtes et méthodes autorisées pour le service CORS.

#### Noms de domaine

Nom de domaine ou adresse IP à partir desquels les pages externes sont autorisées à envoyer des demandes de données au serveur via CORS. Plusieurs attributs de domaine peuvent être ajoutés pour créer une liste blanche. Plusieurs syntaxes sont supportées :

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

#### Méthodes HTTP autorisées (propriété méthodes)

Méthodes HTTP acceptées pour l'hôte CORS correspondant. Les méthodes HTTP suivantes sont prises en charge :

- GET
- HEAD
- POST
- PUT
- DELETE
- OPTIONS
- TRACE
- PATCH

Séparez chaque méthode par un ";" (ex : "post;get"). Si Méthodes est vide, null ou non défini, toutes les méthodes sont activées.

#### Voir également

[Enable CORS Service](#enable-cors-service)

## Debug log

| Peut être configuré via | Nom             | Commentaires |
| ----------------------- | --------------- | ------------ |
| objet webServer         | `debugLog`      | number       |
| `WEB SET OPTION`        | `Web debug log` | number       |

Status of the HTTP request log file of the web server ([_HTTPDebugLog_nn.txt_](../Debugging/debugLogFiles.md#httpdebuglogtxt), stored in the "Logs" folder of the application -- nn is the file number). Il est utile pour déboguer les problèmes liés au serveur Web. Il enregistre chaque demande et chaque réponse en mode brut (raw). Les requêtes sont enregistrées dans leur totalité (en-têtes compris). Les parties body peuvent également être enregistrées.

| Valeur | Constante                      | Description                                                                                              |
| ------ | ------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 0      | wdl disable                    | Les debug logs Web HTTP sont désactivés                                                                  |
| 1      | wdl enable without body        | Web HTTP debug log is enabled without body parts (body size is provided in this case) |
| 3      | wdl enable with response body  | Web HTTP debug log is enabled with body part in response only                                            |
| 5      | wdl enable with request body   | Web HTTP debug log is enabled with body part in request only                                             |
| 7      | wdl enable with all body parts | Web HTTP debug log is enabled with body parts in response and request                                    |

## Page d'accueil par défaut

| Peut être configuré via  | Nom                                                                          | Commentaires                                 |
| ------------------------ | ---------------------------------------------------------------------------- | -------------------------------------------- |
| objet webServer          | [`defaultHomepage`](API/WebServerClass.md#defaulthomepage)                   | Text                                         |
| `WEB SET HOME PAGE`      |                                                                              | Peut être différente pour chaque web process |
| Fenêtre de configuration | [Configuration page/Default Home Page](../settings/web.md#default-home-page) |                                              |

Désigne une page comme page d'accueil par défaut pour le serveur web. Cette page peut être statique ou [semi-dynamic].

Par défaut, quand le serveur web est lancé pour la première fois, 4D crée une page d'accueil appelée "index.html" et la place dans le dossier HTML racine. Si vous ne modifiez pas cette configuration, n'importe quel browser se connectant au serveur web obtiendra cette page :

![](../assets/en/WebServer/defaultHomePage.png)

Vous pouvez désigner une autre page comme page d'accueil par défaut en entrant son chemin d'accès :

- The path is relative to the [default HTML root folder](#root-folder).
- Le chemin ext exprimé avec la syntaxe POSIX (les dossiers sont séparés par un slash (/)),
- Le chemin ne doit pas commencer ou finir par un slash.

Par exemple, pour que la page d'accueil par défaut soit "MyHome.htm", si elle se trouve dans le dossier "Web" (lui-même situé dans le dossier racine HTML par défaut), utilisez "Web/MyHome.htm".

If you do not specify any default home page, the `On Web Connection` database method is called. Il vous appartient de traiter la demande de manière procédurale.

## Activer CORS

| Peut être configuré via  | Nom                                                                                | Commentaires                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| objet webServer          | [`CORSEnabled`](API/WebServerClass.md#corsenabled)                                 | True pour activer CORS (False par défaut). |
| `WEB SET OPTION`         | `Web CORS enabled`                                                                 | 0 (désactivé, par défaut) ou 1 (activé) |
| Fenêtre de configuration | [Options (II) page/Enable CORS](../settings/web.md#enable-cors) | Décoché par défaut                                                            |

Le serveur Web 4D implémente le cross-origin resource sharing (CORS) pour permettre à des pages Web spécifiques servies à partir d'un autre domaine d'accéder aux ressources de l'application Web actuelle via des appels XHR, par exemple via REST. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Lorsqu'elle l'option est activée, les appels XHR (par exemple, les requêtes REST) provenant de pages Web situées en dehors du domaine peuvent être autorisés dans votre application (vous devez définir la liste des adresses autorisées dans la liste de domaines CORS, voir Paramètres CORS ci-dessous). Dans ce cas, si un domaine ou une méthode non autorisé(e) envoie une demande intersite, celle-ci est rejetée avec une réponse d'erreur "403 - interdit".

Lorsqu'elle est désactivée (par défaut), toutes les demandes intersites envoyées avec CORS sont ignorées.

For more information about CORS, please refer to the [Cross-origin resource sharing page](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

#### Voir également

[CORS Settings](#cors-settings)

## Activer HTTP

| Peut être configuré via  | Nom                                                              | Commentaires |
| ------------------------ | ---------------------------------------------------------------- | ------------ |
| objet webServer          | [`HTTPEnabled`](API/WebServerClass.md#httpenabled)               | boolean      |
| `WEB SET OPTION`         | `Web HTTP enabled`                                               |              |
| Fenêtre de configuration | [Configuration page/Enable HTTP](../settings/web.md#enable-http) |              |

Indique si le web server accepte des connexions non sécurisées.

## Activer HTTPS

| Peut être configuré via  | Nom                                                  | Commentaires |
| ------------------------ | ---------------------------------------------------- | ------------ |
| objet webServer          | [`HTTPSEnabled`](API/WebServerClass.md#httpsenabled) | boolean      |
| `WEB SET OPTION`         | `Web HTTPS enabled`                                  |              |
| Fenêtre de configuration | Configuration > Activer HTTPS                        |              |

Statut de la communication via HTTPS. This option is described in [this section](Admin/tls.md).

## Activer HSTS

| Peut être configuré via | Nom                                                | Commentaires                                                                  |
| ----------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------- |
| objet webServer         | [`HSTSEnabled`](API/WebServerClass.md#hstsenabled) | Booléen, True pour activer le HSTS (False par défaut)      |
| `WEB SET OPTION`        | `Web HSTS enabled`                                 | 0 (désactivé, par défaut) ou 1 (activé) |

État de HTTP Strict Transport Security (HSTS).

When [HTTPS is enabled](#enable-https), keep in mind that if [HTTP is also enabled](#enable-http), the browser can still switch between HTTPS and HTTP (for example, in the browser URL area, the user can replace "https" by "http"). To forbid http redirections, you can [disable HTTP](#enable-http), however in this case an error message is displayed to client HTTP requests.

HSTS permet au serveur web 4D de déclarer que les navigateurs ne doivent interagir avec lui que par des connexions HTTPS sécurisées. Une fois activé, le serveur Web 4D ajoutera automatiquement des informations relatives au HSTS à tous les en-têtes des réponses. Les navigateurs enregistreront les informations HSTS la première fois qu'ils recevront une réponse du serveur web 4D, puis toutes les futures demandes HTTP seront automatiquement transformées en demandes HTTPS. The length of time this information is stored by the browser is specified with the Web **HSTS max age** setting.

> HSTS requires that [HTTPS is enabled](#enable-https) on the server. [HTTP](#enable-http) must also be enabled to allow client initial connections.

> You can get the current connection mode using the `WEB Is secured connection` command.

## HSTS Max Age

| Peut être configuré via | Nom                                              | Commentaires       |
| ----------------------- | ------------------------------------------------ | ------------------ |
| objet webServer         | [`HSTSMaxAge`](API/WebServerClass.md#hstsmaxage) | nombre en secondes |
| `WEB SET OPTION`        | `Web HSTS max age`                               | nombre en secondes |

Spécifie la durée maximale (en secondes) d'activation de HSTS pour chaque nouvelle connexion client. Ces informations sont stockées côté client pendant la durée spécifiée.
Valeur par défaut : 63072000 (2 ans)

> **Warning:** Once HSTS is enabled, client connections will continue to use this mechanism for the specified duration. Lorsque vous testez vos applications, il est recommandé de définir une courte durée pour pouvoir passer du mode de connexion sécurisé au mode non sécurisé si nécessaire.

## Niveau de compression

| Peut être configuré via | Nom                                                                  | Commentaires                        |
| ----------------------- | -------------------------------------------------------------------- | ----------------------------------- |
| objet webServer         | [`HTTPCompressionLevel`](API/WebServerClass.md#httpcompressionlevel) |                                     |
| `WEB SET OPTION`        | `Web HTTP compression level`                                         | S'applique au Web et au service Web |

Niveau de compression pour tous les échanges HTTP compressés pour le serveur web 4D (requêtes clients ou réponses serveur). Cette option vous permet d'optimiser les échanges en privilégiant soit la vitesse d'exécution (moins de compression), soit la quantité de compression (moins de vitesse). Le choix d'une valeur dépend de la taille et du type de données échangées.

Passez une valeur de 1 à 9 où 1 est la compression la plus rapide et 9 la plus élevée. Vous pouvez également passer -1 pour un compromis entre vitesse et taux de compression. Par défaut, le niveau de compression est de 1 (compression plus rapide).

## Seuil de compression HTTP

| Peut être configuré via | Nom                                                                          | Commentaires |
| ----------------------- | ---------------------------------------------------------------------------- | ------------ |
| objet webServer         | [`HTTPCompressionThreshold`](API/WebServerClass.md#httpcompressionthreshold) |              |
| `WEB SET OPTION`        | `Web HTTP compression threshold`                                             |              |

Dans le cadre des échanges HTTP optimisés, seuil de taille des requêtes en dessous duquel les échanges ne doivent pas être compressés. Ce paramètre est utile pour éviter de perdre du temps machine en compressant les petits échanges.

Comme valeur, passez la taille exprimée en octets. Par défaut, le seuil de compression est fixé à 1024 octets.

## Port HTTP

| Peut être configuré via  | Nom                                                          | Commentaires |
| ------------------------ | ------------------------------------------------------------ | ------------ |
| objet webServer          | [`HTTPPort`](API/WebServerClass.md#httpport)                 | number       |
| `WEB SET OPTION`         | `Web port ID`                                                |              |
| Fenêtre de configuration | [Configuration page/HTTP Port](../settings/web.md#http-port) |              |

Numéro de port IP (TCP) d'écoute pour HTTP. Par défaut, 4D publie une application Web sur le port HTTP normal (port TCP), qui est le port 80. Si ce port est déjà utilisé par un autre service Web, vous devez modifier le port HTTP utilisé par 4D pour ce projet.

> In macOS, modifying the HTTP port allows you to start the 4D web server without being the root user of the machine (see [macOS HelperTool](#macos-helpertool)).

À partir d'un navigateur Web, vous devez inclure le numéro de port HTTP par défaut dans l'adresse que vous saisissez pour vous connecter à l'application Web. L'adresse doit comporter un suffixe composé de deux points suivis du numéro de port. Par exemple, si vous utilisez le port HTTP numéro 8080, indiquez "123.4.567.89:8080".

> **Warning**: If you use TCP port numbers other than the default numbers (80 for standard HTTP and 443 for HTTPS), be careful not to use port numbers that are defaults for other services that you might want to use simultaneously. Par exemple, si vous prévoyez également d'utiliser le protocole FTP sur votre machine de serveur Web, n'utilisez pas les ports TCP 20 et 21, qui sont les ports par défaut pour ce protocole. Les numéros de ports inférieurs à 256 sont réservés à des services connus, et les numéros de ports de 256 à 1024 sont réservés à des services spécifiques issus des plateformes UNIX. Pour une sécurité maximale, spécifiez un numéro de port au-delà de ces intervalles (par exemple, dans les 2000 ou 3000).

Si vous spécifiez 0, 4D utilisera le numéro de port HTTP 80 par défaut.

## HTTP Trace

| Peut être configuré via | Nom                                            | Commentaires                                             |
| ----------------------- | ---------------------------------------------- | -------------------------------------------------------- |
| objet webServer         | [`HTTPTrace`](API/WebServerClass.md#httptrace) | Booléen, false par défaut                                |
| `WEB SET OPTION`        | `Web HTTP TRACE`                               | Entier long, 0 par défaut (désactivé) |

Activation de la méthode HTTP TRACE dans le serveur web 4D. Pour des raisons de sécurité, le serveur web 4D rejette par défaut les demandes HTTP TRACE avec une erreur 405. Si nécessaire, vous pouvez activer la méthode HTTP TRACE, auquel cas le serveur Web 4D répond aux demandes HTTP TRACE avec la request line, l'en-tête et le body.

## Port HTTPS

| Peut être configuré via  | Nom                                                            | Commentaires |
| ------------------------ | -------------------------------------------------------------- | ------------ |
| objet webServer          | [`HTTPSPort`](API/WebServerClass.md#httpsport)                 | number       |
| `WEB SET OPTION`         | `Web HTTPS port ID`                                            |              |
| Fenêtre de configuration | [Configuration page/HTTPS Port](../settings/web.md#https-port) |              |

Numéro de port IP d'écoute pour les connections HTTP via TLS. La valeur par défaut est 443 (valeur standard). See also [HTTP Port](#http-port) for information on port numbers.

## Conservation des process inactifs

| Peut être configuré via  | Nom                                                                                                         | Commentaires |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------ |
| objet webServer          | [`inactiveProcessTimeout`](API/WebServerClass.md#inactiveprocesstimeout)                                    |              |
| `WEB SET OPTION`         | `Web inactive process timeout`                                                                              |              |
| Fenêtre de configuration | [Options (I) page/Inactive Process Timeout](../settings/web.md#inactive-process-timeout) | Curseur      |

Durée de vie (en minutes) des process inactifs associés aux sessions. At the end of the timeout, the process is killed on the server, the `On Web Close Process` database method is called, then the session context is destroyed.

Valeur par défaut : 480 minutes (passez 0 pour restaurer la valeur par défaut)

## Durée de vie des sessions inactives

| Peut être configuré via | Nom                                                                      | Commentaires |
| ----------------------- | ------------------------------------------------------------------------ | ------------ |
| objet webServer         | [`inactiveSessionTimeout`](API/WebServerClass.md#inactivesessiontimeout) |              |
| `WEB SET OPTION`        | `Web inactive session timeout`                                           |              |

Durée de vie (en minutes) des sessions inactives (durée définie dans le cookie). À la fin de cette période, le cookie de session expire et n'est plus envoyé par le client HTTP.

Valeur par défaut : 480 minutes (passez 0 pour restaurer la valeur par défaut)

## Adresse IP d'écoute

| Peut être configuré via  | Nom                                                            | Commentaires |
| ------------------------ | -------------------------------------------------------------- | ------------ |
| objet webServer          | [`IPAddressToListen`](API/WebServerClass.md#ipaddresstolisten) |              |
| `WEB SET OPTION`         | `Web IP address to listen`                                     |              |
| Fenêtre de configuration | [Configuration page/IP Address](../settings/web.md#ip-address) | Menu popup   |

Adresses IP (chaînes) sur lesquelles le serveur web 4D recevra les requêtes HTTP (4D local et 4D Server).

By default, no specific address is defined (**Any** value in the Settings dialog box), which means that the server responds to all IP addresses. Lorsque vous désignez une adresse spécifique, le serveur ne répond qu'aux demandes envoyées à cette adresse. Cette fonction est conçue pour être utilisée avec les serveurs Web 4D situés sur des machines ayant plusieurs adresses TCP/IP. Par exemple, c'est régulièrement le cas dans des contextes d'hébergement.

Valeurs possibles: Chaîne de caractères représentant l'adresse IP. Les formats IPv6 (e.g. "2001:0db8:0000:0000:0000:ff00:0042:8329") et IPv4 (e.g. "123.45.67.89") sont tous les deux supportés.

#### À propos du support de l'IPv6

- **No warning when TCP port is occupied**<br/>
  When the server is set to respond on "Any" IP addresses, if the TCP port is being used by another application, this is not indicated when the server is started. En fait, le serveur 4D ne détecte pas d'erreur dans ce cas car le port reste libre sur l'adresse IPv6. Cependant, il n'est pas possible d'y accéder en utilisant l'adresse IPv4 de la machine, ni au moyen de l'adresse locale : 127.0.0.1.

Si votre serveur 4D ne semble pas répondre sur le port défini, vous pouvez tester l'adresse [::1] sur la machine serveur (équivalent à 127.0.0.1 pour IPv6, ajoutez [:portNum] pour tester un autre numéro de port). Si 4D répond, il est probable qu'une autre application utilise le port en IPv4.

- **IPv4-mapped IPv6 addresses**<br/>
  To standardize processing, 4D provides a standard hybrid representation of IPv4 addresses in IPv6. Ces adresses sont écrites avec un préfixe de 96 bits au format IPv6, suivi de 32 bits écrits dans la notation décimale à point d'IPv4. Par exemple, ::ffff:192.168.2.34 représente l'adresse IPv4 192.168.2.34.

- **Indication of port numbers**<br/>
  Since IPv6 notation uses colons (:), adding port numbers may lead to some confusion, for example:

```code4d
	2001:0DB8::85a3:0:ac1f:8001 // IPv6 address
	2001:0DB8::85a3:0:ac1f:8001:8081 // IPv6 address with port 8081
```

Pour éviter cette confusion, nous recommandons d'utiliser la notation [ ] lorsque vous combinez une adresse IPv6 avec un numéro de port. Par exemple:

```code4d
	[2001:0DB8::85a3:0:ac1f:8001]:8081 //IPv6 address with port 8081
```

## Keep Session

| Peut être configuré via  | Nom                                                                                                                                                            | Commentaires                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| objet webServer          | [`keepSession`](API/WebServerClass.md#keepsession)                                                                                                             |                                       |
| `WEB SET OPTION`         | `Web keep session`                                                                                                                                             |                                       |
| Fenêtre de configuration | [Options (I) page/Legacy sessions (single process sessions)](../settings/web.md#legacy-sessions-single-process-sessions) | uniquement dans les projets convertis |

Statut de la gestion de l'ancienne session pour le serveur Web 4D (obsolète).

> Lorsque cette option est cochée, l'option "réutilisation des contextes temporaires" est automatiquement cochée (et verrouillée).

## Enregistrement des logs

| Peut être configuré via  | Nom                                                                 | Commentaires |
| ------------------------ | ------------------------------------------------------------------- | ------------ |
| objet webServer          | [`logRecording`](API/WebServerClass.md#logrecording)                |              |
| `WEB SET OPTION`         | `Web log recording`                                                 |              |
| Fenêtre de configuration | [Log (type) page](../settings/web.md#log-format) | Menu popup   |

Starts or stops the recording of requests received by the 4D web server in the _logweb.txt_ file and sets its format. Par défaut, les requêtes ne sont pas enregistrées (0/Pas de journal). When enabled, the _logweb.txt_ file is automatically placed in the Logs folder.

Ce paramètre vous permet de sélectionner le format de ce fichier. Valeurs possibles :

| Valeur | Nom du format  | Description                                                                                                                                                                                                                                              |
| ------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0      | Pas de journal | Par défaut                                                                                                                                                                                                                                               |
| 1      | CLF            | Common Log Format - Each line of the file represents a request, such as: `host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length` - Each field is separated by a space and each line ends by the CR/LF sequence. |
| 2      | DLF            | Combined Log Format - Similaire au format NSI mais ajoute deux champs HTTP supplémentaires à la fin de chaque requête : Referer et User-agent.                                                                           |
| 3      | ELF            | Extended Log Format - À personnaliser dans la boîte de dialogue des Propriétés                                                                                                                                                                           |
| 4      | WLF            | Webstar Log Format- À personnaliser dans la boîte de dialogue des Propriétés                                                                                                                                                                             |

> Formats 3 and 4 are custom formats whose contents must be set beforehand in the [Settings dialog box](../settings/web.md#log-format). Si vous utilisez l'un de ces formats sans qu'aucun de ses champs n'ait été sélectionné sur cette page, le fichier d'enregistrement des logs ne sera pas généré.

## Process Web simultanés maxi

| Peut être configuré via  | Nom                                                                                                                         | Commentaires |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------ |
| objet webServer          | [`maxConcurrentProcesses`](API/WebServerClass.md#maxconcurrentprocesses)                                                    |              |
| `WEB SET OPTION`         | `Web max concurrent processes`                                                                                              |              |
| Fenêtre de configuration | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#maximum-concurrent-web-processes) |              |

Strictly high limit of concurrent web processes that can be simultaneously open on the server when **no sessions** or **legacy sessions** are used (**scalable sessions** support an [unlimited number](sessions.md) of preemptive processes). Ce paramètre permet d'éviter une saturation du serveur lorsqu'il reçoit un nombre important de requêtes When the maximum number of concurrent Web processes (minus one) is reached, 4D no longer creates new processes and sends the HTTP status `503 - Service Unavailable` to all new requests.

La valeur par défaut est 100. Vous pouvez la fixer entre 10 et 32000.

## Taille de requête maximale

| Peut être configuré via | Nom                                                      | Commentaires |
| ----------------------- | -------------------------------------------------------- | ------------ |
| objet webServer         | [`maxRequestSize`](API/WebServerClass.md#maxrequestsize) |              |
| `WEB SET OPTION`        | `Web maximum requests size`                              |              |

Taille maximale (en octets) des requêtes HTTP entrantes (POST) que le serveur Web est autorisé à traiter. Par défaut, la valeur est de 2 000 000, c'est-à-dire un peu moins de 2 Mo. Le dépassement de la valeur maximale (2 147 483 648) indique, en pratique, qu'aucune limite n'est fixée.

Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses. This limit is used to avoid web server saturation due to incoming requests that are too large.

Valeurs possibles: 500 000 - 2147483648.

## Nombre maximal de sessions

| Peut être configuré via | Nom                                                | Commentaires |
| ----------------------- | -------------------------------------------------- | ------------ |
| objet webServer         | [`maxSessions`](API/WebServerClass.md#maxsessions) |              |
| `WEB SET OPTION`        | `Web max sessions	`                                |              |

Nombre maximum de sessions simultanées. When you reach the limit set, the oldest session is closed (and `On Web Close Process` database method is called) if the Web server needs to create a new one. The number of simultaneous sessions cannot exceed the [maximum number of Web processes](#maximum-concurrent-web-processes) (100 by default).

Valeur par défaut : 100 (passez 0 pour restaurer la valeur par défaut).

## Version TLS minimale

| Peut être configuré via | Nom                                                    | Commentaires |
| ----------------------- | ------------------------------------------------------ | ------------ |
| objet webServer         | [`minTLSVersion`](API/WebServerClass.md#mintlsversion) | number       |

Version TLS minimale acceptée pour les connexions. Les tentatives de connexion de clients prenant en charge uniquement les versions inférieures au minimum seront rejetées.

Valeurs possibles :

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (par défaut)
- 4 = TLSv1_3

En cas de modification, le serveur doit être redémarré pour utiliser la nouvelle valeur.

> The minimum TLS version used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server and client/server connections.

## Nom

| Peut être configuré via | Nom                                  | Commentaires |
| ----------------------- | ------------------------------------ | ------------ |
| objet webServer         | [`name`](API/WebServerClass.md#name) |              |

Nom de l'application de serveur Web. Pratique lors du démarrage des serveurs Web.

## Version OpenSSL

| Peut être configuré via | Nom                                                      | Commentaires  |
| ----------------------- | -------------------------------------------------------- | ------------- |
| objet webServer         | [`openSSLVersion`](API/WebServerClass.md#opensslversion) | Lecture seule |

Version de la bibliothèque OpenSSL utilisée.

## Perfect Forward Secrecy

| Peut être configuré via | Nom                                                                    | Commentaires           |
| ----------------------- | ---------------------------------------------------------------------- | ---------------------- |
| objet webServer         | [`perfectForwardSecrecy`](API/WebServerClass.md#perfectforwardsecrecy) | Booléen, lecture seule |

True if PFS is available on the web server (see [TLS](Admin/tls.md#perfect-forward-secrecy-pfs) section).

## Réutiliser les contextes temporaires (en mode distant)

| Peut être configuré via  | Nom                                                                                                                 | Commentaires |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- | ------------ |
| Fenêtre de configuration | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#reuse-temporary-contexts) |              |

> This option is only available when **No sessions** option is checked.

Permet d'optimiser le fonctionnement du 4D Web Server en mode distant en réutilisant les process web créés pour le traitement des demandes web précédentes. En fait, le serveur web de 4D nécessite un process web spécifique pour le traitement de chaque requête web; en mode distant, lorsque nécessaire, ce processus se connecte à la machine du 4D Server afin d'accéder au moteur de données et de base de données. Il génère ainsi un contexte temporaire en utilisant ses propres variables, sélections, etc. Une fois la demande traitée, ce process est arrêté.

When the **Reuse Temporary Contexts** option is checked, in remote mode 4D maintains the specific web processes and reuses them for subsequent requests. Supprimer l'étape de création du process améliore les performances du serveur web.

En contrepartie, vous devez veiller à initialiser systématiquement les variables utilisées dans les méthodes 4D afin d'éviter l'obtention des résultats incorrects. De même, il est nécessaire d'effacer toutes les sélections en cours ou les enregistrements définis lors de la demande précédente.

> Cette option n'a d'effet qu'avec un serveur web 4D en mode distant. Avec un 4D en mode local, tous les process Web (autres que les process de session) sont arrêtés après leur utilisation.

## Robots.txt

Certain robots (query engines, spiders...) scroll through web servers and static pages. Si vous ne voulez pas que les robots puissent accéder à l'ensemble de votre site, vous pouvez définir les URL auxquelles ils ne sont pas autorisés à accéder.

Pour ce faire, placez le fichier ROBOTS.TXT à la racine du serveur. Ce fichier doit être structuré comme suit :

```4d
   User-Agent: <name>
   Disallow: <URL> or <beginning of the URL>
```

Par exemple :

```4d
   User-Agent: *
   Disallow: /4D
   Disallow: /%23%23
   Disallow: /GIFS/
```

- “User-Agent: \*” - tous les robots sont concernés.
- “Disallow: /4D” - Les robots ne sont pas autorisés à accéder aux URLs commençant par /4D.
- "Disallow : /%23%23" - les robots ne sont pas autorisés à accéder aux URL commençant par /%23%23.
- "Disallow : /GIFS/' - les robots ne sont pas autorisés à accéder au dossier /GIFS/ ou à ses sous-dossiers.

Autre exemple :

```code4d
   User-Agent: *
   Disallow: /
```

Dans ce cas, les robots n'auront accès à aucune partie du site.

## Dossier racine

| Peut être configuré via  | Nom                                                                          | Commentaires                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| objet webServer          | [`rootFolder`](API/WebServerClass.md#rootfolder)                             | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the _settings_ parameter of the `start()` function |
| `WEB SET ROOT FOLDER`    |                                                                              |                                                                                                                                       |
| Fenêtre de configuration | [Configuration page/Default HTML Root](../settings/web.md#default-html-root) |                                                                                                                                       |

Chemin du dossier racine du serveur web, i.e le dossier dans lequel 4D va chercher les pages HTML statiques et semi-dynamiques, les images, etc. à envoyer aux navigateurs. Le chemin d'accès est au format POSIX (chemin entier). Le serveur web doit être redémarré pour que le nouveau dossier racine soit pris en compte.

De plus, le dossier racine HTML définit, sur le disque dur du serveur web, le niveau hiérarchique au-dessus duquel les fichiers ne seront pas accessibles. Si une URL demandée ou une commande 4D tente d'accéder à un fichier situé au-dessus du dossier racine HTML, une erreur est renvoyée indiquant que le fichier n'a pas été trouvé.

By default, 4D defines a HTML Root folder named **WebFolder**. S'il n'existe pas encore, le dossier racine HTML est physiquement créé sur le disque au moment où le serveur Web est lancé pour la première fois. Le dossier racine est créé :

- with 4D (local) and 4D Server, at the same level as the [Project folder](Project/architecture.md#project-folder).
- avec 4D en mode remote, dans le fichier des ressources locales.

Vous pouvez désigner un autre dossier HTML racine comme page d'accueil par défaut en entrant son chemin d'accès.

- The path is relative to the [Project folder](Project/architecture.md#project-folder) (4D local and 4D Server) or to the folder containing the 4D application or software package (4D in remote mode).
- Le chemin ext exprimé avec la syntaxe POSIX (les dossiers sont séparés par un slash (/)),
- Pour "remonter" d'un niveau dans la hiérarchie des dossiers, saisissez ".." (deux points) avant le nom de dossier
- Le chemin ne doit pas commencer par un slash (sauf si vous souhaitez que le dossier racine HTML soit le dossier distant du projet ou de 4D, mais pour interdire l'accès aux dossiers ci-dessus, auquel cas vous pouvez passer "/" comme dossier racine).

Par exemple, si vous voulez que le dossier racine HTML soit le sous-dossier "Web" du dossier "MyWebApp", entrez "MyWebApp/Web".

> Lorsque le dossier racine HTML est modifié, le cache est effacé afin que les fichiers dont l'accès est restreint ne soient pas stockés.

## Sessions extensibles

| Peut être configuré via  | Nom                                                                                                                                                              | Commentaires |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| objet webServer          | [`scalableSession`](API/WebServerClass.md#scalablesession)                                                                                                       |              |
| `WEB SET OPTION`         | `Web scalable session`                                                                                                                                           |              |
| Fenêtre de configuration | [Options (I) page/Scalable sessions (multi-process sessions)](../settings/web.md#scalable-sessions-multi-process-sessions) |              |

Statut de l'activation des sessions extensibles le serveur web 4D. Web server sessions are detailed in the [User sessions](sessions.md) page.

## Domaine du cookie de session

| Peut être configuré via | Nom                                                                | Commentaires |
| ----------------------- | ------------------------------------------------------------------ | ------------ |
| objet webServer         | [`sessionCookieDomain`](API/WebServerClass.md#sessioncookiedomain) |              |
| `WEB SET OPTION`        | `Web session cookie domain`                                        |              |

Valeur du champ "domain" du cookie de session. Utilisé pour contrôler la portée des cookies de session. Si vous définissez, par exemple, la valeur "/\*.4d.fr" pour ce sélecteur, le client n'enverra un cookie que lorsque la demande est adressée au domaine ".4d.fr", ce qui exclut les serveurs hébergeant des données statiques externes.

## Nom du cookie de session

| Peut être configuré via | Nom                                                            | Commentaires |
| ----------------------- | -------------------------------------------------------------- | ------------ |
| objet webServer         | [`sessionCookieName`](API/WebServerClass.md#sessioncookiename) |              |
| `WEB SET OPTION`        | `Web session cookie name`                                      |              |

Nom du cookie utilisé pour stocker l'ID de session. Par défaut = "4DSID".

## Chemin du cookie de session

| Peut être configuré via | Nom                                                            | Commentaires |
| ----------------------- | -------------------------------------------------------------- | ------------ |
| objet webServer         | [`sessionCookiePath`](API/WebServerClass.md#sessioncookiepath) |              |
| `WEB SET OPTION`        | `Web session cookie path`                                      |              |

Valeur du champ "path" du cookie de session. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/4DACTION" pour ce sélecteur, le client enverra un cookie uniquement pour les requêtes dynamiques commençant par 4DACTION, et non pour les images, les pages statiques, etc.

## Session Cookie SameSite

| Peut être configuré via | Nom                                                                    | Commentaires |
| ----------------------- | ---------------------------------------------------------------------- | ------------ |
| objet webServer         | [`sessionCookieSameSite`](API/WebServerClass.md#sessioncookiesamesite) |              |

Value of the `SameSite` attribute value of the session cookie. This attribute allows you to declare if your cookie should be restricted to a first-party or same-site context, as a protection from some cross-site request forgery ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)) attacks.

> For a detailed description of the `SameSite` attribute, please refer to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) or [this web.dev page](https://web.dev/samesite-cookies-explained/).

Trois valeurs sont disponibles :

- "Strict" (default `SameSite` attribute value for 4D session cookies): cookies will only be sent in the first-party context, i.e. context matching the domain of the current site, and never to third-party websites.
- "Lax" : Les cookies ne sont pas envoyés lors de sous-requêtes intersites (par exemple pour charger des images ou des cadres dans un site tiers), mais sont envoyés lorsqu'un utilisateur navigue vers le site d'origine (c'est-à-dire lorsqu'il suit un lien).
- "None" : Les cookies sont envoyés dans tous les contextes, c'est-à-dire dans les réponses aux demandes primaires et cross-origin. When "None" value is used, the cookie `Secure` attribute must also be set (or the cookie will be blocked).

The `Secure` attribute value of the session cookie is automatically set to "True" if the connection is HTTPS (whatever the `SameSite` attribute value).

> It is not recommended to set `SameSite=None` on a HTTP server since the `Secure` attribute will be missing (used in HTTPS only) and cookies will be blocked.

## Utiliser des process préemptifs

| Peut être configuré via  | Nom                                                                                                                 | Commentaires |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- | ------------ |
| Fenêtre de configuration | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#use-preemptive-processes) |              |

This option enables the preemptive mode for your application's web server code when **No sessions** option is selected (the preemptive mode is always enabled with **scalable sessions**). When this option is checked in this context, the 4D compiler will automatically evaluate the thread-safety property of each piece of [web-related code](preemptiveWeb.md#thread-safety-of-4d-web-code) and return errors in case of incompatibility.

## Propriétés obsolètes

Les paramètres suivants sont toujours pris en charge mais reposent sur des fonctionnalités ou des technologies obsolètes. Il est généralement recommandé de conserver les valeurs par défaut.

#### Autoriser l'accès aux bases de données par le biais des URL 4DSYNC

This option controls the support of HTTP synchronization requests containing deprecated _/4DSYNC_ URLs.

#### Validation de l'adresse IP de la session

> This option is not not available in [scalable sessions mode](WebServer/sessions.md) (there is no validation).

Statut de validation d'adresse IP pour les cookies de session. Pour des raisons de sécurité, le serveur Web vérifie par défaut l'adresse IP de chaque requête contenant un cookie de session et la rejette si cette adresse ne correspond pas à l'adresse IP utilisée pour créer le cookie. Dans certaines applications spécifiques, vous souhaiterez peut-être désactiver cette validation et accepter les cookies de session, même lorsque leurs adresses IP ne correspondent pas. Par exemple, lorsque les appareils mobiles basculent entre les réseaux Wifi et 4G/5G, leur adresse IP change. Dans ce cas, vous devez passer 0 à cette option pour permettre aux clients de continuer à utiliser leurs sessions Web même lorsque les adresses IP changent. Note : ce paramètre réduit le niveau de sécurité de votre application. Une fois modifiée, cette option prend effet immédiatement (il n'est pas nécessaire de redémarrer le serveur HTTP).

#### Envoyer directement les caractères étendus

Lorsque cette option est cochée, le serveur web envoie les caractères étendus tels quels dans les pages semi-dynamiques, sans les convertir en entités HTML. Cette option a augmenté la vitesse d'exécution sur la plupart des systèmes d'exploitation étrangers (en particulier le système japonais).

#### Utiliser les connexions persistantes

Le serveur Web 4D peut utiliser des connexions persistantes. Cette option permet de maintenir une seule connexion TCP ouverte pour l'ensemble des échanges entre le navigateur web et le serveur afin d'économiser les ressources du système et d'optimiser les transferts.

The **Use Keep-Alive Connections** option enables or disables keep-alive TCP connections for the web server. Cette option est activée par défaut. Dans la plupart des cas, il est conseillé de garder cette option cochée car elle accélère les échanges. Si le navigateur Web ne prend pas en charge le maintien de la connexion, le serveur Web 4D bascule automatiquement à l'HTTP/1.0.

La fonction de connexions persistantes du serveur Web 4D s'applique à toutes les connexions TCP/IP (HTTP, HTTPS). Notez toutefois que les connexions persistantes ne sont pas toujours utilisées pour tous les process web 4D.

Dans certains cas, d'autres fonctions internes optimisées peuvent être appelées. Les connexions persistantes sont principalement utiles pour les pages statiques.

Deux options permettent de définir le mode de fonctionnement des connexions persistantes :

- **Number of requests by connection**: Allows you to set the maximum number of requests and responses able to travel over a connection keep alive. Limiting the number of requests per connection allows you to prevent server flooding due to a large number of incoming requests (a technique used by hackers).<p>
  The default value (100) can be increased or decreased depending on the resources of the machine hosting the 4D Web Server.</p>

- **Timeout**: This value defines the maximum wait period (in seconds) during which the web server maintains an open TCP connection without receiving any requests from the web browser. Once this period is over, the server closes the connection.<p>
  If the web browser sends a request after the connection is closed, a new TCP connection is automatically created. This operation is not visible for the user.</p>
