---
id: list-of-style-sheets
title: LIST OF STYLE SHEETS
slug: /commands/list-of-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.LIST OF STYLE SHEETS.Syntax-->**LIST OF STYLE SHEETS** ( *arrStyleSheets* )<!-- END REF-->
<!--REF #_command_.LIST OF STYLE SHEETS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrStyleSheets | Text array | &#8592; | Names of style sheets defined in the application |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LIST OF STYLE SHEETS.Summary-->The **LIST OF STYLE SHEETS** command returns the list of application style sheets in the *arrStyleSheets* array.<!-- END REF-->

If it was not already defined previously, the *arrStyleSheets* text array is created by the command. It is automatically sized according to the number of style sheets defined. 

After executing the command, each element of the array contains the name of a style sheet. These names are sorted alphabetically, as in the style sheet editor. The first array element always contains "\_\_automatic\_\_", which represents the "Automatic" style sheet.

**Note:** For compatibility reasons, the automatic style sheets "\_\_automatic\_main\_text\_\_" and "\_\_automatic\_additional\_text\_\_" are not returned by this command. However, they are still available in the forms. 

##### Compatibility Note 

This command can only be used in **binary databases**. In **project architecture**, the array is not filled. 

#### Example 

In your application, the following style sheets are defined:

![](../assets/en/commands/pict1206954.en.png)

If you execute the following code:

```4d
 LIST OF STYLE SHEETS($arrStyles)
  // $arrStyles{1} contains "__automatic__"
  // $arrStyles{2} contains "Buttons"
  // $arrStyles{3} contains "default"
  // $arrStyles{4} contains "Input_fields"
  // $arrStyles{5} contains "Labels"
  // $arrStyles{6} contains "Variables"
```

#### See also 

[GET STYLE SHEET INFO](get-style-sheet-info.md)  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  