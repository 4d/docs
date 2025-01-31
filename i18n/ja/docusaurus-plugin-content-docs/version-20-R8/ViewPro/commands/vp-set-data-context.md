---
id: vp-set-data-context
title: VP SET DATA CONTEXT
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R5 | 追加 |

</details>

<!-- REF #_method_.VP SET DATA CONTEXT.Syntax -->

**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataObj* : Object {; *options* : Object } {; *sheet* : Integer} )<br/>**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataColl* : Collection ; {*options* : Object } {; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET DATA CONTEXT.Params -->

| 引数         | 型          |    | 説明                       |                  |
| ---------- | ---------- | -- | ------------------------ | ---------------- |
| vpAreaName | Text       | -> | 4D View Pro フォームオブジェクト名  |                  |
| dataObj    | Object     | -> | データコンテキストに読み込むデータオブジェクト  |                  |
| dataColl   | Collection | -> | データコンテキストに読み込むデータのコレクション |                  |
| options    | Object     | -> | 追加のオプション                 |                  |
| sheet      | Integer    | -> | シートのインデックス               | <!-- END REF --> |

#### 説明

`VP SET DATA CONTEXT` コマンドは、<!-- REF #_method_.VP SET DATA CONTEXT.Summary -->シートのデータコンテキストを設定します<!-- END REF -->。 データコンテキストは、ワークシートにバインドされたオブジェクトまたはコレクションで、自動生成オプションまたは [VP SET BINDING PATH](vp-set-binding-path.md) メソッドを使用することで、シートのセルにその内容を自動的に表示させることができます。 他方、[VP Get data context](vp-get-data-context.md) コマンドは、ユーザーによる編集が含まれたコンテキストを返すことができます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*dataObj* または *dataColl* には、データコンテキストに読み込むデータを格納したオブジェクトまたはコレクションを渡します。 ピクチャーはデータURIスキームに変換されます。

*dataObj* または *dataColl* に時間値を渡すには、次のプロパティを持つオブジェクトにカプセル化します ([例題 4](#例題-4---日付と時間のシンタックス) 参照):

| プロパティ | 型                                        | 説明                                      |
| ----- | ---------------------------------------- | --------------------------------------- |
| value | Integer, Real, Boolean, Text, Date, Null | コンテキストに設定する値                            |
| time  | Real                                     | コンテキストに設定する時間値 (秒単位) |

*options* には、追加のオプションを格納したオブジェクトを渡せます。 利用可能なプロパティは次のとおりです:

| プロパティ               | 型      | 説明                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| reset               | Object | 新しいコンテキストを読み込む前にシートの内容をリセットする場合は true、それ以外は false (デフォルト)                                                                                                                                                                                                                                                                                    |
| autoGenerateColumns | Object | コレクション型のデータの場合にのみ使用します。 データコンテキストがバインドされると同時に、カラムを自動生成する場合は true (デフォルト)。 この場合、次のルールが適用されます: <ul><li>*dataColl* がオブジェクトのコレクションの場合、属性名はカラムのタイトルとして使用されます (例題 2 参照)。</li><li>*dataColl* がスカラー値のサブコレクションを含む場合、各サブコレクションは一つの行の値を定義します (例題 3 参照)。 最初のサブコレクションにより、生成されるカラム数が決定します。</li></ul> |

*sheet* には、データコンテキストを受け取るシートのインデックスを渡します。 インデックスを渡さなかった場合、コンテキストはカレントシートに対して適用されます。

[VP Export to object](vp-export-to-object.md) でドキュメントをオブジェクトにエクスポート、または [VP EXPORT DOCUMENT](vp-export-document.md) でドキュメントを 4DVP ドキュメントにエクスポートする場合、`includeBindingSource` オプションを使うことで、現在のコンテキストの内容をエクスポート先のセルの値としてコピーすることができます。 詳細については、これらのメソッドの説明を参照ください。

#### 例題

オブジェクトを受け渡し、先頭行のセルにコンテキストデータをバインドします:

```4d
var $data : Object

$data:=New object

$data.firstName:="Freehafer"
$data.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $data)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

```

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

#### 例題 2

オブジェクトのコレクションを受け渡して、カラムを自動生成します:

```4d
var $options : Object
var $data : Collection

$data:=New collection()
$data.push(New object("firstname"; "John"; "lastname"; "Smith"))
$data.push(New object("firstname"; "Mary"; "lastname"; "Poppins"))

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../../assets/en/ViewPro/vp-set-data-context-2.png)

#### 例題 3

引数として渡す *data* は、サブコレクションを含むコレクションです。 それぞれのサブコレクションは行を定義します:

```4d
var $data : Collection
var $options : Object

$data:=New collection
$data.push(New collection(1; 2; 3; False; ""))  // 5 columns are created
$data.push(New collection)  // Second row is empty
$data.push(New collection(4; 5; Null; "hello"; "world"))  // Third row has 5 values
$data.push(New collection(6; 7; 8; 9))  // Fourth row has 4 values

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../../assets/en/ViewPro/vp-set-data-context-3.png)

#### 例題 4 - 日付と時間のシンタックス

```4d
var $data : Collection
var $options : Object

$data:= New collection()

// 日付はスカラー値として渡すことができます
$data.push(New collection("Date"; Current date)) 

// 時間はオブジェクト属性として渡す必要があります
$data.push(New collection("Time"; New object("time"; 5140)))

// 日付 + 時間の例
$data.push(New collection("Date + Time"; New object("value"; Current date; "time"; 5140))) 

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

カラムが生成された後の結果です:

![](../../assets/en/ViewPro/vp-set-data-context-date-time.png)

#### 参照

[VP SET BINDING PATH](vp-set-binding-path.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)
