---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *wpDoc* ; *styleSheetType* ; *styleSheetName* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP New style sheet.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| styleSheetType | Integer | &#8594;  | スタイルシートのタイプ |
| styleSheetName | Text | &#8594;  | スタイルシート名 |
| 戻り値 | Object | &#8592; | スタイルシートオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP New style sheet.Summary-->**WP New style sheet** コマンドは、*wpDoc* 引数で指定されたドキュメントに対して、新しい(空の)スタイルシートオブジェクトを作成します。<!-- END REF-->

*wpDoc* 引数には、4D Write Pro ドキュメントを渡します。

*styleSheetType* 引数を使用すると、スタイルシートのタイプを指定することができます。つまり*wpDoc* 引数のドキュメントの、どの部分がスタイルシートの影響を受けるかを指定することができるということです。二つのタイプが指定可能です:

* wk type character: スタイル属性を文字に対して適用
* wk type paragraph: スタイル属性を段落に対して適用

*styleSheetName* 引数にはスタイルシートの名前を渡します。このスタイルシート名はドキュメントとともに保存され、再利用や編集が容易にできます。またスタイルシート名は[WP Get style sheet](wp-get-style-sheet.md) および [WP DELETE STYLE SHEET](wp-delete-style-sheet.md) コマンドで使用することもできます。スタイルシートの名前は以下のルールに準拠している必要があります:

* 名前の最初は文字であること
* その後は最大で128文字までの英数字、スペース文字、"-"(ダッシュ) 文字またはUnicode文字を含めることができます
* タイプに関わらず、ドキュメント内で固有でなければなりません
* "section" から名前を始めることはできません。これは予約されています
* "\_"(アンダーバー) はスペースで置き換えられ、それに続くスペースは削除されます。

[WP SET ATTRIBUTES](../commands/wp-set-attributes.md) コマンド、またはオブジェクト記法(*4D Write Pro属性*参照)を使用して、スタイルシートの属性を指定することもできます。利用可能な属性については、*Style sheet attributes* の章を参照してください。

**注**: 

* スタイルシートは文字または段落の表示を変えるだけであり、それがドキュメント内でどのように保存されるかを変えるものではありません。スタイルシートが削除された場合、テキストはデフォルトのスタイルへと戻されます。
* 新しいスタイルシート内で定義されていないスタイル属性はどれも自動的に通常のスタイルを使用します。詳細な情報については、*スタイルシートコマンド* を参照してください。

#### 例題 

以下のコードを実行すると、段落スタイルシートを作成して定義します:

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 
  // スタイルシート設定を定義
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")
 WP SET ATTRIBUTES($styleSheet;wk text color;"red")
 WP SET ATTRIBUTES($styleSheet;wk text align;wk left)
 
  // スタイルシートを最初の段落に適用
 var $Paragraphs : Collection
 $Paragraphs:=WP Get elements(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if
```

#### 参照 

[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
*ドキュメントのコンテンツにプログラムでアクセスする*  