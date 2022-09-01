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
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.creationDate.Syntax -->

**.creationDate** : Date<!-- END REF -->

#### Description

The `.creationDate` property returns <!-- REF #directory.creationDate.Summary -->the creation date of the folder<!-- END REF -->.

Cette propriété est en **lecture seule**.

## .creationTime

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.creationTime.Syntax -->

**.creationTime** : Time<!-- END REF -->

#### Description

The `.creationTime` property returns <!-- REF #directory.creationTime.Summary -->the creation time of the folder<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Cette propriété est en **lecture seule**.

---

<!-- REF directory.exists.Desc -->
## .exists

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.exists.Syntax -->

**.exists** : Boolean<!-- END REF -->

#### Description

The `.exists` property returns <!-- REF #directory.exists.Summary -->true if the folder exists on disk<!-- END REF -->, and false otherwise.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.extension.Desc -->
## .extension

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.extension.Syntax -->

**.extension** : Text<!-- END REF -->

#### Description

The `.extension` property <!-- REF #directory.extension.Summary -->returns the extension of the folder name (if any)<!-- END REF -->. Une extension commence toujours par ".". La propriété retourne une chaîne vide si le nom du dossier n'a pas d'extension.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.fullName.Desc -->
## .fullName

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.fullName.Syntax -->

**.fullName** : Text<!-- END REF -->

#### Description

The `.fullName` property <!-- REF #directory.fullName.Summary -->returns the full name of the folder, including its extension (if any)<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.hidden.Desc -->
## .hidden

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.hidden.Syntax -->

**.hidden** : Boolean<!-- END REF -->

#### Description

The `.hidden` property returns <!-- REF #directory.hidden.Summary --> true if the folder is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.isAlias.Desc -->
## .isAlias

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.isAlias.Syntax -->

**.isAlias** : Boolean<!-- END REF -->

#### Description

The `.isAlias` property returns <!-- REF #directory.isAlias.Summary -->always **false** for a `Folder` object<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->
## .isFile

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.isFile.Syntax -->

**.isFile** : Boolean<!-- END REF -->

#### Description

The `.isFile` property returns <!-- REF #directory.isFile.Summary -->always **false** for a folder<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->
## .isFolder

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.isFolder.Syntax -->

**.isFolder** : Boolean<!-- END REF -->

#### Description

The `.isFolder` property returns <!-- REF #directory.isFolder.Summary -->always **true** for a folder<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->
## .isPackage

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.isPackage.Syntax -->

**.isPackage** : Boolean<!-- END REF -->

#### Description

The `.isPackage` property returns <!-- REF #directory.isPackage.Summary -->true if the folder is a package on macOS  (and exists on disk)<!-- END REF -->. .

Sous Windows, `.isPackage` retourne toujours **false**.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.modificationDate.Desc -->
## .modificationDate

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
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
| v17 R5  | Ajoutées      |
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
| v17 R5  | Ajoutées      |
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
| v17 R5  | Ajoutées      |
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
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.parent.Syntax -->

**.parent** : 4D.Folder<!-- END REF -->

#### Description

The `.parent` property returns <!-- REF #directory.parent.Summary -->the parent folder object of the folder<!-- END REF -->. .

Si le dossier n'a pas de parent (racine), la valeur nulle est retournée.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.path.Desc -->
## .path

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.path.Syntax -->

**.path** : Text<!-- END REF -->

#### Description

The `.path` property returns <!-- REF #directory.path.Summary -->the POSIX path of the folder<!-- END REF -->. .

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->
## .platformPath

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
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
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.copyTo().Syntax -->

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->
| Paramètres         | Type      |    | Description                                        |
| ------------------ | --------- |:--:| -------------------------------------------------- |
| dossierDestination | 4D.Folder | -> | Dossier de destination                             |
| nouveauNom         | Text      | -> | Nom de la copie                                    |
| overwrite          | Integer   | -> | `fk overwrite` pour écraser les éléments existants |
| Result             | 4D.Folder | <- | Dossier copié|<!-- END REF -->

|

#### Description

The `.copyTo()` function <!-- REF #directory.copyTo().Summary -->copies the `Folder` object into the specified *destinationFolder*<!-- END REF -->.

Le *destinationFolder* doit exister sur disque, sinon une erreur est générée.

Par défaut, le dossier est copié avec le nom du dossier original. Si vous souhaitez renommer la copie, passez le nouveau nom dans le paramètre *newName*. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

S'il existe déjà un dossier portant le même nom dans *destinationFolder*, par défaut 4D génère une erreur. Vous pouvez passer la constante `fk overwrite` dans le paramètre *overwrite* pour ignorer et écraser le dossier existant :

| Constante      | Value | Commentaire                                   |
| -------------- | ----- | --------------------------------------------- |
| `fk overwrite` | 4     | Écrase les éléments existants, le cas échéant |

**Valeur retournée**

L'objet `Folder` copié.

#### Exemple

