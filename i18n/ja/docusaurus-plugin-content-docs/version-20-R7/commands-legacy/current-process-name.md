---
id: current-process-name
title: Current process name
slug: /commands/current-process-name
displayed_sidebar: docs
---

<!--REF #_command_.Current process name.Syntax-->**Current process name**  : Text<!-- END REF-->
<!--REF #_command_.Current process name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | カレントプロセス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current process name.Summary-->**Current process name** コマンドは、このコマンドを呼び出したプロセスのプロセス名を返します。<!-- END REF-->

このコマンドはワーカープロセスのコンテキストにおいて有用です (*ワーカーについて* 参照)。このコマンドを使用すると、汎用的なコードを書く際に呼び出すワーカープロセスを特定することができます。

#### 例題 

ワーカーを呼び出し、呼び出し元のプロセス名を引数として渡します:

```4d
 CALL WORKER(1;"myMessage";Current process name;"Start:"+String(vMax))
```

#### 参照 

[CALL WORKER](call-worker.md)  
[KILL WORKER](kill-worker.md)  
*ワーカーについて*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1392 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


