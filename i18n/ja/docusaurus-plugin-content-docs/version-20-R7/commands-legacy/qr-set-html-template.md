---
id: qr-set-html-template
title: QR SET HTML TEMPLATE
slug: /commands/qr-set-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HTML TEMPLATE.Syntax-->**QR SET HTML TEMPLATE** ( *area* ; *template* )<!-- END REF-->
<!--REF #_command_.QR SET HTML TEMPLATE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| template | Text | &#8594;  | HTMLテンプレート |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.QR SET HTML TEMPLATE.Summary-->QR SET HTML TEMPLATEコマンドは、クイックレポートエリアに使用されるHTMLテンプレートを設定します。<!-- END REF-->テンプレートは、HTML形式でレポートを作成する際に使用されます。

テンプレートはデータを処理するのに、元のレポートに近いレイアウトを維持したり、独自のカスタムHTMLを適用するために、一連のタグを用います。

**Note:** 出力先をHTMLファイルに設定するため、まず初めに[QR SET DESTINATION](qr-set-destination.md "QR SET DESTINATION")コマンドを呼び出す必要がある点に注意してください。

#### HTMLタグ 

*<!--#4DQRheader--> ... <!--/#4DQRheader-->*  
これらのタグに挟まれたHTMLの内容を、カラムタイトルを元にして設定します。通常、これらのタグはレポートのタイトル行を定義するために使用します。 

*<!--#4DQRrow--> ... <!--/#4DQRrow-->*  
これらのタグに挟まれたHTMLの内容は、各データ行ごとに繰り返されます (詳細行と小計行を含む)。

*<!--#4DQRcol--> ... <!--/#4DQRcol-->*  
これらのタグに挟まれたHTMLの内容は、1つの行の各データカラムごとに繰り返されます。カラムの順序は、レポート内の順序と同じです。*<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*と一緒に使用した場合、*<!--#4DQRcol--> ... <!--/#4DQRcol-->*タグは、*<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*を用いてその内容が挿入されたのではないカラムを対象とします。  
例えば、5つのカラムから構成されるレポートの場合、*<!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->*を使用して2番目のカラムからデータを挿入すると、*<!--#4DQRcol--> ... <!--/#4DQRcol-->*は、各行のカラム1、3、4、5を処理します。後者のタグは、*<!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->*を用いてその内容が作成されたカラムを無視します。

*<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*  
これらのタグに挟まれたHTMLの内容は、番号が“n”であるレポートカラムから取り出されます。  
例えば、3つのカラムから構成されるレポートにHTML出力として異なるカラム順を表示したい場合、次のように指定することができます: *<!--#4DQRrow--> <!--#4DQRcol;3--> ... <!--/#4DQRcol;3--><!--#4DQRcol;2--> ... <!--/#4DQRcol;2--><!--#4DQRcol;1--> ... <!--/#4DQRcol;1--> <!--/#4DQRrow-->*  
  
この例では、カラムはレポートと逆の順序で挿入されます。

*<!--#4DQRfont--> ... <!--/#4DQRfont-->*  
これらのタグに挟まれたHTMLの内容は、カレントカラムまたはセルのフォントおよびフォントサイズとして割り当てられます。  
*<!--#4DQRfont-->*は、HTMLフォント定義に置き換えられ、*<!--/#4DQRfont-->*は対応する終了タグ (*</font>*) に置き換えられます。

*<!--#4DQRface--> ... <!--/#4DQRface-->*  
これらのタグに挟まれたHTMLの内容は、カレントカラムまたはセルのフォントスタイルとして割り当てられます。  
*<!--#4DQRface-->*は、HTMLフェース定義に置き換えられ、*<!--#4DQRface-->*は対応する終了タグ (*</face>*) に置き換えられます。

*<!--#4DQRbgcolor-->*  
このカラータグは、カレントセルのカレントカラーで置き換えられます。

*<!--#4DQRdata-->*  
このタグは、カレントセルのカレントデータで置き換えられます。

*<!--#4DQRlHeader--><!--#4DQRdata--><!--/#4DQRlHeader-->*  
*<!--#4DQRcHeader--><!--#4DQRdata--><!--/#4DQRcHeader-->*  
*<!--#4DQRrHeader--><!--#4DQRdata--><!--/#4DQRrHeader-->*  
これらのタグはそれぞれ、左ヘッダ、中央ヘッダ、右ヘッダのデータで置き換えられます。

*<!--#4DQRlFooter--><!--#4DQRdata--><!--/#4DQRlFooter-->*  
*<!--#4DQRcFooter--><!--#4DQRdata--><!--/#4DQRcFooter-->*  
*<!--#4DQRrFooter--><!--#4DQRdata--><!--/#4DQRrFooter-->*  
これらのタグはそれぞれ、左フッタ、中央フッタ、右フッタのデータで置き換えられます。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR Get HTML template](qr-get-html-template.md)  