---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** ( *process* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594; | プロセス参照番号 |
| 戻り値 | Integer | &#8592; | カレントメニューバー中のメニュー数 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Count menus.Summary-->Count menus コマンドは、メニューバー上にあるメニューの数を返します。<!-- END REF-->

*process*引数を省略すると、Count menusコマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

## 参照 

[Count menu items](../commands/count-menu-items)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 404 |
| スレッドセーフである | no |
| サーバー上での使用は不可 ||


