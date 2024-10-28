---
id: pause-process
title: PAUSE PROCESS
slug: /commands/pause-process
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE PROCESS.Syntax-->**PAUSE PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.PAUSE PROCESS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | プロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PAUSE PROCESS.Summary-->PAUSE PROCESSは、[RESUME PROCESS](resume-process.md "RESUME PROCESS")コマンドで再開されるまで*process*の実行を停止します。<!-- END REF-->この間*process*はマシンの処理時間を使用しません。プロセスは停止されてもメモリ内に残ります。

*process*が既に停止していた場合は、PAUSE PROCESSコマンドは何も行いません。プロセスが[DELAY PROCESS](delay-process.md "DELAY PROCESS")コマンドで遅延されている場合もそのプロセスは停止されます。[RESUME PROCESS](resume-process.md "RESUME PROCESS")コマンドは、即座にプロセスを再開します。

プロセスの実行を停止している間はそのプロセスのウィンドウに入力することはできません。この場合には、ユーザの混乱を避けるためにそのプロセスを非表示にするとよいでしょう。*process*が存在しなければ、このコマンドは何も行いません。

**警告:** PAUSE PROCESSコマンドは、あなたが開始したプロセス内だけで使用してください。PAUSE PROCESSコマンドはメインプロセスに何も影響を与えません。

**Note:** クライアントマシンから、サーバーマシンで動作するストアドプロシージャ (*process*<0) に対して、このコマンドを使用してはいけません。

#### 参照 

[ABORT PROCESS BY ID](abort-process-by-id.md)  
[DELAY PROCESS](delay-process.md)  
[HIDE PROCESS](hide-process.md)  
[RESUME PROCESS](resume-process.md)  