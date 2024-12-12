---
id: in-transaction
title: In transaction
slug: /commands/in-transaction
displayed_sidebar: docs
---

<!--REF #_command_.In transaction.Syntax-->**In transaction**  : Boolean<!-- END REF-->
<!--REF #_command_.In transaction.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | カレントプロセスがトランザクション内にある場合、TRUEを返します。 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.In transaction.Summary-->In transactionコマンドはカレントプロセスがトランザクション内にある場合に[True](true.md "True")を返します。<!-- END REF-->その他の場合は[False](false.md "False")を返します。

#### 例題 

複数のレコードに対する操作 (レコード追加、修正、または削除) を実行すると、ロックされたレコードに出くわす可能性があります。このような場合、データの整合性を維持するためには、失敗したときに操作全体をロールバックして、データベースを元の状態に戻せるように、トランザクションの中で捜査を行わなければなりません。

トリガ内から、あるいはサブルーチン (トランザクションの中でも、外でも呼び出せる) から操作を実行する場合には、In transactionを使用して、カレントプロセスのメソッドまたは呼び出し側のメソッドがトランザクションを開始したかどうかをチェックすることができます。トランザクションが開始されていなければ、操作を開始してはいけません。そうでなければ失敗した場合に、操作をロールバックすることができなくなってしまいます。

#### 参照 

[Active transaction](active-transaction.md)  
[CANCEL TRANSACTION](cancel-transaction.md)  
[START TRANSACTION](start-transaction.md)  
[VALIDATE TRANSACTION](validate-transaction.md)  
*トリガ*  