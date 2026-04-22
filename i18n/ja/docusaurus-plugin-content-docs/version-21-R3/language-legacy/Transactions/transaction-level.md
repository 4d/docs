---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 現在のトランザクションレベル (トランザクションが 開始されていない場合は0) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Transaction level.Summary-->Transaction levelコマンドはプロセスの現在のトランザクションレベルを返します。<!-- END REF-->4Dランゲージ経由またはSQL経由でトランザクションが開始されたかに関わらず、このコマンドはカレントプロセスのすべてのトランザクションを考慮に入れます。

## 参照 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
*トランザクションを使用する*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 961 |
| スレッドセーフである | yes |


