---
id: architecture
title: Arquitectura de un proyecto
---

Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una carpeta raíz del proyecto (carpeta paquete). Por ejemplo:

- MyPackage (_carpeta raíz del proyecto_)
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

> Si su proyecto se ha convertido desde una base binaria, puede haber carpetas adicionales. Ver "Conversión de bases en proyectos" en [doc.4d.com](https://doc.4d.com).

## Carpeta `Project`

La carpeta Project suele contener la siguiente jerarquía:

- archivo `<applicationName>.4DProject`
- `Sources`
  - `Clases`
  - `DatabaseMethods`
  - `Métodos`
  - `Formularios`
  - `TableForms`
  - `Triggers`
- `DerivedData`
- `Trash` (si hay)

### archivo `<applicationName>.4DProject`

El archivo de desarrollo de proyecto, utilizado para designar y lanzar el proyecto. Este archivo puede ser abierto por:

- 4D
- 4D Server (sólo lectura, ver [Abrir un proyecto remoto](Desktop/clientServer.md#opening-a-remote-project))

> En los proyectos 4D, el desarrollo se realiza con 4D y el desarrollo multiusuarios se gestiona a través de las herramientas de control de versión. 4D Server puede abrir archivos .4DProject para realizar pruebas.

Este archivo de texto también puede contener llaves de configuración, en particular [`"tokenizedText": false`](../Preferences/general.md#excluding-tokens-in-existing-projects).

### `Sources`

| Contenido                                                    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Formato |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog                            | Definiciones de tablas y campos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | XML     |
| catalog_editor.json     | Posiciones y colores personalizados de tablas, campos y enlaces en el editor de estructura. Depende de un [parámetro de compatibilidad](../settings/compatibility.md) en los proyectos convertidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | JSON    |
| folders.json                                 | Definiciones de carpetas del Explorador                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | JSON    |
| menus.json                                   | Definiciones de los menús                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | JSON    |
| settings.4DSettings                          | Propiedades de la base _Structure_. No se tienen en cuenta si se definen _[parámetros de usuario](#settings-user)_ o _[parámetros de usuario para datos](#settings-user-data)_ (ver también [Prioridad de los parámetros](../Desktop/user-settings.md#priority-of-settings). **Atención**: en las aplicaciones compiladas, la configuración de la estructura se almacena en el archivo .4dz (de sólo lectura). Para las necesidades de despliegue, es necesario [habilitar](../Desktop/user-settings.md#enabling-user-settings) y utilizar _parámetros usuario_ o _parámetros usuario para datos_ para definir parámetros personalizados. | XML     |
| tips.json                                    | Mensajes de ayuda definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | JSON    |
| lists.json                                   | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | JSON    |
| filters.json                                 | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| dependencies.json                            | Nombres de [componentes a cargar](components.md) en el proyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| styleSheets.css                              | Hojas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | CSS     |
| styleSheets_mac.css     | Hojas de estilo css de Mac (a partir de una base binaria convertida)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | CSS     |
| styleSheets_windows.css | Hojas de estilo css en Windows (a partir de una base binaria convertida)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | CSS     |

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

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. Es compatible con las herramientas de control de versión.

### `Trash`

La carpeta Trash contiene los métodos y formularios que se han eliminado del proyecto (si los hay). Puede contener las siguientes carpetas:

- `Métodos`
- `Formularios`
- `TableForms`

Dentro de estas carpetas, los nombres de los elementos eliminados van entre paréntesis, por ejemplo "(myMethod).4dm". La organización de las carpetas es idéntica a la carpeta [Sources](#sources).

### `DerivedData`

La carpeta DerivedData contiene datos en caché utilizados internamente por 4D para optimizar el procesamiento. Se crea o recrea automáticamente cuando es necesario. Puede ignorar esta carpeta.

## `Libraries`

> Esta carpeta se utiliza sólo en macOS.

La carpeta Librairies contiene el archivo resultante de una compilación con el [compilador Silicon](compiler.md#silicon-compiler) en macOS.

## `Resources`

La carpeta Resources contiene todos los archivos y carpetas de recursos personalizados del proyecto. En esta carpeta puede colocar todos los archivos necesarios para la traducción o personalización de la interfaz de la aplicación (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos automáticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e imágenes estáticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. Ver el _manual 4D Server_.

| Contenido             | Descripción                                                                                                                                                                                                                                                    | Formato |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| _elemento_            | Archivos y carpetas de recursos del proyecto                                                                                                                                                                                                                   | varios  |
| Images/Library/_item_ | Imágenes de la librería de imágenes como archivos separados(\*). Los nombres de estos elementos se convierten en nombres de archivos. Si existe un duplicado, se añade un número al nombre. | picture |

(\*) sólo si el proyecto fue exportado desde una base binaria .4db.

## `Data`

La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos.

| Contenido                                       | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Formato |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(\*) | Archivo de datos que contiene los datos introducidos en los registros y todos los datos pertenecientes a los registros. Al abrir un proyecto 4D, la aplicación abre por defecto el archivo de datos actual. Si cambia el nombre o la ubicación de este archivo, aparecerá la caja de diálogo _Abrir un archivo de datos_ para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | binary  |
| data.journal                    | Se crea sólo cuando la base de datos utiliza un archivo de registro. El archivo de registro se utiliza para garantizar la seguridad de los datos entre las copias de seguridad. Todas las operaciones realizadas sobre los datos se registran secuencialmente en este archivo. Por lo tanto, cada operación sobre los datos provoca dos acciones simultáneas: la primera sobre los datos (la instrucción se ejecuta normalmente) y la segunda en el archivo de registro (se registra una descripción de la operación). El archivo de registro se construye de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. Una base de datos sólo puede trabajar con un único archivo de registro a la vez. El archivo de historial registra operaciones como adiciones, modificaciones o eliminaciones de registros, transacciones, etc. Se genera por defecto cuando se crea una base de datos. | binary  |
| data.match                      | (interno) UUID correspondiente al número de la tabla                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | XML     |

(\*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar.

### `Settings` (datos del usuario)

Esta carpeta contiene [**parámetros usuario para datos**](../Desktop/user-settings.md#user-settings-for-data-file) utilizada para la administración de aplicaciones.

> Estos parámetros tienen prioridad sobre los [parámetros de usuario](#settings-user) y los [parámetros de estructura](#sources). Ver también [Prioridad de los parámetros](../Desktop/user-settings.md#priority-of-settings).

| Contenido                           | Descripción                                                                                                                                                                                                                                                                                                                                         | Formato |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descripción de los grupos y usuarios de 4D y sus derechos de acceso cuando la aplicación se lanza con este archivo de datos.                                                                                                                                                                                                        | JSON    |
| Backup.4DSettings   | Parámetros de copia de seguridad de la base de datos, utilizados para definir las [opciones de copia de seguridad](Backup/settings.md) cuando la base se lanza con este archivo de datos. Las llaves relativas a la configuración de la copia de seguridad se describen en el manual _Backup de las llaves XML 4D_. | XML     |
| settings.4DSettings | Propiedades de la base personalizadas para este archivo de datos.                                                                                                                                                                                                                                                                   | XML     |

### `Logs`

La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:

- conversión de base de datos,
- peticiones del servidor web,
- registro de actividades de backup/restitución (_Backup Journal\[xxx].txt_, ver [Historial de backup](Backup/backup.md#backup-journal))
- depuración de comandos,
- Peticiones 4D Server (generadas en en los equipos cliente y en el servidor).

> Una carpeta Logs adicional está disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver el comando [Get 4D folder](https://doc.4d.com/4dv19R/help/command/en/page485.html)) para los archivos de registro de mantenimiento y e

## `Settings` (usuario)

Esta carpeta contiene [**parámetros de usuario**](../Desktop/user-settings.md#user-settings) utilizada para la administración de aplicaciones.

> Estos parámetros tienen prioridad sobre el archivo de [parámetros de estructura](#sources). Sin embargo, si existen [parámetros de usuario para los datos](#settings-user-data), tienen prioridad sobre los parámetros de usuario. Ver también [Prioridad de los parámetros](../Desktop/user-settings.md#priority-of-settings).

| Contenido                           | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Formato |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descripción de los grupos y usuarios de 4D para la aplicacion, así como sus derechos de acceso                                                                                                                                                                                                                                                                                                                                                                                                                  | JSON    |
| Backup.4DSettings   | Parámetros de copia de seguridad de la base de datos, utilizados para definir las [opciones de copia de seguridad](Backup/settings.md)) cuando se lanza cada copia de seguridad. Este archivo también puede utilizarse para leer o definir opciones adicionales, como la cantidad de información almacenada en el _diario de backup_. Las llaves relativas a la configuración de la copia de seguridad se describen en el manual _Backup de las llaves XML 4D_. | XML     |
| BuildApp.4DSettings | Archivo de parámetros de generación, creado automáticamente cuando se utiliza la caja de diálogo del generador de aplicaciones o del comando `BUILD APPLICATION`                                                                                                                                                                                                                                                                                                                                                | XML     |
| settings.4DSettings | Parámetros personalizados para este proyecto (todos los archivos de datos)                                                                                                                                                                                                                                                                                                                                                                                                                   | XML     |
| logConfig.json      | [Archivo de configuración de historial](../Debugging/debugLogFiles.md#using-a-log-configuration-file) personalizado                                                                                                                                                                                                                                                                                                                                                                                             | json    |

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

Carpeta que contiene los componentes anidados en el proyecto (debe almacenarse en el mismo nivel que la carpeta Project). Estos componentes tienen prioridad sobre cualquier otra ubicación.

:::info

También puede usar los archivos [**dependencies.json** y (opcionalmente) **environment4d.json**](components.md) para declarar componentes.

:::

## `Plugins`

Esta carpeta contiene los plug-ins que deben estar disponibles en el proyecto aplicación. Debe almacenarse en el mismo nivel que la carpeta Project.

## `Documentation`

Esta carpeta contiene todos los archivos de documentación (.md) creados para los elementos del proyecto como clases, métodos o formularios. Los archivos de documentación se gestionan y se muestran en el Explorador 4D.

Para más información, consulte [Documentar un proyecto](Project/documentation.md).

## `WebFolder`

Define la carpeta raíz por defecto del servidor web 4D para las páginas, las imágenes, etc. Se crea automáticamente cuando se lanza el servidor web por primera vez.

## Archivo `.gitignore` (opcional)

Archivo que especifica los archivos que serán ignorados por git. Puede incluir un archivo gitignore en sus proyectos utilizando la opción **Crear un archivo .gitignore** en la página **General** de las preferencias. Para configurar el contenido de ese archivo, consulte [Crear archivo `.gitignore`](Preferences/general.md#create-gitignore-file).
