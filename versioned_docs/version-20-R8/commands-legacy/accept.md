---
id: accept
title: ACCEPT
slug: /commands/accept
displayed_sidebar: docs
---

<!--REF #_command_.ACCEPT.Syntax-->**ACCEPT**<!-- END REF-->
<!--REF #_command_.ACCEPT.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.ACCEPT.Summary-->The **ACCEPT** command is used in form or object methods (or in subroutines) to:

* accept a new or modified record, for which data entry has been initiated using [ADD RECORD](add-record.md) or [MODIFY RECORD](modify-record.md).<!-- END REF-->
* accept a form displayed with the [DIALOG](../commands/dialog.md) command.
* exit a form displaying a selection of records, using [DISPLAY SELECTION](display-selection.md) or [MODIFY SELECTION](modify-selection.md).

**ACCEPT** performs the same action as if a user had pressed the Enter key. After the form is accepted, the OK system variable is set to 1.

**ACCEPT** is commonly executed as a result of choosing a menu command. **ACCEPT** is also commonly used in the object method of a “no action” button.

It is also often used in the optional close box method for the [Open window](open-window.md) command. If there is a Control-menu box on a window, **ACCEPT** or [CANCEL](cancel.md) can be called, in the method to be executed, when the Control-menu box is double-clicked or the Close menu command is chosen.

**ACCEPT** cannot be queued up. In response to an event, executing two **ACCEPT** commands in a row from within a method would have the same effect as executing one.

##### Headless mode 

The **ACCEPT** command is allowed in headless mode, in the context of offscreen areas created by *VP Run offscreen area* or [WA Run offscreen area](wa-run-offscreen-area.md). 

#### See also 

[CANCEL](cancel.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 269 |
| Thread safe | &cross; |
| Modifies variables | OK |


