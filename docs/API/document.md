---
id: document
title: Document Class
---

## Description


<!-- REF document.creationDate.Desc -->
### .creationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.creationDate.Syntax -->
**.creationDate** -> creation date<!-- END REF -->

<!-- REF #document.creationDate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|date|<-|Creation date|
<!-- END REF -->


##### Description
The `.creationDate` property  <!-- REF #document.creationDate.Summary -->returns the creation date of the file<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->
 
 
 <!-- REF document.creationTime.Desc -->
### .creationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.creationTime.Syntax -->
**.creationTime** -> creation time<!-- END REF -->

<!-- REF #document.creationTime.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|time|<-|Creation time|
<!-- END REF -->


##### Description
The `.creationTime` property  <!-- REF #document.creationTime.Summary -->returns the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.exists.Desc -->
### .exists

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.exists.Syntax -->
**.exists** -> boolean<!-- END REF -->

<!-- REF #document.exists.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the file exists, false otherwise|
<!-- END REF -->


##### Description
The `.exists` property  <!-- REF #document.exists.Summary -->returns true if the file exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**. 

<!-- END REF -->





<!-- REF document.extension.Desc -->
### .extension

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.extension.Syntax -->
**.extension** -> file extension<!-- END REF -->

<!-- REF #document.extension.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|File name extension (if any)|
<!-- END REF -->


##### Description
The `.extension` property  <!-- REF #document.extension.Summary -->returns the extension of the file name<!-- END REF -->. An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.fullName.Desc -->
### .fullName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.fullName.Syntax -->
**.fullName** -> full file name<!-- END REF -->

<!-- REF #document.fullName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Full file name, including extension (if any)|
<!-- END REF -->


##### Description
The `.fullName` property <!-- REF #document.fullName.Summary -->returns the full name of the file<!-- END REF -->, including its extension (if any).

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.hidden.Desc -->
### .hidden

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.hidden.Syntax -->
**.hidden** -> boolean<!-- END REF -->

<!-- REF #document.hidden.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the hidden system flag is set for the file, false otherwise|
<!-- END REF -->


##### Description
The `.hidden` property <!-- REF #document.hidden.Summary -->returns true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise. 

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.isAlias.Desc -->
### .isAlias

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.isAlias.Syntax -->
**.isAlias** -> boolean<!-- END REF -->

<!-- REF #document.isAlias.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the file is an alias, false otherwise|
<!-- END REF -->


##### Description
The `.isAlias` property <!-- REF #document.isAlias.Summary -->returns true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise. 

This property is **read-only**. 

<!-- END REF -->



<!-- REF document.isFile.Desc -->
### .isFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.isFile.Syntax -->
**.isFile** -> boolean<!-- END REF -->

<!-- REF #document.isFile.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Always true|
<!-- END REF -->


##### Description
The `.isFile` property <!-- REF #document.isFile.Summary -->always returns true for a file<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->



<!-- REF document.isFolder.Desc -->
### .isFolder

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.isFolder.Syntax -->
**.isFolder** -> boolean<!-- END REF -->

<!-- REF #document.isFolder.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Always false|
<!-- END REF -->


##### Description
The `.isFolder` property <!-- REF #document.isFolder.Summary -->always returns false for a file<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.isWritable.Desc -->
### .isWritable

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.isWritable.Syntax -->
**.isWritable** -> boolean<!-- END REF -->

<!-- REF #document.isWritable.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the file exists on disk and is writable, false otherwise|
<!-- END REF -->


##### Description
The `.isWritable` property <!-- REF #document.isWritable.Summary -->returns true if the file exists on disk and is writable<!-- END REF -->. 

>The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. 

This property is **read-only**. 

**Example**  

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```

<!-- END REF -->




<!-- REF document.modificationDate.Desc -->
### .modificationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.modificationDate.Syntax -->
**.modificationDate** -> modification date<!-- END REF -->

<!-- REF #document.modificationDate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|date|<-|Modification date|
<!-- END REF -->


##### Description
The `.modificationDate` property <!-- REF #document.modificationDate.Summary -->returns the date of the file's last modification<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.modificationTime.Desc -->
### .modificationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.modificationTime.Syntax -->
**.modificationTime** -> modification date<!-- END REF -->

<!-- REF #document.modificationTime.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|time|<-|Modification time|
<!-- END REF -->


##### Description
The `.modificationTime` property <!-- REF #document.modificationTime.Summary -->returns the time of the file's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00). 

This property is **read-only**. 

<!-- END REF -->



<!-- REF document.name.Desc -->
### .name

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.name.Syntax -->
**.name** -> file name<!-- END REF -->

<!-- REF #document.name.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|File name without extension (if any)|
<!-- END REF -->


##### Description
The `.name` property <!-- REF #document.name.Summary -->returns the name of the file<!-- END REF -->, without extension (if any). 

This property is **read-only**. 

<!-- END REF -->


<!-- REF document.original.Desc -->
### .original

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.original.Syntax -->
**.original** -> object<!-- END REF -->

<!-- REF #document.original.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Target of the alias or symbolic link, otherwise same file object|
<!-- END REF -->


##### Description
The `.original` property <!-- REF #document.original.Summary -->returns the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. The target element can be:

*	a file object 
*	a folder object 

For non-alias files, the property returns the same file object as the file.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.parent.Desc -->
### .parent

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.parent.Syntax -->
**.parent** -> object<!-- END REF -->

<!-- REF #document.parent.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Parent folder object for the file|
<!-- END REF -->


##### Description
The `.parent` property <!-- REF #document.parent.Summary -->returns the parent folder object of the file<!-- END REF -->. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.path.Desc -->
### .path

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.path.Syntax -->
**.path** -> text<!-- END REF -->

<!-- REF #document.path.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|POSIX path (including filesystem if any)|
<!-- END REF -->


##### Description
The `.path` property <!-- REF #document.path.Summary -->returns the POSIX path of the file<!-- END REF -->. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**. 

<!-- END REF -->



<!-- REF document.platformPath.Desc -->
### .platformPath

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.platformPath.Syntax -->
**.platformPath** -> text<!-- END REF -->

<!-- REF #document.platformPath.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Path expressed with the platform syntax|
<!-- END REF -->


##### Description
The `.platformPath` property <!-- REF #document.platformPath.Summary -->returns the path of the file expressed with the current platform syntax<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.size.Desc -->
### .size

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF #document.size.Syntax -->
**.size** -> file size<!-- END REF -->

<!-- REF #document.size.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|number|<-|Size of the file in bytes|
<!-- END REF -->


##### Description
The `.size` property <!-- REF #document.size.Summary -->returns the size of the file expressed in bytes<!-- END REF -->. If the file does not exist on disk, the size is 0.

This property is **read-only**. 

<!-- END REF -->










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
 
 



