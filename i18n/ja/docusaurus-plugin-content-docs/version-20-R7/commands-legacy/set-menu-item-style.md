---
id: set-menu-item-style
title: SET MENU ITEM STYLE
slug: /commands/set-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM STYLE.Syntax-->**SET MENU ITEM STYLE** ( *menu* ; *menuItem* ; *itemStyle* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM STYLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| itemStyle | Integer | &#8594;  | 新しいメニュー項目スタイル |
| process | Integer | &#8594;  | プロセス参照番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SET MENU ITEM STYLE.Summary-->SET MENU ITEM STYLE コマンドは、*menu*引数にメニュー番号またはメニュー参照で指定したメニュー中、*menuItem*引数にメニュー項目番号で指定したメニュー項目のフォントスタイルを、*itemStyle*に変更します。<!-- END REF-->

*process*引数を省略すると、SET MENU ITEM STYLEコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。 

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

*itemStyle* 引数には項目のフォントスタイルを指定します。""テーマの以下の定義済み定数と1つあるいは加算して渡します:

| 定数        | 型    | 値 |
| --------- | ---- | - |
| Bold      | 倍長整数 | 1 |
| Italic    | 倍長整数 | 2 |
| Plain     | 倍長整数 | 0 |
| Underline | 倍長整数 | 4 |

  

#### 参照 

[Get menu item style](get-menu-item-style.md)  