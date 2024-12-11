---
id: sql-get-option
title: SQL GET OPTION
slug: /commands/sql-get-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET OPTION.Syntax-->**SQL GET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.SQL GET OPTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Option number |
| value | Integer, Text | &#8592; | Option value |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL GET OPTION.Summary-->The **SQL GET OPTION** command returns the current *value* of the option passed in *option*.<!-- END REF-->

For more information on the different options and their associated values, refer to the description of the [SQL SET OPTION](sql-set-option.md) command.

#### System variables and sets 

If the command was properly executed, the system variable OK is set to 1\. Otherwise, it is set to 0.

#### See also 

[SQL SET OPTION](sql-set-option.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 819 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


