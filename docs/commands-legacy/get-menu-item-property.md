---
id: get-menu-item-property
title: GET MENU ITEM PROPERTY
slug: /commands/get-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM PROPERTY.Syntax-->**GET MENU ITEM PROPERTY** ( *menu* ; *menuItem* ; *property* ; *value* {; *process*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM PROPERTY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Menu reference or Menu number |
| menuItem | Integer | &#8594;  | Number of menu item or -1 for the last item added to the menu |
| property | Text | &#8594;  | Property type |
| value | any | &#8592; | Property value |
| process | Integer | &#8594;  | Process number |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MENU ITEM PROPERTY.Summary-->The **GET MENU ITEM PROPERTY** command returns, in the *value* parameter, the current value of the property of the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF-->

You can pass -1 in *menuItem* in order to specify the last item added to *menu*.

In *menu*, you can pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) or a menu number. If you pass a menu reference, the *process* parameter is unnecessary and will be ignored if it is passed. If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional *process* parameter.

In the *property* parameter, pass the property for which you want to get the value. You can use one of the constants of the “*Menu Item Properties*” theme or a string corresponding to a custom property. For more information about menu properties and their values, please refer to the description of the [SET MENU ITEM PROPERTY](set-menu-item-property.md) command.

**Compatibility Note:** By default, if the *value* variable is not explicitely typed or is declared as text, the command will return a *Standard Action* name. If you want to get a numeric value as defined in the (deprecated) *Value for Associated Standard Action* constant theme, you need to declare the *value* variable as longint. 

#### See also 

[SET MENU ITEM PROPERTY](set-menu-item-property.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 972 |
| Thread safe | &check; |
| Forbidden on the server ||


