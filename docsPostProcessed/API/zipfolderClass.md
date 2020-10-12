---
id: zipfolderClass
title: ZIP Folder Archive
---

A 4D ZIP folder archive is a `Folder` object containing one or more folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to:

*	Save disk space
*	Store data on a removable media device
*	Easily transfer files via mediums which may have size limitations (e.g., email or inter/intranet systems)

4D ZIP archives are created and handled with the following 4D commands:

*	[ZIP Create archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Create-archive.301-4982187.en.html)
*	[ZIP Read archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Read-archive.301-4982192.en.html)

## Summary

||
|---|
|[**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder](#copyto-)|
|&nbsp;&nbsp;&nbsp;&nbsp;copies the `Folder` object into the specified *destinationFolder*|
|[**.creationDate** : Date](#creationdate)|
|&nbsp;&nbsp;&nbsp;&nbsp;Date may be different for the root folder from a folder within the archive|
|[**.creationTime** : Time](#creationtime)|
|&nbsp;&nbsp;&nbsp;&nbsp;Time may be different for the root folder from a folder within the archive|
|[**.exists** : Boolean](#exists)|
|&nbsp;&nbsp;&nbsp;&nbsp;true if the folder exists on disk|
|[**.extension** : Text](#extension)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the extension of the folder name (if any)|
|[**.file**( *path* : Text ) : 4D.File](#file-)|
|&nbsp;&nbsp;&nbsp;&nbsp;a `File` object inside the `Folder` object and returns its reference|
|[**.files**( { *options* : Integer } ) : Collection](#files-)|
|&nbsp;&nbsp;&nbsp;&nbsp;a collection of `File` objects contained in the folder|
|[**.folder**( *path* : Text ) : 4D.Folder](#folder-)|
|&nbsp;&nbsp;&nbsp;&nbsp;a `Folder` object inside the parent `Folder` object and returns its reference|
|[**.folders**( { *options* : Integer } ) : Collection](#folders-)|
|&nbsp;&nbsp;&nbsp;&nbsp;a collection of `Folder` objects contained in the parent folder|
|[**.fullName** : Text](#fullname)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the full name of the folder, including its extension (if any)|
|[**.getIcon**( { *size* : Integer } ) : Picture](#geticon-)|
|&nbsp;&nbsp;&nbsp;&nbsp;the icon of the folder|
|[**.hidden** : Boolean](#hidden)|
|&nbsp;&nbsp;&nbsp;&nbsp; true if the folder is set as "hidden" at the system level|
|[**.isAlias** : Boolean](#isalias)|
|&nbsp;&nbsp;&nbsp;&nbsp;always **false** for a `Folder` object|
|[**.isFile** : Boolean](#isfile)|
|&nbsp;&nbsp;&nbsp;&nbsp;always **false** for a folder|
|[**.isFolder** : Boolean](#isfolder)|
|&nbsp;&nbsp;&nbsp;&nbsp;always **true** for a folder|
|[**.isPackage** : Boolean](#ispackage)|
|&nbsp;&nbsp;&nbsp;&nbsp;true if the folder is a package on macOS  (and exists on disk)|
|[**.modificationDate** : Date](#modificationdate)|
|&nbsp;&nbsp;&nbsp;&nbsp;Date may be different for the root folder from a folder within the archive|
|[**.modificationTime** : Time](#modificationtime)|
|&nbsp;&nbsp;&nbsp;&nbsp;Time may be different for the root folder from a folder within the archive|
|[**.name** : Text](#name)|
|&nbsp;&nbsp;&nbsp;&nbsp; the name of the folder, without extension (if any)|
|[**.original** : 4D.Folder](#original)|
|&nbsp;&nbsp;&nbsp;&nbsp;the same Folder object as the folder|
|[**.parent** : 4D.Folder](#parent)|
|&nbsp;&nbsp;&nbsp;&nbsp;The archive's virtual root folder has no parent. However, the folders within the archive may have a parent other than the root.|
|[**.path** : Text](#path)|
|&nbsp;&nbsp;&nbsp;&nbsp;Returns a path relative to the archive|
|[**.platformPath** : Text](#platformpath)|
|&nbsp;&nbsp;&nbsp;&nbsp;the path of the folder expressed with the current platform syntax|



---


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
 


---

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



---

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




---

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



---

## .extension

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.extension** : Text

#### Description

The `.extension` property  returns the extension of the folder name (if any). An extension always starts with ".". The property returns an empty string if the folder name does not have an extension.

This property is **read-only**. 



---

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



---

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



---

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



---

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



---

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



---

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



---

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



---


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



---


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



---


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



---


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



---


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



---


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




---


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



---


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



---


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



---


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



---


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









