---
id: document
title: Document
---

## 説明
blabla

## Properties

<!-- REF document.properties -->
| name                                                                         | description                                                                                                                                                                         |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|<!-- REF document.creationDate -->[creationDate]()<!-- END REF -->|<!-- REF document.creationDateDesc -->returns the creation date of the file.<!-- END REF -->|
|<!-- REF document.creationTime -->[creationTime]()<!-- END REF -->| <!-- REF document.creationTimeDesc --> returns the creation time of the file (expressed as a number of seconds beginning at 00:00). <!-- END REF -->|
|<!-- REF document.exists -->[exists]()<!-- END REF -->|<!-- REF document.existsDesc --> returns true if the file exists on disk, and false otherwise.<!-- END REF -->|
|<!-- REF document.extension -->[extension]()<!-- END REF -->| <!-- REF document.extensionDesc -->returns the creation date of the file. <!-- END REF -->|
|<!-- REF document.fullName -->[fullName]()<!-- END REF -->|<!-- REF document.fullNameDesc -->returns the full name of the file, including its extension (if any).<!-- END REF -->|
|<!-- REF document.hidden -->[hidden]() <!-- END REF -->|<!-- REF document.hiddenDesc -->  returns true if the file is set as "hidden" at the system level, and false otherwise. <!-- END REF -->|
|<!-- REF document.isAlias -->[isAlias]()<!-- END REF -->| <!-- REF document.isAliasDesc -->returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise.<!-- END REF -->|
|<!-- REF document.isFile -->[isFile]() <!-- END REF -->|<!-- REF document.isFileDesc -->always returns true for a file.<!-- END REF -->|
|<!-- REF document.isFolder -->[isFolder]()<!-- END REF -->|<!-- REF document.isFolderDesc -->returns always false for a file.<!-- END REF -->|
|<!-- REF document.isWritable -->[isWritable]()<!-- END REF -->|<!-- REF document.isWritableDesc -->returns true if the file exists on disk and is writable.<!-- END REF -->|
|<!-- REF document.modificationDate -->[modificationDate]()<!-- END REF -->|<!-- REF document.modificationDateDesc --> returns the date of the file's last modification.<!-- END REF -->|
|<!-- REF document.modificationTime -->[modificationTime]()<!-- END REF -->|<!-- REF document.modificationTimeDesc -->returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00).<!-- END REF -->|
|<!-- REF document.name -->[name]()<!-- END REF -->| <!-- REF document.nameDesc --> returns the name of the file, without extension (if any).<!-- END REF -->|
|<!-- REF document.original -->[orignial]() <!-- END REF -->|<!-- REF document.originalDesc -->returns the target element for an alias, a shortcut, or a symbolic link file.<!-- END REF -->|
|<!-- REF document.parent -->[parent]()<!-- END REF -->|<!-- REF document.parentDesc -->returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.<!-- END REF -->|
|<!-- REF document.path -->[path]()<!-- END REF -->|<!-- REF document.pathDesc -->returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.<!-- END REF -->|
|<!-- REF document.platformPath -->[platformPath]()<!-- END REF -->|  <!-- REF document.platformPathDesc -->returns the path of the file expressed with the current platform syntax. <!-- END REF -->|
<!-- END REF -->

## メソッド

















| name                          | description                                  |
| ----------------------------- | -------------------------------------------- |
|<!-- REF document.methods -->|                                              |
| [getContent()](#getcontent)   |<!-- INCLUDE Document.getContent.Summary -->|
|                               |<!--INCLUDE Document.getContent.Syntax -->|
| [copyTo()](#copyto)           |<!-- INCLUDE Document.copyTo.Summary -->|
|                               |<!--INCLUDE Document.copyTo.Syntax -->|
| [getText()](#gettext)         |<!-- INCLUDE Document.getText.Summary -->|
|                               |<!--INCLUDE Document.getText.Syntax -->|
| [getIcone()](#geticone)       |<!-- INCLUDE Document.getIcone.Summary -->|
|                               |<!--INCLUDE Document.getIcone.Syntax -->|
<!-- END REF -->
 
<!-- REF document.methods.Desc -->
## getContent()
<!-- REF Document.getContent.Syntax -->
**getContent** &rarr; Result<!-- END REF -->

<!-- REF Document.getContent.Parameters -->
| Parameter | 型    | 説明           |
| --------- | ---- | ------------ |
| Result    | BLOB | File content |
<!-- END REF -->

<!-- REF Document.getContent.Desc -->
#### 説明
The file.getContent( ) method returns <!-- REF Document.getContent.Summary -->a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

#### 例題
To save a document contents in a BLOB field:

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 <!-- END REF -->

## copyTo()

<!-- REF Document.copyTo.Syntax -->
**copyTo** (*destinationFolder*{;{*newName}*{;*overwrite*} ) &rarr; Result<!-- END REF -->

<!-- REF Document.copyTo.Parameters -->
| Parameter | 型    | 説明           |
| --------- | ---- | ------------ |
| Result    | BLOB | File content |
<!-- END REF -->

<!-- REF Document.copyTo.Desc -->
#### 説明
The file.getContent( ) method returns <!-- REF Document.copyTo.Summary -->a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

#### 例題
To save a document contents in a BLOB field:

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 <!-- END REF -->

## getText()
<!-- REF Document.getText.Syntax -->
**getText** &rarr; Result<!-- END REF -->

<!-- REF Document.getText.Parameters -->
| Parameter | 型    | 説明           |
| --------- | ---- | ------------ |
| Result    | BLOB | File content |
<!-- END REF -->

<!-- REF Document.getText.Desc -->
#### 説明
The file.getContent( ) method returns <!-- REF Document.getText.Summary -->a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

#### 例題
To save a document contents in a BLOB field:

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 <!-- END REF -->

## getIcone()
<!-- REF Document.getIcone.Syntax -->
**getIcone** &rarr; Result<!-- END REF -->

<!-- REF Document.getIcone.Parameters -->
| Parameter | 型    | 説明           |
| --------- | ---- | ------------ |
| Result    | BLOB | File content |
<!-- END REF -->

<!-- REF Document.getIcone.Desc -->
#### 説明
The file.getContent( ) method returns <!-- REF Document.getIcone.Summary -->a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

#### 例題
To save a document contents in a BLOB field:

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 <!-- END REF -->
 <!-- END REF -->