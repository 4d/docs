---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *styleSheetObj* : Object )<br/>**WP DELETE STYLE SHEET** (*wpDoc* : Object ; *styleSheetName* : Text {; *listLevelIndex* : Integer })<!-- END REF-->

<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| styleSheetObj | Object | &#8594;  | Style sheet object |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| listLevelIndex | Integer | &#8594;  | Level of the style sheet in the hierarchy |
| styleSheetName | Text | &#8594;  | Name of style sheet |
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

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->The **WP DELETE STYLE SHEET** command removes the designated paragraph or character style sheet from the current document.<!-- END REF--> When a style sheet is removed, every character or paragraph that it was applied to reverts to its original style (*i.e.* the default).

This command provides two ways to remove a style sheet. You can specify:

* the style sheet object (created with the [WP New style sheet](wp-new-style-sheet.md) or returned by the [WP Get style sheet](wp-get-style-sheet.md) command) to remove in the *styleSheetType* parameter, or
* the 4D Write Pro document along with the name of the style sheet to remove in the *wpDoc* and *styleSheetName* parameters.

When the style sheet to delete belongs to a [hierarchical list style sheet](../user-legacy/stylesheets.md#hierarchical-list-style-sheets), the behavior depends on the level being removed. You can delete:
* the root-level style sheet, or
* a specific sub-level style sheet by providing the optional *listLevelIndex* parameter.

When you delete the root-level style sheet (by passing 1 in the *listLevelIndex* parameter or ommitting it), all associated sub-level style sheets are deleted automatically and the entire hierarchical structure is removed from the document.

When you delete a sub-level style sheet:
* The `wk list level index` of all subsequent sub-level style sheets is decremented to maintain continuous level numbering.
* The names of the affected sub-level style sheets are updated to reflect their new level index.
* The `wk list level count` attribute of the root style sheet and all remaining sub-level style sheets is decremented to match the new total number of levels.

The command performs no action if the specified level does not exist, or if the style sheet is not part of a hierarchical list and *listLevelIndex* is greater than 1.

**Note**: The default ("Normal") style sheet can not be deleted.

## Example 1

To delete a character style sheet "MyCharStyle":

```4d
WP DELETE STYLE SHEET(wpArea; "MyCharStyle")
```


## Example 2

The following example deletes the second level of a hierarchical list style sheet:

```4d
// Delete level 2 of the "MainList" hierarchical style sheet
WP DELETE STYLE SHEET(wpArea; "MainList"; 2)
```

After execution:

* The `wk list level index` values are updated (former level 3 becomes level 2).
* The `wk list level count` is decremented.


To delete the entire hierarchical style sheet (root and all associated sub-levels):

```4d
WP DELETE STYLE SHEET(wpArea; "MainList")
```

## See also 

[Style sheets](../user-legacy/stylesheets.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](../commands-legacy/wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  
