---
id: wp-add-picture
title: WP Add picture
slug: /WritePro/commands/wp-add-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Add picture.Syntax-->**WP Add picture** ( *wpDoc* {; *picture*} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Add picture.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| picture | Picture, Text | &#8594;  | ピクチャー(フィールドまたは変数)あるいはピクチャーへのパス(テキスト) |
| 戻り値 | Object | &#8592; | ピクチャーを参照するオブジェクト |

<!-- END REF-->

## 説明 

<!--REF #_command_.WP Add picture.Summary-->**WP Add picture** コマンドは*wpDoc* 引数で指定したドキュメント内に、*picture* 引数で指定したピクチャーを固定位置でアンカーし、その参照を返します。<!-- END REF-->返された参照はコマンドに渡すことで*picture* 引数のピクチャーを*wpDoc* 引数のドキュメント内のどんな位置(ページ、セクション、ヘッダー、フッター)にも、定義されたレイヤー、サイズで移動させることができます。

*wpDoc* 引数には、4D Write Pro ドキュメントオブジェクト名を渡します。

任意の*picture* 引数には、以下のいづれかを渡すことができます:

* 4D ピクチャー。
* システムシンタックスを使用して表現された、ディスク上に保存されたピクチャーファイルへのパスを含む文字列。  
完全なパス名か、あるいはデータベースストラクチャーファイルからみた相対的なパス名を使用することができます。ファイル名のみを渡すこともできますが、その場合ファイルはデータベースのストラクチャーファイルの隣に置かれていなければなりません。ファイル名を渡す場合、ファイルの拡張子の指定も必要です。

> **注意**: 4D でサポートされているフォーマットであればどのようなものでも使用可能です(*ピクチャ* の章を参照してください)。[PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) コマンドを使用すると、利用可能なピクチャーフォーマットの一覧を取得することができます。ピクチャーが複数のフォーマット(コーデック)を格納している場合、4D Write Pro は表示用に1つのみ、(フォーマットが異なる場合)印刷用に1つのみドキュメント内に保持します。その際のフォーマットは"最適な"フォーマットが自動的に選択されます。

* *picture* 引数が省略された場合、有効なピクチャー参照が取得され、空の画像が追加されます。これにより、[WP SET ATTRIBUTES](wp-set-attributes.md) コマンドをwk image expression セレクターと合わせて呼び出し、4D 式を使用して画像を渡すことができます。式が評価されない、あるいは有効な4D ピクチャーを返さない場合、空の画像(デフォルトの黒いフレーム画像)が表示されます。

デフォルトでは追加されたピクチャーは:

* テキストの背後に埋め込まれ、
* ペーパーボックスの左上端に表示され、
* 全てのページに表示されます。

*picture* 引数で指定したピクチャーの位置、レイヤー(インライン、テキストの前面/背景)、表示状態などのプロパティは[WP SET ATTRIBUTES](wp-set-attributes.md) コマンドを使用する、あるいは標準アクションを使用する(*4D Write Pro標準アクションの使用*参照)ことで変更可能です。

**注:** [WP Selection range](wp-selection-range.md) コマンドは、アンカーされたピクチャーが選択されていた場合には*ピクチャー参照*オブジェクトを返し、インライン画像をが選択されていた場合には*レンジ*オブジェクトを返します。wk type 属性を使用すると、選択されたオブジェクトがピクチャーオブジェクトがどうかをチェックすることができます。値 = 2の場合、オブジェクトはピクチャーオブジェクトであり、それ以外の場合にはレンジオブジェクト(値 = 0)となります。

## 例題 1 

ファイルパスを使用してデフォルトの設定でピクチャーを追加する場合を考えます。

```4d
 var $obPict : Object
 $obPict:=WP Add picture(myDoc;"C:\\Users\\John.Doe\\Pictures\\Sunrise.jpg")
```

結果は以下のようになります:

![](../../assets/en/WritePro/commands/pict3617325.en.png)

## 例題 2 

ピクチャーをリサイズし、中央揃えにしてヘッダーにアンカーして追加したい場合を考えます:

```4d
 var $obImage : Object
 $obImage:=WP Add picture(myDoc;"C:\\Users\\John.Doe\\Pictures\\Saved Pictures\\Sunrise.jpg")
 WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)
 WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)
 WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)
 WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")
```

結果は以下のようになります:

![](../../assets/en/WritePro/commands/pict3617351.en.png)

## 例題 3 

フィールド式を使用してアンカーされた画像を、データベースからのテキストを表示しているドキュメントに追加したい場合を考えます:

```4d
 QUERY([Flowers];[Flowers]Common_Name="tulip")
 WP SET TEXT(myDoc;[Flowers]Description;wk append) // テキストを挿入
 var $obImage : Object
 $obImage:=WP Add picture(myDoc)
 WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))
```

![](../../assets/en/WritePro/commands/pict3841719.en.png)

## 参照 

  
[WP DELETE PICTURE](wp-delete-picture.md)  
[WP Picture range](wp-picture-range.md)  
*ピクチャーを管理する*  