---
id: listbox-get-column-width
title: LISTBOX Get column width
slug: /commands/listbox-get-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column width.Syntax-->**LISTBOX Get column width** ( {* ;} *objet* {; *largeurMini* {; *largeurMaxi*}} )  -> Résultat<!-- END REF-->
<!--REF #_command_.LISTBOX Get column width.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#x1F852; | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | Objet de formulaire | &#x1F852; | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| largeurMini | Entier long | &#x1F858; | Largeur minimale de la colonne (en pixels) |
| largeurMaxi | Entier long | &#x1F858; | Largeur maximale de la colonne (en pixels) |
| Résultat | Entier long | &#x1F850; | Largeur de colonne en pixels |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get column width.Summary-->La commande **LISTBOX Get column width** retourne la largeur (en pixels) de la colonne de list box désignée par les paramètres *objet* et *\** .<!-- END REF--> Vous pouvez passer indifféremment une colonne ou un en-tête de colonne de list box dans le paramètre *objet*. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

**LISTBOX Get column width** peut retourner dans les paramètres *largeurMini* et *largeurMaxi* les limites de redimensionnement de la colonne. Ces limites peuvent être définies via la commande [LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md). Si aucune valeur de largeur minimale et/ou maximale n’a été fixée pour la colonne, le paramètre correspondant retourne 0.

#### Voir aussi 

[LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md)  