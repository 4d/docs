---
id: delete-from-list
title: DELETE FROM LIST
slug: /commands/delete-from-list
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM LIST.Syntax-->**DELETE FROM LIST** ( {* ;} *list* ; itemRef | * {; *} )<!-- END REF-->
<!--REF #_command_.DELETE FROM LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted), or Name of list type object (if * passed) |
| itemRef &#124; * | Longint, Operator | &#8594;  | Item reference number, or 0 for the last item added to the list or * for the currently selected list item |
| * | Operator |  &#8594;  | If specified, erases sublists (if any) from memory If omitted, sublists (if any) are not erased |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE FROM LIST.Summary-->The **DELETE FROM LIST** command deletes the item designated by the *itemRef* parameter of the list whose reference number or object name is passed in *list*.<!-- END REF-->

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second *\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second *\** is passed), the syntax based on the object name is required since each representation can have its own current item.

If you pass *\** in *itemRef*, you delete the currently selected item in the list. You can also pass 0 in this parameter in order to request the deletion of the last item added to the list.

Otherwise, you specify the item reference number of the item you want to delete. If there is no item with the item reference number you passed, the command does nothing.

If you work with item reference numbers, build a list in which the items have unique reference numbers, otherwise you will not be able to distinguish the items. For more information, see the description of the [APPEND TO LIST](append-to-list.md) command.

No matter which item you delete, you should specify the optional *\** parameter to let 4D automatically delete the sublist attached to the item, if any. If you do not specify the *\** parameter, it is a good idea to have previously obtained the list reference number of the sublist (if any) attached to the item, so that you can delete it, if necessary, using the [CLEAR LIST](clear-list.md) command.

#### Example 

The following code deletes the currently selected item of the list *hList*. If the item has an attached sublist, the sublist (as well as any sub-sublist) is deleted:

```4d
 DELETE FROM LIST(hList;*;*)
```

#### See also 

[CLEAR LIST](clear-list.md)  
[GET LIST ITEM](get-list-item.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 624 |
| Thread safe | &cross; |


