---
id: listbox-get-footer-calculation
title: LISTBOX Get footer calculation
slug: /commands/listbox-get-footer-calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footer calculation.Syntax-->**LISTBOX Get footer calculation** ( {* ;} *objet* ) -> Résultat<!-- END REF-->
<!--REF #_command_.LISTBOX Get footer calculation.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#x1F852; | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#x1F852; | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Integer | &#x1F850; | Type de calcul |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get footer calculation.Summary-->La commande **LISTBOX Get footer calculation** retourne le type de calcul associé à la zone de pied de list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable.

Le paramètre *objet* peut désigner :

* la variable ou le nom d’une zone de pied. Dans ce cas, la commande retourne le calcul associé à cette zone.
* la variable ou le nom d’une colonne de list box. Dans ce cas, la commande retourne le calcul associé à la zone de pied de cette colonne.

Vous pouvez comparer la valeur retournée aux constantes du thème *List box pied calcul* (cf. commande [LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)). 

#### Voir aussi 

[LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)  