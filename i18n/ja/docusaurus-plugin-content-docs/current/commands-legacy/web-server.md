---
id: web-server
title: WEB Server
slug: /commands/web-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server.Syntax-->**WEB Server** {( *option* )} -> 戻り値<!-- END REF-->
<!--REF #_command_.WEB Server.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#x1F852; | 状態を取得したいWebサーバー(省略時のデフォルト = データベースWebサーバー) |
| 戻り値 | Object | &#x1F850; | Web serverオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB Server.Summary-->**WEB Server** コマンドは、データベースWeb サーバーオブジェクト、または*option* 引数で指定されたWeb サーバーオブジェクトを返します。<!-- END REF-->

デフォルトでは、*option* 引数が省略された場合、このコマンドはデータベースのWebサーバー(デフォルトのWebサーバー)への参照を返します。返すWebサーバーを指定するためには、*option* 引数に*Web Server* テーマ内の以下の定数のいづれか一つを渡してください:

| 定数                           | 値 | コメント                              |
| ---------------------------- | - | --------------------------------- |
| Web server database          | 1 | カレントデータベースのWebサーバー(省略時のデフォルト)     |
| Web server host database     | 2 | コンポーネントのホストデータベースのWebサーバー         |
| Web server receiving request | 3 | リクエストを受け取ったWeb サーバー(ターゲットWebサーバー) |

##### 返されるオブジェクト 

返される*Web server* オブジェクトには、以下の読み出し専用プロパティとメソッドが格納されています:

| **プロパティ <br/>**    | **型 <br/>** | **詳細**                                                                                         |
| -------------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| certificateFolder          | テキスト                | 認証ファイルが保存されているフォルダ                                                                             |
| characterSet               | 数値                  | 文字セットの番号                                                                                       |
| cipherSuite                | テキスト                | 保護されたプロトコルのために使用されている暗号化リスト                                                                    |
| CORSEnabled                | ブール                 | CORS サービス状態                                                                                    |
| CORSSettings               | コレクション              | CORS サービスに許可されたホストとメソッドの一覧(テキスト型の*host* および *methods* プロパティを持ったオブジェクトのコレクション)                  |
| debugLog                   | 数値                  | デバッグログのセレクター値                                                                                  |
| defaultHomepage            | テキスト                | デフォルトのホームページ                                                                                   |
| HSTSEnabled                | ブール                 | HSTS プロトコル状態                                                                                   |
| HSTSMaxAge                 | 数値                  | HSTS ライフ期間                                                                                     |
| HTTPCompressionLevel       | 数値                  | HTTP 圧縮レベル                                                                                     |
| HTTPCompressionThreshold   | 数値                  | HTTP 圧縮のしきい値                                                                                   |
| HTTPEnabled                | ブール                 | HTTP プロトコル状態                                                                                   |
| HTTPPort                   | 数値                  | HTTP の受信IPポート番号                                                                                |
| HTTPTrace                  | ブール                 | HTTP TRACE の有効化状態                                                                              |
| HTTPSEnabled               | ブール                 | HTTPS プロトコル状態                                                                                  |
| HTTPSPort                  | 数値                  | HTTPS の受信IPポート番号                                                                               |
| inactiveSessionTimeout     | 数値                  | アクティブでないセッションプロセスのライフ期間                                                                        |
| inactiveProcessTimeout     | 数値                  | アクティブでないセッションのライフ期間                                                                            |
| IPAddressToListen          | テキスト                | 受信するIP アドレス、あるいは特に指定しない場合には"0.0.0.0"                                                           |
| isRunning                  | ブール                 | Web サーバーの実行状態 - *settingsオブジェクトを使用して設定はできません*                                                  |
| keepSession                | ブール                 | 旧式セッションのステータス                                                                                  |
| logRecording               | 数値                  | ログ記録値                                                                                          |
| maxConcurrentProcesses     | 数値                  | 最大同時Webプロセス数                                                                                   |
| maxRequestSize             | 数値                  | 最大リクエストサイズ                                                                                     |
| maxSessions                | 数値                  | 最大セッション数                                                                                       |
| minTLSVersion              | 数値                  | 接続に必要な最小TLSバージョン                                                                               |
| name                       | テキスト                | Web サーバーデータベースの名前 - *settings* *オブジェクトを使用して設定はできません*                                           |
| openSSLVersion             | テキスト                | 使用されているOpenSSL ライブラリのバージョン - *settings* *オブジェクトを使用して設定はできません*                                  |
| perfectForwardSecrecy      | ブール                 | サーバーのPFS 利用可否状況 - *settings* *オブジェクトを使用して設定はできません*                                             |
| rootFolder                 | テキスト                | ルートフォルダパス。ファイルシステムを使用したPOSIXフルパスフォーマットです。*settings* 引数の[Folder](folder.md) オブジェクトとして渡すことができます。 |
| scalableSession            | ブール                 | スケーラブルセッション管理ステータス                                                                             |
| sessionCookieDomain        | テキスト                | セッションcookie ドメイン                                                                               |
| sessionCookieName          | テキスト                | セッションcookie 名 - *スケーラブルセッション管理モードでは設定オブジェクトを使用して設定できません。*                                      |
| sessionCookiePath          | テキスト                | セッションcookie パス                                                                                 |
| sessionIPAddressValidation | ブール                 | セッションIP アドレス解決                                                                                 |

これらのプロパティはホストデータベースまたはコンポーネントのデータベース設定内で定義されています。ホストデータベースの場合、[WEB SET OPTION](web-set-option.md) コマンドを使用してこれらを上書きすることができます。

**注:** これらのプロパティは*webServer.start( )* メソッドの*settings* 引数を使用することで変更することが可能です(ただし*settings* *オブジェクトを使用して設定はできません*のタグがあるものを除く)。Webサーバーが開始すると、*settings* 引数で変更された値に応じて、**WEB Server** で返されたオブジェクト内部も更新されます。これらの値はそのあとに続くWeb サーバーセッションにおいてのみ使用されます(*webServer.stop( )* メソッドが呼び出されるとこれらはリセットされます)。

| **メソッド**             | **詳細**       |
| -------------------- | ------------ |
| *webServer.start( )* | Webサーバーを開始する |
| *webServer.stop( )*  | Webサーバーを停止する |

#### 例題 

コンポーネント内から、ホストデータベースのWebサーバーが開始されているかどうかを知りたい場合を考えます:

```4d
  // コンポーネントのメソッド
 var $hostWS : Object
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

#### 参照 

[WEB Server list](web-server-list.md)  
*webServer.stop( )*  