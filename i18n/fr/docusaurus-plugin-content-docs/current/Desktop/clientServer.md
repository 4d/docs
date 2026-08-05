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

## Développement Client/Serveur

### Emplacement d'exécution du code

Dans une application client/serveur, il est important de savoir où votre code sera réellement exécuté : **côté serveur** ou **côté client**. Le lieu d'exécution est crucial lorsque vous souhaitez implémenter du code lié à la session utilisateur, partager des informations entre process, accéder à des données, etc.

Le tableau suivant résume l'emplacement par défaut où le code est exécuté et explique comment modifier cet emplacement (si cela est autorisé). Notez que « **local** » signifie que le code sera exécuté sur la machine à partir de laquelle il est effectivement appelé.

| Code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Exécution par défaut | Comment modifier l'emplacement                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Fonctions du modèle de données ORDA](../ORDA/ordaClasses.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | server               | Utiliser le mot-clé `local` dans la définition de la fonction                                                                                                                                                                                                                                            |
| Fonctions d'attributs calculés ORDA [`get()`](../ORDA/ordaClasses.md#function-get-attributename), [`set()`](../ORDA/ordaClasses.md#function-set-attributename)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | server               | Utiliser le mot-clé `local` dans la définition de la fonction                                                                                                                                                                                                                                            |
| Fonctions d'attributs calculés ORDA [`query()`](../ORDA/ordaClasses.md#function-query-attributename), [`orderBy()`](../ORDA/ordaClasses.md#function-orderby-attributename)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | server               | n/a                                                                                                                                                                                                                                                                                                      |
| Fonctions d'événement ORDA [(général)](../ORDA/orda-events.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | server               | n/a                                                                                                                                                                                                                                                                                                      |
| Fonction d'événement ORDA [`constructor()`](../ORDA/ordaClasses.md#class-constructor-1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | local                | n/a                                                                                                                                                                                                                                                                                                      |
| Fonction d'événement ORDA [`event touched()`](../ORDA/orda-events.md#function-event-touched)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | server               | Utiliser le mot-clé `local` dans la définition de la fonction                                                                                                                                                                                                                                            |
| [Fonctions des classes utilisateur](../Concepts/classes.md#function)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | local                | n/a                                                                                                                                                                                                                                                                                                      |
| [Fonction de singleton de session ou partagé](../Concepts/classes.md#singleton-classes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | local                | Utiliser le mot-clé `server` dans la définition de la fonction                                                                                                                                                                                                                                           |
| [Trigger](#triggers)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | server               | n/a                                                                                                                                                                                                                                                                                                      |
| Méthode projet appelée depuis un client                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | client               | Cocher l'option [**Exécuter sur serveur**](../Project/project-method-properties.md#execute-on-server). Le code est exécuté dans le process jumeau du [process de session utilisateur](./sessions.md#remote-user-sessions)                                                                |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                      | Appeler la commande [`Execute on server`](../commands/execute-on-server). Le code est exécuté dans la [session des procédures stockées] (./sessions.md#stored-procedure-sessions) |
| Méthode projet appelée depuis une [procédure stockée](#stored-procedures) sur le serveur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | server               | Appeler la commande [`EXECUTE ON CLIENT`](../commands/execute-on-client). Le client concerné doit avoir été [inscrit](../commands/register-client)                                                                                                                                       |
| Méthode objet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | local                | n/a                                                                                                                                                                                                                                                                                                      |
| Méthodes base :<ul><li>[On Backup Shutdown](../commands-legacy/on-backup-shutdown-database-method.md)</li><li>[On Backup Startup](../commands-legacy/on-backup-startup-database-method.md)</li><li>[On Server Close Connection](../commands-legacy/on-server-close-connection-database-method.md)</li><li>[On Server Open Connection](../commands-legacy/on-server-open-connection-database-method.md)</li><li>[On Server Shutdown](../commands-legacy/on-server-shutdown-database-method.md)</li><li>[On Server Startup](../commands-legacy/on-server-startup-database-method.md)</li><li>[On SQL Authentication](../commands-legacy/on-sql-authentication-database-method.md)</li><li>[On Web Authentication](../commands-legacy/on-web-authentication-database-method.md)</li><li>[On Web Connection](../commands-legacy/on-web-connection-database-method.md)</li></ul> | server               | n/a                                                                                                                                                                                                                                                                                                      |
| Méthodes base :<ul><li>[On Startup](../commands-legacy/on-startup-database-method.md)</li><li>[On Exit](../commands-legacy/on-exit-database-method.md)</li><li>[On Drop](../commands-legacy/on-drop-database-method.md)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | client               | n/a                                                                                                                                                                                                                                                                                                      |

### Triggers

Les [triggers](../Develop/triggers) sont exécutés sur la machine où se trouve le moteur de base de données. Avec 4D Server, les triggers sont exécutés dans le contexte des process exécutés sur la machine serveur, et non sur la machine cliente. Plus précisément, ils sont exécutés dans le contexte des process "jumeaux" des process utilisateurs qui appellent l'opération de base de données. Ces process jumeaux partagent avec le process utilisateur sur la machine cliente le contexte de base de données (notamment le statut des transactions et le verrouillage des enregistrements) mais PAS le contexte du langage (variables, process, ensembles, sélections courantes). A noter toutefois que l'enregistrement courant de la table du trigger est identique dans tous les contextes.

:::note

Sur le serveur, un trigger est exécuté dans le process responsable de l'action associée (création/mise à jour/suppression). Si l'action a été déclenchée à partir d'un [process préemptif sur le serveur](../Develop/preemptive.md) (par exemple, une procédure stockée, une requête http en mode session évolutive), le trigger sera exécuté dans le même process préemptif. Mais si l'action a été déclenchée à partir d'un 4D distant, le trigger sera exécuté dans le process jumeau, qui est toujours en mode coopératif (un process jumeau est partagé pour tous les appels d'un utilisateur).

:::

### Procédures stockées

Une procédure stockée en 4D est une méthode de projet exécutant une méthode process dans un process tournant sur la machine du serveur (ou sur n'importe quel client enregistré), au lieu de la machine cliente qui a lancé la méthode.

Avec 4D en mode local, quand vous utilisez une commande, comme [`New process`](../commands/new-process), vous pouvez lancer un process utilisateur dans lequel vous pouvez exécuter une méthode. Cette méthode est appelée [méthode process](../Project/project-method-properties.md#process-methods). Vous pouvez faire la même chose avec 4D Server, sur une machine cliente. En utilisant la commande [`Execute on server`](../commands/execute-on-server) sur la machine du serveur, vous pouvez lancer un process utilisateur dans lequel vous pouvez exécuter une méthode. De plus, lorsque vous utilisez la commande [`EXECUTE ON CLIENT`](../commands/execute-on-client), vous pouvez exécuter une méthode dans un autre process sur un client différent. Dans les deux cas, la méthode est appelée **procédure stockée**, et (par analogie) le process démarré sur la machine serveur ou un autre client est également appelé une procédure stockée.

:::note

Toutes les procédures stockées en cours d'exécution sur le serveur [partagent la même session utilisateur virtuelle](./sessions.md#stored-procedure-sessions).

:::

#### Architecture

Comme un process 4D normal, une procédure stockée dispose de son propre environnement :

- Une sélection courante par table : chaque procédure stockée a sa propre sélection courante. Une table peut avoir une sélection courante différente dans chaque procédure stockée.
- Un enregistrement courant par table : chaque table peut avoir un enregistrement courant différent dans chaque procédure stockée.
- Variables : chaque procédure stockée a ses propres variables process. Les variables process ne sont reconnues que dans le contexte de la procédure stockée à laquelle elles appartiennent.
- Table par défaut : chaque procédure stockée a sa propre table par défaut.
- Ensembles process : chaque procédure stockée a ses propres ensembles process.
- Appeler sur erreur : chaque procédure stockée dispose d'une méthode de gestion d'erreur.
- Fenêtre de debogage : chaque procédure stockée dispose de sa propre fenêtre de débogage.

En termes d'interface utilisateur, une procédure stockée peut ouvrir des fenêtres et afficher des données (c'est-à-dire [`DISPLAY RECORD`](../commands/display-records)). Une procédure stockée exécutée sur un poste client 4D permet la saisie de données. En revanche, une procédure stockée exécutée sur le serveur ne peut pas invoquer l'interface de saisie de données ; il n'y a pas de moteur de saisie de données sur la machine du serveur.

Vous pouvez démarrer autant de procédures stockées que votre matériel et la mémoire le permettent. En fait, la machine serveur doit être considérée comme une machine qui est non seulement capable de répondre à des clients 4D et à des navigateurs Web, mais aussi capable d'exécuter des process qui peuvent interagir avec d'autres process fonctionnant aussi bien sur le serveur que sur des 4D distants.

:::note

La propriété de méthode [**Exécuter sur serveur**](../Project/project-method-properties.md#execute-on-server) peut également être utilisée pour exécuter une méthode dans un process sur le serveur, mais la méthode utilise dans ce cas le process "jumeau" du process client, ce qui lui permet en particulier de bénéficier de l'environnement de ce process client. Il ne s'agit pas alors d'une procédure stockée 4D.

:::

#### Que peut faire une procédure stockée ?

En dehors de la saisie de données pour les procédures stockées exécutées sur le serveur, presque toutes les capacités des process et du langage 4D s'appliquent aux procédures stockées.

Une procédure stockée peut ajouter, rechercher, trier, mettre à jour ou détruire des enregistrements. Une procédure stockée peut utiliser des ensembles et des sélections temporaires, accéder à des documents sur disque, travailler avec des BLOBs, imprimer des enregistrements, etc. Pensez simplement qu'au lieu d'effectuer une tâche sur votre poste 4D local, vous l'effectuez sur le serveur ou sur un ou plusieurs autres postes clients.

Un avantage évident des procédures stockées exécutées sur le serveur est que précisément une procédure stockée s'exécute sur la machine serveur, là où se trouve le moteur de la base de données. Par exemple, un [`APPLY TO SELECTION`](../commands/apply-to-selection) n'est pas efficace via le réseau, mais l'est à l'intérieur d'une procédure stockée.

Les procédures stockées exécutées sur un ou plusieurs autres postes clients autorisent, quant à elles, l'optimisation de la répartition des tâches entre les clients, ou encore la communication inter-clients. Reportez-vous à la commande [`REGISTER CLIENT`](../commands/register-client) pour un exemple de procédure stockée exécutée sur plusieurs clients.

Cependant, l'avantage le plus évident de l'architecture des procédures stockées se trouve dans la dimension supplémentaire qu'elles apportent à 4D Server. Grâce aux procédures stockées, vous pouvez implémenter vos propres services 4D Server. La seule limite est votre imagination.

#### Que ne peut pas faire une procédure stockée ?

De manière générale, les procédures stockées exécutées sur le serveur ne doivent pas effectuer d'opérations impliquant des éléments d'interface (menus, fenêtres, formulaires...). En effet, les mécanismes de gestion d'interface ne sont pas pris en charge sur le serveur.

Toutes les commandes qui sont susceptibles de générer des boîtes de dialogue modales sur la machine serveur (par ex. [`Open document`](../commands/open-document) avec une chaîne vide comme premier paramètre) doivent être évitées. Gardez à l'esprit qu'il n'y a pas toujours un utilisateur devant un écran de serveur, et l'affichage d'une boîte de dialogue modale nécessitant une action utilisateur peut entraîner un blocage de l'application pendant un certain temps.

#### Commandes interdites sur le serveur

Voici la liste des commandes qui ne doivent PAS être utilisées dans les procédures stockées exécutées sur le serveur. La présence d'une de ces commandes dans une procédure stockée provoque l'apparition d'une boîte de dialogue d'alerte indiquant que la commande ne peut pas être exécutée sur 4D Server. L'erreur n°67 est retournée ; elle peut être interceptée par une méthode installée dans la commande [`ON ERR CALL`](../commands/on-err-call).

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

Commandes sans effet sur le serveur
Les commandes suivantes n'ont aucun effet lorsqu'elles sont exécutées dans le cadre d'une procédure stockée sur le serveur. Aucun code d'erreur spécifique n'est retourné.

[`GRAPH`](../commands/graph)
[`MESSAGES OFF`](../commands/messages-off)
[`MESSAGES ON`](../commands/messages-on)
[`SET MENU BAR`](../commands/set-menu-bar)
[`SHOW TOOL BAR`](../commands/show-tool-bar)

#### Comment lancer une procédure stockée ?

Depuis 4D, vous pouvez lancer manuellement une procédure stockée dans la boîte de dialogue d'exécution de méthode :

![](../assets/en/Desktop/execute-method.png)

Vous pouvez l'exécuter sur 4D Server ou sur un autre poste 4D client. Notez que pour être affichées dans cette liste, les machines clientes 4D doivent d'abord être [enregistrées](#stored-procedures-on-client-machines).

- Toujours sur 4D, vous pouvez lancer une procédure stockée par programmation en utilisant les commandes [`Execute on server`](../commands/execute-on-server) ou [`EXECUTE ON CLIENT`](../commands/execute-on-client).
- Une méthode exécutée sur le serveur 4D (méthode base, méthode avec attribut **Exécuter sur serveur** ou procédure stockée) peut démarrer une procédure stockée en utilisant [`Execute on server`](../commands/execute-on-server), [`New process`](../commands/new-process), ou [`EXECUTE ON CLIENT`](../commands/execute-on-client).

:::note

Il n'est pas possible d'utiliser les commandes de gestion de process [`DELAY PROCESS`](../commands/delay-process), [`PAUSE PROCESS`](../commands/pause-process) et [`RESUME PROCESS`](../commands/resume-process) depuis un 4D distant avec des procédures stockées sur le serveur.

:::

#### Communication entre les procédures stockées et les process utilisateur

Les procédures stockées peuvent communiquer entre elles à l'aide de :

- l'objet partagé [`session.storage`](../API/SessionClass.md#storage) de la [session des procédures stockées](../Desktop/sessions.md#stored-procedure-sessions)
- [sémaphores](../Develop/processes.md#semaphores) globaux ou locaux
- enregistrements
- commandes [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) et [`VARIABLE TO VARIABLE`](../commands/variable-to-variable)
- (*obsolète*) variables interprocess, ensembles interprocess et sélections nommées interprocess

Gardez à l'esprit que les commandes 4D agissent sur le poste qui exécute la procédure stockée (serveur ou clients) de la même manière qu'en local sur un poste client.

:::note

Les mécanismes [`POST OUTSIDE CALL`](../commands/post-outside-call) et [`Outside call`](../commands/outside-call) n'ont pas de signification sur le poste serveur car les procédures stockées ne disposent pas d'interface utilisateur avec saisie de données.

:::

Les process utilisateur du client (process fonctionnant sur un poste client) peuvent lire et écrire les variables process (\*) d'une procédure stockée, en utilisant les commandes [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) et [`VARIABLE TO VARIABLE`](../commands/variable-to-variable).

(\*) ainsi que les variables interprocess du poste serveur.

Important : La communication process “Intermachine” permise par les commandes [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) et [`VARIABLE TO VARIABLE`](../commands/variable-to-variable), n'est possible que du client vers le serveur. C'est toujours un process client qui lit ou écrit les variables d'une procédure stockée.

#### Procédures stockées sur les clients

Des procédures stockées peuvent être exécutées sur un ou plusieurs clients 4D. Les procédures stockées sur les machines clientes sont exécutées de la même manière que les procédures stockées sur le serveur, excepté que sur le client, elles peuvent prendre en charge la saisie de données avec des commandes anciennes telles que [`ADD RECORD`](../commands/add-record).

Tout poste client devant exécuter des procédures à la demande du serveur ou d'un autre poste client doit être explicitement “inscrit” pour la session. Il y a deux façons d'enregistrer un client : il peut être automatiquement enregistré lors de sa connexion ou par programmation.

- Inscrire automatiquement chaque client 4D qui se connecte à 4D Server : cochez l'option [**Inscrire les clients au démarrage pour Exécuter sur client**](../settings/client-server.md#register-clients-at-startup-for-execute-on-client) dans la boîte de dialogue des Propriétés. Lorsque cette option est cochée, chaque poste client 4D qui se connecte à la base est automatiquement référencé auprès de 4D Server comme pouvant exécuter des procédures stockées. Un process de type 4D Client portant le nom de la machine du poste client est créé sur le serveur. Un process équivalent est également créé sur chaque poste client.
- Inscrire les 4D Client par programmation : vous pouvez inscrire un ou plusieurs clients par programmation, ce qui vous permet de sélectionner les postes clients devant être inscrits et de choisir leur nom d'inscription. Utilisez la commande [`REGISTER CLIENT`](../commands/register-client) qui vous permet d'enregistrer une machine cliente sous n'importe quel nom.
- Désinscrire un 4D Client : quel que soit le mode d'inscription des postes clients, vous pouvez à tout moment désinscrire tout poste client du serveur pour la session courante en exécutant la commande [`UNREGISTER CLIENT`](../commands/unregister-cient) sur le poste client à désinscrire. Le process de gestion de l'inscription (portant le nom du client) disparaît alors du groupe de process de l'utilisateur sur le poste serveur, ainsi que sur le poste client.

Vous pouvez obtenir la liste et la distribution des tâches (nombre de méthodes encore à exécuter) pour les clients enregistrés pour une session en utilisant la commande [`GET REGISTERED CLIENTS`](../commands/get-registered-clients).

### Variables

Comme tous les process, chaque procédure stockée, méthode base et trigger a sa propre table de variables process. Ces variables process peuvent être créées et utilisées de manière dynamique pendant chaque phase de l'exécution.

4D Server maintient une table de [variables interprocess] (../Concepts/variables.md#interprocess-variables) (*obsolète*). La portée de ces variables est le poste serveur. Lorsque 4D Server exécute une base compilée, la définition de la table des variables interprocess est commune entre le serveur et les machines clientes, chaque machine possédant sa propre instance.

### Ensembles et sélections temporaires

- Ensembles/Sélections temporaires process : Un objet process n'est "visible" que par le process dans lequel il a été créé et, s'il a été créé dans un process client, par le process "jumeau" créé sur le serveur. Les ensembles process sont effacés dès que la méthode process est terminée. Les objets process n'ont pas besoin de préfixe spécial dans le nom.
- Ensembles/Sélections temporaires interprocess (*obsolète*): Un objet interprocessus est visible pour tous les process sur la machine (client ou serveur) où il a été créé. Un objet est interprocess lorsque son nom est préfixé des symboles (\<>) — le signe “inférieur à” suivi du signe “supérieur à”.
- Ensembles/Sélections temporaires locaux/clients : Un objet local/client est visible uniquement dans le process qui l'a créé.  Le nom d'un objet local/client est préfixé du symbole dollar ($).
  Note: Bien que son nom ne commence pas par un `$`, l'ensemble système `UserSet` est un ensemble local/client.

Le tableau suivant indique les principes de visibilité des sélections temporaires et des ensembles en fonction de leur lieu de création (le tableau est identique pour les deux types d’objets) :

|                                  | Process client | Autres process clients | Process serveur                | Autres process serveur |
| -------------------------------- | -------------- | ---------------------- | ------------------------------ | ---------------------- |
| **Créé dans un process client**  |                |                        |                                |                        |
| `$test`                          | x              |                        |                                |                        |
| `test`                           | x              |                        | x (Trigger) |                        |
| `<>test`                         | x              | x                      |                                |                        |
| **Créé dans un process serveur** |                |                        |                                |                        |
| `$test`                          |                |                        | x                              |                        |
| `test`                           |                |                        | x                              |                        |
| `<>test`                         |                |                        | x                              | x                      |

x = visible

Vous devez garder à l'esprit cette matrice de visibilité en fonction des opérations que vous souhaitez effectuer. Par exemple, si vous voulez faire un [`DIFFERENCE`](../commands/difference), [`INTERSECTION`](../commands/intersection) ou [`UNION`](../commands/union) type opération, assurez-vous que tous les ensembles sont visibles sur la machine qui effectue l'opération.

### Attribut Exécuter sur serveur

L'attribut de méthode projet **Exécuter sur serveur** peut être défini en utilisant la boîte de dialogue des attributs ainsi que la boîte de dialogue des [Propriétés](../Project/project-method-properties.md#execute-on-server) des méthodes. Lorsque cette option est cochée, la méthode du projet est toujours exécutée sur le serveur, quelle que soit la manière dont elle est appelée.

#### Contexte d’exécution

Lorsque cet attribut est coché, le contexte d’exécution de la méthode projet est comparable à celui des [triggers](#triggers) : la méthode sur le serveur partage le même contexte de base de données que le contexte correspondant côté client pour le verrouillage d’enregistrements et les transactions, mais pas le même contexte de langage (variables process, ensembles, sélections courantes). Toutefois, à la différence d'un trigger, la méthode exécutée sur le serveur ne partage pas l'enregistrement courant avec le contexte du client.
Tous les [paramètres de la méthode](../Concepts/parameters.md) sont envoyés au serveur et la valeur retournée, le cas échéant, est retournée au client.

A la différence de la commande [`Execute on server`](../commands/execute-on-server), cette option ne crée pas de process sur le serveur. 4D Server utilise le process "jumeau" du process client qui a demandé l’exécution. En outre, cette option simplifie le principe de délégation de l’exécution d’une méthode sur le serveur car le transfert des paramètres s’effectue automatiquement dans les deux sens, comme pour un appel de méthode "normal". La commande [`Execute on server`](../commands/execute-on-server) fonctionne de manière asynchrone, elle nécessite donc plus de programmation et le recours aux [sémaphores](../Develop/processes.md#semaphores) pour la lecture des résultats.

#### Commandes utilisables

Les méthodes ayant l'attribut "Exécuter sur serveur" sont soumises aux mêmes règles que les [procédures stockées](#stored-procedures) en ce qui concerne l'utilisation des commandes en langage 4D.

#### Pointeurs

Si vous passez un pointeur à une variable (simple variable, tableau ou tableau), la valeur pointée est également envoyée au serveur. Si la valeur pointée est modifiée sur le serveur par la méthode, la valeur modifiée est retournée sur le client pour mise à jour de la variable correspondante côté client.
Les pointeurs sur une table ou un champ sont envoyés sous forme de référence (numéro de table, numéro de champ). La valeur de l’enregistrement courant n’est pas échangée automatiquement.

:::note

Cette option fonctionne de la même façon en [mode interprété et en mode compilé](../Concepts/interpreted.md).

:::

#### Exemple

Voici le code de la méthode projet *MyAppli* qui a l'attribut "Exécuter sur serveur" :

```4d
 #DECLARE($table: Pointer; $field: Pointer; $array: Pointer; $search: Text) -> $result : Integer
 
  //Chercher et renvoyer les valeurs pour chaque enregistrement
 QUERY($table->;$field->=$search)
 While(Not(End selection($table->)))
    APPEND TO ARRAY($array->;myFormula($table))
    NEXT RECORD($table->)
 End while
 UNLOAD RECORD($table->)
 $result:=Records in selection($table->)
```

Côté client, l’appel de la méthode s’effectue ainsi :

```4d
 ARRAY TEXT(myArray;0)
 var $vlnum:=MyAppli(->[Table_1] ;->[Table_1]Field_1 ;->myArray;"to find")
```

## Dossier Resources

Le [dossier **Ressources**](../Project/architecture.md#resources) d'un projet peut être utilisé pour partager des données personnalisées (images, fichiers, sous-dossiers, etc.) entre le poste serveur et tous les postes clients. Sur le poste serveur, le dossier **Resources** est simplement situé au premier niveau du [dossier racine du projet](../Project/architecture.md).

Tous les mécanismes de référencement associé au dossier **Resources** sont pris en charge en mode client/serveur (dossier .lproj, XLIFF, images...).

Chaque client dispose en local d'une copie de ce dossier. Le contenu du dossier local est automatiquement synchronisé avec celui du serveur au moment de la connexion du client.

En outre, les postes clients peuvent être "notifiés" dynamiquement en cours de session lorsque le contenu du dossier **Resources** sur le serveur a été modifié par un développeur. Cette notification peut être déclenchée :

- automatiquement par le serveur, deux minutes après la dernière modification effectuée par un client (cette temporisation permet d’éviter les notifications intempestives en cas de copie de nombreux fichiers).
- manuellement via la commande **Aviser les clients** dans le menu d’action de l’[**Explorateur de ressources**](https://doc.4d.com/4Dv20/4D/20.2/Using-the-Resources-explorer.300-6750254.en.html) sur le poste client à l’origine de la modification.
- par programmation, via la commande [`NOTIFY RESOURCES FOLDER MODIFICATION`](../commands/notify-resources-folder-notification). Cette commande est utile en cas de modification du contenu du dossier **Resources** sur le poste serveur via une procédure stockée.

Côté client, le mode de prise en compte de l’information de modification (la notification) dépend du paramétrage de la propriété [**Mise à jour du dossier "Resources" en cours de session**](../settings/client-server.md#update-resources-folder-during-a-session). Elle peut également être définie individuellement via le sélecteur [`Auto synchro resources folder` de la commande `SET DATABASE PARAMETER`](../commands/set-database-parameter#auto-synchro-resources-folder-48). Trois choix sont proposés : **pas de synchronisation**, **synchronisation automatique** ou **demander**. Pour plus d'informations, veuillez vous référer à la section [**Options Réseau et Client-Serveur** ](../settings/client-server.md#update-resources-folder-during-a-session).

Enfin, chaque poste client peut se synchroniser avec le serveur à tout moment via la commande **Mise à jour des ressources** dans le menu d'action de l'[Explorateur de ressources](https://doc.4d.com/4Dv20/4D/20.2/Resources-explorer.200-6750091.en.html).