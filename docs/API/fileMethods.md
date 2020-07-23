---
id: fileMethods
title: File and Folder Methods
---


## Methods

|Name|Syntax|Description|
|----|----|---|
|<!-- REF fileMethods.copyTo -->[copyTo()](#copyto)<!-- END REF -->|<!--INCLUDE fileMethods.copyTo.Syntax -->|<!-- INCLUDE fileMethods.copyTo.Summary -->|
|<!-- REF fileMethods.create -->[create()](#create)<!-- END REF -->|<!--INCLUDE fileMethods.create.Syntax --> |<!-- INCLUDE fileMethods.create.Summary --> |
|<!-- REF fileMethods.createAlias -->[createAlias()](#createalias)<!-- END REF -->|<!--INCLUDE fileMethods.createAlias.Syntax --> |<!-- INCLUDE fileMethods.createAlias.Summary --> |
|<!-- REF fileMethods.delete -->[delete()](#delete)<!-- END REF -->|<!--INCLUDE fileMethods.delete.Syntax --> |<!-- INCLUDE fileMethods.delete.Summary --> |
|<!-- REF fileMethods.getContent -->[getContent()](#getcontent)<!-- END REF -->|<!--INCLUDE fileMethods.getContent.Syntax -->|<!-- INCLUDE fileMethods.getContent.Summary -->|
|<!-- REF fileMethods.getIcon -->[getIcon()](#geticon)<!-- END REF -->|<!--INCLUDE fileMethods.getIcon.Syntax -->|<!-- INCLUDE fileMethods.getIcon.Summary -->|
|<!-- REF fileMethods.getText -->[getText()](#gettext)<!-- END REF -->|<!--INCLUDE fileMethods.getText.Syntax -->|<!-- INCLUDE fileMethods.getText.Summary -->|
|<!-- REF fileMethods.moveTo -->[moveTo()](#moveto)<!-- END REF -->|<!--INCLUDE fileMethods.moveTo.Syntax -->|<!-- INCLUDE fileMethods.moveTo.Summary -->|
|<!-- REF fileMethods.rename -->[rename()](#rename)<!-- END REF -->|<!--INCLUDE fileMethods.rename.Syntax -->|<!-- INCLUDE fileMethods.rename.Summary -->|
|<!-- REF fileMethods.setContent -->[setContent()](#setcontent)<!-- END REF -->| <!--INCLUDE fileMethods.setContent.Syntax -->|<!-- INCLUDE fileMethods.setContent.Summary -->|
|<!-- REF fileMethods.setText -->[setText()](#settext)<!-- END REF -->|<!--INCLUDE fileMethods.setText.Syntax -->|<!-- INCLUDE fileMethods.setText.Summary -->|



<!-- REF fileMethods.copyTo.Info -->
### copyTo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF fileMethods.copyTo.Syntax -->
**copyTo** (*destinationFolder*{;{*newName}*{;*overwrite*} ) &rarr; Result<!-- END REF -->

<!-- REF fileMethods.copyTo.Parameters -->
|Parameter|Type|Description|
|---------|--- |-----------|
|Result | BLOB |File content|
<!-- END REF -->

<!-- REF fileMethods.copyTo.Desc -->
##### Description
The file.<!-- REF fileMethods.copyTo.method -->copyTo( )<!-- END REF  --> method  <!-- REF fileMethods.copyTo.Summary -->copies the `File` object (source file) into the specified *destinationFolder*. <!-- END REF -->

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|fk overwrite|4|Overwrite existing elements, if any|


*Returned value*

The file.getContent( ) method returns a BLOB.

##### Example
The method returns the copied `File` object.

```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```

 <!-- END REF -->
 <!-- END REF -->




<!-- REF fileMethods.create.Info -->
### create()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF fileMethods.create.Syntax -->
**create** &rarr; boolean<!-- END REF -->

<!--REF fileMethods.create.Parameters -->
|Parameter|Type|Description|
|---------|----|-----------|
|Result|Boolean|True if the file was created successfully, false otherwise|
<!-- END REF -->


<!-- REF fileMethods.create.Desc -->
#### Description

The file.<!-- REF fileMethods.create.method -->create( )<!-- END REF --> method <!-- REF fileMethods.create.Summary -->creates a file on disk according to the properties of the file object.<!-- END REF -->

If necessary, the function creates the folder hierachy as described in the file.platformPath or file.path properties. If the file already exists on disk, the function does nothing (no error is thrown) and returns false.

Returned value

true if the file is created successfully;
false if a file with the same name already exists or if an error occured.

##### Example
Creation of a preferences file in the database folder:
 ```4d
 C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
 ```
<!-- END REF -->
<!-- END REF -->


<!-- REF fileMethods.createAlias.Info -->
### createAlias()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF fileMethods.createAlias.Syntax -->
 **file.createAlias** (*destinationFolder* ; *aliasName* {; *aliasType*} ) &rarr; Result<!-- END REF -->

 <!--REF fileMethods.createAlias.Parameters -->
|Parameter|Type|Description|
|---------|----|-----------|
|destinationFolder|Object|Destination folder for the alias or shortcut|
|aliasName|Text|Name of the alias or shortcut|
|aliasType|Longint|Type of the alias link|
|Result|Object|Alias or shortcut file reference|
<!-- END REF -->

<!-- REF fileMethods.createAlias.Desc -->
##### Description
The file.<!-- REF fileMethods.createAlias.method -->createAlias( )<!-- END REF --> method <!-- REF fileMethods.createAlias.Summary -->creates an alias (macOS) or a shortcut (Windows) to the file with the specified aliasName name in the folder designated by the destinationFolder object<!-- END REF -->.

Pass the name of the alias or shortcut to create in the aliasName parameter.

By default on macOS, the method creates a standard alias. You can also create a symbolic link by using the aliasType parameter. The following constants are available:
|Constant|Value|Comment|
|--------|-----|-------|
|fk alias link|0|Alias link (macOS only)(default)|
|fk symbolic link|1|Symbolic link (macOS only)|

On Windows, a shortcut (.lnk file) is always created (the aliasType parameter is ignored).

Returned object

The file.createAlias( ) method returns a File object with the file.isAlias property set to true.

##### Example
You want to create an alias to a file in your database folder:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```
<!-- END REF -->
<!-- END REF -->



<!-- REF fileMethods.delete.Info -->
### delete()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF fileMethods.delete.Syntax -->
**file.delete()**<!-- END REF -->

<!-- REF fileMethods.delete.Desc -->
##### Description
The file.<!-- REF fileMethods.delete.method -->delete( )<!-- END REF --> method <!-- REF fileMethods.delete.Summary -->deletes the file.<!-- END REF -->

If the file is currently open, an error is generated.

If the file does not exist on disk, the method does nothing (no error is generated).

>WARNING: file.delete( ) can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. file.delete( ) should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

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






  
<!-- REF fileMethods.getContent.Info -->
### getContent()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF fileMethods.getContent.Syntax -->
**getContent** &rarr; Result<!-- END REF -->

<!-- REF fileMethods.getContent.Parameters -->
|Parameter|Type|Description|
|---------|----|-----------|
|Result | BLOB |File content|
<!-- END REF -->


##### Description
The file.<!-- REF fileMethods.getContent.method -->getContent()<!-- END REF --> method  <!-- REF fileMethods.getContent.Summary -->returns a BLOB containing the entire content of the file. For information on BLOBs, please refer to the BLOB Commands section.<!-- END REF -->

*Returned value*

The file.getContent( ) method returns a BLOB.

##### Example
To save a document contents in a BLOB field:

```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```
<!-- END REF -->
 <!-- END REF -->






<!-- REF fileMethods.getIcon.Info -->
### getIcon()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF fileMethods.getIcon.Syntax -->
**getIcon** &rarr; Result<!-- END REF -->

<!-- REF fileMethods.getIcon.Parameters -->
|Parameter|Type|Description|
|---------|----|-----------|
|Result|BLOB|File content|
<!-- END REF -->

<!-- REF fileMethods.getIcon.Desc -->
##### Description
The file.<!-- REF fileMethods.getIcon.method -->getContent( )<!-- END REF --> method returns <!-- REF fileMethods.getIcon.Summary -->the icon of the `File` object.<!-- END REF -->

*Returned value*

The file.getIcon( ) method returns a Picture.
 <!-- END REF -->
 <!-- END REF -->




<!-- REF fileMethods.getText.Info -->
### getText()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!-- REF fileMethods.getText.Syntax -->
**getText** &rarr; Result<!-- END REF -->

<!-- REF fileMethods.getText.Parameters -->
|Parameter|Type|Description|
|---------|----|-----------|
|Result | BLOB |File content|
<!-- END REF -->

<!-- REF fileMethods.getText.Desc -->
##### Description
The file.getContent( ) method <!-- REF fileMethods.getText.Summary -->returns the contents of the file as text. <!-- END REF -->

*Returned value*

The file.getText( ) method returns Text of the file.

##### Example
Given the following text document (fields are separated by tabs):

 ```
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
 
 
 
 
<!-- REF fileMethods.moveTo.Info -->
### moveTo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF fileMethods.moveTo.Syntax -->
 **moveTo** ( *destinationFolder* {; *newName*})  &rarr; Result<!-- END REF -->

<!--REF fileMethods.moveTo.Parameters -->
|Parameter|Type|Description|
|---------|----|-----------|
|destinationFolder|Object|Destination folder|
|newName|Text|Full name for the moved file|
|Result|Object|Moved file|
<!-- END REF -->

<!-- REF fileMethods.moveTo.Desc -->
##### Description
The file.moveTo( ) method <!-- REF fileMethods.moveTo.Summary -->moves or renames the File object into the specified destinationFolder.<!-- END REF -->

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the newName parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

Returned object

The method returns the moved `File` object.

##### Example
You want to create an alias to a file in your database folder:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```

<!-- END REF -->
 <!-- END REF -->
 
 
 
 
<!-- REF fileMethods.rename.Info --> 
### rename()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF fileMethods.rename.Syntax -->
 **rename** ( newName ) &rarr; Result<!-- END REF -->

<!--REF fileMethods.rename.Parameters -->
|Parameter|Type|Description|
|----|-----------|-----------|
|newName|Text|New full name for the file|
|Result|Object|Renamed file|
<!-- END REF -->

<!-- REF fileMethods.rename.Desc -->

##### Description

The file.rename( ) method <!-- REF fileMethods.rename.Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object.<!-- END REF -->

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the method modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.

**Returned object**

The method returns the renamed `File` object.

##### Example
You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```

<!-- END REF -->
<!-- END REF -->




<!-- REF fileMethods.setContent.Info --> 
### setContent()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF fileMethods.setContent.Syntax -->
**file.setContent (content)** <!-- END REF -->

<!--REF fileMethods.setContent.Parameters -->
|Parameter|Type|Description|
|---------|----|-----------|
|content|BLOB|New contents for the file|
<!-- END REF -->

<!-- REF fileMethods.setContent.Desc -->
##### Description
The file.setContent( ) method <!-- REF fileMethods.setContent.Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB. For information on BLOBs, please refer to the BLOB Commands section.
<!-- END REF -->

##### Example

 ```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
 ```
<!-- END REF -->
<!-- END REF -->




<!-- REF fileMethods.setText.Info --> 
### setText()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

<!--REF fileMethods.setText.Syntax -->
 **setText** ( text {; charSet {;breakMode}}) &rarr; blob<!-- END REF -->

<!--REF fileMethods.setText.Parameters -->
|Parameter|Type|Description|
|---------|----|-----------|
|text|Text|Text to store in the file|
|charSet|Text, Longint|Name or number of character set|
|breakMode|Longint|Processing mode for line breaks|<!-- END REF -->

<!-- REF fileMethods.setText.Desc -->
##### Description
The file.setText( ) method <!-- REF fileMethods.setText.Summary -->writes text as the new contents of the file.<!-- END REF -->

If the file referenced in the `File` object does not exist on the disk, it is created by the method. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

In charSet, pass the character set to be used for writing the contents. You can pass a string containing the standard character set name (for example “ISO-8859-1” or “UTF-8”) or its MIBEnum ID (longint). For more information about the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.  If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file. If you do not specify a character set, by default 4D uses the "UTF-8" character set and a BOM. 

In *breakMode*, you can pass a longint indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the "System Documents" theme are available:

|Constant|Type|Value|Comment|
|--------|----|-----|-------|
|Document unchanged|Longint|0|No processing|
|Document with native format|Longint|1|(Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows|
|Document with CRLF|Longint|2|Line breaks are converted to Windows format: CRLF (carriage return + line feed)|
|Document with CR|Longint|3|Line breaks are converted to OS X format: CR (carriage return)|
|Document with LF|Longint|4|Line breaks are converted to Unix format: LF (line feed)|

##### Example

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->
<!-- END REF -->