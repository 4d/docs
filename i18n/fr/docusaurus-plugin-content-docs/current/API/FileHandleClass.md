---
id: FileHandleClass
title: FileHandle
---

La classe `FileHandle` possède des fonctions qui vous permettent de lire séquentiellement ou d'ajouter du contenu à un objet [`File`](FileClass) ouvert. Un handle de fichier peut accéder à n'importe quelle partie d'un document.

Les objets de type File handle sont créés avec la fonction [`file.open()`](FileClass#open).

> Pour lire ou écrire un document entier en une seule fois, vous pouvez envisager d'utiliser les fonctions [file.getText()](FileClass.md#gettext) et [file.setText()](FileClass.md#settext).

Grâce au *refcounting* standard d'objets de 4D, un handle de fichier est automatiquement supprimé lorsqu'il n'est plus référencé et ainsi, le [`File`](FileClass) demandé est automatiquement fermé. Par conséquent, avec les file handles, vous n'avez pas à vous soucier de la fermeture des documents.

:::note

Les ressources d'un objet, telles que les documents, sont libérées lorsqu'il n'y a plus de références en mémoire, ce qui se produit par exemple à la fin de l'exécution de la méthode pour les variables locales. Si vous souhaitez "forcer" la libération des ressources de l'objet à tout moment, vous pouvez [nullifier ses références](../Concepts/dt_object.md#resources).

:::

### Exemple

```code4d
var $f : 4D.File
var $fhandle : 4D.FileHandle
$f:=Folder(Database folder).file("example.txt")

//Écrire ligne par ligne depuis le début
$fhandle:=$f.open("write")
$text:="Hello World"
For ($line; 1 ; 4)
    $fhandle.writeLine($text+String($line))
Fin pour

//Ecriture ligne par ligne à partir de la fin
$fhandle:=$f.open("append")
$text:="Hello New World !"
For ($line; 1 ; 4)
    $fhandle.writeLine($text+String($line))
Fin pour

//Lecture en utilisant un caractère d'arrêt et un paramètre objet
$o:=Nouvel objet()
$o.mode:="read"
$o.charset:="UTF-8"
$o.breakModeRead:=Document avec CRLF
$stopChar:=" !"
$fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

//Lecture ligne par ligne
$lines:=Nouvelle collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
	$lines.push($fhandle.readLine())
End while

```

### Objet FileHandle

Les objets de type File handle ne peuvent pas être partagés.

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)<br/><!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->    |
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)<br/><!-- INCLUDE #FileHandleClass.breakModeWrite.Summary --> |
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)<br/><!-- INCLUDE #FileHandleClass.charset.Summary -->                      |
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)<br/><!-- INCLUDE #FileHandleClass.eof.Summary -->                                  |
| [<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)<br/><!-- INCLUDE #FileHandleClass.file.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)<br/><!-- INCLUDE #FileHandleClass.getSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)<br/><!-- INCLUDE #FileHandleClass.mode.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)<br/><!-- INCLUDE #FileHandleClass.offset.Summary -->                         |
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)<br/><!-- INCLUDE #FileHandleClass.readBlob().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)<br/><!-- INCLUDE #FileHandleClass.readLine().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)<br/><!-- INCLUDE #FileHandleClass.readText().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)<br/><!-- INCLUDE #FileHandleClass.setSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)<br/><!-- INCLUDE #FileHandleClass.writeBlob().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)<br/><!-- INCLUDE #FileHandleClass.writeLine().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)<br/><!-- INCLUDE #FileHandleClass.writeText().Summary -->            |

<!-- REF FileHandleClass.breakModeRead.Desc -->

## .breakModeRead

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->

#### Description

La propriété `.breakModeRead` contient <!-- REF #FileHandleClass.breakModeRead.Summary -->le mode de traitement des sauts de ligne utilisé lors de la lecture du fichier<!-- END REF -->.

La propriété `.breakModeRead` peut être définie lors de la création du handle à l'aide de la fonction [`file.open()`](FileClass.md#open) (voir [la fonction `.open()`](FileClass.md#open) pour plus d'informations). La valeur par défaut est "native".

> La propriété `.breakModeRead` contient toujours une valeur texte, même si l'option de `.open()` a été définie à l'aide d'un nombre (constante).

Cette propriété est en **lecture seule**.

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

La propriété `.breakModeWrite` contient <!-- REF #FileHandleClass.breakModeWrite.Summary -->le mode de traitement des sauts de ligne utilisé lors de l'écriture dans le fichier<!-- END REF -->.

