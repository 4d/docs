---
id: object-get-enterable
title: OBJECT Get enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enterable.Syntax-->**OBJECT Get enterable** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get enterable.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a variable or a field |
| object | Form object | -> | Object name (if * is specified) or 
Variable or field (if * is omitted) |
| Function result | Boolean | <- | True = object(s) enterable; Otherwise, false |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get enterable.Summary-->The OBJECT Get enterable command returns True if the object or group of objects designated by *object* has the **enterable** attribute; otherwise, it returns False.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string.

#### See also 
[OBJECT SET ENTERABLE](object-set-enterable.md)  