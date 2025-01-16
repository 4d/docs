---
id: listbox-set-locked-columns
title: LISTBOX SET LOCKED COLUMNS
slug: /commands/listbox-set-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Syntax-->**LISTBOX SET LOCKED COLUMNS** ( {* ;} *object* ; *numColumns* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| numColumns | Integer | &#8594;  | 横スクロールしない列の数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Summary-->**LISTBOX SET LOCKED COLUMNS**コマンドは*object* と*\** 引数で指定したリストボックスで左端からはじめて*numColumns*列をロックします。<!-- END REF-->

ロックされた列はリストボックスの左側に表示され、スクロールされることはありません。詳細はデザインリファレンスマニュアルを参照してください。

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。

*numColumns* には1からリストボックスの総列数-1までの値を渡せます。X列を持つリストボックスの場合、X-1より大きな値を渡すと、自動でX-1が設定されます。

列のロックを解除するには*numColumns*に0または負の値を渡します。

#### 参照 

[LISTBOX Get locked columns](listbox-get-locked-columns.md)  
[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1151 |
| スレッドセーフである | &cross; |


