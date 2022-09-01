---
id: FileHandleClass
title: FileHandle
---

The `FileHandle` class has functions that allow you to sequentially read from or append contents to an opened [`File`](FileClass) object. A file handle can access any part of a document.

File handle objects are created with the [`file.open()`](FileClass#open) function.

> To read or write a whole document at once, you might consider using the [file.getText()](FileClass.md#gettext) and [file.setText()](FileClass.md#settext) functions.

Thanks to the standard 4D object *refcounting*, a file handle is automatically deleted when it is no longer referenced and thus, the requested [`File`](FileClass) object is automatically closed. Consequently, with file handles you don't need to worry about closing documents.


### Exemple

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
$stopChar:="!" $fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

//Reading line by line
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
    $lines.push($fhandle.readLine())
End while

```

### FileHandle object

File handle objects cannot be shared.

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

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->

**.breakModeRead** : Text<!-- END REF -->


#### Description

The `.breakModeRead` property returns <!-- REF #FileHandleClass.breakModeRead.Summary -->the processing mode for line breaks used when reading the file<!-- END REF -->.


The `.breakModeRead` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Default is "native".

> The `.breakModeRead` property always contains a text value, even if the `.open()` option was set using a number (constant).


Cette propriété est en **lecture seule**.

<!-- END REF -->


<!-- REF FileHandleClass.breakModeWrite.Desc -->
## .breakModeWrite

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->

**.breakModeWrite** : Text<!-- END REF -->


#### Description

The `.breakModeWrite` property returns <!-- REF #FileHandleClass.breakModeWrite.Summary -->the processing mode for line breaks used when writing to the file<!-- END REF -->.

The `.breakModeWrite` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Default is "native".

> The `.breakModeWrite` property always contains a text value, even if the `.open()` option was set using a number (constant).


Cette propriété est en **lecture seule**.

<!-- END REF -->



<!-- REF FileHandleClass.charset.Desc -->
## .charset

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!-- REF #FileHandleClass.charset.Syntax -->

**.charset** : Text<!-- END REF -->


#### Description

The `.charset` property returns <!-- REF #FileHandleClass.charset.Summary -->the charset used when reading from or writing to the file<!-- END REF -->.

The charset can be defined at the handle creation with the [`file.open()`](FileClass#open) function. La valeur par défaut est "UTF-8".

Cette propriété est en **lecture seule**.

<!-- END REF -->


<!-- REF FileHandleClass.eof.Desc -->
## .eof

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!-- REF #FileHandleClass.eof.Syntax -->

**.eof** : Boolean<!-- END REF -->


#### Description

The `.eof` property returns <!-- REF #FileHandleClass.eof.Summary -->True is the `offset` has reached the end of the file, and False otherwise<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->



<!-- REF FileHandleClass.getSize().Desc -->
## .getSize()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!--REF #FileHandleClass.getSize().Syntax -->

**.getSize()** : Real <!-- END REF -->


<!--REF #FileHandleClass.getSize().Params -->
| Paramètres | Type |    | Description                                              |
| ---------- | ---- | -- | -------------------------------------------------------- |
| Result     | Real | <- | Size of the document in bytes|<!-- END REF -->

|

#### Description

The `.getSize()` function <!-- REF #FileHandleClass.getSize().Summary -->returns the current size of the document, expressed in bytes<!-- END REF -->.

> This function returns the same value as the ([.size](FileClass#size)) property of the `File` class.

#### Voir également

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->


<!-- REF FileHandleClass.mode.Desc -->
## .mode

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!-- REF #FileHandleClass.mode.Syntax -->

**.mode** : Text<!-- END REF -->


#### Description

The `.mode` property returns <!-- REF #FileHandleClass.mode.Summary -->the mode in which the file handle was created: "read", "write", or "append"<!-- END REF -->.

The mode can be defined at the handle creation with the [`file.open()`](FileClass#open) function. Default is "read".

Cette propriété est en **lecture seule**.

<!-- END REF -->



<!-- REF FileHandleClass.offset.Desc -->
## .offset

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!-- REF #FileHandleClass.offset.Syntax -->

**.offset** : Real<!-- END REF -->


#### Description

The `.offset` property returns <!-- REF #FileHandleClass.offset.Summary -->the current offset of the data stream (position inside the document)<!-- END REF -->. The offset value is automatically updated after read and write operations.

Setting the `.offset` will change its current value.

- If the passed value is negative, the `.offset` is set to the start of the file (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

This property is **read/write**.


<!-- END REF -->



<!-- REF FileHandleClass.readBlob().Desc -->
## .readBlob()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!--REF #FileHandleClass.readBlob().Syntax -->

**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) <!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->
| Paramètres | Type                 |    | Description                                         |
| ---------- | -------------------- | -- | --------------------------------------------------- |
| *bytes*    | Real                 | -> | Number of bytes to be read                          |
| Result     | [4D.Blob](BlobClass) | <- | Bytes read from the file|<!-- END REF -->

|

#### Description

The `.readBlob()` function <!-- REF #FileHandleClass.readBlob().Summary -->returns a blob a *bytes* size from the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte read.

#### Voir également

[.writeBlob()](#writeblob)

<!-- END REF -->




<!-- REF FileHandleClass.readLine().Desc -->
## .readLine()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!--REF #FileHandleClass.readLine().Syntax -->

**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->
| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| Result     | Text | <- | Line of text|<!-- END REF -->

|

#### Description

The `.readLine()` function <!-- REF #FileHandleClass.readLine().Summary -->returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached<!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated.

> When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.


#### Voir également

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->


<!-- REF FileHandleClass.readText().Desc -->
## .readText()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!--REF #FileHandleClass.readText().Syntax -->

**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->
| Paramètres | Type |    | Description                                   |
| ---------- | ---- | -- | --------------------------------------------- |
| *stopChar* | Text | -> | Character(s) at which to stop reading         |
| Result     | Text | <- | Text from the file|<!-- END REF -->

|

#### Description

The `.readText()` function <!-- REF #FileHandleClass.readText().Summary -->returns text from the file, starting from the current position until the first *stopChar* string is encountered (if passed) or the end of file is reached<!-- END REF -->.

This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeRead`](#breakmoderead) property.

The *stopChar* character string is not included in the returned text. If you omit the *stopChar* parameter, the whole document text is returned.

When this function is executed, the ([.offset](#offset)) is placed just after the *stopChar* string.

If the *stopChar* parameter is passed and not found, `.readText()` returns an empty string and the [.offset](#offset) is left untouched.

> When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.

#### Voir également

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.setSize().Desc -->
## .setSize()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!--REF #FileHandleClass.setSize().Syntax -->

**.setSize**( *size* : Real )<!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->
| Paramètres | Type |    | Description                                                  |
| ---------- | ---- | -- | ------------------------------------------------------------ |
| size       | Real | -> | New size of the document in bytes|<!-- END REF -->

|

#### Description

The `.setSize()` function <!-- REF #FileHandleClass.setSize().Summary -->sets a new *size* in bytes for the document<!-- END REF -->.

If the *size* value is less than the current document size, the document content is truncated from the beginning to get the new *size* .

#### Voir également

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->


<!-- REF FileHandleClass.writeBlob().Desc -->
## .writeBlob()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->

**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->
| Paramètres | Type                 |    | Description                                          |
| ---------- | -------------------- | -- | ---------------------------------------------------- |
| *blob*     | [4D.Blob](BlobClass) | -> | Blob to write in the file|<!-- END REF -->

|

#### Description

The `.writeBlob()` function <!-- REF #FileHandleClass.writeBlob().Summary -->writes *blob* into the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte written.

#### Voir également

[.readBlob()](#readblob)

<!-- END REF -->



<!-- REF FileHandleClass.writeLine().Desc -->
## .writeLine()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!--REF #FileHandleClass.writeLine().Syntax -->

**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->
| Paramètres   | Type |    | Description                              |
| ------------ | ---- | -- | ---------------------------------------- |
| *lineOfText* | Text | -> | Text to write|<!-- END REF -->

|

#### Description

The `.writeLine()` function <!-- REF #FileHandleClass.writeLine().Summary -->writes *lineOfText* content at the current position and inserts an end-of-line delimiter<!-- END REF --> (unlike the [.writeText()](#writetext) function). By default, a native end-of-line delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### Voir également

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.writeText().Desc -->
## .writeText()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajoutées      |
</details>

<!--REF #FileHandleClass.writeText().Syntax -->

**.writeText**( *textToWrite* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->
| Paramètres    | Type |    | Description                              |
| ------------- | ---- | -- | ---------------------------------------- |
| *textToWrite* | Text | -> | Text to write|<!-- END REF -->

|

#### Description

The `.writeText()` function <!-- REF #FileHandleClass.writeText().Summary -->writes *textToWrite* content at the current position and does not insert a final end-of-line delimiter<!-- END REF --> (unlike the [.writeLine()](#writeline) function). This function replaces all original end-of-line delimiters. This function replaces all original end-of-line delimiters.

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### Voir également

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
