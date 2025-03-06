---
id: object-get-subform-container-size
title: OBJECT GET SUBFORM CONTAINER SIZE
slug: /commands/object-get-subform-container-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Syntax-->**OBJECT GET SUBFORM CONTAINER SIZE** ( *width* ; *height* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| width | Integer | &#8592; | Width of subform object |
| height | Integer | &#8592; | Height of subform object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Summary-->The **OBJECT GET SUBFORM CONTAINER SIZE** command returns the *width* and *height* (in pixels) of a "current" subform object, displayed in the parent form.<!-- END REF-->

This command must be called from the method of a form used as a subform and displayed in a subform object. It returns the *width* and *height* of the object containing the subform.

This command is useful, for example, in the case where subform objects must be resized according to the characteristics of the subform object itself. In the On Load form event, the subform can call this command to calculate the space at its disposal in order to display its contents.

The On Resize event is generated in the subform form method if the subform object is resized in the parent form object (for example if the subform object has a grow horizontally and/or vertically property and the parent form is resized). 

* If the command is called from a form that is not being used as a subform, it returns the current size of the form window.
* If the command is called outside of the context of screen display (for example, during form printing), it returns 0 in *width* and *height*.

#### See also 

[OBJECT GET SUBFORM](object-get-subform.md)  
[OBJECT SET SUBFORM](object-set-subform.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1148 |
| Thread safe | &cross; |


