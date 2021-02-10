---
id: creating
title: Creating or opening a project
---

All projects are handled through **4D** in local or remote mode, or **4D Server**.

## Creating a project

New 4D application projects can be created from **4D** or **4D Server** (see [Developing a project](Project/developing.md)). In any case, project files are stored on the local machine.

To create a new project:

1. Launch 4D or 4D Server.
2. Select **New > Project...** from the **File** menu: <p>![](assets/en/getStart/projectCreate1.png)<p>ODER<p>(4D only) Select **Project...** from the **New** toolbar button:<p>![](assets/en/getStart/projectCreate2.png)<p>A standard **Save** dialog appears so you can choose the name and location of the 4D project's main folder.

3. Enter the name of your project folder and click **Save**.<p> This name will be used:
    - as the name of the entire project folder,
    - as the name of the .4DProject file at the first level of the "Project" folder.

    You can choose any name allowed by your operating system. However, if your project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

When you validate the **Save** dialog, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all files needed for the project into it. For more information, refer to [Architecture of a 4D Project](Project/architecture.md).

You can then start developing your project.


## Opening a local project

To open an existing project locally from 4D:

1. Select **Open a local application project** in the Welcome Wizard dialog, <p>ODER<p> Select **Open/Local Project...** from the **File** menu or the **Open** toolbar button.<p> The standard Open dialog appears.

2. Select the project's `.4dproject` file and click **Open**.<p> By default, the project is opened with its current data file. Other file types are suggested:

    - *Packed project files*: `.4dz` extension  - deployment projects
    - *Shortcut files*: `.4dlink` extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)
    - *Binary files*: `.4db` or `.4dc` extension - legacy 4D database formats

### Options

In addition to standard system options, the *Open* dialog in 4D provides two menus with specific options that are available using the **Open** button and the **Data file** menu.

- **Open** - opening mode of the project:
    - **Interpreted** or **Compiled**: These options are available when the selected project contains both [interpreted and compiled code](Concepts/interpreted.md).
    - **[Maintenance Security Center](MSC/overview.md)**: Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs.

- **Data file** - specifies the data file to be used with the project. By default, the **Current data file** option is selected.




## Project opening shortcuts

4D offers two ways to let you open projects directly and bypass the Open dialog:

- via menu options:
    -   *Menu bar* - **File** > **Open Recent Projects / {project name}**
    -   *4D Tool bar* -  Select the project from the menu associated with the **Open** button

- via preferences:
    -   Set the **At startup** general preference to **Open last used project**. 