---
id: directory
title: Directory Class
---

## Description


## Properties

<!-- REF directory.properties -->
|Property|Type|Description|
|----|----|-----------|
|<!-- REF directory.creationDate -->creationDate<!-- END REF -->|<!-- REF #directory.creationDate.type -->Date<!-- END REF -->|<!-- REF #directory.creationDate.Summary --><ul><li>**Folder**: Returns the creation date of the folder. This property is **read-only**.</li><li>**ZIP archive**: Date may be different for the root folder from a folder within the archive</li></ul><!-- END REF -->|
|<!-- REF directory.creationTime -->creationTime<!-- END REF -->| <!-- REF #directory.creationTime.type -->Time<!-- END REF -->|<!-- REF #directory.creationTime.Summary --><ul><li>**Folder**: Returns the creation time of the folder (expressed as a number of seconds beginning at 00:00). This property is **read-only**.</li><li>**ZIP archive**: Time may be different for the root folder from a folder within the archive</li></ul><!-- END REF -->|
|<!-- REF directory.exists -->exists<!-- END REF -->|<!-- REF #directory.exists.type -->Boolean<!-- END REF --> |<!-- REF #directory.exists.Summary --> Returns **true** if the folder exists on disk, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.extension -->extension<!-- END REF -->|<!-- REF #directory.extension.type -->Text<!-- END REF --> |<!-- REF #directory.extension.Summary -->Returns the extension of the folder name. An extension always starts with ".". The property returns an empty string if the folder name does not have an extension. This property is **read-only**.<!-- END REF -->| 
|<!-- REF directory.fullName -->fullName<!-- END REF -->| <!-- REF #directory.fullName.type -->Text<!-- END REF -->|<!-- REF #directory.fullName.Summary -->Returns the full name of the folder, including its extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.hidden -->hidden <!-- END REF -->|<!-- REF #directory.hidden.type -->Boolean<!-- END REF --> |<!-- REF #directory.hidden.Summary -->  Returns **true** if the folder is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.isAlias -->isAlias<!-- END REF -->|<!-- REF #directory.isAlias.type -->Boolean<!-- END REF --> |<!-- REF #directory.isAlias.Summary -->Returns **true** if the folder is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.isFile -->isFile <!-- END REF -->|<!-- REF #directory.isFile.type -->Boolean<!-- END REF --> |<!-- REF #directory.isFile.Summary -->Always returns **false** for a folder. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.isFolder -->isFolder<!-- END REF -->|<!-- REF #directory.isFolder.type -->Boolean<!-- END REF --> |<!-- REF #directory.isFolder.Summary -->Always returns **true** for a folder. This property is **read-only**.<!-- END REF -->| 
|<!-- REF directory.isPackage -->isPackage<!-- END REF -->|<!-- REF #directory.isPackage.type -->Boolean<!-- END REF --> |<!-- REF #directory.isPackage.Summary -->Always returns **true** for a package. This property is **read-only**.<!-- END REF -->|  
|<!-- REF directory.modificationDate -->modificationDate<!-- END REF -->| <!-- REF #directory.modificationDate.type -->Date<!-- END REF -->|<!-- REF #directory.modificationDate.Summary --> <ul><li>**Folder**: Returns the date of the folder's last modification. This property is **read-only**.</li><li>**ZIP archive**: Date may be different for the root folder from a folder within the archive</li></ul><!-- END REF -->| 
|<!-- REF directory.modificationTime -->modificationTime<!-- END REF -->|<!-- REF #directory.modificationTime.type -->Time<!-- END REF --> |<!-- REF #directory.modificationTime.Summary --><ul><li>**Folder**: Returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.</li><li>**ZIP archive**: Time may be different for the root folder from a folder within the archive</li></ul><!-- END REF -->|
|<!-- REF directory.name -->name<!-- END REF -->|<!-- REF #directory.name.type -->Text<!-- END REF --> |<!-- REF #directory.name.Summary --> Returns the name of the folder, without extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.original -->original <!-- END REF -->|<!-- REF #directory.original.type -->Object<!-- END REF --> |<!-- REF #directory.original.Summary -->Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.parent -->parent<!-- END REF -->|<!-- REF #directory.parent.type -->Object<!-- END REF --> |<!-- REF #directory.parent.Summary --><ul><li>**Folder**: Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.</li><li>**ZIP archive**: The archive's virtual root folder has no parent. However, the folders within the archive may have a parent other than the root.</li></ul><!-- END REF -->|
|<!-- REF directory.path -->path<!-- END REF -->|<!-- REF #directory.path.type -->Text<!-- END REF --> |<!-- REF #directory.path.Summary --><ul><li>**Folder**: Returns the POSIX path of the folder. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.</li><li>**ZIP archive**: Returns a path relative to the archive</li></ul><!-- END REF -->|
|<!-- REF directory.platformPath -->platformPath<!-- END REF -->|<!-- REF #directory.platformPath.type -->Text<!-- END REF -->  |<!-- REF #directory.platformPath.Summary -->Returns the path of the folder expressed with the current platform syntax. This property is **read-only**.<!-- END REF -->|

