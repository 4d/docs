---
id: create-empty-set
title: CREATE EMPTY SET
slug: /commands/create-empty-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE EMPTY SET.Syntax-->**CREATE EMPTY SET** ( {*aTable* ;} *set* )<!-- END REF-->
<!--REF #_command_.CREATE EMPTY SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 空のセットを作成するテーブル, または 省略時、デフォルトテーブル |
| set | Text | &#8594;  | 新しい空のセットの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CREATE EMPTY SET.Summary-->CREATE EMPTY SETは、*aTable*に対して新しい空のセット*set*を作成します。<!-- END REF-->[ADD TO SET](add-to-set.md "ADD TO SET")コマンドを使って、このセットにレコードを追加できます。既に同じ名前のセットが存在している場合、そのセットを消去して新しい空のセットに置き換えます。

**Note:** [CREATE SET](create-set.md "CREATE SET")を使用する前に、CREATE EMPTY SETを使用する必要はありません。

#### 例題 

の節の例題参照。

#### 参照 

[CLEAR SET](clear-set.md)  
[CREATE SET](create-set.md)  