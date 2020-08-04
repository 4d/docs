---
id: fileMethodsandPropertiesandProperties
title: File and Folder Methods
---


## Methods

|Name|Description|
|----|----|---|
|<!-- REF #Document.copyTo -->[copyTo()](#copyto)<!-- END REF -->|<!-- INCLUDE #Document.copyTo().Summary -->|
|<!-- REF #fileMethodsandProperties.create -->[create()](#create)<!-- END REF -->|<!-- INCLUDE #fileMethodsandProperties.create().Summary --> |
|<!-- REF #fileMethodsandProperties.createAlias -->[createAlias()](#createalias)<!-- END REF -->|<!-- INCLUDE #fileMethodsandProperties.createAlias().Summary --> |
|<!-- REF #fileMethodsandProperties.delete -->[delete()](#delete)<!-- END REF -->|<!-- INCLUDE #fileMethodsandProperties.delete().Summary --> |
|<!-- REF #Document.getContent -->[getContent()](#getcontent)<!-- END REF -->|<!-- INCLUDE #Document.getContent().Summary -->|
|<!-- REF #Document.getIcon -->[getIcon()](#geticon)<!-- END REF -->|<!-- INCLUDE #Document.getIcon().Summary -->|
|<!-- REF #Document.getText -->[getText()](#gettext)<!-- END REF -->|<!-- INCLUDE #Document.getText().Summary -->|
|<!-- REF #fileMethodsandProperties.moveTo -->[moveTo()](#moveto)<!-- END REF -->|<!-- INCLUDE #fileMethodsandProperties.moveTo().Summary -->|
|<!-- REF #fileMethodsandProperties.rename -->[rename()](#rename)<!-- END REF -->|<!-- INCLUDE #fileMethodsandProperties.rename().Summary -->|
|<!-- REF #fileMethodsandProperties.setContent -->[setContent()](#setcontent)<!-- END REF -->|<!-- INCLUDE #fileMethodsandProperties.setContent().Summary -->|
|<!-- REF #fileMethodsandProperties.setText -->[setText()](#settext)<!-- END REF -->|<!-- INCLUDE #fileMethodsandProperties.setText().Summary -->|




<!-- REF #fileMethodsandProperties.create().Info -->
### .create( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #fileMethodsandProperties.create().Syntax -->
**.create( )** -> boolean<!-- END REF -->

<!--REF #fileMethodsandProperties.create().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if the file was created successfully, false otherwise|
<!-- END REF -->


<!-- REF #fileMethodsandProperties.create().Desc -->
#### Description

The <!-- REF #fileMethodsandProperties.create().method -->`.create( )`<!-- END REF --> method <!-- REF #fileMethodsandProperties.create().Summary -->creates a file on disk according to the properties of the file object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [<!-- INCLUDE #fileMethodsandProperties.platformPath -->](#platformpath) or [<!-- INCLUDE #fileMethodsandProperties.path -->](#path) properties. If the file already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

*	**True** if the file is created successfully;
*	**False** if a file with the same name already exists or if an error occured.

##### Example

Creation of a preferences file in the database folder:

```4d
 C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

<!-- END REF -->
<!-- END REF -->


<!-- REF #fileMethodsandProperties.createAlias().Info -->
### .createAlias( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #fileMethodsandProperties.createAlias().Syntax -->
**.createAlias**( *destinationFolder* ; *aliasName* { ; *aliasType* } ) -> Result<!-- END REF -->

<!--REF #fileMethodsandProperties.createAlias().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|Object|->|Destination folder for the alias or shortcut|
|aliasName|Text|->|Name of the alias or shortcut|
|aliasType|Longint|->|Type of the alias link|
|Result|Object|<-|>Alias or shortcut file reference|
<!-- END REF -->

<!-- REF #fileMethodsandProperties.createAlias().Desc -->
##### Description
The <!-- REF #fileMethodsandProperties.createAlias().mehtod -->`.createAlias( )`<!-- END REF --> method <!-- REF #fileMethodsandProperties.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows) to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object<!-- END REF -->.

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
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```

<!-- END REF -->
<!-- END REF -->



<!-- REF #fileMethodsandProperties.delete().Info -->
### .delete( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #fileMethodsandProperties.delete().Syntax -->
**.delete( )**<!-- END REF -->


