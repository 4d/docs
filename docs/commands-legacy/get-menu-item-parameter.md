---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* ; *menuItem* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Longint, MenuRef | &#x1F852; | Menu reference or Menu number |
| menuItem | Longint | &#x1F852; | Number of menu item or -1 for the last item added to the menu |
| Function result | String | &#x1F850; | Custom parameter of the menu item |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item parameter.Summary-->The **Get menu item parameter** command returns the custom character string associated with the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF--> This string must have been set beforehand using the [SET MENU ITEM PARAMETER](set-menu-item-parameter.md) command.

#### See also 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  