---
id: fileClass
title: File 
---


`File` objects are created with the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### Example

The following example creates a preferences file in the project folder:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

## File object

||
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #fileClass.create().Syntax -->](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileClass.create().Summary -->|
|[<!-- INCLUDE #fileClass.createAlias().Syntax -->](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileClass.createAlias().Summary -->|
|[<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationDate.Summary -->|
|[<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationTime.Summary -->|
|[<!-- INCLUDE #fileClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileClass.delete().Summary -->|
|[<!-- INCLUDE #document.exists.Syntax -->](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
|[<!-- INCLUDE #document.extension.Syntax -->](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
|[<!-- INCLUDE #document.fullName.Syntax -->](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
|[<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<p><!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getIcon().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](#gettext)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #document.hidden.Syntax -->](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
|[<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->
|[<!-- INCLUDE #document.isFile.Syntax -->](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
|[<!-- INCLUDE #document.isFolder.Syntax -->](#isFolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
|[<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
|[<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
|[<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
|[<!-- INCLUDE #fileClass.moveTo().Syntax -->](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileClass.moveTo().Summary -->|
|[<!-- INCLUDE #document.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
|[<!-- INCLUDE #document.original.Syntax -->](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
|[<!-- INCLUDE #document.parent.Syntax -->](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
|[<!-- INCLUDE #document.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary -->|
|[<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.platformPath.Summary -->|
|[<!-- INCLUDE #fileClass.rename().Syntax -->](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileClass.rename().Summary -->|
|[<!-- INCLUDE #fileClass.setContent().Syntax -->](#setcontent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileClass.setContent().Summary -->|
|[<!-- INCLUDE #fileClass.setText().Syntax -->](#settext)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileClass.setText().Summary -->|
|[<!-- INCLUDE #document.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.size.Summary -->|


---

<!-- INCLUDE document.copyTo().Desc -->

---

<!-- REF file.create().Desc -->
## .create()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF file.create().Note -->
**Not available for ZIP archives**<!-- END REF -->


<!--REF #fileClass.create().Syntax -->
**.create( )** : boolean <!-- END REF -->

<!--REF #fileClass.create().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|boolean|<-|True if the file was created successfully, false otherwise|
<!-- END REF -->

#### Description

The `.create()` function <!-- REF #fileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the file already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

*	**True** if the file is created successfully;
*	**False** if a file with the same name already exists or if an error occured.

#### Example

Creation of a preferences file in the database folder:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```
<!-- END REF -->


---


<!-- REF file.createAlias().Desc -->
## .createAlias()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF #fileClass.createAlias().Syntax -->
**.createAlias**( *destinationFolder* : object ; *aliasName* : text { ; *aliasType* : integer } ) : object<!-- END REF -->

<!--REF #fileClass.createAlias().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|object|->|Destination folder for the alias or shortcut|
|aliasName|text|->|Name of the alias or shortcut|
|aliasType|integer|->|Type of the alias link|
|Result|object|<-|>Alias or shortcut file reference|
<!-- END REF -->


#### Description

The `.createAlias()` function <!-- REF #fileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`fk alias link`|0|Alias link (macOS only)(default)|
|`fk symbolic link`|1|Symbolic link (macOS only)|

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).


**Returned object**

A `File` object with the `isAlias` property set to true.

#### Example

You want to create an alias to a file in your database folder:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```
<!-- END REF -->

---


<!-- INCLUDE document.creationDate.Desc -->

---


<!-- INCLUDE document.creationTime.Desc -->

---


<!-- REF file.delete().Desc -->
## .delete()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #fileClass.delete().Syntax -->
**.delete()**<!-- END REF -->


<!-- REF #fileClass.delete().Params -->
|Parameter|Type||Description|
|---|----|---|---|
| |  ||Does not require any parameters|
<!-- END REF -->


#### Description

The `.delete()` function <!-- REF #fileClass.delete().Summary -->deletes the file<!-- END REF -->.

If the file is currently open, an error is generated.

If the file does not exist on disk, the function does nothing (no error is generated).

>**WARNING**: `.delete( )` can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. `.delete( )` should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

#### Example

You want to delete a specific file in the database folder:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("User preference file deleted.")
 End if
``` 
<!-- END REF -->

---


<!-- INCLUDE document.exists.Desc -->

---


<!-- INCLUDE document.extension.Desc -->

---


<!-- INCLUDE document.fullName.Desc -->

---


<!-- INCLUDE document.getContent().Desc -->

---


<!-- INCLUDE document.getIcon().Desc -->

---


<!-- INCLUDE document.getText().Desc -->

---


<!-- INCLUDE document.hidden.Desc -->

---


<!-- INCLUDE document.isAlias.Desc -->

---


<!-- INCLUDE document.isFile.Desc -->

---


<!-- INCLUDE document.isFolder.Desc -->

---


<!-- INCLUDE document.isWritable.Desc -->

---


<!-- INCLUDE document.modificationDate.Desc -->

---


<!-- INCLUDE document.modificationTime.Desc -->

---


<!-- REF file.moveTo().Desc -->
## .moveTo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #fileClass.moveTo().Syntax -->
**.moveTo**( *destinationFolder* : object { ; *newName* : text } ) : object<!-- END REF -->

<!--REF #fileClass.moveTo().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|object|->|Destination folder|
|newName|text|->|Full name for the moved file|
|Result|object|<-|Moved file|
<!-- END REF -->


#### Description

The `.moveTo()` function <!-- REF #fileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.


**Returned object**

The moved `File` object.

#### Example


```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```
<!-- END REF -->


---


<!-- INCLUDE document.name.Desc -->

---


<!-- INCLUDE document.original.Desc -->

---


<!-- INCLUDE document.parent.Desc -->

---


<!-- INCLUDE document.path.Desc -->

---


<!-- INCLUDE document.platformPath.Desc -->

---


<!-- REF file.rename().Desc --> 
## .rename()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #fileClass.rename().Syntax -->
**.rename**( *newName* : text ) : object<!-- END REF -->

<!--REF #fileClass.rename().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newName|text|->|New full name for the file|
|Result|object|<-|Renamed file|
<!-- END REF -->

#### Description

The `.rename()` function <!-- REF #fileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.


**Returned object**

The renamed `File` object.

#### Example

You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->


---


<!-- REF file.setContent().Desc --> 
## .setContent()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #fileClass.setContent().Syntax -->
**.setContent** ( *content* : blob ) <!-- END REF -->

<!--REF #fileClass.setContent().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|content|BLOB|->|New contents for the file|
<!-- END REF -->


#### Description

The `.setContent( )` function <!-- REF #fileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.


#### Example

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->



---


<!-- REF file.setText().Desc --> 
## .setText()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #fileClass.setText().Syntax -->
**.setText** ( *text* : text {; *charSetName* : text { ; *breakMode* : integer } } )<br>**.setText** ( *text* : text {; *charSetNum* : integer { ; *breakMode* : integer } } ) <!-- END REF -->


<!--REF #fileClass.setText().Params -->
|Parameter|Type||Description|
|---------|----|---|--------|
|text|text|->|Text to store in the file|
|charSetName|text|->|Name of character set|
|charSetNum|integer|->|Number of character set|
|breakMode|integer|->|Processing mode for line breaks|<!-- END REF -->

#### Description

The `.setText()` function <!-- REF #fileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

Optionally, you can designate the character set to be used for writing the contents. You can pass either:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or ""UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command. 

If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file. If you do not specify a character set, by default 4D uses the "UTF-8" character set and a BOM. 

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`Document unchanged`|0|No processing|
|`Document with native format`|1|(Default) Line breaks are converted to the native format of the operating system: CR (carriage return) in macOS, CRLF (carriage return + line feed) in Windows|
|`Document with CRLF`|2|Line breaks are converted to Windows format: CRLF (carriage return + line feed)|
|`Document with CR`|3|Line breaks are converted to OS X format: CR (carriage return)|
|`Document with LF`|4|Line breaks are converted to Unix format: LF (line feed)|

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).



#### Example

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->



---


<!-- INCLUDE document.size.Desc -->



