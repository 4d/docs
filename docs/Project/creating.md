---
id: creating
title: Creating a 4D project
---

## Overview

New 4D projects can be created from **4D Developer** or **4D Server** (see [Developing a project](developing.md)).

- 4D Developer - Development can only be done locally with 4D Developer (or any text-based tool). 
- 4D Server - Projects opened by 4D Server are available in read-only mode to remote 4D Developer applications, for testing purposes only (except when the [4D Developer and the 4D Server are on the same machine](developing.md#using-4d-developer-on-the-same-machine)).

For deployment, 4D projects are provided as .4dz files (compressed files). For more information, please refer to [Building a project package](building.md).

> You can create project databases by exporting existing binary databases. See "Export from a 4D database" on [doc.4d.com](https://doc.4d.com). 

## Creating the project files

To create a new database project:

1. Launch a 4D Developer or a 4D Server application.
2. Select **New > Database Project...** from the **File** menu: 
![](assets/en/Project/project-create1.png)   
OR
(4D Developer only) Select **Database Project...** from the **New** toolbar button: ![](assets/en/Project/projectCreate2.png)
A standard **Save** dialog box appears so that you can choose the name and location of the 4D database project's main folder.
1. Enter the name of your project folder and click **Save**.
This name will be used:
	- as the name of the main project folder (named "MyFirstProject" in the [Architecture of a 4D Project](Project/architecture.md) section example),
	- as the name of the .4DProject file at the first level of the "Project" folder. You can choose any name allowed by your operating system. *Warning:* if your database project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

When you validate the dialog box, 4D closes the current database (if any), creates a project folder at the indicated location, and puts all the files needed for the database project into it. For more information, refer to [Architecture of a 4D Project](Project/architecture.md).

