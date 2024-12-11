---
id: wa-back-url-available
title: WA Back URL available
slug: /commands/wa-back-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Back URL available.Syntax-->**WA Back URL available** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Back URL available.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Boolean | &#8592; | True if there is a previous URL in the sequence of URLs opened;otherwise, False |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Back URL available.Summary-->The WA Back URL available command finds out whether there is a previous URL available in the sequence of URLs opened in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

The command returns **True** if a URL exists and **False** otherwise. More particularly, this command can be used, in a custom interface, to enable or disable navigation buttons.

#### See also 

[WA Forward URL available](wa-forward-url-available.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1026 |
| Thread safe | &check; |
| Forbidden on the server ||


