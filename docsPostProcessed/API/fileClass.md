---
id: fileClass
title: File 
---

## Overview

The `File` class provides properties and functions that allow you to create and manipulate `File` objects.

### Files

`File` objects are created with the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) function.

### ZIP Archives

The `File` class also allows you to create and manipulate 4D ZIP archives (one or more `File`s compressed to be smaller than their original size). These archives are created with a ".zip" extension and can be used to:

*	Save disk space
*	Store data on a removable media device
*	Easily transfer files/folders via mediums which may have size limitations (e.g., email or inter/intranet systems)

4D ZIP file archives are created and handled with the following 4D commands:

*	[ZIP Create archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Create-archive.301-4982187.en.html)
*	[ZIP Read archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Read-archive.301-4982192.en.html)

**Example**

The following example creates a preferences file in the database folder:

```code4d
C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```



## Properties

A `File` object contains the following properties and functions:

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
|isWritable|Boolean |<ul><li>**File**: Returns **true** if the file exists on disk and is writable. **Note**: The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. This property is **read-only**.</li><li>**ZIP archive**: Always **false**.</li></ul>| 
|modificationDate| Date| Returns the date of the file's last modification. This property is **read-only**.| 
|modificationTime|Time |Returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.|
|name|Text | Returns the name of the file, without extension (if any). This property is **read-only**.|
|original |Object |Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.|
|parent|Object |Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.|
|path|Text |<ul><li>**File**: Returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.</li><li>**ZIP archive**: Returns a path relative to the archive</li></ul>|
|platformPath|Text  |Returns the path of the file expressed with the current platform syntax. This property is **read-only**.|
|size|Number  |Returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0. This property is **read-only**.|



## Functions 

