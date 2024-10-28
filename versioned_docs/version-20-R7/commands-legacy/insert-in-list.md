---
id: insert-in-list
title: INSERT IN LIST
slug: /commands/insert-in-list
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN LIST.Syntax-->**INSERT IN LIST** ( {* ;} *list* ; beforeItemRef | * ; *itemText* ; *itemRef* {; *sublist* ; *expanded*} )<!-- END REF-->
<!--REF #_command_.INSERT IN LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted), or Name of list type object (if * passed) |
| beforeItemRef &#124; * | Longint, Operator | &#8594;  | Item reference number or 0 for the last item added to the list or * for the currently selected list item |
| itemText | Text | &#8594;  | Text for the new list item |
| itemRef | Integer | &#8594;  | Unique reference number for the new list item |
| sublist | Integer | &#8594;  | Optional sublist to attach to the new list item |
| expanded | Boolean | &#8594;  | Indicates if the sublist will be expanded or collapsed |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.INSERT IN LIST.Summary-->The INSERT IN LIST command inserts the item designated by the *itemRef* parameter in the list whose reference number or object name you pass in *list*.<!-- END REF-->

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second *\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second *\** is passed), the syntax based on the object name is required since each representation can have its own current item.

The *beforeItemRef* parameter can be used to designate the item before which you wish to insert the new item:

* You can pass the value 0 in order to designate the last item added to the list. The newly inserted item will then become the selected item.
* You can pass *\** in order for the new item to be inserted before the currently selected item in the list. In this case, the newly inserted item will also become the selected item.
* Otherwise, if you want to insert an item before a specific item, you pass the item reference number of that item. In this case, the newly inserted item is not automatically selected. If there is no item with the corresponding item reference number, the command does nothing.

You pass the text of the new item in *itemText*. Starting with 4D v16 R4, if the item is associated with a standard action, you can pass the ak standard action title constant in *itemText* to automatically use the localized action name. For more information, please refer to the *Standard actions* section.

You pass the item reference number of the new item in *itemRef*. Although we qualify this item reference number as unique, you can actually pass the value you want. Refer to the *Using item reference numbers (itemRef)* paragraph for more information about the *itemRef* parameter.

If you want for the item to include subitems, pass a valid list reference number in the *sublist* parameter. In this case, you must also pass the *expanded* parameter. Pass either **True** or **False** in this parameter so that this sublist is displayed either expanded or collapsed respectively. 

#### Example 

The following code inserts an item (with no attached sublist) just before the currently selected item in the *hList* list:

```4d
 vlUniqueRef:=vlUniqueRef+1
 INSERT IN LIST(hList;*;"New Item";vlUniqueRef)
```

#### See also 

[APPEND TO LIST](append-to-list.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  