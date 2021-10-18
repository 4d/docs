---
id: Document
title: Document Class
---

## Descripción


<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.creationDate.Syntax -->
**.creationDate** : Date<!-- END REF -->


#### Descripción

The `.creationDate` property returns <!-- REF #document.creationDate.Summary -->the creation date of the file<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->
 
 
 <!-- REF document.creationTime.Desc -->
## .creationTime

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.creationTime.Syntax -->
**.creationTime** : Time<!-- END REF -->


#### Descripción

The `.creationTime` property  returns <!-- REF #document.creationTime.Summary -->the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.exists.Desc -->
## .exists

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.exists.Syntax -->
**.exists** : Boolean<!-- END REF -->


#### Descripción

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**. 

<!-- END REF -->





<!-- REF document.extension.Desc -->

## .extension

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.extension.Syntax -->
**.extension** : Text<!-- END REF -->

#### Descripción

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

This property is **read-only**. 

<!-- END REF -->





<!-- REF document.fullName.Desc -->
## .fullName

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.fullName.Syntax -->
**.fullName** : Text<!-- END REF -->

#### Descripción

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.hidden.Desc -->
## .hidden

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.hidden.Syntax -->
**.hidden** : Boolean<!-- END REF -->


#### Descripción

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.isAlias.Desc -->
## .isAlias

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.isAlias.Syntax -->
**.isAlias** : Boolean<!-- END REF -->


#### Descripción

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

This property is **read-only**. 

<!-- END REF -->



<!-- REF document.isFile.Desc -->
## .isFile

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.isFile.Syntax -->
**.isFile** : Boolean<!-- END REF -->


#### Descripción

The `.isFile` property returns <!-- REF #document.isFile.Summary -->always true for a file<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->



<!-- REF document.isFolder.Desc -->
## .isFolder

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.isFolder.Syntax -->
**.isFolder** : Boolean<!-- END REF -->


#### Descripción

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always false for a file<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.isWritable.Desc -->
## .isWritable

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.isWritable.Syntax -->
**.isWritable** : Boolean<!-- END REF -->


#### Descripción

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.
> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

This property is **read-only**.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.modificationDate.Syntax -->
**.modificationDate** : Date<!-- END REF -->


#### Descripción

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->the date of the file's last modification<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.modificationTime.Desc -->
## .modificationTime

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.modificationTime.Syntax -->
**.modificationTime** : Time<!-- END REF -->


##### Descripción

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->the time of the file's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 

<!-- END REF -->



<!-- REF document.name.Desc -->
## .name

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Descripción

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->


<!-- REF document.original.Desc -->
## .original

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.original.Syntax -->
**.original** : 4D.File<br>**.original** : 4D.Folder<!-- END REF -->


#### Descripción

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. El elemento objetivo puede ser:

*   a file object
*   un objeto de la carpeta

For non-alias files, the property returns the same file object as the file.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.parent.Desc -->
## .parent

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.parent.Syntax -->
**.parent** : 4D.Folder<!-- END REF -->


#### Descripción

The `.parent` property returns <!-- REF #document.parent.Summary -->the parent folder object of the file<!-- END REF -->. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.path.Desc -->
## .path

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.path.Syntax -->
**.path** : Text<!-- END REF -->


#### Descripción

The `.path` property returns <!-- REF #document.path.Summary -->the POSIX path of the file<!-- END REF -->. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**. 

<!-- END REF -->



<!-- REF document.platformPath.Desc -->
## .platformPath

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.platformPath.Syntax -->
**.platformPath** : Text<!-- END REF -->


#### Descripción

The `.platformPath` property returns <!-- REF #document.platformPath.Summary -->the path of the file expressed with the current platform syntax<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->




<!-- REF document.size.Desc -->
## .size

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.size.Syntax -->
**.size** : Real<!-- END REF -->


#### Descripción

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. If the file does not exist on disk, the size is 0.

This property is **read-only**. 

<!-- END REF -->










<!-- REF document.copyTo().Desc -->
## .copyTo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.copyTo().Syntax -->
**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->

