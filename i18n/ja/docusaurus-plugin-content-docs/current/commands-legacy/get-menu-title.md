---
id: get-menu-title
title: Get menu title
slug: /commands/get-menu-title
displayed_sidebar: docs
---

<!--REF #_command_.Get menu title.Syntax-->**Get menu title** ( *menu* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu title.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| process | Integer | &#8594;  | プロセス参照番号 |
| 戻り値 | Text | &#8592; | メニューのタイトル |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get menu title.Summary-->Get menu title コマンドは、*menu*に渡されたメニュー番号または参照を持つメニューのタイトルを返します。<!-- END REF-->  
  
*process*引数を省略すると、Get menu titleコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

#### 参照 

[Count menus](count-menus.md)  