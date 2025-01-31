---
id: Directory
title: Classe Directory
---

<!-- REF directory.creationDate.Desc -->

## .creationDate

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### Description

La propriété `.creationDate` retourne <!-- REF #directory.creationDate.Summary -->la date de création du dossier<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.creationTime.Desc -->

## .creationTime

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### Description

La propriété `.creationTime` renvoie <!-- REF #directory.creationTime.Summary -->l'heure de création du dossier<!-- END REF --> (exprimée en nombre de secondes commençant à 00:00).

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.exists.Desc -->

## .exists

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### Description

La propriété `.exists` renvoie <!-- REF #directory.exists.Summary -->true si le dossier existe sur le disque<!-- END REF -->, et false sinon.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.extension.Desc -->

## .extension

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### Description

La propriété `.extension` <!-- REF #directory.extension.Summary -->renvoie l'extension du nom du dossier (s'il y en a une)<!-- END REF -->. Une extension commence toujours par ".". La propriété retourne une chaîne vide si le nom du dossier n'a pas d'extension.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.fullName.Desc -->

## .fullName

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### Description

La propriété `.fullName` <!-- REF #directory.fullName.Summary -->retourne le nom complet du dossier, extension comprise (le cas échéant)<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.hidden.Desc -->

## .hidden

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### Description

La propriété `.hidden` renvoie <!-- REF #directory.hidden.Summary --> true si le dossier est défini comme "hidden" au niveau du système<!-- END REF -->, et false dans le cas contraire.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.isAlias.Desc -->

## .isAlias

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### Description

La propriété `.isAlias` retourne<!-- REF #directory.isAlias.Summary -->toujours **false** pour un objet `Dossier`<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->

## .isFile

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### Description

La propriété `.isFile` retourne <!-- REF #directory.isFile.Summary -->toujours **false** pour un dossier<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->

## .isFolder

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### Description

La propriété `.isFolder` renvoie <!-- REF #directory.isFolder.Summary -->toujours **true** pour un dossier<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->

## .isPackage

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.isPackage.Syntax -->**.isPackage** : Boolean<!-- END REF -->

#### Description

La propriété `.isPackage` renvoie <!-- REF #directory.isPackage.Summary -->true si le dossier est un paquet sous macOS (et existe sur le disque)<!-- END REF -->. Sinon, elle retourne false.

Sous Windows, `.isPackage` retourne toujours **false**.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.modificationDate.Desc -->

## .modificationDate

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### Description

La propriété `.modificationDate` renvoie <!-- REF #directory.modificationDate.Summary --> la date de la dernière modification du dossier<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.modificationTime.Desc -->

## .modificationTime

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

#### Description

La propriété `.modificationTime` retourne <!-- REF #directory.modificationTime.Summary -->l'heure de la dernière modification du dossier<!-- END REF --> (exprimée en nombre de secondes depuis 00:00).

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.name.Desc -->

## .name

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.name.Syntax -->**.name** : Text<!-- END REF -->

#### Description

La propriété `.name` renvoie <!-- REF #directory.name.Summary --> le nom du dossier, sans l'extension (s'il y en a une)<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.original.Desc -->

## .original

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.original.Syntax -->**.original** : 4D.Folder<!-- END REF -->

#### Description

La propriété `.original` retourne <!-- REF #directory.original.Summary -->le même objet Dossier que le dossier<!-- END REF -->.

Cette propriété est en **lecture seule**.

> Cette propriété est disponible sur les dossiers pour permettre au code générique de traiter les dossiers ou les fichiers.

<!-- END REF -->

---

<!-- REF directory.parent.Desc -->

## .parent

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### Description

La propriété `.parent` retourne <!-- REF #directory.parent.Summary -->l'objet dossier parent du dossier<!-- END REF -->. Si le chemin représente un filesystem (ex : "/DATA/"), le filesystem est retourné.

Si le dossier n'a pas de parent (racine), la valeur nulle est retournée.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.path.Desc -->

## .path

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.path.Syntax -->**.path** : Text<!-- END REF -->

#### Description

La propriété `.path` retourne <!-- REF #directory.path.Summary -->le chemin POSIX du dossier<!-- END REF -->. Si le chemin représente un filesystem (ex : "/DATA/"), le filesystem est retourné.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->

## .platformPath

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Description

La propriété `.platformPath` retourne <!-- REF #directory.platformPath.Summary -->le chemin du dossier exprimé dans la syntaxe de la plate-forme courante<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

---

<!-- REF directory.copyTo().Desc -->

## .copyTo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->

| Paramètres         | Type                      |                             | Description                                        |
| ------------------ | ------------------------- | :-------------------------: | -------------------------------------------------- |
| dossierDestination | 4D.Folder |              ->             | Dossier de destination                             |
| nouveauNom         | Text                      |              ->             | Nom de la copie                                    |
| overwrite          | Integer                   |              ->             | `fk overwrite` pour écraser les éléments existants |
| Résultat           | 4D.Folder | <- | Dossier copié                                      |

<!-- END REF -->

#### Description

La fonction `.copyTo()` <!-- REF #directory.copyTo().Summary -->copie l'objet `Folder` dans le *destinationFolder* spécifié<!-- END REF -->.

Le *destinationFolder* doit exister sur disque, sinon une erreur est générée.

