---
id: Directory
title: Classe Directory
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

La propriété `.creationDate` retourne la date de création du dossier..

Cette propriété est en **lecture seule**. 

 
--- 
 
 ## .creationTime

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.creationTime** : Time


#### Description

La propriété `.creationTime` retourne l'heure de création du dossier (exprimée en nombre de secondes, commençant à 00:00).

Cette propriété est en **lecture seule**. 


---


## .exists

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.exists** : Boolean

#### Description

La propriété `.exists` retourne true si le dossier existe sur le disque, et retourne false dans le cas contraire.

Cette propriété est en **lecture seule**. 



---


## .extension

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.extension** : Text

#### Description

La propriété `.extension` retourne l'extension du nom du dossier (le cas échéant). Une extension commence toujours par ".". La propriété retourne une chaîne vide si le nom du dossier n'a pas d'extension.

Cette propriété est en **lecture seule**. 



---

## .fullName

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.fullName** : Text

#### Description

La propriété `.fullName` retourne le nom complet du dossier, y compris son extension (le cas échéant).

Cette propriété est en **lecture seule**. 



---

## .hidden

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.hidden** : Boolean

#### Description

La propriété `.hidden` retourne  true si le dossier est défini comme "hidden" au niveau du système, et retourne false dans le cas contraire.

Cette propriété est en **lecture seule**. 


---


## .isAlias

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.isAlias** : Boolean


#### Description

La propriété `.isAlias` retourne toujours **false** pour un objet `Folder`.

Cette propriété est en **lecture seule**. 


---

## .isFile

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.isFile** : Boolean

#### Description

La propriété `.isFile` retournetoujours **false** pour un dossier.

Cette propriété est en **lecture seule**. 


---

## .isFolder

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.isFolder** : Boolean

#### Description

La propriété `.isFolder` retourne toujours **false** pour un dossier.

Cette propriété est en **lecture seule**. 


---

## .isPackage

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.isPackage** : Boolean

#### Description

La propriété `.isPackage` retourne true si le dossier est un package sous macOS (et s'il existe sur le disque). Sinon, elle retourne false.

Sous Windows, `.isPackage` retourne toujours **false**.

Cette propriété est en **lecture seule**. 



---

## .modificationDate

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.modificationDate** : Date

#### Description

The `.modificationDate` property returns  the date of the folder's last modification.

Cette propriété est en **lecture seule**. 



---

## .modificationTime

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.modificationTime** : Time

#### Description

The `.modificationTime` property returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00).

Cette propriété est en **lecture seule**. 


---

## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>



**.name** : Text

#### Description

The `.name` property returns  the name of the folder, without extension (if any).

Cette propriété est en **lecture seule**. 


---

## .original

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.original** : 4D.Folder

#### Description

The `.original` property returns the same Folder object as the folder.

Cette propriété est en **lecture seule**.
> This property is available on folders to allow generic code to process folders or files.


---


## .parent

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.parent** : 4D.Folder

#### Description

The `.parent` property returns the parent folder object of the folder. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

If the folder does not have a parent (root), the null value is returned.

Cette propriété est en **lecture seule**. 



---

## .path

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.path** : Text

#### Description

The `.path` property returns the POSIX path of the folder. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

Cette propriété est en **lecture seule**. 


---

## .platformPath

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.platformPath** : Text

#### Description

The `.platformPath` property returns the path of the folder expressed with the current platform syntax.

Cette propriété est en **lecture seule**. 



---





## .copyTo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder
| Paramètres        | Type        |    | Description                                 |
| ----------------- | ----------- |:--:| ------------------------------------------- |
| destinationFolder | 4D.Folder   | -> | Destination folder                          |
| newName           | Texte       | -> | Name for the copy                           |
| overwrite         | Entier long | -> | `fk overwrite` to replace existing elements |
| Résultat          | 4D.Folder   | <- | Copied file or folder                       |


#### Description

The `.copyTo()` function copies the `Folder` object into the specified *destinationFolder*.

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the folder is copied with the name of the original folder. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a folder with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| Constant       | Valeur | Commentaire                         |
| -------------- | ------ | ----------------------------------- |
| `fk overwrite` | 4      | Overwrite existing elements, if any |


**Valeur retournée**

The copied `Folder` object.

#### Exemple

You want to copy a Pictures *folder* from the user's Document folder to the Database folder:

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 

---


## .file()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.file**( *path* : Text ) : 4D.File
| Paramètres | Type    |    | Description                          |
| ---------- | ------- | -- | ------------------------------------ |
| path       | Texte   | -> | Relative POSIX file pathname         |
| Résultat   | 4D.File | <- | `File` object (null if invalid path) |

#### Description

The `.file()` function creates a `File` object inside the `Folder` object and returns its reference.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.

**Valeur retournée**

A `File` object or null if *path* is invalid.

#### Exemple

```4d
var $myPDF : 4D.File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```


---

## .files()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.files**( { *options* : Integer } ) : Collection
| Paramètres | Type        |    | Description                         |
| ---------- | ----------- | -- | ----------------------------------- |
| options    | Entier long | -> | File list options                   |
| Résultat   | Collection  | <- | Collection of children file objects |

#### Description

The `.files()` function returns a collection of `File` objects contained in the folder.
> Aliases or symbolic links are not resolved.

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| Constant              | Valeur | Commentaire                                                                         |
| --------------------- | ------ | ----------------------------------------------------------------------------------- |
| `fk recursive`        | 1      | The collection contains files or folders of the specified folder and its subfolders |
| `fk ignore invisible` | 8      | Invisible files or folders are not listed                                           |

**Valeur retournée**

Collection of `File` objects.

#### Exemple 1

You want to know if there are invisible files in the Database folder:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

#### Exemple 2

You want to get all files that are not invisible in the Documents folder:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```


---

## .folder()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.folder**( *path* : Text ) : 4D.Folder
| Paramètres | Type      |    | Description                                    |
| ---------- | --------- | -- | ---------------------------------------------- |
| path       | Texte     | -> | Relative POSIX file pathname                   |
| Résultat   | 4D.Folder | <- | Created folder object (null if invalid *path*) |

#### Description

The `.folder()` function creates a `Folder` object inside the parent `Folder` object and returns its reference.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.

**Valeur retournée**

A `Folder` object or null if *path* is invalid.

#### Exemple

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```


---

## .folders()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

**.folders**( { *options* : Integer } ) : Collection
| Paramètres | Type        |    | Description                           |
| ---------- | ----------- | -- | ------------------------------------- |
| options    | Entier long | -> | Folder list options                   |
| Résultat   | Collection  | <- | Collection of children folder objects |

#### Description

The `.folders()` function returns a collection of `Folder` objects contained in the parent folder.

By default, if you omit the *options* parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| Constant              | Valeur | Commentaire                                                                         |
| --------------------- | ------ | ----------------------------------------------------------------------------------- |
| `fk recursive`        | 1      | The collection contains files or folders of the specified folder and its subfolders |
| `fk ignore invisible` | 8      | Invisible files or folders are not listed                                           |

**Valeur retournée**

Collection of `Folder` objects.

#### Exemple

You want the collection of all folders and subfolders of the database folder:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```


---

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

The `.getIcon()` function returns the icon of the folder.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels ("large icons") or 16x16 pixels ("small icons"). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.

**Valeur retournée**

Folder icon [picture](Concepts/dt_picture.md).




