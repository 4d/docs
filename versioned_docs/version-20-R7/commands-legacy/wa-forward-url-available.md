---
id: wa-forward-url-available
title: WA Forward URL available
slug: /commands/wa-forward-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Forward URL available.Syntax-->**WA Forward URL available** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Forward URL available.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Boolean | &#8592; | True if there is a following URL in the sequence of URLs opened;otherwise, False |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Forward URL available.Summary-->The WA Forward URL available command finds out whether there is a following URL available in the sequence of URLs opened in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

The command returns **True** if a URL exists and **False** otherwise. More particularly, this command can be used, in a custom interface, to enable or disable navigation buttons.

#### See also 

[WA Back URL available](wa-back-url-available.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1027 |
| Thread safe | &check; |
| Forbidden on the server ||


