---
id: reduce-restore-window
title: REDUCE RESTORE WINDOW
slug: /commands/reduce-restore-window
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE RESTORE WINDOW.Syntax-->**REDUCE RESTORE WINDOW** ( *window* : Integer )<!-- END REF-->
<!--REF #_command_.REDUCE RESTORE WINDOW.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594; | ウィンドウ参照番号 |
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

<!--REF #_command_.REDUCE RESTORE WINDOW.Summary-->**REDUCE RESTORE WINDOW** コマンドは、*window* 引数に参照を渡したウィンドウを、WindowsのタスクバーまたはmacOS のDockへ収納、またはそこから展開します。<!-- END REF-->

コマンドは以下のようにウィンドウの状態を切り替えます:

* ウィンドウが表示されている場合、コマンドはウィンドウをタスクバーまたはDockへと収納します。
* ウィンドウが収納されている場合、コマンドはウィンドウを以前の状態へと復元します。

**注意:** macOS では、このコマンドの動作は非同期です。

## 参照 

[Is window reduced](../commands/is-window-reduced)  
[MAXIMIZE WINDOW](../commands/maximize-window)  
[MINIMIZE WINDOW](../commands/minimize-window)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1829 |
| スレッドセーフである | no |


