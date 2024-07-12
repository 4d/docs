---
id: FileHandleClass
title: FileHandle
---

The `FileHandle` class has functions that allow you to sequentially read from or append contents to an opened [`File`](FileClass) object. Un manejador de archivo puede acceder a cualquier parte de un documento.

File handle objects are created with the [`file.open()`](FileClass#open) function.

> To read or write a whole document at once, you might consider using the [file.getText()](FileClass.md#gettext) and [file.setText()](FileClass.md#settext) functions.

Thanks to the standard 4D object *refcounting*, a file handle is automatically deleted when it is no longer referenced and thus, the requested [`File`](FileClass) object is automatically closed. Por lo tanto, con los gestores de archivos no hay que preocuparse por el cierre de los documentos.

:::note

Los recursos de los objetos, como los documentos, se liberan cuando ya no existen referencias en la memoria, lo que ocurre, por ejemplo, al final de la ejecución del método para las variables locales. If you want to "force" the release of object resources at any moment, you can [nullify its references](../Concepts/dt_object.md#resources).

:::

### Ejemplo

```code4d
var $f : 4D.File
var $fhandle : 4D.FileHandle
$f:=Folder(Database folder).file("example.txt")

//Writing line by line from the start
$fhandle:=$f.open("write")
$text:="Hello World"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Writing line by line from the end
$fhandle:=$f.open("append")
$text:="Hello New World!"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Reading using a stop character and an object parameter
$o:=New object()
$o.mode:="read"
$o.charset:="UTF-8"
$o.breakModeRead:=Document with CRLF
$stopChar:="!"
$fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

//Reading line by line
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
	$lines.push($fhandle.readLine())
End while

```

### Objeto FileHandle

Los objetos manejadores de archivos no pueden ser compartidos.

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)<br/><!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->    |
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)<br/><!-- INCLUDE #FileHandleClass.breakModeWrite.Summary --> |
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)<br/><!-- INCLUDE #FileHandleClass.charset.Summary -->                      |
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)<br/><!-- INCLUDE #FileHandleClass.eof.Summary -->                                  |
| [<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)<br/><!-- INCLUDE #FileHandleClass.file.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)<br/><!-- INCLUDE #FileHandleClass.getSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)<br/><!-- INCLUDE #FileHandleClass.mode.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)<br/><!-- INCLUDE #FileHandleClass.offset.Summary -->                         |
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)<br/><!-- INCLUDE #FileHandleClass.readBlob().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)<br/><!-- INCLUDE #FileHandleClass.readLine().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)<br/><!-- INCLUDE #FileHandleClass.readText().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)<br/><!-- INCLUDE #FileHandleClass.setSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)<br/><!-- INCLUDE #FileHandleClass.writeBlob().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)<br/><!-- INCLUDE #FileHandleClass.writeLine().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)<br/><!-- INCLUDE #FileHandleClass.writeText().Summary -->            |

<!-- REF FileHandleClass.breakModeRead.Desc -->

## .breakModeRead

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->

#### Descripción

The `.breakModeRead` property returns <!-- REF #FileHandleClass.breakModeRead.Summary -->the processing mode for line breaks used when reading the file<!-- END REF -->.

The `.breakModeRead` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Por defecto es "native".

> The `.breakModeRead` property always contains a text value, even if the `.open()` option was set using a number (constant).

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.breakModeWrite.Desc -->

## .breakModeWrite

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : Text<!-- END REF -->

#### Descripción

The `.breakModeWrite` property returns <!-- REF #FileHandleClass.breakModeWrite.Summary -->the processing mode for line breaks used when writing to the file<!-- END REF -->.

The `.breakModeWrite` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Por defecto es "native".

> The `.breakModeWrite` property always contains a text value, even if the `.open()` option was set using a number (constant).

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.charset.Desc -->

## .charset

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : Text<!-- END REF -->

#### Descripción

The `.charset` property returns <!-- REF #FileHandleClass.charset.Summary -->the charset used when reading from or writing to the file<!-- END REF -->.

