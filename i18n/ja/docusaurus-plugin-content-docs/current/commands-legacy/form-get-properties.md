---
id: form-get-properties
title: FORM GET PROPERTIES
slug: /commands/form-get-properties
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET PROPERTIES.Syntax-->**FORM GET PROPERTIES** ( {*aTable* ;} *formName* ; *width* ; *height* {; *numPages* {; *fixedWidth* {; *fixedHeight* {; *title*}}}} )<!-- END REF-->
<!--REF #_command_.FORM GET PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#x1F852; | フォームが属するテーブル、省略時はデフォルトテーブル |
| formName | Text | &#x1F852; | フォーム名 |
| width | Integer | &#x1F858; | フォームの幅 (ピクセル) |
| height | Integer | &#x1F858; | フォームの高さ (ピクセル) |
| numPages | Integer | &#x1F858; | フォームのページ数 |
| fixedWidth | Boolean | &#x1F858; | True = 幅固定, False = 幅可変 |
| fixedHeight | Boolean | &#x1F858; | True = 高さ固定, False = 高さ可変 |
| title | Text | &#x1F858; | フォームのウィンドウタイトル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM GET PROPERTIES.Summary-->FORM GET PROPERTIES コマンドは*formName*フォームのプロパティを返します。<!-- END REF-->

*width*および*height*引数は、フォームの幅と高さをピクセル単位で返します。これはフォームプロパティのデフォルトウインドウサイズプロパティの値です:

* フォームサイズが**自動サイズ**の場合、幅と高さは縦横マージンを考慮に入れ、フォーム内の全オブジェクトが表示可能となるように計算されます。
* フォームサイズが**サイズ設定**の場合、幅と高さはプロパティに入力されたものになります。
* フォームサイズがオブジェクトを起点にするよう指定されている場合、幅と高さはこのオブジェクトの位置を元に計算されます。

*numPages* 引数0ページを除いたフォーム内のページ数を返します。

*fixedWidth* と *fixedHeight*には、フォームの幅と高さがサイズ変更可であるか ([False](false.md "False")) 、固定に設定されているか ([True](true.md "True")) を返します。

*title* 引数には、フォームエディターのプロパティリスト内で定義されているフォームのウインドウタイトルを返します。名前が定義されていないと*title*引数に空文字を返します。

#### 参照 

[FORM GET OBJECTS](form-get-objects.md)  
[FORM SET SIZE](form-set-size.md)  
[Open form window](open-form-window.md)  