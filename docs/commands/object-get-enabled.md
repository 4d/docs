---
id: object-get-enabled
title: OBJECT Get enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enabled.Syntax-->**OBJECT Get enabled** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get enabled.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a variable |
| object | Form object | -> | Object name (if * is specified) or 
Variable (if * is omitted) |
| Function result | Boolean | <- | True = object(s) enabled; Otherwise, false |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get enabled.Summary-->The OBJECT Get enabled command returns True if the object or group of objects designated by *object* is enabled in the form and False if it is not enabled.<!-- END REF--> 

An enabled object reacts to mouse clicks and to keyboard shortcuts.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference (object variable only) instead of a string. 

This command can be applied to the following types of objects:

* Button, Default button, 3D button, Invisible button, Highlight button
* Radio button, 3D radio button, Picture button
* Check Box, 3D Check Box
* Pop-up menu, Drop-down List, Combo Box, Menu/Drop-down List
* Thermometer, Ruler

#### See also 
[OBJECT SET ENABLED](object-set-enabled.md)  