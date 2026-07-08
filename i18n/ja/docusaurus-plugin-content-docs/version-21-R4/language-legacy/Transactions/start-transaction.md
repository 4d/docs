---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.START TRANSACTION.Summary-->START TRANSACTION は、カレントプロセスでトランザクションを開始します。<!-- END REF-->トランザクションが受け入れられるまたはキャンセルされるまでは、トランザクション内にデータベース上で変更されたすべてのデータは一時的に保存されます。

4Dのバージョン11以降、複数のトランザクション(サブトランザクション) をネストすることができます。それぞれのトランザクションまたはサブトランザクションは、最終的にはキャンセルまたは認証されていなければなりません。主要なトランザクションがキャンセルされると、結果に関係なく、すべてのサブトランザクションはキャンセルされますので注意してください。

## 参照 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[Transaction level](../commands/transaction-level)  
[VALIDATE TRANSACTION](../commands/validate-transaction)  
*トランザクションを使用する*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 239 |
| スレッドセーフである | yes |


