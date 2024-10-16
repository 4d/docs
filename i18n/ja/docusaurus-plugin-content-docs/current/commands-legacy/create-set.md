---
id: create-set
title: CREATE SET
slug: /commands/create-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET.Syntax-->**CREATE SET** ( {*aTable* ;} *set* )<!-- END REF-->
<!--REF #_command_.CREATE SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションからセットを作成するテーブル、または 省略時、デフォルトテーブル |
| set | Text | &#8594;  | 新規に作成するセットの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CREATE SET.Summary-->CREATE SETは、*aTable*に対して新しいセット*set*を作成し、*set*にカレントセレクションの内容を置きます。<!-- END REF-->テーブルのカレントレコードポインタは*set*に保存されます。*set*に対して[USE SET](use-set.md "USE SET")を使用すると、カレントセレクションとカレントレコードが復元されます。すべてのセットに対してソート順序は適用されません。*set*が使用されるときはデフォルトの順序が適用されます。既に同じ名前のセットが存在している場合、そのセットを消去し新しいセットに置き換えます。

#### 例題 

以下の例は検索を行った後で新しいセットを作成し、それをディスクに保存します:

```4d
 QUERY([People]) // ユーザが検索を行う
 CREATE SET([People];"SearchSet") // 新しくセットを作成
 SAVE SET("SearchSet";"MySearch") // ディスクにセットを保存
```

#### 参照 

[CLEAR SET](clear-set.md)  
[CREATE EMPTY SET](create-empty-set.md)  