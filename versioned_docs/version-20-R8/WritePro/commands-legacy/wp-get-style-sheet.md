---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *wpDoc* ; *styleSheetName* ) : Object<!-- END REF-->
<!--REF #_command_.WP Get style sheet.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| styleSheetName | Text | &#8594;  | Style sheet name |
| Function result | Object | &#8592; | Style sheet object |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get style sheet.Summary-->The **WP Get style sheet** command returns the style sheet object designated by the *styleSheetName*.<!-- END REF-->

In *wpDoc*, pass the 4D Write Pro document that contains the style sheet.

The *styleSheetName* parameter allows you to specify the name of the style sheet to return. If the style sheet name does not exist in *wpDoc*, an null object is returned.

#### Example 

To retrieve the "Main title" style sheet:

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Main title")
 If($styleSheet=Null) // check if the style sheet exists//if not create it
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 End if
```

#### See also 

*Accessing document contents by programming*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  