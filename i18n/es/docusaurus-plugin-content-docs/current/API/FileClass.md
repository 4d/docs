---
id: FileClass
title: File
---

Los objetos `File` se crean con el comando [`File`](../commands/file.md). Contienen referencias a archivos de disco que pueden o no existir realmente en el disco. Por ejemplo, cuando ejecuta el comando `File` para crear un nuevo archivo, se crea un objeto `File` válido pero en realidad nada se guarda en el disco hasta que se llama a la función [`file.create( )`](#create).

### Ejemplo

El siguiente ejemplo crea un archivo de preferencias en la carpeta del proyecto:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Rutas de acceso

Los objetos `File` soportan varios nombres de ruta, incluyendo la sintaxis `filesystems` o `posix`. Los nombres de ruta soportados se detallan en la página [**Rutas de acceso**](../Concepts/paths.md).

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

## 4D.File.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #4D.File.new().Syntax -->

**4D.File.new** ( *path* : Text { ; *pathType* : Integer } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer ) : 4D.File<!-- END REF -->

#### Descripción

La función `4D.File.new()` <!-- REF #4D.File.new().Summary -->crea y devuelve un nuevo objeto de tipo `4D.File`<!-- END REF -->. Es idéntico al comando [`File`](../commands/file.md) (atajo).

> Se recomienda utilizar el comando de acceso directo [`File`](../commands/file.md) en lugar de `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->

## .create()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF file.create().Note -->

**No disponible para archivos ZIP**<!-- END REF -->

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->

<!--REF #FileClass.create().Params -->

| Parámetros | Tipo    |                             | Descripción                                                        |
| ---------- | ------- | --------------------------- | ------------------------------------------------------------------ |
| Result     | Boolean | <- | True si el archivo se ha creado con éxito, false en caso contrario |

<!-- END REF -->

#### Descripción

La función `.create()` <!-- REF #FileClass.create().Summary -->crea un archivo en el disco según las propiedades del objeto `File`<!-- END REF -->.

Si es necesario, la función crea la jerarquía de carpetas como se describe en las propiedades [platformPath](#platformpath) o [path](#path). Si el archivo ya existe en el disco, la función no hace nada (no se lanza ningún error) y devuelve false.

**Valor devuelto**

- **True** si el archivo se crea con éxito;
- **False** si ya existe un archivo con el mismo nombre o si ha ocurrido un error.

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

| Parámetros        | Tipo                      |                             | Descripción                                          |
| ----------------- | ------------------------- | --------------------------- | ---------------------------------------------------- |
| destinationFolder | 4D.Folder | ->                          | Carpeta de destino para el alias o el acceso directo |
| aliasName         | Text                      | ->                          | Nombre del alias o del atajo                         |
| aliasType         | Integer                   | ->                          | Tipo de enlace del alias                             |
| Result            | 4D.File   | <- | Referencia del archivo del alias o de atajo          |

<!-- END REF -->

#### Descripción

La función `.createAlias()` <!-- REF #FileClass.createAlias().Summary -->crea un alias (macOS) o un acceso directo (Windows)<!-- END REF --> al archivo con el nombre *aliasName* especificado en la carpeta designada por el objeto *destinationFolder*.

Pase el nombre del alias o del acceso directo a crear en el parámetro *aliasName*.

Por defecto en macOS, la función crea un alias estándar. También puede crear un enlace simbólico utilizando el parámetro *aliasType*. Las siguientes constantes están disponibles:

| Constante          | Valor | Comentario                                            |
| ------------------ | ----- | ----------------------------------------------------- |
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

La función `.delete()` <!-- REF #FileClass.delete().Summary -->borra el archivo<!-- END REF -->.

Si el archivo no existe en el disco, la función no hace nada (no se genera ningún error).

Si el archivo está abierto, el resultado depende del sistema operativo:

- en Windows, se genera un error,
- en macOS, no se genera ningún error y el archivo se elimina.

:::caution

`.delete()` puede eliminar cualquier archivo de un disco. Esto incluye los documentos creados con otras aplicaciones, así como las propias aplicaciones. `.delete()` debe utilizarse con extrema precaución. Eliminar un archivo es una operación permanente y no se puede deshacer.

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

| Parámetros | Tipo   |                             | Descripción                                                                                                 |
| ---------- | ------ | --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Result     | Object | <- | Contenido del archivo de recurso versión .exe/.dll o .plist |

<!-- END REF -->

#### Descripción

La función `.getAppInfo()` <!-- REF #FileClass.getAppInfo().Summary -->devuelve el contenido de un archivo de información **.exe**, **.dll** o **.plist** como un objeto<!-- END REF -->.

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

El contenido xml del archivo se analiza y las llaves se devuelven como propiedades del objeto, conservando sus tipos (texto, booleano, numérico). `.plist dict` se devuelve como un objeto JSON y `.plist array` se devuelve como un array JSON.

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

| Parámetros        | Tipo                      |                             | Descripción                            |
| ----------------- | ------------------------- | --------------------------- | -------------------------------------- |
| destinationFolder | 4D.Folder | ->                          | Carpeta de destino                     |
| newName           | Text                      | ->                          | Nombre completo del archivo trasladado |
| Result            | 4D.File   | <- | Archivo movido                         |

<!-- END REF -->

#### Descripción

La función `.moveTo()` <!-- REF #FileClass.moveTo().Summary -->mueve o renombra el objeto `File` en la carpeta especificada *destinationFolder*<!-- END REF -->.

La *destinationFolder* debe existir en el disco, de lo contrario se genera un error.

Por defecto, el archivo conserva su nombre cuando se mueve. Si desea renombrar el archivo desplazado, pase el nombre completo en el parámetro *newName*. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

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

| Parámetros | Tipo                                             |                             | Descripción                                                 |
| ---------- | ------------------------------------------------ | --------------------------- | ----------------------------------------------------------- |
| mode       | Text                                             | ->                          | Modo de apertura: "read", "write", "append" |
| options    | Object                                           | ->                          | Opciones de apertura                                        |
| Result     | [4D.FileHandle](FileHandleClass) | <- | Nuevo objeto File handle                                    |

<!-- END REF -->

#### Descripción

La función `.open()` <!-- REF #FileClass.open().Summary -->crea y devuelve un nuevo objeto [4D.FileHandle](FileHandleClass) en el archivo, en el modo especificado o con las opciones especificadas<!-- END REF -->. Puede utilizar las funciones y propiedades de la clase [4D.FileHandle](FileHandleClass) para escribir, leer o añadir contenido al archivo.

Si utiliza el parámetro *mode* (texto), pase el modo de apertura para el file handle:

| *mode*   | Descripción                                                                                                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "read"   | (Por defecto) Crea un file handle para leer los valores en el archivo. Si el archivo no existe en el disco, se devuelve un error. Puede abrir tantos file handles como quiera en modo "read" en el mismo objeto File.                      |
| "write"  | Crea un file handle para escribir valores en el archivo (empezando por el inicio del contenido del archivo). Si el archivo no existe en el disco, se crea. Sólo se puede abrir un file handle en modo "write" en el mismo objeto File.     |
| "append" | Crea un file handle para escribir los valores en el archivo (empezando por el final del contenido del archivo). Si el archivo no existe en el disco, se crea. Sólo se puede abrir un file handle en modo "append" en el mismo objeto File. |

> El valor de *mode* es sensible a las mayúsculas y minúsculas.

Si utiliza el parámetro *options* (object), puede pasar más opciones para el file handle a través de las siguientes propiedades (estas propiedades se pueden leer después desde el objeto [file handle](FileHandleClass) abierto):

| *opciones*        | Tipo           | Descripción                                                                                                                                                                         | Por defecto  |
| ----------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `.mode`           | Text           | Modo de apertura (ver *mode* arriba)                                                                                                                             | "read"       |
| `.charset`        | Text           | Conjunto de caracteres utilizado al leer o escribir en el archivo. Utilice el nombre estándar del conjunto (por ejemplo, "ISO-8859-1" o "UTF-8") | "UTF-8"      |
| `.breakModeRead`  | Texto o número | Modo de procesamiento de los saltos de línea utilizados al leer el archivo (ver abajo)                                                                           | "native" o 1 |
| `.breakModeWrite` | Texto o número | Modo de procesamiento de los saltos de línea utilizados al escribir en el archivo (ver abajo)                                                                    | "native" o 1 |

La función reemplaza todos los delimitadores originales de final de línea. Por defecto, se utiliza el delimitador nativo, pero puede definir otro delimitador. Las propiedades `.breakModeRead` y `.breakModeWrite` indican el procesamiento a aplicar a los caracteres de fin de línea en el documento. Puede utilizar uno de los siguientes valores (texto o número):

| Modo de ruptura en texto | Break mode en numérico (constante) | Descripción                                                                                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"                 | 1 (`Document with native format`)  | (Por defecto) Los saltos de línea se convierten al formato nativo del sistema operativo: LF (salto de línea) en macOS, CRLF (retorno de carro + salto de línea) en Windows |
| "crlf"                   | 2 (`Document with CRLF`)           | Los fines de línea se convierten en CRLF (retorno de carro + salto de línea), el formato predeterminado de Windows                                                                                                               |
| "cr"                     | 3 (`Document with CR`)             | Los fines de línea se convierten en CR (retorno de carro), el formato clásico por defecto de Mac OS                                                                                                                              |
| "lf"                     | 4 (`Document with LF`)             | Los fines de línea se convierten en LF (salto de línea), el formato Unix y macOS por defecto                                                                                                                                     |

> El valor del parámetro *break mode as text* es sensible a las mayúsculas y minúsculas.

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

| Parámetros | Tipo                    |                             | Descripción                       |
| ---------- | ----------------------- | --------------------------- | --------------------------------- |
| newName    | Text                    | ->                          | Nuevo nombre completo del archivo |
| Result     | 4D.File | <- | Archivo renombrado                |

<!-- END REF -->

#### Descripción

La función `.rename()` <!-- REF #FileClass.rename().Summary -->renombra el archivo con el nombre que se ha pasado en *newName* y devuelve el objeto `File` renombrado<!-- END REF -->.

El parámetro *newName* debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error. Si ya existe un archivo con el mismo nombre, se devuelve un error.

Tenga en cuenta que la función modifica el nombre completo del archivo, es decir, si no pasa una extensión en *newName*, el archivo tendrá un nombre sin extensión.

**Objeto devuelto**

El objeto `File` renombrado.

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

La función `.setAppInfo()` <!-- REF #FileClass.setAppInfo().Summary -->escribe las propiedades *info* como contenido de información de un archivo **.exe**, **.dll** o **.plist**<!-- END REF -->.

La función debe utilizarse con un archivo .exe, .dll o .plist existente. Si el archivo no existe en el disco o no es un archivo .exe, .dll o .plist válido, la función no hace nada (no se genera ningún error).

> La función sólo admite archivos .plist en formato xml (basados en texto). Se devuelve un error si se utiliza con un archivo .plist en formato binario.

***Parámetro info* con un archivo .exe o .dll**

> Escribir la información de archivos .exe o .dll sólo es posible en Windows.

Cada propiedad válida definida en el parámetro objeto *info* se escribe en el recurso de versión del archivo .exe o .dll. Las propiedades disponibles son (toda otra propiedad será ignorada):

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

Para todas las propiedades excepto `WinIcon`, si se pasa un texto nulo o vacío como valor, se escribe una cadena vacía en la propiedad. Si pasa un valor de tipo diferente a texto, se convierte en una cadena.

Para la propiedad `WinIcon`, si el archivo del icono no existe o tiene un formato incorrecto, se genera un error.

***Parámetro info* con un un archivo .plist**

Cada propiedad válida definida en el parámetro objeto *info* se escribe en el archivo .plist en forma de llave. Se aceptan todos los nombre de llaves. Los tipos de valores se conservan cuando es posible.

Si un conjunto de llaves en el parámetro *info* ya está definido en el archivo .plist, su valor se actualiza manteniendo su tipo original. Las demás llaves existentes en el archivo .plist no se modifican.

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

La función `.setContent( )` <!-- REF #FileClass.setContent().Summary -->reescribe todo el contenido del archivo utilizando los datos almacenados en el BLOB *content*<!-- END REF -->. Para obtener información sobre BLOBs, consulte la sección [BLOB](Concepts/dt_blob.md).

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

La función `.setText()` <!-- REF #FileClass.setText().Summary --> escribe *text* como el nuevo contenido del archivo<!-- END REF -->.

Si el archivo referenciado en el objeto `File` no existe en el disco, la función lo crea. Cuando el archivo ya existe en el disco, se borra su contenido anterior, excepto si ya está abierto, en cuyo caso se bloquea su contenido y se genera un error.

En *text*, pase el texto a escribir en el archivo. Puede ser un texto literal ("my text"), o un campo / variable texto 4D.

Opcionalmente, puede designar el conjunto de caracteres que se utilizará para la escritura del contenido. Puede pasar:

- en *charSetName*, una cadena que contiene el nombre del conjunto estándar (por ejemplo "ISO-8859-1" o "UTF-8"),
- o en *charSetNum*, el ID MIBEnum (número) del nombre del conjunto estándar.

> Para conocer la lista de los conjuntos de caracteres que soporta 4D, consulte la descripción del comando `CONVERT FROM TEXT`.

Si existe una marca de orden de bytes (BOM) para el conjunto de caracteres, 4D la inserta en el archivo a menos que el conjunto de caracteres utilizado contenga el sufijo "-no-bom" (por ejemplo, "UTF-8-no-bom"). Si no especifica un conjunto de caracteres, por defecto 4D utiliza el conjunto de caracteres "UTF-8" sin BOM.

En *breakMode*, se puede pasar un número que indica el procesamiento a aplicar a los caracteres de fin de línea antes de guardarlos en el archivo. Las siguientes constantes, que se encuentran en el tema **Documentos sistema**, están disponibles:

| Constante                     | Valor | Comentario                                                                                                                                                                                                                                          |
| ----------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Sin procesar                                                                                                                                                                                                                                        |
| `Document with native format` | 1     | (Por defecto) Los saltos de línea se convierten al formato nativo del sistema operativo: LF (salto de línea) en macOS, CRLF (salto de línea + retorno de carro) en Windows |
| `Document with CRLF`          | 2     | Los fines de línea se convierten en CRLF (retorno de carro + salto de línea), el formato predeterminado de Windows                                                                                                               |
| `Document with CR`            | 3     | Los fines de línea se convierten en CR (retorno de carro), el formato clásico por defecto de Mac OS                                                                                                                              |
| `Document with LF`            | 4     | Los fines de línea se convierten en LF (salto de línea), el formato Unix y macOS por defecto                                                                                                                                     |

Por defecto, cuando se omite el parámetro *breakMode*, los saltos de línea se procesan en modo nativo (1).

> **Nota de compatibilidad**: las opciones de compatibilidad están disponibles para la gestión de EOL y de BOM. Ver la [página Compatibilidad](https://doc.4d.com/4dv19R/help/title/en/page3239.html) en doc.4d.com.

#### Ejemplo

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```

<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
