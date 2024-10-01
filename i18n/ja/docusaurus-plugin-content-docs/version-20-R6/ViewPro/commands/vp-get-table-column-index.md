---
id: vp-get-table-column-index
title: VP Get table column index
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #_method_.VP Get table column index.Syntax -->

**VP Get table column index** ( *vpAreaName* : Text ; *tableName* : Text ; *columnName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get table column index.Params -->

| 引数         | 型       |                             | 説明                                             |                  |
| ---------- | ------- | --------------------------- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名                        |                  |
| tableName  | Text    | ->                          | Table name                                     |                  |
| columnName | Text    | ->                          | 列の名称                                           |                  |
| sheet      | Integer | ->                          | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | Integer | <- | *columnName* のインデックス                           | <!-- END REF --> |

#### 説明

`VP Get table column index` コマンドは、<!-- REF #_method_.VP Get table column index.Summary -->*tableName* で指定した表組みの *columnName* で指定した列のインデックスを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*columnName* には、インデックスを取得する表組みの列の名前を渡します。

*sheet* には、ターゲットシートのインデックスを渡します。 index が省略された場合、または -1 が渡された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

*tableName* で指定した表組み、または *columnName* で指定した列が見つからない場合、コマンドは -1 を返します。

#### 例題

```4d
	// 列の名前をもとに、列のインデックスを取得します
var $id : Integer
$id:=VP Get table column index($area; $tableName; "Weight price")
	// インデックスを指定して列を削除します
VP REMOVE TABLE COLUMNS($area; $tableName; $id)
```

#### 参照

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
