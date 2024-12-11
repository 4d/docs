---
id: listbox-get-number-of-rows
title: LISTBOX Get number of rows
slug: /commands/listbox-get-number-of-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of rows.Syntax-->**LISTBOX Get number of rows** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of rows.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | 行数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get number of rows.Summary-->LISTBOX Get number of rowsコマンドは、*object*引数および *\** で指定されたリストボックスの行の数を返します。<!-- END REF-->

**Note:** LISTBOX Get number of rowsは行の表示/非表示状態を考慮に入れません。例えば、10行のうち先頭の9行か非表示のリストボックスで、LISTBOX Get number of rowsは10を返します。

オプションの引数*\**を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細はの節を参照してください。

**Note:** リストボックスのカラムに関連付けられたすべての配列が同じサイズではない場合、最小の配列サイズだけがリストボックスに表示され、またこのコマンドもその数値を返します。

#### 参照 

[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 915 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


