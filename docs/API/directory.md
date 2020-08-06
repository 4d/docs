---
id: 
title:  Class
---

## Description


<!-- REF directory.creationDate.Desc -->
### .creationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.creationDate.Syntax -->
**.creationDate** -> creation date<!-- END REF -->

<!-- REF #directory.creationDate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|date|<-|Creation date|
<!-- END REF -->


##### Description
The `.creationDate` property  <!-- REF #directory.creationDate.Summary -->returns the creation date of the folder<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->
 
 
 <!-- REF directory.creationTime.Desc -->
### .creationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.creationTime.Syntax -->
**.creationTime** -> creation time<!-- END REF -->

<!-- REF #directory.creationTime.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|time|<-|Creation time|
<!-- END REF -->


##### Description
The `.creationTime` property  <!-- REF #directory.creationTime.Summary -->returns the creation  time of the folder<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 

<!-- END REF -->




<!-- REF directory.exists.Desc -->
### .exists

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.exists.Syntax -->
**.exists** -> boolean<!-- END REF -->

<!-- REF #directory.exists.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the folder exists, false otherwise|
<!-- END REF -->


##### Description
The `.exists` property  <!-- REF #directory.exists.Summary -->returns true if the folder exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**. 

<!-- END REF -->





<!-- REF directory.extension.Desc -->
### .extension

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.extension.Syntax -->
**.extension** -> folder name extension<!-- END REF -->

<!-- REF #directory.extension.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Folder name extension (if any)|
<!-- END REF -->


##### Description
The `.extension` property  <!-- REF #directory.extension.Summary -->returns the extension of the folder name<!-- END REF -->. An extension always starts with ".". The property returns an empty string if the folder name does not have an extension.

This property is **read-only**. 

<!-- END REF -->




<!-- REF directory.fullName.Desc -->
### .fullName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.fullName.Syntax -->
**.fullName** -> full folder name<!-- END REF -->

<!-- REF #directory.fullName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Full folder name, including extension (if any)|
<!-- END REF -->


##### Description
The `.fullName` property <!-- REF #directory.fullName.Summary -->returns the full name of the folder<!-- END REF -->, including its extension (if any).

This property is **read-only**. 

<!-- END REF -->




<!-- REF directory.hidden.Desc -->
### .hidden

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.hidden.Syntax -->
**.hidden** -> boolean<!-- END REF -->

<!-- REF #directory.hidden.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the hidden system flag is set for the folder, false otherwise|
<!-- END REF -->


##### Description
The `.hidden` property <!-- REF #directory.hidden.Summary -->returns true if the folder is set as "hidden" at the system level<!-- END REF -->, and false otherwise. 

This property is **read-only**. 

<!-- END REF -->




<!-- REF directory.isAlias.Desc -->
### .isAlias

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.isAlias.Syntax -->
**.isAlias** -> boolean<!-- END REF -->

<!-- REF #directory.isAlias.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Always false|
<!-- END REF -->


##### Description
The `.isAlias` property <!-- REF #directory.isAlias.Summary -->always returns **false** for a `Folder` object<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->



<!-- REF directory.isFile.Desc -->
### .isFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.isFile.Syntax -->
**.isFile** -> boolean<!-- END REF -->

<!-- REF #directory.isFile.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Always false|
<!-- END REF -->


##### Description
The `.isFile` property <!-- REF #directory.isFile.Summary -->always returns **false** for a folder<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->



<!-- REF directory.isFolder.Desc -->
### .isFolder

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.isFolder.Syntax -->
**.isFolder** -> boolean<!-- END REF -->

<!-- REF #directory.isFolder.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Always false|
<!-- END REF -->true


##### Description
The `.isFolder` property <!-- REF #directory.isFolder.Summary -->always returns **true** for a folder<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->



<!-- REF directory.isPackage.Desc -->
### .isPackage

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.isPackage.Syntax -->
**.isWritable** -> boolean<!-- END REF -->

<!-- REF #directory.isPackage.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the folder is a package on macOS (always false on Windows)|
<!-- END REF -->


##### Description
The `.isPackage` property <!-- REF #directory.isPackage.Summary -->returns true if the folder is a package on macOS  (and exists on disk)<!-- END REF -->. Otherwise, it returns false.

On Windows, `.isPackage` always returns **false**.

This property is **read-only**. 

<!-- END REF -->




<!-- REF directory.modificationDate.Desc -->
### .modificationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.modificationDate.Syntax -->
**.modificationDate** -> modification date<!-- END REF -->

<!-- REF #directory.modificationDate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|date|<-|Modification date|
<!-- END REF -->


##### Description
The `.modificationDate` property <!-- REF #directory.modificationDate.Summary -->returns the date of the folder's last modification<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->




<!-- REF directory.modificationTime.Desc -->
### .modificationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.modificationTime.Syntax -->
**.modificationTime** -> modification date<!-- END REF -->

<!-- REF #directory.modificationTime.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|time|<-|Modification time|
<!-- END REF -->


##### Description
The `.modificationTime` property <!-- REF #directory.modificationTime.Summary -->returns the time of the folder's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00). 

This property is **read-only**. 

<!-- END REF -->



<!-- REF directory.name.Desc -->
### .name

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.name.Syntax -->
**.name** -> file name<!-- END REF -->

<!-- REF #directory.name.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Folder name without extension (if any)|
<!-- END REF -->


##### Description
The `.name` property <!-- REF #directory.name.Summary -->returns the name of the folder<!-- END REF -->, without extension (if any). 

This property is **read-only**. 

<!-- END REF -->


<!-- REF directory.original.Desc -->
### .original

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.original.Syntax -->
**.original** -> object<!-- END REF -->

<!-- REF #directory.original.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Same folder object|
<!-- END REF -->


##### Description
The `.original` property <!-- REF #directory.original.Summary -->returns the same folder object as the folder<!-- END REF -->. 

This property is **read-only**. 

>This property is available on folders to allow generic code to process folders or files.

<!-- END REF -->




<!-- REF directory.parent.Desc -->
### .parent

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.parent.Syntax -->
**.parent** -> object<!-- END REF -->

<!-- REF #directory.parent.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Parent folder object (if any)|
<!-- END REF -->


##### Description
The `.parent` property <!-- REF #directory.parent.Summary -->returns the parent folder object of the folder<!-- END REF -->. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

If the folder does not have a parent (root), the null value is returned. 

This property is **read-only**. 

<!-- END REF -->




<!-- REF directory.path.Desc -->
### .path

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.path.Syntax -->
**.path** -> text<!-- END REF -->

<!-- REF #directory.path.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|POSIX path (including filesystem if any)|
<!-- END REF -->


##### Description
The `.path` property <!-- REF #directory.path.Summary -->returns the POSIX path of the folder<!-- END REF -->. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**. 

<!-- END REF -->



<!-- REF directory.platformPath.Desc -->
### .platformPath

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.platformPath.Syntax -->
**.platformPath** -> text<!-- END REF -->

<!-- REF #directory.platformPath.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Path expressed with the platform syntax|
<!-- END REF -->


##### Description
The `.platformPath` property <!-- REF #directory.platformPath.Summary -->returns the path of the folder expressed with the current platform syntax<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->














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



