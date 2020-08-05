---
id: folder
title: Folder Methods
---


## Methods


<!-- REF folder.create().Desc -->
### .create( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #folder.create().Syntax -->
**.create( )** -> boolean<!-- END REF -->

<!--REF #folder.create().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if the folder was created successfully, false otherwise|
<!-- END REF -->



#### Description

The `.create( )` method <!-- REF #folder.create().Summary -->creates a folder on disk according to the properties of the `Folder` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [<!-- INCLUDE document.platformPath -->](#platformpath) or [<!-- INCLUDE document.path -->](#path) properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

*	**True** if the folder is created successfully;
*	**False** if a folder with the same name already exists or if an error occured.

##### Example 1

Create an empty folder in the database folder:

```4d
C_OBJECT($prefs)
C_BOOLEAN($created)
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

##### Example 2

Creation of the "/Archives2019/January/" folder in the database folder:

```4d
$newFolder:=Folder("/PACKAGE/Archives2019/January")
If($newFolder.create())
ALERT("The "+$newFolder.name+" folder was created.")
Else
ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
```

<!-- END REF -->





<!-- REF folder.createAlias().Desc -->
### .createAlias( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #folder.createAlias().Syntax -->
**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> Result<!-- END REF -->

<!--REF #folder.createAlias().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|Object|->|Destination folder for the alias or shortcut|
|aliasName|Text|->|Name of the alias or shortcut|
|aliasType|Longint|->|Type of the alias link|
|Result|Object|<-|>Alias or shortcut folder reference|
<!-- END REF -->


##### Description
The `.createAlias( )` method <!-- REF #folder.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows) to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object<!-- END REF -->.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the method creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`fk alias link`|0|Alias link (macOS only)(default)|
|`fk symbolic link`|1|Symbolic link (macOS only)|

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Returned object**

A `Folder` object with the `isAlias` property set to true.

##### Example

You want to create an alias to an archive folder in your database folder:

```4d
$myFolder:=Folder("C:\\Documents\\Archives\\2019\\January";fk platform path)
$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")
```
<!-- END REF -->



<!-- REF folder.delete().Desc -->
### .delete( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #folder.delete().Syntax -->
**.delete( )**<!-- END REF -->


<!-- REF #folder.delete().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|option |Longint|->|Folder deletion option|
<!-- END REF -->


##### Description
The `.delete( )` method <!-- REF #folder.delete().Summary -->deletes the folder<!-- END REF -->.

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

<!-- END REF -->
 
 
<!-- REF folder.file().Desc --> 
### .file( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #folder.file().Syntax -->
**.file**( *path* )  -> Result<!-- END REF -->










 
<!-- REF folder.moveTo().Desc -->
### .moveTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #folder.moveTo().Syntax -->
**.moveTo**( *destinationFolder* { ; *newName*} )  -> Result<!-- END REF -->

<!--REF #folder.moveTo().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|Object|->|Destination folder|
|newName|Text|->|Full name for the moved file|
|Result|Object|<-|Moved file|
<!-- END REF -->


##### Description
The `.moveTo( )` method <!-- REF #folder.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

**Returned object**

The moved `File` object.

##### Example


```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myfolder.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```
<!-- END REF -->

 
<!-- REF folder.rename().Desc --> 
### .rename( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #folder.rename().Syntax -->
**.rename**( *newName* ) -> Result<!-- END REF -->

<!--REF #folder.rename().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newName|Text|->|New full name for the file|
|Result|Object|<-|Renamed file|
<!-- END REF -->



##### Description

The `.rename( )` method <!-- REF #folder.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the method modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.

**Returned object**

The renamed `File` object.

##### Example
You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->








 
 

 
 
 






