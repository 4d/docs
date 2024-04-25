---
id: BlobClass
title: Blob
---

The Blob class lets you create and manipulate [blob objects](../Concepts/dt_blob.md#blob-types) (`4D.Blob`).

### Sommaire

|                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.Blob.new().Syntax -->](#4dblobnew)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #4D.Blob.new().Summary --> |
| [<!-- INCLUDE #Blob.size.Syntax -->](#size)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #Blob.size.Summary -->              |
| [<!-- INCLUDE #Blob.slice().Syntax -->](#slice)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #Blob.slice().Summary -->       |

## 4D.Blob.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R2   | Ajout         |

</details>

<!-- REF #4D.Blob.new().Syntax -->**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->

| Paramètres | Type                            |     | Description                     |
| ---------- | ------------------------------- | :-: | ------------------------------- |
| blob       | Blob ou 4D.Blob |  -> | Blob pour copie                 |
| Résultat   | 4D.Blob         |  <- | Nouveau 4D.Blob |

<!-- END REF -->

#### Description

`4D.Blob.new` <!-- REF #4D.Blob.new().Summary -->creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (scalar blob or `4D.Blob`)<!-- END REF -->.

If the `blob` parameter is omitted, the method returns an empty 4D.Blob.

## .size

<!-- REF #Blob.size.Syntax -->**.size** : Real<!-- END REF -->

#### Description

The `.size` property <!-- REF #Blob.size.Summary -->returns the size of a `4D.Blob`, expressed in bytes.<!-- END REF -->

## .slice()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R2   | Ajout         |

</details>

<!-- REF #Blob.slice().Syntax -->**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob<!-- END REF -->

<!-- REF #Blob.slice().Params -->

| Paramètres | Type                    |     | Description                                                              |
| ---------- | ----------------------- | :-: | ------------------------------------------------------------------------ |
| start      | Real                    |  -> | index of the first byte to include in the new `4D.Blob`. |
| end        | Real                    |  -> | index of the first byte that will not be included in the new `4D.Blob`   |
| Résultat   | 4D.Blob |  <- | New `4D.Blob`                                                            |

<!-- END REF -->

#### Description

`.slice()` <!-- REF #Blob.slice().Summary --> creates and returns a `4D.Blob ` that references data from a subset of the blob on which it's called. The original blob is not altered.<!-- END REF -->

The `start` parameter is an index into the blob indicating the first byte to include in the new `4D.Blob`. Si vous indiquez une valeur négative, 4D la traite comme un décalage de la fin du blob vers le début. Par exemple, -10 correspondrait à l'avant-dernier octet du blob. La valeur par défaut est 0. If you specify a value for start that is larger than the size of the source blob, the returned `4D.Blob`'s size is 0, and it contains no data.

The `end` parameter is an index into the blob indicating the first byte that will not be included in the new `4D.Blob` (i.e. the byte exactly at this index is not included). Si vous indiquez une valeur négative, 4D la traite comme un décalage de la fin du blob vers le début. Par exemple, -10 correspondrait à l'avant-dernier octet du blob. La valeur par défaut est la taille du blob.

#### Exemple

```4d
var $myBlob : 4D.Blob

// Store text in a 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True

$myString:=Convert to text($myBlob; "UTF-8")
// $myString contains "Hello, World!"

// Create a new 4D.Blob from $myBlob
$myNewBlob:=$myBlob.slice(0; 5)

$myString:=Convert to text($myNewBlob; "UTF-8")
// $myString contains "Hello"
```
