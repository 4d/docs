---
id: listbox-get-column-formula
title: LISTBOX Get column formula
slug: /commands/listbox-get-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column formula.Syntax-->**LISTBOX Get column formula** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get column formula.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| Résultat | Text | &#8592; | Formule associée à la colonne |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get column formula.Summary-->La commande **LISTBOX Get column formula** retourne la formule associée à la colonne de list box désignée par les paramètres *objet* et *\**.<!-- END REF--> Les formules ne peuvent être utilisées que lorsque la propriété “Source de données” de la list box est **Sélection courante**, **Sélection temporaire** ou **Collection ou entity selection**. Si aucune formule n’est associée à la colonne, la commande retourne une chaîne vide. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Ce paramètre doit désigner une colonne de la listbox.

#### Voir aussi 

[LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1202 |
| Thread safe | &cross; |


