---
id: Directory
title: Clase Directory
---

## Descripción


<!-- REF directory.creationDate.Desc -->
## .creationDate

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.creationDate.Syntax -->
**.creationDate** : Date<!-- END REF -->


#### Descripción

La propiedad `.creationDate` devuelve <!-- REF #directory.creationDate.Summary -->la fecha de creación de la carpeta<!-- END REF -->.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->
 
--- 
 
 <!-- REF directory.creationTime.Desc -->
## .creationTime

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.creationTime.Syntax -->
**.creationTime** : Time<!-- END REF -->



#### Descripción

La propiedad `.creationTime` devuelve <!-- REF #directory.creationTime.Summary -->la hora de creación de la carpeta<!-- END REF --> (expresada como un número de segundos que comienza en 00:00).

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->

---


<!-- REF directory.exists.Desc -->
## .exists

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.exists.Syntax -->
**.exists** : Boolean<!-- END REF -->


#### Descripción

La propiedad `.exists` devuelve <!-- REF #directory.exists.Summary -->true si la carpeta existe en el disco<!-- END REF -->, y false en caso contrario.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->


---


<!-- REF directory.extension.Desc -->
## .extension

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.extension.Syntax -->
**.extension** : Text<!-- END REF -->


#### Descripción

La propiedad `.extension` <!-- REF #directory.extension.Summary -->devuelve la extensión del nombre de la carpeta (si la hay)<!-- END REF -->. Una extensión siempre comienza con ".". La propiedad devuelve una cadena vacía si el nombre de la carpeta no tiene extensión.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->


---

<!-- REF directory.fullName.Desc -->
## .fullName

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.fullName.Syntax -->
**.fullName** : Text<!-- END REF -->


#### Descripción

La propiedad `.fullName` <!-- REF #directory.fullName.Summary -->devuelve el nombre completo de la carpeta, incluyendo su extensión (si la hay)<!-- END REF -->.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->


---

<!-- REF directory.hidden.Desc -->
## .hidden

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.hidden.Syntax -->
**.hidden** : Boolean<!-- END REF -->


#### Descripción

La propiedad `.hidden` devuelve <!-- REF #directory.hidden.Summary --> true si la carpeta está configurada como "oculta" a nivel de sistema<!-- END REF -->, y false en caso contrario.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->

---


<!-- REF directory.isAlias.Desc -->
## .isAlias

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.isAlias.Syntax -->
**.isAlias** : Boolean<!-- END REF -->



#### Descripción

La propiedad `.isAlias` devuelve <!-- REF #directory.isAlias.Summary -->siempre **false** para un objeto `Folder`<!-- END REF -->.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->
## .isFile

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.isFile.Syntax -->
**.isFile** : Boolean<!-- END REF -->


#### Descripción

La propiedad `.isFile` devuelve <!-- REF #directory.isFile.Summary -->siempre **false** para una carpeta<!-- END REF -->.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->
## .isFolder

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.isFolder.Syntax -->
**.isFolder** : Boolean<!-- END REF -->


#### Descripción

La propiedad `.isFolder` devuelve <!-- REF #directory.isFolder.Summary -->siempre **true** para una carpeta<!-- END REF -->.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->
## .isPackage

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.isPackage.Syntax -->
**.isPackage** : Boolean<!-- END REF -->


#### Descripción

La propiedad `.isPackage` devuelve <!-- REF #directory.isPackage.Summary -->true si la carpeta es un paquete en macOS (y existe en el disco)<!-- END REF -->. En caso contrario, devuelve false.

En Windows, `.isPackage` siempre devuelve **false**.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->


---

<!-- REF directory.modificationDate.Desc -->
## .modificationDate

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.modificationDate.Syntax -->
**.modificationDate** : Date<!-- END REF -->


#### Descripción

La propiedad `.modificationDate` devuelve <!-- REF #directory.modificationDate.Summary --> la fecha de la última modificación de la carpeta<!-- END REF -->.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->


---

