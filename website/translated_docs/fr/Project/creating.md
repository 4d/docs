---
id: creating
title: Créer ou ouvrir un projet
---


## Créer un projet

New 4D application projects can be created from **4D** or **4D Server** (see [Developing a project](Project/developing.md)). In any case, project files are stored on the local machine.

Pour créer un nouveau projet :

1. Lancez 4D ou 4D Server.
2. Sélectionnez **Nouveau> Projet...** depuis le menu **Fichier** : <p>![](assets/en/getStart/projectCreate1.png)<p>OU<p>(4D uniquement) Sélectionnez **Projet...** depuis le bouton de la barre d'outils **Nouveau** :<p>![](assets/en/getStart/projectCreate2.png)<p>Un dialogue standard **Sauvegarde** apparaît, de façon à ce que vous choisissiez le nom et l'emplacement du dossier principal du projet 4D.

3. Saisissez le nom du dossier de projet et cliquez sur **Sauvegarder**.<p> Ce nom sera utilisé :
    - comme le nom du dossier du projet,
    - comme nom du fichier .4DProject au premier niveau du dossier "Project".

    Vous pouvez choisir n'importe quel nom autorisé par votre système d'exploitation. Toutefois, si votre projet est destiné à fonctionner sur d'autres systèmes ou à être enregistré via un outil de gestion de version, vous devez tenir compte de leurs recommandations de dénomination spécifiques.

When you validate the **Save** dialog, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all files needed for the project into it. Pour plus d'informations, voir [Architecture d'un projet 4D](Project/architecture.md).

Vous pouvez alors commencer à développer votre projet.


## Ouvrir un projet local

Pour ouvrir un projet existant en local depuis 4D :

1. Sélectionnez **Ouvrir un projet d'application local** dans la boite de dialogue de l'Assistant de bienvenue <p>OU<p> Sélectionnez **Ouvrir > Projet local...** à partir du menu **Fichier** ou du bouton **Ouvrir** de la barre d'outils.<p> La boîte de dialogue standard d’ouverture de fichiers apparaît.

2. Sélectionnez le fichier `.4dproject` du projet et cliquez sur **Ouvrir**.<p> By default, the project is opened with its current data file. Other file types are suggested:

    - *Packed project files*: `.4dz` extension  - deployment projects
    - *Shortcut files*: `.4dlink` extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)
    - *Binary files*: `.4db` or `.4dc` extension - legacy 4D database formats

### Options

In addition to standard system options, the *Open* dialog in 4D provides two menus with specific options that are available using the **Open** button and the **Data file** menu.

- **Open** - opening mode of the project:
    - **Interpreted** or **Compiled**: These options are available when the selected project contains both [interpreted and compiled code](Concepts/interpreted.md).
    - **[Maintenance Security Center](MSC/overview.md)**: Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs.

- **Data file** - specifies the data file to be used with the project. By default, the **Current data file** option is selected.


## Opening a remote project

The first time you connect to a 4D Server project via a remote 4D, you will usually use the standard connection dialog. Thereafter, you will be able to connect directly using the **Open Recent Projects** menu or a 4DLink shortcut file ([see below](#project-opening-shortcuts)).

To connect remotely to a 4D Server project:

1. Select **Connect to 4D Server** in the Welcome Wizard dialog, <p>OU<p> Select **Open/Remote Project...** from the **File** menu or the **Open** toolbar button.

The 4D Server connection dialog appears. This dialog has three tabs: **Recent**, **Available**, and **Custom**.

If 4D Server is connected to the same network as the remote 4D, select **Available**. 4D Server includes a built-in TCP/IP broadcasting system that, by default, publishes the name of the 4D Server projects available over the network. The list is sorted by order of appearance and updated dynamically.

![](assets/en/getStart/serverConnect.png)

To connect to a server from the list, double-click on its name or select it and click the **OK** button.

> A circumflex accent (^) is placed before the name of projects published with the encryption option enabled.

If the published project is not displayed in the **Available** list, select **Custom**. The Custom page allows you to connect to a published server on the network using its network address and assigning it a customized name.

![](assets/en/getStart/serverConnect2.png)


- **Project name**: Defines the local name of the 4D Server project. This name will be used in the **Recent** page when referring to the project.
- **Network address**: The IP address of the machine where the 4D Server was launched. <p>If two servers are executed simultaneously on the same machine, the IP address must be followed by a colon and port number, for example: `192.168.92.104:19814`. <p>By default, the publishing port of a 4D Server is 19813. This number can be modified in the Project settings.

Once this page assigns a server, clicking the **OK** button will allow you to connect to the server.

> If the project is published with the encryption option enabled, you must add a circumflex accent (^) before the name, otherwise the connection will be refused. For more information, refer to the Encrypting Client/Server Connections section.

Once a connection to the server has been established, the remote project will be listed on the **Recent** tab.



## Raccourcis d’ouverture des projets

4D propose deux façons d’ouvrir directement des projets, sans passer par la boîte de dialogue d’ouverture :

- via les options du menu :
    -   *Barre de menu* - **Fichier** > **Ouvrir Projets récents / {project name}**
    -   *Barre d'outils 4D* -  Sélectionnez le projetà partir du menu associé au bouton **Ouvrir**

- via les préférences :
    -   Set the **At startup** general preference to **Open last used project**. 