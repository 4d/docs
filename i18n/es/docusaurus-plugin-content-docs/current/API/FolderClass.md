---
id: FolderClass
title: Folder
---

`Folder` objects are created with the [`Folder`](#folder) command. Contienen referencias a carpetas que pueden o no existir realmente en el disco. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`folder.create()`](#create) function.

### Ejemplo

El siguiente ejemplo crea una carpeta "JohnSmith":

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Rutas de acceso

`Folder` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.

### Objeto Folder

|                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #directory.copyTo().Summary -->                           |
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FolderClass.create().Summary -->                       |
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FolderClass.createAlias().Summary -->        |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #directory.creationDate.Summary -->             |
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #directory.creationTime.Summary -->             |
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FolderClass.delete().Summary -->                       |
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)<br/><!-- INCLUDE #directory.exists.Summary -->                               |
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)<br/><!-- INCLUDE #directory.extension.Summary -->                      |
| [<!-- INCLUDE #directory.file().Syntax -->](#file)<br/><!-- INCLUDE #directory.file().Summary -->                                 |
| [<!-- INCLUDE #directory.files().Syntax -->](#files)<br/><!-- INCLUDE #directory.files().Summary -->                              |
| [<!-- INCLUDE #directory.folder().Syntax -->](#folder)<br/><!-- INCLUDE #directory.folder().Summary -->                           |
| [<!-- INCLUDE #directory.folders().Syntax -->](#folders)<br/><!-- INCLUDE #directory.folders().Summary -->                        |
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #directory.fullName.Summary -->                         |
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #directory.getIcon().Summary -->                        |
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #directory.hidden.Summary -->                               |
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #directory.isAlias.Summary -->                            |
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #directory.isFile.Summary -->                               |
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #directory.isFolder.Summary -->                         |
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)<br/><!-- INCLUDE #directory.isPackage.Summary -->                      |
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #directory.modificationDate.Summary --> |
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #directory.modificationTime.Summary --> |
| [<!-- INCLUDE #directory.name.Syntax -->](#name)<br/><!-- INCLUDE #directory.name.Summary -->                                     |
| [<!-- INCLUDE #directory.original.Syntax -->](#original)<br/><!-- INCLUDE #directory.original.Summary -->                         |
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)<br/><!-- INCLUDE #directory.parent.Summary -->                               |
| [<!-- INCLUDE #directory.path.Syntax -->](#path)<br/><!-- INCLUDE #directory.path.Summary -->                                     |
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #directory.platformPath.Summary -->             |
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FolderClass.moveTo().Summary -->                       |
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FolderClass.rename().Summary -->                       |

## Folder

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones              |
| ----------- | --------------------------- |
| 19 R8       | Soporte de `fk home folder` |
| 17 R5       | Añadidos                    |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| Parámetros     | Tipo                      |     | Descripción                                                        |
| -------------- | ------------------------- | :-: | ------------------------------------------------------------------ |
| path           | Text                      |  -> | Ruta de la carpeta                                                 |
| folderConstant | Integer                   |  -> | Constante de la carpeta 4D                                         |
| pathType       | Integer                   |  -> | `fk posix path` (default) or `fk platform path` |
| -              |                           |  -> | * para devolver la carpeta de la base local                        |
| Result         | 4D.Folder |  <- | Nuevo objeto de carpeta                                            |

<!-- END REF -->

#### Descripción

The `Folder` command <!-- REF #_command_.Folder.Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. El comando acepta dos sintaxis:

**Folder ( path { ; pathType } { ; \* } )**

In the *path* parameter, pass a folder path string. Puede utilizar una cadena personalizada o un filesystem (por ejemplo, "/DATA").

> Only absolute pathnames are supported with the `Folder` command.

Por defecto, 4D espera una ruta expresada con la sintaxis POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. Las siguientes constantes están disponibles:

| Constante        | Valor | Comentario                                                                                                                           |
| ---------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| fk platform path | 1     | Ruta expresada con una sintaxis específica de la plataforma (obligatoria en caso de nombre de ruta de plataforma) |
| fk posix path    | 0     | Ruta expresada con sintaxis POSIX (por defecto)                                                                   |

**Folder ( folderConstant { ; \* } )**

In the *folderConstant* parameter, pass a 4D built-in or system folder, using one of the following constants:

| Constante                  | Valor | Comentario                                                                                                                   |
| -------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116   |                                                                                                                              |
| fk data folder             | 9     | Filesystem asociado: "/DATA"                                                                                 |
| fk database folder         | 4     | Filesystem asociado: "/PACKAGE"                                                                              |
| fk desktop folder          | 115   |                                                                                                                              |
| fk documents folder        | 117   | Carpeta Documentos del usuario                                                                                               |
| fk home folder             | 118   | Current home folder of the user (usually `/Users/<username>/`)                                            |
| fk licenses folder         | 1     | Carpeta que contiene los archivos de licencia 4D de la máquina                                                               |
| fk logs folder             | 7     | Filesystem asociado: "/LOGS"                                                                                 |
| fk mobileApps folder       | 10    |                                                                                                                              |
| fk remote database folder  | 3     | Carpeta de la base de datos 4D creada en cada máquina 4D remota                                                              |
| fk resources folder        | 6     | Filesystem asociado: "/RESOURCES"                                                                            |
| fk system folder           | 100   |                                                                                                                              |
| fk user preferences folder | 0     | Carpeta 4D que almacena los archivos de preferencias del usuario en la carpeta personal del usuario                          |
| fk web root folder         | 8     | Carpeta raíz web actual de la base de datos: si está dentro del paquete "/PACKAGE/path", si no ruta completa |

If the command is called from a component, pass the optional *parameter to get the path of the host database. Otherwise, if you omit the* parameter, a null object is always returned.

> On Windows, in merged clients, the location of built-in folders is modified if the `ShareLocalResourcesOnWindowsClient` [BuildApp key](../Desktop/building.md#buildapp4dsettings) is used.

## 4D.Folder.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #4D.Folder.new().Syntax -->

**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**4D.Folder.new** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

#### Descripción

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. It is identical to the [`Folder`](#folder) command (shortcut).

> It is recommended to use the [`Folder`](#folder) shortcut command instead of `4D.Folder.new()`.

<!-- INCLUDE directory.copyTo().Desc -->

<!-- REF folder.create().Desc -->

## .create()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FolderClass.create().Syntax -->**.create()** : Boolean<!-- END REF -->

<!--REF #FolderClass.create().Params -->

| Parámetros | Tipo    |    | Descripción                                                        |
| ---------- | ------- | -- | ------------------------------------------------------------------ |
| Result     | Boolean | <- | True si la carpeta se ha creado con éxito, false en caso contrario |

<!-- END REF -->

#### Descripción

The `.create()` function <!-- REF #FolderClass.create().Summary -->creates a folder on disk according to the properties of the `Folder` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. Si la carpeta ya existe en el disco, la función no hace nada (no se lanza ningún error) y devuelve false.

**Valor devuelto**

- **True** if the folder is created successfully;
- **False** if a folder with the same name already exists or if an error occured.

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
```

<!-- END REF -->

<!-- REF folder.createAlias().Desc -->

## .createAlias()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FolderClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FolderClass.createAlias().Params -->

| Parámetros        | Tipo                      |    | Descripción                                          |
| ----------------- | ------------------------- | -- | ---------------------------------------------------- |
| destinationFolder | 4D.Folder | -> | Carpeta de destino para el alias o el acceso directo |
| aliasName         | Text                      | -> | Nombre del alias o del atajo                         |
| aliasType         | Integer                   | -> | Tipo de enlace del alias                             |
| Result            | 4D.File   | <- | Referencia de alias o de acceso directo              |

<!-- END REF -->

#### Descripción

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FolderClass.delete().Syntax -->**.delete**( { *option* : Integer } )<!-- END REF -->

<!-- REF #FolderClass.delete().Params -->

| Parámetros | Tipo    |    | Descripción                      |
| ---------- | ------- | -- | -------------------------------- |
| option     | Integer | -> | Opción de eliminación de carpeta |

<!-- END REF -->

#### Descripción

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->deletes the folder<!-- END REF -->.

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. Si desea que el comando pueda eliminar carpetas que no están vacías, debe utilizar el parámetro option con una de las siguientes constantes:

| Constante              | Valor | Comentario                                        |
| ---------------------- | ----- | ------------------------------------------------- |
| `Delete only if empty` | 0     | Elimina la carpeta sólo cuando está vacía         |
| `Delete with contents` | 1     | Elimina la carpeta junto con todo lo que contiene |

When `Delete only if empty` is passed or if you omit the option parameter:

- La carpeta sólo se elimina si está vacía; en caso contrario, el comando no hace nada y se genera un error -47.
- Si la carpeta no existe, se genera el error -120.

Cuando se pasa `Delete with contents`:

- La carpeta, junto con todo su contenido, se elimina.
  **Warning**: Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted.
- Si esta carpeta, o cualquiera de los archivos que contiene, no puede ser eliminada, la eliminación se interrumpe tan pronto como se detecta el primer elemento inaccesible y se devuelve un error(\*). En este caso, la carpeta puede ser eliminada sólo parcialmente. When deletion is aborted, you can use the `GET LAST ERROR STACK` command to retrieve the name and path of the offending file.
- Si la carpeta no existe, el comando no hace nada y no devuelve ningún error.
  (\*) Windows: -54 (Attempt to open locked file for writing) macOS: -45 (The file is locked or the pathname is not correct)

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FolderClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.moveTo().Params -->

| Parámetros        | Tipo                      |    | Descripción                              |
| ----------------- | ------------------------- | -- | ---------------------------------------- |
| destinationFolder | 4D.Folder | -> | Carpeta de destino                       |
| newName           | Text                      | -> | Nombre completo de la carpeta trasladada |
| Result            | 4D.Folder | <- | Carpeta movida                           |

<!-- END REF -->

#### Descripción

The `.moveTo( )` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `Folder` object (source folder) into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

Por defecto, la carpeta conserva su nombre cuando se mueve. If you want to rename the moved folder, pass the new full name in the *newName* parameter. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

**Objeto devuelto**

The moved `Folder` object.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!--REF #FolderClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.rename().Params -->

| Parámetros | Tipo                      |    | Descripción                           |
| ---------- | ------------------------- | -- | ------------------------------------- |
| newName    | Text                      | -> | Nuevo nombre completo para la carpeta |
| Result     | 4D.Folder | <- | Carpeta renombrada                    |

<!-- END REF -->

#### Descripción

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->renames the folder with the name you passed in *newName* and returns the renamed `Folder` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. Si ya existe un archivo con el mismo nombre, se devuelve un error.

**Objeto devuelto**

El objeto `Folder` renombrado.

#### Ejemplo

```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<!-- END REF -->
