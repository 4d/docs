---
id: blob
title: BLOB
---

A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes which can be treated as one whole object or whose bytes can be addressed individually. Un BLOB peut être vide (longueur nulle) ou contenir jusqu'à 2147483647 octets (2 Go).

Lorsque vous travaillez avec un BLOB, il est stocké entièrement en mémoire. Si vous travaillez avec une variable, le BLOB n'existe qu'en mémoire. Si vous travaillez avec un champ de type BLOB, il est chargé en mémoire à partir du disque, comme le reste de l'enregistrement auquel il appartient.

A l'instar des autres types de champs pouvant contenir une grande quantité de données (comme les champs de type Image), les champs de type BLOB ne sont pas dupliqués en mémoire lorsque vous modifiez un enregistrement. Par conséquent, les résultats renvoyés par `Ancien` et `Modifie` ne sont pas significatifs lorsque ces fonctions sont appliquées à des champs de type BLOB.

## Blob Types

4D supports two types of blobs:
* **4D.Blob**: Blob object that encapsulates a blob or part of it without altering the original blob (see [4D.Blob Class](../API/BlobClass.md))
* **C_BLOB**: Classical blob variable

We recommend using blob objects (4D.Blob) to manipulate blobs. Blob objects are optimized, shareable — when passed as method parameters, they are passed by reference — and usable in preemptive threads.

### Automatic conversion of blob type
4D automatically converts blob objects (4D.Blob) to classical blobs (C_BLOB) and vice versa. Par exemple :

```4d
C_BLOB($myBlob)
$o:=New object("blob";$myBlob)
$type:=Value type($o.blob)  //object
```

Some commands alter the original blob, and thus do not support the 4D.Blob type:

* [DELETE FROM BLOB](https://doc.4d.com/4dv19R/help/command/en/page560.html)
* [INSERT IN BLOB](https://doc.4d.com/4dv19R/help/command/en/page559.html)
* [INTEGER TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page548.html)
* [LONGINT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page550.html)
* [REAL TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page552.html)
* [SET BLOB SIZE](https://doc.4d.com/4dv19R/help/command/en/page606.html)
* [TEXT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page554.html)
* [VARIABLE TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page532.html)
* [LIST TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page556.html)

## Passing blobs as parameters

Blobs can be passed as parameters to 4D commands or plug-in routines that expect blob parameters. blobs can also be passed as parameters to user methods, or returned by functions.

### Passing a 4D.Blob

```4d
var $myBlob: 4D.Blob.new
$myText:= BLOB to text ( $myBlob ; UTF8 )
```

### Passing a C_BLOB

To modify a blob, you need to use a C_BLOB variable and pass it to a command. Par exemple :

```4d
C_BLOB($myBlob)
SET BLOB SIZE ($myBlob ; 16*1024)
```

### Passing a C_BLOB by reference using a pointer

To pass a C_BLOB to your own methods, you can also define a pointer to the C_BLOB and pass the pointer as parameter.

**Voici quelques exemples :**
```4d
  ` Declare a variable of type BLOB
 C_BLOB(anyBlobVar)
  ` The blob is passed as parameter to a 4D command
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` The blob is passed as parameter to an external routine
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` The blob is passed as a parameter to a method that returns a blob
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` A pointer to the blob is passed as parameter to a user method
 COMPUTE BLOB(->anyBlobVar)
```
**Note pour les développeurs de plug ins 4D :** Un paramètre de type BLOB se déclare “&O” (la lettre “O” et non le chiffre “0”).

## Assignation

You can assign blobs to each other.

**Exemple :**
```4d
  // Déclarer deux variables de type BLOB
 C_BLOB(vBlobA;vBlobB)
  // Fixer la taille du premier BLOB à 10Ko
 SET BLOB SIZE(vBlobA;10*1024)
  // Assigner le premier BLOB au second
 vBlobB:=vBlobA
```

En revanche, il n'existe pas d'opérateur pouvant être utilisé avec des BLOB.

## Adresser le contenu d'un BLOB

You can address each byte of a blob individually using the curly brackets symbols {...}. Dans un BLOB, les octets sont numérotés de 0 à N-1, N étant la taille du BLOB. Exemple :
```4d
  // Déclarer une variable de type BLOB
 C_BLOB(vBlob)
  // Fixer la taille du BLOB à 256 octets
 SET BLOB SIZE(vBlob;256)
  // La boucle suivante initialise les 256 octets du BLOB à zéro
 Boucle(vOctet;0;Taille BLOB(vBlob)-1)
    vBlob{vOctet}:=0
 Fin de boucle
```
Because you can address all the bytes of a blob individually, you can actually store whatever you want in a BLOB field or variable.
