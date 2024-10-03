---
id: object-get-context-menu
title: OBJECT Get context menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get context menu.Syntax-->**OBJECT Get context menu** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get context menu.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a field or variable |
| object | Form object | -> | Object name (if * is specified) or 
Field or variable (if * is omitted) |
| Function result | Boolean | <- | True = context menu enabled, False = context menu disabled |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get context menu.Summary-->The **OBJECT Get context menu** command returns the current state of the "Context Menu" option for the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

You can set the "Context Menu" option in Design mode using the Property List, or using the [OBJECT SET CONTEXT MENU](object-set-context-menu.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, this indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only). 

The command returns **True** if the context menu is enabled for the object and **False** otherwise. 

#### See also 
[OBJECT SET CONTEXT MENU](object-set-context-menu.md)  