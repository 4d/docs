---
id: object-get-indicator-type
title: OBJECT Get indicator type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get indicator type.Syntax-->**OBJECT Get indicator type** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get indicator type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a variable |
| object | Form object | -> | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Longint | <- | Indicator type |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get indicator type.Summary-->The **OBJECT Get indicator type** command returns the current indicator type assigned to the thermometer(s) designated by the *object* and *\** parameters.<!-- END REF-->

You can set the indicator type using the Property List in Design mode, or using the [OBJECT SET INDICATOR TYPE](object-set-indicator-type.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

You can compare the value returned by the command with the following constants, found in the "[Form Objects (Properties)](/4Dv20R6/4D/20-R6/Form-Objects-Properties.302-6958435.en.html)" theme:

| Constant                  | Type    | Value | Comment                                            |
| ------------------------- | ------- | ----- | -------------------------------------------------- |
| Asynchronous progress bar | Longint | 3     | Circular indicator displaying continuous animation |
| Barber shop               | Longint | 2     | Bar displaying continuous animation                |
| Progress bar              | Longint | 1     | Standard progress bar                              |

#### See also 

[OBJECT SET INDICATOR TYPE](object-set-indicator-type.md)  