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

**VP INSERT TABLE COLUMNS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _column_ : Integer {; _count_ : Integer {; _insertAfter_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| 引数          | 型       |    | 説明                                                   |                  |
| ----------- | ------- | -- | ---------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | 4D View Pro フォームオブジェクト名                              |                  |
| tableName   | Text    | -> | Table name                                           |                  |
| column      | Integer | -> | 列の挿入場所を指定する表組み内のインデックス                               |                  |
| count       | Text    | -> | 挿入する列の数 (>0)                      |                  |
| insertAfter | Integer | -> | `vk table insert before` または `vk table insert after` |                  |
| sheet       | Integer | -> | シートのインデックス (省略した場合はカレントシート)       | <!-- END REF --> |

#### 説明

`VP INSERT TABLE COLUMNS` コマンドは、<!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->_tableName_ で指定した表組みの _column_ で指定した列インデックスに、1つまたは _count_ で指定した数の空の列を挿入します<!-- END REF -->。

このコマンドで列を挿入した場合、通常は [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md) コマンドを使用してその内容を編集します。

_insertAfter_ パラメーターに以下の定数のいずれかを渡すことで、_column_ に指定した列インデックスの前または後に列を挿入するかを指定できます:

| 定数                       | 値 | 説明                                                 |
| ------------------------ | - | -------------------------------------------------- |
| `vk table insert before` | 0 | _column_ の前に列を挿入します (省略時のデフォルト) |
| `vk table insert after`  | 1 | _column_ の後に列を挿入します                                |

このコマンドは、シート内ではなく、_tableName_ の表組みに列を挿入します。 したがって、シートの総列数は、このコマンドの影響を受けません。 表組みより右側にデータがある場合は、挿入された列の数に応じて自動的に右に移動します。

_tableName_ の表組みが存在しない場合、あるいはシートに十分なスペースがない場合は、何も起こりません。

#### 例題

[VP INSERT TABLE ROWS](vp-insert-table-rows.md) および [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md) の例題を参照ください。

#### 参照

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
