---
id: blob-to-real
title: BLOB to real
slug: /commands/blob-to-real
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to real.Syntax-->**BLOB to real** ( *blob* ; *formatRéel* {; *offset*} ) : Real<!-- END REF-->
<!--REF #_command_.BLOB to real.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB duquel extraire la valeur de type Réel |
| formatRéel | Integer | &#8594;  | 0 Format réel natif 1 Format réel étendu 2  Format réel double Macintosh 3  Format réel double Windows |
| offset | Variable | &#8596;  | Offset (en octets) dans le BLOB |
| ||| Nouvel offset après lecture |
| Résultat | Real | &#8592; | Valeur de type Réel |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to real.Summary-->La fonction **BLOB to real** retourne une valeur de type Réel lue dans le BLOB *blob*.<!-- END REF-->

Le paramètre *formatRéel* fixe le format interne et l'ordre des octets ("byte ordering") de la valeur de type Réel à lire. Vous passez une des constantes fournies par 4D :

| Constante                    | Type        | Valeur |
| ---------------------------- | ----------- | ------ |
| Extended real format         | Entier long | 1      |
| Macintosh double real format | Entier long | 2      |
| Native real format           | Entier long | 0      |
| PC double real format        | Entier long | 3      |

  
**Note sur l'indépendance de plate-forme :** Si vous échangez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d'octets ("byte swapping") lorsque vous utilisez cette fonction.

Si vous ne passez pas de variable dans le paramètre optionnel *offset*, les 8 ou 10 premiers octets de BLOB sont lus.

Si vous passez une variable dans le paramètre optionnel *offset*, la valeur réelle est lue depuis l'offset exprimé en octets (à partir de zéro) du BLOB. 

**Note :** Vous devez passer un offset compris entre 0 (zéro) et la taille du BLOB moins 8 ou 10\. Sinon, une erreur -111 est générée. 

Après l'exécution de la commande, la variable *offset* est incrémentée du nombre d'octets qui a été lu. Vous pouvez donc réutiliser la même variable avec une autre commande de lecture de BLOBs pour lire une autre valeur placée juste après celle que vous venez de lire.

#### Exemple 

L'exemple suivant lit 20 valeurs réelles dans un BLOB à partir de l'offset 0x200 :

```4d
 $vlOffset:=0x200
 For($viBoucle;0;19)
    $vrValeur:=BLOB to real(vxUnBlob;PC double real format;$vlOffset)
  // Faire quelque chose avec $vrValeur
 End for
```

#### Voir aussi 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 553 |
| Thread safe | &check; |
| Interdite sur le serveur ||


