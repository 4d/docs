---
id: object-get-title
title: OBJECT Get title
slug: /commands/object-get-title
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get title.Syntax-->**OBJECT Get title** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get title.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字)、省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または、フィールドまたは変数 (* 省略時) |
| 戻り値 | Text | &#8592; | ボタンのタイトル |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT Get title.Summary-->OBJECT Get titleコマンドは *object*で指定されたフォームオブジェクトのタイトル (ラベル) を返します。<!-- END REF-->このコマンドはラベルを表示するすべてのタイプのシンプルオブジェクトに使用できます:

* ボタン
* チェックボックス
* ラジオボタン
* スタティックテキスト
* グループボックス
オプションの*\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。 

#### 参照 

[OBJECT SET TITLE](object-set-title.md)  