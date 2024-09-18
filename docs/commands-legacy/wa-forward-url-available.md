---
id: wa-forward-url-available
title: WA Forward URL available
slug: /commands-legacy/wa-forward-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Forward URL available.Syntax-->**WA Forward URL available** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.WA Forward URL available.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | If specified, object is an object name (string) If omitted, object is a variable |
| object | Form object | &rarr; | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Boolean | &larr; | True if there is a following URL in the sequence of URLs opened;otherwise, False |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Forward URL available.Summary-->The WA Forward URL available command finds out whether there is a following URL available in the sequence of URLs opened in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

The command returns **True** if a URL exists and **False** otherwise. More particularly, this command can be used, in a custom interface, to enable or disable navigation buttons.

#### See also 

[WA Back URL available](wa-back-url-available.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  