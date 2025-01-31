---
id: wp-export-variable
title: WP EXPORT VARIABLE
slug: /WritePro/commands/wp-export-variable
displayed_sidebar: docs
---

<!--REF #_command_.WP EXPORT VARIABLE.Syntax-->**WP EXPORT VARIABLE** ( *wpDoc* ; *destination* ; *format* {; *option*} )<!-- END REF-->
<!--REF #_command_.WP EXPORT VARIABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro変数 |
| destination | テキスト変数, BLOB変数 | &#x1F858; | 書き出したコンテンツを受け取る変数 |
| format | Integer | &#8594;  | 変数出力フォーマット |
| option | Object, Integer | &#8594;  | 書き出しオプション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP EXPORT VARIABLE.Summary-->**WP EXPORT VARIABLE** コマンドは*wpDoc* 変数内の4D Write Proオブジェクトを*format* 引数で指定したフォーマットで*destination* 引数で指定した4D変数へと書き出します。<!-- END REF-->

*wpDoc* 引数には、書き出したい4D Write Proオブジェクトを渡します。

*destination* 引数には、書き出された4D Write Pro オブジェクトを受け取る変数を渡します。必要な変数の型は、*format* 引数で指定した書き出しフォーマットに応じて変化します:

* ネイティブな.4wpフォーマットまたは.docx フォーマットを渡した場合、必要な変数はBLOB型になります。
* HTMLフォーマットを渡した場合、必要な変数はテキスト型になります。

*format* 引数には、*4D Write Pro* テーマから、使用する書き出しフォーマットを設定する定数を渡します。それぞれのフォーマットは特定の用法と関連しています。サポートされているフォーマットは以下の通りです:

| 定数                  | 型    | 値 | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ---- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk 4wp              | 倍長整数 | 4 | 4D Write Proドキュメントは、ネイティブなアーカイブフォーマット(zipになったHTMLと、別のフォルダに保存された画像)にて保存されています。4D特有のタグも含まれ、4D式は計算はされていません。このフォーマットは、特に4D Write Proドキュメントをディスク上に損失なく保存してアーカイブする事に適しています。                                                                                                                                                                                                                                                                                                                                                               |
| wk docx             | 倍長整数 | 7 | .docx 拡張子を意味します。4D Write Pro ドキュメントはMicrosoft Word フォーマットで保存されます。Microsoft Word 2016 以降に正式に対応していますが、.docx フォーマットをサポートするバージョン(*例:* Microsoft Word 2007など)であればどれであっても互換性はあります。<br/><br/>書き出しに対応しているドキュメントの部分は以下の通りです:<br/>本文 / ヘッダー / フッター / セクションページ / 印刷設定 (余白、背景色 / 背景画像、境界線、パディング、用紙サイズ / 用紙の向き)画像 - インライン、アンカー、背景画像パターン(wk background image で定義されているもの)互換性のある変数と式(ページ番号、ページ数、日付、時間、メタデータ)。互換性のない変数と式は評価されて、書き出しの前に値が固定化されます。ブックマーク一部の4D Write Pro 設定はMicrosoft Word では利用できないか、振る舞いが異なる可能性があることに注意してください。 |
| wk mime html        | 倍長整数 | 1 | 4D Write Proドキュメントは標準のMIME HTMLとして保存され、htmlドキュメントと画像はMIMEパーツとして埋め込まれます(base64でエンコードされます)。式は計算され4D特有のタグは除去されます。このフォーマットは コマンドを使用してHTML Eメールを送信するのに特に適しています。                                                                                                                                                                                                                                                                                                                                                                          |
| wk pdf              | 倍長整数 | 5 | .pdf 拡張子。4D Write Pro ドキュメントはページニューモードに基づいてPDF フォーマットで保存されています。 PDF ドキュメントには以下のメタ情報が書き出されています: タイトル 作者 サブタイトル コンテンツ作成者 **注**: 式は、ドキュメントが書き出されるときに自動的に値が計算されて固定化されます。 メソッドへのリンクは**サポートされていません。**                                                                                                                                                                                                                                                                                                                                     |
| wk svg              | 倍長整数 | 8 | 4D Write Pro ドキュメントのページはページビューモードに基づいてSVG フォマットで保存されます。 **注:** SVG へと書き出す際は、一度に1ページしか書き出すことができません。書き出すページを指定するにwk page index はを使用して下さい。                                                                                                                                                                                                                                                                                                                                                                                             |
| wk web page html 4D | 倍長整数 | 3 | 4D Write ProドキュメントはHTMLとして保存され、4D独自のタグを含みます。それぞれの式はノンブレークのスペースとして挿入されます。このフォーマットはロスレスであるため、テキストフィールドへの保存目的に適しています。                                                                                                                                                                                                                                                                                                                                                                                                                  |

**注:**

* "4D独自のタグ" とは4Dネームスペースと4D CSSスタイルを含めた4D XHTMLのことです。
* 4D Write Pro ドキュメントフォーマットについてのより詳細な情報については、*.4wp ドキュメントフォーマット* を参照して下さい。
* .docx フォーマットを使用する際の、既に知られている差異や変換されない設定の一覧については、*.docxフォーマットの読み込み/書き出し* を参照して下さい。
* このコマンドでSVG フォーマットへ書き出す場合、画像はbase64 フォーマットで埋め込まれます。
* SVG フォーマットへの書き出しについての詳細な情報については、*SVGフォーマットへの書き出し* を参照して下さい。

