---
id: object-set-maximum-value
title: OBJECT SET MAXIMUM VALUE
slug: /commands-legacy/object-set-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Syntax-->**OBJECT SET MAXIMUM VALUE** ( {* ;} *object* ; *maxValue* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | Form object | &#x1F852; | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| maxValue | Date, Time, Number | &#x1F852; | Maximum value for object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Summary-->The **OBJECT SET MAXIMUM VALUE** command modifies the maximum value of the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF--> 

The "Maximum Value" property can be applied to number, date or time type data. For more information, refer to *Maximum and minimum values* in the *Design Reference* manual.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In *maxValue*, pass the new maximum value you want to assign to the object for the current process. This value must correspond to the object type, otherwise error 18 "Field types are incompatible" is returned.

#### See also 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  