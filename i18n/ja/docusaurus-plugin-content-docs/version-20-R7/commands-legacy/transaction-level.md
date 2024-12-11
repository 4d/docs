---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 現在のトランザクションレベル (トランザクションが 開始されていない場合は0) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Transaction level.Summary-->Transaction levelコマンドはプロセスの現在のトランザクションレベルを返します。<!-- END REF-->4Dランゲージ経由またはSQL経由でトランザクションが開始されたかに関わらず、このコマンドはカレントプロセスのすべてのトランザクションを考慮に入れます。

#### 参照 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*トランザクションを使用する*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 961 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


