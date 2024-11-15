---
id: test-semaphore
title: Test semaphore
slug: /commands/test-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Test semaphore.Syntax-->**Test semaphore** ( *semaphore* ) : Boolean<!-- END REF-->
<!--REF #_command_.Test semaphore.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| semaphore | Text | &#8594;  | テストするセマフォ |
| 戻り値 | Boolean | &#8592; | True: セマフォが存在する, False: セマフォは存在しない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Test semaphore.Summary-->Test semaphore コマンドは、セマフォの存在をテストします。<!-- END REF-->

[Semaphore](semaphore.md "Semaphore")関数とTest semaphore関数の違いは、Test semaphoreはセマフォが存在しない場合には*semaphore*を作成しないということです。*semaphore*が存在している場合、関数は[True](true.md "True")を返します。そうでない場合は[False](false.md "False")を返します。

#### 例題 

下記の例は、セマフォを変更せずにプロセスの状態 (この場合は、コードを変更して  
いる最中かどうか) を知ることを可能にするものです:

```4d
 $Win:=Open window(x1;x2;y1;y2;-Palette window)
 Repeat
    If(Test semaphore("Encrypting code"))
       POSITION MESSAGE($x3;$y3)
       MESSAGE("Encrypting code being modified.")
    Else
       POSITION MESSAGE($x3;$y3)
       MESSAGE("Modification of the encrypting code authorized.")
    End if
 Until(StopInfo)
 CLOSE WINDOW
```

#### 参照 

[CLEAR SEMAPHORE](clear-semaphore.md)  
[Semaphore](semaphore.md)  