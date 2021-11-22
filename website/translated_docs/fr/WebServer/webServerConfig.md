---
id: webServerConfig
title: Configuration
---

Les paramètres du serveur web 4D comprennent les paramètres de sécurité, les ports d'écoute, les chemins par défaut et diverses options couvrant toutes les fonctionnalités du serveur. 4D fournit des valeurs par défaut pour tous les paramètres.


## Configurer les paramètres

Vous pouvez configurer les paramètres du serveur web 4D, en fonction de la portée et du serveur que vous souhaitez configurer :

| Setting location                           | Portée                                                | Serveur web concerné                                                 |
| ------------------------------------------ | ----------------------------------------------------- | -------------------------------------------------------------------- |
| [objet webServer](webServerObject.md)      | Temporaire (session courante)                         | N'importe quel serveur web, y compris les serveurs Web de composants |
| `WEB SET OPTION` ou commande `WEB XXX`     | Temporaire (session courante)                         | Serveur principal                                                    |
| Fenêtre des **Propriétés** (pages **Web**) | Permanent (toutes les sessions, stocké sur le disque) | Serveur principal                                                    |

> Certains paramètres ne sont pas disponibles depuis tous les emplacements.

## Cache

| Peut être configuré via  | Nom                                               | Commentaires |
| ------------------------ | ------------------------------------------------- | ------------ |
| Fenêtre de configuration | Page de configuration/Utilisation du cache Web 4D |              |
| Fenêtre de configuration | Page de configuration/Taille du cache des pages   |              |

Active et configure le cache des pages web.

Le serveur web 4D dispose d'un cache qui permet de charger les pages statiques, les images GIF, les images JPEG (<512 kb) et les feuilles de style (fichiers .css) en mémoire, au fur et à mesure qu'elles sont appelées. L'utilisation du cache permet d'augmenter considérablement les performances du serveur web lors de l'envoi de pages statiques. Le cache est partagé entre tous les processus web.

Vous pouvez modifier la taille du cache dans la zone **Taille du cache des pages**. La valeur à définir dépend du nombre et de la taille des pages statiques de votre site Web, ainsi que des ressources dont dispose la machine hôte.
> Lorsque vous utilisez votre base de données web, vous pouvez vérifier les performances du cache en utilisant la commande `WEB LIRE STATISTIQUES`. Si, par exemple, vous remarquez que le taux d'utilisation du cache est proche de 100 %, vous pouvez envisager d'augmenter la taille qui lui a été allouée. Les URL [/4DSTATS] et [/4DHTMLSTATS] vous permettent également d'obtenir des informations sur l'état du cache.


## Dossier de certificat

| Peut être configuré via | Nom                 | Commentaires                                                                                                                                                     |
| ----------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objet webServer         | `certificateFolder` | La propriété Text, mais il peut s'agir d'un objet [`4D.Folder`](API/FolderClass.md) lorsqu'il est utilisé avec le paramètre *settings* de la fonction `start()`. |

Dossier qui contient les fichiers de certificat TLS pour le serveur web.

