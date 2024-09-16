---
id: object-set-minimum-value
title: OBJECT SET MINIMUM VALUE
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Syntax-->**OBJECT SET MINIMUM VALUE** ( {* ;} *object* ; *minValue* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MINIMUM VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a field or variable |
| object | Form object | -> | Object name (if * is specified) or
Field or variable (if * is omitted) |
| minValue | Date, Time, Number | -> | Minimum value for object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Summary-->The **OBJECT SET MINIMUM VALUE** command modifies the minimum value of the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF--> 

The "Minimum Value" property can be applied to number, date or time type data. For more information, refer to [Maximum and minimum values](/4Dv20R6/4D/20-R6/Data-entry-controls-and-assistance.300-7003359.en.html#421887) in the *Design Reference* manual.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In *minValue*, pass the new minimum value you want to assign to the object for the current process. This value must correspond to the object type, otherwise error 18 "Field types are incompatible" is returned. 

#### See also 
[OBJECT GET MINIMUM VALUE](object-get-minimum-value.md)  
[OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md)  