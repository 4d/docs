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

> Si su proyecto se ha convertido desde una base binaria, puede haber carpetas adicionales. Ver "Conversión de bases en proyectos" en [doc.4d.com](https://doc.4d.com).


## Carpeta Project

La carpeta Project suele contener la siguiente jerarquía:

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

El archivo de desarrollo de proyecto, utilizado para designar y lanzar el proyecto. Este archivo puede ser abierto por:

- 4D
- 4D Server (read-only, see [Opening a remote project](Desktop/clientServer.md#opening-a-remote-project))

> In 4D projects, development is done with 4D and multi-user development is managed through source control tools. 4D Server puede abrir archivos .4DProject para realizar pruebas.


### Carpeta Sources

| Contenido               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Formato |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog       | Definiciones de tablas y campos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | XML     |
| folders.json            | Definiciones de carpetas del Explorador                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| menus.json              | Definiciones de los menús                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| settings.4DSettings     | Propiedades de la base *Structure*. No se tienen en cuenta si los *[parámetros usuario](#settings-folder-1)* o los *[parámetros usuario de datos](#settings-folder)* son definidos.<p>**Atención**: en las aplicaciones compiladas, la configuración de la estructura se almacena en el archivo .4dz (de sólo lectura). Para las necesidades de despliegue, es necesario utilizar los *parámetros usuario* o los *parámetros usuario para los datos* para definir la configuración personalizada. | XML     |
| tips.json               | Mensajes de ayuda definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | JSON    |
| lists.json              | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | JSON    |
| filters.json            | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | JSON    |
| styleSheets.css         | Hojas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | CSS     |
| styleSheets_mac.css     | Hojas de estilo css de Mac (a partir de una base binaria convertida)                                                                                                                                                                                                                                                                                                                                                                                                                                                    | CSS     |
| styleSheets_windows.css | Hojas de estilo css en Windows (a partir de una base binaria convertida)                                                                                                                                                                                                                                                                                                                                                                                                                                                | CSS     |


#### Carpeta DatabaseMethods

| Contenido                | Descripción                                                         | Formato |
| ------------------------ | ------------------------------------------------------------------- | ------- |
| *databaseMethodName*.4dm | Database methods defined in the project. Un archivo por método base | texto   |

#### Carpeta Methods

| Contenido        | Descripción                                                   | Formato |
| ---------------- | ------------------------------------------------------------- | ------- |
| *methodName*.4dm | Project methods defined in the project. Un archivo por método | texto   |

#### Carpeta Classes

| Contenido       | Descripción                                                                                                                                              | Formato |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *className*.4dm | Método de definición de clases usuario, que permite instanciar objetos específicos. Un archivo por clase, el nombre del archivo es el nombre de la clase | texto   |


#### Carpeta Forms

| Contenido                                 | Descripción                                  | Formato |
| ----------------------------------------- | -------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Descripción del formulario proyecto          | json    |
| *formName*/method.4dm                     | Método formulario proyecto                   | texto   |
| *formName*/Images/*pictureName*           | Imagen estática del formulario proyecto      | imagen  |
| *formName*/ObjectMethods/*objectName*.4dm | Métodos objeto. Un archivo por método objeto | texto   |

#### Carpeta TableForms

| Contenido                                            | Descripción                                                                 | Formato |
| ---------------------------------------------------- | --------------------------------------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | Descripción del formulario de entrada de la tabla (n es el número de tabla) | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Imágenes estáticas del formulario de entrada de la tabla                    | imagen  |
| *n*/Input/*formName*/method.4dm                      | Método del formulario de entrada de la tabla                                | texto   |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Métodos objeto del formulario de entrada. Un archivo por método objeto      | texto   |
| *n*/Output/*formName*/form.4DForm                    | Descripción del formulario de salida de la tabla (n es el número de tabla)  | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Imágenes estáticas del formulario de salida de la tabla                     | imagen  |
| *n*/Output/*formName*/method.4dm                     | Método del formulario de salida de la tabla                                 | texto   |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Métodos objeto del formulario de salida. Un archivo por método objeto       | texto   |

#### Carpeta Triggers

| Contenido     | Descripción                                                                                          | Formato |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| table_*n*.4dm | Trigger methods defined in the project. Un archivo de activación por tabla (n es el número de tabla) | texto   |

**Nota:** La extensión de archivo .4dm es un formato de archivo texto, que contiene el código de un método 4D. Es compatible con las herramientas de control de versión.


### Carpeta Trash

La carpeta Trash contiene los métodos y formularios que se han eliminado del proyecto (si los hay). Puede contener las siguientes carpetas:

- Métodos
- Formularios
- TableForms

Dentro de estas carpetas, los nombres de los elementos eliminados van entre paréntesis, por ejemplo "(myMethod).4dm". La organización de las carpetas es idéntica a la carpeta [Sources](#sources).


### Carpeta DerivedData

La carpeta DerivedData contiene datos en caché utilizados internamente por 4D para optimizar el procesamiento. Se crea o recrea automáticamente cuando es necesario. Puede ignorar esta carpeta.

## Carpeta Libraries

> This folder is used on macOS only.

The Librairies folder contains the file resulting from a compilation with the [Silicon compiler](compiler.md#silicon-compiler) on macOS.

## Carpeta Resources

The Resources folder contains any custom project resource files and folders. En esta carpeta puede colocar todos los archivos necesarios para la traducción o personalización de la interfaz de la aplicación (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos automáticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e imágenes estáticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. Ver el *manual 4D Server*.

| Contenido             | Descripción                                                                                                                                                                                | Formato |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| *item*                | Project resource files and folders                                                                                                                                                         | varios  |
| Images/Library/*item* | Imágenes de la librería de imágenes como archivos separados(*). Los nombres de estos elementos se convierten en nombres de archivos. Si existe un duplicado, se añade un número al nombre. | imagen  |

(*) sólo si el proyecto fue exportado desde una base binaria .4db.


## Carpeta Data

La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos.

| Contenido    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Formato |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | Archivo de datos que contiene los datos introducidos en los registros y todos los datos pertenecientes a los registros. Al abrir un proyecto 4D, la aplicación abre por defecto el archivo de datos actual. Si cambia el nombre o la ubicación de este archivo, aparecerá la caja de diálogo *Abrir un archivo de datos* para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | binario |
| data.journal | Se crea sólo cuando la base de datos utiliza un archivo de registro. El archivo de registro se utiliza para garantizar la seguridad de los datos entre las copias de seguridad. Todas las operaciones realizadas sobre los datos se registran secuencialmente en este archivo. Por lo tanto, cada operación sobre los datos provoca dos acciones simultáneas: la primera sobre los datos (la instrucción se ejecuta normalmente) y la segunda en el archivo de registro (se registra una descripción de la operación). El archivo de registro se construye de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. Una base de datos sólo puede trabajar con un único archivo de registro a la vez. El archivo de historial registra operaciones como adiciones, modificaciones o eliminaciones de registros, transacciones, etc. Se genera por defecto cuando se crea una base de datos. | binario |
| data.match   | (interno) UUID correspondiente al número de la tabla                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | XML     |

(*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar.

### Carpeta Settings

This folder contains **user settings files for data** used for application administration.

> These settings take priority over **[user settings files](#settings-folder-1)** and **[structure settings](#sources-folder)** files.

| Contenido           | Descripción                                                                                                                                                                                                                                            | Formato |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| directory.json      | Description of 4D groups, users, and their access rights when the application is run with this data file.                                                                                                                                              | JSON    |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md) when the database is run with this data file. Las llaves relativas a la configuración de la copia de seguridad se describen en el manual *Backup de las llaves XML 4D*. | XML     |
| settings.4DSettings | Custom database settings for this data file.                                                                                                                                                                                                           | XML     |


### Carpeta Logs

La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:

- conversión de base de datos,
- peticiones del servidor web,
- registro de actividades de backup/restitución (*Backup Journal\[xxx].txt*, ver [Historial de backup](Backup/backup.md#backup-journal))
- depuración de comandos,
- Peticiones 4D Server (generadas en en los equipos cliente y en el servidor).

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html) command) for maintenance log files and in cases where data folder is read-only.

## Carpeta Settings

This folder contains **user settings files** used for application administration.

> These settings take priority over **[structure settings](#sources-folder)** files. However, if a **[user settings file for data](#settings-folder)** exists, it takes priority over user settings file.

| Contenido           | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Formato |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Description of 4D groups and users for the application, as well as their access rights                                                                                                                                                                                                                                                                                                                                                                          | JSON    |
| Backup.4DSettings   | Parámetros de copia de seguridad de la base de datos, utilizados para definir las [opciones de copia de seguridad](Backup/settings.md)) cuando se lanza cada copia de seguridad. Este archivo también puede utilizarse para leer o definir opciones adicionales, como la cantidad de información almacenada en el *diario de backup*. Las llaves relativas a la configuración de la copia de seguridad se describen en el manual *Backup de las llaves XML 4D*. | XML     |
| BuildApp.4DSettings | Archivo de parámetros de generación, creado automáticamente cuando se utiliza la caja de diálogo del generador de aplicaciones o del comando `BUILD APPLICATION`                                                                                                                                                                                                                                                                                                | XML     |


## Carpeta userPreferences.*userName*

Esta carpeta contiene archivos que memorizan las configuraciones del usuario, por ejemplo, el punto de ruptura o las posiciones de las ventanas. Puede simplemente ignorar esta carpeta. Contiene, por ejemplo:

| Contenido                  | Descripción                                                               | Formato |
| -------------------------- | ------------------------------------------------------------------------- | ------- |
| methodPreferences.json     | Preferencias del editor de métodos del usuario actual                     | JSON    |
| methodWindowPositions.json | Posición de la ventana de usuario actual para los métodos                 | JSON    |
| formWindowPositions.json   | Posición de la ventana de usuario actual para los formularios             | JSON    |
| workspace.json             | Lista de ventanas abiertas; en macOS, orden de las ventanas de la pestaña | JSON    |
| debuggerCatches.json       | Llamadas a los comandos                                                   | JSON    |
| recentTables.json          | Lista ordenada de tablas                                                  | JSON    |
| preferences.4DPreferences  | Ruta de datos actual y posiciones de la ventana principal                 | XML     |
| CompilerIntermediateFiles  | Intermediate files resulting from Apple Silicon compilation               | Folder  |


## Carpeta Components

This folder contains the components to be available in the application project. Debe almacenarse en el mismo nivel que la carpeta Project.

> An application project can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host project. - for deployment: [build the component](Desktop/building.md#build-component) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host application.


## Carpeta Plugins

This folder contains the plug-ins to be available in the application project. Debe almacenarse en el mismo nivel que la carpeta Project.


## Documentation folder

This folder contains all documentation files (.md) created for the project elements such as classes, methods, or forms. Documentation files are managed and displayed in the 4D Explorer.

For more information, refer to [Documenting a project](Project/documentation.md).

## WebFolder

Defaut root folder of the 4D Web server for pages, pictures, etc. It is automatically created when the Web server is launched for the first time. 