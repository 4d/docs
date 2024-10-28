---
id: listbox-set-grid-color
title: LISTBOX SET GRID COLOR
slug: /commands/listbox-set-grid-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID COLOR.Syntax-->**LISTBOX SET GRID COLOR** ( {* ;} *objet* ; *couleur* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID COLOR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| couleur | Text, Integer | &#8594;  | Valeur de couleur RVB |
| horizontal | Boolean | &#8594;  | Utiliser la couleur pour les traits horizontaux |
| vertical | Boolean | &#8594;  | Utiliser la couleur pour les traits verticaux |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX SET GRID COLOR.Summary-->La commande **LISTBOX SET GRID COLOR** permet de modifier la couleur de la grille de l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

Passez dans le paramètre *couleur* une valeur de couleur RVB. Pour plus d’informations sur les couleurs RVB, reportez-vous à la description de la commande [OBJECT SET RGB COLORS](object-set-rgb-colors.md). 

Les paramètres *horizontal* et *vertical* vous permettent de spécifier les traits auxquels la couleur doit être appliquée :

* si vous passez **Vrai** dans *horizontal*, la couleur sera appliquée aux traits horizontaux de la grille. Si vous passez **Faux**, leur couleur ne sera pas modifiée.
* si vous passez **Vrai** dans *vertical*, la couleur sera appliquée aux traits verticaux de la grille. Si vous passez **Faux**, leur couleur ne sera pas modifiée.

#### Voir aussi 

[LISTBOX GET GRID COLORS](listbox-get-grid-colors.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  