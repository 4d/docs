---
id: object-get-best-size
title: OBJECT GET BEST SIZE
slug: /commands/object-get-best-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET BEST SIZE.Syntax-->**OBJECT GET BEST SIZE** ( {* ;} *object* ; *bestWidth* ; *bestHeight* {; *maxWidth*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET BEST SIZE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified = object is an object name (String) If omitted = object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Field or variable (if * is omitted) |
| bestWidth | Integer | &#8592; | Optimum object width |
| bestHeight | Integer | &#8592; | Optimum object height |
| maxWidth | Integer | &#8594;  | Maximum object width |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET BEST SIZE.Summary-->The **OBJECT GET BEST SIZE** command returns the *bestWidth* and *bestHeight* parameters, the “optimal” width and height of the form object designated by the *\** and *object* parameters.<!-- END REF--> These values are expressed in pixels. This command is particularly useful for displaying or printing complex reports, associated with the [OBJECT MOVE](object-move.md) command.

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a character string). If you do not pass the \* parameter, this indicates that *object* is a field or a variable. In this case, do not pass a string but rather a field or variable reference (object type only).

The optimal values returned indicate the minimum size of the object so that its current contents are entirely included within the limits. Usually these values are only meaningful for objects containing text. This calculation takes the font, font size, font style and object contents into account. It also takes hyphenation and carriage returns into consideration. Note that in the case of 3D buttons, the command works even when button contains only an icon. If the object specified is empty, the *bestWidth* returned is 0\. 

The size returned does not take into account any graphic frame applied around the object, nor any scrollbars. To obtain the real size of an object on screen, it is necessary to add the width of these elements. 

The optional *maxWidth* parameter enables you to attribute a maximum width to the object. If the optimal width of the object is greater than this value, **OBJECT GET BEST SIZE** returns *maxWidth* in the *bestWidth* parameter and increases the optimal height as a consequence.

The following objects are handled by this command:

* Static text areas
* Text inserted in the form of references
* Fields and variables of the following types: Alpha, Text, Real, Integer, Long Integer, Date, Time, Boolean (check boxes and radio buttons)
* Buttons
* List box columns in display context (only visible rows are taken into account).

For all other form object types (group areas, tabs, rectangles, straight lines, circles/ovals, external areas, etc.), the **OBJECT GET BEST SIZE** command returns the current object size (defined in the form editor and possibly using the [OBJECT MOVE](object-move.md) command).

#### Example 

Refer to the example in the [SET PRINT MARKER](set-print-marker.md) command. 

#### See also 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 717 |
| Thread safe | &check; |
| Forbidden on the server ||


