---
id: FolderClass
title: Folder
---

`Folder` objects are created with the [`Folder`](#folder) command. Ils contiennent des références à des dossiers qui peuvent exister réellement ou non sur le disque. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`folder.create()`](#create) function.

### Exemple

L'exemple suivant crée un dossier "JohnSmith" :

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Chemins d'accès

`Folder` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.

### Objet Folder

|                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.copyTo().Summary -->                           |
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FolderClass.create().Summary -->                       |
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FolderClass.createAlias().Summary -->        |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.creationDate.Summary -->             |
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.creationTime.Summary -->             |
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FolderClass.delete().Summary -->                       |
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.exists.Summary -->                               |
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.extension.Summary -->                      |
| [<!-- INCLUDE #directory.file().Syntax -->](#file)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.file().Summary -->                                 |
| [<!-- INCLUDE #directory.files().Syntax -->](#files)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.files().Summary -->                              |
| [<!-- INCLUDE #directory.folder().Syntax -->](#folder)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.folder().Summary -->                           |
| [<!-- INCLUDE #directory.folders().Syntax -->](#folders)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.folders().Summary -->                        |
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.fullName.Summary -->                         |
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.getIcon().Summary -->                        |
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.hidden.Summary -->                               |
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.isAlias.Summary -->                            |
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.isFile.Summary -->                               |
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.isFolder.Summary -->                         |
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.isPackage.Summary -->                      |
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.modificationDate.Summary --> |
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.modificationTime.Summary --> |
| [<!-- INCLUDE #directory.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.name.Summary -->                                     |
| [<!-- INCLUDE #directory.original.Syntax -->](#original)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.original.Summary -->                         |
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.parent.Summary -->                               |
| [<!-- INCLUDE #directory.path.Syntax -->](#path)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.path.Summary -->                                     |
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #directory.platformPath.Summary -->             |
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FolderClass.moveTo().Summary -->                       |
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FolderClass.rename().Summary -->                       |

## Folder

<details><summary>Historique</summary>

| Release | Modifications               |
| ------- | --------------------------- |
| 19 R8   | Support of `fk home folder` |
| 17 R5   | Ajout                       |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| Paramètres     | Type                      |     | Description                                                        |
| -------------- | ------------------------- | :-: | ------------------------------------------------------------------ |
| path           | Text                      |  -> | Chemin du dossier                                                  |
| folderConstant | Integer                   |  -> | Constante de dossier 4D                                            |
| pathType       | Integer                   |  -> | `fk posix path` (default) or `fk platform path` |
| -              |                           |  -> | * pour retourner le dossier de la base hôte                        |
| Résultat       | 4D.Folder |  <- | Nouvel objet dossier                                               |

<!-- END REF -->

#### Description

The `Folder` command <!-- REF #_command_.Folder.Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. La commande accepte deux syntaxes :

**Folder ( path { ; pathType } { ; \* } )**

In the _path_ parameter, pass a folder path string. Vous pouvez utiliser une chaine personnalisée ou un "filesystem" (ex : "/DATA").

> Only absolute pathnames are supported with the `Folder` command.

Par défaut, 4D attend un chemin exprimé avec la syntaxe POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the _pathType_ parameter. Les constantes suivantes sont disponibles :

| Constante        | Valeur | Commentaire                                                                                                                  |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1      | Chemin exprimé dans une syntaxe spécifique à la plate-forme (obligatoire en cas de chemin de plate-forme) |
| fk posix path    | 0      | Chemin exprimé avec la syntaxe POSIX (par défaut)                                                         |

**Folder ( folderConstant { ; \* } )**

In the _folderConstant_ parameter, pass a 4D built-in or system folder, using one of the following constants:

| Constante                  | Valeur | Commentaire                                                                                                                                 |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116    |                                                                                                                                             |
| fk data folder             | 9      | Filesystem associé : "/DATA"                                                                                                |
| fk database folder         | 4      | Filesystem associé : "/PACKAGE"                                                                                             |
| fk desktop folder          | 115    |                                                                                                                                             |
| fk documents folder        | 117    | Dossier Documents de l'utilisateur                                                                                                          |
| fk home folder             | 118    | Current home folder of the user (usually `/Users/<username>/`)                                                           |
| fk licenses folder         | 1      | Dossier contenant les fichiers de licence 4D de la machine                                                                                  |
| fk logs folder             | 7      | Filesystem associé : "/LOGS"                                                                                                |
| fk mobileApps folder       | 10     |                                                                                                                                             |
| fk remote database folder  | 3      | Dossier de la base de données 4D créé sur chaque machine 4D distante                                                                        |
| fk resources folder        | 6      | Filesystem associé : "/RESOURCES"                                                                                           |
| fk system folder           | 100    |                                                                                                                                             |
| fk user preferences folder | 0      | Dossier 4D qui stocke les fichiers de préférences de l'utilisateur dans le dossier personnel de l'utilisateur                               |
| fk web root folder         | 8      | Dossier racine web courant du projet : "/PACKAGE/chemin" si son emplacement se trouve dans le package, sinon chemin complet |

If the command is called from a component, pass the optional _parameter to get the path of the host database. Otherwise, if you omit the_ parameter, a null object is always returned.

> On Windows, in merged clients, the location of built-in folders is modified if the `ShareLocalResourcesOnWindowsClient` [BuildApp key](../Desktop/building.md#buildapp4dsettings) is used.

## 4D.Folder.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #4D.Folder.new().Syntax -->

**4D.Folder.new** ( _path_ : Text { ; _pathType_ : Integer }{ ; \* } ) : 4D.Folder<br/>**4D.Folder.new** ( _folderConstant_ : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

#### Description

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. It is identical to the [`Folder`](#folder) command (shortcut).

> It is recommended to use the [`Folder`](#folder) shortcut command instead of `4D.Folder.new()`.

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

| Paramètres | Type    |    | Description                                           |
| ---------- | ------- | -- | ----------------------------------------------------- |
| Résultat   | Boolean | <- | Vrai si le dossier a été créé avec succès, sinon Faux |

<!-- END REF -->

#### Description

The `.create()` function <!-- REF #FolderClass.create().Summary -->creates a folder on disk according to the properties of the `Folder` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. Si le dossier existe déjà sur disque, la fonction ne fait rien (aucune erreur n'est générée) et retourne faux.

**Valeur retournée**

- **True** if the folder is created successfully;
- **False** if a folder with the same name already exists or if an error occured.

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

| Paramètres         | Type                      |    | Description                                         |
| ------------------ | ------------------------- | -- | --------------------------------------------------- |
| dossierDestination | 4D.Folder | -> | Dossier de destination pour l'alias ou le raccourci |
| aliasName          | Text                      | -> | Nom de l'alias ou du raccourci                      |
| aliasType          | Integer                   | -> | Type de lien de l'alias                             |
| Résultat           | 4D.File   | <- | Référence de l'alias ou du raccourci du dossier     |

<!-- END REF -->

#### Description

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the folder with the specified _aliasName_ name in the folder designated by the _destinationFolder_ object.

Pass the name of the alias or shortcut to create in the _aliasName_ parameter.

Par défaut sur macOS, la fonction crée un alias standard. You can also create a symbolic link by using the _aliasType_ parameter. Les constantes suivantes sont disponibles :

| Constante          | Valeur | Commentaire                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------- |
| `fk alias link`    | 0      | Lien alias (macOS uniquement)(par défaut) |
| `fk symbolic link` | 1      | Lien symbolique (macOS uniquement)                           |

On Windows, a shortcut (.lnk file) is always created (the _aliasType_ parameter is ignored).

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

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

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->deletes the folder<!-- END REF -->.

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. Si vous souhaitez que la commande supprime des dossiers qui ne sont pas vides, vous devez utiliser le paramètre option avec l'une des constantes suivantes :

| Constante              | Valeur | Commentaire                                        |
| ---------------------- | ------ | -------------------------------------------------- |
| `Delete only if empty` | 0      | Supprime le dossier uniquement s'il est vide       |
| `Delete with contents` | 1      | Supprime le dossier ainsi que son éventuel contenu |

When `Delete only if empty` is passed or if you omit the option parameter:

- Le dossier n'est supprimé que s'il est vide ; sinon, la commande ne fait rien et une erreur -47 est générée.
- Si le dossier n'existe pas, l'erreur -120 est générée.

When `Delete with contents` is passed:

- Le dossier, ainsi que tout son contenu, est supprimé.
  **Warning**: Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted.
- Si ce dossier, ou l'un des fichiers qu'il contient, ne peut être supprimé, la suppression est interrompue dès que le premier élément inaccessible est détecté, et une erreur(\*) est retournée. Dans ce cas, le dossier ne peut être que partiellement supprimé. When deletion is aborted, you can use the `GET LAST ERROR STACK` command to retrieve the name and path of the offending file.
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

| Paramètres         | Type                      |    | Description                    |
| ------------------ | ------------------------- | -- | ------------------------------ |
| dossierDestination | 4D.Folder | -> | Dossier de destination         |
| nouveauNom         | Text                      | -> | Nom complet du dossier déplacé |
| Résultat           | 4D.Folder | <- | Dossier déplacé                |

<!-- END REF -->

#### Description

The `.moveTo( )` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `Folder` object (source folder) into the specified _destinationFolder_<!-- END REF -->.

The _destinationFolder_ must exist on disk, otherwise an error is generated.

Par défaut, le dossier garde le même nom lorsqu'il est déplacé. If you want to rename the moved folder, pass the new full name in the _newName_ parameter. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

**Returned object**

The moved `Folder` object.

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

| Paramètres | Type                      |    | Description                    |
| ---------- | ------------------------- | -- | ------------------------------ |
| nouveauNom | Text                      | -> | Nouveau nom complet du dossier |
| Résultat   | 4D.Folder | <- | Dossier renommé                |

<!-- END REF -->

#### Description

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->renames the folder with the name you passed in _newName_ and returns the renamed `Folder` object<!-- END REF -->.

The _newName_ parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. S'il existe déjà un fichier portant le même nom, une erreur est retournée.

**Returned object**

The renamed `Folder` object.

#### Exemple

```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<!-- END REF -->
