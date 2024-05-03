---
id: webServer
slug: overview
title: Web サーバー
---

4D のローカルモード、リモートモード、および 4D Server には Webサーバーエンジン (HTTPサーバー) があります。この Webサーバーエンジンを使用して、4Dデータベースを最大限に活用できる強力な Webアプリケーションを設計・公開することができます。

## 簡単なモニタリング

Webアプリケーションの公開は、いつでも開始または停止することができます。 メニューコマンドを選択、またはランゲージコマンドを実行するだけで、操作できます。

Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through [special URLs](webServerAdmin.md#administration-urls).

## すぐに使えます

4D Webサーバーは、デフォルトのルートフォルダーとデフォルトのホームページを自動作成するため、すぐに利用できます。

## セキュリティ

データセキュリティは、4D Webサーバーの実装のすべての段階に存在します。 セキュリティレベルは調整可能で、デフォルト設定では通常、もっとも安全なオプションが選択されます。 4D Webサーバーのセキュリティは、以下の要素に基づいています:

- Extended support of the [**TLS Protocol (HTTPS)**](../Admin/tls.md),

- **Authentication**: flexible and customizable [authentication features](authentication.md) based upon built-it settings as well as fallback database methods ([`On Web Authentication`](authentication.md#on-web-authentication) for the web server and [`On REST Authentication`](../REST/configuration.md#using-the-on-rest-authentication-database-method) for the REST server),

- **Control of exposed contents**: only elements that you expose explicitely can be available from direct web or REST requests. 次のものについて、宣言する必要があります:
  - [Project methods](templates.md#allowing-project-methods) exposed through HTTP requests
  - [ORDA functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) exposed through REST requests
  - [Tables and fields](REST/configuration.md#exposing-tables-and-fields) that you don't want to be available to REST requests.

- **Sandboxing** through the definition of a [HTML Root](webServerConfig.md#root-folder) folder by default,

- **Control of server resource usage** (e.g. [maximum concurrent web processes](webServerConfig.md#maximum-concurrent-web-processes) option).

> 4Dのセキュリティ機能の概要については、[4D Security guide](https://blog.4d.com/4d-security-guide/) をご覧ください。

## ユーザーセッション

The 4D web server includes complete automatic features for easily managing [web sessions](sessions.md) (user sessions) based on cookies.

## RESTリクエストへのゲートウェイ

4D Webサーバーにより、4Dアプリケーションに保存されているデータに RESTリクエストを通じてアクセスすることが可能になります。 RESTリクエストによって、データの追加・読み取り・編集・並べ替え・検索など、あらゆるデータベース操作に直接アクセスできます。

REST requests are detailed in the [REST server](REST/gettingStarted.md) section.

## 拡張設定

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the `WEB SET OPTION` command.

## テンプレートとURL

4D Webサーバーは、テンプレートページおよび専用のURLを介して、4Dアプリケーションに保存されているデータへのアクセスを提供します。

- Template pages contain [special tags](templates.md) that initiate web server processing at the time when they are sent to browsers.

- [specific URLs](httpRequests.md) enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms.

## 専用のデータベースメソッド

`On Web Authentication`, `On Web Connection`, as well as `On REST Authentication` database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request.
