---
id: wp-export-document
title: WP EXPORT DOCUMENT
slug: /WritePro/commands/wp-export-document
displayed_sidebar: docs
---

<!--REF #_command_.WP EXPORT DOCUMENT.Syntax-->**WP EXPORT DOCUMENT** ( *wpDoc* ; *filePath* {; *format* {; *option*}} )<!-- END REF-->
<!--REF #_command_.WP EXPORT DOCUMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro 変数 |
| filePath | Text | &#8594;  | 書き出されたファイルへのパス |
| format | Integer | &#8594;  | ドキュメントの出力フォーマット |
| option | Object, Integer | &#8594;  | 書き出しオプション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP EXPORT DOCUMENT.Summary-->**WP EXPORT DOCUMENT** コマンドは*wpDoc* 引数に渡したディスク上の4D Write Proオブジェクトを、*filePath* 引数で指定した場所に、他の任意の引数に基づいて書き出します。<!-- END REF-->

*wpDoc* 引数には、書き出したい4D Write Proオブジェクトを渡します。

*filePath* 引数には、書き出し先の場所と、書き出したドキュメント名を渡します。ドキュメント名のみを渡した場合、4Dストラクチャーファイルと同階層に保存されます。

*format* 引数は省略することができますが、その場合は*filePath* 引数で拡張子を指定する必要があります。また*format* 引数には*4D Write Pro* テーマの定数を渡すこともできます。この場合、4D は必要に応じて適切な拡張子を追加します。以下のフォーマットがサポートされています。:

| 定数                   | 値 | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk 4wp               | 4 | 4D Write Proドキュメントは、ネイティブなアーカイブフォーマット(zipになったHTMLと、別のフォルダに保存された画像)にて保存されています。4D特有のタグも含まれ、4D式は計算はされていません。このフォーマットは、特に4D Write Proドキュメントをディスク上に損失なく保存してアーカイブする事に適しています。                                                                                                                                                                                                                                                                                                                                                               |
| wk docx              | 7 | .docx 拡張子を意味します。4D Write Pro ドキュメントはMicrosoft Word フォーマットで保存されます。Microsoft Word 2016 以降に正式に対応していますが、.docx フォーマットをサポートするバージョン(*例:* Microsoft Word 2007など)であればどれであっても互換性はあります。<br/><br/>書き出しに対応しているドキュメントの部分は以下の通りです:<br/>本文 / ヘッダー / フッター / セクションページ / 印刷設定 (余白、背景色 / 背景画像、境界線、パディング、用紙サイズ / 用紙の向き)画像 - インライン、アンカー、背景画像パターン(wk background image で定義されているもの)互換性のある変数と式(ページ番号、ページ数、日付、時間、メタデータ)。互換性のない変数と式は評価されて、書き出しの前に値が固定化されます。ブックマーク一部の4D Write Pro 設定はMicrosoft Word では利用できないか、振る舞いが異なる可能性があることに注意してください。 |
| wk mime html         | 1 | 4D Write Proドキュメントは標準のMIME HTMLとして保存され、htmlドキュメントと画像はMIMEパーツとして埋め込まれます(base64でエンコードされます)。式は計算され4D特有のタグは除去されます。埋め込みビューにアンカーされたテキストボックスのみが(divとして)書き出されます。このフォーマットは コマンドを使用してHTML Eメールを送信するのに特に適しています。                                                                                                                                                                                                                                                                                                                                |
| wk pdf               | 5 | .pdf 拡張子。4D Write Pro ドキュメントはページニューモードに基づいてPDF フォーマットで保存されています。 PDF ドキュメントには以下のメタ情報が書き出されています: タイトル 作者 サブタイトル コンテンツ作成者 **注**: 式は、ドキュメントが書き出されるときに自動的に値が計算されて固定化されます。 メソッドへのリンクは**サポートされていません。**                                                                                                                                                                                                                                                                                                                                     |
| wk svg               | 8 | 4D Write Pro ドキュメントのページはページビューモードに基づいてSVG フォマットで保存されます。 **注:** SVG へと書き出す際は、一度に1ページしか書き出すことができません。書き出すページを指定するにwk page index はを使用して下さい。                                                                                                                                                                                                                                                                                                                                                                                             |
| wk web page complete | 2 | .htm または .html 拡張子。このドキュメントは標準HTMLとして保存され、そのリソースは別に保存されます。4Dタグは除去され、式は値が計算されます。埋め込みビューにアンカーされたテキストボックスのみが(divとして)書き出されます。このフォーマットは特に4D Write Pro ドキュメントWeb ブラウザで表示したい場合に特に適しています。                                                                                                                                                                                                                                                                                                                                                   |

