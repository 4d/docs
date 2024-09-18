---
id: object-get-filter
title: OBJECT Get filter
slug: /commands-legacy/object-get-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get filter.Syntax-->**OBJECT Get filter** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get filter.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | If specified, object is an object name (string)
If omitted, object is a variable or a field |
| object | Form object | &rarr; | Object name (if * is specified) or 
Variable or field (if * is omitted) |
| Function result | Text | &larr; | Name of filter |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get filter.Summary-->The OBJECT Get filter command returns the name of any filter associated with the object or group of objects designated by *object*.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

#### See also 

[OBJECT SET FILTER](object-set-filter.md)  