---
id: listbox-get-footer-calculation
title: LISTBOX Get footer calculation
slug: /commands/listbox-get-footer-calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footer calculation.Syntax-->**LISTBOX Get footer calculation** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get footer calculation.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | 計算タイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get footer calculation.Summary-->**LISTBOX Get footer calculation**コマンドは*object*と*\** 引数で指定したリストボックスのフッターエリアに割り当てられた自動計算のタイプを返します。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。

*object* 引数を使用して以下を指定します:

* フッターエリアの変数またはオブジェクト名。この場合コマンドはこのエリアに割り当てられた自動計算のタイプを返します。
* リストボックス列の変数またはオブジェクト名。この場合コマンドはこの列のフッターエリアに割り当てられた自動計算のタイプを返します。

返される値を*Listbox Footer Calculation*テーマの定数と比較することができます ([LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)コマンド参照)。 

#### 参照 

[LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1150 |
| スレッドセーフである | &cross; |


