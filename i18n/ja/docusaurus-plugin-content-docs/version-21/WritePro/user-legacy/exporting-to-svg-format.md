---
id: exporting-to-svg-format
title: Exporting to SVG format
displayed_sidebar: docs
slug: /WritePro/exporting-to-svg-format
---

[WP EXPORT DOCUMENT](../commands/wp-export-document) および [WP EXPORT VARIABLE](../commands/wp-export-variable) コマンドを使用することで 4D Write Pro ドキュメントのページをSVG フォーマットへと書き出すことができます。このページではSVG 書き出しに関する補足的な情報と注記を記載しています。

### SVG レンダリング 

SVG 画像は、ページビューモードで表示されるページ設定に応じてレンダリングされます。以下のプロパティが考慮されます:

* 背景属性(書き出される場合)
* 境界線
* 余白
* ページの向き
* パディング
* ページサイズ
* セクション(SVGレンダリングはセクション属性を考慮しますが、セクションそのものが書き出されるわけではありません)。

SVG へと書き出されるドキュメントの部分は以下の通りです:

* 本文
* インライン画像
* テキストボックス
* 題名(wk title のメタデータ)

*option* 引数によってはSVG へと書き出し可能なドキュメントの部分:

* ヘッダー
* フッター
* 参照または値(値に関しては、wk recompute formulas オプションによって、フォーミュラが書き出し前に評価されるかどうかが決定されます)
* 背景色
* 背景画像/アンカーされた画像として定義された画像

以下の要素はSVGには書き出されません:

* フォント(CSS スタイルに変換されますが、書き出されたSVGには埋め込まれません。*フォント管理* 参照)
* ブックマークへのリンク(レンダリングはされますがリンクに飛びません)
* URL へのリンク(レンダリングはされますがリンクに飛びません)
* カスタマイズされたフォーミュラのハイライト
* 埋め込みビューモードにアンカーされたテキストボックス
* メタデータ  
   * 作者  
   * 主題  
   * 作成日  
   * 編集日

### フォント管理 

フォントは書き出されたSVG には埋め込まれないため、テキストは、SVG 画像がレンダリングされたプラットフォームにおいてフォントファミリーとスタイルがサポートされている場合に限り、正しくレンダリングされます。

全てのプラットフォームにおいて(たとえフォントが利用可能ではなかったとしても)レンダリングが同じになるようにしたい場合には、4D Write Pro ドキュメントを書き出す際にwk import google fonts オプションを使用してください。

読み込まれたGoogle フォントはSVG がレンダリングされる時にネイティブなフォントを上書きします。SVG 画像を表示するプラットフォームと同じプラットフォーム上でレンダリングする場合には、wk import google fonts オプションを使用しないことが推奨されます。ネイティブのフォントを使用したレンダリングの方が常に良い結果が得られるからです。

**注:** 保存されるスタイルは太字とイタリックのみです。ネイティブのフォントスタイルとCSS 内のフォントスタイル定義(および生成されたSVG)間の100% の互換性は保障されていません。全てのプラットフォームへの配布、あるいはフォントに対するより良いWYSIWYG サポートのためには、PDF 書き出しがより適しています。この場合フォントはPDF 内に埋め込まれるからです。

### 例題 

以下の例題はドキュメントページをSVG フォーマットとして書き出し、[SVG EXPORT TO PICTURE](../../commands/svg-export-to-picture) を使用して画像プレビューを作成します。

```4d
 var $preview : Picture
 var $options : Object
 var $svgRoot : Text
 var $options : Object
 
 $options:=New object
 $options[wk max picture DPI]:=96
 WP EXPORT VARIABLE(wpDoc;$text;wk svg;$options)
 $svgRoot:=DOM Parse XML variable($text;False)
 SVG EXPORT TO PICTURE($svgRoot;$preview;Own XML data source)
```