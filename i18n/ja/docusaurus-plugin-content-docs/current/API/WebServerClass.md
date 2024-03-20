---
id: WebServerClass
title: WebServer
---


`WebServer` クラス API を使って、メイン (ホスト) アプリケーションおよび、各コンポーネントの Webサーバーを開始・モニターすることができます ([Webサーバーオブジェクト](WebServer/webServerObject.md) 参照)。 このクラスは `4D` クラスストアより提供されます。

### Webサーバーオブジェクト

Webサーバーオブジェクトは [`WEB Server`](#web-server) コマンドによってインスタンス化されます。

これらは、次のプロパティや関数を持ちます:

### 概要

|                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->|
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->|
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->|
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->|
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->|
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->|
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary -->|
| [<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->|
| [<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->|

## WEB Server

<details><summary>履歴</summary>

| バージョン  | 内容                           |
| ------ | ---------------------------- |
| v18 R3 | 追加                           |
| v19    | .sessionCookieSameSite をサポート |

</details>

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->


<!-- REF #_command_.WEB Server.Params -->

| 引数     | タイプ          |    | 説明                                               |
| ------ | ------------ | -- | ------------------------------------------------ |
| option | Integer      | -> | 取得する Webサーバー (省略時のデフォルト = `Web server database`) |
| 戻り値    | 4D.WebServer | <- | WebServer オブジェクト                                 |

<!-- END REF -->

`WEB Server` コマンドは、 <!-- REF #_command_.WEB Server.Summary -->デフォルトの Webサーバーオブジェクト、または *option* 引数で指定された Webサーバーオブジェクトを返します<!-- END REF -->。

*option*が省略された場合のデフォルトでは、このコマンドはデータベースの Webサーバー (デフォルトWebサーバー) への参照を返します。 取得する Webサーバーを指定するには、*option* に以下の定数のいずれか一つを渡してください:

| 定数                             | 値 | 説明                                 |
| ------------------------------ | - | ---------------------------------- |
| `Web server database`          | 1 | カレントデータベースの Webサーバー( 省略時のデフォルト)    |
| `Web server host database`     | 2 | コンポーネントのホストデータベースの Webサーバー         |
| `Web server receiving request` | 3 | リクエストを受け取った Webサーバー (ターゲットWebサーバー) |

返される Webサーバーオブジェクトには、Webサーバープロパティのカレント値が格納されています。

#### 例題

コンポーネント内から、ホストデータベースの Webサーバーが開始されているかどうかを確認します:

```4d
  // コンポーネントのメソッド
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

<!-- REF #_command_.WEB Server list.Syntax -->**WEB Server list** : Collection<!-- END REF -->


<!-- REF #_command_.WEB Server list.Params -->

| 引数  | タイプ        |    | 説明                         |
| --- | ---------- | -- | -------------------------- |
| 戻り値 | Collection | <- | 利用可能な Webサーバーオブジェクトのコレクション |

<!-- END REF -->

`WEB Server list` コマンドは、 <!-- REF #_command_.WEB Server list.Summary -->4Dアプリケーション内で利用可能な Webサーバーオブジェクトのコレクションを返します<!-- END REF -->。

4Dアプリケーションは一つ以上の Webサーバーを持つことが可能です:

- ホストデータベースの Webサーバーを1つ (デフォルトWebサーバー)
- コンポーネント毎の Webサーバー各1つ

サーバーが実際に実行中か否かに関わらず、`WEB Server list` コマンドは利用可能な Webサーバーをすべて返します。

> デフォルトの Webサーバーオブジェクトは、4D 起動時に自動的にロードされます。 その一方で、コンポーネントの Webサーバーは、[`WEB Server`](#web-server) コマンドによってそれぞれインスタンス化しなくてはなりません。

Webサーバオブジェクトの [.name](#name) プロパティを使用することで、リスト内の各 Webサーバーオブジェクトが関連づけられているデータベースまたはコンポーネントを識別することができます。

#### 例題

利用可能な Webサーバーのうちいくつが実行中かを調べます:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT("利用可能 Webサーバー "+String($wSList.length)+" つ中、"+String($vRun)+" つの Webサーバーが実行中です。")

```

## .accessKeyDefined

<!-- REF #WebServerClass.accessKeyDefined.Syntax -->**.accessKeyDefined** : Boolean<!-- END REF -->


**.accessKeyDefined** プロパティは、 <!-- REF #WebServerClass.accessKeyDefined.Summary -->Webサーバーの設定にアクセスキーが定義されていれば true を格納します<!-- END REF -->。 このプロパティは WebAdmin Webサーバーによって、管理インターフェースのセキュリティ設定を有効化するのに使用されます。

<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder

<!-- REF #WebServerClass.certificateFolder.Syntax -->**.certificateFolder** : Text<!-- END REF -->


`.certificateFolder` プロパティは、 <!-- REF #WebServerClass.certificateFolder.Summary -->認証ファイルが保存されているフォルダーのパスを格納します<!-- END REF -->。 パスは、ファイルシステムを使用した POSIXフルパスの形式です。 [`.start()`](#start) 関数に渡す `settings` 引数内でこのプロパティを使用する場合、[`Folder` オブジェクト](FolderClass.md) も使用可能です。

<!-- END REF -->

<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet

<!-- REF #WebServerClass.characterSet.Syntax -->**.characterSet** : Number<br/>**.characterSet** : Text<!-- END REF -->


 <!-- REF #WebServerClass.characterSet.Summary -->アプリケーションに接続してくるブラウザーとの通信に 4D Webサーバーが使用すべき文字セット<!-- END REF -->。 デフォルト値は OS の言語に依存します。 値には、MIBenum 整数や名称の文字列、[IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml) が定義する識別子を使用できます。 以下は、4D Webサーバーがサポートしている文字セットに対応する識別子のリストです:

- 4 = ISO-8859-1
- 12 = ISO-8859-9
- 13 = ISO-8859-10
- 17 = Shift-JIS
- 2024 = Windows-31J
- 2026 = Big5
- 38 = euc-kr
- 106 = UTF-8
- 2250 = Windows-1250
- 2251 = Windows-1251
- 2253 = Windows-1253
- 2255 = Windows-1255
- 2256 = Windows-1256

<!-- END REF -->

<!-- REF WebServerClass.cipherSuite.Desc -->

## .cipherSuite

<!-- REF #WebServerClass.cipherSuite.Syntax -->**.cipherSuite** : Text<!-- END REF -->


 <!-- REF #WebServerClass.cipherSuite.Summary -->保護されたプロトコルのために使用される暗号スイートリスト<!-- END REF -->。 これは、4D Webサーバーが実装する暗号化アルゴリズムの優先順位を設定します。 コロン区切りの文字列として設定できます (例: "ECDHE-RSA-AES128-...")。 詳細は Open SSL サイトの [ciphers ページ](https://www.openssl.org/docs/manmaster/man1/ciphers.html) を参照ください。

<!-- END REF -->

<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->**.CORSEnabled** : Boolean<!-- END REF -->


 <!-- REF #WebServerClass.CORSEnabled.Summary -->Web サーバーの CORS (*Cross-origin resource sharing*、オリジン間リソース共有) サービスステータス<!-- END REF -->。 セキュリティ上の理由により、"ドメイン間" のリクエストはブラウザーレベルでデフォルトで禁止されています。 有効化されている場合 (true)、ドメイン外 Webページからの XHRコール (RESTリクエストなど) をアプリケーションにおいて許可することができます (CORSドメインリストに許可されたアドレスのリストを定義する必要があります。後述の `CORSSettings` 参照)。 無効化されている場合 (false、デフォルト) には、CORS で送信されたサイト間リクエストはすべて無視されます。 有効時 (true) に、許可されていないドメインやメソッドがサイト間リクエストを送信した場合、"403 - forbidden" エラーレスポンスによって拒否されます。

デフォルト: false (無効)

CORS についての詳細は、Wikipedia の[Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) ページを参照ください。

<!-- END REF -->

<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings

<!-- REF #WebServerClass.CORSSettings.Syntax -->**.CORSSettings** : Collection<!-- END REF -->


 <!-- REF #WebServerClass.CORSSettings.Summary -->CORSサービスに許可されたホストとメソッドの一覧<!-- END REF --> ( [`CORSEnabled`](#corsenabled) プロパティ参照)。 各オブジェクトは必ず **host** プロパティを格納していなくてはなりません。 **methods** プロパティは任意です。


- **host** (テキスト、必須): CORS を介したサーバーへのデータリクエスト送信が許可されている外部ページのドメイン名または IPアドレス。 複数のドメインを追加してホワイトリストを作成することができます。 *host* が存在しない、または空の場合、当該オブジェクトは無視されます。 複数のシンタックスがサポートされています:
  - 192.168.5.17:8081
  - 192.168.5.17
  - 192.168.*
  - 192.168.*:8081
  - <http://192.168.5.17:8081>
  - <http://*.myDomain.com>
  - <http://myProject.myDomain.com>
  - *.myDomain.com
  - myProject.myDomain.com
  - \*

- **methods** (テキスト、任意): 対応する CORSホストに対して許可する HTTPメソッド。 メソッド名はセミコロン区切りで指定します(例: "post;get")。 *methods* が空、null、あるいは undefined の場合、すべてのメソッドが許可されます。

<!-- END REF -->

<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog

<!-- REF #WebServerClass.debugLog.Syntax -->**.debugLog** : Number<!-- END REF -->


 <!-- REF #WebServerClass.debugLog.Summary -->HTTPリクエストログファイルのステータス<!-- END REF --> (ログファイルは、アプリケーションの "Logs" フォルダーに格納されている HTTPDebugLog_nn.txt (nn はファイル番号))。

- 0 = 無効
- 1 = 有効、リクエスト本文なし (本文サイズあり)
- 3 = 有効、レスポンスの本文のみ
- 5 = 有効、リクエストの本文のみ
- 7 = 有効、リクエストおよびレスポンスの本文あり

<!-- END REF -->

<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage

<!-- REF #WebServerClass.defaultHomepage.Syntax -->**.defaultHomepage** : Text<!-- END REF -->


 <!-- REF #WebServerClass.defaultHomepage.Summary -->デフォルトのホームページの名称<!-- END REF --> または、カスタムホームページを送信しない場合は ""。

<!-- END REF -->

<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->**.HSTSEnabled** : Boolean<!-- END REF -->


 <!-- REF #WebServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS) のステータス<!-- END REF -->。 HSTS によって、Webサーバーはブラウザーに対し、セキュアな HTTPS接続のみを許可すると宣言できます。 Webサーバーからの初回レスポンスを受け取った際にブラウザーは HSTS情報を記録し、以降の HTTPリクエストは自動的に HTTPSリクエストに変換されます。 ブラウザー側でこの情報が保存される時間は `HSTSMaxAge` プロパティによって指定されます。 HSTS のためには、サーバー上で HTTPS が有効になっていなくてはなりません。 また、初回のクライアント接続を許可するために、HTTP も有効でなくてはなりません。

<!-- END REF -->

<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge



<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->**.HSTSMaxAge** : Number<!-- END REF -->


 <!-- REF #WebServerClass.HSTSMaxAge.Summary -->新規クライアント接続ごとに HSTS がアクティブな最長時間 (秒単位)<!-- END REF -->。 この情報はクライアント側で指定された時間のあいだ保存されます。

デフォルト値: 63072000 (2年)。

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->**.HTTPCompressionLevel** : Number<!-- END REF -->


 <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->4D HTTPサーバーの HTTP圧縮通信 (クライアントリクエストまたはサーバーレスポンス) における圧縮レベル<!-- END REF -->。 このセレクターを使って、実行速度を優先するか (圧縮少)、それとも圧縮レベルを優先するか (速度減) を指定し、通信を最適化することができます。

とりうる値:

- 1 から 9 (1 が低圧縮、9 が高圧縮)。
- -1 = 圧縮速度と圧縮率の妥協点を設定する

デフォルト = 1 (低圧縮)。

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->**.HTTPCompressionThreshold** : Number<!-- END REF -->


 <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->HTTP圧縮のしきい値 (バイト単位) (このサイズ未満のリクエストについては、通信が圧縮されません)<!-- END REF -->。 この設定は、通信サイズが小さい場合、圧縮に処理時間が費やされるのを避けるのに有用です。

デフォルトのしきい値 = 1024 バイト

<!-- END REF -->

<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<!-- REF #WebServerClass.HTTPEnabled.Syntax -->**.HTTPEnabled** : Boolean<!-- END REF -->


 <!-- REF #WebServerClass.HTTPEnabled.Summary -->HTTPプロトコル状態<!-- END REF -->。

<!-- END REF -->

<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort

<!-- REF #WebServerClass.HTTPPort.Syntax -->**.HTTPPort** : Number<!-- END REF -->


 <!-- REF #WebServerClass.HTTPPort.Summary -->HTTP のリッスンIPポート番号<!-- END REF -->。

デフォルト = 80

<!-- END REF -->

<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->**.HTTPTrace** : Boolean<!-- END REF -->


 <!-- REF #WebServerClass.HTTPTrace.Summary -->`HTTP TRACE` の有効化状態<!-- END REF -->。 セキュリティ上の理由により、Webサーバーはデフォルトで `HTTP TRACE` リクエストをエラー405 で拒否します。 有効化されている場合、`HTTP TRACE` リクエストに対して Webサーバーは、リクエスト行、ヘッダー、および本文を返します。

<!-- END REF -->

<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled

<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->**.HTTPSEnabled** : Boolean<!-- END REF -->


 <!-- REF #WebServerClass.HTTPSEnabled.Summary -->HTTPSプロトコルの状態<!-- END REF -->。

<!-- END REF -->

<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<!-- REF #WebServerClass.HTTPSPort.Syntax -->**.HTTPSPort** : Number<!-- END REF -->


 <!-- REF #WebServerClass.HTTPSPort.Summary -->HTTPS のリッスンIPポート番号<!-- END REF -->。

デフォルト = 443

<!-- END REF -->

<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->**.inactiveProcessTimeout** : Number<!-- END REF -->

> [スケーラブルセッションモード](#scalablesession) の場合には、このプロパティは返されません。 <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->旧式セッションプロセスの非アクティブタイムアウト時間 (分単位)<!-- END REF -->。 タイムアウト時間が経過すると、サーバーはプロセスを終了します。すると、`On Web Legacy Close Session` データベースメソッドが呼び出され、旧式セッションのコンテキストは削除されます。

デフォルト = 480 分

<!-- END REF -->

<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->**.inactiveSessionTimeout** : Number<!-- END REF -->

> [スケーラブルセッションモード](#scalablesession) の場合には、このプロパティは返されません。 <!-- REF #WebServerClass.inactiveSessionTimeout.Summary -->旧式セッションの非アクティブタイムアウト時間 (分単位; cookie の設定)<!-- END REF -->。 タイムアウト時間が経過するとセッションcookie が無効になり、HTTPクライアントによって送信されなくなります。

デフォルト = 480 分

<!-- END REF -->

<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen

<!-- REF #WebServerClass.IPAddressToListen.Syntax -->**.IPAddressToListen** : Text<!-- END REF -->


 <!-- REF #WebServerClass.IPAddressToListen.Summary -->4D Webサーバーが HTTPリクエストを受信する IPアドレス<!-- END REF -->。 デフォルトでは、特定のアドレスは定義されていません。 IPv6 および IPv4 文字列形式の両方がサポートされています。

<!-- END REF -->

<!-- REF WebServerClass.isRunning.Desc -->

## .isRunning

<!-- REF #WebServerClass.isRunning.Syntax -->**.isRunning** : Boolean<!-- END REF -->


*読み取り専用プロパティ。* <!-- REF #WebServerClass.isRunning.Summary -->Webサーバーの実行状態<!-- END REF -->。

<!-- END REF -->

<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->**.keepSession** : Boolean<!-- END REF -->


 <!-- REF #WebServerClass.keepSession.Summary -->Webサーバーで旧式セッションが有効化されている場合に `true`、それ以外は `false`<!-- END REF -->。

##### 参照

[.scalableSession](#scalablesession)

<!-- END REF -->

<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording

<!-- REF #WebServerClass.logRecording.Syntax -->**.logRecording** : Number<!-- END REF -->


 <!-- REF #WebServerClass.logRecording.Summary -->リクエストログ (logweb.txt) の記録オプション値<!-- END REF -->。

- 0 = 記録しない (デフォルト)
- 1 = CLF形式で記録する
- 2 = DLF形式で記録する
- 3 = ELF形式で記録する
- 4 = WLF形式で記録する

<!-- END REF -->

<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses

<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->**.maxConcurrentProcesses** : Number<!-- END REF -->


 <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->Webサーバーにてサポートする最大同時Webプロセス数<!-- END REF -->。 この数値 (マイナス1) に達すると、4D はプロセスを作成しなくなり、新規リクエストに対して HTTPステータス 503 - Service Unavailable を返します。

とりうる値: 10 - 32000

デフォルト = 100

<!-- END REF -->

<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<!-- REF #WebServerClass.maxRequestSize.Syntax -->**.maxRequestSize** : Number<!-- END REF -->


 <!-- REF #WebServerClass.maxRequestSize.Summary -->Webサーバーが処理してよい HTTPリクエスト (POST) の最大サイズ (バイト単位)<!-- END REF -->。 最大値 (2147483647) に設定した場合、実際には制限無しということになります。 制限を設けることで、サイズが非常に大きいリクエストによって Webサーバーが過負荷状態に陥ることを防ぎます。 リクエストのサイズが制限に達していると、Webサーバーによって拒否されます。

とりうる値: 500000 - 2147483647

<!-- END REF -->

<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->**.maxSessions** : Number<!-- END REF -->

> [スケーラブルセッションモード](#scalablesession) の場合には、このプロパティは返されません。 <!-- REF #WebServerClass.maxSessions.Summary -->旧式セッションにおける同時セッションの最大数<!-- END REF -->。 制限に達すると、Webサーバーが新規セッションを作成するときに、一番古い旧式セッションが閉じられます (`On Web Legacy Close Session` データベースメソッドが呼び出されます)。 旧式セッションの同時セッション数は、Webプロセスの合計値を超えることはできません (`maxConcurrentProcesses` プロパティ、デフォルト値は 100)。

<!-- END REF -->

<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->**.minTLSVersion** : Number<!-- END REF -->


 <!-- REF #WebServerClass.minTLSVersion.Summary -->接続に必要な最低TLSバージョン<!-- END REF -->。 これよりも低いバージョンのみをサポートするクライアントからの接続は拒否されます。

とりうる値:

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (デフォルト)
- 4 = TLSv1_3

変更した場合、設定を反映するには Webサーバーを再起動する必要があります。

<!-- END REF -->

<!-- REF WebServerClass.name.Desc -->

## .name

<!-- REF #WebServerClass.name.Syntax -->**.name** : Text<!-- END REF -->


*読み取り専用プロパティ。* <!-- REF #WebServerClass.name.Summary -->Webサーバーアプリケーションの名称<!-- END REF -->。

<!-- END REF -->

<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->**.openSSLVersion** : Text<!-- END REF -->


*読み取り専用プロパティ。* <!-- REF #WebServerClass.openSSLVersion.Summary -->使用されている OpenSSLライブラリのバージョン<!-- END REF -->。

<!-- END REF -->

<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*読み取り専用プロパティ。* <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->サーバーの PFS利用可否状況<!-- END REF -->。

<!-- END REF -->

<!-- REF WebServerClass.rootFolder.Desc -->
## .rootFolder

<!-- REF #WebServerClass.rootFolder.Syntax -->**.rootFolder** : Text<!-- END REF -->


 <!-- REF #WebServerClass.rootFolder.Summary -->Webサーバのルートフォルダーのパス<!-- END REF -->。 パスは、ファイルシステムを使用した POSIXフルパスの形式です。 `settings` 引数内でこのプロパティを使用する場合、`Folder` オブジェクトも使用可能です。

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->

## .scalableSession

<!-- REF #WebServerClass.scalableSession.Syntax -->**.scalableSession** : Boolean<!-- END REF -->


 <!-- REF #WebServerClass.scalableSession.Summary -->Webサーバーがスケーラブルセッションを使用している場合に `true`、それ以外は `false`<!-- END REF -->。

##### 参照

[.keepSession](#keepsession)

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->**.sessionCookieDomain** : Text<!-- END REF -->


 <!-- REF #WebServerClass.sessionCookieDomain.Summary -->セッションcookie の "domain" フィールド<!-- END REF -->。 セッションcookie のスコープを制御するのに使用されます。 たとえば、このセレクターに "/*.4d.fr" の値を設定した場合、リクエストの宛先が ".4d.fr" のドメインに限り、クライアントは cookie を送信します。つまり、外部の静的データをホストするサーバーは除外されます。

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<!-- REF #WebServerClass.sessionCookieName.Syntax -->**.sessionCookieName** : Text<!-- END REF -->


 <!-- REF #WebServerClass.sessionCookieName.Summary -->セッションID の保存に使用されるセッションcookie の名称<!-- END REF -->。

*読み取り専用プロパティ。*

<!-- END REF -->

<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath

<!-- REF #WebServerClass.sessionCookiePath.Syntax -->**.sessionCookiePath** : Text<!-- END REF -->


 <!-- REF #WebServerClass.sessionCookiePath.Summary -->セッションcookie の "path" フィールド<!-- END REF -->。 セッションcookie のスコープを制御するのに使用されます。 たとえば、このセレクターに "/4DACTION" という値を設定した場合、4DACTION で始まる動的リクエストの場合にのみクライアントは cookie を送信し、ピクチャーや静的ページへのリクエストは除外されます。

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |

</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->**.sessionCookieSameSite** : Text<!-- END REF -->


 <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->セッションcookie の "SameSite" 属性の値<!-- END REF -->。 とりうる値 (定数使用):

| 定数                  | 値        | 説明                                                              |
| ------------------- | -------- | --------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *デフォルト値* - ファーストパーティーのコンテキストでのみ cookie が送信されます。                 |
| Web SameSite Lax    | "Lax"    | サイト間のサブリクエストにおいても cookie が送信されますが、ユーザーがリンクを辿って大元のサイトに戻る場合に限ります。 |
| Web SameSite None   | "None"   | ファーストパーティーやオリジン間リクエストにかかわらず、すべてのコンテキストにおいて cookie が送信されます。      |

詳細については [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) の説明を参照ください。

<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> [スケーラブルセッションモード](#scalablesession) の場合には、このプロパティは使用されません (IPアドレスを検証しません)。 <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->セッションcookie の IPアドレス検証<!-- END REF -->。 セキュリティ上の理由により、セッションcookie を持つ各リクエストに対して Webサーバーはデフォルトで IPアドレスを検証します。このアドレスが、cookie作成時の IPアドレスと合致しない場合、リクエストは拒否されます。 アプリケーションによっては、この検証機能を無効化し、IPアドレスが合致しなくてもセッションcookie を受け入れるようにしたいかもしれません。 たとえば、モバイルデバイスが WiFi と 3G/4G ネットワークを切り替えた場合、IPアドレスが変更されます。 このように IPアドレスが変更しても、クライアントによる Webセッションの継続を許可できます (アプリケーションのセキュリティレベルは下がります)。

<!-- END REF -->

<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

<!-- REF #WebServerClass.start().Syntax -->
**.start**() : Object<br/>**.start**( *settings* : Object ) : Object<!-- END REF -->


<!-- REF #WebServerClass.start().Params -->

| 引数       | タイプ    |    | 説明              |
| -------- | ------ | -- | --------------- |
| settings | Object | -> | 開始時の Webサーバー設定  |
| 戻り値      | Object | <- | Webサーバー開始のステータス |

<!-- END REF -->

`.start()` 関数は、 <!-- REF #WebServerClass.start().Summary -->対象の Webサーバーを開始させます<!-- END REF -->。この際、任意の *settings* オブジェクト引数に設定したプロパティを使用します。

プロジェクトの設定ファイルに定義されているデフォルトの設定、または `WEB SET OPTION` コマンドで定義された設定 (ホストデータベースのみ) を使用して、Webサーバーは開始されます。 しかし、*settings* 引数を渡せば、Webサーバーセッションにおいてカスタマイズされた設定を定義することができます。

[Web Server オブジェクト](#webサーバーオブジェクト) の設定は、読み取り専用プロパティ ([.isRunning](#isrunning)、[.name](#name)、[.openSSLVersion](#opensslversion)、[.perfectForwardSecrecy](#perfectforwardsecrecy)、[.sessionCookieName](#sessioncookiename)) を除いて、すべてカスタマイズ可能です。

カスタマイズされた設定は [`.stop()`](#stop) が呼び出されたときにリセットされます。

#### 返されるオブジェクト

関数は Webサーバーの開始ステータスを表すオブジェクトを返します。 このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ   |                         | タイプ        | 説明                                    |
| ------- | ----------------------- | ---------- | ------------------------------------- |
| success |                         | Boolean    | Webサーバーが正常に開始された場合には true、それ以外は false |
| errors  |                         | Collection | エラースタック (Webサーバーが正常に開始された場合には返されません)  |
|         | \[].errCode            | Number     | 4Dエラーコード                              |
|         | \[].message            | Text       | 4Dエラーの詳細                              |
|         | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                   |
> Webサーバーが既に起動していた場合、エラーが返されます。

#### 例題

```4d
 var $settings;$result : Object
 var $webServer : 4D.WebServer

 $settings:=New object("HTTPPort";8080;"defaultHomepage";"myAdminHomepage.html")

 $webServer:=WEB Server
 $result:=$webServer.start($settings)
 If($result.success)
  //...
 End if
```

<!-- END REF -->

<!-- REF WebServerClass.stop().Desc -->

## .stop()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

<!-- REF #WebServerClass.stop().Syntax -->**.stop()**<!-- END REF -->


<!-- REF #WebServerClass.stop().Params -->
| 引数 | タイプ |  | 説明         |
| -- | --- |  | ---------- |
|    |     |  | 引数を必要としません |
<!-- END REF -->

`.stop()` 関数は、 <!-- REF #WebServerClass.stop().Summary -->対象の Webサーバーを停止します<!-- END REF -->。

Webサーバーが開始されている場合は、処理中のリクエストが完了次第、すべての Web接続と Webプロセスが閉じられます。 Webサーバーが開始されていなかった場合、関数はなにもしません。
> この関数は、[`.start()`](#start) 関数の *settings* 引数を使用してセッションに対して定義したカスタマイズされた Web設定があった場合、それらをリセットします。

#### 例題

データベースWebサーバーを停止します:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->
