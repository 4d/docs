---
id: Directory
title: Classe Directory
---

## Description


<!-- REF directory.creationDate.Desc -->
## .creationDate

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.creationDate.Syntax -->
**.creationDate** : Date<!-- END REF -->


#### Description

La propriété `.creationDate` retourne <!-- REF #directory.creationDate.Summary -->la date de création du dossier.<!-- END REF -->.

Cette propriété est en **lecture seule**. 

<!-- END REF -->
 
--- 
 
 <!-- REF directory.creationTime.Desc -->
## .creationTime

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.creationTime.Syntax -->
**.creationTime** : Time<!-- END REF -->



#### Description

La propriété `.creationTime` retourne <!-- REF #directory.creationTime.Summary -->l'heure de création du dossier<!-- END REF --> (exprimée en nombre de secondes, commençant à 00:00).

Cette propriété est en **lecture seule**. 

<!-- END REF -->

---


<!-- REF directory.exists.Desc -->
## .exists

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.exists.Syntax -->
**.exists** : Boolean<!-- END REF -->


#### Description

La propriété `.exists` retourne <!-- REF #directory.exists.Summary -->true si le dossier existe sur le disque<!-- END REF -->, et retourne false dans le cas contraire.

Cette propriété est en **lecture seule**. 

<!-- END REF -->


---


<!-- REF directory.extension.Desc -->
## .extension

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.extension.Syntax -->
**.extension** : Text<!-- END REF -->


#### Description

La propriété `.extension` <!-- REF #directory.extension.Summary -->retourne l'extension du nom du dossier (le cas échéant)<!-- END REF -->. Une extension commence toujours par ".". La propriété retourne une chaîne vide si le nom du dossier n'a pas d'extension.

Cette propriété est en **lecture seule**. 

<!-- END REF -->


---

<!-- REF directory.fullName.Desc -->
## .fullName

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.fullName.Syntax -->
**.fullName** : Text<!-- END REF -->


#### Description

La propriété `.fullName` <!-- REF #directory.fullName.Summary -->retourne le nom complet du dossier, y compris son extension (le cas échéant)<!-- END REF -->.

Cette propriété est en **lecture seule**. 

<!-- END REF -->


---

<!-- REF directory.hidden.Desc -->
## .hidden

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.hidden.Syntax -->
**.hidden** : Boolean<!-- END REF -->


#### Description

La propriété `.hidden` retourne <!-- REF #directory.hidden.Summary --> true si le dossier est défini comme "hidden" au niveau du système<!-- END REF -->, et retourne false dans le cas contraire.

Cette propriété est en **lecture seule**. 

<!-- END REF -->

---


<!-- REF directory.isAlias.Desc -->
## .isAlias

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.isAlias.Syntax -->
**.isAlias** : Boolean<!-- END REF -->



#### Description

La propriété `.isAlias` retourne <!-- REF #directory.isAlias.Summary -->toujours **false** pour un objet `Folder`<!-- END REF -->.

Cette propriété est en **lecture seule**. 

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->
## .isFile

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.isFile.Syntax -->
**.isFile** : Boolean<!-- END REF -->


#### Description

La propriété `.isFile` retourne<!-- REF #directory.isAlias.Summary -->toujours **false** pour un dossier<!-- END REF -->.

Cette propriété est en **lecture seule**. 

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->
## .isFolder

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.isFolder.Syntax -->
**.isFolder** : Boolean<!-- END REF -->


#### Description

La propriété `.isFolder` retourne <!-- REF #directory.isFolder.Summary -->toujours **false** pour un dossier<!-- END REF -->.

Cette propriété est en **lecture seule**. 

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->
## .isPackage

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.isPackage.Syntax -->
**.isPackage** : Boolean<!-- END REF -->


#### Description

La propriété `.isPackage` retourne <!-- REF #directory.isPackage.Summary -->true si le dossier est un package sous macOS (et s'il existe sur le disque)<!-- END REF -->. Sinon, elle retourne false.

Sous Windows, `.isPackage` retourne toujours **false**.

Cette propriété est en **lecture seule**. 

<!-- END REF -->


---

<!-- REF directory.modificationDate.Desc -->
## .modificationDate

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.modificationDate.Syntax -->
**.modificationDate** : Date<!-- END REF -->


#### Description

The `.modificationDate` property returns <!-- REF #directory.modificationDate.Summary --> the date of the folder's last modification<!-- END REF -->.

Cette propriété est en **lecture seule**. 

<!-- END REF -->


---

<!-- REF directory.modificationTime.Desc -->
## .modificationTime

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.modificationTime.Syntax -->
**.modificationTime** : Time<!-- END REF -->


#### Description

The `.modificationTime` property returns <!-- REF #directory.modificationTime.Summary -->the time of the folder's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Cette propriété est en **lecture seule**. 

<!-- END REF -->

---

<!-- REF directory.name.Desc -->
## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>



<!-- REF #directory.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Description

The `.name` property returns <!-- REF #directory.name.Summary --> the name of the folder, without extension (if any)<!-- END REF -->.

Cette propriété est en **lecture seule**. 

<!-- END REF -->

---

<!-- REF directory.original.Desc -->
## .original

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.original.Syntax -->
**.original** : 4D.Folder<!-- END REF -->


#### Description

The `.original` property returns <!-- REF #directory.original.Summary -->the same Folder object as the folder<!-- END REF -->.

Cette propriété est en **lecture seule**.
> Cette propriété est disponible sur les dossiers pour permettre au code générique de traiter les dossiers ou les fichiers.

<!-- END REF -->

---


<!-- REF directory.parent.Desc -->
## .parent

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.parent.Syntax -->
**.parent** : 4D.Folder<!-- END REF -->


