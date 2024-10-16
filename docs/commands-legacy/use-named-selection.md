---
id: use-named-selection
title: USE NAMED SELECTION
slug: /commands/use-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.USE NAMED SELECTION.Syntax-->**USE NAMED SELECTION** ( *name* )<!-- END REF-->
<!--REF #_command_.USE NAMED SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| name | Text | &#8594;  | Name of named selection to be used |

<!-- END REF-->

#### Description 

<!--REF #_command_.USE NAMED SELECTION.Summary-->**USE NAMED SELECTION** uses the named selection *name* as the current selection for the table to which it belongs.<!-- END REF-->

When you create a named selection, the current record is “remembered” by the named selection. **USE NAMED SELECTION** retrieves the position of this record and makes the record the new current record; this command loads the current record. If the current record was modified after *name* was created, the record should be saved before **USE NAMED SELECTION** is executed, in order to avoid losing the modified information.

* If [COPY NAMED SELECTION](copy-named-selection.md) was used to create *name*, the named selection *name* is copied to the current selection of the table to which *name* belongs. The named selection *name* exists in memory until it is cleared. Use the [CLEAR NAMED SELECTION](clear-named-selection.md) command to clear the named selection and free the memory used by *name*.
* If [CUT NAMED SELECTION](cut-named-selection.md) was used to create *name*, the current selection is set to *name* and *name* no longer exists in memory.

Remember that a named selection is a representation of a selection of records at the moment that the named selection is created. If the records represented by the named selection change, the named selection may no longer be accurate. Therefore, a named selection represents a group of records that does not change frequently. A number of things can invalidate a named selection: modifying a record of the named selection, deleting a record of the named selection, or changing the criterion that determined the named selection.

#### See also 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  