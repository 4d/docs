---
id: start
title: Starting with 4D projects
---

Your 4D application can open projects **locally** or **remotely**:

- **locally** - project files are stored on the same machine as the 4D application; they are executed and edited by a single 4D application. 
- **remotely** - project files are stored on the 4D Server machine; 4D applications connect to the server and open the project in read-only mode (for testing purpose).

> A project opened by 4D Server is editable by 4D if [both applications are on the same machine](developing.md#using-4d-developer-on-the-same-machine).  

![](assets/en/getStart/localremote.png)

When you select the project to open, you also select the mode to be used. 


## Creating a project

New 4D projects can be created from **4D** or **4D Server** (see [Developing a project](developing.md)).

To create a new  project:

1. Launch a 4D or a 4D Server application.
2. Select **New > Project...** from the **File** menu: 
/// ![](assets/en/Project/project-create1.png)   
OR
(4D only) Select **Project...** from the **New** toolbar button:
/// ![](assets/en/Project/projectCreate2.png)
A standard **Save** dialog box appears so that you can choose the name and location of the 4D project's main folder.
1. Enter the name of your project folder and click **Save**.
This name will be used:
	- as the name of the main project folder (named "MyFirstProject" in the [Architecture of a 4D Project](Project/architecture.md) section example),
	- as the name of the .4DProject file at the first level of the "Project" folder. You can choose any name allowed by your operating system. *Warning:* if your project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

When you validate the dialog box, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all the files needed for the project into it. For more information, refer to [Architecture of a 4D Project](Project/architecture.md).

You can now start developing your project. 

Openin