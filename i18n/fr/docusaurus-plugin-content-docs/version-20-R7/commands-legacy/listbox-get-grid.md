---
id: listbox-get-grid
title: LISTBOX GET GRID
slug: /commands/listbox-get-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID.Syntax-->**LISTBOX GET GRID** ( {* ;} *objet* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| horizontal | Boolean | &#8592; | Vrai = affichée, Faux = cachée |
| vertical | Boolean | &#8592; | Vrai = affichée, Faux = cachée |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET GRID.Summary-->La commande **LISTBOX GET GRID** retourne le statut affiché/masqué des lignes horizontales et/ou verticales composant la grille de l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

La commande retourne dans les paramètres *horizontal* et *vertical* la valeur **Vrai** ou **Faux** selon que si les lignes correspondantes sont affichées (Vrai) ou cachées (Faux). Par défaut, la grille est affichée. 

#### Voir aussi 

[LISTBOX SET GRID](listbox-set-grid.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1199 |
| Thread safe | &cross; |


