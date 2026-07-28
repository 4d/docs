---
id: wp-export-variable
title: WP EXPORT VARIABLE
slug: /WritePro/commands/wp-export-variable
displayed_sidebar: docs
---

<!--REF #_command_.WP EXPORT VARIABLE.Syntax-->**WP EXPORT VARIABLE** ( *wpDoc* : Object ; *destination* : Text, Blob ; *format* : Integer {; *option* : Object, Integer} )<!-- END REF-->

<!--REF #_command_.WP EXPORT VARIABLE.Params-->

<div class="no-index">

| 引数          | 型               |                             | 説明                |
| ----------- | --------------- | --------------------------- | ----------------- |
| wpDoc       | Object          | &#8594; | 4D Write Pro 変数   |
| destination | Text, Blob      | &#8594; | 書き出したコンテンツを受け取る引数 |
| format      | Integer         | &#8594; | 変数出力フォーマット        |
| option      | Object, Integer | &#8594; | 書き出しのオプション        |

</div>
<!-- END REF-->

## 説明

<!--REF #_command_.WP EXPORT VARIABLE.Summary-->The **WP EXPORT VARIABLE** command exports the *wpDoc* 4D Write Pro object to the 4D *destination* variable in the specified *format*.<!-- END REF-->

*wpDoc* 引数には、書き出したい4D Write Pro オブジェクトを渡します。

*destination* 引数には、書き出した4D Write Pro オブジェクトを受け取る変数を渡します。 この変数の型は、*format* 引数で指定した書き出しフォーマットによって異なります: この変数の型は、*format* 引数で指定した書き出しフォーマットによって異なります:

- ネイティブの.4wp フォーマットまたは.docx フォーマットを渡した場合、変数はBlob 型になります。
- HTML またはSVG フォーマットを渡した場合、変数はテキスト型になります。

*format* 引数には、使用したい書き出しフォーマットを設定する、*4D Write Pro 定数* テーマの定数を一つ渡します。 それぞれのフォーマットは特定の用法に関連します。 以下のフォーマットがサポートされています: それぞれのフォーマットは特定の用法に関連します。 以下のフォーマットがサポートされています:

| 定数                  | 型       | 値 | 説明 |
| ------------------- | ------- | - | --- |
| wk 4wp              | Integer | 4 | 4D Write Pro のネイティブアーカイブフォーマット。 |
| wk docx             | Integer | 7 | Microsoft Word 形式（.docx）。 |
| wk mime html        | Integer | 1 | 標準 MIME HTML。 |
| wk pdf              | Integer | 5 | PDF フォーマット。 |
| wk svg              | Integer | 8 | SVG フォーマット（1ページ単位）。 |
| wk web page html 4D | Integer | 3 | 4D 特有タグ付き HTML（ロスレス用途）。 |

**注:**

