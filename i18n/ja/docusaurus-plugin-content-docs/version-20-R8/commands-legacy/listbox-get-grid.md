---
id: listbox-get-grid
title: LISTBOX GET GRID
slug: /commands/listbox-get-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID.Syntax-->**LISTBOX GET GRID** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| horizontal | Boolean | &#8592; | True: 表示、False: 非表示 |
| vertical | Boolean | &#8592; | True: 表示、False: 非表示 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX GET GRID.Summary-->**LISTBOX GET GRID**コマンドは*object* と *\** 引数で指定したリストボックスオブジェクトの縦横グリッド線の表示/非表示状態をそれぞれ返します。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。 

コマンドは *horizontal* と *vertical* に、対応する線が表示されているか (True)、いないか (False) を返します。デフォルトでグリッドは表示されています。

#### 参照 

[LISTBOX SET GRID](listbox-set-grid.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1199 |
| スレッドセーフである | &cross; |


