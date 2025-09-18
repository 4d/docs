---
id: overview
title: Settings
---

The Settings configure how the current project functions. These parameters may be different for each project. They include the listening ports, backup configurations, security options, Web parameters, etc.

![](../assets/en/settings/main.png)   


:::info

4D provides another set of parameters, called **Preferences**, that apply to the 4D IDE application. For more information, refer to [Preferences](../Preferences/general.md).

:::

## Accessing the settings

You can access the Settings dialog box:

-   using the **Design > Settings...** menu option
-   by clicking **Settings** on the 4D toolbar
-   on 4D Server, using the **Edit > Settings...** menu option

When [**User settings** mode is enabled](#user-settings), **Settings...** is renamed **Structure Settings...** and two additional menu commands are available at each location:

-   **User Settings...** gives you access to settings that can be stored externally in a user file. If these are modified, they are used instead of structure settings.
-   **User Settings for Data File...** gives you access to settings that can be stored externally in a user file attached to the current data file. If they are modified, they are used instead of user or structure settings.

### Locking information  

Locking can occur in both Project and Client/server modes when:

-   The *settings.4DSettings* file is 'Read-only' (Projects only). Modifying a setting will display an alert to unlock it, if possible.
-   Two or more users attempt to modify the same settings at the same time. The settings cannot be used until the first user frees it by closing the window. (Client/server only)

In both cases, the settings can be opened in 'Read-only', but cannot be used until the lock is removed.



## Customizing parameters

In the Settings dialog boxes, parameters whose values have been modified appear **in bold**:

![](../assets/en/settings/customize-settings.png)   

Parameters indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted project. 

A parameter still appears in bold even when its value is replaced manually with its default values. This way it is always possible to visually identify any parameters that have been customized.

Most of the settings are applied immediately. However, a few of them (such as the Startup environment setting) only take effect when the database is restarted. In this case, a dialog box appears to inform you that the change will take effect at the next startup.


### Resetting the settings

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click **Reset to factory settings**. 
 
This button resets all the parameters of the current page. It becomes active when at least one parameter has been modified on the current page.


## User Settings

4D provides two modes of operation for project Settings:

*   **Standard** mode: all settings are stored in the [*settings.4DSettings* file at the project level](../Project/architecture.md#sources) and are applied in all cases. This is the default mode, suitable for development phase (all applications).

*  **User settings** mode: part of the custom settings are stored in a *settings.4DSettings* file [in the Settings folder](../Project/architecture.md#settings-user) (for all data files) or [in the Data folder](../Project/architecture.md#settings-user-data) (for this data file) and are used instead of the structure settings. This mode is suitable for deployment phase for Desktop applications. You enable this mode using an option located on the [Security page](./security.md) of the Settings. 

By defining user settings, you can keep custom settings between updates of your 4D applications, or manage different settings for the same 4D application deployed on several different sites. It also makes it possible to use programming to manage setting files using XML.

4D can generate and use two types of user settings:

-   **User Settings**: They are used instead of structure settings for any data file opened with the application.
-   **User Settings for Data file**: They can be defined specifically for each data file used with your application, configuring for example the port ID or the server cache.

With this option, you can easily deploy and update several copies of the same desktop application with several data files, each containing different settings. 
    
Consider for example the following configuration, where an application is duplicated and each copy uses a different Port ID setting. If this user setting is linked to the data file, you will be able to update the application without having to manually change the Port ID:

![](../assets/en/settings/user-settings-config.png)

### Enabling User settings

To enable user settings, you need to check the **Settings** > **Security** > **Enable User Settings** option:

![](../assets/en/settings/user-settings-enable.png)

When you check this option, the settings are separated into three dialog boxes: 

* **Structure Settings**
* **User Settings**
* **User Settings for Data file**

You can access these dialog boxes using the **Design > Settings...** menu or the **Settings** button in the toolbar:

![](../assets/en/settings/user-settings-dialog.png)

You can also access these dialog boxes using the [OPEN SETTINGS WINDOW](../commands-legacy/open-settings-window.md) command with the appropriate *settingsType* selector.

The Structure Settings dialog box is identical to the standard Settings, and provides access to all its properties (which can be overriden by user settings). 

### User Settings and User Settings for Data file

The **User Settings** and **User Settings for Data File** dialog boxes contain a selection of relevant properties that can be defined for all data files or a single data file:

![](../assets/en/settings/user-settings-2.png)

The following table lists the pages of settings found in the **User Settings** and **User Settings for Data File** dialog boxes and describes their main differences with respect to standard settings:

| **Page of Structure Settings** | **Page of User Settings** | **Page of User Settings for Data File**|
| --- | --- | --- |
| [General page](./general.md) | N/a | N/a |
| [Interface page](./interface.md) | Identical to standard settings | Identical to standard settings |
| [Compiler page](./compiler.md) | N/a | N/a |
| [Database/Data storage page](./database.md#data-storage-page) | N/a | N/a |
| [Database/Memory page](./database.md#memory-page) | Identical to standard settings | Identical to standard settings |
| [Backup/Scheduler page](./../Backup/settings.md#scheduler) | N/a | Identical to standard settings |
| [Backup/Configuration page](./../Backup/settings.md#configuration) | N/a | Identical to standard settings |
| [Backup/Backup & Restore page](./../Backup/settings.md#backup--restore) | N/a | Identical to standard settings |
| [Client-server/Network options page](./client-server.md#network-options-page) | Identical to standard settings | Identical to standard settings |
| [Client-server/IP configuration page](./client-server.md#ip-configuration-page) | Identical to standard settings | Identical to standard settings |
| [Web/Configuration page](./web.md#configuration) | Identical to standard settings | Identical to standard settings |
| [Web/Options (I) page](./web.md#options-i) | Identical to standard settings | Identical to standard settings |
| [Web/Options (II) page](./web.md#options-ii) | Identical to standard settings | Identical to standard settings |
| [Web/Log (type) page](./web.md#log-type) | Identical to standard settings | Identical to standard settings |
| [Web/Log (backup) page](./web.md#log-backup) | Identical to standard settings | Identical to standard settings |
| [Web/Web Services page](./web.md#web-services) | Method prefixing option not available | Method prefixing option not available |
| [SQL page](./sql.md) | Identical to standard settings | Identical to standard settings |
| [PHP page](./php.md) | Identical to standard settings | Identical to standard settings |
| [Security page](./security.md) | N/a | N/a |
| [Compatibility page](./compatibility.md) | N/a | N/a |

When you edit settings in this dialog box, they are automatically stored in the corresponding *settings.4DSettings* file (see below) or the *Backup.4DSettings* file (check the [Backup settings](../Backup/settings.md) page for more information).

### `SET DATABASE PARAMETER` and user settings  

Some of the user settings are also available through the [SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md) command. User settings are parameters with the **Kept between two sessions** property set to **Yes**.

When the **User Settings** feature is enabled, user settings edited by the [SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md) command are automatically saved in the user settings for the data file.

> `Table sequence number` is an exception; this setting value is always saved in the data file itself.

### settings.4DSettings files  

When you [check the **Enable User Settings** option](#enabling-user-settings), user settings files are automatically created. Their location depends on the type of user settings defined.

#### User Settings  

The standard user settings file is automatically created and placed in a settings folder at the following location:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... where *ProjectFolder* is the name of the folder containing the project structure file.

In merged applications, the user settings file is placed at the following location:

* In single-user versions: ProjectFolder/Database/Settings/settings.4DSettings
* In client/server versions: ProjectFolder/Server Database/Settings/settings.4DSettings

#### User Settings for Data File 

The user settings file linked to the data file is automatically created and placed in a settings folder at the following location:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... where *Data* is the name of the folder containing the current data file of the application.

> When the data file is located at the same level as the project structure file, structure-based and data-based user settings files share the same location and file. The **User Settings for Data File...** menu command is not proposed.

:::note

Settings files are XML files; they can be read and modified using integrated 4D XML commands or using an XML editor. This means that you can manage settings by programming, particularly in the context of applications compiled and merged with 4D Volume Desktop. When you modify this file by programming, the changes are only taken into account the next time the database is opened. 

:::


### Priority of settings 

Settings can be stored at three levels. Each setting defined at one level overrides the same setting defined at a previous level, if any:

| **Priority level** | **Name** | **Location** | **Comments** |
|---|---|---|---|
| 3 (lowest) | Structure settings (or Settings when "User settings" feature not enabled) | ***settings.4DSettings*** file in the Sources folder (project databases) or in the Settings folder as the same level as the structure file (binary databases) | Unique location when user settings are not enabled. Applied to all copies of the application.  |
| 2 | User settings (all data files) | ***settings.4DSettings*** file in the Settings folder at the same level as the Project folder | Overrides Structure settings. Stored within the application package. |
| 1 (highest) | User settings (current data file) | ***settings.4DSettings*** file in the Settings folder at the same level as the data file | Overrides Structure settings and User settings. Applied only when the linked data file is used with the application. |

Keep in mind that user settings files only contain a subset of relevant settings, while the structure file contains all custom settings, including core settings.
