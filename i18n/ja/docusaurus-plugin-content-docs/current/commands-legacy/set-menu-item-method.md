---
id: set-menu-item-method
title: SET MENU ITEM METHOD
slug: /commands/set-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM METHOD.Syntax-->**SET MENU ITEM METHOD** ( *menu* ; *menuItem* ; *methodName* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM METHOD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| methodName | Text | &#8594;  | メソッド名 |
| process | Integer | &#8594;  | プロセス番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SET MENU ITEM METHOD.Summary-->SET MENU ITEM METHOD コマンドは、*menu*と*menuItem*引数で指定されたメニュー項目に関連付ける4Dプロジェクトメソッドを変更するために使用します。<!-- END REF-->  
*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*menu*にはメニュー参照 ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) またはメニュー番号を渡します。メニュー参照を渡す場合、コマンドはすべてのプロセスのすべてのインスタンスに適用されます。この場合*process*引数は渡されても無視されます。メニュー番号を渡す場合、コマンドはカレントプロセスのメインメニューバー中の対応するメニューに適用されます。他のプロセスを指定したい場合、オプションの*process* 引数にその番号を渡します。

*method*には、4Dメソッド名を文字列で渡します。

**Note:** メニューが階層サブメニューのタイトルに対応する場合、メニューが選択されてもメソッドは呼び出されません。

#### 例題 

[SET MENU BAR](set-menu-bar.md "SET MENU BAR") コマンドの例題参照

#### 参照 

[Get menu item method](get-menu-item-method.md)  