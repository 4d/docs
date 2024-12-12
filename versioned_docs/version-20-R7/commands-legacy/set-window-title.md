---
id: set-window-title
title: SET WINDOW TITLE
slug: /commands/set-window-title
displayed_sidebar: docs
---

<!--REF #_command_.SET WINDOW TITLE.Syntax-->**SET WINDOW TITLE** ( *title* {; *window*} )<!-- END REF-->
<!--REF #_command_.SET WINDOW TITLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| title | Text | &#8594;  | Window title |
| window | Integer | &#8594;  | Window reference number, or Frontmost window of current process, if omitted |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET WINDOW TITLE.Summary-->The **SET WINDOW TITLE** command changes the title of the window whose reference number is passed in *window* to the text passed in *title* (max. length 80 characters).<!-- END REF-->

If the window does not exist, **SET WINDOW TITLE** does nothing. 

If you omit the *window* parameter, **SET WINDOW TITLE** changes the title of the frontmost window for the current process.

**Note:** In the Design environment, 4D changes the window titles automatically —i.e., “Entry for Table” when you perform data entry. If you change a window title, 4D will probably override it. On the other hand, in the Application environment, 4D does not change the titles of the windows.

#### Example 

While performing data entry in a form, you click on a button that executes a lengthy operation (i.e., browsing programmatically related records shown in a subform). You keep informed about the progress of the operation using the title of the current window:

```4d
  // bAnalysis button Object Method
 Case of
    :(FORM Event=On Clicked)
  // Save current window title in a local variable
       $vsCurTitle:=Get window title
  // Start the lengthy operation
       FIRST RECORD([Invoice Line Items])
       For($vlRecord;1;Records in selection([Invoice Line Items]))
          DO SOMETHING
  // Show progress information
          SET WINDOW TITLE("Processing Line Item #"+String($vlRecord))
       End for
  // Restore original window title
       SET WINDOW TITLE($vsCurTitle)
 End case
```

#### See also 

[Get window title](get-window-title.md)  