##### option 引数 

*option* 引数には、書き出されるドキュメントのプロパティを定義する値を格納している[オブジェクト](# "ネイティブ4Dオブジェクトとして構築されたデータ") 型の引数を渡します。以下のプロパティが利用可能です:

| 定数                                          | 値                  | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk CID host domain name                     | cidHostDomain      | CID ホストドメイン名: 生成されるCID URL に追加されるホストドメイン。'@' が区切り文字として含まれます。wk mime html フォーマットが使用されている際にのみ使用可能です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| wk embedded pictures                        | embeddedPictures   | SVG 書き出し専用。[WP EXPORT DOCUMENT](../commands/wp-export-document.md) を呼び出した時、ピクチャーが書き出された.svg ファイル内に埋め込まれるかどうかを設定します。取り得る値: true (デフォルト): ピクチャーは書き出された.svg ファイルに埋め込まれます。 false: ピクチャーは書き出された.svg ファイルと同じ階層にある"filename\_images" というフォルダ内に書き出されます。この"filename" はファイル用にコマンドに渡された名前の拡張子を抜いたものです。ピクチャーは埋め込まれませんが、.svg ファイルから参照されます。以下の点に注意して下さい: フォルダが既に存在する場合、ファイルが書き出される前に中身が消去されます 書き出されたページに画像が何もない場合、フォルダが削除されます                                                                                                                                                                                                                                                                         |
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

| |  **wk 4wp**                                            | **wk docx**                                                                   | **wk mime html**                                                              | **wk pdf**                                                                                      | **wk web page html 4D**                                                       | **wk svg**                                                                    |                                                                                   |
| -------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |----|
| wk CID host domain name<br/>                     | \-                                                                       | \-                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                    | \-                                                                       | \-                                                                       | \-                                                                          |
| wk HTML pretty print<br/>                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false) | \-                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False)     | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk max picture DPI<br/>                          | \-                                                                       | 常に300                                                                   | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                    | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 300)   | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 300)      |
| wk optimized for<br/>                            | \-                                                                       | 常に wk print                                                             | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: wk screen) | 常に wk print                                                              | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: wk print) |
| wk recompute formulas<br/>                       | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible background and anchored elements<br/> | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true) | 常に true                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible footers<br/>                          | \-                                                                       | 常に true                                                                 | 常に false                                                                     | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible headers<br/>                          | \-                                                                       | 常に true                                                                 | 常に false                                                                     | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk visible empty images<br/>                     | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.ja.png) (デフォルト: true) | ![](../../assets/en/WritePro/commands/pict5058606.ja.png) (デフォルト: true)      | ![](../../assets/en/WritePro/commands/pict5058606.ja.png) (デフォルト: true)  | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.ja.png) (デフォルト: true)     |
| wk visible references<br/>                       | \-                                                                       | \-                                                                      | \-                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false) | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |
| wk pdfa version<br/>                             | \-                                                                       | \-                                                                      | \-                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                | \-                                                                       | \-                                                                          |
| wk page index<br/>                               | \-                                                                       | \-                                                                      | \-                                                                           | \-                                                                       | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: 1)        |
| wk embedded pictures<br/>                        | \-                                                                       | \-                                                                      | \-                                                                           | \-                                                                       | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: true)     |
| wk google fonts tag<br/>                         | \-                                                                       | \-                                                                      | \-                                                                           | \-                                                                       | \-                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (デフォルト: false)    |

**互換性に関する注意:** *option* 引数に*倍長整数* 型の値を渡すことは互換性の理由からサポートされていますが、[オブジェクト](# "ネイティブ4Dオブジェクトとして構築されたデータ") 型の引数を渡すことが推奨されています。

#### 例題 1 

*myArea* 4D Write Pro オブジェクトのコンテンツをMIME 形式で書き出し、ホストドメインとして"gmail.com" を追加したい場合を考えます:

```4d
 var $option : Object
 
 $option[wk CID host domain name]:="gmail.com"
 
 WP EXPORT VARIABLE(myArea;$export;wk mime html;$option)

```

#### 例題 2 

スタイル付テキストと4D参照と画像を含んだEメールを送信したい場合を考えます。この場合、MIME HTMLフォーマットで書き出された4D Write Proエリアを、SMTP を使用して送信することができます:

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

#### 例題 3 

4D Wrie Pro の最初のページをSVG で、ヘッダーを隠してテキスト変数に書き出す場合を考えます:

```4d
 var $options : Object
 var $destination : Text
 
 $options:=New object
 $options[wk optimized for]:=wk screen
 $options[wk visible headers]:=False
 WP EXPORT VARIABLE(WPArea;$destination;wk svg;$options)
```

#### 参照 

  
  
  
*.docxフォーマットの読み込み/書き出し*  
*HTML およびMIME HTML フォーマットへの書き出し*  
[WP EXPORT DOCUMENT](../commands/wp-export-document.md)  