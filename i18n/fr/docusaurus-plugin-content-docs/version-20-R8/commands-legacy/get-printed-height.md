---
id: get-printed-height
title: Get printed height
slug: /commands/get-printed-height
displayed_sidebar: docs
---

<!--REF #_command_.Get printed height.Syntax-->**Get printed height**  : Integer<!-- END REF-->
<!--REF #_command_.Get printed height.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Position du marqueur |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get printed height.Summary-->La commande **Get printed height** retourne la hauteur globale (en pixels) de la section imprimée par la commande [Print form](../commands/print-form.md).<!-- END REF-->

La valeur retournée sera comprise entre 0 (le bord supérieur de la page) et la hauteur globale retournée par la commande [GET PRINTABLE AREA](get-printable-area.md) (la taille maximum de la zone d’impression).

Si vous imprimez une nouvelle section via la commande [Print form](../commands/print-form.md), la hauteur de cette section est ajoutée à cette valeur. Si la zone d’impression disponible est insuffisante pour contenir cette section, une nouvelle page est générée et la valeur retournée est 0.

Les marges d’impression gauche et droite n’influent pas sur la valeur retournée, à la différence des marges inférieure et supérieure (définies éventuellement via la commande [SET PRINTABLE MARGIN](set-printable-margin.md)).

#### Voir aussi 

[GET PRINTABLE AREA](get-printable-area.md)  
[Print form](../commands/print-form.md)  
[SET PRINTABLE MARGIN](set-printable-margin.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 702 |
| Thread safe | &cross; |


