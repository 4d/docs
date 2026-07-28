---
id: wp-get-style-sheets
title: WP Get style sheets
slug: /WritePro/commands/wp-get-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheets.Syntax-->**WP Get style sheets** ( *wpDoc* : Object ; *type* : Integer ) : Collection<!-- END REF-->
<!--REF #_command_.WP Get style sheets.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| type | Integer | &#8594;  | Type of style sheet |
| Function result | Collection | &#8592; | Collection of style sheet objects |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.WP Get style sheets.Summary-->The **WP Get style sheets** command returns a collection of all the style sheet objects of the defined *type* in *wpDoc*.<!-- END REF-->

In the *wpDoc* parameter, pass the 4D Write Pro document with the style sheets you want to get.

The *type* parameter specifies the type of style sheet to return. The available types are:

* wk type character for character style sheets
* wk type paragraph for paragraph style sheets

## Example 

You want to retrieve a collection of all character style sheets:

```4d
 var $styleSheets : Collection
 $styleSheets:=WP Get style sheets(myDoc;wk type character)
```

## See also 

*Accessing document contents by programming*  
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheet)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)  