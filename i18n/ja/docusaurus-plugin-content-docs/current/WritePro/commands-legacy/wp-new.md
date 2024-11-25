---
id: wp-new
title: WP New
slug: /WritePro/commands/wp-new
displayed_sidebar: docs
---

<!--REF #_command_.WP New.Syntax-->**WP New** {( *source* {; *option*} )} -> 戻り値<!-- END REF-->
<!--REF #_command_.WP New.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| source | Text, Blob, Object | &#8594;  | 文字列: HTML ソース<br/>BLOB: 4D Write Pro ドキュメント(.4wp)あるいは4D Write Blob ドキュメント(.4w7/.4wt)<br/>Object: レンジあるいは要素または4D Write Pro ドキュメント |
| option | Integer | &#8594;  | HTML 式の読み込みオプション |
| 戻り値 | Object | &#8592; | 4D Write Pro オブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP New.Summary-->**WP New** コマンドは4D Write Pro オブジェクトを作成して返します。<!-- END REF-->返されたオブジェクトは完全なドキュメントであり、例えば[WP INSERT DOCUMENT](../commands/wp-insert-document.md) コマンドなどに渡すことができます。

*source* 引数を省略した場合、コマンドはデフォルトで空の4D Write Proオブジェクトを返します。

*source* 引数を使用した場合、新しい4D Write Pro オブジェクトは*source* 引数の中身をコンテンツとして返されます。渡せる内容は以下の通りです:

* *文字列* の引数: この場合、4D HTMLソースを渡します。つまり、 wk web page html 4D オプションを使用した[WP EXPORT VARIABLE](wp-export-variable.md) で書き出されたテキストです。このテキストは参照(4Dタグと式)と埋め込まれた画像を含むことができます。
* *blob* 引数: この場合、いかのどちらかを渡す事ができます:  
   * BLOBに保存された4D Write Pro(.4wp)フォーマットドキュメント。  
   4D Write Proドキュメントフォーマットの詳細については、*.4wp ドキュメントフォーマット* を参照して下さい。  
   * BLOBに読み込まれている以前の4D Writeエリア(.4w7 または .4wt を含んだBlobがサポートされます)。このコンテキストにおいては、オプションの*option* 引数を使用することで、HTML 式をテキストとして読み込まれたドキュメント内に含めることができます(以下参照)。  
   4D Write Proオブジェクト内で現在サポートされている4D Writeの機能の詳細な一覧については、*4D Write ドキュメントの読み込み* の章を参照して下さい。  
 ディスク上に保存されている4D Write ドキュメント(.4w7 or .4wt) を読み込みたい場合、[WP Import document](../commands/wp-import-document.md) コマンドの使用も検討してみて下さい。
* 以下のいづれかであるobject 引数:  
   * レンジ。  
   この場合、**WP New** は指定したレンジから作成した新規ドキュメントを返します。指定レンジがドキュメントの全レンジでない場合、最初のセクションだけが書き出され、ブックマークなどが存在する場合には、これらは書き出されないという点に注意してください。  
   * 要素(テーブル/行/段落/インラインピクチャー/ヘッダー/フッター/インライン画像/テキストボックス/セクション/サブセクション/スタイルシート)  
   この場合、**WP New** は要素の参照のみを本文部分に含んだ新しいドキュメントを返します(行の場合、ドキュメントにはその行を含んだテーブル要素が格納されます)。  
   * 4D Write Pro ドキュメント  
   この場合、**WP New** は指定されたドキュメントのコピーを返します。

デフォルトでは、旧式の4D Write ドキュメント内に挿入されたHTM式は読み込まれません(4D Write Pro ではサポートされません)。*option* 引数にwk import html expressions as text 定数を渡した場合、HTML 式は、*##htmlBegin##* および *##htmlEnd##* タグに挟まれた標準テキストとして読み込まれます(この場合、後からフォーマットを直す必要があります)。返される標準テキストは、例えば以下のような形です:

```RAW
##htmlBegin##Imported titlebold##htmlEnd##
```

**互換性に関する注意**: *旧式の4D Write ドキュメント内で使用される文字スタイルシートは独自の機構が使用されており、これは4D Write Pro ではサポートされていないものです。インポートされたテキストを可能な限り再現するため、スタイルシート属性は"ハードコード"スタイル属性へと変換されています。旧式の文字スタイルシートは読み込まれず、今後ドキュメント内では参照されることはありません。*

#### 例題 1 

空の4D Write Proオブジェクトを作成したい場合を考えます:

```4d
 myWPObject:=WP New
```

#### 例題 2 

ディスク上に保存されている4D Write Pro ドキュメントから新しい4D Write Pro オブジェクトを作成します:

```4d
 var $BlobDoc : Blob
 var myWPArea : Object
 DOCUMENT TO BLOB("myDoc.4wp";$BlobDoc) //ドキュメントをBlobに読み込む
 myWPArea:=WP New($BlobDoc)
```

#### 例題 3 

簡単な4D式の参照を含んだ4D Write Proオブジェクトを作成したい場合を考えます:

```4d
 var myText : Text
 myText:="Today is "
 ST INSERT EXPRESSION(myText;"string(current date;System date long)";ST End text)
 myWPA:=WP New(myText)
```

#### 例題 4 

以前作成したテンプレートを使用して4D Write Proエリアを初期化したい場合を考えます:

```4d
  //既存のエリアからテンプレートを書き出し
 var wpTemplate : Text
 WP EXPORT VARIABLE(myWPArea;wpTemplate;wk web page html 4D)
 
  // 新規エリアに対してテンプレートを使用
 var myNewWPA : Object
 myNewWPA:=WP New(wpTemplate)
```

#### 例題 5 

カレントレコードのBLOB フィールドに保存されている旧4D Write ブラグインのドキュメントを、HTML 式を含めて新しい4D Write Proエリア内に読み込みたい場合を考えます:

```4d
 var wpArea : Object
 wpArea=WP New([Templates]Reference_;wk import html expressions as text)
```

#### 例題 6 

あらかじめフォーマットされ、それぞれがブックマークとして保存された複数のパーツで構成された、テンプレートドキュメントを定義しました。このテンプレートから任意のブックマークを新規ドキュメントとして抽出し、作成中のドキュメントに挿入することができます。

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) // テンプレートからブックマークを取得します
 $targetRange:=WP New //空のドキュメントを作成(これが最終的なドキュメントになります)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") // 使用したいブックマークを名称で探します
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) // ブックマークからレンジを取得します
    $RangeDoc:=WP New($Range) // レンジから新規ドキュメントを作成します
    WP INSERT DOCUMENT($targetRange;$RangeDoc;wk append+wk freeze expressions) // wk append = $RangeDocドキュメントは $targetRange の先頭に挿入されます
 End if
```

#### 参照 

[WP Import document](../commands/wp-import-document.md)  
[WP INSERT DOCUMENT](../commands/wp-insert-document.md)  