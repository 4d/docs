---
id: object-set-drag-and-drop-options
title: OBJECT SET DRAG AND DROP OPTIONS
slug: /commands/object-set-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Syntax-->**OBJECT SET DRAG AND DROP OPTIONS** ( * ; *object* : Text ; *draggable* : Boolean ; *automaticDrag* : Boolean ; *droppable* : Boolean ; *automaticDrop* : Boolean )<br/>**OBJECT SET DRAG AND DROP OPTIONS** ( *object* : Variable, Field ; *draggable* : Boolean ; *automaticDrag* : Boolean ; *droppable* : Boolean ; *automaticDrop* : Boolean )<!-- END REF-->
<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| draggable | Boolean | &#8594;  | Draggable = True; otherwise, False |
| automaticDrag | Boolean | &#8594;  | Automatic Drag = True; otherwise, False |
| droppable | Boolean | &#8594;  | Droppable = True; otherwise, False |
| automaticDrop | Boolean | &#8594;  | Automatic Drop = True; otherwise, False |
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

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Summary-->The **OBJECT SET DRAG AND DROP OPTIONS** command sets or dynamically modifies the drag and drop options for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

In each parameter, you pass a Boolean indicating whether the corresponding option is enabled or disabled: 

* *draggable* \= True: Object draggable in programmed mode.
* *automaticDrag* \= True (only used with text fields and variables, combo boxes and list boxes): Object draggable in automatic mode.
* *droppable* \= True: Object accepts drops in programmed mode.
* *automaticDrop* \= True (only used with picture fields and variables, text, combo boxes and list boxes): Object accepts drops in automatic mode.

## Example 

Setting a text area to automatic drag and drop: 

```4d
 OBJECT SET DRAG AND DROP OPTIONS(*;"Comments";False;True;False;True)
```

## See also 

[OBJECT GET DRAG AND DROP OPTIONS](../commands/object-get-drag-and-drop-options)  

## Properties

|  |  |
| --- | --- |
| Command number | 1183 |
| Thread safe | no |


