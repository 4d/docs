---
id: FileClass
title: File
---

Los objetos `File` se crean con el comando [`File`](#file). Contienen referencias a archivos de disco que pueden o no existir realmente en el disco. Por ejemplo, cuando se ejecuta el comando `File` para crear un nuevo archivo, se crea un objeto `File` válido, pero en realidad no se almacena nada en el disco hasta que se llama a la función [`file.create( )`](#create).

### Ejemplo

El siguiente ejemplo crea un archivo de preferencias en la carpeta del proyecto:

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
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->
|
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->|
| [<!-- INCLUDE #document.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.open().Summary -->|
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

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF #_command_.File.Syntax -->

**File** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; *\** } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->
| Parámetros   | Type    |    | Descripción                                        |
| ------------ | ------- |:--:| -------------------------------------------------- |
| path         | Text    | -> | Ruta del archivo                                   |
| fileConstant | Integer | -> | Constante del archivo 4D                           |
| pathType     | Integer | -> | `fk posix path` (por defecto) o `fk platform path` |
| *            |         | -> | * para devolver el archivo de la base local        |
| Result       | 4D.File | <- | Nuevo objeto de archivo|<!-- END REF -->

|

#### Descripción

The `File` command <!-- REF #_command_.File.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. El comando acepta dos sintaxis:

**File ( path { ; pathType } { ; \* })**

En el parámetro *path*, pase una ruta de archivo. Puede utilizar una cadena personalizada o un filesystem (por ejemplo, "/DATA/myfile.txt").

> Sólo se admiten nombres de ruta absolutos con el comando `File`.

Por defecto, 4D espera una ruta expresada con la sintaxis POSIX. Si trabaja con los nombres de ruta de plataforma (Windows o macOS), debe declararlo utilizando el parámetro *pathType*. Las siguientes constantes están disponibles:

| Constante        | Value | Comentario                                                                                                        |
| ---------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Ruta expresada con una sintaxis específica de la plataforma (obligatoria en caso de nombre de ruta de plataforma) |
| fk posix path    | 0     | Ruta expresada con sintaxis POSIX (por defecto)                                                                   |

**File ( fileConstant { ; \* } )**

En el parámetro *fileConstant*, pase un archivo 4D interno o sistema, utilizando una de las siguientes constantes:

| Constante                         | Value | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19    | Archivo de historial de copias de seguridad (ver Archivos de configuración y rastreo). Se almacena en la carpeta de destino de la copia de seguridad.                                                                                                                                                                                                                                                                                                                              |
| Backup log file                   | 13    | Archivo historial de copias de seguridad actual. Almacenado en la carpeta Logs de la aplicación.                                                                                                                                                                                                                                                                                                                                                                                   |
| Backup settings file              | 1     | Archivo backup.4DSettings por defecto (formato xml), almacenado en la carpeta Settings del proyecto                                                                                                                                                                                                                                                                                                                                                                                |
| Backup settings file for data     | 17    | archivo backup.4DSettings del archivo de datos (formato xml), almacenado en la carpeta Settings de la carpeta data                                                                                                                                                                                                                                                                                                                                                                 |
| Build application log file        | 14    | Archivo de historial actual en formato xml del generador de aplicaciones. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                           |
| Build application settings file   | 20    | Archivo de configuración por defecto del generador de aplicaciones ("buildApp.4DSettings"). Almacenado en la carpeta Settings del proyecto.                                                                                                                                                                                                                                                                                                                                        |
| Compacting log file               | 6     | Archivo de historial de la compactación más reciente realizada con el comando Compact data file o el Centro de seguridad y mantenimiento. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                           |
| Current backup settings file      | 18    | archivo backup.4DSettings utilizado actualmente por la aplicación. Puede ser el archivo de configuración de la copia de seguridad (por defecto) o un archivo de configuración de la copia de seguridad personalizado por el usuario definido para el archivo de datos                                                                                                                                                                                                              |
| Debug log file                    | 12    | Archivo de registro creado por el comando `SET DATABASE PARAMETER(Debug log recording)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                            |
| Diagnostic log file               | 11    | Archivo de registro creado por el comando `SET DATABASE PARAMETER(Diagnostic log recording)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                       |
| Directory file                    | 16    | archivo directory.json, que contiene la descripción de los usuarios y grupos (si los hay) del proyecto. Puede situarse en la carpeta user settings (por defecto, se aplica a todo el proyecto), o en la carpeta data settings (específica para un archivo de datos).                                                                                                                                                                                                               |
| HTTP debug log file               | 9     | Archivo de registro creado por el comando `WEB SET OPTION(Web debug log)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                          |
| HTTP log file                     | 8     | Archivo de registro creado por el comando `WEB SET OPTION(Web log recording)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                      |
| IMAP Log file                     | 23    | Archivo de registro creado por el comando `SET DATABASE PARAMETER(IMAP Log)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                       |
| Last backup file                  | 2     | Last backup file, named `\<applicationName>[bkpNum].4BK`, stored at a custom location.                                                                                                                                                                                                                                                                                                                                                                                      |
| Last journal integration log file | 22    | Nombre completo del último archivo de registro de integración del historial (almacenado en la carpeta Logs de la aplicación restaurada), si la hay. Este archivo se crea, en modo de reparación automática, tan pronto como se produce una integración de archivos de historial                                                                                                                                                                                                    |
| Repair log file                   | 7     | Archivo de historial de las reparaciones realizadas en la base por el Centro de seguridad y mantenimiento (CSM). Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                    |
| Request log file                  | 10    | Archivo de registro de peticiones cliente/servidor estándar (excluyendo las peticiones web) creado por los comandos `SET DATABASE PARAMETER(4D Server log recording)` o `SET DATABASE PARAMETER(Client log recording)`. Si se ejecuta en el servidor, se devuelve el archivo de registro del servidor (almacenado en la carpeta Logs del servidor). Si se ejecuta en el cliente, se devuelve el archivo de registro del cliente (almacenado en la carpeta Logs local del cliente). |
| SMTP log file                     | 15    | Archivo de registro creado por el comando `SET DATABASE PARAMETER(SMTP Log)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                       |
| User settings file                | 3     | archivo settings.4DSettings para todos los archivos de datos, almacenados en la carpeta Preferences junto a la estructura del archivo si está activado.                                                                                                                                                                                                                                                                                                                            |
| User settings file for data       | 4     | archivo settings.4DSettings para el archivo de datos actual, almacenado en la carpeta Preferences junto al archivo de datos.                                                                                                                                                                                                                                                                                                                                                       |
| Verification log file             | 5     | Archivos de historial creados por los comandos `VERIFY CURRENT DATA FILE` y `VERIFY DATA FILE` o el Centro de seguridad y mantenimiento (CSM). Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                      |

Si el objetivo *fileConstant* no existe, se devuelve un objeto null. No se produce ningún error.

If the command is called from a component, pass the optional *parameter to get the path of the host database. Otherwise, if you omit the* parameter, a null object is always returned.

## 4D.File.new()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #4D.File.new().Syntax -->
**4D.File.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer { ; *\** } ) : 4D.File<!-- END REF -->

