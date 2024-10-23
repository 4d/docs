---
id: listbox-get-grid-colors
title: LISTBOX GET GRID COLORS
slug: /commands/listbox-get-grid-colors
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID COLORS.Syntax-->**LISTBOX GET GRID COLORS** ( {* ;} *objet* ; *couleurH* ; *couleurV* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID COLORS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| couleurH | Text, Integer | &#8592; | Valeur de couleur RVB pour les traits horizontaux |
| couleurV | Text, Integer | &#8592; | Valeur de couleur RVB pour les traits verticaux |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX GET GRID COLORS.Summary-->La commande **LISTBOX GET GRID COLORS** retourne la couleur des lignes horizontales et verticales composant la grille de l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

La commande retourne dans les paramètres *couleurH* et *couleurV* des valeurs de couleurs RVB. Le format de la couleur dépend du type de paramètre que vous avez passé dans *couleurH* et *couleurV* :

* Si vous avez passé un texte, la couleur sera exprimée sous forme de CSS (format "#rrggbb")
* Si vous avez passé un entier long, la couleur sera exprimée sous forme d'entier long de 4 octets (format 0x00rrggbb).

#### Voir aussi 

[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  