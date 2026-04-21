---
id: object-set-style-sheet
title: OBJECT SET STYLE SHEET
slug: /commands/object-set-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET STYLE SHEET.Syntax-->**OBJECT SET STYLE SHEET** ( * ; *object* : Text ; *styleSheetName* : Text )<br/>**OBJECT SET STYLE SHEET** ( *object* : Variable, Field ; *styleSheetName* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET STYLE SHEET.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| styleSheetName | Text | &#8594;  | Name of style sheet |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|15 R3|Modified|
|14|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET STYLE SHEET.Summary-->The **OBJECT SET STYLE SHEET** command modifies, for the current process, the style sheet associated with the object(s) designated by the *object* and *\** parameters.<!-- END REF--> A style sheet modifies the font, font size and (except for automatic style sheets) font style.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only). 

In the *styleSheetName* parameter, you pass the name of the style sheet to be applied to the *object*. You can also pass either:

* the name of an existing style sheet (if the style sheet does not exist, an error is returned, that you can intercept using a method installed by the [ON ERR CALL](../commands/on-err-call) command),
* an empty string ("") so as to not apply the style sheet to the *object*, or
* one of the following constants found in the "*Font Styles*" theme in order to apply an automatic style shee:  

| Constant                          | Type   | Value                               | Comment                                                                                        |  
| --------------------------------- | ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------- |  
| Automatic style sheet             | Text | \_\_automatic\_\_                   | Used by default for all objects                                                                |  
| Automatic style sheet\_additional | Text | \_\_automatic\_additional\_text\_\_ | Supported by static text, fields and variables only. Used for additional text in dialog boxes. |  
| Automatic style sheet\_main       | Text | \_\_automatic\_main\_text\_\_       | Supported by static text, fields and variables only. Used for main text in dialog boxes.       |

If a style sheet was already associated with the object in Design mode, calling this command replaces it for the current process. 

During the session, if you use the [ST SET ATTRIBUTES](../commands/st-set-attributes), [ST SET TEXT](../commands/st-set-text), [OBJECT SET FONT](../commands/object-set-font) or [OBJECT SET FONT SIZE](../commands/object-set-font-size) commands on the *object* in order to modify its font or font size, the reference to the style sheet is automatically deleted from the object -- even if you assign the same attributes as those of the style sheet. However, if you modify the style (bold, italic, etc.), for example using the [ST SET ATTRIBUTES](../commands/st-set-attributes) or [OBJECT SET FONT STYLE](../commands/object-set-font-style) commands, these new properties are added to the style sheet for the duration of the session.

### Compatibility Note 

In **project architecture**, only the three automatic style sheets are supported by this command. 

## See also 

*Font Styles*  
[GET STYLE SHEET INFO](../commands/get-style-sheet-info)  
[LIST OF STYLE SHEETS](../commands/list-of-style-sheets)  
[OBJECT Get style sheet](../commands/object-get-style-sheet)  

## Properties

|  |  |
| --- | --- |
| Command number | 1257 |
| Thread safe | no |


