---
id: BlobClass
title: Blob
---

La classe Blob vous permet de créer et de manipuler des [objets blob](../Concepts/dt_blob.md#blob-types) (`4D.Blob`).

### Sommaire

|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #4D.Blob.new().Syntax -->](#4dblobnew)<br/><!-- INCLUDE #4D.Blob.new().Summary --> |
| [<!-- INCLUDE #Blob.size.Syntax -->](#size)<br/><!-- INCLUDE #Blob.size.Summary -->              |
| [<!-- INCLUDE #Blob.slice().Syntax -->](#slice)<br/><!-- INCLUDE #Blob.slice().Summary -->       |

## 4D.Blob.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R2   | Ajout         |

</details>

<!-- REF #4D.Blob.new().Syntax -->**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->

| Paramètres | Type                            |                             | Description                     |
| ---------- | ------------------------------- | :-------------------------: | ------------------------------- |
| blob       | Blob ou 4D.Blob |              ->             | Blob pour copie                 |
| Résultat   | 4D.Blob         | <- | Nouveau 4D.Blob |

<!-- END REF -->

#### Description

`4D.Blob.new` <!-- REF #4D.Blob.new().Summary -->crée un nouvel objet `4D.Blob` encapsulant optionnellement une copie des données d'un autre blob (blob scalaire ou `4D.Blob`)<!-- END REF -->.

Si le paramètre `blob` est omis, la fonction retourne un 4D.Blob vide.

## .size

<!-- REF #Blob.size.Syntax -->**.size** : Real<!-- END REF -->

#### Description

La propriété `.size` <!-- REF #Blob.size.Summary -->retourne la taille d'un `4D.Blob`, exprimée en octets.<!-- END REF -->

## .slice()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R2   | Ajout         |

</details>

<!-- REF #Blob.slice().Syntax -->**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob<!-- END REF -->

<!-- REF #Blob.slice().Params -->

| Paramètres | Type                    |                             | Description                                                                  |
| ---------- | ----------------------- | :-------------------------: | ---------------------------------------------------------------------------- |
| start      | Real                    |              ->             | indice du premier octet à inclure dans le nouveau `4D.Blob`. |
| end        | Real                    |              ->             | indice du premier octet qui ne sera pas inclus dans le nouveau `4D.Blob`     |
| Résultat   | 4D.Blob | <- | Nouveau `4D.Blob`                                                            |

<!-- END REF -->

#### Description

`.slice()` <!-- REF #Blob.slice().Summary --> crée et retourne un `4D.Blob` qui référence les données d'un sous-ensemble du blob sur lequel il est appelé. Le blob d'origine n'est pas modifié.<!-- END REF -->

Le paramètre `start` est un indice dans le blob, indiquant le premier octet à inclure dans le nouveau `4D.Blob`. Si vous indiquez une valeur négative, 4D la traite comme un décalage de la fin du blob vers le début. Par exemple, -10 correspondrait à l'avant-dernier octet du blob. La valeur par défaut est 0. Si vous spécifiez une valeur pour start qui est supérieure à la taille du blob source, la taille du `4D.Blob` retourné est 0, et il ne contient aucune donnée.

Sommaire Si vous indiquez une valeur négative, 4D la traite comme un décalage de la fin du blob vers le début. Par exemple, -10 correspondrait à l'avant-dernier octet du blob. La valeur par défaut est la taille du blob.

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
