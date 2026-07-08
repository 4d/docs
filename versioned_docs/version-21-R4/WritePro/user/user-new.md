---
id: user-new
title: user WP
draft: true
---

to import

<!-- REF lists-WP.Desc -->

## Lists

4D Write Pro supports flat lists (single-level) and multi-level lists. 

### Single-level lists

4D Write Pro supports two main types of single-level lists:

* unordered lists: where list items are marked with bullets, custom bullets, or images used as markers. 
* ordered lists: where list items are marked with numbers or letters

They can be created using: 
* the toolbar or sidebar of the [4D Write Pro interface](https://doc.4d.com/4Dv20/4D/20.2/Entry-areas.300-6750367.en.html#5865253)
* the `listStyleType` or `listStyleImage` [standard actions](./standard-actions) , 
* or [programmatically](../commands-legacy/4d-write-pro-attributes.md#lists) using [WP SET ATTRIBUTE](../commands/wp-set-attributes). 

When a list is created using a standard action (`listStyleType` or `listStyleImage`) or the toolbar/sidebar, 4D Write Pro automatically inserts a margin before the text so that the marker is positioned inside it. The value of the inserted margin corresponds to the offset of the default tab (`wk tab default`). 

![](../../assets/en/WritePro/margin-bullets.png)

When the list is created using [the WP SET ATTRIBUTE command](../commands-legacy/4d-write-pro-attributes.md#lists), no specific margin is managed, by default the marker is added at the left boundary of the paragraph. The developer can add a custom margin if necessary.

:::tip Related blog post

[4D Write Pro – Adding a margin automatically when bullets are set using standard actions](https://blog.4d.com/4d-write-pro-adding-a-margin-automatically-when-bullets-are-set-using-standard-actions)

:::

### Multi-level lists

Multi-level lists are based on [multi-level list style sheets](../user-legacy/stylesheets.md#multi-level-list-style-sheets). Multi-level lists contain a root-level style sheet and one or more sub-level style sheet(s). Each level is attached to a multi-level list style sheet and represents a depth in the list (level 1, level 2, level 3, etc.). 

When a new sub-level is created, the level numbering restarts at 1. When you add or remove an element in your multi-level list, the numbers are automatically adjusted.

![](../../assets/en/WritePro/multilevel-lists.png)

Multi-level lists are created with command [WP New style sheet](../commands/wp-new-style-sheet.md) and can be applied to a paragraph using [WP SET ATTRIBUTE](../commands/wp-set-attributes.md).

Multi-level lists can be managed using:

* paragraph [style sheet attributes](../commands-legacy/4d-write-pro-attributes.md#style-sheets) (such as `wk list level index`, `wk list level count`, and `wk list concat string format`)
* dedicated [standard actions](../user-legacy/standard-actions.md) for level management (`listLevelAppend`, `listLevelInc`, `listLevelDec`)
* dedicated standard actions for numbering marker management (`listConcatStringFormat`, `listNumberFormat`).

:::tip Related blog post

[4D Write Pro – Creating Multi-level Bullet or Numbered Lists Using Multi-level list Style Sheets](https://blog.4d.com/4d-write-pro-creating-multi-level-bullet-or-numbered-lists-using-multi-level-paragraph-style-sheets)

:::

<!-- END REF -->

<!-- REF multi-level-list-style-sheets.Desc -->

## Multi-level list style sheets

Multi-level list style sheets are used to create [multi-level lists](../user-legacy/using-a-4d-write-pro-area.md#multi-level-lists).

To create a multi-level list style sheet, use [WP New style sheet](../commands/wp-new-style-sheet.md) and pass in *listLevelCount* the desired number of levels. You then define a hierarchy of related paragraph style sheets: one **root-level** style sheet and one or more **sub-level** style sheets linked to it. Each level represents a depth in the list (level 1, level 2, level 3, etc.) and is automatically named "root-level name + lvl + index", for example "Mylist lvl 2".

To customize multi-level list styles, the paragraph style sheet object can be customized using [style sheet attributes](../commands-legacy/4d-write-pro-attributes.md#style-sheets).

Multi-level list style sheets are fully supported by the following commands: [`WP Get style sheet`](../commands/wp-get-style-sheet.md), [`WP SET ATTRIBUTES`](../commands/wp-set-attributes.md), [`WP DELETE STYLE SHEET`](../commands/wp-delete-style-sheet.md).

### Example

The following example creates a three-level multi-level list style sheet and applies it to paragraphs.

```4d
// Create 3 multi-level list style sheets
WP New style sheet(wpArea; wk type paragraph; "MyList"; 3)

// Retrieve each level
var $level1; $level2; $level3 : Object
$level1:=WP Get style sheet(wpArea; "MyList"; 1) // Root level
$level2:=WP Get style sheet(wpArea; "MyList"; 2) // 1st sub-level
$level3:=WP Get style sheet(wpArea; "MyList"; 3) // 2nd sub-level

// Customize styles
WP SET ATTRIBUTES($level1; {listStyleType: wk upper latin; fontBold: wk true})
WP SET ATTRIBUTES($level2; {listConcatStringFormat: True})
WP SET ATTRIBUTES($level3; {listStringFormatLtr: "(#)"})

// Apply multi-level style sheets to paragraphs
var $paragraphs : Collection
$paragraphs:=WP Get elements(wpArea; wk type paragraph)

WP SET ATTRIBUTES($paragraphs[0]; wk style sheet; $level1)
WP SET ATTRIBUTES($paragraphs[1]; wk style sheet; $level2)
WP SET ATTRIBUTES($paragraphs[2]; wk style sheet; $level3)
```
result:

![](../../assets/en/WritePro/multi-level-paragraph-stylesheets-1.png)

To delete the first sub-leve: 

```4d
WP DELETE STYLE SHEET(wpArea; "MyList"; 2)
```
result:

![](../../assets/en/WritePro/multi-level-paragraph-stylesheets-2.png)

### Predefined attribute values

When created, multi-level list style sheets use predefined values:

* `wk margin left` = 0.75 cm \* (number of previous levels) or 0.25 inches \* (number of previous levels), depending on current layout unit
* `wk list type` = `wk decimal`
* `wk name` is derived from the root style sheet name (Read-only for sub-levels)
* `wk list level count` is set to the specified value for all levels

  * Example:

    * Root level: `"MyList"`
    * First sub-level: `"MyList lvl 2"`
    * Second sub-level: `"MyList lvl 3"`


<!-- END REF -->

