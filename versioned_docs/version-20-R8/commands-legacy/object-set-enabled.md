---
id: object-set-enabled
title: OBJECT SET ENABLED
slug: /commands/object-set-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENABLED.Syntax-->**OBJECT SET ENABLED** ( {* ;} *object* ; *active* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENABLED.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable (if * is omitted) |
| active | Boolean | &#8594;  | True = object(s) enabled; otherwise, False |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET ENABLED.Summary-->The **OBJECT SET ENABLED** command can be used to enable or disable the object or group of objects specified by *object* in the current form.<!-- END REF--> An enabled object reacts to mouse clicks and to keyboard shortcuts.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference (object variable only) instead of a string.

Pass True in the *active* parameter to enable the objects and False to disable them. 

This command can be applied to the following types of objects:

* Button, Default button, 3D button, Invisible button, Highlight button
* Radio button, 3D radio button, Picture button
* Check Box, 3D Check Box
* Pop-up menu, Drop-down List, Combo Box, Menu/Drop-down List
* Thermometer, Ruler

**Note:** This command has no effect with an object to which a standard action has been assigned (4D looks after modifying the state of this object when necessary), except in the case of the **Validate** and **Cancel** actions.

#### See also 

[OBJECT Get enabled](object-get-enabled.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1123 |
| Thread safe | &cross; |


