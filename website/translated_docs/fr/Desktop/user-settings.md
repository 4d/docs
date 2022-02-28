---
id: user-settings
title: Paramètres utilisateur
---

4D propose deux modes de fonctionnement pour les Propriétés des projets :

*   Mode **standard** : tous les [paramètres](../settings/overview.md) sont stockés dans le fichier [*settings.4DSettings* au niveau du projet](../Project/architecture.md#sources) et sont appliqués dans tous les cas. C'est le mode par défaut, adapté à la phase de développement (toutes les applications).

*  Mode **paramètres utilisateur** : une partie des paramètres personnalisés sont stockés dans un fichier *settings.4DSettings* [dans le dossier Settings](../Project/architecture.md#settings-1) (pour tous les fichiers de données) ou [dans le dossier Data](../Project/architecture.md#settings) (pour ce fichier de données) et sont utilisés à la place des paramètres de structure. Ce mode convient à la phase de déploiement pour les applications Desktop. Activez ce mode à l'aide d'une option située sur la [page Sécurité](../settings/security.md) des Propriétés.

En définissant des paramètres utilisateur, vous pouvez conserver des paramètres personnalisés entre les mises à jour de vos applications 4D, ou gérer des paramètres différents pour une même application 4D déployée sur plusieurs sites différents. Cela permet également d'utiliser la programmation pour gérer les fichiers de paramètres à l'aide de XML.

4D peut générer et utiliser deux types de propriétés utilisateur :

-   **Les propriétés utilisateur (standard)** : elles sont utilisées à la place des propriétés de structure pour tout fichier de données ouvert avec l'application.
-   **Propriétés utilisateur pour le fichier de données** : elles peuvent être définies spécifiquement pour chaque fichier de données utilisé avec votre application, en configurant par exemple l'ID du port ou le cache du serveur.

Avec cette option, vous pouvez facilement déployer et mettre à jour plusieurs copies de la même application Desktop avec plusieurs fichiers de données, chacun contenant des propriétés différentes.

Prenons par exemple la configuration suivante, où une application est dupliquée et où chaque copie utilise un paramètre d'ID de port différent. Si ce paramètre utilisateur est lié au fichier de données, vous pourrez mettre à jour l'application sans avoir à modifier manuellement l'ID du port :

![](assets/en/settings/user-settings-config.png)

## Activer les paramètres utilisateur

Pour activer les paramètres utilisateur, vous devez cocher l'option **Paramètres** > **Sécurité** > **Activer les paramètres utilisateur** :

![](assets/en/settings/user-settings-enable.png)

Lorsque vous cochez cette option, les paramètres sont séparés en trois boîtes de dialogue :

* **Paramètres de structure**
* **Paramètres utilisateur**
* **Paramètres utilisateur pour le fichier de données**

Vous pouvez accéder à ces boîtes de dialogue en utilisant le menu **Développement > Paramètres...** ou le bouton **Paramètres** dans la barre d'outils :

![](assets/en/settings/user-settings-dialog.png)

Vous pouvez également accéder à ces boîtes de dialogue à l'aide de la commande [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) avec le sélecteur *settingsType* approprié.

La boîte de dialogue Paramètres de structure est identique aux paramètres standard et permet d'accéder à toutes ses propriétés (qui peuvent être remplacées par des paramètres utilisateur).

## Paramètres utilisateur et paramètres utilisateur pour le fichier de données

Les boîtes de dialogue **User Settings** et **User Settings for Data File** contiennent une sélection de propriétés pertinentes qui peuvent être définies pour tous les fichiers de données ou pour un seul fichier de données :

![](assets/en/settings/user-settings-2.png)

Le tableau suivant répertorie les pages de paramètres que l'on trouve dans les boîtes de dialogue **Paramètres utilisateur** et **Paramètres utilisateur pour le fichier de données** et décrit leurs principales différences par rapport aux paramètres standard :

| **Page des paramètres de la structure**                                               | **Page des paramètres utilisateur**   | **Page des paramètres utilisateur pour le fichier de données** |
| ------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------------------------------- |
| [Page Général](../settings/general.md)                                                | N/a                                   | N/a                                                            |
| [Page Interface](../settings/interface.md)                                            | Identical to standard settings        | Identical to standard settings                                 |
| [Page Compilateur](../settings/compiler.md)                                           | N/a                                   | N/a                                                            |
| [Database/Data storage page](../settings/database.md#data-storage)                    | N/a                                   | N/a                                                            |
| [Database/Memory page](../settings/database.md#memory)                                | Identical to standard settings        | Identical to standard settings                                 |
| [Backup/Scheduler page](../settings/backup.md#scheduler)                              | N/a                                   | Identical to standard settings                                 |
| [Backup/Configuration page](../settings/backup.md#configuration)                      | N/a                                   | Identical to standard settings                                 |
| [Backup/Backup & Restore page](../settings/backup.md/#backup-restore)                 | N/a                                   | Identical to standard settings                                 |
| [Client-server/Network options page](../settings/client-server.md/#network-options)   | Identical to standard settings        | Identical to standard settings                                 |
| [Client-server/IP configuration page](../settings/client-server.md/#ip-configuration) | Identical to standard settings        | Identical to standard settings                                 |
| [Web/Configuration page](../settings/web.md#configuration)                            | Identical to standard settings        | Identical to standard settings                                 |
| [Web/Options (I) page](../settings/web.md#options)                                    | Identical to standard settings        | Identical to standard settings                                 |
| [Web/Options (II) page](../settings/web.md#options-ii)                                | Identical to standard settings        | Identical to standard settings                                 |
| [Web/Log (type) page](../settings/web.md#log)                                         | Identical to standard settings        | Identical to standard settings                                 |
| [Web/Log (backup) page](../settings/web.md#log)                                       | Identical to standard settings        | Identical to standard settings                                 |
| [Web/Web Services page](../settings/web.md#web-services)                              | Method prefixing option not available | Method prefixing option not available                          |
| [Page SQL](../settings/sql.md)                                                        | Identical to standard settings        | Identical to standard settings                                 |
| [Page PHP](../settings/php.md)                                                        | Identical to standard settings        | Identical to standard settings                                 |
| [Page sécurité](../settings/security.md)                                              | N/a                                   | N/a                                                            |
| [Page de compatibilité](../settings/compatibility.md)                                 | N/a                                   | N/a                                                            |

Lorsque vous modifiez des paramètres dans cette boîte de dialogue, ils sont automatiquement enregistrés dans le fichier *settings.4DSettings* correspondant (voir ci-dessous).

## `SET DATABASE PARAMETER` et paramètres utilisateur

Certains des paramètres utilisateur sont également disponibles via la commande [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html). Les paramètres utilisateur sont des paramètres dont la propriété **Kept between two sessions** est définie sur **Yes**.

Lorsque la fonction **Paramètres utilisateur** est activée, les paramètres utilisateur modifiés par la commande [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) sont automatiquement enregistrés dans les paramètres utilisateur du fichier de données.

> `Le numéro de séquence de la table` est une exception ; cette valeur de réglage est toujours enregistrée dans le fichier de données lui-même.

## fichiers settingd.4DSettings

Lorsque vous [cochez l'option **Activer les paramètres utilisateur**](#enabling-user-settings), des fichiers de paramètres utilisateur sont automatiquement créés. Leur emplacement dépend du type de paramètres utilisateur défini.

### Paramètres utilisateur (standard)

Le fichier de paramètres utilisateur standard est automatiquement créé et placé dans un dossier de paramètres à l'emplacement suivant :

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-1)

... où *ProjectFolder* est le nom du dossier contenant le fichier de structure du projet.

Dans les applications fusionnées, le fichier de paramètres utilisateur est placé à l'emplacement suivant :

* Dans les versions mono-utilisateur : ProjectFolder/Database/Settings/settings.4DSettings
* Dans les versions client/serveur : ProjectFolder/Database/Settings/settings.4DSettings

### Paramètres utilisateur pour le fichier de données

Le fichier de paramètres utilisateur lié au fichier de données est automatiquement créé et placé dans un dossier de paramètres à l'emplacement suivant :

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings)

... où *Data* est le nom du dossier contenant le fichier de données actuel de l'application.

> Lorsque le fichier de données est situé au même niveau que le fichier de structure du projet, les fichiers de paramètres utilisateur basés sur la structure et sur les données partagent le même emplacement et le même dossier. La commande de menu **Paramètres utilisateur pour le fichier de données...** n'est pas proposée.

Les fichiers de paramètres sont des fichiers XML ; ils peuvent être lus et modifiés à l'aide des commandes XML intégrées de 4D ou d'un éditeur XML. Cela signifie que vous pouvez gérer les paramètres par programmation, notamment dans le cadre d'applications compilées et fusionnées avec 4D Volume Desktop. Lorsque vous modifiez ce fichier par programmation, les changements ne sont pris en compte que lors de la prochaine ouverture de la base de données.

## Priorité des paramètres

Les paramètres peuvent être stockés à trois niveaux. Chaque paramètre défini à un niveau a priorité sur le même paramètre défini à un niveau précédent, le cas échéant :

| **Priority level** | **Nom**                                                                                                | **Emplacement**                                                                                                                                                  | **Commentaires**                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (le plus faible) | Paramètres de structure (ou Paramètres lorsque la fonction "Paramètres utilisateur" n'est pas activée) | Fichier ***settings.4DSettings*** dans le dossier Sources (bases projet) ou dans le dossier Settings au même niveau que le fichier de structure (bases binaires) | Emplacement unique lorsque les paramètres utilisateur ne sont pas activés. Appliqué à toutes les copies de l'application.                                       |
| 2                  | Paramètres utilisateur (tous les fichiers de données)                                                  | Fichier ***settings.4DSettings*** dans le dossier Settings au même niveau que le dossier Project                                                                 | Remplace les paramètres de structure. Stocké dans le package de l'application.                                                                                  |
| 1 (le plus élevé)  | Paramètres utilisateur (fichier de données courant)                                                    | Fichier ***settings.4DSettings*** dans le dossier Settings au même niveau que le fichier de données                                                              | Remplace les paramètres de structure et les paramètres utilisateur. S'applique uniquement lorsque le fichier de données associé est utilisé avec l'application. |

A noter que les fichiers de paramètres utilisateur ne contiennent qu'un sous-ensemble de paramètres pertinents, tandis que le fichier de structure contient tous les paramètres personnalisés, y compris les paramètres essentiels.
