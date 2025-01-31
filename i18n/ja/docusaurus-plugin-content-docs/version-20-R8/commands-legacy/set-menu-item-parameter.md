---
id: set-menu-item-parameter
title: SET MENU ITEM PARAMETER
slug: /commands/set-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PARAMETER.Syntax-->**SET MENU ITEM PARAMETER** ( *menu* ; *menuItem* ; *param* )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PARAMETER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| param | Text | &#8594;  | パラメタとして割り当てる文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET MENU ITEM PARAMETER.Summary-->SET MENU ITEM PARAMETERコマンドは、*menu*と*menuItem*引数で指定されたメニュー項目に、カスタム文字列を設定するために使用します。<!-- END REF-->

このパラメタは主に[Dynamic pop up menu](dynamic-pop-up-menu.md "Dynamic pop up menu")コマンドで使用されます。

#### 例題 

以下のコードでは開かれたウィンドウの名前で構成されるメニューを作成し、選択されたウィンドウの番号を取得できるようにします:

```4d
 WINDOW LIST($alWindow)
 $tMenuRef:=Create menu
 For($i;1;Size of array($alWindow))
    APPEND MENU ITEM($tMenuRef;Get window title($alWindow{$i})) // メニュー項目のタイトル
    SET MENU ITEM PARAMETER($tMenuRef;-1;String($alWindow{$i})) // メニュー項目から返される値
 End for
 $tWindowRef:=Dynamic pop up menu($tMenuRef)
 RELEASE MENU($tMenuRef)
```

#### 参照 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1004 |
| スレッドセーフである | &cross; |


