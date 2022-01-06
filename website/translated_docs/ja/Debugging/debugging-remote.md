---
id: debugging-remote
title: リモートマシンからのデバッグ
---

## 概要

4Dデータベースが 4D Server 上で動いている場合、プロジェクトにログインしているリモート4Dクライアントからサーバーで実行中の 4Dコードをデバッグすることができます。 特定のリモートマシンでデバッガーを起動すると、そのリモートマシン上で直接、コードの実行をモニターすることができます。

リモートマシン上で起動された [デバッガー](debugger.md) には、サーバーコードのデバッグ中であることを示すサーバーアイコンと青い背景色のデバッグアイコンが表示されるほか、呼び出し連鎖と式のペインの背景が薄っすらと青く色づきます:

![デバッガーウィンドウ-リモート](assets/en/Debugging/debuggerWindowRemote.png)

この機能は、4D Server がヘッドレスモード ([コマンドラインインターフェース](../Admin/cli.md) 参照) で実行中、あるいはサーバーマシンへのアクセスが難しい場合などに特に有用です。


## 有効化済デバッガー

4D Serverアプリケーションのデバッグは、一度に一つのデバッガーのみがおこなえます。 これを **有効化済デバッガー** と呼びます。 有効化済デバッガーには、以下の 2種類あります:

* ローカルの 4D Serverデバッガー (デフォルト) - サーバーがヘッドレス実行されていない場合
* リモート4Dクライアントのデバッガー - リモートセッションがデザインモードにアクセス可能な場合

有効化済デバッガーは、4D Server が次のいずれかに遭遇した場合に呼び出されます:
* ブレークポイント
* `TRACE` コマンド
* キャッチコマンド
* エラー

エラーメッセージは、デバッガーが有効化されているマシンに送られるという点に注意してください。 これはつまり、リモートデバッガーの場合には、サーバーのエラーメッセージがリモート4Dクライアント上で表示されるということです。

注:
* `On Server Startup` データベースメソッドで実行されたコードはリモートでデバッグすることができません。 これはサーバー側でしかデバッグすることができません。
* デバッガーが有効化されていない場合、実行中のコードがデバッグコマンドによって中断されることはありません。


## Attaching the debugger

By default when you start an application:

* if 4D Server is not running headless, the debugger is attached to the server,
* if 4D Server is running headless, no debugger is attached.

4D Serverアプリケーションに接続できるリモート4Dクライアントであれば、サーバーのデバッガーを有効化することができます。

> リモート4Dクライアントのユーザーセッションは、データベースのデザイン環境へのアクセス権を持っている必要があります。

サーバーのデバッガーをリモート4Dクライアントで有効化するには:

1. In the 4D Server menu bar, select **Edit** > **Detach Debugger** so that the debugger becomes available to remote machines (this step is useless if the 4D Server is running headless).
2. サーバーに接続されたリモート4Dクライアントから、**実行** ＞ **リモートデバッガを有効化する** を選択します。

有効化に成功した場合 ([有効化リクエストの拒否](#有効化リクエストの拒否) 参照)、メニューコマンドは **リモートデバッガを無効化する** へと変わります。

これで、サーバーのデバッガーはリモート4Dクライアントで有効化され、以下のタイミングまで有効化されたままです:
* ユーザーセッションが終了するまで
* ユーザーが `リモートデバッガを無効化する` を選択するまで

To attach the debugger back to the server:

1. On the remote 4D client that has the debugger attached, select **Run** > **Detach Remote Debugger**.
2. In the 4D Server menu bar, select **Edit** > **Attach debugger**.


## Attaching debugger at startup

デバッガーは、リモート4Dクライアントまたはサーバーの開始時に自動的に有効化することができます:

* サーバー側の場合 (ヘッドレスモードでなければ)、このオプションは **デバッガを開始時に有効化する** という名前です。 サーバーが開始されると、自動的にデバッガーが有効化されます (デフォルト):

> **警告**: のちにヘッドレスモードで起動されるサーバーにおいてこのオプションが選択されたままの場合、このサーバーのデバッガーは利用できません。

* リモート4Dクライアントでは、このオプションは **リモートデバッガを開始時に有効化する** という名前です。 このオプションが選択されている場合、リモート4Dクライアントは、その後同じ 4D Serverデータベースに接続するたびに、自動的にリモートデバッガーを有効化しようとします。 成功した場合 ([有効化リクエストの拒否](#有効化リクエストの拒否) 参照)、リモートデバッガーは自動的にリモート4Dクライアントで有効化され、メニューコマンドは **リモートデバッガを無効化する** へと変わります。

> この設定はプロジェクトごとに、[`.4DPreferences`](Project/architecture.md#userpreferencesusername) ファイル内にローカル保存されます。

## 有効化リクエストの拒否

While the debugger is already attached to a remote 4D client or to 4D Server, no other machine can attach the debugger.

別マシンにて有効化済のデバッガーを有効化しようとした場合、その有効化リクエストは拒否され、以下のようなダイアログが表示されます:

![デバッガー有効化ダイアログ](assets/en/Debugging/attach-debugger-dialog.png)

![デバッガー有効化ダイアログ2](assets/en/Debugging/attach-debugger-dialog-2.png)

このような場合に、デバッガーを有効化するには、以下のどちらかの条件が必要です:

* the attached debugger is detached from the server or from the remote 4D client using respectively the **Detach debugger** or **Detach remote debugger** menu command,
* the attached remote 4D client session is closed.