<!-- REF #document.copyTo().Params -->
| Parámetros        | Tipo      |    | Descripción                                 |
| ----------------- | --------- |:--:| ------------------------------------------- |
| destinationFolder | 4D.Folder | -> | Destination folder                          |
| newName           | Texto     | -> | Nombre para la copia                        |
| overwrite         | Integer   | -> | `fk overwrite` to replace existing elements |
| Resultado         | 4D.File   | <- | Archivo copiado                             |
<!-- END REF -->


#### Descripción

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->copies the `File` object into the specified *destinationFolder* <!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| Constante      | Valor | Comentario                          |
| -------------- | ----- | ----------------------------------- |
| `fk overwrite` | 4     | Overwrite existing elements, if any |


**Valor devuelto**

The copied `File` object.

#### Ejemplo

You want to copy a picture *file* from the user's document folder to the application folder:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

 <!-- END REF -->



<!-- REF document.getContent().Desc -->
## .getContent()

<details><summary>Histórico</summary>
| Versión | Modificaciones   |
| ------- | ---------------- |
| v19 R2  | Devuelve 4D.Blob |
| v17 R5  | Añadidos         |
</details>

<!-- REF #document.getContent().Syntax -->
**.getContent( )** : 4D.Blob<!-- END REF -->

<!-- REF #document.getContent().Params -->
| Parámetros | Tipo    |    | Descripción           |
| ---------- | ------- | -- | --------------------- |
| Resultado  | 4D.Blob | <- | Contenido del archivo |
<!-- END REF -->


#### Descripción

The `.getContent()` function  <!-- REF #document.getContent().Summary -->returns a `4D.Blob` object containing the entire content of a file<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

**Valor devuelto**

A `4D.Blob` object.

#### Ejemplo

To save a document's contents in a `BLOB` field:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```

<!-- END REF -->



<!-- REF document.getIcon().Desc -->
## .getIcon()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.getIcon().Syntax -->
**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #document.getIcon().Params -->
| Parámetros | Tipo    |    | Descripción                                   |
| ---------- | ------- | -- | --------------------------------------------- |
| size       | Integer | -> | Side length for the returned picture (pixels) |
| Resultado  | Imagen  | <- | Icono                                         |
<!-- END REF -->


#### Descripción

The `.getIcon()` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.

**Valor devuelto**

File icon [picture](../Concepts/picture.html).



<!-- END REF -->



<!-- REF document.getText().Desc -->
## .getText()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.getText().Syntax -->
**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text<!-- END REF -->


<!-- REF #document.getText().Params -->
| Parámetros  | Tipo    |    | Descripción                     |
| ----------- | ------- | -- | ------------------------------- |
| charSetName | Texto   | -> | Nombre del juego de caracteres  |
| charSetNum  | Integer | -> | Number of character set         |
| breakMode   | Integer | -> | Processing mode for line breaks |
| Resultado   | Texto   | <- | Text from the document          |
<!-- END REF -->


#### Descripción
The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

Optionally, you can designate the character set to be used for reading the contents. Puede pasar:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or ""UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in *charSetName* or *charSetNum* (this parameter is then ignored). If the document does not contain a BOM and if *charSetName* or *charSetNum* is omitted, by default 4D uses the "UTF-8" character set.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters in the document. The following constants of the "System Documents" theme are available:

| Constante                     | Valor | Comentario                                                                                                                                                          |
| ----------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Sin procesar                                                                                                                                                        |
| `Document with native format` | 1     | (Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows |
| `Document with CRLF`          | 2     | Line breaks are converted to Windows format: CRLF (carriage return + line feed)                                                                                     |
| `Document with CR`            | 3     | Line breaks are converted to OS X format: CR (carriage return)                                                                                                      |
| `Document with LF`            | 4     | Line breaks are converted to Unix format: LF (line feed)                                                                                                            |

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

**Valor devuelto**

Texto del archivo.

#### Ejemplo

Given the following text document (fields are separated by tabs):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

When you execute this code:


```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 por defecto
 $txt:=$myFile.getText()
```
... obtiene:

```4d
  // $Text = "id name price vat\r\n3 thé 1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"
  // \t = tab
  // \r = CR
```
 

<!-- END REF -->
 
 



