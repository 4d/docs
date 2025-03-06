---
id: wp-get-style-sheets
title: WP Get style sheets
slug: /WritePro/commands/wp-get-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheets.Syntax-->**WP Get style sheets** ( *wpDoc* ; *type* ) : Collection<!-- END REF-->
<!--REF #_command_.WP Get style sheets.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| type | Integer | &#8594;  | Type of style sheet |
| Function result | Collection | &#8592; | Collection of style sheet objects |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get style sheets.Summary-->The **WP Get style sheets** command returns a collection of all the style sheet objects of the defined *type* in *wpDoc*.<!-- END REF-->

In the *wpDoc* parameter, pass the 4D Write Pro document with the style sheets you want to get.

The *type* parameter specifies the type of style sheet to return. The available types are:

* wk type character for character style sheets
* wk type paragraph for paragraph style sheets

#### Example 

You want to retrieve a collection of all character style sheets:

```4d
 var $styleSheets : Collection
 $styleSheets:=WP Get style sheets(myDoc;wk type character)
```

#### See also 

*Accessing document contents by programming*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  