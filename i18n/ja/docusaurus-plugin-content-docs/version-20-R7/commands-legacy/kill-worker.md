---
id: kill-worker
title: KILL WORKER
slug: /commands/kill-worker
displayed_sidebar: docs
---

<!--REF #_command_.KILL WORKER.Syntax-->**KILL WORKER** {( *process* )}<!-- END REF-->
<!--REF #_command_.KILL WORKER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Text, Integer | &#8594;  | 終了させるプロセスの番号または名称 (省略の場合はカレントプロセス) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.KILL WORKER.Summary-->**KILL WORKER** コマンドは *process* に指定した番号、または名称のワーカープロセスにメッセージを送信し、現在の処理が完了次第、未処理のメッセージすべて無視して実行を終了するよう命令します。<!-- END REF-->

このコマンドの対象は、メッセージボックスを持つワーカープロセスに限られます。詳細については*ワーカーについて* を参照ください。 

*process* には実行を終了させるプロセスの番号または名称を受け渡します。指定のプロセスが存在しない場合、**KILL WORKER** は何もしません。  
**KILL WORKER** のパラメーターを省略した場合には、現在実行中のワーカーにコマンドが適用されます。つまり、**KILL WORKER* (Current process)* と同じ結果になります。

[CALL WORKER](call-worker.md) によって作成されたワーカーではないプロセス (例えばアプリケーションワーカーなど) に対して**KILL WORKER** が適用された場合には、**KILL WORKER** コマンドはワーカーのメッセージボックスを空にするだけです。

**KILL WORKER** コマンドによって終了させられたワーカーに、[CALL WORKER](call-worker.md) コマンドを呼び出してメッセージを送ろうとした場合、新しいプロセスが開始されます。一つのワーカーに対して一つのプロセスのみが実行中であるようにするために、新しいプロセスは、その前のプロセスが実際に終了されたあとに開始されます。ただし、[CALL WORKER](call-worker.md) がワーカーから呼び出されて自分自身にメッセージを送信しようとたものの、その直後にプロセスが**KILL WORKER** によって終了されていた場合、コマンドは何もしないという点に注意してください。

#### 例題 

例えばフォームなどで次のようなコードを実行し、ワーカーの終了をトリガーします:

```4d
 CALL WORKER(vWorkerName;"theWorker";"end")
```

ワーカーメソッド (*theWorker*) の例です:

```4d
  //theWorker メソッド
 var $1 : Text //パラメーター
 
 Case of
    :($1="call") // ワーカーをコールした場合
       ... // 処理用のコード
    :($1="end") // ワーカーの終了を指示した場合
       KILL WORKER
 End case
```

#### 参照 

[CALL WORKER](call-worker.md)  
[Current process name](current-process-name.md)  
*ワーカーについて*  