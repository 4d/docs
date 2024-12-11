---
id: get-menu-item
title: Get menu item
slug: /commands/get-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item.Syntax-->**Get menu item** ( *menu* ; *menuItem* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| process | Integer | &#8594;  | プロセス参照番号 |
| 戻り値 | Text | &#8592; | メニュー項目のテキスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get menu item.Summary-->Get menu item コマンドは、引数*menu*と*menuItem*に渡されたメニューおよびメニュー項目番号を持つメニュー項目のテキストを返します。<!-- END REF-->*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*process*引数を省略すると、Get menu itemコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

#### 参照 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM](set-menu-item.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 422 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


