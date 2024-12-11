---
id: blob-to-longint
title: BLOB to longint
slug: /commands/blob-to-longint
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to longint.Syntax-->**BLOB to longint** ( *blob* ; *ordreOctet* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to longint.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB duquel extraire la valeur de type Entier long |
| ordreOctet | Integer | &#8594;  | 0 = Ordre d'octets natif 1 = Ordre d'octets Macintosh 2 = Ordre d'octets PC |
| offset | Variable | &#8596;  | Offset (en octets) dans le BLOB |
| ||| Nouvel offset après lecture |
| Résultat | Integer | &#8592; | Valeur de type Entier long (4 octets) |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to longint.Summary-->La fonction **BLOB to longint** retourne une valeur de type Entier long (4 octets) lue dans le BLOB *blob*.<!-- END REF-->

Le paramètre *ordreOctet* fixe l'ordre des octets ("byte ordering") de la valeur Entier long à lire. Vous passez une des constantes fournies par 4D :

| Constante               | Type        | Valeur |
| ----------------------- | ----------- | ------ |
| Macintosh byte ordering | Entier long | 1      |
| Native byte ordering    | Entier long | 0      |
| PC byte ordering        | Entier long | 2      |

**Note sur l'indépendance de plate-forme :** Si vous échangez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d'octets ("byte swapping") lorsque vous utilisez cette fonction. 

Si vous ne passez pas de variable dans le paramètre optionnel *offset*, les quatre premiers octets de BLOB sont lus.

Si vous passez une variable dans le paramètre optionnel *offset*, l'entier long sur 4 octets est lu depuis l'offset exprimé en octets (à partir de zéro) du BLOB. 

**Note :** Vous devez passer un offset compris entre 0 (zéro) et la taille du BLOB moins 4\. Sinon, une erreur -111 est générée. 

Après l'exécution de la commande, la variable *offset* est incrémentée du nombre d'octets qui a été lu. Vous pouvez donc réutiliser la même variable avec une autre commande de lecture de BLOBs pour lire une autre valeur placée juste après celle que vous venez de lire.

#### Exemple 

L'exemple suivant lit 20 valeurs de type Entier long dans un BLOB, à partir de l'offset 0x200 :

```4d
 $vlOffset:=0x200
 For($viBoucle;0;19)
    $vlValeur:=BLOB to longint(vxUnBlob;PC byte ordering;$vlOffset)
  // Faire quelque chose avec $vlValeur
 End for
```

#### Voir aussi 

[BLOB to integer](blob-to-integer.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 551 |
| Thread safe | &check; |
| Interdite sur le serveur ||


