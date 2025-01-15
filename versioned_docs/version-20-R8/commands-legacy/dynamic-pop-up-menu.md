---
id: dynamic-pop-up-menu
title: Dynamic pop up menu
slug: /commands/dynamic-pop-up-menu
displayed_sidebar: docs
---

<!--REF #_command_.Dynamic pop up menu.Syntax-->**Dynamic pop up menu** ( *menu* {; *default* {; *xCoord* ; *yCoord*}} )  : Text<!-- END REF-->
<!--REF #_command_.Dynamic pop up menu.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | Menu reference |
| default | Text | &#8594;  | Parameter of item selected by default |
| xCoord | Integer | &#8594;  | X coordinate of top left corner |
| yCoord | Integer | &#8594;  | Y coordinate of top left corner |
| Function result | Text | &#8592; | Parameter of selected menu item |

<!-- END REF-->

#### Description 

<!--REF #_command_.Dynamic pop up menu.Summary-->The **Dynamic pop up menu** causes a hierarchical pop-up menu to appear at the current location of the mouse or at the location set by the optional *xCoord* and *yCoord* parameters.<!-- END REF-->

The hierarchical menu used must have been created using the [Create menu](create-menu.md) command. The reference returned by [Create menu](create-menu.md) must then be passed in the *menu* parameter.

**Note:** The [Pop up menu](pop-up-menu.md) command (“User Interface” theme) can be used to create pop-up menus based on text.

In conformity with standard interface rules, this command must generally be called in response to a right mouse click or when the button is held down a certain period of time (context menu for example).

The optional *default* parameter can be used to set an item of the popup menu as selected by default whenever the menu appears. In this parameter, pass a custom string associated with the menu item. This string must have been set beforehand using the [SET MENU ITEM PARAMETER](set-menu-item-parameter.md) command. If you do not pass this parameter, the first item of the menu will be selected by default.

**Note:** Only a top level menu item can be selected by default.

The optional *xCoord* and *yCoord* parameters can be used to specify the location of the pop-up menu to be displayed. In the *xCoord* and *yCoord* parameters, pass the horizontal and vertical coordinates, respectively, of the top left corner of the menu. These coordinates must be expressed in pixels in the local coordinate system of the current form. Both parameters must be passed together; if only one of them is passed, it will be ignored.

If you want to display a pop-up menu associated with a 3D button, then do not pass the optional *xCoord* and *yCoord* parameters. In this case, 4D automatically calculates the location of the menu with respect to the button according to the interface standards of the current platform (the 3D button must have the "With pop-up menu/Linked" or "With pop-up menu/Separated" property).

If a menu item has been selected, the command returns its associated custom character string (such as it has been defined using the [SET MENU ITEM PARAMETER](set-menu-item-parameter.md) command). Otherwise, the command returns an empty string. 

If a standard action is associated to a menu item, it is taken into account by the **Dynamic pop up menu** command at several levels:

* If an associated standard action is not enabled (i.e. it cannot be invoked) in the context of the pop up menu, the item is automatically hidden. You can know if an action is enabled using the [Action info](action-info.md) command.
* Items with a toggle associated action are automatically checked, unchecked or "mixed" depending on the selection.
* If the action title has been set to the item using the ak standard action title constant, the localized name is displayed in the menu.
* When the item is selected, the associated standard action is invoked (execution is asynchronous).

#### Example 

This code allows creating a hierarchical dynamic pop up menu built upon standard actions:

```4d
 var $refMainContextMenu;$refMenuEdit : Text
 $refMainContextMenu:=Create menu
 APPEND MENU ITEM($refMainContextMenu;"-")
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak select all)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak clear)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak copy)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak cut)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak paste)
 APPEND MENU ITEM($refMainContextMenu;"-")
  //sub menu text edit
 $refMenuEdit:=Create menu
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font bold)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("B"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font italic)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("I"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font linethrough)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("L"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font underline)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("U"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font show dialog)
 APPEND MENU ITEM($refMainContextMenu;"Edit";$refMenuEdit)
 
 paramRef:=Dynamic pop up menu($refMainContextMenu)
```

#### See also 

[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[Pop up menu](pop-up-menu.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  
[SET MENU ITEM PROPERTY](set-menu-item-property.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1006 |
| Thread safe | &cross; |


