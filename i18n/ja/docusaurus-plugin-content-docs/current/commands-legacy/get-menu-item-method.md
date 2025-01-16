---
id: get-menu-item-method
title: Get menu item method
slug: /commands/get-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item method.Syntax-->**Get menu item method** ( *menu* ; *menuItem* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| process | Integer | &#8594;  | プロセス番号 |
| 戻り値 | Text | &#8592; | メソッド名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get menu item method.Summary-->Get menu item method コマンドは、*menu*と*menuItem*引数で指定されたメニュー項目に関連付けられた4Dプロジェクトメソッド名を返します。<!-- END REF-->  
*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*menu*にはメニュー参照 ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) またはメニュー番号を渡します。メニュー参照を渡す場合、*process* 引数は必要なく、渡されても無視されます。メニュー番号を渡す場合、コマンドはカレントプロセスのメインメニューバー中の対応するメニューを考慮します。他のプロセスを指定したい場合、オプションの*process* 引数にその番号を渡します。

コマンドは4Dメソッド名を文字列 (式) で返します。メニュー項目にメソッドが割り当てられていない場合、コマンドは空の文字列を返します。

#### 参照 

[SET MENU ITEM METHOD](set-menu-item-method.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 981 |
| スレッドセーフである | &cross; |


