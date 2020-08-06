---
id: directory
title: Directory Class
---

## Description


## Properties

|Property|Type|Description|
|----|----|-----------|
|creationDate|Date|<ul><li>**Folder**: Returns the creation date of the folder. This property is **read-only**.</li><li>**ZIP archive**: Date may be different for the root folder from a folder within the archive</li></ul>|
|creationTime| Time|<ul><li>**Folder**: Returns the creation time of the folder (expressed as a number of seconds beginning at 00:00). This property is **read-only**.</li><li>**ZIP archive**: Time may be different for the root folder from a folder within the archive</li></ul>|
|exists|Boolean | Returns **true** if the folder exists on disk, and **false** otherwise. This property is **read-only**.|
|extension|Text |Returns the extension of the folder name. An extension always starts with ".". The property returns an empty string if the folder name does not have an extension. This property is **read-only**.| 
|fullName| Text|Returns the full name of the folder, including its extension (if any). This property is **read-only**.|
|hidden |Boolean |  Returns **true** if the folder is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.|
|isAlias|Boolean |Returns **true** if the folder is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.|
|isFile |Boolean |Always returns **false** for a folder. This property is **read-only**.|
|isFolder|Boolean |Always returns **true** for a folder. This property is **read-only**.| 
|isPackage|Boolean |Always returns **true** for a package. This property is **read-only**.|  
|modificationDate| Date| <ul><li>**Folder**: Returns the date of the folder's last modification. This property is **read-only**.</li><li>**ZIP archive**: Date may be different for the root folder from a folder within the archive</li></ul>| 
|modificationTime|Time |<ul><li>**Folder**: Returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.</li><li>**ZIP archive**: Time may be different for the root folder from a folder within the archive</li></ul>|
|name|Text | Returns the name of the folder, without extension (if any). This property is **read-only**.|
|original |Object |Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.|
|parent|Object |<ul><li>**Folder**: Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.</li><li>**ZIP archive**: The archive's virtual root folder has no parent. However, the folders within the archive may have a parent other than the root.</li></ul>|
|path|Text |<ul><li>**Folder**: Returns the POSIX path of the folder. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.</li><li>**ZIP archive**: Returns a path relative to the archive</li></ul>|
|platformPath|Text  |Returns the path of the folder expressed with the current platform syntax. This property is **read-only**.|


## Functions



### .copyTo( )

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


##### Description
The `.copyTo( )` function  copies a `Folder` object (source file/folder) into the specified *destinationFolder* .

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the folder is copied with the name of the original folder. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a folder with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`fk overwrite`|4|Overwrite existing elements, if any|


**Returned value**

The copied `Folder` object.

##### Example

You want to copy a Pictures *folder* from the user's Document folder to the Database folder:

```4d
C_OBJECT($userImages;$copiedImages)
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 
 


### .file( )

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

##### Description
The `.file( )` function creates a `File` object inside the `Folder` object and returns its reference.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `File` object or null if *path* is invalid. 

##### Example

```4d
C_OBJECT($myPDF)
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```



### .files( )

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

##### Description
The `.files( )` function returns a collection of `File` objects contained in the folder.

>Aliases or symbolic links are not resolved. 

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

|Constant|	Value|	Comment|
|---|---|---|
|`fk recursive`|	1|The collection contains files or folders of the specified folder and its subfolders|
|`fk ignore invisible`|	8|Invisible files or folders are not listed|

**Returned value**

Collection of `File` objects. 

##### Example 1

You want to know if there are invisible files in the Database folder:

```4d
 C_COLLECTION($all;$noInvisible)
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

##### Example 2  

You want to get all files that are not invisible in the Documents folder:

```4d
 C_COLLECTION($recursive)
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```




### .folder( )

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

##### Description
The `.folder( )` function creates a `Folder` object inside the parent `Folder` object and returns its reference.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `Folder` object or null if *path* is invalid. 

##### Example

```4d
 C_OBJECT($mypicts)
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```




### .folders( )

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

##### Description
The `.folders( )` function returns a collection of `Folder` objects contained in the parent folder.

By default, if you omit the *options* parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

|Constant|	Value|	Comment|
|---|---|---|
|`fk recursive`|	1|The collection contains files or folders of the specified folder and its subfolders|
|`fk ignore invisible`|	8|Invisible files or folders are not listed|

**Returned value**

Collection of `Folder` objects. 

##### Example 

You want the collection of all folders and subfolders of the database folder:

```4d
 C_COLLECTION($allFolders)
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```



### .getIcon( )

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


##### Description
The `.getIcon( )` function returns the icon of the folder.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.  

**Returned value**

Folder icon [picture](../Concepts/picture.html).




