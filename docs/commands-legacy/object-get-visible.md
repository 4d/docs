---
id: object-get-visible
title: OBJECT Get visible
slug: /commands-legacy/object-get-visible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get visible.Syntax-->**OBJECT Get visible** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get visible.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | If specified, object is an object name (string)
If omitted, object is a variable or a field |
| object | Form object | &rarr; | Object name (if * is specified) or 
Variable or field (if * is omitted) |
| Function result | Boolean | &larr; | True = object(s) visible; Otherwise, False |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get visible.Summary-->The OBJECT Get visible command returns True if the object or group of objects designated by *object* has the visible attribute and False otherwise.<!-- END REF-->

 If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

#### See also 

[OBJECT SET VISIBLE](object-set-visible.md)  