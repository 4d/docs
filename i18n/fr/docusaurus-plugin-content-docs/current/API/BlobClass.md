---
id: BlobClass
title: Blob
---

La classe Blob vous permet de créer et de manipuler des [objets blob](../Concepts/dt_blob.md#blob-types) (`4D.Blob`).

### Sommaire

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.Blob.new().Syntax -->](#4dblobnew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.Blob.new().Summary -->|
| [<!-- INCLUDE #Blob.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Blob.size.Summary -->|
| [<!-- INCLUDE #Blob.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Blob.slice().Summary -->|

## 4D.Blob.new()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R2  | Ajoutées      |

</details>

<!-- REF #4D.Blob.new().Syntax -->

**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->

| Paramètres | Type            |    | Description                              |
| ---------- | --------------- |:--:| ---------------------------------------- |
| blob       | Blob ou 4D.Blob | -> | Blob pour copie                          |
| Result     | 4D.Blob         | <- | New 4D.Blob  |<!-- END REF -->

|

#### Description

`4D.Blob.new` <!-- REF #4D.Blob.new().Summary -->creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (scalar blob or `4D.Blob`)<!-- END REF -->.

Si le paramètre `blob` est omis, la méthode retourne un 4D.Blob vide.

## .size

<!-- REF #Blob.size.Syntax -->

**.size** : Real<!-- END REF -->

#### Description
The `.size` property <!-- REF #Blob.size.Summary -->returns the size of a `4D.Blob`, expressed in bytes.<!-- END REF -->

## .slice()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R2  | Ajoutées      |

</details>

<!-- REF #Blob.slice().Syntax -->

**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob<!-- END REF -->

<!-- REF #Blob.slice().Params -->
| Paramètres | Type    |    | Description                                                              |
| ---------- | ------- |:--:| ------------------------------------------------------------------------ |
| start      | Real    | -> | indice du premier octet à inclure dans le nouveau `4D.Blob`.             |
| end        | Real    | -> | indice du premier octet qui ne sera pas inclus dans le nouveau `4D.Blob` |
| Result     | 4D.Blob | <- | Nouveau `4D.Blob`|<!-- END REF -->

|

#### Description

`.slice()` <!-- REF #Blob.slice().Summary --> creates and returns a `4D.Blob` that references data from a subset of the blob on which it's called. Le blob d'origine n'est pas modifié.<!-- END REF -->

Le paramètre `start` est un indice dans le blob, indiquant le premier octet à inclure dans le nouveau `4D.Blob`. Si vous indiquez une valeur négative, 4D la traite comme un décalage de la fin du blob vers le début. Par exemple, -10 correspondrait à l'avant-dernier octet du blob. La valeur par défaut est 0. Si vous indiquez une valeur pour start supérieure à la taille du blob source, la taille du `4D.Blob` retourné est 0, et il ne contient aucune donnée.

Le paramètre `end` est un indice dans le blob indiquant le premier octet qui ne sera pas inclus dans le nouveau `4D.Blob` (c'est-à-dire que l'octet situé exactement à cet indice ne sera pas inclus). Si vous indiquez une valeur négative, 4D la traite comme un décalage de la fin du blob vers le début. Par exemple, -10 correspondrait à l'avant-dernier octet du blob. La valeur par défaut est la taille du blob.

#### Exemple

```4d
var $myBlob : 4D.Blob

// Stocker du texte dans un 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True

$myString:=Convert to text($myBlob; "UTF-8")
// $myString contient "Hello, World!"

// Créer un nouveau 4D.Blob à partir de $myBlob
$myNewBlob:=$myBlob.slice(0; 5)

$myString:=Convert to text($myNewBlob; "UTF-8")
// $myString contient "Hello"
```
