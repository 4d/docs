---
id: get-selected-menu-item-parameter
title: Get selected menu item parameter
slug: /commands/get-selected-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get selected menu item parameter.Syntax-->**Get selected menu item parameter**  : Text<!-- END REF-->
<!--REF #_command_.Get selected menu item parameter.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
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

<!--REF #_command_.Get selected menu item parameter.Summary-->Get selected menu item parameter コマンドは、選択されたメニュー項目に割り当てられたカスタム文字列を返します。<!-- END REF-->このパラメタは事前に[SET MENU ITEM PARAMETER](set-menu-item-parameter.md "SET MENU ITEM PARAMETER")コマンドを使用してあらかじめ設定されていなければなりません。  
メニュー項目が選択されていない場合、コマンドは空の文字列を返します。

## 参照 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get menu item parameter](../commands/get-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1005 |
| スレッドセーフである | no |


