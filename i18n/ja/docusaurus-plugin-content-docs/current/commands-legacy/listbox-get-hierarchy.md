---
id: listbox-get-hierarchy
title: LISTBOX GET HIERARCHY
slug: /commands/listbox-get-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET HIERARCHY.Syntax-->**LISTBOX GET HIERARCHY** ( {* ;} *object* ; *hierarchical* {; *hierarchy*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET HIERARCHY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、objectはオブジェクト名 (文字列)<br/>省略時、objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数 (* 省略時) |
| hierarchical | Boolean | &#8592; | True = 階層リストボックス<br/>False = 非階層リストボックス |
| hierarchy | Pointer array | &#8592; | ポインタの配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX GET HIERARCHY.Summary-->LISTBOX GET HIERARCHY コマンドを使用して *object*と*\**で指定したリストボックスのプロパティが階層であるかどうかを知ることができます。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object*引数はオブジェクト名 (文字列) です。この引数を渡さない場合*object*は変数です。この場合、文字列ではなく変数参照を渡します。

ブール型の*hierarchical*引数はリストボックスのモードが階層モードであるかないかを示します:

* 引数がTrueを返すと、リストボックスは階層モードです。
* 引数がFalseを返すと、リストボックスは (非階層の) 標準配列モードで表示されています。

リストボックスが階層モードであるとき、*hierarchy*引数には階層を設定するために使用されるリストボックスの配列へのポインタが返されます。

**Note:** 階層リストボックスが階層モードでないとき、コマンドは*hierarchy*配列の最初の要素に、リストボックスの最初の列の配列へのポインタを返します。

#### 参照 

[LISTBOX SET HIERARCHY](listbox-set-hierarchy.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1099 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


