---
id: svg-show-element
title: SVG SHOW ELEMENT
slug: /commands/svg-show-element
displayed_sidebar: docs
---

<!--REF #_command_.SVG SHOW ELEMENT.Syntax-->**SVG SHOW ELEMENT** ( {* ;} *pictureObject* ; *id* {; *margin*} )<!-- END REF-->
<!--REF #_command_.SVG SHOW ELEMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, pictureObject is an object name (string) <br/>If omitted, pictureObject is a variable |
| pictureObject | Picture | &#8594;  | Object name (if * specified) or <br/>Variable or field (if * omitted) |
| id | Text | &#8594;  | ID attribute of element to display |
| margin | Integer | &#8594;  | Margin of visibility (in pixels by default) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SVG SHOW ELEMENT.Summary-->The SVG SHOW ELEMENT command moves the *pictureObject* SVG document in order to show the element whose "id" attribute is specified by the *id* parameter.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *pictureObject* parameter is an object name (string). In this case, the command applies to the rendered picture attached to the object. If you do not pass this parameter, you indicate that the *pictureObject* parameter is a field or a variable and you pass a variable (object variable only) or field reference instead of a string. In this case, the command applies to the rendered pictures of all the objects that use the variable (but not the initial rendered picture). 

The command moves the SVG document so that all of the object, whose limits are defined by its bounding rectangle, is visible. The *margin* parameter is used to configure the amplitude of the movement by specifying the distance that must separate the object displayed from the borders of the document. In other words, the bounding rectangle will be increased by *margin* pixels in width and in height. By default, the movement value is 4 pixels. 

This command only takes effect in "top left" display mode (with scrollbars). 

If this command is not executed in the context of a form or if an invalid *pictureObject* is passed, the *OK* variable is set to 0\. If the command is executed correctly, it is set to 1\. 


#### Properties
|  |  |
| --- | --- |
| Command number | 1108 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


