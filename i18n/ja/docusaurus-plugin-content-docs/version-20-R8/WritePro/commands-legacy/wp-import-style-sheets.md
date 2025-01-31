---
id: wp-import-style-sheets
title: WP IMPORT STYLE SHEETS
slug: /WritePro/commands/wp-import-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP IMPORT STYLE SHEETS.Syntax-->**WP IMPORT STYLE SHEETS** ( *targetDoc* ; *sourceDoc* )<!-- END REF-->
<!--REF #_command_.WP IMPORT STYLE SHEETS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetDoc | Object | &#8594;  | スタイルシートを受け取る4D Write Pro ドキュメント |
| sourceDoc | Object | &#8594;  | スタイルシートを取り出す4D Write Pro ドキュメント |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP IMPORT STYLE SHEETS.Summary-->**WP IMPORT STYLE SHEETS** コマンドは、*sourceDoc* 引数で指定したドキュメント内の全てのスタイルシートを、*targetDoc* 引数で指定したドキュメント内へと読み込みます。<!-- END REF-->

*targetDoc* 引数には、読み込んだスタイルシートを受け取る4D Write Pro ドキュメントを渡します。

*sourceDoc* 引数には、読み込むスタイルシートを格納している4D Write Pro ドキュメントを渡します。

**注**: *sourceDoc* のスタイルシートに、*targetDoc* のスタイルシートと同じ名前のものがあった場合、読み込まれたスタイルシートは*targetDoc* 内の同名のスタイルシートを上書き(置き換え)します。

#### 例題 

テンプレートスタイルシートを読み込み、読み込んだスタイルシートのタイプごとの数の通知を受け取りたい場合を考えます:

```4d
 wpArea:=WP New
 $template:=WP Import document("Template.4wp")
 
 WP IMPORT STYLE SHEETS(wpArea;$template)
 
 $nb1:=WP Get style sheets(wpArea;wk type paragraph).length
 $nb2:=WP Get style sheets(wpArea;wk type character).length
 ALERT(String($nb1)+" paragraph style sheet(s) and "+string($nb2)+" character style sheet(s) imported))
```

#### 参照 

[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  