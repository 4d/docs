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

The `.creationDate` property returns <!-- REF #directory.creationDate.Summary -->the creation date of the folder<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

## .creationTime

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #directory.creationTime.Syntax -->

**.creationTime** : Time<!-- END REF -->

#### Descripción

The `.creationTime` property returns <!-- REF #directory.creationTime.Summary -->the creation time of the folder<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Esta propiedad es **de sólo lectura**.

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

The `.exists` property returns <!-- REF #directory.exists.Summary -->true if the folder exists on disk<!-- END REF -->, and false otherwise.

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

The `.extension` property <!-- REF #directory.extension.Summary -->returns the extension of the folder name (if any)<!-- END REF -->. Una extensión siempre comienza por ".". La propiedad devuelve una cadena vacía si el nombre de la carpeta no tiene extensión.

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

The `.fullName` property <!-- REF #directory.fullName.Summary -->returns the full name of the folder, including its extension (if any)<!-- END REF -->.

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

The `.hidden` property returns <!-- REF #directory.hidden.Summary --> true if the folder is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

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

The `.isAlias` property returns <!-- REF #directory.isAlias.Summary -->always **false** for a `Folder` object<!-- END REF -->.

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

The `.isFile` property returns <!-- REF #directory.isFile.Summary -->always **false** for a folder<!-- END REF -->.

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

The `.isFolder` property returns <!-- REF #directory.isFolder.Summary -->always **true** for a folder<!-- END REF -->.

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

The `.isPackage` property returns <!-- REF #directory.isPackage.Summary -->true if the folder is a package on macOS  (and exists on disk)<!-- END REF -->. .

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

The `.modificationDate` property returns <!-- REF #directory.modificationDate.Summary --> the date of the folder's last modification<!-- END REF -->.

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

The `.modificationTime` property returns <!-- REF #directory.modificationTime.Summary -->the time of the folder's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

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

The `.name` property returns <!-- REF #directory.name.Summary --> the name of the folder, without extension (if any)<!-- END REF -->.

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

The `.original` property returns <!-- REF #directory.original.Summary -->the same Folder object as the folder<!-- END REF -->.

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

The `.parent` property returns <!-- REF #directory.parent.Summary -->the parent folder object of the folder<!-- END REF -->. .

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

The `.path` property returns <!-- REF #directory.path.Summary -->the POSIX path of the folder<!-- END REF -->. .

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

The `.platformPath` property returns <!-- REF #directory.platformPath.Summary -->the path of the folder expressed with the current platform syntax<!-- END REF -->.

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
| Parámetros        | Type      |    | Descripción                                            |
| ----------------- | --------- |:--:| ------------------------------------------------------ |
| destinationFolder | 4D.Folder | -> | Carpeta de destino                                     |
| newName           | Text      | -> | Nombre para la copia                                   |
| overwrite         | Integer   | -> | `fk overwrite` para sustituir los elementos existentes |
| Result            | 4D.Folder | <- | Carpeta o archivo copiado|<!-- END REF -->

|

#### Descripción

The `.copyTo()` function <!-- REF #directory.copyTo().Summary -->copies the `Folder` object into the specified *destinationFolder*<!-- END REF -->.

La *destinationFolder* debe existir en el disco, de lo contrario se genera un error.

Por defecto, la carpeta se copia con el nombre de la carpeta original. Si desea cambiar el nombre de la copia, pase el nuevo nombre en el parámetro *newName*. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

Si ya existe una carpeta con el mismo nombre en la *destinationFolder*, por defecto 4D genera un error. Puede pasar la constante `fk overwrite` en el parámetro *overwrite* para ignorar y sobrescribir el archivo existente

| Constante      | Value | Comentario                                        |
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
| Parámetros | Type    |    | Descripción                                                             |
| ---------- | ------- | -- | ----------------------------------------------------------------------- |
| path       | Text    | -> | Ruta POSIX relativa                                                     |
| Result     | 4D.File | <- | Objeto `File` (null si la ruta no es válida)|<!-- END REF -->

