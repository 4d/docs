---
id: clientServer
title: Client/Serveur
---

Les applications 4D Desktop peuvent être utilisées dans une configuration Client/Serveur, en tant qu'applications client/serveur fusionnées ou en tant que projets distants.

- Les **applications client/serveur fusionnées** sont générées par le [Générateur d'application](building.md#clientserver-page). Elles sont utilisées pour les déploiements d'applications.

- Les **projets distants** sont des fichiers [.4DProject](Project/architecture.md) ouverts par 4D Server et accessibles avec 4D en mode distant. Le serveur envoie une version .4dz du projet ([format compressé](building.md#build-compiled-structure)) au 4D distant, donc les fichiers de structure sont en lecture seule. Cette configuration est généralement utilisée pour les tests d'application.

![](../assets/en/getStart/localremote.png)

> La connexion à un projet distant à partir de **la même machine que 4D Server** permet de modifier les fichiers du projet. Cette [fonctionnalité spécifique](#using-4d-and-4d-server-on-the-same-machine) permet de développer une application client/serveur dans le même contexte que le contexte de déploiement.

## Ouvrir une application client/serveur fusionnée

Une application client/serveur fusionnée est personnalisée et son démarrage est simplifié :

- Pour lancer la partie serveur, l’utilisateur double-clique simplement sur l’application serveur. Il n’est pas nécessaire de sélectionner le fichier projet.
- Pour lancer la partie cliente, l’utilisateur double-clique simplement sur l’application cliente, qui se connecte directement à l’application serveur.

Ces principes sont détaillés dans la page du [Générateur d'application](building.md#what-is-a-clientserver-application).

## Ouvrir un projet distant

La première fois que vous vous connectez à un projet 4D Server via un 4D distant, vous utiliserez généralement la boîte de dialogue de connexion standard. A chaque fois que 4D effectue une action **Enregistrer tout** depuis l'environnement de développement (explicitement depuis le menu **Fichier** ou implicitement en passant en mode application par exemple), 4D Server recharge de manière synchrone les fichiers du projet.

Pour vous connecter à distance à un projet 4D Server :

1. Effectuez l'une des opérations suivantes :
   - Sélectionnez **Se connecter à 4D Server** dans la boîte de dialogue de l'Assistant de bienvenue
   - Sélectionnez **Ouvrir > Projet distant...** à partir du menu **Fichier** ou du bouton **Ouvrir** de la barre d'outils.

La boîte de dialogue de connexion à 4D Server apparaît. Cette boîte de dialogue comporte trois onglets : **Récent**, **Disponible** et **Personnalisé**.

Si 4D Server est connecté au même sous-réseau que le 4D distant, sélectionnez **Disponible**. 4D Server inclut un système de diffusion intégré qui, par défaut, publie le nom des projets 4D Server disponibles sur le réseau. La liste est triée par ordre d'apparition et est mise à jour dynamiquement.

![](../assets/en/getStart/serverConnect.png)

Pour vous connecter à un serveur de la liste, double-cliquez sur son nom ou sélectionnez-le et cliquez sur le bouton **OK**.

Si le projet publié n'est pas affiché dans la liste **Disponible**, sélectionnez **Personnalisé**. La page Personnalisé vous permet de vous connecter à un serveur publié sur le réseau en utilisant son adresse réseau et en lui attribuant un nom personnalisé.

![](../assets/en/Desktop/serverConnect2.png)

- **Nom du projet** : définit le nom local du projet 4D Server. Ce nom sera utilisé dans la page **Récent** pour faire référence au projet.
- **Adresse réseau** : L'adresse IP de la machine sur laquelle le 4D Server a été lancé.
  - Si deux serveurs sont exécutés simultanément sur la même machine, l'adresse IP doit être suivie de deux points et d'un numéro de port, par exemple : `192.168.92.104:19814`.
  - Par défaut, le port de publication d'un 4D Server est 19813. Ce numéro peut être modifié dans les paramètres du projet.

> L'option [**Activer le mode développement**](#development-mode) ouvre la connexion à distance dans un mode lecture/écriture spécial et nécessite de pouvoir accéder au dossier du projet depuis le 4D distant.

Une fois que cette page attribue un serveur, cliquez sur le bouton **OK** pour vous connecter au serveur.

Une fois la connexion au serveur établie, le projet distant sera répertorié dans l'onglet **Récent**.

### Mettre à jour des fichiers de projet sur le serveur

4D Server crée et envoie automatiquement aux machines distantes une version [.4dz](building.md#build-compiled-structure) du fichier de projet *.4DProject* (non compressé) en mode interprété.

- Une version .4dz mise à jour du projet est automatiquement produite lorsque cela est nécessaire, c'est-à-dire lorsque le projet a été modifié et rechargé par 4D Server. Le projet est rechargé :
  - automatiquement, lorsque la fenêtre de l'application 4D Server arrive à l'avant de l'OS ou lorsque l'application 4D sur la même machine enregistre une modification (voir ci-dessous).
  - lorsque la commande [`RELOAD PROJECT`](../commands/reload-project) est exécutée. L'appel de cette commande est nécessaire lorsque, par exemple, vous avez extrait une nouvelle version du projet depuis la plateforme de contrôle de version.

### Mettre à jour des fichiers de projet sur les machines distantes

Lorsqu'une version .4dz mise à jour du projet a été produite sur 4D Server, les machines 4D distantes connectées doivent se déconnecter et se reconnecter à 4D Server afin de bénéficier de la version mise à jour.

### Mode développement

Le **Mode développement** de 4D Server est un mode spécial d'ouverture de projet qui permet l'accès en lecture/écriture aux applications 4D distantes connectées. Le projet doit être disponible en [**interprété**](../Concepts/interpreted.md).

Ce mode permet à un ou plusieurs développeurs de travailler simultanément sur le même projet dans l'environnement de Développement. Lorsqu'un projet est ouvert en **mode développement** :

- les fichiers du projet sont disponibles en lecture/écriture afin que vous puissiez éditer les méthodes, les formulaires, etc.
- plusieurs développeurs 4D distants peuvent ouvrir simultanément les mêmes fichiers du projet interprété et les modifier. Un système de verrouillage automatique empêche les accès simultanés à la même ressource.
- les modifications sont mises à la disposition de tous les développeurs distants. A noter cependant qu'il n'y a pas de "push" automatique vers les développeurs distants., ils doivent actualiser pour obtenir les dernières versions des fichiers (un rafraîchissement est effectué chaque fois que le développeur passe du mode développement au mode application par exemple, ou lorsqu'il sélectionne **Enregistrer tout** dans le menu **Fichier**).

Pour utiliser ce mode, sélectionnez l'option **Activer le mode développement** dans la [boîte de dialogue de connexion](#opening-a-remote-project) à partir de votre 4D distant. Vous êtes invité à **Sélectionner le fichier de projet 4D** : vous devez sélectionner le [fichier .project](../Project/architecture.md#applicationname4dproject-file) que 4D Server a ouvert. Si vous sélectionnez un autre fichier, une boîte de dialogue d'alerte vous avertit que le mode développement n'est pas disponible. Cela signifie que le 4D distant doit avoir accès au dossier du projet sur le réseau (l'ensemble du dossier du projet doit être partagé, c'est-à-dire le dossier racine du projet).

:::caution

Pour des raisons de performance avec cette configuration, il est fortement recommandé de stocker le dossier du projet sur un serveur de fichiers dédié (par exemple un NAS) sur un réseau local.

:::

:::note

Lorsque le serveur et le 4D distant se trouvent sur la même machine, [des règles supplémentaires s'appliquent](#using-4d-and-4d-server-on-the-same-machine).

:::

Voici un aperçu de l'architecture du mode de développement :

![](../assets/en/Desktop/develop-mode.png)

:::note Compatibilité

Cette fonctionnalité est destinée aux équipes de développement qui ont l'habitude de travailler sur des bases de données binaires et qui souhaitent bénéficier des fonctionnalités des projets tout en conservant leur organisation actuelle. Cependant, pour un développement multi-utilisateurs sur des projets 4D, nous recommandons d'utiliser une architecture standard où les développeurs travaillent sur leur machine et gèrent leur travail à l'aide d'outils de gestion de version (Git, SVN, etc.). Cette organisation offre une grande flexibilité en permettant aux développeurs de travailler sur différentes branches, et de comparer, fusionner, ou annuler les modifications qui ont été apportées.

:::

:::tip Article(s) de blog sur le sujet

[Développement simultané sur 4D Server en mode projet](https://blog.4d.com/developing-concurrently-on-4d-server-in-project-mode/)

:::

## Utiliser 4D et 4D Server sur la même machine

Lorsque 4D se connecte à un 4D Server sur la même machine, l'application se comporte comme 4D en mode monoposte et l'environnement de développement permet d'éditer les fichiers du projet. Cette fonctionnalité vous permet de développer une application client/serveur dans le même contexte que le contexte de déploiement.

> Lorsque 4D se connecte à un 4D Server sur la même machine, le **mode de développement** est automatiquement activé, quel que soit l'état de l'option [Activer le mode développement](#development-mode).

A chaque fois que 4D effectue une action **Enregistrer tout** depuis l'environnement de développement (explicitement depuis le menu **Fichier** ou implicitement en passant en mode application par exemple), 4D Server recharge de manière synchrone les fichiers du projet. 4D attend que 4D Server termine le rechargement des fichiers du projet avant de continuer.

Veillez cependant aux différences de comportement suivantes, comparées à [l'architecture projet standard](Project/architecture.md) :

- le dossier userPreferences.\{username\} utilisé par 4D n'est pas le même que celui utilisé par 4D Server dans le dossier projet. le dossier userPreferences.\{username\} utilisé par 4D n'est pas le même que celui utilisé par 4D Server dans le dossier projet.
- le dossier utilisé par 4D pour les données dérivées n'est pas le dossier "DerivedData" du dossier projet. Il s'agit plutôt d'un dossier dédié nommé "DerivedDataRemote" situé dans le dossier système du projet.
- le fichier catalog.4DCatalog n'est pas édité par 4D mais par 4D Server. Les informations du catalogue sont synchronisées à l'aide des requêtes client/serveur
- le fichier directory.json n'est pas édité par 4D mais par 4D Server. Les informations du répertoire sont synchronisées à l'aide des requêtes client/serveur
- 4D utilise ses propres composants internes et plug-ins au lieu de ceux de 4D Server.

> Il n'est pas recommandé d'installer des plug-ins ou des composants au niveau de l'application 4D ou 4D Server.

## Client/Server Development

### Emplacement d'exécution du code

Dans une application client/serveur, il est important de savoir où votre code sera réellement exécuté : **côté serveur** ou **côté client**. Le lieu d'exécution est crucial lorsque vous souhaitez implémenter du code lié à la session utilisateur, partager des informations entre process, accéder à des données, etc.

Le tableau suivant résume l'emplacement par défaut où le code est exécuté et explique comment modifier cet emplacement (si cela est autorisé). Notez que « **local** » signifie que le code sera exécuté sur la machine à partir de laquelle il est effectivement appelé.

| Code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Exécution par défaut | Comment modifier l'emplacement                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Fonctions du modèle de données ORDA](../ORDA/ordaClasses.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | server               | Utiliser le mot-clé `local` dans la définition de la fonction                                                                                                                                                                                                                                            |
| Fonctions d'attributs calculés ORDA [`get()`](../ORDA/ordaClasses.md#function-get-attributename), [`set()`](../ORDA/ordaClasses.md#function-set-attributename)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | server               | Utiliser le mot-clé `local` dans la définition de la fonction                                                                                                                                                                                                                                            |
| Fonctions d'attributs calculés ORDA [`query()`](../ORDA/ordaClasses.md#function-query-attributename), [`orderBy()`](../ORDA/ordaClasses.md#function-orderby-attributename)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | server               | n/a                                                                                                                                                                                                                                                                                                      |
| Fonctions d'événement ORDA [(général)](../ORDA/orda-events.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | server               | n/a                                                                                                                                                                                                                                                                                                      |
| Fonction d'événement ORDA [`constructor()`](../ORDA/ordaClasses.md#class-constructor-1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | local                | n/a                                                                                                                                                                                                                                                                                                      |
| Fonction d'événement ORDA [`event touched()`](../ORDA/orda-events.md#function-event-touched)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | server               | Utiliser le mot-clé `local` dans la définition de la fonction                                                                                                                                                                                                                                            |
| [Fonctions des classes utilisateur](../Concepts/classes.md#function)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | local                | n/a                                                                                                                                                                                                                                                                                                      |
| [Fonction de singleton de session ou partagé](../Concepts/classes.md#singleton-classes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | local                | Utiliser le mot-clé `server` dans la définition de la fonction                                                                                                                                                                                                                                           |
| [Trigger](#triggers)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | server               | n/a                                                                                                                                                                                                                                                                                                      |
| Méthode projet appelée depuis un client                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | client               | Cocher l'option [**Exécuter sur serveur**](../Project/project-method-properties.md#execute-on-server). Le code est exécuté dans le process jumeau du [process de session utilisateur](./sessions.md#remote-user-sessions)                                                                |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                      | Appeler la commande [`Execute on server`](../commands/execute-on-server). Le code est exécuté dans la [session des procédures stockées] (./sessions.md#stored-procedure-sessions) |
| Project method called from a [stored procedure](#stored-procedures) on the server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | server               | Appeler la commande [`EXECUTE ON CLIENT`](../commands/execute-on-client). Le client concerné doit avoir été [inscrit](../commands/register-client)                                                                                                                                       |
| Méthode objet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | local                | n/a                                                                                                                                                                                                                                                                                                      |
| Database methods:<ul><li>[On Backup Shutdown](../commands-legacy/on-backup-shutdown-database-method.md)</li><li>[On Backup Startup](../commands-legacy/on-backup-startup-database-method.md)</li><li>[On Server Close Connection](../commands-legacy/on-server-close-connection-database-method.md)</li><li>[On Server Open Connection](../commands-legacy/on-server-open-connection-database-method.md)</li><li>[On Server Shutdown](../commands-legacy/on-server-shutdown-database-method.md)</li><li>[On Server Startup](../commands-legacy/on-server-startup-database-method.md)</li><li>[On SQL Authentication](../commands-legacy/on-sql-authentication-database-method.md)</li><li>[On Web Authentication](../commands-legacy/on-web-authentication-database-method.md)</li><li>[On Web Connection](../commands-legacy/on-web-connection-database-method.md)</li></ul> | server               | n/a                                                                                                                                                                                                                                                                                                      |
| Database methods:<ul><li>[On Startup](../commands-legacy/on-startup-database-method.md)</li><li>[On Exit](../commands-legacy/on-exit-database-method.md)</li><li>[On Drop](../commands-legacy/on-drop-database-method.md)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | client               | n/a                                                                                                                                                                                                                                                                                                      |

### Triggers

[Triggers](../Develop/triggers) are executed on the machine where the database engine is actually located. With 4D Server, triggers are executed within the context of processes running on the server machine, and not on the client machine. More specifically, they are executed in the context of the "twinned" processes of the user processes that call the database operation. These twinned processes share the database context with the user process on the client machine (in particular, the state of transactions and the locking of records) but do not share the language context (variables, processes, sets, current selections). Note however that the current record of the table of the trigger is the same in all contexts.

:::note

On the server, a trigger is executed in the process responsible for the associated action (create/update/delete). If the action was triggered from a [preemptive process on the server](../Develop/preemptive.md) (e.g. a stored procedure, a http request in scalable session mode), then the trigger will be executed in the same preemptive process. But, if the action was triggered from a 4D remote, then the trigger will be executed in the twinned process, which is always in cooperative mode (a twinned process is shared for all calls of a user).

:::

### Stored procedures

A 4D stored procedure is project method executing a process method in a process running on the server machine (or on any registered client machine), instead of on the client machine which has launched the method.

With 4D in local mode, when you use a command, such as [`New process`](../commands/new-process), you can start a user process in which you can run a method. This method is called a [process method](../Project/project-method-properties.md#process-methods). You can do the same with 4D Server, on a client machine. In addition, using the [`Execute on server`](../commands/execute-on-server) command on the server machine, you can start a user process in which you can run a method. Moreover, when using the [`EXECUTE ON CLIENT`](../commands/execute-on-client) command, you can run a method in another process on a different client. In both cases, the method is called a **stored procedure**, and (by analogy) the process started on the server machine or another client is also called a stored procedure.

:::note

All stored procedures running on the server [share the same virtual user session](./sessions.md#stored-procedure-sessions).

:::

#### Architecture

Like a regular process, a stored procedure has its own environment:

- Current selection per table: Each stored procedure has a separate current selection. One table can have a different current selection in different stored procedures.
- Current record per table: Each table can have a different current record in each stored procedure.
- Variables: Every stored procedure has its own process variables. Process variables are recognized only within the domain of their native stored procedure.
- Default table: Each stored procedure has its own default table.
- Process sets: Each stored procedure has its own process sets.
- On Error Call: Each stored procedure has its own error-handling method.
- Debugger window: Each stored procedure can have its own Debugger window.

In terms of user interface, a stored procedure can open windows and display data (i.e., [`DISPLAY RECORD`](../commands/display-records)). A stored procedure executed on a 4D client machine allow data entry. On the other hand, a stored procedure executed on the server cannot invoke data entry interface; there is no data entry kernel on the server machine.

You can start as many as stored procedures as the system authorizes (hardware and memory). In fact, the 4D Server machine should be viewed as a machine that not only replies to 4D clients and web browsers, but also one that executes processes that interact with other processes running on the server machine and on remote 4D machines.

:::note

The [**Execute on Server** method property](../Project/project-method-properties.md#execute-on-server) can also be used to execute a method in a process on the server, but the method uses the "twinned" process of the client process in this case, which means more particularly that it can take advantage of the environment of this client process. In this case, it is not a 4D stored procedure.

:::

#### What a Stored Procedure Does?

Aside from data entry for stored procedures executed on the server, almost every capabilities of processes and 4D language applies to stored procedures.

A stored procedure can add, query, order by, update or delete data. A stored procedure can access documents on disk, work with BLOBs, print records and so on. Just think that instead of doing something on a local 4D machine, you are doing it on the server machine or on one or several 4D client machines.

One obvious advantage of stored procedures executed on the server is that indeed a stored procedure executes locally on the server machine, the machine where the database engine is located. For example, an [`APPLY TO SELECTION`](../commands/apply-to-selection) is not efficient over the network, but it is from within a stored procedure.

Stored procedures executed on one or several client machines allows to optimize the task repartition and the communication between several client machines. Refer to the command [`REGISTER CLIENT`](../commands/register-client) for an example of a stored procedures executed on several clients.

However, the most important advantage of the stored procedure architecture is the additional dimension it gives to 4D Server. Using stored procedures, you can implement your own custom 4D Server services. The only limit is your imagination.

#### What a stored procedure does not do?

Generally speaking, stored procedures executed on the server should not deal with interface items (such as menus, windows, forms...). Indeed the interface is not managed on the server's side.

All commands that are likely to generate modal dialog boxes on the server machine (e.g. [`Open document`](../commands/open-document) with an empty string as first parameter) should be avoided. Keep in mind that there isn't always a user in front of a server screen, and the display of a modal dialog box requiring a user action can lead to the application being blocked for some time.

#### Forbidden commands on the server

Here is the list of the commands that should NOT be used within stored procedures executed on the server. If one of the following commands is used within a stored procedure, an alert will be displayed indicating that this command cannot be executed on 4D Server. The error #67 is returned; it can be intercepted through a method installed in the [`ON ERR CALL`](../commands/on-err-call) command.

[`ADD RECORD`](../commands/add-record)
[`APPEND MENU ITEM`](../commands/append-menu-item)
[`POST OUTSIDE CALL`](../commands/post-outside-call)
[`CHANGE LICENSES`](../commands/change-licenses)
[`Count menu items`](../commands/count-menu-items)
[`Count menus`](../commands/count-menus)
[`DELETE MENU ITEM`](../commands/delete-menu-item)
[`DISABLE MENU ITEM`](../commands/disable-menu-item)
[`DISPLAY SELECTION`](../commands/display-selection)
[`EDIT ACCESS`](../commands/edit-access)
[`ENABLE MENU ITEM`](../commands/enable-menu-item)
[`FILTER EVENT`](../commands/filter-event)
[`Get menu item`](../commands/get-menu-item)
[`Get menu item key`](../commands/get-menu-item-key)
[`Get menu item mark`](../commands/get-menu-item-mark)
[`Get menu item style`](../commands/get-menu-item-style)
[`Get menu title`](../commands/get-menu-title)
[`SET PICTURE TO LIBRARY`](../commands/set-picture-to-library)
[`INSERT MENU ITEM`](../commands/insert-menu-item)
[`Menu selected`](../commands/menu-selected)
[`MODIFY RECORD`](../commands/modify-record)
[`MODIFY SELECTION`](../commands/modify-selection)
[`ON EVENT CALL`](../commands/on-event-call)
[`QUERY BY EXAMPLE`](../commands/query-by-example)
[`QR REPORT`](../commands/qr-report)
[`REMOVE PICTURE FROM LIBRARY`](../commands/remove-picture-from-library)
[`SET MENU ITEM`](../commands/set-menu-item)
[`SET MENU ITEM SHORTCUT`](../commands/set-menu-item-shortcut)
[`SET MENU ITEM MARK`](../commands/set-menu-item-mark)
[`SET MENU ITEM STYLE`](../commands/set-menu-item-style)
[`SET PICTURE TO LIBRARY`](../commands/set-picture-to-library)
[`SET USER ALIAS`](../commands/set-user-alias)
[`SHOW MENU BAR`](../commands/show-menu-bar)

Commands with no effect on the server
The following commands have no effect when they are executed within a stored procedure on the server. No specific error code is returned.

[`GRAPH`](../commands/graph)
[`MESSAGES OFF`](../commands/messages-off)
[`MESSAGES ON`](../commands/messages-on)
[`SET MENU BAR`](../commands/set-menu-bar)
[`SHOW TOOL BAR`](../commands/show-tool-bar)

#### How to Start a Stored Procedure

From 4D, you can manually start a stored procedure in the **Execute Method** dialog box:

![](../assets/en/Desktop/execute-method.png)

You can execute it on 4D Server or on another 4D client machine. Note that to display the 4D client machines in this list, they should have been first [registered](#stored-procedures-on-client-machines).

- Also on 4D, you can programmatically start a stored procedure using the commands [`Execute on server`](../commands/execute-on-server) or [`EXECUTE ON CLIENT`](../commands/execute-on-client).
- A method executed on 4D Server (database method, method with the **Execute on Server** attribute or stored procedure) can start a stored procedure using [`Execute on server`](../commands/execute-on-server), [`New process`](../commands/new-process), or [`EXECUTE ON CLIENT`](../commands/execute-on-client).

:::note

It is not possible to use the process management commands [`DELAY PROCESS`](../commands/delay-process), [`PAUSE PROCESS`](../commands/pause-process) and [`RESUME PROCESS`](../commands/resume-process) from a remote 4D with stored procedures on the server.

:::

#### Communication Between Stored Procedures and User Processes

Stored procedures can communicate between themselves using:

- the [`session.storage`](../API/SessionClass.md#storage) shared object of the [Stored Procedures Session](../Desktop/sessions.md#stored-procedure-sessions)
- local or global [semaphores](../Develop/processes.md#semaphores)
- records
- commands [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) and [`VARIABLE TO VARIABLE`](../commands/variable-to-variable)
- (*deprecated*) interprocess variables, interprocess sets and interprocess named selections

Keep in mind that the 4D commands act within the scope of the server machine which is executing the stored procedure (server or clients) in the same way as they act in the scope of a client machine.

:::note

The [`POST OUTSIDE CALL`](../commands/post-outside-call) and [`Outside call`](../commands/outside-call) mechanism has no meaning on the server machine, because stored procedures do not have a user interface with data entry.

:::

Client user processes (processes running on a client machine) can read and write the process variables (\*) of a stored procedure, using the commands [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) and [`VARIABLE TO VARIABLE`](../commands/variable-to-variable).

(\*) as well as the server machine interprocess variable.

Important: "Intermachine" process communication, provided by the commands [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) and [`VARIABLE TO VARIABLE`](../commands/variable-to-variable), is possible from client to server only. It is always a client process that reads or write the variables of a stored procedure.

#### Stored procedures on client machines

Stored procedures can be executed on one or several 4D client machines. Stored procedures on client machines are executed the same as way as stored procedures on the server, except that on the client they can invoke data entry with legacy commands such as [`ADD RECORD`](../commands/add-record).

Any client machine executing stored procedures triggered by a server or another client machine, should explicitly be registered for this session. There are two ways to register a client: it can automatically be registered when connecting or through programming.

- Registering automatically each 4D client machine connecting to 4D Server: check the [**Register Clients at Startup For Execute On Client**](../settings/client-server.md#register-clients-at-startup-for-execute-on-client) box in the Settings dialog box. When this option is checked, each 4D client machine connecting to the application is automatically referenced with 4D Server as being able to execute stored procedures. A 4D Client type process named according to the client machine is created on the server. An equivalent process is also created on each client machine.
- Registering 4D Client through programming: you can register one or several client machines using programming, allowing you to select the client machines that needs to be registered and to define their registration name. Use the [`REGISTER CLIENT`](../commands/register-client) command which allows you to register a client machine under any name.
- Unregistering 4D Client: No matter how the client machines have been registered, you can unregister them for the current session using the [`UNREGISTER CLIENT`](../commands/unregister-cient) command for a given client. The registration process (named according to the client) disappears from the user process group on the server machine as well as on the client.

You can get the list and the task distribution (number of methods still to be executed) for the clients registered for a given session using the [`GET REGISTERED CLIENTS`](../commands/get-registered-clients) command.

### Variables

Like all processes, each stored procedure, database method and trigger has its own table of process variables. These process variables can be created and used dynamically during each phase of execution.

4D Server maintains one table of [interprocess variables](../Concepts/variables.md#interprocess-variables) (*deprecated*). The scope of these variables is the server machine. When running a compiled database, the interprocess variable table definition is common between the server and all the clients machines, each machine having its own instance.

### Sets and Named Selections

- Process sets/named selections: A process object can only be accessed by the process in which it has been created and, if it has been created in a client process, by the "twinned" process created on the server. Les ensembles process sont effacés dès que la méthode process est terminée. Process objects do not need any special prefix in the name.
- Interprocess sets/named selections (*deprecated*): An interprocess object is visible for all the processes on the machine (client or server) where it was created. A set or named selection is an interprocess object if the name of the set is preceded by the symbols (\<>) — a “less than” sign followed by a “greater than” sign.
- Local/Client sets/named selections: A local/client object is only visible in the process where it was created. The name of a local/client object is preceded by the dollar sign ($).
  Note: Although its name does not begin with a `$`, the `UserSet` system set is a local/client set.

The following table indicates the principles concerning the visibility of named selections and sets according to where they are created (the table is identical for both types of objects):

|                                 | Client Process | Other client processes | Server process                 | Other server processes |
| ------------------------------- | -------------- | ---------------------- | ------------------------------ | ---------------------- |
| **Created in a client process** |                |                        |                                |                        |
| `$test`                         | x              |                        |                                |                        |
| `test`                          | x              |                        | x (Trigger) |                        |
| `<>test`                        | x              | x                      |                                |                        |
| **Created in a server process** |                |                        |                                |                        |
| `$test`                         |                |                        | x                              |                        |
| `test`                          |                |                        | x                              |                        |
| `<>test`                        |                |                        | x                              | x                      |

x = visible

You need to keep this visibility matrix in mind depending on the operations you want to perform. For example, if you want to do a [`DIFFERENCE`](../commands/difference), [`INTERSECTION`](../commands/intersection) or [`UNION`](../commands/union) type operation, make sure that all the sets are visible on the machine that is carrying out the operation.

### Execute on Server attribute

The **Execute on Server** project method attribute can be set using the batch setting of attributes dialog box as well as the [Method Properties dialog box](../Project/project-method-properties.md#execute-on-server). Lorsque cette option est cochée, la méthode du projet est toujours exécutée sur le serveur, quelle que soit la manière dont elle est appelée.

#### Execution Context

When this attribute is checked, the execution context of the project method is comparable to that of [triggers](#triggers): the method on the server shares the same database context as the corresponding context on the client side for locking records and for transactions, but not the same language context (process variables, sets, current selections). However, unlike a trigger, a method executed on the server does not share the current record with the client context.
All the [parameters of the method](../Concepts/parameters.md) are sent to the server and the return value, if any, is returned to the client.

Unlike the [`Execute on server`](../commands/execute-on-server) command, this option does not create a process on the server. 4D Server uses the "twin" process of the client process that requested the execution. Moreover, this option simplifies the principle of delegating the execution of a method on the server since the transfer of parameters is automatically carried out in both directions, as with a "normal" method call. The [`Execute on server`](../commands/execute-on-server) command functions asynchronously, therefore it requires more programming and makes use of [semaphores](../Develop/processes.md#semaphores) for reading the results.

#### Usable Commands

Methods with "Execute on Server" attribute are subject to the same rules as the [stored procedures](#stored-procedures) as far as the use of 4D language commands is concerned.

#### Pointeurs

If you pass a pointer to a variable (simple variable, array or array element), the pointed value is also sent to the server. If the pointed value is modified on the server by the method, the modified value is returned to the client in order to update the corresponding variable on the client side.
Pointers to a table or field are sent as references (table number, field number). The current record value is not automatically exchanged.

:::note

This option works the same way in [interpreted mode as in compiled mode](../Concepts/interpreted.md).

:::

#### Exemple

Here is the code for the *MyAppli* project method which has the "Execute on Server" attribute:

```4d
 #DECLARE($table: Pointer; $field: Pointer; $array: Pointer; $search: Text) -> $result : Integer
 
  `Search and send back values for each record
 QUERY($table->;$field->=$search)
 While(Not(End selection($table->)))
    APPEND TO ARRAY($array->;myFormula($table))
    NEXT RECORD($table->)
 End while
 UNLOAD RECORD($table->)
 $result:=Records in selection($table->)
```

On the client side, the method is called as follows:

```4d
 ARRAY TEXT(myArray;0)
 var $vlnum:=MyAppli(->[Table_1] ;->[Table_1]Field_1 ;->myArray;"to find")
```

## Dossier Resources

The [**Resources** folder](../Project/architecture.md#resources) of a project can be used to share custom data (pictures, files, subfolders, etc.) between the server machine and all the client machines. On the server machine, the **Resources** folder is simply be located at the first level of the [project root folder](../Project/architecture.md).

All referencing mechanisms associated with the **Resources** folder are supported in client/server mode (.lproj folder, XLIFF, pictures and so on).

Each client has a local copy of this folder. The contents of the local folder are automatically synchronized with that of the server each time the client connects.

Moreover, client machines can be dynamically "notified" during a session when the contents of the **Resources** folder of the server application are modified by a developer. This notification can be triggered:

- either automatically by the server, two minutes after the last modification made by a client (this delay helps to avoid inopportune notification in the case where numerous files are being copied).
- or manually via the **Notify clients** command in the action menu of the [**Resources explorer**][Using the Resources explorer](https://doc.4d.com/4Dv20/4D/20.2/Using-the-Resources-explorer.300-6750254.en.html) on the Toolbox of the client machine at the origin of the modification.
- or by programming, via a [`NOTIFY RESOURCES FOLDER MODIFICATION`](../commands/notify-resources-folder-notification) command. This command is useful when the contents of the **Resources** folder are modified on the server machine via a stored procedure.

On the client side, the way the notification of any modifications will be handled depending on the [**Update "Resources" folder during a session**](../settings/client-server.md#update-resources-folder-during-a-session) setting value. This can also be set individually via the [`Auto synchro resources folder` selector of the `SET DATABASE PARAMETER`](../commands/set-database-parameter#auto-synchro-resources-folder-48) command. Three choices are available: **no synchronization**, **auto synchronization** or **ask**. For more information, please refer to the [**Network and Client-Server options** section](../settings/client-server.md#update-resources-folder-during-a-session).

Lastly, each client machine can synchronize itself with the server at any time via the **Update Local Resources** command in the action menu of the [Resources explorer](https://doc.4d.com/4Dv20/4D/20.2/Resources-explorer.200-6750091.en.html).