#### Descripción

The `4D.File.new()` function <!-- REF #4D.File.new().Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. Es idéntico al comando [`File`](#file) (acceso directo).

> Se recomienda utilizar el comando de acceso directo[`File<`](#file) en lugar de `4D.File.new()`.

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
| Parámetros | Type    |    | Descripción                                                                                   |
| ---------- | ------- | -- | --------------------------------------------------------------------------------------------- |
| Result     | Boolean | <- | True si el archivo se ha creado con éxito, false en caso contrario|<!-- END REF -->

|

#### Descripción

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

Si es necesario, la función crea la jerarquía de carpetas como se describe en las propiedades [platformPath](#platformpath) o [path](#path). Si el archivo ya existe en el disco, la función no hace nada (no se lanza ningún error) y devuelve false.

**Valor devuelto**

* **True** si el archivo se crea con éxito;
* **False** si ya existe un archivo con el mismo nombre o si ha ocurrido un error.

#### Ejemplo

Creación de un archivo de preferencias en la carpeta principal:

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
| Parámetros        | Type      |    | Descripción                                                            |
| ----------------- | --------- | -- | ---------------------------------------------------------------------- |
| destinationFolder | 4D.Folder | -> | Carpeta de destino para el alias o el acceso directo                   |
| aliasName         | Text      | -> | Nombre del alias o del atajo                                           |
| aliasType         | Integer   | -> | Tipo de enlace del alias                                               |
| Result            | 4D.File   | <- | Referencia del archivo del alias o de atajo|<!-- END REF -->

|

#### Descripción

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pase el nombre del alias o del acceso directo a crear en el parámetro *aliasName*.

Por defecto en macOS, la función crea un alias estándar. También puede crear un enlace simbólico utilizando el parámetro *aliasType*. Las siguientes constantes están disponibles:

| Constante          | Value | Comentario                         |
| ------------------ | ----- | ---------------------------------- |
| `fk alias link`    | 0     | Enlace de alias (por defecto)      |
| `fk symbolic link` | 1     | Enlace simbólico (sólo para macOS) |

En Windows, siempre se crea un acceso directo (archivo.lnk) (el parámetro *aliasType* es ignorado).

**Objeto devuelto**

Un objeto `4D.File` con la propiedad `isAlias` definida en **true**.

#### Ejemplo

Quiere crear un alias para un archivo en su carpeta principal:

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
| Parámetros | Type |  | Descripción                                                |
| ---------- | ---- |  | ---------------------------------------------------------- |
|            |      |  | Does not require any parameters|<!-- END REF -->

|

#### Descripción

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

Si el archivo está abierto, se genera un error.

Si el archivo no existe en el disco, la función no hace nada (no se genera ningún error).
> **ATENCIÓN**: `.delete( )` puede eliminar cualquier archivo de un disco. Esto incluye los documentos creados con otras aplicaciones, así como las propias aplicaciones. `.delete( )` debe utilizarse con extrema precaución. Eliminar un archivo es una operación permanente y no se puede deshacer.

#### Ejemplo

Desea eliminar un archivo específico en la carpeta de la base de datos:

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

| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!--REF #FileClass.getAppInfo().Syntax -->

**.getAppInfo**() : Object<!-- END REF -->

<!--REF #FileClass.getAppInfo().Params -->
| Parámetros | Type   |    | Descripción                                                                            |
| ---------- | ------ | -- | -------------------------------------------------------------------------------------- |
| Result     | Object | <- | Contenido del archivo de recurso versión .exe/.dll o .plist|<!-- END REF -->

|

#### Descripción

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

La función debe utilizarse con un archivo .exe, .dll o .plist existente. Si el archivo no existe en el disco o no es un archivo .exe, .dll o .plist válido, la función devuelve un objeto vacío (no se genera ningún error).

> La función sólo admite archivos .plist en formato xml (basados en texto). Se devuelve un error si se utiliza con un archivo .plist en formato binario.

**Objeto devuelto con un archivo .exe o .dll**

> La lectura de un .exe o .dll sólo es posible en Windows.

Todos los valores de propiedades son de tipo Texto.

| Propiedad        | Type |
| ---------------- | ---- |
| InternalName     | Text |
| ProductName      | Text |
| CompanyName      | Text |
| LegalCopyright   | Text |
| ProductVersion   | Text |
| FileDescription  | Text |
| FileVersion      | Text |
| OriginalFilename | Text |

**Objeto devuelto con un archivo .plist**

El contenido del archivo xml se analiza y las llaves se devuelven como propiedades del objeto, conservando sus tipos (texto, booleano, numérico). `.plist dict` se devuelve como un objeto JSON y `.plist array` se devuelve como un array JSON.

#### Ejemplo

```4d
 // mostrar información de copyright del archivo .exe de la aplicación (windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info.LegalCopyright)

  // mostrar información de copyright de un info.plist (cualquier plataforma)
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
| Parámetros        | Type      |    | Descripción                               |
| ----------------- | --------- | -- | ----------------------------------------- |
| destinationFolder | 4D.Folder | -> | Carpeta de destino                        |
| newName           | Text      | -> | Nombre completo del archivo trasladado    |
| Result            | 4D.File   | <- | Archivo movido|<!-- END REF -->

|

#### Descripción

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

La *destinationFolder* debe existir en el disco, de lo contrario se genera un error.

Por defecto, el archivo conserva su nombre cuando se mueve. Si desea cambiar renombrar el archivo desplazado, pase el nombre completo en el parámetro *newName*. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

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

<!-- REF file.open().Desc -->
## .open()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileClass.open().Syntax -->

**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->

<!--REF #FileClass.open().Params -->
| Parámetros | Type                             |    | Descripción                                       |
| ---------- | -------------------------------- | -- | ------------------------------------------------- |
| mode       | Text                             | -> | Modo de apertura: "leer", "escribir", "añadir"    |
| options    | Object                           | -> | Opening options                                   |
| Result     | [4D.FileHandle](FileHandleClass) | <- | New File handle object|<!-- END REF -->

|

#### Descripción

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified *mode* or with the specified *options*<!-- END REF -->. You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

If you use the *mode* (text) parameter, pass the opening mode for the file handle:

| *mode*   | Descripción                                                                                                                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "read"   | (Por defecto) Crea un manejador de archivos para leer los valores del archivo. Si el archivo no existe en el disco, se devuelve un error. You can open as many file handles as you want in "read" mode on the same File object. |
| "write"  | Creates a file handle to write values to the file (starting at the beginning of the file content). Si el archivo no existe en el disco, se crea. You can open only one file handle in "write" mode on the same File object.     |
| "append" | Creates a file handle to write values to the file (starting at the end of the file content). Si el archivo no existe en el disco, se crea. You can open only one file handle in "append" mode on the same File object.          |

> El valor *mode* distingue entre mayúsculas y minúsculas.

If you use the *options* (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

| *options*         | Type           | Descripción                                                                                                                               | Por defecto   |
| ----------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `.mode`           | Text           | Modo de apertura (ver *modo* arriba)                                                                                                      | "read"        |
| `.charset`        | Text           | Conjunto de caracteres utilizado al leer o escribir en el archivo. Use the standard name of the set (for example "ISO-8859-1" or "UTF-8") | "UTF-8"       |
| `.breakModeRead`  | Text or Number | Modo de procesamiento de los saltos de línea utilizados al leer el archivo (ver más abajo)                                                | "native" or 1 |
| `.breakModeWrite` | Text or Number | Modo de procesamiento de los saltos de línea utilizados al escribir en el archivo (ver abajo)                                             | "native" or 1 |

The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. Puede utilizar uno de los siguientes valores (texto o número):

| Break mode as text | Break mode as number (constant)   | Descripción                                                                                                                                                    |
| ------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"           | 1 (`Document with native format`) | (Default) Line breaks are converted to the native format of the operating system: LF (line feed) under macOS, CRLF (carriage return + line feed) under Windows |
| "crlf"             | 2 (`Documento con CRLF`)          | Los saltos de línea se convierten en CRLF (retorno de carro + salto de línea), el formato predeterminado de Windows                                            |
| "cr"               | 3 (`Document with CR`)            | Los saltos de línea se convierten en CR (retorno de carro), el formato clásico por defecto de Mac OS                                                           |
| "lf"               | 4 (`Document with LF`)            | Los saltos de línea se convierten en LF (salto de línea), el formato por defecto de Unix y macOS                                                               |

> The *break mode as text* value is case sensitive.

#### Ejemplo

Quiere crear un manejador de archivo para leer el archivo "ReadMe.txt":

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

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!--REF #FileClass.rename().Syntax -->

**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->

<!--REF #FileClass.rename().Params -->
| Parámetros | Type    |    | Descripción                                   |
| ---------- | ------- | -- | --------------------------------------------- |
| newName    | Text    | -> | Nuevo nombre completo para el archivo         |
| Result     | 4D.File | <- | Archivo renombrado|<!-- END REF -->

|

#### Descripción

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

El parámetro *newName* debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error. Si ya existe un archivo con el mismo nombre, se devuelve un error.

Tenga en cuenta que la función modifica el nombre completo del archivo, es decir, si no pasa una extensión en *newName*, el archivo tendrá un nombre sin extensión.

**Objeto devuelto**

El objeto `File` renombrado.

#### Ejemplo

Quieresrenombrar "ReadMe.txt" como "ReadMe_new.txt":

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
| Parámetros | Type   |    | Descripción                                                                                                       |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------------------------- |
| info       | Object | -> | Propiedades a escribir en el archivo .plist o el recurso versión del archivo .exe/.dll|<!-- END REF -->

|

#### Descripción

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

La función debe utilizarse con un archivo .exe, .dll o .plist existente. The function must be used with an existing .exe, .dll or .plist file.

> La función sólo admite archivos .plist en formato xml (basados en texto). Se devuelve un error si se utiliza con un archivo .plist en formato binario.

**Parámetro *info* con un archivo .exe o .dll**

> Escribir la información de archivos .exe o .dll sólo es posible en Windows.

Cada propiedad válida definida en el parámetro objeto *info* se escribe en el recurso de versión del archivo .exe o .dll. Las propiedades disponibles son (toda otra propiedad será ignorada):

| Propiedad        | Type |
| ---------------- | ---- |
| InternalName     | Text |
| ProductName      | Text |
| CompanyName      | Text |
| LegalCopyright   | Text |
| ProductVersion   | Text |
| FileDescription  | Text |
| FileVersion      | Text |
| OriginalFilename | Text |

Si se pasa un texto null o vacío como valor, se escribe una cadena vacía en la propiedad. Si pasa un valor de tipo diferente a texto, se convierte en una cadena.

**Parámetro *info* con un un archivo .plist**

Cada propiedad válida definida en el parámetro objeto *info* se escribe en el archivo .plist en forma de llave. Se acepta todo nombre de llave. Los tipos de valores se conservan cuando es posible.

Si una llave definida en el parámetro *info* ya está definida en el archivo .plist, su valor se actualiza manteniendo su tipo original. Las demás llaves existentes en el archivo .plist no se modifican.

> Para definir un valor de tipo Fecha, el formato a utilizar es una cadena de timestamp json formada en ISO UTC sin milisegundos ("2003-02-01T01:02:03Z") como en el editor de plist Xcode.

#### Ejemplo

```4d
  // definir el copyright y versión de un archivo .exe (Windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=New object
$info.LegalCopyright:="Copyright 4D 2021"
$info.ProductVersion:="1.0.0"
$exeFile.setAppInfo($info)
```

```4d
  // establecer algunas claves en un archivo info.plist (todas las plataformas)
var $infoPlistFile : 4D. ile
var $info : Objeto
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
| Parámetros | Type |    | Descripción                                                  |
| ---------- | ---- | -- | ------------------------------------------------------------ |
| content    | BLOB | -> | Nuevos contenidos para el archivo|<!-- END REF -->

|

#### Descripción

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. .

#### Ejemplo

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->

<!-- REF file.setText().Desc -->
## .setText()

<details><summary>Histórico</summary>

| Versión | Modificaciones                                                       |
| ------- | -------------------------------------------------------------------- |
| v19 R3  | Por defecto para los nuevos proyectos: sin BOM y (macOS) LF para EOL |
| v17 R5  | Añadidos                                                             |

</details>

<!--REF #FileClass.setText().Syntax -->

**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } ) <!-- END REF -->

