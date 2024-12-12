---
id: redraw-window
title: REDRAW WINDOW
slug: /commands/redraw-window
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW WINDOW.Syntax-->**REDRAW WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.REDRAW WINDOW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number, or Frontmost window of current process, if omitted |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.REDRAW WINDOW.Summary-->The REDRAW WINDOW command provokes a graphical update of the window whose reference number you pass in *window*.<!-- END REF-->

If you omit the *window* parameter, REDRAW WINDOW applies to the frontmost window for the current process.

**Note:** 4D handles the graphical updates of the windows each time you move a window, resize it, or bring it to the front, as well as when you change the form and/or the values displayed in the window. You will rarely use this command.

#### See also 

[ERASE WINDOW](erase-window.md)  