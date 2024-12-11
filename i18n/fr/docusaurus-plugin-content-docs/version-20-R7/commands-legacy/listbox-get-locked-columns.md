---
id: listbox-get-locked-columns
title: LISTBOX Get locked columns
slug: /commands/listbox-get-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get locked columns.Syntax-->**LISTBOX Get locked columns** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get locked columns.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| Résultat | Integer | &#8592; | Nombre de colonnes verrouillées |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get locked columns.Summary-->La commande **LISTBOX Get locked columns** retourne le nombre de colonnes verrouillées dans la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable.

Les colonnes peuvent avoir été verrouillées via la Liste des propriétés ou à l’aide de la commande [LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md). Pour plus d’informations, reportez-vous au manuel *Mode Développement*.

Si une colonne a été insérée ou supprimée par programmation à l’intérieur de la zone de verrouillage, le nombre de colonnes retourné par cette commande tient compte de cette modification. Par exemple, si vous supprimez une colonne verrouillée, le nombre de colonnes verrouillées sera diminué de 1\. De même, si une colonne est insérée par programmation dans la zone de verrouillage, elle est automatiquement verrouillée et le nombre de colonnes verrouillées sera augmenté de 1\. 

En revanche, la commande ne tient pas compte du statut visible/invisible des colonnes.

#### Voir aussi 

[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1152 |
| Thread safe | &check; |
| Interdite sur le serveur ||


