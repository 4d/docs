---
id: disable-menu-item
title: DISABLE MENU ITEM
slug: /commands/disable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DISABLE MENU ITEM.Syntax-->**DISABLE MENU ITEM** ( *menu* ; *menuItem* {; *process*} )<!-- END REF-->
<!--REF #_command_.DISABLE MENU ITEM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| process | Integer | &#8594;  | プロセス参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DISABLE MENU ITEM.Summary-->DISABLE MENU ITEM コマンドは、*menu*引数にメニュー番号またはメニュー参照で指定したメニュー中、*menuItem*引数にメニュー項目番号で指定したメニュー項目を選択不可にします。<!-- END REF-->*menuItem*に-1を渡すと、*menu*に最後に追加された項目を指定します。

オプション引数*process*を省略すると、DISABLE MENU ITEMコマンドはカレントプロセスのメニューバーに適用されます。*process*を指定した場合は、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

*menuItem* 引数が階層サブメニューを指す場合、このメニューのすべての項目とサブメニューが選択不可になります。このコマンドは[Create menu](create-menu.md "Create menu") コマンドを使用して作成され、[SET MENU BAR](set-menu-bar.md "SET MENU BAR") コマンドでインストールされたメニューバーにも使用できます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

**Tip:** 一度にすべての項目の選択可/不可を切り替えるには、*menuItem*に0を渡します。

#### 参照 

[ENABLE MENU ITEM](enable-menu-item.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 150 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


