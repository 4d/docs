---
id: document
title: Document
---

## Description

## Properties

|name|description|
|----|-----------|
|[creationDate]()|returns the creation date of the file.|
|[creationTime]()|  returns the creation time of the file (expressed as a number of seconds beginning at 00:00). |
|[exists]()| returns true if the file exists on disk, and false otherwise.|
|[extension]()| returns the creation date of the file. | 
|[fullName]()|returns the full name of the file, including its extension (if any).|
|[hidden]() |  returns true if the file is set as "hidden" at the system level, and false otherwise. |
|[isAlias]()| returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise.|
|[isFile]() |always returns true for a file.|
|[isFolder]()|returns always false for a file.| 
|[isWritable]()|returns true if the file exists on disk and is writable.| 
|[modificationDate]()| returns the date of the file's last modification.| 
|[modificationTime]()|returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00).|
|[name]()|  returns the name of the file, without extension (if any).|
|[orignial]() |returns the target element for an alias, a shortcut, or a symbolic link file.|
|[parent]()|returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.|
|[path]()|returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.|
|[platformPath]()|  returns the path of the file expressed with the current platform syntax. |


## Methods

|name|description|
|----|-----------|
|[getContent()](#getcontent)|a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.|
||**getContent** &rarr; Result|
|[copyTo()](#copyto)|a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.|
||**copyTo** (*destinationFolder*{;{*newName}*{;*overwrite*} ) &rarr; Result|
|[getText()](#gettext)|a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.|
||**getText** &rarr; Result|
|[getIcon()](#geticon)|a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.|
||**getIcon** &rarr; Result|
 

### getContent()
**getContent** &rarr; Result
|Parameter|Type|Description|
|---------|----|-----------|
|Result | BLOB |File content|


##### Description
The file.getContent() method returns a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.
*Returned value*

The file.getContent( ) method returns a BLOB.

##### Example
To save a document contents in a BLOB field:

```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```



### copyTo()

**copyTo** (*destinationFolder*{;{*newName}*{;*overwrite*} ) &rarr; Result
|Parameter|Type|Description|
|---------|--- |-----------|
|Result | BLOB |File content|

##### Description
The file.getContent( ) method returns a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.
*Returned value*

The file.getContent( ) method returns a BLOB.

##### Example
To save a document contents in a BLOB field:

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 
### getText()
**getText** &rarr; Result
|Parameter|Type|Description|
|---------|----|-----------|
|Result | BLOB |File content|

##### Description
The file.getContent( ) method returns a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.
*Returned value*

The file.getContent( ) method returns a BLOB.

##### Example
To save a document contents in a BLOB field:

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 
### getIcon()
**getIcon** &rarr; Result
|Parameter|Type|Description|
|---------|----|-----------|
|Result|BLOB|File content|

##### Description
The file.getContent( ) method returns a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.
*Returned value*

The file.getContent( ) method returns a BLOB.

##### Example
To save a document contents in a BLOB field:

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
  