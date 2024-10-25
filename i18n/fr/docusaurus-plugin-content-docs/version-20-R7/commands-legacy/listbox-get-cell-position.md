---
id: listbox-get-cell-position
title: LISTBOX GET CELL POSITION
slug: /commands/listbox-get-cell-position
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET CELL POSITION.Syntax-->**LISTBOX GET CELL POSITION** ( {* ;} *objet* {; *x* ; *y* }; *colonne* ; *ligne* {; *varCol*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET CELL POSITION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| x | Real | &#8594;  | Coordonnée horizontale de la souris |
| y | Real | &#8594;  | Coordonnée verticale de la souris |
| colonne | Integer | &#8592; | Numéro de colonne |
| ligne | Integer | &#8592; | Numéro de ligne |
| varCol | Pointer | &#8592; | Pointeur sur la variable de colonne |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX GET CELL POSITION.Summary-->La commande **LISTBOX GET CELL POSITION** retourne les numéros de la *colonne* et de la *ligne* correspondant à l’emplacement du dernier clic ou de la dernière action de sélection effectuée dans la list box désignée par *\** et objet.<!-- END REF-->   
La commande retourne les coordonnées du clic ou de l'action de sélection même lorsque la saisie n'est pas autorisée dans la list box. 

**Note :** Le numéro retourné dans le paramètre *ligne* ne tient pas compte de l'éventuel statut masqué/affiché des lignes de la list box. 

Si vous passez le paramètre facultatif *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. 

Le paramètre facultatif *varCol* retourne un pointeur sur la variable (c’est-à-dire le tableau) associée à la colonne. 

Cette commande peut être appelée uniquement dans le cadre d’une list box générant l’un des événements formulaire suivants :

* On Clicked et On Double Clicked
* On Before Keystroke et On After Keystroke
* On After Edit
* On Getting Focus et On Losing Focus
* On Data Change
* On Selection Change
* On Before Data Entry

Lorsqu’elle est appelée en dehors de ce contexte, **LISTBOX GET CELL POSITION** retourne 0 dans *colonne* et *ligne*. 

Cette commande tient compte des actions de sélection ou de désélection effectuées via la souris, les touches du clavier et la commande [EDIT ITEM](edit-item.md) (qui génère l’événement On Getting Focus).

Si la sélection est modifiée via les touches fléchées du clavier, *colonne* retourne 0\. Dans ce cas, s’il est passé, le paramètre *varCol* retourne [Is nil pointer](is-nil-pointer.md). 

Les valeurs retournées par la commande ne sont pas mises à jour dans le cas d’un clic droit (ou Control+clic sous Mac OS) sur l’en-tête d’une colonne de la list box.

#### Voir aussi 

[LISTBOX GET CELL COORDINATES](listbox-get-cell-coordinates.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  