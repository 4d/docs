---
id: creating
title: Trabajar con un proyecto
---

4D projects are created and developed using the **4D** application, which provides a comprehensive Integrated Development Environment (IDE). **4D Server** can also create new, empty projects.

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.


## Crear un proyecto

New 4D application projects can be created from **4D** or **4D Server**. In any case, project files are stored on the local machine.

Para crear un nuevo proyecto:

1. Lance 4D o 4D Server.
2. Seleccione **Nuevo > Proyecto** desde el menú **Archivo**: <p>![](assets/en/getStart/projectCreate1.png)<p>O<p>(4D only) Select **Project...** from the **New** toolbar button:<p>![](assets/en/getStart/projectCreate2.png)<p>A standard **Save** dialog appears so you can choose the name and location of the 4D project's main folder.

3. Introduzca el nombre de su carpeta de proyecto y haga clic en **Guardar**.<p> Este nombre se utilizará:
    - as the name of the entire project folder,
    - como nombre del archivo .4DProject en el primer nivel de la carpeta "Project".

    Puedes elegir cualquier nombre permitido por su sistema operativo. However, if your project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

When you validate the **Save** dialog, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all files needed for the project into it. Para más información, consulte [Arquitectura de un proyecto 4D](Project/architecture.md).

You can then start developing your project.

## Abrir un proyecto

Para abrir un proyecto existente desde 4D:

1. Select **Open a local application project** in the Welcome Wizard dialog, <p>O<p> Select **Open/Local Project...** from the **File** menu or the **Open** toolbar button.<p> The standard Open dialog appears.

2. Select the project's `.4dproject` file and click **Open**.<p> By default, the project is opened with its current data file. Other file types are suggested:

    - *Packed project files*: `.4dz` extension  - deployment projects
    - *Shortcut files*: `.4DLink` extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)
    - *Binary files*: `.4db` or `.4dc` extension - legacy 4D database formats

### Opciones

In addition to standard system options, the *Open* dialog in 4D provides two menus with specific options that are available using the **Open** button and the **Data file** menu.

- **Open** - opening mode of the project:
    - **Interpreted** or **Compiled**: These options are available when the selected project contains both [interpreted and compiled code](Concepts/interpreted.md).
    - **[Maintenance Security Center](MSC/overview.md)**: Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs.

- **Data file** - specifies the data file to be used with the project. By default, the **Current data file** option is selected.

## Atajos de apertura de los proyectos

4D offers several ways to open projects directly and bypass the Open dialog:

- mediante las opciones de menú:
    -   *Menu bar* - **File** > **Open Recent Projects / {project name}**
    -   *4D Tool bar* -  Select the project from the menu associated with the **Open** button

- vía las preferencias:
    -   Set the **At startup** general preference to **Open last used project**.

- using a `.4DLink` file.

### Opening a Project with a 4DLink file

You can use a [`.4DLink` file](#about-4DLink-files) to launch the 4D application and open the target 4D project. There are two ways to do this:

- double-click or drag and drop the `.4DLink` file onto the 4D application
- go to **File** > **Open Recent Projects** and select a project

![open-recent-projects](assets/en/Project/4Dlinkfiles.png)

A .4DLink file of "remote project" type can be copied and used on several machines.
> It's also possible to select a 4DLink file in the 4D and 4D Server opening dialog box (opening local project only).

## Sobre 4DLink Files

Files with the `.4DLink` extension are XML files that contain parameters intended to automate and simplify opening local or remote 4D projects.

`.4DLink` files can save the address of a 4D project as well as its connection identifiers and opening mode, saving you time when opening projects.

4D automatically generates a `.4DLink` file when a local project is opened for the first time or when connecting to a server for the first time. The file is stored in the local preferences folder at the following location:

- Windows 7 and higher: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- OS X: Users/UserName/Library/Application Support/4D/Favorites vXX/

XX represents the version number of the application. For example, "Favorites v19" for 4D v19.

That folder is divided into two subfolders:
- the **Local** folder contains the `.4DLink` files that can be used to open local projects
- the **Remote** folder contains the `.4DLink` files of recent remote projects

`.4DLink` files can also be created with an XML editor.

4D provides a DTD describing the XML keys that can be used to build a `.4DLink` file. This DTD is named database_link.dtd and is found in the \Resources\DTD\ subfolder of the 4D application.


## Guardado de archivos

Cuando trabaja en un proyecto en 4D, puede utilizar los editores integrados de 4D para crear, modificar o guardar elementos de la estructura, los métodos, los formularios, etc. Las modificaciones se guardan en el disco cuando se selecciona una opción de menú **Guardar**, o cuando la ventana del editor pierde o recupera el foco.

Dado que los editores utilizan archivos en el disco, podrían producirse conflictos si se modifica el mismo archivo o incluso se borra desde diferentes ubicaciones. Por ejemplo, si se edita el mismo método en una ventana del editor de métodos *y* en un editor de texto, al guardar ambas modificaciones se producirá un conflicto.

El marco de desarrollo 4D incluye un gestor de acceso a los archivos para controlar los accesos simultáneos:

- si un archivo abierto está en sólo lectura a nivel del sistema operativo, se muestra un icono de bloqueo en el editor: ![](assets/en/Project/lockicon.png)
- si un archivo abierto se edita simultáneamente desde diferentes ubicaciones, 4D muestra un diálogo de alerta al intentar guardar los cambios:

![](assets/en/Project/projectReload.png)
    - **Sí**: ignorar los cambios del editor y volver a cargar la versión modificada
    - **No**: guardar los cambios y sobrescribir la otra versión
    - **Cancelar**: no guardar

Esta funcionalidad está activa para todos los editores 4D integrados (Estructura, Formulario, Método, Parámetros y Caja de herramientas).