La propriété `.breakModeWrite` peut être définie lors de la création du handle à l'aide de la fonction [`file.open()`](FileClass.md#open) (voir [la fonction `.open()`](FileClass.md#open) pour plus d'informations). La valeur par défaut est "native".

> La propriété `.breakModeWrite` contient toujours une valeur texte, même si l'option de `.open()` a été définie à l'aide d'un nombre (constante).

Cette propriété est en **lecture seule**.

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

La propriété `.charset` contient <!-- REF #FileHandleClass.charset.Summary -->le jeu de caractères utilisé lors de la lecture ou de l'écriture dans le fichier<!-- END REF -->.

Le jeu de caractères peut être défini lors de la création du handle avec la fonction [`file.open()`](FileClass#open). La valeur par défaut est "UTF-8".

Cette propriété est en **lecture seule**.

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

La propriété `.eof` contient <!-- REF #FileHandleClass.eof.Summary -->True si l'`offset` a atteint la fin du fichier, et False sinon<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF FileHandleClass.file.Desc -->

## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### Description

La propriété `.file` contient <!-- REF #FileHandleClass.file.Summary -->l'objet [4D.File](FileClass.md) sur lequel le handle a été créé<!-- END REF -->.

Cette propriété est en **lecture seule**.

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

| Paramètres | Type |                             | Description                  |
| ---------- | ---- | --------------------------- | ---------------------------- |
| Résultat   | Real | <- | Taille du document en octets |

<!-- END REF -->

#### Description

La fonction `.getSize()` <!-- REF #FileHandleClass.getSize().Summary -->renvoie la taille courante du document, exprimée en octets<!-- END REF -->.

> Cette fonction renvoie la même valeur que la propriété ([.size](FileClass#size)) de la classe `File`.

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

La propriété `.mode` contient <!-- REF #FileHandleClass.mode.Summary -->le mode dans lequel le handle de fichier a été créé : "read", "write" ou "append"<!-- END REF -->.

Le mode peut être défini lors de la création du handle avec la fonction [`file.open()`](FileClass#open). La valeur par défaut est "read".

Cette propriété est en **lecture seule**.

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

La propriété `.offset` contient <!-- REF #FileHandleClass.offset.Summary -->l'offset courant du flux de données (position à l'intérieur du document)<!-- END REF -->. La valeur de l'offset est automatiquement mise à jour après les opérations de lecture et d'écriture.

Le fait de modifier `.offset` changera sa valeur courante au moment de la prochaine opération de lecture ou d'écriture.

- Si la valeur passée est négative, `.offset` est fixé au début du fichier (zéro).
- Si la valeur passée est supérieure à la taille du fichier, `.offset` est fixé à la fin du fichier (taille du fichier).

Cette propriété est en **lecture/écriture**.

:::caution

Lorsqu'un file handle est créé, la valeur `.offset` est un nombre d'octets. Cependant, l'unité de mesure du décalage diffère selon la fonction de lecture : avec [`readBlob()`](#readblob), `.offset` est un nombre d'octets, alors qu'avec [`readText()`](#readtext)/[`readLine()`](#readline), c'est un nombre de caractères. Selon le jeu de caractères du fichier, un caractère correspond à un ou plusieurs octets. Selon le jeu de caractères du fichier, un caractère correspond à un ou plusieurs octets. Ainsi, si vous commencez la lecture avec `readBlob()` et que vous appelez ensuite `readText()`, la lecture du texte commencera à une position incohérente. Par exemple :

```4d
  // Ouvrir un fichier texte européen en utilisant l'encodage utf-16 (2 octets par caractère)
  // Nous voulons lire les 10 premiers caractères en octets, puis le reste en tant que texte.
$fh:=File("/RESOURCES/sample_utf_16.txt").open()
  // lire les 20 premiers octets (i.e. 10 caractères)
$b:=$fh.readBlob(20) // $fh.offset=20
  // lire alors tout le texte en ignorant les 10 premiers caractères que nous venons de lire dans le blob
  // parce que nous lisons maintenant du texte au lieu d'octets, la signification de 'offset' n'est pas la même.
  // Nous devons le traduire d'octets en caractères.
$fh.offset:=10 // demande de sauter 10 caractères utf-16 (20 octets)
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

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : 4D.Blob<!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->

| Paramètres | Type                                 |                             | Description                  |
| ---------- | ------------------------------------ | --------------------------- | ---------------------------- |
| *bytes*    | Real                                 | ->                          | Nombre d'octets à lire       |
| Résultat   | [4D.Blob](BlobClass) | <- | Octets lus depuis le fichier |

<!-- END REF -->

#### Description

La fonction `.readBlob()` <!-- REF #FileHandleClass.readBlob().Summary -->renvoie un blob d'une taille de *bytes* octets depuis le fichier, à partir de la position courante<!-- END REF -->.

Lorsque cette fonction est exécutée, la position courante ([.offset](#offset)) est mise à jour après le dernier octet lu.

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

| Paramètres | Type |                             | Description    |
| ---------- | ---- | --------------------------- | -------------- |
| Résultat   | Text | <- | Ligne de texte |

<!-- END REF -->

#### Description

La fonction `.readLine()` <!-- REF #FileHandleClass.readLine().Summary -->renvoie une ligne de texte à partir de la position courante jusqu'à ce qu'un délimiteur de fin de ligne soit rencontré ou que la fin du document soit atteinte<!-- END REF -->.

Lorsque cette fonction est exécutée, la position courante ([`.offset`](#offset)) est mise à jour.

:::caution Attention

Cette fonction suppose que la propriété [`.offset`](#offset) est un nombre de caractères et non un nombre d'octets. Pour plus d'informations, voir la [ description de .offset](#offset).

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

| Paramètres | Type |                             | Description                                                                                           |
| ---------- | ---- | --------------------------- | ----------------------------------------------------------------------------------------------------- |
| *stopChar* | Text | ->                          | Caractère(s) au(x)quel(s) arrêter la lecture |
| Résultat   | Text | <- | Texte du fichier                                                                                      |

<!-- END REF -->

#### Description

La fonction `.readText()` <!-- REF #FileHandleClass.readText().Summary -->renvoie le texte du fichier, à partir de la position courante jusqu'à ce que la première chaîne *stopChar* soit rencontrée (si elle est passée) ou que la fin du fichier soit atteinte<!-- END REF -->.

La chaîne de caractères *stopChar* n'est pas incluse dans le texte retourné. Si vous omettez le paramètre *stopChar*, le texte du document entier est renvoyé.

Lorsque cette fonction est exécutée, le ([.offset](#offset)) est placé juste après la chaîne *stopChar*.

:::caution Attention

Cette fonction suppose que la propriété [`.offset`](#offset) est un nombre de caractères et non un nombre d'octets. Pour plus d'informations, voir la [ description de .offset](#offset).

:::

Si le paramètre *stopChar* est passé et non trouvé, `.readText()` renvoie une chaîne vide et le [.offset](#offset) n'est pas modifié.

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

La fonction `.setSize()` <!-- REF #FileHandleClass.setSize().Summary -->définit une nouvelle taille de *size* octets pour le document<!-- END REF -->.

Si la valeur de *size* est inférieure à la taille courante du document, le contenu du document est tronqué depuis le début pour obtenir la nouvelle taille *size*.

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
| *blob*     | [4D.Blob](BlobClass) | -> | Blob à écrire dans le fichier |

<!-- END REF -->

#### Description

La fonction `.writeBlob()` <!-- REF #FileHandleClass.writeBlob().Summary -->écrit *blob* dans le fichier, à partir de la position courante<!-- END REF -->.

Lorsque cette fonction est exécutée, la position courante ([.offset](#offset)) est mise à jour après le dernier octet écrit.

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
| *lineOfText* | Text | -> | Texte à écrire |

<!-- END REF -->

#### Description

La fonction `.writeLine()` <!-- REF #FileHandleClass.writeLine().Summary -->écrit le contenu de *lineOfText* à la position courante et insère un délimiteur de fin de ligne<!-- END REF --> (contrairement à la fonction [.writeText()](#writetext)). Par défaut, un délimiteur de fin de ligne natif est utilisé, mais vous pouvez définir un autre délimiteur lors de la [création du file handle](FileClass.md#open) en définissant la propriété [`.breakModeWrite`](#breakmodewrite).

Lorsque cette fonction est exécutée, la position courante ([.offset](#offset)) est mise à jour après le délimiteur de fin de ligne.

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
| *textToWrite* | Text | -> | Texte à écrire |

<!-- END REF -->

#### Description

La fonction `.writeText()` <!-- REF #FileHandleClass.writeText().Summary -->écrit le contenu de *textToWrite* à la position courante et n'insère pas de délimiteur de fin de ligne final<!-- END REF --> (contrairement à la fonction [.writeLine()](#writeline)). Par défaut, le délimiteur natif est utilisé, mais vous pouvez définir un autre délimiteur lors de la [création du file handle ](FileClass.md#open) en définissant la propriété [`.breakModeWrite`](#breakmodewrite).

Lorsque cette fonction est exécutée, la position courante ([.offset](#offset)) est mise à jour après le prochain délimiteur de fin de ligne.

#### Voir également

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
