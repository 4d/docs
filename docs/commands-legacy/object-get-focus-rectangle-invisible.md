---
id: object-get-focus-rectangle-invisible
title: OBJECT Get focus rectangle invisible
slug: /commands/object-get-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get focus rectangle invisible.Syntax-->**OBJECT Get focus rectangle invisible** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get focus rectangle invisible.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable or field |
| object | any | &#8594;  | Object Name (if * is specified) or Variable or field (if * is omitted) |
| Function result | Boolean | &#8592; | True = focus rectangle hidden, False = focus rectangle shown |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get focus rectangle invisible.Summary-->The **OBJECT Get focus rectangle invisible** command returns the status of the visibility option for the focus rectangle of the object(s) designated by the *object* and *\** parameters for the current process .<!-- END REF--> This setting corresponds to the **Hide focus rectangle** option that is available for enterable objects in the Property List in the Design mode. This command returns the current status of the option, as it is defined in Design mode or using the [OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md) command.

**Note:** You can only use this option under Mac OS. It has no effect under Windows. 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable or a field. In this case, you pass a variable reference instead of a string.

The command returns **True** when the focus rectangle is hidden and **False** when it is shown.

#### See also 

[OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1178 |
| Thread safe | &check; |
| Forbidden on the server ||


