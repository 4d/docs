---
id: listbox-get-static-columns
title: LISTBOX Get static columns
slug: /commands/listbox-get-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get static columns.Syntax-->**LISTBOX Get static columns** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get static columns.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| Résultat | Integer | &#8592; | Nombre de colonnes statiques |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX Get static columns.Summary-->La commande **LISTBOX Get static columns** retourne le nombre de colonnes statiques dans la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable.

Les colonnes statiques peuvent avoir été définies via la Liste des propriétés ou à l’aide de la commande [LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md). 

Si une colonne a été insérée ou supprimée par programmation à l’intérieur d’un ensemble de colonnes statiques, le nombre de colonnes retourné par cette commande tient compte de cette modification. En revanche, la commande ne tient pas compte du statut visible/invisible des colonnes.

**Note :** Les colonnes statiques et les colonnes verrouillées sont deux fonctionnalités indépendantes. Pour plus d’informations, reportez-vous au manuel *Mode Développement*. 

#### Voir aussi 

[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  