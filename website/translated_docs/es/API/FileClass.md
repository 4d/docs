---
id: FileClass
title: File
---

`File` objects are created with the [`File`](#file) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### Ejemplo

The following example creates a preferences file in the project folder:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Objeto File

|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.create().Summary -->|
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.createAlias().Summary -->|
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationDate.Summary -->|
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationTime.Summary -->|
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.delete().Summary -->|
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.getAppInfo().Summary -->|
| [<!-- INCLUDE #document.getContent().Syntax -->](#getContent)<p><!-- INCLUDE #document.getContent().Summary -->|
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getIcon().Summary -->|
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->
|
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->|
| [<!-- INCLUDE #document.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
| [<!-- INCLUDE #document.original.Syntax -->](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
| [<!-- INCLUDE #document.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary -->|
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.platformPath.Summary -->|
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.rename().Summary -->|
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setAppInfo().Summary -->|
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setContent().Summary -->|
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setText().Summary -->|
| [<!-- INCLUDE #document.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.size.Summary -->|



## File

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #_command_.File.Syntax -->
**File** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.File<br>**File** ( *fileConstant* : Integer { ; *\** } ) : 4D.File<!-- END REF -->


<!-- REF #_command_.File.Params -->
| Parámetros   | Tipo    |    | Descripción                                        |
| ------------ | ------- |:--:| -------------------------------------------------- |
| path         | Texto   | -> | Ruta del archivo                                   |
| fileConstant | Integer | -> | Constante del archivo 4D                           |
| pathType     | Integer | -> | `fk posix path` (por defecto) o `fk platform path` |
| *            |         | -> | * para devolver el archivo de la base local        |
| Resultado    | 4D.File | <- | Nuevo objeto de archivo                            |
<!-- END REF -->


#### Descripción

El comando `File` <!-- REF #_command_.File.Summary -->crea y devuelve un nuevo objeto de tipo `4D.File`<!-- END REF -->. El comando acepta dos sintaxis:

**File ( path { ; pathType } { ; \* })**

En el parámetro *path*, pase una ruta de archivo. Puede utilizar una cadena personalizada o un filesystem (por ejemplo, "/DATA/myfile.txt").

> Only absolute pathnames are supported with the `File` command.

Por defecto, 4D espera una ruta expresada con la sintaxis POSIX. Si trabaja con los nombres de ruta de plataforma (Windows o macOS), debe declararlo utilizando el parámetro *pathType*. Las siguientes constantes están disponibles:

| Constante        | Valor | Comentario                                                                                                        |
| ---------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Ruta expresada con una sintaxis específica de la plataforma (obligatoria en caso de nombre de ruta de plataforma) |
| fk posix path    | 0     | Ruta expresada con sintaxis POSIX (por defecto)                                                                   |

**File ( fileConstant { ; \* } )**

En el parámetro *fileConstant*, pase un archivo 4D interno o sistema, utilizando una de las siguientes constantes:

| Constante                         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19    | Archivo de historial de copias de seguridad (ver Archivos de configuración y rastreo). Se almacena en la carpeta de destino de la copia de seguridad.                                                                                                                                                                                                                                                    |
| Backup log file                   | 13    | Archivo historial de copias de seguridad actual. Almacenado en la carpeta Logs de la aplicación.                                                                                                                                                                                                                                                                                                         |
| Backup settings file              | 1     | Archivo backup.4DSettings por defecto (formato xml), almacenado en la carpeta Settings del proyecto                                                                                                                                                                                                                                                                                                      |
| Backup settings file for data     | 17    | archivo backup.4DSettings del archivo de datos (formato xml), almacenado en la carpeta Settings de la carpeta data                                                                                                                                                                                                                                                                                       |
| Build application log file        | 14    | Archivo de historial actual en formato xml del generador de aplicaciones. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                 |
| Build application settings file   | 20    | Default settings file of the application builder ("buildApp.4DSettings"). Stored in the Settings folder of the project.                                                                                                                                                                                                                                                                                  |
| Compacting log file               | 6     | Log file of the most recent compacting done with the Compact data file command or the Maintenance and security center. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                    |
| Current backup settings file      | 18    | backup.4DSettings file currently used by the application. It can be the backup settings file (default) or a custom user backup settings file defined for the data file                                                                                                                                                                                                                                   |
| Debug log file                    | 12    | Log file created by the `SET DATABASE PARAMETER(Debug log recording)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                            |
| Diagnostic log file               | 11    | Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                       |
| Directory file                    | 16    | directory.json file, containing the description of users and groups (if any) for the project application. It can be located either in the user settings folder (default, global to the project), or in the data settings folder (specific to a data file).                                                                                                                                               |
| HTTP debug log file               | 9     | Log file created by the `WEB SET OPTION(Web debug log)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                          |
| HTTP log file                     | 8     | Log file created by the `WEB SET OPTION(Web log recording)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                      |
| IMAP Log file                     | 23    | Log file created by the `SET DATABASE PARAMETER(IMAP Log)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                       |
| Last backup file                  | 2     | Last backup file, named \<applicationName>[bkpNum].4BK, stored at a custom location.                                                                                                                                                                                                                                                                                                                    |
| Last journal integration log file | 22    | Full pathname of the last journal integration log file (stored in the Logs folder of the restored application), if any. This file is created, in auto-repair mode, as soon as a log file integration occurred                                                                                                                                                                                            |
| Repair log file                   | 7     | Log file of database repairs made on the database in the Maintenance and Security Center (MSC). Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                           |
| Request log file                  | 10    | Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. If executed on the server, the server log file is returned (stored in the Logs folder on the server). If executed on the client, the client log file is returned (stored in the client local Logs folder). |
| SMTP log file                     | 15    | Log file created by the `SET DATABASE PARAMETER(SMTP Log)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                       |
| User settings file                | 3     | settings.4DSettings file for all data files, stored in Preferences folder next to structure file if enabled.                                                                                                                                                                                                                                                                                             |
| User settings file for data       | 4     | settings.4DSettings file for current data file, stored in Preferences folder next to the data file.                                                                                                                                                                                                                                                                                                      |
| Verification log file             | 5     | Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Almacenado en la carpeta Logs.                                                                                                                                                                                                                                         |

If the target *fileConstant* does not exist, a null object is returned. No se produce ningún error.

If the command is called from a component, pass the optional * parameter to get the path of the host database. Otherwise, if you omit the * parameter, a null object is always returned.


## 4D.File.new()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #4D.File.new().Syntax -->**4D.File.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.File<br>**4D.File.new** ( *fileConstant* : Integer { ; *\** } ) : 4D.File<!-- END REF -->


#### Descripción

La función `4D.File.new()` <!-- REF #4D.File.new().Summary -->crea y devuelve un nuevo objeto de tipo `4D.File`<!-- END REF -->. Es idéntico al comando [`File`](#file) (acceso directo).

> It is recommended to use the [`File`](#file) shortcut command instead of `4D.File.new()`.


<!-- INCLUDE document.copyTo().Desc -->



<!-- REF file.create().Desc -->
## .create()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!--REF file.create().Note -->
**No disponible para archivos ZIP**<!-- END REF -->


<!--REF #FileClass.create().Syntax -->
**.create()** : Boolean <!-- END REF -->

<!--REF #FileClass.create().Params -->
| Parámetros | Tipo     |    | Descripción                                                        |
| ---------- | -------- | -- | ------------------------------------------------------------------ |
| Resultado  | Booleano | <- | True si el archivo se ha creado con éxito, false en caso contrario |
<!-- END REF -->

#### Descripción

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the file already exists on disk, the function does nothing (no error is thrown) and returns false.

**Valor devuelto**

*   **True** if the file is created successfully;
*   **False** if a file with the same name already exists or if an error occured.

#### Ejemplo

Creation of a preferences file in the database folder:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```
<!-- END REF -->





<!-- REF file.createAlias().Desc -->
## .createAlias()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


<!--REF #FileClass.createAlias().Syntax -->
**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.createAlias().Params -->
| Parámetros        | Tipo      |    | Descripción                                  |
| ----------------- | --------- | -- | -------------------------------------------- |
| destinationFolder | 4D.Folder | -> | Destination folder for the alias or shortcut |
| aliasName         | Texto     | -> | Name of the alias or shortcut                |
| aliasType         | Integer   | -> | Tipo de enlace del alias                     |
| Resultado         | 4D.File   | <- | Alias or shortcut file reference             |
<!-- END REF -->


#### Descripción

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. Las siguientes constantes están disponibles:

| Constante          | Valor | Comentario                         |
| ------------------ | ----- | ---------------------------------- |
| `fk alias link`    | 0     | Enlace de alias (por defecto)      |
| `fk symbolic link` | 1     | Enlace simbólico (sólo para macOS) |

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).


**Objeto devuelto**

A `4D.File` object with the `isAlias` property set to **true**.

#### Ejemplo

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
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


<!--REF #FileClass.delete().Syntax -->
**.delete( )**<!-- END REF -->


<!-- REF #FileClass.delete().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |  | ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

If the file is currently open, an error is generated.

If the file does not exist on disk, the function does nothing (no error is generated).
> **WARNING**: `.delete( )` can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. `.delete( )` should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

#### Ejemplo

You want to delete a specific file in the database folder:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("Archivo de preferencias del usuario borrado.")
 End if
```
<!-- END REF -->




<!-- INCLUDE document.exists.Desc -->




<!-- INCLUDE document.extension.Desc -->




<!-- INCLUDE document.fullName.Desc -->


<!-- REF file.getAppInfo().Desc -->
## .getAppInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!--REF #FileClass.getAppInfo().Syntax -->
**.getAppInfo**() : Object<!-- END REF -->

<!--REF #FileClass.getAppInfo().Params -->
| Parámetros | Tipo   |    | Descripción                                           |
| ---------- | ------ | -- | ----------------------------------------------------- |
| Resultado  | Objeto | <- | Contents of .exe/.dll version resource or .plist file |
<!-- END REF -->


#### Descripción

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function returns an empty object (no error is generated).

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.

**Returned object with a .exe or .dll file**

> Reading a .exe or .dll is only possible on Windows.

All property values are Text.

| Propiedad        | Tipo  |
| ---------------- | ----- |
| InternalName     | Texto |
| ProductName      | Texto |
| CompanyName      | Texto |
| LegalCopyright   | Texto |
| ProductVersion   | Texto |
| FileDescription  | Texto |
| FileVersion      | Texto |
| OriginalFilename | Texto |

**Returned object with a .plist file**

The xml file contents is parsed and keys are returned as properties of the object, preserving their types (text, boolean, number). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

#### Ejemplo

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

#### Ver también

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
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


<!--REF #FileClass.moveTo().Syntax -->
**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->
| Parámetros        | Tipo      |    | Descripción                            |
| ----------------- | --------- | -- | -------------------------------------- |
| destinationFolder | 4D.Folder | -> | Carpeta de destino                     |
| newName           | Texto     | -> | Nombre completo del archivo trasladado |
| Resultado         | 4D.File   | <- | Archivo movido                         |
<!-- END REF -->


#### Descripción

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

La *destinationFolder* debe existir en el disco, de lo contrario se genera un error.

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the *newName* parameter. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.


**Objeto devuelto**

El objeto `File` movido.

#### Ejemplo


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
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


<!--REF #FileClass.rename().Syntax -->
**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->

<!--REF #FileClass.rename().Params -->
| Parámetros | Tipo    |    | Descripción                           |
| ---------- | ------- | -- | ------------------------------------- |
| newName    | Texto   | -> | Nuevo nombre completo para el archivo |
| Resultado  | 4D.File | <- | Archivo renombrado                    |
<!-- END REF -->

#### Descripción

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.


**Objeto devuelto**

El objeto `File` renombrado.

#### Ejemplo

You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->


<!-- REF file.setAppInfo().Desc -->
## .setAppInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!--REF #FileClass.setAppInfo().Syntax -->
**.setAppInfo**( *info* : Object )<!-- END REF -->

<!--REF #FileClass.setAppInfo().Params -->
| Parámetros | Tipo   |    | Descripción                                                      |
| ---------- | ------ | -- | ---------------------------------------------------------------- |
| info       | Objeto | -> | Properties to write in .exe/.dll version resource or .plist file |
<!-- END REF -->


#### Descripción

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function does nothing (no error is generated).

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.

***info* parameter object with a .exe or .dll file**

> Writing a .exe or .dll file information is only possible on Windows.

Each valid property set in the *info* object parameter is written in the version resource of the .exe or .dll file. Available properties are (any other property will be ignored):

| Propiedad        | Tipo  |
| ---------------- | ----- |
| InternalName     | Texto |
| ProductName      | Texto |
| CompanyName      | Texto |
| LegalCopyright   | Texto |
| ProductVersion   | Texto |
| FileDescription  | Texto |
| FileVersion      | Texto |
| OriginalFilename | Texto |

If you pass a null or empty text as value, an empty string is written in the property. If you pass a value type different from text, it is stringified.


***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Any key name is accepted. Value types are preserved when possible.

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Other existing keys in the .plist file are left untouched.

> To define a Date type value, the format to use is a json timestamp string formated in ISO UTC without milliseconds ("2003-02-01T01:02:03Z") like in the Xcode plist editor.

#### Ejemplo

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

#### Ver también

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->
## .setContent()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


<!--REF #FileClass.setContent().Syntax -->
**.setContent** ( *content* : Blob ) <!-- END REF -->

<!--REF #FileClass.setContent().Params -->
| Parámetros | Tipo |    | Descripción                       |
| ---------- | ---- | -- | --------------------------------- |
| content    | BLOB | -> | Nuevos contenidos para el archivo |
<!-- END REF -->


#### Descripción

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. Para obtener información sobre los BLOB, consulte la sección [BLOB](Conceptos/dt_blob.md).


#### Ejemplo

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->





<!-- REF file.setText().Desc -->
## .setText()


<details><summary>Histórico</summary>
| Versión | Modificaciones                                          |
| ------- | ------------------------------------------------------- |
| v19 R3  | Default for new projects: no BOM and (macOS) LF for EOL |
| v17 R5  | Añadidos                                                |
</details>


<!--REF #FileClass.setText().Syntax -->
**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } ) <!-- END REF -->


<!--REF #FileClass.setText().Params -->
| Parámetros  | Tipo    |    | Descripción                                                           |
| ----------- | ------- | -- | --------------------------------------------------------------------- |
| texto       | Texto   | -> | Texto a almacenar en el archivo                                       |
| charSetName | Texto   | -> | Nombre del juego de caracteres                                        |
| charSetNum  | Integer | -> | Número del conjunto de caracteres                                     |
| breakMode   | Integer | -> | Modo de tratamiento de los saltos de línea|<!-- END REF -->

|

#### Descripción

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

Optionally, you can designate the character set to be used for writing the contents. Puede pasar:

- en *charSetName*, una cadena que contiene el nombre del conjunto estándar (por ejemplo "ISO-8859-1" o "UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file unless the character set used contains the suffix "-no-bom" (e.g. "UTF-8-no-bom"). If you do not specify a character set, by default 4D uses the "UTF-8" character set without BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

| Constante                     | Valor | Comentario                                                                                                                                               |
| ----------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Sin procesar                                                                                                                                             |
| `Document with native format` | 1     | (Default) Line breaks are converted to the native format of the operating system: LF (line feed) on macOS, CRLF (carriage return + line feed) on Windows |
| `Document with CRLF`          | 2     | Line breaks are converted to CRLF (carriage return + line feed), the default Windows format                                                              |
| `Document with CR`            | 3     | Line breaks are converted to CR (carriage return), the default Classic Mac OS format                                                                     |
| `Document with LF`            | 4     | Line breaks are converted to LF (line feed), the default Unix and macOS format                                                                           |

Por defecto, cuando se omite el parámetro *breakMode*, los saltos de línea se procesan en modo nativo (1).

> **Compatibility Note**: Compatibility options are available for EOL and BOM management. See [Compatibility page](https://doc.4d.com/4dv19R/help/title/en/page3239.html) on doc.4d.com.

#### Ejemplo

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->





<!-- INCLUDE document.size.Desc -->



<style> h2 { background: #d9ebff;}</style>