**注:**

* "4D 特有のタグ"とは、4Dネームスペースと4D CSSスタイルを含めた4D XHTMLのことです。
* 4D Write Proフォーマットに関するより詳細な情報については、*.4wp ドキュメントフォーマット*を参照して下さい。
* .docx フォーマットを使用する際の、既に知られている差異や変換されない設定の一覧については、*.docxフォーマットの読み込み/書き出し* を参照して下さい。
* SVG フォーマットへの書き出しついてのより詳細な情報については、*SVGフォーマットへの書き出し* を参照して下さい。

##### option 引数 

*option* 引数には、書き出されるドキュメントのプロパティを定義する値を格納している[オブジェクト](# "ネイティブ4Dオブジェクトとして構築されたデータ") 型の引数を渡します。以下のプロパティが利用可能です:

| 定数                                          | 値                  | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk CID host domain name                     | cidHostDomain      | CID ホストドメイン名: 生成されるCID URL に追加されるホストドメイン。'@' が区切り文字として含まれます。wk mime html フォーマットが使用されている際にのみ使用可能です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| wk embedded pictures                        | embeddedPictures   | SVG 書き出し専用。[WP EXPORT DOCUMENT](wp-export-document.md) を呼び出した時、ピクチャーが書き出された.svg ファイル内に埋め込まれるかどうかを設定します。取り得る値: true (デフォルト): ピクチャーは書き出された.svg ファイルに埋め込まれます。 false: ピクチャーは書き出された.svg ファイルと同じ階層にある"filename\_images" というフォルダ内に書き出されます。この"filename" はファイル用にコマンドに渡された名前の拡張子を抜いたものです。ピクチャーは埋め込まれませんが、.svg ファイルから参照されます。以下の点に注意して下さい: フォルダが既に存在する場合、ファイルが書き出される前に中身が消去されます 書き出されたページに画像が何もない場合、フォルダが削除されます                                                                                                                                                                                                                                                                         |
| wk factur x                                 | facturX            | PDF 書き出しのみ。値: "Factur-X (ZUGFeRD)" PDF 書き出しを設定するオブジェクト(*wk factur x オブジェクト* 参照)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| wk files                                    | files              | PDF 書き出しに対してのみ。値：生成されるドキュメントに埋め込まれるファイルを記述したオブジェクトのコレクション(*wk files コレクション* 参照)。この機能はPDF/A-3 ドキュメントにおいてのみサポートされています。属性が使用されている場合、"PDF/A-3" バージョンが自動的に設定されます( wk pdfa version 属性は無視されます)。Factur-X PDF 書き出し(下記参照)の場合、コレクションの最初のオブジェクトにはFactur-X XML ファイルが格納されている必要があります。                                                                                                                                                                                                                                                                                                                                                                                                      |
| wk google fonts tag                         | googleFontsTag     | SVG書き出し専用。書き出されたSVG 内でのGoogle フォントの読み込みルールを設定します。取り得る値: false (デフォルト): Google フォントの読み込みルールは何も追加されません true: 書き出されたファイルに@import ルールを追加します。Windows またはmacOS において利用できないフォントを使用したい場合に有用です。 **注:** このプロパティはデフォルトではFalse に設定されています。一般的にはネイティブのフォントはブラウザ上で綺麗にレンダリングされますが、読み込まれたGoogle フォントはネイティブのフォントを上書きするからです。例えば、macOS で”Helvetica” を上書きするのはあまり良いアイデアではありません。これはmacOS ネイティブのフォントだからです。                                                                                                                                                                                                                                                                                           |
| wk HTML pretty print                        | htmlPrettyPrint    | HTML コードは読みやすいようにフォーマットされます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| wk max picture DPI                          | maxPictureDPI      | 画像を適切な解像度にリサンプリング(縮小)するのに使用されます。Windows でのSVG 画像に対しては。ラスタライズに使用されます。 デフォルト値: 300 (wk optimized for \= wk print *時)* 192 (wk optimized for \= wk screen *時)* 取り得る最大値: 1440                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| wk optimized for                            | optimizedFor       | 書き出されたドキュメントを、その目的に応じてどのように最適化するかを定義します。 取り得る値: wk print (wk pdf のデフォルト値) ビットマップピクチャーは、wk max picture DPI で定義されたDPI あるいは300 (デフォルト値)を使用してダウンスケールされ、書き出しタイプとしてコーデックがサポートされない場合にはPNGに変換されます。 ベクターピクチャーはwk max picture DPI で定義されたDPI または300 (Windows のみ)を使用してPNG へと変換されます。 ピクチャーに複数のフォーマットが格納されている場合、印刷に最適なフォーマットが使用されます(例: .jpg の代わりに .tiff など) wk screen (wk web page complete および wk mime html のデフォルト値) ビットマップピクチャーは、wk max picture DPI で定義されたDPI あるいは192 (デフォルト値)を使用してダウンスケールされ、書き出しタイプとしてコーデックがサポートされない場合にはJPEG (不透明タイプ)またはPNG(透過画像)に変換されます。 ベクターピクチャーはwk max picture DPI で定義されたDPI または192 (Windows のみ)を使用してPNG へと変換されます。 ピクチャーに複数のフォーマットが格納されている場合、スクリーン用のフォーマットが使用されます。 |
| wk page index                               | pageIndex          | SVG 書き出し専用。SVG フォーマットへと書き出すページのインデックス(デフォルトは1)。ページのインデックスは1から始まり、これはドキュメントの最初のページを指します。 **注:** ページインデックスはページナンバリングとは異なるものです。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| wk pdfa version                             | pdfaVersion        | PDF/A バージョンに適合したPDF を書き出します。PDF/A のプロパティおよびバージョンの詳細については、[Wikipedia のPDF/A のページ](https://ja.wikipedia.org/wiki/PDF/A) を参照してください(英語版のページは[こちら](https://en.wikipedia.org/wiki/PDF/A))。 取り得る値: wk pdfa2: "PDF/A-2" バージョンに書き出します。 wk pdfa3: "PDF/A-3" バージョンに書き出します。 **注意:** macOS 上では、プラットフォームの実装によってはwk pdfa2 定数はPDF/A-2 またはPDF/A-3 またはそれ以上のバージョンに書き出すことがあります。また、wk pdfa3 定数は"*少なくとも* PDF/A-3へと書き出す"ということを意味します。Windows 上では、出力されたPDF ファイルは常に指定されたバージョンと同じになります。                                                                                                                                                                                                                |
| wk recompute formulas                       | recomputeFormulas  | 書き出し時にフォーミュラを再計算するかどうかを定義します。取り得る値: true - デフォルト値。全てのフォーミュラは再計算されます。 false- フォーミュラを再計算しません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| wk visible background and anchored elements | visibleBackground  | 背景画像/背景色、アンカーされた画像またはテキストボックス(ディスプレイ用では、ページビューモードまたは埋め込みビューモードでのみ表示されるエフェクト)を表示または書き出しをします。取り得る値: True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| wk visible empty images                     | visibleEmptyImages | 読み込めない、あるいは計算できない画像(空の画像またはサポートされていないフォーマットの画像)に対してデフォルトの黒い四角形を表示または書き出しします。取り得る値: True/False 値がFalse の場合、たとえ画像に境界線、幅、高さ、背景などが設定されてあっても空の画像要素は全く表示されないという点に注意して下さい。これはインライン画像のページレイアウトに影響する可能性があります。                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| wk visible footers                          | visibleFooters     | フッターを表示または書き出しします(表示用においてはページビューモードでのみ表示されるエフェクトです)。取りうる値: True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| wk visible headers                          | visibleHeaders     | ヘッダーを表示または書き出しします(表示用においてはページビューモードでのみ表示されるエフェクトです)。取りうる値: True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| wk visible references                       | visibleReferences  | ドキュメントに挿入されている4D 式を参照として表示または書き出しします。取りうる値: True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

  
以下の表は*format* 引数の各フォーマットごとに利用可能な*option* 引数のオプションをあらわしています:

| |  **wk 4wp**                                            | **wk docx**                                                              | **wk mime html**                                                        | **wk pdf**                                                                   | **wk web page html 4D**                                                  | **wk svg**                                                               |                                                                             |
| -------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| wk CID host domain name<br/>                     | \-                                                                       | \-                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                    | \-                                                                       | \-                                                                       | \-                                                                          |
| wk HTML pretty print<br/>                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false) | \-                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False)     | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk max picture DPI<br/>                          | \-                                                                       | 常に300                                                                   | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                    | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 300)   | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 300)      |
| wk optimized for<br/>                            | \-                                                                       | 常に wk print                                                             | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: wk screen) | 常に wk print                                                              | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: wk print) |
| wk recompute formulas<br/>                       | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible background and anchored elements<br/> | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | 常に true                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible footers<br/>                          | \-                                                                       | 常に true                                                                 | 常に false                                                                     | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible headers<br/>                          | \-                                                                       | 常に true                                                                 | 常に false                                                                     | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible empty images<br/>                     | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible references<br/>                       | \-                                                                       | \-                                                                      | \-                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false) | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk pdfa version<br/>                             | \-                                                                       | \-                                                                      | \-                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                | \-                                                                       | \-                                                                          |
| wk factur x<br/>                                 | \-                                                                       | \-                                                                      | \-                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                | \-                                                                       | \-                                                                          |
| wk files<br/>                                    | \-                                                                       | \-                                                                      | \-                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                | \-                                                                       | \-                                                                          |
| wk page index<br/>                               | \-                                                                       | \-                                                                      | \-                                                                           | \-                                                                       | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 1)        |
| wk embedded pictures<br/>                        | \-                                                                       | \-                                                                      | \-                                                                           | \-                                                                       | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk google fonts tag<br/>                         | \-                                                                       | \-                                                                      | \-                                                                           | \-                                                                       | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |

