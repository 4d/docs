---
id: listbox-moved-column-number
title: LISTBOX MOVED COLUMN NUMBER
slug: /commands/listbox-moved-column-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Syntax-->**LISTBOX MOVED COLUMN NUMBER** ( {* ;} *objet* ; *ancPosition* ; *nouvPosition* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| ancPosition | Integer | &#8592; | Ancienne position de la colonne déplacée |
| nouvPosition | Integer | &#8592; | Nouvelle position de la colonne déplacée |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Summary-->La commande **LISTBOX MOVED COLUMN NUMBER** retourne dans les paramètres *ancPosition* et *nouvPosition* des numéros indiquant respectivement la précédente position et la nouvelle position de la colonne déplacée dans la list box désignée par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

Cette commande doit être utilisée en combinaison avec l’événement formulaire On Column Moved (cf. commande [Form event code](../commands/form-event-code.md)). 

**Note :** Cette commande tient compte des colonnes invisibles.

#### Voir aussi 

[Form event code](../commands/form-event-code.md)  
[LISTBOX MOVED ROW NUMBER](listbox-moved-row-number.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 844 |
| Thread safe | &cross; |


