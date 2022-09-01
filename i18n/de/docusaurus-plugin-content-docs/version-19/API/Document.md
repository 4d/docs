---
id: Document
title: Document Class
---

## Beschreibung

<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.creationDate.Syntax -->

**.creationDate** : Date<!-- END REF -->

#### Beschreibung

The `.creationDate` property returns <!-- REF #document.creationDate.Summary -->The `.creationDate` property returns<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

## .creationTime

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.creationTime.Syntax -->

**.creationTime** : Time<!-- END REF -->

#### Beschreibung

The `.creationTime` property  returns <!-- REF #document.creationTime.Summary -->the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- REF document.exists.Desc -->
## .exists

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.exists.Syntax -->

**.exists** : Boolean<!-- END REF -->

#### Beschreibung

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.extension.Syntax -->

**.extension** : Text<!-- END REF -->

#### Beschreibung

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. An extension always starts with ".". The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.fullName.Desc -->
## .fullName

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.fullName.Syntax -->

**.fullName** : Text<!-- END REF -->

#### Beschreibung

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.hidden.Desc -->
## .hidden

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.hidden.Syntax -->

**.hidden** : Boolean<!-- END REF -->

#### Beschreibung

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isAlias.Desc -->
## .isAlias

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.isAlias.Syntax -->

**.isAlias** : Boolean<!-- END REF -->

#### Beschreibung

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isFile.Desc -->
## .isFile

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.isFile.Syntax -->

**.isFile** : Boolean<!-- END REF -->

#### Beschreibung

The `.isFile` property returns <!-- REF #document.isFile.Summary -->The `.copyTo()` function<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isFolder.Desc -->
## .isFolder

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.isFolder.Syntax -->

**.isFolder** : Boolean<!-- END REF -->

#### Beschreibung

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always true for a file<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isWritable.Desc -->
## .isWritable

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.isWritable.Syntax -->

**.isWritable** : Boolean<!-- END REF -->

#### Beschreibung

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.
> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

This property is **read-only**.

**Beispiel**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```


<!-- END REF -->

<!-- REF document.modificationDate.Desc -->
## .modificationDate

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.modificationDate.Syntax -->

**.modificationDate** : Date<!-- END REF -->

#### Beschreibung

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->The `.modificationDate` property returns<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->
## .modificationTime

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.modificationTime.Syntax -->

**.modificationTime** : Time<!-- END REF -->

##### Beschreibung

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->The `.modificationTime` property returns<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

<!-- REF document.name.Desc -->
## .name

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Beschreibung

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.original.Desc -->
## .original

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.original.Syntax -->

**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### Beschreibung

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. The target element can be:

* a file object
* a folder object

For non-alias files, the property returns the same file object as the file.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.parent.Desc -->
## .parent

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.parent.Syntax -->

**.parent** : 4D.Folder<!-- END REF -->

#### Beschreibung

The `.parent` property returns <!-- REF #document.parent.Summary -->The `.parent` property returns<!-- END REF -->. .

This property is **read-only**.

<!-- END REF -->

<!-- REF document.path.Desc -->
## .path

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.path.Syntax -->

**.path** : Text<!-- END REF -->

#### Beschreibung

The `.path` property returns <!-- REF #document.path.Summary -->The `.path` property returns<!-- END REF -->. .

This property is **read-only**.

<!-- END REF -->

<!-- REF document.platformPath.Desc -->
## .platformPath

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.platformPath.Syntax -->

**.platformPath** : Text<!-- END REF -->

#### Beschreibung

The `.platformPath` property returns <!-- REF #document.platformPath.Summary -->The `.platformPath` property returns<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.size.Desc -->
## .size

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.size.Syntax -->

**.size** : Real<!-- END REF -->

#### Beschreibung

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. If the file does not exist on disk, the size is 0.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.copyTo().Desc -->
## .copyTo()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.copyTo().Syntax -->

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->


<!-- REF #document.copyTo().Params -->
| Parameter         | Typ       |    | Beschreibung                                |
| ----------------- | --------- |:--:| ------------------------------------------- |
| destinationFolder | 4D.Folder | -> | Destination folder                          |
| newName           | Text      | -> | Name for the copy                           |
| overwrite         | Ganzzahl  | -> | `fk overwrite` to replace existing elements |
| Ergebnis          | 4D.File   | <- | Copied file|<!-- END REF -->      |

#### Beschreibung

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->The `.isFolder` property returns <!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| Constant       | Wert | Kommentar                           |
| -------------- | ---- | ----------------------------------- |
| `fk overwrite` | 4    | Overwrite existing elements, if any |

**Rückgabewert**

The copied `File` object.

#### Beispiel

You want to copy a picture *file* from the user's document folder to the application folder:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```