<!-- REF #Document.delete().Params -->
|Parameter|Type||Description|
|---|----|---|---|
| |  ||Does not require any parameters|
<!-- END REF -->

<!-- REF #fileMethodsandProperties.delete().Desc -->
##### Description
The <!-- REF #fileMethodsandProperties.delete().mehtod -->`.delete( )`<!-- END REF --> method <!-- REF #fileMethodsandProperties.delete().Summary -->deletes the file<!-- END REF -->.

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

 <!-- END REF -->
 <!-- END REF -->
 
 
 
<!-- REF #fileMethodsandProperties.moveTo().Info -->
### .moveTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #fileMethodsandProperties.moveTo().Syntax -->
**.moveTo**( *destinationFolder* { ; *newName*} )  -> Result<!-- END REF -->

<!--REF #fileMethodsandProperties.moveTo().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|Object|->|Destination folder|
|newName|Text|->|Full name for the moved file|
|Result|Object|<-|Moved file|
<!-- END REF -->

<!-- REF #fileMethodsandProperties.moveTo().Desc -->
##### Description
The <!-- REF #fileMethodsandProperties.moveTo().mehtod -->`.moveTo( )`<!-- END REF --> method <!-- REF #fileMethodsandProperties.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

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

<!-- END REF -->
<!-- END REF -->
 
 
 
 
<!-- REF #fileMethodsandProperties.rename().Info --> 
### .rename( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #fileMethodsandProperties.rename().Syntax -->
**.rename**( *newName* ) -> Result<!-- END REF -->

<!--REF #fileMethodsandProperties.rename().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newName|Text|->|New full name for the file|
|Result|Object|<-|Renamed file|
<!-- END REF -->

<!-- REF #fileMethodsandProperties.rename().Desc -->

##### Description

The <!-- REF #fileMethodsandProperties.rename().mehtod -->`.rename( )`<!-- END REF --> method <!-- REF #fileMethodsandProperties.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

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
<!-- END REF -->


<!-- REF #fileMethodsandProperties.setContent().Info --> 
### .setContent( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #fileMethodsandProperties.setContent().Syntax -->
**.setContent** ( *content* ) <!-- END REF -->

<!--REF #fileMethodsandProperties.setContent().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|content|BLOB|->|New contents for the file|
<!-- END REF -->

<!-- REF #fileMethodsandProperties.setContent().Desc -->
##### Description
The <!-- REF #fileMethodsandProperties.setContent().mehtod -->`.setContent( )`<!-- END REF --> method <!-- REF #fileMethodsandProperties.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](../Concepts/blob.html) section.


