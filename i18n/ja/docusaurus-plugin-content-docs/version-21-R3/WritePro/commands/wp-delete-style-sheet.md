---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *styleSheetObj* : Object )<br/>**WP DELETE STYLE SHEET** (*wpDoc* : Object ; *styleSheetName* : Text {; *listLevelIndex* : Integer })<!-- END REF-->

<!--REF #_command_.WP DELETE STYLE SHEET.Params-->

<div class="no-index">

| 引数             | 型       |                             | 説明                  |
| -------------- | ------- | --------------------------- | ------------------- |
| styleSheetObj  | Object  | &#8594; | スタイルシートオブジェクト       |
| wpDoc          | Object  | &#8594; | 4D Write Pro ドキュメント |
| listLevelIndex | Integer | &#8594; | 階層内でのスタイルシートのレベル    |
| styleSheetName | Text    | &#8594; | スタイルシートの名前          |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース     | 内容                    |
| -------- | --------------------- |
| 4D 21 R3 | *listLevelIndex* 引数追加 |
| 4D 18    | Created               |

</details>
</div>

## 説明

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->**WP DELETE STYLE SHEET** コマンドは、カレントのドキュメントから指定された段落または文字スタイルシートを削除します。<!-- END REF-->スタイルシートが削除されると、それが適用されていた全ての文字または段落は、オリジナルのスタイル(つまりデフォルト)へと戻されます。

このコマンドはスタイルシートを削除する方法を2つ提供します。 以下のいずれかを指定することができます:

- *styleSheetType* 引数に、削除したいスタイルの([WP New style sheet](../WritePro/commands/wp-new-style-sheet) コマンドで作成された、あるいは[WP Get style sheet](../WritePro/commands/wp-get-style-sheet) コマンドから返された) スタイルシートオブジェクトを渡す
- *wpDoc* および *styleSheetName* 引数に、4D Write Pro ドキュメントと削除したいスタイルシートの名前を渡す

削除したいスタイルシートが[階層リストスタイルシート](../user-legacy/stylesheets.md#hierarchical-list-style-sheets) に属している場合、その時の振る舞いは削除するレベルによって異なります。 以下のものを削除することができます:

- ルートレベルのスタイルシート
- オプションの *listLevelIndex* 引数を提供することで、特定のサブレベルのスタイルシートを削除できます。

ルートレベルのスタイルシートを削除する場合(*listLevelIndex* 引数に1 を渡すか、省略します)、それに関連づけられた全てのサブレベルのスタイルも自動的に削除され、階層構造全体がドキュメントから削除されます。

サブレベルのスタイルシートを削除した場合:

- その後の全てのサブレベルスタイルシートの`wk list level index` は、一貫したレベルナンバリングを維持するために1つ番号が減らされます。
- 影響のあるサブレベルスタイルシートの名前は、その新しいレベルのインデックスを反映するために更新されます。
- ルートスタイルシートの `wk list level count` 属性および残った全てのサブレベルスタイルシートは、新しいレベルの総数に合致するためにデクリメントされます。

コマンドは、指定されたレベルのが存在しない場合、またはスタイルシートが階層りすとの一部ではなくかつ *listLevelIndex* が1 より大きい場合には、何のアクションも実行しません。

**注意**: デフォルト("Normal") のスタイルシートは削除することができません。

## 例題 1

"MyCharStyle" 文字スタイルシートを削除するには:

```4d
WP DELETE STYLE SHEET(wpArea; "MyCharStyle")
```

## 例題 2

以下の例では、階層リストスタイルシートの第2レベルを削除したい場合を考えます:

```4d
// "MainList" 階層スタイルシートからレベル2を削除する
WP DELETE STYLE SHEET(wpArea; "MainList"; 2)
```

実行後:

- `wk list level index` の値が更新されます(以前レベル3だったものはレベル2になります)。
- `wk list level count` はデクリメントされます。

階層スタイルシート全体(ルートおよび関連した全てのサブレベル)を削除するには:

```4d
WP DELETE STYLE SHEET(wpArea; "MainList")
```

## 参照

[Style sheets](../user-legacy/stylesheets.md)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../commands-legacy/wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheet)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)