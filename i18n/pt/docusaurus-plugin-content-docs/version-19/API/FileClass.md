---
id: FileClass
title: File
---

`File` objects are created with the [`File`](#file) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### Exemplo

The following example creates a preferences file in the project folder:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Objeto File

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.create().Summary -->|
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.createAlias().Summary -->|
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationDate.Summary -->|
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationTime.Summary -->|
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.delete().Summary -->|
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.getAppInfo().Summary -->|
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->|
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getIcon().Summary -->|
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->|
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->|
| [<!-- INCLUDE #document.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
| [<!-- INCLUDE #document.original.Syntax -->](#original)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
| [<!-- INCLUDE #document.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary -->|
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.platformPath.Summary -->|
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.rename().Summary -->|
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setAppInfo().Summary -->|
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setContent().Summary -->|
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setText().Summary -->|
| [<!-- INCLUDE #document.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.size.Summary -->|

## File

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; * } ) : 4D.File<!-- END REF -->


<!-- REF #_command_.File.Params -->
| Parâmetros   | Tipo     |    | Descrição                                       |
| ------------ | -------- |:--:| ----------------------------------------------- |
| path         | Text     | -> | Rota do arquivo                                 |
| fileConstant | Integer  | -> | 4D file constant                                |
| pathType     | Integer  | -> | `fk posix path` (default) or `fk platform path` |
| *            |          | -> | * to return file of host database               |
| Resultados   | 4D. File | <- | New file object|<!-- END REF -->

|

#### Descrição

The `File` command <!-- REF #_command_.File.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. The command accepts two syntaxes:

**File ( path { ; pathType } { ; \* })**

In the *path* parameter, pass a file path string. You can use a custom string or a filesystem (e.g., "/DATA/myfile.txt").

> Only absolute pathnames are supported with the `File` command.

By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. The following constants are available:

| Constante        | Value | Comentário                                                                              |
| ---------------- | ----- | --------------------------------------------------------------------------------------- |
| fk platform path | 1     | Path expressed with a platform-specific syntax (mandatory in case of platform pathname) |
| fk posix path    | 0     | Path expressed with POSIX syntax (default)                                              |

**File ( fileConstant { ; \* } )**

In the *fileConstant* parameter, pass a 4D built-in or system file, using one of the following constants:

| Constante                         | Value | Comentário                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19    | Backup history file (see Configuration and trace files). Stored in the backup destination folder.                                                                                                                                                                                                                                                                                                        |
| Backup log file                   | 13    | Current backup journal file. Stored in the application Logs folder.                                                                                                                                                                                                                                                                                                                                      |
| Backup settings file              | 1     | Default backup.4DSettings file (xml format), stored in the Settings folder of the project                                                                                                                                                                                                                                                                                                                |
| Backup settings file for data     | 17    | backup.4DSettings file (xml format) for the data file, stored in the Settings folder of the data folder                                                                                                                                                                                                                                                                                                  |
| Build application log file        | 14    | Current log file in xml format of the application builder. Stored in the Logs folder.                                                                                                                                                                                                                                                                                                                    |
| Build application settings file   | 20    | Default settings file of the application builder ("buildApp.4DSettings"). Stored in the Settings folder of the project.                                                                                                                                                                                                                                                                                  |
| Compacting log file               | 6     | Log file of the most recent compacting done with the Compact data file command or the Maintenance and security center. Stored in the Logs folder.                                                                                                                                                                                                                                                        |
| Current backup settings file      | 18    | backup.4DSettings file currently used by the application. It can be the backup settings file (default) or a custom user backup settings file defined for the data file                                                                                                                                                                                                                                   |
| Debug log file                    | 12    | Log file created by the `SET DATABASE PARAMETER(Debug log recording)` command. Stored in the Logs folder.                                                                                                                                                                                                                                                                                                |
| Diagnostic log file               | 11    | Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Stored in the Logs folder.                                                                                                                                                                                                                                                                                           |
| Directory file                    | 16    | directory.json file, containing the description of users and groups (if any) for the project application. It can be located either in the user settings folder (default, global to the project), or in the data settings folder (specific to a data file).                                                                                                                                               |
| HTTP debug log file               | 9     | Log file created by the `WEB SET OPTION(Web debug log)` command. Stored in the Logs folder.                                                                                                                                                                                                                                                                                                              |
| HTTP log file                     | 8     | Log file created by the `WEB SET OPTION(Web log recording)` command. Stored in Logs folder.                                                                                                                                                                                                                                                                                                              |
| IMAP Log file                     | 23    | Log file created by the `SET DATABASE PARAMETER(IMAP Log)` command. Stored in the Logs folder.                                                                                                                                                                                                                                                                                                           |
| Last backup file                  | 2     | Last backup file, named `\<applicationName>[bkpNum].4BK`, stored at a custom location.                                                                                                                                                                                                                                                                                                            |
| Last journal integration log file | 22    | Full pathname of the last journal integration log file (stored in the Logs folder of the restored application), if any. This file is created, in auto-repair mode, as soon as a log file integration occurred                                                                                                                                                                                            |
| Repair log file                   | 7     | Log file of database repairs made on the database in the Maintenance and Security Center (MSC). Stored in the Logs folder.                                                                                                                                                                                                                                                                               |
| Request log file                  | 10    | Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. If executed on the server, the server log file is returned (stored in the Logs folder on the server). If executed on the client, the client log file is returned (stored in the client local Logs folder). |
| SMTP log file                     | 15    | Log file created by the `SET DATABASE PARAMETER(SMTP Log)` command. Stored in the Logs folder.                                                                                                                                                                                                                                                                                                           |
| User settings file                | 3     | settings.4DSettings file for all data files, stored in Preferences folder next to structure file if enabled.                                                                                                                                                                                                                                                                                             |
| User settings file for data       | 4     | settings.4DSettings file for current data file, stored in Preferences folder next to the data file.                                                                                                                                                                                                                                                                                                      |
| Verification log file             | 5     | Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Stored in the Logs folder.                                                                                                                                                                                                                                             |

If the target *fileConstant* does not exist, a null object is returned. No errors are raised.

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Otherwise, if you omit the `*` parameter, a null object is always returned.

## 4D. File.new()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |
</details>

<!-- REF #4D.File.new().Syntax -->
**4D.File.new** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer { ; * } ) : 4D.File<!-- END REF -->

#### Descrição

The `4D.File.new()` function <!-- REF #4D.File.new().Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. It is identical to the [`File`](#file) command (shortcut).

> It is recommended to use the [`File`](#file) shortcut command instead of `4D. File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->
## .create()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF file.create().Note -->
**Not available for ZIP archives**<!-- END REF -->

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->


<!--REF #FileClass.create().Params -->
| Parâmetros | Tipo     |    | Descrição                                                                             |
| ---------- | -------- | -- | ------------------------------------------------------------------------------------- |
| Resultados | Booleano | <- | True if the file was created successfully, false otherwise|<!-- END REF -->

|

#### Descrição

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the file already exists on disk, the function does nothing (no error is thrown) and returns false.

**Valor retornado**

* **True** if the file is created successfully;
* **False** if a file with the same name already exists or if an error occured.

#### Exemplo

Creation of a preferences file in the database folder:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```
<!-- END REF -->

<!-- REF file.createAlias().Desc -->
## .createAlias()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D. Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D. File<!-- END REF -->


<!--REF #FileClass.createAlias().Params -->
| Parâmetros        | Tipo       |    | Descrição                                                   |
| ----------------- | ---------- | -- | ----------------------------------------------------------- |
| destinationFolder | 4D. Folder | -> | Destination folder for the alias or shortcut                |
| aliasName         | Text       | -> | Name of the alias or shortcut                               |
| aliasType         | Integer    | -> | Type of the alias link                                      |
| Resultados        | 4D. File   | <- | Alias or shortcut file reference|<!-- END REF -->

|

#### Descrição

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

| Constante          | Value | Comentário                 |
| ------------------ | ----- | -------------------------- |
| `fk alias link`    | 0     | Alias link (default)       |
| `fk symbolic link` | 1     | Symbolic link (macOS only) |

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Objeto devolvido**

A `4D. File` object with the `isAlias` property set to **true**.

#### Exemplo

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.delete().Syntax -->**.delete( )**<!-- END REF -->


<!-- REF #FileClass.delete().Params -->
| Parâmetros | Tipo |  | Descrição                                                  |
| ---------- | ---- |  | ---------------------------------------------------------- |
|            |      |  | Does not require any parameters|<!-- END REF -->

|

#### Descrição

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

If the file is currently open, an error is generated.

If the file does not exist on disk, the function does nothing (no error is generated).
> **WARNING**: `.delete( )` can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. `.delete( )` should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

#### Exemplo

You want to delete a specific file in the database folder:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("User preference file deleted.")
 End if
 End if
```
<!-- END REF -->

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- REF file.getAppInfo().Desc -->
## .getAppInfo()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |
</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->


<!--REF #FileClass.getAppInfo().Params -->
| Parâmetros | Tipo   |    | Descrição                                                                        |
| ---------- | ------ | -- | -------------------------------------------------------------------------------- |
| Resultados | Objeto | <- | Contents of .exe/.dll version resource or .plist file|<!-- END REF -->

|

#### Descrição

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function returns an empty object (no error is generated).

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.

**Returned object with a .exe or .dll file**

> Reading a .exe or .dll is only possible on Windows.

All property values are Text.

| Propriedade  | Tipo |
| ------------ | ---- |
| InternalName | Text |
| ProductName  | Text |

|CompanyName|Text| |LegalCopyright|Text| |ProductVersion|Text| |FileDescription|Text| |FileVersion|Text| |OriginalFilename|Text|

**Returned object with a .plist file**

The xml file contents is parsed and keys are returned as properties of the object, preserving their types (text, boolean, number). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

#### Exemplo

```4d
 // display copyright info of application .exe file (windows)
var $exeFile : 4D. File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info. LegalCopyright)

  // display copyright info of an info.plist (any platform)
var $infoPlistFile : 4D. File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=$infoPlistFile.getAppInfo()
ALERT($info.
```

#### Veja também

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D. Folder { ; *newName* : Text } ) : 4D. File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->
| Parâmetros        | Tipo       |    | Descrição                             |
| ----------------- | ---------- | -- | ------------------------------------- |
| destinationFolder | 4D. Folder | -> | Pasta de destino                      |
| newName           | Text       | -> | Full name for the moved file          |
| Resultados        | 4D. File   | <- | Moved file|<!-- END REF -->


|


#### Descrição

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

A *destinationFolder* deve existir em disco, senão um erro é gerado.

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the *newName* parameter. O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

**Objeto devolvido**

The moved `File` object.

#### Exemplo

```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```
<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- REF file.rename().Desc -->
## .rename()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D. File<!-- END REF -->


<!--REF #FileClass.rename().Params -->
| Parâmetros | Tipo     |    | Descrição                               |
| ---------- | -------- | -- | --------------------------------------- |
| newName    | Text     | -> | New full name for the file              |
| Resultados | 4D. File | <- | Renamed file|<!-- END REF -->

|

#### Descrição

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.

**Objeto devolvido**

The renamed `File` object.

#### Exemplo

You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->
## .setAppInfo()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |
</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->


<!--REF #FileClass.setAppInfo().Params -->
| Parâmetros | Tipo   |    | Descrição                                                                                   |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------- |
| info       | Objeto | -> | Properties to write in .exe/.dll version resource or .plist file|<!-- END REF -->

|

#### Descrição

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. The function must be used with an existing .exe, .dll or .plist file.

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.

***info* parameter object with a .exe or .dll file**

> Writing a .exe or .dll file information is only possible on Windows.

Each valid property set in the *info* object parameter is written in the version resource of the .exe or .dll file. Available properties are (any other property will be ignored):

| Propriedade      | Tipo |
| ---------------- | ---- |
| InternalName     | Text |
| ProductName      | Text |
| CompanyName      | Text |
| LegalCopyright   | Text |
| ProductVersion   | Text |
| FileDescription  | Text |
| FileVersion      | Text |
| OriginalFilename | Text |

If you pass a null or empty text as value, an empty string is written in the property. If you pass a value type different from text, it is stringified.

***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Any key name is accepted. Value types are preserved when possible.

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Other existing keys in the .plist file are left untouched.

> To define a Date type value, the format to use is a json timestamp string formated in ISO UTC without milliseconds ("2003-02-01T01:02:03Z") like in the Xcode plist editor.

#### Exemplo

```4d
  // set copyright and version of a .exe file (Windows)
var $exeFile : 4D. File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=New object
$info. LegalCopyright:="Copyright 4D 2021"
$info. ProductVersion:="1.0.0"
$exeFile.setAppInfo($info)
```

```4d
  // set some keys in an info.plist file (all platforms)
var $infoPlistFile : 4D. File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info. Copyright:="Copyright 4D 2021" //text
$info. ProductVersion:=12 //integer
$info. ShipmentDate:="2021-04-22T06:00:00Z" //timestamp
$infoPlistFile.setAppInfo($info)
```

#### Veja também

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->
## .setContent()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->


<!--REF #FileClass.setContent().Params -->
| Parâmetros | Tipo |    | Descrição                                            |
| ---------- | ---- | -- | ---------------------------------------------------- |
| content    | BLOB | -> | New contents for the file|<!-- END REF -->


|


#### Descrição

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. Para informações sobre BLOBs, consultar a secção [BLOB](Concepts/dt_blob.md) .

#### Exemplo

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->

<!-- REF file.setText().Desc -->
## .setText()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->


<!--REF #FileClass.setText().Params -->
| Parâmetros  | Tipo    |    | Descrição                                                              |
| ----------- | ------- | -- | ---------------------------------------------------------------------- |
| text        | Text    | -> | Text to store in the file                                              |
| charSetName | Text    | -> | Nome do conjunto de caracteres                                         |
| charSetNum  | Integer | -> | Número de conjuntos de caracteres                                      |
| breakMode   | Integer | -> | Modo de processamento para quebras de linha|<!-- END REF -->


|


#### Descrição

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

Optionally, you can designate the character set to be used for writing the contents. Você pode passar também:

* in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or ""UTF-8"),
* ou em *charSetNum*, o MIBEnum ID (número) do nome de configuração padrão.

> Para a lista de conjuntos de caracteres suportados por 4D, consulte a descrição do comando `CONVERT FROM TEXT`.

If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file. If you do not specify a character set, by default 4D uses the "UTF-8" character set and a BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme are available:

| Constante                     | Value | Comentário                                                                                                                                               |
| ----------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Não processado                                                                                                                                           |
| `Document with native format` | 1     | (Default) Line breaks are converted to the native format of the operating system: LF (line feed) on macOS, CRLF (carriage return + line feed) on Windows |
| `Documento com CRLF`          | 2     | Line breaks are converted to CRLF (carriage return + line feed), the default Windows format                                                              |
| `Documento com CR`            | 3     | Line breaks are converted to CR (carriage return), the default Classic Mac OS format                                                                     |
| `Documento com LF`            | 4     | Line breaks are converted to LF (line feed), the default Unix and macOS format                                                                           |

Por padrão, ao omitir o parâmetro *breakMode* , as quebras de linha são processadas no modo nativo (1).

#### Exemplo

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
