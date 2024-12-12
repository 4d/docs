---
id: current-default-table
title: Current default table
slug: /commands/current-default-table
displayed_sidebar: docs
---

<!--REF #_command_.Current default table.Syntax-->**Current default table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current default table.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Pointer | &#8592; | Pointer to the default table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current default table.Summary-->**Current default table** returns a pointer to the table that has been passed to the last call to [DEFAULT TABLE](default-table.md) for the current process.<!-- END REF-->

#### Example 

Provided a default table has been set, the following line of code sets the window title to the name of the current default table:

```4d
 SET WINDOW TITLE(Table name(Current default table))
```

#### See also 

[DEFAULT TABLE](default-table.md)  
[Table](table.md)  
[Table name](table-name.md)  