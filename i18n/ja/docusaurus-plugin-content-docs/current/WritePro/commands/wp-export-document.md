---
id: wp-export-document
title: WP EXPORT DOCUMENT
displayed_sidebar: docs
---

<!--REF #_command_.WP EXPORT DOCUMENT.Syntax-->**WP EXPORT DOCUMENT** ( *wpDoc* : Object ; *filePath* : Text {; *format* : Integer {; *option* : Object, Integer}} )<br/>**WP EXPORT DOCUMENT** ( *wpDoc* : Object ; *fileObj* : 4D.File {; *format* : Integer {; *option* : Object, Integer}} )<!-- END REF-->

<!--REF #_command_.WP EXPORT DOCUMENT.Params-->

<div class="no-index">

| 引数       | 型                                                 |                             | 説明                                                                                                  |
| -------- | ------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------- |
| wpDoc    | Object                                            | &#8594; | 4D Write Pro 変数                                                                                     |
| filePath | Text                                              | &#8594; | 書き出されるファイルのパス                                                                                       |
| fileObj  | [4D.File](../../API/FileClass.md) | &#8594; | 書き出すファイルオブジェクト                                                                                      |
| format   | Integer                                           | &#8594; | ドキュメント出力フォーマット(例: .docx、.pdf、など) |
| option   | Object, Integer                                   | &#8594; | 書き出しオプション、選択したフォーマットによって異なる                                                                         |

</div>
<!-- END REF-->

## 説明

**WP EXPORT DOCUMENT** コマンドは<!--REF #_command_.WP EXPORT DOCUMENT.Summary--> *wpDoc* 引数で指定した4D Write Pro オブジェクトを*filePath* あるいは *fileObj* 引数および他のオプションの引数に基づいて、ディスク上のドキュメントへと書き出します。<!-- END REF-->

*wpDoc* 引数には、書き出したい4D Write Pro オブジェクトを渡します。

*filePath* あるいは *fileObj* のいずれかを渡すことができます:

- *filePath* には、書き出されるドキュメントの保存先パスと名前とを渡します。 ドキュメント名のみを渡した場合、ドキュメントは4D ストラクチャーファイルと同じ階層に保存されます。

- *fileObj* 引数には、書き出されるファイルを表す4D.File オブジェクトを渡します。

*format* 引数は省略可能ですが、省略した場合には*filePath* 引数で拡張子を指定する必要があります。 *format* 引数は省略可能ですが、省略した場合には*filePath* 引数で拡張子を指定する必要があります。 *format* 引数には、*4D Write Pro 定数* テーマの定数を渡すこともできます。 この場合、4D は必要に応じて適切な拡張子をファイル名に追加します。 以下のフォーマットがサポートされています: この場合、4D は必要に応じて適切な拡張子をファイル名に追加します。 以下のフォーマットがサポートされています:

| 定数                   | 値 | 説明 |
| -------------------- | - | --- |
| wk 4wp               | 4 | 4D Write Pro ドキュメントはネイティブなアーカイブフォーマットで保存されます。 |
| wk docx              | 7 | 4D Write Pro ドキュメントは Microsoft Word フォーマットで保存されます。 |
| wk mime html         | 1 | 標準 MIME HTML として保存され、画像は MIME パーツとして埋め込まれます。 |
| wk pdf               | 5 | ページビューモードに基づいて PDF フォーマットで保存されます。 |
| wk svg               | 8 | ページビューモードに基づいて SVG フォーマットで保存されます（1ページ単位）。 |
| wk web page complete | 2 | 標準 HTML として保存され、リソースは別保存されます。 |

**注:**

