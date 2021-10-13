---
id: creating
title: Working with a project
---

4D projects are created and developed using the **4D** application, which provides a comprehensive Integrated Development Environment (IDE). **4D Server** can also create new, empty projects.

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.


## Crear un proyecto

New 4D application projects can be created from **4D** or **4D Server**. In any case, project files are stored on the local machine.

To create a new project:

1. Lance 4D o 4D Server.
2. Select **New > Project...** from the **File** menu: <p>![](assets/en/getStart/projectCreate1.png)<p>O<p>(4D only) Select **Project...** from the **New** toolbar button:<p>![](assets/en/getStart/projectCreate2.png)<p>A standard **Save** dialog appears so you can choose the name and location of the 4D project's main folder.

3. Enter the name of your project folder and click **Save**.<p> Este nombre se utilizará:
    - as the name of the entire project folder,
    - as the name of the .4DProject file at the first level of the "Project" folder.

    You can choose any name allowed by your operating system. However, if your project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

When you validate the **Save** dialog, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all files needed for the project into it. Para más información, consulte [Arquitectura de un proyecto 4D](Project/architecture.md).

You can then start developing your project.


## Abrir un proyecto

To open an existing project from 4D:

1. Select **Open a local application project** in the Welcome Wizard dialog, <p>O<p> Select **Open/Local Project...** from the **File** menu or the **Open** toolbar button.<p> The standard Open dialog appears.

2. Select the project's `.4dproject` file and click **Open**.<p> By default, the project is opened with its current data file. Other file types are suggested:

    - *Packed project files*: `.4dz` extension  - deployment projects
    - *Shortcut files*: `.4dlink` extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)
    - *Binary files*: `.4db` or `.4dc` extension - legacy 4D database formats

### Opciones

In addition to standard system options, the *Open* dialog in 4D provides two menus with specific options that are available using the **Open** button and the **Data file** menu.

- **Open** - opening mode of the project:
    - **Interpreted** or **Compiled**: These options are available when the selected project contains both [interpreted and compiled code](Concepts/interpreted.md).
    - **[Maintenance Security Center](MSC/overview.md)**: Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs.

- **Data file** - specifies the data file to be used with the project. By default, the **Current data file** option is selected.




## Project opening shortcuts

4D offers two ways to let you open projects directly and bypass the Open dialog:

- mediante las opciones de menú:
    -   *Menu bar* - **File** > **Open Recent Projects / {project name}**
    -   *4D Tool bar* -  Select the project from the menu associated with the **Open** button

- vía las preferencias:
    -   Set the **At startup** general preference to **Open last used project**.


## Guardado de archivos

When working on a project in 4D, you can use built-in 4D editors to create, modify, or save structure items, methods, forms, etc. Modifications are saved to disk when you select a **Save** menu item, or when the editor's window loses or gets the focus.

Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. For example, if the same method is edited in a method editor window *and* in a text editor, saving both modifications will result in a conflict.

The 4D development framework includes a file access manager to control concurrent access:

- if an open file is read-only at the OS level, a locked icon is displayed in the editor: ![](assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog when trying to save the changes: ![](assets/en/Project/projectReload.png)
    - **Yes**: discard editor changes and reload the modified version
    - **No**: save changes and overwrite the other version
    - **Cancel**: do not save

This feature is enabled for all built-in 4D editors (Structure, Form, Method, Settings, and Toolbox).