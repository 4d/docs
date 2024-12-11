---
id: erase-window
title: ERASE WINDOW
slug: /commands/erase-window
displayed_sidebar: docs
---

<!--REF #_command_.ERASE WINDOW.Syntax-->**ERASE WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.ERASE WINDOW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号, または 省略時、カレントプロセスの最前面ウィンドウ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ERASE WINDOW.Summary-->ERASE WINDOW コマンドは*window*で指定されたウィンドウの内容をクリアします。<!-- END REF-->

*window* 引数を省略すると、ERASE WINDOWはカレントプロセスの最前面ウィンドウの内容をクリアします。

通常ERASE WINDOWは[MESSAGE](message.md "MESSAGE")と[GOTO XY](goto-xy.md "GOTO XY")と共に使用します。この場合、ERASE WINDOWはウィンドウの内容をクリアし、ウィンドウの左上 ( [GOTO XY](goto-xy.md "GOTO XY") (0; 0) ) にカーソルを移動します。 

ERASE WINDOWはウィンドウの内容をクリアします。スクリーンからウィンドウを取り除く[CLOSE WINDOW](close-window.md "CLOSE WINDOW")と混同しないようにしてください。

#### 参照 

[GOTO XY](goto-xy.md)  
[MESSAGE](message.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 160 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


