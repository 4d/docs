---
id: object-get-style-sheet
title: OBJECT Get style sheet
slug: /commands/object-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get style sheet.Syntax-->**OBJECT Get style sheet** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get style sheet.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| Function result | Text | &#8592; | Name of style sheet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get style sheet.Summary-->The **OBJECT Get style sheet** command returns the name of the style sheet associated with the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

Style sheets may have been assigned in Design mode using the Property List, or for the current process using the [OBJECT SET STYLE SHEET](object-set-style-sheet.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

The command can return either:

* a style sheet name,
* an empty string ("") if no style sheet is assigned, or
* if an automatic style sheet is assigned, one of the following constants found in the "*Font Styles*" theme:  

| Constant                          | Type   | Value                               | Comment                                                                                        |  
| --------------------------------- | ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------- |  
| Automatic style sheet             | Text | \_\_automatic\_\_                   | Used by default for all objects                                                                |  
| Automatic style sheet\_additional | Text | \_\_automatic\_additional\_text\_\_ | Supported by static text, fields and variables only. Used for additional text in dialog boxes. |  
| Automatic style sheet\_main       | Text | \_\_automatic\_main\_text\_\_       | Supported by static text, fields and variables only. Used for main text in dialog boxes.       |

If the command designates several objects, the style sheet returned is only meaningful if the style sheet is assigned to all of the objects. 

#### Compatibility Note 

In **project architecture**, only the three automatic style sheets are supported by this command. 

#### See also 

*Font Styles*  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1258 |
| Thread safe | &check; |
| Forbidden on the server ||


