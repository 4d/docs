---
id: file
title: File
---

inherit from : [Document](Document.md)

## Properties

<!-- INCLUDE document.properties -->

## Methods summary



























| name                              | description                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| <!-- INCLUDE document.methods --> |                                                                                     |
| [create()](#create)               | <!-- INCLUDE File.create.Summary -->                                                |
|                                   | <!--INCLUDE File.create.Syntax -->                                                  |
| [createAlias()](#createalias)     | <!-- INCLUDE File.createAlias.Summary -->                                           |
|                                   | <!--INCLUDE File.createAlias.Syntax -->                                             |
| [delete()](#delete)               | <!-- INCLUDE File.delete.Summary -->                                                |
|                                   | <!-- INCLUDE File.delete.Syntax -->                                                 |
| [moveTo()](#moveto)               | <!-- INCLUDE File.moveTo.Summary -->                                                |
|                                   | <!-- INCLUDE File.moveTo.Syntax -->                                                 |
| [rename()](#rename)               | <!-- INCLUDE File.rename.Summary -->                                                |
|                                   | <!-- INCLUDE File.rename.Syntax -->                                                 |
| [setContent()](#setcontent)       | <!-- INCLUDE File.setContent.Summary -->||

<!-- INCLUDE File.setContent.Syntax --> |
| [setText()](#settext)             | <!-- INCLUDE File.setText.Summary -->                                               |
|                                   | <!-- INCLUDE File.setText.Syntax -->                                                |


<!-- INCLUDE document.methods.Desc -->

## create()

<!--REF File.create.Syntax -->

**create** &rarr; boolean<!-- END REF -->

<!--REF File.create.Parameters -->

| Parameter | Type    | Description                                                |
| --------- | ------- | ---------------------------------------------------------- |
| Result    | Boolean | True if the file was created successfully, false otherwise |


<!-- END REF -->

<!-- REF File.create.Desc -->

#### Description

The file.create( ) method <!-- REF File.create.Summary -->creates a file on disk according to the properties of the file object.

<!-- END REF -->

If necessary, the function creates the folder hierachy as described in the file.platformPath or file.path properties. If the file already exists on disk, the function does nothing (no error is thrown) and returns false.

Returned value

true if the file is created successfully; false if a file with the same name already exists or if an error occured.

#### Example

Creation of a preferences file in the database folder:

 ```4d
 C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
 ```

<!-- END REF -->

## createAlias()

<!--REF File.createAlias.Syntax -->

**file.createAlias** (*destinationFolder* ; *aliasName* {; *aliasType*} ) &rarr; Result<!-- END REF -->

<!--REF File.createAlias.Parameters -->

| Parameter         | Type    | Description                                  |
| ----------------- | ------- | -------------------------------------------- |
| destinationFolder | Object  | Destination folder for the alias or shortcut |
| aliasName         | Text    | Name of the alias or shortcut                |
| aliasType         | Longint | Type of the alias link                       |
| Result            | Object  | Alias or shortcut file reference             |


<!-- END REF -->

<!-- REF File.createAlias.Desc -->

#### Description

The file.createAlias( ) method <!-- REF File.createAlias.Summary -->creates an alias (macOS) or a shortcut (Windows) to the file with the specified aliasName name in the folder designated by the destinationFolder object

<!-- END REF -->.

Pass the name of the alias or shortcut to create in the aliasName parameter.

By default on macOS, the method creates a standard alias. You can also create a symbolic link by using the aliasType parameter. The following constants are available: 

| Constant         | Value | Comment                          |
| ---------------- | ----- | -------------------------------- |
| fk alias link    | 0     | Alias link (macOS only)(default) |
| fk symbolic link | 1     | Symbolic link (macOS only)       |


On Windows, a shortcut (.lnk file) is always created (the aliasType parameter is ignored).

Returned object

The file.createAlias( ) method returns a File object with the file.isAlias property set to true.

#### Example

You want to create an alias to a file in your database folder: ```4d $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt") $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")

 ```
 <!-- END REF -->

## delete()
<!-- REF File.delete.Syntax -->
file.delete ()<!-- END REF -->

<!-- REF File.delete.Desc -->
#### Description

 The file.delete( ) method <!-- REF File.delete.Summary -->deletes the file.<!-- END REF -->

If the file is currently open, an error is generated.

If the file does not exist on disk, the method does nothing (no error is generated).

WARNING: file.delete( ) can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. file.delete( ) should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

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

## moveTo()

<!--REF File.moveTo.Syntax -->

**moveTo** ( *destinationFolder* {; *newName*}) &rarr; Result<!-- END REF -->

<!--REF File.moveTo.Parameters -->

| Parameter         | Type   | Description                  |
| ----------------- | ------ | ---------------------------- |
| destinationFolder | Object | Destination folder           |
| newName           | Text   | Full name for the moved file |
| Result            | Object | Moved file                   |


<!-- END REF -->

<!-- REF File.moveTo.Desc -->

#### Description

The file.moveTo( ) method <!-- REF File.moveTo.Summary -->moves or renames the File object into the specified destinationFolder.

<!-- END REF -->

The destinationFolder must exist on disk, otherwise an error is generated.

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the newName parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

Returned object

The method returns the moved File object.

#### Example

You want to create an alias to a file in your database folder: ```4d $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt") $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")

 ```
<!-- END REF -->

## rename()
<!--REF File.rename.Syntax -->
 **rename** ( newName ) &rarr; Result<!-- END REF -->

<!--REF File.rename.Parameters -->
| Parameter | Type | Description |
| ---- | ----------- |----------- |
|newName | Text |New full name for the file |
|Result | Object |Renamed file|
<!-- END REF -->

<!-- REF File.rename.Desc -->
#### Description
The file.rename( ) method <!-- REF File.rename.Summary -->enames the file with the name you passed in newName and returns the renamed File object.<!-- END REF -->

The newName parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the method modifies the full name of the file, i.e. if you do not pass an extension in newName, the file will have a name without an extension.

Returned object

The method returns the renamed File object.

#### Example
You want to rename "ReadMe.txt" in "ReadMe_new.txt":
```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
 ```

<!-- END REF -->

## setContent()

<!--REF File.setContent.Syntax -->

**file.setContent (content)** <!-- END REF -->

<!--REF File.setContent.Parameters -->

| Parameter | Type | Description               |
| --------- | ---- | ------------------------- |
| content   | BLOB | New contents for the file |


<!-- END REF -->

<!-- REF File.setContent.Desc -->

#### Description

The file.setContent( ) method <!-- REF File.setContent.Summary -->rewrites the entire content of the file using the data stored in the content BLOB. For information on BLOBs, please refer to the BLOB Commands section. 

<!-- END REF -->

#### Example

```4d $myFile:=Folder(fk documents folder).file("Archives/data.txt") $myFile.setContent([aTable]aBlobField)

 ```
<!-- END REF -->

## setText()
<!--REF File.setText.Syntax -->
 **setText** ( text {; charSet {;breakMode}}) &rarr; blob<!-- END REF -->

<!--REF File.setText.Parameters -->
| Parameter | Type | Description |
| ---- | ----------- |----------- |
|text | Text |Text to store in the file |
|charSet | Text, Longint |Name or number of character set|
|breakMode | Longint |Processing mode for line breaks|<!-- END REF -->

<!-- REF File.setText.Desc -->
#### Description
The file.setText( ) method <!-- REF File.setText.Summary -->writes text as the new contents of the file.<!-- END REF -->

If the file referenced in the File object does not exist on the disk, it is created by the method. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In text, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

In charSet, pass the character set to be used for writing the contents. You can pass a string containing the standard character set name (for example “ISO-8859-1” or “UTF-8”) or its MIBEnum ID (longint). For more information about the list of character sets supported by 4D, refer to the description of the CONVERT FROM TEXT command.  If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file. If you do not specify a character set, by default 4D uses the "UTF-8" character set and a BOM. 

In breakMode, you can pass a longint indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the "System Documents" theme are available:

| Constant | Type | Value | Comment|
| ---- | ----------- |----------- |----------- |
|Document unchanged | Longint |0| No processing |
|Document with native format | Longint |1| (Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows |
|Document with CRLF | Longint |2| Line breaks are converted to Windows format: CRLF (carriage return + line feed) |
|Document with CR | Longint |3| Line breaks are converted to OS X format: CR (carriage return) |
|Document with LF | Longint |4| Line breaks are converted to Unix format: LF (line feed) |

#### Example
```4d
  $myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
 $myFile.setText("Hello world")
 ```

<!-- END REF -->