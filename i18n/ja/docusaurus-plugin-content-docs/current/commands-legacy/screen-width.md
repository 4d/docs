---
id: screen-width
title: Screen width
slug: /commands/screen-width
displayed_sidebar: docs
---

<!--REF #_command_.Screen width.Syntax-->**Screen width** {( * )} -> 戻り値<!-- END REF-->
<!--REF #_command_.Screen width.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#x1F852; | ･･Windows: *が指定されている場合、アプリケーションウィンドウの幅、 または画面の幅 Macintosh: メイン画面の幅 |
| 戻り値 | 倍長整数 | &#x1F850; | ピクセル数で表される幅 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Screen width.Summary-->Windowsの場合、Screen width は4Dアプリケーションウィンドウ(MDIウィンドウ) の幅を返します。<!-- END REF-->任意の引数 *\** を指定した場合、Screen widthは画面の幅を返します。

Macintoshの場合、, Screen width はメイン画面の幅を返します。メイン画面とは、メニューバーのある画面のことです。

#### 参照 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen height](screen-height.md)  