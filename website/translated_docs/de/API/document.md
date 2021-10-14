---
id: Document
title: Document Class
---

## Beschreibung


## .creationDate

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.creationDate** : Date

#### Beschreibung

The `.creationDate` property returns the creation date of the file.

This property is **read-only**. 

 
 
 ## .creationTime

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.creationTime** : Time

#### Beschreibung

The `.creationTime` property  returns the creation  time of the file (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 





## .exists

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.exists** : Boolean

#### Beschreibung

The `.exists` property returns true if the file exists on disk, and false otherwise.

This property is **read-only**. 







## .extension

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.extension** : Text
#### Beschreibung

The `.extension` property returns the extension of the file name (if any). An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

This property is **read-only**. 






## .fullName

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.fullName** : Text
#### Beschreibung

The `.fullName` property returns the full name of the file, including its extension (if any).

This property is **read-only**. 





## .hidden

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.hidden** : Boolean

#### Beschreibung

The `.hidden` property returns true if the file is set as "hidden" at the system level, and false otherwise.

This property is **read-only**. 





## .isAlias

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.isAlias** : Boolean

#### Beschreibung

The `.isAlias` property returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise.

This property is **read-only**. 




## .isFile

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.isFile** : Boolean

#### Beschreibung

The `.isFile` property returns always true for a file.

This property is **read-only**. 




## .isFolder

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.isFolder** : Boolean

#### Beschreibung

The `.isFolder` property returns always false for a file.

This property is **read-only**. 





## .isWritable

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.isWritable** : Boolean

#### Beschreibung

The `.isWritable` property returns true if the file exists on disk and is writable.
> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

This property is **read-only**.

**Beispiel**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```





## .modificationDate

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.modificationDate** : Date

#### Beschreibung

The `.modificationDate` property returns the date of the file's last modification.

This property is **read-only**. 





## .modificationTime

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.modificationTime** : Time

##### Beschreibung

The `.modificationTime` property returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00).

This property is **read-only**. 




## .name

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.name** : Text

#### Beschreibung

The `.name` property returns the name of the file without extension (if any).

This property is **read-only**. 



## .original

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.original** : 4D.File<br>**.original** : 4D.Folder

#### Beschreibung

The `.original` property returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:

*   a file object
*   a folder object

For non-alias files, the property returns the same file object as the file.

This property is **read-only**. 





## .parent

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.parent** : 4D.Folder

#### Beschreibung

The `.parent` property returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

This property is **read-only**. 





## .path

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.path** : Text

#### Beschreibung

The `.path` property returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**. 




## .platformPath

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.platformPath** : Text

#### Beschreibung

The `.platformPath` property returns the path of the file expressed with the current platform syntax.

This property is **read-only**. 





## .size

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.size** : Real

#### Beschreibung

The `.size` property returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0.

This property is **read-only**. 











## .copyTo()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File
| Parameter         | Typ       |    | Beschreibung                                |
| ----------------- | --------- |:--:| ------------------------------------------- |
| destinationFolder | 4D.Folder | -> | Destination folder                          |
| newName           | Text      | -> | Name for the copy                           |
| overwrite         | Ganzzahl  | -> | `fk overwrite` to replace existing elements |
| Ergebnis          | 4D.File   | <- | Copied file                                 |


#### Beschreibung

The `.copyTo()` function copies the `File` object into the specified *destinationFolder* .

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

 


## .getContent()

<details><summary>History</summary>
| Version | Changes         |
| ------- | --------------- |
| v19 R2  | Returns 4D.Blob |
| v17 R5  | Added           |
</details>

**.getContent( )** : 4D.Blob
| Parameter | Typ     |    | Beschreibung |
| --------- | ------- | -- | ------------ |
| Ergebnis  | 4D.Blob | <- | File content |


#### Beschreibung

The `.getContent()` function  returns a `4D.Blob` object containing the entire content of a file. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

**Rückgabewert**

A `4D.Blob` object.

#### Beispiel

To save a document's contents in a `BLOB` field:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```




## .getIcon()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.getIcon**( { *size* : Integer } ) : Picture
| Parameter | Typ      |    | Beschreibung                                  |
| --------- | -------- | -- | --------------------------------------------- |
| size      | Ganzzahl | -> | Side length for the returned picture (pixels) |
| Ergebnis  | Bild     | <- | Icon                                          |


#### Beschreibung

The `.getIcon()` function returns the icon of the file.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.

**Rückgabewert**

File icon [picture](../Concepts/picture.html).






## .getText()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |
</details>

**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text

| Parameter   | Typ      |    | Beschreibung                    |
| ----------- | -------- | -- | ------------------------------- |
| charSetName | Text     | -> | Name of character set           |
| charSetNum  | Ganzzahl | -> | Number of character set         |
| breakMode   | Ganzzahl | -> | Processing mode for line breaks |
| Ergebnis    | Text     | <- | Text from the document          |


#### Beschreibung
The `.getText()` function returns the contents of the file as text .

Optionally, you can designate the character set to be used for reading the contents. You can pass either:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or ""UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

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
... you get:

```4d
  // $Text = "id name price vat\r\n3 thé 1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"
  // \t = tab
  // \r = CR
```
 

 
 



