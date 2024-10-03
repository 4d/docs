---
id: frontmost-process
title: Frontmost process
slug: /commands-legacy/frontmost-process
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost process.Syntax-->**Frontmost process** {( * )} -> Function result<!-- END REF-->
<!--REF #_command_.Frontmost process.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | Process number for first non-floating window |
| Function result | Integer | &larr; | Number of the process whose windows are in the front |

<!-- END REF-->

#### Description 

<!--REF #_command_.Frontmost process.Summary-->**Frontmost process** returns the number of the process whose window (or windows) are in the front.<!-- END REF--> 

When you have one or more floating windows open, there are two window layers:

* Regular windows
* Floating windows

If the **Frontmost process** function is used from within a floating window form method or object method, the function returns the process reference number of the frontmost floating window in the floating window layer. If you specify the optional *\** parameter, the function returns the process reference number of the frontmost active window in the regular window layer.

#### Example 

See the example for [BRING TO FRONT](bring-to-front.md).

#### See also 

[BRING TO FRONT](bring-to-front.md)  
[WINDOW LIST](window-list.md)  