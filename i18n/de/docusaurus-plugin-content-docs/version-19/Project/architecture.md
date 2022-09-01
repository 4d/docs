---
id: architecture
title: Architecture of a project
---

A 4D project is made of several folders and files, stored within a single parent application folder (package folder). Beispiel:

- MyProject
  - Komponenten
  - Data
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

## Project folder

The Project folder typically contains the following hierarchy:

- *applicationName*.4DProject file
- Sources
  - Klassen
  - DatabaseMethods
  - Methods
  - Forms
  - TableForms
  - Trigger
- DerivedData
- Trash (falls vorhanden)

### *applicationName*.4DProject file

Project development file, used to designate and launch the project. This file can be opened by:

- 4D
- 4D Server (read-only, see [Opening a remote project](Desktop/clientServer.md#opening-a-remote-project))

> In 4D projects, development is done with 4D and multi-user development is managed through source control tools. 4D Server can open .4DProject files for testing purposes.

### Sources folder

| Inhalt                  | Beschreibung                                                                                                                                                                      | Format angezeigt |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| catalog.4DCatalog       | Table and field definitions                                                                                                                                                       | XML              |
| folders.json            | Explorer folder definitions                                                                                                                                                       | JSON             |
| menus.json              | Menu definitions                                                                                                                                                                  | JSON             |
| settings.4DSettings     | *Structure* database settings. *Structure* database settings. For deployment needs, it is necessary to use *user settings* or *user settings for data* to define custom settings. | XML              |
| tips.json               | Defined tips                                                                                                                                                                      | JSON             |
| lists.json              | Defined lists                                                                                                                                                                     | JSON             |
| filters.json            | Defined filters                                                                                                                                                                   | JSON             |
| styleSheets.css         | CSS style sheets                                                                                                                                                                  | CSS              |
| styleSheets_mac.css     | Mac css style sheets (from converted binary database)                                                                                                                             | CSS              |
| styleSheets_windows.css | Windows css style sheets (from converted binary database)                                                                                                                         | CSS              |

#### DatabaseMethods folder

| Inhalt                   | Beschreibung                                                          | Format angezeigt |
| ------------------------ | --------------------------------------------------------------------- | ---------------- |
| *databaseMethodName*.4dm | Database methods defined in the project. One file per database method | Text             |

#### Methods folder

| Inhalt           | Beschreibung                                                | Format angezeigt |
| ---------------- | ----------------------------------------------------------- | ---------------- |
| *methodName*.4dm | Project methods defined in the project. One file per method | Text             |

#### Classes folder

| Inhalt          | Beschreibung                                                                                                                       | Format angezeigt |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| *className*.4dm | User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name | Text             |

#### Forms folder

| Inhalt                                    | Beschreibung                               | Format angezeigt |
| ----------------------------------------- | ------------------------------------------ | ---------------- |
| *formName*/form.4DForm                    | Project form description                   | json             |
| *formName*/method.4dm                     | Project form method                        | Text             |
| *formName*/Images/*pictureName*           | Project form static picture                | picture          |
| *formName*/ObjectMethods/*objectName*.4dm | Object methods. One file per object method | Text             |

#### TableForms folder

| Inhalt                                               | Beschreibung                                           | Format angezeigt |
| ---------------------------------------------------- | ------------------------------------------------------ | ---------------- |
| *n*/Input/*formName*/form.4DForm                     | Input table form description (n is the table number)   | json             |
| *n*/Input/*formName*/Images/*pictureName*            | Input table form static pictures                       | picture          |
| *n*/Input/*formName*/method.4dm                      | Input table form method                                | Text             |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Input form object methods. One file per object method  | Text             |
| *n*/Output/*formName*/form.4DForm                    | Output table form description (n is the table number)  | json             |
| *n*/Output/*formName*/Images/*pictureName*           | Output table form static pictures                      | picture          |
| *n*/Output/*formName*/method.4dm                     | Output table form method                               | Text             |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Output form object methods. One file per object method | Text             |

#### Triggers folder

| Inhalt        | Beschreibung                                                                               | Format angezeigt |
| ------------- | ------------------------------------------------------------------------------------------ | ---------------- |
| table_*n*.4dm | Trigger methods defined in the project. One trigger file per table (n is the table number) | Text             |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools.

### Trash folder

The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:

- Methods
- Forms
- TableForms

Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder.

### DerivedData folder

The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder.

## Libraries folder

> This folder is used on macOS only.

The Librairies folder contains the file resulting from a compilation with the [Silicon compiler](compiler.md#silicon-compiler) on macOS.

## Resources folder

The Resources folder contains any custom project resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the *4D Server Reference Manual*.

| Inhalt                | Beschreibung                                                                                                                                          | Format angezeigt |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| *item*                | Project resource files and folders                                                                                                                    | various          |
| Images/Library/*item* | Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name. | picture          |

(*) only if the project was exported from a .4db binary database.

## Data folder

The data folder contains the data file and all files and folders relating to the data.

| Inhalt       | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Format angezeigt |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| data.4dd(*)  | Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the *Open data file* dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                                                                                                                                                                                                                                                                                                                                           | binary           |
| data.journal | Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user’s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. It is generated by default when a database is created. | binary           |
| data.match   | (internal) UUID matching table number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | XML              |

(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location.

### Settings folder

This folder contains **user settings files for data** used for application administration.

> These settings take priority over **[user settings files](#settings-folder-1)** and **[structure settings](#sources-folder)** files.

| Inhalt              | Beschreibung                                                                                                                                                                                                        | Format angezeigt |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| directory.json      | Description of 4D groups, users, and their access rights when the application is run with this data file.                                                                                                           | JSON             |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md) when the database is run with this data file. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML              |
| settings.4DSettings | Custom database settings for this data file.                                                                                                                                                                        | XML              |

### Logs folder

The Logs folder contains all log files used by the project. Log files include, in particular:

- database conversion,
- web server requests,
- backup/restore activities journal (*Backup Journal\[xxx].txt*, see [Backup journal](Backup/backup.md#backup-journal))
- command debugging,
- 4D Server requests (generated on client machines and on the server).

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html) command) for maintenance log files and in cases where data folder is read-only.

## Settings folder

This folder contains **user settings files** used for application administration.

> These settings take priority over **[structure settings](#sources-folder)** files. However, if a **[user settings file for data](#settings-folder)** exists, it takes priority over user settings file.

| Inhalt              | Beschreibung                                                                                                                                                                                                                                                                                                                         | Format angezeigt |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| directory.json      | Description of 4D groups and users for the application, as well as their access rights                                                                                                                                                                                                                                               | JSON             |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the *backup journal*. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML              |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML              |

## userPreferences.*userName* folder

This folder contains files that memorize user configurations, e.g. break point or window positions. You can just ignore this folder. It contains for example:

| Inhalt                     | Beschreibung                                                | Format angezeigt |
| -------------------------- | ----------------------------------------------------------- | ---------------- |
| methodPreferences.json     | Current user method editor preferences                      | JSON             |
| methodWindowPositions.json | Current user window positions for methods                   | JSON             |
| formWindowPositions.json   | Current user window positions for forms                     | JSON             |
| workspace.json             | List of opened windows; on macOS, order of tab windows      | JSON             |
| debuggerCatches.json       | Caught calls to commands                                    | JSON             |
| recentTables.json          | Ordered list of tables                                      | JSON             |
| preferences.4DPreferences  | Current data path and main window positions                 | XML              |
| CompilerIntermediateFiles  | Intermediate files resulting from Apple Silicon compilation | Folder           |

## Components folder

This folder contains the components to be available in the application project. It must be stored at the same level as the Project folder.

> An application project can be used itself as a component:
> 
> - for development: put an alias of the .4dproject file in the Components folder of the host project.
> - for deployment: [build the component](Desktop/building.md#build-component) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host application.

## Plugins folder

This folder contains the plug-ins to be available in the application project. It must be stored at the same level as the Project folder.

## Documentation folder

This folder contains all documentation files (.md) created for the project elements such as classes, methods, or forms. Documentation files are managed and displayed in the 4D Explorer.

For more information, refer to [Documenting a project](Project/documentation.md).

## WebFolder

Defaut root folder of the 4D Web server for pages, pictures, etc. It is automatically created when the Web server is launched for the first time. It is automatically created when the Web server is launched for the first time.
