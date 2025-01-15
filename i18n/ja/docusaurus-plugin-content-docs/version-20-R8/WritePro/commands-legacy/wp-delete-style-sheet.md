---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *styleSheetObj* ) | (*wpDoc* ; *styleSheetName* )<!-- END REF-->
<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| styleSheetObj | Object | &#8594;  | スタイルシートオブジェクト |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| styleSheetName | Text | &#8594;  | スタイルシート名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->**WP DELETE STYLE SHEET** コマンドは、カレントドキュメントから指定された段落または文字のスタイルシートを削除します。<!-- END REF-->スタイルシートが削除されると、それが適用されていた段落または文字は、元のスタイル(つまりデフォルトのスタイル)に戻されます。

コマンドはスタイルシートを削除するために二つの方法を提供します。以下の方法で指定することができます:

* 削除するスタイルシートオブジェクト([WP New style sheet](wp-new-style-sheet.md) コマンドで作成、または[WP Get style sheet](wp-get-style-sheet.md) 返されるオブジェクト)を*styleSheetType* 引数で指定
* 対象の4D Write Pro ドキュメントと削除するスタイルシート名を*wpDoc* および *styleSheetName* 引数で指定

**注**: デフォルト("通常"の)スタイルシートは削除することができません。

#### 参照 

[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  
*ドキュメントのコンテンツにプログラムでアクセスする*  