---
id: Document
title: Document Class
---

## Description


## .creationDate

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.creationDate** : Date

#### Description

The `.creationDate` property returns the creation date of the file.

Cette propriété est en **lecture seule**. 

 
 
 ## .creationTime

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.creationTime** : Time

#### Description

The `.creationTime` property  returns the creation  time of the file (expressed as a number of seconds beginning at 00:00).

Cette propriété est en **lecture seule**. 





## .exists

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.exists** : Boolean

#### Description

The `.exists` property returns true if the file exists on disk, and false otherwise.

Cette propriété est en **lecture seule**. 







## .extension

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.extension** : Text
#### Description

The `.extension` property returns the extension of the file name (if any). Une extension commence toujours par ".". The property returns an empty string if the file name does not have an extension.

Cette propriété est en **lecture seule**. 






## .fullName

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.fullName** : Text
#### Description

The `.fullName` property returns the full name of the file, including its extension (if any).

Cette propriété est en **lecture seule**. 





## .hidden

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.hidden** : Boolean

#### Description

The `.hidden` property returns true if the file is set as "hidden" at the system level, and false otherwise.

Cette propriété est en **lecture seule**. 





## .isAlias

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.isAlias** : Boolean

#### Description

The `.isAlias` property returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise.

Cette propriété est en **lecture seule**. 




## .isFile

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.isFile** : Boolean

#### Description

The `.isFile` property returns always true for a file.

Cette propriété est en **lecture seule**. 




## .isFolder

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.isFolder** : Boolean

#### Description

The `.isFolder` property returns always false for a file.

Cette propriété est en **lecture seule**. 





## .isWritable

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.isWritable** : Boolean

#### Description

The `.isWritable` property returns true if the file exists on disk and is writable.
> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

Cette propriété est en **lecture seule**.

**Exemple**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```





## .modificationDate

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.modificationDate** : Date

#### Description

The `.modificationDate` property returns the date of the file's last modification.

Cette propriété est en **lecture seule**. 





## .modificationTime

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.modificationTime** : Time

##### Description

The `.modificationTime` property returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00).

Cette propriété est en **lecture seule**. 




## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.name** : Text

#### Description

The `.name` property returns the name of the file without extension (if any).

Cette propriété est en **lecture seule**. 



## .original

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.original** : 4D.File<br>**.original** : 4D.Folder

#### Description

The `.original` property returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:

*   a file object
*   a folder object

For non-alias files, the property returns the same file object as the file.

Cette propriété est en **lecture seule**. 





## .parent

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.parent** : 4D.Folder

#### Description

The `.parent` property returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

Cette propriété est en **lecture seule**. 





## .path

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.path** : Text

#### Description

The `.path` property returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

Cette propriété est en **lecture seule**. 




## .platformPath

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.platformPath** : Text

#### Description

The `.platformPath` property returns the path of the file expressed with the current platform syntax.

Cette propriété est en **lecture seule**. 





## .size

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.size** : Real

#### Description

The `.size` property returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0.

Cette propriété est en **lecture seule**. 











## .copyTo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File
| Paramètres        | Type        |    | Description                                 |
| ----------------- | ----------- |:--:| ------------------------------------------- |
| destinationFolder | 4D.Folder   | -> | Destination folder                          |
| newName           | Texte       | -> | Name for the copy                           |
| overwrite         | Entier long | -> | `fk overwrite` to replace existing elements |
| Résultat          | 4D.File     | <- | Copied file                                 |


#### Description

The `.copyTo()` function copies the `File` object into the specified *destinationFolder* .

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| Constant       | Valeur | Commentaire                         |
| -------------- | ------ | ----------------------------------- |
| `fk overwrite` | 4      | Overwrite existing elements, if any |


**Valeur retournée**

The copied `File` object.

#### Exemple

You want to copy a picture *file* from the user's document folder to the application folder:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

 


## .getContent()

<details><summary>Historique</summary>
| Version | Modifications   |
| ------- | --------------- |
| v19 R2  | Returns 4D.Blob |
| v17 R5  | Ajoutées        |
</details>

**.getContent( )** : 4D.Blob
| Paramètres | Type    |    | Description  |
| ---------- | ------- | -- | ------------ |
| Résultat   | 4D.Blob | <- | File content |


#### Description

The `.getContent()` function  returns a `4D.Blob` object containing the entire content of a file. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

**Valeur retournée**

A `4D.Blob` object.

#### Exemple

To save a document's contents in a `BLOB` field:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```




## .getIcon()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.getIcon**( { *size* : Integer } ) : Picture
| Paramètres | Type        |    | Description                                   |
| ---------- | ----------- | -- | --------------------------------------------- |
| size       | Entier long | -> | Side length for the returned picture (pixels) |
| Résultat   | Image       | <- | Icône                                         |


#### Description

The `.getIcon()` function returns the icon of the file.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.

**Valeur retournée**

File icon [picture](../Concepts/picture.html).






## .getText()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text

| Paramètres  | Type        |    | Description                     |
| ----------- | ----------- | -- | ------------------------------- |
| charSetName | Texte       | -> | Name of character set           |
| charSetNum  | Entier long | -> | Number of character set         |
| breakMode   | Entier long | -> | Processing mode for line breaks |
| Résultat    | Texte       | <- | Text from the document          |


#### Description
The `.getText()` function returns the contents of the file as text .

Optionally, you can designate the character set to be used for reading the contents. You can pass either:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or ""UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in *charSetName* or *charSetNum* (this parameter is then ignored). If the document does not contain a BOM and if *charSetName* or *charSetNum* is omitted, by default 4D uses the "UTF-8" character set.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters in the document. The following constants of the "System Documents" theme are available:

| Constant                      | Valeur | Commentaire                                                                                                                                                         |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0      | No processing                                                                                                                                                       |
| `Document with native format` | 1      | (Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows |
| `Document with CRLF`          | 2      | Line breaks are converted to Windows format: CRLF (carriage return + line feed)                                                                                     |
| `Document with CR`            | 3      | Line breaks are converted to OS X format: CR (carriage return)                                                                                                      |
| `Document with LF`            | 4      | Line breaks are converted to Unix format: LF (line feed)                                                                                                            |

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

**Valeur retournée**

Text of the file.

#### Exemple

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
 

 
 