|Summary|
|---|
|[**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> object](#copyto-)|
|copies a `File` object (source file/folder) into the specified *destinationFolder* |
|[**.create( )** -> boolean ](#create-)| 
|creates a file on disk according to the properties of the `File` object<p>**Not available for ZIP archives**|
|[**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> object](#createalias-) |
|creates an alias (macOS) or a shortcut (Windows) to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object<p>**Not available for ZIP archives** |
|[**.delete( )**](#delete-) |
|deletes the file<p>**Not available for ZIP archives** |
|[**.getContent( )**  -> BLOB](#getcontent-)|
|returns a `BLOB` containing the entire content of a file|
|[**.getIcon**( { *size* } ) -> picture](#geticon-)|
|the icon of the file|
|[**.getText**( { *charSet* } { ; } { *breakMode*} ) -> text](#gettext-)|
|returns the contents of the file as text |
|[**.moveTo**( *destinationFolder* { ; *newName*} )  -> object](#moveto-)|
|moves or renames the `File` object into the specified *destinationFolder*<p>**Not available for ZIP archives**|
|[**.rename**( *newName* ) -> object](#rename-)|
|renames the file with the name you passed in *newName* and returns the renamed `File` object<p>**Not available for ZIP archives**|
|[**.setContent** ( *content* ) ](#setcontent-)|
|rewrites the entire content of the file using the data stored in the *content* BLOB<p>**Not available for ZIP archives**|
|[**.setText** ( *text* {; *charSet* { ; *breakMode* } } ) ](#settext-)|
|writes *text* as the new contents of the file<p>**Not available for ZIP archives**|






### .copyTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder | object |->|Destination folder|
|newName|text|->|Name for the copy|
|overwrite|longint|->|`fk overwrite` to replace existing elements|
|Result|object|<-|Copied file or folder|


##### Description
The `.copyTo( )` function  copies a `File` object (source file/folder) into the specified *destinationFolder* .

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`fk overwrite`|4|Overwrite existing elements, if any|


**Returned value**

The copied `File` object.

##### Example

You want to copy a picture *file* from the user's document folder to the database folder:

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

**Not available for ZIP archives**

**.create( )** -> boolean 
|Parameter|Type||Description|
|---|---|---|---|
|Result|boolean|<-|True if the file was created successfully, false otherwise|

#### Description

The `.create( )` function creates a file on disk according to the properties of the `File` object.

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

**Not available for ZIP archives**

**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> object
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|object|->|Destination folder for the alias or shortcut|
|aliasName|text|->|Name of the alias or shortcut|
|aliasType|longint|->|Type of the alias link|
|Result|object|<-|>Alias or shortcut file reference|


##### Description
The `.createAlias( )` function creates an alias (macOS) or a shortcut (Windows) to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

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
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```


### .delete( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**Not available for ZIP archives**
**.delete( )**

|Parameter|Type||Description|
|---|----|---|---|
| |  ||Does not require any parameters|


##### Description
The `.delete( )` function deletes the file.

If the file is currently open, an error is generated.

If the file does not exist on disk, the function does nothing (no error is generated).

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


### .getContent( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getContent( )**  -> BLOB
|Parameter|Type||Description|
|---|----|---|---|
|Result | BLOB |<-|File content|


##### Description
The `.getContent( )` function  returns a `BLOB` containing the entire content of a file. For information on BLOBs, please refer to the [BLOB](../Concepts/blob.html) section.

**Returned value**

A `BLOB`.

##### Example

To save a document's contents in a `BLOB` field:

```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
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
The `.getIcon( )` function returns the icon of the file.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.  

**Returned value**

File icon [picture](../Concepts/picture.html).




### .getText( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getText**( { *charSet* } { ; } { *breakMode*} ) -> text
|Parameter|Type||Description|
|---|---|---|---|
|charSet |text, longint |-> |Name or number of character set|
|breakMode|longint |-> |Processing mode for line breaks|
|Result |text  |<- |Text from the document|


##### Description
The `.getText( )` function returns the contents of the file as text .

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
```

When you execute this code:
 

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

**Not available for ZIP archives**

**.moveTo**( *destinationFolder* { ; *newName*} )  -> object
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|object|->|Destination folder|
|newName|text|->|Full name for the moved file|
|Result|object|<-|Moved file|


##### Description
The `.moveTo( )` function moves or renames the `File` object into the specified *destinationFolder*.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.


**Returned object**

The moved `File` object.

##### Example


```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```


 
### .rename( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**Not available for ZIP archives**

**.rename**( *newName* ) -> object
|Parameter|Type||Description|
|---|---|---|---|
|newName|text|->|New full name for the file|
|Result|object|<-|Renamed file|

##### Description

The `.rename( )` function renames the file with the name you passed in *newName* and returns the renamed `File` object.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.


**Returned object**

The renamed `File` object.

##### Example
You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```


 
### .setContent( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**Not available for ZIP archives**

**.setContent** ( *content* ) 
|Parameter|Type||Description|
|---|---|---|---|
|content|BLOB|->|New contents for the file|


##### Description
The `.setContent( )` function rewrites the entire content of the file using the data stored in the *content* BLOB. For information on BLOBs, please refer to the [BLOB](../Concepts/blob.html) section.


##### Example

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```


 
### .setText( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**Not available for ZIP archives**

**.setText** ( *text* {; *charSet* { ; *breakMode* } } ) 
|Parameter|Type||Description|
|---------|----|---|--------|
|text|text|->|Text to store in the file|
|charSet|text, longint|->|Name or number of character set|
|breakMode|longint|->|Processing mode for line breaks|
##### Description

The `.setText( )` function writes *text* as the new contents of the file.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

In *charSet*, pass the character set to be used for writing the contents. You can pass a string containing the standard character set name (for example “ISO-8859-1” or “UTF-8”) or its MIBEnum ID (longint). For more information about the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.  If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file. If you do not specify a character set, by default 4D uses the "UTF-8" character set and a BOM. 

In *breakMode*, you can pass a longint indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme are available:

|Constant|Type|Value|Comment|
|--------|----|-----|-------|
|`Document unchanged`|Longint|0|No processing|
|`Document with native format`|Longint|1|(Default) Line breaks are converted to the native format of the operating system: CR (carriage return) in macOS, CRLF (carriage return + line feed) in Windows|
|`Document with CRLF`|Longint|2|Line breaks are converted to Windows format: CRLF (carriage return + line feed)|
|`Document with CR`|Longint|3|Line breaks are converted to OS X format: CR (carriage return)|
|`Document with LF`|Longint|4|Line breaks are converted to Unix format: LF (line feed)|

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).



##### Example

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```




