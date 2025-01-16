---
id: webServerObject
title: Webサーバーオブジェクト
---

4Dプロジェクトは、メイン (ホスト) アプリケーションおよび、ホストされた各コンポーネントの Webサーバーを起動して監視することができます。

たとえば、メインアプリケーションに 2つのコンポーネントをインストールしている場合、アプリケーションから最大 3つの独立した Webサーバーを起動して監視することができます:

- ホストアプリケーションの Webサーバーを1つ
- コンポーネント#1 の Webサーバーを1つ
- コンポーネント#2 の Webサーバーを1つ

1つの 4Dアプリケーションプロジェクトに接続できるコンポーネントの数、つまり Webサーバーの数には、メモリ以外の制限はありません。

メインアプリケーションの Webサーバーを含む、各 4D Webサーバーは、`4D.WebServer` クラスの **オブジェクト** として公開されます。 インスタンス化された Webサーバーオブジェクトは、[多数のプロパティや関数](API/WebServerClass.md) を使用して、カレントのアプリケーションまたは任意のコンポーネントから操作することができます。

> 4Dランゲージの従来の [WEBコマンド](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.ja.html) はサポートされていますが、その対象となる Webサーバーを選択することはできません (後述参照)。

各 Webサーバー (ホストアプリケーションまたはコンポーネント) は、個別のコンテキストで使用できます。これには、以下が含まれます:

- `On Web Authentication` および `On Web Connection` データベースメソッドの呼び出し
- 4Dタグの処理とメソッドの呼び出し
- Webセッションや TLSプロトコルの管理

これにより、独自の Webインターフェースを備えた独立したコンポーネントや機能を開発することができます。

## Webサーバーオブジェクトのインスタンス化

ホストアプリケーション (デフォルトWebサーバー) の Webサーバーオブジェクトは、4D 起動時に自動的に読み込まれます。 したがって、新規作成したプロジェクトに次のように書いた場合:

```4d
$nbSrv:=WEB Server list.length   
//$nbSrv の値は 1
```

To instantiate a web server object, call the [`WEB Server`](commands/web-server.md) command:

```4d
	// 4D.WebServer クラスのオブジェクト変数を作成します。
var webServer : 4D.WebServer 
	// カレントコンテキストから Webサーバーを呼び出します
webServer:=WEB Server  

	// 以下と同じです
webServer:=WEB Server(Web server database)

```

アプリケーションがコンポーネントを使用している場合に:

- コンポーネントからホストアプリケーションの Webサーバーを呼び出す場合や
- リクエストを受け取ったサーバー (どのサーバーでも) を呼び出す場合

次を使うこともできます:

```4d
var webServer : 4D.WebServer 
    // コンポーネントからホストの Webサーバーを呼び出す  
webServer:=WEB Server(Web server host database)  
    // ターゲットの Webサーバーを呼び出す
webServer:=WEB Server(Web server receiving request)  

```

## Webサーバー関数

