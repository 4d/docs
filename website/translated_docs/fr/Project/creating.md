---
id: creating
title: Working with a project
---

4D projects are created and developed using the **4D** application, which provides a comprehensive Integrated Development Environment (IDE). **4D Server** can also create new, empty projects.

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.


## Créer un projet

New 4D application projects can be created from **4D** or **4D Server**. Dans tous les cas, les fichiers de projet sont stockés sur la machine locale.

Pour créer un nouveau projet :

1. Lancez 4D ou 4D Server.
2. Sélectionnez **Nouveau> Projet...** depuis le menu **Fichier** : <p>![](assets/en/getStart/projectCreate1.png)<p>OU<p>(4D uniquement) Sélectionnez **Projet...** depuis le bouton de la barre d'outils **Nouveau** :<p>![](assets/en/getStart/projectCreate2.png)<p>Un dialogue standard **Sauvegarde** apparaît, de façon à ce que vous choisissiez le nom et l'emplacement du dossier principal du projet 4D.

3. Saisissez le nom du dossier de projet et cliquez sur **Sauvegarder**.<p> Ce nom sera utilisé :
    - comme le nom du dossier du projet,
    - comme nom du fichier .4DProject au premier niveau du dossier "Project".

    Vous pouvez choisir n'importe quel nom autorisé par votre système d'exploitation. Toutefois, si votre projet est destiné à fonctionner sur d'autres systèmes ou à être enregistré via un outil de gestion de version, vous devez tenir compte de leurs recommandations de dénomination spécifiques.

Lorsque vous validez la boîte de dialogue **Enregistrer**, 4D ferme le projet en cours (le cas échéant), crée un dossier de projet à l'emplacement indiqué et y place tous les fichiers nécessaires au projet. Pour plus d'informations, voir [Architecture d'un projet 4D](Project/architecture.md).

Vous pouvez alors commencer à développer votre projet.

## Opening a project

To open an existing project from 4D:

1. Sélectionnez **Ouvrir un projet d'application local** dans la boite de dialogue de l'Assistant de bienvenue <p>OU<p> Sélectionnez **Ouvrir > Projet local...** à partir du menu **Fichier** ou du bouton **Ouvrir** de la barre d'outils.<p> La boîte de dialogue standard d’ouverture de fichiers apparaît.

2. Sélectionnez le fichier `.4dproject` du projet et cliquez sur **Ouvrir**.<p> Par défaut, le projet est ouvert avec son fichier de données courant. D'autres types de fichiers sont suggérés :

    - *Fichiers de projet compressés* : extension `.4dz` - Projets de déploiement
    - *Shortcut files*: `.4DLink` extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)
    - *Fichiers binaires* : extension `.4db` ou `.4dc` - formats de base de données 4D hérités

### Options

En plus des options système standard, la boîte de dialogue *Ouvrir* de 4D propose deux menus avec des options spécifiques disponibles à l'aide du bouton **Ouvrir** et du menu **Fichier de données**.

- **Ouvrir** - mode d'ouverture du projet :
    - **Interprété** ou **compilé** : ces options sont disponibles lorsque le projet sélectionné contient à la fois du [code interprété et compilé](Concepts/interpreted.md).
    - **[Centre de Maintenance et de Sécurité](MSC/overview.md)** : Ouverture en mode sécurisé permettant d'accéder aux projets endommagés afin d'effectuer les réparations nécessaires.

- **Fichier de données** - spécifie le fichier de données à utiliser avec le projet. Par défaut, l'option **Fichier de données courant** est sélectionnée.

## Raccourcis d’ouverture des projets

4D offers several ways to open projects directly and bypass the Open dialog:

- via les options du menu :
    -   *Barre de menu* - **Fichier** > **Ouvrir Projets récents / {project name}**
    -   *Barre d'outils 4D* -  Sélectionnez le projetà partir du menu associé au bouton **Ouvrir**

- via les préférences :
    -   Définissez la préférence générale **Au démarrage** sur **Ouvrir le dernier projet utilisé**.

- using a `.4DLink` file.

### Opening a Project with a 4DLink file

You can use a [`.4DLink` file](#about-4DLink-files) to launch the 4D application and open the target 4D project. There are two ways to do this:

- double-click or drag and drop the `.4DLink` file onto the 4D application
- go to **File** > **Open Recent Projects** and select a project

![open-recent-projects](assets/en/Project/4Dlinkfiles.png)

A .4DLink file of "remote project" type can be copied and used on several machines.
> It's also possible to select a 4DLink file in the 4D and 4D Server opening dialog box (opening local project only).

## About 4DLink Files

Files with the `.4DLink` extension are XML files that contain parameters intended to automate and simplify opening local or remote 4D projects.

`.4DLink` files can save the address of a 4D project as well as its connection identifiers and opening mode, saving you time when opening projects.

4D automatically generates a `.4DLink` file when a local project is opened for the first time or when connecting to a server for the first time. The file is stored in the local preferences folder at the following location:

- Windows 7 and higher: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- OS X: Users/UserName/Library/Application Support/4D/Favorites vXX/

XX represents the version number of the application. For example, "Favorites v19" for 4D v19.

That folder is divided into two subfolders:
- the **Local** folder contains the `.4DLink` files that can be used to open local projects
- the **Remote** folder contains the `.4DLink` files of recent remote projects

`.4DLink` files can also be created with an XML editor.

4D provides a DTD describing the XML keys that can be used to build a `.4DLink` file. This DTD is named database_link.dtd and is found in the \Resources\DTD\ subfolder of the 4D application.


## Enregistrement des fichiers

Lorsque vous travaillez sur un projet dans 4D, vous pouvez utiliser les éditeurs intégrés de 4D pour créer, modifier ou sauvegarder des éléments de la structure, des méthodes, des formulaires, etc. Les modifications sont enregistrées sur disque lorsque vous sélectionnez un élément de menu **Sauvegarde**, ou lorsque la fenêtre de l'éditeur pert ou récupère le focus.

Les éditeurs utilisant des fichiers sur le disque, d'éventuels conflits peuvent se produire si le même fichier est modifié voire supprimé de différents endroits. Par exemple, si la même méthode est modifiée dans une fenêtre d'éditeur de méthode *et* dans un éditeur de texte, la sauvegarde des deux modifications entraînera un conflit.

Le développement 4D comprend un gestionnaire d’accès aux fichiers permettant de contrôler les accès simultanés :

- if an open file is read-only at the OS level, a locked icon is displayed in the editor: ![](assets/en/Project/lockicon.png)
- si un fichier ouvert est édité simultanément à partir de différents emplacements, 4D affichera une boîte de dialogue d'alerte lorsque vous tenterez d'enregistrer les modifications :

![](assets/en/Project/projectReload.png)
    - **Oui** : ignore les modifications de l'éditeur et recharge la version modifiée
    - **Non** : enregistrer les modifications et écraser l'autre version
    - **Annuler** : ne pas enregistrer

Cette fonctionnalité est activée pour tous les éditeurs 4D intégrés (Structure, Formulaire, Méthode, Paramètres et Boite à outils).