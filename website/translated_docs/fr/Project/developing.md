---
id: developing
title: Développer un projet
---


Les projets 4D sont développés à l'aide de l'application **4D**. Elle fournit un environnement de développement intégré (IDE) pour les projets 4D ainsi qu'une exécution d'application, permettant de développer, tester et déboguer le projet.

> La plupart des fichiers de projet 4D étant des fichiers texte, vous pouvez utiliser n'importe quel éditeur de texte pour y travailler. L'accès simultané aux fichiers est géré via un gestionnaire d'accès aux fichiers (voir ci-dessous).

Le développement multi-utilisateur est géré via des outils de contrôle de version standard, qui permettent aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.


## Configurations de développement

Les projets interprétés (*applicationName.4DProject*, voir [Architecture d'un project 4D](architecture.md)) peuvent être ouverts dans les configurations suivantes :

- 4D ouvrant **des fichiers de projet locaux** - dans ce cas, tous les éléments du projet sont à la disposition du développeur. Les fichiers projet peuvent être ouverts, modifiés, compilés, etc. Le résultat du développement peut être testé à tout moment à l'aide de la commande de menu 4D **Tester l'application** ou en utilisant le [serveur Web intégré](WebServer/webServerObject.md).
- Connexion 4D depuis **la même machine que 4D Server** - dans ce cas, le développement est pris en charge de la même manière que les projets locaux. Cette fonctionnalité vous permet de développer une application client/serveur dans le même contexte que le contexte de déploiement ([détaillé ci-dessous](#developing-projects-with-4d-server)).
- Connexion 4D depuis une **machine distante** - dans ce cas, 4D Server envoie une version .4dz du projet ([format compressé](Admin/building.md#build-compiled-structure)) à 4D. Par conséquent, tous les fichiers de structure sont en lecture seule. Cette fonctionnalité est utile à des fins de test.


## Développer des projets avec 4D Server

### Mettre à jour des fichiers de projet sur le serveur

Le développement d'un projet 4D Server repose sur les principes suivants :

- Vous créez, testez et modifiez les fonctionnalités du projet dans une version locale des fichiers à l'aide de 4D. Pour travailler directement avec 4D Server, vous pouvez [utiliser 4D sur la même machine que 4D Server](#using-4d-on-the-same-machine).

> Il est recommandé d'utiliser un outil de gestion de version standard (par exemple Git) afin de travailler avec des branches, d'enregistrer des projets à différentes étapes et/ou d'annuler les modifications si nécessaire.

- 4D Server peut exécuter le fichier projet *.4DProject* (non compressé) en mode interprété, afin que 4D distant puisse se connecter et tester les fonctionnalités. Pour cela, 4D Server crée et envoie automatiquement aux machines distantes une [version .4dz](Admin/building.md#build-compiled-structure) du projet.

- Une version .4dz mise à jour du projet est automatiquement produite lorsque cela est nécessaire, c'est-à-dire lorsque le projet a été modifié et rechargé par 4D Server. Le projet est rechargé :
    - automatiquement, lorsque la fenêtre de l'application 4D Server arrive à l'avant de l'OS ou lorsque l'application 4D sur la même machine enregistre une modification (voir ci-dessous).
    - lorsque la commande `RELOAD PROJECT` est exécutée. L'appel de cette commande est nécessaire lorsque, par exemple, vous avez extrait une nouvelle version du projet depuis la plateforme de contrôle de version.


### Mettre à jour des fichiers de projet sur les machines distantes

Lorsqu'une version .4dz mise à jour du projet a été produite sur 4D Server, les machines 4D distantes connectées doivent se déconnecter et se reconnecter à 4D Server afin de bénéficier de la version mise à jour.



### Utiliser 4D sur la même machine

Lorsque 4D se connecte à un 4D Server sur la même machine, l'application se comporte comme 4D en mode monoposte et l'environnement de développement permet d'éditer les fichiers du projet. A chaque fois que 4D effectue une action **Enregistrer tout** depuis l'environnement de développement (explicitement depuis le menu **Fichier** ou implicitement en passant en mode application par exemple), 4D Server recharge de manière synchrone les fichiers du projet. 4D attend que 4D Server termine le rechargement des fichiers du projet avant de continuer.

Veillez cependant aux différences de comportement suivantes, comparées à [l'architecture projet standard](architecture.md) :

- le dossier userPreferences.{username} utilisé par 4D ne correspond pas au même dossier utilisé par 4D Server dans le dossier projet. Au lieu de cela, il s'agit d'un dossier dédié, nommé "userPreferences", stocké dans le dossier système du projet (c'est-à-dire au même emplacement que lors de l'ouverture d'un projet .4dz).
- le dossier utilisé par 4D pour les données dérivées n'est pas le dossier "DerivedData" du dossier projet. Il s'agit plutôt d'un dossier dédié nommé "DerivedDataRemote" situé dans le dossier système du projet.
- le fichier catalog.4DCatalog n'est pas édité par 4D mais par 4D Server. Les informations du catalogue sont synchronisées à l'aide des requêtes client/serveur
- le fichier directory.json n'est pas édité par 4D mais par 4D Server. Les informations du répertoire sont synchronisées à l'aide des requêtes client/serveur
- 4D utilise ses propres composants internes et plug-ins au lieu de ceux de 4D Server.

> Il n'est pas recommandé d'installer des plug-ins ou des composants au niveau de l'application 4D ou 4D Server.


## Enregistrement des fichiers

Lorsque vous travaillez sur un projet dans 4D, vous pouvez utiliser les éditeurs intégrés de 4D pour créer, modifier ou sauvegarder des éléments de la structure, des méthodes, des formulaires, etc. Les modifications sont enregistrées sur disque lorsque vous sélectionnez un élément de menu **Sauvegarde**, ou lorsque la fenêtre de l'éditeur pert ou récupère le focus.

Les éditeurs utilisant des fichiers sur le disque, d'éventuels conflits peuvent se produire si le même fichier est modifié voire supprimé de différents endroits. Par exemple, si la même méthode est modifiée dans une fenêtre d'éditeur de méthode *et* dans un éditeur de texte, la sauvegarde des deux modifications entraînera un conflit.

Le développement 4D comprend un gestionnaire d’accès aux fichiers permettant de contrôler les accès simultanés :

- if an open file is read-only at the OS level, a locked icon is displayed in the editor: ![](assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog when trying to save the changes:![](assets/en/Project/projectReload.png)
    - **Oui** : ignore les modifications de l'éditeur et recharge la version modifiée
    - **Non** : enregistrer les modifications et écraser l'autre version
    - **Annuler** : ne pas enregistrer

Cette fonctionnalité est activée pour tous les éditeurs 4D intégrés (Structure, Formulaire, Méthode, Paramètres et Boite à outils).
