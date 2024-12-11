---
id: listbox-set-locked-columns
title: LISTBOX SET LOCKED COLUMNS
slug: /commands/listbox-set-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Syntax-->**LISTBOX SET LOCKED COLUMNS** ( {* ;} *objet* ; *nbColonnes* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| nbColonnes | Integer | &#8594;  | Nombre de colonnes à verrouiller |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Summary-->La commande **LISTBOX SET LOCKED COLUMNS** permet de verrouiller les *nbColonnes* premières colonnes gauches de la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Les colonnes verrouillées restent affichées dans la partie gauche de la list box, elles ne défilent pas avec le reste de la list box. Pour plus d’informations, reportez-vous au manuel *Mode Développement*.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable.

Vous pouvez passer dans *nbColonnes* toute valeur comprise entre 1 et le nombre total de colonnes de la list box -1\. Pour une list box ayant N colonnes, si vous passez dans *nbColonnes* une valeur > N-1, elle sera automatiquement réduite à la valeur N-1.

Si vous passez 0 ou une valeur négative dans *nbColonnes*, le verrouillage des colonnes est supprimé. 

#### Voir aussi 

[LISTBOX Get locked columns](listbox-get-locked-columns.md)  
[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1151 |
| Thread safe | &check; |
| Interdite sur le serveur ||


