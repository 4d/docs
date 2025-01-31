---
id: vp-remove-table-columns
title: VP REMOVE TABLE COLUMNS
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Syntax -->

**VP REMOVE TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Params -->

| 引数         | 型       |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| tableName  | Text    | -> | Table name                                     |                  |
| column     | Integer | -> | 列の削除の開始場所を指定する表組み内のインデックス                      |                  |
| count      | Integer | -> | 削除する列の数 (>0)                |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP REMOVE TABLE COLUMNS` コマンドは、<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Summary -->*tableName* で指定した表組みの *column* で指定した列インデックスから、1つまたは *count* で指定した数の列を削除します<!-- END REF -->。 このコマンドは、値とスタイルを削除します。

このコマンドは、シートではなく、*tableName* の表組みから列を削除します。 したがって、シートの総列数は、このコマンドの影響を受けません。 表組みより右側にデータがある場合は、削除された列の数に応じて自動的に左に移動します。

*tableName* の表組みが存在しない場合には、何も起こりません。

#### 例題

"dataTable" 表組みの 3列目から 2列を削除します:

```4d
VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)
```

#### 参照

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
