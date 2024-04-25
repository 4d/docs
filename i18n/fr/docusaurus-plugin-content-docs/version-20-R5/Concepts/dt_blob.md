---
id: blob
title: BLOB
---

Un champ, une variable ou une expression de type BLOB (Binary Large OBject) est une série contiguë d'octets qui peut être traitée comme un seul objet ou dont les octets peuvent être adressés individuellement.

Lorsque vous travaillez avec un blob, il est stocké entièrement en mémoire. Si vous travaillez avec une variable, le blob n'existe qu'en mémoire. Si vous travaillez avec un champ de type blob, il est chargé en mémoire à partir du disque, comme le reste de l'enregistrement auquel il appartient.

A l'instar d'autres types de champs pouvant contenir une grande quantité de données (comme les champs de type Image), les champs de type blob ne sont pas dupliqués en mémoire lorsque vous modifiez un enregistrement. Consequently, the result returned by the `Old` and `Modified` commands is not significant when applied to a Blob field.

## Types de Blob

Dans le langage 4D, il existe deux façons de manipuler un blob :

- **as a scalar value**: a blob can be stored in a Blob variable or field and altered.
- **as an object (`4D.Blob`)**: a `4D.Blob` is a blob object. You can encapsulate a blob or part of it in a `4D.Blob` without altering the original blob. This method is called [boxing](https://en.wikipedia.org/wiki/Object_type_\(object-oriented_programming\)#Boxing). For more info on how to instantiate a `4D.Blob`, see [Blob Class](../API/BlobClass.md).

Chaque type de blob a ses avantages. Utilisez le tableau suivant pour déterminer celui qui convient à vos besoins :

|                                         | Blob | 4D.Blob |
| --------------------------------------- | :--: | :---------------------: |
| Modifiable                              |  Oui |           Non           |
| Partageable en objets et collections    |  Non |           Oui           |
| Passé par référence\*                   |  Non |           Oui           |
| Performances lors de l'accès aux octets |   -  |            *            |
| Taille maximale                         |  2Go |         Mémoire         |

A noter que, contrairement aux objets blob, qui sont transmis par référence, les blobs scalaires sont dupliqués en mémoire lorsqu'ils sont passés aux méthodes. When working with methods, using blob objects (`4D.Blob`) is more efficient, as they are passed by reference.

> Par défaut, la taille maximale des blobs scalaires est fixée à 2 Go, mais cette limite peut être inférieure en fonction de votre OS et de l'espace disponible.

Vous ne pouvez pas utiliser d'opérateurs sur les blobs.

## Checking if a variable holds a scalar blob or a `4D.Blob`

Use the [Value type](https://doc.4d.com/4dv20/help/command/en/page1509.html) command to determine if a value is of type Blob or Object.
To check that an object is a blob object (`4D.Blob`), use [OB instance of](https://doc.4d.com/4dv20/help/command/en/page1731.html):

```4d
var $myBlob: Blob
var $myBlobObject: 4D.Blob
$myBlobObject:=4D.Blob.new()

$type:= Value type($myblobObject) // 38 (object)
$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True
```

## Passer des blobs en tant que paramètres

Les blobs scalaires et les objets blob peuvent être passés comme paramètres aux commandes 4D ou aux routines de plug-in qui attendent des paramètres blob.

### Passer des blobs et des objets blob aux commandes 4D

You can pass a scalar blob or a `4D.Blob` to any 4D command that takes a blob as a parameter:

```4d
var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text( $myBlob ; UTF8 text without length )
```

Some 4D commands alter the original blob, and thus do not support the `4D.Blob` type:

- [DELETE FROM BLOB](https://doc.4d.com/4dv19/help/command/en/page560.html)
- [INSERT IN BLOB](https://doc.4d.com/4dv19/help/command/en/page559.html)
- [INTEGER TO BLOB](https://doc.4d.com/4dv19/help/command/en/page548.html)
- [LONGINT TO BLOB](https://doc.4d.com/4dv19/help/command/en/page550.html)
- [REAL TO BLOB](https://doc.4d.com/4dv19/help/command/en/page552.html)
- [SET BLOB SIZE](https://doc.4d.com/4dv19/help/command/en/page606.html)
- [TEXT TO BLOB](https://doc.4d.com/4dv19/help/command/en/page554.html)
- [VARIABLE TO BLOB](https://doc.4d.com/4dv19/help/command/en/page532.html)
- [LIST TO BLOB](https://doc.4d.com/4dv19/help/command/en/page556.html)
- [SOAP DECLARATION](https://doc.4d.com/4dv19/help/command/en/page782.html)
- [WEB SERVICE SET PARAMETER](https://doc.4d.com/4dv19/help/command/en/page777.html)

### Passer des blobs et des objets blob aux méthodes

You can pass blobs and blob objects (`4D.Blob`) to methods. A noter que, contrairement aux objets blob, qui sont transmis par référence, les blobs scalaires sont dupliqués en mémoire lorsqu'ils sont passés aux méthodes.

### Passer un blob scalaire par référence en utilisant un pointeur

Pour passer un blob scalaire à vos propres méthodes sans le dupliquer en mémoire, définissez un pointeur vers la variable qui le stocke et passez le pointeur comme paramètre.

**Examples:**

```4d
// Déclarer une variable de type Blob
var $myBlobVar: Blob
// Passer le blob (en tant que paramètre) en une commande 4D
 SET BLOB SIZE($myBlobVar;1024*1024)
```

```4d
// Passer le blob (en tant que paramètre) en routine externe
 $errCode:=Do Something With This blob($myBlobVar)
```

```4d
//Passer le blob (en tant que paramètre) en une méthode qui retourne un blob
 var $retrieveBlob: Blob
 retrieveBlob:=Fill_Blob($myBlobVar)
```

```4d
// Pass a pointer to the blob as a parameter to your own method,
COMPUTE BLOB(->$myBlobVar)
```

**Note for Plug-in developers:** A BLOB parameter is declared as “&O” (the letter “O”, not the digit “0”).

## Assigner une variable Blob à une autre

Vous pouvez affecter une variable Blob à une autre :

**Example:**

```4d
// Déclarer deux variables de type Blob
 var $vBlobA; $vBlobB : Blob
 // Fixer la taille du premier blob à 10Ko
 SET BLOB SIZE($vBlobA;10*1024)
 // Assigner le premier BLOB au second
 $vBlobB:=$vBlobA
```

## Conversion automatique du type blob

4D convertit automatiquement les blobs scalaires en objets blob, et vice versa, lorsqu'ils sont assignés l'un à l'autre. Par exemple :

```4d
// Créer une variable de type Blob et une variable objet
var $myBlob: Blob
var $myObject : Object

// Assigner ce blob à une propriété de $myObject nommée "blob"
$myObject:=New object("blob"; $myBlob)

// le blob stocké dans $myBlob est automatiquement converti en un 4D.Blob
$type:= OB Instance of($myObject.blob; 4D.Blob)  //True

// Conversion d'un 4D.Blob en Blob
$myBlob:= $myObject.blob
$type:= Value type($myBlob) // Blob
```

> When converting a `4D.Blob` to a scalar blob, if the size of the `4D.Blob` exceeds the maximum size for scalar blobs, the resulting scalar blob is empty.
> For example, when the maximum size for scalar blobs is 2GB, if you convert a `4D.Blob` of 2.5GB to a scalar blob, you obtain an empty blob.

## Modification d'un blob scalaire

Contrairement aux objets blob, les blobs scalaires peuvent être modifiés. Par exemple :

```4d
var $myBlob : Blob
SET BLOB SIZE ($myBlob ; 16*1024)
```

## Accéder individuellement aux octets d'un blob

#### Accéder aux octets d'un blob scalaire

Vous pouvez accéder aux octets individuels d'un blob scalaire en utilisant des accolades `{}`. Dans un blob, les octets sont numérotés de 0 à N-1, N étant la taille du BLOB:

```4d
  // Déclarer une variable de type BLOB
 var $vBlob : Blob
  // Fixer la taille du BLOB à 256 octets
 SET BLOB SIZE($vBlob;256)
  //  Le code suivant initialise les octets du BLOB à zéro
 For(vByte;0;BLOB size($vBlob)-1)
    $vBlob{vByte}:=0
 End for
```

Etant donné que vous pouvez adresser tous les octets d'un blob individuellement, vous pouvez stocker tout ce que vous souhaitez dans une variable ou un champ Blob.

#### Accessing a `4D.Blob`'s bytes

Use square brackets `[]` to directly access a specific byte in a `4D.Blob`

```4d
var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text ( $myBlob ; UTF8 text without length )
$byte:=$myBlob[5]
```

Since a `4D.Blob` cannot be altered, you can read the bytes of a `4D.Blob` using this syntax, but not modify them.
