---
id: svg-show-element
title: SVG SHOW ELEMENT
slug: /commands/svg-show-element
displayed_sidebar: docs
---

<!--REF #_command_.SVG SHOW ELEMENT.Syntax-->**SVG SHOW ELEMENT** ( {* ;} *pictureObject* ; *id* {; *margin*} )<!-- END REF-->
<!--REF #_command_.SVG SHOW ELEMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: pictureObjectはオブジェクト名 (文字) <br/>省略時: pictureObjectは変数 |
| pictureObject | Picture | &#8594;  | オブジェクト名 (* 指定時) または変数またはフィールド (* 省略時) |
| id | Text | &#8594;  | 表示する要素のID属性 |
| margin | Integer | &#8594;  | 表示のマージン (デフォルトでピクセル単位) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SVG SHOW ELEMENT.Summary-->SVG SHOW ELEMENT コマンドは、*id*引数で指定した"id"属性を持つ要素を表示するように、*pictureObject* SVGドキュメントを移動します。<!-- END REF-->. 

オプションの *\** 引数を渡すと、*pictureObject*引数はオブジェクト名 (文字) です。この場合、コマンドはオブジェクトにアタッチされた描画ピクチャに適用されます。この引数を渡さないと、*pictureObject*引数は変数やフィールドであり、変数参照 (変数オブジェクトのみ) またはフィールド参照を渡します。この場合この変数を使用するすべてのオブジェクトに描画されたピクチャに適用されます (最初に描画されたピクチャを除きます)。

コマンドはSVGドキュメントを移動し、境界がバインドされた四角で定義されるすべてのオブジェクトが表示されるようにします。*margin*引数を使用して、ドキュメントの縁からの、オブジェクトを表示するマージンを指定できます。言い換えればバインドした四角は*margin*ピクセルだけ高さと幅が大きくなります。デフォルトで移動値は4ピクセルです。

このコマンドはスクロールバー付きの"左上"表示モードのみで効果があります。

フォームのコンテキストでコマンドが実行されていないか、無効な *pictureObject* が渡された場合、*OK* 変数に0が設定されます。コマンドが正しく実行されると1が設定されます。 
