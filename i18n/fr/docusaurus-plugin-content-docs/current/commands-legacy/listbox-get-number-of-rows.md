---
id: listbox-get-number-of-rows
title: LISTBOX Get number of rows
slug: /commands/listbox-get-number-of-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of rows.Syntax-->**LISTBOX Get number of rows** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of rows.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Integer | &#8592; | Nombre de lignes |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get number of rows.Summary-->La commande **LISTBOX Get number of rows** retourne le nombre de lignes présentes dans la list box désignée par les paramètres *objet* et *\**.<!-- END REF-->

**Note :** **LISTBOX Get number of rows** ne tient pas compte du statut masqué/affiché des lignes. Par exemple, dans une list box contenant 10 lignes et dont les 9 premières sont masquées, **LISTBOX Get number of rows** retournera 10.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

**Note :** Si les tableaux associés aux colonnes d’un objet List box n'ont pas tous la même taille, seul le nombre d’éléments correspondant au plus petit tableau apparaît dans la list box et est retourné par cette commande. 

#### Voir aussi 

[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 915 |
| Thread safe | &check; |
| Interdite sur le serveur ||


