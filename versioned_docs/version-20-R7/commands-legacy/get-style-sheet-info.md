---
id: get-style-sheet-info
title: GET STYLE SHEET INFO
slug: /commands/get-style-sheet-info
displayed_sidebar: docs
---

<!--REF #_command_.GET STYLE SHEET INFO.Syntax-->**GET STYLE SHEET INFO** ( *styleSheetName* ; *font* ; *size* ; *styles* )<!-- END REF-->
<!--REF #_command_.GET STYLE SHEET INFO.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| styleSheetName | Text | &#8594;  | Name of style sheet |
| font | Text | &#8592; | Character font |
| size | Integer | &#8592; | Font size |
| styles | Integer | &#8592; | Style value |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET STYLE SHEET INFO.Summary-->The **GET STYLE SHEET INFO** command returns the current configuration of the style sheet designated in the *styleSheetName* parameter.<!-- END REF--> 

In *styleSheetName*, you pass the name of the style sheet as defined in the Design mode. To designate an automatic style sheet, you can use one of the following constants, found in the "*Font Styles*" theme: 

| Constant                          | Type   | Value                               | Comment                                                                                        |
| --------------------------------- | ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| Automatic style sheet             | Text | \_\_automatic\_\_                   | Used by default for all objects                                                                |
| Automatic style sheet\_additional | Text | \_\_automatic\_additional\_text\_\_ | Supported by static text, fields and variables only. Used for additional text in dialog boxes. |
| Automatic style sheet\_main       | Text | \_\_automatic\_main\_text\_\_       | Supported by static text, fields and variables only. Used for main text in dialog boxes.       |

In *font*, the command returns the name of the font associated with the style sheet for the current platform. 

In *size*, the command returns the size in points of the font associated with the style sheet for the current platform. 

In *styles*, the command returns a value corresponding to the style(s) associated with the style sheet for the current platform. You can compare the value received with the following constants, found in the "*Font Styles*" theme: 

| Constant             | Type    | Value |
| -------------------- | ------- | ----- |
| Bold                 | Integer | 1     |
| Bold and Italic      | Integer | 3     |
| Bold and Underline   | Integer | 5     |
| Italic               | Integer | 2     |
| Italic and Underline | Integer | 6     |
| Plain                | Integer | 0     |
| Underline            | Integer | 4     |

If the command is executed correctly, the *OK* system variable is set to 1\. Otherwise (for example, if the *styleSheetName* does not exist), it is set to 0.

##### Compatibility Note 

In **project architecture**, only the three automatic style sheets are supported by this command. 

#### Example 

You want to find out the current configuration of the "Automatic" style sheet:

```4d
 var $size;$style : Integer
 var $font : Text
 GET STYLE SHEET INFO(Automatic style sheet;$font;$size;$style)
```

#### See also 

[LIST OF STYLE SHEETS](list-of-style-sheets.md)  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  