---
id: get-list-item-icon
title: GET LIST ITEM ICON
slug: /commands/get-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM ICON.Syntax-->**GET LIST ITEM ICON** ( {* ;} *list* ; itemRef | * ; *icon* )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM ICON.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted) or Name of list type object (if * passed) |
| itemRef &#124; * | Operator, Integer | &#8594;  | Item reference number or 0 for the last item added to the list or * for the current item of the list |
| icon | Picture | &#8592; | Icon associated with item |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET LIST ITEM ICON.Summary-->The **GET LIST ITEM ICON** command returns, in *icon*, the icon associated with the item whose reference number is passed in *itemRef* in the list whose reference number or object name is passed in *list*.<!-- END REF-->  
  
If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second *\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second *\** is passed), the syntax based on the object name is required since each representation can have its own current item.

**Note:** If you use the @ character in the object name of the list and the form contains several lists that match this name, the **GET LIST ITEM ICON** command will be applied to the first object whose name corresponds.

You can pass a reference number in *itemRef*. If this number does not correspond to an item in the list, the command does nothing. You can also pass 0 in *itemRef* to indicate the last item added to the list (using [APPEND TO LIST](append-to-list.md)).   
Lastly, you can pass *\** in *itemRef:* in this case, the command will apply to the current item of the list. If several items are selected manually, the current item is the one that was selected last. If no item is selected, the command does nothing.

Pass a picture variable in *icon*. After the command is executed, it will contain the icon associated with the item, regardless of the source of the icon (static picture, resource or picture expression). 

If no icon is associated with the item, the icon variable is returned empty.

**Note:** When the icon associated with an item has been defined via a static reference (resource references or pictures from the picture library), it is possible to find out its number using the [GET LIST ITEM PROPERTIES](get-list-item-properties.md) command*.*

#### See also 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 951 |
| Thread safe | &cross; |


