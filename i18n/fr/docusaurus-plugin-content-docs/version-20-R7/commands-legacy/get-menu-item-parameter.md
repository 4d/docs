---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* ; *ligneMenu* ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| Résultat | Text | &#8592; | Paramètre personnalisé de la ligne de menu |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get menu item parameter.Summary-->La commande **Get menu item parameter** retourne la chaîne de caractères personnalisée associée à la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF--> Cette chaîne doit avoir été préalablement définie à l’aide de la commande [SET MENU ITEM PARAMETER](set-menu-item-parameter.md).

#### Voir aussi 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  