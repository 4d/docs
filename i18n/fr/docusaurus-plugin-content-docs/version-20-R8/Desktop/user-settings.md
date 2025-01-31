---
id: user-settings
title: Propriétés utilisateur
---

4D propose deux modes de fonctionnement pour les Propriétés des projets :

- Mode **Standard** : tous les [paramètres](../settings/overview.md) sont stockés dans le fichier [*settings.4DSettings* au niveau du projet](../Project/architecture.md#sources) et sont appliqués dans tous les cas. C'est le mode par défaut, adapté à la phase de développement (toutes les applications).

- **Mode propriétés utilisateur** : une partie des paramètres personnalisés sont stockés dans un fichier *settings.4DSettings* [dans le dossier Settings](../Project/architecture.md#settings-user) (pour tous les fichiers de données) ou [dans le dossier Data](../Project/architecture.md#settings-user-data) (pour ce fichier de données) et sont utilisés à la place des paramètres de structure. Ce mode convient à la phase de déploiement pour les applications Desktop. Activez ce mode à l'aide d'une option située sur la [page Sécurité](../settings/security.md) des Propriétés.

En définissant des propriétés utilisateur, vous pouvez conserver des paramètres personnalisés entre les mises à jour de vos applications 4D, ou gérer des paramètres différents pour une même application 4D déployée sur plusieurs sites différents. Cela permet également d'utiliser la programmation pour gérer les fichiers de paramètres à l'aide de XML.

4D peut générer et utiliser deux types de propriétés utilisateur :

- **Propriétés utilisateur** : elles sont utilisées à la place des propriétés de structure pour tout fichier de données ouvert avec l'application.
- **Propriétés utilisateur pour le fichier de données** : elles peuvent être définies spécifiquement pour chaque fichier de données utilisé avec votre application, en configurant par exemple l'ID du port ou le cache du serveur.

Avec cette option, vous pouvez facilement déployer et mettre à jour plusieurs copies de la même application Desktop avec plusieurs fichiers de données, chacun contenant des propriétés différentes.

Prenons par exemple la configuration suivante, où une application est dupliquée et où chaque copie utilise un paramètre d'ID de port différent. Si ce paramètre utilisateur est lié au fichier de données, vous pourrez mettre à jour l'application sans avoir à modifier manuellement l'ID du port :

![](../assets/en/settings/user-settings-config.png)

## Activer les propriétés utilisateur

Pour activer les paramètres utilisateur, vous devez cocher l'option **Paramètres** > **Sécurité** > **Autoriser les propriétés utilisateur** :

![](../assets/en/settings/user-settings-enable.png)

Lorsque vous cochez cette option, les paramètres sont séparés en trois boîtes de dialogue :

- **Propriétés structure**
- **Propriétés utilisateur**
- **Propriétés utilisateur pour le fichier de données**

Vous pouvez accéder à ces boîtes de dialogue en utilisant le menu **Développement > Propriétés...** ou le bouton **Propriétés** dans la barre d'outils :

![](../assets/en/settings/user-settings-dialog.png)

Vous pouvez également accéder à ces boîtes de dialogue à l'aide de la commande [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) avec le sélecteur *settingsType* approprié.

La boîte de dialogue Propriétés de structure est identique à la boîte de dialogue Propriétés standard et permet d'accéder à toutes ses propriétés (qui peuvent être écrasées par des propriétés utilisateur).

## Propriétés utilisateur et propriétés utilisateur pour le fichier de données

Les boîtes de dialogue **Propriétés utilisateur** et **Propriétés utilisateur pour le fichier de données** contiennent une sélection de propriétés pertinentes qui peuvent être définies pour tous les fichiers de données ou pour un seul fichier de données :

![](../assets/en/settings/user-settings-2.png)

Le tableau suivant répertorie les pages de paramètres des boîtes de dialogue **Propriétés utilisateur** et **Propriétés utilisateur pour le fichier de données** et décrit leurs principales différences par rapport aux paramètres standard :

| **Page des Propriétés structure**                                                                    | **Page des Propriétés utilisateur**             | **Page des Propriétés utilisateur pour fichier de données** |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| [Page Général](../settings/general.md)                                                               | N/a                                             | N/a                                                         |
| [Page Interface](../settings/interface.md)                                                           | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Compilateur](../settings/compiler.md)                                                          | N/a                                             | N/a                                                         |
| [Page Base de données/Stockage des données](../settings/database.md#data-storage)                    | N/a                                             | N/a                                                         |
| [Page Base de données/Mémoire](../settings/database.md#memory)                                       | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Sauvegarde/Périodicité](../settings/backup.md#scheduler)                                       | N/a                                             | Identique aux Propriétés structure                          |
| [Page Sauvegarde/Configuration](../settings/backup.md#configuration)                                 | N/a                                             | Identique aux Propriétés structure                          |
| [Page Sauvegarde/Sauvegarde & Restitution](../settings/backup.md#backup-restore) | N/a                                             | Identique aux Propriétés structure                          |
| [Page Client-serveur/Réseau](../settings/client-server.md#network-options)                           | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Client-serveur/Configuration IP](../settings/client-server.md#ip-configuration)                | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Web/Configuration](../settings/web.md#configuration)                                           | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Web/Options (I)](../settings/web.md#options)                                | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Web/Options (II)](../settings/web.md#options-ii)                            | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Web/Journal (format)](../settings/web.md#log)                               | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Web/Journal (sauvegarde)](../settings/web.md#log)                           | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Web/Services Web](../settings/web.md#web-services)                                             | Option de préfixage des méthodes non disponible | Option de préfixage des méthodes non disponible             |
| [Page SQL](../settings/sql.md)                                                                       | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page PHP](../settings/php.md)                                                                       | Identique aux Propriétés structure              | Identique aux Propriétés structure                          |
| [Page Sécurité](../settings/security.md)                                                             | N/a                                             | N/a                                                         |
| [Page Compatibilité](../settings/compatibility.md)                                                   | N/a                                             | N/a                                                         |

Lorsque vous modifiez les paramètres dans cette boîte de dialogue, ils sont automatiquement enregistrés dans le fichier correspondant *settings.4DSettings* (voir ci-dessous) ou le fichier *Backup.4DSettings* (consultez la page [Paramètres de sauvegarde](../Backup/settings.md) pour plus d'informations).

## `SET DATABASE PARAMETER` et propriétés utilisateur

Certaines propriétés utilisateur sont aussi disponibles via la commande [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html). Pour les propriétés utilisateur, la propriété **Conservé entre deux sessions** est fixée à **Oui**.

Lorsque la fonctionnalité **Propriétés utilisateur** est activée, les propriétés utilisateur modifiées par la commande [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) sont automatiquement stockées dans les Propriétés utilisateurs pour le fichier de données.

> `Table sequence number` est une exception ; cette valeur de paramètre est toujours stockée dans le fichier de données lui-même.

## Fichiers settings.4DSettings

Lorsque vous [cochez l'option **Autoriser les propriétés utilisateur**](#enabling-user-settings), des fichiers de propriétés utilisateur sont automatiquement créés. Leur emplacement dépend du type de propriété utilisateur définie.

### Propriétés utilisateur

Le fichier de propriété utilisateur standard est automatiquement créé et placé dans un dossier de propriétés à l'emplacement suivant :

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... où *ProjectFolder* est le nom du dossier contenant le fichier de structure du projet.

Dans les applications fusionnées, le fichier de propriétés utilisateur est placé à l'emplacement suivant :

- Dans les versions mono-utilisateur : ProjectFolder/Database/Settings/settings.4DSettings
- Dans les versions client/serveur : ProjectFolder/Database/Settings/settings.4DSettings

### Propriétés utilisateur pour fichier de données

Le fichier de propriétés utilisateur lié au fichier de données est automatiquement créé et placé dans un dossier de propriétés à l'emplacement suivant :

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... où *Data* est le nom du dossier contenant le fichier de données courant de l'application.

> Lorsque le fichier de données est situé au même niveau que le fichier de structure du projet, les fichiers de propriétés utilisateur basés sur la structure et sur les données partagent le même emplacement et le même fichier. La commande de menu **Propriétés utilisateur pour le fichier de données...** n'est pas proposée.

:::note

Les fichiers de propriétés sont des fichiers XML ; ils peuvent être lus et modifiés à l'aide des commandes XML intégrées de 4D ou d'un éditeur XML. Cela signifie que vous pouvez gérer les paramètres par programmation, notamment dans le cadre d'applications compilées et fusionnées avec 4D Volume Desktop. Lorsque vous modifiez ce fichier par programmation, les changements ne sont pris en compte que lors de la prochaine ouverture de la base de données.

:::

## Priorité des paramètres

Les propriétés peuvent être stockées à trois niveaux. Chaque paramètre défini à un niveau a priorité sur le même paramètre défini à un niveau précédent, le cas échéant :

| **Niveau de priorité**                | **Nom**                                                                                                                   | **Emplacement**                                                                                                                                                                                                        | **Commentaires**                                                                                                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (le plus faible) | Paramètres de structure (ou Paramètres lorsque la fonction "Paramètres utilisateur" n'est pas activée) | Fichier ***settings.4DSettings*** dans le dossier Sources (bases projet) ou dans le dossier Settings au même niveau que le fichier de structure (bases binaires) | Emplacement unique lorsque les paramètres utilisateur ne sont pas activés. Appliqué à toutes les copies de l'application.                                       |
| 2                                     | Propriétés utilisateur (tous les fichiers de données)                                                  | Fichier ***settings.4DSettings*** dans le dossier Settings au même niveau que le dossier Project                                                                                                       | Remplace les propriétés de structure. Stocké dans le package de l'application.                                                                                  |
| 1 (le plus élevé)  | Propriétés utilisateur (fichier de données courant)                                                    | Fichier ***settings.4DSettings*** dans le dossier Settings au même niveau que le fichier de données                                                                                                    | Remplace les propriétés de structure et les propriétés utilisateur. S'applique uniquement lorsque le fichier de données associé est utilisé avec l'application. |

A noter que les fichiers de propriétés utilisateur ne contiennent qu'un sous-ensemble de paramètres pertinents, tandis que le fichier de structure contient tous les paramètres personnalisés, y compris les paramètres de bas niveau.
