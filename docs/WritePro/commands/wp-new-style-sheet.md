---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *wpDoc* : Object ; *styleSheetType* : Integer ; *styleSheetName* : Text {; *listLevelCount* : Integer} ) : Object <!-- END REF-->

<!--REF #_command_.WP New style sheet.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| styleSheetType | Integer | &#8594;  | Type of style sheet |
| styleSheetName | Text | &#8594;  | Name of style sheet |
| listLevelCount | Integer | &#8594;  | Total number of levels in the hierarchy |
| Function result | Object | &#8592; | Style sheet object |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|4D 18|Created|
|4D 21 R3|*listLevelCount* parameter added|

</details>
</div>

## Description 

<!--REF #_command_.WP New style sheet.Summary-->The **WP New style sheet** command creates a new (empty) style sheet object for the designated *wpDoc*.<!-- END REF-->

In the *wpDoc* parameter, pass a 4D Write Pro document. 

The *styleSheetType* parameter lets you designate the type of the style sheet, *i.e.* the part of the *wpDoc* that will be affected by the style sheet. Two types are available:

* wk type character: Applies style attributes to characters.
* wk type paragraph: Applies style attributes to paragraphs (required if you want to create [hierarchical list style sheets](#hierarchical-list-style-sheet)).

Pass a name for the style sheet in the *styleSheetName* parameter. The style sheet's name is stored with the document and facilitates reusing or modifying the style. It can also be used with the [WP Get style sheet](../WritePro/commands/wp-get-style-sheet) and [WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet) commands. The style sheet name must comply with the following rules:

* it must start with a letter
* it can then contain alphanumeric characters, space characters, "-" characters or unicode characters >= 128
* it must be unique in the document regardless of the type
* it must not start with "section", which is reserved
* the "\_" is replaced by a space and trailing spaces are removed.

You can specify the attributes of the style sheet using the [WP SET ATTRIBUTES](../commands/wp-set-attributes) command or the object notation (see [4D Write Pro Attributes](../commands-legacy/4d-write-pro-attributes.md)). For the list of available attributes, see the [Style sheet attributes](../commands-legacy/4d-write-pro-attributes.md#style-sheets) section.

**Notes**: 

* A style sheet only modifies the display of a character or paragraph, not how it is stored in the document. If a style sheet is removed, the text will revert to the default style.
* Any style attributes not defined in the new style sheet will automatically use the Normal style. For more information, see the [*Style sheets* page](../user-legacy/stylesheets.md).

### Hierarchical list style sheet

If the *styleSheetType* parameter is set to `wk type paragraph`, you can optionally pass the *listLevelCount* parameter to create a [hierarchical list style sheet](../user-legacy/stylesheets.md#hierarchical-list-style-sheets).

The *listLevelCount* parameter defines the total number of levels in the hierarchy. When specified (value ≥ 1), the command automatically creates a root-level style sheet and the corresponding sub-level style sheets.

The following predefined values are applied:

* `wk list style type` is set to `wk decimal`
* `wk list level index` is automatically assigned (1 for the root level, incremented for sub-levels)
* `wk list level count` is set to the specified value for all levels
* `wk margin left` is automatically calculated (0.75 cm × level index or 0.25 inches * level index, depending on current layout unit): so offset may be different depending if layout unit is metric or inches (for better alignment on default with current Write ruler graduations)


If the parameter is omitted or set to 0, a standard (non-list) paragraph style sheet is created.

## Example 1

The following code creates and defines a paragraph style sheet:

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 
  //define style sheet settings
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")
 WP SET ATTRIBUTES($styleSheet;wk text color;"red")
 WP SET ATTRIBUTES($styleSheet;wk text align;wk left)
 
  //Apply the style sheet to the first paragraph
 var $Paragraphs : Collection
 $Paragraphs:=WP Get elements(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if
```

## Example 2

The following code creates a hierarchical list style sheet with 3 levels:

```4d
var $mainList : Object

$mainList:=WP New style sheet(wpArea; wk type paragraph; "MainList"; 3)

// The command automatically creates:
// - 1 root-level style sheet ("MainList")
// - 2 sub-level style sheets ("MainList lvl 2" and "MainList lvl 3")

```
Result:

* The root style sheet has:
  * `wk list level index` = 1
  * `wk list level count` = 3
  * `wk list style type` = `wk decimal`

* The sub-level style sheets:
  * have incremented `wk list level index` values (2 and 3)
  * share the same `wk list level count`
  * are automatically indented (0.75 cm × level index)
  * reference the root style sheet through `wk root style`

## See also 

[Style sheets](../user-legacy/stylesheets.md)   
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../WritePro/commands/wp-get-style-sheets)  
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheets)  
