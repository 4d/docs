---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *styleSheetObj* ) | (*wpDoc* ; *styleSheetName* )<!-- END REF-->
<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| styleSheetObj | Object | &#8594;  | Style sheet object |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| styleSheetName | Text | &#8594;  | Name of style sheet |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->The **WP DELETE STYLE SHEET** command removes the designated paragraph or character style sheet from the current document.<!-- END REF--> When a style sheet is removed, every character or paragraph that it was applied to reverts to its original style (*i.e.* the default).

This command provides two ways to remove a style sheet. You can specify:

* the style sheet object (created with the [WP New style sheet](wp-new-style-sheet.md) or returned by the [WP Get style sheet](wp-get-style-sheet.md) command) to remove in the *styleSheetType* parameter, or
* the 4D Write Pro document along with the name of the style sheet to remove in the *wpDoc* and *styleSheetName* parameters.

**Note**: The default ("Normal") style sheet can not be deleted.

#### See also 

*Accessing document contents by programming*  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  