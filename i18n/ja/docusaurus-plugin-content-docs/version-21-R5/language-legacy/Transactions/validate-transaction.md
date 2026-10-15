---
id: validate-transaction
title: VALIDATE TRANSACTION
slug: /commands/validate-transaction
displayed_sidebar: docs
---

<!--REF #_command_.VALIDATE TRANSACTION.Syntax-->**VALIDATE TRANSACTION**<!-- END REF-->
<!--REF #_command_.VALIDATE TRANSACTION.Params-->
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

<!--REF #_command_.VALIDATE TRANSACTION.Summary-->VALIDATE TRANSACTIONは、カレントプロセス中、[START TRANSACTION](start-transaction.md "START TRANSACTION")で開始した対応するレベルのトランザクションを受け入れます。<!-- END REF-->VALIDATE TRANSACTIONは、トランザクション中に行われたデータベースへの更新を保存します。

4Dのバージョン11以降、複数のトランザクション(サブトランザクション) をネストすることができます。主要なトランザクションがキャンセルされると、このコマンドで個別に認証されていても、すべてのサブトランザクションはキャンセルされます。

## システム変数およびセット 

トランザクションが正しく認証されると、システム変数OKに1が代入されます。その他の場合は0が代入されます。

OK変数に0が代入された場合、トランザクションは自動的に内部でキャンセルされるという点に注意して下さい([CANCEL TRANSACTION](../commands/cancel-transaction)と同等)。結果として、特にネストされたトランザクションではキャンセルが高いレベルのトランザクションにまで適用されてしまうため、OK=0の場合には明示的に[CANCEL TRANSACTION](../commands/cancel-transaction)を呼び出してはいけません。

## 参照 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
*トランザクションを使用する*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 240 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


