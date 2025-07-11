---
id: vp-import-document
title: VP IMPORT DOCUMENT
---

<details><summary>履歴</summary>

| リリース  | 内容                                                            |
| ----- | ------------------------------------------------------------- |
| 20 R9 | Trigger of callback function after custom functions completed |
| 20 R2 | .sjsドキュメントをサポート                               |

</details>

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->

**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| 引数         | 型      |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | Text   | -> | 4D View Pro フォームオブジェクト名 |                  |
| filePath   | Text   | -> | ドキュメントのパス名              |                  |
| paramObj   | Object | -> | 読み込みのオプション              | <!-- END REF --> |

## 説明

`VP IMPORT DOCUMENT` コマンドは、<!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに、*filePath* 引数のドキュメントを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは読み込んだドキュメントによって置換されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*filePath* には読み込むドキュメントのパスとファイル名を渡します。 以下のフォーマットがサポートされています :

- 4D View Pro ドキュメント (拡張子 ".4vp")
- Microsoft Excel 形式 (拡張子 ".xlsx")
- テキスト形式のドキュメント (拡張子 ".txt", ".csv", ドキュメントは UTF-8 形式である必要あり)
- [SpreadJS ドキュメント](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (拡張子 ".sjs")

ドキュメントの拡張子が認識される拡張子 (`.4vp` や `.xlsx` など) ではなかった場合、ドキュメントはテキスト形式であると見なされます。 ドキュメントが Project フォルダーと同階層に置かれている場合を除き、フルパスを渡す必要があります (同階層に置かれている場合にはファイル名のみを渡すことができます)。

`filePath` 引数が無効だった場合や、対象ファイルが存在しなかったり、壊れたりしている場合には、エラーが返されます。

任意の *paramObj* 引数を渡すことで、読み込まれるドキュメントのプロパティを定義することができます:

| 引数           |                           | 型                           | 説明                                                                                                                                                                                                                                                                                                                                                                       |
| ------------ | ------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula      |                           | 4D.Function | 読み込み終了時に実行させるコールバックメソッド。 [`Formula`](../../commands/formula.md) コマンドの戻り値フォーミュラを使用する必要があります。 [コールバックメソッド (フォーミュラ) の渡し方](vp-export-document.md#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。                                                                                                                                                                         |
| password     |                           | text                        | Microsoft Excel のみ (任意) - MS Excel ドキュメントの保護に使用されているパスワード。                                                                                                                                                                                                                                                                                            |
| csvOptions   |                           | object                      | CSV読み込みのオプション                                                                                                                                                                                                                                                                                                                                                            |
|              | range                     | object                      | 書き出されるデータの、最初のセルを格納しているセルレンジ。 指定されたレンジがセルレンジではない場合、レンジの最初のセルが使用されます。                                                                                                                                                                                                                                                                                                     |
|              | rowDelimiter              | text                        | 行の区切り文字。 渡されなかった場合、区切り文字は 4D によって自動的に定義されます。                                                                                                                                                                                                                                                                                                                             |
|              | columnDelimiter           | text                        | カラムの区切り文字。 デフォルト: ","                                                                                                                                                                                                                                                                                                                                    |
| sjsOptions   |                           | object                      | sjs 読み込みのオプション                                                                                                                                                                                                                                                                                                                                                           |
|              | calcOnDemand              | boolean                     | 要求されたときにだけフォーミュラを計算するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                  |
|              | dynamicReferences         | boolean                     | 動的参照を含む関数を計算するかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                          |
|              | fullRecalc                | boolean                     | jsonデータを読み込んだ後に計算するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                    |
|              | includeFormulas           | boolean                     | 読み込み時にフォーミュラを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                        |
|              | includeStyles             | boolean                     | 読み込み時にスタイルを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                          |
|              | includeUnusedStyles       | boolean                     | excel xml を json に変換する際、使用されていないカスタム名を含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                               |
|              | openMode                  | integer                     | <li>0 (normal): 通常のオープンモード、レイジーなし、インクリメンタルなし。 When opening file, UI and UI event could be refreshed and responsive at specific time points.</li><li>1 (lazy): lazy open mode. ファイルを開くと、アクティブなシートだけが直接読み込まれます。 Other sheets will be loaded only when they are be used.</li><li>2 (incremental): incremental open mode. ファイルを開くと、データ読み込み中に UI と UIイベントが更新され、即座に応答します。</li> |
| excelOptions |                           | object                      | Excel のみ (任意) - Excel 書き出しのオプション                                                                                                                                                                                                                                                                                                                      |
|              | includeStyles             | boolean                     | Whether to include the style when importing, default true.                                                                                                                                                                                                                                                                                               |
|              | includeFormulas           | boolean                     | Whether to include the formula when importing, default true.                                                                                                                                                                                                                                                                                             |
|              | frozenColumnsAsRowHeaders | boolean                     | Whether to treat the frozen columns as row headers when importing, default false.                                                                                                                                                                                                                                                                        |
|              | frozenRowsAsColumnHeaders | boolean                     | Whether to treat the frozen rows as column headers when importing, default false.                                                                                                                                                                                                                                                                        |
|              | fullRecalc                | boolean                     | jsonデータを読み込んだ後に計算するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                    |
|              | dynamicReferences         | boolean                     | Whether to calculate functions with dynamic reference, default true.                                                                                                                                                                                                                                                                                     |
|              | calcOnDemand              | boolean                     | Whether to calculate formulas only when they are demanded, default false.                                                                                                                                                                                                                                                                                |
|              | includeUnusedStyles       | boolean                     | Whether to include the unused name style when converting excel xml to the json, default true.                                                                                                                                                                                                                                                            |
|              | password                  | text                        | The password to open the workbook.                                                                                                                                                                                                                                                                                                                       |
|              | openMode                  | text                        | The open mode of normal, lazy and incremental. By default is normal.                                                                                                                                                                                                                                                                     |

:::note 注記

- .xslx、.csv、.sjs 形式のファイルの読み込みは、**非同期** でおこなわれます。 これらの形式で、ドキュメント処理の最後にアクションを実行したい場合には、`formula` プロパティを使用する必要があります。
- Microsoft Excel 形式のファイルを 4D View Pro ドキュメントに読み込む場合、一部の設定が失われる可能性があります。 [SpreadJS にある一覧](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport) にて、設定を確認することができます。
- CSV形式およびユーザー定義区切りの値 (DSV) に関する詳細については、こちらの [Wikipedia の記事](https://en.wikipedia.org/wiki/Delimiter-separated_values) (英文) を参照ください。
- Using *excelOptions* object is recommended when importing ".xlsx" format. Make sure to not mix this object with legacy first level property *password* to avoid potiental issues.
- The callback function specified in the `formula` attribute is triggered after all [4D custom functions](../formulas.md#4d-functions) within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved.

:::

## 例題 1

フォームが開かれたときに、ディスク上に保存されているデフォルトの 4D View Pro ドキュメントを読み込みます:

```4d
var $docPath : text
If(Form event code=On VP Ready) //4D View Pro area loaded and ready
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

## 例題 2

パスワードで保護されている Microsoft Excel ドキュメントを 4D View Pro エリアに読み込みます:

```4d
	//Import code
var $o:={}
$o.formula:=Formula(myImport)
$excelOptions:={includeStyles:false;includeFormulas:true;password:"excel123"}
$o.excelOptions:=$excelOptions
 
VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfile.xlsx";$o)
```

```4d
	// myImport コールバックメソッド
#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)

If ($status.success)
     ALERT("読み込みに成功しました。")
Else 
     ALERT("エラー: "+$status.errorMessage)
End if
```

## 例題 3

カンマ (",") を区切り文字として使用している `.txt` ファイルを読み込みます:

![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv.png)

```4d
var $params:={}
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

このようになります:
![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv-result.png)

## 参照

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP NEW DOCUMENT](vp-new-document.md)<br/>
[4D View Pro: Excel import/export update (blog post)](https://blog.4d.com/4d-view-pro-excel-import-export-update)

