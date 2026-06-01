---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *wpDoc* : Object ; *styleSheetName* : Text {; *listLevelIndex* : Integer } ) : Object<!-- END REF-->

<!--REF #_command_.WP Get style sheet.Params-->

<div class="no-index">

| 引数             | 型       |                             | 説明                  |
| -------------- | ------- | --------------------------- | ------------------- |
| wpDoc          | Object  | &#8594; | 4D Write Pro ドキュメント |
| styleSheetName | Text    | &#8594; | スタイルシート名            |
| listLevelIndex | Integer | &#8594; | 階層内でのスタイルシートのレベル    |
| 戻り値            | Object  | &#8592; | スタイルシートオブジェクト       |

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

<!--REF #_command_.WP Get style sheet.Summary-->**WP Get style sheet** コマンドは、*styleSheetName* 引数で指定したスタイルシート、または[階層リストスタイルシート](../user-legacy/stylesheets.md#hierarchical-list-style-sheets) の場合にはスタイルシート名と*listLevelIndex* 引数のインデックスで指定したスタイルシートのスタイルシートオブジェクトを返します。<!-- END REF-->

*wpDoc* 引数には、スタイルシートを持った4D Write Pro ドキュメントを渡します。

*styleSheetName* 引数を使用すると、返すスタイルシートの名前を指定することができます。 *wpDoc* 引数のドキュメント内のそのスタイルシート名が存在しない場合、null オブジェクトが返されます。

*styleSheetName* で名前を指定したスタイルシートが改装リストスタイルシートのルートレベルの名前である場合、オプションの *listLevelIndex* 引数で階層レベルを指定することで階層内の特定のレベルを取得することができます。

- *listLevelIndex* represents the level of the style sheet in the hierarchy (1 = root-level, 2 = first sub-level, etc.).
- スタイルシートが階層で、この 引数が省略された場合には、ルートレベルのスタイルシートが返されます。
- リクエストされたレベルが存在しない場合、null オブジェクトが返されます。
- スタイルシートが改装リストスタイルシートではない場合に、*listLevelIndex* が1 より大きかった場合、null オブジェクトが返されます。

## 例題 1

"Main title" スタイルシートを取得したい場合を考えます:

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Main title")
 If($styleSheet=Null) // check if the style sheet exists
        //if not create it
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 End if
```

## 例題 2

階層リストスタイルシートの特定のレベルを取得したい場合:

```4d
var $rootStyle : Object
var $subLevelStyle : Object

// ルートレベルのスタイルシートを取得
$rootStyle:=WP Get style sheet(wpArea;"MainList")

// 第2レベルを取得(最初のサブレベル)
$subLevelStyle:=WP Get style sheet(wpArea;"MainList";2)

If($subLevelStyle=Null)
    ALERT("Requested level does not exist.")
End if
```

## 参照

[スタイルシート](../user-legacy/stylesheets.md)  
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheets](../commands-legacy/wp-get-style-sheets.md)
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheet)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)