- "4D 特有のタグ"とは、4Dネームスペースと4D CSSスタイルを含めた4D XHTMLのことです。
- 4D Write Pro ドキュメントフォーマットに関するより詳細な情報に関しては、[.4wp ドキュメントフォーマット](https://doc.4d.com/4Dv20/4D/20/Using-a-4D-Write-Pro-area.200-6229460.en.html#2895813)を参照してください。
- .docx フォーマットを使用する際の、既知の差異および非互換性の一覧を見るためには、[.docxフォーマットの読み込み/書き出し](../user-legacy/importing-and-exporting-in-docx-format.md) を参照してください。
- SVG フォーマットでのエクスポートの詳細については、[SVGフォーマットへの書き出し](https://doc.4d.com/4Dv20/4D/20/Exporting-to-SVG-format.200-6229468.ja.html) を参照してください。

### option 引数

*option* 引数には、書き出されるドキュメントのプロパティを定義する値を格納したオブジェクトを渡します。 次のプロパティを利用することができます:

| 定数 | 値 | 説明 |
| --- | --- | --- |
| wk CID host domain name | cidHostDomain | CID URL に追加されるホストドメイン（wk mime html 専用）。 |
| wk embedded pictures | embeddedPictures | SVG 書き出し時に画像を埋め込むかを指定。 |
| wk factur x | facturX | PDF 書き出し時の Factur-X 設定オブジェクト。 |
| wk files | files | PDF に埋め込む添付ファイルのコレクション。 |
| wk google fonts tag | googleFontsTag | SVG 内の Google フォント読み込みルール。 |
| wk HTML pretty print | htmlPrettyPrint | HTML コード整形。 |
| wk max picture DPI | maxPictureDPI | 画像のリサンプリング DPI。 |
| wk optimized for | optimizedFor | 書き出しの最適化用途（print/screen）。 |
| wk page index | pageIndex | SVG 書き出しページ（1始まり）。 |
| wk pdfa version | pdfaVersion | PDF/A バージョン指定。 |
| wk recompute formulas | recomputeFormulas | 書き出し時の再計算有無。 |
| wk visible background and anchored elements | visibleBackground | 背景・アンカー要素の表示/書き出し。 |
| wk visible empty images | visibleEmptyImages | 空画像プレースホルダーの表示/書き出し。 |
| wk visible footers | visibleFooters | フッター表示/書き出し。 |
| wk visible headers | visibleHeaders | ヘッダー表示/書き出し。 |
| wk visible references | visibleReferences | 4D 式参照の表示/書き出し。 |
| wk whitespace | whitespace | HTML 系フォーマットの white-space CSS 値。 |

以下の表は*format* 引数の各フォーマットごとに利用可能な*option* 引数のオプションをあらわしています:

|                                             | **wk 4wp**                                                                                                  | **wk docx**                                                                                                | **wk mime html**                                                                                                 | **wk pdf**                                                                                                  | **wk web page complete**                                                                                         | **wk svg**                                                                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| wk CID host domain name                     | \-                                                                                                         | \-                                                                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                        | \-                                                                                                         | \-                                                                                                              | \-                                                                                                            |
| wk embedded pictures                        | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | \-                                                                                                         | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk factur x                                 | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                   | \-                                                                                                              | \-                                                                                                            |
| wk files                                    | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                   | \-                                                                                                              | \-                                                                                                            |
| wk google fonts tag                         | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | \-                                                                                                         | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk HTML pretty print                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false) | \-                                                                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk max picture DPI                          | \-                                                                                                         | 常に300                                                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 300)   | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 300)      |
| wk optimized for                            | \-                                                                                                         | always wk print                                                                                            | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: wk screen)  | always wk print                                                                                             | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: wk print) |
| wk page index                               | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | \-                                                                                                         | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 1)        |
| wk pdfa version                             | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                   | \-                                                                                                              | \-                                                                                                            |
| wk recompute formulas                       | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible background and anchored elements | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | 常にtrue                                                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible empty images                     | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible footers                          | \-                                                                                                         | 常にtrue                                                                                                     | 常にfalse                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible headers                          | \-                                                                                                         | 常にtrue                                                                                                     | 常にfalse                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible references                       | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false) | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk whitespace                               | \-                                                                                                         | \-                                                                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: "pre-wrap") | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: "pre-wrap") | \-                                                                                                            |

**互換性に関する注意:** *option* 引数に*倍長整数* 型の値を渡すことは互換性の理由からサポートされていますが、オブジェクト型の引数を渡すことが推奨されています。

### wk files コレクション

