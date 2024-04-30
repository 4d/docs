---
id: webServerObject
title: Objet Web Server
---

Un projet 4D peut démarrer et surveiller un serveur Web pour l'application principale (hôte) ainsi que chaque composant hébergé.

Par exemple, si vous avez installé deux composants dans votre application principale, vous pouvez démarrer et contrôler jusqu'à trois serveurs Web indépendants à partir de votre application :

- un serveur web pour l'application hôte,
- un serveur web pour le composant n°1,
- un serveur web pour le composant n°2.

En dehors de la mémoire, il n'y a pas de limite au nombre de composants et donc, de serveurs Web, pouvant être rattachés à un seul projet d'application 4D.

Each 4D web server, including the main application's web server, is exposed as a specific **object** of the `4D.WebServer` class. Once instantiated, a web server object can be handled from the current application or from any component using a [large number of properties and functions](API/WebServerClass.md).

> The legacy [WEB commands](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) of the 4D language are supported but cannot select the web server to which they apply (see below).

Chaque serveur web (application hôte ou composant) peut être utilisé dans son propre contexte, notamment :

- `On Web Authentication` and `On Web Connection` database method calls
- le traitement des balises 4D et les appels de méthodes,
- sessions web et gestion du protocole TLS.

Cela vous permet de développer des composants indépendants et des fonctionnalités qui accompagnent leurs propres interfaces Web.

## Instancier un objet serveur web

L'objet serveur Web de l'application hôte (serveur Web par défaut) est automatiquement chargé par 4D au démarrage. Ainsi, si vous écrivez dans un projet nouvellement créé :

```4d
$nbSrv:=WEB Server list.length   
//la valeur de $nbSrv est 1
```

To instantiate a web server object, call the [`WEB Server`](API/WebServerClass.md#web-server) command:

```4d
	//create an object variable of the 4D.WebServer class
var webServer : 4D.WebServer 
	//call the web server from the current context
webServer:=WEB Server  

	//equivalent to
webServer:=WEB Server(Web server database)
```

Si l'application utilise des composants et que vous souhaitez appeler :

- le serveur Web de l'application hôte à partir d'un composant ou
- le serveur qui a reçu la requête (quel que soit le serveur)

vous pouvez également utiliser :

```4d
var webServer : 4D.WebServer 
	//call the host web server from a component  
webServer:=WEB Server(Web server host database)  
	//call the target web server
webServer:=WEB Server(Web server receiving request)  
```

## Fonctions du serveur web

A [web server class object](API/WebServerClass.md#web-server-object) contains the following functions:

| Fonctions                                | Paramètres                          | Valeur retournée                   | Description            |
| ---------------------------------------- | ----------------------------------- | ---------------------------------- | ---------------------- |
| [`start()`](API/WebServerClass.md#start) | settings (objet) | status (object) | Démarre le serveur web |
| [`stop()`](API/WebServerClass.md#start)  | -                                   | *                                  | Stoppe le serveur web  |

To start and stop a web server, just call the [`start()`](API/WebServerClass.md#start) and [`stop()`](API/WebServerClass.md#stop) functions of the web server object:

```4d
var $status : Object
  	//to start a web server with default settings
$status:=webServer.start()
	//to start the web server with custom settings  
	//$settings object contains web server properties
webServer.start($settings)

	//to stop the web server
$status:=webServer.stop()
```

## Propriétés du serveur web

A web server object contains [various properties](API/WebServerClass.md#web-server-object) which configure the web server.

Ces propriétés sont définies :

1. using the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function (except for read-only properties, see below),
2. if not used, using the `WEB SET OPTION` command (host applications only),
3. si elles ne sont pas utilisées, dans les paramètres de l'application hôte ou du composant.

- Si le serveur Web n'est pas démarré, les propriétés contiennent les valeurs qui seront utilisées au prochain démarrage du serveur Web.
- If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function.

> _isRunning_, _name_, _openSSLVersion_, and _perfectForwardSecrecy_ are read-only properties that cannot be predefined in the `settings` object parameter for the [`start()`](API/WebServerClass.md#start) function.

## Portée des commandes 4D Web

The 4D Language contains [several commands](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) that can be used to control the web server. Cependant, ces commandes sont destinées à fonctionner avec un seul serveur Web (par défaut). Lorsque vous utilisez ces commandes dans le contexte d'objets serveur Web, assurez-vous que leur portée est appropriée.

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
