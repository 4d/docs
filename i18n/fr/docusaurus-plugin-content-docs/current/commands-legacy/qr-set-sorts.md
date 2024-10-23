---
id: qr-set-sorts
title: QR SET SORTS
slug: /commands/qr-set-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SORTS.Syntax-->**QR SET SORTS** ( *zone* ; *tabColonnes* {; *tabTris*} )<!-- END REF-->
<!--REF #_command_.QR SET SORTS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| tabColonnes | Real array | &#8594;  | Colonnes |
| tabTris | Real array | &#8594;  | Ordres de tris |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.QR SET SORTS.Summary-->La commande **QR SET SORTS** vous permet de définir l'ordre de tri de chaque colonne de l'état rapide dont la référence est passée dans *zone*.<!-- END REF--> 

*tabColonnes* : vous devez stocker dans ce tableau le numéro de chaque colonne pour laquelle vous souhaitez définir un ordre de tri.

*tabTris* : chaque élément de ce tableau doit contenir l'ordre de tri pour la colonne correspondante référencée dans le tableau *tabColonnes*. 

* Si *tabTris{$i}* vaut 1, le tri est croissant.
* Si *tabTris{$i}* vaut -1, le tri est décroissant.

##### Etats tableaux croisés 

Avec ce type d'état, le tableau ne peut pas comporter plus de deux éléments. Vous pouvez uniquement trier les colonnes (1) et les lignes (2). Les données (situées à l'intersection des colonnes et des lignes) ne peuvent pas être triées via cette commande. 

Voici le code permettant de trier les lignes uniquement dans un état tableau croisé :

```4d
 ARRAY REAL($tabColonnes;1)
 $tabColonnes{1}:=2
 ARRAY REAL($tabTris;1)
 $tabTris{1}:=-1 //Tri décroissant des lignes
 QR SET SORTS(qr_zone;$tabColonnes;$tabTris)
```

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR GET SORTS](qr-get-sorts.md)  