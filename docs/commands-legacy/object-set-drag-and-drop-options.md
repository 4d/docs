---
id: object-set-drag-and-drop-options
title: OBJECT SET DRAG AND DROP OPTIONS
slug: /commands/object-set-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Syntax-->**OBJECT SET DRAG AND DROP OPTIONS** ( {* ;} *object* ; *draggable* ; *automaticDrag* ; *droppable* ; *automaticDrop* )<!-- END REF-->
<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string)If omitted, object is a variable |
| object | Form object | &#x1F852; | Object Name (if * is specified) or Variable (if * is omitted) |
| draggable | Boolean | &#x1F852; | Draggable = True; otherwise, False |
| automaticDrag | Boolean | &#x1F852; | Automatic Drag = True; otherwise, False |
| droppable | Boolean | &#x1F852; | Droppable = True; otherwise, False |
| automaticDrop | Boolean | &#x1F852; | Automatic Drop = True; otherwise, False |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Summary-->The **OBJECT SET DRAG AND DROP OPTIONS** command sets or dynamically modifies the drag and drop options for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

In each parameter, you pass a Boolean indicating whether the corresponding option is enabled or disabled: 

* *draggable* \= True: Object draggable in programmed mode.
* *automaticDrag* \= True (only used with text fields and variables, combo boxes and list boxes): Object draggable in automatic mode.
* *droppable* \= True: Object accepts drops in programmed mode.
* *automaticDrop* \= True (only used with picture fields and variables, text, combo boxes and list boxes): Object accepts drops in automatic mode.

#### Example 

Setting a text area to automatic drag and drop: 

```4d
 OBJECT SET DRAG AND DROP OPTIONS(*;"Comments";False;True;False;True)
```

#### See also 

[OBJECT GET DRAG AND DROP OPTIONS](object-get-drag-and-drop-options.md)  