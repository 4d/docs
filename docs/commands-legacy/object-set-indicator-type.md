---
id: object-set-indicator-type
title: OBJECT SET INDICATOR TYPE
slug: /commands-legacy/object-set-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Syntax-->**OBJECT SET INDICATOR TYPE** ( {* ;} *object* ; *indicator* )<!-- END REF-->
<!--REF #_command_.OBJECT SET INDICATOR TYPE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | If specified, object is an object name (string)
If omitted, object is a field or variable |
| object | Form object | &rarr; | Object name (if * is specified) or 
Field or variable (if * is omitted) |
| indicator | Longint | &rarr; | Indicator type |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Summary-->The **OBJECT SET INDICATOR TYPE** command modifies the type of progress indicator for the thermometer(s) designated by the *object* and *\** parameters in the current process.<!-- END REF--> 

The indicator type defines the display variant of the thermometer. For more information, refer to *Indicators* in the *Design Reference* manual. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *indicator* parameter, pass the type of indicator you want to display. You can use one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant                  | Type    | Value | Comment                                            |
| ------------------------- | ------- | ----- | -------------------------------------------------- |
| Asynchronous progress bar | Longint | 3     | Circular indicator displaying continuous animation |
| Barber shop               | Longint | 2     | Bar displaying continuous animation                |
| Progress bar              | Longint | 1     | Standard progress bar                              |

#### See also 

[OBJECT Get indicator type](object-get-indicator-type.md)  