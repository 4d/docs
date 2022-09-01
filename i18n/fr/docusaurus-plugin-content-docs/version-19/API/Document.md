---
id: Document
title: Document Class
---

## Description

<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.creationDate.Syntax -->

**.creationDate** : Date<!-- END REF -->

#### Description

The `.creationDate` property returns <!-- REF #document.creationDate.Summary -->The `.creationDate` property returns<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

## .creationTime

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.creationTime.Syntax -->

**.creationTime** : Time<!-- END REF -->

#### Description

The `.creationTime` property  returns <!-- REF #document.creationTime.Summary -->the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Cette propriété est en **lecture seule**.

<!-- REF document.exists.Desc -->
## .exists

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.exists.Syntax -->

**.exists** : Boolean<!-- END REF -->

#### Description

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.extension.Syntax -->

**.extension** : Text<!-- END REF -->

#### Description

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. Une extension commence toujours par ".". La propriété `.extension` retourne <!-- REF #document.extension.Summary -->l'extension du nom de fichier (le cas échéant)<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.fullName.Desc -->
## .fullName

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.fullName.Syntax -->

**.fullName** : Text<!-- END REF -->

#### Description

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.hidden.Desc -->
## .hidden

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.hidden.Syntax -->

**.hidden** : Boolean<!-- END REF -->

#### Description

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.isAlias.Desc -->
## .isAlias

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.isAlias.Syntax -->

**.isAlias** : Boolean<!-- END REF -->

#### Description

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.isFile.Desc -->
## .isFile

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.isFile.Syntax -->

**.isFile** : Boolean<!-- END REF -->

#### Description

The `.isFile` property returns <!-- REF #document.isFile.Summary -->The `.copyTo()` function<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.isFolder.Desc -->
## .isFolder

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.isFolder.Syntax -->

**.isFolder** : Boolean<!-- END REF -->

#### Description

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always true for a file<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.isWritable.Desc -->
## .isWritable

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.isWritable.Syntax -->

**.isWritable** : Boolean<!-- END REF -->

#### Description

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.
> Cette propriété vérifie la capacité de l'application 4D à écrire sur le disque (droits d'accès). elle ne se base pas uniquement sur l'attribut *writable* du fichier.

Cette propriété est en **lecture seule**.

**Exemple**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```


<!-- END REF -->

<!-- REF document.modificationDate.Desc -->
## .modificationDate

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.modificationDate.Syntax -->

**.modificationDate** : Date<!-- END REF -->

#### Description

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->The `.modificationDate` property returns<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->
## .modificationTime

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.modificationTime.Syntax -->

**.modificationTime** : Time<!-- END REF -->

##### Description

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->The `.modificationTime` property returns<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.name.Desc -->
## .name

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Description

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.original.Desc -->
## .original

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.original.Syntax -->

**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### Description

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. L'élément cible peut être :

* un objet File
* un objet Folder

Pour les fichiers sans alias, la propriété retourne le même objet File que le fichier.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.parent.Desc -->
## .parent

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.parent.Syntax -->

**.parent** : 4D.Folder<!-- END REF -->

#### Description

The `.parent` property returns <!-- REF #document.parent.Summary -->The `.parent` property returns<!-- END REF -->. .

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.path.Desc -->
## .path

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.path.Syntax -->

**.path** : Text<!-- END REF -->

#### Description

The `.path` property returns <!-- REF #document.path.Summary -->The `.path` property returns<!-- END REF -->. .

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.platformPath.Desc -->
## .platformPath

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.platformPath.Syntax -->

**.platformPath** : Text<!-- END REF -->

#### Description

The `.platformPath` property returns <!-- REF #document.platformPath.Summary -->The `.platformPath` property returns<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.size.Desc -->
## .size

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.size.Syntax -->

**.size** : Real<!-- END REF -->

#### Description

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. Si le fichier n'existe pas sur le disque, la taille est de 0.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF document.copyTo().Desc -->
## .copyTo()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.copyTo().Syntax -->

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->


<!-- REF #document.copyTo().Params -->
| Paramètres         | Type      |    | Description                                        |
| ------------------ | --------- |:--:| -------------------------------------------------- |
| dossierDestination | 4D.Folder | -> | Dossier de destination                             |
| nouveauNom         | Text      | -> | Nom de la copie                                    |
| overwrite          | Integer   | -> | `fk overwrite` pour écraser les éléments existants |
| Result             | 4D.File   | <- | Fichier copié|<!-- END REF -->           |

#### Description

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->The `.isFolder` property returns <!-- END REF -->.

Le *destinationFolder* doit exister sur disque, sinon une erreur est générée.

Par défaut, le fichier est copié avec le nom du fichier original. Si vous souhaitez renommer la copie, passez le nouveau nom dans le paramètre *newName*. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

S'il existe déjà un fichier portant le même nom dans *destinationFolder*, par défaut 4D génère une erreur. Vous pouvez passer la constante `fk overwrite` dans le paramètre *overwrite* pour ignorer et écraser le dossier existant :

| Constante      | Value | Commentaire                                   |
| -------------- | ----- | --------------------------------------------- |
| `fk overwrite` | 4     | Écrase les éléments existants, le cas échéant |

**Valeur retournée**

L'objet `File` copié.

#### Exemple

Vous souhaitez copier un *file* image, à partir du dossier Documents de l'utilisateur vers le dossier de la base :

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```


