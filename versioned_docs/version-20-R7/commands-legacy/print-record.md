---
id: print-record
title: PRINT RECORD
slug: /commands/print-record
displayed_sidebar: docs
---

<!--REF #_command_.PRINT RECORD.Syntax-->**PRINT RECORD** ( {*aTable*}{;}{* | >} )<!-- END REF-->
<!--REF #_command_.PRINT RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to print the current record or Default table if omitted |
| * &#124; > | Operator | &#8594;  | * to suppress the printing dialog box, or > to not reinitialize print settings |

<!-- END REF-->

#### Description 

<!--REF #_command_.PRINT RECORD.Summary-->**PRINT RECORD** prints the current record of *aTable*, without modifying the current selection.<!-- END REF--> The current output form is used for printing. If there is no current record for *aTable*, **PRINT RECORD** does nothing.

You can print subforms with the **PRINT RECORD** command. This is not possible with [Print form](print-form.md).

**Note:** If there are modifications to the record that have not been saved, this command prints the modified field values, not the field values located on disk.

By default, **PRINT RECORD** displays the Print job dialog box before printing. If the user cancels the dialog box, the command is canceled and the record is not printed. You can suppress this dialog box by using either the optional asterisk (*\**) parameter or the optional “greater than” (*\>*) parameter:

* The *\** parameter causes a print job using the current print parameters (default parameters or those defined by the *\_o\_PAGE SETUP* and/or [SET PRINT OPTION](set-print-option.md) commands).
* Furthermore, the *\>* parameter causes a print job without reinitializing the current print parameters. This setting is useful for executing several successive calls to **PRINT RECORD** (e.g. inside a loop) while maintaining previously set customized print parameters.

**4D Server:** This command can be executed on 4D Server in a stored procedure. In this context:

* Make sure that no dialog box appears on the server machine (except for a specific requirement). To do this, it is necessary to call the command with the *\** or *\>* parameter.
* In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated.

**Warning:** Do not use the [PAGE BREAK](page-break.md) command with **PRINT RECORD**. [PAGE BREAK](page-break.md) is exclusively reserved for use in combination with the [Print form](print-form.md) command.

#### Example 1 

The following example prints the current record of the \[Invoices\] table. The code is contained in the object method of a **Print** button on the input form. When the user clicks the button, the record is printed using an output form designed for this purpose. 

```4d
 FORM SET OUTPUT([Invoices];"Print One From Data Entry") // Select the right output form for printing
 PRINT RECORD([Invoices];*) // Print Invoices as it is (without showing the printing dialog boxes)
 FORM SET OUTPUT([Invoices];"Standard Output") // Restore the previous output form
```

#### Example 2 

The following example prints the same current record in two different forms. The code is contained in the object method of a **Print** button on the input form. You want to set customized print parameters and then use them in the two forms. 

```4d
 PRINT SETTINGS //User defines print parameters
 If(OK=1)
    FORM SET OUTPUT([Employees];"Detailed") //Use the first print form
    PRINT RECORD([Employees];>) //Print using user-defined parameters
    FORM SET OUTPUT([Employees];"Simple") //Use the second print form
    PRINT RECORD([Employees];>) //Print using user-defined parameters
    FORM SET OUTPUT([Employees];"Output") //Restore default output form
 End if
```

#### See also 

[Print form](print-form.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 71 |
| Thread safe | &cross; |


