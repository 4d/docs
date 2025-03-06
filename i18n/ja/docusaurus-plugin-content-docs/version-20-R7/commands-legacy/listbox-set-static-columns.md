---
id: listbox-set-static-columns
title: LISTBOX SET STATIC COLUMNS
slug: /commands/listbox-set-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Syntax-->**LISTBOX SET STATIC COLUMNS** ( {* ;} *object* ; *numColumn* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| numColumn | Integer | &#8594;  | ドラッグで移動しない列数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Summary-->**LISTBOX SET STATIC COLUMNS**コマンドは*object* と *\** 引数で指定したリストボックス中のスタティック列の数を左端から*numColumns*に設定します。<!-- END REF-->

リストボックス内でスタティック列は移動することができません。

**注:** スタティック列とロックされた列は異なる機能です。詳細はランゲージリファレンスマニュアルを参照してください。

#### 参照 

[LISTBOX Get static columns](listbox-get-static-columns.md)  
[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1153 |
| スレッドセーフである | &cross; |


