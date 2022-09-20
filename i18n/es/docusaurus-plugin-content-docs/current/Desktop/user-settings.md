---
id: user-settings
title: Propiedades usuario
---

4D ofrece dos modos de funcionamiento para las Propiedades de los proyectos:

*   **Standard** mode: all [settings](../settings/overview.md) are stored in the [*settings.4DSettings* file at the project level](../Project/architecture.md#sources) and are applied in all cases. This is the default mode, suitable for development phase (all applications).

*  **User settings** mode: part of the custom settings are stored in a *settings.4DSettings* file [in the Settings folder](../Project/architecture.md#settings-1) (for all data files) or [in the Data folder](../Project/architecture.md#settings) (for this data file) and are used instead of the structure settings. Este modo es adecuado para la fase de despliegue de las aplicaciones de escritorio. You enable this mode using an option located on the [Security page](../settings/security.md) of the Settings.

By defining user settings, you can keep custom settings between updates of your 4D applications, or manage different settings for the same 4D application deployed on several different sites. It also makes it possible to use programming to manage setting files using XML.

4D puede generar y utilizar dos tipos de propiedades usuario:

-   **User Settings (standard)**: They are used instead of structure settings for any data file opened with the application.
-   **User Settings for Data file**: They can be defined specifically for each data file used with your application, configuring for example the port ID or the server cache.

With this option, you can easily deploy and update several copies of the same desktop application with several data files, each containing different settings.

Consider for example the following configuration, where an application is duplicated and each copy uses a different Port ID setting. If this user setting is linked to the data file, you will be able to update the application without having to manually change the Port ID:

![](../assets/en/settings/user-settings-config.png)

## Activar las propiedades usuario

To enable user settings, you need to check the **Settings** > **Security** > **Enable User Settings** option:

![](../assets/en/settings/user-settings-enable.png)

When you check this option, the settings are separated into three dialog boxes:

* **Propiedades estructura**
* **Propiedades usuario**
* **Propiedades usuario para el archivo de datos**

You can access these dialog boxes using the **Design > Settings...** menu or the **Settings** button in the toolbar:

![](../assets/en/settings/user-settings-dialog.png)

You can also access these dialog boxes using the [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) command with the appropriate *settingsType* selector.

The Structure Settings dialog box is identical to the standard Settings, and provides access to all its properties (which can be overriden by user settings).

## Propiedades usuario y propiedades de usuario para el archivo de datos

The **User Settings** and **User Settings for Data File** dialog boxes contain a selection of relevant properties that can be defined for all data files or a single data file:

![](../assets/en/settings/user-settings-2.png)

The following table lists the pages of settings found in the **User Settings** and **User Settings for Data File** dialog boxes and describes their main differences with respect to standard settings:

| **Página de Propiedades estructura**                                                      | **Página de las Propiedades usuario**              | **Página de Propiedades usuario para archivo de datos** |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| [Página General](../settings/general.md)                                                  | N/a                                                | N/a                                                     |
| [Página interfaz](../settings/interface.md)                                               | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página Compilador](../settings/compiler.md)                                              | N/a                                                | N/a                                                     |
| [Página Base de datos/almacenamiento de datos](../settings/database.md#data-storage)      | N/a                                                | N/a                                                     |
| [Página Base de datos/Memoria](../settings/database.md#memory)                            | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Page Backup/Periodicidad](../settings/backup.md#scheduler)                               | N/a                                                | Idéntica a las Propiedades estándar                     |
| [Página Backup/Configuración](../settings/backup.md#configuration)                        | N/a                                                | Idéntica a las Propiedades estándar                     |
| [Página Backup & Backup y restaurar](../settings/backup.md#backup-restore)                | N/a                                                | Idéntica a las Propiedades estándar                     |
| [Página Cliente-Servidor/Opciones red](../settings/client-server.md#network-options)      | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página Cliente-Servidor/Configuración IP](../settings/client-server.md#ip-configuration) | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página Web/Configuración](../settings/web.md#configuration)                              | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página Web/Opciones (I)](../settings/web.md#options)                                     | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página Web/Opciones (II)](../settings/web.md#options-ii)                                 | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página Web/Log (tipo)](../settings/web.md#log)                                           | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página Web/Log (backup)](../settings/web.md#log)                                         | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página Web/Web services](../settings/web.md#web-services)                                | Opción de prefijación de los métodos no disponible | Opción de prefijación de los métodos no disponible      |
| [Página SQL](../settings/sql.md)                                                          | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Págin PHP](../settings/php.md)                                                           | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Página seguridad](../settings/security.md)                                               | N/a                                                | N/a                                                     |
| [Página de compatibilidad](../settings/compatibility.md)                                  | N/a                                                | N/a                                                     |

When you edit settings in this dialog box, they are automatically stored in the corresponding *settings.4DSettings* file (see below).

## `SET PARAMETER DE LA BASE DE DATOS` y propiedades usuario

Some of the user settings are also available through the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command. Las propiedades usuario son parámetros con la propiedad **Conservado entre dos sesiones** establecida en **Sí**.

Cuando la funcionalidad **Propiedades usuario** está activada, las propiedades usuario editadas por el comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) se guardan automáticamente en las Propiedades usuario para el archivo de datos.

> `Table sequence number` es una excepción; este valor de ajuste siempre se guarda en el propio archivo de datos.

## Archivos settings.4DSettings

Cuando [marca la opción **Autorizar las propiedades usuario**](#enabling-user-settings), los archivos de propiedades usuario se crean automáticamente. Su ubicación depende del tipo de propiedad usuario definida.

### Parámetros usuario (estándar)

El archivo de propiedad usuario estándar se crea automáticamente y se coloca en una carpeta de propiedades en la siguiente ubicación:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-1)

... donde *ProjectFolder* es el nombre de la carpeta que contiene el archivo de estructura del proyecto.

En las aplicaciones fusionadas, el archivo de propiedades usuario se coloca en la siguiente ubicación:

* En las versiones mono-usuario: ProjectFolder/Database/Settings/settings.4DSettings
* En las versiones cliente/servidor: ProjectFolder/Server Database/Settings/settings.4DSettings

### Propiedades usuario para archivo de datos

El archivo de propiedades usuario vinculado al archivo de datos automáticamente se crea y se coloca en una carpeta de propiedades en la siguiente ubicación:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings)

... donde *Data* es el nombre de la carpeta que contiene el archivo de datos actual de la aplicación.

> Cuando el archivo de datos se encuentra en el mismo nivel que el archivo de estructura del proyecto, los archivos de propiedades usuario basados en la estructura y en los datos comparten la misma ubicación y el mismo archivo. El comando de menú **Propiedades usuario para el archivo de datos...** no se propone.

Los archivos de propiedades son archivos XML; pueden ser leídos y modificados utilizando los comandos XML integrados de 4D o un editor XML. Esto significa que puede gestionar los parámetros por programación, especialmente en el contexto de las aplicaciones compiladas y fusionadas con 4D Volume Desktop. Cuando se modifica este archivo por programación, los cambios sólo se tienen en cuenta la siguiente vez que se abre la base de datos.

## Prioridad de los parámetros

Las propiedades pueden almacenarse en tres niveles. Cada parámetro definido en un nivel anula el mismo ajuste definido en un nivel anterior, si lo hay:

| **Nivel de prioridad** | **Nombre**                                                                                        | **Ubicación**                                                                                                                                          | **Comentarios**                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (el más bajo)        | Parámetros de estructura (o Parámetros cuando la función "Parámetros usuario" no está habilitada) | ***settings.4DSettings*** en la carpeta Sources (bases proyecto) o en la carpeta Settings al mismo nivel que el archivo de estructura (bases binarias) | Ubicación única cuando los parámetros usuario no están activos. Se aplica a todas las copias de la aplicación.                                            |
| 2                      | Propiedades usuario (todos los archivos de datos)                                                 | Archivo ***settings.4DSettings*** en la carpeta Settings en el mismo nivel que la carpeta Project                                                      | Reemplaza las propiedades de estructura. Se almacena en el paquete de la aplicación.                                                                      |
| 1 (el mayor)           | Propiedades usuario (archivo de datos actual)                                                     | Archivo ***settings.4DSettings*** en la carpeta Settings al mismo nivel que el archivo de datos                                                        | Reemplaza las propiedades de estructura y las propiedades usuario. Se aplica únicamente cuando el archivo de datos asociado se utiliza con la aplicación. |

Tenga en cuenta que los archivos de propiedades usuario sólo contienen un subconjunto de parámetros relevantes, mientras que el archivo de estructura contiene todos los parámetros personalizados, incluidos los parámetros de bajo nivel.