Par défaut, avec 4D ou 4D Server, ces fichiers doivent être placés à côté du [dossier du projet](Project/architecture.md#project-folder).

Avec 4D à distance, ces fichiers doivent être placés dans le dossier des ressources locales de la base de données sur la machine distante (voir le paragraphe `Dossier base 4D Client` de la commande `Dossier 4D`). Vous devez copier ces filles manuellement sur la machine distante.

> Les fichiers de certificat TLS sont *key.pem* (document contenant la clé de chiffrement privée) et *cert.pem* (document contenant le certificat).


## Jeu de caractères

| Peut être configuré via  | Nom                            | Commentaires                                        |
| ------------------------ | ------------------------------ | --------------------------------------------------- |
| objet webServer          | `characterSet`                 | Entier long (MIBEnum) ou chaîne de caractères (nom) |
| `WEB SET OPTION`         | `Web character set`            | Entier long (MIBEnum) ou chaîne de caractères (nom) |
| Fenêtre de configuration | Page Options (II)/Jeu standard | Menu popup                                          |

Définit le jeu de caractères à utiliser par le serveur web 4D. La valeur par défaut dépend de la langue du système d'exploitation.
> Ce paramètre est également utilisé pour générer des États Rapides au format HTML.


## Suite cryptographique

| Peut être configuré via | Nom                                                | Commentaires |
| ----------------------- | -------------------------------------------------- | ------------ |
| objet webServer         | [`cipherSuite`](API/WebServerClass.md#ciphersuite) | Texte        |

Suite cryptographique utilisée pour le protocole sécurisé. Fixe la priorité des algorithmes de chiffrement implémentés par le serveur web. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). Voir la [page des chiffrements](https://www.openssl.org/docs/manmaster/man1/ciphers.html) sur le site OpenSSL.

> La liste de chiffrement par défaut utilisée par 4D peut être modifiée pour la session à l'aide de la commande `FIXER PARAMETRE BASE `, auquel cas la modification s'applique à l'ensemble de l'application 4D, y compris le serveur web, le serveur SQL, les connexions client/serveur, ainsi que le client HTTP et toutes les commandes 4D qui font appel au protocole sécurisé.

## Paramètres CORS

| Peut être configuré via  | Nom                                                                           | Commentaires                                                                            |
| ------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| objet webServer          | [`CORSSettings`](API/WebServerClass.md#corssettings)                          | Collection d'objets (Liste des hôtes et méthodes autorisées pour le service CORS)       |
| `WEB SET OPTION`         | `Web CORS settings`                                                           | Collection d'objets (Liste des hôtes et méthodes autorisées pour le service CORS)       |
| Fenêtre de configuration | Propriétés > Web > Options (II) > Noms de domaine et Méthodes HTTP autorisées | Cliquez sur le bouton [+] pour ajouter un nom de domaine autorisé et sa ou ses méthodes |

List of allowed hosts and methods for the CORS service.

#### Noms de domaine

Nom de domaine ou adresse IP à partir desquels les pages externes sont autorisées à envoyer des demandes de données au serveur via CORS. Plusieurs attributs de domaine peuvent être ajoutés pour créer une liste blanche. Plusieurs syntaxes sont supportées :

- 192.168.5.17:8081
- 192.168.5.17
- 192.168.*
- 192.168.*:8081
- http://192.168.5.17:8081
- http://*.myDomain.com
- http://myProject.myDomain.com
- *.myDomain.com
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

[Activer CORS](#enable-cors-service)



## Debug log

| Peut être configuré via | Nom             | Commentaires |
| ----------------------- | --------------- | ------------ |
| objet webServer         | `debugLog`      | number       |
| `WEB SET OPTION`        | `Web debug log` | number       |

État du fichier journal des requêtes HTTP du serveur web (HTTPDebugLog_nn.txt, stocké dans le dossier "Logs" de l'application -- nn est le numéro du fichier). Il est utile pour déboguer les problèmes liés au serveur Web. Il enregistre chaque demande et chaque réponse en mode brut (raw). Les requêtes sont enregistrées dans leur totalité (en-têtes compris). Les parts du body peuvent optionellement être enregistrées.

| Valeur | Constante   | Description                             |
| ------ | ----------- | --------------------------------------- |
| 0      | wdl disable | Les debug logs Web HTTP sont désactivés |



|1|wdl enable without body|Le journal de débogage de Web HTTP est activé sans le body (la taille du body est fournie dans ce cas). |3|wdl enable with response body|Le journal de débogage de Web HTTP est activé, le body est inclus uniquement dans la réponse |5|wdl enable with request body| Le journal de débogage de Web HTTP est activé, le body est inclus uniquement dans la requête |7|wdl enable with all body parts|Web HTTP debug log est activé, le body est inclus dans la réponse et la requête|


## Page d'accueil par défaut

| Peut être configuré via  | Nom                                                        | Commentaires                                 |
| ------------------------ | ---------------------------------------------------------- | -------------------------------------------- |
| objet webServer          | [`defaultHomepage`](API/WebServerClass.md#defaulthomepage) | Texte                                        |
| `WEB SET HOME PAGE`      |                                                            | Peut être différente pour chaque web process |
| Fenêtre de configuration | Configuration > Page d'accueil par défaut                  |                                              |

Désigne une page comme page d'accueil par défaut pour le serveur web. Cette page peut être statique ou [semi-dynamic].

Par défaut, quand le serveur web est lancé pour la première fois, 4D crée une page d'accueil appelée "index.html" et la place dans le dossier HTML racine. Si vous ne modifiez pas cette configuration, n'importe quel browser se connectant au serveur web obtiendra cette page :

![](assets/en/WebServer/defaultHomePage.png)

Vous pouvez désigner une autre page comme page d'accueil par défaut en entrant son chemin d'accès :

- Le chemin est relatif au [dossier HTML racine ](#root-folder),
- Le chemin ext exprimé avec la syntaxe POSIX (les dossiers sont séparés par un slash (/)),
- Le chemin ne doit pas commencer ou finir par un slash.

Par exemple, pour que la page d'accueil par défaut soit "MyHome.htm", si elle se trouve dans le dossier "Web" (lui-même situé dans le dossier racine HTML par défaut), utilisez "Web/MyHome.htm".

Si vous ne spécifiez aucune page d'accueil par défaut, la méthode base `On Web Connection` est appelée. Il vous appartient de traiter la demande de manière procédurale.

## Activer CORS

| Peut être configuré via  | Nom                                                | Commentaires                                        |
| ------------------------ | -------------------------------------------------- | --------------------------------------------------- |
| objet webServer          | [`CORSEnabled`](API/WebServerClass.md#corsenabled) | Booléen. True pour activer CORS (False par défaut). |
| `WEB SET OPTION`         | `Web CORS enabled`                                 | 0 (désactivé, par défaut) ou 1 (activé)             |
| Fenêtre de configuration | Page Options (II) > Activer CORS                   | Décoché par défaut                                  |

Le serveur Web 4D implémente le cross-origin resource sharing (CORS) pour permettre à des pages Web spécifiques servies à partir d'un autre domaine d'accéder aux ressources de l'application Web actuelle via des appels XHR, par exemple via REST. Pour des raisons de sécurité, les requêtes "cross-domain" sont interdites par défaut au niveau du navigateur. Lorsqu'elle l'option est activée, les appels XHR (par exemple, les requêtes REST) provenant de pages Web situées en dehors du domaine peuvent être autorisés dans votre application (vous devez définir la liste des adresses autorisées dans la liste de domaines CORS, voir Paramètres CORS ci-dessous). Dans ce cas, si un domaine ou une méthode non autorisée envoie une demande cross-site, celle-ci est rejetée et une erreur "403 - forbidden" est renvoyée.

Lorsqu'elle est désactivée (par défaut), toutes les demandes intersites envoyées avec CORS sont ignorées.

Pour plus d'informations sur CORS, veuillez consulter la [page de partage de ressources cross-origin](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) sur Wikipedia.

#### Voir également
[Paramètres CORS](#cors-settings)

## Activer HTTP

| Peut être configuré via  | Nom                                                | Commentaires |
| ------------------------ | -------------------------------------------------- | ------------ |
| objet webServer          | [`HTTPEnabled`](API/WebServerClass.md#httpenabled) | boolean      |
| `WEB SET OPTION`         | `Web HTTP enabled`                                 |              |
| Fenêtre de configuration | Configuration > Activer HTTP                       |              |

Indique si le web server accepte des connexions non sécurisées.


## Activer HTTPS

| Peut être configuré via  | Nom                                                  | Commentaires |
| ------------------------ | ---------------------------------------------------- | ------------ |
| objet webServer          | [`HTTPSEnabled`](API/WebServerClass.md#httpsenabled) | boolean      |
| `WEB SET OPTION`         | `Web HTTPS enabled`                                  |              |
| Fenêtre de configuration | Configuration > Activer HTTPS                        |              |

Statut de la communication via HTTPS. Cette option est décrite dans [cette section](Admin/tls.md).


## Activer HSTS

| Peut être configuré via | Nom                                                | Commentaires                                          |
| ----------------------- | -------------------------------------------------- | ----------------------------------------------------- |
| objet webServer         | [`HSTSEnabled`](API/WebServerClass.md#hstsenabled) | Booléen, True pour activer le HSTS (False par défaut) |
| `WEB SET OPTION`        | `Web HSTS enabled`                                 | 0 (désactivé, par défaut) ou 1 (activé)               |

État de HTTP Strict Transport Security (HSTS).

Lorsque [HTTPS est activé](#enable-https), n'oubliez pas que si [HTTP est également activé](#enable-http), le navigateur peut toujours basculer entre HTTPS et HTTP (par exemple, dans la zone URL du navigateur, l'utilisateur peut remplacer "https" par "http"). Pour interdire les redirections http, vous pouvez [désactiver le HTTP](#enable-http), cependant dans ce cas un message d'erreur est affiché lors des requêtes HTTP du client.

HSTS permet au serveur web 4D de déclarer que les navigateurs ne doivent interagir avec lui que par des connexions HTTPS sécurisées. Une fois activé, le serveur Web 4D ajoutera automatiquement des informations relatives au HSTS à tous les en-têtes des réponses. Les navigateurs enregistreront les informations HSTS la première fois qu'ils recevront une réponse du serveur web 4D, puis toutes les futures demandes HTTP seront automatiquement transformées en demandes HTTPS. La durée de stockage de ces informations par le navigateur est spécifiée avec le paramètre Web **HSTS max age**.

> Activer le HSTS requiert que HTTPS soit [activé](enable-https) sur le serveur. [Le HTTP](enable-http) doit également être activé pour permettre les connexions initiales du client.

> Vous pouvez vérifier le mode de connexion utilisé en utilisant la commande `WEB Is secured connection`.


## HSTS Max Age

| Peut être configuré via | Nom                                              | Commentaires       |
| ----------------------- | ------------------------------------------------ | ------------------ |
| objet webServer         | [`HSTSMaxAge`](API/WebServerClass.md#hstsmaxage) | nombre en secondes |
| `WEB SET OPTION`        | `Web HSTS max age`                               | nombre en secondes |

Spécifie la durée maximale (en secondes) d'activation de HSTS pour chaque nouvelle connexion client. Ces informations sont stockées côté client pendant la durée spécifiée. Valeur par défaut : 63072000 (2 ans)

> **Avertissement:** Une fois le HSTS activé, les connexions des clients continueront à utiliser ce mécanisme pendant la durée spécifiée. Lorsque vous testez vos applications, il est recommandé de définir une courte durée pour pouvoir passer du mode de connexion sécurisé au mode non sécurisé si nécessaire.





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

| Peut être configuré via  | Nom                                          | Commentaires |
| ------------------------ | -------------------------------------------- | ------------ |
| objet webServer          | [`HTTPPort`](API/WebServerClass.md#httpport) | number       |
| `WEB SET OPTION`         | `Web port ID`                                |              |
| Fenêtre de configuration | Configuration > Port HTTP                    |              |

Numéro de port IP (TCP) d'écoute pour HTTP. Par défaut, 4D publie une application Web sur le port HTTP normal (port TCP), qui est le port 80. Si ce port est déjà utilisé par un autre service Web, vous devez modifier le port HTTP utilisé par 4D pour ce projet.

> Sous macOS, la modification du port HTTP permet de lancer le serveur web 4D sans être l'utilisateur root de la machine (voir [macOS HelperTool](#macos-helpertool)).

À partir d'un navigateur Web, vous devez inclure le numéro de port HTTP par défaut dans l'adresse que vous saisissez pour vous connecter à l'application Web. L'adresse doit comporter un suffixe composé de deux points suivis du numéro de port. Par exemple, si vous utilisez le port HTTP numéro 8080, indiquez "123.4.567.89:8080".
> **Avertissement** : Si vous utilisez des numéros de port TCP autres que ceux par défaut (80 pour HTTP standard et 443 pour HTTPS), veillez à ne pas utiliser des numéros de port utilisés par défaut pour d'autres services que vous pourriez vouloir utiliser simultanément. Par exemple, si vous prévoyez également d'utiliser le protocole FTP sur votre machine de serveur Web, n'utilisez pas les ports TCP 20 et 21, qui sont les ports par défaut pour ce protocole. Les numéros de ports inférieurs à 256 sont réservés à des services connus, et les numéros de ports de 256 à 1024 sont réservés à des services spécifiques issus des plateformes UNIX. Pour une sécurité maximale, spécifiez un numéro de port au-delà de ces intervalles (par exemple, dans les 2000 ou 3000).

Si vous spécifiez 0, 4D utilisera le numéro de port HTTP 80 par défaut.


## HTTP Trace

| Peut être configuré via | Nom                                            | Commentaires                          |
| ----------------------- | ---------------------------------------------- | ------------------------------------- |
| objet webServer         | [`HTTPTrace`](API/WebServerClass.md#httptrace) | Booléen, false par défaut             |
| `WEB SET OPTION`        | `Web HTTP TRACE`                               | Entier long, 0 par défaut (désactivé) |

Activation de la méthode HTTP TRACE dans le serveur web 4D. Pour des raisons de sécurité, le serveur web 4D rejette par défaut les demandes HTTP TRACE avec une erreur 405. Si nécessaire, vous pouvez activer la méthode HTTP TRACE, auquel cas le serveur Web 4D répond aux demandes HTTP TRACE avec la request line, l'en-tête et le body.




## Port HTTPS

| Peut être configuré via  | Nom                                            | Commentaires |
| ------------------------ | ---------------------------------------------- | ------------ |
| objet webServer          | [`HTTPSPort`](API/WebServerClass.md#httpsport) | number       |
| `WEB SET OPTION`         | `Web HTTPS port ID`                            |              |
| Fenêtre de configuration | Configuration > Port HTTP                      |              |

Numéro de port IP d'écoute pour les connections HTTP via TLS. La valeur par défaut est 443 (valeur standard). Voir aussi [HTTP Port](#http-port) pour plus d'informations sur les numéros de port.


## Timeout des process inactifs

| Peut être configuré via  | Nom                                                                      | Commentaires |
| ------------------------ | ------------------------------------------------------------------------ | ------------ |
| objet webServer          | [`inactiveProcessTimeout`](API/WebServerClass.md#inactiveprocesstimeout) |              |
| `WEB SET OPTION`         | `Web inactive process timeout`                                           |              |
| Fenêtre de configuration | Options (I) > Conservation des Process inactifs                          | Curseur      |

Durée de vie (en minutes) des process inactifs associés aux sessions. À la fin du délai d'attente (tiemout), le process est tué sur le serveur, la méthode base `On Web Close Process` est appelée, puis le contexte de session est détruit.

Valeur par défaut : 480 minutes (passez 0 pour restaurer la valeur par défaut)


## Inactive Session Timeout

| Peut être configuré via | Nom                                                                      | Commentaires |
| ----------------------- | ------------------------------------------------------------------------ | ------------ |
| objet webServer         | [`inactiveSessionTimeout`](API/WebServerClass.md#inactivesessiontimeout) |              |
| `WEB SET OPTION`        | `Web inactive session timeout`                                           |              |

Durée de vie (en minutes) des sessions inactives (durée définie dans le cookie). À la fin de cette période, le cookie de session expire et n'est plus envoyé par le client HTTP.

Valeur par défaut : 480 minutes (passez 0 pour restaurer la valeur par défaut)


## IP Address to listen

| Peut être configuré via  | Nom                                                            | Commentaires |
| ------------------------ | -------------------------------------------------------------- | ------------ |
| objet webServer          | [`IPAddressToListen`](API/WebServerClass.md#ipaddresstolisten) |              |
| `WEB SET OPTION`         | `Web IP address to listen`                                     |              |
| Fenêtre de configuration | Configuration page/IP Address                                  | Menu popup   |

IP address strings on which the 4D web server will receive HTTP requests (4D local and 4D Server).

By default, no specific address is defined (**Any** value in the Settings dialog box), which means that the server responds to all IP addresses. When you designate a specific address, the server only responds to requests sent to this address. This feature is designed for 4D web servers located on machines with multiple TCP/IP addresses. It is, for example, frequently the case of most host providers.

Possible values: IP address string. Both IPv6 string formats (e.g. "2001:0db8:0000:0000:0000:ff00:0042:8329") and IPv4 string formats (e.g. "123.45.67.89") are supported.

#### About IPv6 support

*   **No warning when TCP port is occupied**<br> When the server is set to respond on "Any" IP addresses, if the TCP port is being used by another application, this is not indicated when the server is started. In fact, 4D server does not detect any error in this case because the port remains free on the IPv6 address. However, it is not possible to access it using the IPv4 address of the machine, nor by means of the local address: 127.0.0.1.<p> If your 4D server does not seem to be responding on the port defined, you can test the address [::1] on the server machine (equivalent to 127.0.0.1 for IPv6, add [:portNum] to test another port number). If 4D responds, it is likely that another application is using the port in IPv4.

*   **IPv4-mapped IPv6 addresses**<br> To standardize processing, 4D provides a standard hybrid representation of IPv4 addresses in IPv6. These addresses are written with a 96-bit prefix in IPv6 format, followed by 32 bits written in the dot-decimal notation of IPv4. For example, ::ffff:192.168.2.34 represents the IPv4 address 192.168.2.34.

*   **Indication of port numbers**<br> Since IPv6 notation uses colons (:), adding port numbers may lead to some confusion, for example:

```code4d
    2001:0DB8::85a3:0:ac1f:8001 // IPv6 address
    2001:0DB8::85a3:0:ac1f:8001:8081 // IPv6 address with port 8081
```

To avoid this confusion, we recommend using the [ ] notation whenever you combine an IPv6 address with a port number, for instance:

```code4d
    [2001:0DB8::85a3:0:ac1f:8001]:8081 //IPv6 address with port 8081
```

## Keep Session

| Peut être configuré via  | Nom                                                | Commentaires |
| ------------------------ | -------------------------------------------------- | ------------ |
| objet webServer          | [`keepSession`](API/WebServerClass.md#keepsession) |              |
| `WEB SET OPTION`         | `Web keep session`                                 |              |
| Fenêtre de configuration | Options (I) page/Automatic Session Management      |              |

Session management enabling status for the 4D web server. Session mechanism is described in the [Session Management](sessions.md) section.

Default is true (enabled).

> When this option is checked, the "Reuse Temporary Contexts" option is automatically checked (and locked).


## Log Recording

| Peut être configuré via  | Nom                                                  | Commentaires |
| ------------------------ | ---------------------------------------------------- | ------------ |
| objet webServer          | [`logRecording`](API/WebServerClass.md#logrecording) |              |
| `WEB SET OPTION`         | `Web log recording`                                  |              |
| Fenêtre de configuration | Log (type) page/Log Format                           | Menu popup   |

Starts or stops the recording of requests received by the 4D web server in the *logweb.txt* file and sets its format. By default, requests are not recorded (0/No Log File). When enabled, the *logweb.txt* file is automatically placed in the Logs folder.

This setting allows you to select the format of this file. Available values are:

| Valeur | Format name          | Description                                                                                                                                                                                                              |
| ------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0      | No Log File          | Default                                                                                                                                                                                                                  |
| 1      | Record in CLF format | Common Log Format - Each line of the file represents a request, such as: `host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length` - Each field is separated by a space and each line ends by the CR/LF sequence. |
| 2      | Record in DLF format | Combined Log Format - Similar to CLF format but adds two additional HTTP fields at the end of each request: Referer and User-agent.                                                                                      |
| 3      | Record in ELF format | Extended Log Format - To be customized in the Settings dialog box                                                                                                                                                        |
| 4      | Record in WLF format | WebStar Log Format - To be customized in the Settings dialog box                                                                                                                                                         |

> Formats 3 and 4 are custom formats whose contents must be set beforehand in the Settings dialog box. If you use one of these formats without any of its fields having been selected on this page, the log file will not be generated.


## Maximum Concurrent Web Processes

| Peut être configuré via  | Nom                                                                      | Commentaires |
| ------------------------ | ------------------------------------------------------------------------ | ------------ |
| objet webServer          | [`maxConcurrentProcesses`](API/WebServerClass.md#maxconcurrentprocesses) |              |
| `WEB SET OPTION`         | `Web max concurrent processes`                                           |              |
| Fenêtre de configuration | Options (I) page/Maximum Concurrent Web Processes                        |              |

Strictly high limit of concurrent web processes that can be simultaneously open on the server. This parameter allows prevention of server saturation as the result of massive number of requests. When the maximum number of concurrent Web processes (minus one) is reached, 4D no longer creates new processes and sends the HTTP status `503 - Service Unavailable` to all new requests.

By default, the value is 100. You can set the number anywhere between 10 and 32000.


## Maximum Request Size

| Peut être configuré via | Nom                                                      | Commentaires |
| ----------------------- | -------------------------------------------------------- | ------------ |
| objet webServer         | [`maxRequestSize`](API/WebServerClass.md#maxrequestsize) |              |
| `WEB SET OPTION`        | `Web maximum requests size`                              |              |

Maximum size (in bytes) of incoming HTTP requests (POST) that the web server is authorized to process. By default, the value is 2 000 000, i.e. a little less than 2 MB. Passing the maximum value (2 147 483 648) means that, in practice, no limit is set.

Cette limite est utilisée pour éviter la saturation du serveur Web en raison de requêtes entrantes trop volumineuses. When a request reaches this limit, the 4D web server rejects it.

Possible values: 500 000 to 2 147 483 648.


## Maximum Session Number

| Peut être configuré via | Nom                                                | Commentaires |
| ----------------------- | -------------------------------------------------- | ------------ |
| objet webServer         | [`maxSessions`](API/WebServerClass.md#maxsessions) |              |
| `WEB SET OPTION`        | `Web max sessions`                                 |              |

Nombre maximum de sessions simultanées. When you reach the limit set, the oldest session is closed (and `On Web Close Process` database method is called) if the Web server needs to create a new one. The number of simultaneous sessions cannot exceed the [maximum number of Web processes](#maximum-concurrent-web-processes) (100 by default).

Default value: 100 (pass 0 to restore the default value).


## Minimum TLS Version

| Peut être configuré via | Nom                                                    | Commentaires |
| ----------------------- | ------------------------------------------------------ | ------------ |
| objet webServer         | [`minTLSVersion`](API/WebServerClass.md#mintlsversion) | number       |

Version TLS minimale acceptée pour les connexions. Les tentatives de connexion de clients prenant en charge uniquement les versions inférieures au minimum seront rejetées.

Valeurs possibles :

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (default)
- 4 = TLSv1_3

En cas de modification, le serveur doit être redémarré pour utiliser la nouvelle valeur.

> The minimum TLS version used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server and client/server connections.


## Nom

| Peut être configuré via | Nom                                  | Commentaires |
| ----------------------- | ------------------------------------ | ------------ |
| objet webServer         | [`name`](API/WebServerClass.md#name) |              |


Name of the web server application. Useful when component web servers are started.

## OpenSSL Version

| Peut être configuré via | Nom                                                      | Commentaires |
| ----------------------- | -------------------------------------------------------- | ------------ |
| objet webServer         | [`openSSLVersion`](API/WebServerClass.md#opensslversion) | Read-only    |

Version of the OpenSSL library used.


## Perfect Forward Secrecy

| Peut être configuré via | Nom                                                                    | Commentaires       |
| ----------------------- | ---------------------------------------------------------------------- | ------------------ |
| objet webServer         | [`perfectForwardSecrecy`](API/WebServerClass.md#perfectforwardsecrecy) | Boolean, read-only |

True if PFS is available on the web server (see [TLS](Admin/tls.md#perfect-forward-secrecy-pfs) section).


## Robots.txt

Certain robots (query engines, spiders...) scroll through web servers and static pages. If you do not want robots to be able to access your entire site, you can define which URLs they are not allowed to access.

To do so, put the ROBOTS.TXT file at the server's root. This file must be structured in the following manner:

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

*   “User-Agent: *” - all robots are affected.
*   “Disallow: /4D” - robots are not allowed to access URLs beginning with /4D.
*   “Disallow: /%23%23” - robots are not allowed to access URLs beginning with /%23%23.
*   “Disallow: /GIFS/’ - robots are not allowed to access the /GIFS/ folder or its subfolders.

Another example:

```code4d
   User-Agent: *
   Disallow: /
```

In this case, robots are not allowed to access the entire site.


## Root Folder

| Peut être configuré via  | Nom                                              | Commentaires                                                                                                                                                    |
| ------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objet webServer          | [`rootFolder`](API/WebServerClass.md#rootfolder) | La propriété Text, mais il peut s'agir d'un objet [`4D.Folder`](API/FolderClass.md) lorsqu'il est utilisé avec le paramètre *settings* de la fonction `start()` |
| `WEB SET ROOT FOLDER`    |                                                  |                                                                                                                                                                 |
| Fenêtre de configuration | Configuration page/Default HTML Root             |                                                                                                                                                                 |

Path of web server root folder, i.e. the folder in which 4D will search for the static and semi-dynamic HTML pages, pictures, etc., to send to the browsers. The path is formatted in POSIX full path. The web server will need to be restarted in order for the new root folder to be taken into account.

Moreover, the HTML root folder defines, on the web server hard drive, the hierarchical level above which the files will not be accessible. If a requested URL or a 4D command tries to access a file located above the HTML root folder, an error is returned indicating that the file has not been found.

By default, 4D defines a HTML Root folder named **WebFolder**. If it does not already exist, the HTML root folder is physically created on disk at the moment the Web server is launched for the first time. The root folder is created:
- with 4D (local) and 4D Server, at the same level as the [Project folder](Project/architecture.md#project-folder).
- with 4D in remote mode, in the local resources folder.

You can designate another default HTML root folder by entering its pathname.

- The path is relative to the [Project folder](Project/architecture.md#project-folder) (4D local and 4D Server) or to the folder containing the 4D application or software package (4D in remote mode).
- Le chemin ext exprimé avec la syntaxe POSIX (les dossiers sont séparés par un slash (/)),
- To "go up" one level in the folder hierarchy, enter “..” (two periods) before the folder name
- The path must not start with a slash (except if you want the HTML root folder to be the Project or 4D remote folder, but for access to the folders above to be forbidden, in which case you can pass "/" as the root folder).

For example, if you want the HTML root folder to be the "Web" subfolder in the "MyWebApp" folder, enter "MyWebApp/Web".

> When the HTML root folder is modified, the cache is cleared so as to not store files whose access is restricted.



## Session Cookie Domain

| Peut être configuré via | Nom                                                                | Commentaires |
| ----------------------- | ------------------------------------------------------------------ | ------------ |
| objet webServer         | [`sessionCookieDomain`](API/WebServerClass.md#sessioncookiedomain) |              |
| `WEB SET OPTION`        | `Web session cookie domain`                                        |              |

Value of the "domain" field of the session cookie. Useful for controlling the scope of the session cookies. Par exemple, si vous définissez la valeur "/*.4d.fr" pour ce sélecteur, le client enverra un cookie uniquement lorsque la requête est adressée au domaine ".4d.fr", ce qui exclut les serveurs hébergeant des données statiques externes.


## Session Cookie Name

| Peut être configuré via | Nom                                                            | Commentaires |
| ----------------------- | -------------------------------------------------------------- | ------------ |
| objet webServer         | [`sessionCookieName`](API/WebServerClass.md#sessioncookiename) |              |
| `WEB SET OPTION`        | `Web session cookie name`                                      |              |

Name of the cookie used for saving the session ID. Default = "4DSID".


## Session Cookie Path

| Peut être configuré via | Nom                                                            | Commentaires |
| ----------------------- | -------------------------------------------------------------- | ------------ |
| objet webServer         | [`sessionCookiePath`](API/WebServerClass.md#sessioncookiepath) |              |
| `WEB SET OPTION`        | `Web session cookie path`                                      |              |

Champ "path" du cookie de session. Utilisé pour contrôler la portée des cookies de session. Par exemple, si vous définissez la valeur "/4DACTION" pour ce sélecteur, le client enverra un cookie uniquement pour les requêtes dynamiques commençant par 4DACTION, et non pour les images, les pages statiques, etc.

## Session Cookie SameSite

| Peut être configuré via | Nom                                                                    | Commentaires |
| ----------------------- | ---------------------------------------------------------------------- | ------------ |
| objet webServer         | [`sessionCookieSameSite`](API/WebServerClass.md#sessioncookiesamesite) |              |

Valeur de l'attribut `SameSite` du cookie de session. Cet attribut vous permet de déclarer si votre cookie doit être limité à un contexte de première partie ou de même site, comme une protection contre certaines attaques CSRF ([cross-site request forgery](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)).

> Pour une description détaillée de l'attribut `SameSite`, veuillez vous reporter à la [documentation de Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) ou à [cette page de développement web](https://web.dev/samesite-cookies-explained/).

Trois valeurs sont disponibles :

- "Strict" (valeur par défaut de l'attribut` SameSite` pour les cookies de session 4D) : les cookies ne seront envoyés que dans le contexte de première partie, c'est-à-dire le contexte correspondant au domaine du site, et jamais à des sites Web tiers.
- "Lax": Cookies are not sent on cross-site subrequests (for example to load images or frames into a third-party site), but are sent when a user is navigating to the origin site (i.e. they follow a link).
- "None": Cookies are sent in all contexts, i.e in responses to both first-party and cross-origin requests. When "None" value is used, the cookie `Secure` attribute must also be set (or the cookie will be blocked).

La valeur de l'attribut `Secure` du cookie de session est automatiquement définie sur "True" si la connexion est HTTPS (quelle que soit la valeur de l'attribut `SameSite`).

> Il n'est pas recommandé de définir `SameSite=None` sur un serveur HTTP car l'attribut `Secure` sera absent (utilisé uniquement en HTTPS) et les cookies seront bloqués.



## Session IP Address Validation

Can be set with|Name|Comments| |---|---|---| |webServer object|[`sessionIPAddressValidation`](API/WebServerClass.md#sessionipaddressvalidation)|| |`WEB SET OPTION`|`Web session enable IP address validation`||

IP address validation status for session cookies. For security reasons, by default the 4D web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. Dans certaines applications spécifiques, vous souhaiterez peut-être désactiver cette validation et accepter les cookies de session, même lorsque leurs adresses IP ne correspondent pas. For example when mobile devices switch between Wifi and 4G/5G networks, their IP address will change. In this case, you must pass 0 in this option to allow clients to be able to continue using their Web sessions even when the IP addresses change. Note that this setting lowers the security level of your application.

When it is modified, this setting is effective immediately (you do not need to restart the HTTP server).

Possible values: 0 (disabled) or 1 (enabled, default).




## Deprecated Settings

The following settings are still supported but rely on deprecated features or technologies. It is usually recommended to keep default values.

#### Allow database Access through 4DSYNC URLs

This option controls the support of HTTP synchronization requests containing deprecated */4DSYNC* URLs.


#### Reuse temporary contexts (in remote mode)

Allows you to optimize the operation of the 4D Web Server in remote mode by reusing web processes created for processing previous web requests. In fact, the web server in 4D needs a specific web process for the handling of each web request; in remote mode, when necessary, this process connects to the 4D Server machine in order to access the data and database engine. It thus generates a temporary context using its own variables, selections, etc. Once the request has been dealt with, this process is killed.

When the **Reuse Temporary Contexts** option is checked, in remote mode 4D maintains the specific web processes and reuses them for subsequent requests. By removing the process creation stage, web server performance is improved.

In return, you must make sure in this case to systematically initialize the variables used in 4D methods in order to avoid getting incorrect results. Similarly, it is necessary to erase any current selections or records defined during the previous request.
> * This option is checked (and locked) automatically when the **Automatic Session Management** option is checked. In fact, the session management mechanism is actually based on the principle of recycling web processes: each session uses the same process that is maintained during the lifespan of the session. However, note that session processes cannot be "shared" between different sessions: once the session is over, the process is automatically killed (and not reused). It is therefore unnecessary to reset the selections or variables in this case.
> 
> * This option only has an effect with a 4D web server in remote mode. With a 4D in local mode, all web processes (other than session processes) are killed after their use.



#### Send Extended Characters Directly

When this option is checked, the web server sends extended characters “as is” in semi-dynamic pages, without converting them into HTML entities. This option has shown a speed increase on most foreign operating systems (especially the Japanese system).


#### Keep-Alive Connections

The 4D Web Server can use keep-alive connections. The keep-alive option allows you to maintain a single open TCP connection for the set of exchanges between the web browser and the server to save system resources and to optimize transfers.

The **Use Keep-Alive Connections** option enables or disables keep-alive TCP connections for the web server. This option is enabled by default. In most cases, it is advisable to keep this option check since it accelerates the exchanges. If the web browser does not support connection keep alive, the 4D Web Server automatically switches to HTTP/1.0.

The 4D Web Server keep-alive function concerns all TCP/IP connections (HTTP, HTTPS). Note however that keep-alive connections are not always used for all 4D web processes.

In some cases, other optimized internal functions may be invoked. Keep-alive connections are useful mainly for static pages.

Two options allow you to set how the keep-alive connections work:

*   **Number of requests by connection**: Allows you to set the maximum number of requests and responses able to travel over a connection keep alive. Limiting the number of requests per connection allows you to prevent server flooding due to a large number of incoming requests (a technique used by hackers).<p> The default value (100) can be increased or decreased depending on the resources of the machine hosting the 4D Web Server.

*   **Timeout**: This value defines the maximum wait period (in seconds) during which the web server maintains an open TCP connection without receiving any requests from the web browser. Once this period is over, the server closes the connection.<p> If the web browser sends a request after the connection is closed, a new TCP connection is automatically created. This operation is not visible for the user.

