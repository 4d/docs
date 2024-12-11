---
id: hide-window
title: HIDE WINDOW
slug: /commands/hide-window
displayed_sidebar: docs
---

<!--REF #_command_.HIDE WINDOW.Syntax-->**HIDE WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.HIDE WINDOW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number or Current process frontmost window, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.HIDE WINDOW.Summary-->The **HIDE WINDOW** command hides the window whose number was passed in *window* or, if this parameter is omitted, the current process frontmost window.<!-- END REF--> For example, this command lets you display only the active window in a process that consists of several processes. 

The window disappears from the screen but remains open. You can still apply any changes supported by 4D windows programmatically. 

To display a window that was previously hidden by the **HIDE WINDOW** command:

* Use the [SHOW WINDOW](show-window.md) command and pass the window reference ID.
* Use the **Process** page of the Runtime Explorer. Select the process in which the window is handled, then click on the **Show** button.

To hide all the windows of a process, use the [HIDE PROCESS](hide-process.md) command.

#### Example 

This example corresponds to a method of a button located in an input form. This button opens a dialog box in a new window that belongs to the same process. In this example, the user wants to hide the other windows of the process (an entry form and a tool palette) while displaying the dialog box. Once the dialog box is validated, other process windows are displayed again.

```4d
  // Object method for the "Information" button
 
 HIDE WINDOW(Entry) // Hide the entry window
 HIDE WINDOW(Palette) // Hide the palette
 $Infos:=Open window(20;100;500;400;8) // Create the information window
 ... // Place here instructions that are dedicated to the dialog management
 CLOSE WINDOW($Infos) // Close the dialog
 SHOW WINDOW(Entry)
 SHOW WINDOW(Palette) // Display the other windows
```

#### See also 

[SHOW WINDOW](show-window.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 436 |
| Thread safe | &check; |
| Forbidden on the server ||


