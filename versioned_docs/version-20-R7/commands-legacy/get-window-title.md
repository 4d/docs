---
id: get-window-title
title: Get window title
slug: /commands/get-window-title
displayed_sidebar: docs
---

<!--REF #_command_.Get window title.Syntax-->**Get window title** {( *window* )} -> Function result<!-- END REF-->
<!--REF #_command_.Get window title.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number, or Frontmost window of current process, if omitted |
| Function result | String | &#8592; | Window title |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Get window title.Summary-->The **Get window title** command returns the title of the window whose reference number is passed in *window*.<!-- END REF--> If the window does not exist, an empty string is returned.

If you omit the *window* parameter, **Get window title** returns the title of the frontmost window for the current process.

#### Example 

See example for the [SET WINDOW TITLE](set-window-title.md) command.

#### See also 

[SET WINDOW TITLE](set-window-title.md)  