The charset can be defined at the handle creation with the [`file.open()`](FileClass#open) function. Por defecto es "UTF-8".

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.eof.Desc -->

## .eof

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : Boolean<!-- END REF -->

#### Descripción

The `.eof` property returns <!-- REF #FileHandleClass.eof.Summary -->True is the `offset` has reached the end of the file, and False otherwise<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.file.Desc -->

## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### Descripción

The `.file` property returns <!-- REF #FileHandleClass.file.Summary -->the [4D.File](FileClass.md) object on which the handle has been created<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.getSize().Desc -->

## .getSize()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : Real <!-- END REF -->

<!--REF #FileHandleClass.getSize().Params -->

| Parámetros | Tipo |    | Descripción                   |
| ---------- | ---- | -- | ----------------------------- |
| Result     | Real | <- | Tamaño del documento en bytes |

<!-- END REF -->

#### Descripción

The `.getSize()` function <!-- REF #FileHandleClass.getSize().Summary -->returns the current size of the document, expressed in bytes<!-- END REF -->.

> This function returns the same value as the ([.size](FileClass#size)) property of the `File` class.

#### Ver también

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.mode.Desc -->

## .mode

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.mode.Syntax -->**.mode** : Text<!-- END REF -->

#### Descripción

The `.mode` property returns <!-- REF #FileHandleClass.mode.Summary -->the mode in which the file handle was created: "read", "write", or "append"<!-- END REF -->.

The mode can be defined at the handle creation with the [`file.open()`](FileClass#open) function. Por defecto es "leer".

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.offset.Desc -->

## .offset

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : Real<!-- END REF -->

#### Descripción

The `.offset` property returns <!-- REF #FileHandleClass.offset.Summary -->the current offset of the data stream (position inside the document)<!-- END REF -->. El valor del desplazamiento se actualiza automáticamente después de las operaciones de lectura y escritura.

Setting the `.offset` will change its current value at the moment of the next read or write operation.

- If the passed value is negative, the `.offset` is set to the start of the file (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

Esta propiedad es **lectura-escritura**.

:::caution

Cuando se crea un file handle, el valor `.offset` es un número de bytes. However, the unit of offset measurement differs according to the reading function: with [`readBlob()`](#readblob), `.offset` is a number of bytes, whereas with [`readText()`](#readtext)/[`readLine()`](#readline) it is a number of characters. Según el conjunto de caracteres del archivo, un caracter corresponde a uno o varios bytes. So, if you start reading with `readBlob()` and then call `readText()`, text reading will start at an inconsistent position. It is therefore essential to set the `.offset` property yourself if you switch from reading/writing blob to reading/writing text in the same filehandle. Por ejemplo:

```4d
  // Open a european text file using utf-16 encoding (two bytes per character)
  // We want to read the first 10 characters as bytes, then the remaining as text.
$fh:=File("/RESOURCES/sample_utf_16.txt").open()
  // read the 20 first bytes (i.e. 10 characters)
$b:=$fh.readBlob(20) // $fh.offset=20
  // then read all text skipping the first 10 characters we just read in previous blob
  // because we are now reading text instead of bytes, the meaning of 'offset' is not the same.
  // We need to translate it from bytes to characters.
$fh.offset:=10 // ask to skip 10 utf-16 characters (20 bytes)
$s:=$fh.readText()
```

:::

<!-- END REF -->

<!-- REF FileHandleClass.readBlob().Desc -->

## .readBlob()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) <!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->

| Parámetros | Tipo                                 |    | Descripción              |
| ---------- | ------------------------------------ | -- | ------------------------ |
| *bytes*    | Real                                 | -> | Número de bytes a leer   |
| Result     | [4D.Blob](BlobClass) | <- | Bytes leídos del archivo |

<!-- END REF -->

#### Descripción

The `.readBlob()` function <!-- REF #FileHandleClass.readBlob().Summary -->returns a blob a *bytes* size from the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte read.

#### Ver también

[.writeBlob()](#writeblob)

<!-- END REF -->

<!-- REF FileHandleClass.readLine().Desc -->

## .readLine()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->

| Parámetros | Tipo |    | Descripción    |
| ---------- | ---- | -- | -------------- |
| Result     | Text | <- | Línea de texto |

<!-- END REF -->

#### Descripción

The `.readLine()` function <!-- REF #FileHandleClass.readLine().Summary -->returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached<!-- END REF -->.

When this function is executed, the current position ([`.offset`](#offset)) is updated.

:::caution Atención

This function assumes that the [`.offset`](#offset) property is a number of characters, not a number of bytes. Para más información, consulte la [descripción de.offset](#offset).

:::

> Cuando esta función se ejecuta por primera vez en un manejador de archivo, todo el contenido del documento se carga en un buffer.

#### Ver también

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->

<!-- REF FileHandleClass.readText().Desc -->

## .readText()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->

| Parámetros | Tipo |    | Descripción                                              |
| ---------- | ---- | -- | -------------------------------------------------------- |
| *stopChar* | Text | -> | Caracter(es) en los que dejar de leer |
| Result     | Text | <- | Texto del archivo                                        |

<!-- END REF -->

#### Descripción

The `.readText()` function <!-- REF #FileHandleClass.readText().Summary -->returns text from the file, starting from the current position until the first *stopChar* string is encountered (if passed) or the end of file is reached<!-- END REF -->.

La cadena de caracteres *stopChar* no se incluye en el texto devuelto. If you omit the *stopChar* parameter, the whole document text is returned.

When this function is executed, the ([.offset](#offset)) is placed just after the *stopChar* string.

:::caution Atención

This function assumes that the [`.offset`](#offset) property is a number of characters, not a number of bytes. Para más información, consulte la [descripción de.offset](#offset).

:::

If the *stopChar* parameter is passed and not found, `.readText()` returns an empty string and the [.offset](#offset) is left untouched.

> Cuando esta función se ejecuta por primera vez en un manejador de archivo, todo el contenido del documento se carga en un buffer.

#### Ver también

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.setSize().Desc -->

## .setSize()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size* : Real )<!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->

| Parámetros | Tipo |    | Descripción                         |
| ---------- | ---- | -- | ----------------------------------- |
| size       | Real | -> | Nuevo tamaño del documento en bytes |

<!-- END REF -->

#### Descripción

The `.setSize()` function <!-- REF #FileHandleClass.setSize().Summary -->sets a new *size* in bytes for the document<!-- END REF -->.

If the *size* value is less than the current document size, the document content is truncated from the beginning to get the new *size* .

#### Ver también

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.writeBlob().Desc -->

## .writeBlob()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->

| Parámetros | Tipo                                 |    | Descripción                   |
| ---------- | ------------------------------------ | -- | ----------------------------- |
| *blob*     | [4D.Blob](BlobClass) | -> | Blob a escribir en el archivo |

<!-- END REF -->

#### Descripción

The `.writeBlob()` function <!-- REF #FileHandleClass.writeBlob().Summary -->writes *blob* into the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte written.

#### Ver también

[.readBlob()](#readblob)

<!-- END REF -->

<!-- REF FileHandleClass.writeLine().Desc -->

## .writeLine()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->

| Parámetros   | Tipo |    | Descripción      |
| ------------ | ---- | -- | ---------------- |
| *lineOfText* | Text | -> | Texto a escribir |

<!-- END REF -->

#### Descripción

The `.writeLine()` function <!-- REF #FileHandleClass.writeLine().Summary -->writes *lineOfText* content at the current position and inserts an end-of-line delimiter<!-- END REF --> (unlike the [.writeText()](#writetext) function). By default, a native end-of-line delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### Ver también

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.writeText().Desc -->

## .writeText()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->

| Parámetros    | Tipo |    | Descripción      |
| ------------- | ---- | -- | ---------------- |
| *textToWrite* | Text | -> | Texto a escribir |

<!-- END REF -->

#### Descripción

The `.writeText()` function <!-- REF #FileHandleClass.writeText().Summary -->writes *textToWrite* content at the current position and does not insert a final end-of-line delimiter<!-- END REF --> (unlike the [.writeLine()](#writeline) function). By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### Ver también

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
