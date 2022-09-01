---
id: FolderClass
title: Folder
---



`Folder` objects are created with the [`Folder`](#folder) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`folder.create( )`](#create-) function.

### Beispiel

The following example creates a "JohnSmith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Folder object

|                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.copyTo().Summary -->|
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.create().Summary -->|
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.createAlias().Summary --> |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationDate.Summary -->|
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationTime.Summary -->|
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.delete().Summary -->|
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.exists.Summary -->|
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.extension.Summary -->|
| [<!-- INCLUDE #directory.file().Syntax -->](#file)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.file().Summary -->|
| [<!-- INCLUDE #directory.files().Syntax -->](#files)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.files().Summary -->|
| [<!-- INCLUDE #directory.folder().Syntax -->](#folder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.folder().Summary -->|
| [<!-- INCLUDE #directory.folders().Syntax -->](#folders)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.folders().Summary -->|
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.fullName.Summary -->|
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.getIcon().Summary -->|
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.hidden.Summary -->|
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isAlias.Summary -->|
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFile.Summary -->|
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFolder.Summary -->|
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isPackage.Summary -->|
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationDate.Summary -->|
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationTime.Summary -->|
| [<!-- INCLUDE #directory.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.name.Summary -->|
| [<!-- INCLUDE #directory.original.Syntax -->](#original)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.original.Summary -->|
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.parent.Summary -->|
| [<!-- INCLUDE #directory.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.path.Summary -->|
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.platformPath.Summary -->|
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.moveTo().Summary -->|
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.rename().Summary -->|

## Folder

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF #_command_.Folder.Syntax -->

**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->

<!-- REF FolderClass.Folder.Params -->
| Parameter      | Typ       |    | Beschreibung                                    |
| -------------- | --------- |:--:| ----------------------------------------------- |
| path           | Text      | -> | Folder path                                     |
| folderConstant | Ganzzahl  | -> | 4D folder constant                              |
| pathType       | Ganzzahl  | -> | `fk posix path` (default) or `fk platform path` |
| *              |           | -> | * to return folder of host database             |
| Ergebnis       | 4D.Folder | <- | New folder object|<!-- END REF -->

|

#### Beschreibung

The `Folder` command <!-- REF #_command_.Folder.Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. The command accepts two syntaxes:

**Folder ( path { ; pathType } { ; \* } )**

In the *path* parameter, pass a folder path string. You can use a custom string or a filesystem (e.g., "/DATA").

> Only absolute pathnames are supported with the `Folder` command.

By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. The following constants are available:

| Constant         | Wert | Kommentar                                                                               |
| ---------------- | ---- | --------------------------------------------------------------------------------------- |
| fk platform path | 1    | Path expressed with a platform-specific syntax (mandatory in case of platform pathname) |
| fk posix path    | 0    | Path expressed with POSIX syntax (default)                                              |

**Folder ( folderConstant { ; \* } )**

In the *folderConstant* parameter, pass a 4D built-in or system folder, using one of the following constants:

| Constant                   | Wert | Kommentar                                                                                           |
| -------------------------- | ---- | --------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116  |                                                                                                     |
| fk data folder             | 9    | Associated filesystem: "/DATA"                                                                      |
| fk database folder         | 4    | Associated filesystem: "/PACKAGE"                                                                   |
| fk desktop folder          | 115  |                                                                                                     |
| fk documents folder        | 117  | Document folder of the user                                                                         |
| fk licenses folder         | 1    | Folder containing the machine's 4D license files                                                    |
| fk logs folder             | 7    | Associated filesystem: "/LOGS"                                                                      |
| fk mobileApps folder       | 10   |                                                                                                     |
| fk remote database folder  | 3    | 4D database folder created on each 4D remote machine                                                |
| fk resources folder        | 6    | Associated filesystem: "/RESOURCES"                                                                 |
| fk system folder           | 100  |                                                                                                     |
| fk user preferences folder | 0    | 4D folder that stores user preference files within the `\<userName>` directory.              |
| fk web root folder         | 8    | Current Web root folder of the database: if within the package "/PACKAGE/path", otherwise full path |

If the command is called from a component, pass the optional *parameter to get the path of the host database. Otherwise, if you omit the* parameter, a null object is always returned.

## 4D.Folder.new()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |
</details>

<!-- REF #4D.Folder.new().Syntax -->
**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br/>**4D.Folder.new** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->

#### Beschreibung

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. It is identical to the [`Folder`](#folder) command (shortcut).

> It is recommended to use the [`Folder`](#folder) shortcut command instead of `4D.Folder.new()`.

<!-- INCLUDE directory.copyTo().Desc -->

<!-- REF folder.create().Desc -->
## .create()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!--REF #FolderClass.create().Syntax -->

**.create()** : Boolean<!-- END REF -->

<!--REF #FolderClass.create().Params -->
| Parameter | Typ     |    | Beschreibung                                                                            |
| --------- | ------- | -- | --------------------------------------------------------------------------------------- |
| Ergebnis  | Boolean | <- | True if the folder was created successfully, false otherwise|<!-- END REF -->

|

#### Beschreibung

The `.create()` function <!-- REF #FolderClass.create().Summary -->The `.create()` function<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**Rückgabewert**

* **True** if the folder is created successfully;
* **False** if a folder with the same name already exists or if an error occured.

#### Beispiel 1

Create an empty folder in the database folder:

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### Beispiel 2

Creation of the "/Archives2019/January/" folder in the database folder:

```4d
$newFolder:=Folder("/PACKAGE/Archives2019/January")
If($newFolder.create())
 ALERT("The "+$newFolder.name+" folder was created.")
Else
 ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
Else
 ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
```

<!-- END REF -->

<!-- REF folder.createAlias().Desc -->
## .createAlias()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!--REF #FolderClass.createAlias().Syntax -->

**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FolderClass.createAlias().Params -->
| Parameter         | Typ       |    | Beschreibung                                           |
| ----------------- | --------- | -- | ------------------------------------------------------ |
| destinationFolder | 4D.Folder | -> | Destination folder for the alias or shortcut           |
| aliasName         | Text      | -> | Name of the alias or shortcut                          |
| aliasType         | Ganzzahl  | -> | Type of the alias link                                 |
| Ergebnis          | 4D.File   | <- | Alias or shortcut reference|<!-- END REF -->

|

#### Beschreibung

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

| Constant           | Wert | Kommentar                  |
| ------------------ | ---- | -------------------------- |
| `fk alias link`    | 0    | Alias link (default)       |
| `fk symbolic link` | 1    | Symbolic link (macOS only) |

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### Beispiel

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

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!--REF #FolderClass.delete().Syntax -->

**.delete**( { *option* : Integer } )<!-- END REF -->

<!-- REF #FolderClass.delete().Params -->
| Parameter | Typ      |    | Beschreibung                                      |
| --------- | -------- | -- | ------------------------------------------------- |
| option    | Ganzzahl | -> | Folder deletion option|<!-- END REF -->

|

#### Beschreibung

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->The `.delete()` function<!-- END REF -->.

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the option parameter with one of the following constants:

| Constant               | Wert | Kommentar                                        |
| ---------------------- | ---- | ------------------------------------------------ |
| `Delete only if empty` | 0    | Deletes folder only when it is empty             |
| `Delete with contents` | 1    | Deletes folder along with everything it contains |

When `Delete only if empty` is passed or if you omit the option parameter:

* The folder is only deleted if it is empty; otherwise, the command does nothing and an error -47 is generated.
* If the folder does not exist, the error -120 is generated.

When `Delete with contents` is passed:

* The folder, along with all of its contents, is deleted. **Warning**: Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted.
* If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and an error(*) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use the `GET LAST ERROR STACK` command to retrieve the name and path of the offending file.
* If the folder does not exist, the command does nothing and no error is returned. (*) Windows: -54 (Attempt to open locked file for writing) macOS: -45 (The file is locked or the pathname is not correct)

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

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!--REF #FolderClass.moveTo().Syntax -->

**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.moveTo().Params -->
| Parameter         | Typ       |    | Beschreibung                            |
| ----------------- | --------- | -- | --------------------------------------- |
| destinationFolder | 4D.Folder | -> | Destination folder                      |
| newName           | Text      | -> | Full name for the moved folder          |
| Ergebnis          | 4D.Folder | <- | Moved folder|<!-- END REF -->

|

#### Beschreibung

The `.moveTo( )` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `Folder` object (source folder) into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

**Returned object**

The moved `Folder` object.

#### Beispiel

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

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!--REF #FolderClass.rename().Syntax -->

**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.rename().Params -->
| Parameter | Typ       |    | Beschreibung                              |
| --------- | --------- | -- | ----------------------------------------- |
| newName   | Text      | -> | New full name for the folder              |
| Ergebnis  | 4D.Folder | <- | Renamed folder|<!-- END REF -->

|

#### Beschreibung

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->The `.rename()` function<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

**Returned object**

The renamed `Folder` object.

#### Beispiel

```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```
<!-- END REF -->
