---
id: vp-remove-table-rows
title: VP REMOVE TABLE ROWS
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #_method_.VP REMOVE TABLE ROWS.Syntax -->

**VP REMOVE TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

| 引数         | 型       |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| tableName  | Text    | -> | Table name                                     |                  |
| row        | Integer | -> | 行の削除の開始場所を指定する表組み内のインデックス                      |                  |
| count      | Integer | -> | 削除する行の数 (>0)                |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP REMOVE TABLE ROWS` コマンドは、<!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->*tableName* で指定した表組みの *row* で指定した行インデックスから、1つまたは *count* で指定した数の行を削除します<!-- END REF -->。 このコマンドは、値とスタイルを削除します。

このコマンドは、シートではなく、*tableName* の表組みから行を削除します。 したがって、シートの総行数は、このコマンドの影響を受けません。 表組みより下側にデータがある場合は、削除された行の数に応じて自動的に上に移動します。

*tableName* の表組みが [データコンテキスト](vp-set-data-context.md) にバインドされている場合、このコマンドはコレクションから要素を削除します。

*tableName* の表組みが存在しない場合には、何も起こりません。

#### 例題

"dataTable" 表組みの 3行目から 2行を削除します:

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

#### 参照

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)
