---
id: wa-get-url-filters
title: WA GET URL FILTERS
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL FILTERS.Syntax-->**WA GET URL FILTERS** ( {* ;} *object* ; *filtersArr* ; *allowDenyArr* )<!-- END REF-->
<!--REF #_command_.WA GET URL FILTERS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string) If omitted, object is a variable |
| object | Form object | -> | Object name (if * is specified) or Variable (if * is omitted) |
| filtersArr | String array | <-> | Filters array |
| allowDenyArr | Boolean array | <-> | Allow-deny array |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA GET URL FILTERS.Summary-->The **WA GET URL FILTERS** command returns, in the *filtersArr* and *allowDenyArr* arrays, the filters that are active in the Web area designated by the *\** and *object* parameters.<!-- END REF--> If no filter is active, the arrays are returned empty. 

The filters are installed by the [WA SET URL FILTERS](wa-set-url-filters.md) command. If the arrays are reinitialized during the session, the **WA GET URL FILTERS** command can be used to find out the current settings

#### See also 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  