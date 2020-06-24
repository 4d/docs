---
id: document
title: Document
---

## Description

blabla

## Properties

<!-- REF document.properties -->

































| name                                                                                | description                                                                                                                                                                          |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [creationDate]()                                                                    | <!-- REF document.creationDateDesc --> returns the creation date of the file. 

<!-- END REF -->                                                                                     |
| [creationTime]()                                                                    | <!-- REF document.creationTimeDesc --> returns the creation time of the file (expressed as a number of seconds beginning at 00:00). 

<!-- END REF -->                               |
| [exists]()                                                                          | <!-- REF document.existsDesc --> returns true if the file exists on disk, and false otherwise. 

<!-- END REF -->                                                                    |
| [extension]()                                                                       | <!-- REF document.extensionDesc -->returns the creation date of the file. 

<!-- END REF -->                                                                                         |
| [fullName]()                                                                        | <!-- REF document.fullNameDesc --> returns the full name of the file, including its extension (if any).

<!-- END REF -->                                                            |
| [hidden]()                                                                          | <!-- REF document.hiddenDesc --> returns true if the file is set as "hidden" at the system level, and false otherwise. 

<!-- END REF -->                                            |
| [isAlias]()                                                                         | <!-- REF document.isAliasDesc -->returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise.

<!-- END REF -->                                        |
| [isFile]()                                                                          | <!-- REF document.isFileDesc -->always returns true for a file.

<!-- END REF -->                                                                                                    |
| [isFolder]()                                                                        | <!-- REF document.isFolderDesc -->returns always false for a file.

<!-- END REF -->                                                                                                 |
| [isWritable]()                                                                      | <!-- REF document.isWritableDesc -->returns true if the file exists on disk and is writable.

<!-- END REF -->                                                                       |
| [modificationDate]()                                                                | <!-- REF document.modificationDateDesc --> returns the date of the file's last modification.

<!-- END REF -->                                                                       |
| [modificationTime]()                                                                | <!-- REF document.modificationTimeDesc -->returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00).

<!-- END REF -->                  |
| [name]()                                                                            | <!-- REF document.nameDesc --> returns the name of the file, without extension (if any). 

<!-- END REF -->                                                                          |
| [orignial]()                                                                        | <!-- REF document.originalDesc --> returns the target element for an alias, a shortcut, or a symbolic link file. 

<!-- END REF -->                                                  |
| [parent]()                                                                          | <!-- REF document.parentDesc --> returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

<!-- END REF --> |
| [path]()                                                                            | <!-- REF document.pathDesc --> returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

<!-- END REF -->               |
| [platformPath](https://doc.4d.com/4Dv18/4D/18/fileplatformPath.303-4506073.en.html) | <!-- REF document.platformPathDesc -->returns the path of the file expressed with the current platform syntax. 

<!-- END REF -->                                                    |


<!-- END REF -->

## Methods

















| name                          | description                                  |
| ----------------------------- | -------------------------------------------- |
| <!-- REF document.methods --> |                                              |
| [getContent()](#getcontent)   | <!-- INCLUDE Document.getContent.Summary --> |
|                               | <!--INCLUDE Document.getContent.Syntax -->   |
| [copyTo()](#copyto)           | <!-- INCLUDE Document.copyTo.Summary -->     |
|                               | <!--INCLUDE Document.copyTo.Syntax -->       |
| [getText()](#gettext)         | <!-- INCLUDE Document.getText.Summary -->    |
|                               | <!--INCLUDE Document.getText.Syntax -->      |
| [getIcone()](#geticone)       | <!-- INCLUDE Document.getIcone.Summary -->   |
|                               | <!--INCLUDE Document.getIcone.Syntax -->     |


<!-- END REF -->

<!-- REF document.methods.Desc -->

## getContent()

<!-- REF Document.getContent.Syntax -->

**getContent** &rarr; Result<!-- END REF -->

<!-- REF Document.getContent.Parameters -->

| Parameter | Type | Description  |
| --------- | ---- | ------------ |
| Result    | BLOB | File content |


<!-- END REF -->

<!-- REF Document.getContent.Desc -->

#### Description

The file.getContent( ) method returns <!-- REF Document.getContent.Summary -->a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.

<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

#### Example

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

| Parameter | Type | Description  |
| --------- | ---- | ------------ |
| Result    | BLOB | File content |


<!-- END REF -->

<!-- REF Document.copyTo.Desc -->

#### Description

The file.getContent( ) method returns <!-- REF Document.copyTo.Summary -->a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.

<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

#### Example

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

| Parameter | Type | Description  |
| --------- | ---- | ------------ |
| Result    | BLOB | File content |


<!-- END REF -->

<!-- REF Document.getText.Desc -->

#### Description

The file.getContent( ) method returns <!-- REF Document.getText.Summary -->a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.

<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

#### Example

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

| Parameter | Type | Description  |
| --------- | ---- | ------------ |
| Result    | BLOB | File content |


<!-- END REF -->

<!-- REF Document.getIcone.Desc -->

#### Description

The file.getContent( ) method returns <!-- REF Document.getIcone.Summary -->a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.

<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

#### Example

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