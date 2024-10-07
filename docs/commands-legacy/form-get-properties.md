---
id: form-get-properties
title: FORM GET PROPERTIES
slug: /commands/form-get-properties
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET PROPERTIES.Syntax-->**FORM GET PROPERTIES** ( {*aTable* ;} *formName* ; *width* ; *height* {; *numPages* {; *fixedWidth* {; *fixedHeight* {; *title*}}}} )<!-- END REF-->
<!--REF #_command_.FORM GET PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#x1F852; | Table of the form or Default table, if omitted |
| formName | Text | &#x1F852; | Name of the form |
| width | Integer | &#x1F858; | Width of the form (in pixels) |
| height | Integer | &#x1F858; | Height of the form (in pixels) |
| numPages | Integer | &#x1F858; | Number of pages in the form |
| fixedWidth | Boolean | &#x1F858; | True = Fixed width, False = Variable width |
| fixedHeight | Boolean | &#x1F858; | True = Fixed height, False = Variable height |
| title | Text | &#x1F858; | Title of the form’s window |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET PROPERTIES.Summary-->The FORM GET PROPERTIES command returns the properties of the form *formName*.<!-- END REF-->

The *width* and *height* parameters return the form’s width and height in pixels. These values are determined from the form’s Default window size properties:

* If the form’s size is **automatic**, its width and height are calculated so that all the form’s objects are visible, by taking into consideration the horizontal and vertical margins that were defined.
* If the form’s size is **set**, its width and height are those manually entered in the corresponding areas.
* If the form’s size is **based on an object**, its width and height are calculated in relation to this object’s position.

The *numPages* parameter returns the number of pages in the form, excluding page 0 (zero).

The *fixedWidth* and *fixedHeight* parameters indicate if the length and width of the form are resizable (the parameter returns **False**) or set (the parameter returns **True**).

The *title* parameter returns the title of the form's window as it was defined in the Property List of the Form editor. If no name was defined, the *title* parameter returns an empty string.

#### See also 

[FORM GET OBJECTS](form-get-objects.md)  
[FORM SET SIZE](form-set-size.md)  
[Open form window](open-form-window.md)  