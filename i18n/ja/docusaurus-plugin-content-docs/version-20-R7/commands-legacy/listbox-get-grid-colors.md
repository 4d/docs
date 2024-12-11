---
id: listbox-get-grid-colors
title: LISTBOX GET GRID COLORS
slug: /commands/listbox-get-grid-colors
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID COLORS.Syntax-->**LISTBOX GET GRID COLORS** ( {* ;} *object* ; *hColor* ; *vColor* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID COLORS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| hColor | Text, Integer | &#8592; | 横グリッドのRGBカラー値 |
| vColor | Text, Integer | &#8592; | 縦グリッドのRGBカラー値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX GET GRID COLORS.Summary-->**LISTBOX GET GRID COLORS**コマンドは*object*と*\** 引数で指定したリストボックスの縦横グリッドカラーをそれぞれ返します。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。

コマンドは *hColor* と *vColor* にRGBカラーの値を返します。返されるカラーフォーマトは、*hColor* および *vColor* に渡した引数の型によって変わります:

* テキスト型を渡していた場合、カラーはCSS テキスト("#rrggbb"フォーマット)で返されます。
* 倍長整数型を渡していた場合、カラーは4バイトの倍長整数(0x00rrggbbフォーマット)で返されます。

#### 参照 

[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1200 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


