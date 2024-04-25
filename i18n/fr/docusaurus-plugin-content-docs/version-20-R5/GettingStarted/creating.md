---
id: creating
title: Créer ou ouvrir un projet
---

4D projects are created and developed using the **4D** application, which provides a comprehensive Integrated Development Environment (IDE). **4D Server** can also create new, empty projects.

## Créer un projet

New 4D application projects can be created from **4D** or **4D Server**. Dans les deux cas, les fichiers de projet sont stockés sur la machine locale.

Pour créer un nouveau projet :

1. Lancez 4D ou 4D Server.

2. Effectuez l'une des opérations suivantes :
   - Select **New > Project...** from the **File** menu: ![](../assets/en/getStart/projectCreate1.png)
   - (4D only) Select **Project...** from the **New** toolbar button:<p>![](../assets/en/getStart/projectCreate2.png)</p>A standard **Save** dialog appears so you can choose the name and location of the 4D project's main folder.

3. Enter the name of your project folder and click **Save**. Ce nom sera utilisé :

   - comme nom du dossier du projet,
   - as the name of the .4DProject file at the first level of the ["Project" folder](../Project/architecture.md#project-folder).

Vous pouvez choisir n'importe quel nom autorisé par votre système d'exploitation. Toutefois, si votre projet est destiné à fonctionner sur d'autres systèmes ou à être enregistré via un outil de source control, vous devez tenir compte de leurs recommandations de dénomination spécifiques.

When you validate the **Save** dialog, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all files needed for the project into it. For more information, refer to [Architecture of a 4D Project](Project/architecture.md).

Vous pouvez alors commencer à développer votre projet.

## Ouvrir un projet

Pour ouvrir un projet existant depuis 4D :

1. Effectuez l'une des opérations suivantes :

   - Select **Open/Local Project...** from the **File** menu or the **Open** toolbar button.
   - Select **Open a local application project** in the Welcome Wizard dialog

La boîte de dialogue standard Ouvrir apparaît.

2. Select the project's `.4dproject` file (located inside the ["Project" folder of the project](../Project/architecture.md#project-folder)) and click **Open**.

   Par défaut, le projet est ouvert avec son fichier de données courant. D'autres types de fichiers sont suggérés :

   - _Packed project files_: `.4dz` extension  - deployment projects
   - _Shortcut files_: `.4DLink` extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)
   - _Binary files_: `.4db` or `.4dc` extension - legacy 4D database formats

### Options

In addition to standard system options, the _Open_ dialog in 4D provides two menus with specific options that are available using the **Open** button and the **Data file** menu.

- **Open** - opening mode of the project:
  - **Interpreted** or **Compiled**: These options are available when the selected project contains both [interpreted and compiled code](Concepts/interpreted.md).
  - **[Maintenance Security Center](MSC/overview.md)**: Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs.

- **Data file** - specifies the data file to be used with the project. By default, the **Current data file** option is selected.

## Raccourcis d’ouverture des projets

4D offre plusieurs façons d'ouvrir des projets directement sans devoir utiliser la boîte de dialogue Ouvrir :

- via des options de menu :
  - _Menu bar_ - **File** > **Open Recent Projects / {project name}**
  - _4D Tool bar_ -  Select the project from the menu associated with the **Open** button

- via les préférences :
  - Set the **At startup** general preference to **Open last used project**.

- using a `.4DLink` file.

### Ouvrir un projet avec un fichier 4DLink

You can use a [`.4DLink` file](#about-4DLink-files) to launch the 4D application and open the target 4D project. Il existe deux façons de procéder :

- double-click or drag and drop the `.4DLink` file onto the 4D application
- go to **File** > **Open Recent Projects** and select a project

![open-recent-projects](../assets/en/Project/4Dlinkfiles.png)

Un fichier .4DLink de type "projet distant" peut être copié et utilisé sur plusieurs machines.

> Il est également possible de sélectionner un fichier 4DLink dans la boîte de dialogue d'ouverture de 4D et 4D Server (ouverture de projet local uniquement).

## À propos des fichiers 4DLink

Files with the `.4DLink` extension are XML files that contain parameters intended to automate and simplify opening local or remote 4D projects.

`.4DLink` files can save the address of a 4D project as well as its connection identifiers and opening mode, saving you time when opening projects.

4D automatically generates a `.4DLink` file when a local project is opened for the first time or when connecting to a server for the first time. Le fichier est stocké dans le dossier des préférences locales à l'emplacement suivant :

- Windows: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- macOS : Users/UserName/Library/Application Support/4D/Favorites vXX/

XX représente le numéro de version de l'application. Par exemple, "Favoris v19" pour 4D v19.

Ce dossier est divisé en deux sous-dossiers :

- the **Local** folder contains the `.4DLink` files that can be used to open local projects
- the **Remote** folder contains the `.4DLink` files of recent remote projects

`.4DLink` files can also be created with an XML editor.

4D provides a DTD describing the XML keys that can be used to build a `.4DLink` file. Cette DTD est nommée database_link.dtd et se trouve dans le sous-dossier `\Resources\DTD\` de l'application 4D.
