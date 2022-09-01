---
id: FolderClass
title: Folder
---



Los objetos `Folder` se crean con el comando [`Folder`](#folder). Contienen referencias a carpetas que pueden o no existir realmente en el disco. Por ejemplo, cuando se ejecuta el comando `Folder` para crear una nueva carpeta, se crea un objeto `Folder` válido, pero en realidad no se almacena nada en el disco hasta que se llama a la función [`folder.create( )`](#create-).

### Ejemplo

El siguiente ejemplo crea una carpeta "JohnSmith":

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Objeto Folder

|                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.copyTo().Summary -->|
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.create().Summary -->|
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.createAlias().Summary --> |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationDate.Summary -->|
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationTime.Summary -->|
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.delete().Summary -->|
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.exists.Summary -->|
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.extension.Summary -->|
| [<!-- INCLUDE #directory.file().Syntax -->](#file)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.file().Summary -->|
| [<!-- INCLUDE #directory.files().Syntax -->](#files)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.files().Summary -->|
| [<!-- INCLUDE #directory.folder().Syntax -->](#folder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.folder().Summary -->|
| [<!-- INCLUDE #directory.folders().Syntax -->](#folders)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.folders().Summary -->|
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.fullName.Summary -->|
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.getIcon().Summary -->|
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.hidden.Summary -->|
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isAlias.Summary -->|
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFile.Summary -->|
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFolder.Summary -->|
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isPackage.Summary -->|
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationDate.Summary -->|
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationTime.Summary -->|
| [<!-- INCLUDE #directory.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.name.Summary -->|
| [<!-- INCLUDE #directory.original.Syntax -->](#original)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.original.Summary -->|
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.parent.Summary -->|
| [<!-- INCLUDE #directory.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.path.Summary -->|
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.platformPath.Summary -->|
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.moveTo().Summary -->|
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.rename().Summary -->|

## Folder

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF #_command_.Folder.Syntax -->

**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->

<!-- REF FolderClass.Folder.Params -->
| Parámetros     | Type      |    | Descripción                                        |
| -------------- | --------- |:--:| -------------------------------------------------- |
| path           | Text      | -> | Ruta de la carpeta                                 |
| folderConstant | Integer   | -> | Constante de la carpeta 4D                         |
| pathType       | Integer   | -> | `fk posix path` (por defecto) o `fk platform path` |
| *              |           | -> | * para devolver la carpeta de la base local        |
| Result         | 4D.Folder | <- | Nuevo objeto de carpeta|<!-- END REF -->

|

#### Descripción

The `Folder` command <!-- REF #_command_.Folder.Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. El comando acepta dos sintaxis:

**Folder ( path { ; pathType } { ; \* } )**

En el parámetro *path*, pase una ruta de carpeta. Puede utilizar una cadena personalizada o un filesystem (por ejemplo, "/DATA").

> Sólo se soportan los nombres de ruta absolutos con el comando `Folder`.

Por defecto, 4D espera una ruta expresada con la sintaxis POSIX. Si trabaja con los nombres de ruta de plataforma (Windows o macOS), debe declararlo utilizando el parámetro *pathType*. Las siguientes constantes están disponibles:

| Constante        | Value | Comentario                                                                                                        |
| ---------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Ruta expresada con una sintaxis específica de la plataforma (obligatoria en caso de nombre de ruta de plataforma) |
| fk posix path    | 0     | Ruta expresada con sintaxis POSIX (por defecto)                                                                   |

**Folder ( folderConstant { ; \* } )**

En el parámetro *folderConstant*, pase una carpeta 4D interna o sistema, utilizando una de las siguientes constantes:

| Constante                  | Value | Comentario                                                                                                   |
| -------------------------- | ----- | ------------------------------------------------------------------------------------------------------------ |
| fk applications folder     | 116   |                                                                                                              |
| fk data folder             | 9     | Filesystem asociado: "/DATA"                                                                                 |
| fk database folder         | 4     | Filesystem asociado: "/PACKAGE"                                                                              |
| fk desktop folder          | 115   |                                                                                                              |
| fk documents folder        | 117   | Carpeta Documentos del usuario                                                                               |
| fk licenses folder         | 1     | Carpeta que contiene los archivos de licencia 4D de la máquina                                               |
| fk logs folder             | 7     | Filesystem asociado: "/LOGS"                                                                                 |
| fk mobileApps folder       | 10    |                                                                                                              |
| fk remote database folder  | 3     | Carpeta de la base de datos 4D creada en cada máquina 4D remota                                              |
| fk resources folder        | 6     | Filesystem asociado: "/RESOURCES"                                                                            |
| fk system folder           | 100   |                                                                                                              |
| fk user preferences folder | 0     | 4D folder that stores user preference files within the `\<userName>` directory.                       |
| fk web root folder         | 8     | Carpeta raíz web actual de la base de datos: si está dentro del paquete "/PACKAGE/path", si no ruta completa |

If the command is called from a component, pass the optional *parameter to get the path of the host database. Otherwise, if you omit the* parameter, a null object is always returned.

## 4D.Folder.new()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #4D.Folder.new().Syntax -->
**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br/>**4D.Folder.new** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->

#### Descripción

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. Es idéntico al comando [`Folder`](#folder) (acceso directo).

> Se recomienda utilizar el comando de acceso directo[`Folder<`](#folder) en lugar de `4D.Folder.new()`.

<!-- INCLUDE directory.copyTo().Desc -->

<!-- REF folder.create().Desc -->
## .create()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!--REF #FolderClass.create().Syntax -->

**.create()** : Boolean<!-- END REF -->

<!--REF #FolderClass.create().Params -->
| Parámetros | Type    |    | Descripción                                                                                   |
| ---------- | ------- | -- | --------------------------------------------------------------------------------------------- |
| Result     | Boolean | <- | True si la carpeta se ha creado con éxito, false en caso contrario|<!-- END REF -->

|

#### Descripción

The `.create()` function <!-- REF #FolderClass.create().Summary -->The `.create()` function<!-- END REF -->.

Si es necesario, la función crea la jerarquía de carpetas como se describe en las propiedades [platformPath](#platformpath) o [path](#path). Si la carpeta ya existe en el disco, la función no hace nada (no se lanza ningún error) y devuelve false.

**Valor devuelto**

* **True** si la carpeta se crea con éxito;
* **False** si ya existe una carpeta con el mismo nombre o si ha ocurrido un error.

#### Ejemplo 1

Cree una carpeta vacía en la carpeta de la base:

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### Ejemplo 2

Creación de la carpeta "/Archives2019/January/" en la carpeta de la base:

```4d
$newFolder:=Folder("/PACKAGE/Archives2019/January")
If($newFolder.create())
 ALERT("The "+$newFolder.name+" folder was created.")
Else
 ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
Else
 ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
```

<!-- END REF -->

<!-- REF folder.createAlias().Desc -->
## .createAlias()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!--REF #FolderClass.createAlias().Syntax -->

**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FolderClass.createAlias().Params -->
| Parámetros        | Type      |    | Descripción                                                        |
| ----------------- | --------- | -- | ------------------------------------------------------------------ |
| destinationFolder | 4D.Folder | -> | Carpeta de destino para el alias o el acceso directo               |
| aliasName         | Text      | -> | Nombre del alias o del atajo                                       |
| aliasType         | Integer   | -> | Tipo de enlace del alias                                           |
| Result            | 4D.File   | <- | Referencia de alias o de acceso directo|<!-- END REF -->

|

#### Descripción

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

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

Quiere crear un alias para una carpeta de archivos en su carpeta principal:

```4d
$myFolder:=Folder("C:\\Documents\\Archives\\2019\\January";fk platform path)
$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")
```
<!-- END REF -->

<!-- INCLUDE directory.creationDate.Desc -->

<!-- INCLUDE directory.creationTime.Desc -->

<!-- REF folder.delete().Desc -->
## .delete()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!--REF #FolderClass.delete().Syntax -->

**.delete**( { *option* : Integer } )<!-- END REF -->

<!-- REF #FolderClass.delete().Params -->
| Parámetros | Type    |    | Descripción                                                 |
| ---------- | ------- | -- | ----------------------------------------------------------- |
| option     | Integer | -> | Opción de eliminación de carpeta|<!-- END REF -->

|

#### Descripción

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->The `.delete()` function<!-- END REF -->.

Por defecto, por razones de seguridad, si se omite el parámetro option, `.delete( )` sólo permite borrar las carpetas vacías. Si desea que el comando pueda eliminar carpetas que no están vacías, debe utilizar el parámetro option con una de las siguientes constantes:

| Constante              | Value | Comentario                                        |
| ---------------------- | ----- | ------------------------------------------------- |
| `Delete only if empty` | 0     | Elimina la carpeta sólo cuando está vacía         |
| `Delete with contents` | 1     | Elimina la carpeta junto con todo lo que contiene |

Cuando `Delete only if empty` se pasa o si se omite el parámetro option:

* La carpeta sólo se elimina si está vacía; en caso contrario, el comando no hace nada y se genera un error -47.
* Si la carpeta no existe, se genera el error -120.

Cuando se pasa `Delete with contents`:

* La carpeta, junto con todo su contenido, se elimina. **Advertencia**: incluso esta carpeta y/o su contenido estén bloqueados o definidos como de sólo lectura, si el usuario actual tiene los derechos de acceso adecuados, la carpeta (y su contenido) aún se elimina.
* Si esta carpeta, o cualquiera de los archivos que contiene, no puede ser eliminada, la eliminación se interrumpe tan pronto como se detecta el primer elemento inaccesible y se devuelve un error(*). En este caso, la carpeta puede ser eliminada sólo parcialmente. Cuando se interrumpe el borrado, puede utilizar el comando `GET LAST ERROR STACK` para recuperar el nombre y la ruta de acceso del archivo infractor.
* Si la carpeta no existe, el comando no hace nada y no devuelve ningún error. (*) Windows: -54 (Attempt to open locked file for writing) macOS: -45 (The file is locked or the pathname is not correct)

<!-- END REF -->

<!-- INCLUDE directory.exists.Desc -->

<!-- INCLUDE directory.extension.Desc -->

<!-- INCLUDE directory.file().Desc -->

<!-- INCLUDE directory.files().Desc -->

<!-- INCLUDE directory.folder().Desc -->

<!-- INCLUDE directory.folders().Desc -->

<!-- INCLUDE directory.fullName.Desc -->

<!-- INCLUDE directory.getIcon().Desc -->

<!-- INCLUDE directory.hidden.Desc -->

<!-- INCLUDE directory.isAlias.Desc -->

<!-- INCLUDE directory.isFile.Desc -->

<!-- INCLUDE directory.isFolder.Desc -->

<!-- INCLUDE directory.isPackage.Desc -->

<!-- INCLUDE directory.modificationDate.Desc -->

<!-- INCLUDE directory.modificationTime.Desc -->

<!-- REF folder.moveTo().Desc -->
## .moveTo()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!--REF #FolderClass.moveTo().Syntax -->

**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.moveTo().Params -->
| Parámetros        | Type      |    | Descripción                               |
| ----------------- | --------- | -- | ----------------------------------------- |
| destinationFolder | 4D.Folder | -> | Carpeta de destino                        |
| newName           | Text      | -> | Nombre completo de la carpeta trasladada  |
| Result            | 4D.Folder | <- | Carpeta movida|<!-- END REF -->

|

#### Descripción

The `.moveTo( )` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `Folder` object (source folder) into the specified *destinationFolder*<!-- END REF -->.

La *destinationFolder* debe existir en el disco, de lo contrario se genera un error.

Por defecto, la carpeta conserva su nombre cuando se mueve. Si desea cambiar renombrar la carpeta desplazada, pase el nombre completo en el parámetro *newName*. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

**Objeto devuelto**

El objeto `Folder` movido.

#### Ejemplo

Quiere mover y renombrar una carpeta:

```4d
 var $tomove; $moved : Object
 $docs:=Folder(fk documents folder)
 $tomove:=$docs.folder("Pictures")
 $tomove2:=$tomove.moveTo($docs.folder("Archives");"Pic_Archives")
```
<!-- END REF -->

<!-- INCLUDE directory.name.Desc -->

<!-- INCLUDE directory.original.Desc -->

<!-- INCLUDE directory.parent.Desc -->

<!-- INCLUDE directory.path.Desc -->

<!-- INCLUDE directory.platformPath.Desc -->

<!-- REF folder.rename().Desc -->
## .rename()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!--REF #FolderClass.rename().Syntax -->

**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.rename().Params -->
| Parámetros | Type      |    | Descripción                                   |
| ---------- | --------- | -- | --------------------------------------------- |
| newName    | Text      | -> | Nuevo nombre completo para la carpeta         |
| Result     | 4D.Folder | <- | Carpeta renombrada|<!-- END REF -->

|

#### Descripción

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->The `.rename()` function<!-- END REF -->.

El parámetro *newName* debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error. Si ya existe un archivo con el mismo nombre, se devuelve un error.

**Objeto devuelto**

El objeto `Folder` renombrado.

#### Ejemplo

```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```
<!-- END REF -->
