---
id: delay-process
title: DELAY PROCESS
slug: /commands/delay-process
displayed_sidebar: docs
---

<!--REF #_command_.DELAY PROCESS.Syntax-->**DELAY PROCESS** ( *process* ; *duration* )<!-- END REF-->
<!--REF #_command_.DELAY PROCESS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | プロセス番号 |
| duration | Real | &#8594;  | 遅延時間 (tick) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELAY PROCESS.Summary-->DELAY PROCESSは、*process* 引数で指定したプロセスの実行を指定したtick数 (1tick＝1/60秒) だけ遅らせます。<!-- END REF-->この間、そのプロセスは処理時間を使用しません。プロセスの実行を遅延しても、そのプロセスはメモリ内に残ります。

プロセスの遅れを1tick以下の時間で指定することもできます。例えば、*duration* に0.5を渡した場合、プロセスは1/2tick だけ、つまり1/120秒だけ遅延します。

プロセスが既に遅延状態の場合、このコマンドはそれを再度遅延します。この場合、*duration*は残時間に加算されるのではなく、それに置き換わります。したがって、これ以上遅延させたくなければゼロ (0) を渡します。

プロセスが存在しなければ、このコマンドは何も行いません。

**Note:** クライアントマシンから、サーバマシンで動作するストアドプロシージャ (*process*<0) に対して、このコマンドを適用することはできません。

#### 例題 1 

*レコードのロック* の例題参照  

#### 例題 2 

[Process number](process-number.md "Process number")の例題参照

#### 参照 

[HIDE PROCESS](hide-process.md)  
[PAUSE PROCESS](pause-process.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 323 |
| スレッドセーフである | &check; |


