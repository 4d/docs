---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *wpDoc* : Object ; *styleSheetName* : Text {; *listLevelIndex* : Integer } ) : Object<!-- END REF-->
<!--REF #_command_.WP Get style sheet.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| styleSheetName | Text | &#8594;  | Style sheet name |
| listLevelIndex | Integer | &#8594;  | Level of the style sheet in the hierarchy |
| Function result | Object | &#8592; | Style sheet object |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|4D 21 R3|*listLevelIndex* parameter added|
|4D 18|Created|

</details>
</div>

## Description 

<!--REF #_command_.WP Get style sheet.Summary-->The **WP Get style sheet** command returns the style sheet object designated by the *styleSheetName* or by the style sheet name and the *listLevelIndex* in the case of a [hierarchical list style sheet](../user-legacy/stylesheets.md#hierarchical-list-style-sheets).<!-- END REF-->

In *wpDoc*, pass the 4D Write Pro document that contains the style sheet.

The *styleSheetName* parameter allows you to specify the name of the style sheet to return. If the style sheet name does not exist in *wpDoc*, an null object is returned.

If the *styleSheetName* is the root-level name of a hierarchical list style sheet, you can optionally specify the *listLevelIndex* parameter to retrieve a specific level of the hierarchy. 

* *listLevelIndex* represents the level of the style sheet in the hierarchy (1 = root-level, 2 = first sub-level, etc.).
* If the parameter is omitted and the style sheet is hierarchical, the root-level style sheet is returned.
* If the requested level does not exist, a null object is returned.
* If the style sheet is not a hierarchical list style sheet and *listLevelIndex* is greater than 1, a null object is returned.

## Example 1

To retrieve the "Main title" style sheet:

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Main title")
 If($styleSheet=Null) // check if the style sheet exists
        //if not create it
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 End if
```
## Example 2

To retrieve a specific level of a hierarchical list style sheet:

```4d
var $rootStyle : Object
var $subLevelStyle : Object

// Retrieve root-level style sheet
$rootStyle:=WP Get style sheet(wpArea;"MainList")

// Retrieve second level (first sub-level)
$subLevelStyle:=WP Get style sheet(wpArea;"MainList";2)

If($subLevelStyle=Null)
    ALERT("Requested level does not exist.")
End if
```

## See also 

[Style sheets](../user-legacy/stylesheets.md)   
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheets](../commands-legacy/wp-get-style-sheets.md) 
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheet)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)  