---
id: wp-new-text-box
title: WP New text box
slug: /WritePro/commands/wp-new-text-box
displayed_sidebar: docs
---

<!--REF #_command_.WP New text box.Syntax-->**WP New text box** ( *wpDoc* ; *pageNum* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP New text box.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| pageNum | Number | &#8594;  | Page number where to anchor the text box |
| 戻り値 | Object | &#8592; | Text box object |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP New text box.Summary-->**WP New text box** コマンドは、*wpDoc* 引数で指定したドキュメントの*pageNum* 引数で指定したページ内に、新しいテキストボックスオブジェクトを作成してそれを返します。<!-- END REF-->

**注意:** テキストボックスについてのより詳細な情報については、*テキストボックスの管理* の段落を参照してください。

*wpDoc* 引数には、4D Write Pro ドキュメントを渡します。

*pageNum* 引数には、テキストボックスをアンカーしたいページ番号を渡します。pageNum 引数に負の値(< 0)を渡した場合、ページ番号 **1** が使用されます(エラーは生成されません)。

コマンドは、以下のデフォルトの属性を持ったテキストボックス要素を作成します:

* 幅 = 8 cm
* 高さ = auto
* 実線の黒の境界線、幅 1 pt
* パディング = 4 pt
* マージン = 0 pt
* 背景色 = 白
* id = "textBoxN" で、N は番号
* ページ四角形の左上角に、本文の前にアンカーされます(アンカーされたピクチャー同様、テキストボックスは埋め込みモードにアンカーすることもできる他、ページモードでのセクション/サブセクション、あるいは背景または前面レイヤーにアンカーするkともできます)。

これらの属性の詳細については*4D Write Pro属性* の章を参照してください。

新しいテキストボックスは*pageNum* 引数で指定されたページ番号にのみレンダリングされるので、以下の場合にはレンダリングされない場合があります:

* 渡されたページ番号が存在しない場合
* カレントの表示モードが埋め込みまたは下書きモードの場合

しかしながら、テキストボックスがレンダリングされていない場合でも、テキストボックスそのものは存在し、ドキュメントに属しています。

#### 例題 1 

デフォルトの、空のテキストボックスを作成したい場合を考えます:

```4d
 $textBox:=WP New text box(WParea;1)
```

実行した結果:

![](../../assets/en/WritePro/commands/pict6196750.en.png)

#### 例題 2 

手紙のテンプレート内に、(コンテキストに保存されている)受取人の住所を表示するテキストボックスを追加したい場合を考えます:

```4d
  // #1 テキストボックスを作成する
 $textBox:=WP New text box(WParea;1)
 
  // #2 テキストボックスを属性を必要に応じて定義する
 WP SET ATTRIBUTES($textBox;wk id;"AddressArea")
 WP SET ATTRIBUTES($textBox;wk anchor origin;wk paper box)
 WP SET ATTRIBUTES($textBox;wk anchor horizontal align;wk left;wk vertical align;wk top)
 WP SET ATTRIBUTES($textBox;wk anchor horizontal offset;$form.offsetX.values[$form.offsetX.index])
 WP SET ATTRIBUTES($textBox;wk anchor vertical offset;$form.offsetY.values[$form.offsetY.index])
 WP SET ATTRIBUTES($textBox;wk width;$form.width.values[$form.width.index])
 WP SET ATTRIBUTES($textBox;wk height;$form.height.values[$form.height.index])
 WP SET ATTRIBUTES($textBox;wk padding;$form.padding.values[$form.padding.index]) // inside margins
 WP SET ATTRIBUTES($textBox;wk border style;wk dashed;wk border color;"Blue";wk border width;"1pt";wk border radius;"10pt")
 WP SET ATTRIBUTES($textBox;wk vertical align;wk center)
 
  // #3: テキストボックス内のフォーミュラを定義
 WP INSERT FORMULA($textBox;Formula(This.data.fullName);wk append)
 WP INSERT BREAK($textBox;wk paragraph break;wk append)
 WP INSERT FORMULA($textBox;Formula(This.data.fullAddress);wk append)
 
  // #4: テキストボックスのコンテンツのスタイルを設定
 WP SET ATTRIBUTES($textBox;wk font;"Arial";wk font bold;wk true;wk font size;"18pt")
```

実行した結果:

![](../../assets/en/WritePro/commands/pict6196766.en.png)

#### 参照 

[WP DELETE TEXT BOX](wp-delete-text-box.md)  