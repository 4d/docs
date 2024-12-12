---
id: frontmost-window
title: Frontmost window
slug: /commands/frontmost-window
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost window.Syntax-->**Frontmost window** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Frontmost window.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, take floating windows into account If omitted, ignore floating windows |
| Function result | Integer | &#8592; | Window reference number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Frontmost window.Summary-->The Frontmost window command returns the window reference number of the frontmost window.<!-- END REF-->

#### See also 

[Frontmost process](frontmost-process.md)  
[Next window](next-window.md)  