---
id: active-transaction
title: Active transaction
slug: /commands/active-transaction
displayed_sidebar: docs
---

<!--REF #_command_.Active transaction.Syntax-->**Active transaction** : Boolean<!-- END REF-->
<!--REF #_command_.Active transaction.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | トランザクションが停止中の場合、FALSE を返します。 |
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

<!--REF #_command_.Active transaction.Summary-->**Active transaction**コマンドは、カレントプロセスがトランザクション中であり、かつそのトランザクションが停止されていない場合に**True**を返します。<!-- END REF-->カレントトランザクションがない場合、あるいはカレントトランザクションが停止されている場合には**False**を返します。トランザクションは [SUSPEND TRANSACTION](../commands/suspend-transaction) コマンドによって一時停止することができます。

このコマンドはカレントプロセスがトランザクション中でない場合にも**False**を返すため、[In transaction](../commands/in-transaction) コマンドを使ってプロセスがトランザクション中であるかどうかをチェックする必要もあるかもしれません。

詳細については、*トランザクションの停止*を参照ください。

## 説明 

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

## 参照 

[In transaction](../commands/in-transaction)  
[RESUME TRANSACTION](../commands/resume-transaction)  
[SUSPEND TRANSACTION](../commands/suspend-transaction)  
*トランザクションの停止*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1387 |
| スレッドセーフである | yes |


