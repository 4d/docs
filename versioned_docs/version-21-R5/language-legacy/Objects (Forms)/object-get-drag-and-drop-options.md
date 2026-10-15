---
id: object-get-drag-and-drop-options
title: OBJECT GET DRAG AND DROP OPTIONS
slug: /commands/object-get-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Syntax-->**OBJECT GET DRAG AND DROP OPTIONS** ( * ; *object* : Text ; *draggable* : Boolean ; *automaticDrag* : Boolean ; *droppable* : Boolean ; *automaticDrop* : Boolean )<br/>**OBJECT GET DRAG AND DROP OPTIONS** ( *object* : Variable, Field ; *draggable* : Boolean ; *automaticDrag* : Boolean ; *droppable* : Boolean ; *automaticDrop* : Boolean )<!-- END REF-->
<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string ; if omitted, object is a variable or a field|
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| draggable | Boolean | &#8592; | Draggable = True; otherwise, False |
| automaticDrag | Boolean | &#8592; | Automatic Drag = True; otherwise, False |
| droppable | Boolean | &#8592; | Droppable = True; otherwise, False |
| automaticDrop | Boolean | &#8592; | Automatic Drop = True; otherwise, False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Summary-->The **OBJECT GET DRAG AND DROP OPTIONS** command returns the drag and drop options for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. 

The command returns the current drag and drop options, as set in Design mode or for the current process using the [OBJECT SET DRAG AND DROP OPTIONS](../commands/object-set-drag-and-drop-options) command.

Each parameter returns True or False according to whether the corresponding option is enabled or disabled:

* *draggable* \= True: Object draggable in programmed mode.
* *automaticDrag* \= True (only used with text fields and variables, combo boxes and list boxes): Object draggable in automatic mode.
* *droppable* \= True: Object accepts drops in programmed mode.
* *automaticDrop* \= True (only used with picture fields and variables, text, combo boxes and list boxes): Object accepts drops in automatic mode.

## See also 

[OBJECT SET DRAG AND DROP OPTIONS](../commands/object-set-drag-and-drop-options)  

## Properties

|  |  |
| --- | --- |
| Command number | 1184 |
| Thread safe | no |


