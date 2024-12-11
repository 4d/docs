---
id: set-menu-item-mark
title: SET MENU ITEM MARK
slug: /commands/set-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM MARK.Syntax-->**SET MENU ITEM MARK** ( *menu* ; *menuItem* ; *mark* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM MARK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| mark | Text | &#8594;  | 新しいメニュー項目マーク |
| process | Integer | &#8594;  | プロセス参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET MENU ITEM MARK.Summary-->SET MENU ITEM MARK コマンドは、*menu*引数にメニュー番号またはメニュー参照で指定したメニュー中、*menuItem*引数にメニュー項目番号で指定したメニュー項目のチェックマークを、*mark*に渡した最初の文字に変更します。<!-- END REF-->

*process*引数を省略すると、SET MENU ITEM MARKコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。 

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

空の文字列を渡すと、メニュー項目からチェックマークが取り除かれます。そうでなければ:

* Macintoshでは、文字列の最初の文字がメニュー項目のマークになります。通常はMacintoshメニューのマークであるChar**(18)**を渡します。
* Windowsでは標準のチェックマークが割り当てられます。

#### 例題 

[Get menu item mark](get-menu-item-mark.md "Get menu item mark") コマンドの例題を参照

#### 参照 

[Get menu item mark](get-menu-item-mark.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 208 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


