---
id: FileHandleClass
title: FileHandle
---

The `FileHandle` class has functions that allow you to sequentially read from or append contents to an opened [`File`](FileClass) object. Un handle de fichier peut accéder à n'importe quelle partie d'un document.

File handle objects are created with the [`file.open()`](FileClass#open) function.

> To read or write a whole document at once, you might consider using the [file.getText()](FileClass.md#gettext) and [file.setText()](FileClass.md#settext) functions.

Thanks to the standard 4D object _refcounting_, a file handle is automatically deleted when it is no longer referenced and thus, the requested [`File`](FileClass) object is automatically closed. Par conséquent, avec les file handles, vous n'avez pas à vous soucier de la fermeture des documents.

:::note

Les ressources d'un objet, telles que les documents, sont libérées lorsqu'il n'y a plus de références en mémoire, ce qui se produit par exemple à la fin de l'exécution de la méthode pour les variables locales. If you want to "force" the release of object resources at any moment, you can [nullify its references](../Concepts/dt_object.md#resources).

:::

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

### Objet FileHandle

Les objets de type File handle ne peuvent pas être partagés.

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->    |
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.breakModeWrite.Summary --> |
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.charset.Summary -->                      |
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.eof.Summary -->                                  |
| [<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.file.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.getSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.mode.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.offset.Summary -->                         |
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.readBlob().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.readLine().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.readText().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.setSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.writeBlob().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.writeLine().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileHandleClass.writeText().Summary -->            |

<!-- REF FileHandleClass.breakModeRead.Desc -->

## .breakModeRead

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->

#### Description

The `.breakModeRead` property returns <!-- REF #FileHandleClass.breakModeRead.Summary -->the processing mode for line breaks used when reading the file<!-- END REF -->.

The `.breakModeRead` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). La valeur par défaut est "native".

> The `.breakModeRead` property always contains a text value, even if the `.open()` option was set using a number (constant).

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.breakModeWrite.Desc -->

## .breakModeWrite

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : Text<!-- END REF -->

#### Description

The `.breakModeWrite` property returns <!-- REF #FileHandleClass.breakModeWrite.Summary -->the processing mode for line breaks used when writing to the file<!-- END REF -->.

The `.breakModeWrite` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). La valeur par défaut est "native".

> The `.breakModeWrite` property always contains a text value, even if the `.open()` option was set using a number (constant).

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.charset.Desc -->

## .charset

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : Text<!-- END REF -->

#### Description

The `.charset` property returns <!-- REF #FileHandleClass.charset.Summary -->the charset used when reading from or writing to the file<!-- END REF -->.

The charset can be defined at the handle creation with the [`file.open()`](FileClass#open) function. La valeur par défaut est "UTF-8".

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.eof.Desc -->

## .eof

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : Boolean<!-- END REF -->

#### Description

The `.eof` property returns <!-- REF #FileHandleClass.eof.Summary -->True is the `offset` has reached the end of the file, and False otherwise<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.file.Desc -->

## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### Description

The `.file` property returns <!-- REF #FileHandleClass.file.Summary -->the [4D.File](FileClass.md) object on which the handle has been created<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.getSize().Desc -->

## .getSize()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : Real <!-- END REF -->

<!--REF #FileHandleClass.getSize().Params -->

| Paramètres | Type |    | Description                  |
| ---------- | ---- | -- | ---------------------------- |
| Résultat   | Real | <- | Taille du document en octets |

<!-- END REF -->

#### Description

The `.getSize()` function <!-- REF #FileHandleClass.getSize().Summary -->returns the current size of the document, expressed in bytes<!-- END REF -->.

> This function returns the same value as the ([.size](FileClass#size)) property of the `File` class.

#### Voir également

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.mode.Desc -->

## .mode

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #FileHandleClass.mode.Syntax -->**.mode** : Text<!-- END REF -->

#### Description

The `.mode` property returns <!-- REF #FileHandleClass.mode.Summary -->the mode in which the file handle was created: "read", "write", or "append"<!-- END REF -->.

The mode can be defined at the handle creation with the [`file.open()`](FileClass#open) function. La valeur par défaut est "read".

This property is **read-only**.

<!-- END REF -->

<!-- REF FileHandleClass.offset.Desc -->

## .offset

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : Real<!-- END REF -->

#### Description

The `.offset` property returns <!-- REF #FileHandleClass.offset.Summary -->the current offset of the data stream (position inside the document)<!-- END REF -->. La valeur de l'offset est automatiquement mise à jour après les opérations de lecture et d'écriture.

Setting the `.offset` will change its current value at the moment of the next read or write operation.

- If the passed value is negative, the `.offset` is set to the start of the file (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

This property is **read/write**.

:::caution

When a file handle is created, the `.offset` value is a number of bytes. However, the unit of offset measurement differs according to the reading function: with [`readBlob()`](#readblob), `.offset` is a number of bytes, whereas with [`readText()`](#readtext)/[`readLine()`](#readline) it is a number of characters. Selon le jeu de caractères du fichier, un caractère correspond à un ou plusieurs octets. So, if you start reading with `readBlob()` and then call `readText()`, text reading will start at an inconsistent position. It is therefore essential to set the `.offset` property yourself if you switch from reading/writing blob to reading/writing text in the same filehandle. Par exemple :

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) <!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->

| Paramètres | Type                                 |    | Description                  |
| ---------- | ------------------------------------ | -- | ---------------------------- |
| _bytes_    | Real                                 | -> | Nombre d'octets à lire       |
| Résultat   | [4D.Blob](BlobClass) | <- | Octets lus depuis le fichier |

<!-- END REF -->

#### Description

The `.readBlob()` function <!-- REF #FileHandleClass.readBlob().Summary -->returns a blob a _bytes_ size from the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte read.

#### Voir également

[.writeBlob()](#writeblob)

<!-- END REF -->

<!-- REF FileHandleClass.readLine().Desc -->

## .readLine()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->

| Paramètres | Type |    | Description    |
| ---------- | ---- | -- | -------------- |
| Résultat   | Text | <- | Ligne de texte |

<!-- END REF -->

#### Description

The `.readLine()` function <!-- REF #FileHandleClass.readLine().Summary -->returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached<!-- END REF -->.

When this function is executed, the current position ([`.offset`](#offset)) is updated.

:::caution Warning

This function assumes that the [`.offset`](#offset) property is a number of characters, not a number of bytes. For more information, see the [.offset description](#offset).

:::

> Lorsque cette fonction est exécutée pour la première fois sur un file handle, le contenu entier du document est chargé dans un buffer.

#### Voir également

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->

<!-- REF FileHandleClass.readText().Desc -->

## .readText()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->

| Paramètres | Type |    | Description                                                                                           |
| ---------- | ---- | -- | ----------------------------------------------------------------------------------------------------- |
| _stopChar_ | Text | -> | Caractère(s) au(x)quel(s) arrêter la lecture |
| Résultat   | Text | <- | Texte du fichier                                                                                      |

<!-- END REF -->

#### Description

The `.readText()` function <!-- REF #FileHandleClass.readText().Summary -->returns text from the file, starting from the current position until the first _stopChar_ string is encountered (if passed) or the end of file is reached<!-- END REF -->.

The _stopChar_ character string is not included in the returned text. If you omit the _stopChar_ parameter, the whole document text is returned.

When this function is executed, the ([.offset](#offset)) is placed just after the _stopChar_ string.

:::caution Warning

This function assumes that the [`.offset`](#offset) property is a number of characters, not a number of bytes. For more information, see the [.offset description](#offset).

:::

If the _stopChar_ parameter is passed and not found, `.readText()` returns an empty string and the [.offset](#offset) is left untouched.

> Lorsque cette fonction est exécutée pour la première fois sur un file handle, le contenu entier du document est chargé dans un buffer.

#### Voir également

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.setSize().Desc -->

## .setSize()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size* : Real )<!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->

| Paramètres | Type |    | Description                           |
| ---------- | ---- | -- | ------------------------------------- |
| size       | Real | -> | Nouvelle taille du document en octets |

<!-- END REF -->

#### Description

The `.setSize()` function <!-- REF #FileHandleClass.setSize().Summary -->sets a new _size_ in bytes for the document<!-- END REF -->.

If the _size_ value is less than the current document size, the document content is truncated from the beginning to get the new _size_ .

#### Voir également

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.writeBlob().Desc -->

## .writeBlob()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->

| Paramètres | Type                                 |    | Description                   |
| ---------- | ------------------------------------ | -- | ----------------------------- |
| _blob_     | [4D.Blob](BlobClass) | -> | Blob à écrire dans le fichier |

<!-- END REF -->

#### Description

The `.writeBlob()` function <!-- REF #FileHandleClass.writeBlob().Summary -->writes _blob_ into the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte written.

#### Voir également

[.readBlob()](#readblob)

<!-- END REF -->

<!-- REF FileHandleClass.writeLine().Desc -->

## .writeLine()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->

| Paramètres   | Type |    | Description    |
| ------------ | ---- | -- | -------------- |
| _lineOfText_ | Text | -> | Texte à écrire |

<!-- END REF -->

#### Description

The `.writeLine()` function <!-- REF #FileHandleClass.writeLine().Summary -->writes _lineOfText_ content at the current position and inserts an end-of-line delimiter<!-- END REF --> (unlike the [.writeText()](#writetext) function). By default, a native end-of-line delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### Voir également

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.writeText().Desc -->

## .writeText()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->

| Paramètres    | Type |    | Description    |
| ------------- | ---- | -- | -------------- |
| _textToWrite_ | Text | -> | Texte à écrire |

<!-- END REF -->

#### Description

The `.writeText()` function <!-- REF #FileHandleClass.writeText().Summary -->writes _textToWrite_ content at the current position and does not insert a final end-of-line delimiter<!-- END REF --> (unlike the [.writeLine()](#writeline) function). By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### Voir également

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