Vous souhaitez copier un dossier Images, à partir du dossier Document de l'utilisateur vers le dossier de la base :

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
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.file().Syntax -->

**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->
| Paramètres | Type    |    | Description                                                       |
| ---------- | ------- | -- | ----------------------------------------------------------------- |
| path       | Text    | -> | Chemin POSIX relatif                                              |
| Result     | 4D.File | <- | Objet `File` (null si chemin invalide)|<!-- END REF -->

|

#### Description

The `.file()` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

Dans le paramètre *path*, passez un chemin relatif POSIX pour désigner le fichier à retourner. Le chemin sera évalué à partir du dossier parent en tant que racine.

**Valeur retournée**

Un objet `File` ou null si *path* n'est pas valide.

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
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.files().Syntax -->

**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->
| Paramètres | Type        |    | Description                                                   |
| ---------- | ----------- | -- | ------------------------------------------------------------- |
| options    | Integer     | -> | Options de liste de fichiers                                  |
| Result     | Collections | <- | Collection d'objets dossier enfant|<!-- END REF -->

|

#### Description

The `.files()` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.
> Les alias ou les liens symboliques ne sont pas résolus.

Par défaut, si vous omettez le paramètre *options*, seuls les fichiers à la racine du dossier sont retournés dans la collection, ainsi que les fichiers et dossiers invisibles. Vous pouvez modifier cela en passant, dans le paramètre *options* parameter, une ou plusieurs des constantes suivantes :

| Constante             | Value | Commentaire                                                                            |
| --------------------- | ----- | -------------------------------------------------------------------------------------- |
| `fk recursive`        | 1     | La collection contient les fichiers du dossier spécifié ainsi que de ses sous-dossiers |
| `fk ignore invisible` | 8     | Les fichiers invisibles ne sont pas répertoriés                                        |

**Valeur retournée**

Collection d'objets `File`.

#### Exemple 1

Vous souhaitez savoir s'il y a des fichiers invisibles dans le dossier de la base :

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
 End if
```

#### Exemple 3

Vous souhaitez lire tous les fichiers qui ne sont pas invisibles dans le dossier Documents :

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
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.folder().Syntax -->

**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->
| Paramètres | Type      |    | Description                                                        |
| ---------- | --------- | -- | ------------------------------------------------------------------ |
| path       | Text      | -> | Chemin POSIX relatif                                               |
| Result     | 4D.Folder | <- | Objet dossier (null si *path* invalide)|<!-- END REF -->

|

#### Description

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

Dans le paramètre *path*, passez un chemin relatif POSIX pour désigner le dossier à retourner. Le chemin sera évalué à partir du dossier parent en tant que racine.

**Valeur retournée**

Un objet `Folder` object ou null si *path* est invalide.

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
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.folders().Syntax -->

**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->
| Paramètres | Type        |    | Description                                                   |
| ---------- | ----------- | -- | ------------------------------------------------------------- |
| options    | Integer     | -> | Options de liste des dossiers                                 |
| Result     | Collections | <- | Collection d'objets dossier enfant|<!-- END REF -->

|

#### Description

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

Par défaut, si vous omettez le paramète *options* , seuls les dossiers à la racine du dossier sont retournés dans la collection. Vous pouvez modifier cela en passant, dans le paramètre *options* parameter, une ou plusieurs des constantes suivantes :

| Constante             | Value | Commentaire                                                                            |
| --------------------- | ----- | -------------------------------------------------------------------------------------- |
| `fk recursive`        | 1     | La collection contient les dossiers du dossier spécifié ainsi que de ses sous-dossiers |
| `fk ignore invisible` | 8     | Les dossiers invisibles ne sont pas répertoriés                                        |

**Valeur retournée**

Collection d'objets `Folder`.

#### Exemple

Vous souhaitez obtenir la collection de tous les dossiers et sous-dossiers du dossier de la base :

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
| v17 R5  | Ajoutées      |
</details>

<!-- REF #directory.getIcon().Syntax -->

**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->
| Paramètres | Type    |    | Description                                    |
| ---------- | ------- | -- | ---------------------------------------------- |
| size       | Integer | -> | Longueur du côté de l'image retournée (pixels) |
| Result     | Images  | <- | Icône|<!-- END REF -->

|

#### Description

The `.getIcon()` function <!-- REF #directory.getIcon().Summary -->returns the icon of the folder<!-- END REF -->.

Le paramètre optionnel *size* spécifie les dimensions en pixels de l'icône retournée. Cette valeur représente la longueur latérale du côté du carré contenant l'icône. La taille des icônes est généralement de 32x32 pixels (“grandes icônes”) ou de 16x16 pixels (“petites icônes”). Si vous passez 0 ou si vous omettez ce paramètre, la version "grandes icônes" est retournée.

Si le dossier n'existe pas sur disque, une icône vide est retournée par défaut.

**Valeur retournée**

[Image](Concepts/dt_picture.md) de l'icône du dossier.

<!-- END REF -->
