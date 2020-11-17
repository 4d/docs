---
id: webServerObject
title: Objet Serveur Web
---

## Aperçu

Un projet 4D peut démarrer et surveiller un serveur Web pour l'application principale (hôte) ainsi que chaque composant hébergé.

Par exemple, si vous avez installé deux composants dans votre application principale, vous pouvez démarrer et contrôler jusqu'à trois serveurs Web indépendants à partir de votre application :

- un serveur web pour l'application hôte,
- un serveur web pour le composant n°1,
- un serveur web pour le composant n°2.

En dehors de la mémoire, il n'y a pas de limite au nombre de composants et donc, de serveurs Web, pouvant être rattachés à un seul projet d'application 4D.

Each 4D web server, including the main application's web server, is exposed as a specific **object** of the `4D.WebServer` class. Once instantiated, a web server object can be handled from the current application or from any component using a [large number of properties and functions](API/webServerClass.md).

> Les [commandes WEB](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) héritées du langage 4D sont prises en charge mais ne peuvent pas sélectionner le serveur Web auquel elles s'appliquent (voir ci-dessous).

Chaque serveur web (application hôte ou composant) peut être utilisé dans son propre contexte, notamment :
- les appels vers la méthode base `On Web Authentication` et `On Web Connection`
- le traitement des balises 4D et les appels de méthodes,
- web sessions and TLS protocol management.

This allows you to develop independant components and features that come with their own web interfaces.


## Instancier un objet serveur web

L'objet serveur Web de l'application hôte (serveur Web par défaut) est automatiquement chargé par 4D au démarrage. Ainsi, si vous écrivez dans un projet nouvellement créé :

```4d
$nbSrv:=WEB Server list.length   
//la valeur de $nbSrv est 1
```

To instantiate a web server object, call the [`WEB Server`](API/webServerClass.md#web-server) command:

```4d
    //create an object variable of the 4D.WebServer class
var webServer : 4D.WebServer 
    //call the web server from the current context
webServer:=WEB Server  
    //equivalent to
webServer:=WEB Server(Web server database)
```

If the application uses components and you want to call:
- the host application's web server from a component or
- le serveur qui a reçu la requête (quel que soit le serveur)

vous pouvez également utiliser :

```4d
var webServer : 4D.WebServer 
    //call the host web server from a component  
webServer:=WEB Server(Web server host database)  
    //call the target web server
webServer:=WEB Server(Web server receiving request)  
```


## Web server functions

A [web server class object](API/webServerClass.md#web-server-object) contains the following functions:

| Fonctions                                | Paramètres       | Valeur retournée | Description            |
| ---------------------------------------- | ---------------- | ---------------- | ---------------------- |
| [`start()`](API/webServerClass.md#start) | settings (objet) | status (object)  | Démarre le serveur web |
| [`stop()`](API/webServerClass.md#start)  | -                | -                | Stoppe le serveur web  |

To start and stop a web server, just call the [`start()`](API/webServerClass.md#start) and [`stop()`](API/webServerClass.md#stop) functions of the web server object:

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

A web server object contains [various properties](API/webServerClass.md#web-server-object) which configure the web server.

Ces propriétés sont définies :

1. using the `settings` parameter of the [`.start()`](API/webServerClass.md#start) function (except for read-only properties, see below),
2. si elles ne sont pas utilisées, à l'aide de la commande `WEB SET OPTION` (applications hôtes uniquement),
3. si elles ne sont pas utilisées, dans les paramètres de l'application hôte ou du composant.

- Si le serveur Web n'est pas démarré, les propriétés contiennent les valeurs qui seront utilisées au prochain démarrage du serveur Web.
- If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the `settings` parameter of the [`.start()`](API/webServerClass.md#start) function.

> *isRunning*, *name*, *openSSLVersion*, and *perfectForwardSecrecy* are read-only properties that cannot be predefined in the `settings` object parameter for the [`start()`](API/webServerClass.md#start) function.


## Portée des commandes 4D Web

Le langage 4D contient [plusieurs commandes](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) permettant de contrôler le serveur Web. Cependant, ces commandes sont destinées à fonctionner avec un seul serveur Web (par défaut). Lorsque vous utilisez ces commandes dans le contexte d'objets serveur Web, assurez-vous que leur portée est appropriée.

| Commande                        | Portée                            |
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
