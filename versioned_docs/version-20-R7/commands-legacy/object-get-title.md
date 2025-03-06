---
id: object-get-title
title: OBJECT Get title
slug: /commands/object-get-title
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get title.Syntax-->**OBJECT Get title** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get title.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Text | &#8592; | Title of button |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get title.Summary-->The OBJECT Get title command returns the title (label) of the form object(s) designated by *object*.<!-- END REF--> You can use this command with all types of simple objects that contain a label:

* buttons,
* check boxes
* radio buttons
* static texts
* group areas.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string.

#### See also 

[OBJECT SET TITLE](object-set-title.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1068 |
| Thread safe | &cross; |