<!-- REF directory.modificationTime.Desc -->
## .modificationTime

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.modificationTime.Syntax -->
**.modificationTime** : Time<!-- END REF -->


#### Descripción

La propiedad `.modificationTime` devuelve <!-- REF #directory.modificationTime.Summary -->la hora de la última modificación de la carpeta<!-- END REF --> (expresada como un número de segundos que comienza en 00:00).

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->

---

<!-- REF directory.name.Desc -->
## .name

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>



<!-- REF #directory.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Descripción

La propiedad `.name` devuelve <!-- REF #directory.name.Summary --> el nombre de la carpeta, sin extensión (si la hay)<!-- END REF -->.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->

---

<!-- REF directory.original.Desc -->
## .original

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.original.Syntax -->
**.original** : 4D.Folder<!-- END REF -->


#### Descripción

La propiedad `.original` devuelve <!-- REF #directory.original.Summary -->el mismo objeto Folder que la carpeta<!-- END REF -->.

Esta propiedad es **de sólo lectura**.
> Esta propiedad está disponible en las carpetas para permitir que el código genérico procese carpetas o archivos.

<!-- END REF -->

---


<!-- REF directory.parent.Desc -->
## .parent

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.parent.Syntax -->
**.parent** : 4D.Folder<!-- END REF -->


#### Descripción

La propiedad `.parent` devuelve <!-- REF #directory.parent.Summary -->el objeto carpeta padre de la carpeta<!-- END REF -->. Si la ruta representa una ruta del sistema (por ejemplo, "/DATA/"), se devuelve la ruta del sistema.

Si la carpeta no tiene un padre (raíz), se devuelve el valor null.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->


---

<!-- REF directory.path.Desc -->
## .path

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.path.Syntax -->
**.path** : Text<!-- END REF -->


#### Descripción

La propiedad `.path` devuelve <!-- REF #directory.path.Summary -->la ruta POSIX de la carpeta<!-- END REF -->. Si la ruta representa un sistema de archivos (por ejemplo, "/DATA/"), se devuelve el sistema de archivos.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->
## .platformPath

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.platformPath.Syntax -->
**.platformPath** : Text<!-- END REF -->


#### Descripción

La propiedad `.platformPath` devuelve <!-- REF #directory.platformPath.Summary -->la ruta de la carpeta expresada con la sintaxis de la plataforma actual<!-- END REF -->.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->


---





<!-- REF directory.copyTo().Desc -->
## .copyTo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.copyTo().Syntax -->
**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->
| Parámetros        | Tipo      |    | Descripción                                            |
| ----------------- | --------- |:--:| ------------------------------------------------------ |
| destinationFolder | 4D.Folder | -> | Carpeta de destino                                     |
| newName           | Texto     | -> | Nombre para la copia                                   |
| overwrite         | Integer   | -> | `fk overwrite` para sustituir los elementos existentes |
| Resultado         | 4D.Folder | <- | Carpeta o archivo copiado                              |
<!-- END REF -->


#### Descripción

La función `.copyTo()` <!-- REF #directory.copyTo().Summary -->copia el objeto `Folder` en el *destinationFolder* especificado><!-- END REF -->.

La *destinationFolder* debe existir en el disco, de lo contrario se genera un error.

Por defecto, la carpeta se copia con el nombre de la carpeta original. Si desea cambiar el nombre de la copia, pase el nuevo nombre en el parámetro *newName*. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

Si ya existe una carpeta con el mismo nombre en la *destinationFolder*, por defecto 4D genera un error. Puede pasar la constante `fk overwrite` en el parámetro *overwrite* para ignorar y sobrescribir el archivo existente

| Constante      | Valor | Comentario                                        |
| -------------- | ----- | ------------------------------------------------- |
| `fk overwrite` | 4     | Sobrescribir los elementos existentes, si los hay |


**Valor devuelto**

El objeto `Folder` copiado.

#### Ejemplo

