---
id: cancel
title: CANCEL
slug: /commands/cancel
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL.Syntax-->**CANCEL**<!-- END REF-->
<!--REF #_command_.CANCEL.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.CANCEL.Summary-->The **CANCEL** command is used in form or object methods (or in a subroutine) to:

* cancel a new or modified record, for which data entry has been initiated using [ADD RECORD](add-record.md) or [MODIFY RECORD](modify-record.md).<!-- END REF-->
* cancel a form displayed with the [DIALOG](../commands/dialog.md) command.
* exit a form displaying a selection of records, using [DISPLAY SELECTION](display-selection.md) or [MODIFY SELECTION](modify-selection.md).
* cancel the printing of a form that is about to be printed using the [Print form](../commands/print-form.md) command (see below).

In the context of data entry, **CANCEL** performs the same action as if the user had pressed the cancel key (**Esc**).

**CANCEL** is commonly executed as a result of a menu command being chosen. **CANCEL** is also commonly used in the object method of a “no action” button.

It is also often used in the optional close box method for the [Open window](open-window.md) command. If there is a Control-menu box on a window, [ACCEPT](accept.md) or **CANCEL** can be called, in the method to be executed, when the Control-menu box is double-clicked or the **Close** menu command is chosen.

**CANCEL** cannot be queued up. Executing two **CANCEL** commands in a row from within a method in response to an event would have the same effect as executing only one.

Finally, this command can be used in the On Printing Detail form event, when using the [Print form](../commands/print-form.md) command. In this context, the **CANCEL** command suspends the printing of the form that is about to be printed, then resumes it on the next page. This mechanism can be used to manage form printing when there is a lack of space or if a page break is required.

**Note:** This operation differs from that of the [PAGE BREAK](page-break.md)(\*) command that cancels ALL the forms waiting to be printed.

##### Headless mode 

The **CANCEL** command is allowed in headless mode, in the context of offscreen areas created by *VP Run offscreen area* or [WA Run offscreen area](wa-run-offscreen-area.md). 

#### Example 

Refer to the example of the [SET PRINT MARKER](set-print-marker.md) command.

#### System variables and sets 

When the [CANCEL](cancel.md) command is executed (form or printing cancelled), the system variable OK is set to 0.

#### See also 

[ACCEPT](accept.md)  
[PAGE BREAK](page-break.md)  
[Print form](../commands/print-form.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 269 |
| Thread safe | &cross; |
| Modifies variables | OK |