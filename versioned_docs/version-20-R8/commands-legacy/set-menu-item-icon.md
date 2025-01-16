---
id: set-menu-item-icon
title: SET MENU ITEM ICON
slug: /commands/set-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM ICON.Syntax-->**SET MENU ITEM ICON** ( *menu* ; *menuItem* ; *iconRef* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM ICON.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu reference or Menu number |
| menuItem | Integer | &#8594;  | Number of menu item or -1 for the last item added to the menu |
| iconRef | Text, Integer | &#8594;  | Name or number of picture to be associated with menu item |
| process | Integer | &#8594;  | Process number |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM ICON.Summary-->The **SET MENU ITEM ICON** command modifies the icon associated with the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF-->  
You can pass -1 in *menuItem* in order to specify the last item added to *menu*.

In *menu*, you can pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) or a menu number. If you pass a menu reference, the command will apply to all the instances of the menu in all the processes. In this case, the *process* parameter is ignored if it is passed. If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional *process* parameter.

In *iconRef*, you can pass the picture to be used as the icon. You can use a a picture file reference or (binary databases only) a library picture.

* Picture file reference. Two patterns are supported:  
   * **path:<filesystem>** (*recommended*), for example "path:/RESOURCES/icon.png". For more information, refer to the *Filesystem pathnames* paragraph.  
   * **file:<relativePathname>** (*deprecated*), for example "file:icon.png". The picture must be located in the **Resources** folder of the database.
* Library picture (binary databases only): You can pass either the name or number of the picture. It is generally preferable to use its number rather than its name since picture numbers are unique IDs, which is not the case with names.

**Note:** Use of a picture file path is recommended since the Picture library is deprecated and is not supported in 4D project databases. In addition, the *file:<relativePathname>* pattern is deprecated, using *path:<filesystem>* pattern is recommended.

#### Example 

Use of a picture located in the Resources folder of the database:

```4d
 SET MENU ITEM ICON($MenuRef;2;"Path:/RESOURCES/english.lproj/spot.png")
```

#### See also 

[GET MENU ITEM ICON](get-menu-item-icon.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 984 |
| Thread safe | &cross; |


