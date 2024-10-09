---
id: wa-get-page-content
title: WA Get page content
slug: /commands/wa-get-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page content.Syntax-->**WA Get page content** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.WA Get page content.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &srarr; | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &srarr; | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | String | &larr; | HTML source code |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Get page content.Summary-->The WA Get page content command returns the HTML code of the current page or the page being displayed in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

This command returns an empty string if the contents of the current page is not available.

#### See also 

[WA SET PAGE CONTENT](wa-set-page-content.md)  