---
id: object-get-minimum-value
title: OBJECT GET MINIMUM VALUE
slug: /commands-legacy/object-get-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Syntax-->**OBJECT GET MINIMUM VALUE** ( {* ;} *object* ; *minValue* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MINIMUM VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | If specified, object is an object name (string)
If omitted, object is a field or variable |
| object | Form object | &rarr; | Object name (if * is specified) or 
Field or variable (if * is omitted) |
| minValue | Date, Time, Number | <&rarr; | Current minimum value for object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Summary-->The **OBJECT GET MINIMUM VALUE** command returns, in the *minValue* variable, the current minimum value of the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

You can set the "Minimum Value" property using the Property List in Design mode, or using the [OBJECT SET MINIMUM VALUE](object-set-minimum-value.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

#### See also 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  