---
id: variable-to-blob
title: VARIABLE TO BLOB
slug: /commands/variable-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO BLOB.Syntax-->**VARIABLE TO BLOB** ( *variable* ; *blob* {; offset | *} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable à stocker dans le BLOB |
| blob | Blob | &#8594;  | BLOB devant recevoir la variable |
| offset &#124; * | Variable, Opérateur | &#8596; | Offset de la variable (en octets) dans BLOB ou * pour ajouter la variable à la fin du BLOB |
|||| Nouvel offset après écriture si * omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.VARIABLE TO BLOB.Summary-->**VARIABLE TO BLOB** stocke la variable *variable* dans le BLOB *blob*.<!-- END REF-->

Si vous passez le paramètre optionnel \*, la *variable* est ajoutée à la fin de *blob* et la taille du BLOB est redimensionnée en conséquence. A l'aide du paramètre optionnel \*, vous pouvez stocker les unes derrière les autres autant de variables ou de listes (cf. les autres commandes BLOB) que vous voulez dans un BLOB, la seule limite étant celle de la mémoire disponible. 

Si vous ne passez pas le paramètre optionnel *\** ni de variable dans le paramètre *offset*, *variable* est stockée à partir du début du BLOB en écrasant son contenu précédent. La taille du BLOB est redimensionnée en conséquence.

Si vous passez la variable *offset* en paramètre, la *variable* est écrite dans le BLOB à l'offset (à partir de zéro) spécifié par *offset*. Quel que soit l'endroit où vous placez la variable, la taille du BLOB sera augmentée si nécessaire en fonction de l'emplacement que vous avez défini (ainsi que de la taille de la variable). Les octets redéfinis (autres que ceux que vous venez d'écrire) sont initialisés à la valeur zéro. 

Après l'exécution de la commande, la variable du paramètre *offset* est incrémentée du nombre d'octets ayant été écrits. Vous pouvez par conséquent réutiliser la même variable avec une autre commande d'écriture de BLOB afin de placer une autre variable ou liste juste après celle que vous venez d'écrire.

**VARIABLE TO BLOB** accepte tous les types de variables (y compris d'autres BLOBs), à l'exception des types suivants :

* Pointeurs
* Tableaux de pointeurs

A noter que :

* si vous stockez une variable de type Entier long qui est une référence à une liste hiérarchique (ListRef), **VARIABLE TO BLOB** stockera la variable Entier long, pas la liste. Pour stocker et récupérer des listes hiérarchiques dans un BLOB, utilisez les commandes [LIST TO BLOB](list-to-blob.md) et [BLOB to list](blob-to-list.md).
* si vous passez dans le paramètre *variable* un objet ou une collection, la commande en place une copie (et non une référence) dans le BLOB. Si l’objet ou la collection contient des pointeurs, leur valeurs dépointées sont stockées dans le BLOB, pas les pointeurs eux-mêmes.

**ATTENTION :** Si vous utilisez un BLOB pour stocker les variables, utilisez par la suite la commande [BLOB TO VARIABLE](blob-to-variable.md) pour récupérer le contenu du BLOB car les variables sont stockées dans les BLOBs avec un format interne à 4D.

La variable OK prend la valeur 1 si la variable a été correctement stockée. Si l'opération n'a pas pu être effectuée à cause d'un manque de mémoire, la variable OK prend la valeur 0.

**Note sur l'indépendance de plate-forme :** **VARIABLE TO BLOB** et [BLOB TO VARIABLE](blob-to-variable.md) utilisent un format interne à 4D pour gérer les variables stockées dans les BLOBs. Vous n'avez donc pas besoin de vous préoccuper de la conversion des octets ("byte swapping") entre les différentes plates-formes lors de l'utilisation de ces deux commandes. Un BLOB créé sous Windows à l'aide de ces deux commandes peut être réutilisé sans la moindre manipulation sous Mac OS et vice-versa.

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Variables et ensembles système 

La variable OK prend la valeur 1 si la variable a été correctement stockée, sinon elle prend la valeur 0.

#### Exemple 1 

Les deux méthodes projet suivantes vous permettent de stocker et de récupérer des variables dans un BLOB :

```4d
  // Méthode projet STOCKER VARIABLES DANS BLOB
  // STOCKER VARIABLES DANS BLOB ( Pointeur { ; Pointeur ... { ; Pointeur } } )
  // STOCKER VARIABLES DANS BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam : Integer
 
 SET BLOB SIZE($1->;0)
 For($vlParam;2;Count parameters)
    VARIABLE TO BLOB(${$vlParam}->;$1->;*)
 End for
 
 
  // Méthode projet RECUPERER VARIABLES DANS BLOB
  // RECUPERER VARIABLES DANS BLOB ( Pointeur { ; Pointeur ... { ; Pointeur } } )
  // RECUPERER VARIABLES DANS BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam;$vlOffset : Integer
 
 $vlOffset:=0
 For($vlParam;2;Count parameters)
    BLOB TO VARIABLE($1->;${$vlParam}->;$vlOffset)
 End for
```

Lorsque ces méthodes ont été ajoutées à votre application, vous pouvez écrire :

```4d
 STOCKER VARIABLES DANS BLOB(->vxBLOB;->vgImage;->taTableau1;->taTableau2)
  // ...
 RECUPERER VARIABLES DANS BLOB(->vxBLOB;->vgImage;->taTableau1;->taTableau2)
```

#### Exemple 2 

Les méthodes projet suivantes vous permettent de stocker et de récupérer rapidement des variables dans les documents sur disque :

```4d
  // Méthode projet STOCKER VARIABLES
  // STOCKER VARIABLES ( Texte ; Pointeur )
  // STOCKER VARIABLES ( Document ; -> Tableau )
 var $1 : Text
 var $2 : Pointer
 var $vxDonnéesTableau : Blob
 VARIABLE TO BLOB($2->;$vxDonnéesTableau) // Stocker le tableau dans le BLOB
 COMPRESS BLOB($vxDonnéesTableau) // Compresser le BLOB
 BLOB TO DOCUMENT($1;$vxDonnéesTableau) // Enregistrer le BLOB sur disque
```

```4d
  // Méthode projet CHARGER VARIABLES
  // CHARGER VARIABLES ( Texte ; Pointeur )
  // CHARGER VARIABLES ( Document ; -> Tableau )
 var $1 : Text
 var $2 : Pointer
 var $vxDonnéesTableau : Blob
 DOCUMENT TO BLOB($1;$vxDonnéesTableau) // Charger le BLOB du disque
 EXPAND BLOB($vxDonnéesTableau) // Décompresser le BLOB
 BLOB TO VARIABLE($vxDonnéesTableau;$2->) // Récupérer le tableau du BLOB
```

Lorsque ces méthodes ont été ajoutées à votre application, vous pouvez écrire :

```4d
 ARRAY TEXT(...;taToutTableau;...)
  //  ...
 STOCKER VARIABLES($vaNomDoc;->taToutTableau)
  //  ...
 CHARGER VARIABLES($vaNomDoc;->taToutTableau)
```

#### Voir aussi 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[LIST TO BLOB](list-to-blob.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 532 |
| Thread safe | &check; |
| Modifie les variables | OK |