<!-- END REF -->

<!-- REF document.getContent().Desc -->
## .getContent()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.getContent().Syntax -->

**.getContent( )** : Blob<!-- END REF -->


<!-- REF #document.getContent().Params -->
| Paramètres | Type |    | Description                                   |
| ---------- | ---- | -- | --------------------------------------------- |
| Result     | Blob | <- | Contenu du fichier|<!-- END REF --> |

#### Description

The `.getContent()` function  <!-- REF #document.getContent().Summary -->The `.getContent()` function<!-- END REF -->. .

**Valeur retournée**

Un `Blob`.

#### Exemple

Pour sauvegarder le contenu d'un document dans un champ `BLOB` :

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //Si un document a été sélectionné
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```


<!-- END REF -->

<!-- REF document.getIcon().Desc -->
## .getIcon()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.getIcon().Syntax -->

**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->


<!-- REF #document.getIcon().Params -->
| Paramètres | Type    |    | Description                                    |
| ---------- | ------- | -- | ---------------------------------------------- |
| size       | Integer | -> | Longueur du côté de l'image retournée (pixels) |
| Result     | Images  | <- | Icône|<!-- END REF -->               |

#### Description

The `.getIcon()` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

Le paramètre optionnel *size* spécifie les dimensions en pixels de l'icône retournée. Cette valeur représente la longueur latérale du côté du carré contenant l'icône. La taille des icônes est généralement de 32x32 pixels (“grandes icônes”) ou de 16x16 pixels (“petites icônes”). Si vous passez 0 ou si vous omettez ce paramètre, la version "grandes icônes" est retournée.

Si le fichier n'existe pas sur disque, une icône par défaut vide est retournée.

**Valeur retournée**

[Image](../Concepts/picture.html) de l'icône du fichier.

<!-- END REF -->

<!-- REF document.getText().Desc -->
## .getText()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>

<!-- REF #document.getText().Syntax -->

**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->


<!-- REF #document.getText().Params -->
| Paramètres  | Type    |    | Description                                  |
| ----------- | ------- | -- | -------------------------------------------- |
| charSetName | Text    | -> | Nom du jeu de caractères                     |
| charSetNum  | Integer | -> | Numéro du jeu de caractères                  |
| breakMode   | Integer | -> | Mode de traitement des retours à la ligne    |
| Result      | Text    | <- | Texte du document|<!-- END REF --> |

#### Description

The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

Optionnellement, vous pouvez indiquer le jeu de caractères à utiliser pour la lecture du contenu. Vous pouvez passer soit :

* dans *charSetName*, une chaîne contenant le nom de jeu standard (par exemple "ISO-8859-1" ou "UTF-8"),
* ou dans *charSetNum*, l'ID MIBEnum (numéro) du nom du jeu standard.

> Pour consulter la liste des jeux de caractères pris en charge par 4D, veuillez vous reporter à la description de la commande `CONVERT FROM TEXT`.

Si le document contient un BOM (Byte Order Mark), 4D utilise le jeu de caractères inséré au lieu de celui qui est indiqué dans *charSetName* or *charSetNum* (ce paramètre est alors ignoré). Si le document ne contient pas de BOM et si le paramètre *charSetName* ou *charSetNum* est omis, 4D utilise par défaut le jeu de caractères "UTF-8".

Dans le paramètre *breakMode*, vous pouvez passer une valeur numérique indiquant le traitement à appliquer aux caractères de fin de ligne du document. Les constantes suivantes du thème "Documents système" sont disponibles :

| Constante                     | Value | Commentaire                                                                                                                                                               |
| ----------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Aucun traitement                                                                                                                                                          |
| `Document with native format` | 1     | (Défaut) Les fins de ligne sont convertis au format natif de la plate-forme d’exécution : CR (carriage return) sous OS X, CRLF (carriage return + line feed) sous Windows |
| `Document with CRLF`          | 2     | Les fins de ligne sont convertis au format Windows : CRLF (carriage return + line feed)                                                                                   |
| `Document with CR`            | 3     | Les fins de ligne sont convertis au format OS X : CR (carriage return)                                                                                                    |
| `Document with LF`            | 4     | Les fins de ligne sont convertis au format Unix : LF (line feed)                                                                                                          |

Par défaut, lorsque vous omettez le paramètre *breakMode* les retours à la ligne sont traités en mode natif (1).

**Valeur retournée**

Texte du fichier.

#### Exemple

Considérons le document texte suivant (les champs sont séparés par des tabulations ) :

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

Lorsque vous exécutez ce code :

```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 par défaut
 $txt:=$myFile.getText()
```

... vous obtenez pour `$txt` :

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

avec `\t` (tab) comme séparateur et `\r\n` (CRLF) comme délimiteur de ligne.

Voici un autre exemple avec le même fichier, mais un délimiteur de ligne différent :

```4d
 $txt:=$myFile.getText("UTF-8", Document with LF)
```

Dans ce cas, le contenu de `$txt` est :

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

Cette fois-ci `\n` (LF) est utilisé comme délimiteur de ligne.

<!-- END REF -->
