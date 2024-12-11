---
id: listbox-set-grid
title: LISTBOX SET GRID
slug: /commands/listbox-set-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID.Syntax-->**LISTBOX SET GRID** ( {* ;} *objet* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| horizontal | Boolean | &#8594;  | Vrai=montrer, Faux=cacher |
| vertical | Boolean | &#8594;  | Vrai=montrer, Faux=cacher |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET GRID.Summary-->La commande **LISTBOX SET GRID** permet d’afficher ou de masquer les traits horizontaux et/ou verticaux composant la grille de l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

Passez dans les paramètres *horizontal* et *vertical* des valeurs booléennes indiquant si les traits correspondants doivent être affichés (Vrai) ou cachés (Faux). Par défaut, la grille est affichée. 

#### Voir aussi 

[LISTBOX GET GRID](listbox-get-grid.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 841 |
| Thread safe | &check; |
| Interdite sur le serveur ||


