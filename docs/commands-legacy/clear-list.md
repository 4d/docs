---
id: clear-list
title: CLEAR LIST
slug: /commands/clear-list
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR LIST.Syntax-->**CLEAR LIST** ( *list* {; *} )<!-- END REF-->
<!--REF #_command_.CLEAR LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | List reference number |
| * | Operator |  &#8594;  | If specified, clear sublists from memory, if any. If omitted, sublists (if any) are not cleared. |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.CLEAR LIST.Summary-->The **CLEAR LIST** command deletes the hierarchical list whose list reference number you pass in *list*.<!-- END REF-->

Usually you will pass the optional *\** parameter, so all the sublists, if any, attached to items or subitems of the list will be deleted as well.

You do not need to clear a list attached to a form object via the Property List window. 4D loads and clears the list for you. On the other hand, each time you load, copy, extract from a BLOB, or create a list programmatically, call **CLEAR LIST** when you are through with the list.

To clear a sublist attached to an item (on any level) of another list currently displayed in a form, proceed as follows:

1. Call [GET LIST ITEM](get-list-item.md) on the parent item to get the list reference of the sublist.
2. Call [SET LIST ITEM](set-list-item.md) on the parent item to detach the sublist from the list item before clearing it.
3. Call **CLEAR LIST** to clear the sublist whose reference number you obtained with [GET LIST ITEM](get-list-item.md).

#### Example 1 

Within a clean-up routine that clears all objects and data that you no longer need (i.e., when a window is closed and a form unloaded), you may end up clearing a hierarchical list that may have already been cleared, depending on the user actions within the form. Use [Is a list](is-a-list.md) to clear the list only if necessary:

```4d
  // Extract of clean-up routine
 If(Is a list(hlList))
    CLEAR LIST(hlList;*)
 End if
```

#### Example 2 

See example for the [Load list](load-list.md) command.

#### Example 3 

See example for the [BLOB to list](blob-to-list.md) command.

#### See also 

[BLOB to list](blob-to-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  