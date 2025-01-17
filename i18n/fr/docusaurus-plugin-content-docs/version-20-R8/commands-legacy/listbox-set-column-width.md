---
id: listbox-set-column-width
title: LISTBOX SET COLUMN WIDTH
slug: /commands/listbox-set-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Syntax-->**LISTBOX SET COLUMN WIDTH** ( {* ;} *objet* ; *largeur* {; *largeurMini* {; *largeurMaxi*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| largeur | Integer | &#8594;  | Largeur de colonne (en pixels) |
| largeurMini | Integer | &#8594;  | Largeur minimale de colonne (en pixels) |
| largeurMaxi | Integer | &#8594;  | Largeur maximale de colonne (en pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Summary-->La commande **LISTBOX SET COLUMN WIDTH** permet de modifier par programmation la largeur d’une ou de toutes les colonne(s) de l’objet (list box, colonne ou en-tête) désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

Passez dans le paramètre *largeur* la nouvelle largeur (en pixels) de l’objet. 

* Si *objet* désigne l’objet list box, toutes les colonnes de la list box sont redimensionnées.
* Si *objet* désigne une colonne ou un en-tête de colonne, seule la colonne désignée est redimensionnée.

Les paramètres optionnels *largeurMini* et *largeurMaxi* permettent de fixer des limites au redimensionnement manuel de la colonne. Vous pouvez passer dans *largeurMini* et *largeurMaxi* respectivement des valeurs de largeur minimale et maximale, exprimées en pixels. Si vous souhaitez que l’utilisateur ne puisse pas redimensionner la colonne, il suffit de passer la même valeur dans *largeur*, *largeurMini* et *largeurMaxi*.

#### Voir aussi 

[LISTBOX Get column width](listbox-get-column-width.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 833 |
| Thread safe | &cross; |


