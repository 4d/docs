---
id: get-list-item
title: GET LIST ITEM
slug: /commands/get-list-item
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM.Syntax-->**GET LIST ITEM** ( {* ;} *list* ; itemPos | * ; *itemRef* ; *itemText* {; *sublist* ; *expanded*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted), or Name of list type object (if * passed) |
| itemPos &#124; * | Operator, Longint | &#8594;  | Position of item in expanded/collapsed list(s) or * for the current item in the list |
| itemRef | Integer | &#8592; | Item reference number |
| itemText | Text | &#8592; | Text of the list item |
| sublist | Integer | &#8592; | Sublist list reference number (if any) |
| expanded | Boolean | &#8592; | If a sublist is attached: TRUE = sublist is currently expanded FALSE = sublist is currently collapsed |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET LIST ITEM.Summary-->The **GET LIST ITEM** command returns information about the item specified by *itemPos* of the list whose reference number or object name is passed in *list*.<!-- END REF--> 

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list, you can use either syntax. Conversely, if you use several representations of the same list, the syntax based on the object name is required since each representation can have its own expanded/collapsed configuration and its own current item.

**Note:** If you use the @ character in the name of the list object and the form contains several lists that match with this name, the **GET LIST ITEM** command will only apply to the first object whose name corresponds. 

The position must be expressed relatively, using the current expanded/collapsed state of the list and its sublist. You pass a position value between 1 and the value returned by [Count list items](count-list-items.md). If you pass a value outside this range, **GET LIST ITEM** returns empty values (0, "", etc.).

After the call, you retrieve:

* The item reference number of the item in *itemRef*.
* The text of the item in *itemText*.

If you passed the optional parameters *sublist* and *expanded*:

* *subList* returns the list reference number of the sublist attached to the item. If the item has no sublist, *subList* returns zero (0).
* If the item has a sublist, *expanded* returns TRUE if the sublist is currently expanded, and FALSE if it is collapsed.

#### Example 1 

*hList* is a list whose items have unique reference numbers. The following code programmatically toggles the expanded/collapsed state of the sublist, if any, attached to the current selected item:

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbExpanded)
    If(Is a list($hSublist))
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;Not($vbExpanded))
    End if
 End if
```

#### Example 2 

Refer to the example of the [APPEND TO LIST](append-to-list.md) command.

#### See also 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[List item parent](list-item-parent.md)  
[List item position](list-item-position.md)  
[Selected list items](selected-list-items.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 378 |
| Thread safe | &cross; |


