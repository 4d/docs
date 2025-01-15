---
id: subtotal
title: Subtotal
slug: /commands/subtotal
displayed_sidebar: docs
---

<!--REF #_command_.Subtotal.Syntax-->**Subtotal** ( *data* {; *pageBreak*} ) : Real<!-- END REF-->
<!--REF #_command_.Subtotal.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| data | Field | &#8594;  | Numeric field or variable to return subtotal |
| pageBreak | Integer | &#8594;  | Break level for which to cause a page break |
| Function result | Real | &#8592; | Subtotal of data |

<!-- END REF-->

#### Description 

<!--REF #_command_.Subtotal.Summary-->**Subtotal** returns the subtotal for *data* for the current or last break level.<!-- END REF--> **Subtotal** works only when a sorted selection is being printed with [PRINT SELECTION](print-selection.md) or when printing using Print in the Design environment. The *data* parameter must be of type real, integer, or long integer. Assign the result of the **Subtotal** function to a variable placed in the Break area of the form.

**Warning:** You **must** execute [BREAK LEVEL](break-level.md) and [ACCUMULATE](accumulate.md) before every form report for which you want to do break processing and calculate subtotals. See discussion at the end of the description of this command.

The second, optional, argument to **Subtotal** is used to cause page breaks during printing. If *pageBreak* is 0, **Subtotal** does not issue a page break. If *pageBreak* equals 1, **Subtotal** issues a page break for each level 1 break. If *pageBreak* equals 2, **Subtotal** issues a page break for each level 1 and level 2 break, and so on.

**Tip:** If you execute **Subtotal** from within an output form displayed at the screen, an error will be generated, triggering an infinite loop of updates between the form and the error window. To get out of this loop, press Alt+Shift (Windows) or Option-Shift (Macintosh) when you click on the Abort button in the Error window (you may have to do so several times). This temporarily stops the updates for the form’s window. Select another form as the output form so the error will occur again. Go back to the Design Environment and isolate the call to **Subtotal** into a test [Form event code](../commands/form-event-code.md)\= On Printing Break if you use the form both for display and printing.

#### Example 

The following example is a one-line object method in a Break area of a form (B0, the area above the B0 marker). The *vSalary* variable is placed in the Break area. The variable is assigned the subtotal of the Salary field for this break level. Break processing must have been activated beforehand using the [BREAK LEVEL](break-level.md) and [ACCUMULATE](accumulate.md) commands.

```4d
 Case of
    :(FORM Event=On Printing Break)
       vSalary:=Subtotal([Employees]Salary)
 End case
```

For more information about designing forms with header and break areas, see the 4D Design Reference manual.

#### Activating Break Processing in Form Reports 

In order to generate reports with breaks, break processing in form reports can be activated by calling the [BREAK LEVEL](break-level.md) and [ACCUMULATE](accumulate.md) commands. 

You must execute both of these commands before printing a form report. The **Subtotal** function is still required in order to display values on a form. You must sort on at least as many levels as you need to break on.

When using [BREAK LEVEL](break-level.md) and [ACCUMULATE](accumulate.md), the process to print a report is typically like this: 

1. Select the records to be printed.
2. Sort the records using [ORDER BY](order-by.md). Sort on at least the same number of levels as breaks.
3. Execute [BREAK LEVEL](break-level.md) and [ACCUMULATE](accumulate.md).
4. Print the report using [PRINT SELECTION](print-selection.md).

The **Subtotal** function is necessary in order to display values on a form.

#### See also 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Level](level.md)  
[PRINT SELECTION](print-selection.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 97 |
| Thread safe | &cross; |


