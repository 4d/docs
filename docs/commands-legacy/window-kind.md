---
id: window-kind
title: Window kind
slug: /commands/window-kind
displayed_sidebar: docs
---

<!--REF #_command_.Window kind.Syntax-->**Window kind** {( *window* )} -> Function result<!-- END REF-->
<!--REF #_command_.Window kind.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | WinRef | &#x1F852; | Window reference number, or Frontmost window of current process, if omitted |
| Function result | Longint | &#x1F850; | Type of window |

<!-- END REF-->

#### Description 

<!--REF #_command_.Window kind.Summary-->The **Window kind** command returns the 4D type of the window whose reference number is passed in *window*.<!-- END REF--> If the window does not exist, **Window kind** returns *0* (zero).

Otherwise, **Window kind** may return one of the following predefined constants found in the *Windows* theme:

| Constant        | Type    | Value |
| --------------- | ------- | ----- |
| External window | Longint | 5     |
| Floating window | Longint | 14    |
| Modal dialog    | Longint | 9     |
| Regular window  | Longint | 8     |

If you omit the *window* parameter, **Window kind** returns the type of the frontmost window for the current process.

#### Example 

See example for the [WINDOW LIST](window-list.md) command.

#### See also 

[GET WINDOW RECT](get-window-rect.md)  
[Get window title](get-window-title.md)  
[Window process](window-process.md)  