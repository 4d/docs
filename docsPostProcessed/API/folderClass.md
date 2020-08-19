---
id: folderClass
title: Folder
---

`Folder` objects are created with the [`Folder`](https://doc.4d.com/4Dv18R4/4D/18-R4/Folder.301-4982248.en.html) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`folder.create( )`](#create-) function.

### Example

The following example creates a "JohnSmith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

## Summary

||
|---|
|[**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> object](#copyto-)<p>&nbsp;&nbsp;&nbsp;&nbsp;copies the `Folder` object into the specified *destinationFolder* |
|[**.create( )** -> boolean](#create-)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a folder on disk according to the properties of the `Folder` object|
|[**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> object](#createalias-)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates an alias (macOS) or a shortcut (Windows) |
|[**.creationDate** -> Date](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation date of the folder|
|[**.creationTime** -> Time](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation time of the folder|
|[**.delete**( { *option* } )](#delete-)<p>&nbsp;&nbsp;&nbsp;&nbsp;deletes the folder|
|[**.exists** -> boolean](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the folder exists on disk|
|[**.extension** -> text](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the extension of the folder name (if any)|
|[**.fullName** -> text](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the full name of the folder, including its extension (if any)|
|[**.getIcon**( { *size* } ) -> picture](#geticon-)<p>&nbsp;&nbsp;&nbsp;&nbsp;the icon of the folder|
|[**.hidden** -> boolean](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp; true if the folder is set as "hidden" at the system level|
|[**.isAlias** -> boolean](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **false** for a `Folder` object|
|[**.isFile** -> boolean](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **false** for a folder|
|[**.isFolder** -> boolean](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **true** for a folder|
|[**.isPackage** -> boolean](#ispackage)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the folder is a package on macOS  (and exists on disk)|
|[**.modificationDate** -> Date](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp; the date of the folder's last modification|
|[**.modificationTime** -> Time](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the time of the folder's last modification|
|[**.name** -> text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp; the name of the folder, without extension (if any)|
|[**.original** -> object](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;the same folder object as the folder|
|[**.parent** -> object](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;the parent folder object of the folder|
|[**.path** -> text](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;the POSIX path of the folder|
|[**.platformPath** -> text](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the folder expressed with the current platform syntax|
|[**.moveTo**( *destinationFolder* { ; *newName*} )  -> object](#moveto-)<p>&nbsp;&nbsp;&nbsp;&nbsp;moves or renames the `Folder` object (source folder) into the specified *destinationFolder*|
|[**.rename**( *newName* ) -> object](#rename-)<p>&nbsp;&nbsp;&nbsp;&nbsp;renames the folder with the name you passed in *newName* and returns the renamed `Folder` object|


---


## .copyTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder |object |->|Destination folder|
|newName|text|->|Name for the copy|
|overwrite|longint|->|`fk overwrite` to replace existing elements|
|Result|object|<-|Copied file or folder|


#### Description
The `.copyTo( )` function  copies the `Folder` object into the specified *destinationFolder* .

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
C_OBJECT($userImages;$copiedImages)
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 


---

## .create( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>



**.create( )** -> boolean
|Parameter|Type||Description|
|---|---|---|---|
|Result|boolean|<-|True if the folder was created successfully, false otherwise|



#### Description

The `.create( )` function creates a folder on disk according to the properties of the `Folder` object.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

*	**True** if the folder is created successfully;
*	**False** if a folder with the same name already exists or if an error occured.

#### Example 1

Create an empty folder in the database folder:

```4d
var $prefs : Object
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



---

## .createAlias( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>



**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> object

|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|object|->|Destination folder for the alias or shortcut|
|aliasName|text|->|Name of the alias or shortcut|
|aliasType|longint|->|Type of the alias link|
|Result|object|<-|>Alias or shortcut folder reference|


#### Description
The `.createAlias( )` function creates an alias (macOS) or a shortcut (Windows) to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`fk alias link`|0|Alias link (macOS only)(default)|
|`fk symbolic link`|1|Symbolic link (macOS only)|

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Returned object**

A `Folder` object with the `isAlias` property set to true.

#### Example

You want to create an alias to an archive folder in your database folder:

```4d
$myFolder:=Folder("C:\\Documents\\Archives\\2019\\January";fk platform path)
$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")
```


---

## .creationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.creationDate** -> Date

#### Description
The `.creationDate` property returns the creation date of the folder.

This property is **read-only**. 



---

## .creationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.creationTime** -> Time


#### Description
The `.creationTime` property returns the creation time of the folder (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 



---

## .delete( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>



**.delete**( { *option* } )

|Parameter|Type||Description|
|---|----|---|---|
|option |longint|->|Folder deletion option|



#### Description
The `.delete( )` function deletes the folder.

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



---

## .exists

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.exists** -> boolean

#### Description
The `.exists` property returns true if the folder exists on disk, and false otherwise.

This property is **read-only**. 



---

## .extension

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.extension** -> text

#### Description
The `.extension` property  returns the extension of the folder name (if any). An extension always starts with ".". The property returns an empty string if the folder name does not have an extension.

This property is **read-only**. 



---

## .file( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.file**( *path* ) -> object
|Parameter|Type||Description|
|---|----|---|---|
|path|text|->|Relative POSIX file pathname|
|Result|object, null|<-|`File` object|

#### Description
The `.file( )` function creates a `File` object inside the `Folder` object and returns its reference.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `File` object or null if *path* is invalid. 

#### Example

```4d
C_OBJECT($myPDF)
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```



---

## .files( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.file**( { *options* } ) -> collection
|Parameter|Type||Description|
|---|----|---|---|
|options|text|->|File list options|
|Result|collection|<-|Collection of children file objects|

#### Description
The `.files( )` function returns a collection of `File` objects contained in the folder.

>Aliases or symbolic links are not resolved. 

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

|Constant|	Value|	Comment|
|---|---|---|
|`fk recursive`|	1|The collection contains files or folders of the specified folder and its subfolders|
|`fk ignore invisible`|	8|Invisible files or folders are not listed|

**Returned value**

Collection of `File` objects. 

#### Example 1

You want to know if there are invisible files in the Database folder:


```4d
 C_COLLECTION($all;$noInvisible)
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

#### Example 2  

You want to get all files that are not invisible in the Documents folder:

```4d
 C_COLLECTION($recursive)
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```



---

## .folder( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.file**( *path* ) -> object
|Parameter|Type||Description|
|---|----|---|---|
|path|text|->|Relative POSIX file pathname|
|Result|object, null|<-|`Folder` object|

#### Description
The `.folder( )` function creates a `Folder` object inside the parent `Folder` object and returns its reference.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `Folder` object or null if *path* is invalid. 

#### Example

```4d
 C_OBJECT($mypicts)
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```



---

## .folders( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.file**( { *options* } ) -> collection
|Parameter|Type||Description|
|---|----|---|---|
|options|text|->|Folder list options|
|Result|collection|<-|Collection of children folder objects|

#### Description
The `.folders( )` function returns a collection of `Folder` objects contained in the parent folder.

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
 C_COLLECTION($allFolders)
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```



---

## .fullName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.fullName** -> text

#### Description
The `.fullName` property returns the full name of the folder, including its extension (if any).

This property is **read-only**. 



---

## .getIcon( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getIcon**( { *size* } ) -> picture
|Parameter|Type||Description|
|---|----|---|---|
|size|longint|->|Side length for the returned picture (pixels)|
|Result|picture|<-|Icon|


#### Description
The `.getIcon( )` function returns the icon of the folder.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.  

**Returned value**

Folder icon [picture](../Concepts/picture.html).



---

## .hidden

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.hidden** -> boolean

#### Description
The `.hidden` property returns  true if the folder is set as "hidden" at the system level, and false otherwise. 

This property is **read-only**. 



---


## .isAlias

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isAlias** -> boolean


#### Description
The `.isAlias` property returns always **false** for a `Folder` object. 

This property is **read-only**. 



---


## .isFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isFile** -> boolean

#### Description
The `.isFile` property returns always **false** for a folder. 

This property is **read-only**. 



---


## .isFolder

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isFolder** -> boolean

#### Description
The `.isFolder` property returns always **true** for a folder. 

This property is **read-only**. 



---


## .isPackage

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isPackage** -> boolean

#### Description
The `.isPackage` property returns true if the folder is a package on macOS  (and exists on disk). Otherwise, it returns false.

On Windows, `.isPackage` always returns **false**.

This property is **read-only**. 



---


## .modificationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.modificationDate** -> Date

#### Description
The `.modificationDate` property returns  the date of the folder's last modification. 

This property is **read-only**. 



---


## .modificationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.modificationTime** -> Time

#### Description
The `.modificationTime` property returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00). 

This property is **read-only**. 



---


## .moveTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.moveTo**( *destinationFolder* { ; *newName*} )  -> object
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|Object|->|Destination folder|
|newName|text|->|Full name for the moved folder|
|Result|object|<-|Moved folder|


#### Description
The `.moveTo( )` function moves or renames the `Folder` object (source folder) into the specified *destinationFolder*.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

**Returned object**

The moved `Folder` object.

#### Example

You want to move and rename a folder:

```4d
C_OBJECT($tomove;$moved)
 $docs:=Folder(fk documents folder)
 $tomove:=$docs.folder("Pictures")
 $tomove2:=$tomove.moveTo($docs.folder("Archives");"Pic_Archives")
```


---


## .name

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.name** -> text

#### Description
The `.name` property returns  the name of the folder, without extension (if any). 

This property is **read-only**. 



---


## .original

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.original** -> object

#### Description
The `.original` property returns the same folder object as the folder. 

This property is **read-only**. 

>This property is available on folders to allow generic code to process folders or files.



---


## .parent

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.parent** -> object

#### Description
The `.parent` property returns the parent folder object of the folder. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

If the folder does not have a parent (root), the null value is returned. 

This property is **read-only**. 



---


## .path

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.path** -> text

#### Description
The `.path` property returns the POSIX path of the folder. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**. 



---


## .platformPath

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.platformPath** -> text

#### Description
The `.platformPath` property returns the path of the folder expressed with the current platform syntax.

This property is **read-only**. 



---


 
## .rename( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.rename**( *newName* ) -> object
|Parameter|Type||Description|
|---|---|---|---|
|newName|text|->|New full name for the folder|
|Result|object|<-|Renamed folder|



#### Description

The `.rename( )` function renames the folder with the name you passed in *newName* and returns the renamed `Folder` object.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.


**Returned object**

The renamed `Folder` object.

#### Example


```4d
 C_OBJECT($toRename)
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

