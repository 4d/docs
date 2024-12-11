---
id: set-menu-item
title: SET MENU ITEM
slug: /commands/set-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM.Syntax-->**SET MENU ITEM** ( *menu* ; *menuItem* ; *itemText* {; *process*}{; *} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| itemText | Text | &#8594;  | メニュー項目の新しいテキスト |
| process | Integer | &#8594;  | プロセス参照番号 |
| * | 演算子 | &#8594;  | 指定時: メタ文字を標準文字として扱う |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET MENU ITEM.Summary-->SET MENU ITEM コマンドは、*menu*引数にメニュー番号またはメニュー参照で指定したメニュー中、*menuItem*引数にメニュー項目番号で指定したメニュー項目のテキストを、*itemText*に渡したテキストに変更します。<!-- END REF-->*menuItem*に-1を渡すと、*menu*に最後に追加された項目を指定したことになります。

*\** 引数を渡さない場合、*itemText*に含められた特別文字 (*;*や *!*) はメタ文字として扱われます。例えばメニュー項目を区切り線に設定する場合、"-"文字を*itemText*に渡します。  
*\** 引数を渡すと特別文字は標準の文字として扱われます。これらの文字については[APPEND MENU ITEM](append-menu-item.md "APPEND MENU ITEM") コマンドの説明を参照してください。 

*process*引数を省略すると、SET MENU ITEMコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process*引数は意味を持たず、無視されます。

#### 参照 

[APPEND MENU ITEM](append-menu-item.md)  
[Get menu item](get-menu-item.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 348 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


