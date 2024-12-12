---
id: set-list-item
title: SET LIST ITEM
slug: /commands/set-list-item
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM.Syntax-->**SET LIST ITEM** ( {* ;} *list* ; itemRef | * ; *newItemText* ; *newItemRef* {; *sublist* ; *expanded*} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted), or Name of list type object (if * passed) |
| itemRef &#124; * | Operator, Longint | &#8594;  | Item reference number, or 0 for last item appended to the list, or * for the current item in the list |
| newItemText | Text | &#8594;  | New item text |
| newItemRef | Integer | &#8594;  | New item reference number |
| sublist | Integer | &#8594;  | New sublist attached to item, or 0 for no sublist (detaching current one, if any), or -1 for no change |
| expanded | Boolean | &#8594;  | Indicates if the optional sublist will be expanded or collapsed |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET LIST ITEM.Summary-->The **SET LIST ITEM** command modifies the item designated by the *itemRef* parameter within the list whose reference number or object name is passed in *list*.<!-- END REF--> 

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second *\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second *\** is passed), the syntax based on the object name is required since each representation can have its own current item.

You can pass a reference number in *itemRef*. If there is no item with the item reference number you passed, the command does nothing. You can optionally pass *0* in *itemRef* to designate the last item added to the list using [APPEND TO LIST](append-to-list.md).

Lastly, you can pass *\** in *itemRef*: in this case, the command will apply to the current item of the list. If several items are selected manually, the current item is the one that was selected last. If no item is selected, the command does nothing.

If you work with item reference numbers, build a list in which the items have unique reference numbers, otherwise you will not be able to distinguish the items. For more information, refer to the *Managing Hierarchical Lists* section.

You pass the new text for the item in *newItemText*. To change the item reference number, pass the new value in *newItemRef*; otherwise, pass the same value as *itemRef*.

To attach a list to the item, pass the list reference number in *subList*. In this case, you also specify if the newly sublist is expanded by passing TRUE in *expanded*; otherwise, pass FALSE.

To detach a sublist already attached to the item, pass *0* (zero) in *sublist*. In this case, it is a good idea to have previously obtained the reference number of that list using [APPEND TO LIST](append-to-list.md), so you can later delete the sublist using [CLEAR LIST](clear-list.md), if you no longer need it.

If you do not want to change the sublist property of the item, pass *\-1* in *sublist*.

**Note:** Even if they are optional, both the *sublist* and *expanded* parameters must be passed jointly.

#### Example 1 

*hList* is a list whose items have unique reference numbers. The following object method for a button adds a child item to the current selected list item.

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbExpanded)
    $vbNewSubList:=Not(Is a list($hSublist))
    If($vbNewSubList)
       $hSublist:=New list
    End if
    vlUniqueRef:=vlUniqueRef+1
    APPEND TO LIST($hSubList;"New Item";vlUniqueRef)
    If($vbNewSubList)
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;True)
    End if
    SELECT LIST ITEMS BY REFERENCE(hList;vlUniqueRef)
 End if
```

#### Example 2 

See example for the [GET LIST ITEM](get-list-item.md) command.

#### Example 3 

See example for the [APPEND TO LIST](append-to-list.md) command.

#### See also 

[GET LIST ITEM](get-list-item.md)  
[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 385 |
| Thread safe | &cross; |


