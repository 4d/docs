---
id: blob-to-integer
title: BLOB to integer
slug: /commands/blob-to-integer
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to integer.Syntax-->**BLOB to integer** ( *blob* ; *ordreOctet* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to integer.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB duquel obtenir la valeur entière |
| ordreOctet | Integer | &#8594;  | 0 Ordre d'octets mode natif 1 Ordre d'octets Macintosh 2 Ordre d'octets PC |
| offset | Variable | &#8596;  | Offset (en octets) dans le BLOB |
| || | Nouvel offset après la lecture |
| Résultat | Integer | &#8592; | Valeur entière (2 octets) |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to integer.Summary-->BLOB to integer retourne une valeur entière (2 octets) lue dans le BLOB blob.<!-- END REF-->  

Le paramètre ordreOctet fixe l'ordre des octets ("byte ordering") de la valeur entière à lire. Vous pouvez passer une des constantes fournies par 4D :  

| Constante               | Type        | Valeur |
| ----------------------- | ----------- | ------ |
| Macintosh byte ordering | Entier long | 1      |
| Native byte ordering    | Entier long | 0      |
| PC byte ordering        | Entier long | 2      |

  
Note sur l'indépendance de plate-forme : Si vous échangez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d'octets ("byte swapping") lorsque vous utilisez cette fonction.  

Si vous ne passez pas de variable dans le paramètre optionnel offset, les deux premiers octets de BLOB sont lus.  

Si vous passez une variable dans le paramètre optionnel offset, la valeur entière sur 2 octets est lue depuis l'offset exprimé en octets (à partir de zéro) du BLOB.  

Note : Vous devez passer un offset compris entre 0 (zéro) et la taille du BLOB moins 2\. Sinon, une erreur -111 est générée.  

Après l'exécution de la commande, la variable offset est incrémentée du nombre d'octets qui a été lu. Vous pouvez donc réutiliser la même variable avec une autre commande de lecture de BLOBs pour lire une autre valeur placée juste après celle que vous venez de lire.

#### Exemple 

L'exemple suivant lit 20 valeurs entières d'un BLOB à partir de l'offset 0x200 :

```4d
 $vlOffset:=0x200
 For($viBoucle;0;19)
    $viValeur:=BLOB to integer(vxUnBlob;PC byte ordering;$vlOffset)
  // Faire quelque chose avec $viValeur
 End for
```
  
  
 Voir aussi 

[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

![](../assets/en/commands/comment.png)Ajouter un commentaire 

[Page préc.](blob-to-document.md) 

[Page suiv.](blob-to-list.md) 

#### Voir aussi 

[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 549 |
| Thread safe | &check; |


