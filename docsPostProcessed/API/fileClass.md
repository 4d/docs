---
id: fileClass
title: File 
---


`File` objects are created with the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) function.

### Example

The following example creates a preferences file in the database folder:

```code4d
C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

## Summary

||
|---|
|[**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> object](#copyto-)|
|&nbsp;&nbsp;&nbsp;&nbsp;copies a `File` object (source file/folder) into the specified *destinationFolder* |
|[**.create( )** -> boolean ](#create-)| 
|&nbsp;&nbsp;&nbsp;&nbsp;creates a file on disk according to the properties of the `File` object|
|[**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> object](#createalias-) |
|&nbsp;&nbsp;&nbsp;&nbsp;creates an alias (macOS) or a shortcut (Windows)|
|[**.creationDate** -> creation date](#creationdate)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the creation date of the file|
|[**.creationTime** -> creation time](#creationtime)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the creation  time of the file|
|[**.delete( )**](#delete-) |
|&nbsp;&nbsp;&nbsp;&nbsp;deletes the file|
|[**.exists** -> boolean](#exists)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns true if the file exists on disk|
|[**.extension** -> file extension](#extension)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the extension of the file name|
|[**.fullName** -> full file name](#fullname)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the full name of the file|
|[**.getContent( )**  -> BLOB](#getcontent-)|
|returns a `BLOB` containing the entire content of a file|
|[**.getIcon**( { *size* } ) -> picture](#geticon-)|
|&nbsp;&nbsp;&nbsp;&nbsp;the icon of the file|
|[**.getText**( { *charSet* } { ; } { *breakMode*} ) -> text](#gettext-)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the contents of the file as text |
|[**.hidden** -> boolean](#hidden)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns true if the file is set as "hidden" at the system level|
|[**.isAlias** -> boolean](#isalias)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns true if the file is an alias, a shortcut, or a symbolic link|
|[**.isFile** -> boolean](#isfile)|
|&nbsp;&nbsp;&nbsp;&nbsp;always returns true for a file|
|[**.isFolder** -> boolean](#ifFolder)|
|&nbsp;&nbsp;&nbsp;&nbsp;always returns false for a file|
|[**.isWritable** -> boolean](#iswritable)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns true if the file exists on disk and is writable|
|[**.modificationDate** -> modification date](#modificationdate)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the date of the file's last modification|
|[**.modificationTime** -> modification date](#modificationtime)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the time of the file's last modification|
|[**.moveTo**( *destinationFolder* { ; *newName*} )  -> object](#moveto-)|
|&nbsp;&nbsp;&nbsp;&nbsp;moves or renames the `File` object into the specified *destinationFolder*|
|[**.name** -> file name](#name)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the file|
|[**.original** -> object](#original)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the target element for an alias, a shortcut, or a symbolic link file|
|[**.parent** -> object](#parent)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the parent folder object of the file|
|[**.path** -> text](#path)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the POSIX path of the file|
|[**.platformPath** -> text](#platformpath)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the path of the file expressed with the current platform syntax|
|[**.rename**( *newName* ) -> object](#rename-)|
|&nbsp;&nbsp;&nbsp;&nbsp;renames the file with the name you passed in *newName* and returns the renamed `File` object|
|[**.setContent** ( *content* ) ](#setcontent-)|
|&nbsp;&nbsp;&nbsp;&nbsp;rewrites the entire content of the file using the data stored in the *content* BLOB|
|[**.setText** ( *text* {; *charSet* { ; *breakMode* } } ) ](#settext-)|
|&nbsp;&nbsp;&nbsp;&nbsp;writes *text* as the new contents of the file|
|[**.size** -> file size](#size)|
|&nbsp;&nbsp;&nbsp;&nbsp;returns the size of the file expressed in bytes|


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

 

---

## .create( )

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


---


## .createAlias( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

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


---


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
The `.creationDate` property  returns the creation date of the file.

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
The `.creationTime` property  returns the creation  time of the file (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 



---


## .delete( )

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
|Result|boolean|<-|True if the file exists, false otherwise|


##### Description
The `.exists` property  returns true if the file exists on disk, and false otherwise.

This property is **read-only**. 



---


## .extension

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.extension** -> file extension
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|File name extension (if any)|


##### Description
The `.extension` property  returns the extension of the file name. An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

This property is **read-only**. 



---


## .fullName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.fullName** -> full file name
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Full file name, including extension (if any)|


##### Description
The `.fullName` property returns the full name of the file, including its extension (if any).

This property is **read-only**. 



---


## .getContent( )

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
The `.getIcon( )` function returns the icon of the file.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.  

**Returned value**

File icon [picture](../Concepts/picture.html).




---


## .getText( )

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
|Result|boolean|<-|True if the hidden system flag is set for the file, false otherwise|


##### Description
The `.hidden` property returns true if the file is set as "hidden" at the system level, and false otherwise. 

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
|Result|boolean|<-|True if the file is an alias, false otherwise|


##### Description
The `.isAlias` property returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise. 

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
|Result|boolean|<-|Always true|


##### Description
The `.isFile` property always returns true for a file. 

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


##### Description
The `.isFolder` property always returns false for a file. 

This property is **read-only**. 



---


## .isWritable

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isWritable** -> boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the file exists on disk and is writable, false otherwise|


##### Description
The `.isWritable` property returns true if the file exists on disk and is writable. 

>The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. 

This property is **read-only**. 

**Example**  

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```



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
The `.modificationDate` property returns the date of the file's last modification. 

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
The `.modificationTime` property returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). 

This property is **read-only**. 



---


## .moveTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


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
|Result|text|<-|File name without extension (if any)|


##### Description
The `.name` property returns the name of the file, without extension (if any). 

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
|Result|object|<-|Target of the alias or symbolic link, otherwise same file object|


##### Description
The `.original` property returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:

*	a file object 
*	a folder object 

For non-alias files, the property returns the same file object as the file.

This property is **read-only**. 



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
|Result|object|<-|Parent folder object for the file|


##### Description
The `.parent` property returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

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
The `.path` property returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

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
The `.platformPath` property returns the path of the file expressed with the current platform syntax.

This property is **read-only**. 



---


 
## .rename( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


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


---


 
## .setContent( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


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


---


 
## .setText( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


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


---


## .size

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.size** -> file size
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|number|<-|Size of the file in bytes|


##### Description
The `.size` property returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0.

This property is **read-only**. 





