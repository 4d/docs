---
id: object-set-context-menu
title: OBJECT SET CONTEXT MENU
slug: /commands/object-set-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET CONTEXT MENU.Syntax-->**OBJECT SET CONTEXT MENU** ( {* ;} *object* ; *contextMenu* )<!-- END REF-->
<!--REF #_command_.OBJECT SET CONTEXT MENU.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| contextMenu | Boolean | &#8594;  | True = enable context menu, False = disable context menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET CONTEXT MENU.Summary-->The **OBJECT SET CONTEXT MENU** command enables or disables, for the current process, the association of a context menu by default with the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

The "Context Menu" option is available for text type entry areas, Web areas and pictures. You can use it to associate a standard action menu with these objects depending on their type (for example Copy/Paste for text objects). For more information, refer to the *Design Reference* manual. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only). 

Pass **True** in the *contextMenu* parameter to enable the context menu, and **False** to disable it. 

#### See also 

[OBJECT Get context menu](object-get-context-menu.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1251 |
| Thread safe | &cross; |


