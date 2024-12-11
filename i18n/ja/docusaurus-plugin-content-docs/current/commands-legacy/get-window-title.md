---
id: get-window-title
title: Get window title
slug: /commands/get-window-title
displayed_sidebar: docs
---

<!--REF #_command_.Get window title.Syntax-->**Get window title** {( *window* )} : Text<!-- END REF-->
<!--REF #_command_.Get window title.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号, または 省略時はカレントプロセスの最前面ウィンドウ |
| 戻り値 | Text | &#8592; | ウィンドウタイトル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get window title.Summary-->Get window title コマンドは、*window*に渡されたウィンドウ参照番号を持つウィンドウのタイトルを返します。<!-- END REF-->ウィンドウが存在しない場合、空の文字列が返されます。 

*window* 引数を省略すると、Get window titleはカレントプロセスの最前面ウィンドウのタイトルを返します。

#### 例題 

[SET WINDOW TITLE](set-window-title.md "SET WINDOW TITLE")の例題参照

#### 参照 

[SET WINDOW TITLE](set-window-title.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 450 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


