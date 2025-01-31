---
id: wp-get-view-properties
title: WP Get view properties
slug: /WritePro/commands/wp-get-view-properties
displayed_sidebar: docs
---

<!--REF #_command_.WP Get view properties.Syntax-->**WP Get view properties** ( * ; *wpArea* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get view properties.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: wpAreaはフォームオブジェクト名(文字列) 省略時: wpArea はオブジェクトフィールドまたは変数(ドキュメント) |
| wpArea | Text, Object | &#8594;  | フォームオブジェクト名(* 指定時)または4D Write Proオブジェクト変数またはフィールド(* 省略時) |
| 戻り値 | Object | &#8592; | カレントビュープロパティ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get view properties.Summary-->**WP Get view properties** コマンドは、*wpArea* 引数で指定した4D Write Pro エリアのカレントのビュープロパティを返します。<!-- END REF-->

任意の *\** 引数を渡した場合、*wpArea* 引数でフォームオブジェクト名(文字列)で指定します。省略時には*wpArea* 引数で4D Write Pro ドキュメント(オブジェクト変数またはフィールド)を指定します。このコマンドは*wpArea* で指定したエリアがフォームオブジェクトまたはフォームページに割り当てられている(つまりフォーム内に表示されている)場合にのみ使用できます。4D Write Pro ドキュメントが複数のフォームオブジェクトに表示されている場合、どのビューの設定を取得するのかを定義するには *\** 引数を使用する必要があります。

4D Write Pro エリアのビュープロパティは、以下の方法で定義することが可能です:

* フォームレベルではプロパティリストで定義
* [WP SET VIEW PROPERTIES](wp-set-view-properties.md) コマンドを使用することでセッション中に動的に定義

**返されるオブジェクト**

返されるオブジェクトには、4D Write Pro エリアの全てのビュープロパティを格納したオブジェクトが返され、そのプロパティにはカレントの値が格納されています:

| 定数                           | 値                      | コメント                                                                                                                                                                                                                                                             |
| ---------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk display formula as symbol | displayFormulaAsSymbol | フォーミュラ参照を ![](../../assets/en/WritePro/commands/pict6013182.en.png) 記号として表します。これはフォーミュラが参照として表示されている場合にのみ動作します(wk visible references 参照)。取り得る値: True/False                                                                                                       |
| wk formula highlight         | formulaHighlight       | フォーミュラハイライトのビューモード。取りうる値: wk references (デフォルト): 参照として表示されているフォーミュラがハイライトされます wk values: 値として表示されているフォーミュラがハイライトされます wk always: 表示モードに関わらず、フォーミュラは常にハイライトされます wk never: 表示モードに関わらず、フォーミュラはハイライトされません ハイライトされるフォーミュラのカラーはwk formula highlight color で設定することができます。 |
| wk formula highlight color   | formulaHighlightColor  | ハイライトされたフォーミュラのカラー(wk formula highlight 参照)。取りうる値: CSS カラー文字列("#010101" または "#FFFFFF" またh "red") 4D カラー倍長整数値                                                                                                                                                     |
| wk page view mode            | pageMode               | スクリーン上のフォームエリアに4D Write Pro ドキュメントを表示するモードです。取りうる値(文字列): "draft": 基本的なドキュメントプロパティだけの下書きモード "page": もっとも完全なビューモードで、ページのアウトライン、向き、マージン、改ページ、ヘッダー、フッターなどが表示されます。 "embedded": 埋め込みエリアに適したビューモード                                                                      |
| wk resolution                | dpi                    | 4D Write Pro エリアのコンテンツの画面解像度。取りうる値: wk auto (0) 1より大きい数字                                                                                                                                                                                                         |
| wk spell enable              | spellEnabled           | スペルチェックを有効化します。取りうる値:True/False                                                                                                                                                                                                                                  |
| wk visible background        | visibleBackground      | 背景画像と背景色の両方を表示します(ページ、または埋め込みビューモードでのみ表示されるエフェクトです)。取りうる値: True/False                                                                                                                                                                                            |
| wk visible empty images      | visibleEmptyImages     | 読み込めない、あるいは計算できない画像(空の画像またはサポートされていないフォーマットの画像)に対してデフォルトの黒い四角形を表示または書き出しします。取り得る値: True/False 値がFalse の場合、たとえ画像に境界線、幅、高さ、背景などが設定されてあっても空の画像要素は全く表示されないという点に注意して下さい。これはインライン画像のページレイアウトに影響する可能性があります。                                                             |
| wk visible footers           | visibleFooters         | フッターを表示または書き出しします(表示用においてはページビューモードでのみ表示されるエフェクトです)。取りうる値: True/False                                                                                                                                                                                            |
| wk visible headers           | visibleHeaders         | ヘッダーを表示または書き出しします(表示用においてはページビューモードでのみ表示されるエフェクトです)。取りうる値: True/False                                                                                                                                                                                            |
| wk visible hidden characters | visibleHiddenChars     | 非表示文字を表示します。取りうる値: True/False                                                                                                                                                                                                                                    |
| wk visible horizontal ruler  | visibleHorizontalRuler | 垂直ルーラーを表示します。取りうる値: True/False                                                                                                                                                                                                                                   |
| wk visible HTML WYSIWYG      | htmlWYSIWIGEnabled     | HTML WYSISYG ビューを有効化します。取りうる値: True/False                                                                                                                                                                                                                        |
| wk visible page frames       | visiblePageFrames      | ページフレームを表示します(ページビューモードでのみ表示されるエフェクトです)。取りうる値: True/False                                                                                                                                                                                                        |
| wk visible references        | visibleReferences      | ドキュメントに挿入されている4D 式を参照として表示または書き出しします。取りうる値: True/False                                                                                                                                                                                                           |
| wk visible vertical ruler    | visibleVerticalRuler   | 垂直ルーラーを表示します(ページビューモードでのみ表示されるエフェクトです)。取りうる値: True/False                                                                                                                                                                                                         |
| wk zoom                      | zoom                   | 4D Write Pro エリアのコンテンツを表示するズーム倍率。取りうる値: 1より大きい数値                                                                                                                                                                                                                 |

#### 例題 

4D Write Pro エリア内にて、ページモードのときのみルーラーを表示したい場合を考えます:

```4d
 var $viewProps : Object
 $viewProps:=WP Get view properties(*;"4DWPArea")
 If($viewProps.pageMode="page")
    $viewProps.visibleHorizontalRuler:=True
    $viewProps.visibleVerticalRuler:=True
 Else
    $viewProps.visibleHorizontalRuler:=False
 End if
 WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)
```

#### 参照 

[WP SET VIEW PROPERTIES](wp-set-view-properties.md)  