---
id: accumulate
title: ACCUMULATE
slug: /commands/accumulate
displayed_sidebar: docs
---

<!--REF #_command_.ACCUMULATE.Syntax-->**ACCUMULATE** ( *...data* : Field)<!-- END REF-->
<!--REF #_command_.ACCUMULATE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| data | Field, Variable | &#8594;  | Numeric field or variable on which to accumulate |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.ACCUMULATE.Summary-->**ACCUMULATE** specifies the fields or variables to be accumulated during a form report performed using [PRINT SELECTION](../commands/print-selection).<!-- END REF-->

You **must** execute [BREAK LEVEL](../commands/break-level) and **ACCUMULATE** before every report for which you want to do break processing. These commands activate break processing for a report. See the explanation for the [Subtotal](../commands/subtotal) command.

Use **ACCUMULATE** when you want to include subtotals for numeric fields or variables in a form report. **ACCUMULATE** tells 4D to store subtotals for each of the Data arguments. The subtotals are accumulated for each break level specified with the [Subtotal](../commands/subtotal) command.

Execute **ACCUMULATE** before printing the report with [PRINT SELECTION](../commands/print-selection).

Use the [Subtotal](../commands/subtotal) function in the form method or an object method to return the subtotal of one of the *data* arguments.

## Example 

See the example for the [BREAK LEVEL](../commands/break-level) command.

## See also 

[BREAK LEVEL](../commands/break-level)  
[ORDER BY](../commands/order-by)  
[PRINT SELECTION](../commands/print-selection)  
[Subtotal](../commands/subtotal)  

## Properties

|  |  |
| --- | --- |
| Command number | 303 |
| Thread safe | no |


