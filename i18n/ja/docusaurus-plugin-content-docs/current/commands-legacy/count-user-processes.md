---
id: count-user-processes
title: Count user processes
slug: /commands/count-user-processes
displayed_sidebar: docs
---

<!--REF #_command_.Count user processes.Syntax-->**Count user processes**  : Integer<!-- END REF-->
<!--REF #_command_.Count user processes.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 活動中のプロセス (内部プロセスを除く) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Count user processes.Summary-->Count user processesは4Dアプリケーションで現在活動中のプロセスの数を返します。<!-- END REF-->対象のプロセスにはタイプが -25 (Internal Timer Process), -31 (Client Manager Process) そして -15 (Server Interface Process) のものは含まれません。プロセスタイプに関する詳細は[PROCESS PROPERTIES](process-properties.md "PROCESS PROPERTIES") コマンドと定数テーマを参照してください。  
Count user processesは、ユーザが直接あるいは間接に開いたプロセスの数を返します ([PROCESS PROPERTIES](process-properties.md "PROCESS PROPERTIES")コマンドから返される*origin*引数の値が0以上のプロセス)。

**Note:** "活動中の" プロセスとは、ステータスが*aborted*でも*does not exist*でもないプロセスです ([Process state](process-state.md "Process state") コマンド参照)。

#### 参照 

[Count tasks](count-tasks.md)  
[Count users](count-users.md)  