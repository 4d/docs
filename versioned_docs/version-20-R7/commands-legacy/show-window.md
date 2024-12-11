---
id: show-window
title: SHOW WINDOW
slug: /commands/show-window
displayed_sidebar: docs
---

<!--REF #_command_.SHOW WINDOW.Syntax-->**SHOW WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.SHOW WINDOW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number or Current process frontmost window, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.SHOW WINDOW.Summary-->The **SHOW WINDOW** command displays the window whose number was passed in *window*.<!-- END REF--> If this parameter is omitted, the frontmost window of the current process will be displayed.

In order to use the **SHOW WINDOW** command, the window must have been hidden by using the [HIDE WINDOW](hide-window.md) command. If the window is already displayed, the command does nothing.

#### Example 

Refer to the example of the [HIDE WINDOW](hide-window.md) command.

#### See also 

[HIDE WINDOW](hide-window.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 435 |
| Thread safe | &check; |
| Forbidden on the server ||


