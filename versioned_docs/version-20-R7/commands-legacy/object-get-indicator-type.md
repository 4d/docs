---
id: object-get-indicator-type
title: OBJECT Get indicator type
slug: /commands/object-get-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get indicator type.Syntax-->**OBJECT Get indicator type** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get indicator type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Integer | &#8592; | Indicator type |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT Get indicator type.Summary-->The **OBJECT Get indicator type** command returns the current indicator type assigned to the thermometer(s) designated by the *object* and *\** parameters.<!-- END REF-->

You can set the indicator type using the Property List in Design mode, or using the [OBJECT SET INDICATOR TYPE](object-set-indicator-type.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

You can compare the value returned by the command with the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant                  | Type    | Value | Comment                                            |
| ------------------------- | ------- | ----- | -------------------------------------------------- |
| Asynchronous progress bar | Integer | 3     | Circular indicator displaying continuous animation |
| Barber shop               | Integer | 2     | Bar displaying continuous animation                |
| Progress bar              | Integer | 1     | Standard progress bar                              |

#### See also 

[OBJECT SET INDICATOR TYPE](object-set-indicator-type.md)  