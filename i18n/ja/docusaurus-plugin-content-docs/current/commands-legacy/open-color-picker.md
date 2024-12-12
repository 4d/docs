---
id: open-color-picker
title: OPEN COLOR PICKER
slug: /commands/open-color-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN COLOR PICKER.Syntax-->**OPEN COLOR PICKER** {( *textOrBackground* )}<!-- END REF-->
<!--REF #_command_.OPEN COLOR PICKER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| textOrBackground | Integer | &#8594;  | 0または省略 = テキストカラーを選択、1 = テキスト背景色を選択 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OPEN COLOR PICKER.Summary-->**OPEN COLOR PICKER**コマンドは、システムのカラーピッカーダイアログボックスを表示させます。<!-- END REF-->

**Note:** これはWindows環境下ではモーダルなダイアログボックスですが、OS X環境下ではモーダルではありません。

ユーザーが色を選択しダイアログボックスを決定すると、選択した色は、フォーカスがあるオブジェクトの「ピッカーの使用を許可」プロパティにチェックが入っている場合、そのオブジェクトのカレントのテキストセレクションに適用されます(*Design Reference* マニュアルを参照して下さい)。

*textOrBackground* 引数に0を渡すかこの引数を省略した場合、選択した色はテキストへと適用されます。*textOrBackground*に1を渡した場合、選択した色はテキストの背景に適用されます。

色が変更されると、オブジェクトに対して On After Edit フォームイベントが生成されます。

#### 参照 

[OPEN FONT PICKER](open-font-picker.md)  