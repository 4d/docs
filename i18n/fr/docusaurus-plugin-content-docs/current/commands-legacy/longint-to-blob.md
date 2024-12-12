---
id: longint-to-blob
title: LONGINT TO BLOB
slug: /commands/longint-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT TO BLOB.Syntax-->**LONGINT TO BLOB** ( *entierLong* ; *blob* ; *ordreOctet* {; offset | *} )<!-- END REF-->
<!--REF #_command_.LONGINT TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| entierLong | Integer | &#8594;  | Valeur de type Entier long à écrire dans BLOB |
| blob | Blob | &#8594;  | BLOB devant recevoir l'entier long |
| ordreOctet | Integer | &#8594;  | 0=Ordre d'octets natif, 1=Ordre d'octets Macintosh, 2=Ordre d'octets PC |
| offset &#124; * | Variable, Opérateur |&#8596; | Offset (en octets) dans le BLOB ou * pour ajouter la valeur à la fin du BLOB |
| || | Nouvel offset après l'écriture si * omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.LONGINT TO BLOB.Summary-->La commande **LONGINT TO BLOB** écrit la valeur de type Entier long (4 octets) *entierLong* dans le BLOB *blob*.<!-- END REF-->

Le paramètre *ordreOctet* fixe l'ordre des octets ("byte ordering") de la valeur Entier long à écrire. Vous passez une des constantes fournies par 4D :

| Constante               | Type        | Valeur |
| ----------------------- | ----------- | ------ |
| Macintosh byte ordering | Entier long | 1      |
| Native byte ordering    | Entier long | 0      |
| PC byte ordering        | Entier long | 2      |

**Note sur l'indépendance de plate-forme :** Si vous échangez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d'octets ("byte swapping") lorsque vous utilisez cette fonction. 

Si vous passez le paramètre optionnel *\**, l'entier long sur 4 octets est ajouté à la fin du BLOB et la taille de *blob* est modifiée en conséquence. Ainsi, à l'aide du paramètre optionnel *\**, vous pouvez stocker les unes derrière les autres autant de valeurs de type Entier, Entier long, Numérique ou Texte (référez-vous aux autres commandes sur les BLOBs) que vous voulez dans un BLOB, la seule limite étant celle de la mémoire disponible. 

Si vous ne passez pas le paramètre optionnel *\** ni de variable dans le paramètre *offset*, l'entier long est stocké au début de *blob* en remplaçant son contenu précédent, et la taille du BLOB est modifiée en conséquence.

Si vous passez une variable dans le paramètre *offset*, l'entier long est écrit à partir de l'offset *offset*, exprimé en octets (à partir de zéro), du BLOB. Quel que soit l'endroit où vous placez l'entier long, la taille du BLOB sera augmentée si nécessaire en fonction de l'emplacement que vous avez défini (plus jusqu'à 4 octets le cas échéant). Les octets redéfinis (autres que ceux que vous venez d'écrire) sont initialisés à la valeur zéro. 

Après l'exécution de la commande, la variable du paramètre *offset* est incrémentée du nombre d'octets ayant été écrits. Vous pouvez par conséquent réutiliser la même variable avec une autre commande d'écriture de BLOB afin de placer une autre valeur juste après celle que vous venez d'écrire.

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Exemple 1 

Après l'exécution de ce code :

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;Native byte ordering)
```

* La taille de *vxBlob* est 4 octets
* Sur plate-forme PowerPC *vxBLOB{0}=$01*, *vxBLOB{1}=$02*, *vxBLOB{2}=$03*, *vxBLOB{3}=$04*
* Sur plate-forme Intel *vxBLOB{0}=$04*, *vxBLOB{1}=$03*, *vxBLOB{2}=$02*, *vxBLOB{3}=$01*

#### Exemple 2 

Après l'exécution de ce code :

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering)
```

* La taille de *vxBlob* est 4 octets
* Sur toutes les plates-formes *vxBLOB{0}=$01*, *vxBLOB{1}=$02*, *vxBLOB{2}=$03*, *vxBLOB{3}=$04*

#### Exemple 3 

Après l'exécution de ce code :

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering)
```

* La taille de *vxBlob* est 4 octets
* Sur toutes les plates-formes *vxBLOB{0}=$04*, *vxBLOB{1}=$03*, *vxBLOB{2}=$02*, *vxBLOB{3}=$01*

#### Exemple 4 

Après l'exécution de ce code :

```4d
 SET BLOB SIZE(vxBlob;100)
 LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering)
```

* La taille de *vxBlob* est 104 octets
* Sur toutes les plates-formes *vxBLOB{100}=$04*, *vxBLOB{101}=$03*, *vxBLOB{102}=$02*, *vxBLOB{103}=$01*
* Les autres octets du BLOB sont inchangés

#### Exemple 5 

Après l'exécution de ce code :

```4d
 SET BLOB SIZE(vxBlob;100)
 vlOffset:=50
 LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering;vlOffset)
```

* La taille de *vxBlob* est 100 K
* Sur toutes les plates-formes *vxBLOB{50}=$01*, *vxBLOB{51}=$02*, *vxBLOB{52}=$03*, *vxBLOB{53}=$04*
* Les autres octets du BLOB restent inchangés
* La variable *vlOffset* a été incrémentée de 4 (et est alors égale à 54)

#### Voir aussi 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 550 |
| Thread safe | &check; |


