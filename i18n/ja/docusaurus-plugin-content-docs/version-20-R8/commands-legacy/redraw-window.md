---
id: redraw-window
title: REDRAW WINDOW
slug: /commands/redraw-window
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW WINDOW.Syntax-->**REDRAW WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.REDRAW WINDOW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号, または省略時 カレントプロセスの最前面ウィンドウ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.REDRAW WINDOW.Summary-->REDRAW WINDOW コマンドは*window*に渡した参照番号を持つウィンドウのグラフィックな更新を行います。<!-- END REF-->

*window* 引数を省略すると、REDRAW WINDOWはカレントプロセスの最前面ウィンドウに適用されます。

**Note:** 4Dはウィンドウが移動、リサイズ、最前面に移動、フォームの変更、またウィンドウ中の値が変更されるたびにグラフィックの更新を処理します。このコマンドを使用することはほとんどありません。

#### 参照 

[ERASE WINDOW](erase-window.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 456 |
| スレッドセーフである | &cross; |


