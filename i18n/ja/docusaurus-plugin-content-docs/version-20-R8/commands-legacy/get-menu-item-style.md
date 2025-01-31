---
id: get-menu-item-style
title: Get menu item style
slug: /commands/get-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item style.Syntax-->**Get menu item style** ( *menu* ; *menuItem* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item style.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| process | Integer | &#8594;  | プロセス参照番号 |
| 戻り値 | Integer | &#8592; | 現在のメニュー項目スタイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get menu item style.Summary-->Get menu item style コマンドは、*menu*引数にメニュー番号またはメニュー参照で指定したメニュー中、*menuItem*引数にメニュー項目番号で指定したメニュー項目のフォントスタイルを返します。<!-- END REF-->*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*process*引数を省略すると、Get menu item styleコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

Get menu item style はテーマの定義済み定数 (ひとつまたは和) を返します:

| 定数        | 型    | 値 |
| --------- | ---- | - |
| Plain     | 倍長整数 | 0 |
| Bold      | 倍長整数 | 1 |
| Italic    | 倍長整数 | 2 |
| Underline | 倍長整数 | 4 |

#### 例題 

メニューが太字で表示されるかどうかをテストするには、以下のように書きます:

```4d
 If((Get menu item style($vlMenu;$vlItem)&Bold)#0)
  //...
 End if
```

#### 参照 

[SET MENU ITEM STYLE](set-menu-item-style.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 426 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


