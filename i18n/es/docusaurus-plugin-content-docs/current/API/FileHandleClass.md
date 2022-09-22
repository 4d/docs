---
id: FileHandleClass
title: FileHandle
---

La clase `FileHandle` tiene funciones que permiten leer secuencialmente o añadir contenido a un objeto abierto [`File`](FileClass). Un manejador de archivo puede acceder a cualquier parte de un documento.

Los objetos manejadores de archivos se crean con la función [`file.open()`](FileClass#open).

> Para leer o escribir un documento completo de una vez, puede considerar el uso de las funciones [file.getText()](FileClass.md#gettext) y [file.setText()](FileClass.md#settext).

Gracias al objeto estándar 4D *refcounting*, un manejador de archivo se elimina automáticamente cuando deja de ser referenciado y, por tanto, el objeto [`File`](FileClass) solicitado se cierra automáticamente. Por lo tanto, con los gestores de archivos no hay que preocuparse por el cierre de los documentos.


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
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Lectura utilizando un carácter de parada y un parámetro objeto
$o:=New object()
$o.mode:="read"
$o.charset:="UTF-8"
$o.breakModeRead:=Document with CRLF
$stopChar:="!"
$fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

//Lectura línea a línea
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
    $lines.push($fhandle.readLine())
End while

```

### Objeto FileHandle

Los objetos manejadores de archivos no pueden ser compartidos.

|                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->|
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.breakModeWrite.Summary -->|
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.charset.Summary -->|
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.eof.Summary -->|
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.getSize().Summary -->|
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.mode.Summary -->|
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.offset.Summary -->|
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readBlob().Summary -->|
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readLine().Summary -->|
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readText().Summary -->|
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.setSize().Summary -->|
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeBlob().Summary -->|
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeLine().Summary -->|
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeText().Summary -->|



<!-- REF FileHandleClass.breakModeRead.Desc -->
## .breakModeRead

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->


#### Descripción

La propiedad `.breakModeRead` devuelve <!-- REF #FileHandleClass.breakModeRead.Summary -->el modo de procesamiento de los saltos de línea utilizados al leer el archivo<!-- END REF -->.


The `.breakModeRead` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Por defecto es "native".

> La propiedad `.breakModeRead` siempre contiene un valor de texto, incluso si la opción `.open()` fue definida utilizando un número (constante).


Esta propiedad es **de sólo lectura**.

<!-- END REF -->


<!-- REF FileHandleClass.breakModeWrite.Desc -->
## .breakModeWrite

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : Text<!-- END REF -->


#### Descripción

La propiedad `.breakModeWrite` devuelve <!-- REF #FileHandleClass.breakModeWrite.Summary -->el modo de procesamiento de los saltos de línea utilizados al escribir en el archivo<!-- END REF -->.

The `.breakModeWrite` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Por defecto es "native".

> La propiedad `.breakModeWrite` siempre contiene un valor texto, incluso si la opción `.open()` fue definida utilizando un número (constante).


Esta propiedad es **de sólo lectura**.

<!-- END REF -->



<!-- REF FileHandleClass.charset.Desc -->
## .charset

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : Text<!-- END REF -->


#### Descripción

La propiedad `.charset` devuelve <!-- REF #FileHandleClass.charset.Summary -->el conjunto de caracteres utilizado al leer o escribir en el archivo<!-- END REF -->.

El conjunto de caracteres puede definirse en la creación del gestor con la función [`file.open()`](FileClass#open). Por defecto es "UTF-8".

Esta propiedad es **de sólo lectura**.

<!-- END REF -->


<!-- REF FileHandleClass.eof.Desc -->
## .eof

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : Boolean<!-- END REF -->


#### Descripción

La propiedad `.eof` devuelve <!-- REF #FileHandleClass.eof.Summary -->True is the `offset` has reached the end of the file, and False otherwise<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->



<!-- REF FileHandleClass.getSize().Desc -->
## .getSize()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : Real <!-- END REF -->


<!--REF #FileHandleClass.getSize().Params -->
| Parámetros | Tipo |    | Descripción                                              |
| ---------- | ---- | -- | -------------------------------------------------------- |
| Result     | Real | <- | Tamaño del documento en bytes|<!-- END REF -->

|

#### Descripción

La función `.getSize()` <!-- REF #FileHandleClass.getSize().Summary -->devuelve el tamaño actual del documento, expresado en bytes<!-- END REF -->.

> Esta función devuelve el mismo valor que la propiedad ([.size](FileClass#size)) de la clase `File`.

#### Ver también

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->


<!-- REF FileHandleClass.mode.Desc -->
## .mode

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #FileHandleClass.mode.Syntax -->**.mode**: Text<!-- END REF -->


#### Descripción

La propiedad `.mode` devuelve <!-- REF #FileHandleClass.mode.Summary -->el modo en el que se creó el gestor de archivos: "leer", "escribir" o "añadir"<!-- END REF -->.

El modo se puede definir en la creación del manejador con la función [`file.open()`](FileClass#open). Por defecto es "leer".

Esta propiedad es **de sólo lectura**.

<!-- END REF -->



<!-- REF FileHandleClass.offset.Desc -->
## .offset

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : Real<!-- END REF -->


#### Descripción

La propiedad `.offset` devuelve <!-- REF #FileHandleClass.offset.Summary -->the current offset of the data stream (position inside the document)<!-- END REF -->. El valor del desplazamiento se actualiza automáticamente después de las operaciones de lectura y escritura.

Definir el `.offset` cambiará su valor actual.

- If the passed value is negative, the `.offset` is set to the start of the file (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

Esta propiedad es **lectura/escritura**.


<!-- END REF -->



<!-- REF FileHandleClass.readBlob().Desc -->
## .readBlob()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) <!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->
| Parámetros | Tipo                 |    | Descripción                                         |
| ---------- | -------------------- | -- | --------------------------------------------------- |
| *bytes*    | Real                 | -> | Número de bytes a leer                              |
| Result     | [4D.Blob](BlobClass) | <- | Bytes leídos del archivo|<!-- END REF -->

|

#### Descripción

La función `.readBlob()` <!-- REF #FileHandleClass.readBlob().Summary -->devuelve un blob de un tamaño de *bytes* del archivo, empezando por la posición actual <!-- END REF -->.

Cuando se ejecuta esta función, la posición actual ([.offset](#offset)) se actualiza después del último byte leído.

#### Ver también

[.writeBlob()](#writeblob)

<!-- END REF -->




<!-- REF FileHandleClass.readLine().Desc -->
## .readLine()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->
| Parámetros | Tipo |    | Descripción                               |
| ---------- | ---- | -- | ----------------------------------------- |
| Result     | Text | <- | Línea de texto|<!-- END REF -->

|

#### Descripción

La función `.readLine()` <!-- REF #FileHandleClass.readLine().Summary -->devuelve una línea de texto desde la posición actual hasta que se encuentre un delimitador de fin de línea o se llegue al final del documento<!-- END REF -->.

Cuando se ejecuta esta función, la posición actual ([.offset](#offset)) se actualiza.

> Cuando esta función se ejecuta por primera vez en un manejador de archivo, todo el contenido del documento se carga en un buffer.


#### Ver también

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->


<!-- REF FileHandleClass.readText().Desc -->
## .readText()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->
| Parámetros | Tipo |    | Descripción                                  |
| ---------- | ---- | -- | -------------------------------------------- |
| *stopChar* | Text | -> | Caracter(es) en los que dejar de leer        |
| Result     | Text | <- | Texto del archivo|<!-- END REF -->

|

#### Descripción

La función `.readText()` <!-- REF #FileHandleClass.readText().Summary -->returns text from the file, starting from the current position until the first *stopChar* string is encountered (if passed) or the end of file is reached<!-- END REF -->.

Esta función reemplaza todos los delimitadores originales de final de línea. By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeRead`](#breakmoderead) property.

The *stopChar* character string is not included in the returned text. If you omit the *stopChar* parameter, the whole document text is returned.

When this function is executed, the ([.offset](#offset)) is placed just after the *stopChar* string.

If the *stopChar* parameter is passed and not found, `.readText()` returns an empty string and the [.offset](#offset) is left untouched.

> Cuando esta función se ejecuta por primera vez en un manejador de archivo, todo el contenido del documento se carga en un buffer.

#### Ver también

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.setSize().Desc -->
## .setSize()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size*: Real)<!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->
| Parámetros | Tipo |    | Descripción                                                    |
| ---------- | ---- | -- | -------------------------------------------------------------- |
| size       | Real | -> | Nuevo tamaño del documento en bytes|<!-- END REF -->

|

#### Descripción

La función `.setSize()` <!-- REF #FileHandleClass.setSize().Summary -->define un nuevo *size* en bytes para el documento<!-- END REF -->.

If the *size* value is less than the current document size, the document content is truncated from the beginning to get the new *size* .

#### Ver también

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->


<!-- REF FileHandleClass.writeBlob().Desc -->
## .writeBlob()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->
| Parámetros | Tipo                 |    | Descripción                                              |
| ---------- | -------------------- | -- | -------------------------------------------------------- |
| *blob*     | [4D.Blob](BlobClass) | -> | Blob a escribir en el archivo|<!-- END REF -->

|

#### Descripción

La función `.writeBlob()` <!-- REF #FileHandleClass.writeBlob().Summary -->escribe *blob* en el archivo, empezando por la posición actual <!-- END REF -->.

Cuando se ejecuta esta función, la posición actual ([.offset](#offset)) se actualiza después del último byte escrito.

#### Ver también

[.readBlob()](#readblob)

<!-- END REF -->



<!-- REF FileHandleClass.writeLine().Desc -->
## .writeLine()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->
| Parámetros   | Tipo |    | Descripción                                 |
| ------------ | ---- | -- | ------------------------------------------- |
| *lineOfText* | Text | -> | Texto a escribir|<!-- END REF -->

|

#### Descripción

La función `.writeLine()` <!-- REF #FileHandleClass.writeLine().Summary -->writes *lineOfText* content at the current position and inserts an end-of-line delimiter<!-- END REF --> (a diferencia de la función [.writeText()](#writetext)). By default, a native end-of-line delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### Ver también

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.writeText().Desc -->
## .writeText()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->
| Parámetros    | Tipo |    | Descripción                                 |
| ------------- | ---- | -- | ------------------------------------------- |
| *textToWrite* | Text | -> | Texto a escribir|<!-- END REF -->

|

#### Descripción

La función `.writeText()` <!-- REF #FileHandleClass.writeText().Summary -->writes *textToWrite* content at the current position and does not insert a final end-of-line delimiter<!-- END REF --> (a diferencia de la función [.writeLine()](#writeline)). Esta función reemplaza todos los delimitadores originales de final de línea. This function replaces all original end-of-line delimiters.

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### Ver también

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
