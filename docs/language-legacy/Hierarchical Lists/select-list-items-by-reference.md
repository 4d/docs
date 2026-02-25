---
id: select-list-items-by-reference
title: SELECT LIST ITEMS BY REFERENCE
slug: /commands/select-list-items-by-reference
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Syntax-->**SELECT LIST ITEMS BY REFERENCE** ( *list* : Integer ; *itemRef* : Integer {; *refArray* : Integer array} )<!-- END REF-->
<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | List reference number |
| itemRef | Integer | &#8594;  | Item reference number or 0 for the last item added to the list |
| refArray | Integer array | &#8594;  | Array of item reference numbers |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Summary-->The **SELECT LIST ITEMS BY REFERENCE** command selects the item(s) whose item reference number is passed in *itemRef* and, optionally, in *refArray*, within the list whose reference number is passed in *list*.<!-- END REF-->

If there is no item with the item reference number you passed, the command does nothing.

If an item is not currently visible (i.e., it is located in a collapsed sublist), the command expands the required sublist(s) so that it becomes visible.

If you do not pass the *refArray* parameter, the *itemRef* parameter represents the reference of the item to be selected. If the item number does not correspond to an item in the list, the command does nothing. You can also pass the value 0 in this parameter in order to designate the last item added to the list.

The optional *refArray* parameter lets you select several items simultaneously within the list. In *refArray*, you must pass an array where each line indicates the fixed reference of an item to be selected. 

In this case, the item designated by the *itemRef* parameter sets the new current item of the list among the resulting selection. It may or may not belong to the set of items defined by the array. The current item is, more particularly, the one that is edited if the [EDIT ITEM](../commands/edit-item) command is used. 

**Note:** In order for several items to be selected simultaneously in a hierarchical list (manually or by programming), the *multiSelections* property must have been enabled for this list. This property is set using the [SET LIST PROPERTIES](../commands/set-list-properties) command.

If you work with item reference numbers, be sure to build a list in which the items have unique reference numbers; otherwise you will not be able to distinguish them. For more information, see the description of the [APPEND TO LIST](../commands/append-to-list) command.

## Example 

*hList* is a list whose items have unique reference numbers. The following object method for a button selects the parent item (if any) of the currently selected item:

```4d
 $vlItemPos:=Selected list items(hList) // Get position of selected item
 GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText)
  // Get item ref number of selected item
 $vlParentItemRef:=List item parent(hList;$vlItemRef)
  // Get item ref. number of parent item (if any)
 If($vlParentItemRef>0)
    SELECT LIST ITEM BY REFERENCE(hList;List item parent(hList;$vlItemRef)) // Select the parent item
 End if
```

## See also 

[EDIT ITEM](../commands/edit-item)  
[SELECT LIST ITEMS BY POSITION](../commands/select-list-items-by-position)  
[Selected list items](../commands/selected-list-items)  

## Properties

|  |  |
| --- | --- |
| Command number | 630 |
| Thread safe | no |


