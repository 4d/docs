---
id: wa-get-page-content
title: WA Get page content
slug: /commands/wa-get-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page content.Syntax-->**WA Get page content** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get page content.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Text | &#8592; | HTML source code |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WA Get page content.Summary-->The WA Get page content command returns the HTML code of the current page or the page being displayed in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

This command returns an empty string if the contents of the current page is not available.

#### See also 

[WA SET PAGE CONTENT](wa-set-page-content.md)  