[Webサーバークラスのオブジェクト](API/webServerClass.md#webサーバーオブジェクト) には、以下の機能があります。

| 関数                                       | 引数                                   | 戻り値                                | 説明            |
| ---------------------------------------- | ------------------------------------ | ---------------------------------- | ------------- |
| [`start()`](API/WebServerClass.md#start) | settings (オブジェクト) | status (オブジェクト) | Webサーバーを開始します |
| [`stop()`](API/WebServerClass.md#start)  | -                                    | -                                  | Webサーバーを停止します |

Webサーバーを起動・停止するには、Webサーバーオブジェクトの [`start()`](API/WebServerClass.md#start) および [`stop()`](API/WebServerClass.md#stop) 関数を呼び出すだけです。

```4d
var $status : Object
    // デフォルトの設定で Webサーバーを起動する場合
$status:=webServer.start()
    // カスタム設定で Webサーバーを開始する場合  
    // $settings オブジェクトは、Wevサーバープロパティを格納します
webServer.start($settings)

    // Webサーバーを停止します
$status:=webServer.stop()

```

## Webサーバープロパティ

Webサーバーオブジェクトには、Webサーバーを構成する [さまざまなプロパティ](API/WebServerClass.md#webサーバーオブジェクト) が含まれています。

これらのプロパティは以下のように定義します:

1. [`.start()`](API/WebServerClass.md#start) 関数の `settings` パラメーターを使用して定義します (読み取り専用のプロパティを除く、後述参照)。
2. 上を使用しない場合は、`WEB SET OPTION` コマンドを使用して定義します (ホストアプリケーションのみ)。
3. 上を使用しない場合は、ホストアプリケーションまたはコンポーネントの設定で定義します。

- Webサーバーを起動していない場合、プロパティには Webサーバーの次回起動時に使用される値が含まれています。
- Webサーバーが起動されている場合、プロパティには Webサーバーで使用される実際の値が含まれます (デフォルトの定は [`.start()`](API/WebServerClass.md#start) 関数の `settings` パラメーターによって上書きされている可能性があります)。

> _isRunning_、_name_、_openSSLVersion_、_perfectForwardSecrecy_ は読み取り専用のプロパティで、[`start()`](API/WebServerClass.md#start)関数の `settings` オブジェクトパラメーターで事前に定義することはできません。

## 4D Webコマンドのスコープ

4Dランゲージには、Webサーバーの制御に使用できる [いくつかのコマンド](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.ja.html) があります。 ただし、これらのコマンドは 1つの (デフォルト) Webサーバーで動作するように設計されています。 これらのコマンドを Webサーバーオブジェクトのコンテキストで使用する場合は、そのスコープが適切であることを確認してください。

| コマンド                            | スコープ                |
| ------------------------------- | ------------------- |
| `SET DATABASE PARAMETER`        | ホストアプリケーション Webサーバー |
| `WEB CLOSE SESSION`             | リクエストを受け取った Webサーバー |
| `WEB GET BODY PART`             | リクエストを受け取った Webサーバー |
| `WEB Get body part count`       | リクエストを受け取った Webサーバー |
| `WEB Get Current Session ID`    | リクエストを受け取った Webサーバー |
| `WEB GET HTTP BODY`             | リクエストを受け取った Webサーバー |
| `WEB GET HTTP HEADER`           | リクエストを受け取った Webサーバー |
| `WEB GET OPTION`                | ホストアプリケーション Webサーバー |
| `WEB Get server info`           | ホストアプリケーション Webサーバー |
| `WEB GET SESSION EXPIRATION`    | リクエストを受け取った Webサーバー |
| `WEB Get session process count` | リクエストを受け取った Webサーバー |
| `WEB GET STATISTICS`            | ホストアプリケーション Webサーバー |
| `WEB GET VARIABLES`             | リクエストを受け取った Webサーバー |
| `WEB Is secured connection`     | リクエストを受け取った Webサーバー |
| `WEB Is server running`         | ホストアプリケーション Webサーバー |
| `WEB SEND BLOB`                 | リクエストを受け取った Webサーバー |
| `WEB SEND FILE`                 | リクエストを受け取った Webサーバー |
| `WEB SEND HTTP REDIRECT`        | リクエストを受け取った Webサーバー |
| `WEB SEND RAW DATA`             | リクエストを受け取った Webサーバー |
| `WEB SEND TEXT`                 | リクエストを受け取った Webサーバー |
| `WEB SET HOME PAGE`             | ホストアプリケーション Webサーバー |
| `WEB SET HTTP HEADER`           | リクエストを受け取った Webサーバー |
| `WEB SET OPTION`                | ホストアプリケーション Webサーバー |
| `WEB SET ROOT FOLDER`           | ホストアプリケーション Webサーバー |
| `WEB START SERVER`              | ホストアプリケーション Webサーバー |
| `WEB STOP SERVER`               | ホストアプリケーション Webサーバー |
| `WEB Validate digest`           | リクエストを受け取った Webサーバー |
