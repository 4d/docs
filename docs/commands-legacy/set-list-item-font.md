---
id: set-list-item-font
title: SET LIST ITEM FONT
slug: /commands/set-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM FONT.Syntax-->**SET LIST ITEM FONT** ( {* ;} *list* ; itemRef | * ; *font* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM FONT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted) or Name of list type object (if * passed) |
| itemRef &#124; * | Longint, Operator | &#8594;  | Item reference number or 0 for the last item added to the list or * for the current item of the list |
| font | Text, Integer | &#8594;  | Font name or number |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET LIST ITEM FONT.Summary-->The **SET LIST ITEM FONT** command modifies the character font of the item specified by the *itemRef* parameter of the list whose reference number or object name is passed in *list*.<!-- END REF-->

If you pass the first optional \* parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second \* is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second \* is passed), the syntax based on the object name is required since each representation can have its own current item. 

You can pass a reference number in *itemRef*. If this number does not correspond to any item of the list, the command does nothing. You can also pass 0 in *itemRef* in order to request the modification of the last item added to the list (using [APPEND TO LIST](append-to-list.md)).

Lastly, you can pass \* in *itemRef*: in this case, the command will apply to the current item of the list. If several items are selected manually, the current item is the one that was selected last. If no item is selected, the command does nothing.

In the *font* parameter, pass the name or number of the font to be used. To reapply the default font of the hierarchical list, pass an empty string in *font*.

#### Example 

Apply the Times font to the current item of the list:

```4d
 SET LIST ITEM FONT(*;"Mylist";*;"Times")
```

#### See also 

[Get list item font](get-list-item-font.md)  
[OBJECT SET FONT](object-set-font.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 953 |
| Thread safe | &check; |
| Forbidden on the server ||


