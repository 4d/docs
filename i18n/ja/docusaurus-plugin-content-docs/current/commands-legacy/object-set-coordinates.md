---
id: object-set-coordinates
title: OBJECT SET COORDINATES
slug: /commands/object-set-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET COORDINATES.Syntax-->**OBJECT SET COORDINATES** ( {* ;} *object* ; *left* ; *top* {; *right* ; *bottom*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET COORDINATES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:object はオブジェクト名(文字列)、省略時:object は変数またはフィールド |
| object | Integer | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| left | Integer | &#8594;  | オブジェクトの左端の絶対座標(ピクセル) |
| top | Integer | &#8594;  | オブジェクトの上端の絶対座標(ピクセル) |
| right | Integer | &#8594;  | オブジェクトの右端の絶対座標(ピクセル) |
| bottom | Integer | &#8594;  | オブジェクトの下端の絶対座標(ピクセル) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET COORDINATES.Summary-->**OBJECT SET COORDINATES**コマンドは、引数 *object* と *\** で指定したオブジェクトの位置とそれに伴うサイズを、カレントのプロセスにおいて変更します。<!-- END REF-->

**注:** このコマンドは、 [OBJECT MOVE](object-move.md) コマンドに第2引数の *\** を渡した時と同じ動作をします。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*left* と *top* 引数には、フォーム内の、 *object* 引数で指定したオブジェクトの、絶対座標を渡します。

*right* と *bottom* 引数にも絶対座標を渡すことで、オブジェクトの右下隅の位置を指定することもできます。この隅の位置が *left* と *top* 引数で指定された隅に矛盾する場合、オブジェクトは自動的にリサイズされます。 

**注:** オブジェクトのサイズを変更せずに位置だけを変更したい場合は、既存の [OBJECT MOVE](object-move.md) コマンドの使用が推奨されます。

このコマンドは以下の様な場合においてのみ機能します:

* レコード編集中の入力フォーム
* [DIALOG](../commands/dialog.md) コマンドを使用して表示したフォーム
* [MODIFY SELECTION](modify-selection.md) か [DISPLAY SELECTION](display-selection.md) フォームを使用して表示された出力フォームのヘッダーとフッター
* 印刷中のフォーム

#### 例題 

以下の宣言は、 "button\_1" のオブジェクトを、 (10,20) (30,40) の座標に表示します:

```4d
 OBJECT SET COORDINATES(*;"button_1";10;20;30;40)
```

![](../assets/en/commands/pict1207497.fr.png)

#### 参照 

[CONVERT COORDINATES](convert-coordinates.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT MOVE](object-move.md)  