Par défaut, le dossier est copié avec le nom du dossier original. Si vous souhaitez renommer la copie, passez le nouveau nom dans le paramètre *newName*. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

S'il existe déjà un dossier portant le même nom dans *destinationFolder*, par défaut 4D génère une erreur. Vous pouvez passer la constante `fk overwrite` dans le paramètre *overwrite* pour ignorer et écraser le dossier existant :

| Constante      | Valeur | Commentaire                                   |
| -------------- | ------ | --------------------------------------------- |
| `fk overwrite` | 4      | Écrase les éléments existants, le cas échéant |

**Valeur retournée**

L'objet `Folder` copié.

#### Exemple

Vous souhaitez copier un *dossier* Pictures, à partir du dossier Document de l'utilisateur vers le dossier de la base :

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder).folder("Pictures")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```

<!-- END REF -->

---

<!-- REF directory.file().Desc -->

## .file()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.file().Syntax -->**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->

| Paramètres | Type                    |                             | Description                                               |
| ---------- | ----------------------- | --------------------------- | --------------------------------------------------------- |
| path       | Text                    | ->                          | Chemin POSIX relatif                                      |
| Résultat   | 4D.File | <- | Objet `File` (null si chemin invalide) |

<!-- END REF -->

#### Description

La fonction `.file()` crée <!-- REF #directory.file().Summary -->un objet `File` à l'intérieur de l'objet `Folder` et retourne sa référence<!-- END REF -->.

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

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.files().Syntax -->**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->

| Paramètres | Type       |                             | Description                        |
| ---------- | ---------- | --------------------------- | ---------------------------------- |
| options    | Integer    | ->                          | Options de liste de fichiers       |
| Résultat   | Collection | <- | Collection d'objets dossier enfant |

<!-- END REF -->

#### Description

La fonction `.files()` <!-- REF #directory.files().Summary -->retourne une collection d'objets `File` contenus dans le dossier<!-- END REF -->.

> Les alias ou les liens symboliques ne sont pas résolus.

Par défaut, si vous omettez le paramètre *options*, seuls les fichiers à la racine du dossier sont retournés dans la collection, ainsi que les fichiers et dossiers invisibles. Vous pouvez modifier cela en passant, dans le paramètre *options* parameter, une ou plusieurs des constantes suivantes :

| Constante             | Valeur | Commentaire                                                                            |
| --------------------- | ------ | -------------------------------------------------------------------------------------- |
| `fk recursive`        | 1      | La collection contient les fichiers du dossier spécifié ainsi que de ses sous-dossiers |
| `fk ignore invisible` | 8      | Les fichiers invisibles ne sont pas répertoriés                                        |

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
```

#### Exemple 2

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

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.folder().Syntax -->**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->

| Paramètres | Type                      |                             | Description                                                |
| ---------- | ------------------------- | --------------------------- | ---------------------------------------------------------- |
| path       | Text                      | ->                          | Chemin POSIX relatif                                       |
| Résultat   | 4D.Folder | <- | Objet dossier (null si *path* invalide) |

<!-- END REF -->

#### Description

La fonction `.folder()` <!-- REF #directory.folder().Summary -->crée un objet `Folder` à l'intérieur de l'objet parent `Folder` et retourne sa référence<!-- END REF -->.

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

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.folders().Syntax -->**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->

| Paramètres | Type       |                             | Description                        |
| ---------- | ---------- | --------------------------- | ---------------------------------- |
| options    | Integer    | ->                          | Options de liste des dossiers      |
| Résultat   | Collection | <- | Collection d'objets dossier enfant |

<!-- END REF -->

#### Description

La fonction `.folders()` <!-- REF #directory.folders().Summary -->retourne une collection d'objets `Folder` contenus dans le dossier parent<!-- END REF -->.

Par défaut, si vous omettez le paramète *options*, seuls les dossiers à la racine du dossier sont retournés dans la collection. Vous pouvez modifier cela en passant, dans le paramètre *options* parameter, une ou plusieurs des constantes suivantes :

| Constante             | Valeur | Commentaire                                                                            |
| --------------------- | ------ | -------------------------------------------------------------------------------------- |
| `fk recursive`        | 1      | La collection contient les dossiers du dossier spécifié ainsi que de ses sous-dossiers |
| `fk ignore invisible` | 8      | Les dossiers invisibles ne sont pas répertoriés                                        |

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

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #directory.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->

| Paramètres | Type    |                             | Description                                                       |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------------- |
| size       | Integer | ->                          | Longueur du côté de l'image retournée (pixels) |
| Résultat   | Picture | <- | Icône                                                             |

<!-- END REF -->

#### Description

La fonction `.getIcon()` <!-- REF #directory.getIcon().Summary -->retourne l'icône du dossier<!-- END REF -->.

Le paramètre optionnel *size* spécifie les dimensions en pixels de l'icône retournée. Cette valeur représente la longueur latérale du côté du carré contenant l'icône. La taille des icônes est généralement de 32x32 pixels (“grandes icônes”) ou de 16x16 pixels (“petites icônes”). Si vous passez 0 ou si vous omettez ce paramètre, la version "grandes icônes" est retournée.

Si le dossier n'existe pas sur disque, une icône vide est retournée par défaut.

**Valeur retournée**

[Image](Concepts/dt_picture.md) de l'icône du dossier.

<!-- END REF -->
