---
id: set-menu-item-shortcut
title: SET MENU ITEM SHORTCUT
slug: /commands/set-menu-item-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM SHORTCUT.Syntax-->**SET MENU ITEM SHORTCUT** ( *menu* ; *menuItem* ; *itemKey* ; *modifiers* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM SHORTCUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー番号またはメニュー参照 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| itemKey | Text, Integer | &#8594;  | キーボードショートカットの文字またはキーボードショートカットの文字コード (古いシンタックス) |
| modifiers | Integer | &#8594;  | ショートカットに割り当てられたモディファイア  (キーコードが渡された時は無視) |
| process | Integer | &#8594;  | プロセス参照番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SET MENU ITEM SHORTCUT.Summary-->**SET MENU ITEM SHORTCUT** コマンドは、あるメニュー項目に新しいショートカットを割り当てます。<!-- END REF-->

メニュー項目は*menu* および *menuItem* 引数を通して定義されます。*menuItem* 引数に-1を渡すことで、*menu* 引数のメニュー内に最後に追加された項目を指定することもできます。

*itemKey* 引数には、ショートカットキーを表す文字列を渡します。新しいショートカットは、デフォルトで**Ctrl** (Windows) または **Cmd** (macOS) モディファイヤーを自動的に含みます。例えば、*itemKey* 引数に"U" を渡した場合、ショートカットは**Ctrl + U** (Windows) または **Cmd + U** (macOS) に設定されます。

**注:** *itemKey* 引数に"\[Fx\]" 形式で文字列を渡すことでファンクションキー(Fキー)を指定することができます(例: "\[F4\]")。この場合、モディファイヤーキーは何もデフォルトでは追加されません。

*modifiers* 引数には、**Shift** キーなどの追加のモディファイヤーキーを渡すことができます。これを使用することで、**Ctrl+Alt+Shift+Z** (Windows) または **Cmd+Option+Shift+Z** (macOS) のようなショートカットを定義することができます。モディファイヤーキーを何も追加したくない場合には0 を渡します。以下の定数が利用可能です:

* Command key mask は**Command** (macOS) または **Ctrl** (Windows) キーを指定
* Shift key mask は**Shift** キーを指定
* Option key mask は**Option** (macOS) または **Alt** (Windows) キーを指定

複数のモディファイヤーキーを持ったショートカットを設定するには、これらの定数を組み合わせてください。

*process* 引数を省略した場合、**SET MENU ITEM SHORTCUT** はカレントプロセスにおけるメニューバーに対して適用されます。そうでない場合、このコマンドは*process* 引数に渡された参照番号を持つプロセスのメニューバーに対して適用されます。

**注:** *menu* 引数に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu") を渡した場合、*process* 引数は何も動作せず、無視されます。

##### 互換性に関する注意 

互換性上の理由から、このコマンドは*itemKey* 引数に文字コードを受け入れることもできます(旧シンタックス)。この場合、ショートカットは自動的に**Ctrl** (Windows) または **Cmd** (macOS) をモディファイヤーキーとして含み、*modifiers* 引数に渡された値は考慮されません。

*itemKey* 引数に0(ゼロ) を渡した場合、すでにメニュー項目に割り当てられているショートカットが削除されます。

#### 例題 1 

"下線"メニュー項目に Ctrl+Shift+U (Windows) と Cmd+Shift+U (Mac OS) ショートカットを定義します:

```4d
 SET MENU ITEM(menuRef;1;"Underline")
 SET MENU ITEM SHORTCUT(menuRef;1;"U";Shift key mask)
```

#### 例題 2 

Ctrl+R (Windows) や Cmd+R (Mac OS) ショートカットを"再起動"メニュー項目に割り当てます:

```4d
 INSERT MENU ITEM(FileMenu;-1;"Restart")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"R";Command key mask)
```

#### 例題 3 

"閉じる"メニュー項目にF4 のショートカットキーを定義します:

```4d
 INSERT MENU ITEM(FileMenu;-1;"閉じる")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"[F4]";0)
```

#### 参照 

[Get menu item key](get-menu-item-key.md)  
[Get menu item modifiers](get-menu-item-modifiers.md)  