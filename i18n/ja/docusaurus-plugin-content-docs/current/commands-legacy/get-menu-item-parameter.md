---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* ; *menuItem* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#x1F852; | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#x1F852; | メニュー項目番号 または -1: 最後に追加された項目 |
| 戻り値 | Text | &#x1F850; | メニュー項目のカスタムパラメタ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get menu item parameter.Summary-->Get menu item parameter コマンドは、*menu*と*menuItem*引数で指定されるメニュー項目に割り当てられたカスタム文字列を返します。<!-- END REF-->この文字列は事前に[SET MENU ITEM PARAMETER](set-menu-item-parameter.md "SET MENU ITEM PARAMETER")コマンドで指定されていなければなりません。

#### 参照 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  