#### Description

The `.parent` property returns <!-- REF #directory.parent.Summary -->the parent folder object of the folder<!-- END REF -->. Si le chemin représente un filesystem (ex : "/DATA/"), le filesystem est retourné.

Si le dossier n'a pas de parent (racine), la valeur nulle est retournée.

Cette propriété est en **lecture seule**. 

<!-- END REF -->


---

<!-- REF directory.path.Desc -->
## .path

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.path.Syntax -->
**.path** : Text<!-- END REF -->


#### Description

The `.path` property returns <!-- REF #directory.path.Summary -->the POSIX path of the folder<!-- END REF -->. Si le chemin représente un filesystem (ex : "/DATA/"), le filesystem est retourné.

Cette propriété est en **lecture seule**. 

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->
## .platformPath

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.platformPath.Syntax -->
**.platformPath** : Text<!-- END REF -->


#### Description

The `.platformPath` property returns <!-- REF #directory.platformPath.Summary -->the path of the folder expressed with the current platform syntax<!-- END REF -->.

Cette propriété est en **lecture seule**. 

<!-- END REF -->


---





<!-- REF directory.copyTo().Desc -->
## .copyTo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.copyTo().Syntax -->
**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->
| Paramètres        | Type        |    | Description                                 |
| ----------------- | ----------- |:--:| ------------------------------------------- |
| destinationFolder | 4D.Folder   | -> | Destination folder                          |
| newName           | Texte       | -> | Name for the copy                           |
| overwrite         | Entier long | -> | `fk overwrite` to replace existing elements |
| Résultat          | 4D.Folder   | <- | Copied file or folder                       |
<!-- END REF -->


#### Description

The `.copyTo()` function <!-- REF #directory.copyTo().Summary -->copies the `Folder` object into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the folder is copied with the name of the original folder. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a folder with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| Constante      | Valeur | Commentaire                                   |
| -------------- | ------ | --------------------------------------------- |
| `fk overwrite` | 4      | Écrase les éléments existants, le cas échéant |


**Valeur retournée**

The copied `Folder` object.

#### Exemple

You want to copy a Pictures *folder* from the user's Document folder to the Database folder:

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 
<!-- END REF -->

---


<!-- REF directory.file().Desc -->
## .file()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.file().Syntax -->
**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->
| Paramètres | Type    |    | Description                          |
| ---------- | ------- | -- | ------------------------------------ |
| path       | Texte   | -> | Relative POSIX file pathname         |
| Résultat   | 4D.File | <- | `File` object (null if invalid path) |
<!-- END REF -->

#### Description

The `.file()` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.

**Valeur retournée**

A `File` object or null if *path* is invalid.

#### Exemple

```4d
var $myPDF : 4D.File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```

<!-- END REF -->

---

<!-- REF directory.files().Desc -->
## .files()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.files().Syntax -->
**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->
| Paramètres | Type        |    | Description                         |
| ---------- | ----------- | -- | ----------------------------------- |
| options    | Entier long | -> | File list options                   |
| Résultat   | Collection  | <- | Collection of children file objects |
<!-- END REF -->

#### Description

The `.files()` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.
> Les alias ou les liens symboliques ne sont pas résolus.

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| Constante             | Valeur | Commentaire                                                                                 |
| --------------------- | ------ | ------------------------------------------------------------------------------------------- |
| `fk recursive`        | 1      | La collection contient les fichiers ou dossiers du dossier spécifié et de ses sous-dossiers |
| `fk ignore invisible` | 8      | Les fichiers ou dossiers invisibles ne sont pas répertoriés                                 |

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

<!-- END REF -->

---

<!-- REF directory.folder().Desc -->
## .folder()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.folder().Syntax -->
**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->
| Paramètres | Type      |    | Description                                    |
| ---------- | --------- | -- | ---------------------------------------------- |
| path       | Texte     | -> | Relative POSIX file pathname                   |
| Résultat   | 4D.Folder | <- | Created folder object (null if invalid *path*) |
<!-- END REF -->

#### Description

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.

**Valeur retournée**

A `Folder` object or null if *path* is invalid.

#### Exemple

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->

---

<!-- REF directory.folders().Desc -->
## .folders()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.folders().Syntax -->
**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->
| Paramètres | Type        |    | Description                           |
| ---------- | ----------- | -- | ------------------------------------- |
| options    | Entier long | -> | Folder list options                   |
| Résultat   | Collection  | <- | Collection of children folder objects |
<!-- END REF -->

#### Description

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

By default, if you omit the *options* parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| Constante             | Valeur | Commentaire                                                                                 |
| --------------------- | ------ | ------------------------------------------------------------------------------------------- |
| `fk recursive`        | 1      | La collection contient les fichiers ou dossiers du dossier spécifié et de ses sous-dossiers |
| `fk ignore invisible` | 8      | Les fichiers ou dossiers invisibles ne sont pas répertoriés                                 |

**Valeur retournée**

Collection of `Folder` objects.

#### Exemple

You want the collection of all folders and subfolders of the database folder:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```

<!-- END REF -->

---

<!-- REF directory.getIcon().Desc -->
## .getIcon()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #directory.getIcon().Syntax -->
**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->
| Paramètres | Type        |    | Description                                   |
| ---------- | ----------- | -- | --------------------------------------------- |
| size       | Entier long | -> | Side length for the returned picture (pixels) |
| Résultat   | Image       | <- | Icône                                         |
<!-- END REF -->


#### Description

The `.getIcon()` function <!-- REF #directory.getIcon().Summary -->returns the icon of the folder<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels ("large icons") or 16x16 pixels ("small icons"). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.

**Valeur retournée**

Folder icon [picture](Concepts/dt_picture.md).

<!-- END REF -->



