---
id: close-window
title: CLOSE WINDOW
slug: /commands/close-window
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE WINDOW.Syntax-->**CLOSE WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.CLOSE WINDOW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number, or Frontmost window of current process, if omitted |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.CLOSE WINDOW.Summary-->**CLOSE WINDOW** closes the active window opened by the [Open window](open-window.md) or [Open form window](open-form-window.md) command in the current process.<!-- END REF--> **CLOSE WINDOW** has no effect if a custom window is not open; it does not close system windows. **CLOSE WINDOW** also has no effect if called while a form is active in the window. You must call **CLOSE WINDOW** when you are done using a window opened by [Open window](open-window.md) or [Open form window](open-form-window.md).

It is useless to pass a number to **CLOSE WINDOW** when closing a window previously opened by the [Open window](open-window.md) or [Open form window](open-form-window.md) function, since a call to **CLOSE WINDOW** will always close the last window created by one of these commands.

If you pass an external window reference number in the *Window* parameter, **CLOSE WINDOW** closes the specified external window. For more information about external windows, refer to the  function.

#### Example 

The following example opens a form window and adds new records with the [ADD RECORD](add-record.md) command. When the records have been added, the window is closed with **CLOSE WINDOW**:

```4d
 FORM SET INPUT([Employees];"Entry")
 $winRef:=Open form window([Employees];"Entry")
 Repeat
    ADD RECORD([Employees]) //Add a new employee record
 Until(OK=0) //Loop until the user cancels
 CLOSE WINDOW //Close the window
```

#### See also 

[Open form window](open-form-window.md)  
[Open window](open-window.md)  