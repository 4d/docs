---
id: vp-create-table
title: VP CREATE TABLE
---

<details><summary>履歴</summary>

| リリース  | 内容                                                                                                              |
| ----- | --------------------------------------------------------------------------------------------------------------- |
| 19 R8 | テーマオプションのサポート: `bandColumn`, `bandRows`, `highlightFirstColumn`, `highlightLastColumn`, `theme` |
| 19 R7 | `allowAutoExpand` オプションをサポート                                                                                    |
| 19 R6 | 追加                                                                                                              |

</details>

<!-- REF #_method_.VP CREATE TABLE.Syntax -->

**VP CREATE TABLE** ( *rangeObj* : Object ; *tableName* : Text {; *source* : Text} {; *options* : cs.ViewPro.TableOptions} )<!-- END REF -->

<!-- REF #_method_.VP CREATE TABLE.Params -->

| 引数        | 型                                                                                     |    | 説明                    |                  |
| --------- | ------------------------------------------------------------------------------------- | -- | --------------------- | ---------------- |
| rangeObj  | Object                                                                                | -> | レンジオブジェクト             |                  |
| tableName | Text                                                                                  | -> | 表組みの名称                |                  |
| source    | Text                                                                                  | -> | 表に表示するデータコンテキストプロパティ名 |                  |
| options   | [cs.ViewPro.TableOptions](../classes.md#tableoptions) | -> | 追加のオプション              | <!-- END REF --> |

#### 説明

`VP CREATE TABLE` コマンドは、<!-- REF #_method_.VP CREATE TABLE.Summary -->指定のレンジ内に表組みを作成します<!-- END REF -->。 表組みを作成することで、関連するデータの管理や分析をより簡単におこなえます。 表組みは通常、関連するデータを行と列に含み、[データコンテキスト](vp-set-data-context.md) を利用します。

![](../../assets/en/ViewPro/vp-create-table.png)

*rangeObj* 引数には、表の作成場所としたいセルのレンジを渡します。

*tableName* には、表組みの名称を渡します。 名称は次の条件を満たさなくてはなりません:

- シートにおいて固有のものである
- 5文字以上である
- 先頭が数字でなく、スペースを含まない

*source* には、表組みにデータを提供する [データコンテキスト](vp-set-data-context.md) のプロパティ名を渡します。 これにより、表をデータコンテキストにバインドします。 データコンテキストが更新されると、表に表示されるデータも更新されます。 このデータコンテキストには、各要素が行を表すオブジェクトのコレクションが含まれている必要があります。

- *source* を指定しない場合、コマンドは *rangeObj* が定義するサイズの空の表を作成します。
- 指定された *source* をドキュメント内に完全に表示できない場合、表は作成されません。

*options* には、設定する表プロパティを格納する [`cs.ViewPro.TableOptions` クラス](../classes.md#tableoptions) のオブジェクトを渡します。

*options* オブジェクトの中で、*tableColumns* コレクションが、表の列のデータ構造を決定します。 *tableColumns* コレクションの長さは、レンジの列数と等しくなければなりません:

- *rangeObj* の列数が *tableColumns* の列数より多い場合、表は追加の空列で埋められます。
- *rangeObj* の列数が *tableColumns* の列数より少ない場合、表はレンジの列数のみを表示します。

*source* を渡しながら、*tableColumn* オプションは渡さなかった場合、コマンドは自動的に列を生成します。 この場合、*rangeObj* はセルレンジでなければなりません。 そうでなければ、レンジの先頭セルが使用されます。 列を自動生成する場合、次のルールが適用されます:

- コマンドに渡されるデータがオブジェクトのコレクションである場合、列のタイトルとしてプロパティ名が使用されます。 例:

```4d
([{ LastName: \"Freehafer\", FirstName: \"Nancy\"},{ LastName: \"John\", FirstName: \"Doe\"})
```

この場合、列のタイトルは `LastName` と `FirstName` になります。

- スカラー値のコレクションを各行のデータとして渡すには、それらはサブコレクションとしてコレクションに格納されている必要があります:

  - 第1レベルのコレクションは、値のサブコレクションを格納しています。 それぞれのサブコレクションは行を定義します。 行をスキップするには空のコレクションを渡します。 最初のサブコレクションに格納されている値の数により、生成されるカラム数が決定します。
  - 列のタイトルとして、サブコレクションのインデックスが使用されます。
  - それぞれのサブコレクションは行におけるセルの値を定義します。 `Integer`, `Real`, `Boolean`, `Text`, `Date`, `Null`, `Time` または `Picture` の値が可能です。 `Time` の値は、[VP SET VALUE](vp-set-value.md) でも記述されているように、time 属性を含むオブジェクトでなければなりません。

> これは列を自動生成するときにのみ機能します。 *tableColumns* オプションを使用する場合、スカラーデータのコレクションは使用できません。

#### 例題

データコンテキストを使用した表組みを作成します:

```4d
// Set a data context
var $data : Object

$data:=New object()
$data.people:=New collection()
$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))
$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))


VP SET DATA CONTEXT("ViewProArea"; $data)

// Define the columns for the table
var $options : cs.ViewPro.TableOptions

$options:=cs.ViewPro.TableOptions.new()
$options.tableColumns:=New collection()
$options.tableColumns.push(New object("name"; "First name"; "dataField"; "firstName"))
$options.tableColumns.push(New object("name"; "Last name"; "dataField"; "lastName"))
$options.tableColumns.push(New object("name"; "Email"; "dataField"; "email"))

// Create a table from the "people" collection
VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)
```

このようになります:

![](../../assets/en/ViewPro/vp-create-table.png)

#### 参照

[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP Get table column index](vp-get-table-column-index.md)<br/>
[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE](vp-remove-table.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP SET TABLE THEME](vp-set-table-theme.md)
