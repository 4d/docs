---
id: object-move
title: OBJECT MOVE
slug: /commands/object-move
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT MOVE.Syntax-->**OBJECT MOVE** ( {* ;} *object* ; *moveH* ; *moveV* {; *resizeH* {; *resizeV* {; *}}} )<!-- END REF-->
<!--REF #_command_.OBJECT MOVE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified= object is an object name (string) If omitted = object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Field or variable (if * is omitted) |
| moveH | Integer | &#8594;  | Value of the horizontal move of the object (>0 = to the right, <0 = to the left) |
| moveV | Integer | &#8594;  | Value of the vertical move of the object (>0 = to the bottom, <0 = to the top) |
| resizeH | Integer | &#8594;  | Value of the horizontal resize of the object |
| resizeV | Integer | &#8594;  | Value of the vertical resize of the object |
| * | Operator | &#8594;  | If specified = absolute coordinates If omitted = relative coordinates |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT MOVE.Summary-->The OBJECT MOVE command allows you to move the object(s) in the current form, defined by the *\** and *object* parameters *moveH* pixels horizontally and *moveV* pixels vertically.<!-- END REF--> 

It is also possible (optionally) to resize the object(s) *resizeH* pixels horizontally and *resizeV* pixels vertically. 

The direction to move and resize depend on the values passed to the *moveH* and *moveV* parameters:

* If the value is positive, objects are moved and resized to the right and to the bottom, respectively.
* If the value is negative, objects are moved and resized to the left and to the top, respectively.

If you pass the first optional parameter *\**, you indicate that the *object* parameter is a parameter name (a string of characters). If you don’t pass the *\** parameter, *object* is a field or a variable. In this case, you don’t pass a string but a field or variable reference (only a field or variable of type object).

If you pass an object name to object and use the wildcard character (“@”) to select more than one object, all the objects concerned will be moved or resized. 

**Note:** Since 4D version 6.5, it is possible to set the interpretation mode of the wildcard character (“@”), when it is included in a string of characters. This option has an impact on the “Object Properties” commands. Please refer to the 4D Design Mode manual.

By default, the values *moveH*, *moveV*, *resizeH* and *resizeV* modify the coordinates of the object relative to its previous position. If you want the parameters to define the absolute parameters, pass the last optional parameter *\**.

This command works in the following contexts:

* Data entering in Input forms,
* Forms displayed using the [DIALOG](dialog.md) command,
* Headers and footers of Output forms displayed with [MODIFY SELECTION](modify-selection.md) or [DISPLAY SELECTION](display-selection.md) commands,
* Form printing events.

#### Example 1 

The following statement moves “button\_1” 10 pixels to the right, 20 pixels to the top and resizes it to 30 pixels in width and 40 in height: 

```4d
 OBJECT MOVE(*;"button_1";10;-20;30;40)
```

  
#### Example 2 

The following statement moves “button\_1” to the following coordinates (10;20) (30;40):

```4d
 OBJECT MOVE(*;"button_1";10;20;30;40;*)
```

#### See also 

[OBJECT DUPLICATE](object-duplicate.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  