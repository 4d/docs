---
id: object-get-scroll-position
title: OBJECT GET SCROLL POSITION
slug: /commands/object-get-scroll-position
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLL POSITION.Syntax-->**OBJECT GET SCROLL POSITION** ( {* ;} *object* ; *vPosition* {; *hPosition*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLL POSITION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) <br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable or field or table (if * is omitted) |
| vPosition | Integer | &#8592; | Number of first line displayed or Vertical scrolling in pixels (pictures) |
| hPosition | Integer | &#8592; | Number of first column displayed or<br/>Horizonal scrolling in pixels (pictures) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT GET SCROLL POSITION.Summary-->The OBJECT GET SCROLL POSITION returns, in the *vPosition* and *hPosition* parameters, information related to the position of the scroll bars of the form object designated by the *\** and *object* parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is the name of an object of the subform, hierarchical list, scrollable area, list box or picture type (in this case, pass a string in object). If you do not pass this parameter, you indicate that the *object* parameter is a variable ([ListRef](# "A Longint reference to a hierachical list") of hierarchical list, picture or list box variable) or a field.

**Note:** With subform type objects, only the syntax using an *\** is supported. 

If *object* designates a list type object (subform, list form, hierarchical list, scrollable area or list box), *vPosition* returns the number of the first line displayed in the object. *hPosition* (list box only) returns the number of the first column that is completely visible in the left part of the list box. With other types of objects, this parameter returns 0.

If *object* designates a picture (variable or field), *vPosition* returns the vertical movement and *hPosition* the horizontal movement of the picture. These values are expressed in pixels with respect to the origin of the picture in the local coordinate system. 

#### See also 

[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)  