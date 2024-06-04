---
id: Document
title: Document Class
---

## Descripción

<!-- REF document.creationDate.Desc -->

## .creationDate

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### Descripción

The `.creationDate` property returns <!-- REF #document.creationDate.Summary -->the creation date of the file<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.creationTime.Desc -->

## .creationTime

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### Descripción

The `.creationTime` property  returns <!-- REF #document.creationTime.Summary -->the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.exists.Desc -->

## .exists

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### Descripción

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### Descripción

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. Una extensión siempre comienza por ".". La propiedad <code>.extension</code> devuelve <!-- REF #document.extension.Summary -->la extensión del nombre del archivo (si lo hay)<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.fullName.Desc -->

## .fullName

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### Descripción

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.hidden.Desc -->

## .hidden

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### Descripción

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

This property is **read/write**.

<!-- END REF -->

<!-- REF document.isAlias.Desc -->

## .isAlias

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### Descripción

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.isFile.Desc -->

## .isFile

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### Descripción

The `.isFile` property returns <!-- REF #document.isFile.Summary -->always true for a file<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.isFolder.Desc -->

## .isFolder

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### Descripción

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always false for a file<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.isWritable.Desc -->

## .isWritable

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.isWritable.Syntax -->**.isWritable** : Boolean<!-- END REF -->

#### Descripción

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.

> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the _writable_ attribute of the file.

Esta propiedad es de **solo lectura**.

**Ejemplo**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```

<!-- END REF -->

<!-- REF document.modificationDate.Desc -->

## .modificationDate

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### Descripción

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->the date of the file's last modification<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->

## .modificationTime

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

##### Descripción

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->the time of the file's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.name.Desc -->

## .name

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descripción

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.original.Desc -->

## .original

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.original.Syntax -->**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### Descripción

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. El elemento objetivo puede ser:

- un objeto File
- un objeto de la carpeta

Para los archivos sin alias, la propiedad devuelve el mismo objeto File que el archivo.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.parent.Desc -->

## .parent

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### Descripción

The `.parent` property returns <!-- REF #document.parent.Summary -->the parent folder object of the file<!-- END REF -->. Si la ruta representa una ruta del sitema (por ejemplo, "/DATA/"), se devuelve la ruta del sistema.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.path.Desc -->

## .path

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descripción

The `.path` property returns <!-- REF #document.path.Summary -->the POSIX path of the file<!-- END REF -->. Si la ruta representa un filesystem (por ejemplo, "/DATA/"), se devuelve el filesystem.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.platformPath.Desc -->

## .platformPath

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descripción

The `.platformPath` property returns <!-- REF #document.platformPath.Summary -->the path of the file expressed with the current platform syntax<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.size.Desc -->

## .size

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.size.Syntax -->**.size** : Real<!-- END REF -->

#### Descripción

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. Si el archivo no existe en el disco, el tamaño es 0.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF document.copyTo().Desc -->

## .copyTo()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->

<!-- REF #document.copyTo().Params -->

| Parámetros        | Tipo                      |     | Descripción                                 |
| ----------------- | ------------------------- | :-: | ------------------------------------------- |
| destinationFolder | 4D.Folder |  -> | Carpeta de destino                          |
| newName           | Text                      |  -> | Nombre para la copia                        |
| overwrite         | Integer                   |  -> | `fk overwrite` to replace existing elements |
| Result            | 4D.File   |  <- | Archivo copiado                             |

<!-- END REF -->

#### Descripción

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->copies the `File` object into the specified _destinationFolder_ <!-- END REF -->.

The _destinationFolder_ must exist on disk, otherwise an error is generated.

Por defecto, el archivo se copia con el nombre del archivo original. If you want to rename the copy, pass the new name in the _newName_ parameter. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

If a file with the same name already exists in the _destinationFolder_, by default 4D generates an error. You can pass the `fk overwrite` constant in the _overwrite_ parameter to ignore and overwrite the existing file

| Constante      | Valor | Comentario                                        |
| -------------- | ----- | ------------------------------------------------- |
| `fk overwrite` | 4     | Sobrescribir los elementos existentes, si los hay |

**Valor devuelto**

El objeto `File` copiado.

#### Ejemplo

You want to copy a picture _file_ from the user's document folder to the application folder:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

<!-- END REF -->

<!-- REF document.getContent().Desc -->

## .getContent()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                   |
| ----------- | -------------------------------- |
| 19 R2       | Devuelve 4D.Blob |
| 17 R5       | Añadidos                         |

</details>

<!-- REF #document.getContent().Syntax -->**.getContent( )** : 4D.Blob<!-- END REF -->

<!-- REF #document.getContent().Params -->

| Parámetros | Tipo                    |    | Descripción           |
| ---------- | ----------------------- | -- | --------------------- |
| Result     | 4D.Blob | <- | Contenido del archivo |

<!-- END REF -->

#### Descripción

The `.getContent()` function  <!-- REF #document.getContent().Summary -->returns a `4D.Blob` object containing the entire content of a file<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

**Valor devuelto**

Un objeto `4D.Blob`.

#### Ejemplo

To save a document's contents in a `BLOB` field:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //Si se ha seleccionado un documento
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```

