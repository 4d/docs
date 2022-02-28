---
id: web
title: Page Web
---

Les onglets de la page **Web** permettent de paramétrer les multiples aspects du serveur Web intégré de 4D (sécurité, démarrage, connexions, services Web, etc.). Pour plus d’informations sur le fonctionnement du serveur Web de 4D, reportez-vous au chapitre [Serveur Web](../WebServer/webServer.md). Pour plus d’informations sur les services Web de 4D, reportez-vous au chapitre [Publication et utilisation de Services Web](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html).

## Configuration

### Information de publication

#### Lancer le serveur Web au démarrage

Indique si le serveur Web doit être démarré dès le lancement de l'application 4D. Cette option est détaillée dans la section [Administration du serveur Web](../WebServer/webServerAdmin.md#starting-the-4d-web-server).

#### Activer HTTP

Indique si le Web server accepte des connexions non sécurisées. Voir [Activer HTTP](../WebServer/webServerConfig.md#enable-http).


#### Port HTTP

Numéro de port IP (TCP) d'écoute pour HTTP. Voir [Port HTTP](../WebServer/webServerConfig.md#http-port).

#### Adresse IP

Adresse IP sur laquelle le serveur web 4D recevra les requêtes HTTP (4D local et 4D Server). Voir [Adresse IP à écouter](../WebServer/webServerConfig.md#ip-address-to-listen).


#### Activer HTTPS

Indique si le Web server accepte des connexions sécurisées. Voir [Activer HTTPS](../WebServer/webServerConfig.md#enable-https).


#### Port HTTPS

Permet de modifier le numéro du port TCP/IP utilisé par le serveur Web pour les connexions HTTP sécurisées sur TLS (protocole HTTPS). Voir [Port HTTPS](../WebServer/webServerConfig.md#https-port).

#### Autoriser l'accès aux bases de données par le biais des URL 4DSYNC

*Note de compatibilité :* Cette option est [obsolète](../WebServer/webServerConfig.md#deprecated-settings). Pour l'accès aux bases de données via HTTP, il est désormais recommandé d'utiliser les fonctionnalités de stockage de données à distance ORDA et les requêtes REST.


### Chemins

#### Racine HTML par défaut

Permet de définir l'emplacement par défaut des fichiers du site Web et indique le niveau hiérarchique sur le disque au-dessus duquel aucune requête ne pourra accéder. Voir [Dossier Racine](../WebServer/webServerConfig.md#root-folder).

#### Page d’accueil par défaut

Cette option permet de désigner la page d’accueil par défaut pour le serveur Web. Voir [page d'accueil par défaut](../WebServer/webServerConfig.md#default-home-page).




## Options (I)

### Cache


#### Utiliser le cache Web de 4D

Active le cache de la page web. Voir [Cache](../WebServer/webServerConfig.md#cache).

#### Taille du cache des pages

Définit la taille du cache. Voir [Cache](../WebServer/webServerConfig.md#cache).


#### Vider le cache

À tout moment, vous pouvez vider le cache des pages et des images qu'il contient (si, par exemple, vous avez modifié une page statique et que vous souhaitez la recharger dans le cache). À tout moment, vous pouvez vider le cache des pages et des images qu'il contient (si, par exemple, vous avez modifié une page statique et que vous souhaitez la recharger dans le cache). Le cache est alors immédiatement effacé.

> Vous pouvez également utiliser l'URL spécifique [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Process Web

Cette zone vous permet de configurer, par le serveur Web, la gestion des sessions utilisateur et leurs process associés.

> L'option **Sessions héritées** n'est disponible que pour la compatibilité dans les bases/projets créé(e) s avec les versions de 4D antérieures à 4D v18 R6.

#### Sessions extensibles (sessions multi-process)

Lorsque vous sélectionnez cette option (recommandée), une session utilisateur est gérée via un objet **Session**. Voir la [page Sessions utilisateur](../WebServer/sessions.md#enabling-sessions).


#### Pas de sessions

Lorsque cette option est sélectionnée, le serveur Web ne fournit aucune prise en charge spécifique pour les [sessions utilisateur](../WebServer/sessions.md). Les requêtes successives des clients Web sont toujours indépendantes et aucun contexte n'est conservé sur le serveur.

Dans ce mode, vous pouvez configurer des paramètres de serveur Web supplémentaires :

-   [Process Web simultanés maxi](#maximum-concurrent-web-processes)
-   [Réutilisation des contextes temporaires (4D en mode distant)](#reuse-temporary-contexts)
-   [Utiliser des process préemptifs](#use-preemptive-web-processes)

#### Anciennes sessions (sessions process uniques)

*Note de compatibilité :* Cette option est disponible uniquement dans les bases/projets créé(e) s avec une version 4D antérieure à 4D v18 R6.

Cette option permet de gérer les anciennes sessions utilisateur par le serveur 4D HTTP. Ce mécanisme est décrit dans la section [Gestion des sessions Web](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html). Voir [Garder session](../WebServer/webServerConfig.md#keep-session).

L'option [Réutilisation des contextes temporaires (4D en mode distant)](#reuse-temporary-contexts) est automatiquement cochée (et verrouillée).

#### Process Web simultanés maxi

Non disponible avec les [sessions extensibles](../WebServer/sessions.md).

Cette option indique la limite strictement supérieure du nombre de process Web pouvant être simultanément ouverts sur le serveur. Voir [Process Web simultanés maxi](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).


#### Réutilisation des contextes temporaires

Non disponible avec les [sessions extensibles](../WebServer/sessions.md).

Permet d’optimiser le fonctionnement du serveur Web de 4D en mode distant. Voir [Réutilisation des contextes temporaires en mode distant](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utiliser des process préemptifs

Non disponible avec les [sessions extensibles](../WebServer/sessions.md).

Active les process web préemptifs dans vos applications compilées. Lorsque l'option **Utiliser des processus préemptifs** est sélectionnée, l'éligibilité de votre code lié au Web (y compris les balises 4D et les méthodes base Web) à l'exécution préemptive sera évaluée pendant la compilation. Pour plus d'informations, voir [Utiliser des processus Web préemptifs](../WebServer/preemptiveWeb.md).

**Note :** cette option ne s'applique pas aux process de service Web (serveur ou client). Preemptive mode is supported by Web service processes at method level: you just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.


#### Durée de vie des process inactifs

Non disponible avec les [sessions extensibles](../WebServer/sessions.md).

Allows you to set the maximum timeout before closing for inactive Web processes on the server. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).



### Mots de passe Web

Set the authentication system that you want to apply to your Web server. Three options are proposed:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the *Web Development* documentation.


## Options (II)

### Text Conversion

#### Envoyer directement les caractères étendus

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define the set of characters to be used by the 4D Web server. See [Character Set](../WebServer/webServerConfig.md#character-set).

### Utiliser les connexions persistantes

See [Deprecated Settings](../WebServer/webServerConfig.md#keep-alive-connections).

### Paramètres CORS

#### Enable CORS

Enables Cross-origin resource sharing (CORS) service. See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### Domain names/HTTP methods allowed

List of allowed hosts and methods for the CORS service. See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).



## Log (type)


### Log Format

Démarre ou arrête l'enregistrement des requêtes reçues par le serveur Web 4D dans le fichier *logweb.txt* et définit son format. See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.


The log format menu provides the following options:

-   **No Log File**: When this option is selected, 4D will not generate a log file of requests.

-   **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\ host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\ Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

    -   host: IP address of the client (ex. 192.100.100.10)
    -   rfc931: information not generated by 4D, it's always - (a minus sign)
    -   user: user name as it is authenticated, or else it is - (a minus sign). Si le nom d'utilisateur comporte des espaces,ils seront remplacés par _ (underscore).
    -   DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds

> La date et heure sont locales au serveur.

-   request: request sent by the client (ex. GET /index.htm HTTP/1.0)
-   state: reply given by the server.
-   length: size of the data returned (except the HTTP header) or 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds. The possible values of state are as follows: 200: OK 204: No contents 302: Redirection 304: Not modified 400: Incorrect request 401: Authentication required 404: Not found 500: Internal error The CLF format cannot be customized.

-   **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. Il ajoute simplement deux champs HTTP supplémentaires à la fin de chaque requête : Referer et User-agent.

    -   Referer: Contains the URL of the page pointing to the requested document.
    -   User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> The DLF format cannot be customized.

-   **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. Il peut être utilisé pour construire des historiques sophistiqués qui répondent à des besoins spécifiques. Pour cette raison, le format ELF peut être personnalisé : il est possible de choisir les champs à enregistrer ainsi que leur ordre d'insertion dans le fichier.

-   **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Like the ELF format, it can be customized.

**Configuring the fields** When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. Vous devrez sélectionner chaque champ à inclure dans le journal. Vous devrez sélectionner chaque champ à inclure dans le journal.

**Note**: You cannot select the same field twice.

Le tableau suivant répertorie les champs disponibles pour chaque format (par ordre alphabétique) et décrit leur contenu :

| Champ          | ELF | WLF | Valeur                                                                     |
| -------------- | --- | --- | -------------------------------------------------------------------------- |
| BYTES_RECEIVED |     | X   | Nombre d'octets reçus par le serveur                                       |
| BYTES_SENT     | X   | X   | Number of bytes sent by the server to the client                           |
| C_DNS          | X   | X   | IP address of the DNS (ELF: field identical to the C_IP field)             |
| C_IP           | X   | X   | IP address of the client (for example 192.100.100.10)                      |
| CONNECTION_ID  |     | X   | Connection ID number                                                       |
| CS(COOKIE)     | X   | X   | Information about cookies contained in the HTTP request                    |
| CS(HOST)       | X   | X   | Host field of the HTTP request                                             |
| CS(REFERER)    | X   | X   | URL of the page pointing to the requested document                         |
| CS(USER_AGENT) | X   | X   | Information about the software and operating system of the client          |
| CS_SIP         | X   | X   | IP address of the server                                                   |
| CS_URI         | X   | X   | URI on which the request is made                                           |
| CS_URI_QUERY | X   | X   | Request query parameters                                                   |
| CS_URI_STEM  | X   | X   | Part of request without query parameters                                   |
| DATE           | X   | X   | DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year |
| METHOD         | X   | X   | HTTP method used for the request sent to the server                        |
| PATH_ARGS      |     | X   | CGI parameters: string located after the "$" character                     |
| STATUS         | X   | X   | Reply provided by the server                                               |
| TIME           | X   | X   | HH: hour, MM: minutes, SS: seconds                                         |
| TRANSFER_TIME  | X   | X   | Time requested by server to generate the reply                             |
| USER           | X   | X   | User name if authenticated; otherwise - (minus sign).                      |
|                |     |     | If the user name contains spaces, they are replaced by _ (underlines)      |
| Variable URL   |     | X   | URL requested by the client                                                |

> Les dates et heures sont données au format GMT

## Log (backup)

Configure the automatic backup parameters for the request log. Vous devez d'abord choisir la fréquence (jours, semaines, etc.) ou le critère de la taille limite du fichier en cliquant sur le bouton radio correspondant. Vous devez ensuite spécifier le moment précis du backup si nécessaire.

-   **Pas de sauvegarde du journal** : La fonction de sauvegarde programmée est désactivée.
-   **Toutes les X heure(s)** : Cette option est utilisée pour programmer des sauvegardes sur une base horaire. Vous pouvez entrer une valeur entre 1 et 24.

    -   **à partir de**: Permet de définir l'heure du déclenchement du premier backup.
-   **Tous les N jour(s) à N** : permet de programmer des backups sur une base journalière. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
-   **Tous les N jour(s) à N** : permet de programmer des backups sur une base hebdomadaire. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer le ou les jours de la semaine et l’heure à laquelle chaque sauvegarde doit être déclenchée. Vous pouvez cocher un ou plusieurs jour(s) de la semaine. Par exemple, vous pouvez utiliser cette option pour définir deux sauvegardes hebdomadaires : une le mercredi et une le vendredi.
-   **Tous les N mois, Ne jour à N** : permet de programmer des sauvegardes sur une base mensuelle. Saisissez 1 si vous souhaitez une sauvegarde mensuelle. Lorsque vous cochez cette option, vous devez indiquer le jour de chaque mois auquel la sauvegarde doit être déclenchée, ainsi que l’heure de déclenchement.
-   **Tous les N Mo** : Cette option est utilisée pour programmer les sauvegardes en fonction de la taille du fichier journal courant. Un backup se déclenche automatiquement quand le fichier atteint la taille spécifiée. La taille limite du fichier peut être fixée à 1, 10, 100 ou 1000 Mo.

> In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.

## Web Services

You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Server Side

This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.

-   **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the *Published in WSDL* attribute. When this option is checked, 4D creates the WSDL file.
-   **Web Service Name**: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. By default, 4D uses the name A_WebService.
-   **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: http://www.4d.com/namespace/default.

> In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).

### Client Side

This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.

-   **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. By default, 4D uses the prefix "proxy_".


## Web Features

This page contains the options used to enable and control advanced Web features such as the REST server.

### Publishing

#### Expose as REST server

Starts and stops the REST Server. See [REST Server Configuration](../REST/configuration.md).

### Accès

This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Web Studio

#### Enable access to the web studio

Enables general access to the web studio. You still need to configure it at every project level.