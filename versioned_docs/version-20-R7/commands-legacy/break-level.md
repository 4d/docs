---
id: break-level
title: BREAK LEVEL
slug: /commands/break-level
displayed_sidebar: docs
---

<!--REF #_command_.BREAK LEVEL.Syntax-->**BREAK LEVEL** ( *level* {; *pageBreak*} )<!-- END REF-->
<!--REF #_command_.BREAK LEVEL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| level | Integer | &#8594;  | Number of break levels |
| pageBreak | Integer | &#8594;  | Break level for which to do a page break |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.BREAK LEVEL.Summary-->**BREAK LEVEL** specifies the number of break levels in a report performed using [PRINT SELECTION](print-selection.md).<!-- END REF-->

You **must** execute **BREAK LEVEL** and [ACCUMULATE](accumulate.md) before every report for which you want to do break processing. These commands activate break processing for a report. See the explanation for the [Subtotal](subtotal.md) command.

The *level* parameter indicates the deepest level for which you want to perform break processing. You must have sorted the records with at least that many levels. If you have sorted more levels, those levels will be printed as sorted, but will not be processed for breaks.

Each break level that is generated will print the corresponding Break areas and Header areas in the form. There should be at least as many Break areas in the form as the number you pass in *level*. If there are more Break areas, they will be ignored and will not be printed.

The second, optional, argument, *pageBreak*, is used to cause page breaks during printing.

#### Example 

The following example prints a report with two break levels. The selection is sorted on four levels, but the **BREAK LEVEL** command specifies to break on only two levels. One field is accumulated with the [ACCUMULATE](accumulate.md) command:

```4d
 ORDER BY([Emp]Dept;>;[Emp]Title;>;[Emp]Last;>;[Emp]First;>) // Sort on four levels
 BREAK LEVEL(2) // Turn on break processing to 2 levels (Dept and Title)
 ACCUMULATE([Emp]Salary) // Accumulate the salaries
 FORM SET OUTPUT([Emp];"Dept salary") // Select the report form
 PRINT SELECTION([Emp]) // Print the report
```

#### See also 

[ACCUMULATE](accumulate.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  