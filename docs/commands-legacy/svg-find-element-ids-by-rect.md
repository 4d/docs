---
id: svg-find-element-ids-by-rect
title: SVG Find element IDs by rect
slug: /commands/svg-find-element-ids-by-rect
displayed_sidebar: docs
---

<!--REF #_command_.SVG Find element IDs by rect.Syntax-->**SVG Find element IDs by rect** ( {* ;} *pictureObject* ; *x* ; *y* ; *width* ; *height* ; *arrIDs* ) : Boolean<!-- END REF-->
<!--REF #_command_.SVG Find element IDs by rect.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, pictureObject is an object name (string) <br/>If omitted, pictureObject is a variable |
| pictureObject | Picture | &#8594;  | Object name (if * specified) or <br/>Field or variable (if * omitted) |
| x | Integer | &#8594;  | Horizontal coordinate of top left corner of selection rectangle |
| y | Integer | &#8594;  | Vertical coordinate of top left corner of selection rectangle |
| width | Integer | &#8594;  | Width of selection rectangle |
| height | Integer | &#8594;  | Height of selection rectangle |
| arrIDs | Text array | &#8592; | IDs of elements whose bounding rectangle intersects with the selection rectangle |
| Function result | Boolean | &#8592; | True = at least one element is found |

<!-- END REF-->

#### Description 

<!--REF #_command_.SVG Find element IDs by rect.Summary-->The **SVG Find element IDs by rect** command fills the Text or Alpha *arrIDs* array with the IDs ("id" or "xml:id" attribute) of the XML elements whose bounding rectangle intersects with the selection rectangle at the location specified by the *x* and *y* parameters.<!-- END REF-->

The command returns True if at least one element is found (in other words if the *arrIDs* array is not empty), and False otherwise. 

This command can be used in particular to manage interactive graphic interfaces. 

If you pass the optional *\** parameter, you indicate that the *pictureObject* parameter is an object name (string). If you do not pass this parameter, you indicate that the *pictureObject* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

If you are working with a picture field or variable, the command uses the original picture, corresponding to the data source. However, if you are working with a form object, the command uses the current picture, that may have been modified via the [SVG SET ATTRIBUTE](svg-set-attribute.md) command and that is kept with the properties of the form object.

The coordinates passed in the *x* and *y* parameters must be expressed in pixels in relation to the top left corner of the picture (0,0). You can use the values returned by the MouseX and MouseY *System Variables*. These variables are updated in the On Clicked and On Double Clicked form events as well as the in the On Mouse Enter and On Mouse Move form events. 

**Note:** In the system of picture coordinates, \[x;y\] always specifies the same point, regardless of the picture display format, apart from the "Replicated" format. 

All elements whose bounding rectangle intersects with the selection rectangle are taken into account, even those that are under other elements.

#### See also 

[SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1109 |
| Thread safe | &cross; |


