---
id: user-settings
title: Propiedades usuario
---

4D ofrece dos modos de funcionamiento para las Propiedades de los proyectos:

- **Standard** mode: all [settings](../settings/overview.md) are stored in the [_settings.4DSettings_ file at the project level](../Project/architecture.md#sources) and are applied in all cases. Este es el modo por defecto, adecuado para la fase de desarrollo (todas las aplicaciones).

- **User settings** mode: part of the custom settings are stored in a _settings.4DSettings_ file [in the Settings folder](../Project/architecture.md#settings-user) (for all data files) or [in the Data folder](../Project/architecture.md#settings-user-data) (for this data file) and are used instead of the structure settings. Este modo es adecuado para la fase de despliegue de las aplicaciones de escritorio. You enable this mode using an option located on the [Security page](../settings/security.md) of the Settings.

Al definir las propiedades usuario, puede conservar los parámetros personalizados entre las actualizaciones de sus aplicaciones 4D, o gestionar parámetros diferentes para una misma aplicación 4D desplegada en varios sitios diferentes. También permite utilizar la programación para gestionar los archivos de configuración utilizando XML.

4D puede generar y utilizar dos tipos de propiedades usuario:

- **User Settings**: They are used instead of structure settings for any data file opened with the application.
- **User Settings for Data file**: They can be defined specifically for each data file used with your application, configuring for example the port ID or the server cache.

Con esta opción, puede desplegar y actualizar fácilmente varias copias de la misma aplicación de escritorio con varios archivos de datos, cada uno de los cuales contiene propiedades diferentes.

Considere, por ejemplo, la siguiente configuración, en la que se duplica una aplicación y cada copia utiliza un parámetro de ID de puerto diferente. Si este parámetro usuario está vinculado al archivo de datos, podrá actualizar la aplicación sin tener que cambiar manualmente el ID del puerto:

![](../assets/en/settings/user-settings-config.png)

## Activar las propiedades usuario

To enable user settings, you need to check the **Settings** > **Security** > **Enable User Settings** option:

![](../assets/en/settings/user-settings-enable.png)

Cuando se marca esta opción, los parámetros se separan en tres cajas de diálogo:

- **Propiedades estructura**
- **Propiedades usuario**
- **Propiedades usuario para el archivo de datos**

You can access these dialog boxes using the **Design > Settings...** menu or the **Settings** button in the toolbar:

![](../assets/en/settings/user-settings-dialog.png)

You can also access these dialog boxes using the [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) command with the appropriate _settingsType_ selector.

La caja de diálogo Propiedades de estructura es idéntica a la caja de diálogo Propiedades estándar, y permite acceder a todas sus propiedades (que pueden ser anuladas por las propiedades usuario).

## Propiedades usuario y propiedades de usuario para el archivo de datos

The **User Settings** and **User Settings for Data File** dialog boxes contain a selection of relevant properties that can be defined for all data files or a single data file:

![](../assets/en/settings/user-settings-2.png)

The following table lists the pages of settings found in the **User Settings** and **User Settings for Data File** dialog boxes and describes their main differences with respect to standard settings:

| **Página de Propiedades estructura**                                                     | **Página de las Propiedades usuario**              | **Página de Propiedades usuario para archivo de datos** |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| [General page](../settings/general.md)                                                   | N/a                                                | N/a                                                     |
| [Interface page](../settings/interface.md)                                               | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Compiler page](../settings/compiler.md)                                                 | N/a                                                | N/a                                                     |
| [Database/Data storage page](../settings/database.md#data-storage)                       | N/a                                                | N/a                                                     |
| [Database/Memory page](../settings/database.md#memory)                                   | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Backup/Scheduler page](../settings/backup.md#scheduler)                                 | N/a                                                | Idéntica a las Propiedades estándar                     |
| [Backup/Configuration page](../settings/backup.md#configuration)                         | N/a                                                | Idéntica a las Propiedades estándar                     |
| [Backup/Backup & Restore page](../settings/backup.md#backup-restore) | N/a                                                | Idéntica a las Propiedades estándar                     |
| [Client-server/Network options page](../settings/client-server.md#network-options)       | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Client-server/IP configuration page](../settings/client-server.md#ip-configuration)     | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Web/Configuration page](../settings/web.md#configuration)                               | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Web/Options (I) page](../settings/web.md#options)                    | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Web/Options (II) page](../settings/web.md#options-ii)                | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Web/Log (type) page](../settings/web.md#log)                         | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Web/Log (backup) page](../settings/web.md#log)                       | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Web/Web Services page](../settings/web.md#web-services)                                 | Opción de prefijación de los métodos no disponible | Opción de prefijación de los métodos no disponible      |
| [SQL page](../settings/sql.md)                                                           | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [PHP page](../settings/php.md)                                                           | Idéntica a las Propiedades estándar                | Idéntica a las Propiedades estándar                     |
| [Security page](../settings/security.md)                                                 | N/a                                                | N/a                                                     |
| [Compatibility page](../settings/compatibility.md)                                       | N/a                                                | N/a                                                     |

When you edit settings in this dialog box, they are automatically stored in the corresponding _settings.4DSettings_ file (see below) or the _Backup.4DSettings_ file (check the [Backup settings](../Backup/settings.md) page for more information).

## `SET DATABASE PARAMETER` and user settings

Some of the user settings are also available through the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command. User settings are parameters with the **Kept between two sessions** property set to **Yes**.

When the **User Settings** feature is enabled, user settings edited by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command are automatically saved in the user settings for the data file.

> `Table sequence number` is an exception; this setting value is always saved in the data file itself.

## Archivos settings.4DSettings

When you [check the **Enable User Settings** option](#enabling-user-settings), user settings files are automatically created. Su ubicación depende del tipo de propiedad usuario definida.

### Propiedades usuario

El archivo de propiedad usuario estándar se crea automáticamente y se coloca en una carpeta de propiedades en la siguiente ubicación:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... where _ProjectFolder_ is the name of the folder containing the project structure file.

En las aplicaciones fusionadas, el archivo de propiedades usuario se coloca en la siguiente ubicación:

- En las versiones mono-usuario: ProjectFolder/Database/Settings/settings.4DSettings
- En las versiones cliente/servidor: ProjectFolder/Server Database/Settings/settings.4DSettings

### Propiedades usuario para archivo de datos

El archivo de propiedades usuario vinculado al archivo de datos automáticamente se crea y se coloca en una carpeta de propiedades en la siguiente ubicación:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... where _Data_ is the name of the folder containing the current data file of the application.

> Cuando el archivo de datos se encuentra en el mismo nivel que el archivo de estructura del proyecto, los archivos de propiedades usuario basados en la estructura y en los datos comparten la misma ubicación y el mismo archivo. The **User Settings for Data File...** menu command is not proposed.

:::note

Los archivos de propiedades son archivos XML; pueden ser leídos y modificados utilizando los comandos XML integrados de 4D o un editor XML. Esto significa que puede gestionar los parámetros por programación, especialmente en el contexto de las aplicaciones compiladas y fusionadas con 4D Volume Desktop. Cuando se modifica este archivo por programación, los cambios sólo se tienen en cuenta la siguiente vez que se abre la base de datos.

:::

## Prioridad de los parámetros

Las propiedades pueden almacenarse en tres niveles. Cada parámetro definido en un nivel anula el mismo ajuste definido en un nivel anterior, si lo hay:

| **Nivel de prioridad**             | **Name**                                                                                                             | **Ubicación**                                                                                                                                                                                                       | **Comments**                                                                                                                                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (el más bajo) | Parámetros de estructura (o Parámetros cuando la función "Parámetros usuario" no está habilitada) | _**settings.4DSettings**_ file in the Sources folder (project databases) or in the Settings folder as the same level as the structure file (binary databases) | Ubicación única cuando los parámetros usuario no están activos. Se aplica a todas las copias de la aplicación.                                            |
| 2                                  | Propiedades usuario (todos los archivos de datos)                                                 | _**settings.4DSettings**_ file in the Settings folder at the same level as the Project folder                                                                                                       | Reemplaza las propiedades de estructura. Se almacena en el paquete de la aplicación.                                                                      |
| 1 (el mayor)    | Propiedades usuario (archivo de datos actual)                                                     | _**settings.4DSettings**_ file in the Settings folder at the same level as the data file                                                                                                            | Reemplaza las propiedades de estructura y las propiedades usuario. Se aplica únicamente cuando el archivo de datos asociado se utiliza con la aplicación. |

Tenga en cuenta que los archivos de propiedades usuario sólo contienen un subconjunto de parámetros relevantes, mientras que el archivo de estructura contiene todos los parámetros personalizados, incluidos los parámetros de bajo nivel.
