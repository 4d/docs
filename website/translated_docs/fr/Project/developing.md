---
id: developing
title: Développer un projet
---

## Aperçu

4D projects are developed using the **4D** application. Elle fournit un environnement de développement intégré (IDE) pour les projets 4D ainsi qu'une exécution d'application, permettant de développer, tester et déboguer le projet.

> La plupart des fichiers de projet 4D étant des fichiers texte, vous pouvez utiliser n'importe quel éditeur de texte pour y travailler. L'accès simultané aux fichiers est géré via un gestionnaire d'accès aux fichiers (voir ci-dessous).

Le développement multi-utilisateur est géré via des outils de contrôle de version standard, qui permettent aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.


## Configurations de développement

Les projets interprétés (*applicationName.4DProject*, voir [Architecture d'un project 4D](architecture.md)) peuvent être ouverts dans les configurations suivantes :

- 4D opening **local project files** - in this case, all aspects of the project are available to the developer. Les fichiers projet peuvent être ouverts, modifiés, compilés, etc. The result of the development can be tested at any moment by using the **Test application** menu command from 4D or using the [integrated web server](WebServer/webServerObject.md).
- 4D connection from the **same machine as 4D Server** - in this case, development is supported the same as local projects. Cette fonctionnalité vous permet de développer une application client/serveur dans le même contexte que le contexte de déploiement ([détaillé ci-dessous](#developing-projects-with-4d-server)).
- Connexion 4D depuis une **machine distante** - dans ce cas, 4D Server envoie une version .4dz du projet ([format compressé](Admin/building.md#build-compiled-structure)) à 4D. Par conséquent, tous les fichiers de structure sont en lecture seule. Cette fonctionnalité est utile à des fins de test.


## Développer des projets avec 4D Server

### Mettre à jour des fichiers de projet sur le serveur

Le développement d'un projet 4D Server repose sur les principes suivants :

- You create, test, and modify the project features in a local version of the files using 4D. To work directly with 4D Server, you can [use 4D on the same machine as 4D Server](#using-4d-on-the-same-machine).

> Il est recommandé d'utiliser un outil de gestion de version standard (par exemple Git) afin de travailler avec des branches, d'enregistrer des projets à différentes étapes et/ou d'annuler les modifications si nécessaire.

- 4D Server peut exécuter le fichier projet *.4DProject* (non compressé) en mode interprété, afin que 4D distant puisse se connecter et tester les fonctionnalités. Pour cela, 4D Server crée et envoie automatiquement aux machines distantes une [version .4dz](Admin/building.md#build-compiled-structure) du projet.

- Une version .4dz mise à jour du projet est automatiquement produite lorsque cela est nécessaire, c'est-à-dire lorsque le projet a été modifié et rechargé par 4D Server. Le projet est rechargé :
    - automatically, when the 4D Server application window comes to the front of the OS or when the 4D application on the same machine saves a modification (see below).
    - when the `RELOAD PROJECT` command is executed. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform.


### Mettre à jour des fichiers de projet sur les machines distantes

Lorsqu'une version .4dz mise à jour du projet a été produite sur 4D Server, les machines 4D distantes connectées doivent se déconnecter et se reconnecter à 4D Server afin de bénéficier de la version mise à jour.



### Using 4D on the same machine

When 4D connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. Each time 4D performs a **Save all** action from the design environment (explicitly from **File** menu or implicitly by switching to application mode for example), 4D Server synchronously reloads project files. 4D waits for 4D Server to finish reloading the project files before it continues.

Veillez cependant aux différences de comportement suivantes, comparées à [l'architecture projet standard](architecture.md) :

- le dossier userPreferences.{username} utilisé par 4D ne correspond pas au même dossier utilisé par 4D Server dans le dossier projet. Instead, it is a dedicated folder, named "userPreferences", stored in the project system folder (i.e., the same location as when opening a .4dz project).
- the folder used by 4D for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the project system folder.
- the catalog.4DCatalog file is not edited by 4D but by 4D Server. Les informations du catalogue sont synchronisées à l'aide des requêtes client/serveur
- the directory.json file is not edited by 4D but by 4D Server. Les informations du répertoire sont synchronisées à l'aide des requêtes client/serveur
- 4D uses its own internal components and plug-ins instead of those in 4D Server.

> It is not recommended to install plug-ins or components at the 4D or 4D Server application level.


## Enregistrement des fichiers

Lorsque vous travaillez sur un projet dans 4D, vous pouvez utiliser les éditeurs intégrés de 4D pour créer, modifier ou sauvegarder des éléments de la structure, des méthodes, des formulaires, etc. Les modifications sont enregistrées sur disque lorsque vous sélectionnez un élément de menu **Sauvegarde**, ou lorsque la fenêtre de l'éditeur pert ou récupère le focus.

Les éditeurs utilisant des fichiers sur le disque, d'éventuels conflits peuvent se produire si le même fichier est modifié voire supprimé de différents endroits. Par exemple, si la même méthode est modifiée dans une fenêtre d'éditeur de méthode *et* dans un éditeur de texte, la sauvegarde des deux modifications entraînera un conflit.

The 4D development framework includes a file access manager to control concurrent access:

- if an open file is read-only at the OS level, a locked icon is displayed in the editor: ![](assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog when trying to save the changes:![](assets/en/Project/projectReload.png)
    - **Oui** : ignore les modifications de l'éditeur et recharge la version modifiée
    - **Non** : enregistrer les modifications et écraser l'autre version
    - **Annuler** : ne pas enregistrer

Cette fonctionnalité est activée pour tous les éditeurs 4D intégrés (Structure, Formulaire, Méthode, Paramètres et Boite à outils).
