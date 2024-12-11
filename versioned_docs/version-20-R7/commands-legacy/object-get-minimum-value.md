---
id: object-get-minimum-value
title: OBJECT GET MINIMUM VALUE
slug: /commands/object-get-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Syntax-->**OBJECT GET MINIMUM VALUE** ( {* ;} *object* ; *minValue* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MINIMUM VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| minValue | Date, Time, Number | &#8592; | Current minimum value for object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Summary-->The **OBJECT GET MINIMUM VALUE** command returns, in the *minValue* variable, the current minimum value of the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

You can set the "Minimum Value" property using the Property List in Design mode, or using the [OBJECT SET MINIMUM VALUE](object-set-minimum-value.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

#### See also 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1243 |
| Thread safe | &check; |
| Forbidden on the server ||


