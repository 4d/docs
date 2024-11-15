---
id: count-tasks
title: Count tasks
slug: /commands/count-tasks
displayed_sidebar: docs
---

<!--REF #_command_.Count tasks.Syntax-->**Count tasks**  : Integer<!-- END REF-->
<!--REF #_command_.Count tasks.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 開いているプロセスの (カーネルプロセスを含む) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Count tasks.Summary-->**Count tasks** は4Dスタンドアロン、4Dリモート、あるいは4D Server(ストアドプロシージャー)バージョンにおける、生きているプロセスの番号の最も高いものを返します。<!-- END REF-->プロセスは作成された順番に番号が振られます。セッション中にアボートされたプロセスがない限りは、このコマンドは開かれているプロセスの総数を返します。 

この数には、4Dが自動的に管理するものも含めてすべてのプロセスが含まれます。この中にはメインプロセス、デザインプロセス、キャッシュマネージャプロセス、インデックスプロセス、およびWebサーバプロセスが含まれます。

#### 例題 

[Process state](process-state.md "Process state")との例題参照

#### 参照 

[Count user processes](count-user-processes.md)  
[Count users](count-users.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  