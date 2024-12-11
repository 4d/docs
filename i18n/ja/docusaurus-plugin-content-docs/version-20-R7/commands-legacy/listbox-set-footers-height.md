---
id: listbox-set-footers-height
title: LISTBOX SET FOOTERS HEIGHT
slug: /commands/listbox-set-footers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Syntax-->**LISTBOX SET FOOTERS HEIGHT** ( {* ;} *object* ; *height* {; *unit*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| height | Integer | &#8594;  | 行の高さ |
| unit | Integer | &#8594;  | 高さを指定する単位:0または省略時 = ピクセル、1 = 行 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Summary-->**LISTBOX SET FOOTERS HEIGHT**コマンドは*object*と*\** 引数で指定したリストボックスのフッター行の高さを変更します。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。リストボックスあるいはリストボックスフッターを指定できます。

設定する高さを *height* 引数に渡します。*unit* 引数を省略するとデフォルトで単にはピクセルです。単位を変更するには*List Box*テーマの定数を *unit* 引数に渡します:

| 定数        | 型    | 値 | コメント                            |
| --------- | ---- | - | ------------------------------- |
| lk lines  | 倍長整数 | 1 | 高さを行数で指定。4Dはフォント設定に応じて高さを計算します。 |
| lk pixels | 倍長整数 | 0 | 高さをピクセルで指定 (デフォルト)。             |

**注:** 行の高さの計算に関する詳細はデザインリファレンスマニュアルを参照してください。

#### 参照 

[LISTBOX Get footers height](listbox-get-footers-height.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1145 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