**互換性に関する注意:** *option* 引数に*倍長整数* 型の値を渡すことは互換性の理由からサポートされていますが、[オブジェクト](# "ネイティブ4Dオブジェクトとして構築されたデータ") 型の引数を渡すことが推奨されています。

##### wk files コレクション 

wk files プロパティを使用すると、[PDF に添付つきで書き出す](https://blog.4d.com/4d-write-pro-export-to-pdf-with-enclosures)ことができます。このプロパティには、最終ドキュメントに埋め込まれるファイルを記述するオブジェクトのコレクションを格納する必要があります。コレクション内のそれぞれのオブジェクトは以下のプロパティを格納することができます:

| **プロパティ**    | **型**          | **詳細**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name         | テキスト           | ファイル名。*file* プロパティが使用されている場合には、デフォルトでは名前はファイル名が使用されるので、任意。*data* プロパティが使用されている場合には必須(ただしFactur-X 書き出しの場合の最初のファイルを除く、この場合にはファイル名は自動的に"factur-x.xml" となっているため。詳細は以下参照)                                                                                                                                                                                                                                                                                                                          |
| description  | テキスト           | 任意。省略時、Factur-X への最初の書き出しファイルのデフォルトの値は"Factur-X/ZUGFeRD Invoice" となり、それ以外の場合は空となります。                                                                                                                                                                                                                                                                                                                                                                                                          |
| mimeType     | テキスト           | 任意。省略時、デフォルトの値は一般的にはファイル拡張子から推測されます。それ以外の場合、"application/octet-stream" が使用されます。渡された場合、必ずISO mime タイプを使用するようにしてください。そうでない場合、書き出されたファイルは無効である場合があります。                                                                                                                                                                                                                                                                                                                                           |
| data         | テキストまたはBLOB    | *file* プロパティがない場合には必須。                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| file         | 4D.File オブジェクト | *data* プロパティがない場合には必須。それ以外の場合には使用されません。                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| relationship | テキスト           | 任意。省略時、デフォルトの値は"Data" となります。Factur-X の最初のファイルの取りうる値:BASIC、EN 16931 または EXTENDED プロファイルの場合: "Alternative"、"Source"または "Data" ("Alternative" はドイツの請求書にのみ使用されます)MINIMUM および BASIC WL プロファイルの場合: "Data" のみ。その他のプロファイルの場合: "Alternative"、"Source" または "Data" (国によって制約がある場合あり:他のプロファイルについての詳細な情報についてはプロファイルの指示書を参照してください。例えば、RECHNUNG プロファイルの場合は"Alternative" のみ使用可能です)その他の(ただしFactur-X invoice xml ファイルを除く)ファイルの場合 : "Alternative"、"Source"、"Data"、"Supplement" または "Unspecified"それ以外の値はエラーを生成します。 |

*option* 引数にも wk factur x プロパティが含まれている場合、 wk files コレクションの最初の要素はFactur-X (ZUGFeRD) invoice xml ファイルである必要があります(以下参照)。

**注意:** PDF 添付はPDF/A-3 バージョンでのみサポートされています。 wk files プロパティを渡す場合、"PDF/A-3" バージョンが自動的に使用されます。

##### wk factur x オブジェクト 

wk factur x プロパティは、2つまでのプロパティを格納することのできるオブジェクトです:

| **プロパティ** | **型** | **詳細**                                                                                                                                                                                                                                  |
| --------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| profile   | テキスト  | 任意。省略時、*profile* は提供されたxml ファイルまたはテキストから決定されます(これは標準のプロファイルである必要があります)。渡された場合には、標準のプロファイル名以外の名前の可能性があります(他のプロファイル、例えばRECHNUNG などを使用する場合)。**注意:* 標準のプロファイル名は以下のとおりです: MINIMUM、BASIC WL、BASIC、EN 16931 (別名 COMFORT でありこれはエイリアス)、EXTENDED* |
| version   | テキスト  | 任意。デフォルト値は"1.0"                                                                                                                                                                                                                         |

**Factur-X / ZUGFeRD PDF ドキュメントについて**

*Factur-X / ZUGFeRD* は電子請求書のための欧州の規格です(PDFはユーザー用、XML データは処理の自動化用)。詳細な情報については [こちらのblog記事](https://blog.4d.com/4d-write-pro-electronic-invoice-generation) を参照してください。

"Factur-X" PDF 書き出しをトリガーするためには、*option* 引数に wk factur x および wk files プロパティの両方を渡してください(以下の例題5参照)。この場合:

* Factur-X (ZUGFeRD) PDF が生成されます。
* wk files コレクションの最初の要素がFactur-X xml ファイルとして使用されます。
* wk files プロパティがない場合またはコレクションが空である場合、または最初の要素がxml ファイルでない亜場合、エラーが生成されます。

**注意:** Factur-X / ZUGFeRD 書き出し実装についての詳細な例題については、[こちらのHDI 4D project](https://github.com/4d-depot/HDI%5F4DWP%5FGenerateFacturX) をダウンロードしてください。

#### 例題 1 

*myArea* 4D Write Pro オブジェクトのコンテンツをHTML 形式とPDF フォーマットの両方に書き出したい場合を考えます:

```4d
  // HTML 形式に書き出し
 var $option : Object
 $option:=New object
 
 $option[wk recompute formulas]:=False
 $option[wk HTML pretty print]:=False
 $option[wk optimized for]:=wk print
 $option[wk max picture DPI]:=600 //印刷用のデフォルト値(300 DPI)を上書き
 
 WP EXPORT DOCUMENT(myArea;$path;wk web page complete;$option)
 
  // PDF フォーマットで書き出し
 var $option : Object
 $option:=New object
 
 $option[wk visible headers]:=True
 $option[wk visible footers]:=True
 $option[wk visible background]:=True
 $option[wk max picture DPI]:=96 //スクリーン用のデフォルト値(192 DPI) を上書きしてドキュメントのサイズを制限
 $option[wk optimized for]:=wk screen
 $option[wk recompute formulas]:=True
 
 WP EXPORT DOCUMENT(myArea;$path;wk pdf;$option)
```

#### 例題 2 

*myArea* 4D Write Proオブジェクト内のコンテンツを、.4wpフォーマットで書き出したい場合を考えます:

```4d
 var $path : Text
 var $docRef : Integer
 
 Case of
    :(Form event code=On Clicked)
 
       $path:=Get 4D folder(Database folder)+"Export"+Folder separator
       $path:=Select document($path;".4wp";" title";File name entry)
 
       If($path#"")
          WP EXPORT DOCUMENT(myArea;document;wk 4wp)
       End if
 End case
```

#### 例題 3 

ドキュメントの2ページ目をSVG として書き出し、ドキュメントからピクチャーを書き出したい場合を考えます:   
  
```4d
 var $options : Object
 
 $options:=New object
 $options[wk embedded pictures]:=False
 $options[wk page index]:=2
 
 WP EXPORT DOCUMENT(WPArea;"my exported document";wk svg;$options)
```

#### 例題 4 

PDF/A-2 準拠のPDF ドキュメントを書き出したい場合を考えます:

```4d
 var $options: Object:={}
 $options[wk visible empty images] :=False
 $options[wk pdfa version]:=wk pdfa2 // "PDF/A-2" に準拠
 WP EXPORT DOCUMENT(wpDoc;"invoice.pdf";wk pdf;$options)
```

#### 例題 5 

Factur-X PDF 書き出しをしたい場合を考えます:

```4d
  //BASIC (標準のプロファイル)
 var $options;$fileInfo : Object
 $options:={}
 $options[wk factur x]:={}
 $options[wk factur x].profile:="BASIC"
 $options[wk factur x].version:="1.0"
 
 $fileInfo:={}
 $fileInfo.file:=$file  // この$file は.xml ファイルをターゲットにした4D.File
 $options[wk files]:=[$fileInfo]
 
 WP EXPORT DOCUMENT(wpDoc;"facturX_basic.pdf";wk pdf;$options)
 
  //RECHNUNG プロファイル(カスタムのプロファイル)
 $options:={}
 $options[wk factur x]:={}
 $options[wk factur x].profile:="RECHNUNG"
 $options[wk factur x].version:="2.1" //RECHNUNG の最後のバージョン
 
 $fileInfo:={}
 $fileInfo.file:=$file  // この$file は.xml ファイルをターゲットにした4D.File
 $fileInfo.name:="rechnung.xml" // RECHNUNG のPDFの場合に必須なファイル名
 $fileInfo.relationship:="Alternative" //ドイツ用に必須
 $fileInfo.description:="ZUGFeRD Rechnung"
 $options[wk files]:=[$fileInfo]
 
 WP EXPORT DOCUMENT(wpDoc;"facturX_rechnung.pdf";wk pdf;$options)
```

#### 参照 

  
  
  
*.docxフォーマットの読み込み/書き出し*  
*HTML およびMIME HTML フォーマットへの書き出し*  
*SVGフォーマットへの書き出し*  
[WP EXPORT VARIABLE](wp-export-variable.md)  