---
id: query-with-array
title: QUERY WITH ARRAY
slug: /commands/query-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY WITH ARRAY.Syntax-->**QUERY WITH ARRAY** ( *targetField* ; *array* )<!-- END REF-->
<!--REF #_command_.QUERY WITH ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetField | Field | &#8594;  | 値との比較に使用するフィールド |
| array | Array | &#8594;  | 検索する値の配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY WITH ARRAY.Summary-->コマンドは、*targetField*の値が少なくとも*array*要素のうち1つに等しいレコードを、 *targetField*が属するテーブルの全レコードの中から検索します。<!-- END REF-->検索されたレコードはカレントセレクションとなります。

このコマンドを使用すると、複数の値を使用する検索を素早く簡単に構築できます。

**Notes:**

* このコマンドはピクチャまたはBLOB 型のフィールドには使用できません。
* *targetFieldとarray*は同じデータタイプでなければなりません。例外: 時間型のフィールドに対しては倍長整数配列を使用できます。

#### 例題 

以下の例題では、フランスとアメリカの顧客を検索します:

```4d
 ARRAY TEXT(SearchArray;2)
 SearchArray{1}:="FR"
 SearchArray{2}:="US"
 QUERY WITH ARRAY([Clients]Country;SearchArray)
```

#### 参照 

[QUERY SELECTION WITH ARRAY](query-selection-with-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 644 |
| スレッドセーフである | &check; |
| カレントセレクションを変更する ||


