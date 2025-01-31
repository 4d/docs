---
id: FolderClass
title: Folder
---



`Folder` objects are created with the [`Folder`](../commands/folder.md) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`folder.create()`](#create) function.

### Example

The following example creates a "JohnSmith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Pathnames

`Folder` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.



### Folder object

||
|---|
|[<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #directory.copyTo().Summary -->|
|[<!-- INCLUDE #FolderClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FolderClass.create().Summary -->|
|[<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FolderClass.createAlias().Summary --> |
|[<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #directory.creationDate.Summary -->|
|[<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #directory.creationTime.Summary -->|
|[<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FolderClass.delete().Summary -->|
|[<!-- INCLUDE #directory.exists.Syntax -->](#exists)<br/><!-- INCLUDE #directory.exists.Summary -->|
|[<!-- INCLUDE #directory.extension.Syntax -->](#extension)<br/><!-- INCLUDE #directory.extension.Summary -->|  
|[<!-- INCLUDE #directory.file().Syntax -->](#file)<br/><!-- INCLUDE #directory.file().Summary -->|  
|[<!-- INCLUDE #directory.files().Syntax -->](#files)<br/><!-- INCLUDE #directory.files().Summary -->|  
|[<!-- INCLUDE #directory.folder().Syntax -->](#folder)<br/><!-- INCLUDE #directory.folder().Summary -->|  
|[<!-- INCLUDE #directory.folders().Syntax -->](#folders)<br/><!-- INCLUDE #directory.folders().Summary -->|  
|[<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #directory.fullName.Summary -->|
|[<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #directory.getIcon().Summary -->|
|[<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #directory.hidden.Summary -->|
|[<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #directory.isAlias.Summary -->|
|[<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #directory.isFile.Summary -->|
|[<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #directory.isFolder.Summary -->|
|[<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)<br/><!-- INCLUDE #directory.isPackage.Summary -->|
|[<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #directory.modificationDate.Summary -->|
|[<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #directory.modificationTime.Summary -->|
|[<!-- INCLUDE #directory.name.Syntax -->](#name)<br/><!-- INCLUDE #directory.name.Summary -->|
|[<!-- INCLUDE #directory.original.Syntax -->](#original)<br/><!-- INCLUDE #directory.original.Summary -->|
|[<!-- INCLUDE #directory.parent.Syntax -->](#parent)<br/><!-- INCLUDE #directory.parent.Summary -->|
|[<!-- INCLUDE #directory.path.Syntax -->](#path)<br/><!-- INCLUDE #directory.path.Summary -->|
|[<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #directory.platformPath.Summary -->|
|[<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FolderClass.moveTo().Summary -->|
|[<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FolderClass.rename().Summary -->|


## 4D.Folder.new()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added
</details>

<!-- REF #4D.Folder.new().Syntax -->
**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.Folder<br/>**4D.Folder.new** ( *folderConstant* : Integer { ; * } ) : 4D.Folder<!-- END REF -->


#### Description

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. It is identical to the [`Folder`](../commands/folder.md) command (shortcut).

> It is recommended to use the [`Folder`](../commands/folder.md) shortcut command instead of `4D.Folder.new()`.

<!-- INCLUDE directory.copyTo().Desc -->

<!-- REF folder.create().Desc -->
## .create()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FolderClass.create().Syntax -->**.create()** : Boolean<!-- END REF -->


<!--REF #FolderClass.create().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if the folder was created successfully, false otherwise|
<!-- END REF -->


#### Description

The `.create()` function <!-- REF #FolderClass.create().Summary -->creates a folder on disk according to the properties of the `Folder` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

* **True** if the folder is created successfully;
* **False** if a folder with the same name already exists or if an error occured.

#### Example 1

Create an empty folder in the database folder:

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### Example 2

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

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FolderClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->


<!--REF #FolderClass.createAlias().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|4D.Folder|->|Destination folder for the alias or shortcut|
|aliasName|Text|->|Name of the alias or shortcut|
|aliasType|Integer|->|Type of the alias link|
|Result|4D.File|<-|Alias or shortcut reference|
<!-- END REF -->

#### Description

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`fk alias link`|0|Alias link (default)|
|`fk symbolic link`|1|Symbolic link (macOS only)|

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### Example

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

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FolderClass.delete().Syntax -->**.delete**( { *option* : Integer } )<!-- END REF -->


<!-- REF #FolderClass.delete().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|option |Integer|->|Folder deletion option|
<!-- END REF -->

#### Description

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->deletes the folder<!-- END REF -->.

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the option parameter with one of the following constants:

|Constant| Value| Comment|
|---|---|---|
|`Delete only if empty`| 0| Deletes folder only when it is empty|
|`Delete with contents`| 1| Deletes folder along with everything it contains|

When `Delete only if empty` is passed or if you omit the option parameter:

* The folder is only deleted if it is empty; otherwise, the command does nothing and an error -47 is generated.
* If the folder does not exist, the error -120 is generated.

When `Delete with contents` is passed:

* The folder, along with all of its contents, is deleted.
**Warning**: Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted.
* If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and an error(*) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use the `Last errors` command to retrieve the name and path of the offending file.
* If the folder does not exist, the command does nothing and no error is returned.
(*) Windows: -54 (Attempt to open locked file for writing)
macOS: -45 (The file is locked or the pathname is not correct)

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

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FolderClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->


<!--REF #FolderClass.moveTo().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|4D.Folder|->|Destination folder|
|newName|Text|->|Full name for the moved folder|
|Result|4D.Folder|<-|Moved folder|
<!-- END REF -->

#### Description

The `.moveTo( )` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `Folder` object (source folder) into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

**Returned object**

The moved `Folder` object.

#### Example

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

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FolderClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->


<!--REF #FolderClass.rename().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newName|Text|->|New full name for the folder|
|Result|4D.Folder|<-|Renamed folder|
<!-- END REF -->

#### Description

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->renames the folder with the name you passed in *newName* and returns the renamed `Folder` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

**Returned object**

The renamed `Folder` object.

#### Example

```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```
<!-- END REF -->
