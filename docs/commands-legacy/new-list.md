---
id: new-list
title: New list
slug: /commands/new-list
displayed_sidebar: docs
---

<!--REF #_command_.New list.Syntax-->**New list**  : Integer<!-- END REF-->
<!--REF #_command_.New list.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | List reference number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.New list.Summary-->**New list** creates a new, empty hierarchical list in memory and returns its unique list reference number.<!-- END REF-->

**WARNING:** Hierarchical lists are held in memory. When you are finished with a hierarchical list, it is important to dispose of it and free the memory, using the command [CLEAR LIST](clear-list.md).

Several other commands allow you to create hierarchical lists:

* [Copy list](copy-list.md) duplicates a list from an existing list.
* [Load list](load-list.md) creates a list by loading a Choice List created (manually or programmatically) in the Design enviornment List Editor.
* [BLOB to list](blob-to-list.md) creates a list from the contents of a BLOB in which a list was previously saved.

After you have created a hierarchical list using **New list**, you can:

* Add items to that list, using the command [APPEND TO LIST](append-to-list.md) or [INSERT IN LIST](insert-in-list.md).
* Delete items from that list, using the command [DELETE FROM LIST](delete-from-list.md).

#### Example 

See example for the [APPEND TO LIST](append-to-list.md) command.

#### See also 

[APPEND TO LIST](append-to-list.md)  
[BLOB to list](blob-to-list.md)  
[CLEAR LIST](clear-list.md)  
[Copy list](copy-list.md)  
[DELETE FROM LIST](delete-from-list.md)  
[INSERT IN LIST](insert-in-list.md)  
[LIST TO BLOB](list-to-blob.md)  
[Load list](load-list.md)  