---
id: FolderClass
title: Folder
---



Les objets `Folder` sont créés avec la commande [`Folder`](#folder). Ils contiennent des références à des dossiers qui peuvent exister réellement ou non sur le disque. Par exemple, lorsque vous exécutez la commande `Folder` pour créer un nouveau dossier, un objet `Folder` valide est créé mais rien n'est réellement stocké sur le disque jusqu'à ce que vous appeliez la fonction [`folder.create( )`](#create-).

### Exemple

L'exemple suivant crée un dossier "JohnSmith" :

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Objet Folder

|                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.copyTo().Summary -->|
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.create().Summary -->|
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.createAlias().Summary --> |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationDate.Summary -->|
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationTime.Summary -->|
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.delete().Summary -->|
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.exists.Summary -->|
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.extension.Summary -->|
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.fullName.Summary -->|
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.getIcon().Summary -->|
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.hidden.Summary -->|
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isAlias.Summary -->|
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFile.Summary -->|
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFolder.Summary -->|
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isPackage.Summary -->|
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationDate.Summary -->|
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationTime.Summary -->|
| [<!-- INCLUDE #directory.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.name.Summary -->|
| [<!-- INCLUDE #directory.original.Syntax -->](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.original.Summary -->|
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.parent.Summary -->|
| [<!-- INCLUDE #directory.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.path.Summary -->|
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.platformPath.Summary -->|
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.moveTo().Summary -->|
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.rename().Summary -->|



## Folder

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #_command_.Folder.Syntax -->
**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**Folder** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->


<!-- REF FolderClass.Folder.Params -->
| Paramètres     | Type        |    | Description                                     |
| -------------- | ----------- |:--:| ----------------------------------------------- |
| path           | Texte       | -> | Folder path                                     |
| folderConstant | Entier long | -> | 4D folder constant                              |
| pathType       | Entier long | -> | `fk posix path` (default) or `fk platform path` |
| *              |             | -> | * to return folder of host database             |
| Résultat       | 4D.Folder   | <- | New folder object                               |
<!-- END REF -->


#### Description

The `Folder` command <!-- REF #_command_.Folder.Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. The command accepts two syntaxes:

**Folder ( path { ; pathType } { ; \* } )**

In the *path* parameter, pass a folder path string. You can use a custom string or a filesystem (e.g., "/DATA").

> Seuls les noms de chemin absolus sont pris en charge par la commande `Folder`.

By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. The following constants are available:

| Constante        | Valeur | Commentaire                                                                             |
| ---------------- | ------ | --------------------------------------------------------------------------------------- |
| fk platform path | 1      | Path expressed with a platform-specific syntax (mandatory in case of platform pathname) |
| fk posix path    | 0      | Path expressed with POSIX syntax (default)                                              |

**Folder ( folderConstant { ; \* } )**

In the *folderConstant* parameter, pass a 4D built-in or system folder, using one of the following constants:

| Constante                  | Valeur | Commentaire                                                                                         |
| -------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116    |                                                                                                     |
| fk data folder             | 9      | Associated filesystem: "/DATA"                                                                      |
| fk database folder         | 4      | Associated filesystem: "/PACKAGE"                                                                   |
| fk desktop folder          | 115    |                                                                                                     |
| fk documents folder        | 117    | Document folder of the user                                                                         |
| fk licenses folder         | 1      | Folder containing the machine's 4D license files                                                    |
| fk logs folder             | 7      | Associated filesystem: "/LOGS"                                                                      |
| fk mobileApps folder       | 10     | Associated filesystem: "/DATA"                                                                      |
| fk remote database folder  | 3      | 4D database folder created on each 4D remote machine                                                |
| fk resources folder        | 6      | Associated filesystem: "/RESOURCES"                                                                 |
| fk system folder           | 100    |                                                                                                     |
| fk user preferences folder | 0      | 4D folder that stores user preference files within the \<userName> directory.                      |
| fk web root folder         | 8      | Current Web root folder of the database: if within the package "/PACKAGE/path", otherwise full path |

If the command is called from a component, pass the optional * parameter to get the path of the host database. Otherwise, if you omit the * parameter, a null object is always returned.


## 4D.Folder.new()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #4D.Folder.new().Syntax -->**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**4D.Folder.new** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->


#### Description

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. It is identical to the [`Folder`](#folder) command (shortcut).

> Il est recommandé d'utiliser la commande raccourci [`Folder`](#folder) au lieu de `4D.Folder.new()`. 


<!-- INCLUDE directory.copyTo().Desc -->



<!-- REF folder.create().Desc -->
## .create()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>



<!--REF #FolderClass.create().Syntax -->
**.create()** : Boolean<!-- END REF -->

<!--REF #FolderClass.create().Params -->
| Paramètres | Type    |    | Description                                                  |
| ---------- | ------- | -- | ------------------------------------------------------------ |
| Résultat   | Booléen | <- | True if the folder was created successfully, false otherwise |
<!-- END REF -->



#### Description

The `.create()` function <!-- REF #FolderClass.create().Summary -->creates a folder on disk according to the properties of the `Folder` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**Valeur retournée**

*   **Vrai** si le dossier est créé avec succès ;
*   **Faux** si un dossier du même nom existe déjà ou si une erreur s'est produite.

#### Exemple 1

Create an empty folder in the database folder:

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### Exemple 2

Creation of the "/Archives2019/January/" folder in the database folder:

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
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>



<!--REF #FolderClass.createAlias().Syntax -->
**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->


<!--REF #FolderClass.createAlias().Params -->
| Paramètres        | Type        |    | Description                                  |
| ----------------- | ----------- | -- | -------------------------------------------- |
| destinationFolder | 4D.Folder   | -> | Destination folder for the alias or shortcut |
| aliasName         | Texte       | -> | Name of the alias or shortcut                |
| aliasType         | Entier long | -> | Type of the alias link                       |
| Résultat          | 4D.File     | <- | Alias or shortcut reference                  |
<!-- END REF -->


#### Description

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

| Constante          | Valeur | Commentaire                |
| ------------------ | ------ | -------------------------- |
| `fk alias link`    | 0      | Alias link (default)       |
| `fk symbolic link` | 1      | Symbolic link (macOS only) |

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Objet retourné**

A `4D.File` object with the `isAlias` property set to **true**.

#### Exemple

You want to create an alias to an archive folder in your database folder:

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
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>



<!--REF #FolderClass.delete().Syntax -->
**.delete**( { *option* : Integer } )<!-- END REF -->


<!-- REF #FolderClass.delete().Params -->
| Paramètres | Type        |    | Description            |
| ---------- | ----------- | -- | ---------------------- |
| option     | Entier long | -> | Folder deletion option |
<!-- END REF -->



#### Description

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->deletes the folder<!-- END REF -->.

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the option parameter with one of the following constants:

| Constante              | Valeur | Commentaire                                      |
| ---------------------- | ------ | ------------------------------------------------ |
| `Delete only if empty` | 0      | Deletes folder only when it is empty             |
| `Delete with contents` | 1      | Deletes folder along with everything it contains |

When `Delete only if empty` is passed or if you omit the option parameter:

*   Le dossier n'est supprimé que s'il est vide ; sinon, la commande ne fait rien et une erreur -47 est générée.
*   Si le dossier n'existe pas, l'erreur -120 est générée.

When `Delete with contents` is passed:

*   Le dossier, ainsi que tout son contenu, est supprimé. **Attention** : Même si ce dossier et/ou son contenu sont verrouillés ou définis comme étant en lecture seule, si l'utilisateur dispose des droits d'accès appropriés, le dossier (et son contenu) est supprimé malgré tout.
*   Si ce dossier, ou l'un des fichiers qu'il contient, ne peut être supprimé, la suppression est interrompue dès que le premier élément inaccessible est détecté, et une erreur(*) est retournée. Dans ce cas, le dossier ne peut être que partiellement supprimé. Lorsque la suppression est interrompue, vous pouvez utiliser la commande `GET LAST ERROR STACK` pour récupérer le nom et le chemin d'accès du dossier incriminé.
*   Si le dossier n'existe pas, la commande ne fait rien et aucune erreur n'est retournée. (*) Windows : -54 (Tentative d'ouverture en écriture d'un fichier verrouillé) macOS : -45 (Le fichier est verrouillé ou le chemin d'accès n'est pas correct)

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
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!--REF #FolderClass.moveTo().Syntax -->
**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.moveTo().Params -->
| Paramètres        | Type      |    | Description                    |
| ----------------- | --------- | -- | ------------------------------ |
| destinationFolder | 4D.Folder | -> | Dossier de destination         |
| newName           | Texte     | -> | Full name for the moved folder |
| Résultat          | 4D.Folder | <- | Moved folder                   |
<!-- END REF -->


#### Description

The `.moveTo( )` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `Folder` object (source folder) into the specified *destinationFolder*<!-- END REF -->.

Le *destinationFolder* doit exister sur disque, sinon une erreur est générée.

By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the *newName* parameter. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

**Objet retourné**

The moved `Folder` object.

#### Exemple

You want to move and rename a folder:

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
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!--REF #FolderClass.rename().Syntax -->
**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->


<!--REF #FolderClass.rename().Params -->
| Paramètres | Type      |    | Description                  |
| ---------- | --------- | -- | ---------------------------- |
| newName    | Texte     | -> | New full name for the folder |
| Résultat   | 4D.Folder | <- | Renamed folder               |
<!-- END REF -->



#### Description

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->renames the folder with the name you passed in *newName* and returns the renamed `Folder` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.


**Objet retourné**

The renamed `Folder` object.

#### Exemple


```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
