---
id: vp-import-document
title: VP IMPORT DOCUMENT
---

<details><summary>履歴</summary>

| リリース  | 内容                              |
| ----- | ------------------------------- |
| 20 R2 | .sjsドキュメントをサポート |

</details>

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->

**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| 引数         | 型      |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |                  |
| filePath   | テキスト   | -> | ドキュメントのパス名              |                  |
| paramObj   | オブジェクト | -> | 読み込みのオプション              | <!-- END REF --> |

#### 説明

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

| 引数         |                     | 型                           | 説明                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    |                     | 4D.Function | 読み込み終了時に実行させるコールバックメソッド。 [`Formula`](../../API/FunctionClass.md#formula) コマンドの戻り値フォーミュラを使用する必要があります。 [コールバックメソッド (フォーミュラ) の渡し方](vp-export-document.md#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。                                                                                                              |
| password   |                     | テキスト                        | Microsoft Excel のみ (任意) - MS Excel ドキュメントの保護に使用されているパスワード。                                                                                                                                                                                                                                          |
| csvOptions |                     | object                      | CSV読み込みのオプション                                                                                                                                                                                                                                                                                                          |
|            | range               | object                      | 書き出されるデータの、最初のセルを格納しているセルレンジ。 指定されたレンジがセルレンジではない場合、レンジの最初のセルが使用されます。                                                                                                                                                                                                                                                   |
|            | rowDelimiter        | テキスト                        | 行の区切り文字。 渡されなかった場合、区切り文字は 4D によって自動的に定義されます。                                                                                                                                                                                                                                                                           |
|            | columnDelimiter     | テキスト                        | カラムの区切り文字。 デフォルト: ","                                                                                                                                                                                                                                                                                  |
| sjsOptions |                     | object                      | sjs 読み込みのオプション                                                                                                                                                                                                                                                                                                         |
|            | calcOnDemand        | boolean                     | 要求されたときにだけフォーミュラを計算するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                |
|            | dynamicReferences   | boolean                     | 動的参照を含む関数を計算するかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                        |
|            | fullRecalc          | boolean                     | jsonデータを読み込んだ後に計算するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                  |
|            | includeFormulas     | boolean                     | 読み込み時にフォーミュラを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                      |
|            | includeStyles       | boolean                     | 読み込み時にスタイルを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                        |
|            | includeUnusedStyles | boolean                     | excel xml を json に変換する際、使用されていないカスタム名を含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                             |
|            | openMode            | integer                     | <li>0 (normal): 通常のオープンモード、レイジーなし、インクリメンタルなし。 ファイルを開くと、特定の時点で UI と UIイベントが更新され、応答します。</li><li>1 (lazy): レイジー (遅延) オープンモード。 ファイルを開くと、アクティブなシートだけが直接読み込まれます。 ファイルを開くと、アクティブなシートだけが直接読み込まれます。 他のシートは使用された場合にのみ読み込まれます。</li><li>2 (incremental): インクリメンタル (増分) オープンモード。 ファイルを開くと、データ読み込み中に UI と UIイベントが更新され、即座に応答します。</li> |

:::note 注記

- .xslx、.csv、.sjs 形式のファイルの読み込みは、**非同期** でおこなわれます。 これらの形式で、ドキュメント処理の最後にアクションを実行したい場合には、`formula` プロパティを使用する必要があります。
- Microsoft Excel 形式のファイルを 4D View Pro ドキュメントに読み込む場合、一部の設定が失われる可能性があります。 [SpreadJS にある一覧](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport) にて、設定を確認することができます。
- CSV形式およびユーザー定義区切りの値 (DSV) に関する詳細については、こちらの [Wikipedia の記事](https://en.wikipedia.org/wiki/Delimiter-separated_values) (英文) を参照ください。

:::

#### 例題 1

フォームが開かれたときに、ディスク上に保存されているデフォルトの 4D View Pro ドキュメントを読み込みます:

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) // 4D View Pro エリアの読み込みが完了しています
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### 例題 2

パスワードで保護されている Microsoft Excel ドキュメントを 4D View Pro エリアに読み込みます:

```4d
	// 読み込みコード
var $o : Object
$o:=New object
$o.password:="excel123"
$o.formula:=Formula(myImport)
 
VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
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

#### 例題 3

カンマ (",") を区切り文字として使用している `.txt` ファイルを読み込みます:

![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

このようになります:
![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv-result.png)

#### 参照

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP NEW DOCUMENT](vp-new-document.md)
