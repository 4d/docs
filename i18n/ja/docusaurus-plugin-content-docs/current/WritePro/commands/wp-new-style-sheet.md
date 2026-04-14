---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *wpDoc* : Object ; *styleSheetType* : Integer ; *styleSheetName* : Text {; *listLevelCount* : Integer} ) : Object <!-- END REF-->

<!--REF #_command_.WP New style sheet.Params-->

<div class="no-index">

| 引数             | 型       |                             | 説明                  |
| -------------- | ------- | --------------------------- | ------------------- |
| wpDoc          | Object  | &#8594; | 4D Write Pro ドキュメント |
| styleSheetType | Integer | &#8594; | スタイルシートの種類          |
| styleSheetName | Text    | &#8594; | スタイルシートの名前          |
| listLevelCount | Integer | &#8594; | 階層内でのレベルの合計数        |
| 戻り値            | Object  | &#8592; | スタイルシートオブジェクト       |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース     | 内容                     |
| -------- | ---------------------- |
| 4D 18    | Created                |
| 4D 21 R3 | *listLevelCount* 引数の追加 |

</details>
</div>

## 説明

<!--REF #_command_.WP New style sheet.Summary-->**WP New style sheet** コマンドは *wpDoc* 引数で指定したドキュメントに対して新しい(空の)スタイルシートオブジェクトを作成します。<!-- END REF-->

*wpDoc* 引数には、4D Write Pro ドキュメントを渡します。

*styleSheetType* 引数を使用すると、スタイルシートのタイプを指定することができます。これにより、 *wpDoc* のドキュメント内でどこがスタイルシートによって影響を受けるかを指定できると言うことです。 二つのタイプが利用可能です:

- wk type character: スタイル属性を文字に対して適用します。
- wk type paragraph: スタイル属性を段落に対して適用します([階層リストスタイルシート](#階層リストスタイルシート)を作成したい場合には必須)。

*styleSheetName* 引数には、スタイルシートの名前を渡します。 スタイルシートの名前はドキュメントとともに保存されるため、スタイルを再利用や編集を容易にします。 また[WP Get style sheet](../WritePro/commands/wp-get-style-sheet) および [WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet) コマンドで使用することもできます。 スタイルシート名は以下のルールを遵守している必要があります:

- 必ず文字で始まらなければなりません
- そのあとは、英数字、スペース文字、"-" 文字、また128 以上のUnicode 文字を使用することができます。
- タイプに関わらず、ドキュメント内で重複してはいけません
- "section" で始めることはできません。予約されています
- "\_" はスペースで置き換えられ、末尾のスペースは削除されます。

[WP SET ATTRIBUTES](../commands/wp-set-attributes) コマンドまたはオブジェクト記法を使用することで、スタイルシートの属性を指定することができます([4D Write Pro 属性](../commands-legacy/4d-write-pro-attributes.md) 参照)。 利用可能な属性の一覧については、[スタイルシート属性](../commands-legacy/4d-write-pro-attributes.md#スタイルシート) の章を参照してください。

**注**:

- スタイルシートは文字または段落の表示方法のみを変更し、それらがどのようにドキュメント内に保存されるかは変更しません。 スタイルシートが削除された場合、テキストはデフォルトのスタイルへと戻されます。
- 新しいスタイルシート内で定義されていないあらゆる属性は、自動的にノーマルスタイルを使用します。 詳細な情報については、[*スタイルシート* ページ](../user-legacy/stylesheets.md) を参照してください。

### 階層リストスタイルシート

*styleSheetType* 引数が `wk type paragraph` に設定されていた場合、オプションとして *listLevelCount* 引数を渡すことで[階層リストスタイルシート](../user-legacy/stylesheets.md#hierarchical-list-style-sheets) を作成することができます。

*listLevelCount* 引数は、階層内のレベルの総レベル数を定義します。 指定された場合(1 以上の値)、コマンドは自動的にルートレベルのスタイルシートと、対応するサブレベルのスタイルシートを自動的に作成します。

以下の定義済みの値が適用されます:

- `wk list style type` は `wk decimal` に設定されます
- `wk list level index` は自動的に割り当てられます(ルートレベルは1 、そこからサブレベルに対してはインクリメントされていきます)
- `wk list level count` は、指定された値が全てのレベルに対して設定されます
- `wk margin left` is automatically calculated (0.75 cm × level index or 0.25 inches \* level index, depending on current layout unit): so offset may be different depending if layout unit is metric or inches (for better alignment on default with current Write ruler graduations)

引数が省略または0 に設定された場合、標準の(階層でない)段落スタイルシートが作成されます。

## 例題 1

以下のコードは、段落スタイルシートを作成して定義します:

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 
  // スタイルシート設定を定義する
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")
 WP SET ATTRIBUTES($styleSheet;wk text color;"red")
 WP SET ATTRIBUTES($styleSheet;wk text align;wk left)
 
  // スタイルシートを最初の段落に適用する
 var $Paragraphs : Collection
 $Paragraphs:=WP Get elements(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if
```

## 例題 2

以下のコードは3レベルの階層を持つ階層リストスタイルシートを作成します:

```4d
var $mainList : Object

$mainList:=WP New style sheet(wpArea; wk type paragraph; "MainList"; 3)

// コマンドは、以下のものを自動的に作成します:
// - 1 ルートレベルのスタイルシート ("MainList")
// - 2 サブレベルスタイルシート ("MainList lvl 2" および "MainList lvl 3")

```

結果:

- ルートスタイルシートは以下の設定を持っています:
  - `wk list level index` = 1
  - `wk list level count` = 3
  - `wk list style type` = `wk decimal`

- サブレベルスタイルシートは以下の設定を持っています:
  - `wk list level index` の値はインクリメントされています(2 および 3)
  - 同じ`wk list level count` を共有します
  - 自動的にインデントが設定されます(0.75 cm × レベルインデックス)
  - `wk root style` を通してルートスタイルシートを参照します

## 参照

[スタイルシート](../user-legacy/stylesheets.md)  
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../WritePro/commands/wp-get-style-sheets)  
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheets)