<!-- END REF -->

## Functions



<!-- REF directory.copyTo().Desc -->
### .copyTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.copyTo().Syntax -->
**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> object<!-- END REF -->

<!-- REF #directory.copyTo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder |object |->|Destination folder|
|newName|text|->|Name for the copy|
|overwrite|longint|->|`fk overwrite` to replace existing elements|
|Result|object|<-|Copied file or folder|
<!-- END REF -->


##### Description
The `.copyTo( )` function  <!-- REF #directory.copyTo().Summary -->copies a `Folder` object (source file/folder) into the specified *destinationFolder* <!-- END REF -->.

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
 
 <!-- END REF -->



<!-- REF directory.file().Desc -->
### .file( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.file().Syntax -->
**.file**( *path* ) -> object<!-- END REF -->

<!-- REF #directory.file().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|path|text|->|Relative POSIX file pathname|
|Result|object, null|<-|`File` object|
<!-- END REF -->

##### Description
The `.file( )` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `File` object or null if *path* is invalid. 

##### Example

```4d
C_OBJECT($myPDF)
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```

<!-- END REF -->


<!-- REF directory.files().Desc -->
### .files( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.files().Syntax -->
**.file**( { *options* } ) -> collection<!-- END REF -->

<!-- REF #directory.files().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|options|text|->|File list options|
|Result|collection|<-|Collection of children file objects|
<!-- END REF -->

##### Description
The `.files( )` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.

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

<!-- END REF -->



<!-- REF directory.folder().Desc -->
### .folder( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.folder().Syntax -->
**.file**( *path* ) -> object<!-- END REF -->

<!-- REF #directory.folder().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|path|text|->|Relative POSIX file pathname|
|Result|object, null|<-|`Folder` object|
<!-- END REF -->

##### Description
The `.folder( )` function creates <!-- REF #directory.folder().Summary -->a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `Folder` object or null if *path* is invalid. 

##### Example

```4d
 C_OBJECT($mypicts)
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->



<!-- REF directory.folders().Desc -->
### .folders( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.folders().Syntax -->
**.file**( { *options* } ) -> collection<!-- END REF -->

<!-- REF #directory.folders().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|options|text|->|Folder list options|
|Result|collection|<-|Collection of children folder objects|
<!-- END REF -->

##### Description
The `.folders( )` function returns <!-- REF #directory.folders().Summary -->a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

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

<!-- END REF -->


<!-- REF directory.getIcon().Desc -->
### .getIcon( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.getIcon().Syntax -->
**.getIcon**( { *size* } ) -> picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|size|longint|->|Side length for the returned picture (pixels)|
|Result|picture|<-|Icon|
<!-- END REF -->


##### Description
The `.getIcon( )` function returns <!-- REF #directory.getIcon().Summary -->the icon of the folder<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.  

**Returned value**

Folder icon [picture](../Concepts/picture.html).

<!-- END REF -->



