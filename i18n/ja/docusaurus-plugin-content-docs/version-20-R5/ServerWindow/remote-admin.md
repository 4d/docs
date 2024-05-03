---
id: remote-admin
title: リモートマシンからの管理
---

クライアントマシンで 4D Server 管理の画面を開くと、リモートから 4D Server アプリケーションを管理することができます。

## リモートの 4D マシンで管理画面を開く

クライアントマシンからサーバー管理画面を開くには、デザイナーまたは管理者としてリモートデータベースに接続している必要があります。 そうでない場合、管理画面を開こうとすると、権限エラー (-9991) が発生します。

この画面には、次のいずれかの方法でアクセスできます:

- Choose the **Administration Window** command from the **Help** menu or click on the corresponding button in the 4D tool bar.
- Execute the `OPEN ADMINISTRATION WINDOW` command.

A [server administration window](monitor.md) then appears on the client machine.

## リモート 4D マシンからの管理の特徴

サーバー管理画面を表示しているクライアントマシンは、利用可能な情報すべてにアクセスでき、サーバーの起動/停止やプロセスの操作をおこなえます。 しかしながら、サーバー管理画面がリモートマシンに表示されている場合には、一定の制限と特有の機能に留意が必要です:

- On the [Process page](processes.md), it is not possible to debug a user process (since the debug window appears on the server machine).
- On the [Maintenance Page](maintenance.md), it is possible to execute actions that cause all the clients to be disconnected and the server to be restarted (compacting and restarting operations). この場合、操作を実行したクライアントマシンは、再起動時に自動的に再接続されます。
- On the [Maintenance Page](maintenance.md), the **View Report** buttons are renamed **Download Report** after the execution of a maintenance operation. これらのファイルは、クライアントマシンのローカルデータベースフォルダーにダウンロードされてから表示されます。