Desea copiar una *carpeta* Imágenes de la carpeta de documentos del usuario a la carpeta de la base:

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 
<!-- END REF -->

---


<!-- REF directory.file().Desc -->
## .file()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.file().Syntax -->
**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->
| Parámetros | Tipo    |    | Descripción                          |
| ---------- | ------- | -- | ------------------------------------ |
| path       | Texto   | -> | Relative POSIX file pathname         |
| Resultado  | 4D.File | <- | `File` object (null if invalid path) |
<!-- END REF -->

#### Descripción

The `.file()` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.

**Valor devuelto**

Un objeto `File` o null si *path* no es válido.

#### Ejemplo

```4d
var $myPDF : 4D.File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```

<!-- END REF -->

---

<!-- REF directory.files().Desc -->
## .files()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.files().Syntax -->
**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->
| Parámetros | Tipo       |    | Descripción                          |
| ---------- | ---------- | -- | ------------------------------------ |
| options    | Integer    | -> | Opciones de la lista de archivos     |
| Resultado  | Collection | <- | Colección de objetos de archivo hijo |
<!-- END REF -->

#### Descripción

The `.files()` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.
> Los alias o enlaces simbólicos no se resuelven.

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| Constante             | Valor | Comentario                                                                             |
| --------------------- | ----- | -------------------------------------------------------------------------------------- |
| `fk recursive`        | 1     | La colección contiene archivos o carpetas de la carpeta especificada y sus subcarpetas |
| `fk ignore invisible` | 8     | Los archivos o carpetas invisibles no aparecen en la lista                             |

**Valor devuelto**

Colección de objetos `File`.

#### Ejemplo 1

You want to know if there are invisible files in the Database folder:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

#### Ejemplo 2

You want to get all files that are not invisible in the Documents folder:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```

<!-- END REF -->

---

<!-- REF directory.folder().Desc -->
## .folder()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.folder().Syntax -->
**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->
| Parámetros | Tipo      |    | Descripción                                    |
| ---------- | --------- | -- | ---------------------------------------------- |
| path       | Texto     | -> | Relative POSIX file pathname                   |
| Resultado  | 4D.Folder | <- | Created folder object (null if invalid *path*) |
<!-- END REF -->

#### Descripción

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.

**Valor devuelto**

Un objeto `Folder` o null si *path* no es válido.

#### Ejemplo

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->

---

<!-- REF directory.folders().Desc -->
## .folders()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.folders().Syntax -->
**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->
| Parámetros | Tipo       |    | Descripción                          |
| ---------- | ---------- | -- | ------------------------------------ |
| options    | Integer    | -> | Opciones de la lista de carpetas     |
| Resultado  | Collection | <- | Colección de objetos de carpeta hijo |
<!-- END REF -->

#### Descripción

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

By default, if you omit the *options* parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| Constante             | Valor | Comentario                                                                             |
| --------------------- | ----- | -------------------------------------------------------------------------------------- |
| `fk recursive`        | 1     | La colección contiene archivos o carpetas de la carpeta especificada y sus subcarpetas |
| `fk ignore invisible` | 8     | Los archivos o carpetas invisibles no aparecen en la lista                             |

**Valor devuelto**

Colección de objetos `Folder`.

#### Ejemplo

You want the collection of all folders and subfolders of the database folder:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```

<!-- END REF -->

---

<!-- REF directory.getIcon().Desc -->
## .getIcon()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.getIcon().Syntax -->
**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->
| Parámetros | Tipo    |    | Descripción                                       |
| ---------- | ------- | -- | ------------------------------------------------- |
| size       | Integer | -> | Longitud del lado de la imagen devuelta (píxeles) |
| Resultado  | Imagen  | <- | Icono                                             |
<!-- END REF -->


#### Descripción

The `.getIcon()` function <!-- REF #directory.getIcon().Summary -->returns the icon of the folder<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels ("large icons") or 16x16 pixels ("small icons"). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.

**Valor devuelto**

Folder icon [picture](Concepts/dt_picture.md).

<!-- END REF -->



