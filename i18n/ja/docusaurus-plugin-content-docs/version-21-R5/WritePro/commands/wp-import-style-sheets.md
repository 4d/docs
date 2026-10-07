---
id: wp-import-style-sheets
title: WP IMPORT STYLE SHEETS
slug: /WritePro/commands/wp-import-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP IMPORT STYLE SHEETS.Syntax-->**WP IMPORT STYLE SHEETS** ( *targetDoc* : Object ; *sourceDoc* : Object )<!-- END REF-->

<!--REF #_command_.WP IMPORT STYLE SHEETS.Params-->

<div class="no-index">

| 引数        | 型      |                             | 説明                                |
| --------- | ------ | --------------------------- | --------------------------------- |
| targetDoc | Object | &#8594; | スタイルシートを適用先となる4D Write Pro ドキュメント |
| sourceDoc | Object | &#8594; | スタイルシートを取得元となる4D Write Pro ドキュメント |

</div>
<!-- END REF-->

## 説明

<!--REF #_command_.WP IMPORT STYLE SHEETS.Summary-->**WP IMPORT STYLE SHEETS** コマンドは*sourceDoc* 引数で指定したドキュメントから全てのスタイルシートを読み込み、*targetDoc* 引数で指定したドキュメントへとインポートします。<!-- END REF-->

*targetDoc* 引数には、インポートされたスタイルシートを受け取る4D Write Pro ドキュメントを渡します。

*sourceDoc* 引数には、インポートされるスタイルシートを格納している4D Write Pro ドキュメントを渡します。

**注意**: *sourceDoc* のスタイルシートで、*targetDoc* 内のスタイルシートと同じ名前のものがあった場合、インポートされたスタイルシートは*targetDoc* 内の同名のスタイルシートを上書き(置換)します。

## 例題

テンプレートとなるスタイルシートをインポートし、インポートされたスタイルシートの種類ごとの数の通知を受け取りたい場合を考えます:

```4d
 wpArea:=WP New
 $template:=WP Import document("Template.4wp")
 
 WP IMPORT STYLE SHEETS(wpArea;$template)
 
 $nb1:=WP Get style sheets(wpArea;wk type paragraph).length
 $nb2:=WP Get style sheets(wpArea;wk type character).length
 ALERT(String($nb1)+" paragraph style sheet(s) and "+string($nb2)+" character style sheet(s) imported))
```

## 参照

[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../WritePro/commands/wp-get-style-sheets)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)