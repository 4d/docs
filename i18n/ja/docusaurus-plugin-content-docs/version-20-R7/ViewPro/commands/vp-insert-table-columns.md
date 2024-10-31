---
id: vp-insert-table-columns
title: VP INSERT TABLE COLUMNS
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->

**VP INSERT TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| 引数          | 型    |    | 説明                                                   |                  |
| ----------- | ---- | -- | ---------------------------------------------------- | ---------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名                              |                  |
| tableName   | テキスト | -> | Table name                                           |                  |
| column      | 整数   | -> | 列の挿入場所を指定する表組み内のインデックス                               |                  |
| count       | テキスト | -> | 挿入する列の数 (>0)                      |                  |
| insertAfter | 整数   | -> | `vk table insert before` または `vk table insert after` |                  |
| sheet       | 整数   | -> | シートのインデックス (省略した場合はカレントシート)       | <!-- END REF --> |

#### 説明

`VP INSERT TABLE COLUMNS` コマンドは、<!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->*tableName* で指定した表組みの *column* で指定した列インデックスに、1つまたは *count* で指定した数の空の列を挿入します<!-- END REF -->。

このコマンドで列を挿入した場合、通常は [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md) コマンドを使用してその内容を編集します。

*insertAfter* パラメーターに以下の定数のいずれかを渡すことで、*column* に指定した列インデックスの前または後に列を挿入するかを指定できます:

| 定数                       | 値 | 説明                                                 |
| ------------------------ | - | -------------------------------------------------- |
| `vk table insert before` | 0 | *column* の前に列を挿入します (省略時のデフォルト) |
| `vk table insert after`  | 1 | *column* の後に列を挿入します                                |

このコマンドは、シート内ではなく、*tableName* の表組みに列を挿入します。 したがって、シートの総列数は、このコマンドの影響を受けません。 表組みより右側にデータがある場合は、挿入された列の数に応じて自動的に右に移動します。

*tableName* の表組みが存在しない場合、あるいはシートに十分なスペースがない場合は、何も起こりません。

#### 例題

[VP INSERT TABLE ROWS](vp-insert-table-rows.md) および [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md) の例題を参照ください。

#### 参照

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
