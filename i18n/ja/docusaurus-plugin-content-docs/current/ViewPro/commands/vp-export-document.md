---
id: vp-export-document
title: VP EXPORT DOCUMENT
---

<details><summary>履歴</summary>

| リリース  | 内容                              |
| ----- | ------------------------------- |
| 20 R2 | .sjsドキュメントをサポート |

</details>

<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->

**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->

| 引数         | 型      |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | Text   | -> | 4D View Pro フォームオブジェクト名 |                  |
| filePath   | Text   | -> | ドキュメントのパス名              |                  |
| paramObj   | Object | -> | 書き出しのオプション              | <!-- END REF --> |

#### 説明

`VP EXPORT DOCUMENT` コマンドは、<!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに関連付けられている 4D View Pro オブジェクトを、*filePath* と *paramObj* で指定したとおりにディスク上のドキュメントに書き出します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*filePath* には書き出すドキュメントのパスとファイル名を渡します。 パスを指定しない場合、ドキュメントは Projectフォルダーと同階層に保存されます。

ドキュメント名に拡張子を付けることで、書き出すドキュメントの形式を指定することができます:

- 4D View Pro (".4vp")
- Microsoft Excel (".xlsx")
- PDF (".pdf")
- CSV (".txt" または ".csv")
- [SpreadJS ドキュメント](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (".sjs")

ファイル名に拡張子が含まれていなくても、*paramObj* 引数によって形式が指定されている場合、書き出されたファイルには形式に対応する拡張子がつけられます。 ただし CSV形式の場合には拡張子がつきません。

任意の *paramObj* 引数を渡すと、書き出される 4D View Pro オブジェクトの複数のプロパティに加えて、書き出しが完了した際に呼び出されるコールバックメソッド名を定義することができます。

| プロパティ                |                           | 型                           | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format               |                           | テキスト                        | (任意) 渡した場合、書き出されるファイルの形式を指定します: ".4VP" (デフォルト)、 ".csv"、".xlsx"、 ".pdf"、または ".sjs"。 次の定数が利用できます:<li>`vk 4D View Pro format`</li><li>`vk csv format`</li><li>`vk MS Excel format`</li><li>`vk pdf format`</li><li>`vk sjs format`</li>4D は必要に応じて適切な拡張子をファイル名に追加します。 If the format specified doesn't correspond with the extension in *filePath*, it will be added to the end of *filePath*. If a format is not specified and no extension is provided in *filePath*, the default file format is used. |
| password             |                           | テキスト                        | Microsoft Excel のみ (任意) - MS Excel ドキュメントの保護に使用されるパスワード。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| formula              |                           | 4D.Function | 書き出しが完了した際に呼び出されるコールバックメソッド名。 書き出しが非同期でおこなわれる (PDF および Excel 形式での書き出しが該当します) 場合かつ、書き出し後にコードを実行したい場合には、コールバックメソッドが必要です。 コールバックメソッドは [`Formula`](../../API/FunctionClass.md#formula) コマンドを使って渡す必要があります。 [コールバックメソッドの渡し方](#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。                                                                                                                                                                                                                                                                                                                                                                                                               |
| valuesOnly           |                           | boolean                     | フォーミュラ (あれば) の値のみを書き出すかどうかを指定します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| includeFormatInfo    |                           | boolean                     | フォーマット (書式) 情報を含めるには true、それ以外の場合には false (デフォルトは true)。 フォーマット情報は特定の場合 (例: SVGへの書き出しなど) において有用です。 一方で、このプロパティを **false** に設定することで書き出し時間を短縮することもできます。                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| includeBindingSource |                           | boolean                     | 4DVP および Microsoft Excel のみ。 true (デフォルト) の場合、カレントデータコンテキストの値を、書き出したドキュメントのセルの値としてエクスポートします (データコンテキスト自体はエクスポートされません)。 それ以外は false。 セルバインドは常にエクスポートされます。 データコンテキストおよびセルバインドの管理については、[VP SET DATA CONTEXT](vp-set-data-context.md) および [VP SET BINDING PATH](vp-set-binding-path.md) を参照ください。                                                                                                                                                                                                                                                                                                                                                        |
| sheetIndex           |                           | number                      | PDF のみ (任意) - 書き出すシートのインデックス (0 起点)。 -2 = 表示されている全シート (**デフォルト**)、-1 = カレントシートのみ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| pdfOptions           |                           | object                      | PDFのみ (任意) - pdf 用のオプション                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                      | creator                   | テキスト                        | 変換されたドキュメントの変換元を作成したアプリケーション名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | title                     | テキスト                        | ドキュメント名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                      | author                    | テキスト                        | ドキュメントの作成者の名前。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | keywords                  | テキスト                        | ドキュメントに割り当てられたキーワード。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                      | subject                   | テキスト                        | ドキュメントの題名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| csvOptions           |                           | object                      | CSVのみ (任意) - csv 書き出しのオプション                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | range                     | object                      | 複数セルのレンジオブジェクト                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | rowDelimiter              | テキスト                        | 行の区切り文字。 デフォルト: <code>"\r\n"</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                      | columnDelimiter           | テキスト                        | カラムの区切り文字。 デフォルト: <code>","</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| sjsOptions           |                           | object                      | SJSのみ (任意) - sjs 書き出しのオプション                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | includeAutoMergedCells    | boolean                     | 自動的に結合されたセルを含めるかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                      | includeBindingSource      | boolean                     | バインドされたソースを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                      | includeCalcModelCache     | boolean                     | 計算の追加データを含めるか。 追加データによって、ファイルを開くのが速くなる場合があります。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                      | includeEmptyRegionCells   | boolean                     | 使用されるデータレンジの外側の空白セル (データがない、またはスタイルだけのセル) を含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                      | includeFormulas           | boolean                     | フォーミュラを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                      | includeStyles             | boolean                     | スタイルを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                      | includeUnusedNames        | boolean                     | 使用されていないカスタム名を含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                      | saveAsView                | boolean                     | 書き出される値にフォーマット文字列を適用するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| excelOptions         |                           | object                      | Excel のみ (任意) - Excel 書き出しのオプション                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                      | includeBindingSource      | boolean                     | 書き出す際にバインドされたソースを含めるかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                      | includeStyles             | boolean                     | スタイルを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                      | includeFormulas           | boolean                     | フォーミュラを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                      | saveAsView                | boolean                     | 書き出される値にフォーマット文字列を適用するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                      | rowHeadersAsFrozenColumns | boolean                     | 書き出す際に行ヘッダーを固定された列と扱うかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                      | columnHeadersAsFrozenRows | boolean                     | 書き出す際に列ヘッダーを固定された行として扱うかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                      | includeAutoMergedCells    | boolean                     | 自動的に結合されたセルを含めるかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                      | includeCalcModelCache     | boolean                     | 計算の追加データを含めるか。 追加データによって、ファイルを開くのが速くなる場合があります。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                      | includeUnusedNames        | boolean                     | 使用されていないカスタム名を含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                      | includeEmptyRegionCells   | boolean                     | 使用されるデータレンジの外側の空白セル (データがない、またはスタイルだけのセル) を含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                      | password                  | テキスト                        | ワークブックを開くためのパスワード。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `\<customProperty>` |                           | any                         | コールバックメソッドの $3 引数を通して利用可能な任意のプロパティ。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

**Excel 形式についての注意**:

- 4D View Pro ドキュメントを Microsoft Excel 形式のファイルに書き出す場合、一部の設定が失われる可能性があります。 たとえば、4Dメソッドとフォーミュラは Excel ではサポートされません。 [SpreadJS にある一覧](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport) にて、その他の設定を確認することができます。
- このフォーマットへの書き出しは非同期に実行されるため、書き出し後にコードを実行するには、*paramObj* 引数の `formula` プロパティを使用します。
- ".xlsx" フォーマットで書き出す際には*excelOptions* オブジェクトの使用が推奨されています。 このオブジェクトを旧式の第一レベルプロパティ(*password*、*includeBindingSource*...)と混在させないように注意して下さい。 混在させた場合には問題が起きる可能性があります。

**PDF 形式についての注意**:

- 4D View Pro ドキュメントを PDF 形式に書き出す場合、ドキュメントで使用されているフォントは自動的に PDF ファイルに埋め込まれます。 ただし、埋め込み可能なのは Unicode マップを持つ OpenType フォント (.OTF または .TTF ファイル) のみです。 フォントに対して有効なフォントファイルが見つからない場合、デフォルトのフォントが代用されます。
- このフォーマットへの書き出しは非同期に実行されるため、書き出し後にコードを実行するには、*paramObj* 引数の `formula` プロパティを使用します。

**CSV 形式についての注意**:

- 4D View Pro ドキュメントを CSV 形式に書き出す場合、テキストと値のみが保存されるため、一部の設定が失われる可能性があります。
- すべての値は二重引用符で括られた形で保存されます。 ユーザー定義区切りの値 (DSV) に関する詳細については、こちらの [Wikipedia の記事](https://en.wikipedia.org/wiki/Delimiter-separated_values) (英文) を参照ください。
- このフォーマットへの書き出しは非同期に実行されるため、書き出し後にコードを実行するには、*paramObj* 引数の `formula` プロパティを使用します。

**SpreadJS ファイル形式についての注意**:

- [SpreadJS ファイル](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) は zipファイルです。
- このフォーマットへの書き出しは非同期に実行されるため、書き出し後にコードを実行するには、*paramObj* 引数の `formula` プロパティを使用します。

書き出し操作が完了すると、`VP EXPORT DOCUMENT` は自動的に、*paramObj* オブジェクトの *formula* プロパティに設定されたメソッドをトリガーします (設定されていれば)。

#### コールバックメソッド (フォーミュラ) の渡し方

コマンドに任意の *paramObj* 引数を渡す場合、[`Formula`](../../API/FunctionClass.md#formula) コマンドを使って、書き出し完了時に実行される 4Dメソッドを呼び出すことができます。 コールバックメソッドは、以下の値をローカルパラメーターに受け取ります:

| 引数     |                               | 型       | 説明                                |
| ------ | ----------------------------- | ------- | --------------------------------- |
| param1 |                               | テキスト    | 4D View Pro エリアのオブジェクト名           |
| param2 |                               | テキスト    | 書き出された 4D View Pro オブジェクトのファイルパス  |
| param3 |                               | object  | コマンドの *paramObj* 引数への参照           |
| param4 |                               | object  | メソッドから返されるステータスメッセージを格納したオブジェクト   |
|        | .success      | boolean | 書き出しに成功した場合は true 、それ以外の場合は false |
|        | .errorCode    | integer | エラーコード。                           |
|        | .errorMessage | テキスト    | エラーメッセージ。                         |

#### 例題 1

"VPArea" エリアのコンテンツをディスク上の 4D View Pro ドキュメントに書き出します:

```4d
var $docPath: Text

$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
// MyExport.4VP がディスク上に保存されます
```

#### 例題 2

カレントシートを PDF に書き出します:

```4d
var $params:={}
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```

#### 例題 3

4D View Pro ドキュメントを ".xlsx" 形式に書き出して、書き出し完了後にそのドキュメントをMicrosoft Excel で開くメソッドを呼び出します:

```4d
 var $params:={}
 $params.formula:=Formula(AfterExport)
 $excelOptions:={includeStyles:false;includeFormulas:true}
 $params.excelOptions:=$excelOptions
 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile.xlsx";$params)
```

***AfterExport*** メソッド:

```4d
 #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )

 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```

#### 例題 4

カレントシートを、縦棒 (|) 区切りの `.txt` ファイルに書き出します:

![example-export-csv](../../assets/en/ViewPro/vp-export-document-csv.png)

```4d
var $params:={}
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|"
VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

このようになります:

![example-export-csv](../../assets/en/ViewPro/vp-export-document-csv-result.png)

#### 参照

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP IMPORT DOCUMENT](vp-import-document.md)<br/>
[VP Print](vp-print.md)<br/>
[4D View Pro: Excel import/export update (blog post)](https://blog.4d.com/4d-view-pro-excel-import-export-update)
