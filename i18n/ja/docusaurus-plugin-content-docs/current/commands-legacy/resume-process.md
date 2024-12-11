---
id: resume-process
title: RESUME PROCESS
slug: /commands/resume-process
displayed_sidebar: docs
---

<!--REF #_command_.RESUME PROCESS.Syntax-->**RESUME PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.RESUME PROCESS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | プロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESUME PROCESS.Summary-->RESUME PROCESSは、実行が停止または遅延されている*process*を再開します。<!-- END REF-->*process*が停止も遅延もされていない場合、RESUME PROCESSは何も行いません。

*process*が事前に遅延されてる場合については、[PAUSE PROCESS](pause-process.md "PAUSE PROCESS")コマンドまたは[DELAY PROCESS](delay-process.md "DELAY PROCESS")コマンドを参照してください。プロセスが存在しない場合、このコマンドは何も行いません。 

**Note:** クライアントマシンから、サーバーマシンで動作するストアドプロシージャ(*process*<0)に対して、このコマンドを使用してはいけません。

#### 参照 

[DELAY PROCESS](delay-process.md)  
[PAUSE PROCESS](pause-process.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 320 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


