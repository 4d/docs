---
id: listbox-get-hierarchy
title: LISTBOX GET HIERARCHY
slug: /commands/listbox-get-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET HIERARCHY.Syntax-->**LISTBOX GET HIERARCHY** ( {* ;} *objet* ; *hiérarchique* {; *hiérarchie*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET HIERARCHY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| hiérarchique | Boolean | &#8592; | Vrai = list box hiérarchique, Faux = list box non hiérarchique |
| hiérarchie | Pointer array | &#8592; | Tableau de pointeurs |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET HIERARCHY.Summary-->La commande **LISTBOX GET HIERARCHY** vous permet de connaître les propriétés hiérarchiques de l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre objet est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Le paramètre booléen *hiérarchique* indique si list box est en mode hiérarchique ou non :

* si le paramètre retourne Vrai, la list box est en mode hiérarchique,
* si le paramètre retourne Faux, la list box est affichée en mode non hiérarchique (mode tableau standard).

Si la list box est en mode hiérarchique, la commande remplit le tableau *hiérarchie* avec des pointeurs vers les tableaux de la list box utilisés pour définir la hiérarchie.

**Note :** Si la list box est en mode non hiérarchique, la commande retourne dans le premier élément du tableau *hiérarchie* un pointeur vers le tableau de la première colonne de la list box.

#### Voir aussi 

[LISTBOX SET HIERARCHY](listbox-set-hierarchy.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1099 |
| Thread safe | &cross; |


