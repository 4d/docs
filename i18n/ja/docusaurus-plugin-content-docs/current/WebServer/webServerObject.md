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

Each 4D web server, including the main application's web server, is exposed as a specific **object** of the `4D.WebServer` class. Once instantiated, a web server object can be handled from the current application or from any component using a [large number of properties and functions](API/WebServerClass.md).

> The legacy [WEB commands](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) of the 4D language are supported but cannot select the web server to which they apply (see below).

各 Webサーバー (ホストアプリケーションまたはコンポーネント) は、個別のコンテキストで使用できます。これには、以下が含まれます:

- `On Web Authentication` and `On Web Connection` database method calls
- 4Dタグの処理とメソッドの呼び出し
- Webセッションや TLSプロトコルの管理

これにより、独自の Webインターフェースを備えた独立したコンポーネントや機能を開発することができます。

## Webサーバーオブジェクトのインスタンス化

ホストアプリケーション (デフォルトWebサーバー) の Webサーバーオブジェクトは、4D 起動時に自動的に読み込まれます。 したがって、新規作成したプロジェクトに次のように書いた場合:

```4d
$nbSrv:=WEB Server list.length   
//$nbSrv の値は 1
```

To instantiate a web server object, call the [`WEB Server`](API/WebServerClass.md#web-server) command:

```4d
	//create an object variable of the 4D.WebServer class
var webServer : 4D.WebServer 
	//call the web server from the current context
webServer:=WEB Server  

	//equivalent to
webServer:=WEB Server(Web server database)
```

アプリケーションがコンポーネントを使用している場合に:

- コンポーネントからホストアプリケーションの Webサーバーを呼び出す場合や
- リクエストを受け取ったサーバー (どのサーバーでも) を呼び出す場合

次を使うこともできます:

```4d
var webServer : 4D.WebServer 
	//call the host web server from a component  
webServer:=WEB Server(Web server host database)  
	//call the target web server
webServer:=WEB Server(Web server receiving request)  
```

## Webサーバー関数

A [web server class object](API/WebServerClass.md#web-server-object) contains the following functions:

| 関数                                       | 引数                                   | 戻り値                                | 説明            |
| ---------------------------------------- | ------------------------------------ | ---------------------------------- | ------------- |
| [`start()`](API/WebServerClass.md#start) | settings (オブジェクト) | status (オブジェクト) | Webサーバーを開始します |
| [`stop()`](API/WebServerClass.md#start)  | -                                    | *                                  | Webサーバーを停止します |

To start and stop a web server, just call the [`start()`](API/WebServerClass.md#start) and [`stop()`](API/WebServerClass.md#stop) functions of the web server object:

```4d
var $status : Object
  	//to start a web server with default settings
$status:=webServer.start()
	//to start the web server with custom settings  
	//$settings object contains web server properties
webServer.start($settings)

	//to stop the web server
$status:=webServer.stop()
```

## Webサーバープロパティ

A web server object contains [various properties](API/WebServerClass.md#web-server-object) which configure the web server.

これらのプロパティは以下のように定義します:

1. using the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function (except for read-only properties, see below),
2. if not used, using the `WEB SET OPTION` command (host applications only),
3. 上を使用しない場合は、ホストアプリケーションまたはコンポーネントの設定で定義します。

- Webサーバーを起動していない場合、プロパティには Webサーバーの次回起動時に使用される値が含まれています。
- If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function.

> _isRunning_, _name_, _openSSLVersion_, and _perfectForwardSecrecy_ are read-only properties that cannot be predefined in the `settings` object parameter for the [`start()`](API/WebServerClass.md#start) function.

## 4D Webコマンドのスコープ

The 4D Language contains [several commands](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) that can be used to control the web server. ただし、これらのコマンドは 1つの (デフォルト) Webサーバーで動作するように設計されています。 これらのコマンドを Webサーバーオブジェクトのコンテキストで使用する場合は、そのスコープが適切であることを確認してください。

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
