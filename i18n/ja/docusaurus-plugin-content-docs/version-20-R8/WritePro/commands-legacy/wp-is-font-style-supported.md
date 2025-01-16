---
id: wp-is-font-style-supported
title: WP Is font style supported
slug: /WritePro/commands/wp-is-font-style-supported
displayed_sidebar: docs
---

<!--REF #_command_.WP Is font style supported.Syntax-->**WP Is font style supported** ( *targetObj* ; *wpFontStyle* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Is font style supported.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素 |
| wpFontStyle | Integer | &#8594;  | フォントスタイル定数 |
| 戻り値 | Boolean | &#8592; | wpFontStyleがサポートされている部分がレンジ内にあればTrue、それ以外はFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Is font style supported.Summary-->**WP Is font style supported**コマンドは引数で指定したレンジオブジェクトのどこかが*wpFontStyle*スタイルをサポートする場合、Trueを返します。<!-- END REF-->

*targetObj* 引数には有効な4D Write proレンジオブジェクトを渡して下さい。

* レンジ
* 要素(表/行/段落/インライン画像/本文/ヘッダー/フッター)

*wpFontStyle*引数には、"4D Write Pro"定数テーマ内にある以下のスタイル定数のうちいずれか一つを渡します:

| 定数                        | 型   | 値                    | コメント                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | --- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk font bold              | 文字列 | fontBold             | テキストの太さを指定します(利用可能なフォントスタイルによります)。取り得る値は以下の通りです:<br/>wk true を指定すると、選択された文字を太字フォントスタイルへと設定します。*WP GET ATTRIBUTES*コマンドを使用するとき、選択された文字のうち少なくとも1文字が太字フォントスタイルをサポートする場合、wk trueが返されます。wk false (デフォルト)を指定すると、選択された文字から太字フォントスタイルを除去します。*WP GET ATTRIBUTES*コマンドを使用するとき、選択された文字がどれも太字フォントスタイルをサポートしない場合、wk falseが返されます。                 |
| wk font italic            | 文字列 | fontItalic           | テキストの、イタリックスタイルを指定します(利用可能なフォントスタイルによります)。取り得る値は以下の通りです:<br/>wk true は選択された文字をイタリック体あるいは斜体スタイルに設定します。*WP GET ATTRIBUTES*コマンドは選択された文字のうち少なくとも一つ以上の文字がイタリック体あるいは斜体フォントスタイルをサポートする場合、wk trueが返されます。wk false (デフォルト)は選択された文字のうちイタリック体あるいは斜体フォントスタイルがある場合にはそれらを除去します。コマンドは選択された文字のうちイタリック体あるいは斜体フォントスタイルをサポートする文字がない場合、wk falseが返されます。 |
| wk text linethrough style | 文字列 | textLinethroughStyle | テキストの打ち消し線のスタイルを(あれば)指定します。取り得る値は以下の通りです:<br/>wk none (デフォルト): なしwk solid: 実線wk dotted: 点線wk dashed: 破線wk double: 二重線wk semi transparent: グレーの線 (他のスタイルと組み合わせる事が可能です)wk word: 単語にのみ線を描画します (空白のスペースは描画しません；他のスタイルと組み合わせる事が可能です)                                                                                                   |
| wk text underline style   | 文字列 | textUnderlineStyle   | テキストの下線のスタイルを(あれば)指定します。取り得る値は以下の通りです:<br/>wk none (デフォルト): なしwk solid: 実線wk dotted: 点線wk dashed: 破線wk double: 二重線wk semi transparent: グレーの下線 (他の線スタイルと組み合わせる事が可能です)wk word: 単語にのみ下線を描画します (空白のスペースは描画しません；他の線スタイルと組み合わせる事が可能です)                                                                                                  |

一般的にこのコマンドは、選択されたテキストに基づいたスタイルオプションを提供するポップアップメニューなどのカスタムのインターフェースオブジェクトをデベロッパーが実装する目的で提供されています。
