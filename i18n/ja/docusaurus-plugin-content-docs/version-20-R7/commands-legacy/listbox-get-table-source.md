---
id: listbox-get-table-source
title: LISTBOX GET TABLE SOURCE
slug: /commands/listbox-get-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Syntax-->**LISTBOX GET TABLE SOURCE** ( {* ;} *object* ; *tableNum* {; *name* {; *highlightName*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET TABLE SOURCE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| tableNum | Integer | &#8592; | セレクションのテーブル番号 |
| name | Text | &#8592; | 命名セレクション名 またはカレントセレクションの場合"" |
| highlightName | Text | &#8592; | ハイライトセット名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Summary-->**LISTBOX GET TABLE SOURCE**コマンドを使用して、*object*と *\** 引数で指定したリストボックスに表示されるデータの現在のソースを知ることができます。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

このコマンドはリストボックスに関連付けられたメインテーブルのテーブル番号を*tableNum*引数に、使用される命名セレクション名をオプションの*name* 引数に返します。  
リストボックス行がテーブルのカレントセレクションに関連付けられている場合、*name* 引数には空の文字列が返されます。リストボックス行がテーブルの命名セレクションに関連付けられている場合、*name* 引数にはこの命名セレクション名が返されます。

リストボックスが配列に関連付けられている場合、*tableNum* には -1が、*name*が渡されていれば空の文字列が返されます。

#### 参照 

[LISTBOX SET TABLE SOURCE](listbox-set-table-source.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1014 |
| スレッドセーフである | &cross; |


