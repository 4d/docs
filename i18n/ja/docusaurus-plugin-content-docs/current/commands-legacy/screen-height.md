---
id: screen-height
title: Screen height
slug: /commands/screen-height
displayed_sidebar: docs
---

<!--REF #_command_.Screen height.Syntax-->**Screen height** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Screen height.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | Windows: アプリケーションウィンドウの高さ または*が指定されている場合、画面の高さ Macintosh: メイン画面の高さ |
| 戻り値 | Integer | &#8592; | ピクセル数で表される高さ |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Screen height.Summary-->Windowsでは、Screen heightは、4Dアプリケーションウィンドウ(MDIウィンドウ) の高さを返します。<!-- END REF-->任意の引数*\** を指定した場合、Screen heightは画面の高さを返します。

Macintoshでは、Screen height はメイン画面の高さを返します。メイン画面とは、メニューバーがある画面のことです。

#### 参照 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen width](screen-width.md)  