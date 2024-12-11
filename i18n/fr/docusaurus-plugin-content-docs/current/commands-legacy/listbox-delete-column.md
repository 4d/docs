---
id: listbox-delete-column
title: LISTBOX DELETE COLUMN
slug: /commands/listbox-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE COLUMN.Syntax-->**LISTBOX DELETE COLUMN** ( {* ;} *objet* ; *positionCol* {; *nombre*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE COLUMN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| positionCol | Integer | &#8594;  | Numéro courant de la colonne à supprimer |
| nombre | Integer | &#8594;  | Nombre de colonnes à supprimer |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX DELETE COLUMN.Summary-->La commande **LISTBOX DELETE COLUMN** supprime une ou plusieurs colonne(s) (visibles ou non) dans la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

**Note :** Cette commande ne fait rien si elle est appliquée à la première colonne d’une list box affichée en mode hiérarchique. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

Si vous ne passez pas le paramètre facultatif *nombre*, la commande supprime simplement la colonne désignée par le paramètre *positionCol*.   
Sinon, le paramètre *nombre* indique le nombre de colonnes à supprimer vers la droite à partir de la colonne *positionCol* (celle-ci incluse). 

Si le paramètre *positionCol* est supérieur au nombre de colonnes de la list box, la commande ne fait rien.

#### Voir aussi 

[LISTBOX Get number of columns](listbox-get-number-of-columns.md)  
[LISTBOX INSERT COLUMN](listbox-insert-column.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 830 |
| Thread safe | &check; |
| Interdite sur le serveur ||


