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
    - *Fichiers de raccourcis* : extension `.4dlink` - stockent les paramètres supplémentaires nécessaires à l'ouverture de projets ou d'applications (adresses, identifiants, etc.)
    - *Fichiers binaires* : extension `.4db` ou `.4dc` - formats de base de données 4D hérités

### Options

En plus des options système standard, la boîte de dialogue *Ouvrir* de 4D propose deux menus avec des options spécifiques disponibles à l'aide du bouton **Ouvrir** et du menu **Fichier de données**.

- **Ouvrir** - mode d'ouverture du projet :
    - **Interprété** ou **compilé** : ces options sont disponibles lorsque le projet sélectionné contient à la fois du [code interprété et compilé](Concepts/interpreted.md).
    - **[Centre de Maintenance et de Sécurité](MSC/overview.md)** : Ouverture en mode sécurisé permettant d'accéder aux projets endommagés afin d'effectuer les réparations nécessaires.

- **Fichier de données** - spécifie le fichier de données à utiliser avec le projet. Par défaut, l'option **Fichier de données courant** est sélectionnée.




## Raccourcis d’ouverture des projets

4D propose deux façons d’ouvrir directement des projets, sans passer par la boîte de dialogue d’ouverture :

- via les options du menu :
    -   *Barre de menu* - **Fichier** > **Ouvrir Projets récents / {project name}**
    -   *Barre d'outils 4D* -  Sélectionnez le projetà partir du menu associé au bouton **Ouvrir**

- via les préférences :
    -   Définissez la préférence générale **Au démarrage** sur **Ouvrir le dernier projet utilisé**.


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