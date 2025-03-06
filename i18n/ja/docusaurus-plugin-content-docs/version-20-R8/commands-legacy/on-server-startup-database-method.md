---
id: on-server-startup-database-method
title: On Server Startup database method
slug: /commands/on-server-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Startup database method.Syntax-->**On Server Startupデータベースメソッド**<!-- END REF-->
<!--REF #_command_.On Server Startup database method.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.On Server Startup database method.Summary-->**On Server Startupデータベースメソッド**は、4D Server でデータベースを開くと、サーバマシン上で一度呼び出されます。<!-- END REF-->4D Server 以外の4D環境で**On Server Startupデータベースメソッド**が起動されることはありません。

**On Server Startupデータベースメソッド**は次の事柄を行うのに最適です:

* 4D Server セッション全体を通して使用するインタープロセス変数を初期化する
* データベースが開かれる時に自動で*ストアドプロシージャ*を開始する
* 前の4D Serverセッション中に保存された初期設定や各種設定をロードする
* 明示的に[QUIT 4D](quit-4d.md "QUIT 4D")を呼び出すことによって、(システムリソースが見つからない等) 条件が満たされていない場合にデータベースを開けないようにする
* データベースが開かれるたびに自動的に実行させたいその他の動作を実行する

リモート4Dがサーバに接続する時に、クライアントマシン上で自動的にコードを実行するには[On Startupデータベースメソッド](on-startup-database-method.md)を使用します。

**Note:** On Server Startup データベースメソッドはアトミックに実行されます。つまりこのメソッドの実行が終了するまで、リモート4Dは接続を行うことができません。
