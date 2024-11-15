---
id: listbox-get-footers-height
title: LISTBOX Get footers height
slug: /commands/listbox-get-footers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footers height.Syntax-->**LISTBOX Get footers height** ( {* ;} *object* {; *unit*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get footers height.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| unit | Integer | &#8594;  | 高さを指定する単位:0または省略時 = ピクセル、1 = 行 |
| 戻り値 | Integer | &#8592; | 行の高さ |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX Get footers height.Summary-->**LISTBOX Get footers height**コマンドは*object*と*\** 引数で指定したリストボックスのフッター行の高さを返します。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。リストボックスあるいはリストボックスのフッターいずれかを指定できます。

*unit* 引数を省略した場合、デフォルトで高さはピクセル単位で返されます。異なる単位を指定するには *unit* 引数に *List Box* テーマの以下の定数を渡します:

| 定数        | 型    | 値 | コメント                            |
| --------- | ---- | - | ------------------------------- |
| lk lines  | 倍長整数 | 1 | 高さを行数で指定。4Dはフォント設定に応じて高さを計算します。 |
| lk pixels | 倍長整数 | 0 | 高さをピクセルで指定 (デフォルト)。             |

**注:** 行の高さの計算に関する詳細はデザインリファレンスを参照してください。

#### 参照 

[LISTBOX SET FOOTERS HEIGHT](listbox-set-footers-height.md)  