---
id: count-menu-items
title: Count menu items
slug: /commands/count-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.Count menu items.Syntax-->**Count menu items** ( *menu* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Count menu items.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| process | Integer | &#8594;  | プロセス参照番号 |
| 戻り値 | Integer | &#8592; | メニュー中のメニュー項目数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Count menu items.Summary-->Count menu items コマンドは、*menu*引数に渡されたメニュー番号または参照を持つメニュー内にあるメニュー項目の数を返します。<!-- END REF-->

*process* 引数を省略すると、Count menu items はカレントプロセスのメニューに適用されます。そうでない場合、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡すと、*process* 引数は意味を持たず、無視されます。

#### 参照 

[Count menus](count-menus.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 405 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


