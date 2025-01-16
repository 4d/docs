---
id: process-state
title: Process state
slug: /commands/process-state
displayed_sidebar: docs
---

<!--REF #_command_.Process state.Syntax-->**Process state** ( *process* ) : Integer<!-- END REF-->
<!--REF #_command_.Process state.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | プロセス番号 |
| 戻り値 | Integer | &#8592; | プロセスの状態 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Process state.Summary-->**Process state** コマンドは、*process*に指定したプロセス番号を持つプロセスの状態を返します。<!-- END REF--> 

プロセスのステータスとしては以下のような定数があらかじめ定義されています:

| 定数                        | 型    | 値     | コメント                                                                                                                                                                        |
| ------------------------- | ---- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does not exist            | 倍長整数 | \-100 |                                                                                                                                                                             |
| Aborted                   | 倍長整数 | \-1   |                                                                                                                                                                             |
| Executing                 | 倍長整数 | 0     |                                                                                                                                                                             |
| Delayed                   | 倍長整数 | 1     |                                                                                                                                                                             |
| Waiting for user event    | 倍長整数 | 2     |                                                                                                                                                                             |
| Waiting for input output  | 倍長整数 | 3     |                                                                                                                                                                             |
| Waiting for internal flag | 倍長整数 | 4     |                                                                                                                                                                             |
| Paused                    | 倍長整数 | 5     |                                                                                                                                                                             |
| \_o\_Hidden modal dialog  | 倍長整数 | 6     | **互換性に関する注意:** このプロセス状態は4D v16 以降存在しません。[Process info](../commands/process-info.md) コマンドに*procState*\=Waiting for user event および *procMode*\=False を渡すことでこれと同等のステータスが返されます。 |

プロセスが存在しない (つまり1から[Count tasks](count-tasks.md) までの番号を渡さなかった) 場合、**Process state** はDoes not exist (-100)を返します。

#### 例題 

以下の例は、各プロセスの名前とプロセス参照番号を配列*asProcName*と*aiProcNum*に入れます。このメソッドは、プロセスがアボートされたかを調べます。この場合、プロセス名とプロセス番号は配列に追加されません:

```4d
 $vlNbTasks:=Count tasks
 ARRAY TEXT(asProcName;$vlNbTasks)
 ARRAY INTEGER(aiProcNum;$vlNbTasks)
 $vlActualCount:=0
 For($vlProcess;1;$vlNbTasks)
    If(Process state($vlProcess)>=Executing)
       $vlActualCount:=$vlActualCount+1
       PROCESS PROPERTIES($vlProcess;asProcName{$vlActualCount};$vlState;$vlTime)
       aiProcNum{$vlActualCount}:=$vlProcess
    End if
 End for
  // Eliminate unused extra elements
 ARRAY TEXT(asProcName;$vlActualCount)
 ARRAY INTEGER(aiProcNum;$vlActualCount)
```

#### 参照 

[Count tasks](count-tasks.md)  
[Process info](../commands/process-info.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 330 |
| スレッドセーフである | &cross; |