<!-- END REF -->

<!-- REF document.getIcon().Desc -->

## .getIcon()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #document.getIcon().Params -->

| Parámetros | Tipo    |    | Descripción                                                          |
| ---------- | ------- | -- | -------------------------------------------------------------------- |
| size       | Integer | -> | Longitud del lado de la imagen devuelta (píxeles) |
| Result     | Picture | <- | Icono                                                                |

<!-- END REF -->

#### Descripción

The `.getIcon()` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

The optional _size_ parameter specifies the dimensions in pixels of the returned icon. Este valor representa en realidad la longitud del lado del cuadrado que contiene el icono. Los iconos suelen definirse en 32x32 píxeles ("iconos grandes") o 16x16 píxeles ("iconos pequeños"). Si pasa 0 u omite este parámetro, se devuelve la versión "icono grande".

Si el archivo no existe en el disco, se devuelve un icono vacío por defecto.

**Valor devuelto**

File icon [picture](../Concepts/picture.html).

<!-- END REF -->

<!-- REF document.getText().Desc -->

## .getText()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #document.getText().Syntax -->**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->

<!-- REF #document.getText().Params -->

| Parámetros  | Tipo    |    | Descripción                                |
| ----------- | ------- | -- | ------------------------------------------ |
| charSetName | Text    | -> | Nombre del juego de caracteres             |
| charSetNum  | Integer | -> | Número del conjunto de caracteres          |
| breakMode   | Integer | -> | Modo de tratamiento de los saltos de línea |
| Result      | Text    | <- | Texto del documento                        |

<!-- END REF -->

#### Descripción

The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

Opcionalmente, puede designar el conjunto de caracteres que se utilizará para leer el contenido. Puede pasar:

- in _charSetName_, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in _charSetNum_, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in _charSetName_ or _charSetNum_ (this parameter is then ignored).
If the document does not contain a BOM and if _charSetName_ or _charSetNum_ is omitted, by default 4D uses the "UTF-8" character set.

In _breakMode_, you can pass a number indicating the processing to apply to end-of-line characters in the document. Las siguientes constantes del tema "Documentos del sistema" están disponibles:

| Constante                     | Valor | Comentario                                                                                                                                                                                                                                           |
| ----------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Sin procesar                                                                                                                                                                                                                                         |
| `Document with native format` | 1     | (Por defecto) Los saltos de línea se convierten al formato nativo del sistema operativo: CR (retorno de carro) en OS X, CRLF (retorno de carro + salto de línea) en Windows |
| `Document with CRLF`          | 2     | Los saltos de línea se convierten al formato de Windows: CRLF (retorno de carro + salto de línea)                                                                                                                 |
| `Document with CR`            | 3     | Los saltos de línea se convierten al formato OS X: CR (retorno de carro)                                                                                                                                          |
| `Document with LF`            | 4     | Los saltos de línea se convierten al formato Unix: LF (salto de línea)                                                                                                                                            |

By default, when you omit the _breakMode_ parameter, line breaks are processed in native mode (1).

**Valor devuelto**

Texto del archivo.

#### Ejemplo

Dado el siguiente documento de texto (los campos están separados por tabulaciones):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

Cuando se ejecuta este código:

```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 por defecto
 $txt:=$myFile.getText()
```

... obtiene lo siguiente para `$txt`:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

with `\t` (tab) as separator and `\r\n` (CRLF) as line delimiter.

Aquí hay otro ejemplo con el mismo archivo, pero con un delimitador de línea diferente:

```4d
 $txt:=$myFile.getText("UTF-8"; Document with LF)
```

In this case, the contents of `$txt` are as follows:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

This time `\n` (LF) is used as line delimiter.

<!-- END REF -->
