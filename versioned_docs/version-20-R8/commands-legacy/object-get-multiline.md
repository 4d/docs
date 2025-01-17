---
id: object-get-multiline
title: OBJECT Get multiline
slug: /commands/object-get-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get multiline.Syntax-->**OBJECT Get multiline** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get multiline.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| Function result | Integer | &#8592; | Multiline status of object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get multiline.Summary-->The **OBJECT Get multiline** command returns the current state of the "Multiline" option for the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

You can set the "Multiline" option for an object using the Property List, or using the [OBJECT SET MULTILINE](object-set-multiline.md) command option. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

The value returned corresponds to one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant       | Type    | Value | Comment                                                                                                                                                                                                                                                                                                              |
| -------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiline Auto | Integer | 0     | In single-line areas, words located at the end of lines are truncated and there are no line returns. <br/>In multiline areas, 4D carries out automatic line returns.                                                                                                                                         |
| Multiline No   | Integer | 2     | There are never line returns: the text is always displayed on a single row. If the Alpha or Text field or variable contains carriage returns, the text located after the first carriage return is removed as soon as the area is modified.                                                                           |
| Multiline Yes  | Integer | 1     | In single-line areas, the text is displayed up to the first carriage return or until the last word that can be displayed entirely. 4D inserts line returns; it is possible to scroll the contents of the area by pressing the down arrow key.<br/>In multiline areas, 4D carries out automatic line returns. |

**Note:** If you apply the **OBJECT Get multiline** command to an object that does not support the "Multiline" option, the command returns 0.  

#### See also 

[OBJECT SET MULTILINE](object-set-multiline.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1254 |
| Thread safe | &cross; |


