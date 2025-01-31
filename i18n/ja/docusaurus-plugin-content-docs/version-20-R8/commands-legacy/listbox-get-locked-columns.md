---
id: listbox-get-locked-columns
title: LISTBOX Get locked columns
slug: /commands/listbox-get-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get locked columns.Syntax-->**LISTBOX Get locked columns** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get locked columns.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)、省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | 横スクロールしない列数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get locked columns.Summary-->**LISTBOX Get locked columns**コマンドは*object*と *\** 引数で指定したリストボックスで横スクロールしない列数を返します。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。

列はプロパティリストや[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)コマンドを使用してロックできます。詳細はデザインリファレンスマニュアルを参照してください。

ロックされたエリア内でプログラムを使用して列が挿入されたり削除されたりすると、このコマンドから返される列数も変更されます。例えばロックされた列をひとつ削除すると、ロックされた列の数はひとつ減ります。同様にロックされたエリアにプログラムで列を挿入すると、この列は自動でロックされ、ロックされた列数は一つ増えます。 

しかしコマンドは列の表示/非表示状態は考慮しません。

#### 参照 

[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1152 |
| スレッドセーフである | &cross; |


