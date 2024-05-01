---
id: web
title: Page Web
---

Using the tabs on the **Web** page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see [Web server](../WebServer/webServer.md). For more information about 4D Web services, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html) chapter.

## Configuration

### Information de publication

#### Lancer le serveur Web au démarrage

Indique si le serveur Web doit être démarré dès le lancement de l'application 4D. This option is described in the [Web server administration](../WebServer/webServerAdmin.md#starting-the-4d-web-server) section.

#### Activer HTTP

Indique si le Web server accepte des connexions non sécurisées. See [Enable HTTP](../WebServer/webServerConfig.md#enable-http).

#### Port HTTP

Numéro de port IP (TCP) d'écoute pour HTTP. See [HTTP Port](../WebServer/webServerConfig.md#http-port).

#### Adresse IP

Adresse IP sur laquelle le serveur web 4D recevra les requêtes HTTP (4D local et 4D Server). See [IP Address to listen](../WebServer/webServerConfig.md#ip-address-to-listen).

#### Activer HTTPS

Indique si le Web server accepte des connexions sécurisées. See [Enable HTTPS](../WebServer/webServerConfig.md#enable-https).

#### Port HTTPS

Permet de modifier le numéro du port TCP/IP utilisé par le serveur Web pour les connexions HTTP sécurisées sur TLS (protocole HTTPS). See [HTTPS Port](../WebServer/webServerConfig.md#https-port).

#### Autoriser l'accès aux bases de données par le biais des URL 4DSYNC

_Compatibility Note_: This option is [deprecated](../WebServer/webServerConfig.md#deprecated-settings). Pour l'accès aux bases de données via HTTP, il est désormais recommandé d'utiliser les fonctionnalités de stockage de données à distance ORDA et les requêtes REST.

### Chemins

#### Racine HTML par défaut

Permet de définir l'emplacement par défaut des fichiers du site Web et indique le niveau hiérarchique sur le disque au-dessus duquel aucune requête ne pourra accéder. See [Root Folder](../WebServer/webServerConfig.md#root-folder).

#### Page d’accueil par défaut

Cette option permet de désigner la page d’accueil par défaut pour le serveur Web. See [Default Home page](../WebServer/webServerConfig.md#default-home-page).

## Options (I)

### Cache

#### Utiliser le cache Web de 4D

Active le cache de la page web. See [Cache](../WebServer/webServerConfig.md#cache).

#### Taille du cache des pages

Définit la taille du cache. See [Cache](../WebServer/webServerConfig.md#cache).

#### Vider le cache

À tout moment, vous pouvez vider le cache des pages et des images qu'il contient (si, par exemple, vous avez modifié une page statique et que vous souhaitez la recharger dans le cache).
To do so, you just have to click on the **Clear Cache** button. Le cache est alors immédiatement effacé.

> You can also use the special URL [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Process Web

Cette zone vous permet de configurer, par le serveur Web, la gestion des sessions utilisateur et leurs process associés.

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Sessions extensibles (sessions multi-process)

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).

#### Pas de sessions

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Les requêtes successives des clients Web sont toujours indépendantes et aucun contexte n'est conservé sur le serveur.

Dans ce mode, vous pouvez configurer des paramètres de serveur Web supplémentaires :

- [Maximum Concurrent Web Processes](#maximum-concurrent-web-processes)
- [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
- [Use preemptive processes](#use-preemptive-web-processes)

#### Anciennes sessions (sessions process uniques)

_Compatibility Note:_ This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

Cette option permet de gérer les anciennes sessions utilisateur par le serveur 4D HTTP. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### Process Web simultanés maxi

Not available with [scalable sessions](../WebServer/sessions.md).

Cette option indique la limite strictement supérieure du nombre de process Web pouvant être simultanément ouverts sur le serveur. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).

#### Réutilisation des contextes temporaires

Not available with [scalable sessions](../WebServer/sessions.md).

Permet d’optimiser le fonctionnement du serveur Web de 4D en mode distant. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utiliser des process préemptifs

Not available with [scalable sessions](../WebServer/sessions.md).

Active les process web préemptifs dans vos applications compilées. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

> Cette option ne s'applique pas aux sessions extensibles, aux process REST (mode compilé), ni aux process Web service (serveur et client).  See [Enabling the preemptive mode for the web server](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).

#### Conservation des process inactifs

Not available with [scalable sessions](../WebServer/sessions.md).

Permet de définir le délai maximum avant fermeture (timeout) des process Web inactifs sur le serveur. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).

### Mots de passe Web

Définit le système d'authentification que vous souhaitez utiliser pour le serveur Web. Trois options sont proposées :

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the _Web Development_ documentation.

## Options (II)

### Conversion texte

#### Envoyer directement les caractères étendus

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Définit le jeu de caractères à utiliser par le serveur web 4D. See [Character Set](../WebServer/webServerConfig.md#character-set).

### Utiliser les connexions persistantes

See [Deprecated Settings](../WebServer/webServerConfig.md#keep-alive-connections).

### Paramètres CORS

#### Activer CORS

Active le service Cross-origin resource sharing (CORS). See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### Noms de domaines/Méthodes HTTP autorisées

Liste des hôtes et méthodes autorisées pour le service CORS. See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).

## Journal (format)

### Format du journal (logweb.txt)

Starts or stops the recording of requests received by the 4D web server in the _logweb.txt_ file and sets its format. See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.

Le menu de format du journal propose les options suivantes :

- **No Log File**: When this option is selected, 4D will not generate a log file of requests.

- **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\
  host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\
  Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

  - hôte : adresse IP du client (ex. 192.100.100.10)
  - rfc931 : information non gérée par 4D, c’est toujours - (signe moins)
  - utilisateur : nom de l’utilisateur tel qu’il s’est authentifié, sinon - (signe moins). Si le nom de l’utilisateur contient des espaces, ils sont remplacés par des _ (tiret bas).
  - JJ : jour, MMM : mois abrégé en 3 lettres et toujours en anglais (Jan, Feb, ...), AAAA : année, HH : heure, MM : minutes, SS : secondes

> La date et heure sont locales au serveur.

- requête : requête envoyée par le client (ex. GET /index.htm HTTP/1.0)
- statut : réponse donnée par le serveur.
- longueur : taille des données renvoyées (hors en-tête HTTP) ou 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. Les opérations sont également écrites sur disque si aucune requête n'a été envoyée au bout de 5 secondes.
> The possible values of state are as follows:
> 200: OK
> 204: No contents
> 302: Redirection
> 304: Not modified
> 400: Incorrect request
> 401: Authentication required
> 404: Not found
> 500: Internal error
> The CLF format cannot be customized.

- **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. Le format DLF est semblable au format CLF dont il reprend exactement la structure. Il ajoute simplement deux champs HTTP supplémentaires à la fin de chaque requête : Referer et User-agent.

  - Referer : contient l’URL de la page pointant vers le document demandé.
  - User-agent : contient le nom et la version du navigateur ou du logiciel client à l’origine de la requête.

> Le format DLF ne peut pas être personnalisé.

- **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. Le format ELF est largement répandu dans le monde des serveurs HTTP. Il peut être utilisé pour construire des historiques sophistiqués qui répondent à des besoins spécifiques. Pour cette raison, le format ELF peut être personnalisé : il est possible de choisir les champs à enregistrer ainsi que leur ordre d'insertion dans le fichier.

- **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. Le format WLF a été développé spécifiquement pour le serveur 4D WebSTAR. Il est semblable au format ELF, il dispose simplement de champs supplémentaires. Comme le format ELF, il est personnalisable.

**Configuring the fields**
When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. Vous devrez sélectionner chaque champ à inclure dans le journal. Pour cela, utilisez les flèches de commande ou procédez par glisser-déposer.

**Note**: You cannot select the same field twice.

Le tableau suivant répertorie les champs disponibles pour chaque format (par ordre alphabétique) et décrit leur contenu :

| Champ                                                  | ELF | WLF | Valeur                                                                                                                                                                                              |
| ------------------------------------------------------ | --- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BYTES_RECEIVED                    |     | X   | Nombre d'octets reçus par le serveur                                                                                                                                                                |
| BYTES_SENT                        | X   | X   | Nombre d’octets envoyés par le serveur au client                                                                                                                                                    |
| C_DNS                             | X   | X   | Adresse IP du DNS (ELF : champ identique au champ C_IP)                                                                                     |
| C_IP                              | X   | X   | Adresse IP du client (par exemple 192.100.100.10)                                                                                |
| CONNECTION_ID                     |     | X   | Numéro unique de la connexion                                                                                                                                                                       |
| CS(COOKIE)                          | X   | X   | Informations sur les cookies contenus dans la requête HTTP                                                                                                                                          |
| CS(HOST)                            | X   | X   | Champ Host de la requête HTTP                                                                                                                                                                       |
| CS(REFERER)                         | X   | X   | URL de la page pointant vers le document demandé                                                                                                                                                    |
| CS(USER_AGENT) | X   | X   | Informations sur le logiciel et le système d’exploitation du client                                                                                                                                 |
| CS_SIP                            | X   | X   | Adresse IP du serveur                                                                                                                                                                               |
| CS_URI                            | X   | X   | URI sur lequel la requête est effectuée                                                                                                                                                             |
| CS_URI_QUERY | X   | X   | Paramètres d’interrogation de la requête                                                                                                                                                            |
| CS_URI_STEM  | X   | X   | Partie de la requête sans les paramètres d’interrogation                                                                                                                                            |
| DATE                                                   | X   | X   | DD: jour, MMM: abréviation de 3 lettres pour le mois (Jan, Feb,...), YYYY: année |
| METHOD                                                 | X   | X   | Méthode HTTP utilisée pour la requête adressée au serveur                                                                                                                                           |
| PATH_ARGS                         |     | X   | Paramètres de la CGI : chaîne située après le caractère “$”                                                                                                                         |
| STATUS                                                 | X   | X   | Réponse fournie par le serveur                                                                                                                                                                      |
| TIME                                                   | X   | X   | HH: heure, MM: minutes, SS: secondes                                                                                                                |
| TRANSFER_TIME                     | X   | X   | Délai ayant été nécessaire au serveur pour générer la réponse                                                                                                                                       |
| USER                                                   | X   | X   | Nom d’utilisateur s’il s’est authentifié, sinon - (signe moins).                                                                                                 |
|                                                        |     |     | Si le nom d’utilisateur contient des espaces, ils sont remplacés par des _ (traits de soulignement)                                                         |
| Variable URL                                           |     | X   | URL demandé par le client                                                                                                                                                                           |

> Les dates et heures sont données au format GMT

## Journal (périodicité)

Paramètres d’archivage automatique du journal des requêtes. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. Vous devez ensuite spécifier le moment précis du backup si nécessaire.

- **No Backup**: The scheduled backup function is deactivated.
- **Every X hour(s)**: This option is used to program backups on an hourly basis. Vous pouvez entrer une valeur entre 1 et 24.

  - **starting at**: Used to set the time at which the first back up will begin.
- **Every X day(s) at X**: This option is used to program backups on a daily basis. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
- **Every X week(s), day at X**: This option is used to program backups on a weekly basis. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired.
- **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. Saisissez 1 si vous souhaitez une sauvegarde mensuelle. Lorsque vous cochez cette option, vous devez indiquer le jour de chaque mois auquel la sauvegarde doit être déclenchée, ainsi que l’heure de déclenchement.
- **Every X MB**: This option is used to program backups based on the size of the current request log file. Un backup se déclenche automatiquement quand le fichier atteint la taille spécifiée. La taille limite du fichier peut être fixée à 1, 10, 100 ou 1000 Mo.

> En cas de sauvegarde périodique, si le serveur Web n’était pas lancé au moment théorique de la sauvegarde, 4D considère au lancement suivant que la sauvegarde a échoué et applique les paramétrages adéquats, définis dans les Propriétés.

## Web Services

Les options de cette page permettent d'activer et de configurer les services Web au sein de la base 4D, aussi bien en publication (serveur) qu'en souscription (client) .

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Serveur

Cette zone affiche les options relatives à l’utilisation de 4D en tant que “serveur” de Web Services, c’est-à-dire publiant des méthodes projet sous forme de Web Services.

- **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the _Published in WSDL_ attribute. Lorsque cette option est cochée, 4D crée le fichier WSDL.
- **Web Service Name**: This area lets you change the "generic name" of the Web Service. Ce nom permet de différencier les services au niveau du serveur SOAP (lorsque le serveur publie plusieurs Web Services), ainsi que dans les annuaires de Web Services. Par défaut, 4D utilise le nom A_WebService.
- **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Chaque Web Service publié sur Internet doit être unique. L’unicité des noms de Web Services est assuré à l’aide des espaces de nommage XML (XML namespace). Un espace de nommage est une chaîne de caractères arbitraire permettant d’identifier de manière unique un ensemble de balises XML. Typiquement, l’espace de nommage début par l’URL de la société (http://masociete.com/monespacedenommage). Dans ce cas, il n’est pas indispensable qu’il y ait quelque chose à l’URL défini, il importe simplement que la chaîne de caractères utilisée soit unique. Par défaut, 4D utilise l’espace de nommage http://www.4d.com/namespace/default.

> Conformément à la norme XML concernant les noms de balises, la chaîne de caractères utilisée ne doit pas contenir d’espaces ni débuter par un chiffre. En outre, pour éviter tout risque d’incompatibilité, il est recommandé de ne pas utiliser de caractères étendus (tels que des caractères accentués).

### Client

Cette zone contient une option relative à l’utilisation de 4D en tant que “client” de Web Services, c’est-à-dire souscrivant à des services publiés sur le réseau.

- **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Les méthodes projet proxy font le lien entre l’application 4D et le serveur de Web Services. Par défaut, 4D utilise le préfixe “proxy_”.

## Fonctionnalités Web

Les options de cette page permettent d'activer et de contrôler les fonctionnalités Web avancées telles que le serveur REST.

### Publication

#### Activer le service REST

Démarre et stoppe le serveur REST. See [REST Server Configuration](../REST/configuration.md).

### Accès

Cette option vous permet de désigner un groupe d’utilisateurs 4D qui sera seul autorisé à établir la connexion à la base 4D à l'aide des requêtes REST. See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Qodly Studio

#### Activer l'accès à Qodly Studio

:::note

Cette option n'apparaît que si la licence Qodly Studio est activée.

:::

This option enables user access to [Qodly Studio](XXX) for the current project. Note that global access must be allowed at the [application level](../Admin/webAdmin.md).