|

#### Descripción

The `.file()` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

En *path*, pase una ruta relativa POSIX para designar el archivo a devolver. La ruta se evaluará a partir de la carpeta padre como raíz.

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
| Parámetros | Type       |    | Descripción                                                     |
| ---------- | ---------- | -- | --------------------------------------------------------------- |
| options    | Integer    | -> | Opciones de la lista de archivos                                |
| Result     | Collection | <- | Colección de objetos de archivo hijo|<!-- END REF -->

|

#### Descripción

The `.files()` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.
> Los alias o enlaces simbólicos no se resuelven.

Por defecto, si se omite el parámetro *options*, sólo se devuelven en la colección los archivos del primer nivel de la carpeta, así como los archivos o carpetas invisibles. Puede modificar esto pasando, en el parámetro *options*, una o varias de las siguientes constantes:

| Constante             | Value | Comentario                                                                      |
| --------------------- | ----- | ------------------------------------------------------------------------------- |
| `fk recursive`        | 1     | La colección contiene los archivos de la carpeta especificada y sus subcarpetas |
| `fk ignore invisible` | 8     | Los archivos invisibles no aparecen en la lista                                 |

**Valor devuelto**

Colección de objetos `File`.

#### Ejemplo 1

Quiere saber si hay archivos invisibles en la carpeta de la base:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
 End if
```

#### Ejemplo 2

Quiere obtener todos los archivos que no son invisibles en la carpeta Documents:

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
| Parámetros | Type      |    | Descripción                                                                   |
| ---------- | --------- | -- | ----------------------------------------------------------------------------- |
| path       | Text      | -> | Ruta POSIX relativa                                                           |
| Result     | 4D.Folder | <- | Objeto carpeta creado (null si *path*no es válido)|<!-- END REF -->

|

#### Descripción

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

En *path*, pase una ruta relativa POSIX para designar la carpeta a devolver. La ruta se evaluará a partir de la carpeta padre como raíz.

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
| Parámetros | Type       |    | Descripción                                                     |
| ---------- | ---------- | -- | --------------------------------------------------------------- |
| options    | Integer    | -> | Opciones de la lista de carpetas                                |
| Result     | Collection | <- | Colección de objetos de carpeta hijo|<!-- END REF -->

|

#### Descripción

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

Por defecto, si se omite el parámetro *options*, sólo se devuelven en la colección las carpetas del primer nivel de la carpeta. Puede modificar esto pasando, en el parámetro *options*, una o varias de las siguientes constantes:

| Constante             | Value | Comentario                                                                      |
| --------------------- | ----- | ------------------------------------------------------------------------------- |
| `fk recursive`        | 1     | La colección contiene las carpetas de la carpeta especificada y sus subcarpetas |
| `fk ignore invisible` | 8     | Los archivos invisibles no aparecen en la lista                                 |

**Valor devuelto**

Colección de objetos `Folder`.

#### Ejemplo

Quiere obtener la colección de todas las carpetas y subcarpetas de la carpeta de la base:

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
| Parámetros | Type    |    | Descripción                                       |
| ---------- | ------- | -- | ------------------------------------------------- |
| size       | Integer | -> | Longitud del lado de la imagen devuelta (píxeles) |
| Result     | Picture | <- | Icono|<!-- END REF -->

|

#### Descripción

The `.getIcon()` function <!-- REF #directory.getIcon().Summary -->returns the icon of the folder<!-- END REF -->.

El parámetro opcional *size* especifica las dimensiones en píxeles del icono devuelto. Este valor representa en realidad la longitud del lado del cuadrado que contiene el icono. Los iconos suelen definirse en 32x32 píxeles ("iconos grandes") o 16x16 píxeles ("iconos pequeños"). Si pasa 0 u omite este parámetro, se devuelve la versión "icono grande".

Si la carpeta no existe en el disco, se devuelve un icono vacío por defecto.

**Valor devuelto**

[Imagen](Concepts/dt_picture.md) del icono de la carpeta.

<!-- END REF -->
