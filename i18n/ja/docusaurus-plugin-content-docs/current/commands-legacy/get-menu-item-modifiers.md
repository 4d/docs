---
id: get-menu-item-modifiers
title: Get menu item modifiers
slug: /commands/get-menu-item-modifiers
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item modifiers.Syntax-->**Get menu item modifiers** ( *menu* ; *menuItem* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item modifiers.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| process | Integer | &#8594;  | プロセス番号 |
| 戻り値 | Integer | &#8592; | メニュー項目に割り当てられたモディファイアキー |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get menu item modifiers.Summary-->Get menu item modifiers コマンドは、*menu*と*menuItem*引数で指定したメニュー項目の、標準ショートカットに割り当てられた追加のモディファイアキーを返します。<!-- END REF-->  
標準ショートカットはCtrl (Windows) または Command (Macintosh) とカスタムキーの組み合わせで構成されます。標準ショートカットは[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md "SET MENU ITEM SHORTCUT") と [Get menu item key](get-menu-item-key.md "Get menu item key")コマンドを使用して管理されます。

追加のモディファイアキーはShift キーおよびOption (Mac OS) /Alt (Windows) キーです。これらのモディファイアは、すでに標準ショートカットが指定されているときにのみ使用されます。

このコマンドから返される番号は、追加のモディファイアキーのコードに対応します。キーのコードは以下のとおりです:

* **Shift**\= 512
* **Option** (Mac OS) または **Alt** (Windows) = 2048

両方のキーが使用されているとき、これらの値は加算されます。

**Note:** 返された値は、“” テーマのShift key mask と Option key mask 定数を使用して評価できます。

メニュー項目にモディファイアが割り当てられていないばあ、コマンドは0を返します。  
*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*menu*にはメニュー参照 ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) またはメニュー番号を渡します。メニュー参照を渡す場合、*process* 引数は必要なく、渡されても無視されます。メニュー番号を渡す場合、コマンドはカレントプロセスのメインメニューバー中の対応するメニューを考慮します。他のプロセスを指定したい場合、オプションの*process* 引数にその番号を渡します。

#### 例題 

[Get menu item key](get-menu-item-key.md "Get menu item key") コマンドの例題参照

#### 参照 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  