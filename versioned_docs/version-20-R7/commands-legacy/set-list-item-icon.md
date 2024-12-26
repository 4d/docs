---
id: set-list-item-icon
title: SET LIST ITEM ICON
slug: /commands/set-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM ICON.Syntax-->**SET LIST ITEM ICON** ( {* ;} *list* ; itemRef | * ; *icon* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM ICON.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted) or Name of list type object (if * passed) |
| itemRef &#124; * | Longint, Operator | &#8594;  | Item reference number or 0 for the last item added to the list or * for the current item of the list |
| icon | Picture | &#8594;  | Icon to be associated with item |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET LIST ITEM ICON.Summary-->The **SET LIST ITEM ICON** command modifies the icon associated with the item specified by the *itemRef* parameter of the list whose reference number or object name is passed in *list*.<!-- END REF-->

**Note:** You can also modify the icon associated with an item using the [SET LIST ITEM PROPERTIES](set-list-item-properties.md) command. However, this command only accepts static picture references (resource references or pictures from the picture library).

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second *\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second *\** is passed), the syntax based on the object name is required since each representation can have its own current item.

You can pass a reference number in *itemRef*. If this number does not correspond to an item in the list, the command does nothing. You can also pass 0 in *itemRef* to indicate the last item added to the list (using [APPEND TO LIST](append-to-list.md)).

Lastly, you can pass *\** in *itemRef*: in this case, the command is applied to the current item of the list. If several items are selected manually, the current item is the last one that was selected. If no item is selected, the command does nothing.

Pass a valid 4D picture expression (field, variable, pointer, etc.) in the *icon* parameter. The picture will be placed to the left of the item. 

#### Example 

We want to assign the same picture to two different items. The following code is optimized since the picture is only loaded into memory once:

```4d
 var $picture : Picture
 READ PICTURE FILE("myPict.png";$picture)
 SET LIST ITEM ICON(mylist;ref1;$picture)
 SET LIST ITEM ICON(mylist;ref2;$picture)
```

#### See also 

[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 950 |
| Thread safe | &cross; |


