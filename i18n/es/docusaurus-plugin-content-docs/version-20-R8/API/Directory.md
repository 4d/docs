---
id: Directory
title: Clase Directory
---

<!-- REF directory.creationDate.Desc -->

## .creationDate

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### Descripción

La propiedad `.creationDate` devuelve <!-- REF #directory.creationDate.Summary -->la fecha de creación de la carpeta<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.creationTime.Desc -->

## .creationTime

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### Descripción

La propiedad `.creationTime` devuelve <!-- REF #directory.creationTime.Summary -->la hora de creación de la carpeta<!-- END REF --> (expresada como un número de segundos que comienza en 00:00).

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.exists.Desc -->

## .exists

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.exists` devuelve <!-- REF #directory.exists.Summary -->true si la carpeta existe en disco<!-- END REF -->, y falso de lo contrario.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.extension.Desc -->

## .extension

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### Descripción

La propiedad `.extension` <!-- REF #directory.extension.Summary -->devuelve la extensión del nombre de la carpeta (si la hay)<!-- END REF -->. Una extensión siempre comienza por ".". La propiedad devuelve una cadena vacía si el nombre de la carpeta no tiene extensión.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.fullName.Desc -->

## .fullName

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### Descripción

La propiedad `.fullName` <!-- REF #directory.fullName.Summary -->devuelve el nombre completo de la carpeta, incluyendo su extensión (si la hay)<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.hidden.Desc -->

## .hidden

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.hidden` devuelve <!-- REF #directory.hidden.Summary --> true si la carpeta está configurada como "oculta" a nivel de sistema<!-- END REF -->, y false en caso contrario.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.isAlias.Desc -->

## .isAlias

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.isAlias` devuelve <!-- REF #directory.isAlias.Summary -->siempre **false** para un objeto `Folder`<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->

## .isFile

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.isFile` devuelve <!-- REF #directory.isFile.Summary -->siempre **false** para una carpeta<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->

## .isFolder

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.isFolder` devuelve <!-- REF #directory.isFolder.Summary -->siempre **true** para una carpeta<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->

## .isPackage

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.isPackage.Syntax -->**.isPackage** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.isPackage` devuelve <!-- REF #directory.isPackage.Summary -->true si la carpeta es un paquete en macOS (y existe en el disco)<!-- END REF -->. En caso contrario, devuelve false.

En Windows, `.isPackage` siempre devuelve **false**.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.modificationDate.Desc -->

## .modificationDate

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### Descripción

La propiedad `.modificationDate` devuelve <!-- REF #directory.modificationDate.Summary --> la fecha de la última modificación de la carpeta<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.modificationTime.Desc -->

## .modificationTime

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

#### Descripción

La propiedad `.modificationDate` devuelve <!-- REF #directory.modificationTime.Summary -->la hora de la última modificación de la carpeta<!-- END REF --> (expresada como un número de segundos que comienza en 00:00).

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.name.Desc -->

## .name

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descripción

La propiedad `.name` devuelve <!-- REF #directory.name.Summary --> el nombre de la carpeta, sin extensión (si la hay)<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.original.Desc -->

## .original

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.original.Syntax -->**.original** : 4D.Folder<!-- END REF -->

#### Descripción

La propiedad `.original` devuelve <!-- REF #directory.original.Summary -->el mismo objeto de la carpeta <!-- END REF -->.

Esta propiedad es de **solo lectura**.

> Esta propiedad está disponible en las carpetas para permitir que el código genérico procese carpetas o archivos.

<!-- END REF -->

---

<!-- REF directory.parent.Desc -->

## .parent

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### Descripción

La propiedad `.parent` devuelve <!-- REF #directory.parent.Summary -->el objeto carpeta padre de la carpeta<!-- END REF -->. Si la ruta representa una ruta del sitema (por ejemplo, "/DATA/"), se devuelve la ruta del sistema.

Si la carpeta no tiene un padre (raíz), se devuelve el valor null.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.path.Desc -->

## .path

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descripción

La propiedad `.path` devuelve <!-- REF #directory.path.Summary -->la ruta POSIX de la carpeta<!-- END REF -->. Si la ruta representa un filesystem (por ejemplo, "/DATA/"), se devuelve el filesystem.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->

## .platformPath

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descripción

La propiedad `.platformPath` devuelve <!-- REF #directory.platformPath.Summary -->la ruta del archivo expresada con la sintaxis de la plataforma actual<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

---

<!-- REF directory.copyTo().Desc -->

## .copyTo()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->

| Parámetros        | Tipo                      |                             | Descripción                                            |
| ----------------- | ------------------------- | :-------------------------: | ------------------------------------------------------ |
| destinationFolder | 4D.Folder |              ->             | Carpeta de destino                                     |
| newName           | Text                      |              ->             | Nombre para la copia                                   |
| overwrite         | Integer                   |              ->             | `fk overwrite` para sustituir los elementos existentes |
| Result            | 4D.Folder | <- | Carpeta o archivo copiado                              |

<!-- END REF -->