##### Example

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```

<!-- END REF -->
<!-- END REF -->



<!-- REF #fileMethodsandProperties.setText().Info --> 
### .setText( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #fileMethodsandProperties.setText().Syntax -->
**.setText** ( *text* {; *charSet* { ; *breakMode* } } ) <!-- END REF -->

<!--REF #fileMethodsandProperties.setText().Params -->
|Parameter|Type||Description|
|---------|----|---|--------|
|text|Text|->|Text to store in the file|
|charSet|Text, Longint|->|Name or number of character set|
|breakMode|Longint|->|Processing mode for line breaks|<!-- END REF -->

<!-- REF #fileMethodsandProperties.setText().Desc -->
##### Description
The <!-- REF #fileMethodsandProperties.setText().mehtod -->`.setText( )`<!-- END REF --> method <!-- REF #fileMethodsandProperties.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the method. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

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
<!-- END REF -->
<!-- END REF -->

## Properties

<!-- REF #fileMethodsandProperties.properties -->
|Property|Type|Description|
|----|----|-----------|
|<!-- REF #fileMethodsandProperties.creationDate -->creationDate<!-- END REF -->|<!-- REF #fileMethodsandProperties.creationDatetype -->Date<!-- END REF --> |<!-- REF #fileMethodsandProperties.creationDate.Summary -->Returns the creation date of the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.creationTime -->creationTime<!-- END REF -->| <!-- REF #fileMethodsandProperties.creationTimetype -->Time<!-- END REF -->|<!-- REF #fileMethodsandProperties.creationTime.Summary -->Returns the creation time of the file (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.exists -->exists<!-- END REF -->|<!-- REF #fileMethodsandProperties.existstype -->Boolean<!-- END REF -->|<!-- REF #fileMethodsandProperties.exists.Summary --> Returns **true** if the file exists on disk, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.extension -->extension<!-- END REF -->|<!-- REF #fileMethodsandProperties.extensiontype -->Text<!-- END REF --> |<!-- REF #fileMethodsandProperties.extension.Summary -->Returns the extension of the file name. An extension always starts with ".". The property returns an empty string if the file name does not have an extension. This property is **read-only**.<!-- END REF -->| 
|<!-- REF #fileMethodsandProperties.fullName -->fullName<!-- END REF -->|<!-- REF #fileMethodsandProperties.fullNametype -->Text<!-- END REF -->|<!-- REF #fileMethodsandProperties.fullName.Summary -->Returns the full name of the file, including its extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.hidden -->hidden <!-- END REF -->|<!-- REF #fileMethodsandProperties.hiddentype -->Boolean<!-- END REF --> |<!-- REF #fileMethodsandProperties.hidden.Summary -->  Returns **true** if the file is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.isAlias -->isAlias<!-- END REF -->|<!-- REF #fileMethodsandProperties.isAliastype -->Boolean<!-- END REF --> |<!-- REF #fileMethodsandProperties.isAlias.Summary -->Returns **true** if the file is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.isFile -->isFile <!-- END REF -->|<!-- REF #fileMethodsandProperties.isFiletype -->Boolean<!-- END REF --> |<!-- REF #fileMethodsandProperties.isFile.Summary -->Always returns **true** for a file. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.isFolder -->isFolder<!-- END REF -->|<!-- REF #fileMethodsandProperties.isFoldertype -->Boolean<!-- END REF --> |<!-- REF #fileMethodsandProperties.isFolder.Summary -->Always returns **false** for a file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF #fileMethodsandProperties.isWritable -->isWritable<!-- END REF -->|<!-- REF #fileMethodsandProperties.isWritabletype -->Boolean<!-- END REF --> |<!-- REF #fileMethodsandProperties.isWritable.Summary -->Returns **true** if the file exists on disk and is writable. **Note**: The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF #fileMethodsandProperties.modificationDate -->modificationDate<!-- END REF -->|<!-- REF #fileMethodsandProperties.modificationDatetype -->Date<!-- END REF -->|<!-- REF #fileMethodsandProperties.modificationDate.Summary --> Returns the date of the file's last modification. This property is **read-only**.<!-- END REF -->| 
|<!-- REF #fileMethodsandProperties.modificationTime -->modificationTime<!-- END REF -->|<!-- REF #fileMethodsandProperties.modificationTimetype -->Time<!-- END REF --> |<!-- REF #fileMethodsandProperties.modificationTime.Summary -->Returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.name -->name<!-- END REF -->|<!-- REF #fileMethodsandProperties.nametype -->Text<!-- END REF --> |<!-- REF #fileMethodsandProperties.name.Summary --> Returns the name of the file, without extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.original -->orignial <!-- END REF -->|<!-- REF #fileMethodsandProperties.originaltype -->Object<!-- END REF --> |<!-- REF #fileMethodsandProperties.original.Summary -->Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.parent -->parent<!-- END REF -->|<!-- REF #fileMethodsandProperties.parenttype -->Object<!-- END REF --> |<!-- REF #fileMethodsandProperties.parent.Summary -->Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.path -->path<!-- END REF -->|<!-- REF #fileMethodsandProperties.pathtype -->Text<!-- END REF --> |<!-- REF #fileMethodsandProperties.path.Summary -->Returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.platformPath -->platformPath<!-- END REF -->|<!-- REF #fileMethodsandProperties.platformPathtype -->Text<!-- END REF -->  |<!-- REF #fileMethodsandProperties.platformPath.Summary -->Returns the path of the file expressed with the current platform syntax. This property is **read-only**.<!-- END REF -->|
|<!-- REF #fileMethodsandProperties.size -->size<!-- END REF -->|<!-- REF #fileMethodsandProperties.sizetype -->Number<!-- END REF -->  |<!-- REF #fileMethodsandProperties.size.Summary-->Returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0. This property is **read-only**.<!-- END REF -->|
<!-- END REF -->