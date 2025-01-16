---
id: folder
title: Folder
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications                       |
| ------- | ----------------------------------- |
| 19 R8   | Prise en charge de `fk home folder` |
| 17 R5   | Ajout                               |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| Paramètres     | Type                      |     | Description                                                           |
| -------------- | ------------------------- | :-: | --------------------------------------------------------------------- |
| path           | Text                      |  →  | Chemin du dossier                                                     |
| folderConstant | Integer                   |  →  | Constante de dossier 4D                                               |
| pathType       | Integer                   |  →  | `fk posix path` (par défaut) ou `fk platform path` |
| \*             | operator                  |  →  | \* pour retourner le dossier de la base hôte                          |
| Résultat       | 4D.Folder |  ←  | Nouvel objet dossier                                                  |

<!-- END REF -->

#### Description

La commande `Folder` <!-- REF #_command_.Folder.Summary -->crée et retourne un nouvel objet de type `4D.Folder`<!-- END REF -->. La commande accepte deux syntaxes :

**Folder ( path { ; pathType } { ; \* } )**

Dans le paramètre *path*, passez un chemin de dossier. Vous pouvez utiliser une chaine personnalisée ou un [filesystem](../Concepts/paths.md#filesystem-pathnames) (ex : "/DATA").

> Seuls les noms de chemin absolus sont pris en charge par la commande `Folder`.

Par défaut, 4D attend un chemin exprimé avec la syntaxe POSIX. Si vous travaillez avec des chemins de plate-forme (Windows ou macOS), vous devez les déclarer à l'aide du paramètre *pathType*. Les constantes suivantes sont disponibles :

| Constante        | Valeur | Commentaire                                                                                                                  |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1      | Chemin exprimé dans une syntaxe spécifique à la plate-forme (obligatoire en cas de chemin de plate-forme) |
| fk posix path    | 0      | Chemin exprimé avec la syntaxe POSIX (par défaut)                                                         |

**Folder ( folderConstant { ; \* } )**

Dans le paramètre *folderConstant*, passez un dossier 4D interne ou un dossier système, à l'aide d'une des constantes suivantes :

| Constante                  | Valeur | Commentaire                                                                                                                                 |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116    |                                                                                                                                             |
| fk data folder             | 9      | Filesystem associé : "/DATA"                                                                                                |
| fk database folder         | 4      | Filesystem associé : "/PACKAGE"                                                                                             |
| fk desktop folder          | 115    |                                                                                                                                             |
| fk documents folder        | 117    | Dossier Documents de l'utilisateur                                                                                                          |
| fk home folder             | 118    | Dossier personnel actuel de l'utilisateur (généralement `/Users/<username>/`)                                            |
| fk licenses folder         | 1      | Dossier contenant les fichiers de licence 4D de la machine                                                                                  |
| fk logs folder             | 7      | Filesystem associé : "/LOGS"                                                                                                |
| fk mobileApps folder       | 10     |                                                                                                                                             |
| fk remote database folder  | 3      | Dossier de la base de données 4D créé sur chaque machine 4D distante                                                                        |
| fk resources folder        | 6      | Filesystem associé : "/RESOURCES"                                                                                           |
| fk system folder           | 100    |                                                                                                                                             |
| fk user preferences folder | 0      | Dossier 4D qui stocke les fichiers de préférences de l'utilisateur dans le dossier personnel de l'utilisateur                               |
| fk web root folder         | 8      | Dossier racine web courant du projet : "/PACKAGE/chemin" si son emplacement se trouve dans le package, sinon chemin complet |

Si la commande est appelée à partir d'un composant, passez le paramètre optionnel `*` pour lire le chemin de la base hôte. Sinon, si vous omettez le paramètre `*`, un objet null est systématiquement retourné.

> Sous Windows, dans les clients fusionnés, l'emplacement des dossiers intégrés est modifié si la [clé BuildApp](../Desktop/building.md#buildapp4dsettings) `ShareLocalResourcesOnWindowsClient` est utilisée.

#### Voir également

[File](file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)

#### Propriétés

|                    |                                                                 |
| ------------------ | --------------------------------------------------------------- |
| Numéro de commande | 1567                                                            |
| Thread safe        | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
