---
id: listbox-delete-rows
title: LISTBOX DELETE ROWS
slug: /commands/listbox-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE ROWS.Syntax-->**LISTBOX DELETE ROWS** ( {* ;} *objet* ; *positionLigne* {; *nbLignes*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE ROWS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| positionLigne | Integer | &#8594;  | Numéro de la première ligne à supprimer |
| nbLignes | Integer | &#8594;  | Nombre de lignes à supprimer |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX DELETE ROWS.Summary-->La commande **LISTBOX DELETE ROWS** supprime une ou plusieurs ligne(s) à partir de la ligne numéro *positionLigne* (visible ou non) de la list box désignée par les paramètres *objet* et *\**.<!-- END REF-->

**Note :** Cette commande fonctionne uniquement avec les list box basées sur des tableaux. Lorsque cette commande est utilisée avec une list box basée sur des sélections, elle ne fait rien et la variable système OK retourne 0.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

La ligne *positionLigne* est supprimée automatiquement de tous les tableaux composant la list box.   
Notez qu’après l’exécution de la commande, il n’y a plus d’élément sélectionné dans la list box. 

Si le paramètre *positionLigne* est supérieur au nombre de lignes des tableaux de la list box ou s'il est inférieur à 1, la commande ne fait rien. 

**Note :** Cette commande ne tient pas compte de l'éventuel statut masqué/affiché des lignes de la list box. 

#### Voir aussi 

[LISTBOX Get number of rows](listbox-get-number-of-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  