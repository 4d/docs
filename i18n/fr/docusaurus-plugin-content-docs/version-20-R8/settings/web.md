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

_Note de compatibilité :_ Cette option est [obsolète](../WebServer/webServerConfig.md#deprecated-settings). Pour l'accès aux bases de données via HTTP, il est désormais recommandé d'utiliser les fonctionnalités de stockage de données à distance ORDA et les requêtes REST.

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

À tout moment, vous pouvez vider le cache des pages et des images qu'il contient (si, par exemple, vous avez modifié une page statique et que vous souhaitez la recharger dans le cache).
At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache). Le cache est alors immédiatement effacé.

> Vous pouvez également utiliser l'URL spécifique [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Process Web

Cette zone vous permet de configurer, par le serveur Web, la gestion des sessions utilisateur et leurs process associés.

> L'option **Sessions héritées** n'est disponible que pour la compatibilité dans les bases/projets créé(e) s avec les versions de 4D antérieures à 4D v18 R6.

#### Sessions extensibles (sessions multi-process)

Lorsque vous sélectionnez cette option (recommandée), une session utilisateur est gérée via un objet **Session**. Voir la [page Sessions utilisateur](../WebServer/sessions.md#enabling-sessions).

#### Pas de sessions

Lorsque cette option est sélectionnée, le serveur Web ne fournit aucune prise en charge spécifique pour les [sessions utilisateur](../WebServer/sessions.md). Les requêtes successives des clients Web sont toujours indépendantes et aucun contexte n'est conservé sur le serveur.

Dans ce mode, vous pouvez configurer des paramètres de serveur Web supplémentaires :

- [Process Web simultanés maxi](#maximum-concurrent-web-processes)
- [Réutilisation des contextes temporaires (en mode distant)](#reuse-temporary-context)
- [Utiliser des process préemptifs](#use-preemptive-web-processes)

#### Anciennes sessions (sessions process uniques)

_Note de compatibilité :_ Cette option est disponible uniquement dans les bases/projets créé(e) s avec une version 4D antérieure à 4D v18 R6.

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

> Cette option ne s'applique pas aux sessions extensibles, aux process REST (mode compilé), ni aux process Web service (serveur et client).  Voir [Activer le mode préemptif pour le serveur web](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).

#### Conservation des process inactifs

Non disponible avec les [sessions extensibles](../WebServer/sessions.md).

Permet de définir le délai maximum avant fermeture (timeout) des process Web inactifs sur le serveur. Voir [Durée de vie des process inactifs](../WebServer/webServerConfig.md#durée-de-vie-des-process-inactifs).

### Mots de passe Web

Définit le système d'authentification que vous souhaitez utiliser pour le serveur Web. Trois options sont proposées :

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Il est recommandé d'utiliser l'authentification **personnalisée**. Voir le chapitre [**Authentification**](../WebServer/authentication.md) dans la section _Développement Web_.

## Options (II)

### Conversion texte

#### Envoyer directement les caractères étendus

Voir [Propriétés obsolètes](../WebServer/webServerConfig.md#propriétés-obsolètes).

#### Standard Set

Définit le jeu de caractères à utiliser par le serveur web 4D. Voir [Jeu de caractères](../WebServer/webServerConfig.md#jeu-de-caractères).

### Utiliser les connexions persistantes

Voir [Propriétés obsolètes](../WebServer/webServerConfig.md#utiliser-les-connexions-persistantes).

### Paramètres CORS

#### Activer CORS

Active le service Cross-origin resource sharing (CORS). Voir [Activer Cors](../WebServer/webServerConfig.md#activer-cors).

#### Noms de domaines/Méthodes HTTP autorisées

Liste des hôtes et méthodes autorisé(e)s pour le service CORS. Voir [Paramètres CORS](../WebServer/webServerConfig.md#paramètres-cors).

## Journal (format)

### Format du journal (logweb.txt)

Démarre ou arrête l'enregistrement des requêtes reçues par le serveur Web 4D dans le fichier _logweb.txt_ et définit son format. Voir [Enregistrement des logs](../WebServer/webServerConfig.md#enregistrement-des-logs).

> L’activation et la désactivation du fichier d’historique des requêtes peut également être effectuée par programmation, à l’aide de la commande [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html).

Le menu de format du journal propose les options suivantes :

- **Pas de journal** : Lorsque cette option est sélectionnée, 4D ne génère pas d’historique des requêtes.

- **CLF (Common Log Format)** : Lorsque cette option est sélectionnée, l’historique des requêtes est généré au format CLF. Avec le format CLF, chaque ligne du fichier représente une requête, telle que :\
  host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\ Chaque champ est séparé par un espace et chaque ligne se termine par la séquence CR/LF (caractère 13, caractère 10).

  - hôte : adresse IP du client (ex. 192.100.100.10)
  - rfc931 : information non gérée par 4D, c’est toujours - (signe moins)
  - utilisateur : nom de l’utilisateur tel qu’il s’est authentifié, sinon - (signe moins). Si le nom de l’utilisateur contient des espaces, ils sont remplacés par des _ (tiret bas).
  - JJ : jour, MMM : mois abrégé en 3 lettres et toujours en anglais (Jan, Feb, ...), AAAA : année, HH : heure, MM : minutes, SS : secondes

> La date et heure sont locales au serveur.

- requête : requête envoyée par le client (ex. GET /index.htm HTTP/1.0)
- statut : réponse donnée par le serveur.
- longueur : taille des données renvoyées (hors en-tête HTTP) ou 0.

> **Note :** Pour des raisons de performances, les opération sont stockées dans une mémoire tampon par paquets de 1 Ko avant d'être écrites sur disque. Les opérations sont également écrites sur disque si aucune requête n'a été envoyée au bout de 5 secondes.
> Les valeurs possibles de l'état sont les suivantes :
> 200 : OK
> 204 : Pas de contenu
> 302 : Redirection
> 304 : Non modifié
> 400 : Requête incorrecte
> 401 : Authentification requise
> 404 : Non trouvé
> 500 : Erreur interne
> Le format CLF ne peut pas être personnalisé.

- **DLF (Combined Log Format)** : Lorsque cette option est sélectionnée, l’historique des requêtes est généré au format DLF. Le format DLF est semblable au format CLF dont il reprend exactement la structure. Il ajoute simplement deux champs HTTP supplémentaires à la fin de chaque requête : Referer et User-agent.

  - Referer : contient l’URL de la page pointant vers le document demandé.
  - User-agent : contient le nom et la version du navigateur ou du logiciel client à l’origine de la requête.

> Le format DLF ne peut pas être personnalisé.

- **ELF (Extended Log Format)** : Lorsque cette option est sélectionnée, l’historique des requêtes est généré au format ELF. Le format ELF est largement répandu dans le monde des serveurs HTTP. Il peut être utilisé pour construire des historiques sophistiqués qui répondent à des besoins spécifiques. Pour cette raison, le format ELF peut être personnalisé : il est possible de choisir les champs à enregistrer ainsi que leur ordre d'insertion dans le fichier.

- **WLF (WebStar Log Format)** : Lorsque cette option est sélectionnée, l’historique des requêtes est généré au format WLF. Le format WLF a été développé spécifiquement pour le serveur 4D WebSTAR. Il est semblable au format ELF, il dispose simplement de champs supplémentaires. Comme le format ELF, il est personnalisable.

**Configurer les champs** Lorsque vous choisissez le format ELF (Extended Log Format) ou WLF (WebStar Log Format), la zone “Formatage du journal” affiche les champs disponibles pour le format. Vous devrez sélectionner chaque champ à inclure dans le journal. Pour cela, utilisez les flèches de commande ou procédez par glisser-déposer.

**Note** : Il n’est pas possible de sélectionner deux fois le même champ.

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

## Journal (sauvegarde)

Paramètres d’archivage automatique du journal des requêtes. D'abord, vous devez choisir la fréquence (jours, semaines, etc.) ou le critère de limite de taille du fichier en cliquant sur le bouton radio correspondant. Vous devez ensuite spécifier le moment précis de la sauvegarde si nécessaire.

- **Pas de sauvegarde du journal** : La fonction de sauvegarde programmée est désactivée.
- **Toutes les X heure(s)** : Cette option est utilisée pour programmer des sauvegardes sur une base horaire. Vous pouvez entrer une valeur entre 1 et 24.

  - **à partir de**: Permet de définir l'heure du déclenchement du premier backup.
- **Tous les N jour(s) à N** : permet de programmer des backups sur une base journalière. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
- **Tous les N jour(s) à N** : permet de programmer des backups sur une base hebdomadaire. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer le ou les jours de la semaine et l’heure à laquelle chaque sauvegarde doit être déclenchée. Vous pouvez cocher un ou plusieurs jour(s) de la semaine. Par exemple, vous pouvez utiliser cette option pour définir deux sauvegardes hebdomadaires : une le mercredi et une le vendredi.
- **Tous les N mois, Ne jour à N** : permet de programmer des sauvegardes sur une base mensuelle. Saisissez 1 si vous souhaitez une sauvegarde mensuelle. Lorsque vous cochez cette option, vous devez indiquer le jour de chaque mois auquel la sauvegarde doit être déclenchée, ainsi que l’heure de déclenchement.
- **Tous les N Mo** : Cette option est utilisée pour programmer les sauvegardes en fonction de la taille du fichier journal courant. Une sauvegarde se déclenche automatiquement quand le fichier atteint la taille spécifiée. La taille limite du fichier peut être fixée à 1, 10, 100 ou 1000 Mo.

> En cas de sauvegarde périodique, si le serveur Web n’était pas lancé au moment théorique de la sauvegarde, 4D considère au lancement suivant que la sauvegarde a échoué et applique les paramétrages adéquats, définis dans les Propriétés.

## Web Services

Les options de cette page permettent d'activer et de configurer les services Web au sein de la base 4D, aussi bien en publication (serveur) qu'en souscription (client) .

Pour plus d'informations sur la prise en charge des Services Web dans 4D, reportez-vous au chapitre [Publication et utilisation de Services Web](https://doc.4d.com/4Dv19R4/4D/19-R4/Publication-et-utilisation-de-Services-Web.200-5736722.fr.html).

### Serveur

Cette zone affiche les options relatives à l’utilisation de 4D en tant que “serveur” de Web Services, c’est-à-dire publiant des méthodes projet sous forme de Web Services.

- **Autoriser requêtes Web Services** : Cette option permet d’initialiser la publication de Web Services. Si cette option n’est pas cochée, 4D refuse les requêtes SOAP et ne génère pas de WSDL — même si des méthodes disposent de l’attribut _Disponible via Web Service_. Lorsque cette option est cochée, 4D crée le fichier WSDL.
- **Nom Web Service**: cette zone permet de modifier le “nom générique” du Web Service. Ce nom permet de différencier les services au niveau du serveur SOAP (lorsque le serveur publie plusieurs Web Services), ainsi que dans les annuaires de Web Services. Par défaut, 4D utilise le nom A_WebService.
- **Espace de nommage Web Services** : cette zone permet de modifier l’espace de nommage (le namespace) des Web Services publiés par 4D. Chaque Web Service publié sur Internet doit être unique. L’unicité des noms de Web Services est assuré à l’aide des espaces de nommage XML (XML namespace). Un espace de nommage est une chaîne de caractères arbitraire permettant d’identifier de manière unique un ensemble de balises XML. Typiquement, l’espace de nommage début par l’URL de la société (http://masociete.com/monespacedenommage). Dans ce cas, il n’est pas indispensable qu’il y ait quelque chose à l’URL défini, il importe simplement que la chaîne de caractères utilisée soit unique. Par défaut, 4D utilise l’espace de nommage http://www.4d.com/namespace/default.

> Conformément à la norme XML concernant les noms de balises, la chaîne de caractères utilisée ne doit pas contenir d’espaces ni débuter par un chiffre. En outre, pour éviter tout risque d’incompatibilité, il est recommandé de ne pas utiliser de caractères étendus (tels que des caractères accentués).

### Client

Cette zone contient une option relative à l’utilisation de 4D en tant que “client” de Web Services, c’est-à-dire souscrivant à des services publiés sur le réseau.

- **Préfixe des méthodes créées par l’assistant** : cette zone vous permet de modifier le préfixe automatiquement ajouté par 4D devant le nom des méthodes proxy générées par l’assistant Web Services. Les méthodes projet proxy font le lien entre l’application 4D et le serveur de Web Services. Par défaut, 4D utilise le préfixe “proxy_”.

## Fonctionnalités Web

Les options de cette page permettent d'activer et de contrôler les fonctionnalités Web avancées telles que le serveur REST.

### Publication

#### Activer le service REST

Démarre et stoppe le serveur REST. Voir [Configuration du serveur REST](../REST/configuration.md).

### Accès

:::info Obsolète

**Cette section est obsolète** à partir de 4D 20 R6. Si la configuration actuelle du projet est obsolète et doit être mise à niveau, cette section, y compris le bouton **Activer l'authentification REST via la fonction ds.authentify()** (voir ci-dessous), est affichée. If your project is already compatible with the [Force login](../REST/authUsers.md#force-login-mode) mode, the section is missing and you can ignore this paragraph.

:::

See [Users and sessions](../REST/authUsers.md) to know the recommended way to control and manage REST access in your 4D projects.

#### Activer l'authentification REST via la fonction ds.authentify()

Cliquez sur le bouton **Activer l'authentification REST via la fonction ds.authentify()** pour mettre automatiquement à niveau votre projet en matière d'accès utilisateur REST. Notez que cette opération ne peut pas être annulée et peut nécessiter que vous modifiez votre code (une boîte de dialogue d'avertissement s'affiche lorsque vous cliquez sur le bouton).

:::note

Ce bouton est uniquement disponible dans les projets ouverts avec l'application 4D (mono-utilisateur).

:::

Le bouton déclenche la séquence de mise à niveau suivante :

- Le groupe d'utilisateurs de l'API REST défini dans le menu **Lecture/Écriture** est supprimé.
- La méthode base `On REST Authentication` est supprimée (déplacée dans la corbeille du système).
- Un fichier ["roles.json"](../ORDA/privileges.md#fichier-rolesjson) par défaut est créé dans le dossier [Sources](../Project/architecture.md#sources) du projet s'il n'existe pas déjà, avec son attribut `forceLogin` défini sur `True`.

N'oubliez pas de redémarrer votre projet après avoir effectué cette mise à niveau.

La prochaine étape consiste à modifier votre code en conséquence. [**Reportez-vous à cet article de blog pour savoir comment procéder**](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/).

### Qodly Studio

#### Activer l'accès à Qodly Studio

:::note

Cette option n'apparaît que si la licence Qodly Studio est activée.

:::

Cette option permet l'accès utilisateur à [Qodly Studio](../WebServer/qodly-studio.md) pour le projet en cours. Notez que l'accès global doit être autorisé au [niveau de l'application](../Admin/webAdmin.md).
