---
id: object-get-font-size
title: OBJECT Get font size
slug: /commands-legacy/object-get-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font size.Syntax-->**OBJECT Get font size** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get font size.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | If specified, object is an object name (string)
If omitted, object is a variable or a field |
| object | Form object | &rarr; | Object name (if * is specified) or 
Variable or field (if * is omitted) |
| Function result | Longint | &larr; | Size of font in points |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get font size.Summary-->The OBJECT Get font size command returns the size (in points) of the character font used by the form object(s) designated by *object*.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

#### See also 

[OBJECT SET FONT SIZE](object-set-font-size.md)  