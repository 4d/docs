---
id: developing
title: Développer un projet
---

## Aperçu

You develop 4D database projects using the **4D Developer** application. 4D Developer provides an Integrated Development Environment (IDE) for 4D projects as well as an application runtime, allowing to develop, test, and debug the project.

> You can also work in 4D project files with any text editor since most of them are text files. L'accès simultané aux fichiers est géré via un gestionnaire d'accès aux fichiers (voir ci-dessous).

Le développement multi-utilisateur est géré via des outils de contrôle de version standard, qui permettent aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.

## Development configurations

You can open interpreted projects (*databaseName.4DProject* (see [Architecture of a 4D project](architecture.md))) in the following configurations:

- 4D Developer opening **local project files** - in this case, all aspects of the project are available to the developer. Project files can be created, modified, compiled... The result of the development can be tested at any moment by running the **Test application** menu command from 4D Developer or using the integrated Web server. 
- - 4D Developer connection from the **same machine as 4D Server** - in this case, development is supported just like with local projects. This feature allows you to develop a client/server application in the same context as the deployment context; it is [detailed below](#developing-projects-with-4d-server). 
- 4D Developer connection from a **remote machine** - in this case, 4D Server sends a .4dz version of the project ([zipped format](building.md#build-compiled-structure)) to 4D Developer. As a consequence, all structure files are read-only. This feature is useful for testing purposes. 

## Accès au fichier de projet

Lorsque vous travaillez sur un projet dans 4D Developer, vous pouvez utiliser les éditeurs intégrés de 4D pour créer, modifier ou sauvegarder des éléments de la structure, des méthodes, des formulaires, etc. Modifications are saved to disk when you select a **Save** menu item, or when the editor's window loses or gets the focus.

Les éditeurs utilisant des fichiers sur le disque, d'éventuels conflits peuvent se produire si le même fichier est modifié voire supprimé de différents endroits. Par exemple, si la même méthode est modifiée dans une fenêtre d'éditeur de méthode *et* dans un éditeur de texte, la sauvegarde des deux modifications entraînera un conflit.

4D Developer comprend un gestionnaire d’accès aux fichiers permettant de contrôler les accès simultanés :

- if an open file is read-only at the OS level, a locked icon is displayed in the editor: ![](assets/en/Project/lockicon.png)
- si un fichier ouvert est édité simultanément à partir de différents emplacements, 4D affiche une boîte de dialogue d'alerte lorsque vous tenterez d'enregistrer des modifications : ![](assets/en/Project/projectReload.png)  
    - **Oui** : ignore les modifications de l'éditeur et recharge
    - **Non** : enregistrer les modifications et écraser l'autre version
    - **Annuler** : ne pas enregistrer

This feature is enabled for all built-in editors (Structure, Form, Method, Settings, and Toolbox).

## Developing projects with 4D Server

### Updating the files on the server

Developing a 4D Server project is based upon the following principles:

- You create, test, and modify the project features in a local version of the files using 4D Developer. To work directly with 4D Server, you can [use 4D Developer on the same machine as the server](#using-4d-developer-on-the-same-machine). 

> It is recommended to use a standard source control tool like Git, to work with branches, to save projects at different steps, and/or to revert changes if necessary.

- 4D Server can run the *.4DProject* project file (non packed) in interpreted mode, so that remote 4D can connect and test the features. For this purpose, 4D Server automatically creates and sends the remote machines a [.4dz version](building.md#build-compiled-structure) of the project.

- An updated .4dz version of the project is automatically produced when necessary, i.e. when the project has been modified and reloaded by 4D Server. The project is reloaded:
    
    - automatically, when the 4D Server application window comes to the front of the OS or when the 4D Developer application on the same machine saves a modification (see below). 
    - when the `RELOAD PROJECT` command is executed. Calling this command is necessary for example when you have pulled a new version of the project fron the Github platform. 

### Using 4D Developer on the same machine

When 4D Developer connects to a 4D Server on the same machine, the application acts as 4D in single user mode and the design environment allows to edit project files. Each time 4D Developer performs a **Save all** action from the design environment, explicitely from **File** menu or implicitely by switching to application mode for example, 4D Server synchronously reloads project files. 4D Developer waits for 4D Server to finish reloading the project files before to continue.

However, you need to pay attention to the following behaviour differences compared to [standard project architecture](architecture.md):

- the userPreferences.{username} folder used by 4D Developer is not the one used by 4D Server in database folder but is instead a dedicated one, named "userPreferences", stored in the database system folder (same location as when opening a .4DZ project).
- the folder used by 4D Developer for derived data is not the one name "DerivedData" in project folder but is instead a dedicated one named "DerivedDataRemote" located in the database system folder.
- the catalog.4DCatalog file is not edited by 4D Developer but by 4D Server. Catalog information is synchronised using client/server requests
- the directory.json file is not edited by 4D Developer but by 4D Server. Directory information is synchronised using client/server requests
- 4D Developer use its own internal components and plug-ins instead of those inside 4D Server. 

> It is not recommended to install plug-ins or components inside 4D or 4D Server applications.