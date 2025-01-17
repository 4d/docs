---
id: file
title: File
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications                             |
| ------- | ----------------------------------------- |
| 19 R4   | Nouvelle constante `HTTP Client log file` |
| 17 R5   | Ajout                                     |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->

| Paramètres   | Type                    |     | Description                                                           |
| ------------ | ----------------------- | :-: | --------------------------------------------------------------------- |
| path         | Text                    |  →  | Chemin de fichier                                                     |
| fileConstant | Integer                 |  →  | Constante de fichier 4D                                               |
| pathType     | Integer                 |  →  | `fk posix path` (par défaut) ou `fk platform path` |
| \*           | operator                |  →  | \* pour retourner le fichier de la base hôte                          |
| Résultat     | 4D.File |  ←  | Nouvel objet fichier                                                  |

<!-- END REF -->

#### Description

La commande `File` <!-- REF #_command_.File.Summary -->crée et retourne un nouvel objet de type `4D.File`<!-- END REF -->. La commande accepte deux syntaxes :

**File ( path { ; pathType } { ; \* })**

Dans le paramètre *path*, passez un chemin de fichier. Vous pouvez utiliser une chaine personnalisée ou un [filesystem](../Concepts/paths.md#filesystem-pathnames) (ex : "/DATA/myfile.txt").

> Seuls les noms de chemin absolus sont pris en charge par la commande `File`.

Par défaut, 4D attend un chemin exprimé avec la syntaxe POSIX. Si vous travaillez avec des chemins de plate-forme (Windows ou macOS), vous devez les déclarer à l'aide du paramètre *pathType*. Les constantes suivantes sont disponibles :

| Constante        | Valeur | Commentaire                                                                                                                  |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1      | Chemin exprimé dans une syntaxe spécifique à la plate-forme (obligatoire en cas de chemin de plate-forme) |
| fk posix path    | 0      | Chemin exprimé avec la syntaxe POSIX (par défaut)                                                         |

**File ( fileConstant { ; \* } )**

Dans le paramètre *fileConstant*, passez un fichier 4D interne ou un fichier système, à l'aide d'une des constantes suivantes :

| Constante                         | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19     | Fichier d'historique des sauvegardes (voir Fichiers de configuration et de suivi). Stocké dans le dossier de destination de sauvegarde.                                                                                                                                                                                                                                                                                                                                                                                               |
| Backup log file                   | 13     | Fichier journal des sauvegardes courant. Stocké dans le dossier Logs de l'application.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Backup settings file              | 1      | Fichier backup.4DSettings par défaut (format xml), stocké dans le dossier Settings du projet                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Backup settings file for data     | 17     | fichier backup.4DSettings du fichier de données (format xml), stocké dans le dossier Settings du dossier data                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Build application log file        | 14     | Fichier d'historique courant au format xml du générateur d'application. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Build application settings file   | 20     | Fichier de configuration par défaut du générateur d'application ("buildApp.4DSettings"). Stocké dans le dossier Settings du projet.                                                                                                                                                                                                                                                                                                                                                                                   |
| Compacting log file               | 6      | Fichier d'historique du compactage le plus récent de la base, effectué avec la commande Compact data file ou le Centre de sécurité et de maintenance (CSM). Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                              |
| Current backup settings file      | 18     | fichier backup.4DSettings utilisé actuellement par l'application. Il peut s'agir du fichier backup.4DSettings par défaut ou d'un fichier de settings de backup utilisateur défini pour le fichier de données                                                                                                                                                                                                                                                                                                                             |
| Debug log file                    | 12     | Fichier d'enregistrement des événements pour le débogage créé par la commande `SET DATABASE PARAMETER(Debug log recording)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                |
| Diagnostic log file               | 11     | Fichier de diagnostic de 4D, créé par la commande `SET DATABASE PARAMETER(Diagnostic log recording)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Directory file                    | 16     | fichier directory.json, contenant la description des groupes et utilisateurs (le cas échéant) du projet. Il se situe soit dans le dossier Settings de l'utilisateur (par défaut, s'applique à tout le projet), soit dans le dossier Settings du data (spécifique à un fichier de données).                                                                                                                                                                                      |
| HTTP Client log file              | 24     | Fichier journal créé par la commande `HTTP SET OPTION(HTTP client log)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| HTTP debug log file               | 9      | Fichier d'enregistrement des requêtes Web créé par la commande `WEB SET OPTION(Web log recording)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| HTTP log file                     | 8      | Fichier de débogage des requêtes HTTP, créé par la commande `WEB SET OPTION(Web debug log)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| IMAP Log file                     | 23     | Fichier d'historique créé par la commande `SET DATABASE PARAMETER(IMAP Log)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Last backup file                  | 2      | Dernier fichier de sauvegarde généré, nommé `\<applicationName>[bkpNum].4BK`, stocké à un emplacement personnalisé.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Last journal integration log file | 22     | Chemin complet du dernier fichier journal d'intégration de l'historique (stocké dans le dossier Logs de l'application restaurée), le cas échéant. Ce fichier est créé en mode auto-repair, dès qu'une intégration de fichier d'historique a lieu                                                                                                                                                                                                                                                                                                      |
| Repair log file                   | 7      | Fichier d'historique des réparations effectuées sur la base par le Centre de sécurité et de maintenance (CSM). Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                           |
| Request log file                  | 10     | Fichier des requêtes client/server standard (hors requêtes Web), créé par `SET DATABASE PARAMETER(4D Server log recording)` ou `SET DATABASE PARAMETER(Client log recording)`. Si la commande est appelée sur le serveur, le chemin du fichier des requêtes du serveur est retourné (stocké dans le dossier Logs du serveur). Si la commande est appelée sur un client, le chemin du fichier des requêtes du client est retourné (stocké dans le dossier Logs local du client). |
| SMTP log file                     | 15     | Fichier des requêtes SMTP créé par la commande `SET DATABASE PARAMETER(SMTP Log)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| User settings file                | 3      | Fichier settings.4DSettings pour tous les fichiers de données (si activé), stocké dans le dossier Preferences à côté du fichier de structure.                                                                                                                                                                                                                                                                                                                                                                                         |
| User settings file for data       | 4      | Fichier settings.4DSettings file pour le fichier de données courant, stocké dans le dossier Preferences à côté du fichier de données.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Verification log file             | 5      | Fichier d'historique de vérification le plus récent de la base, créé par les commandes `VERIFY CURRENT DATA FILE` et `VERIFY DATA FILE` ou via le Centre de sécurité et de maintenance de la base (CSM). Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                 |

Si le fichier *fileConstant* cible n'existe pas, un objet null est retourné. Aucune erreur n'est générée.

Si la commande est appelée à partir d'un composant, passez le paramètre optionnel `*` pour lire le chemin de la base hôte. Sinon, si vous omettez le paramètre `*`, un objet null est systématiquement retourné.

#### Voir également

[Folder](folder.md)\
[Get 4D file](../commands-legacy/get-4d-file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)

#### Propriétés

|                    |                                                                 |
| ------------------ | --------------------------------------------------------------- |
| Numéro de commande | 1566                                                            |
| Thread safe        | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
