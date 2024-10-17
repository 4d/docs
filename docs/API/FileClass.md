---
id: FileClass
title: File
---

`File` objects are created with the [`File`](../commands/file.md) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### Example

The following example creates a preferences file in the project folder:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Pathnames

`File` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.



### File object

||
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #FileClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FileClass.create().Summary -->|
|[<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FileClass.createAlias().Summary -->|
|[<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #document.creationDate.Summary -->|
|[<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #document.creationTime.Summary -->|
|[<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FileClass.delete().Summary -->|
|[<!-- INCLUDE #document.exists.Syntax -->](#exists)<br/><!-- INCLUDE #document.exists.Summary -->|
|[<!-- INCLUDE #document.extension.Syntax -->](#extension)<br/><!-- INCLUDE #document.extension.Summary -->|
|[<!-- INCLUDE #document.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #document.fullName.Summary -->|
|[<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)<br/><!-- INCLUDE #FileClass.getAppInfo().Summary -->|
|[<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #document.getIcon().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #document.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #document.hidden.Summary -->|
|[<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #document.isAlias.Summary -->|
|[<!-- INCLUDE #document.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #document.isFile.Summary -->|
|[<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #document.isFolder.Summary -->|
|[<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)<br/><!-- INCLUDE #document.isWritable.Summary -->|
|[<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #document.modificationDate.Summary -->|
|[<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #document.modificationTime.Summary -->|
|[<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FileClass.moveTo().Summary -->|
|[<!-- INCLUDE #document.name.Syntax -->](#name)<br/><!-- INCLUDE #document.name.Summary -->|
|[<!-- INCLUDE #FileClass.open().Syntax -->](#open)<br/><!-- INCLUDE #FileClass.open().Summary -->|
|[<!-- INCLUDE #document.original.Syntax -->](#original)<br/><!-- INCLUDE #document.original.Summary -->|
|[<!-- INCLUDE #document.parent.Syntax -->](#parent)<br/><!-- INCLUDE #document.parent.Summary -->|
|[<!-- INCLUDE #document.path.Syntax -->](#path)<br/><!-- INCLUDE #document.path.Summary -->|
|[<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #document.platformPath.Summary -->|
|[<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FileClass.rename().Summary -->|
|[<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)<br/><!-- INCLUDE #FileClass.setAppInfo().Summary -->|
|[<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)<br/><!-- INCLUDE #FileClass.setContent().Summary -->|
|[<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)<br/><!-- INCLUDE #FileClass.setText().Summary -->|
|[<!-- INCLUDE #document.size.Syntax -->](#size)<br/><!-- INCLUDE #document.size.Summary -->|


## 4D.File.new()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added
</details>

<!-- REF #4D.File.new().Syntax -->
**4D.File.new** ( *path* : Text { ; *pathType* : Integer } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer ) : 4D.File<!-- END REF -->

#### Description

The `4D.File.new()` function <!-- REF #4D.File.new().Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. It is identical to the [`File`](../commands/file.md) command (shortcut).

> It is recommended to use the [`File`](../commands/file.md) shortcut command instead of `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->
## .create()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF file.create().Note -->
**Not available for ZIP archives**<!-- END REF -->


<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->


<!--REF #FileClass.create().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if the file was created successfully, false otherwise|
<!-- END REF -->

#### Description

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the file already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

* **True** if the file is created successfully;
* **False** if a file with the same name already exists or if an error occured.

#### Example

Creation of a preferences file in the database folder:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```
<!-- END REF -->

<!-- REF file.createAlias().Desc -->
## .createAlias()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->


<!--REF #FileClass.createAlias().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|4D.Folder|->|Destination folder for the alias or shortcut|
|aliasName|Text|->|Name of the alias or shortcut|
|aliasType|Integer|->|Type of the alias link|
|Result|4D.File|<-|Alias or shortcut file reference|
<!-- END REF -->

#### Description

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`fk alias link`|0|Alias link (default)|
|`fk symbolic link`|1|Symbolic link (macOS only)|

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### Example

You want to create an alias to a file in your database folder:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```
<!-- END REF -->

<!-- INCLUDE document.creationDate.Desc -->

<!-- INCLUDE document.creationTime.Desc -->

<!-- REF file.delete().Desc -->
## .delete()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added

</details>

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->


<!-- REF #FileClass.delete().Params -->
|Parameter|Type||Description|
|---|----|:---:|---|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

If the file does not exist on disk, the function does nothing (no error is generated).

If the file is currently open, the result depends on the OS:

- on Windows, an error is generated,
- on macOS, no error is generated and the file is deleted.  

:::caution

`.delete()` can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. `.delete()` should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

:::

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

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- REF file.getAppInfo().Desc -->
## .getAppInfo()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Added
</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->


<!--REF #FileClass.getAppInfo().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Object|<-|Contents of .exe/.dll version resource or .plist file|
<!-- END REF -->


#### Description

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function returns an empty object (no error is generated).

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.  

**Returned object with a .exe or .dll file**

> Reading a .exe or .dll is only possible on Windows.

All property values are Text.

|Property|Type|
|---|---|
|InternalName|Text|
|ProductName|Text|
|CompanyName|Text|
|LegalCopyright|Text|
|ProductVersion|Text|
|FileDescription|Text|
|FileVersion|Text|
|OriginalFilename|Text|

**Returned object with a .plist file**

The xml file contents is parsed and keys are returned as properties of the object, preserving their types (text, boolean, number). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

#### Example

```4d
 // display copyright info of application .exe file (windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info.LegalCopyright)

  // display copyright info of an info.plist (any platform)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=$infoPlistFile.getAppInfo()
ALERT($info.Copyright)
```

#### See also

[.setAppInfo()](#setappinfo)

<!-- END REF -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE document.hidden.Desc -->

<!-- INCLUDE document.isAlias.Desc -->

<!-- INCLUDE document.isFile.Desc -->

<!-- INCLUDE document.isFolder.Desc -->

<!-- INCLUDE document.isWritable.Desc -->

<!-- INCLUDE document.modificationDate.Desc -->

<!-- INCLUDE document.modificationTime.Desc -->

<!-- REF file.moveTo().Desc -->
## .moveTo()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->


<!--REF #FileClass.moveTo().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|4D.Folder|->|Destination folder|
|newName|Text|->|Full name for the moved file|
|Result|4D.File|<-|Moved file|
<!-- END REF -->


#### Description

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

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

<!-- INCLUDE document.name.Desc -->

<!-- REF file.open().Desc -->
## .open()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R7|Added
</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->


<!--REF #FileClass.open().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|mode|Text|->|Opening mode: "read", "write", "append"|
|options|Object|->|Opening options|
|Result|[4D.FileHandle](FileHandleClass)|<-|New File handle object|
<!-- END REF -->

#### Description

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified *mode* or with the specified *options*<!-- END REF -->. You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

If you use the *mode* (text) parameter, pass the opening mode for the file handle:


|*mode*|Description|
|---|---|
|"read"|(Default) Creates a file handle to read values from the file. If the file does not exist on disk, an error is returned. You can open as many file handles as you want in "read" mode on the same File object.|
|"write"|Creates a file handle to write values to the file (starting at the beginning of the file content). If the file does not exist on disk, it is created. You can open only one file handle in "write" mode on the same File object.|
|"append"|Creates a file handle to write values to the file (starting at the end of the file content). If the file does not exist on disk, it is created. You can open only one file handle in "append" mode on the same File object.|

> The *mode* value is case sensitive.

If you use the *options* (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

|*options*|Type|Description|Default|
|---|---|---|---|
|`.mode`|Text|Opening mode (see *mode* above)|"read"|
|`.charset`|Text|Charset used when reading from or writing to the file. Use the standard name of the set (for example "ISO-8859-1" or "UTF-8")|"UTF-8"|
|`.breakModeRead`|Text or Number|Processing mode for line breaks used when reading in the file (see below)|"native" or 1|
|`.breakModeWrite`|Text or Number|Processing mode for line breaks used when writing to the file (see below)|"native" or 1|

The function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter. The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. You can use one of the following values (text or number):

|Break mode as text|Break mode as number (constant)|Description|
|---|---|---|
|"native"|1 (`Document with native format`)|(Default) Line breaks are converted to the native format of the operating system: LF (line feed) under macOS, CRLF (carriage return + line feed) under Windows|
|"crlf"|2 (`Document with CRLF`)|Line breaks are converted to CRLF (carriage return + line feed), the default Windows format|
|"cr"|3 (`Document with CR`)|Line breaks are converted to CR (carriage return), the default Classic Mac OS format|
|"lf"|4 (`Document with LF`)|Line breaks are converted to LF (line feed), the default Unix and macOS format|

> The *break mode as text* value is case sensitive.

#### Example

You want to create a file handle for reading the "ReadMe.txt" file:

```4d
var $f : 4D.File
var $fhandle : 4D.FileHandle

$f:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
$fhandle:=$f.open("read")

```
<!-- END REF -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- REF file.rename().Desc -->
## .rename()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->


<!--REF #FileClass.rename().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newName|Text|->|New full name for the file|
|Result|4D.File|<-|Renamed file|
<!-- END REF -->

#### Description

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

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

<!-- REF file.setAppInfo().Desc -->
## .setAppInfo()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Support of WinIcon|
|19|Added|
</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->


<!--REF #FileClass.setAppInfo().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|info|Object|->|Properties to write in .exe/.dll version resource or .plist file|
<!-- END REF -->

#### Description

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function does nothing (no error is generated).

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.

***info* parameter object with a .exe or .dll file**

> Writing a .exe or .dll file information is only possible on Windows.

Each valid property set in the *info* object parameter is written in the version resource of the .exe or .dll file. Available properties are (any other property will be ignored):

|Property|Type|Comment|
|---|---|---|
|InternalName|Text||
|ProductName|Text||
|CompanyName|Text||
|LegalCopyright|Text||
|ProductVersion|Text||
|FileDescription|Text||
|FileVersion|Text||
|OriginalFilename|Text||
|WinIcon|Text|Posix path of .ico file. This property applies only to 4D generated executable files.|

For all properties except `WinIcon`, if you pass a null or empty text as value, an empty string is written in the property. If you pass a value type different from text, it is stringified.

For the `WinIcon` property, if the icon file does not exist or has an incorrect format, an error is generated.

***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Any key name is accepted. Value types are preserved when possible.

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Other existing keys in the .plist file are left untouched.  

> To define a Date type value, the format to use is a json timestamp string formated in ISO UTC without milliseconds ("2003-02-01T01:02:03Z") like in the Xcode plist editor.

#### Example

```4d
  // set copyright, version and icon of a .exe file (Windows)
var $exeFile; $iconFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$iconFile:=File("/RESOURCES/myApp.ico")
$info:=New object
$info.LegalCopyright:="Copyright 4D 2023"
$info.ProductVersion:="1.0.0"
$info.WinIcon:=$iconFile.path
$exeFile.setAppInfo($info)
```

```4d
  // set some keys in an info.plist file (all platforms)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2023" //text
$info.ProductVersion:=12 //integer
$info.ShipmentDate:="2023-04-22T06:00:00Z" //timestamp
$info.CFBundleIconFile:="myApp.icns" //for macOS
$infoPlistFile.setAppInfo($info)
```

#### See also

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->
## .setContent()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added
</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->


<!--REF #FileClass.setContent().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|content|BLOB|->|New contents for the file|
<!-- END REF -->

#### Description

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

#### Example

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->

<!-- REF file.setText().Desc -->
## .setText()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R3|Default for new projects: no BOM and (macOS) LF for EOL|
|17 R5|Added|

</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->



<!--REF #FileClass.setText().Params -->
|Parameter|Type||Description|
|---------|----|---|--------|
|text|Text|->|Text to store in the file|
|charSetName|Text|->|Name of character set|
|charSetNum|Integer|->|Number of character set|
|breakMode|Integer|->|Processing mode for line breaks|
<!-- END REF -->


#### Description

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

Optionally, you can designate the character set to be used for writing the contents. You can pass either:

* in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
* or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file unless the character set used contains the suffix "-no-bom" (e.g. "UTF-8-no-bom"). If you do not specify a character set, by default 4D uses the "UTF-8" character set without BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`Document unchanged`|0|No processing|
|`Document with native format`|1|(Default) Line breaks are converted to the native format of the operating system: LF (line feed) on macOS, CRLF (carriage return + line feed) on Windows|
|`Document with CRLF`|2|Line breaks are converted to CRLF (carriage return + line feed), the default Windows format|
|`Document with CR`|3|Line breaks are converted to CR (carriage return), the default Classic Mac OS format|
|`Document with LF`|4|Line breaks are converted to LF (line feed), the default Unix and macOS format|

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

> **Compatibility Note**: Compatibility options are available for EOL and BOM management. See [Compatibility page](https://doc.4d.com/4dv19R/help/title/en/page3239.html) on doc.4d.com.

#### Example

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
