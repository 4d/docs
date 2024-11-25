---
id: get-menu-item-mark
title: Get menu item mark
slug: /commands/get-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item mark.Syntax-->**Get menu item mark** ( *menu* ; *menuItem* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item mark.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| process | Integer | &#8594;  | プロセス番号 |
| 戻り値 | Text | &#8592; | カレントメニュー項目のマーク |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get menu item mark.Summary-->Get menu item mark コマンドは、*menu*引数にメニュー番号またはメニュー参照で指定したメニュー中、*menuItem*引数にメニュー項目番号で指定したメニュー項目の、チェックマークを返します。<!-- END REF-->*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*process*引数を省略すると、Get menu item markコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

メニュー項目にチェックマークがないか、*menuItem* 引数が階層サブメニューを指す場合、Get menu item mark は空の文字列を返します。

**Note:** Macintosh と Windows におけるチェックマークの議論については、コマンド [SET MENU ITEM MARK](set-menu-item-mark.md "SET MENU ITEM MARK")の説明を参照してください。

#### 例題 

以下の例題は、メニュー項目のチェックマークを切り替えます:

```4d
 SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))
```

#### 参照 

[SET MENU ITEM MARK](set-menu-item-mark.md)  