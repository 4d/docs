---
id: object-get-font
title: OBJECT Get font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font.Syntax-->**OBJECT Get font** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get font.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a variable or a field |
| object | Form object | -> | Object name (if * is specified) or 
Variable or field (if * is omitted) |
| Function result | Text | <- | Name of font |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get font.Summary-->The OBJECT Get font command returns the name of the character font used by the form object(s) designated by *object*.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

#### See also 
[OBJECT SET FONT](object-set-font.md)  