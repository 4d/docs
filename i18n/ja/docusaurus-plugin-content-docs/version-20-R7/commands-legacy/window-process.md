---
id: window-process
title: Window process
slug: /commands/window-process
displayed_sidebar: docs
---

<!--REF #_command_.Window process.Syntax-->**Window process** {( *window* )} : Integer<!-- END REF-->
<!--REF #_command_.Window process.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号 |
| 戻り値 | Integer | &#8592; | プロセス参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Window process.Summary-->Window process コマンドは*window*に渡されたウィンドウが実行されているプロセスの番号を返します。<!-- END REF-->ウィンドウが存在しない場合0が返されます。

*window* 引数を省略すると、Window processは現在の最前面ウィンドウのプロセスを返します。

#### 参照 

[Current process](current-process.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 446 |
| スレッドセーフである | &cross; |