#### Descripción

La función `.copyTo()` <!-- REF #directory.copyTo().Summary -->copia el objeto `Folder` en la *destinationFolder* especificada<!-- END REF -->.

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
$userImages:=Folder(fk documents folder).folder("Pictures")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```

<!-- END REF -->

---

<!-- REF directory.file().Desc -->

## .file()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.file().Syntax -->**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->

| Parámetros | Tipo                    |                             | Descripción                                                    |
| ---------- | ----------------------- | --------------------------- | -------------------------------------------------------------- |
| path       | Text                    | ->                          | Ruta POSIX relativa                                            |
| Result     | 4D.File | <- | Objeto `File` (null si la ruta es inválida) |

<!-- END REF -->

#### Descripción

La función `.file()` crea <!-- REF #directory.file().Summary -->un objeto `File` dentro del objeto `Folder` y devuelve su referencia<!-- END REF -->.

En *ruta*, pase una ruta POSIX relativa para designar el archivo a regresar. La ruta se evaluará a partir de la carpeta padre como raíz.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.files().Syntax -->**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->

| Parámetros | Tipo       |                             | Descripción                          |
| ---------- | ---------- | --------------------------- | ------------------------------------ |
| options    | Integer    | ->                          | Opciones de la lista de archivos     |
| Result     | Collection | <- | Colección de objetos de archivo hijo |

<!-- END REF -->

#### Descripción

La función `.files()` devuelve <!-- REF #directory.files().Summary -->una colección de objetos `File` contenidos en la carpeta<!-- END REF -->.

> Los alias o enlaces simbólicos no se resuelven.

Por defecto, si se omite el parámetro *options*, sólo se devuelven en la colección los archivos del primer nivel de la carpeta, así como los archivos o carpetas invisibles. Puede modificar esto pasando, en el parámetro *options*, una o varias de las siguientes constantes:

| Constante             | Valor | Comentario                                                                      |
| --------------------- | ----- | ------------------------------------------------------------------------------- |
| `fk recursive`        | 1     | La colección contiene los archivos de la carpeta especificada y sus subcarpetas |
| `fk ignore invisible` | 8     | Los archivos invisibles no aparecen en la lista                                 |

**Valor devuelto**

Colección de objetos`File`.

#### Ejemplo 1

Quiere saber si hay archivos invisibles en la carpeta de la base:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.folder().Syntax -->**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->

| Parámetros | Tipo                      |                             | Descripción                                                           |
| ---------- | ------------------------- | --------------------------- | --------------------------------------------------------------------- |
| path       | Text                      | ->                          | Ruta POSIX relativa                                                   |
| Result     | 4D.Folder | <- | Objeto carpeta creado (null si *path* es inválido) |

<!-- END REF -->

#### Descripción

La función `.folder()` <!-- REF #directory.folder().Summary -->crea un objeto `Folder` dentro del objeto `Folder` padre y devuelve su referencia<!-- END REF -->.

En *path*, pase una ruta relativa POSIX para designar la carpeta a devolver. La ruta se evaluará a partir de la carpeta padre como raíz.

**Valor devuelto**

Un objeto `Folder` o null si *path* es inválido.

#### Ejemplo

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->

---

<!-- REF directory.folders().Desc -->

## .folders()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.folders().Syntax -->**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->

| Parámetros | Tipo       |                             | Descripción                          |
| ---------- | ---------- | --------------------------- | ------------------------------------ |
| options    | Integer    | ->                          | Opciones de la lista de carpetas     |
| Result     | Collection | <- | Colección de objetos de carpeta hijo |

<!-- END REF -->

#### Descripción

La función `.folders()` <!-- REF #directory.folders().Summary -->devuelve una colección de objetos `Folder` contenidos en la carpeta padre<!-- END REF -->.

Por defecto, si se omite el parámetro *options*, sólo se devuelven en la colección las carpetas del primer nivel de la carpeta. Puede modificar esto pasando, en el parámetro *options*, una o varias de las siguientes constantes:

| Constante             | Valor | Comentario                                                                      |
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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #directory.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->

| Parámetros | Tipo    |                             | Descripción                                                          |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------------- |
| size       | Integer | ->                          | Longitud del lado de la imagen devuelta (píxeles) |
| Result     | Picture | <- | Icono                                                                |

<!-- END REF -->

#### Descripción

La función `.getIcon()` <!-- REF #directory.getIcon().Summary -->devuelve el icono de la carpeta<!-- END REF -->.

El parámetro opcional *size* especifica las dimensiones en píxeles del icono devuelto. Este valor representa en realidad la longitud del lado del cuadrado que contiene el icono. Los iconos suelen definirse en 32x32 píxeles ("iconos grandes") o 16x16 píxeles ("iconos pequeños"). Si pasa 0 u omite este parámetro, se devuelve la versión "icono grande".

Si la carpeta no existe en el disco, se devuelve un icono vacío por defecto.

**Valor devuelto**

[Imagen](Concepts/dt_picture.md) del icono de la carpeta.

<!-- END REF -->