wk files プロパティを使用すると、[PDF に添付つきで書き出すことができます](https://blog.4d.com/4d-write-pro-export-to-pdf-with-enclosures)。 このプロパティには、最終ドキュメントに埋め込まれるファイルを記述するオブジェクトのコレクションを格納する必要があります。 コレクション内のそれぞれのオブジェクトは以下のプロパティを格納することができます: このプロパティには、最終ドキュメントに埋め込まれるファイルを記述するオブジェクトのコレクションを格納する必要があります。 コレクション内のそれぞれのオブジェクトは以下のプロパティを格納することができます:

| **プロパティ** | **型** | **Description** |
| --- | --- | --- |
| name | Text | ファイル名。*data* 使用時は原則必須（Factur-X 先頭ファイルを除く）。 |
| description | Text | 任意。省略時は用途に応じた既定値。 |
| mimeType | Text | 任意。省略時は拡張子から推測、不可なら application/octet-stream。 |
| data | Text または Blob | *file* がない場合は必須。 |
| file | 4D.File オブジェクト | *data* がない場合は必須。 |
| relationship | Text | 任意。既定値は Data。Factur-X ではプロファイルごとの制約あり。 |

*option* 引数にも wk factur x プロパティが含まれている場合、 wk files コレクションの最初の要素はFactur-X (ZUGFeRD) invoice xml ファイルである必要があります(以下参照)。

:::note

PDF 添付はPDF/A-3 バージョンでのみサポートされています。 wk files プロパティを渡す場合、"PDF/A-3" バージョンが自動的に使用されます。 wk files プロパティを渡す場合、"PDF/A-3" バージョンが自動的に使用されます。

:::

### wk factur x オブジェクト

wk factur x プロパティは、2つまでのプロパティを格納することのできるオブジェクトです:

| **プロパティ** | **型** | **Description**                                                                                                                                                                                                                                                                                                                        |
| --------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| profile   | Text  | 任意。 省略時、 *profile* は提供されたXML ファイルまたはテキスト(標準のプロフィールを使用している必要があります)から決定されます。 渡された場合には、標準のプロファイル名以外の名前でも構いません(他のプロファイル、例えばRECHNUNG などを使用することも可能)。 **注意**: 標準のプロファイル名は以下のとおりです: MINIMUM、BASIC WL、BASIC、EN 16931 (別名 COMFORT でありこれはエイリアス)、EXTENDED |
| version   | Text  | 任意。 任意。 デフォルト値は"1.0"                                                                                                                                                                                                                                                                                                   |

### Factur-X / ZUGFeRD PDF ドキュメントについて

*Factur-X / ZUGFeRD* はハイブリッドな電子請求書のための欧州の規格です(PDFはユーザー用、XML データは処理の自動化用)。 詳細な情報については [こちらのblog記事](https://blog.4d.com/4d-write-pro-electronic-invoice-generation) を参照してください。 詳細な情報については [こちらのblog記事](https://blog.4d.com/4d-write-pro-electronic-invoice-generation) を参照してください。 詳細な情報については [こちらのblog記事](https://blog.4d.com/4d-write-pro-electronic-invoice-generation) を参照してください。 詳細な情報については [こちらのblog記事](https://blog.4d.com/4d-write-pro-electronic-invoice-generation) を参照してください。

"Factur-X" PDF 書き出しをトリガーするためには、option 引数に wk factur x および wk files プロパティの両方を渡してください(以下の例題5参照)。 この場合: この場合: この場合において: この場合において:

- Factur-X (ZUGFeRD) PDF が生成されます。
- wk files コレクションの最初の要素がFactur-X xml ファイルとして使用されます。
- wk files プロパティがない場合またはコレクションが空である場合、または最初の要素がxml ファイルでない亜場合、エラーが生成されます。

:::note

Factur-X / ZUGFeRD 書き出し実装についての詳細な例題については、[こちらのHDI 4D project](https://github.com/4d-depot/HDI%5F4DWP%5FGenerateFacturX) をダウンロードしてください。

:::

## 例題 1

*myArea* 4D Write Pro オブジェクトのコンテンツをHTML 形式とPDF フォーマットの両方に書き出したい場合を考えます:

```4d
  // HTML 形式に書き出し
 var $option : Object
 $option:=New object

 $option[wk recompute formulas]:=False
 $option[wk HTML pretty print]:=False
 $option[wk optimized for]:=wk print
 $option[wk max picture DPI]:=600 //印刷用のデフォルト値(300 DPI)を上書き

 WP EXPORT DOCUMENT(myArea;$path;wk web page complete;$option)

  // PDF フォーマットで書き出し
 var $option : Object
 $option:=New object

 $option[wk visible headers]:=True
 $option[wk visible footers]:=True
 $option[wk visible background]:=True
 $option[wk max picture DPI]:=96 //スクリーン用のデフォルト値(192 DPI) を上書きしてドキュメントのサイズを制限
 $option[wk optimized for]:=wk screen
 $option[wk recompute formulas]:=True

 WP EXPORT DOCUMENT(myArea;$path;wk pdf;$option)
```

## 例題 2

*myArea* 4D Write Proオブジェクト内のコンテンツを、.4wpフォーマットで書き出したい場合を考えます:

```4d
 var $path : Text

 Case of
    :(Form event code=On Clicked)

       $path:=Get 4D folder(Database folder)+"Export"+Folder separator
       $path:=Select document($path;".4wp";" title";File name entry)

       If($path#"")
          WP EXPORT DOCUMENT(myArea;document;wk 4wp)
       End if
 End case
```

## 例題 3

ドキュメントの2ページ目をSVG として書き出し、ドキュメントからピクチャーを書き出したい場合を考えます:

```4d
 var $options : Object

 $options:=New object
 $options[wk embedded pictures]:=False
 $options[wk page index]:=2

 WP EXPORT DOCUMENT(WPArea;"my exported document";wk svg;$options)
```

## 例題 4

PDF/A-2 準拠のPDF ドキュメントを書き出したい場合を考えます:

```4d
 var $options: Object:={}
 $options[wk visible empty images] :=False
 $options[wk pdfa version]:=wk pdfa2 // "PDF/A-2" に準拠
 WP EXPORT DOCUMENT(wpDoc;"invoice.pdf";wk pdf;$options)
```

## 例題 5

Factur-X PDF 書き出しをしたい場合を考えます:

```4d
  //BASIC (標準のプロファイル)
 var $options;$fileInfo : Object
 $options:={}
 $options[wk factur x]:={}
 $options[wk factur x].profile:="BASIC"
 $options[wk factur x].version:="1.0"

 $fileInfo:={}
 $fileInfo.file:=$file  // この$file は.xml ファイルをターゲットにした4D.File
 $options[wk files]:=[$fileInfo]

 WP EXPORT DOCUMENT(wpDoc;"facturX_basic.pdf";wk pdf;$options)

  //RECHNUNG プロファイル(カスタムのプロファイル)
 $options:={}
 $options[wk factur x]:={}
 $options[wk factur x].profile:="RECHNUNG"
 $options[wk factur x].version:="2.1" //RECHNUNG の最後のバージョン

 $fileInfo:={}
 $fileInfo.file:=$file  // この$file は.xml ファイルをターゲットにした4D.File
 $fileInfo.name:="rechnung.xml" // RECHNUNG のPDFの場合に必須なファイル名
 $fileInfo.relationship:="Alternative" //ドイツ用に必須
 $fileInfo.description:="ZUGFeRD Rechnung"
 $options[wk files]:=[$fileInfo]

 WP EXPORT DOCUMENT(wpDoc;"facturX_rechnung.pdf";wk pdf;$options)
```

## 例題 6

File オブジェクトを使用してdocx ドキュメントを書き出す場合を考えます:

```4d
var $file : 4D.File

$file:=File("/DATA/test-export")

$options:=New object(wk visible background and anchored elements; False)

WP EXPORT DOCUMENT(WParea; $file; wk docx; $options)

```

## 参照

[4D QPDF (Component) - PDF Get attachments](https://github.com/4d/4D-QPDF)</br>
[HTML および MIME HTML フォーマットで書き出す](../user-legacy/exporting-to-html-and-mime-html-formats.md)<br/>
[.docx フォーマットでの読み込みと書き出し](../user-legacy/importing-and-exporting-in-docx-format.md)<br/>
[Blog 記事 - 4D Write Pro: Electronic invoice generation](https://blog.4d.com/4d-write-pro-electronic-invoice-generation)</br>
[Blog 記事 - 4D Write Pro: Export to PDF with enclosures](https://blog.4d.com/4d-write-pro-export-to-pdf-with-enclosures)</br>
[WP EXPORT VARIABLE](wp-export-variable.md)</br>
