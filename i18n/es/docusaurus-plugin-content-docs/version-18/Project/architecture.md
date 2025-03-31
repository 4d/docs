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

> Si su proyecto se ha convertido desde una base binaria, puede haber carpetas adicionales. Ver "Conversión de bases en proyectos" en [doc.4d.com](https://doc.4d.com).

## Carpeta Project

La carpeta Project suele contener la siguiente jerarquía:

- Archivo *nomBase*.4DProject
- Sources
  - Clases
  - DatabaseMethods
  - Métodos
  - Formularios
  - TableForms
  - Triggers
- DerivedData
- Trash (si procede)

### Archivo *nomBase*.4DProject

El archivo de desarrollo de proyecto, utilizado para designar y lanzar el proyecto. Este archivo puede ser abierto por:

- 4D Developer
- 4D Server (sólo lectura, ver [Desarrollar un proyecto](developing.md))

**Nota:** en los proyectos 4D, el desarrollo se realiza con 4D Developer y el desarrollo multiusuarios se gestiona a través de las herramientas de control de versión. 4D Server puede abrir archivos .4DProject para realizar pruebas.

### Carpeta Sources {#sources-folder}

| Contenido               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Formato |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog       | Definiciones de tablas y campos                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | XML     |
| folders.json            | Definiciones de carpetas del Explorador                                                                                                                                                                                                                                                                                                                                                                                                                                                         | JSON    |
| menus.json              | Definiciones de los menús                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | JSON    |
| settings.4DSettings     | Propiedades de la base *Structure*. No se tienen en cuenta si los *[parámetros usuario](#settings-folder-1)* o los *[parámetros usuario de datos](#settings-folder)* son definidos. **Atención**: en las aplicaciones compiladas, la configuración de la estructura se almacena en el archivo .4dz (de sólo lectura). Para las necesidades de despliegue, es necesario utilizar los *parámetros usuario* o los *parámetros usuario para los datos* para definir la configuración personalizada. | XML     |
| tips.json               | Mensajes de ayuda definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | JSON    |
| lists.json              | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | JSON    |
| filters.json            | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| styleSheets.css         | Hojas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | CSS     |
| styleSheets_mac.css     | Hojas de estilo css de Mac (a partir de una base binaria convertida)                                                                                                                                                                                                                                                                                                                                                                                                                            | CSS     |
| styleSheets_windows.css | Hojas de estilo css en Windows (a partir de una base binaria convertida)                                                                                                                                                                                                                                                                                                                                                                                                                        | CSS     |

#### Carpeta DatabaseMethods

| Contenido                | Descripción                                                   | Formato |
| ------------------------ | ------------------------------------------------------------- | ------- |
| *databaseMethodName*.4dm | Métodos base definidos en la base. Un archivo por método base | text    |

#### Carpeta Methods

| Contenido        | Descripción                                                  | Formato |
| ---------------- | ------------------------------------------------------------ | ------- |
| *methodName*.4dm | Métodos proyecto definidos en la base. Un archivo por método | text    |

#### Carpeta Classes

| Contenido       | Descripción                                                                                                                                              | Formato |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *className*.4dm | Método de definición de clases usuario, que permite instanciar objetos específicos. Un archivo por clase, el nombre del archivo es el nombre de la clase | text    |

#### Carpeta Forms

| Contenido                                 | Descripción                                  | Formato |
| ----------------------------------------- | -------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Descripción del formulario proyecto          | json    |
| *formName*/method.4dm                     | Método formulario proyecto                   | text    |
| *formName*/Images/*pictureName*           | Imagen estática del formulario proyecto      | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Métodos objeto. Un archivo por método objeto | text    |

#### Carpeta TableForms

| Contenido                                            | Descripción                                                                 | Formato |
| ---------------------------------------------------- | --------------------------------------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | Descripción del formulario de entrada de la tabla (n es el número de tabla) | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Imágenes estáticas del formulario de entrada de la tabla                    | picture |
| *n*/Input/*formName*/method.4dm                      | Método del formulario de entrada de la tabla                                | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Métodos objeto del formulario de entrada. Un archivo por método objeto      | text    |
| *n*/Output/*formName*/form.4DForm                    | Descripción del formulario de salida de la tabla (n es el número de tabla)  | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Imágenes estáticas del formulario de salida de la tabla                     | picture |
| *n*/Output/*formName*/method.4dm                     | Método del formulario de salida de la tabla                                 | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Métodos objeto del formulario de salida. Un archivo por método objeto       | text    |

#### Carpeta Triggers

| Contenido     | Descripción                                                                                        | Formato |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| table_*n*.4dm | Métodos trigger definidos en la base. Un archivo de activación por tabla (n es el número de tabla) | text    |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. Es compatible con las herramientas de control de versión.

### Carpeta Trash

La carpeta Trash contiene los métodos y formularios que se han eliminado del proyecto (si los hay). Puede contener las siguientes carpetas:

- Métodos
- Formularios
- TableForms

Dentro de estas carpetas, los nombres de los elementos eliminados van entre paréntesis, por ejemplo "(myMethod).4dm". La organización de las carpetas es idéntica a la carpeta [Sources](#sources-folder).

### Carpeta DerivedData

La carpeta DerivedData contiene datos en caché utilizados internamente por 4D para optimizar el procesamiento. Se crea o recrea automáticamente cuando es necesario. Puede ignorar esta carpeta.

## Carpeta Resources

La carpeta Resources contiene todos los archivos y carpetas de recursos personalizados de la base. En esta carpeta puede colocar todos los archivos necesarios para la traducción o personalización de la interfaz de la aplicación (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos automáticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e imágenes estáticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. Ver el *manual 4D Server*.

| Contenido             | Descripción                                                                                                                                                                                | Formato |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| *item*                | Archivos y carpetas de recursos de la base                                                                                                                                                 | varios  |
| Images/Library/*item* | Imágenes de la librería de imágenes como archivos separados(*). Los nombres de estos elementos se convierten en nombres de archivos. Si existe un duplicado, se añade un número al nombre. | picture |

(*) sólo si el proyecto fue exportado desde una base binaria .4db.

## Carpeta Data

La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos.

| Contenido    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Formato |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | Archivo de datos que contiene los datos introducidos en los registros y todos los datos pertenecientes a los registros. Al abrir un proyecto 4D, la aplicación abre por defecto el archivo de datos actual. Si cambia el nombre o la ubicación de este archivo, aparecerá la caja de diálogo *Abrir un archivo de datos* para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | binary  |
| data.journal | Se crea sólo cuando la base de datos utiliza un archivo de registro. El archivo de registro se utiliza para garantizar la seguridad de los datos entre las copias de seguridad. Todas las operaciones realizadas sobre los datos se registran secuencialmente en este archivo. Por lo tanto, cada operación sobre los datos provoca dos acciones simultáneas: la primera sobre los datos (la instrucción se ejecuta normalmente) y la segunda en el archivo de registro (se registra una descripción de la operación). El archivo de registro se construye de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. Una base de datos sólo puede trabajar con un único archivo de registro a la vez. El archivo de historial registra operaciones como adiciones, modificaciones o eliminaciones de registros, transacciones, etc. Se genera por defecto cuando se crea una base de datos. | binary  |
| data.match   | (interno) UUID correspondiente al número de la tabla                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | XML     |

(*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar.

### Carpeta Settings

Esta carpeta contiene **archivos de configuración de datos** utilizados para la administración de la base de datos.

> Estos parámetros tienen prioridad sobre los **[archivos de propiedades usuario](#settings-folder-1)** y los archivos de **propiedades estructura**.

| Contenido           | Descripción                                                                                                                                                                                                                                                                                                          | Formato |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Backup.4DSettings   | Parámetros de copia de seguridad de la base de datos, utilizados para definir las [opciones de copia de seguridad](Backup/settings.md)) cuando la base se lanza con este archivo de datos. Las llaves relativas a la configuración de la copia de seguridad se describen en el manual *Backup de las llaves XML 4D*. | XML     |
| settings.4DSettings | Propiedades personalizadas de la base para este archivo de datos                                                                                                                                                                                                                                                     | XML     |
| directory.json      | Descripción de los grupos y usuarios de 4D y sus derechos de acceso cuando la base se lanza con este archivo de datos.                                                                                                                                                                                               | JSON    |

### Carpeta Logs

La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:

- conversión de base de datos,
- peticiones del servidor web,
- registro de actividades de backup/restitución (*Backup Journal\[xxx].txt*, ver [Historial de backup](Backup/backup.md#backup-journal))
- depuración de comandos,
- Peticiones 4D Server (generadas en en los equipos cliente y en el servidor).

> Una carpeta Logs adicional está disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver [Obtener carpeta 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) comando) para los archivos de registro de mantenimiento y en los casos en que la carpeta de datos es de sólo lectura.

## Carpeta Settings

Esta carpeta contiene **archivos de propiedades usuario** utilizados para la administración de la base de datos. Los archivos se añaden a la carpeta si es necesario.

> Si existe un archivo de propiedades de datos [en una carpeta de datos ](#settings-folder), de la carpeta Datos, tiene prioridad sobre el archivo de propiedades del usuario.

| Contenido           | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Formato |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descripción de los grupos y usuarios de 4D para la base de datos, así como sus derechos de acceso                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| BuildApp.4DSettings | Archivo de parámetros de generación, creado automáticamente cuando se utiliza la caja de diálogo del generador de aplicaciones o del comando `BUILD APPLICATION`                                                                                                                                                                                                                                                                                                | XML     |
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

## Carpeta Components

Esta carpeta contiene los componentes que deben estar disponibles únicamente en la base proyecto. Debe almacenarse en el mismo nivel que la carpeta Project.

> Una base proyecto puede utilizarse como un componente:
> 
> - para el desarrollo: ponga un alias del archivo .4dproject en la carpeta Components de la base local.
> - para el despliegue: cree el componente (ver [Crear un paquete proyecto](building.md)) y ponga el archivo .4dz resultante en una carpeta .4dbase en la carpeta Componentes de la base local.

## Carpeta Plugins

Esta carpeta contiene los plug-ins que estarán disponibles únicamente en la base proyecto. Debe almacenarse en el mismo nivel que la carpeta Project.
