---
id: get-menu-item-key
title: Get menu item key
slug: /commands/get-menu-item-key
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item key.Syntax-->**Get menu item key** ( *menu* ; *menuItem* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item key.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| process | Integer | &#8594;  | プロセス番号 |
| 戻り値 | Integer | &#8592; | メニュー項目に関連付ける 標準ショートカットキーの文字コード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get menu item key.Summary-->Get menu item key コマンドは、*menu*引数にメニュー番号またはメニュー参照で指定したメニュー中、*menuItem*引数にメニュー項目番号で指定したメニュー項目の、Ctrl (Windows) または Command (Macintosh) ショートカットコードを返します。<!-- END REF-->*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*process*引数を省略すると、Get menu item keyコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process* 引数は意味を持たず、無視されます。

メニュー項目に割り当てられたショートカットがないか、*menuItem* 引数が階層サブメニューを指す場合、Get menu item key は *0* を返します。

#### 例題 

メニュー項目に割り当てられたショートカットを取得するために、以下のようなタイプのプログラミング構造を実装すると便利です:

```4d
 If(Get menu item key(mymenu;1)#0)
    $modifiers:=Get menu item modifiers(mymenu;1)
    Case of
       :($modifiers=Option key mask)
          ...
       :($modifiers=Shift key mask)
          ...
       :($modifiers=Option key mask+Shift key mask)
          ...
    End case
 End if
 
 
```

#### 参照 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 424 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


