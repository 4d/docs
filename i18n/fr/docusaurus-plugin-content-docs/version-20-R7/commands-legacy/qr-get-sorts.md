---
id: qr-get-sorts
title: QR GET SORTS
slug: /commands/qr-get-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SORTS.Syntax-->**QR GET SORTS** ( *zone* ; *tabColonnes* ; *tabTris* )<!-- END REF-->
<!--REF #_command_.QR GET SORTS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| tabColonnes | Real array | &#8592; | Colonnes triées |
| tabTris | Real array | &#8592; | Ordres de tris |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.QR GET SORTS.Summary-->La commande **QR GET SORTS** remplit deux tableaux réels :

* *tabColonnes*  
Ce tableau contient toutes les colonnes auxquelles un ordre de tri a été associé.<!-- END REF-->
* *tabTris*  
Chaque élément de ce tableau fournit l'ordre de tri courant de la colonne correspondante.  
\- si *tabTris{$i}* vaut 1, le tri est croissant.  
\- si *tabTris{$i}* vaut -1, le tri est décroissant.

##### Etats tableaux croisés 

Avec ce type d'état, les tableaux ne peuvent pas comporter plus de deux éléments puisque les tris ne peuvent être effectués que sur les colonnes (1) et les lignes (2) (valeurs pour *tabColonnes*).   
  
Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR SET SORTS](qr-set-sorts.md)  