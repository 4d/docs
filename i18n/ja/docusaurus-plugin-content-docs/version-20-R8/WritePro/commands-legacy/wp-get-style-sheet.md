---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *wpDoc* ; *styleSheetName* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get style sheet.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| styleSheetName | Text | &#8594;  | スタイルシート名 |
| 戻り値 | Object | &#8592; | スタイルシートオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get style sheet.Summary-->**WP Get style sheet** コマンドは、*styleSheetName* 引数で指定された名前のスタイルシートオブジェクトを返します。<!-- END REF-->

*wpDoc* 引数には、スタイルシートを格納している4D Write Pro ドキュメントを渡します。

*styleSheetName* 引数を使用すると、返すスタイルシートの名前を指定することができます。*wpDoc* 引数のドキュメント内に指定された名前のスタイルシートがない場合、null オブジェクトが返されます。

#### 例題 

"Main title"スタイルシートを取得したい場合を考えます:

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Main title")
 If($styleSheet=Null) // スタイルシートが存在しているかどうかをチェック // 存在しない場合は作成する
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 End if
```

#### 参照 

[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  
*ドキュメントのコンテンツにプログラムでアクセスする*  