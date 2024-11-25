---
id: list-item-position
title: List item position
slug: /commands/list-item-position
displayed_sidebar: docs
---

<!--REF #_command_.List item position.Syntax-->**List item position** ( {* ;} *list* ; *itemRef* ) : Integer<!-- END REF-->
<!--REF #_command_.List item position.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted), or Name of list type object (if * passed) |
| itemRef | Integer | &#8594;  | Item reference number |
| Function result | Integer | &#8592; | Item position in expanded/collapsed lists |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.List item position.Summary-->The **List item position** command returns the position of the item whose item reference number is passed in *itemRef*, within the list whose list reference number or object name is passed in *list*.<!-- END REF--> 

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list, you can use either syntax. Conversely, if you use several representations of the same list, the syntax based on the object name is required since each representation can have its own expanded/collapsed configuration.

**Note:** If you use the @ character in the object name of the list and the form contains several lists matching this name, the **List item position** command will be applied to the first object whose name corresponds. 

**Note:** Unlike the other commands of this theme, with this command it is not possible to pass the value 0 in *itemRef* to designate the last item added. 

The position is expressed relative to the top item of the main list, using the current expanded/collapsed state of the list and its sublist. 

The result is therefore a number between 1 and the value returned by [Count list items](count-list-items.md). 

If the item is not visible because it is located in a collapsed list, **List item position** expands the appropriate list to make the item visible. 

If the item does not exist, **List item position** returns 0.

#### See also 

[Count list items](count-list-items.md)  
[SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md)  