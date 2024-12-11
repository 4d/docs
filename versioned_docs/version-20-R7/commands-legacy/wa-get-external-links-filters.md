---
id: wa-get-external-links-filters
title: WA GET EXTERNAL LINKS FILTERS
slug: /commands/wa-get-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Syntax-->**WA GET EXTERNAL LINKS FILTERS** ( {* ;} *object* ; *filtersArr* ; *allowDenyArr* )<!-- END REF-->
<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| filtersArr | Text array | &#8592; | Filters array |
| allowDenyArr | Boolean array | &#8592; | Allow-deny array |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Summary-->The **WA GET EXTERNAL LINKS FILTERS** command returns, in the *filtersArr* and *allowDenyArr* arrays, the external link filters of the Web area designated by the *\** and *object* parameters.<!-- END REF--> If no filter is active, the arrays are returned empty. 

The filters are installed by the [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md) command. If the arrays are reinitialized during the session, the **WA GET EXTERNAL LINKS FILTERS** command can be used to find out the current settings.

#### See also 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1033 |
| Thread safe | &check; |
| Forbidden on the server ||


