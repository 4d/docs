---
id: object-get-maximum-value
title: OBJECT GET MAXIMUM VALUE
slug: /commands/object-get-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Syntax-->**OBJECT GET MAXIMUM VALUE** ( {* ;} *object* ; *maxValue* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | Form object | &#x1F852; | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| maxValue | Date, Time, Number | &#x1F858; | Current maximum value for object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Summary-->The **OBJECT GET MAXIMUM VALUE** command returns, in the *maxValue* variable, the current maximum value of the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

You can set the "Maximum Value" property using the Property List in Design mode, or using the [OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

#### See also 

[OBJECT GET MINIMUM VALUE](object-get-minimum-value.md)  
[OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md)  