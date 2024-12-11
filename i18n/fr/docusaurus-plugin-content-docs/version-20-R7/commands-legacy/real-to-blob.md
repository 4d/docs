---
id: real-to-blob
title: REAL TO BLOB
slug: /commands/real-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.REAL TO BLOB.Syntax-->**REAL TO BLOB** ( *réel* ; *blob* ; *formatRéel* {; offset | *} )<!-- END REF-->
<!--REF #_command_.REAL TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| réel | Real | &#8594;  | Valeur de type Réel à écrire dans le BLOB |
| blob | Blob | &#8594;  | BLOB devant recevoir la valeur Réel |
| formatRéel | Integer | &#8594;  | 0=Format réel natif, 1=Format réel étendu, 2=Format réel double Macintosh, 3=Format réel double Windows |
| offset &#124; * | Variable, Opérateur | &#8596;  | Offset (en octets) dans le BLOB ou  * pour ajouter la valeur à la fin du BLOB |
| ||| Nouvel offset après l'écriture si * omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.REAL TO BLOB.Summary-->La commande **REAL TO BLOB** écrit la valeur de type Réel *réel* dans le BLOB *blob*.<!-- END REF-->

Le paramètre *formatRéel* fixe le format interne et l'ordre des octets ("byte ordering") de la valeur de type Réel à écrire. Vous passez une des constantes fournies par 4D :

| Constante                    | Type        | Valeur |
| ---------------------------- | ----------- | ------ |
| Extended real format         | Entier long | 1      |
| Macintosh double real format | Entier long | 2      |
| Native real format           | Entier long | 0      |
| PC double real format        | Entier long | 3      |

  
**Note sur l'indépendance de plate-forme :** Si vous échangez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d'octets ("byte swapping") lorsque vous utilisez cette fonction. 

Si vous passez le paramètre optionnel \*, la valeur réelle est ajoutée à la fin du BLOB et la taille de *blob* est modifiée en conséquence. Ainsi, à l'aide du paramètre optionnel \*, vous pouvez stocker les unes derrière les autres autant de valeurs de type Entier, Entier long, Numérique ou Texte (référez-vous aux autres commandes sur les BLOBs) que vous voulez dans un BLOB, la seule limite étant celle de la mémoire disponible. 

Si vous ne passez pas le paramètre optionnel \* ni de variable dans le paramètre *offset*, la valeur réelle est stockée au début de *blob* en remplaçant son contenu précédent, et la taille du BLOB est modifiée en conséquence.

Si vous passez une variable dans le paramètre *offset*, le réel est écrit à partir de l'offset *offset*, exprimé en octets (à partir de zéro), du BLOB. Quel que soit l'endroit où vous placez la valeur, la taille du BLOB sera augmentée si nécessaire en fonction de l'emplacement que vous avez défini (plus jusqu'à 8 ou 10 octets le cas échéant). Les octets redéfinis (autres que ceux que vous venez d'écrire) sont initialisés à la valeur zéro. 

Après l'exécution de la commande, la variable du paramètre *offset* est incrémentée du nombre d'octets ayant été écrits. Vous pouvez par conséquent réutiliser la même variable avec une autre commande d'écriture de BLOB afin de placer une autre valeur juste après celle que vous venez d'écrire.

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Exemple 1 

Après l'exécution de ce code :

```4d
 var vrValeur : Real
 vrValeur:=...
 REAL TO BLOB(vrValeur;vxBlob;Extended real format)
```

* Sur toutes les plates-formes, la taille de *vxBlob* est 10 octets

#### Exemple 2 

Après l'exécution de ce code :

```4d
 var vrValeur : Real
 vrValeur:=...
 REAL TO BLOB(vrValeur;vxBlob;Native real format)
```

* Sur toutes les plates-formes, la taille de *vxBlob* est 8 octets

#### Exemple 3 

Après l'exécution de ce code :

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValeur : Real
 vrValeur:=...
 REAL TO BLOB(vrValeur;vxBlob;PC double real format) // ou Format réel double Macintosh
```

* Sur toutes les plates-formes, la taille de *vxBlob* est 8 octets

#### Exemple 4 

Après l'exécution de ce code :

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValeur : Real
 vrValeur:=...
 vlOffset:=50
 REAL TO BLOB(vrValeur;vxBlob;PC double real format;vlOffset) // ou Format réel double Macintosh
```

* Sur toutes les plates-formes, la taille de *vxBlob* est 100 octets
* Sur toutes les plates-formes, la valeur numérique est stockée dans les octets #50 à #57
* Les autres octets du BLOB restent inchangés
* La variable *vlOffset* est incrémentée de 8 (et est alors égale à 58)

#### Exemple 5 

Après l'exécution de ce code :

```4d
 var vrValeur : Real
 vrValeur:=...
 REAL TO BLOB(vrValeur;vxBlob;Macintosh double real format) // ou Format réel double PC
```

* Sur toutes les plates-formes, la taille de *vxBlob* est 8 octets

#### Exemple 6 

Après l'exécution de ce code :

```4d
 SET BLOB SIZE(vxBlob;100)
 REAL TO BLOB(vrValeur;vxBlob;Extended real format;*)
```

* Sur toutes les plates-formes, la taille de *vxBlob* est 110 octets
* Sur toutes les plates-formes, la valeur numérique est stockée dans les octets #100 à #109
* Les autres octets du BLOB restent inchangés

#### Voir aussi 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 552 |
| Thread safe | &check; |
| Interdite sur le serveur ||


