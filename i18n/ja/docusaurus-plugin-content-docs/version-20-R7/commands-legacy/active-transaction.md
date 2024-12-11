---
id: active-transaction
title: Active transaction
slug: /commands/active-transaction
displayed_sidebar: docs
---

<!--REF #_command_.Active transaction.Syntax-->**Active transaction** : Boolean<!-- END REF-->
<!--REF #_command_.Active transaction.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | トランザクションが停止中の場合、FALSE を返します。 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Active transaction.Summary-->**Active transaction**コマンドは、カレントプロセスがトランザクション中であり、かつそのトランザクションが停止されていない場合に**True**を返します。<!-- END REF-->カレントトランザクションがない場合、あるいはカレントトランザクションが停止されている場合には**False**を返します。トランザクションは [SUSPEND TRANSACTION](suspend-transaction.md) コマンドによって一時停止することができます。

このコマンドはカレントプロセスがトランザクション中でない場合にも**False**を返すため、[In transaction](in-transaction.md) コマンドを使ってプロセスがトランザクション中であるかどうかをチェックする必要もあるかもしれません。

詳細については、*トランザクションの停止*を参照ください。

#### 説明 

カレントトランザクションのステータスを調べます:

```4d
 If(In transaction)
    If(Not(Active transaction))
       ALERT("カレントトランザクションは停止されています")
    Else
       ALERT("カレントトランザクションはアクティブです")
    End if
 Else
    ALERT("トランザクション中ではありません")
 End if
```

#### 参照 

[In transaction](in-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*トランザクションの停止*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1387 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


