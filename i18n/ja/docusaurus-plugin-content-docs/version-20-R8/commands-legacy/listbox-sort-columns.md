---
id: listbox-sort-columns
title: LISTBOX SORT COLUMNS
slug: /commands/listbox-sort-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SORT COLUMNS.Syntax-->**LISTBOX SORT COLUMNS** ( {* ;} *object* ; *colNum* ; *order* {; *colNum2* ; *order2* ; ... ; *colNumN* ; *orderN*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SORT COLUMNS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| colNum | Integer | &#8594;  | 並び替える列番号 |
| order | * | &#8594;  | ">": 昇順ソート または "<": 降順ソート |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SORT COLUMNS.Summary-->LISTBOX SORT COLUMNS コマンドは、1つ以上の列の値に基づいて、*object* 引数および*\**で指定されたリストボックスの行に対して、標準の並べ替えを適用します。<!-- END REF-->

**注意:** ユーザーがカラムのヘッダーをクリックした時、単一のカラムの値に基づいて標準の並べ替えが適用されます(*標準ソート* を参照してください)。

オプションの引数 *\** を渡すことにより、*object* 引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object* 引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ* の節を参照してください。

*colNum* には、ソート条件として使用したい列番号を指定します。ピクチャタイプとポインタタイプを除き、任意のタイプの配列データを使用することができます。

*order* には、並び替え順を表わす>または<記号を渡します。*order* に>を指定すると、並び替えは昇順になります。*order* に<を指定すると、並び替えは降順になります。

マルチレベルソートを定義することができます。これを行うには、必要なだけ*colNum;order* のペアを渡します。並び替えレベルは、コマンド内の引数の位置によって決まります。

リストボックス操作の原則に従い、それぞれの列は同期化されます。つまり列の並び順は、自動的にそのオブジェクトの他のすべての列に受け継がれます。

**注意:** **LISTBOX SORT COLUMNS** コマンドは、*Sortable* リストボックスプロパティを考慮しません。


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 916 |
| スレッドセーフである | &cross; |


