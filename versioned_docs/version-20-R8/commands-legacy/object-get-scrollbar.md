---
id: object-get-scrollbar
title: OBJECT GET SCROLLBAR
slug: /commands/object-get-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLLBAR.Syntax-->**OBJECT GET SCROLLBAR** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLLBAR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| horizontal | Boolean, Integer | &#8592; | Visibility of horizontal scrollbar |
| vertical | Boolean, Integer | &#8592; | Visibility of vertical scrollbar |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET SCROLLBAR.Summary-->The OBJECT GET SCROLLBAR command is used to find out the displayed/hidden status of the horizontal and vertical scrollbars of the object or group of objects designated by *object*.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

In the *horizontal* and *vertical* parameters, you can pass Boolean or longint type variables:

* When you pass Boolean variables, the value returned reflects the **current** state of the scrollbar:  
   * If the scrollbar has been defined as hidden, the parameter receives False,  
   * If the scrollbar has been defined as displayed, the parameter receives True,  
   * If the scrollbar has been set to automatic mode, the parameter receives either True or False depending on the current display state of the object.
* When you pass longint variables, the value returned reflects the visibility defined for the scrollbar:  
   * If the scrollbar has been defined as hidden, the parameter receives 0,  
   * If the scrollbar has been defined as displayed, the parameter receives 1,  
   * If the scrollbar has been set to automatic mode, the parameter receives 2.

This command can be used with the following form objects:

* Picture or text object fields and variables
* List boxes,
* Hierarchical lists,
* Subforms.

For more information, refer to the description of the [OBJECT SET SCROLLBAR](object-set-scrollbar.md) command.

#### See also 

[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1076 |
| Thread safe | &cross; |


