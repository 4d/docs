---
id: FolderClass
title: Folder
---

Les objets `Folder` sont créés avec la commande [`Folder`](#folder). Ils contiennent des références à des dossiers qui peuvent exister réellement ou non sur le disque. Par exemple, lorsque vous exécutez la commande `Folder` pour créer un nouveau dossier, un objet `Folder` valide est créé mais rien n'est réellement stocké sur le disque jusqu'à ce que vous appeliez la fonction [`folder.create()`](#create).

### Exemple

L'exemple suivant crée un dossier "JohnSmith" :

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Chemins d'accès

Les objets `Folder` prennent en charge plusieurs formes de chemin d'accès, y compris les syntaxes `filesystems` ou `posix`. Les chemins d'accès pris en charge sont détaillés dans la page [**Chemins d'accès**](../Concepts/paths.md).

### Objet Folder

|                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #directory.copyTo().Summary -->                           |
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FolderClass.create().Summary -->                       |
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FolderClass.createAlias().Summary -->        |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #directory.creationDate.Summary -->             |
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #directory.creationTime.Summary -->             |
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FolderClass.delete().Summary -->                       |
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)<br/><!-- INCLUDE #directory.exists.Summary -->                               |
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)<br/><!-- INCLUDE #directory.extension.Summary -->                      |
| [<!-- INCLUDE #directory.file().Syntax -->](#file)<br/><!-- INCLUDE #directory.file().Summary -->                                 |
| [<!-- INCLUDE #directory.files().Syntax -->](#files)<br/><!-- INCLUDE #directory.files().Summary -->                              |
| [<!-- INCLUDE #directory.folder().Syntax -->](#folder)<br/><!-- INCLUDE #directory.folder().Summary -->                           |
| [<!-- INCLUDE #directory.folders().Syntax -->](#folders)<br/><!-- INCLUDE #directory.folders().Summary -->                        |
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #directory.fullName.Summary -->                         |
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #directory.getIcon().Summary -->                        |
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #directory.hidden.Summary -->                               |
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #directory.isAlias.Summary -->                            |
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #directory.isFile.Summary -->                               |
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #directory.isFolder.Summary -->                         |
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)<br/><!-- INCLUDE #directory.isPackage.Summary -->                      |
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #directory.modificationDate.Summary --> |
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #directory.modificationTime.Summary --> |
| [<!-- INCLUDE #directory.name.Syntax -->](#name)<br/><!-- INCLUDE #directory.name.Summary -->                                     |
| [<!-- INCLUDE #directory.original.Syntax -->](#original)<br/><!-- INCLUDE #directory.original.Summary -->                         |
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)<br/><!-- INCLUDE #directory.parent.Summary -->                               |
| [<!-- INCLUDE #directory.path.Syntax -->](#path)<br/><!-- INCLUDE #directory.path.Summary -->                                     |
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #directory.platformPath.Summary -->             |
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FolderClass.moveTo().Summary -->                       |
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FolderClass.rename().Summary -->                       |

## Folder

<details><summary>Historique</summary>

| Release | Modifications                       |
| ------- | ----------------------------------- |
| 19 R8   | Prise en charge de `fk home folder` |
| 17 R5   | Ajout                               |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| Paramètres     | Type                      |                             | Description                                                           |
| -------------- | ------------------------- | :-------------------------: | --------------------------------------------------------------------- |
| path           | Text                      |              ->             | Chemin du dossier                                                     |
| folderConstant | Integer                   |              ->             | Constante de dossier 4D                                               |
| pathType       | Integer                   |              ->             | `fk posix path` (par défaut) ou `fk platform path` |
| \*             |                           |              ->             | \* pour retourner le dossier de la base hôte                          |
| Résultat       | 4D.Folder | <- | Nouvel objet dossier                                                  |

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

Si la commande est appelée à partir d'un composant, passez le paramètre optionnel \* pour lire le chemin de la base hôte. Sinon, si vous omettez le paramètre \*, un objet null est systématiquement retourné.

> Sous Windows, dans les clients fusionnés, l'emplacement des dossiers intégrés est modifié si la [clé BuildApp](../Desktop/building.md#buildapp4dsettings) `ShareLocalResourcesOnWindowsClient` est utilisée.

## 4D.Folder.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #4D.Folder.new().Syntax -->

**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**4D.Folder.new** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

#### Description

La fonction `4D.Folder.new()` <!-- REF #4D.Folder.new().Summary -->crée et retourne un nouvel objet de type `4D.Folder`<!-- END REF -->. Elle est identique à la commande [`Folder`](#folder) (raccourci).

> Il est recommandé d'utiliser la commande raccourci [`Folder`](#folder) au lieu de `4D.Folder.new()`.

<!-- INCLUDE directory.copyTo().Desc -->

<!-- REF folder.create().Desc -->

## .create()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FolderClass.create().Syntax -->**.create()** : Boolean<!-- END REF -->

<!--REF #FolderClass.create().Params -->

| Paramètres | Type    |                             | Description                                           |
| ---------- | ------- | --------------------------- | ----------------------------------------------------- |
| Résultat   | Boolean | <- | Vrai si le dossier a été créé avec succès, sinon Faux |

<!-- END REF -->

#### Description

La fonction `.create()` <!-- REF #FolderClass.create().Summary -->crée un dossier sur disque en fonction des propriétés de l'objet `Folder`<!-- END REF -->.

Le cas échéant, la fonction crée la hiérarchie du dossier en se basant sur la description des propriétés [platformPath](#platformpath) ou [path](#path). Si le dossier existe déjà sur disque, la fonction ne fait rien (aucune erreur n'est générée) et retourne faux.

**Valeur retournée**

- **Vrai** si le dossier est créé avec succès ;
- **Faux** si un dossier du même nom existe déjà ou si une erreur s'est produite.

#### Exemple 1

Créer un dossier vide dans le dossier principal :

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### Exemple 2

Création d'un dossier "/Archives2019/January/" dans le dossier principal :

```4d
$newFolder:=Folder("/PACKAGE/Archives2019/January")
If($newFolder.create())
 ALERT("The "+$newFolder.name+" folder was created.")
Else
 ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
```

<!-- END REF -->

<!-- REF folder.createAlias().Desc -->

## .createAlias()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FolderClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FolderClass.createAlias().Params -->

| Paramètres         | Type                      |                             | Description                                         |
| ------------------ | ------------------------- | --------------------------- | --------------------------------------------------- |
| dossierDestination | 4D.Folder | ->                          | Dossier de destination pour l'alias ou le raccourci |
| aliasName          | Text                      | ->                          | Nom de l'alias ou du raccourci                      |
| aliasType          | Integer                   | ->                          | Type de lien de l'alias                             |
| Résultat           | 4D.File   | <- | Référence de l'alias ou du raccourci du dossier     |

<!-- END REF -->

#### Description

La fonction `.createAlias()` <!-- REF #FolderClass.createAlias().Summary -->crée un alias (macOS) ou un raccourci (Windows)<!-- END REF --> du dossier avec le nom *aliasName* dans le dossier désigné par l'objet *destinationFolder*.

Passez le nom de l'alias ou du raccourci à créer dans le paramètre *aliasName*.

Par défaut sur macOS, la fonction crée un alias standard. Vous pouvez également créer un lien symbolique à l'aide du paramètre *aliasType*. Les constantes suivantes sont disponibles :

| Constante          | Valeur | Commentaire                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------- |
| `fk alias link`    | 0      | Lien alias (macOS uniquement)(par défaut) |
| `fk symbolic link` | 1      | Lien symbolique (macOS uniquement)                           |

Sur Windows, un raccourci (fichier .lnk) est toujours créé (le paramètre *aliasType* est ignoré).

**Objet retourné**

Un objet `4D.File` avec la propriété `isAlias` mise à **true**.

#### Exemple

Vous souhaitez créer un alias pour un dossier d'archives dans votre dossier principal :

```4d
$myFolder:=Folder("C:\\Documents\\Archives\\2019\\January";fk platform path)
$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")
```

<!-- END REF -->

<!-- INCLUDE directory.creationDate.Desc -->

<!-- INCLUDE directory.creationTime.Desc -->

<!-- REF folder.delete().Desc -->

## .delete()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FolderClass.delete().Syntax -->**.delete**( { *option* : Integer } )<!-- END REF -->

<!-- REF #FolderClass.delete().Params -->

| Paramètres | Type    |    | Description                      |
| ---------- | ------- | -- | -------------------------------- |
| option     | Integer | -> | Option de suppression du dossier |

<!-- END REF -->

#### Description

La fonction `.delete()` <!-- REF #FolderClass.delete().Summary -->supprime le dossier<!-- END REF -->.

Par défaut, pour des raisons de sécurité, si vous omettez le paramètre option, `.delete()` permet uniquement de supprimer les dossiers vides. Si vous souhaitez que la commande supprime des dossiers qui ne sont pas vides, vous devez utiliser le paramètre option avec l'une des constantes suivantes :

| Constante              | Valeur | Commentaire                                        |
| ---------------------- | ------ | -------------------------------------------------- |
| `Delete only if empty` | 0      | Supprime le dossier uniquement s'il est vide       |
| `Delete with contents` | 1      | Supprime le dossier ainsi que son éventuel contenu |

Lorsque la constante `Delete only if empty` est passée ou si vous omettez le paramètre option :

- Le dossier n'est supprimé que s'il est vide ; sinon, la commande ne fait rien et une erreur -47 est générée.
- Si le dossier n'existe pas, l'erreur -120 est générée.

Lorsque la constante `Delete with contents` est passée :

- Le dossier, ainsi que tout son contenu, est supprimé.
  **Attention** : Même si ce dossier et/ou son contenu sont verrouillés ou définis comme étant en lecture seule, si l'utilisateur dispose des droits d'accès appropriés, le dossier (et son contenu) est supprimé malgré tout.
- Si ce dossier, ou l'un des fichiers qu'il contient, ne peut être supprimé, la suppression est interrompue dès que le premier élément inaccessible est détecté, et une erreur(\*) est retournée. Dans ce cas, le dossier ne peut être que partiellement supprimé. Lorsque la suppression est interrompue, vous pouvez utiliser la commande `GET LAST ERROR STACK` pour récupérer le nom et le chemin d'accès du dossier incriminé.
- Si le dossier n'existe pas, la commande ne fait rien et aucune erreur n'est retournée.
  (\*) Windows: -54 (Attempt to open locked file for writing) macOS: -45 (The file is locked or the pathname is not correct)

<!-- END REF -->

<!-- INCLUDE directory.exists.Desc -->

<!-- INCLUDE directory.extension.Desc -->

<!-- INCLUDE directory.file().Desc -->

<!-- INCLUDE directory.files().Desc -->

<!-- INCLUDE directory.folder().Desc -->

<!-- INCLUDE directory.folders().Desc -->

<!-- INCLUDE directory.fullName.Desc -->

<!-- INCLUDE directory.getIcon().Desc -->

<!-- INCLUDE directory.hidden.Desc -->

<!-- INCLUDE directory.isAlias.Desc -->

<!-- INCLUDE directory.isFile.Desc -->

<!-- INCLUDE directory.isFolder.Desc -->

<!-- INCLUDE directory.isPackage.Desc -->

<!-- INCLUDE directory.modificationDate.Desc -->

<!-- INCLUDE directory.modificationTime.Desc -->

<!-- REF folder.moveTo().Desc -->

## .moveTo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FolderClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.moveTo().Params -->

| Paramètres         | Type                      |                             | Description                    |
| ------------------ | ------------------------- | --------------------------- | ------------------------------ |
| dossierDestination | 4D.Folder | ->                          | Dossier de destination         |
| nouveauNom         | Text                      | ->                          | Nom complet du dossier déplacé |
| Résultat           | 4D.Folder | <- | Dossier déplacé                |

<!-- END REF -->

#### Description

La fonction `.moveTo( )` <!-- REF #FolderClass.moveTo().Summary -->déplace ou déplace et renomme l'objet `Folder` (dossier source) dans le dossier *destinationFolder* spécifié<!-- END REF -->.

Le *destinationFolder* doit exister sur disque, sinon une erreur est générée.

Par défaut, le dossier garde le même nom lorsqu'il est déplacé. Par défaut, le dossier garde le même nom lorsqu'il est déplacé. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

**Objet retourné**

L'objet `Folder` déplacé.

#### Exemple

Vous souhaitez déplacer et renommer un dossier :

```4d
 var $tomove; $moved : Object
 $docs:=Folder(fk documents folder)
 $tomove:=$docs.folder("Pictures")
 $tomove2:=$tomove.moveTo($docs.folder("Archives");"Pic_Archives")
```

<!-- END REF -->

<!-- INCLUDE directory.name.Desc -->

<!-- INCLUDE directory.original.Desc -->

<!-- INCLUDE directory.parent.Desc -->

<!-- INCLUDE directory.path.Desc -->

<!-- INCLUDE directory.platformPath.Desc -->

<!-- REF folder.rename().Desc -->

## .rename()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FolderClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.rename().Params -->

| Paramètres | Type                      |                             | Description                    |
| ---------- | ------------------------- | --------------------------- | ------------------------------ |
| nouveauNom | Text                      | ->                          | Nouveau nom complet du dossier |
| Résultat   | 4D.Folder | <- | Dossier renommé                |

<!-- END REF -->

#### Description

La fonction `.rename()` <!-- REF #FolderClass.rename().Summary -->renomme le dossier avec le nom que vous avez passé dans *newName* et retourne l'objet `Folder` renommé<!-- END REF -->.

Le paramètre *newName* doit être conforme aux règles de nommage (ex : il ne doit pas contenir des caractères tels que ":", "/", etc.), sinon une erreur est retournée. S'il existe déjà un fichier portant le même nom, une erreur est retournée.

**Objet retourné**

L'objet `Folder` renommé.

#### Exemple

```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<!-- END REF -->