- "4D 特有のタグ"とは、4Dネームスペースと4D CSSスタイルを含めた4D XHTMLのことです。
- 4D Write Pro ドキュメントフォーマットに関するより詳細な情報に関しては、[.4wp ドキュメントフォーマット](https://doc.4d.com/4Dv20/4D/20/Using-a-4D-Write-Pro-area.200-6229460.en.html#2895813)を参照してください。
- .docx フォーマットを使用する際の、既知の差異および非互換性の一覧を見るためには、[.docxフォーマットの読み込み/書き出し](../user-legacy/importing-and-exporting-in-docx-format.md) を参照してください。
- コマンドを使用してSVG フォーマットへと書き出す場合、画像はbase64 フォーマットでエンコーディングされます。
- SVG フォーマットへの書き出しの詳細な情報については、 [SVGフォーマットへの書き出し](https://doc.4d.com/4Dv20/4D/20/Exporting-to-SVG-format.200-6229468.ja.html)を参照してください。

### option 引数

*option* 引数には、書き出されるドキュメントのプロパティを定義する値を格納したオブジェクトを渡します。 次のプロパティを利用することができます:

| 定数 | 値 | 説明 |
| --- | --- | --- |
| wk CID host domain name | cidHostDomain | CID URL に追加されるホストドメイン。 |
| wk embedded pictures | embeddedPictures | SVG 書き出し時の画像埋め込み指定。 |
| wk factur x | facturX | Factur-X PDF 設定。 |
| wk files | files | PDF 添付ファイルコレクション。 |
| wk google fonts tag | googleFontsTag | SVG の Google フォント読み込み。 |
| wk HTML pretty print | htmlPrettyPrint | HTML 整形。 |
| wk max picture DPI | maxPictureDPI | 画像 DPI 最適化。 |
| wk optimized for | optimizedFor | print/screen 最適化。 |
| wk page index | pageIndex | SVG ページインデックス。 |
| wk pdfa version | pdfaVersion | PDF/A バージョン。 |
| wk recompute formulas | recomputeFormulas | フォーミュラ再計算。 |
| wk visible background and anchored elements | visibleBackground | 背景・アンカー要素の可視性。 |
| wk visible empty images | visibleEmptyImages | 空画像プレースホルダー可視性。 |
| wk visible footers | visibleFooters | フッター可視性。 |
| wk visible headers | visibleHeaders | ヘッダー可視性。 |
| wk visible references | visibleReferences | 式参照可視性。 |
| wk whitespace | whitespace | wk mime html の white-space CSS 値。 |

以下の表は*format* 引数の各フォーマットごとに利用可能な*option* 引数のオプションをあらわしています:

|                                             | **wk 4wp**                                                                                                  | **wk docx**                                                                                                | **wk mime html**                                                                                                 | **wk pdf**                                                                                                  | **wk web page html 4d**                                                                                     | **wk svg**                                                                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| wk CID host domain name                     | \-                                                                                                         | \-                                                                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                        | \-                                                                                                         | \-                                                                                                         | \-                                                                                                            |
| wk embedded pictures                        | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | \-                                                                                                         | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk factur x                                 | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                   | \-                                                                                                         | \-                                                                                                            |
| wk files                                    | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                   | \-                                                                                                         | \-                                                                                                            |
| wk google fonts tag                         | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | \-                                                                                                         | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk HTML pretty print                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false) | \-                                                                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk max picture DPI                          | \-                                                                                                         | 常に300                                                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 300)   | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 300)      |
| wk optimized for                            | \-                                                                                                         | always wk print                                                                                            | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: wk screen)  | always wk print                                                                                             | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: wk print) |
| wk page index                               | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | \-                                                                                                         | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 1)        |
| wk pdfa version                             | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                   | \-                                                                                                         | \-                                                                                                            |
| wk recompute formulas                       | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible background and anchored elements | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | 常にtrue                                                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible empty images                     | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible footers                          | \-                                                                                                         | 常にtrue                                                                                                     | 常にfalse                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible headers                          | \-                                                                                                         | 常にtrue                                                                                                     | 常にfalse                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible references                       | \-                                                                                                         | \-                                                                                                        | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false) | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk whitespace                               | \-                                                                                                         | \-                                                                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: "pre-wrap") | \-                                                                                                         | \-                                                                                                         | \-                                                                                                            |

**互換性に関する注意:** *option* 引数に*倍長整数* 型の値を渡すことは互換性の理由からサポートされていますが、オブジェクト型の引数を渡すことが推奨されています。

## 例題 1

*myArea* 4D Write Pro オブジェクトの中身をMIME フォーマットで書き出し、"gmail.com" をホストドメインとして追加したい場合を考えます:

```4d
 var $option;$export : Object
 
 $option[wk CID host domain name]:="gmail.com"
 
 WP EXPORT VARIABLE(myArea;$export;wk mime html;$option)
```

## 例題 2

スタイル付きテキスト、4D 参照および画像を格納したEメールを送信したい場合を考えます。 スタイル付きテキスト、4D 参照および画像を格納したEメールを送信したい場合を考えます。 この場合、MIME フォーマットで書き出された4D Write Pro エリアを使用し、SMTP を使用して送信することができます:

```4d
  // transporter オブジェクトを作成
 $server:=New object
 $server.host:="smtp.gmail.com"
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 
 $transporter:=SMTP New transporter($server)
 
 WP EXPORT VARIABLE(WParea;$mime;wk mime html)
 
 $mailTmp:=MAIL Convert from MIME($mime)
 
  // ピクチャーを追加(あれば)
 If($mailTmp.attachments#Null)
    $email.attachments:=$mailTmp.attachments
 End if
 
 $email.bodyStructure:=$mailTmp.bodyStructure
 $email.bodyValues:=$mailTmp.bodyValues
 
 $status:=$transporter.send($email)
 If(Not($status.success))
    ALERT("An error occurred: "+$status.statusText)
 End if
```

## 例題 3

4D Write Pro の最初のページをテキスト変数内のSVG として書き出して、ヘッダーを非表示にしたい場合を考えます:

```4d
 var $options : Object
 var $destination : Text
 
 $options:=New object
 $options[wk optimized for]:=wk screen
 $options[wk visible headers]:=False
 WP EXPORT VARIABLE(WPArea;$destination;wk svg;$options)
```

## 参照

[4D QPDF (コンポーネント) - PDF Get attachments](https://github.com/4d/4D-QPDF)  
[Blog 記事 - 4D Write Pro: Electronic invoice generation](https://blog.4d.com/4d-write-pro-electronic-invoice-generation)  
[Blog 記事 - 4D Write Pro: Export to PDF with enclosures](https://blog.4d.com/4d-write-pro-export-to-pdf-with-enclosures)  
[HTML および MIME HTML フォーマットへの書き出し](../user-legacy/exporting-to-html-and-mime-html-formats.md)<br/>
[.docx フォーマットからの読み込みおよび書き出し](../user-legacy/importing-and-exporting-in-docx-format.md)<br/>
[WP EXPORT DOCUMENT](../commands/wp-export-document)
