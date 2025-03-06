---
id: wp-import-style-sheets
title: WP IMPORT STYLE SHEETS
slug: /WritePro/commands/wp-import-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP IMPORT STYLE SHEETS.Syntax-->**WP IMPORT STYLE SHEETS** ( *targetDoc* ; *sourceDoc* )<!-- END REF-->
<!--REF #_command_.WP IMPORT STYLE SHEETS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetDoc | Object | &#8594;  | 4D Write Pro document to receive style sheets |
| sourceDoc | Object | &#8594;  | 4D Write Pro document to get style sheets from |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP IMPORT STYLE SHEETS.Summary-->The **WP IMPORT STYLE SHEETS** command imports all of the style sheets from the *sourceDoc* into the *targetDoc*.<!-- END REF-->

In the *targetDoc* parameter, pass the 4D Write Pro document that will receive the imported style sheets.

In the *sourceDoc* parameter, pass the 4D Write Pro document containing the style sheets to import. 

**Note**: If a style sheet from *sourceDoc* has the same name as a style sheet in *targetDoc*, the imported style sheet will overwrite (replace) the style sheet in the *targetDoc*.

#### Example 

You want to import a template style sheet and receive a notification with the number for each type of style sheet imported:

```4d
 wpArea:=WP New
 $template:=WP Import document("Template.4wp")
 
 WP IMPORT STYLE SHEETS(wpArea;$template)
 
 $nb1:=WP Get style sheets(wpArea;wk type paragraph).length
 $nb2:=WP Get style sheets(wpArea;wk type character).length
 ALERT(String($nb1)+" paragraph style sheet(s) and "+string($nb2)+" character style sheet(s) imported))
```

#### See also 

[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  