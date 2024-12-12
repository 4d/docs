---
id: object-get-visible
title: OBJECT Get visible
slug: /commands/object-get-visible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get visible.Syntax-->**OBJECT Get visible** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get visible.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Boolean | &#8592; | True = object(s) visible; Otherwise, False |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT Get visible.Summary-->The OBJECT Get visible command returns True if the object or group of objects designated by *object* has the visible attribute and False otherwise.<!-- END REF-->

 If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

#### See also 

[OBJECT SET VISIBLE](object-set-visible.md)  