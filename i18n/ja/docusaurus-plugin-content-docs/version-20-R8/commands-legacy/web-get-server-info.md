---
id: web-get-server-info
title: WEB Get server info
slug: /commands/web-get-server-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get server info.Syntax-->**WEB Get server info** {( *withCache* )} : Object<!-- END REF-->
<!--REF #_command_.WEB Get server info.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| withCache | Boolean | &#8594;  | Webキャッシュ詳細を返すためにはTrue、それ以外の場合(デフォルト)ではキャッシュ詳細は返されない |
| 戻り値 | Object | &#8592; | 実行中のWebサーバーとSOAPサーバーの情報 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB Get server info.Summary-->**WEB Get server info** コマンドは、4D Web サーバーのカレントのセッションの詳細なランタイム情報を格納したオブジェクトを返します。<!-- END REF-->返された情報にはSOPA サーバーのものも含まれます。

**注:** このコマンドはランタイムの情報、つまりWeb サーバーで実際に使われているパラメーターを返します。これらのパラメーターは、[WEB GET OPTION](web-get-option.md) コマンドで返されたものとは異なる可能性があります。なぜならシステム設定や利用可能なリソースによって変化するためです。

デフォルトでは、コマンドは"cache"プロパティを返しません。そのサイズが大きくなりうるためです。しかしながら、キャッシュの中身を知りたい場合には、任意の*withCache* 引数にTrueを渡して下さい。

返されたオブジェクトには以下のプロパティが含まれます(プロパティ名は大文字と小文字を区別します):  

| **プロパティ名**                  | **値の型** | **詳細**                                                                                                                               |
| --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| started                     | ブール     | httpサーバーが開始されていればTrue、そうでなければFalse                                                                                                   |
| uptime                      | 数値      | httpサーバーが最後に開始されてからの経過時間                                                                                                             |
| httpRequestCount            | 数値      | サーバーが開始されてからのhttpヒットの回数                                                                                                              |
| startMode                   | 文字列     | "開始時にWebサーバーを開始"がチェックされていれば"automatic"、それ以外は"manual"                                                                                 |
| SOAPServerStarted           | ブール     | SOAPサーバーが開始されていればTrue、そうでなければFalse                                                                                                   |
| cache                       | オブジェクト  | *このプロパティは* *withCache* **引数のプロパティ値がTrueであった場合のみ含まれます。*Web サーバーキャッシュの中身の情報です(以下の*cacheプロパティ* を参照して下さい)。                               |
| security                    | オブジェクト  | 様々なセキュリティのオプションについてのカレントの状態                                                                                                          |
| cipherSuite                 | 文字列     | 4Dが安全なプロトコルに使用している暗号化リスト(SSL cipher list のデータベースパラメーターに対応します)                                                                        |
| HTTPEnabled                 | ブール     | HTTP が有効化されている場合にはTrue                                                                                                               |
| HTTPSEnabled                | ブール     | HTTPS が有効化されている場合にはTrue                                                                                                              |
| HSTSEnabled                 | ブール     | HSTS がサーバーで有効化されている場合にはTrue                                                                                                          |
| HSTSMaxAge                  | 数値      | HSTS の最大年数(秒単位)。デフォルトは2年(63,072,000 秒)です。                                                                                            |
| minTLSVersion               | 文字列     | 接続を受け入れる最低限のTLSバージョン(Min TLS version のデータベースパラメーターに対応します)                                                                            |
| openSSLVersion              | 文字列     | 使用されているOpenSSL ライブラリのバージョン                                                                                                           |
| perfectForwardSecrecy       | ブール     | PFSがサーバーで利用可能であればTrue、それ以外の場合にはFalse                                                                                                 |
| options                     | オブジェクト  | 様々な標準のWebサーバーオプションについてのカレントの状態                                                                                                       |
| CORSEnabled                 | ブール     | CORS サービスがサーバーで有効化されていればTrue、それ以外の場合にはFalse(デフォルト)                                                                                   |
| CORSSettings                | コレクション  | 許可されたホストとメソッドの一覧を定義するCORS オブジェクトのコレクション(Web CORS settings のweb optionを参照)                                                            |
| webCharacterSet             | 文字列     | 文字セット名(Web character set Web オプションに対応します)                                                                                            |
| webHTTPCompressionLevel     | 数値      | 圧縮HTTP交換での圧縮レベル(Web HTTP compression level Web オプションに対応します)                                                                          |
| webHTTPCompressionThreshold | 数値      | 圧縮のスレッショルド(Web HTTP compression threshold Web オプションに対応します)                                                                           |
| webHTTPSPortID              | 数値      | Web サーバーによって安全な接続に使用されるTCP ポート番号(Web HTTPS port ID Web オプションに対応します)                                                                  |
| *webInactiveProcessTimeout* | 数値      | **スケーラブルWeb セッションでは特に意味を持ちません、** ***Webセッション管理(旧式)* を参照してください。**アクティブでないセッションプロセスの保持時間(Web inactive session timeout Web オプションに対応します) |
| *webInactiveSessionTimeout* | 数値      | ****スケーラブルWeb セッションでは特に意味を持ちません、 *Webセッション管理(旧式)* を参照してください。**アクティブでないセッションの保持時間(Web inactive session timeout Web オプションに対応します)       |
| webIPAddressToListen        | コレクション  | Web サーバーがhttp リクエストを受け付ける、定義された"フォーマット"になっているIPアドレス(Web IP address to listen Web オプションに対応します)                                        |
| *webMaxConcurrentProcesses* | 数値      | ****スケーラブルWeb セッションでは特に意味を持ちません、 *Webセッション管理(旧式)* を参照してください。**同Web プロセスの最大同時接続数(Web max concurrent processes Web オプションに対応します)。       |
| webPortID                   | Number  | Web サーバーが使用するTCP ポート番号(Web port ID Web オプションに対応します)                                                                                  |

