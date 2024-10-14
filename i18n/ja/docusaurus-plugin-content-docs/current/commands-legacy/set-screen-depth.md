---
id: set-screen-depth
title: SET SCREEN DEPTH
slug: /commands/set-screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SET SCREEN DEPTH.Syntax-->**SET SCREEN DEPTH** ( *depth* {; *color* {; *screen*}} )<!-- END REF-->
<!--REF #_command_.SET SCREEN DEPTH.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| depth | Integer | &srarr; | 画面の深度 (カラーの数 = 2^深度) |
| color | Integer | &srarr; | 1 = カラー画面、0 = グレイスケール |
| screen | Integer | &srarr; | 画面番号、または省略した場合には主画面(メインスクリーン) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET SCREEN DEPTH.Summary-->SET SCREEN DEPTH は、引数*screen*に渡した番号を持つ画面の深度とカラー/グレイスケールの設定を変更します。<!-- END REF-->*screen*引数を省略すると、コマンドは主画面(メインスクリーン) に対して適用されます。

引数*color*と*depth*に渡す値についての詳細は、[SCREEN DEPTH](screen-depth.md "SCREEN DEPTH")コマンドの説明を参照してください。

#### 参照 

[SCREEN DEPTH](screen-depth.md)  