<!-- END REF -->

<!-- REF document.getContent().Desc -->
## .getContent()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.getContent().Syntax -->

**.getContent( )** : Blob<!-- END REF -->


<!-- REF #document.getContent().Params -->
| Parameter | Typ  |    | Beschreibung                            |
| --------- | ---- | -- | --------------------------------------- |
| Ergebnis  | Blob | <- | File content|<!-- END REF --> |

#### Beschreibung

The `.getContent()` function  <!-- REF #document.getContent().Summary -->The `.getContent()` function<!-- END REF -->. .

**Rückgabewert**

A `Blob`.

#### Beispiel

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

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.getIcon().Syntax -->

**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->


<!-- REF #document.getIcon().Params -->
| Parameter | Typ      |    | Beschreibung                                  |
| --------- | -------- | -- | --------------------------------------------- |
| size      | Ganzzahl | -> | Side length for the returned picture (pixels) |
| Ergebnis  | Bild     | <- | Icon|<!-- END REF -->               |

#### Beschreibung

The `.getIcon()` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.

**Rückgabewert**

File icon [picture](../Concepts/picture.html).

<!-- END REF -->

<!-- REF document.getText().Desc -->
## .getText()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

<!-- REF #document.getText().Syntax -->

**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->


<!-- REF #document.getText().Params -->
| Parameter   | Typ      |    | Beschreibung                                      |
| ----------- | -------- | -- | ------------------------------------------------- |
| charSetName | Text     | -> | Name of character set                             |
| charSetNum  | Ganzzahl | -> | Number of character set                           |
| breakMode   | Ganzzahl | -> | Processing mode for line breaks                   |
| Ergebnis    | Text     | <- | Text from the document|<!-- END REF --> |

#### Beschreibung

The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

Optionally, you can designate the character set to be used for reading the contents. You can pass either:

* in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
* or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in *charSetName* or *charSetNum* (this parameter is then ignored). If the document does not contain a BOM and if *charSetName* or *charSetNum* is omitted, by default 4D uses the "UTF-8" character set.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters in the document. The following constants of the "System Documents" theme are available:

| Constant                      | Wert | Kommentar                                                                                                                                                           |
| ----------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0    | No processing                                                                                                                                                       |
| `Document with native format` | 1    | (Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows |
| `Document with CRLF`          | 2    | Line breaks are converted to Windows format: CRLF (carriage return + line feed)                                                                                     |
| `Document with CR`            | 3    | Line breaks are converted to OS X format: CR (carriage return)                                                                                                      |
| `Document with LF`            | 4    | Line breaks are converted to Unix format: LF (line feed)                                                                                                            |

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

**Rückgabewert**

Text of the file.

#### Beispiel

Given the following text document (fields are separated by tabs):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

When you execute this code:

```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 by default
 $txt:=$myFile.getText()
```

... you get the following for `$txt`:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

with `\t` (tab) as separator and `\r\n` (CRLF) as line delimiter.

Here is another example with the same file, but a different line delimiter:

```4d
 $txt:=$myFile.getText("UTF-8", Document with LF)
```

In this case, the contents of `$txt` are as follows:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

This time `\n` (LF) is used as line delimiter.

<!-- END REF -->
