---
id: clientServer
title: Gestion Client/Serveur
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

> The [**Activate development mode**](#development-mode) option opens the remote connection in a special read/write mode and requires to access the project folder from the remote 4D.

Une fois que cette page attribue un serveur, cliquez sur le bouton **OK** pour vous connecter au serveur.

Une fois la connexion au serveur établie, le projet distant sera répertorié dans l'onglet **Récent**.

### Mettre à jour des fichiers de projet sur le serveur

4D Server crée et envoie automatiquement aux machines distantes une version [.4dz](building.md#build-compiled-structure) du fichier de projet *.4DProject* (non compressé) en mode interprété.

- Une version .4dz mise à jour du projet est automatiquement produite lorsque cela est nécessaire, c'est-à-dire lorsque le projet a été modifié et rechargé par 4D Server. Le projet est rechargé :
  - automatiquement, lorsque la fenêtre de l'application 4D Server arrive à l'avant de l'OS ou lorsque l'application 4D sur la même machine enregistre une modification (voir ci-dessous).
  - when the [`RELOAD PROJECT`](../commands-legacy/reload-project.md) command is executed. L'appel de cette commande est nécessaire lorsque, par exemple, vous avez extrait une nouvelle version du projet depuis la plateforme de contrôle de version.

### Mettre à jour des fichiers de projet sur les machines distantes

Lorsqu'une version .4dz mise à jour du projet a été produite sur 4D Server, les machines 4D distantes connectées doivent se déconnecter et se reconnecter à 4D Server afin de bénéficier de la version mise à jour.

## Utiliser 4D et 4D Server sur la même machine

Lorsque 4D se connecte à un 4D Server sur la même machine, l'application se comporte comme 4D en mode monoposte et l'environnement de développement permet d'éditer les fichiers du projet. Cette fonctionnalité vous permet de développer une application client/serveur dans le même contexte que le contexte de déploiement.

> When 4D connects to a 4D Server on the same machine, the **development mode** is automatically activated, whatever the [Development mode](#development-mode) status.

A chaque fois que 4D effectue une action **Enregistrer tout** depuis l'environnement de développement (explicitement depuis le menu **Fichier** ou implicitement en passant en mode application par exemple), 4D Server recharge de manière synchrone les fichiers du projet. 4D attend que 4D Server termine le rechargement des fichiers du projet avant de continuer.

Veillez cependant aux différences de comportement suivantes, comparées à [l'architecture projet standard](Project/architecture.md) :

- le dossier userPreferences.\{username\} utilisé par 4D n'est pas le même que celui utilisé par 4D Server dans le dossier projet. Au lieu de cela, il s'agit d'un dossier dédié, nommé "userPreferences", stocké dans le dossier système du projet (c'est-à-dire au même emplacement que lors de l'ouverture d'un projet .4dz).
- le dossier utilisé par 4D pour les données dérivées n'est pas le dossier "DerivedData" du dossier projet. Il s'agit plutôt d'un dossier dédié nommé "DerivedDataRemote" situé dans le dossier système du projet.
- le fichier catalog.4DCatalog n'est pas édité par 4D mais par 4D Server. Les informations du catalogue sont synchronisées à l'aide des requêtes client/serveur
- le fichier directory.json n'est pas édité par 4D mais par 4D Server. Les informations du répertoire sont synchronisées à l'aide des requêtes client/serveur
- 4D utilise ses propres composants internes et plug-ins au lieu de ceux de 4D Server.

> Il n'est pas recommandé d'installer des plug-ins ou des composants au niveau de l'application 4D ou 4D Server.

## Development mode

The **Development mode** in 4D Server is a special project opening mode that allows read/write access for connected remote 4D applications. The project must be available in [**interpreted** mode](../Concepts/interpreted.md).

This mode allows one or more developers to work simultaneously on the same project in Design environment. When a project is opened in **Development mode**:

- Project files are available in read/write so that you can edit methods, forms, etc.
- Several remote 4D can concurrently open the same interpreted project files and edit them. An automatic locking system prevents from concurrent access to the same resource.
- Modifications are made available to all remote developers. Note however that there is no automatic push to remote developers, they need to refresh to get latest versions of files (a refresh is done each time the developer switches from design mode to application mode for example, or selects **Save all** from the **File** menu).

To use this mode, select the **Activate development mode** option in the [connection dialog box](#opening-a-remote-project) from your remote 4D. You are prompted to **Select 4D project file**: you need to select the [.project file](../Project/architecture.md#applicationname4dproject-file) that 4D Server has opened. If you select a different file, an alert dialog box warns you that the development mode is not available. It means that the remote 4D must have access to the project folder over the network (the whole project folder must be shared, i.e. the root folder of the project).

:::caution

For performance reasons with this configuration, it is strongly recommended that the project folder be stored on a dedicated file server (e.g. a NAS) on a local network.

:::

:::note

When both the server and the remote 4D are on the same machine, [additional rules applies](#using-4d-and-4d-server-on-the-same-machine).

:::

Here is an overview of the development mode architecture:

![](../assets/en/Desktop/develop-mode.png)

:::note Compatibilité

This feature is designed for small-size development teams who are used to work on binary databases and want to benefit from project features while maintaining their current organisation. However, for multi-user development on 4D projects, we recommend using a standard architecture where developers work on their machine and manage their work using source control repository tools (Git, SVN, etc.). This organisation provides a great flexibility by allowing developers to work on different branches, and compare, merge, or revert modifications.

:::

:::tip Article(s) de blog sur le sujet

[Developing Concurrently on 4D Server in Project Mode](https://blog.4d.com/developing-concurrently-on-4d-server-in-project-mode/)

:::