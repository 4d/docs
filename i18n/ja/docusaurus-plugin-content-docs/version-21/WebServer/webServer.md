---
id: webServer
slug: overview
title: Web サーバー
---

4D in local mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.

:::warning Deprecated feature

Using the web server on a remote 4D is **deprecated** as of 4D 21. It is no longer recommended to use this feature.

:::

## 簡単なモニタリング

Webアプリケーションの公開は、いつでも開始または停止することができます。 メニューコマンドを選択、またはランゲージコマンドを実行するだけで、操作できます。

Monitoring the 4D web server is easy and can be done using the [4D Server administration window](../ServerWindow/http-server.md) or through [special URLs](webServerAdmin.md#administration-urls).

## すぐに使えます

4D Webサーバーは、デフォルトのルートフォルダーとデフォルトのホームページを自動作成するため、すぐに利用できます。

## セキュリティ

データセキュリティは、4D Webサーバーの実装のすべての段階に存在します。 セキュリティレベルは調整可能で、デフォルト設定では通常、もっとも安全なオプションが選択されます。 4D Webサーバーのセキュリティは、以下の要素に基づいています:

- [**TLSプロトコル (HTTPS)**](../Admin/tls.md) の拡張サポート。

- **Authentication**: flexible and customizable [authentication features](authentication.md) based upon built-it settings as well as fallback database methods ([`On Web Authentication`](authentication.md#on-web-authentication) for the web server and `On REST Authentication` for the REST server),

- **公開するコンテンツの管理**: 明示的に公開した要素のみが、Web や RESTリクエストで直接利用できます。 次のものについて、宣言する必要があります:
  - [Project methods](templates.md#accessing-4d-methods-via-the-web) exposed through HTTP requests
  - RESTリクエストで公開する [ORDAのデータモデルクラス関数](../ORDA/ordaClasses.md#公開vs非公開関数)
  - RESTリクエストに公開しない [テーブルやフィールド](REST/configuration.md#テーブルやフィールドの公開) テーブルやフィールド

- [デフォルトHTMLルート](webServerConfig.md#ルートフォルダー) フォルダーを定義することによる **サンドボックス化**

- **サーバーによるリソース使用の管理** (例: [最大同時Webプロセス](webServerConfig.md#最大同時webプロセス)オプション)

> 4Dのセキュリティ機能の概要については、[4D Security guide](https://blog.4d.com/4d-security-guide/) をご覧ください。

## ユーザーセッション

4D Webサーバーには cookie を使用する、完全に自動化された [Webセッション](sessions.md) (ユーザーセッション) 管理機能があります。

## RESTリクエストへのゲートウェイ

4D Webサーバーにより、4Dアプリケーションに保存されているデータに RESTリクエストを通じてアクセスすることが可能になります。 REST requests provide direct access to any [ORDA](../ORDA/overview.md) operation such as adding, reading, editing, ordering, or searching data.

RESTリクエストの詳細については、[RESTサーバー](../REST/gettingStarted.md) のセクションを参照ください。

## 拡張設定

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the [`WEB SET OPTION`](../commands-legacy/web-set-option.md) command.

## テンプレートとURL

4D Webサーバーは、テンプレートページおよび専用のURLを介して、4Dアプリケーションに保存されているデータへのアクセスを提供します。

- テンプレートページには、ブラウザーに送信される際に Webサーバーの処理を開始する [特別なタグ](templates.md) が含まれています。

- [専用のURL](httpRequests.md) は、任意のアクションを実行するために 4D を呼び出すもので、ユーザーが HTMLフォームを POST したときに処理を開始するフォームアクションとしても使用できます。

## 専用のデータベースメソッド

`On Web Authentication`、`On Web Connection`、および `On REST Authentication` データベースメソッドは、Webサーバーにおいてリクエストのエントリーポイントであり、あらゆるタイプのリクエストを評価・ルーティングするのに使用できます。
