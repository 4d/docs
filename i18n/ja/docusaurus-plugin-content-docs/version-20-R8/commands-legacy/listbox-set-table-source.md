---
id: listbox-set-table-source
title: LISTBOX SET TABLE SOURCE
slug: /commands/listbox-set-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Syntax-->**LISTBOX SET TABLE SOURCE** ( {* ;} *object* ; tableNum | name {; *highlightName*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET TABLE SOURCE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| tableNum &#124; name | 倍長整数, 文字 | &#8594;  | カレントセレクションが使用されるテーブル番号 または使用される命名セレクション |
| highlightName | Text | &#8594;  | ハイライトセットの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Summary-->**LISTBOX SET TABLE SOURCE**コマンドは、*\** と *object* 引数で指定されるリストボックスに表示されるデータのソースを変更するために使用します。<!-- END REF-->

**注:** このコマンドは、リストボックスの“データソース”プロパティが**カレントセレクション**または**命名セレクション**に設定されている場合にのみ使用できます (詳細は*リストボックスオブジェクトの管理*を参照してください)。配列型、コレクション型、あるいはエンティティセレクション型のリストボックスにこのコマンドを適用しても何も行いません。

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

*tableNum* 引数としてテーブル番号を渡すと、リストボックスにはそのテーブルのカレントセレクションが表示されます。

*name* 引数として命名セレクション名を渡すと、リストボックスには命名セレクションに属するデータが表示されます。

オプションの *highlightName* 引数はリストボックスにハイライトセットを割り当てます。ハイライトセットはリストボックス中でユーザーがハイライトしたレコードを管理します。 

リストボックスに列が既に含まれている場合、コマンド実行後に内容が更新されます。

**注:** 最適化のため、このコマンドは非同期で処理されます。言い換えればリストボックスのソースはコマンドが呼び出されたメソッドの実行が完全に終了したときに変更されます。

#### 参照 

[LISTBOX GET TABLE SOURCE](listbox-get-table-source.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1013 |
| スレッドセーフである | &cross; |


