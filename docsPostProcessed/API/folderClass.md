---
id: folderClass
title: Folder Class
---

## Overview

The `Folder` class provides properties and methods that allow you to create and manipulate `Folder` objects.

`Folder` objects are created with the [`Folder`](https://doc.4d.com/4Dv18R4/4D/18-R4/Folder.301-4982248.en.html) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) method.


## Properties

A `Folder` object contains the following properties and methods:

|Property|Type|Description|
|----|----|-----------|
|creationDate|Date|Returns the creation date of the file. This property is **read-only**.|
|creationTime| Time|Returns the creation time of the file (expressed as a number of seconds beginning at 00:00). This property is **read-only**.|
|exists|Boolean | Returns **true** if the file exists on disk, and **false** otherwise. This property is **read-only**.|
|extension|Text |Returns the extension of the file name. An extension always starts with ".". The property returns an empty string if the file name does not have an extension. This property is **read-only**.| 
|fullName| Text|Returns the full name of the file, including its extension (if any). This property is **read-only**.|
|hidden |Boolean |  Returns **true** if the file is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.|
|isAlias|Boolean |Returns **true** if the file is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.|
|isFile |Boolean |Always returns **true** for a file. This property is **read-only**.|
|isFolder|Boolean |Always returns **false** for a file. This property is **read-only**.| 
|isWritable|Boolean |Returns **true** if the file exists on disk and is writable. **Note**: The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. This property is **read-only**.| 
|modificationDate| Date| Returns the date of the file's last modification. This property is **read-only**.| 
|modificationTime|Time |Returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.|
|name|Text | Returns the name of the file, without extension (if any). This property is **read-only**.|
|original |Object |Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.|
|parent|Object |Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.|
|path|Text |Returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.|
|platformPath|Text  |Returns the path of the file expressed with the current platform syntax. This property is **read-only**.|
|size|Number  |Returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0. This property is **read-only**.|



## Methods 

|Summary|
|---|
|[**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> Result](#copyto-)|
|copies a `File` or `Foldder` object (source file/folder) into the specified *destinationFolder* |
|[**.create( )** -> boolean](#create-)| 
|creates a file on disk according to the properties of the file object|
|[**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> Result](#createalias-) |
|creates an alias (macOS) or a shortcut (Windows) to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object |
|[**.delete( )**](#delete-) |
|deletes the file |
|[**.getContent( )**  -> Result](#getcontent-)|
|returns a `BLOB` containing the entire content of a file|
|[**.getIcon**( { *size* } ) -> Result](#geticon-)|
|the icon of the file or folder|
|[**.getText**( { *charSet* } { ; } { *breakMode*} ) -> Result](#gettext-)|
|returns the contents of the file as text |
|[**.moveTo**( *destinationFolder* { ; *newName*} )  -> Result](#moveto-)|
|moves or renames the `File` object into the specified *destinationFolder*|
|[**.rename**( *newName* ) -> Result](#rename-)|
|renames the file with the name you passed in *newName* and returns the renamed `File` object|




#### Example

The following example creates a "John Smith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\"; fk platform path)
```




### .copyTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> Result
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder | Object |->|Destination folder|
|newName|Text|->|Name for the copy|
|overwrite|Longint|->|`fk overwrite` to replace existing elements|
|Result|Object|<-|Copied file|


##### Description
The `.copyTo( )` method  copies a `File` or `Foldder` object (source file/folder) into the specified *destinationFolder* .

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file or folder is copied with the name of the original file or folder. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file or folder with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`fk overwrite`|4|Overwrite existing elements, if any|


**Returned value**

The copied `File` or `Folder` object.

##### Example

You want to copy a picture file from the user's document folder to the database folder:

```4d
 C_OBJECT($source;$copy)
 $source:=Folder(fk documents folder).file("Pictures/photo.png")
 $copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

 
 

### .create( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.create( )** -> boolean
|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if the file was created successfully, false otherwise|



#### Description

The `.create( )` method creates a file on disk according to the properties of the file object.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the file already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

*	**True** if the file is created successfully;
*	**False** if a file with the same name already exists or if an error occured.

##### Example

Creation of a preferences file in the database folder:

```4d
 C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```


### .createAlias( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> Result
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|Object|->|Destination folder for the alias or shortcut|
|aliasName|Text|->|Name of the alias or shortcut|
|aliasType|Longint|->|Type of the alias link|
|Result|Object|<-|>Alias or shortcut file reference|


##### Description
The `.createAlias( )` method creates an alias (macOS) or a shortcut (Windows) to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the method creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`fk alias link`|0|Alias link (macOS only)(default)|
|`fk symbolic link`|1|Symbolic link (macOS only)|

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Returned object**

A `File` object with the `isAlias` property set to true.

##### Example

You want to create an alias to a file in your database folder:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myfolder.createAlias(File("/PACKAGE");"ReadMe")
```


### .delete( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.delete( )**

|Parameter|Type||Description|
|---|----|---|---|
| |  ||Does not require any parameters|


##### Description
The `.delete( )` method deletes the file.

If the file is currently open, an error is generated.

If the file does not exist on disk, the method does nothing (no error is generated).

>**WARNING**: `.delete( )` can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. `.delete( )` should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

##### Example

You want to delete a specific file in the database folder:

```4d
  $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("User preference file deleted.")
 End if
``` 


### .getIcon( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getIcon**( { *size* } ) -> Result
|Parameter|Type||Description|
|---|----|---|---|
|size|Longint|->|Side length for the returned picture (pixels)|
|Result|Picture|<-|Icon|


##### Description
The `.getIcon( )` method returns the icon of the file or folder.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file or folder does not exist on disk, a default blank icon is returned.  

**Returned value**

File or folder icon [picture](../Concepts/picture.html).




### .getText( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getText**( { *charSet* } { ; } { *breakMode*} ) -> Result
|Parameter|Type||Description|
|---|---|---|---|
|charSet |Text, Longint |-> |Name or number of character set|
|breakMode|Longint |-> |Processing mode for line breaks|
|Result |Text  |<- |Text from the document|


##### Description
The `.getText( )` method returns the contents of the file as text .

In *charSet*, pass the character set to be used for reading the contents. You can pass a string containing the standard set name (for example “ISO-8859-1” or “UTF-8”) or its MIBEnum ID (longint). For more information about the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command. 

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in charSet (this parameter is then ignored).  

If the document does not contain a BOM and if the *charSet* parameter is omitted, by default 4D uses the “UTF-8” character sets.

In *breakMode*, you can pass a longint indicating the processing to apply to end-of-line characters in the document. The following constants of the "System Documents" theme are available:

|Constant |Type| Value| Comment|
|---|---|---|---|
|`Document unchanged`|Logint|0|No processing|
|`Document with native format`|Logint|1|(Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows|
|`Document with CRLF`|Logint|2|Line breaks are converted to Windows format: CRLF (carriage return + line feed)|
|`Document with CR`|Logint|3|Line breaks are converted to OS X format: CR (carriage return)|
|`Document with LF`|Logint|4|Line breaks are converted to Unix format: LF (line feed)|

By default, when you omit the breakMode parameter, line breaks are processed in native mode (1).

**Returned value**

Text of the file.

##### Example

Given the following text document (fields are separated by tabs):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
When you execute this code:
 ```

 ```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 by default
 $txt:=$myFile.getText()
... you get:

  // $Text = "id name price vat\r\n3 thé 1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"
  // \t = tab
  // \r = CR
```
 



### .moveTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.moveTo**( *destinationFolder* { ; *newName*} )  -> Result
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|Object|->|Destination folder|
|newName|Text|->|Full name for the moved file|
|Result|Object|<-|Moved file|


##### Description
The `.moveTo( )` method moves or renames the `File` object into the specified *destinationFolder*.

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


 
### .rename( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.rename**( *newName* ) -> Result
|Parameter|Type||Description|
|---|---|---|---|
|newName|Text|->|New full name for the file|
|Result|Object|<-|Renamed file|



##### Description

The `.rename( )` method renames the file with the name you passed in *newName* and returns the renamed `File` object.

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






