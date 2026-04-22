---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* : Integer, Text ; *menuItem* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594; | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594; | メニュー項目番号 または -1: 最後に追加された項目 |
| 戻り値 | Text | &#8592; | メニュー項目のカスタムパラメタ |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL Release 4|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get menu item parameter.Summary-->Get menu item parameter コマンドは、*menu*と*menuItem*引数で指定されるメニュー項目に割り当てられたカスタム文字列を返します。<!-- END REF-->この文字列は事前に[SET MENU ITEM PARAMETER](set-menu-item-parameter.md "SET MENU ITEM PARAMETER")コマンドで指定されていなければなりません。

## 参照 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get selected menu item parameter](../commands/get-selected-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1003 |
| スレッドセーフである | no |


