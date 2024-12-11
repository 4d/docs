---
id: show-window
title: SHOW WINDOW
slug: /commands/show-window
displayed_sidebar: docs
---

<!--REF #_command_.SHOW WINDOW.Syntax-->**SHOW WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.SHOW WINDOW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号または 省略時カレントプロセスの最前面ウィンドウ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SHOW WINDOW.Summary-->SHOW WINDOW コマンドは*window*に渡した参照番号のウィンドウを表示します。<!-- END REF-->この引数が省略されていると、カレントプロセスの最前面ウィンドウが表示されます。

SHOW WINDOWコマンドを使用するには、ウィンドウが[HIDE WINDOW](hide-window.md "HIDE WINDOW") コマンドを使用して隠されていなければなりません。ウィンドウがすでに表示されていればコマンドはなにも行いません。

#### 例題 

[HIDE WINDOW](hide-window.md "HIDE WINDOW") コマンドの例題参照

#### 参照 

[HIDE WINDOW](hide-window.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 435 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


