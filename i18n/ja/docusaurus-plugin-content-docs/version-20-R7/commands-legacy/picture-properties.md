---
id: picture-properties
title: PICTURE PROPERTIES
slug: /commands/picture-properties
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE PROPERTIES.Syntax-->**PICTURE PROPERTIES** ( *picture* ; *width* ; *height* {; *hOffset* {; *vOffset* {; *mode*}}} )<!-- END REF-->
<!--REF #_command_.PICTURE PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | 情報を取得するピクチャ |
| width | Real | &#8592; | ピクチャの幅 (ピクセル) |
| height | Real | &#8592; | ピクチャの高さ (ピクセル) |
| hOffset | Integer | &#8592; | バックグランド表示の時の水平方向のオフセット |
| vOffset | Integer | &#8592; | バックグランド表示の時の垂直方向のオフセット |
| mode | Integer | &#8592; | バックグランド表示の時の転送モード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PICTURE PROPERTIES.Summary-->PICTURE PROPERTIES コマンドは、*picture*に渡したピクチャに関する情報を返します。<!-- END REF-->

引数*width*と*height*には、ピクチャの幅と高さを返します。

オプション引数*hOffset*、*vOffset*、*mode*には、フォーム上でバックグラウンド 表示フォーマットで表示された際のピクチャの水平、垂直位置と転送モードを返します。

#### 参照 

[Picture size](picture-size.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 457 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


