---
id: application-server
title: アプリケーションサーバーページ
---

アプリケーションサーバーページには、4D Server が公開しているデスクトップアプリケーションについての情報がまとめられていて、公開を管理できます。

![](../assets/en/Admin/server-admin-application-page.png)

ページの上部には、4D Server アプリケーションサーバーの現在の状況が表示されます。

- **State**: Started or Stopped.
- **Starting time**: Date and time the application server was launched. これは、4D Server によってプロジェクトが開かれた日付です。
- **Uptime**: Time elapsed since last opening of the project by the server.

## 新規接続を許可/拒否

このボタンは切り替え表示され、アプリケーションサーバーへの新しいデスクトップクライアントの接続を管理します。

プロジェクトが公開された時、デフォルトでは:

- ボタンのラベルは "新規接続を拒否" です。
- ライセンスが許可する限り、新規クライアントは自由に接続が可能です。
- プロジェクト名は接続ダイアログに公開されます ("起動時にデータベースを公開する" オプションがストラクチャー設定で有効になっている場合)。

If you click on the **Reject new connections** button:

- ボタンのラベルは "新規接続を許可" に変わります。
- 新規クライアントは接続不可になります。 接続しようとしたクライアントには以下のメッセージが表示されます:

![](../assets/en/Admin/server-error.png)

- 接続ダイアログにプロジェクト名が表示されなくなります。
- すでに接続済みのクライアントは接続解除されず、通常通りに操作が可能です。

> You can perform the same action with the [`REJECT NEW REMOTE CONNECTIONS`](https://doc.4d.com/4dv19/help/command/en/page1635.html) command.

- If you click on the **Accept new connections button**, the application server returns to its default state.

This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. 管理者がクライアント接続を使用する場合、この機能により一つのクライアントだけがデータを更新できることを確実にできます。 また、クライアントマシンが接続されていない状態でおこなわなければならないメンテナンス操作の準備のために、この機能を使用することができます。

## 情報

### 設定

このエリアには、サーバーが公開する 4Dプロジェクトについての情報 (データやストラクチャーファイルの名称と場所、データベースログファイルの名称) が表示されます。 ストラクチャーやデータファイル名をクリックすると、完全なパス名を表示させることができます。

The **Mode** field indicates the current execution mode of the application: compiled or interpreted.

エリアの下部には、サーバー設定パラメーター (サービスとして起動、ポート、IP アドレス) や、クライアント/サーバー接続用の TSL の状態 (SQL や HTTP接続は別設定) が表示されます。

### メモリ

This area indicates the **Total cache memory** (parameter set in the settings) and the **Used cache memory** (dynamic allocation by 4D Server according to its needs).

### アプリケーションサーバー接続数

- **Maximum**: maximum number of simultaneous client connections allowed for the application server. この値は、サーバーマシンにインストールされているライセンスによります。
- **Used**: actual number of connections currently being used.
