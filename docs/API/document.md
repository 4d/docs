---
id: document
title: Document Class
---

## Description


## Properties

<!-- REF document.properties -->
|Property|Type|Description|
|----|----|-----------|
|<!-- REF document.creationDate -->creationDate<!-- END REF -->|<!-- REF #document.creationDate.type -->Date<!-- END REF -->|<!-- REF #document.creationDate.Summary -->Returns the creation date of the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF document.creationTime -->creationTime<!-- END REF -->| <!-- REF #document.creationTime.type -->Time<!-- END REF -->|<!-- REF #document.creationTime.Summary -->Returns the creation time of the file (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF document.exists -->exists<!-- END REF -->|<!-- REF #document.exists.type -->Boolean<!-- END REF --> |<!-- REF #document.exists.Summary --> Returns **true** if the file exists on disk, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF document.extension -->extension<!-- END REF -->|<!-- REF #document.extension.type -->Text<!-- END REF --> |<!-- REF #document.extension.Summary -->Returns the extension of the file name. An extension always starts with ".". The property returns an empty string if the file name does not have an extension. This property is **read-only**.<!-- END REF -->| 
|<!-- REF document.fullName -->fullName<!-- END REF -->| <!-- REF #document.fullName.type -->Text<!-- END REF -->|<!-- REF #document.fullName.Summary -->Returns the full name of the file, including its extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF document.hidden -->hidden <!-- END REF -->|<!-- REF #document.hidden.type -->Boolean<!-- END REF --> |<!-- REF #document.hidden.Summary -->  Returns **true** if the file is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF document.isAlias -->isAlias<!-- END REF -->|<!-- REF #document.isAlias.type -->Boolean<!-- END REF --> |<!-- REF #document.isAlias.Summary -->Returns **true** if the file is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF document.isFile -->isFile <!-- END REF -->|<!-- REF #document.isFile.type -->Boolean<!-- END REF --> |<!-- REF #document.isFile.Summary -->Always returns **true** for a file. This property is **read-only**.<!-- END REF -->|
|<!-- REF document.isFolder -->isFolder<!-- END REF -->|<!-- REF #document.isFolder.type -->Boolean<!-- END REF --> |<!-- REF #document.isFolder.Summary -->Always returns **false** for a file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF document.isWritable -->isWritable<!-- END REF -->|<!-- REF #document.isWritable.type -->Boolean<!-- END REF --> |<!-- REF #document.isWritable.Summary --><ul><li>**File**: Returns **true** if the file exists on disk and is writable. **Note**: The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. This property is **read-only**.</li><li>**ZIP archive**: Always **false**.</li></ul><!-- END REF -->| 
|<!-- REF document.modificationDate -->modificationDate<!-- END REF -->| <!-- REF #document.modificationDate.type -->Date<!-- END REF -->|<!-- REF #document.modificationDate.Summary --> Returns the date of the file's last modification. This property is **read-only**.<!-- END REF -->| 
|<!-- REF document.modificationTime -->modificationTime<!-- END REF -->|<!-- REF #document.modificationTime.type -->Time<!-- END REF --> |<!-- REF #document.modificationTime.Summary -->Returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF document.name -->name<!-- END REF -->|<!-- REF #document.name.type -->Text<!-- END REF --> |<!-- REF #document.name.Summary --> Returns the name of the file, without extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF document.original -->original <!-- END REF -->|<!-- REF #document.original.type -->Object<!-- END REF --> |<!-- REF #document.original.Summary -->Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF document.parent -->parent<!-- END REF -->|<!-- REF #document.parent.type -->Object<!-- END REF --> |<!-- REF #document.parent.Summary -->Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF document.path -->path<!-- END REF -->|<!-- REF #document.path.type -->Text<!-- END REF --> |<!-- REF #document.path.Summary --><ul><li>**File**: Returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.</li><li>**ZIP archive**: Returns a path relative to the archive</li></ul><!-- END REF -->|
|<!-- REF document.platformPath -->platformPath<!-- END REF -->|<!-- REF #document.platformPath.type -->Text<!-- END REF -->  |<!-- REF #document.platformPath.Summary -->Returns the path of the file expressed with the current platform syntax. This property is **read-only**.<!-- END REF -->|
|<!-- REF document.size -->size<!-- END REF -->|<!-- REF #document.size.type -->Number<!-- END REF -->  |<!-- REF #document.size.Summary -->Returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0. This property is **read-only**.<!-- END REF -->|
<!-- END REF -->

## Functions



<!-- REF document.copyTo().Desc -->
### .copyTo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.copyTo().Syntax -->
**.copyTo**( *destinationFolder* { ; { *newName* } { ; *overwrite* } ) -> object<!-- END REF -->

<!-- REF #document.copyTo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder | object |->|Destination folder|
|newName|text|->|Name for the copy|
|overwrite|longint|->|`fk overwrite` to replace existing elements|
|Result|object|<-|Copied file or folder|
<!-- END REF -->


##### Description
The `.copyTo( )` function  <!-- REF #document.copyTo().Summary -->copies a `File` object (source file/folder) into the specified *destinationFolder* <!-- END REF -->.

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

 <!-- END REF -->



<!-- REF document.getContent().Desc -->
### .getContent( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.getContent().Syntax -->
**.getContent( )**  -> BLOB<!-- END REF -->

<!-- REF #document.getContent().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|Result | BLOB |<-|File content|
<!-- END REF -->


##### Description
The `.getContent( )` function  <!-- REF #document.getContent().Summary -->returns a `BLOB` containing the entire content of a file<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](../Concepts/blob.html) section.

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



<!-- REF document.getIcon().Desc -->
### .getIcon( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.getIcon().Syntax -->
**.getIcon**( { *size* } ) -> picture<!-- END REF -->

<!-- REF #document.getIcon().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|size|longint|->|Side length for the returned picture (pixels)|
|Result|picture|<-|Icon|
<!-- END REF -->


##### Description
The `.getIcon( )` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.  

**Returned value**

File icon [picture](../Concepts/picture.html).


<!-- END REF -->



<!-- REF document.getText().Desc -->
### .getText( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.getText().Syntax -->
**.getText**( { *charSet* } { ; } { *breakMode*} ) -> text<!-- END REF -->

<!-- REF #document.getText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|charSet |text, longint |-> |Name or number of character set|
|breakMode|longint |-> |Processing mode for line breaks|
|Result |text  |<- |Text from the document|
<!-- END REF -->


##### Description
The `.getText( )` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

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
 

<!-- END REF -->
 
 



