---
id: sql-server
title: SQLサーバーページ
---

The **SQL Server** page groups together information about the integrated SQL server of 4D Server. また、SQLサーバーを有効にするためのボタンも含まれています。

![](../assets/en/Admin/server-admin-sql-page.png)

ページの上部には、4D Server の SQLサーバーの現在の状況が表示されます。

- **State**: Started or Stopped
- **Starting time**: Date and time the SQL server was last launched.
- **Uptime**: Time elapsed since last startup of the SQL server.

## SQLサーバー開始/停止

このボタンは切り替え表示され、4D Server SQLサーバーをコントロールするために使用します。

- When the SQL server state is "Started," the button is titled **Stop SQL Server**. このボタンをクリックすると、4D Server SQLサーバーは即座に停止し、指定した TCPポートで受信される外部からの SQLクエリには応答しなくなります。
- When the SQL server state is "Stopped," the button is titled **Start SQL Server**. このボタンをクリックすると、4D Server SQLサーバーは即座に開始し、指定した TCPポートで受信される外部からの SQLクエリに応答します。 4D SQLサーバーを使用するには、適切なライセンスが必要な点に注意してください。

> ストラクチャー設定で設定してアプリケーション起動と同時に、またはプログラムを使用して必要な時に、SQLサーバーを自動で開始することができます。

## 情報

### 設定

このエリアには、SQLサーバー設定のパラメーターが表示されます: 開始時の自動起動、待受IPアドレス、待受TCPポート (デフォルトで 19812)、そして SQL接続用の TSL の状態 (4D や Web接続は別設定)。

これらの値は 4D のストラクチャー設定で変更できます。

### 接続

4D Server上で現在開かれている SQL接続の数。

### 最大接続数

許可される同時SQL接続の最大数。 この値は、サーバーマシンにインストールされているライセンスによります。
