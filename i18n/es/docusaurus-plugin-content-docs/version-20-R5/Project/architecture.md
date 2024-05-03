---
id: architecture
title: Arquitectura de un proyecto
---

Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una carpeta raíz del proyecto (carpeta paquete). Por ejemplo:

- MyPackage (_project root folder_)
  - `Componentes`
  - `Data`
    - `Logs`
    - `Settings`
  - `Documentation`
  - `Plugins`
  - `Project`
    - `DerivedData`
    - `Sources`
    - `Trash`
  - `Resources`
  - `Settings`
  - `userPreferences.jSmith`
  - `WebFolder`

> Si su proyecto se ha convertido desde una base binaria, puede haber carpetas adicionales. See "Converting databases to projects" on [doc.4d.com](https://doc.4d.com).

## Carpeta `Project`

La carpeta Project suele contener la siguiente jerarquía:

- `<applicationName>.4DProject` file
- `Sources`
  - `Clases`
  - `DatabaseMethods`
  - `Métodos`
  - `Formularios`
  - `TableForms`
  - `Triggers`
- `DerivedData`
- `Trash` (if any)

### `<applicationName>.4DProject` file

El archivo de desarrollo de proyecto, utilizado para designar y lanzar el proyecto. Este archivo puede ser abierto por:

- 4D
- 4D Server (read-only, see [Opening a remote project](Desktop/clientServer.md#opening-a-remote-project))

> En los proyectos 4D, el desarrollo se realiza con 4D y el desarrollo multiusuarios se gestiona a través de las herramientas de control de versión. 4D Server puede abrir archivos .4DProject para realizar pruebas.

This text file can also contain configuration keys, in particular [`"tokenizedText": false`](../Preferences/general.md#excluding-tokens-in-existing-projects).

### `Sources`

| Contenido                                                    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Formato |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| catalog.4DCatalog                            | Definiciones de tablas y campos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | XML     |
| catalog_editor.json     | Posiciones y colores personalizados de tablas, campos y enlaces en el editor de estructura. Depends on a [Compatibility setting](../settings/compatibility.md) in converted projects                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| folders.json                                 | Definiciones de carpetas del Explorador                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | JSON    |
| menus.json                                   | Definiciones de los menús                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | JSON    |
| settings.4DSettings                          | _Structure_ database settings. They are not taken into account if _[user settings](#settings-user)_ or _[user settings for data](#settings-user-data)_ are defined (see also [Priority of settings](../Desktop/user-settings.md#priority-of-settings). **Warning**: In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to [enable](../Desktop/user-settings.md#enabling-user-settings) and use _user settings_ or _user settings for data_ to define custom settings. | XML     |
| tips.json                                    | Mensajes de ayuda definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | JSON    |
| lists.json                                   | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | JSON    |
| filters.json                                 | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | JSON    |
| dependencies.json                            | Names of [components to load](components.md) in the project                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | JSON    |
| styleSheets.css                              | Hojas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | CSS     |
| styleSheets_mac.css     | Hojas de estilo css de Mac (a partir de una base binaria convertida)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | CSS     |
| styleSheets_windows.css | Hojas de estilo css en Windows (a partir de una base binaria convertida)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | CSS     |

#### `DatabaseMethods`

| Contenido                                | Descripción                                                                       | Formato |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ------- |
| _databaseMethodName_.4dm | Métodos base definidos en el proyecto. Un archivo por método base | text    |

#### `Métodos`

| Contenido                        | Descripción                                                                      | Formato |
| -------------------------------- | -------------------------------------------------------------------------------- | ------- |
| _methodName_.4dm | Métodos proyecto definidos en el proyecto. Un archivo por método | text    |

#### `Clases`

| Contenido                       | Descripción                                                                                                                                                              | Formato |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| _className_.4dm | Método de definición de clases usuario, que permite instanciar objetos específicos. Un archivo por clase, el nombre del archivo es el nombre de la clase | text    |

#### `Formularios`

| Contenido                                                 | Descripción                                                  | Formato |
| --------------------------------------------------------- | ------------------------------------------------------------ | ------- |
| _formName_/form.4DForm                    | Descripción del formulario proyecto                          | json    |
| _formName_/method.4dm                     | Método formulario proyecto                                   | text    |
| _formName_/Images/_pictureName_                           | Imagen estática del formulario proyecto                      | picture |
| _formName_/ObjectMethods/_objectName_.4dm | Métodos objeto. Un archivo por método objeto | text    |

#### `TableForms`

| Contenido                                                            | Descripción                                                                                    | Formato |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| _n_/Input/_formName_/form.4DForm                     | Descripción del formulario de entrada de la tabla (n es el número de tabla) | json    |
| _n_/Input/_formName_/Images/_pictureName_                            | Imágenes estáticas del formulario de entrada de la tabla                                       | picture |
| _n_/Input/_formName_/method.4dm                      | Método del formulario de entrada de la tabla                                                   | text    |
| _n_/Input/_formName_/ObjectMethods/_objectName_.4dm  | Métodos objeto del formulario de entrada. Un archivo por método objeto         | text    |
| _n_/Output/_formName_/form.4DForm                    | Descripción del formulario de salida de la tabla (n es el número de tabla)  | json    |
| _n_/Output/_formName_/Images/_pictureName_                           | Imágenes estáticas del formulario de salida de la tabla                                        | picture |
| _n_/Output/_formName_/method.4dm                     | Método del formulario de salida de la tabla                                                    | text    |
| _n_/Output/_formName_/ObjectMethods/_objectName_.4dm | Métodos objeto del formulario de salida. Un archivo por método objeto          | text    |

#### `Triggers`

| Contenido                                          | Descripción                                                                                                                               | Formato |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| table__n_.4dm | Métodos trigger definidos en el proyecto. Un archivo de activación por tabla (n es el número de tabla) | text    |

**Note:**
The .4dm file extension is a text-based file format, containing the code of a 4D method. Es compatible con las herramientas de control de versión.

### `Trash`

La carpeta Trash contiene los métodos y formularios que se han eliminado del proyecto (si los hay). Puede contener las siguientes carpetas:

- `Métodos`
- `Formularios`
- `TableForms`

Dentro de estas carpetas, los nombres de los elementos eliminados van entre paréntesis, por ejemplo "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder.

### `DerivedData`

La carpeta DerivedData contiene datos en caché utilizados internamente por 4D para optimizar el procesamiento. Se crea o recrea automáticamente cuando es necesario. Puede ignorar esta carpeta.

## `Libraries`

> Esta carpeta se utiliza sólo en macOS.

The Librairies folder contains the file resulting from a compilation with the [Silicon compiler](compiler.md#silicon-compiler) on macOS.

## `Resources`

La carpeta Resources contiene todos los archivos y carpetas de recursos personalizados del proyecto. En esta carpeta puede colocar todos los archivos necesarios para la traducción o personalización de la interfaz de la aplicación (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos automáticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e imágenes estáticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. See the _4D Server Reference Manual_.

| Contenido             | Descripción                                                                                                                                                                                                                                                    | Formato |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| _elemento_            | Archivos y carpetas de recursos del proyecto                                                                                                                                                                                                                   | varios  |
| Images/Library/_item_ | Imágenes de la librería de imágenes como archivos separados(\*). Los nombres de estos elementos se convierten en nombres de archivos. Si existe un duplicado, se añade un número al nombre. | picture |

(\*) sólo si el proyecto fue exportado desde una base binaria .4db.

## `Data`

La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos.

| Contenido                                       | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Formato |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(\*) | Archivo de datos que contiene los datos introducidos en los registros y todos los datos pertenecientes a los registros. Al abrir un proyecto 4D, la aplicación abre por defecto el archivo de datos actual. If you change the name or location of this file, the _Open data file_ dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | binary  |
| data.journal                    | Se crea sólo cuando la base de datos utiliza un archivo de registro. El archivo de registro se utiliza para garantizar la seguridad de los datos entre las copias de seguridad. Todas las operaciones realizadas sobre los datos se registran secuencialmente en este archivo. Por lo tanto, cada operación sobre los datos provoca dos acciones simultáneas: la primera sobre los datos (la instrucción se ejecuta normalmente) y la segunda en el archivo de registro (se registra una descripción de la operación). El archivo de registro se construye de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. Una base de datos sólo puede trabajar con un único archivo de registro a la vez. El archivo de historial registra operaciones como adiciones, modificaciones o eliminaciones de registros, transacciones, etc. Se genera por defecto cuando se crea una base de datos. | binary  |
| data.match                      | (interno) UUID correspondiente al número de la tabla                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | XML     |

(\*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar.

### `Settings` (user data)

This folder contains [**user settings for data**](../Desktop/user-settings.md#user-settings-for-data-file) used for application administration.

> These settings take priority over [user settings](#settings-user) and [structure settings](#sources). See also [Priority of settings](../Desktop/user-settings.md#priority-of-settings).

| Contenido                           | Descripción                                                                                                                                                                                                                                         | Formato |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descripción de los grupos y usuarios de 4D y sus derechos de acceso cuando la aplicación se lanza con este archivo de datos.                                                                                                        | JSON    |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md) when the database is run with this data file. Keys concerning backup configuration are described in the _4D XML Keys Backup_ manual. | XML     |
| settings.4DSettings | Propiedades de la base personalizadas para este archivo de datos.                                                                                                                                                                   | XML     |

### `Logs`

La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:

- conversión de base de datos,
- peticiones del servidor web,
- backup/restore activities journal (_Backup Journal\[xxx].txt_, see [Backup journal](Backup/backup.md#backup-journal))
- depuración de comandos,
- Peticiones 4D Server (generadas en en los equipos cliente y en el servidor).

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4dv19R/help/command/en/page485.html) command) for maintenance log files and in cases where data folder is read-only.

## `Settings` (user)

This folder contains [**user settings**](../Desktop/user-settings.md#user-settings) used for application administration.

> These settings take priority over [structure settings](#sources) file. However, if [user settings for data](#settings-user-data) exist, they take priority over the user settings. See also [Priority of settings](../Desktop/user-settings.md#priority-of-settings).

| Contenido                           | Descripción                                                                                                                                                                                                                                                                                                                                                                          | Formato |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| directory.json      | Descripción de los grupos y usuarios de 4D para la aplicacion, así como sus derechos de acceso                                                                                                                                                                                                                                                                                       | JSON    |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the _backup journal_. Keys concerning backup configuration are described in the _4D XML Keys Backup_ manual. | XML     |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                                                                          | XML     |
| settings.4DSettings | Parámetros personalizados para este proyecto (todos los archivos de datos)                                                                                                                                                                                                                                                                                        | XML     |
| logConfig.json      | Custom [log configuration file](../Debugging/debugLogFiles.md#using-a-log-configuration-file)                                                                                                                                                                                                                                                                                        | json    |

## `userPreferences.<userName>`

Esta carpeta contiene archivos que memorizan las configuraciones del usuario, por ejemplo, el punto de ruptura o las posiciones de las ventanas. Puede simplemente ignorar esta carpeta. Contiene, por ejemplo:

| Contenido                                  | Descripción                                                               | Formato |
| ------------------------------------------ | ------------------------------------------------------------------------- | ------- |
| methodPreferences.json     | Preferencias del editor de código del usuario actual                      | JSON    |
| methodWindowPositions.json | Posición de la ventana de usuario actual para los métodos                 | JSON    |
| formWindowPositions.json   | Posición de la ventana de usuario actual para los formularios             | JSON    |
| workspace.json             | Lista de ventanas abiertas; en macOS, orden de las ventanas de la pestaña | JSON    |
| debuggerCatches.json       | Llamadas a los comandos                                                   | JSON    |
| recentTables.json          | Lista ordenada de tablas                                                  | JSON    |
| preferences.4DPreferences  | Ruta de datos actual y posiciones de la ventana principal                 | XML     |
| CompilerIntermediateFiles                  | Archivos intermedios resultantes de la compilación Apple Silicon          | Folder  |

## `Componentes`

Legacy folder containing components (must be stored at the same level as the Project folder).

:::info

It is now recommended to [use the **dependencies.json** and (optionnally) **environment4d.json** files](components.md) to declare your components instead of the Components folder.

:::

## `Plugins`

Esta carpeta contiene los plug-ins que deben estar disponibles en el proyecto aplicación. Debe almacenarse en el mismo nivel que la carpeta Project.

## `Documentation`

Esta carpeta contiene todos los archivos de documentación (.md) creados para los elementos del proyecto como clases, métodos o formularios. Los archivos de documentación se gestionan y se muestran en el Explorador 4D.

For more information, refer to [Documenting a project](Project/documentation.md).

## `WebFolder`

Define la carpeta raíz por defecto del servidor web 4D para las páginas, las imágenes, etc. Se crea automáticamente cuando se lanza el servidor web por primera vez.

## `.gitignore` file (optional)

Archivo que especifica los archivos que serán ignorados por git. You can include a gitignore file in your projects using the **Create .gitignore file** option on the **General** page of the preferences. To configure the contents of that file, see [Create `.gitignore` file](Preferences/general.md#create-gitignore-file).
