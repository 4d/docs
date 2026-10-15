---
id: object-get-enabled
title: OBJECT Get enabled
slug: /commands/object-get-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enabled.Syntax-->**OBJECT Get enabled** ( * ; *object* : Text ) : Boolean<br/>**OBJECT Get enabled** ( *object* : Variable, Field ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enabled.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Boolean | &#8592; | True = object(s) enabled; Otherwise, false |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT Get enabled.Summary-->The OBJECT Get enabled command returns True if the object or group of objects designated by *object* is enabled in the form and False if it is not enabled.<!-- END REF--> 

An enabled object reacts to mouse clicks and to keyboard shortcuts.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference (object variable only) instead of a string. 

This command can be applied to the following types of objects:

* Button, Default button, 3D button, Invisible button, Highlight button
* Radio button, 3D radio button, Picture button
* Check Box, 3D Check Box
* Pop-up menu, Drop-down List, Combo Box, Menu/Drop-down List
* Thermometer, Ruler

## See also 

[OBJECT SET ENABLED](../commands/object-set-enabled)  

## Properties

|  |  |
| --- | --- |
| Command number | 1079 |
| Thread safe | no |


