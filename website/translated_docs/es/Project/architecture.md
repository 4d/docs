---
id: architecture
title: Arquitectura de un proyecto 4D
---

Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una única carpeta padre de la base (carpeta paquete). Por ejemplo:

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


## Project folder

The Project folder typically contains the following hierarchy:

- Archivo *nomBase*.4DProject
- Sources
    + Clases
    + DatabaseMethods
    + Métodos
    + Formularios
    + TableForms
    + Triggers
- DerivedData
- Trash (if any)


### Archivo *nomBase*.4DProject

Project development file, used to designate and launch the project. This file can be opened by:

- 4D Developer
- 4D Server (sólo lectura, ver [Desarrollar un proyecto](developing.md))

**Nota:** en los proyectos 4D, el desarrollo se realiza con 4D Developer y el desarrollo multiusuario se gestiona a través de las herramientas de control de versión. 4D Server can open .4DProject files for testing purposes.


### Sources folder

| Contents                | Description                                                                                                                                                                                                                                                                                                                                                                                                         | Format |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| catalog.4DCatalog       | Table and field definitions                                                                                                                                                                                                                                                                                                                                                                                         | XML    |
| folders.json            | Explorer folder definitions                                                                                                                                                                                                                                                                                                                                                                                         | JSON   |
| menus.json              | Menu definitions                                                                                                                                                                                                                                                                                                                                                                                                    | JSON   |
| settings.4DSettings     | *Structure* database settings. They are not taken into account if *[user settings](#settings-folder-1)* or *[user settings for data](#settings-folder)* are defined.<p>**Warning**: In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use *user settings* or *user settings for data* to define custom settings. | XML    |
| tips.json               | Defined tips                                                                                                                                                                                                                                                                                                                                                                                                        | JSON   |
| lists.json              | Defined lists                                                                                                                                                                                                                                                                                                                                                                                                       | JSON   |
| filters.json            | Defined filters                                                                                                                                                                                                                                                                                                                                                                                                     | JSON   |
| styleSheets.css         | CSS style sheets                                                                                                                                                                                                                                                                                                                                                                                                    | CSS    |
| styleSheets_mac.css     | Mac css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                                               | CSS    |
| styleSheets_windows.css | Windows css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                                           | CSS    |


#### DatabaseMethods folder

| Contents                 | Description                                                     | Format |
| ------------------------ | --------------------------------------------------------------- | ------ |
| *databaseMethodName*.4dm | Métodos base definidos en la base. One file per database method | text   |

#### Methods folder

| Contents         | Description                                                | Format |
| ---------------- | ---------------------------------------------------------- | ------ |
| *methodName*.4dm | Métodos proyecto definidos en la base. One file per method | text   |

#### Classes folder

| Contents        | Description                                                                                                                        | Format |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------ |
| *className*.4dm | User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name | text   |


#### Forms folder

| Contents                                  | Description                                | Format  |
| ----------------------------------------- | ------------------------------------------ | ------- |
| *formName*/form.4DForm                    | Project form description                   | json    |
| *formName*/method.4dm                     | Project form method                        | text    |
| *formName*/Images/*pictureName*           | Project form static picture                | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Object methods. One file per object method | text    |

#### TableForms folder

| Contents                                             | Description                                            | Format  |
| ---------------------------------------------------- | ------------------------------------------------------ | ------- |
| *n*/Input/*formName*/form.4DForm                     | Input table form description (n is the table number)   | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Input table form static pictures                       | picture |
| *n*/Input/*formName*/method.4dm                      | Input table form method                                | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Input form object methods. One file per object method  | text    |
| *n*/Output/*formName*/form.4DForm                    | Output table form description (n is the table number)  | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Output table form static pictures                      | picture |
| *n*/Output/*formName*/method.4dm                     | Output table form method                               | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Output form object methods. One file per object method | text    |

#### Triggers folder

| Contents      | Description                                                                              | Format |
| ------------- | ---------------------------------------------------------------------------------------- | ------ |
| table_*n*.4dm | Métodos trigger definidos en la base. One trigger file per table (n is the table number) | text   |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools.


### Trash folder

The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:

- Métodos
- Formularios
- TableForms

Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder.


### DerivedData folder

The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder.


## Resources folder

La carpeta Resources contiene todos los archivos y carpetas de recursos personalizados de la base. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the *4D Server Reference Manual*.

| Contents              | Description                                                                                                                                           | Format  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Database resource files and folders                                                                                                                   | various |
| Images/Library/*item* | Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name. | picture |

(*) only if the project was exported from a .4db binary database.


## Data folder

The data folder contains the data file and all files and folders relating to the data.

| Contents     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Format |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| data.4dd(*)  | Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the *Open data file* dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                                                                                                                                                                                                                                                                                    | binary |
| data.journal | Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user’s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. | binary |
| data.match   | (internal) UUID matching table number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | XML    |

(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location.

### Settings folder

Esta carpeta contiene **archivos de configuración de datos** utilizados para la administración de la base de datos.

> Estos parámetros tienen prioridad sobre los **[archivos de propiedades usuario](#settings-folder-1)** y los archivos de **propiedades estructura**.

| Contents            | Description                                                                                                                                                                                                                                                                       | Format |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Backup.4DSettings   | Parámetros de copia de seguridad de la base de datos, utilizados para definir las [opciones de copia de seguridad](Backup/settings.md)) cuando la base se lanza con este archivo de datos. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML    |
| settings.4DSettings | Propiedades personalizadas de la base para este archivo de datos                                                                                                                                                                                                                  | XML    |
| directory.json      | Descripción de los grupos y usuarios de 4D y sus derechos de acceso cuando la base se lanza con este archivo de datos.                                                                                                                                                            | JSON   |



### Logs folder

The Logs folder contains all log files used by the project. Log files include, in particular:

- database conversion,
- web server requests,
- backup/restore activities journal (*Backup Journal\[xxx].txt*, see [Backup journal](Backup/backup.md#backup-journal))
- command debugging,
- 4D Server requests (generated on client machines and on the server).

> Una carpeta Logs adicional está disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver [Obtener carpeta 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) comando) para los archivos de registro de mantenimiento y en los casos en que la carpeta de datos es de sólo lectura.

## Settings folder

Esta carpeta contiene **archivos de propiedades usuario** utilizados para la administración de la base de datos. Los archivos se añaden a la carpeta si es necesario.

> Si existe un archivo de propiedades de datos [en una carpeta de datos ](#settings-folder), de la carpeta Datos, tiene prioridad sobre el archivo de propiedades del usuario.

| Contents            | Description                                                                                                                                                                                                                                                                                                                          | Format |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| directory.json      | Descripción de los grupos y usuarios de 4D para la base de datos, así como sus derechos de acceso                                                                                                                                                                                                                                    | JSON   |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML    |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the *backup journal*. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML    |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML    |


## userPreferences.*userName* folder

Esta carpeta contiene archivos que memorizan las configuraciones del usuario, por ejemplo, el punto de ruptura o las posiciones de las ventanas. You can just ignore this folder. It contains for example:

| Contents                   | Description                                            | Format |
| -------------------------- | ------------------------------------------------------ | ------ |
| methodPreferences.json     | Current user method editor preferences                 | JSON   |
| methodWindowPositions.json | Current user window positions for methods              | JSON   |
| formWindowPositions.json   | Current user window positions for forms                | JSON   |
| workspace.json             | List of opened windows; on macOS, order of tab windows | JSON   |
| debuggerCatches.json       | Caught calls to commands                               | JSON   |
| recentTables.json          | Ordered list of tables                                 | JSON   |
| preferences.4DPreferences  | Current data path and main window positions            | XML    |


## Components folder

Esta carpeta contiene los componentes que deben estar disponibles únicamente en la base proyecto. It must be stored at the same level as the Project folder.

> Una base proyecto puede ser utilizada por sí misma como un componente: - para el desarrollo: ponga un alias del archivo .4dproject en la carpeta Components de la base local. - para el despliegue: cree el componente (ver [Crear un paquete proyecto](building.md)) y ponga el archivo .4dz resultante en una carpeta .4dbase en la carpeta Componentes de la base local.


## Plugins folder

Esta carpeta contiene los plug-ins que estarán disponibles únicamente en la base proyecto. It must be stored at the same level as the Project folder.
