---
id: is-field-number-valid
title: Is field number valid
slug: /commands-legacy/is-field-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is field number valid.Syntax-->**Is field number valid** ( tableNum | tablePtr ; *fieldNum* ) -> Function result<!-- END REF-->
<!--REF #_command_.Is field number valid.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum | tablePtr | Longint, Pointer | &rarr; | Table number or Pointer to table |
| fieldNum | Longint | &rarr; | Field number |
| Function result | Boolean | &larr; | True = field exists in the table False = field does not exist in the table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is field number valid.Summary-->The Is field number valid command returns True if the field whose number is passed in the *fieldNum* parameter exists in the table whose number or pointer is passed in the *tableNum* or *tablePtr* parameter.<!-- END REF--> If the field does not exist, the command returns False. Keep in mind that the command returns False if the table containing the field is in the Trash of the Explorer.

This command can be used to detect any field deletions, which create gaps in the sequence of field numbers.

#### See also 

[Get last table number](get-last-table-number.md)  
[Is table number valid](is-table-number-valid.md)  