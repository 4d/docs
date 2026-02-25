---
id: resume-transaction
title: RESUME TRANSACTION
slug: /commands/resume-transaction
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
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

<!--REF #_command_.RESUME TRANSACTION.Summary-->**RESUME TRANSACTION**コマンドは、カレントプロセスの同レベルにおいて [SUSPEND TRANSACTION](../commands/suspend-transaction) によって停止していたトランザクションを再開させます。<!-- END REF-->このコマンド後に実行されたオペレーションはトランザクションコントロール下で実行されます (ただし複数の停止されていたトランザクションがネストされていた場合を除きます)。

詳細については、 *トランザクションの停止* を参照ください。

## 参照 

[Active transaction](../commands/active-transaction)  
[SUSPEND TRANSACTION](../commands/suspend-transaction)  
*トランザクションの停止*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1386 |
| スレッドセーフである | yes |


