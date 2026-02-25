---
id: object-get-maximum-value
title: OBJECT GET MAXIMUM VALUE
slug: /commands/object-get-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Syntax-->**OBJECT GET MAXIMUM VALUE** ( * ; *object* : Text ; *maxValue* : Date, Time, Real )<br/>**OBJECT GET MAXIMUM VALUE** ( *object* : Variable, Field ; *maxValue* : Date, Time, Real )<!-- END REF-->
<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| maxValue | Date, Time, Real | &#8592; | Current maximum value for object |
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

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Summary-->The **OBJECT GET MAXIMUM VALUE** command returns, in the *maxValue* variable, the current maximum value of the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

You can set the "Maximum Value" property using the Property List in Design mode, or using the [OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

## See also 

[OBJECT GET MINIMUM VALUE](../commands/object-get-minimum-value)  
[OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value)  

## Properties

|  |  |
| --- | --- |
| Command number | 1245 |
| Thread safe | no |


