---
id: wa-zoom-out
title: WA ZOOM OUT
slug: /commands/wa-zoom-out
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM OUT.Syntax-->**WA ZOOM OUT** ( {* ;} *object* )<!-- END REF-->
<!--REF #_command_.WA ZOOM OUT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WA ZOOM OUT.Summary-->The WA ZOOM OUT command reduces the size of the contents displayed in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

Under macOS, the scope of this command is the 4D session: the configuration carried out by this command is not retained after the 4D application is closed.

Under Windows, the scope of this command is global: the configuration is retained after the 4D application is closed.

#### See also 

[WA ZOOM IN](wa-zoom-in.md)  