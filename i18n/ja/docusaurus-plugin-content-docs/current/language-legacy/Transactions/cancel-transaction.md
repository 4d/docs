---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
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

<!--REF #_command_.CANCEL TRANSACTION.Summary-->**CANCEL TRANSACTION**は、対応するレベルの[START TRANSACTION](../commands/start-transaction)で開始したカレントプロセスのトランザクションをキャンセルします。<!-- END REF-->**CANCEL TRANSACTION**は、トランザクション中にデータ上で実行された処理をキャンセルします。

**注:** **CANCEL TRANSACTION**はまだ保存されていないカレントレコードに対して行われた変更には影響しません。このコマンドが実行された後も変更されたデータはそのまま表示されます。

## 参照 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
[Transaction level](../commands/transaction-level)  
[VALIDATE TRANSACTION](../commands/validate-transaction)  
*トランザクションを使用する*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 241 |
| スレッドセーフである | yes |


