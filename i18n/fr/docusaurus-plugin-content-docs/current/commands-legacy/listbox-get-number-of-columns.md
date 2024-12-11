---
id: listbox-get-number-of-columns
title: LISTBOX Get number of columns
slug: /commands/listbox-get-number-of-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of columns.Syntax-->**LISTBOX Get number of columns** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of columns.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Integer | &#8592; | Nombre de colonnes |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get number of columns.Summary-->La commande **LISTBOX Get number of columns** retourne le nombre total de colonnes (visibles ou non) présentes dans la list box désignée par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

#### Voir aussi 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 831 |
| Thread safe | &check; |
| Interdite sur le serveur ||


