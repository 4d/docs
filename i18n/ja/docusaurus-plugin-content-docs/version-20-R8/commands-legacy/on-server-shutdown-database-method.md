---
id: on-server-shutdown-database-method
title: On Server Shutdown database method
slug: /commands/on-server-shutdown-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Shutdown database method.Syntax-->**On Server Shutdownデータベースメソッド**<!-- END REF-->
<!--REF #_command_.On Server Shutdown database method.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.On Server Shutdown database method.Summary-->**On Server Shutdownデータベースメソッド**は、カレントのデータベースが4D Server上で閉じられるときに、サーバマシン上で一度呼び出されます。<!-- END REF-->4D Server以外の4D 環境では**On Server Shutdownデータベースメソッド**が起動されることはありません。

サーバ上のカレントデータベースを閉じるには、サーバ上で**データベースを閉じる...** メニューコマンドを使用します。また**4D Serverを終了** メニューコマンドを選択したり、サーバ上で実行されるストアドプロシージャ内で[QUIT 4D](quit-4d.md "QUIT 4D") コマンドを呼び出すこともできます。

データベースの終了が開始されると、4D は次の動作を実行します:

* **On Server Shutdownデータベースメソッド**がない場合、4D Server は実行中の各プロセスを区別なく1 つずつアボートします。
* **On Server Shutdownデータベースメソッド**がある場合、4D Server は新しく作成されたローカルプロセス内でこのメソッドの実行を開始します。したがって、このデータベースメソッドを使用し、プロセス間通信を介して、他のプロセスに対し、実行を停止するよう通知することができます。結局は、4D Server が終了するという点に注意してください**On Server Shutdownデータベースメソッド**では、片付けたり、クローズする操作をすべて実行することができますが、終了を拒否することはできないため、いずれかの時点で終了することになります。

**On Server Shutdownデータベースメソッド**は次の事柄を行うのに最適です:

* データベースが開かれた時に自動的に起動されたストアードプロシージャを停止する
* 次のセッションの始めに**On Server Shutdownデータベースメソッド**で再使用するために、初期設定や各種設定を（ディスク上にローカルに）保存する
* データベースが終了するたびに自動的に実行させたいその他の動作を実行する

**警告:** **On Server Shutdownデータベースメソッド**を使用してストアドプロシージャをクローズする場合、サーバは (ストアドプロシージャではなく)**On Server Shutdownデータベースメソッド**が実行されると終了することに留意してください。この時点でストアドプロシージャが起動されていると、それらはキルされます。  
このため、サーバによりキルされる前に、ストアドプロシージャが完全に実行されたことを確認したい場合、**On Server Shutdownデータベースメソッド**はストアドプロシージャに対し実行を終了しなければならないことを通知して (例えばインタープロセス変数を使用)、そして終了を待つようにするべきです (x秒のループや他のインタープロセス変数を使用)。

リモートの4Dがサーバへの接続を停止する時に、クライアントマシン上で自動的にコードを実行させたい場合には、[Semaphore](semaphore.md)を使用してください。
