---
id: next-window
title: Next window
slug: /commands/next-window
displayed_sidebar: docs
---

<!--REF #_command_.Next window.Syntax-->**Next window** ( *window* ) -> Function result<!-- END REF-->
<!--REF #_command_.Next window.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number |
| Function result | WinRef | &#8592; | Window reference number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Next window.Summary-->The Next window command returns the window reference number of the window “behind” the window you pass in *window* (based on the front-to-back order of the windows).<!-- END REF-->

#### See also 

[Frontmost window](frontmost-window.md)  