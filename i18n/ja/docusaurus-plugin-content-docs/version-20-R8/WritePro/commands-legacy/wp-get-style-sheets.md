---
id: wp-get-style-sheets
title: WP Get style sheets
slug: /WritePro/commands/wp-get-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheets.Syntax-->**WP Get style sheets** ( *wpDoc* ; *type* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get style sheets.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| type | Integer | &#8594;  | スタイルシートのタイプ |
| 戻り値 | Collection | &#8592; | スタイルシートオブジェクトのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get style sheets.Summary-->**WP Get style sheets** コマンドは*wpDoc* 引数で指定されたドキュメント内の、*type* 引数で定義されたタイプの全てのスタイルシートオブジェクトのコレクションを返します。<!-- END REF-->

*wpDoc* 引数には、取得したいスタイルシートを持っている4D Write Pro ドキュメントを渡します。

*type* 引数は返すスタイルシートのタイプを指定します。以下のタイプを指定可能です:

* wk type character で文字スタイルシートを指定
* wk type paragraph で段落スタイルシートを指定

#### 例題 

全ての文字スタイルシートのコレクションを取得した場合を考えます:

```4d
 var $styleSheets : Collection
 $styleSheets:=WP Get style sheets(myDoc;wk type character)
```

#### 参照 

[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  
*ドキュメントのコンテンツにプログラムでアクセスする*  