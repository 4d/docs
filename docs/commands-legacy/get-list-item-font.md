---
id: get-list-item-font
title: Get list item font
slug: /commands/get-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.Get list item font.Syntax-->**Get list item font** ( {* ;} *list* ; itemRef | * ) : Text<!-- END REF-->
<!--REF #_command_.Get list item font.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted) or Name of list type object (if * passed) |
| itemRef &#124; * | Longint, Operator | &#8594;  | Item reference number or 0 for the last item added to the list or * for the current item of the list |
| Function result | Text | &#8592; | Font name |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Get list item font.Summary-->The **Get list item font** command returns the current character font name of the item specified by the *itemRef* parameter of the list whose reference number or object name is passed in *list*.<!-- END REF-->

If you pass the first optional \* parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second \* is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second \* is passed), the syntax based on the object name is required since each representation can have its own current item.

**Note:** If you use the @ character in the object name of the list and the form contains several lists that match this name, the **Get list item font** command will be applied to the first object whose name corresponds.

You can pass a reference number in *itemRef*. If this number does not correspond to any item of the list, the command does nothing. You can also pass 0 in *itemRef* in order to get the font of the last item added to the list (using [APPEND TO LIST](append-to-list.md)).

Lastly, you can pass \* in *itemRef*: in this case, the command will get the font of the current item of the list. If several items are selected manually, the current item is the one that was selected last. If no item is selected, the command does nothing.

#### See also 

[SET LIST ITEM FONT](set-list-item-font.md)  