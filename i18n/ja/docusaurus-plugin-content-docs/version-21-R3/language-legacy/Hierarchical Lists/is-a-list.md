---
id: is-a-list
title: Is a list
slug: /commands/is-a-list
displayed_sidebar: docs
---

<!--REF #_command_.Is a list.Syntax-->**Is a list** ( *list* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is a list.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594; | テストするListRef値 |
| 戻り値 | Boolean | &#8592; | TRUE: listは階層リスト FALSE: listは階層リストでない |
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

<!--REF #_command_.Is a list.Summary-->Is a list コマンドは、*list* 引数で指定された値が階層リストの有効な参照の場合[True](../commands/true)を返します。<!-- END REF-->それ以外の場合[False](../commands/false)を返します。

## 例題

[CLEAR LIST](clear-list.md "CLEAR LIST")コマンドの例題参照



## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 621 |
| スレッドセーフである | no |


