---
id: object-set-minimum-value
title: OBJECT SET MINIMUM VALUE
slug: /commands/object-set-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Syntax-->**OBJECT SET MINIMUM VALUE** ( * ; *object* : Text ; *minValue* : Date, Time, Real )<br/>**OBJECT SET MINIMUM VALUE** ( *object* : Variable, Field ; *minValue* : Date, Time, Real )<!-- END REF-->
<!--REF #_command_.OBJECT SET MINIMUM VALUE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| minValue | Date, Time, Real | &#8594;  | Minimum value for object |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Summary-->The **OBJECT SET MINIMUM VALUE** command modifies the minimum value of the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF--> 

The "Minimum Value" property can be applied to number, date or time type data. For more information, refer to *Maximum and minimum values* in the *Design Reference* manual.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In *minValue*, pass the new minimum value you want to assign to the object for the current process. This value must correspond to the object type, otherwise error 18 "Field types are incompatible" is returned. 

## See also 

[OBJECT GET MINIMUM VALUE](../commands/object-get-minimum-value)  
[OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value)  

## Properties

|  |  |
| --- | --- |
| Command number | 1242 |
| Thread safe | no |


