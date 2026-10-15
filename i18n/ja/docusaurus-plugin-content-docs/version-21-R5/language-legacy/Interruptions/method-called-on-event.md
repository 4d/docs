---
id: method-called-on-event
title: Method called on event
slug: /commands/method-called-on-event
displayed_sidebar: docs
---

<!--REF #_command_.Method called on event.Syntax-->**Method called on event**  : Text<!-- END REF-->
<!--REF #_command_.Method called on event.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | イベント発生時に呼び出されるメソッド名 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6.8.1|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Method called on event.Summary-->Method called on event コマンドは、[ON EVENT CALL](on-event-call.md "ON EVENT CALL")コマンドでインストールされたメソッド名を返します。<!-- END REF-->

インストールされたメソッドが存在しない場合は、空の文字列を返します。

## 参照 

[ON EVENT CALL](../commands/on-event-call)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 705 |
| スレッドセーフである | no |


