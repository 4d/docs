---
id: open-font-picker
title: OPEN FONT PICKER
slug: /commands/open-font-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN FONT PICKER.Syntax-->**OPEN FONT PICKER**<!-- END REF-->
<!--REF #_command_.OPEN FONT PICKER.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OPEN FONT PICKER.Summary-->**OPEN FONT PICKER**コマンドは、システムのフォントピッカーダイアログボックスを表示させます。<!-- END REF-->

**Note:** これはWindows環境下ではモーダルなダイアログボックスですが、OS X環境下ではモーダルではありません。

ユーザーがフォントまたはスタイルを選択しダイアログボックスを決定すると、選択した変更はフォーカスがあるオブジェクトの「ピッカーの使用を許可」プロパティにチェックが入っている場合、そのオブジェクトのカレントのテキストセレクションに適用されます(*Design Reference* マニュアルを参照して下さい)。それ以外の場合、コマンドはなにもしません。

色が変更されると、オブジェクトに対して On After Edit フォームイベントが生成されます。

#### 例題 

フォーム内にて、ユーザーがテキスト変数エリアのフォントまたはスタイルを変更できるように、フォントピッカーを表示するボタンを追加したい場合を考えます。以下の点に確認して下さい:

* テキスト変数には"フォント/カラービッカーを許可"プロパティがチェックされている事
* ボタンの"フォーカス可"プロパティがチェックが外されている事

ボタンのコードは以下のようになります:

```4d
 Case of
    :(Form event code=On Clicked) //v17 以前ではForm event を使用すること
       GOTO OBJECT(textVar) //変数にフォーカスをあてる
       OPEN FONT PICKER
 End case
```

#### 参照 

[OPEN COLOR PICKER](open-color-picker.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1303 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


