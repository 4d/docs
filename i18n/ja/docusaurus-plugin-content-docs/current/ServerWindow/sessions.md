---
id: sessions
title: Sessions Page
---

The **Sessions** page lists all active sessions connected to the server, including Client, Web, REST, and SOAP sessions.

![](../assets/en/Admin/server-sessions-1.png)

The **Sessions** button indicates, in parentheses, the total number of active sessions (this number does not take into account any display filters applied to the window).

The page contains a dynamic search area, filtering controls, and administration buttons. ヘッダーエリアをドラッグ＆ドロップして、列の順番を入れ替えることができます。

You can also sort the list by clicking a column header. Click repeatedly to toggle between ascending and descending order.

![](../assets/en/Admin/server-sessions-sort-1.png)

## セッションの一覧

Each row represents one active session.

The list provides the following information:

- Icon representing the type of session (Apple for macOS Client sessions, Windows for Windows Client sessions, globe for Web, REST, and SOAP sessions). And an additional visual indicator shows whether the session is authenticated.
- **Origin**: Type of session (Client, Web, REST, or SOAP).
- **User Name**: Name of the connected 4D user, or the alias defined using the [`SET USER ALIAS`](../commands/set-user-alias) command when applicable. For Web, REST, or SOAP sessions, no user name is displayed unless one has been associated with the session using the `userName` property of the [`setPrivileges()`](../API/SessionClass.md#setprivileges) function.
- **Login Date**: Date and time when the session was established.
- **CPU Time**: CPU time consumed by the session since it was created.
- **Activity**: Percentage of server activity currently devoted to the session (dynamic value).
- **Status**: Status of the session. Client sessions can be **Online**, **[Sleeping](../Desktop/clientServer.md#management-of-sleeping-client-sessions)**, or **[Unreachable](../Desktop/clientServer.md#management-of-unreachable-peer)**. Web, REST, and SOAP sessions always have the **Online** status.

Additional information is available in the detail panel when a session is selected.

## Session detail panel

Selecting a session displays additional information in the lower panel.

### Client sessions

The following information is available:

- **System username**: Name of the operating system session opened on the remote machine.
- **IP address**: IP address of the remote machine that opened the session.
- **マシン名**: リモートマシンの名前。
- **4D Write Pro**: Indicates whether the session user belongs to a group that grants access to 4D Write Pro.
- **4D View Pro**: Indicates whether the session user belongs to a group that grants access to 4D View Pro.

### REST, Web, and SOAP sessions

The detail panel displays information such as:

- **Guest status**: Indicates whether the session is a Guest session. Guest sessions are unauthenticated Web sessions.
- **Privileges**: List of privileges associated with the session.
- **IP address**: IP address of the remote machine that opened the session.
- **User agent**: Identifies the client application, browser, or service that initiated the session.

### IP Lookup button

IP Lookup button is enabled when a public IP address is displayed. You can click on the button to retrieve the geolocation of the selected session.

If the information is available, the location is displayed next to the IP Lookup button in the format **City, Country**. Otherwise **Not found** is displayed.

## Search and Filtering

### Search bar

The search field can be used to reduce the number of rows displayed in the list to those that correspond to the text entered. The search is performed on the **User Name**, **Machine name**, **Session name**, and **IP address** columns.

The list is updated in real time as you enter text.

You can search for multiple values by separating them with a semicolon (`;`). In this case, the values are combined using the **OR** operator.

For example, if you enter:

```
John;Mary;REST
```

only rows containing **John**, **Mary**, or **REST** in the searchable columns are displayed.

### Session Type Filters

The Sessions page also provides quick filters to display only specific session types.

The following filters are available:

- **Counted sessions**:  includes only sessions counted for floating license consumption.
- **Clients**: includes only desktop client sessions.
- **Web**: includes only Web and SOAP sessions.
- **REST**: includes only REST sessions.

Filters can be enabled or disabled independently, or combined with other filters, and are applied immediately to the session list.

## 管理ボタン

There are three administration buttons: **Send message** is available when one or more Client sessions are selected. **Watch Processes** is available when a single session of any type is selected, and **Drop session** is available when one or more sessions of any type are selected.
You can select several rows by holding down the **Shift** key for an adjacent selection or the **Ctrl** (Windows) / **Command** (macOS) key for a non-adjacent selection.

### メッセージ送信

This button can be used to send a message to the selected **Client** session(s). If no Client session is selected, the button is not active. When you click this button, a dialog box appears that lets you enter the message. The dialog box also indicates the number of Client sessions that will receive the message:

![](../assets/en/Admin/server-message.png)

The message is displayed as an alert on the corresponding remote machines.

You can perform the same action programmatically using the [`SEND MESSAGE TO REMOTE USER`](../commands/send-message-to-remote-user) command.

### プロセス監視

This button can be used to directly show the processes associated with the selected session on the [**Processes** page](processes.md).

The process list is automatically filtered using the selected session UUID.

When multiple sessions are selected, this button is disabled.

### Drop session

This button can be used to force the selected Client session(s) to disconnect.

A confirmation dialog is displayed before the session is disconnected to confirm or cancel this operation (Hold down the **Alt** key while clicking **Drop user** to disconnect immediately without displaying the confirmation dialog).

You can perform the same action programmatically using the [`DROP REMOTE USER`](../commands/drop-remote-user) command.

## スリープしたクライアントセッションの管理

4D Server は、サーバーマシンへの接続がアクティブである間にスリープモードへと切り替わってしまった 4Dリモートアプリケーションを実行しているマシンについて、特別な管理をします。

この場合、リモートアプリケーションはスリープする前に4D Server へと自動的に知らせます。 対応するクライアントセッションはステータスは**Sleeping** へと変更されます。

![](../assets/en/Admin/server-sleep.png)

このステータスはセッションのコンテキストを保持しつつ、サーバー側のリソースを一部解放します。

リモートマシンがスリープモードから復帰した時、アプリケーションは再接続し、既存のセッションを復元します。

スリープ状態のクライアントセッションは、48時間活動がなかった場合には自動的にドロップされます。

この\タイムアウトを変更するには、[`SET DATABASE PARAMETER`](../commands/set-database-parameter) コマンドの `Remote connection sleep timeout` セレクターを使用します。

## 到達不能なピアの管理

[QUIC ネットワークレイヤーが使用されている](../settings/client-server.md#ネットワークレイヤー) 場合、クライアント/サーバーせションでは予期せぬ接続切断の場合に **自動再接続機能** の恩恵を受けることができます。 予期せぬ接続切断とは、例えば以下の様な場合を含みます:

- LAN ケーブルの抜き差し
- モバイル接続の移行
- スイッチの再起動
- 小さなネットワークエラー。

この機能はピアとの接続が切断された場合の、サーバー側とクライアント側との両方をサポートしており、また設定可能なタイムアウトとリアルタイム情報も含みます。

:::tip 関連したblog 記事

[Tired of network errors disrupting your users? 4D 21 R4 has the answer](https://blog.4d.com/tired-of-network-errors-disrupting-your-users-4d-21-r4-has-the-answer)

:::

### 到達不能イベント

QUIC ネットワークレイヤーは、リモート4D が予期せず対応できない状態になったときには、自動的に"到達不能"イベントを4D Server に送信します。逆に、4D Server が予期せず対応できない状態になったときには、リモート4D に"到達不能"イベントを自動的に送信します。 どちらか側で"到達不能" イベントが受信されると、その情報はインターフェース内とマシンの[`Session`](./sessions.md) オブジェクト内にて即座に反映されます。

#### リモート4D側が応答を停止した場合

リモート4D が予期せず応答を停止した場合、[サーバー管理ウィンドウ](../ServerWindow/overview.md) 上では、[リモートセッションのステータス](../ServerWindow/sessions.md#セッションの一覧) が**到達不能** に設定されます。

![](../assets/en/Desktop/unreachable-status.png)

#### サーバーが応答を停止した場合

4D Server が予期せず応答を停止した場合、リモートマシン上では再接続ダイアログボックスが表示されます:

![](../assets/en/Desktop/server-not-responding.png)

#### セッションオブジェクトの更新

どちらかで"Unreachable" イベントが受信された時、イベントを受信したマシン上のセッション内にて[`info.unreachableSince`](../API/SessionClass.md#info) プロパティが作成され(サーバー上ではこれは[`Process activity.sessions`](../commands/process-activity) プロパティを通して読み出し可能です)、また最後の通信からの秒数をカウントし始めます。 このプロパティを使用して独自の接続解除インターフェースを実装することができます。

### 接続の復元または解除

QUIC セッションのタイムアウトはデフォとでは900 秒(15分) となっており、これは[`SET DATABASE PARAMETER`](../commands/set-database-parameter) コマンドの`QUIC session timeout` セレクターを使用することで変更することができます。

QUIC セッションタイムアウトは、接続解除をモニターするために以下の様に自動的に使用されます:

- 接続がQUIC セッションタイムアウトに達する前に復元された場合、[`info.unreachableSince`](../API/SessionClass.md#info) プロパティはセッションオブジェクトから自動的に削除されます。
- 接続がQUIC セッションタイムアウトに達するまでに復元されなかった場合、セッションは閉じられます。
  - サーバーマシン上でリモートセッションが閉じられた場合、警告エントリーが[診断ログ](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) 内に書き込まれます。
  - リモートマシンにおいてサーバーセッションが閉じられた場合、警告ダイアログが表示され、ユーザーはリモートアプリケーションを再起動するか終了するかを選択することができます:
    ![](../assets/en/Desktop/remote-not-responding.png)