<!--REF #FileClass.setText().Params -->
| Parámetros  | Type    |    | Descripción                                                           |
| ----------- | ------- | -- | --------------------------------------------------------------------- |
| text        | Text    | -> | Texto a almacenar en el archivo                                       |
| charSetName | Text    | -> | Nombre del juego de caracteres                                        |
| charSetNum  | Integer | -> | Número del conjunto de caracteres                                     |
| breakMode   | Integer | -> | Modo de tratamiento de los saltos de línea|<!-- END REF -->

|

#### Descripción

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

Si el archivo al que se hace referencia en el objeto `File` no existe en el disco, la función lo crea. Cuando el archivo ya existe en el disco, se borra su contenido anterior, excepto si ya está abierto, en cuyo caso se bloquea su contenido y se genera un error.

En *text*, pase el texto a escribir en el archivo. Puede ser un texto literal ("my text"), o un campo / variable texto 4D.

Opcionalmente, puede designar el conjunto de caracteres que se utilizará para la escritura del contenido. Puede pasar:

* en *charSetName*, una cadena que contiene el nombre del conjunto estándar (por ejemplo "ISO-8859-1" o "UTF-8"),
* o en *charSetNum*, el ID MIBEnum (número) del nombre del conjunto estándar.

> Para conocer la lista de los conjuntos de caracteres que soporta 4D, consulte la descripción del comando `CONVERT FROM TEXT`.

