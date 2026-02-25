---
id: object-set-indicator-type
title: OBJECT SET INDICATOR TYPE
slug: /commands/object-set-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Syntax-->**OBJECT SET INDICATOR TYPE** ( * ; *object* : Text ; *indicator* : Integer )<br/>**OBJECT SET INDICATOR TYPE** ( *object* : Variable, Field ; *indicator* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET INDICATOR TYPE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| indicator | Integer | &#8594;  | Indicator type |
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

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Summary-->The **OBJECT SET INDICATOR TYPE** command modifies the type of progress indicator for the thermometer(s) designated by the *object* and *\** parameters in the current process.<!-- END REF--> 

The indicator type defines the display variant of the thermometer. For more information, refer to *Indicators* in the *Design Reference* manual. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *indicator* parameter, pass the type of indicator you want to display. You can use one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant                  | Type    | Value | Comment                                            |
| ------------------------- | ------- | ----- | -------------------------------------------------- |
| Asynchronous progress bar | Integer | 3     | Circular indicator displaying continuous animation |
| Barber shop               | Integer | 2     | Bar displaying continuous animation                |
| Progress bar              | Integer | 1     | Standard progress bar                              |

## See also 

[OBJECT Get indicator type](../commands/object-get-indicator-type)  

## Properties

|  |  |
| --- | --- |
| Command number | 1246 |
| Thread safe | no |


