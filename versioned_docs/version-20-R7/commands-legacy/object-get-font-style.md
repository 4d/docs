---
id: object-get-font-style
title: OBJECT Get font style
slug: /commands/object-get-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font style.Syntax-->**OBJECT Get font style** ( * ; *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font style.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Integer | &#8592; | Font style |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT Get font style.Summary-->The OBJECT Get font style command returns the current style of the character font used by the form object(s) designated by *object*.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

You can compare the value returned with the value of one or more of the following predefined constants, placed in the "*Font Styles*" theme:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Plain     | Integer | 0     |
| Bold      | Integer | 1     |
| Italic    | Integer | 2     |
| Underline | Integer | 4     |

#### See also 

[OBJECT SET FONT STYLE](object-set-font-style.md)  