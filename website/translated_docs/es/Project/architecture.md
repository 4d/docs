---
id: architecture
title: Arquitectura de un proyecto
---

A 4D project is made of several folders and files, stored within a single parent application folder (package folder). Por ejemplo:

- MyProject
    - Componentes
    - Datos
        - Logs
        - Settings
    - Documentation
    - Plugins
    - Project
        - DerivedData
        - Sources
        - Trash
    - Resources
    - Settings
    - userPreferences.username
    - WebFolder

> If your project has been converted from a binary database, additional folders may be present. See "Converting databases to projects" on [doc.4d.com](https://doc.4d.com).


## Carpeta Project

The Project folder typically contains the following hierarchy:

- *applicationName*.4DProject file
- Sources
    + Clases
    + DatabaseMethods
    + Métodos
    + Formularios
    + TableForms
    + Triggers
- DerivedData
- Trash (si procede)


### *applicationName*.4DProject file

Project development file, used to designate and launch the project. This file can be opened by:

- 4D
- 4D Server (read-only, see [Opening a remote project](Desktop/clientServer.md#opening-a-remote-project))

> In 4D projects, development is done with 4D and multi-user development is managed through source control tools. 4D Server can open .4DProject files for testing purposes.


### Carpeta Sources

| Contenido               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                         | Formato |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog       | Table and field definitions                                                                                                                                                                                                                                                                                                                                                                                         | XML     |
| folders.json            | Explorer folder definitions                                                                                                                                                                                                                                                                                                                                                                                         | JSON    |
| menus.json              | Definiciones de los menús                                                                                                                                                                                                                                                                                                                                                                                           | JSON    |
| settings.4DSettings     | *Structure* database settings. They are not taken into account if *[user settings](#settings-folder-1)* or *[user settings for data](#settings-folder)* are defined.<p>**Warning**: In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use *user settings* or *user settings for data* to define custom settings. | XML     |
| tips.json               | Mensajes de ayuda definidos                                                                                                                                                                                                                                                                                                                                                                                         | JSON    |
| lists.json              | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                    | JSON    |
| filters.json            | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                   | JSON    |
| styleSheets.css         | Hojas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                 | CSS     |
| styleSheets_mac.css     | Mac css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                                               | CSS     |
| styleSheets_windows.css | Windows css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                                           | CSS     |


#### Carpeta DatabaseMethods

| Contenido                | Descripción                                                         | Formato |
| ------------------------ | ------------------------------------------------------------------- | ------- |
| *databaseMethodName*.4dm | Database methods defined in the project. Un archivo por método base | texto   |

#### Carpeta Methods

| Contenido        | Descripción                                                   | Formato |
| ---------------- | ------------------------------------------------------------- | ------- |
| *methodName*.4dm | Project methods defined in the project. Un archivo por método | texto   |

#### Carpeta Classes

| Contenido       | Descripción                                                                                                                        | Formato |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *className*.4dm | User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name | texto   |


#### Carpeta Forms

| Contenido                                 | Descripción                                  | Formato |
| ----------------------------------------- | -------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Project form description                     | json    |
| *formName*/method.4dm                     | Método formulario proyecto                   | texto   |
| *formName*/Images/*pictureName*           | Project form static picture                  | imagen  |
| *formName*/ObjectMethods/*objectName*.4dm | Métodos objeto. Un archivo por método objeto | texto   |

#### Carpeta TableForms

| Contenido                                            | Descripción                                              | Formato |
| ---------------------------------------------------- | -------------------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | Input table form description (n is the table number)     | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Input table form static pictures                         | imagen  |
| *n*/Input/*formName*/method.4dm                      | Método del formulario de entrada de la tabla             | texto   |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Input form object methods. Un archivo por método objeto  | texto   |
| *n*/Output/*formName*/form.4DForm                    | Output table form description (n is the table number)    | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Output table form static pictures                        | imagen  |
| *n*/Output/*formName*/method.4dm                     | Output table form method                                 | texto   |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Output form object methods. Un archivo por método objeto | texto   |

#### Carpeta Triggers

| Contenido     | Descripción                                                                                          | Formato |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| table_*n*.4dm | Trigger methods defined in the project. Un archivo de activación por tabla (n es el número de tabla) | texto   |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools.


### Carpeta Trash

The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:

- Métodos
- Formularios
- TableForms

Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder.


### Carpeta DerivedData

The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder.

## Carpeta Libraries

> This folder is used on macOS only.

The Librairies folder contains the file resulting from a compilation with the [Silicon compiler](compiler.md#silicon-compiler) on macOS.

## Carpeta Resources

The Resources folder contains any custom project resource files and folders. En esta carpeta puede colocar todos los archivos necesarios para la traducción o personalización de la interfaz de la aplicación (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos automáticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e imágenes estáticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. Ver el *manual 4D Server*.

| Contenido             | Descripción                                                                                                                                           | Formato |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Project resource files and folders                                                                                                                    | varios  |
| Images/Library/*item* | Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name. | imagen  |

(*) sólo si el proyecto fue exportado desde una base binaria .4db.


## Carpeta Data

La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos.

| Contenido    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Formato |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the *Open data file* dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                                                                                                                                                                                                                                                                                    | binario |
| data.journal | Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user’s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. | binario |
| data.match   | (internal) UUID matching table number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | XML     |

(*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar.

### Carpeta Settings

This folder contains **user settings files for data** used for application administration.

> These settings take priority over **[user settings files](#settings-folder-1)** and **[structure settings](#sources-folder)** files.

| Contenido           | Descripción                                                                                                                                                                                                         | Formato |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Description of 4D groups, users, and their access rights when the application is run with this data file.                                                                                                           | JSON    |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md) when the database is run with this data file. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML     |
| settings.4DSettings | Custom database settings for this data file.                                                                                                                                                                        | XML     |


### Carpeta Logs

La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:

- database conversion,
- peticiones del servidor web,
- backup/restore activities journal (*Backup Journal\[xxx].txt*, see [Backup journal](Backup/backup.md#backup-journal))
- depuración de comandos,
- 4D Server requests (generated on client machines and on the server).

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html) command) for maintenance log files and in cases where data folder is read-only.

## Carpeta Settings

This folder contains **user settings files** used for application administration.

> These settings take priority over **[structure settings](#sources-folder)** files. However, if a **[user settings file for data](#settings-folder)** exists, it takes priority over user settings file.

| Contenido           | Descripción                                                                                                                                                                                                                                                                                                                          | Formato |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| directory.json      | Description of 4D groups and users for the application, as well as their access rights                                                                                                                                                                                                                                               | JSON    |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the *backup journal*. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML     |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML     |


## Carpeta userPreferences.*userName*

Esta carpeta contiene archivos que memorizan las configuraciones del usuario, por ejemplo, el punto de ruptura o las posiciones de las ventanas. Puede simplemente ignorar esta carpeta. Contiene, por ejemplo:

| Contenido                  | Descripción                                                 | Formato |
| -------------------------- | ----------------------------------------------------------- | ------- |
| methodPreferences.json     | Current user method editor preferences                      | JSON    |
| methodWindowPositions.json | Current user window positions for methods                   | JSON    |
| formWindowPositions.json   | Current user window positions for forms                     | JSON    |
| workspace.json             | List of opened windows; on macOS, order of tab windows      | JSON    |
| debuggerCatches.json       | Caught calls to commands                                    | JSON    |
| recentTables.json          | Lista ordenada de tablas                                    | JSON    |
| preferences.4DPreferences  | Ruta de datos actual y posiciones de la ventana principal   | XML     |
| CompilerIntermediateFiles  | Intermediate files resulting from Apple Silicon compilation | Folder  |


## Carpeta Components

This folder contains the components to be available in the application project. It must be stored at the same level as the Project folder.

> An application project can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host project. - for deployment: [build the component](Desktop/building.md#build-component) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host application.


## Carpeta Plugins

This folder contains the plug-ins to be available in the application project. It must be stored at the same level as the Project folder.


## Documentation folder

This folder contains all documentation files (.md) created for the project elements such as classes, methods, or forms. Documentation files are managed and displayed in the 4D Explorer.

For more information, refer to [Documenting a project](Project/documentation.md).

## WebFolder

Defaut root folder of the 4D Web server for pages, pictures, etc. It is automatically created when the Web server is launched for the first time. 