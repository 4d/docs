---
id: user-new
title: user WP
draft: true
---

to import

<!-- REF lists-WP.Desc -->

## リスト

4D Write Pro はフラットなリスト(単一レベル) と階層リスト(マルチレベル) をサポートしています。

### Single-level lists

4D Write Pro supports two main types of single-level lists:

- unordered lists: where list items are marked with bullets, custom bullets, or images used as markers.
- ordered lists: where list items are marked with numbers or letters

They can be created using:

- the toolbar or sidebar of the [4D Write Pro interface](https://doc.4d.com/4Dv20/4D/20.2/Entry-areas.300-6750367.en.html#5865253)
- the `listStyleType` or `listStyleImage` [standard actions](./standard-actions) ,
- or [programmatically](../commands-legacy/4d-write-pro-attributes.md#lists) using [WP SET ATTRIBUTE](../commands/wp-set-attributes).

When a list is created using a standard action (`listStyleType` or `listStyleImage`) or the toolbar/sidebar, 4D Write Pro automatically inserts a margin before the text so that the marker is positioned inside it. The value of the inserted margin corresponds to the offset of the default tab (`wk tab default`).

![](../../assets/en/WritePro/margin-bullets.png)

When the list is created using [the WP SET ATTRIBUTE command](../commands-legacy/4d-write-pro-attributes.md#lists), no specific margin is managed, by default the marker is added at the left boundary of the paragraph. The developer can add a custom margin if necessary.

:::tip 関連したblog 記事

[4D Write Pro – Adding a margin automatically when bullets are set using standard actions](https://blog.4d.com/4d-write-pro-adding-a-margin-automatically-when-bullets-are-set-using-standard-actions)

:::

### Multi-level lists

マルチレベルリストは、[階層リストスタイルシート](../user-legacy/stylesheets.md#hierarchical-list-style-sheets) に基づいています。 Multi-level lists are based on [multi-level list style sheets](../user-legacy/stylesheets.md#multi-level-list-style-sheets). 各レベルは階層リストスタイルシートに関連づけられており、またリスト内での深さを表します(レベル 1、 レベル 2、レベル 3、など)。

When a new sub-level is created, the level numbering restarts at 1. When you add or remove an element in your multi-level list, the numbers are automatically adjusted.

![](../../assets/en/WritePro/multilevel-lists.png)

Multi-level lists are created with command [WP New style sheet](../commands/wp-new-style-sheet.md) and can be applied to a paragraph using [WP SET ATTRIBUTE](../commands/wp-set-attributes.md).

Multi-level lists can be managed using:

- paragraph [style sheet attributes](../commands-legacy/4d-write-pro-attributes.md#style-sheets) (such as `wk list level index`, `wk list level count`, and `wk list concat string format`)
- dedicated [standard actions](../user-legacy/standard-actions.md) for level management (`listLevelAppend`, `listLevelInc`, `listLevelDec`)
- dedicated standard actions for numbering marker management (`listConcatStringFormat`, `listNumberFormat`).

:::tip 関連したblog 記事

[4D Write Pro – Creating Multi-level Bullet or Numbered Lists Using Hierarchical list Style Sheets](https://blog.4d.com/4d-write-pro-creating-multi-level-bullet-or-numbered-lists-using-hierarchical-paragraph-style-sheets)

:::

<!-- END REF -->

<!-- REF hierarchical-list.Desc -->

## 階層リストスタイルシート

階層リストスタイルシートは、[マルチレベルリスト](../user-legacy/using-a-4d-write-pro-area.md#multi-level-lists) を作成するために使用されます。

階層リストスタイルシートを作成するためには、[WP New style sheet](../commands/wp-new-style-sheet.md) を使用し、必要な階層の数を *listLevelCount* 引数に渡します。 You then define a hierarchy of related paragraph style sheets: one **root-level** style sheet and one or more **sub-level** style sheets linked to it. Each level represents a depth in the list (level 1, level 2, level 3, etc.) and is automatically named "root-level name + lvl + index", for example "Mylist lvl 2".

階層リストスタイルをカスタマイズするために、段落スタイルシートオブジェクトは[スタイルシート属性](../commands-legacy/4d-write-pro-attributes.md#スタイルシート) を使用してカスタマイズすることが可能です。

階層リストスタイルシートは、以下のコマンドによって完全にサポートされています: [`WP Get style sheet`](../commands/wp-get-style-sheet.md)、 [`WP SET ATTRIBUTES`](../commands/wp-set-attributes.md)、 [`WP DELETE STYLE SHEET`](../commands/wp-delete-style-sheet.md)。

### 例題

以下の例は3階層の階層リストスタイルシートを作成し、それを段落へと割り当てます。

```4d
// 3階層のスタイルシートを作成
WP New style sheet(wpArea; wk type paragraph; "MyList"; 3)

// 各階層を取得
var $level1; $level2; $level3 : Object
$level1:=WP Get style sheet(wpArea; "MyList"; 1) // ルート階層
$level2:=WP Get style sheet(wpArea; "MyList"; 2) // 第1サブレベル
$level3:=WP Get style sheet(wpArea; "MyList"; 3) // 第2サブレベル

// スタイルをカスタマイズする
WP SET ATTRIBUTES($level1; {listStyleType: wk upper latin; fontBold: wk true})
WP SET ATTRIBUTES($level2; {listConcatStringFormat: True})
WP SET ATTRIBUTES($level3; {listStringFormatLtr: "(#)"})

// この階層スタイルシートを段落に対して適用する
var $paragraphs : Collection
$paragraphs:=WP Get elements(wpArea; wk type paragraph)

WP SET ATTRIBUTES($paragraphs[0]; wk style sheet; $level1)
WP SET ATTRIBUTES($paragraphs[1]; wk style sheet; $level2)
WP SET ATTRIBUTES($paragraphs[2]; wk style sheet; $level3)
```

result:

![](../../assets/en/WritePro/hierarchical-paragraph-stylesheets-1.png)

To delete the first sub-leve:

```4d
WP DELETE STYLE SHEET(wpArea; "MyList"; 2)
```

result:

![](../../assets/en/WritePro/hierarchical-paragraph-stylesheets-2.png)

### Predefined attribute values

階層リストスタイルシートを作成すると、それらは定義済みの値を使用します:

- `wk margin left` = 0.75 cm \* (number of previous levels) or 0.25 inches \* (number of previous levels), depending on current layout unit
- `wk list type` = `wk decimal`
- `wk name` is derived from the root style sheet name (Read-only for sub-levels)
- `wk list level count` は、指定された値が全てのレベルに対して設定されます

  - 例:

    - Root level: `"MyList"`
    - First sub-level: `"MyList lvl 2"`
    - Second sub-level: `"MyList lvl 3"`

<!-- END REF -->

