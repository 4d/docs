---
id: developing
title: Développer un projet
---

## Aperçu

4D projects are developed using the **4D Developer** (**4D**) application. It provides an Integrated Development Environment (IDE) for 4D projects as well as an application runtime, allowing to develop, test, and debug the project.

> Because most of the 4D project files are text files, you can use any text editor to work in them. L'accès simultané aux fichiers est géré via un gestionnaire d'accès aux fichiers (voir ci-dessous).

Multi-user development is managed via standard source control tools, which allow developers to work on different branches, and compare, merge, or revert modifications.


## Development configurations

Interpreted projects (*databaseName.4DProject*, see [Architecture of a 4D project](architecture.md)) can be opened in the following configurations:

- 4D Developer opening **local project files** - in this case, all aspects of the project are available to the developer. Project files can be created, modified, compiled, etc. The result of the development can be tested at any moment by using the **Test application** menu command from 4D Developer or using the [integrated web server](WebServer/webServerObject.md).
- 4D Developer connection from the **same machine as 4D Server** - in this case, development is supported the same as local projects. This feature allows you to develop a client/server application in the same context as the deployment context ()[detailed below](#developing-projects-with-4d-server)).
- 4D Developer connection from a **remote machine** - in this case, 4D Server sends a .4dz version of the project ([compressed format](building.md#build-compiled-structure)) to 4D Developer. As a consequence, all structure files are read-only. This feature is useful for testing purposes.


## Developing projects with 4D Server

### Updating project files on the server

Developing a 4D Server project is based upon the following principles:

- You create, test, and modify the project features in a local version of the files using 4D Developer. To work directly with 4D Server, you can [use 4D Developer on the same machine as the server](#using-4d-developer-on-the-same-machine).

> It is recommended to use a standard source control tool (e.g. Git) in order to work with branches, to save projects at different steps, and/or to revert changes if necessary.

- 4D Server can run the *.4DProject* project file (not compressed) in interpreted mode, so that remote 4D can connect and test the features. For this purpose, 4D Server automatically creates and sends the remote machines a [.4dz version](building.md#build-compiled-structure) of the project.

- An updated .4dz version of the project is automatically produced when necessary, *i.e.* when the project has been modified and reloaded by 4D Server. The project is reloaded:
    - automatically, when the 4D Server application window comes to the front of the OS or when the 4D Developer application on the same machine saves a modification (see below).
    - when the `RELOAD PROJECT` command is executed. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform.


### Updating project files on remote machines

When an updated .4dz version of the project has been produced on 4D Server, connected remote 4D machines must log out and reconnect to 4D Server in order to benefit from the updated version.



### Using 4D Developer on the same machine

When 4D Developer connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. Each time 4D Developer performs a **Save all** action from the design environment (explicitly from **File** menu or implicitly by switching to application mode for example), 4D Server synchronously reloads project files. 4D Developer waits for 4D Server to finish reloading the project files before it continues.

However, you need to pay attention to the following behavior differences compared to [standard project architecture](architecture.md):

- the userPreferences.{username} folder used by 4D Developer is not the same folder used by 4D Server in the database folder. Instead, it is a dedicated folder, named "userPreferences", stored in the database system folder (i.e., the same location as when opening a .4dz project).
- the folder used by 4D Developer for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the database system folder.
- the catalog.4DCatalog file is not edited by 4D Developer but by 4D Server. Catalog information is synchronised using client/server requests
- the directory.json file is not edited by 4D Developer but by 4D Server. Directory information is synchronised using client/server requests
- 4D Developer uses its own internal components and plug-ins instead of those in 4D Server.

> It is not recommended to install plug-ins or components in 4D or 4D Server applications.


## File saving

When working on a project in 4D, you can use built-in 4D editors to create, modify, or save structure items, methods, forms, etc. Modifications are saved to disk when you select a **Save** menu item, or when the editor's window loses or gets the focus.

Les éditeurs utilisant des fichiers sur le disque, d'éventuels conflits peuvent se produire si le même fichier est modifié voire supprimé de différents endroits. Par exemple, si la même méthode est modifiée dans une fenêtre d'éditeur de méthode *et* dans un éditeur de texte, la sauvegarde des deux modifications entraînera un conflit.

4D Developer comprend un gestionnaire d’accès aux fichiers permettant de contrôler les accès simultanés :

- if an open file is read-only at the OS level, a locked icon is displayed in the editor: ![](assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog when trying to save the changes:![](assets/en/Project/projectReload.png)
    - **Yes**: discard editor changes and reload the modified version
    - **Non** : enregistrer les modifications et écraser l'autre version
    - **Annuler** : ne pas enregistrer

This feature is enabled for all built-in 4D editors (Structure, Form, Method, Settings, and Toolbox).
