---
id: vp-insert-table-rows
title: VP INSERT TABLE ROWS
---

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R7 | 追加 |

</details>

<!-- REF #_method_.VP INSERT TABLE ROWS.Syntax -->

**VP INSERT TABLE ROWS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _row_ : Integer {; _count_ : Integer {; _insertAfter_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE ROWS.Params -->

| 引数          | タイプ     |    | 説明                                                   |                  |
| ----------- | ------- | -- | ---------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | 4D View Pro フォームオブジェクト名                              |                  |
| tableName   | Text    | -> | Table name                                           |                  |
| row         | Integer | -> | 行の挿入場所を指定する表組み内のインデックス                               |                  |
| count       | Text    | -> | 挿入する行の数 (>0)                      |                  |
| insertAfter | Integer | -> | `vk table insert before` または `vk table insert after` |                  |
| sheet       | Integer | -> | シートのインデックス (省略した場合はカレントシート)       | <!-- END REF --> |

#### 説明

`VP INSERT TABLE ROWS` コマンドは、<!-- REF #_method_.VP INSERT TABLE ROWS.Summary -->_tableName_ で指定した表組みの _row_ で指定した行インデックスに、1つまたは _count_ で指定した数の空の行を挿入します<!-- END REF -->。

_insertAfter_ パラメーターに以下の定数のいずれかを渡すことで、_row_ に指定した行インデックスの前または後に行を挿入するかを指定できます。

| 定数                       | 値 | 説明                                              |
| ------------------------ | - | ----------------------------------------------- |
| `vk table insert before` | 0 | _row_ の前に行を挿入します (省略時のデフォルト) |
| `vk table insert after`  | 1 | _row_ の後に行を挿入します                                |

このコマンドは、シート内ではなく、_tableName_ の表組みに行を挿入します。 したがって、シートの総行数は、このコマンドの影響を受けません。 表組みより下側にデータがある場合は、挿入された行の数に応じて自動的に下に移動します。

_tableName_ の表組みが [データコンテキスト](vp-set-data-context.md) にバインドされている場合、このコマンドはコレクションに新しい空の要素を挿入します。

_tableName_ の表組みが存在しない場合、あるいはシートに十分なスペースがない場合は、何も起こりません。

#### 例題

データコンテキストを使用した表組みを作成します:

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../../assets/en/ViewPro/table-base.png)

表組みに 2行と 2列を挿入したい場合、次のように書きます:

```4d
VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)
```

![](../../assets/en/ViewPro/table-insert.png)

#### 参照

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
