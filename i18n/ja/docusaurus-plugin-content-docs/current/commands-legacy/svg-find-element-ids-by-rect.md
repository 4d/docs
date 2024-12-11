---
id: svg-find-element-ids-by-rect
title: SVG Find element IDs by rect
slug: /commands/svg-find-element-ids-by-rect
displayed_sidebar: docs
---

<!--REF #_command_.SVG Find element IDs by rect.Syntax-->**SVG Find element IDs by rect** ( {* ;} *pictureObject* ; *x* ; *y* ; *width* ; *height* ; *arrIDs* ) : Boolean<!-- END REF-->
<!--REF #_command_.SVG Find element IDs by rect.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: pictureObjectはオブジェクト名 (文字) <br/>省略時: pictureObjectは変数 |
| pictureObject | Picture | &#8594;  | オブジェクト名 (* 指定時) またはフィールドや変数 (* 省略時) |
| x | Integer | &#8594;  | 選択領域の左上の横座標 |
| y | Integer | &#8594;  | 選択領域の左上の縦座標 |
| width | Integer | &#8594;  | 選択領域の幅 |
| height | Integer | &#8594;  | 選択領域の高さ |
| arrIDs | Text array | &#8592; | バインドされた四角が選択領域に交差する要素のID |
| 戻り値 | Boolean | &#8592; | True = 最低1つの要素が見つかった |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SVG Find element IDs by rect.Summary-->SVG Find element IDs by rect コマンドは、 バインドされた四角が選択領域に交差するXML要素のID ("id"または"xml:id"属性) をテキストまたは文字配列の*arrIDs*配列に返します。<!-- END REF-->選択領域は*x*および*y*引数で指定されます。

最低1つの要素が見つかると、言い換えれば*arrIDs*配列が空でなければ、コマンドはTrueを返します。そうでなければFalseを返します。

このコマンドは特にインタラクティブなグラフィックインタフェースで使用されます。

オプションの *\** 引数を渡すと、*pictureObject*引数はオブジェクト名 (文字) です。この引数を渡さないと、*pictureObject*引数はフィールドまたは変数です。この場合文字列ではなくフィールドや変数の参照 (フィールドまたは変数オブジェクトのみ) を渡します。 

ピクチャフィールドや変数で作業をしている場合、コマンドはデータソースに対応するオリジナルのピクチャを使用します。しかしフォームオブジェクトで作業を行っている場合、コマンドはカレントのピクチャを使用します。このピクチャは[SVG SET ATTRIBUTE](svg-set-attribute.md "SVG SET ATTRIBUTE")コマンドを使用して変更されているかもしれませんし、フォームオブジェクトのプロパティが保持されています。  
  
*x*と*y*引数に渡される座標はピクチャの左上座標 (0, 0) からピクセル単位で表現されます。MouseXとMouseYから返される値を使用できます。これらの変数はOn Clicked、On Double ClickedやOn Mouse EnterとOn Mouse Moveフォームイベントで更新されます。

**Note:** ピクチャの座標システム中\[x;y\]は、"繰り返し"フォーマットを除き、ピクチャ表示フォーマットにかかわらず常に同じ場所をポイントします。

バインドされた四角が選択領域に重なるすべての要素が、たとえ他の要素の下になっていても、対象となります。

#### 参照 

[SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1109 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


