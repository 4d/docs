---
id: list-to-blob
title: LIST TO BLOB
slug: /commands/list-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LIST TO BLOB.Syntax-->**LIST TO BLOB** ( *liste* ; *blob* {; *blob*} )<!-- END REF-->
<!--REF #_command_.LIST TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Liste hiérarchique à stocker dans le BLOB |
| blob | Blob | &#8594;  | BLOB devant recevoir la liste hiérarchique |
| blob | * | &#8594;  | Ajouter la liste à la fin du BLOB |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LIST TO BLOB.Summary-->La commande **LIST TO BLOB** stocke la liste hiérarchique *liste* dans le BLOB *blob*.<!-- END REF-->

Si vous passez le paramètre optionnel \*, la liste hiérarchique est ajoutée à la fin du BLOB et la taille de *blob* est modifiée en conséquence. Ainsi, à l'aide du paramètre optionnel \*, vous pouvez stocker les unes derrière les autres autant de variables ou de listes (référez-vous aux autres commandes sur les BLOBs) que vous voulez dans un BLOB, la seule limite étant celle de la mémoire disponible. 

Si vous ne passez pas le paramètre optionnel \*, la liste hiérarchique est stockée au début de *blob* en remplaçant son contenu précédent, et la taille du BLOB est modifiée en conséquence.

Quel que soit l'endroit où vous placez la liste, la taille du BLOB sera augmentée si nécessaire en fonction de l'emplacement que vous avez défini (plus jusqu'à la taille de la liste le cas échéant). Les octets redéfinis (autres que ceux que vous venez d'écrire) sont initialisés à la valeur zéro. 

**ATTENTION :** Si vous utilisez un BLOB pour stocker des listes, appelez ensuite la commande [BLOB to list](blob-to-list.md) pour relire le contenu du BLOB car les listes sont stockées dans les BLOBs avec un format interne 4D.

Après l'exécution de la commande, la variable OK prend la valeur 1 si la liste hiérarchique a été correctement stockée. Si l'opération n'a pas pu être effectuée car, par exemple, il n'y avait pas assez de mémoire disponible, la variable OK prend la valeur 0.

**Note pour l'indépendance de plate-forme :** **LIST TO BLOB** et [BLOB to list](blob-to-list.md) utilisent un format interne 4D pour gérer les listes stockées dans des BLOBs. L'avantage est que vous n'avez pas besoin de vous soucier de la conversion des octets ("byte swapping") entre les plates-formes lorsque vous utilisez ces deux commandes. Autrement dit, avec ces commandes, un BLOB créé sous Windows peut être réutilisé sous Mac OS et vice-versa.

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Exemple 

Reportez-vous à l'exemple de la fonction [BLOB to list](blob-to-list.md).

#### Voir aussi 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[SAVE LIST](save-list.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  