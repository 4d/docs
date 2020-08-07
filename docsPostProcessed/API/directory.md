---
id: 
title:  Class
---

## Description


## .creationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.creationDate** -> creation date
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|date|<-|Creation date|


##### Description
The `.creationDate` property  returns the creation date of the folder.

This property is **read-only**. 

 
--- 
 
 ## .creationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.creationTime** -> creation time
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|time|<-|Creation time|


##### Description
The `.creationTime` property  returns the creation  time of the folder (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 


---


## .exists

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.exists** -> boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the folder exists, false otherwise|


##### Description
The `.exists` property  returns true if the folder exists on disk, and false otherwise.

This property is **read-only**. 



---


## .extension

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.extension** -> folder name extension
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Folder name extension (if any)|


##### Description
The `.extension` property  returns the extension of the folder name. An extension always starts with ".". The property returns an empty string if the folder name does not have an extension.

This property is **read-only**. 



---

## .fullName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.fullName** -> full folder name
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Full folder name, including extension (if any)|


##### Description
The `.fullName` property returns the full name of the folder, including its extension (if any).

This property is **read-only**. 



---

## .hidden

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.hidden** -> boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the hidden system flag is set for the folder, false otherwise|


##### Description
The `.hidden` property returns true if the folder is set as "hidden" at the system level, and false otherwise. 

This property is **read-only**. 


---


## .isAlias

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isAlias** -> boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Always false|


##### Description
The `.isAlias` property always returns **false** for a `Folder` object. 

This property is **read-only**. 


---

## .isFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isFile** -> boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Always false|


##### Description
The `.isFile` property always returns **false** for a folder. 

This property is **read-only**. 


---

## .isFolder

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isFolder** -> boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Always false|
true


##### Description
The `.isFolder` property always returns **true** for a folder. 

This property is **read-only**. 


---

## .isPackage

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isWritable** -> boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the folder is a package on macOS (always false on Windows)|


##### Description
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

**.modificationDate** -> modification date
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|date|<-|Modification date|


##### Description
The `.modificationDate` property returns the date of the folder's last modification. 

This property is **read-only**. 



---

## .modificationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.modificationTime** -> modification date
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|time|<-|Modification time|


##### Description
The `.modificationTime` property returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00). 

This property is **read-only**. 


---

## .name

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.name** -> file name
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Folder name without extension (if any)|


##### Description
The `.name` property returns the name of the folder, without extension (if any). 

This property is **read-only**. 


---

## .original

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.original** -> object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Same folder object|


##### Description
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
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Parent folder object (if any)|


##### Description
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
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|POSIX path (including filesystem if any)|


##### Description
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
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Path expressed with the platform syntax|


##### Description
The `.platformPath` property returns the path of the folder expressed with the current platform syntax.

This property is **read-only**. 



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


##### Description
The `.getIcon( )` function returns the icon of the folder.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.  

**Returned value**

Folder icon [picture](../Concepts/picture.html).




