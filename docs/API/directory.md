---
id: directory
title: Directory Class
---

## Description


## Properties

<!-- REF directory.properties -->
|Property|Type|Description|
|----|----|-----------|
|<!-- REF directory.creationDate -->creationDate<!-- END REF -->|<!-- REF #directory.creationDate.type -->Date<!-- END REF -->|<!-- REF #directory.creationDate.Summary -->Returns the creation date of the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.creationTime -->creationTime<!-- END REF -->| <!-- REF #directory.creationTime.type -->Time<!-- END REF -->|<!-- REF #directory.creationTime.Summary -->Returns the creation time of the file (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.exists -->exists<!-- END REF -->|<!-- REF #directory.exists.type -->Boolean<!-- END REF --> |<!-- REF #directory.exists.Summary --> Returns **true** if the file exists on disk, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.extension -->extension<!-- END REF -->|<!-- REF #directory.extension.type -->Text<!-- END REF --> |<!-- REF #directory.extension.Summary -->Returns the extension of the file name. An extension always starts with ".". The property returns an empty string if the file name does not have an extension. This property is **read-only**.<!-- END REF -->| 
|<!-- REF directory.fullName -->fullName<!-- END REF -->| <!-- REF #directory.fullName.type -->Text<!-- END REF -->|<!-- REF #directory.fullName.Summary -->Returns the full name of the file, including its extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.hidden -->hidden <!-- END REF -->|<!-- REF #directory.hidden.type -->Boolean<!-- END REF --> |<!-- REF #directory.hidden.Summary -->  Returns **true** if the file is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.isAlias -->isAlias<!-- END REF -->|<!-- REF #directory.isAlias.type -->Boolean<!-- END REF --> |<!-- REF #directory.isAlias.Summary -->Returns **true** if the file is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.isFile -->isFile <!-- END REF -->|<!-- REF #directory.isFile.type -->Boolean<!-- END REF --> |<!-- REF #directory.isFile.Summary -->Always returns **true** for a file. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.isFolder -->isFolder<!-- END REF -->|<!-- REF #directory.isFolder.type -->Boolean<!-- END REF --> |<!-- REF #directory.isFolder.Summary -->Always returns **false** for a file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF directory.isWritable -->isWritable<!-- END REF -->|<!-- REF #directory.isWritable.type -->Boolean<!-- END REF --> |<!-- REF #directory.isWritable.Summary -->Returns **true** if the file exists on disk and is writable. **Note**: The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF directory.modificationDate -->modificationDate<!-- END REF -->| <!-- REF #directory.modificationDate.type -->Date<!-- END REF -->|<!-- REF #directory.modificationDate.Summary --> Returns the date of the file's last modification. This property is **read-only**.<!-- END REF -->| 
|<!-- REF directory.modificationTime -->modificationTime<!-- END REF -->|<!-- REF #directory.modificationTime.type -->Time<!-- END REF --> |<!-- REF #directory.modificationTime.Summary -->Returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.name -->name<!-- END REF -->|<!-- REF #directory.name.type -->Text<!-- END REF --> |<!-- REF #directory.name.Summary --> Returns the name of the file, without extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.original -->original <!-- END REF -->|<!-- REF #directory.original.type -->Object<!-- END REF --> |<!-- REF #directory.original.Summary -->Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.parent -->parent<!-- END REF -->|<!-- REF #directory.parent.type -->Object<!-- END REF --> |<!-- REF #directory.parent.Summary -->Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.path -->path<!-- END REF -->|<!-- REF #directory.path.type -->Text<!-- END REF --> |<!-- REF #directory.path.Summary -->Returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.platformPath -->platformPath<!-- END REF -->|<!-- REF #directory.platformPath.type -->Text<!-- END REF -->  |<!-- REF #directory.platformPath.Summary -->Returns the path of the file expressed with the current platform syntax. This property is **read-only**.<!-- END REF -->|
|<!-- REF directory.size -->size<!-- END REF -->|<!-- REF #directory.size.type -->Number<!-- END REF -->  |<!-- REF #directory.size.Summary -->Returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0. This property is **read-only**.<!-- END REF -->|
<!-- END REF -->

## Methods



<!-- REF directory.copyTo().Desc -->
### .copyTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.copyTo().Syntax -->
**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> Result<!-- END REF -->

<!-- REF #directory.copyTo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder | Object |->|Destination folder|
|newName|Text|->|Name for the copy|
|overwrite|Longint|->|`fk overwrite` to replace existing elements|
|Result|Object|<-|Copied file or folder|
<!-- END REF -->


##### Description
The `.copyTo( )` method  <!-- REF #directory.copyTo().Summary -->copies a `File` or `Folder` object (source file/folder) into the specified *destinationFolder* <!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file or folder is copied with the name of the original file or folder. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file or folder with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`fk overwrite`|4|Overwrite existing elements, if any|


**Returned value**

The copied `File` or `Folder` object.

##### Example

You want to copy a picture *file* from the user's document folder to the database folder:

```4d
C_OBJECT($source;$copy)
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

You want to copy a Pictures *folder* from the user's Document folder to the Database folder:

```4d
C_OBJECT($userImages;$copiedImages)
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 
 <!-- END REF -->



<!-- REF directory.getContent().Desc -->
### .getContent( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.getContent().Syntax -->
**.getContent( )**  -> Result<!-- END REF -->

<!-- REF #directory.getContent().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|Result | BLOB |<-|File content|
<!-- END REF -->


##### Description
The `.getContent( )` method  <!-- REF #directory.getContent().Summary -->returns a `BLOB` containing the entire content of a file<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](../Concepts/blob.html) section.

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


<!-- END REF -->



<!-- REF directory.getIcon().Desc -->
### .getIcon( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.getIcon().Syntax -->
**.getIcon**( { *size* } ) -> Result<!-- END REF -->

<!-- REF #directory.getIcon().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|size|Longint|->|Side length for the returned picture (pixels)|
|Result|Picture|<-|Icon|
<!-- END REF -->


##### Description
The `.getIcon( )` method returns <!-- REF #directory.getIcon().Summary -->the icon of the file or folder<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file or folder does not exist on disk, a default blank icon is returned.  

**Returned value**

File or folder icon [picture](../Concepts/picture.html).


<!-- END REF -->



<!-- REF directory.getText().Desc -->
### .getText( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #directory.getText().Syntax -->
**.getText**( { *charSet* } { ; } { *breakMode*} ) -> Result<!-- END REF -->

<!-- REF #directory.getText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|charSet |Text, Longint |-> |Name or number of character set|
|breakMode|Longint |-> |Processing mode for line breaks|
|Result |Text  |<- |Text from the document|
<!-- END REF -->


##### Description
The `.getText( )` method <!-- REF #directory.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

In *charSet*, pass the character set to be used for reading the contents. You can pass a string containing the standard set name (for example “ISO-8859-1” or “UTF-8”) or its MIBEnum ID (longint). For more information about the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command. 

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in charSet (this parameter is then ignored).  

If the document does not contain a BOM and if the *charSet* parameter is omitted, by default 4D uses the “UTF-8” character sets.

In *breakMode*, you can pass a longint indicating the processing to apply to end-of-line characters in the directory. The following constants of the "System Documents" theme are available:

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
 

<!-- END REF -->
 
 



