---
id: get-menu-item-icon
title: GET MENU ITEM ICON
slug: /commands/get-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM ICON.Syntax-->**GET MENU ITEM ICON** ( *menu* ; *menuItem* ; *iconRef* {; *process*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM ICON.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu reference or Menu number |
| menuItem | Integer | &#8594;  | Number of menu item or -1 for the last item added to the menu |
| iconRef | Text, Integer | &#8592; | Name or number of picture associated with menu item |
| process | Integer | &#8594;  | Process number |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MENU ITEM ICON.Summary-->The GET MENU ITEM ICON command returns, in the *iconRef* variable, the reference of any icon that is associated with the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF--> This reference is the pathname or number of the picture.

You can pass -1 in *menuItem* in order to specify the last item added to *menu*.

In *menu*, you can pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) or a menu number. If you pass a menu reference, the *process* parameter is unnecessary and will be ignored if it is passed. If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional *process* parameter.

* If the icon has been specified using a picture file, the command returns in *iconRef* the pathname using the **path:<filesystem path>** pattern.
* If the icon has been specified using a library picture (binary databases only), the command returns either the number or the name of the picture, depending on the type of variable passed in this parameter. The following pattern is used for a name: **pictlib:<name>**.  
If you do not attribute a specific type to the *iconRef* variable, by default, the name of the picture is returned (text type).

If no icon is associated with the menu item, the command returns a blank value.

#### See also 

[SET MENU ITEM ICON](set-menu-item-icon.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 983 |
| Thread safe | &cross; |


