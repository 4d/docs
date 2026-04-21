---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *list* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594; | コピーするリストの参照 |
| 戻り値 | Integer | &#8592; | 複製されたリストのリスト参照番号 |
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

<!--REF #_command_.Copy list.Summary-->Copy list コマンドは*list*に渡されたリスト参照番号を持つリストの複製を作成し、新しいリストのリスト参照番号を返します。<!-- END REF-->

このリストの使用を終えたら、[CLEAR LIST](clear-list.md "CLEAR LIST")を呼び出してリストを削除します。

## 参照 

[CLEAR LIST](../commands/clear-list)  
[Load list](../commands/load-list)  
[New list](../commands/new-list)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 626 |
| スレッドセーフである | no |