Si existe una marca de orden de bytes (BOM) para el conjunto de caracteres, 4D la inserta en el archivo a menos que el conjunto de caracteres utilizado contenga el sufijo "-no-bom" (por ejemplo, "UTF-8-no-bom"). Si no especifica un conjunto de caracteres, por defecto 4D utiliza el conjunto de caracteres "UTF-8" sin BOM.

En *breakMode*, se puede pasar un número que indica el procesamiento a aplicar a los caracteres de fin de línea antes de guardarlos en el archivo. Las siguientes constantes, que se encuentran en el tema **Documentos sistema**, están disponibles:

| Constante                     | Value | Comentario                                                                                                                                                                 |
| ----------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Sin procesar                                                                                                                                                               |
| `Document with native format` | 1     | (Por defecto) Los saltos de línea se convierten al formato nativo del sistema operativo: LF (salto de línea) en macOS, CRLF (salto de línea + retorno de carro) en Windows |
| `Document with CRLF`          | 2     | Los saltos de línea se convierten en CRLF (retorno de carro + salto de línea), el formato predeterminado de Windows                                                        |
| `Document with CR`            | 3     | Los saltos de línea se convierten en CR (retorno de carro), el formato clásico por defecto de Mac OS                                                                       |
| `Document with LF`            | 4     | Los saltos de línea se convierten en LF (salto de línea), el formato por defecto de Unix y macOS                                                                           |

Por defecto, cuando se omite el parámetro *breakMode*, los saltos de línea se procesan en modo nativo (1).

> **Nota de compatibilidad**: las opciones de compatibilidad están disponibles para la gestión de EOL y de BOM. Ver[Página Compatibilidad](https://doc.4d.com/4dv19R/help/title/en/page3239.html) en doc.4d.com.

#### Ejemplo

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
