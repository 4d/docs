---
id: get-selected-menu-item-parameter
title: Get selected menu item parameter
slug: /commands/get-selected-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get selected menu item parameter.Syntax-->**Get selected menu item parameter**  : Text<!-- END REF-->
<!--REF #_command_.Get selected menu item parameter.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Paramètre personnalisé de la ligne de menu |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get selected menu item parameter.Summary-->La commande **Get selected menu item parameter** retourne la chaîne de caractères personnalisée associée à la ligne de menu sélectionnée.<!-- END REF--> Ce paramètre doit avoir été préalablement défini à l’aide de la commande [SET MENU ITEM PARAMETER](set-menu-item-parameter.md).  
Si aucune ligne de menu n’a été sélectionnée, la commande retourne une chaîne vide "".

#### Voir aussi 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get menu item parameter](get-menu-item-parameter.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  