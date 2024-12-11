---
id: delete-menu-item
title: DELETE MENU ITEM
slug: /commands/delete-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DELETE MENU ITEM.Syntax-->**DELETE MENU ITEM** ( *menu* ; *menuItem* {; *process*} )<!-- END REF-->
<!--REF #_command_.DELETE MENU ITEM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| process | Integer | &#8594;  | プロセス参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELETE MENU ITEM.Summary-->DELETE MENU ITEM コマンドは、*menu*引数にメニュー番号またはメニュー参照で指定したメニューから、*menuItem*引数にメニュー項目番号で指定したメニュー項目を削除します。<!-- END REF-->*menuItem*に-1を渡すと、*menu*に最後に追加された項目を指定します。

*menu* and *menuItem*で指定されたメニュー項目が、[Create menu](create-menu.md "Create menu") コマンド等を使用して作成され、参照で管理されるメニューの場合、DELETE MENU ITEM は*menu*中の*menuItem* のインスタンスのみを削除します。*menuItem*に参照されるサブメニューはメモリ中に引き続き存在します。参照により管理されるメニューを削除するためには[RELEASE MENU](release-menu.md "RELEASE MENU") コマンドを使用しなければなりません。  
このコマンドは[Create menu](create-menu.md "Create menu") コマンドを使用して作成され、[SET MENU BAR](set-menu-bar.md "SET MENU BAR") コマンドでインストールされたメニューバーにも使用できます。

オプション引数*process*を省略すると、DELETE MENU ITEMコマンドはカレントプロセスのメニューバーに適用されます。*process*を指定した場合は、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

**Note:** ユーザインタフェースの一貫性を保つため、項目のないメニューを保持してはいけません。

#### 参照 

[APPEND MENU ITEM](append-menu-item.md)  
[INSERT MENU ITEM](insert-menu-item.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 413 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


