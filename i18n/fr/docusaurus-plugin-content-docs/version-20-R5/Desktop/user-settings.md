---
id: user-settings
title: Propriétés utilisateur
---

4D propose deux modes de fonctionnement pour les Propriétés des projets :

- **Standard** mode: all [settings](../settings/overview.md) are stored in the [_settings.4DSettings_ file at the project level](../Project/architecture.md#sources) and are applied in all cases. C'est le mode par défaut, adapté à la phase de développement (toutes les applications).

- **User settings** mode: part of the custom settings are stored in a _settings.4DSettings_ file [in the Settings folder](../Project/architecture.md#settings-user) (for all data files) or [in the Data folder](../Project/architecture.md#settings-user-data) (for this data file) and are used instead of the structure settings. Ce mode convient à la phase de déploiement pour les applications Desktop. You enable this mode using an option located on the [Security page](../settings/security.md) of the Settings.

En définissant des propriétés utilisateur, vous pouvez conserver des paramètres personnalisés entre les mises à jour de vos applications 4D, ou gérer des paramètres différents pour une même application 4D déployée sur plusieurs sites différents. Cela permet également d'utiliser la programmation pour gérer les fichiers de paramètres à l'aide de XML.

4D peut générer et utiliser deux types de propriétés utilisateur :

- **User Settings**: They are used instead of structure settings for any data file opened with the application.
- **User Settings for Data file**: They can be defined specifically for each data file used with your application, configuring for example the port ID or the server cache.

Avec cette option, vous pouvez facilement déployer et mettre à jour plusieurs copies de la même application Desktop avec plusieurs fichiers de données, chacun contenant des propriétés différentes.

Prenons par exemple la configuration suivante, où une application est dupliquée et où chaque copie utilise un paramètre d'ID de port différent. Si ce paramètre utilisateur est lié au fichier de données, vous pourrez mettre à jour l'application sans avoir à modifier manuellement l'ID du port :

![](../assets/en/settings/user-settings-config.png)

## Activer les propriétés utilisateur

To enable user settings, you need to check the **Settings** > **Security** > **Enable User Settings** option:

![](../assets/en/settings/user-settings-enable.png)

Lorsque vous cochez cette option, les paramètres sont séparés en trois boîtes de dialogue :

- **Propriétés structure**
- **Propriétés utilisateur**
- **Propriétés utilisateur pour le fichier de données**

You can access these dialog boxes using the **Design > Settings...** menu or the **Settings** button in the toolbar:

![](../assets/en/settings/user-settings-dialog.png)

You can also access these dialog boxes using the [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) command with the appropriate _settingsType_ selector.

La boîte de dialogue Propriétés de structure est identique à la boîte de dialogue Propriétés standard et permet d'accéder à toutes ses propriétés (qui peuvent être écrasées par des propriétés utilisateur).

## Propriétés utilisateur et propriétés utilisateur pour le fichier de données

The **User Settings** and **User Settings for Data File** dialog boxes contain a selection of relevant properties that can be defined for all data files or a single data file:

![](../assets/en/settings/user-settings-2.png)

The following table lists the pages of settings found in the **User Settings** and **User Settings for Data File** dialog boxes and describes their main differences with respect to standard settings:

| **Page des Propriétés structure**                                                        | **Page des Propriétés utilisateur**             | **Page des Propriétés utilisateur pour fichier de données** |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| [General page](../settings/general.md)                                                   | N/a                                             | N/a                                                         |
| [Interface page](../settings/interface.md)                                               | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Compiler page](../settings/compiler.md)                                                 | N/a                                             | N/a                                                         |
| [Database/Data storage page](../settings/database.md#data-storage)                       | N/a                                             | N/a                                                         |
| [Database/Memory page](../settings/database.md#memory)                                   | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Backup/Scheduler page](../settings/backup.md#scheduler)                                 | N/a                                             | Identique aux Propriétés structure                          |
| [Backup/Configuration page](../settings/backup.md#configuration)                         | N/a                                             | Identique aux Propriétés structure                          |
| [Backup/Backup & Restore page](../settings/backup.md#backup-restore) | N/a                                             | Identique aux Propriétés structure                          |
| [Client-server/Network options page](../settings/client-server.md#network-options)       | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Client-server/IP configuration page](../settings/client-server.md#ip-configuration)     | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Web/Configuration page](../settings/web.md#configuration)                               | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Web/Options (I) page](../settings/web.md#options)                    | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Web/Options (II) page](../settings/web.md#options-ii)                | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Web/Log (type) page](../settings/web.md#log)                         | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Web/Log (backup) page](../settings/web.md#log)                       | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Web/Web Services page](../settings/web.md#web-services)                                 | Option de préfixage des méthodes non disponible | Option de préfixage des méthodes non disponible             |
| [SQL page](../settings/sql.md)                                                           | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [PHP page](../settings/php.md)                                                           | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Security page](../settings/security.md)                                                 | N/a                                             | N/a                                                         |
| [Compatibility page](../settings/compatibility.md)                                       | N/a                                             | N/a                                                         |

When you edit settings in this dialog box, they are automatically stored in the corresponding _settings.4DSettings_ file (see below) or the _Backup.4DSettings_ file (check the [Backup settings](../Backup/settings.md) page for more information).

## `SET DATABASE PARAMETER` and user settings

Some of the user settings are also available through the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command. User settings are parameters with the **Kept between two sessions** property set to **Yes**.

When the **User Settings** feature is enabled, user settings edited by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command are automatically saved in the user settings for the data file.

> `Table sequence number` is an exception; this setting value is always saved in the data file itself.

## Fichiers settings.4DSettings

When you [check the **Enable User Settings** option](#enabling-user-settings), user settings files are automatically created. Leur emplacement dépend du type de propriété utilisateur définie.

### Propriétés utilisateur

Le fichier de propriété utilisateur standard est automatiquement créé et placé dans un dossier de propriétés à l'emplacement suivant :

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... where _ProjectFolder_ is the name of the folder containing the project structure file.

Dans les applications fusionnées, le fichier de propriétés utilisateur est placé à l'emplacement suivant :

- Dans les versions mono-utilisateur : ProjectFolder/Database/Settings/settings.4DSettings
- Dans les versions client/serveur : ProjectFolder/Database/Settings/settings.4DSettings

### Propriétés utilisateur pour fichier de données

Le fichier de propriétés utilisateur lié au fichier de données est automatiquement créé et placé dans un dossier de propriétés à l'emplacement suivant :

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... where _Data_ is the name of the folder containing the current data file of the application.

> Lorsque le fichier de données est situé au même niveau que le fichier de structure du projet, les fichiers de propriétés utilisateur basés sur la structure et sur les données partagent le même emplacement et le même fichier. The **User Settings for Data File...** menu command is not proposed.

:::note

Les fichiers de propriétés sont des fichiers XML ; ils peuvent être lus et modifiés à l'aide des commandes XML intégrées de 4D ou d'un éditeur XML. Cela signifie que vous pouvez gérer les paramètres par programmation, notamment dans le cadre d'applications compilées et fusionnées avec 4D Volume Desktop. Lorsque vous modifiez ce fichier par programmation, les changements ne sont pris en compte que lors de la prochaine ouverture de la base de données.

:::

## Priorité des paramètres

Les propriétés peuvent être stockées à trois niveaux. Chaque paramètre défini à un niveau a priorité sur le même paramètre défini à un niveau précédent, le cas échéant :

| **Niveau de priorité**                | **Name**                                                                                                                  | **Location**                                                                                                                                                                                                        | **Comments**                                                                                                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (le plus faible) | Paramètres de structure (ou Paramètres lorsque la fonction "Paramètres utilisateur" n'est pas activée) | _**settings.4DSettings**_ file in the Sources folder (project databases) or in the Settings folder as the same level as the structure file (binary databases) | Emplacement unique lorsque les paramètres utilisateur ne sont pas activés. Appliqué à toutes les copies de l'application.                                       |
| 2                                     | Propriétés utilisateur (tous les fichiers de données)                                                  | _**settings.4DSettings**_ file in the Settings folder at the same level as the Project folder                                                                                                       | Remplace les propriétés de structure. Stocké dans le package de l'application.                                                                                  |
| 1 (le plus élevé)  | Propriétés utilisateur (fichier de données courant)                                                    | _**settings.4DSettings**_ file in the Settings folder at the same level as the data file                                                                                                            | Remplace les propriétés de structure et les propriétés utilisateur. S'applique uniquement lorsque le fichier de données associé est utilisé avec l'application. |

A noter que les fichiers de propriétés utilisateur ne contiennent qu'un sous-ensemble de paramètres pertinents, tandis que le fichier de structure contient tous les paramètres personnalisés, y compris les paramètres de bas niveau.
