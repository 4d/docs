---
id: accumulate
title: ACCUMULATE
slug: /commands/accumulate
displayed_sidebar: docs
---

<!--REF #_command_.ACCUMULATE.Syntax-->**ACCUMULATE** ( *data* {; *data2* ; ... ; *dataN*} )<!-- END REF-->
<!--REF #_command_.ACCUMULATE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| data | Field, Variable | &#8594;  | Numeric field or variable on which to accumulate |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.ACCUMULATE.Summary-->**ACCUMULATE** specifies the fields or variables to be accumulated during a form report performed using [PRINT SELECTION](print-selection.md).<!-- END REF-->

You **must** execute [BREAK LEVEL](break-level.md) and **ACCUMULATE**  before every report for which you want to do break processing. These commands activate break processing for a report. See the explanation for the [Subtotal](subtotal.md) command.

Use **ACCUMULATE** when you want to include subtotals for numeric fields or variables in a form report. **ACCUMULATE** tells 4D to store subtotals for each of the Data arguments. The subtotals are accumulated for each break level specified with the [Subtotal](subtotal.md) command.

Execute **ACCUMULATE** before printing the report with [PRINT SELECTION](print-selection.md).

Use the [Subtotal](subtotal.md) function in the form method or an object method to return the subtotal of one of the *data* arguments.

#### Example 

See the example for the [BREAK LEVEL](break-level.md) command.

#### See also 

[BREAK LEVEL](break-level.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  