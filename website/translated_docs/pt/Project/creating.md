---
id: creating
title: Creating or opening a project
---


## Creating a project

New 4D projects can be created from **4D** or **4D Server** (see [Developing a project](Project/developing.md)). In any cases, project files are stored on the local machine.

To create a new project:

1. Launch a 4D or a 4D Server application.
2. Select **New > Project...** from the **File** menu: ![](assets/en/getStart/projectCreate1.png)  
    OR  
    (4D only) Select **Project...** from the **New** toolbar button:

![](assets/en/getStart/projectCreate2.png)

A standard **Save** dialog box appears so that you can choose the name and location of the 4D project's main folder.

3. Enter the name of your project folder and click **Save**. This name will be used: 
    - as the name of the whole project folder,
    - as the name of the .4DProject file at the first level of the "Project" folder. 

You can choose any name allowed by your operating system. Howevern, if your project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

When you validate the dialog box, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all the files needed for the project into it. For more information, refer to [Architecture of a 4D Project](Project/architecture.md).

You can then start developing your project.

## Opening a local project

To open an existing project locally from 4D:

1. Select **Open a Local Project** in the Welcome Wizard dialog box, OR Select **Open/Local Project...** from the **File** menu or the "Open" toolbar button. The standard Open dialog box appears.

2. Select the `.4dproject` file of the project to open and click **Open**. The project is opened with its current data file by default.

Other file types are proposed:

- packed project files: `.4dz` extension - deployment projects
- shortcut files: `.4dlink` extension - store additional parameters needed for opening projects or applications (address, identifiers, etc.)
- binary files: `.4db` or `.4dc` extension - legacy 4D database formats

### Options

In addition to standard system options, the Open dialog box in 4D provides two menus of specific options that are available using the **Open** button and the **Data file** menu.

- **Open** - opening mode of the project:
    
    - **Interpreted** or **Compiled**: These two options are available when the selected project contains both [interpreted and compiled code](Concepts/interpreted.md). 
    - **[Maintenance Security Center](MSC/overview.md)**: Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs. 
- **Data file** - specifies the data file to be used with the project. By default, the **Current data file** option is selected.

## Opening a remote project

To connect for the first time to a 4D Server project via a remote 4D, you will usually use the standard connection dialog box. Thereafter, you will be able to connect directly using the **Open Recent Projects** menu or a 4DLink shortcut file ([see below](#project-opening-shortcuts)).

To connect remotely to a 4D Server project:

1. Select **Connect to 4D Server** in the Welcome Wizard dialog box, OR Select **Open/Remote Project...** from the **File** menu or the "Open" toolbar button. 

The 4D Server connection dialog box appears. This dialog box has three tabs: **Recent**, **Available** and **Custom**.

If 4D Server is connected to the same network as 4D, select **Available**. 4D Server includes a built-in TCP/IP broadcasting system that publishes by default the name of the 4D Server projects available over the network. The list is sorted by order of appearance and updated dynamically.

![](assets/en/getStart/serverConnect.png)

To connect to a server from the list, double-click on its name or select it and click the **OK** button.

> A circumflex accent (^) is placed before the name of projects published with the encryption option.

If the published project is not displayed in the **Available** list, select **Custom**. The Custom page allows connecting to a published server on the network using its network address and assigning it a customized name.

![](assets/en/getStart/serverConnect2.png)

- **Project name**: allows defining the local name of the 4D Server project. This name will be used in the **Recent** page when referring to the project.
- **Network address**: allows entering the IP address of the machine where the 4D Server was launched. If two servers are executed simultaneously on the same machine, the IP address must be followed a colon and port number, for example: 192.168.92.104:19814. By default, the publishing port of a 4D Server is 19813. This number can be modified in the Project settings. 

Once this page assigns a server, click the **OK** button will allow you to connect to the server.

> If the project is published using the encryption option, you must add a circumflex accent (^) before the name; otherwise the connection will be refused. For more information, refer to section Encrypting Client/Server Connections.

In any cases, if the connection to the server is established, the remote project will be listed in the **Recent** tab.

## Project opening shortcuts

4D offers two features that let you open projects directly, without passing through an Open dialog box:

- use **Open Recent Projects / {project name}** in the 4D **File** menu or in the menu associated with the "Open" button of the 4D tool bar.
- set the **At startup** general preference to **Open last used project**.