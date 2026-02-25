---
id: is-window-reduced
title: Is window reduced
slug: /commands/is-window-reduced
displayed_sidebar: docs
---

<!--REF #_command_.Is window reduced.Syntax-->**Is window reduced** ( *window* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window reduced.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594; | ウィンドウ参照番号 |
| 戻り値 | Boolean | &#8592; | ウィンドウがタスクバーかDockに収納されていればTrue、それ以外の場合にはFalse |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|20 R5|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Is window reduced.Summary-->**Is window reduced** コマンドは*window* 引数に参照を渡したウィンドウがタスクバー(Windows)またはDock(macOS)に収納されている場合には**True** を、それ以外の場合には**False** を返します。<!-- END REF-->

## 参照 

[Is window maximized](../commands/is-window-maximized)  
[REDUCE RESTORE WINDOW](../commands/reduce-restore-window)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1831 |
| スレッドセーフである | no |


