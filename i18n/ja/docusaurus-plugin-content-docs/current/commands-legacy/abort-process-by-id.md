---
id: abort-process-by-id
title: ABORT PROCESS BY ID
slug: /commands/abort-process-by-id
displayed_sidebar: docs
---

<!--REF #_command_.ABORT PROCESS BY ID.Syntax-->**ABORT PROCESS BY ID** ( *uniqueID* )<!-- END REF-->
<!--REF #_command_.ABORT PROCESS BY ID.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| uniqueID | Integer | &#8594;  | 固有のプロセスID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ABORT PROCESS BY ID.Summary-->**ABORT PROCESS BY ID** コマンドは4D Server 上の特定のプロセスを中止します。<!-- END REF-->

*uniqueID* 引数には、サーバー上で実行中で中止したいプロセスの固有IDを渡します。プロセスIDは、[Process activity](../commands/process-activity.md) あるいは [Process info](../commands/process-info.md) コマンドを使用することで取得できます。

**注**:

* このコマンドは4D Server 上でのみ実行可能です。このコマンドを呼び出しているメソッドがリモートクライアントでローカルに実行される、あるいはシングルユーザー版4D で実行された場合、**ABORT PROCESS BY ID** は何もしません。
* このコマンドは*ServerNet* ネットワークレイヤーでしか使用することができません。詳細は*新しい ServerNet ネットワークレイヤー(互換性)*を参照してください。
* このコマンドはエラーの探索や管理目的のためだけに使用されるべきであり、通常のプロシージャとして使用されるべきではありません。

#### 例題 

リストボックスに表示されたプロセスのコレクションから、選択したプロセスを中止したい場合を考えます:

```4d
  //variable =curItemPosition
 
  // サーバー上のプロセスの一覧を取得し、リストボックスに表示する
 $activity:=Get process activity(Processes only).processes
 ...
  // 選択したプロセスをサーバー上で中止させる
 ABORT PROCESS BY ID($activity[curItemPosition].ID)
```

#### 参照 

[PAUSE PROCESS](pause-process.md)  