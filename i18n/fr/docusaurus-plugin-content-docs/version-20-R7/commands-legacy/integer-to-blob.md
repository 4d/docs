---
id: integer-to-blob
title: INTEGER TO BLOB
slug: /commands/integer-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.INTEGER TO BLOB.Syntax-->**INTEGER TO BLOB** ( *entier* ; *blob* ; *ordreOctet* {; offset | *} )<!-- END REF-->
<!--REF #_command_.INTEGER TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| entier | Integer | &#8594;  | Valeur entière à écrire dans le BLOB |
| blob | Blob | &#8594;  | BLOB devant recevoir la valeur entière |
| ordreOctet | Integer | &#8594;  | 0=Ordre des octets en mode natif, 1=Ordre des octets Macintosh, 2=Ordre des octets PC |
| offset &#124; * | Variable, Opérateur | &#8596;  | Offset (en octets) de l'entier dans le BLOB ou * pour ajouter la valeur à la fin du BLOB |
| ||| Nouvel offset après écriture si * omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.INTEGER TO BLOB.Summary-->**INTEGER TO BLOB** écrit la valeur entière (2 octets) *entier* dans le BLOB *blob*.<!-- END REF-->

Le paramètre *ordreOctet* fixe l'ordre des octets ("byte ordering") de la valeur entière à écrire. Vous pouvez passer une des constantes fournies par 4D :

| Constante               | Type        | Valeur |
| ----------------------- | ----------- | ------ |
| Macintosh byte ordering | Entier long | 1      |
| Native byte ordering    | Entier long | 0      |
| PC byte ordering        | Entier long | 2      |

**Note sur l'indépendance de plate-forme :** Si vous échangez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d'octets ("byte swapping") lorsque vous utilisez cette commande. 

Si vous passez le paramètre optionnel \*, la valeur entière sur 2 octets est ajoutée à la fin du BLOB et sa taille est modifiée en conséquence. Ainsi, à l'aide du paramètre optionnel \*, vous pouvez stocker les unes derrière les autres autant de valeurs de type Entier, Entier long, Numérique ou Texte (référez-vous aux autres commandes sur les BLOBs) que vous voulez dans un BLOB, la seule limite étant celle de la mémoire disponible. 

Si vous ne passez pas le paramètre optionnel \* ni de variable dans le paramètre *offset*, la valeur entière est stockée au début de *blob* en remplaçant son contenu précédent, et la taille du BLOB est modifiée en conséquence.

Si vous passez une variable dans le paramètre *offset*, la valeur entière est écrite à partir de l'offset *offset*, exprimé en octets (à partir de zéro), du BLOB. Quel que soit l'endroit où vous placez l'entier, la taille du BLOB sera augmentée si nécessaire en fonction de l'emplacement que vous avez défini (plus jusqu'à 2 octets le cas échéant). Les octets redéfinis (autres que ceux que vous venez d'écrire) sont initialisés à la valeur zéro. 

Après l'exécution de la commande, la variable du paramètre *offset* est incrémentée du nombre d'octets ayant été écrits. Vous pouvez par conséquent réutiliser la même variable avec une autre commande d'écriture de BLOB afin de placer une autre valeur juste après celle que vous venez d'écrire.

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Exemple 1 

Après l'exécution de ce code :

```4d
 SET BLOB SIZE(vxBlob;100)
 vlOffset:=50
 INTEGER TO BLOB(518;vxBlob;Macintosh byte ordering;vlOffset)
```

* La taille de *vxBlob* est 100 octets
* Sur toutes les plates-formes *vxBLOB{50}* \= *$02* et *vxBLOB{51}* \= *$06*
* Les autres octets du BLOB restent inchangés
* La variable *vlOffset* est incrémentée de 2 (et est alors égale à 52)

#### Exemple 2 

Après l'exécution de ce code :

```4d
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering)
```

* La taille de *vxBlob* est 2 octets
* Sur toutes les plates-formes *vxBLOB{0}* \= *$06* et *vxBLOB{1}* \= *$02*

#### Exemple 3 

Après l'exécution de ce code:

```4d
 SET BLOB SIZE(vxBlob;100)
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering;*)
```

* La taille de *vxBlob* est 102 octets
* Sur toutes les plates-formes *vxBLOB{100}* \= *$06* et *vxBLOB{101}* \= *$02*
* Les autres octets du BLOB restent inchangés

#### Exemple 4 

Après l'exécution de ce code :

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Native byte ordering)
```

* La taille de *vxBlob* est 2 octets
* Sur plate-forme PowerPC *vxBLOB{0}* \= *$02* et *vxBLOB{1}* \= *$06*
* Sur plate-forme Intel *vxBLOB{0}* \= *$06* et *vxBLOB{1}* \= *$02*

#### Exemple 5 

Après l'exécution de ce code :

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Macintosh byte ordering)
```

* La taille de *vxBlob* est 2 octets
* Sur toutes les plates-formes *vxBLOB{0}* \= *$02* et *vxBLOB{1}* \= *$06*

#### Voir aussi 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  