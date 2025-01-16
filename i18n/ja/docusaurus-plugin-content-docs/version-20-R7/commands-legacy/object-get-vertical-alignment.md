---
id: object-get-vertical-alignment
title: OBJECT Get vertical alignment
slug: /commands/object-get-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get vertical alignment.Syntax-->**OBJECT Get vertical alignment** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get vertical alignment.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | 行揃えのタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get vertical alignment.Summary-->**OBJECT Get vertical alignment**コマンドは*object* と*\** 引数で指定したオブジェクトのテキスト縦位置タイプを示す値を返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

**注:** このコマンドの一度の呼び出しを複数のオブジェクトに対して実行した場合、最後のオブジェクトの縦位置値のみが返されます。

返される値は*Form Objects (Properties)*テーマの以下のいずれかの定数に対応します:

| 定数           | 型    | 値 |
| ------------ | ---- | - |
| Align bottom | 倍長整数 | 4 |
| Align center | 倍長整数 | 3 |
| Align top    | 倍長整数 | 2 |

縦位置は以下のタイプのフォームオブジェクトに設定できます:

* リストボックス
* リストボックス列
* リストボックスヘッダーおよびフッター

#### 参照 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1188 |
| スレッドセーフである | &cross; |


