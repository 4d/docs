---
id: webServerObject
title: Objet Web Server
---

Un projet 4D peut démarrer et piloter un serveur Web pour l'application principale (hôte) ainsi que pour chaque composant hébergé.

Par exemple, si vous avez installé deux composants dans votre application principale, vous pouvez démarrer et contrôler jusqu'à trois serveurs Web indépendants à partir de votre application :

- un serveur web pour l'application hôte,
- un serveur web pour le composant n°1,
- un serveur web pour le composant n°2.

En dehors de la mémoire, il n'y a pas de limite au nombre de composants et donc, de serveurs Web, pouvant être rattachés à un seul projet d'application 4D.

Chaque serveur web 4D, y compris le serveur web de l'application principale, est exposé comme un **objet** spécifique de la classe `4D.WebServer`. Une fois instancié, un objet serveur Web peut être géré depuis l'application courante ou depuis n'importe quel composant à l'aide d'un [grand nombre de propriétés et de fonctions](API/WebServerClass.md).

> Les [commandes WEB](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) héritées du langage 4D sont prises en charge mais ne peuvent pas sélectionner le serveur Web auquel elles s'appliquent (voir ci-dessous).

Chaque serveur web (application hôte ou composant) peut être utilisé dans son propre contexte, notamment :

- les appels vers la méthode base `On Web Authentication` et `On Web Connection`
- le traitement des balises 4D et les appels de méthodes,
- sessions web et gestion du protocole TLS.

Cela vous permet de développer des composants indépendants et des fonctionnalités qui accompagnent leurs propres interfaces Web.

## Instancier un objet serveur web

L'objet serveur Web de l'application hôte (serveur Web par défaut) est automatiquement chargé par 4D au démarrage. Ainsi, si vous écrivez dans un projet nouvellement créé :

```4d
$nbSrv:=WEB Server list.length   
//la valeur de $nbSrv est 1
```

To instantiate a web server object, call the [`WEB Server`](commands/web-server.md) command:

```4d
	//créer une variable objet de la classe 4D.WebServer
var webServer : 4D.WebServer 
	//appeler le serveur web depuis le contexte courant
webServer:=WEB Server  

	//équivalent à
webServer:=WEB Server(Web server database)
```

Si l'application utilise des composants et que vous souhaitez appeler :

- le serveur Web de l'application hôte à partir d'un composant ou
- le serveur qui a reçu la requête (quel que soit le serveur)

vous pouvez également utiliser :

```4d
var webServer : 4D.WebServer 
	//appeler le serveur web hôte depuis un composant  
webServer:=WEB Server(Web server host database)  
	//appeler le serveur web cible
webServer:=WEB Server(Web server receiving request)  
```

## Fonctions du serveur web

Un [objet de classe Web server](API/WebServerClass.md#web-server-object) contient les fonctions suivantes :

| Fonctions                                | Paramètres                          | Valeur retournée                   | Description            |
| ---------------------------------------- | ----------------------------------- | ---------------------------------- | ---------------------- |
| [`start()`](API/WebServerClass.md#start) | settings (objet) | status (object) | Démarre le serveur web |
| [`stop()`](API/WebServerClass.md#start)  | -                                   | -                                  | Stoppe le serveur web  |

Pour démarrer et arrêter un serveur Web, il suffit d'appeler les fonctions [`start()`](API/WebServerClass.md#start) et [`stop()`](API/WebServerClass.md#stop) de l'objet serveur Web :

```4d
var $status : Object
  	//démarrer un serveur web avec les paramètres par défaut
$status:=webServer.start()
	//démarrer le serveur web avec des paramètres personnalisés  
	//$settings objet contient les propriétés du serveur web
webServer.start($settings)

	//stopper le serveur web
$status:=webServer.stop()
```

## Propriétés du serveur web

Un objet serveur Web contient [diverses propriétés](API/WebServerClass.md#web-server-object) qui configurent le serveur Web.

Ces propriétés sont définies :

1. à l'aide du paramètre `settings` de la fonction [`.start()`](API/WebServerClass.md#start) (sauf pour les propriétés en lecture seule, voir ci-dessous),
2. si elles ne sont pas utilisées, à l'aide de la commande `WEB SET OPTION` (applications hôtes uniquement),
3. si elles ne sont pas utilisées, dans les propriétés de l'application hôte ou du composant.

- Si le serveur Web n'est pas démarré, les propriétés contiennent les valeurs qui seront utilisées au prochain démarrage du serveur Web.
- Si le serveur Web est démarré, les propriétés contiennent les valeurs réelles utilisées par le serveur Web (les paramètres par défaut peuvent avoir été remplacés par le paramètre `settings` de la fonction [`.start()`](API/WebServerClass.md#start).

> _isRunning_, _name_, _openSSLVersion_ et _perfectForwardSecrecy_ sont des propriétés en lecture seule qui ne peuvent pas être prédéfinies dans le paramètre objet `settings` pour la fonction [`start()`](API/WebServerClass.md#start).

## Portée des commandes 4D Web

Le langage 4D contient [plusieurs commandes](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) permettant de contrôler le serveur Web. Cependant, ces commandes sont destinées à fonctionner avec un seul serveur Web (par défaut). Lorsque vous utilisez ces commandes dans le contexte d'objets serveur Web, assurez-vous que leur portée est appropriée.

| Command                         | Portée                            |
| ------------------------------- | --------------------------------- |
| `SET DATABASE PARAMETER`        | Application hôte du serveur web   |
| `WEB CLOSE SESSION`             | Serveur Web ayant reçu la requête |
| `WEB GET BODY PART`             | Serveur Web ayant reçu la requête |
| `WEB Get body part count`       | Serveur Web ayant reçu la requête |
| `WEB Get Current Session ID`    | Serveur Web ayant reçu la requête |
| `WEB GET HTTP BODY`             | Serveur Web ayant reçu la requête |
| `WEB GET HTTP HEADER`           | Serveur Web ayant reçu la requête |
| `WEB GET OPTION`                | Application hôte du serveur web   |
| `WEB Get server info`           | Application hôte du serveur web   |
| `WEB GET SESSION EXPIRATION`    | Serveur Web ayant reçu la requête |
| `WEB Get session process count` | Serveur Web ayant reçu la requête |
| `WEB GET STATISTICS`            | Application hôte du serveur web   |
| `WEB GET VARIABLES`             | Serveur Web ayant reçu la requête |
| `WEB Is secured connection`     | Serveur Web ayant reçu la requête |
| `WEB Is server running`         | Application hôte du serveur web   |
| `WEB SEND BLOB`                 | Serveur Web ayant reçu la requête |
| `WEB SEND FILE`                 | Serveur Web ayant reçu la requête |
| `WEB SEND HTTP REDIRECT`        | Serveur Web ayant reçu la requête |
| `WEB SEND RAW DATA`             | Serveur Web ayant reçu la requête |
| `WEB SEND TEXT`                 | Serveur Web ayant reçu la requête |
| `WEB SET HOME PAGE`             | Application hôte du serveur web   |
| `WEB SET HTTP HEADER`           | Serveur Web ayant reçu la requête |
| `WEB SET OPTION`                | Application hôte du serveur web   |
| `WEB SET ROOT FOLDER`           | Application hôte du serveur web   |
| `WEB START SERVER`              | Application hôte du serveur web   |
| `WEB STOP SERVER`               | Application hôte du serveur web   |
| `WEB Validate digest`           | Serveur Web ayant reçu la requête |
