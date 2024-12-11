---
id: object-set-focus-rectangle-invisible
title: OBJECT SET FOCUS RECTANGLE INVISIBLE
slug: /commands/object-set-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Syntax-->**OBJECT SET FOCUS RECTANGLE INVISIBLE** ( {* ;} *object* ; *invisible* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| invisible | Boolean | &#8594;  | True = focus rectangle hidden,False = focus rectangle shown |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Summary-->The **OBJECT SET FOCUS RECTANGLE INVISIBLE** command sets or dynamically modifies the visibility option for the focus rectangle of the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF--> This setting corresponds to the **Hide focus rectangle** option that is available for enterable objects in the Property List in the Design mode. 

**Note:** You can only use this option under Mac OS. It has no effect under Windows. 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a variable reference instead of a string. 

Pass **True** in the *invisible* parameter to hide the focus rectangle and **False** to keep it visible.

#### See also 

[OBJECT Get focus rectangle invisible](object-get-focus-rectangle-invisible.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1177 |
| Thread safe | &check; |
| Forbidden on the server ||


