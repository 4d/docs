---
id: FileClass
title: File
---

`File` objects are created with the [`File`](#file) command. Contienen referencias a archivos de disco que pueden o no existir realmente en el disco. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### Ejemplo

El siguiente ejemplo crea un archivo de preferencias en la carpeta del proyecto:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Rutas de acceso

`File` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.

### Objeto File

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #document.copyTo().Summary -->                           |
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FileClass.create().Summary -->                         |
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FileClass.createAlias().Summary -->          |
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #document.creationDate.Summary -->             |
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #document.creationTime.Summary -->             |
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FileClass.delete().Summary -->                         |
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)<br/><!-- INCLUDE #document.exists.Summary -->                               |
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)<br/><!-- INCLUDE #document.extension.Summary -->                      |
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #document.fullName.Summary -->                         |
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)<br/><!-- INCLUDE #FileClass.getAppInfo().Summary -->             |
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->                    |
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #document.getIcon().Summary -->                        |
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #document.getText().Summary -->                        |
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #document.hidden.Summary -->                               |
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #document.isAlias.Summary -->                            |
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #document.isFile.Summary -->                               |
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #document.isFolder.Summary -->                         |
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)<br/><!-- INCLUDE #document.isWritable.Summary -->                   |
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #document.modificationDate.Summary --> |
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #document.modificationTime.Summary --> |
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FileClass.moveTo().Summary -->                         |
| [<!-- INCLUDE #document.name.Syntax -->](#name)<br/><!-- INCLUDE #document.name.Summary -->                                     |
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)<br/><!-- INCLUDE #FileClass.open().Summary -->                               |
| [<!-- INCLUDE #document.original.Syntax -->](#original)<br/><!-- INCLUDE #document.original.Summary -->                         |
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)<br/><!-- INCLUDE #document.parent.Summary -->                               |
| [<!-- INCLUDE #document.path.Syntax -->](#path)<br/><!-- INCLUDE #document.path.Summary -->                                     |
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #document.platformPath.Summary -->             |
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FileClass.rename().Summary -->                         |
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)<br/><!-- INCLUDE #FileClass.setAppInfo().Summary -->             |
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)<br/><!-- INCLUDE #FileClass.setContent().Summary -->             |
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)<br/><!-- INCLUDE #FileClass.setText().Summary -->                      |
| [<!-- INCLUDE #document.size.Syntax -->](#size)<br/><!-- INCLUDE #document.size.Summary -->                                     |

## File

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                         |
| ----------- | -------------------------------------- |
| 19 R4       | Nueva constante `HTTP Client log file` |
| 17 R5       | Añadidos                               |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->

| Parámetros   | Tipo                    |     | Descripción                                                        |
| ------------ | ----------------------- | :-: | ------------------------------------------------------------------ |
| path         | Text                    |  -> | Ruta del archivo                                                   |
| fileConstant | Integer                 |  -> | Constante del archivo 4D                                           |
| pathType     | Integer                 |  -> | `fk posix path` (default) or `fk platform path` |
| -            |                         |  -> | * para devolver el archivo de la base local                        |
| Result       | 4D.File |  <- | Nuevo objeto de archivo                                            |

<!-- END REF -->

#### Descripción

The `File` command <!-- REF #_command_.File.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. El comando acepta dos sintaxis:

**File ( path { ; pathType } { ; \* })**

In the *path* parameter, pass a file path string. Puede utilizar una cadena personalizada o un filesystem (por ejemplo, "/DATA/myfile.txt").

> Only absolute pathnames are supported with the `File` command.

Por defecto, 4D espera una ruta expresada con la sintaxis POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. Las siguientes constantes están disponibles:

| Constante        | Valor | Comentario                                                                                                                           |
| ---------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| fk platform path | 1     | Ruta expresada con una sintaxis específica de la plataforma (obligatoria en caso de nombre de ruta de plataforma) |
| fk posix path    | 0     | Ruta expresada con sintaxis POSIX (por defecto)                                                                   |

**File ( fileConstant { ; \* } )**

In the *fileConstant* parameter, pass a 4D built-in or system file, using one of the following constants:

| Constante                         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19    | Archivo de historial de copias de seguridad (ver Archivos de configuración y rastreo). Se almacena en la carpeta de destino de la copia de seguridad.                                                                                                                                                                                                                                                                                                                                                          |
| Backup log file                   | 13    | Archivo historial de copias de seguridad actual. Almacenado en la carpeta Logs de la aplicación.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Backup settings file              | 1     | Archivo backup.4DSettings por defecto (formato xml), almacenado en la carpeta Settings del proyecto                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Backup settings file for data     | 17    | archivo backup.4DSettings del archivo de datos (formato xml), almacenado en la carpeta Settings de la carpeta data                                                                                                                                                                                                                                                                                                                                                                                                             |
| Build application log file        | 14    | Archivo de historial actual en formato xml del generador de aplicaciones. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Build application settings file   | 20    | Archivo de configuración por defecto del generador de aplicaciones ("buildApp.4DSettings"). Almacenado en la carpeta Settings del proyecto.                                                                                                                                                                                                                                                                                                                                                    |
| Compacting log file               | 6     | Archivo de historial de la compactación más reciente realizada con el comando Compact data file o el Centro de seguridad y mantenimiento. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                          |
| Current backup settings file      | 18    | archivo backup.4DSettings utilizado actualmente por la aplicación. Puede ser el archivo de configuración de la copia de seguridad (por defecto) o un archivo de configuración de la copia de seguridad personalizado por el usuario definido para el archivo de datos                                                                                                                                                                                                                                          |
| Debug log file                    | 12    | Log file created by the `SET DATABASE PARAMETER(Debug log recording)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Diagnostic log file               | 11    | Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                |
| Directory file                    | 16    | archivo directory.json, que contiene la descripción de los usuarios y grupos (si los hay) del proyecto. Puede situarse en la carpeta user settings (por defecto, se aplica a todo el proyecto), o en la carpeta data settings (específica para un archivo de datos).                                                                                                                                                                                     |
| HTTP Client log file              | 24    | Log file created by the `HTTP SET OPTION(HTTP client log)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| HTTP debug log file               | 9     | Log file created by the `WEB SET OPTION(Web debug log)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HTTP log file                     | 8     | Log file created by the `WEB SET OPTION(Web log recording)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| IMAP Log file                     | 23    | Log file created by the `SET DATABASE PARAMETER(IMAP Log)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Last backup file                  | 2     | Last backup file, named `\<applicationName>[bkpNum].4BK`, stored at a custom location.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Last journal integration log file | 22    | Nombre completo del último archivo de registro de integración del historial (almacenado en la carpeta Logs de la aplicación restaurada), si la hay. Este archivo se crea, en modo de reparación automática, tan pronto como se produce una integración de archivos de historial                                                                                                                                                                                                                                                |
| Repair log file                   | 7     | Archivo de historial de las reparaciones realizadas en la base por el Centro de seguridad y mantenimiento (CSM). Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                |
| Request log file                  | 10    | Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. Si se ejecuta en el servidor, se devuelve el archivo de registro del servidor (almacenado en la carpeta Logs del servidor). Si se ejecuta en el cliente, se devuelve el archivo de registro del cliente (almacenado en la carpeta Logs local del cliente). |
| SMTP log file                     | 15    | Log file created by the `SET DATABASE PARAMETER(SMTP Log)` command. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| User settings file                | 3     | archivo settings.4DSettings para todos los archivos de datos, almacenados en la carpeta Preferences junto a la estructura del archivo si está activado.                                                                                                                                                                                                                                                                                                                                                                           |
| User settings file for data       | 4     | archivo settings.4DSettings para el archivo de datos actual, almacenado en la carpeta Preferences junto al archivo de datos.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Verification log file             | 5     | Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                               |

If the target *fileConstant* does not exist, a null object is returned. No se produce ningún error.

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Otherwise, if you omit the `*` parameter, a null object is always returned.

## 4D.File.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #4D.File.new().Syntax -->

**4D.File.new** ( *path* : Text { ; *pathType* : Integer } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer ) : 4D.File<!-- END REF -->

#### Descripción

The `4D.File.new()` function <!-- REF #4D.File.new().Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. It is identical to the [`File`](#file) command (shortcut).

> It is recommended to use the [`File`](#file) shortcut command instead of `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->

## .create()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF file.create().Note -->

**Not available for ZIP archives**<!-- END REF -->

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->

<!--REF #FileClass.create().Params -->

| Parámetros | Tipo    |    | Descripción                                                        |
| ---------- | ------- | -- | ------------------------------------------------------------------ |
| Result     | Boolean | <- | True si el archivo se ha creado con éxito, false en caso contrario |

<!-- END REF -->

#### Descripción

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. Si el archivo ya existe en el disco, la función no hace nada (no se lanza ningún error) y devuelve false.

**Valor devuelto**

- **True** if the file is created successfully;
- **False** if a file with the same name already exists or if an error occured.

#### Ejemplo

Creación de un archivo de preferencias en la carpeta principal:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

<!-- END REF -->

<!-- REF file.createAlias().Desc -->

## .createAlias()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.createAlias().Params -->

| Parámetros        | Tipo                      |    | Descripción                                          |
| ----------------- | ------------------------- | -- | ---------------------------------------------------- |
| destinationFolder | 4D.Folder | -> | Carpeta de destino para el alias o el acceso directo |
| aliasName         | Text                      | -> | Nombre del alias o del atajo                         |
| aliasType         | Integer                   | -> | Tipo de enlace del alias                             |
| Result            | 4D.File   | <- | Referencia del archivo del alias o de atajo          |

<!-- END REF -->

#### Descripción

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

Por defecto en macOS, la función crea un alias estándar. You can also create a symbolic link by using the *aliasType* parameter. Las siguientes constantes están disponibles:

| Constante          | Valor | Comentario                                            |
| ------------------ | ----- | ----------------------------------------------------- |
| `fk alias link`    | 0     | Enlace de alias (por defecto)      |
| `fk symbolic link` | 1     | Enlace simbólico (sólo para macOS) |

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Objeto devuelto**

A `4D.File` object with the `isAlias` property set to **true**.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->

<!-- REF #FileClass.delete().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

Si el archivo no existe en el disco, la función no hace nada (no se genera ningún error).

Si el archivo está abierto, el resultado depende del sistema operativo:

- en Windows, se genera un error,
- en macOS, no se genera ningún error y el archivo se elimina.

:::caution

`.delete()` can delete any file on a disk. Esto incluye los documentos creados con otras aplicaciones, así como las propias aplicaciones. `.delete()` should be used with extreme caution. Eliminar un archivo es una operación permanente y no se puede deshacer.

:::

#### Ejemplo

Desea eliminar un archivo específico en la carpeta de la base de datos:

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->

<!--REF #FileClass.getAppInfo().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                                 |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------------------- |
| Result     | Object | <- | Contenido del archivo de recurso versión .exe/.dll o .plist |

<!-- END REF -->

#### Descripción

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

La función debe utilizarse con un archivo .exe, .dll o .plist existente. Si el archivo no existe en el disco o no es un archivo .exe, .dll o .plist válido, la función devuelve un objeto vacío (no se genera ningún error).

> La función sólo admite archivos .plist en formato xml (basados en texto). Se devuelve un error si se utiliza con un archivo .plist en formato binario.

**Objeto devuelto con un archivo .exe o .dll**

> La lectura de un .exe o .dll sólo es posible en Windows.

Todos los valores de propiedades son de tipo Texto.

| Propiedad        | Tipo |
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

El contenido xml del archivo se analiza y las llaves se devuelven como propiedades del objeto, conservando sus tipos (texto, booleano, numérico). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->

| Parámetros        | Tipo                      |    | Descripción                            |
| ----------------- | ------------------------- | -- | -------------------------------------- |
| destinationFolder | 4D.Folder | -> | Carpeta de destino                     |
| newName           | Text                      | -> | Nombre completo del archivo trasladado |
| Result            | 4D.File   | <- | Archivo movido                         |

<!-- END REF -->

#### Descripción

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

Por defecto, el archivo conserva su nombre cuando se mueve. If you want to rename the moved file, pass the new full name in the *newName* parameter. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->

<!--REF #FileClass.open().Params -->

| Parámetros | Tipo                                             |    | Descripción                                                 |
| ---------- | ------------------------------------------------ | -- | ----------------------------------------------------------- |
| mode       | Text                                             | -> | Modo de apertura: "read", "write", "append" |
| options    | Object                                           | -> | Opciones de apertura                                        |
| Result     | [4D.FileHandle](FileHandleClass) | <- | Nuevo objeto File handle                                    |

<!-- END REF -->

#### Descripción

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified *mode* or with the specified *options*<!-- END REF -->. You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

If you use the *mode* (text) parameter, pass the opening mode for the file handle:

| *mode*   | Descripción                                                                                                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "read"   | (Por defecto) Crea un file handle para leer los valores en el archivo. Si el archivo no existe en el disco, se devuelve un error. Puede abrir tantos file handles como quiera en modo "read" en el mismo objeto File.                      |
| "write"  | Crea un file handle para escribir valores en el archivo (empezando por el inicio del contenido del archivo). Si el archivo no existe en el disco, se crea. Sólo se puede abrir un file handle en modo "write" en el mismo objeto File.     |
| "append" | Crea un file handle para escribir los valores en el archivo (empezando por el final del contenido del archivo). Si el archivo no existe en el disco, se crea. Sólo se puede abrir un file handle en modo "append" en el mismo objeto File. |

> El valor de *mode* es sensible a las mayúsculas y minúsculas.

If you use the *options* (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

| *opciones*        | Tipo           | Descripción                                                                                                                                                                         | Por defecto  |
| ----------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `.mode`           | Text           | Modo de apertura (ver *mode* arriba)                                                                                                                             | "read"       |
| `.charset`        | Text           | Conjunto de caracteres utilizado al leer o escribir en el archivo. Utilice el nombre estándar del conjunto (por ejemplo, "ISO-8859-1" o "UTF-8") | "UTF-8"      |
| `.breakModeRead`  | Texto o número | Modo de procesamiento de los saltos de línea utilizados al leer el archivo (ver abajo)                                                                           | "native" o 1 |
| `.breakModeWrite` | Texto o número | Modo de procesamiento de los saltos de línea utilizados al escribir en el archivo (ver abajo)                                                                    | "native" o 1 |

La función reemplaza todos los delimitadores originales de final de línea. Por defecto, se utiliza el delimitador nativo, pero puede definir otro delimitador. The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. Puede utilizar uno de los siguientes valores (texto o número):

| Modo de ruptura en texto | Break mode en numérico (constante) | Descripción                                                                                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"                 | 1 (`Document with native format`)  | (Por defecto) Los saltos de línea se convierten al formato nativo del sistema operativo: LF (salto de línea) en macOS, CRLF (retorno de carro + salto de línea) en Windows |
| "crlf"                   | 2 (`Document with CRLF`)           | Los fines de línea se convierten en CRLF (retorno de carro + salto de línea), el formato predeterminado de Windows                                                                                                               |
| "cr"                     | 3 (`Document with CR`)             | Los fines de línea se convierten en CR (retorno de carro), el formato clásico por defecto de Mac OS                                                                                                                              |
| "lf"                     | 4 (`Document with LF`)             | Los fines de línea se convierten en LF (salto de línea), el formato Unix y macOS por defecto                                                                                                                                     |

> The *break mode as text* value is case sensitive.

#### Ejemplo

Quiere crear un file handle para leer el archivo "ReadMe.txt":

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->

<!--REF #FileClass.rename().Params -->

| Parámetros | Tipo                    |    | Descripción                       |
| ---------- | ----------------------- | -- | --------------------------------- |
| newName    | Text                    | -> | Nuevo nombre completo del archivo |
| Result     | 4D.File | <- | Archivo renombrado                |

<!-- END REF -->

#### Descripción

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. Si ya existe un archivo con el mismo nombre, se devuelve un error.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.

**Objeto devuelto**

The renamed `File` object.

#### Ejemplo

Quiere renombrar "ReadMe.txt" como "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```

<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->

## .setAppInfo()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 20          | Soporte de WinIcon |
| 19          | Añadidos           |

</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->

<!--REF #FileClass.setAppInfo().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                                                            |
| ---------- | ------ | -- | -------------------------------------------------------------------------------------------------------------------------------------- |
| info       | Object | -> | Propiedades a escribir en el archivo .plist o el recurso versión del archivo .exe/.dll |

<!-- END REF -->

#### Descripción

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

La función debe utilizarse con un archivo .exe, .dll o .plist existente. Si el archivo no existe en el disco o no es un archivo .exe, .dll o .plist válido, la función no hace nada (no se genera ningún error).

> La función sólo admite archivos .plist en formato xml (basados en texto). Se devuelve un error si se utiliza con un archivo .plist en formato binario.

***info* parameter object with a .exe or .dll file**

> Escribir la información de archivos .exe o .dll sólo es posible en Windows.

Each valid property set in the *info* object parameter is written in the version resource of the .exe or .dll file. Las propiedades disponibles son (toda otra propiedad será ignorada):

| Propiedad        | Tipo | Comentario                                                                                                                                              |
| ---------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InternalName     | Text |                                                                                                                                                         |
| ProductName      | Text |                                                                                                                                                         |
| CompanyName      | Text |                                                                                                                                                         |
| LegalCopyright   | Text |                                                                                                                                                         |
| ProductVersion   | Text |                                                                                                                                                         |
| FileDescription  | Text |                                                                                                                                                         |
| FileVersion      | Text |                                                                                                                                                         |
| OriginalFilename | Text |                                                                                                                                                         |
| WinIcon          | Text | Ruta Posix del archivo .ico. Esta propiedad sólo se aplica a los archivos ejecutables generados por 4D. |

For all properties except `WinIcon`, if you pass a null or empty text as value, an empty string is written in the property. Si pasa un valor de tipo diferente a texto, se convierte en una cadena.

For the `WinIcon` property, if the icon file does not exist or has an incorrect format, an error is generated.

***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Se aceptan todos los nombre de llaves. Los tipos de valores se conservan cuando es posible.

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Las demás llaves existentes en el archivo .plist no se modifican.

> Para definir un valor de tipo Fecha, el formato a utilizar es una cadena de timestamp json formada en ISO UTC sin milisegundos ("2003-02-01T01:02:03Z") como en el editor de plist Xcode.

#### Ejemplo

```4d
  // definir el copyright y versión de un archivo .exe (Windows)
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
  // definir algunas llaves en un archivo info.plist (todas las plataformas)
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

#### Ver también

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->

## .setContent()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->

<!--REF #FileClass.setContent().Params -->

| Parámetros | Tipo |    | Descripción                       |
| ---------- | ---- | -- | --------------------------------- |
| content    | BLOB | -> | Nuevos contenidos para el archivo |

<!-- END REF -->

#### Descripción

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

#### Ejemplo

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```

<!-- END REF -->

<!-- REF file.setText().Desc -->

## .setText()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| 19 R3       | Por defecto para los nuevos proyectos: sin BOM y (macOS) LF para EOL |
| 17 R5       | Añadidos                                                                                                |

</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->

<!--REF #FileClass.setText().Params -->

| Parámetros  | Tipo    |    | Descripción                                |
| ----------- | ------- | -- | ------------------------------------------ |
| text        | Text    | -> | Texto a almacenar en el archivo            |
| charSetName | Text    | -> | Nombre del juego de caracteres             |
| charSetNum  | Integer | -> | Número del conjunto de caracteres          |
| breakMode   | Integer | -> | Modo de tratamiento de los saltos de línea |

<!-- END REF -->

#### Descripción

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. Cuando el archivo ya existe en el disco, se borra su contenido anterior, excepto si ya está abierto, en cuyo caso se bloquea su contenido y se genera un error.

In *text*, pass the text to write to the file. Puede ser un texto literal ("my text"), o un campo / variable texto 4D.

Opcionalmente, puede designar el conjunto de caracteres que se utilizará para la escritura del contenido. Puede pasar:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

Si existe una marca de orden de bytes (BOM) para el conjunto de caracteres, 4D la inserta en el archivo a menos que el conjunto de caracteres utilizado contenga el sufijo "-no-bom" (por ejemplo, "UTF-8-no-bom"). Si no especifica un conjunto de caracteres, por defecto 4D utiliza el conjunto de caracteres "UTF-8" sin BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

| Constante                     | Valor | Comentario                                                                                                                                                                                                                                          |
| ----------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Sin procesar                                                                                                                                                                                                                                        |
| `Document with native format` | 1     | (Por defecto) Los saltos de línea se convierten al formato nativo del sistema operativo: LF (salto de línea) en macOS, CRLF (salto de línea + retorno de carro) en Windows |
| `Document with CRLF`          | 2     | Los fines de línea se convierten en CRLF (retorno de carro + salto de línea), el formato predeterminado de Windows                                                                                                               |
| `Document with CR`            | 3     | Los fines de línea se convierten en CR (retorno de carro), el formato clásico por defecto de Mac OS                                                                                                                              |
| `Document with LF`            | 4     | Los fines de línea se convierten en LF (salto de línea), el formato Unix y macOS por defecto                                                                                                                                     |

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

> **Compatibility Note**: Compatibility options are available for EOL and BOM management. See [Compatibility page](https://doc.4d.com/4dv19R/help/title/en/page3239.html) on doc.4d.com.

#### Ejemplo

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```

<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
