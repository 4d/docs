---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** {( *process* )} : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | プロセス参照番号 |
| 戻り値 | Integer | &#8592; | カレントメニューバー中のメニュー数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Count menus.Summary-->Count menus コマンドは、メニューバー上にあるメニューの数を返します。<!-- END REF-->

*process*引数を省略すると、Count menusコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

#### 参照 

[Count menu items](count-menu-items.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 404 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


