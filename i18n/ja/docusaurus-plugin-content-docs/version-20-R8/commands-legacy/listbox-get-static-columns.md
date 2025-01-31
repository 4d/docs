---
id: listbox-get-static-columns
title: LISTBOX Get static columns
slug: /commands/listbox-get-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get static columns.Syntax-->**LISTBOX Get static columns** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get static columns.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | ドラッグで移動しない列数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get static columns.Summary-->**LISTBOX Get static columns**コマンドは*object* と*\** 引数で指定したリストボックス中のドラッグで移動しない列数を返します。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。

スタティック列はプロパティリストや[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)コマンドを使用して設定できます。

スタティック列内でプログラムを使用して列が挿入されたり削除されたりすると、このコマンドから返される列数も変更されます。   
しかしコマンドは列の表示/非表示状態は考慮に入れません。

**注:** スタティック列とロックされた列は異なる機能です。詳細はデザインリファレンスマニュアルを参照してください。 

#### 参照 

[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1154 |
| スレッドセーフである | &cross; |


