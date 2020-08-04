---
id: document
title: Document
---

## Description


## Properties

<!-- REF #Document.properties -->
|Property|Type|Description|
|----|----|-----------|
|<!-- REF #Document.creationDate -->creationDate<!-- END REF -->|Date |<!-- REF #Document.creationDate.Summary -->Returns the creation date of the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.creationTime -->creationTime<!-- END REF -->| Time|<!-- REF #Document.creationTime.Summary -->Returns the creation time of the file (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.exists -->exists<!-- END REF -->|Boolean |<!-- REF #Document.existsDesc --> Returns **true** if the file exists on disk, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.extension -->extension<!-- END REF -->|Text |<!-- REF #Document.extension.Summary -->Returns the extension of the file name. An extension always starts with ".". The property returns an empty string if the file name does not have an extension. This property is **read-only**.<!-- END REF -->| 
|<!-- REF #Document.fullName -->fullName<!-- END REF -->| Text|<!-- REF #Document.fullName.Summary -->Returns the full name of the file, including its extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.hidden -->hidden <!-- END REF -->|Boolean |<!-- REF #Document.hidden.Summary -->  Returns **true** if the file is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.isAlias -->isAlias<!-- END REF -->|Boolean |<!-- REF #Document.isAlias.Summary -->Returns **true** if the file is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.isFile -->isFile <!-- END REF -->|Boolean |<!-- REF #Document.isFile.Summary -->Always returns **true** for a file. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.isFolder -->isFolder<!-- END REF -->|Boolean |<!-- REF #Document.isFolder.Summary -->Always returns **false** for a file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF #Document.isWritable -->isWritable<!-- END REF -->|Boolean |<!-- REF #Document.isWritable.Summary -->Returns **true** if the file exists on disk and is writable. **Note**: The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF #Document.modificationDate -->modificationDate<!-- END REF -->| Date|<!-- REF #Document.modificationDate.Summary --> Returns the date of the file's last modification. This property is **read-only**.<!-- END REF -->| 
|<!-- REF #Document.modificationTime -->modificationTime<!-- END REF -->|Time |<!-- REF #Document.modificationTime.Summary -->Returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.name -->name<!-- END REF -->|Text |<!-- REF #Document.name.Summary --> Returns the name of the file, without extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.original -->original <!-- END REF -->|Object |<!-- REF #Document.original.Summary -->Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.parent -->parent<!-- END REF -->|Object |<!-- REF #Document.parent.Summary -->Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.path -->path<!-- END REF -->|Text |<!-- REF #Document.path.Summary -->Returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.platformPath -->platformPath<!-- END REF -->|Text  |<!-- REF #Document.platformPath.Summary -->Returns the path of the file expressed with the current platform syntax. This property is **read-only**.<!-- END REF -->|
|<!-- REF #Document.size -->size<!-- END REF -->|Number  |<!-- REF #Document.size.Summary -->Returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0. This property is **read-only**.<!-- END REF -->|
<!-- END REF -->

## Methods



<!-- REF #Document.copyTo().Info -->
### .copyTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #Document.copyTo().Syntax -->
**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> Result<!-- END REF -->

<!-- REF #Document.copyTo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder | Object |->|Destination folder|
|newName|Text|->|Name for the copy|
|overwrite|Longint|->|`fk overwrite` to replace existing elements|
|Result|Object|<-|Copied file|
<!-- END REF -->

<!-- REF #Document.copyTo().Desc -->
##### Description
The <!-- REF #Document.copyTo().method -->`.copyTo( )`<!-- END REF  --> method  <!-- REF #Document.copyTo().Summary -->copies a `File` or `Foldder` object (source file/folder) into the specified *destinationFolder* <!-- END REF -->.

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

 <!-- END REF -->
 <!-- END REF -->



<!-- REF #Document.getContent().Info -->
### .getContent( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #Document.getContent().Syntax -->
**.getContent( )**  -> Result<!-- END REF -->

<!-- REF #Document.getContent().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|Result | BLOB |<-|File content|
<!-- END REF -->


##### Description
The <!-- REF #Document.getContent().method -->`.getContent( )`<!-- END REF --> method  <!-- REF #Document.getContent().Summary -->returns a `BLOB` containing the entire content of a file<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](../Concepts/blob.html) section.

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
<!-- END REF -->



<!-- REF #Document.getIcon().Info -->
### .getIcon( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #Document.getIcon().Syntax -->
**.getIcon**( { *size* } ) -> Result<!-- END REF -->

<!-- REF #Document.getIcon().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|size|Longint|->|Side length for the returned picture (pixels)|
|Result|Picture|<-|Icon|
<!-- END REF -->

<!-- REF #Document.getIcon().Desc -->
##### Description
The <!-- REF #Document.getIcon().method -->`.getIcon( )`<!-- END REF --> method returns <!-- REF #Document.getIcon().Summary -->the icon of the file or folder<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file or folder does not exist on disk, a default blank icon is returned.  

**Returned value**

File or folder icon [picture](../Concepts/picture.html).

<!-- END REF -->
<!-- END REF -->



<!-- REF #Document.getText().Info -->
### .getText( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #Document.getText().Syntax -->
**.getText**( { *charSet* } { ; } { *breakMode*} ) -> Result<!-- END REF -->

<!-- REF #Document.getText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|charSet |Text, Longint |-> |Name or number of character set|
|breakMode|Longint |-> |Processing mode for line breaks|
|Result |Text  |<- |Text from the document|
<!-- END REF -->

<!-- REF #Document.getText().Desc -->
##### Description
The <!-- REF #Document.getText().method -->`.getText( )`<!-- END REF --> method <!-- REF #Document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

In *charSet*, pass the character set to be used for reading the contents. You can pass a string containing the standard set name (for example “ISO-8859-1” or “UTF-8”) or its MIBEnum ID (longint). For more information about the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command. 

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in charSet (this parameter is then ignored).  

If the document does not contain a BOM and if the *charSet* parameter is omitted, by default 4D uses the “UTF-8” character sets.

In *breakMode*, you can pass a longint indicating the processing to apply to end-of-line characters in the #Document. The following constants of the "System Documents" theme are available:

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
<!-- END REF -->
 
 



