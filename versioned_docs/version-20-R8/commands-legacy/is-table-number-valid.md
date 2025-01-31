---
id: is-table-number-valid
title: Is table number valid
slug: /commands/is-table-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is table number valid.Syntax-->**Is table number valid** ( *tableNum* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is table number valid.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum | Integer | &#8594;  | Table number |
| Function result | Boolean | &#8592; | True = table exists in database, False = table does not exist in database |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is table number valid.Summary-->The Is table number valid command returns True if the table whose number is passed in the *tableNum* parameter exists in the database and False otherwise.<!-- END REF--> Keep in mind that the command returns False if the table is in the Trash of the Explorer.

This command can be used to detect any table deletions, which create gaps in the sequence of table numbers.

#### See also 

[Last table number](last-table-number.md)  
[Is field number valid](is-field-number-valid.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 999 |
| Thread safe | &check; |


