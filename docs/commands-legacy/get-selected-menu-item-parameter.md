---
id: get-selected-menu-item-parameter
title: Get selected menu item parameter
slug: /commands/get-selected-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get selected menu item parameter.Syntax-->**Get selected menu item parameter**  -> Function result<!-- END REF-->
<!--REF #_command_.Get selected menu item parameter.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | String | &#8592; | Custom parameter of the menu item |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Get selected menu item parameter.Summary-->The **Get selected menu item parameter** command returns the custom character string associated with the selected menu item.<!-- END REF--> This parameter must have been set beforehand using the [SET MENU ITEM PARAMETER](set-menu-item-parameter.md) command.

If no menu item has been selected, the command returns an empty string "".

#### See also 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get menu item parameter](get-menu-item-parameter.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  