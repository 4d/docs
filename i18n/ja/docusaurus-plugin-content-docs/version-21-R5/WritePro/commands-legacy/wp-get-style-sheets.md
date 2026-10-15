---
id: wp-get-style-sheets
title: WP Get style sheets
slug: /WritePro/commands/wp-get-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheets.Syntax-->**WP Get style sheets** ( *wpDoc* : Object ; *type* : Integer ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get style sheets.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| type | Integer | &#8594;  | スタイルシートのタイプ |
| 戻り値 | Collection | &#8592; | スタイルシートオブジェクトのコレクション |
</div>
<!-- END REF-->

## 説明 

<!--REF #_command_.WP Get style sheets.Summary-->**WP Get style sheets** コマンドは*wpDoc* 引数で指定されたドキュメント内の、*type* 引数で定義されたタイプの全てのスタイルシートオブジェクトのコレクションを返します。<!-- END REF-->

*wpDoc* 引数には、取得したいスタイルシートを持っている4D Write Pro ドキュメントを渡します。

*type* 引数は返すスタイルシートのタイプを指定します。以下のタイプを指定可能です:

* wk type character で文字スタイルシートを指定
* wk type paragraph で段落スタイルシートを指定

## 例題 

全ての文字スタイルシートのコレクションを取得した場合を考えます:

```4d
 var $styleSheets : Collection
 $styleSheets:=WP Get style sheets(myDoc;wk type character)
```

## 参照 

[WP DELETE STYLE SHEET](../commands/wp-delete-style-sheet)  
[WP Get style sheet](../commands/wp-get-style-sheet)  
[WP IMPORT STYLE SHEETS](../commands/wp-import-style-sheets)  
[WP New style sheet](../commands/wp-new-style-sheet)  
*ドキュメントのコンテンツにプログラムでアクセスする*  
