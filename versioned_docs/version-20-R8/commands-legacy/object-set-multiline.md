---
id: object-set-multiline
title: OBJECT SET MULTILINE
slug: /commands/object-set-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MULTILINE.Syntax-->**OBJECT SET MULTILINE** ( {* ;} *object* ; *multiline* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MULTILINE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| multiline | Integer | &#8594;  | Status of multiline property |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET MULTILINE.Summary-->The **OBJECT SET MULTILINE** command modifies the "Multiline" property of the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

The "Multiline" property controls two parameters related to the display and printing of text areas: display of words located at the end of the line in single-line areas and the automatic insertion of line returns. For more information, refer to *Multiline* in the *Design Reference* manual. If you apply this command to an object that does not support this property, the command does nothing. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *multiline* parameter, pass the new value of the option that you want to set. You can use the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant       | Type    | Value | Comment                                                                                                                                                                                                                                                                                                              |
| -------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiline Auto | Integer | 0     | In single-line areas, words located at the end of lines are truncated and there are no line returns. <br/>In multiline areas, 4D carries out automatic line returns.                                                                                                                                         |
| Multiline No   | Integer | 2     | There are never line returns: the text is always displayed on a single row. If the Alpha or Text field or variable contains carriage returns, the text located after the first carriage return is removed as soon as the area is modified.                                                                           |
| Multiline Yes  | Integer | 1     | In single-line areas, the text is displayed up to the first carriage return or until the last word that can be displayed entirely. 4D inserts line returns; it is possible to scroll the contents of the area by pressing the down arrow key.<br/>In multiline areas, 4D carries out automatic line returns. |

  
#### Example 

You want to prohibit multiple lines in an entry area:

```4d
 OBJECT SET MULTILINE(*;"vEntry";Multiline No)
```

#### See also 

[OBJECT Get multiline](object-get-multiline.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1253 |
| Thread safe | &cross; |


