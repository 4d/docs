---
id: clear-semaphore
title: CLEAR SEMAPHORE
slug: /commands/clear-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SEMAPHORE.Syntax-->**CLEAR SEMAPHORE** ( *semaphore* )<!-- END REF-->
<!--REF #_command_.CLEAR SEMAPHORE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| semaphore | Text | &#8594;  | クリアするセマフォ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CLEAR SEMAPHORE.Summary-->CLEAR SEMAPHOREは、[Semaphore](semaphore.md "Semaphore")コマンドで設定された*semaphore*を消去します。<!-- END REF-->

ルールとして、作成されたすべてのセマフォは消去するべきです。セマフォが消去されない場合、セマフォを作成したプロセスが終了するまで、作成されたセマフォはメモリ上に残ります。プロセスは自身が作成したセマフォしか消去することはできません。セマフォを作成していないプロセス内からセマフォを消去しようとしても、何も行いません。

#### 例題 

[Semaphore](semaphore.md "Semaphore")の例題参照

#### 参照 

[Semaphore](semaphore.md)  
[Test semaphore](test-semaphore.md)  
*セマフォーとシグナル*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 144 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