**4D Server:** コマンドはローカルのWeb サーバーについての情報を返します。4D Server のWeb サーバーをリモートからモニターしたい場合にはメソッドの"サーバーで実行"プロパティを適用する必要があります。

##### cacheプロパティ 

*withCache* 引数に**true** を渡した場合、コマンドは以下の中身を格納した"cache" オブジェクトプロパティを返します:

| **プロパティ名**      | **値の型**    | **詳細**                                                                                                     |
| --------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| cacheUsage      | Number     | キャッシュ使用率                                                                                                   |
| numOfLoads      | Number     | 読み込んだオブジェクトの数                                                                                              |
| currentSize     | Number     | キャッシュのカレントのサイズ                                                                                             |
| maxSize         | Number     | キャッシュの最大サイ                                                                                                 |
| objectMaxSize   | Number     | キャッシュ内に読み込み可能なオブジェクトの最大数                                                                                   |
| enabled         | Boolean    | Web サーバーキャッシュが有効化されている場合にはtrue                                                                             |
| nbCachedObjects | Number     | キャッシュ内のオブジェクトの数                                                                                            |
| cachedObjects   | Collection | キャッシュ内のオブジェクトのコレクション。それぞれのキャッシュされたオブジェクトは異なるプロパティ(url、mimeType、expirationType、lastModified、等)によって定義されています。 |

#### 例題 

以下のコードを実行した場合:

```4d
 $webServerInfo:=WEB Get server info(True)
```

... $webServerInfo の中身は、一例として、以下のようになります:

```json
{   "started": true,   "uptime": 40,   "SOAPServerStarted": true,   "startMode": "manual",   "httpRequestCount": 0,   "options": {      "CORSEnabled": false,      "CORSSettings": null,      "webCharacterSet": "UTF-8",      "webHTTPCompressionLevel": 1,      "webHTTPCompressionThreshold": 1024,      "webHTTPSPortID": 443,      "webIPAddressToListen": ["192.168.xxx.xxx"],      "webInactiveProcessTimeout": 28800,      "webInactiveSessionTimeout": 28800,      "webMaxConcurrentProcesses": 100,      "webPortID": 80   },   "security": {      "HTTPEnabled": true,      "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256:...:CAMELLIA128-SHA",      "openSSLVersion": "OpenSSL 1.0.2h 3 May 2016",      "perfectForwardSecrecy": true,      "minTLSVersion": "1.2"    },    "cache": {        "cacheUsage": 1,        "numOfLoads": 24,        "currentSize": 154219,        "maxSize": 10485760,        "objectMaxSize": 524288,        "enabled": true,        "nbCachedObjects": 23,        "cachedObjects": [            {...},{...}         ]   }}
```

#### 参照 

[License info](license-info.md)  
[Process activity](../commands/process-activity.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1531 |
| スレッドセーフである | &check; |


