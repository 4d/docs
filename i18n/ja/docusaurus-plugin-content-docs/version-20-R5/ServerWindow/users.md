---
id: users
title: ユーザーページ
---

The **Users** page lists the 4D users connected to the server.

![](../assets/en/Admin/server-users.png)

"ユーザー" ボタンには、データベースに接続中のユーザ数が括弧内に表示されます (この番号は、ウィンドウに適用される表示フィルターを考慮しません)。 このページには、動的な検索エリアやコントロールボタンもあります。 ヘッダーエリアをドラッグ＆ドロップして、列の順番を入れ替えることができます。

また、ヘッダーをクリックすると、リストの値が並べ替えられます。 クリックするごとに昇順/降順が入れ替わります。

![](../assets/en/Admin/server-users-sort.png)

## ユーザーリスト

サーバーに接続したユーザーごとに、以下の情報がリストに表示されます:

- システム: クライアントマシンのシステム (macOS/Windows)。
- **4D User**: Name of the 4D user, or alias if set with the [`SET USER ALIAS`](https://doc.4d.com/4dv19/help/command/en/page1666.html) command on the user machine. パスワードシステムが有効になっていない場合、かつエイリアスも設定されていなければ、すべてのユーザーは "Designer" となります。
- **Machine name**: Name of the remote machine.
- **Session name**: Name of the session opened on the remote machine.
- **IP Address**: IP address of the remote machine.
- **Login date**: Date and time of the remote machine connection.
- **CPU Time**: CPU time consumed by this user since connecting.
- **Activity**: Ratio of time that 4D Server devotes to this user (dynamic display). リモートマシンがスリープモードに切り替わっている場合には "スリープ中" と表示 (以下参照)。

### スリープ中ユーザーの管理

4D Server は、サーバーマシンへのアクセスがアクティブである間にスリープモードへと切り替わってしまった 4Dリモートアプリケーションを実行しているマシンについて、特別な管理をします。 この場合、接続されている 4Dリモートアプリケーションはこの急な切断を 4D Server へと自動的に知らせます。 On the server, the connected user changes to a **Sleeping** activity status:

![](../assets/en/Admin/server-sleeping.png)

このステータスはサーバー側のリソースを一部解放します。 これに加え、4Dリモートアプリケーションはスリープモードから復帰したときに自動的に 4D Server へと再接続します。

サポートされるシナリオは、以下の様なものです: たとえばお昼休みなどでリモートユーザーが作業を中断するも、サーバーとの接続は開いたままにしたとします。 マシンはスリープモードへと切り替わります。 ユーザーが戻ってきてマシンをスリープから復帰させると、4Dリモートアプリケーションは自動的にサーバーへの接続を復元するとともにセッションコンテキストも復元します。

> スリープ状態のリモートセッションは、48時間活動しないとサーバーから自動的に切断されます。 You can modify this default timeout using the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv19/help/command/en/page642.html) command with the `Remote connection sleep timeout` selector.

## 検索/フィルターエリア

この機能を使用して、検索エリアに入力されたテキストに対応する行だけをリストに表示させ、行数を減らすことができます。 エリアには、どの列に対して検索/フィルターが実行されるかが表示されています。 ユーザーページでは、4D ユーザー、マシン名、そしてセッション名です。

エリアにテキストが入力されると、リストはリアルタイムで更新されます。 値をセミコロンで区切ることで、一つ以上の値を使用して検索をおこなうことができます。 The `OR` type operator is used in this case. たとえば、"John;Mary;Peter" と入力すると、John または Mary または Peter が対象となる列にある行のみが表示されます。

## 管理ボタン

このページには 3つのコントロールボタンがあります。 これらのボタンは、最低 1つの行が選択されているときに有効になります。 You can select several rows by holding down the **Shift** key for an adjacent selection or **Ctrl** (Windows) / **Command** (macOS) key for a non-adjacent selection.

### メッセージ送信

このボタンを使用して、ウィンドウで選択した 4Dユーザーにメッセージを送信できます。 ユーザーが選択されていないと、ボタンを使用できません。 ボタンをクリックするとダイアログボックスが表示され、メッセージを入力できます。 ダイアログにはメッセージを受信するユーザーの数が表示されます:

![](../assets/en/Admin/server-message.png)

クライアントマシン上でこのメッセージは警告メッセージとして表示されます。

> You can perfom the same action for remote users with the [`SEND MESSAGE TO REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1632.html) command.

### プロセス監視

This button can be used to directly show the processes of the user(s) selected on the [**Processes** page](processes.md) of the window. ボタンをクリックすると、4D Server はプロセスページに移動し、このページの検索/フィルターエリアに選択されたユーザー名を入力します。

### ユーザーをドロップ

このボタンは、選択したユーザーの接続を強制的に解除するために使用します。 When you click on this button, a warning dialog box appears so that you can confirm or cancel this operation (hold down **Alt** key while clicking on the **Drop user** button to disconnect the selected user(s) directly without displaying the confirmation dialog box).

> You can perfom the same action for remote users with the [`DROP REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1633.html) command.
