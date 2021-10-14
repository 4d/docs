---
id: FolderClass
title: Folder
---



`Folder` objects are created with the [`Folder`](#folder) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`folder.create( )`](#create-) function.

### Example

The following example creates a "JohnSmith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Folder object

||
|---|
|[**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;copies the `Folder` object into the specified *destinationFolder*|
|[**.create()** : Boolean](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a folder on disk according to the properties of the `Folder` object|
|[**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates an alias (macOS) or a shortcut (Windows) |
|[**.creationDate** : Date](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation date of the folder|
|[**.creationTime** : Time](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation time of the folder|
|[**.delete**( { *option* : Integer } )](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;deletes the folder|
|[**.exists** : Boolean](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the folder exists on disk|
|[**.extension** : Text](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the extension of the folder name (if any)|
|[**.fullName** : Text](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the full name of the folder, including its extension (if any)|
|[**.getIcon**( { *size* : Integer } ) : Picture](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the icon of the folder|
|[**.hidden** : Boolean](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp; true if the folder is set as "hidden" at the system level|
|[**.isAlias** : Boolean](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **false** for a `Folder` object|
|[**.isFile** : Boolean](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **false** for a folder|
|[**.isFolder** : Boolean](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **true** for a folder|
|[**.isPackage** : Boolean](#ispackage)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the folder is a package on macOS  (and exists on disk)|
|[**.modificationDate** : Date](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp; the date of the folder's last modification|
|[**.modificationTime** : Time](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the time of the folder's last modification|
|[**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp; the name of the folder, without extension (if any)|
|[**.original** : 4D.Folder](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;the same Folder object as the folder|
|[**.parent** : 4D.Folder](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;the parent folder object of the folder|
|[**.path** : Text](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;the POSIX path of the folder|
|[**.platformPath** : Text](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the folder expressed with the current platform syntax|
|[**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;moves or renames the `Folder` object (source folder) into the specified *destinationFolder*|
|[**.rename**( *newName* : Text ) : 4D.Folder](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;renames the folder with the name you passed in *newName* and returns the renamed `Folder` object|



## Folder

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**Folder** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder

|Parameter|Type||Description|
|---------|--- |:---:|------|
|path|Text|->|Folder path|
|folderConstant|Integer|->|4D folder constant|
|pathType|Integer|->|`fk posix path` (default) or `fk platform path`|
|*||->|* to return folder of host database|
|Result|4D.Folder|<-|New folder object|


#### Description

The `Folder` command creates and returns a new object of the `4D.Folder` type. The command accepts two syntaxes:

**Folder ( path { ; pathType } { ; \* } )**

In the *path* parameter, pass a folder path string. You can use a custom string or a filesystem (e.g., "/DATA").

> Only absolute pathnames are supported with the `Folder` command. 

By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. The following constants are available:

|Constant|Value|Comment|
|---|---|---|
|fk platform path|1|Path expressed with a platform-specific syntax (mandatory in case of platform pathname)|
|fk posix path|0|Path expressed with POSIX syntax (default)

**Folder ( folderConstant { ; \* } )**

In the *folderConstant* parameter, pass a 4D built-in or system folder, using one of the following constants:

|Constant|Value|Comment|
|---|---|---|
|fk applications folder|116||
|fk data folder|9|Associated filesystem: "/DATA"|
|fk database folder|4|Associated filesystem: "/PACKAGE"|
|fk desktop folder|115||
|fk documents folder|117|Document folder of the user|
|fk licenses folder|1|Folder containing the machine's 4D license files|
|fk logs folder|7|Associated filesystem: "/LOGS"|
|fk mobileApps folder|10|Associated filesystem: "/DATA"|
|fk remote database folder|3|4D database folder created on each 4D remote machine|
|fk resources folder|6|Associated filesystem: "/RESOURCES"|
|fk system folder|100||
|fk user preferences folder|0|4D folder that stores user preference files within the \<userName> directory.|
|fk web root folder|8|Current Web root folder of the database: if within the package "/PACKAGE/path", otherwise full path|

If the command is called from a component, pass the optional * parameter to get the path of the host database. Otherwise, if you omit the * parameter, a null object is always returned.  


## 4D.Folder.new()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added
</details>

**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**4D.Folder.new** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder

#### Description

The `4D.Folder.new()` function creates and returns a new object of the `4D.Folder` type. It is identical to the [`Folder`](#folder) command (shortcut).

> It is recommended to use the [`Folder`](#folder) shortcut command instead of `4D.Folder.new()`. 


## .copyTo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder |4D.Folder |->|Destination folder|
|newName|Text|->|Name for the copy|
|overwrite|Integer|->|`fk overwrite` to replace existing elements|
|Result|4D.Folder|<-|Copied file or folder|


#### Description

The `.copyTo()` function copies the `Folder` object into the specified *destinationFolder*.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the folder is copied with the name of the original folder. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a folder with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`fk overwrite`|4|Overwrite existing elements, if any|


**Returned value**

The copied `Folder` object.

#### Example

You want to copy a Pictures *folder* from the user's Document folder to the Database folder:

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 




## .create()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>



**.create()** : Boolean
|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if the folder was created successfully, false otherwise|



#### Description

The `.create()` function creates a folder on disk according to the properties of the `Folder` object.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

*	**True** if the folder is created successfully;
*	**False** if a folder with the same name already exists or if an error occured.

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





## .createAlias()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>



**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File

|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|4D.Folder|->|Destination folder for the alias or shortcut|
|aliasName|Text|->|Name of the alias or shortcut|
|aliasType|Integer|->|Type of the alias link|
|Result|4D.File|<-|Alias or shortcut reference|


#### Description

The `.createAlias()` function creates an alias (macOS) or a shortcut (Windows) to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

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


## .creationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.creationDate** : Date

#### Description

The `.creationDate` property returns the creation date of the folder.

This property is **read-only**. 




## .creationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.creationTime** : Time


#### Description

The `.creationTime` property returns the creation time of the folder (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 





## .delete()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>



**.delete**( { *option* : Integer } )

|Parameter|Type||Description|
|---|----|---|---|
|option |Integer|->|Folder deletion option|



#### Description

The `.delete()` function deletes the folder.

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the option parameter with one of the following constants:

|Constant|	Value|	Comment|
|---|---|---|
|`Delete only if empty`|	0|	Deletes folder only when it is empty|
|`Delete with contents`|	1|	Deletes folder along with everything it contains|

When `Delete only if empty` is passed or if you omit the option parameter:

*	The folder is only deleted if it is empty; otherwise, the command does nothing and an error -47 is generated.
*	If the folder does not exist, the error -120 is generated.

When `Delete with contents` is passed:

*	The folder, along with all of its contents, is deleted.
**Warning**: Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted.
*	If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and an error(*) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use the `GET LAST ERROR STACK` command to retrieve the name and path of the offending file.
*	If the folder does not exist, the command does nothing and no error is returned.
(*) Windows: -54 (Attempt to open locked file for writing)
macOS: -45 (The file is locked or the pathname is not correct)

 
 

## .exists

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.exists** : Boolean

#### Description

The `.exists` property returns true if the folder exists on disk, and false otherwise.

This property is **read-only**. 





## .extension

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.extension** : Text

#### Description

The `.extension` property returns the extension of the folder name (if any). An extension always starts with ".". The property returns an empty string if the folder name does not have an extension.

This property is **read-only**. 





## .file()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.file**( *path* : Text ) : 4D.File
|Parameter|Type||Description|
|---|----|---|---|
|path|Text|->|Relative POSIX file pathname|
|Result|4D.File|<-|`File` object (null if invalid path)|

#### Description

The `.file()` function creates a `File` object inside the `Folder` object and returns its reference.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `File` object or null if *path* is invalid. 

#### Example

```4d
var $myPDF : 4D.File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```





## .files()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.files**( { *options* : Integer } ) : Collection
|Parameter|Type||Description|
|---|----|---|---|
|options|Integer|->|File list options|
|Result|Collection|<-|Collection of children file objects|

#### Description

The `.files()` function returns a collection of `File` objects contained in the folder.

>Aliases or symbolic links are not resolved. 

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the *options* parameter, one or more of the following constants:

|Constant|	Value|	Comment|
|---|---|---|
|`fk recursive`|1|The collection contains files or folders of the specified folder and its subfolders|
|`fk ignore invisible`|	8|Invisible files or folders are not listed|

**Returned value**

Collection of `File` objects. 

#### Example 1

You want to know if there are invisible files in the Database folder:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

#### Example 2  

You want to get all files that are not invisible in the Documents folder:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```





## .folder()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.folder**( *path* : Text ) : 4D.Folder
|Parameter|Type||Description|
|---|----|---|---|
|path|Text|->|Relative POSIX file pathname|
|Result|4D.Folder|<-|Created folder object (null if invalid *path*)|

#### Description

The `.folder()` function creates a `Folder` object inside the parent `Folder` object and returns its reference.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `Folder` object or null if *path* is invalid. 

#### Example

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```





## .folders()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.folders**( { *options* : Integer } ) : Collection
|Parameter|Type||Description|
|---|----|---|---|
|options|Integer|->|Folder list options|
|Result|Collection|<-|Collection of children folder objects|

#### Description

The `.folders()` function returns a collection of `Folder` objects contained in the parent folder.

By default, if you omit the *options* parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

|Constant|	Value|	Comment|
|---|---|---|
|`fk recursive`|	1|The collection contains files or folders of the specified folder and its subfolders|
|`fk ignore invisible`|	8|Invisible files or folders are not listed|

**Returned value**

Collection of `Folder` objects. 

#### Example 

You want the collection of all folders and subfolders of the database folder:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```





## .fullName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.fullName** : Text

#### Description

The `.fullName` property returns the full name of the folder, including its extension (if any).

This property is **read-only**. 





## .getIcon()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getIcon**( { *size* : Integer } ) : Picture
|Parameter|Type||Description|
|---|----|---|---|
|size|Integer|->|Side length for the returned picture (pixels)|
|Result|Picture|<-|Icon|


#### Description

The `.getIcon()` function returns the icon of the folder.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels ("large icons") or 16x16 pixels ("small icons"). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.  

**Returned value**

Folder icon [picture](Concepts/dt_picture.md).





## .hidden

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.hidden** : Boolean

#### Description

The `.hidden` property returns  true if the folder is set as "hidden" at the system level, and false otherwise. 

This property is **read-only**. 






## .isAlias

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isAlias** : Boolean


#### Description

The `.isAlias` property returns always **false** for a `Folder` object. 

This property is **read-only**. 






## .isFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isFile** : Boolean

#### Description

The `.isFile` property returns always **false** for a folder. 

This property is **read-only**. 






## .isFolder

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isFolder** : Boolean

#### Description

The `.isFolder` property returns always **true** for a folder. 

This property is **read-only**. 






## .isPackage

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isPackage** : Boolean

#### Description

The `.isPackage` property returns true if the folder is a package on macOS  (and exists on disk). Otherwise, it returns false.

On Windows, `.isPackage` always returns **false**.

This property is **read-only**. 






## .modificationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.modificationDate** : Date

#### Description

The `.modificationDate` property returns  the date of the folder's last modification. 

This property is **read-only**. 






## .modificationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.modificationTime** : Time

#### Description

The `.modificationTime` property returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00). 

This property is **read-only**. 






## .moveTo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|4D.Folder|->|Destination folder|
|newName|Text|->|Full name for the moved folder|
|Result|4D.Folder|<-|Moved folder|


#### Description

The `.moveTo( )` function moves or renames the `Folder` object (source folder) into the specified *destinationFolder*.

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


## .name

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>



**.name** : Text

#### Description

The `.name` property returns  the name of the folder, without extension (if any). 

This property is **read-only**. 






## .original

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.original** : 4D.Folder

#### Description

The `.original` property returns the same Folder object as the folder. 

This property is **read-only**. 

>This property is available on folders to allow generic code to process folders or files.






## .parent

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.parent** : 4D.Folder

#### Description

The `.parent` property returns the parent folder object of the folder. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

If the folder does not have a parent (root), the null value is returned. 

This property is **read-only**. 






## .path

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.path** : Text

#### Description

The `.path` property returns the POSIX path of the folder. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**. 





## .platformPath

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.platformPath** : Text

#### Description

The `.platformPath` property returns the path of the folder expressed with the current platform syntax.

This property is **read-only**. 





 
## .rename()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.rename**( *newName* : Text ) : 4D.Folder

|Parameter|Type||Description|
|---|---|---|---|
|newName|Text|->|New full name for the folder|
|Result|4D.Folder|<-|Renamed folder|



#### Description

The `.rename()` function renames the folder with the name you passed in *newName* and returns the renamed `Folder` object.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.


**Returned object**

The renamed `Folder` object.

#### Example


```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<style> h2 { background: #d9ebff;}</style>
