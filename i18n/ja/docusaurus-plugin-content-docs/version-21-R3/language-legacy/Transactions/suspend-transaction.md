---
id: suspend-transaction
title: SUSPEND TRANSACTION
slug: /commands/suspend-transaction
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|15 R4|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->**SUSPEND TRANSACTION**コマンドはカレントプロセス内のカレントトランザクションを一時停止させます。<!-- END REF-->そうすることによって例えば、トランザクションのコンテキストは手つかずで残したまま、データベースの他の部分にてデータを (データがトランザクションに含まれる事なく) 操作することができます。トランザクション内で更新、あるいは追加されたレコードは、トランザクションが [RESUME TRANSACTION](../commands/resume-transaction) コマンドによって再開されるまでロックされています。

詳細については、*トランザクションの停止* を参照ください。

## 参照 

[Active transaction](../commands/active-transaction)  
[RESUME TRANSACTION](../commands/resume-transaction)  
*トランザクションの停止*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1385 |
| スレッドセーフである | yes |


