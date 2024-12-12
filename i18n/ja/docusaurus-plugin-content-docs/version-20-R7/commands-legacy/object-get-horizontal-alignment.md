---
id: object-get-horizontal-alignment
title: OBJECT Get horizontal alignment
slug: /commands/object-get-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get horizontal alignment.Syntax-->**OBJECT Get horizontal alignment** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get horizontal alignment.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | 整列コード |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT Get horizontal alignment.Summary-->**OBJECT Get horizontal alignment**コマンドは、引数*object*および *\** で指定されたオブジェクトに適用された整列タイプを示すコードを返します。<!-- END REF-->

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。

**注:** オブジェクトグループにこのコマンドを適用すると、最後のオブジェクトの整列コードのみが返されます。

返されるコードは*Form Objects (Properties)*テーマ内にある以下の定数のいずれかとなります:

| 定数            | 型    | 値 | コメント                         |
| ------------- | ---- | - | ---------------------------- |
| Align center  | 倍長整数 | 3 |                              |
| Align default | 倍長整数 | 1 |                              |
| Align left    | 倍長整数 | 2 |                              |
| Align right   | 倍長整数 | 4 |                              |
| wk justify    | 倍長整数 | 5 | 4D Write Proエリアに対してのみ適用可能です。 |

整列を適用できるフォームオブジェクトは次の通りです:

* スクロール可能エリア
* コンボボックス
* ボタン
* ラジオボタン
* チェックボックス
* スタティックテキスト
* グループエリア
* ポップアップメニュー/ドロップダウンリスト
* フィールド
* 変数
* リストボックス
* リストボックス列
* リストボックスヘッダー
* リストボックスフッター
* *4D Write Proリファレンス*エリア

#### 参照 

[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  