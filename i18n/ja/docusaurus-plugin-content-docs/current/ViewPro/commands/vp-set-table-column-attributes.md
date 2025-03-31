---
id: vp-set-table-column-attributes
title: VP SET TABLE COLUMN ATTRIBUTES
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Syntax -->

**VP SET TABLE COLUMN ATTRIBUTES** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer ; *attributes* : Object {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Params -->

| 引数         | 型       |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| tableName  | Text    | -> | Table name                                     |                  |
| column     | Integer | -> | 表の列のインデックス                                     |                  |
| attributes | Object  | -> | *column* の列に適用する属性                             |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP SET TABLE COLUMN ATTRIBUTES` コマンドは、<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Summary -->*tableName* で指定した表組みの *column* でインデックスを指定した列に *attributes* の属性を適用します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*attributes* 引数には、設定するプロパティを含むオブジェクトを渡します:

| プロパティ               | 型    | 説明                                                                                                                                               |
| ------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| dataField           | text | データコンテキストにおける、表の列のプロパティ名。                                                                                                                        |
| name                | text | 表の列の名前。 表組み内でユニークでなくてはなりません。 すでに他の列で使われている場合、名前は適用されず、自動的にデフォルトの名前が使われます。                                                                        |
| formula             | text | 列の各セルにフォーミュラを設定します。 SpreadJS のドキュメント [Structured Reference Formulas](https://developer.mescius.com/spreadjs/docs/features/tablegen/structref) 参照 |
| footerText          | text | 列のフッター値                                                                                                                                          |
| footerFormula       | text | 列のフッターのフォーミュラ。                                                                                                                                   |
| filterButtonVisible | ブール  | 表組みの列のフィルターボタンを表示するかどうかを設定します (表組み作成時のデフォルトは `true`)。                                                                         |

*sheet* には、ターゲットシートのインデックスを渡します。 index が省略された場合、または -1 が渡された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

*tableName* に指定した名称の表組みが見つからない場合、または *column* に指定したインデックスが列数を超える場合には、コマンドは何もしません。

#### 例題

データコンテキストを使用した表組みを作成します:

```4d
var $context;$options : Object

$context:=New object()
$context.col:=New collection()
$context.col.push(New object("name"; "Smith"; "firstname"; "John"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "firstname"; "Jim"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "firstname"; "Maria"; "salary"; 10500))
VP SET DATA CONTEXT("ViewProArea"; $context)

	// 表組みの列を定義します
$options:=New object()
$options.tableColumns:=New collection()
$options.tableColumns.push(New object("name"; "Last Name"; "dataField"; "name"))
$options.tableColumns.push(New object("name"; "Salary"; "dataField"; "salary"))

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 2; 3); "PeopleTable"; "col"; $options)
```

![](../../assets/en/ViewPro/table-inserta.png)

その後、データコンテキストからデータを取得する列を挿入し、フィルターボタンをいくつか非表示にします:

```4d
	// 列を挿入します
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 1)

var $param : Object
$param:=New object()
	// データコンテキストの firstname フィールドに列をバインドします
$param.dataField:="firstname"
	// 列名をデフォルトから "First name" に変更します
	// フィルターボタンを非表示にします
$param.name:="First Name"
$param.filterButtonVisible:=False

VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 1; $param)

	// 1列目のフィルターボタンも非表示にします
VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 0; \
	New object("filterButtonVisible"; False))

```

![](../../assets/en/ViewPro/table-insertb.png)

#### 参照

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
