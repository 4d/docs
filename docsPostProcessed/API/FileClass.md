---
id: FileClass
title: File
---

`File` objects are created with the [`File`](#file) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### Example

The following example creates a preferences file in the project folder:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### File object

||
|---|
|[**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;copies the `File` object into the specified *destinationFolder* |
|[**.create()** : Boolean ](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a file on disk according to the properties of the `File` object|
|[**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates an alias (macOS) or a shortcut (Windows)|
|[**.creationDate** : Date](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation date of the file|
|[**.creationTime** : Time](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation  time of the file|
|[**.delete( )**](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;deletes the file|
|[**.exists** : Boolean](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the file exists on disk|
|[**.extension** : Text](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;the extension of the file name (if any)|
|[**.fullName** : Text](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;the full name of the file, including its extension (if any)|
|[**.getAppInfo**() : Object](#getappinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the contents of a **.exe** or **.plist** file information as an object|
|[**.getContent( )** : Blob](#getcontent)<p>returns a `BLOB` containing the entire content of a file|
|[**.getIcon**( { *size* : Integer } ) : Picture](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;the icon of the file|
|[**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text](#gettext)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the contents of the file as text |
|[**.hidden** : Boolean](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the file is set as "hidden" at the system level|
|[**.isAlias** : Boolean](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the file is an alias, a shortcut, or a symbolic link
|[**.isFile** : Boolean](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;always true for a file|
|[**.isFolder** : Boolean](#isFolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;always false for a file|
|[**.isWritable** : Boolean](#iswritable)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the file exists on disk and is writable|
|[**.modificationDate** : Date](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the date of the file's last modification|
|[**.modificationTime** : Time](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the time of the file's last modification|
|[**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;moves or renames the `File` object into the specified *destinationFolder*|
|[**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name of the file without extension (if any)|
|[**.original** : 4D.File<br>**.original** : 4D.Folder](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;the target element for an alias, a shortcut, or a symbolic link file|
|[**.parent** : 4D.Folder](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;the parent folder object of the file|
|[**.path** : Text](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;the POSIX path of the file|
|[**.platformPath** : Text](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the file expressed with the current platform syntax|
|[**.rename**( *newName* : Text ) : 4D.File](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;renames the file with the name you passed in *newName* and returns the renamed `File` object|
|[**.setAppInfo**( *info* : Object )](#setappinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;writes the *info* properties as information contents of a **.exe** or **.plist** file|
|[**.setContent** ( *content* : Blob ) ](#setcontent)<p>&nbsp;&nbsp;&nbsp;&nbsp;rewrites the entire content of the file using the data stored in the *content* BLOB|
|[**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } ) ](#settext)<p>&nbsp;&nbsp;&nbsp;&nbsp;writes *text* as the new contents of the file|
|[**.size** : Real](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;the size of the file expressed in bytes|



## File

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**File** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.File<br>**File** ( *fileConstant* : Integer { ; *\** } ) : 4D.File

|Parameter|Type||Description|
|---------|--- |:---:|------|
|path|Text|->|File path|
|fileConstant|Integer|->|4D file constant|
|pathType|Integer|->|`fk posix path` (default) or `fk platform path`|
|*||->|* to return file of host database|
|Result|4D.File|<-|New file object|


#### Description

The `File` command creates and returns a new object of the `4D.File` type. The command accepts two syntaxes:

**File ( path { ; pathType } { ; \* })**

In the *path* parameter, pass a file path string. You can use a custom string or a filesystem (e.g., "/DATA/myfile.txt").

> Only absolute pathnames are supported with the `File` command. 

By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. The following constants are available:

|Constant|Value|Comment|
|---|---|---|
|fk platform path|1|Path expressed with a platform-specific syntax (mandatory in case of platform pathname)|
|fk posix path|0|Path expressed with POSIX syntax (default)

**File ( fileConstant { ; \* } )**

In the *fileConstant* parameter, pass a 4D built-in or system file, using one of the following constants:

|Constant|Value|Comment|
|---|---|---|
|Backup history file|19|Backup history file (see Configuration and trace files). Stored in the backup destination folder. |
|Backup log file|13|Current backup journal file. Stored in the application Logs folder.|
|Backup settings file|1|Default backup.4DSettings file (xml format), stored in the Settings folder of the project|
|Backup settings file for data|17|backup.4DSettings file (xml format) for the data file, stored in the Settings folder of the data folder|
|Build application log file|14|Current log file in xml format of the application builder. Stored in the Logs folder. |
|Build application settings file|20|Default settings file of the application builder ("buildApp.4DSettings"). Stored in the Settings folder of the project.|
|Compacting log file|6|Log file of the most recent compacting done with the Compact data file command or the Maintenance and security center. Stored in the Logs folder.|
|Current backup settings file|18|backup.4DSettings file currently used by the application. It can be the backup settings file (default) or a custom user backup settings file defined for the data file|
|Debug log file|12|Log file created by the `SET DATABASE PARAMETER(Debug log recording)` command. Stored in the Logs folder. |
|Diagnostic log file|11|Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Stored in the Logs folder. |
|Directory file|16|directory.json file, containing the description of users and groups (if any) for the project application. It can be located either in the user settings folder (default, global to the project), or in the data settings folder (specific to a data file). |
|HTTP debug log file|9|Log file created by the `WEB SET OPTION(Web debug log)` command. Stored in the Logs folder. |
|HTTP log file|8|Log file created by the `WEB SET OPTION(Web log recording)` command. Stored in Logs folder.|
|IMAP Log file|23|Log file created by the `SET DATABASE PARAMETER(IMAP Log)` command. Stored in the Logs folder.|  
|Last backup file|2|Last backup file, named \<applicationName>[bkpNum].4BK, stored at a custom location.|
|Last journal integration log file|22|Full pathname of the last journal integration log file (stored in the Logs folder of the restored application), if any. This file is created, in auto-repair mode, as soon as a log file integration occurred|
|Repair log file|7|Log file of database repairs made on the database in the Maintenance and Security Center (MSC). Stored in the Logs folder.|
|Request log file|10|Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. If executed on the server, the server log file is returned (stored in the Logs folder on the server). If executed on the client, the client log file is returned (stored in the client local Logs folder). |
|SMTP log file|15|Log file created by the `SET DATABASE PARAMETER(SMTP Log)` command. Stored in the Logs folder. |
|User settings file|3|settings.4DSettings file for all data files, stored in Preferences folder next to structure file if enabled.|
|User settings file for data|4|settings.4DSettings file for current data file, stored in Preferences folder next to the data file.|
|Verification log file|5|Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Stored in the Logs folder. |

If the target *fileConstant* does not exist, a null object is returned. No errors are raised.

If the command is called from a component, pass the optional * parameter to get the path of the host database. Otherwise, if you omit the * parameter, a null object is always returned.  


## 4D.File.new()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added
</details>

**4D.File.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.File<br>**4D.File.new** ( *fileConstant* : Integer { ; *\** } ) : 4D.File

#### Description

The `4D.File.new()` function creates and returns a new object of the `4D.File` type. It is identical to the [`File`](#file) command (shortcut).

> It is recommended to use the [`File`](#file) shortcut command instead of `4D.File.new()`. 


## .copyTo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder | 4D.Folder |->|Destination folder|
|newName|Text|->|Name for the copy|
|overwrite|Integer|->|`fk overwrite` to replace existing elements|
|Result|4D.File|<-|Copied file|


#### Description

The `.copyTo()` function copies the `File` object into the specified *destinationFolder* .

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`fk overwrite`|4|Overwrite existing elements, if any|


**Returned value**

The copied `File` object.

#### Example

You want to copy a picture *file* from the user's document folder to the application folder:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

 



## .create()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**Not available for ZIP archives**

**.create()** : Boolean 
|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if the file was created successfully, false otherwise|

#### Description

The `.create()` function creates a file on disk according to the properties of the `File` object.

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





## .createAlias()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|4D.Folder|->|Destination folder for the alias or shortcut|
|aliasName|Text|->|Name of the alias or shortcut|
|aliasType|Integer|->|Type of the alias link|
|Result|4D.File|<-|Alias or shortcut file reference|


#### Description

The `.createAlias()` function creates an alias (macOS) or a shortcut (Windows) to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

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




## .creationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.creationDate** : Date

#### Description

The `.creationDate` property returns the creation date of the file.

This property is **read-only**. 






## .creationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.creationTime** : Time

#### Description

The `.creationTime` property  returns the creation  time of the file (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 





## .delete()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.delete( )**

|Parameter|Type||Description|
|---|----|---|---|
| |  ||Does not require any parameters|


#### Description

The `.delete()` function deletes the file.

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




## .exists

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.exists** : Boolean

#### Description

The `.exists` property returns true if the file exists on disk, and false otherwise.

This property is **read-only**. 







## .extension

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.extension** : Text
#### Description

The `.extension` property returns the extension of the file name (if any). An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

This property is **read-only**. 






## .fullName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.fullName** : Text
#### Description

The `.fullName` property returns the full name of the file, including its extension (if any).

This property is **read-only**. 




## .getAppInfo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19|Added
</details>

**.getAppInfo**() : Object
|Parameter|Type||Description|
|---|---|---|---|
|Result|Object|<-|Contents of .exe version resource or .plist file|


#### Description

The `.getAppInfo()` function returns the contents of a **.exe** or **.plist** file information as an object.

The function must be used with an existing .exe or .plist file. If the file does not exist on disk or is not a valid .exe or .plist file, the function returns an empty object (no error is generated). 

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.  

**Returned object with a .exe file**

> Reading a .exe is only possible on Windows.

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



## .getContent()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getContent( )** : Blob
|Parameter|Type||Description|
|---|----|---|---|
|Result | Blob |<-|File content|


#### Description

The `.getContent()` function  returns a `BLOB` containing the entire content of a file. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

**Returned value**

A `Blob`.

#### Example

To save a document's contents in a `BLOB` field:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```






## .getIcon()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getIcon**( { *size* : Integer } ) : Picture
|Parameter|Type||Description|
|---|----|---|---|
|size|Integer|->|Side length for the returned picture (pixels)|
|Result|Picture|<-|Icon|


#### Description

The `.getIcon()` function returns the icon of the file.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.  

**Returned value**

File icon [picture](../Concepts/picture.html).






## .getText()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text

|Parameter|Type||Description|
|---|---|---|---|
|charSetName |Text |-> |Name of character set|
|charSetNum |Integer |-> |Number of character set|
|breakMode|Integer |-> |Processing mode for line breaks|
|Result |Text  |<- |Text from the document|


#### Description
The `.getText()` function returns the contents of the file as text .

Optionally, you can designate the character set to be used for reading the contents. You can pass either:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or ""UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command. 

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in *charSetName* or *charSetNum* (this parameter is then ignored). 
If the document does not contain a BOM and if *charSetName* or *charSetNum* is omitted, by default 4D uses the "UTF-8" character set.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters in the document. The following constants of the "System Documents" theme are available:

|Constant | Value| Comment|
|---|---|---|
|`Document unchanged`|0|No processing|
|`Document with native format`|1|(Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows|
|`Document with CRLF`|2|Line breaks are converted to Windows format: CRLF (carriage return + line feed)|
|`Document with CR`|3|Line breaks are converted to OS X format: CR (carriage return)|
|`Document with LF`|4|Line breaks are converted to Unix format: LF (line feed)|

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

**Returned value**

Text of the file.

#### Example

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
```
... you get:

```4d
  // $Text = "id name price vat\r\n3 thé 1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"
  // \t = tab
  // \r = CR
```
 






## .hidden

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.hidden** : Boolean

#### Description

The `.hidden` property returns true if the file is set as "hidden" at the system level, and false otherwise. 

This property is **read-only**. 





## .isAlias

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isAlias** : Boolean

#### Description

The `.isAlias` property returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise. 

This property is **read-only**. 





## .isFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isFile** : Boolean

#### Description

The `.isFile` property returns always true for a file. 

This property is **read-only**. 






## .isFolder

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isFolder** : Boolean

#### Description

The `.isFolder` property returns always false for a file. 

This property is **read-only**. 






## .isWritable

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.isWritable** : Boolean

#### Description

The `.isWritable` property returns true if the file exists on disk and is writable. 

>The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file. 

This property is **read-only**. 

**Example**  

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```






## .modificationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.modificationDate** : Date

#### Description

The `.modificationDate` property returns the date of the file's last modification. 

This property is **read-only**. 






## .modificationTime

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.modificationTime** : Time

##### Description

The `.modificationTime` property returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). 

This property is **read-only**. 






## .moveTo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|4D.Folder|->|Destination folder|
|newName|Text|->|Full name for the moved file|
|Result|4D.File|<-|Moved file|


#### Description

The `.moveTo()` function moves or renames the `File` object into the specified *destinationFolder*.

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




## .name

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.name** : Text

#### Description

The `.name` property returns the name of the file without extension (if any). 

This property is **read-only**. 





## .original

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.original** : 4D.File<br>**.original** : 4D.Folder

#### Description

The `.original` property returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:

*	a file object 
*	a folder object 

For non-alias files, the property returns the same file object as the file.

This property is **read-only**. 





## .parent

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.parent** : 4D.Folder

#### Description

The `.parent` property returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

This property is **read-only**. 





## .path

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.path** : Text

#### Description

The `.path` property returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**. 





## .platformPath

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.platformPath** : Text

#### Description

The `.platformPath` property returns the path of the file expressed with the current platform syntax.

This property is **read-only**. 





 
## .rename()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.rename**( *newName* : Text ) : 4D.File
|Parameter|Type||Description|
|---|---|---|---|
|newName|Text|->|New full name for the file|
|Result|4D.File|<-|Renamed file|

#### Description

The `.rename()` function renames the file with the name you passed in *newName* and returns the renamed `File` object.

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


## .setAppInfo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19|Added
</details>

**.setAppInfo**( *info* : Object )
|Parameter|Type||Description|
|---|---|---|---|
|info|Object|->|Properties to write in .exe version resource or .plist file|


#### Description

The `.setAppInfo()` function writes the *info* properties as information contents of a **.exe** or **.plist** file.

The function must be used with an existing .exe or .plist file. If the file does not exist on disk or is not a valid .exe or .plist file, the function does nothing (no error is generated). 

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format. 

***info* parameter object with a .exe file**

> Writing a .exe file information is only possible on Windows.

Each valid property set in the *info* object parameter is written in the version resource of the .exe file. Available properties are (any other property will be ignored):

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

If you pass a null or empty text as value, an empty string is written in the property. If you pass a value type different from text, it is stringified. 


***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Any key name is accepted. Value types are preserved when possible. 

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Other existing keys in the .plist file are left untouched.  

> To define a Date type value, the format to use is a json timestamp string formated in ISO UTC without milliseconds ("2003-02-01T01:02:03Z") like in the Xcode plist editor. 

#### Example

```4d
  // set copyright and version of a .exe file (Windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=New object
$info.LegalCopyright:="Copyright 4D 2021" 
$info.ProductVersion:="1.0.0" 
$exeFile.setAppInfo($info)
```

```4d
  // set some keys in an info.plist file (all platforms)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2021" //text
$info.ProductVersion:=12 //integer
$info.ShipmentDate:="2021-04-22T06:00:00Z" //timestamp
$infoPlistFile.setAppInfo($info)
```

#### See also

[.getAppInfo()](#getappinfo)

 
## .setContent()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.setContent** ( *content* : Blob ) 
|Parameter|Type||Description|
|---|---|---|---|
|content|BLOB|->|New contents for the file|


#### Description

The `.setContent( )` function rewrites the entire content of the file using the data stored in the *content* BLOB. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.


#### Example

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```





 
## .setText()


<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } ) 

|Parameter|Type||Description|
|---------|----|---|--------|
|text|Text|->|Text to store in the file|
|charSetName|Text|->|Name of character set|
|charSetNum|Integer|->|Number of character set|
|breakMode|Integer|->|Processing mode for line breaks|
#### Description

The `.setText()` function writes *text* as the new contents of the file.

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





## .size

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>

**.size** : Real

#### Description

The `.size` property returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0.

This property is **read-only**. 





<style> h2 { background: #d9ebff;}</style>
