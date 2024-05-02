---
id: webServerConfig
title: 設定
---

4D Webサーバーの設定には、セキュリティパラメーター、リスニングポート、デフォルトのパス、およびサーバーの機能を網羅するさまざまなオプションが含まれます。 4D ではすべての設定にデフォルト値を用意しています。

## 設定をおこなう場所

4D Webサーバーの設定には、スコープやサーバーに応じた様々な方法があります:

| 設定場所                                                                             | スコープ                                     | 使用する Webサーバー                   |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------ |
| [webServer object](webServerObject.md)                                           | 一時的 (カレントセッション)       | コンポーネントWebサーバーを含む、あらゆる Webサーバー |
| `WEB SET OPTION` or a `WEB XXX` command                                          | 一時的 (カレントセッション)       | メインサーバー                        |
| [**Settings** dialog box](../settings/web.md) (**Web** pages) | 永続的 (全セッション、ディスク上に保存) | メインサーバー                        |

> 設定できる場所が限られる設定も一部存在します。

## キャッシュ

| 設定できる場所     | 名称                                                                                 | コメント |
| ----------- | ---------------------------------------------------------------------------------- | ---- |
| 設定ダイアログボックス | [Configuration page/Use the 4D Web cache](../settings/web.md#use-the-4d-web-cache) |      |
| 設定ダイアログボックス | [Configuration page/Page Cache Size](../settings/web.md#page-cache-size)           |      |

Webページキャッシュの有効化と設定をおこないます。

The 4D web server has a cache that allows you to load static pages, GIF images, JPEG images (<512 kb) and style sheets (.css files) in memory, as they are requested. キャッシュの利用は、スタティックページの送信時に Webサーバーのパフォーマンスを大幅に向上します。 キャッシュはすべての Webプロセスで共有されます。 キャッシュが有効化されている場合、4D Webサーバーは、ブラウザーからリクエストされた静的ページをまずキャッシュ内で探します。 ページが見つかれば、それを送信します。 見つからない場合、4D はディスクからページを読み込み、キャッシュに格納します。

You can modify the size of the cache in the **Pages Cache Size** area. 設定する値は、スタティックページのサイズや数、およびホストマシンで利用可能なリソースによります。

> While using your web database, you can check the performance of the cache by using the `WEB GET STATISTICS` command. たとえば、キャッシュ利用率が 100% に近い場合、キャッシュに割り当てたメモリ量を増やすことを考慮します。 [/4DSTATS] と [/4DHTMLSTATS] の URL も、キャッシュの状態を知るのに使用できます。

## 証明書フォルダー

| 設定できる場所          | 名称                  | コメント                                                                                                                                                   |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| webServer オブジェクト | `certificateFolder` | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the _settings_ parameter of the `start()` function. |

Webサーバー用の TLS証明書ファイルが置かれているフォルダーです。

By default with 4D or 4D Server, these files must be placed next to the [project folder](Project/architecture.md#project-folder).

With 4D in remote mode, these files must be located in the local resources folder of the database on the remote machine (see `4D Client Database Folder` paragraph of the `Get 4D folder` command). これらのファイルはリモートマシンに手動でコピーする必要があります。

> TLS certificate files are _key.pem_ (document containing the private encryption key) and _cert.pem_ (document containing the certificate).

## 文字コード

| 設定できる場所          | 名称                                                                                   | コメント                 |
| ---------------- | ------------------------------------------------------------------------------------ | -------------------- |
| webServer オブジェクト | `characterSet`                                                                       | MIBEnum 整数、または名称の文字列 |
| `WEB SET OPTION` | `Web character set`                                                                  | MIBEnum 整数、または名称の文字列 |
| 設定ダイアログボックス      | [Options (II) page/Standard Set](../settings/web.md#standard-set) | ポップアップメニュー           |

4D Webサーバーが使用する文字セットを定義します。 デフォルト値は OS の言語に依存します。

> この設定は、クイックレポートを HTMLフォーマットで書き出す際にも使用されます。

## 暗号リスト

| 設定できる場所          | 名称                                                 | コメント |
| ---------------- | -------------------------------------------------- | ---- |
| webServer オブジェクト | [`cipherSuite`](API/WebServerClass.md#ciphersuite) | Text |

セキュアプロトコルに使用される暗号リストです。Webサーバーが実装する暗号アルゴリズムの優先順位を設定します。 コロン区切りの文字列として設定できます (例: "ECDHE-RSA-AES128-...")。 詳細は Open SSL サイトの [ciphers ページ](https://www.openssl.org/docs/manmaster/man1/ciphers.html) を参照ください。

> The default cipher list used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server, client/server connections, as well as the HTTP client and all the 4D commands that make use of the secure protocol.

## CORS設定

| 設定できる場所          | 名称                                                                                                                                 | コメント                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| webServer オブジェクト | [`CORSSettings`](API/WebServerClass.md#corssettings)                                                                               | オブジェクトのコレクション (CORSサービスで許可されたホストとメソッドの一覧)                                 |
| `WEB SET OPTION` | `Web CORS settings`                                                                                                                | オブジェクトのコレクション (CORSサービスで許可されたホストとメソッドの一覧)                                 |
| 設定ダイアログボックス      | [Options (II) page/Domain names and HTTP methods allowed](../settings/web.md#domain-names-HTTP-methods-allowed) | 新しいドメインとメソッドを許可するには [+] ボタンをクリックして追加します。 |

CORSサービスで許可されたホストとメソッドの一覧。

#### ドメイン名 (hostプロパティ)

CORS を介したサーバーへのデータリクエスト送信が許可されている外部ページのドメイン名または IPアドレス。 複数のドメインを追加してホワイトリストを作成することができます。 複数のシンタックスがサポートされています:

- 192.168.5.17:8081
- 192.168.5.17
- 192.168.\*
- 192.168.\*:8081
- http://192.168.5.17:8081
- http://\*.myDomain.com
- http://myProject.myDomain.com
- \*.myDomain.com
- myProject.myDomain.com
- \*

#### 許可された HTTPメソッド (methodsプロパティ)

対応する CORSホストに対して許可する HTTPメソッド。 以下の HTTPメソッドがサポートされます:

- GET
- HEAD
- POST
- PUT
- DELETE
- OPTIONS
- TRACE
- PATCH

メソッド名はセミコロン区切りで指定します(例: "post;get")。 methods が空、null、あるいは undefined の場合、すべてのメソッドが許可されます。

#### 参照

[Enable CORS Service](#enable-cors-service)

## デバッグログ

| 設定できる場所          | 名称              | コメント   |
| ---------------- | --------------- | ------ |
| webServer オブジェクト | `debugLog`      | number |
| `WEB SET OPTION` | `Web debug log` | number |

Status of the HTTP request log file of the web server ([_HTTPDebugLog_nn.txt_](../Debugging/debugLogFiles.md#httpdebuglogtxt), stored in the "Logs" folder of the application -- nn is the file number). このログファイルは、Webサーバーに関連する問題をデバッグするのに便利です。 ログには、各リクエスト・レスポンスが rawモードで記録されます。 ヘッダーを含むリクエスト全体が記録され、オプションでボディ部分も記録することができます。

| 値 | 定数                             | 説明                                                           |
| - | ------------------------------ | ------------------------------------------------------------ |
| 0 | wdl disable                    | Web HTTP debug log は無効化されています                                |
| 1 | wdl enable without body        | Web HTTP debug log 有効、リクエスト本文なし (本文サイズあり) |
| 3 | wdl enable with response body  | Web HTTP debug log 有効、レスポンスの本文のみ                             |
| 5 | wdl enable with request body   | Web HTTP debug log 有効、リクエストの本文のみ                             |
| 7 | wdl enable with all body parts | Web HTTP debug log 有効、リクエストおよびレスポンスの本文あり                     |

## デフォルトホームページ

| 設定できる場所             | 名称                                                                           | コメント              |
| ------------------- | ---------------------------------------------------------------------------- | ----------------- |
| webServer オブジェクト    | [`defaultHomepage`](API/WebServerClass.md#defaulthomepage)                   | Text              |
| `WEB SET HOME PAGE` |                                                                              | Webプロセス毎に異なる設定が可能 |
| 設定ダイアログボックス         | [Configuration page/Default Home Page](../settings/web.md#default-home-page) |                   |

Webサーバーのデフォルトホームページを指定します。 このページはスタティックでもセミダイナミックでも可能です。

Webサーバーの初回起動時には、4D はデフォルトで "index.html" という名前のホームページを作成し、HTMLルートフォルダーに置きます。 この設定を変更しない場合、Webサーバーに接続するブラウザーには以下のようなページが表示されます:

![](../assets/en/WebServer/defaultHomePage.png)

デフォルトホームページを変更するには、パスを "デフォルトホームページ" エリアに入力します。

- The path is relative to the [default HTML root folder](#root-folder).
- パスは POSIX シンタックスで表します (フォルダーはスラッシュ ("/") で区切ります)。
- パスはスラッシュ ("/") で始まったり終わったりしてはいけません。

たとえば、デフォルトHTMLルートフォルダー内の "Web" サブフォルダーにある "MyHome.htm" をデフォルトホームページにする場合、"Web/MyHome.htm" と入力します。

If you do not specify any default home page, the `On Web Connection` database method is called. この場合には、プロシージャーでリクエストを処理するのは開発者の役割です。

## CORSを有効化

| 設定できる場所          | 名称                                                                                 | コメント                                                            |
| ---------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| webServer オブジェクト | [`CORSEnabled`](API/WebServerClass.md#corsenabled)                                 | ブール; CORSを有効化するには true (デフォルト値は false)       |
| `WEB SET OPTION` | `Web CORS enabled`                                                                 | 0 (デフォルト値; 無効) または 1 (有効) |
| 設定ダイアログボックス      | [Options (II) page/Enable CORS](../settings/web.md#enable-cors) | デフォルトではチェックなし                                                   |

4D Webサーバーは、クロスオリジンリソースシェアリング (CORS) を実装しており、これによって別ドメインにて提供されている特定の Webページが、REST などを使用した XHRコールを介してカレントWebアプリケーションのリソースにアクセスできるようにすることが可能です。 セキュリティ上の理由により、"ドメイン間" のリクエストはブラウザーレベルでデフォルトで禁止されています。 有効化されている場合、ドメイン外 Webページからの XHRコール (RESTリクエストなど) をアプリケーションにおいて許可することができます (CORSドメインリストに許可されたアドレスのリストを定義する必要があります。 有効時に、許可されていないドメインやメソッドがサイト間リクエストを送信した場合、"403 - forbidden" エラーレスポンスによって拒否されます。

無効化されている場合 (デフォルト) には、CORS で送信されたサイト間リクエストはすべて無視されます。

For more information about CORS, please refer to the [Cross-origin resource sharing page](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

#### 参照

[CORS Settings](#cors-settings)

## HTTPを有効化

| 設定できる場所          | 名称                                                               | コメント    |
| ---------------- | ---------------------------------------------------------------- | ------- |
| webServer オブジェクト | [`HTTPEnabled`](API/WebServerClass.md#httpenabled)               | boolean |
| `WEB SET OPTION` | `Web HTTP enabled`                                               |         |
| 設定ダイアログボックス      | [Configuration page/Enable HTTP](../settings/web.md#enable-http) |         |

安全でない接続を Webサーバーが受け入れるかどうかを示します。

## HTTPSを有効にする

| 設定できる場所          | 名称                                                   | コメント    |
| ---------------- | ---------------------------------------------------- | ------- |
| webServer オブジェクト | [`HTTPSEnabled`](API/WebServerClass.md#httpsenabled) | boolean |
| `WEB SET OPTION` | `Web HTTPS enabled`                                  |         |
| 設定ダイアログボックス      | 設定ページ / HTTPSを有効にする                                  |         |

Webサーバーがセキュアな接続を受け入れるか受け入れないかを指定します。 This option is described in [this section](Admin/tls.md).

## HSTSを有効にする

| 設定できる場所          | 名称                                                 | コメント                                                            |
| ---------------- | -------------------------------------------------- | --------------------------------------------------------------- |
| webServer オブジェクト | [`HSTSEnabled`](API/WebServerClass.md#hstsenabled) | ブール; HSTSを有効化するには true (デフォルト値は false)       |
| `WEB SET OPTION` | `Web HSTS enabled`                                 | 0 (デフォルト値; 無効) または 1 (有効) |

HTTP Strict Transport Security (HSTS) の状態です。

When [HTTPS is enabled](#enable-https), keep in mind that if [HTTP is also enabled](#enable-http), the browser can still switch between HTTPS and HTTP (for example, in the browser URL area, the user can replace "https" by "http"). To forbid http redirections, you can [disable HTTP](#enable-http), however in this case an error message is displayed to client HTTP requests.

HSTS によって、4D Webサーバーはブラウザーに対し、セキュアな HTTPS接続のみを許可すると宣言できます。 HSTS を有効にすると、4D Webサーバーはすべてのレスポンスヘッダーに HSTS 関連の情報を自動的に追加します。 4D Webサーバーからの初回レスポンスを受け取った際にブラウザーは HSTS情報を記録し、以降の HTTPリクエストは自動的に HTTPSリクエストに変換されます。 The length of time this information is stored by the browser is specified with the Web **HSTS max age** setting.

> HSTS requires that [HTTPS is enabled](#enable-https) on the server. [HTTP](#enable-http) must also be enabled to allow client initial connections.

> You can get the current connection mode using the `WEB Is secured connection` command.

## HSTS Max Age

| 設定できる場所          | 名称                                               | コメント                        |
| ---------------- | ------------------------------------------------ | --------------------------- |
| webServer オブジェクト | [`HSTSMaxAge`](API/WebServerClass.md#hstsmaxage) | 数値 (秒単位) |
| `WEB SET OPTION` | `Web HSTS max age`                               | 数値 (秒単位) |

新規クライアント接続ごとに HSTS がアクティブな最長時間 (秒単位) を指定します。 この情報はクライアント側で指定された時間のあいだ保存されます。
デフォルト値は 63072000 (2年)。

> **Warning:** Once HSTS is enabled, client connections will continue to use this mechanism for the specified duration. アプリケーションをテストする際には、セキュアな接続とセキュアでない接続を必要に応じて切り替えることができるように、短い時間を設定することが推奨されます。

## HTTP圧縮レベル

| 設定できる場所          | 名称                                                                   | コメント                   |
| ---------------- | -------------------------------------------------------------------- | ---------------------- |
| webServer オブジェクト | [`HTTPCompressionLevel`](API/WebServerClass.md#httpcompressionlevel) |                        |
| `WEB SET OPTION` | `Web HTTP compression level`                                         | Web および Webサービスに適用されます |

4D Webサーバーの HTTP圧縮通信 (クライアントリクエストまたはサーバーレスポンス) における圧縮レベル。 この設定を使って、実行速度を優先するか (圧縮少)、それとも圧縮レベルを優先するか (速度減) を指定し、通信を最適化することができます。 適切な値は、通信データのサイズとタイプによって異なります。

1 から 9 の値を指定します (1 が低圧縮、9 が高圧縮)。 -1 を指定すると、圧縮速度と圧縮率の妥協点が得られます。 デフォルトの圧縮レベルは 1 (低圧縮) です。

## HTTP圧縮のしきい値

| 設定できる場所          | 名称                                                                           | コメント |
| ---------------- | ---------------------------------------------------------------------------- | ---- |
| webServer オブジェクト | [`HTTPCompressionThreshold`](API/WebServerClass.md#httpcompressionthreshold) |      |
| `WEB SET OPTION` | `Web HTTP compression threshold`                                             |      |

最適化されたHTTP通信のフレームワークにおける、HTTP圧縮のしきい値 (バイト単位)。 このサイズ未満のリクエストについては、通信が圧縮されません。 この設定は、通信サイズが小さい場合、圧縮に処理時間が費やされるのを避けるのに有用です。

サイズを数値 (バイト単位) で指定します。 デフォルトのしきい値は 1024 バイトに設定されています。

## HTTP ポート

| 設定できる場所          | 名称                                                           | コメント   |
| ---------------- | ------------------------------------------------------------ | ------ |
| webServer オブジェクト | [`HTTPPort`](API/WebServerClass.md#httpport)                 | number |
| `WEB SET OPTION` | `Web port ID`                                                |        |
| 設定ダイアログボックス      | [Configuration page/HTTP Port](../settings/web.md#http-port) |        |

HTTP接続を受け付ける IP (TCP) ポート番号。 デフォルトで、4D は通常の Web HTTPポート (TCPポート) 番号である 80番を使用して Webアプリケーションを公開します。 他の Webサービスによってこのポート番号が既に使用されている場合、4D が使用する HTTPポート番号を変更する必要があります。

> In macOS, modifying the HTTP port allows you to start the 4D web server without being the root user of the machine (see [macOS HelperTool](#macos-helpertool)).

デフォルトでない HTTPポート番号を使用して公開された Webアプリケーションに接続するには、Webブラウザーで入力するアドレスにポート番号を含めなければなりません。 アドレスの後にコロンに続けてポート番号を指定します。 たとえば、HTTPポート番号 8080を使用する場合、"123.4.567.89:8080" のように書きます。

> **Warning**: If you use TCP port numbers other than the default numbers (80 for standard HTTP and 443 for HTTPS), be careful not to use port numbers that are defaults for other services that you might want to use simultaneously. たとえば、Webサーバーマシンで FTPプロトコルを使用する計画である場合、このプロトコルのデフォルトである TCPポート 20 と 21 を使用してはいけません。 256 より下のポート番号は、well-known サービスに予約されています。また、256 から 1024 は UNIXプラットフォーム由来のサービスに予約されています。 セキュリティのため、これらの数値よりも上、たとえば 2000台や 3000台などを指定します。

0 を指定すると、4D はデフォルトの HTTPポート番号 80を使用します。

## HTTP Trace

| 設定できる場所          | 名称                                             | コメント                                 |
| ---------------- | ---------------------------------------------- | ------------------------------------ |
| webServer オブジェクト | [`HTTPTrace`](API/WebServerClass.md#httptrace) | ブール; デフォルトは false                    |
| `WEB SET OPTION` | `Web HTTP TRACE`                               | 数値; デフォルトは 0 (無効) |

4D Webサーバーの HTTP TRACE メソッドを有効化します。 セキュリティ上の理由により、4D Webサーバーはデフォルトで HTTP TRACE リクエストをエラー405 で拒否します。 必要に応じて有効化された場合、HTTP TRACE リクエストに対して Webサーバーは、リクエスト行、ヘッダー、および本文を返します。

## HTTPS ポート

| 設定できる場所          | 名称                                                             | コメント   |
| ---------------- | -------------------------------------------------------------- | ------ |
| webServer オブジェクト | [`HTTPSPort`](API/WebServerClass.md#httpsport)                 | number |
| `WEB SET OPTION` | `Web HTTPS port ID`                                            |        |
| 設定ダイアログボックス      | [Configuration page/HTTPS Port](../settings/web.md#https-port) |        |

TLS を介した HTTPS接続を受け付ける IPポート番号。 デフォルトで HTTPSポート番号は 443です。 See also [HTTP Port](#http-port) for information on port numbers.

## 非動作プロセスのタイムアウト

| 設定できる場所          | 名称                                                                                                          | コメント  |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | ----- |
| webServer オブジェクト | [`inactiveProcessTimeout`](API/WebServerClass.md#inactiveprocesstimeout)                                    |       |
| `WEB SET OPTION` | `Web inactive process timeout`                                                                              |       |
| 設定ダイアログボックス      | [Options (I) page/Inactive Process Timeout](../settings/web.md#inactive-process-timeout) | スライダー |

セッションと紐づいた非アクティブWebプロセスのタイムアウト時間 (分単位) を設定します。 At the end of the timeout, the process is killed on the server, the `On Web Close Process` database method is called, then the session context is destroyed.

デフォルト値: 480分 (デフォルト値に戻すには 0 を指定します)

## 非アクティブセッションタイムアウト

| 設定できる場所          | 名称                                                                       | コメント |
| ---------------- | ------------------------------------------------------------------------ | ---- |
| webServer オブジェクト | [`inactiveSessionTimeout`](API/WebServerClass.md#inactivesessiontimeout) |      |
| `WEB SET OPTION` | `Web inactive session timeout`                                           |      |

非アクティブセッションのタイムアウト時間 (分単位) を cookie に設定します。 タイムアウト時間が経過するとセッションcookie が無効になり、HTTPクライアントによって送信されなくなります。

デフォルト値: 480分 (デフォルト値に戻すには 0 を指定します)

## リクエストを受け付ける IPアドレス

| 設定できる場所          | 名称                                                             | コメント       |
| ---------------- | -------------------------------------------------------------- | ---------- |
| webServer オブジェクト | [`IPAddressToListen`](API/WebServerClass.md#ipaddresstolisten) |            |
| `WEB SET OPTION` | `Web IP address to listen`                                     |            |
| 設定ダイアログボックス      | [Configuration page/IP Address](../settings/web.md#ip-address) | ポップアップメニュー |

4D Webサーバーが HTTPリクエストを受け付ける IPアドレスを指定できます (4Dローカルおよび 4D Server)。

By default, no specific address is defined (**Any** value in the Settings dialog box), which means that the server responds to all IP addresses. 特定のアドレスを指定すると、サーバーはこの IPアドレスへのリクエストにのみ応答します。 この機能は複数の TCP/IPアドレスが設定されたマシン上で動作する 4D Webサーバーのためのものです。 これはしばしば、インターネットホストプロバイダーで使用されます。

とりうる値: IPアドレス文字列。 IPv6 文字列フォーマット (例: "2001:0db8:0000:0000:0000:ff00:0042:8329") と IPv4 文字列フォーマット (例: "123.45.67.89") の両方がサポートされます。

#### IPv6 のサポートについて

- **No warning when TCP port is occupied**<br/>
  When the server is set to respond on "Any" IP addresses, if the TCP port is being used by another application, this is not indicated when the server is started. IPv6 アドレスのポートが空いているため、この場合 4D Server はどのようなエラーも検知しません。 しかしながら、マシンの IPv4アドレスを使用、またはローカルアドレス 127.0.0.1 を使用してアクセスすることは不可能です。

定義されたポートで 4D Server が反応していないようであれば、サーバーマシンで [::1] のアドレスを試してみてください (IPv6 における 127.0.0.1 と同義です。他のポート番号をテストするには [:portNum] を追加してください)。 4D が応答するようであれば、IPv4 のポートを他のアプリケーションが使用している可能性が高いです。

- **IPv4-mapped IPv6 addresses**<br/>
  To standardize processing, 4D provides a standard hybrid representation of IPv4 addresses in IPv6. これらのアドレスは IPv6フォーマットにおいて 96ビットの接頭辞付きで書かれ、その後に IPv4ドット区切り表記で書かれた 32ビットが続きます。 たとえば、::ffff:192.168.2.34 は、192.168.2.34 という IPv4アドレスを表します。

- **Indication of port numbers**<br/>
  Since IPv6 notation uses colons (:), adding port numbers may lead to some confusion, for example:

```code4d
	2001:0DB8::85a3:0:ac1f:8001 // IPv6 address
	2001:0DB8::85a3:0:ac1f:8001:8081 // IPv6 address with port 8081
```

混乱を避けるため、 IPv6アドレスをポート番号と併記する際には、以下の様に [ ] でアドレスを囲う記法が推奨されます:

```code4d
	[2001:0DB8::85a3:0:ac1f:8001]:8081 //IPv6 address with port 8081
```

## 旧式セッション (自動セッション管理)

| 設定できる場所          | 名称                                                                                                                                                             | コメント          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| webServer オブジェクト | [`keepSession`](API/WebServerClass.md#keepsession)                                                                                                             |               |
| `WEB SET OPTION` | `Web keep session`                                                                                                                                             |               |
| 設定ダイアログボックス      | [Options (I) page/Legacy sessions (single process sessions)](../settings/web.md#legacy-sessions-single-process-sessions) | 変換されたプロジェクトのみ |

4D Webサーバーによる旧式セッション管理を有効/無効にします (廃止予定)。

> このオプションが選択されていると、"一時的なコンテキストを再利用する" オプションも自動で選択され、ロックされます。

## ログの記録

| 設定できる場所          | 名称                                                                  | コメント       |
| ---------------- | ------------------------------------------------------------------- | ---------- |
| webServer オブジェクト | [`logRecording`](API/WebServerClass.md#logrecording)                |            |
| `WEB SET OPTION` | `Web log recording`                                                 |            |
| 設定ダイアログボックス      | [Log (type) page](../settings/web.md#log-format) | ポップアップメニュー |

Starts or stops the recording of requests received by the 4D web server in the _logweb.txt_ file and sets its format. デフォルトでは、リクエストは規則されません (0 / ログファイルなし)。 When enabled, the _logweb.txt_ file is automatically placed in the Logs folder.

このファイルのフォーマットを指定することができます。 使用可能な値:

| 値 | フォーマット     | 説明                                                                                                                                                                                                                                                       |
| - | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0 | ログファイルなし   | デフォルト                                                                                                                                                                                                                                                    |
| 1 | CLF形式で記録する | Common Log Format - Each line of the file represents a request, such as: `host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length` - Each field is separated by a space and each line ends by the CR/LF sequence. |
| 2 | DLF形式で記録する | Combined Log Format - CLFフォーマットを使いながら、各リクエストの最後に 2つのHTTPフィールド、Refererと User-agent を追加します。                                                                                                                                                                |
| 3 | ELF形式で記録する | Extended Log Format - 設定ダイアログボックスにてカスタマイズします。                                                                                                                                                                                                            |
| 4 | WLF形式で記録する | WebStar Log Format - 設定ダイアログボックスにてカスタマイズします。                                                                                                                                                                                                             |

> Formats 3 and 4 are custom formats whose contents must be set beforehand in the [Settings dialog box](../settings/web.md#log-format). このページでフィールドを選択せずにこれらのフォーマットを使用した場合、ログファイルは生成されません。

## 最大同時Webプロセス

| 設定できる場所          | 名称                                                                                                                          | コメント |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- | ---- |
| webServer オブジェクト | [`maxConcurrentProcesses`](API/WebServerClass.md#maxconcurrentprocesses)                                                    |      |
| `WEB SET OPTION` | `Web max concurrent processes`                                                                                              |      |
| 設定ダイアログボックス      | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#maximum-concurrent-web-processes) |      |

Strictly high limit of concurrent web processes that can be simultaneously open on the server when **no sessions** or **legacy sessions** are used (**scalable sessions** support an [unlimited number](sessions.md) of preemptive processes). このパラメーターは、異常な数のリクエストによる 4D Webサーバーの飽和状態を避けるために使用します。 When the maximum number of concurrent Web processes (minus one) is reached, 4D no longer creates new processes and sends the HTTP status `503 - Service Unavailable` to all new requests.

デフォルト値は 100 です。 10から32000までの値を設定できます。

## 最大リクエストサイズ

| 設定できる場所          | 名称                                                       | コメント |
| ---------------- | -------------------------------------------------------- | ---- |
| webServer オブジェクト | [`maxRequestSize`](API/WebServerClass.md#maxrequestsize) |      |
| `WEB SET OPTION` | `Web maximum requests size`                              |      |

Webサーバーに処理を許可する HTTPリクエスト (POST) の最大サイズ (バイト単位)。 デフォルト値は 2,000,000 (2MBより、すこし少ない値) です。 最大値 (2,147,483,648) に設定した場合、実際には制限無しということになります。

制限を設けることで、サイズが非常に大きいリクエストによって Webサーバーが過負荷状態に陥ることを防ぎます。 リクエストのサイズが制限に達していると、4D Webサーバーによって拒否されます。

とりうる値: 500,000 - 2,147,483,648。

## 最大同時セッション数

| 設定できる場所          | 名称                                                 | コメント |
| ---------------- | -------------------------------------------------- | ---- |
| webServer オブジェクト | [`maxSessions`](API/WebServerClass.md#maxsessions) |      |
| `WEB SET OPTION` | `Web max sessions	`                                |      |

同時セッション上限数。 When you reach the limit set, the oldest session is closed (and `On Web Close Process` database method is called) if the Web server needs to create a new one. The number of simultaneous sessions cannot exceed the [maximum number of Web processes](#maximum-concurrent-web-processes) (100 by default).

デフォルト値: 100 (デフォルト値に戻すには 0 を指定します).

## 最低TLSバージョン

| 設定できる場所          | 名称                                                     | コメント   |
| ---------------- | ------------------------------------------------------ | ------ |
| webServer オブジェクト | [`minTLSVersion`](API/WebServerClass.md#mintlsversion) | number |

接続に必要な最低TLSバージョン。 これよりも低いバージョンのみをサポートするクライアントからの接続は拒否されます。

とりうる値:

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (デフォルト)
- 4 = TLSv1_3

変更した場合、設定を反映するには Webサーバーを再起動する必要があります。

> The minimum TLS version used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server and client/server connections.

## 名称

| 設定できる場所          | 名称                                   | コメント |
| ---------------- | ------------------------------------ | ---- |
| webServer オブジェクト | [`name`](API/WebServerClass.md#name) |      |

Webサーバーアプリケーションの名称。 コンポーネントの Webサーバーが起動されているときに便利です。

## OpenSSL バージョン

| 設定できる場所          | 名称                                                       | コメント   |
| ---------------- | -------------------------------------------------------- | ------ |
| webServer オブジェクト | [`openSSLVersion`](API/WebServerClass.md#opensslversion) | 読み取り専用 |

使用されている OpenSSLライブラリのバージョン。

## Perfect Forward Secrecy (PFS)

| 設定できる場所          | 名称                                                                     | コメント        |
| ---------------- | ---------------------------------------------------------------------- | ----------- |
| webServer オブジェクト | [`perfectForwardSecrecy`](API/WebServerClass.md#perfectforwardsecrecy) | ブール; 読み取り専用 |

True if PFS is available on the web server (see [TLS](Admin/tls.md#perfect-forward-secrecy-pfs) section).

## 一時的なコンテキストを再利用する (リモートモード)

| 設定できる場所     | 名称                                                                                                                  | コメント |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ---- |
| 設定ダイアログボックス | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#reuse-temporary-contexts) |      |

> This option is only available when **No sessions** option is checked.

前の Webリクエストを処理するために作成された Webプロセスを再利用することによって、4Dリモートモードで実行されている 4D Webサーバーの動作を最適化できます。 実際、4D Webサーバーはそれぞれの Webリクエストを処理するために専用の Webプロセスを必要とします。 リモートモードでは、このプロセスは必要に応じて、データやデータベースエンジンにアクセスするために 4D Server に接続します。 そしてプロセス独自の変数やセレクションを使用して、一時的なコンテキストを作成します。 リクエストの処理が終了すると、このプロセスは廃棄されます。

When the **Reuse Temporary Contexts** option is checked, in remote mode 4D maintains the specific web processes and reuses them for subsequent requests. プロセスの作成処理が省略されるため、Webサーバーのパフォーマンスが向上します。

他方このオプションを使用する場合、不正な結果が返されることを避けるために、4Dメソッド内で使用される変数をシステマチックに初期化する必要があります。 同様に、以前のリクエストで使用されたカレントセレクションやカレントレコードをアンロードする必要があります。

> このオプションはリモートモードの 4D Webサーバーでのみ効果があります。 ローカルモードの 4D では (セッション管理をおこなうプロセスを除く) すべてのWebプロセスが使用後に終了されます。

## Robots.txt

Certain robots (query engines, spiders...) scroll through web servers and static pages. クローラーにサイトへアクセスさせたくない場合、アクセスを禁止する URL を指定できます。

これには、ROBOTS.TXT ファイルをサーバーのルートに置きます。 このファイルの内容は以下の構造になっていなければなりません:

```4d
   User-Agent: <name>
   Disallow: <URL> or <beginning of the URL>
```

例:

```4d
   User-Agent: *
   Disallow: /4D
   Disallow: /%23%23
   Disallow: /GIFS/
```

- "User-Agent: \*" は、すべてのクローラーが対象であることを示します。
- "Disallow: /4D" は、/4D から始まる URL へのアクセスを許可しないことをクローラーに通知します。
- "Disallow: /%23%23" は、/%23%23 から始まる URL へのアクセスを許可しないことをクローラーに通知します。
- "Disallow: /GIFS/" は、/GIFS/ フォルダーおよびそのサブフォルダーへのアクセスを許可しないことをクローラーに通知します。

他の例題:

```code4d
   User-Agent: *
   Disallow: /
```

この場合、クローラーにサイト全体へのアクセスを許可しないことを通知します。

## ルートフォルダー

| 設定できる場所               | 名称                                                                           | コメント                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| webServer オブジェクト      | [`rootFolder`](API/WebServerClass.md#rootfolder)                             | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the _settings_ parameter of the `start()` function |
| `WEB SET ROOT FOLDER` |                                                                              |                                                                                                                                       |
| 設定ダイアログボックス           | [Configuration page/Default HTML Root](../settings/web.md#default-html-root) |                                                                                                                                       |

4D がブラウザーに送信するスタティック/セミダイナミックな HTMLページ、ピクチャーなどを検索するフォルダーを指定します。 これが、Webサーバーのルートフォルダーです。 パスは、POSIXフルパスの形式です。 ルートフォルダーの変更を反映するには、Webサーバーを再起動する必要があります。

さらに HTMLルートフォルダーは、Webサーバーのディスク上で、ファイルに対するアクセスができない階層を定義することにもなります。 ブラウザーから送られた URL や 4Dコマンドが、HTMLルートフォルダーよりも上の階層にアクセスしようとすると、ファイルが存在しないことを示すエラーが返されます。

By default, 4D defines a HTML Root folder named **WebFolder**. Webサーバーの初回起動時にこのフォルダーが存在しなければ、HTMLルートフォルダーは物理的にディスク上に作成されます。 ルートフォルダーは以下の場所に作成されます:

- with 4D (local) and 4D Server, at the same level as the [Project folder](Project/architecture.md#project-folder).
- 4Dリモートモードでは、ローカルのリソースフォルダー内

デフォルトHTMLルートフォルダーを変更するには、パスを "デフォルトHTMLルート" に入力します。

- The path is relative to the [Project folder](Project/architecture.md#project-folder) (4D local and 4D Server) or to the folder containing the 4D application or software package (4D in remote mode).
- パスは POSIX シンタックスで表します (フォルダーはスラッシュ ("/") で区切ります)。
- フォルダー階層で 1つ上にあがるには、フォルダー名の前にピリオドを2つ “..”  置きます。
- パスはスラッシュ (“/”) で始まってはいけません (HTMLルートフォルダーを Projectフォルダーや 4Dリモートフォルダーにしながら、それより上階層へのアクセスを禁止したい場合には、"/" を入力します)。

たとえば、HTMLルートフォルダーを "MyWebApp" フォルダーの “Web” サブフォルダーにしたい場合、"MyWebApp/Web" と入力します。

> HTMLルートフォルダーを変更すると、アクセスが制限されているファイルを格納しないようにするため、キャッシュがクリアされます。

## スケーラブルセッション

| 設定できる場所          | 名称                                                                                                                                                               | コメント |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| webServer オブジェクト | [`scalableSession`](API/WebServerClass.md#scalablesession)                                                                                                       |      |
| `WEB SET OPTION` | `Web スケーラブルセッション`                                                                                                                                                |      |
| 設定ダイアログボックス      | [Options (I) page/Scalable sessions (multi-process sessions)](../settings/web.md#scalable-sessions-multi-process-sessions) |      |

4D Webサーバーでのスケーラブルセッション管理を有効/無効にします。 Web server sessions are detailed in the [User sessions](sessions.md) page.

## セッションcookieドメイン

| 設定できる場所          | 名称                                                                 | コメント |
| ---------------- | ------------------------------------------------------------------ | ---- |
| webServer オブジェクト | [`sessionCookieDomain`](API/WebServerClass.md#sessioncookiedomain) |      |
| `WEB SET OPTION` | `Web session cookie domain`                                        |      |

セッションcookie の "domain" フィールド。 セッションcookie のスコープを制御するのに使用されます。 たとえば、このセレクターに "/\*.4d.fr" の値を設定した場合、リクエストの宛先が ".4d.fr" のドメインに限り、クライアントは cookie を送信します。つまり、外部の静的データをホストするサーバーは除外されます。

## セッションcookie名

| 設定できる場所          | 名称                                                             | コメント |
| ---------------- | -------------------------------------------------------------- | ---- |
| webServer オブジェクト | [`sessionCookieName`](API/WebServerClass.md#sessioncookiename) |      |
| `WEB SET OPTION` | `Web session cookie name`                                      |      |

セッションID の保存に使用されるセッションcookie の名称。 デフォルト = "4DSID"。

## セッションcookieパス

| 設定できる場所          | 名称                                                             | コメント |
| ---------------- | -------------------------------------------------------------- | ---- |
| webServer オブジェクト | [`sessionCookiePath`](API/WebServerClass.md#sessioncookiepath) |      |
| `WEB SET OPTION` | `Web session cookie path`                                      |      |

セッションcookie の "path" フィールド。 セッションcookie のスコープを制御するのに使用されます。 たとえば、このセレクターに "/4DACTION" という値を設定した場合、4DACTION で始まる動的リクエストの場合にのみクライアントは cookie を送信し、ピクチャーや静的ページへのリクエストは除外されます。

## セッションcookie SameSite

| 設定できる場所          | 名称                                                                     | コメント |
| ---------------- | ---------------------------------------------------------------------- | ---- |
| webServer オブジェクト | [`sessionCookieSameSite`](API/WebServerClass.md#sessioncookiesamesite) |      |

Value of the `SameSite` attribute value of the session cookie. This attribute allows you to declare if your cookie should be restricted to a first-party or same-site context, as a protection from some cross-site request forgery ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)) attacks.

> For a detailed description of the `SameSite` attribute, please refer to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) or [this web.dev page](https://web.dev/samesite-cookies-explained/).

次の値が提供されています:

- "Strict" (default `SameSite` attribute value for 4D session cookies): cookies will only be sent in the first-party context, i.e. context matching the domain of the current site, and never to third-party websites.
- "Lax": クロスサイトのサブリクエストでは cookie は送信されませんが (たとえば、画像やフレームをサードパーティーのサイトにロードする場合など)、ユーザーがオリジンのサイトに移動するとき (つまり、リンクを辿っているとき) には送信されます。
- "None": ファーストパーティーやオリジン間リクエストにかかわらず、すべてのコンテキストにおいて cookie が送信されます。 When "None" value is used, the cookie `Secure` attribute must also be set (or the cookie will be blocked).

The `Secure` attribute value of the session cookie is automatically set to "True" if the connection is HTTPS (whatever the `SameSite` attribute value).

> It is not recommended to set `SameSite=None` on a HTTP server since the `Secure` attribute will be missing (used in HTTPS only) and cookies will be blocked.

## プリエンプティブプロセスを使用

| 設定できる場所     | 名称                                                                                                                  | コメント |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ---- |
| 設定ダイアログボックス | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#use-preemptive-processes) |      |

This option enables the preemptive mode for your application's web server code when **No sessions** option is selected (the preemptive mode is always enabled with **scalable sessions**). When this option is checked in this context, the 4D compiler will automatically evaluate the thread-safety property of each piece of [web-related code](preemptiveWeb.md#thread-safety-of-4d-web-code) and return errors in case of incompatibility.

## 廃止予定の設定

以下の設定は現在もサポートされていますが、廃止予定の機能や技術に依存しています。 通常はデフォルト値のままにしておくことが推奨されます。

#### "4DSYNC" URLを使用したデータベースアクセスを許可

This option controls the support of HTTP synchronization requests containing deprecated _/4DSYNC_ URLs.

#### セッション IPアドレス検証

> This option is not not available in [scalable sessions mode](WebServer/sessions.md) (there is no validation).

セッションcookie の IP アドレス検証のステータス。 セキュリティ上の理由により、セッションcookie を持つ各リクエストに対して 4D Webサーバーはデフォルトで IPアドレスを検証します。 アプリケーションによっては、この検証機能を無効化し、IPアドレスが合致しなくてもセッションcookie を受け入れるようにしたいかもしれません。 たとえば、モバイルデバイスが WiFi と 4G/5G ネットワークを切り替えた場合、IPアドレスが変更されます。 このように IPアドレスが変更しても、クライアントによる Webセッションの継続を許可するには、このオプションに 0 を渡します。 この設定はアプリケーションのセキュリティレベルを下げることに留意が必要です。 この設定が変更された際には、その設定は直ちに反映されます (HTTPサーバーを再起動する必要はありません)。

#### 拡張文字をそのまま送信

このオプションを有効にすると、Webサーバーはセミダイナミックページの拡張文字を、HTML標準に基づいた変換をおこなわずに「そのまま」送信します。 このオプションにより、とくに Shift_JIS文字コード利用時の日本語のシステムで速度が向上します。

#### Keep-Alive接続を使用する

4D Webサーバーは Keep-Alive接続を使用できます。 keep-alive接続を使用すると、Webブラウザーとサーバー間の一連のやり取りについて単一の TCP接続を維持し、システムリソースの節約と通信の最適化を図ることができます。

The **Use Keep-Alive Connections** option enables or disables keep-alive TCP connections for the web server. このオプションはデフォルトで有効になっています。 ほとんどの場合、通信が高速化されるため、この状態をお勧めします。 Webブラウザーが Keep-Alive接続をサ ポートしない場合、4D Webサーバーは自動で HTTP/1.0 に切り替えます。

4D Webサーバーの Keep-Alive機能はすべての TCP/IP接続 (HTTP, HTTPS) に関連します。 しかしながら、すべての 4D Webプロセスで常に Keep-Alive接続が使用されるわけではないことに留意してください。

あるケースでは、内部的な他の最適化機能が呼び出されることがあります。 Keep-Alive接続は、おもにスタティックページで有効です。

Keep-Alive接続を設定する 2つのオプションがあります:

- **Number of requests by connection**: Allows you to set the maximum number of requests and responses able to travel over a connection keep alive. Limiting the number of requests per connection allows you to prevent server flooding due to a large number of incoming requests (a technique used by hackers).<p>
  The default value (100) can be increased or decreased depending on the resources of the machine hosting the 4D Web Server.</p>

- **Timeout**: This value defines the maximum wait period (in seconds) during which the web server maintains an open TCP connection without receiving any requests from the web browser. Once this period is over, the server closes the connection.<p>
  If the web browser sends a request after the connection is closed, a new TCP connection is automatically created. This operation is not visible for the user.</p>
