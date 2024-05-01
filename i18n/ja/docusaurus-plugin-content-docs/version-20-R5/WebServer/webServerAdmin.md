---
id: webServerAdmin
title: 管理
---

4Dには、統合された Webサーバーを起動・停止・監視するためのツールがいくつか用意されています。

## 4D Webサーバーの開始

> 4D や 4D Server の Webサーバーを起動するには、"4D Web Application" ライセンスが必要です。 For more information, please refer to the [4D Web site](https://www.4d.com).

4Dプロジェクトは、メイン (ホスト) アプリケーションおよび、ホストされた各コンポーネントの Webサーバーを起動して監視することができます。

4D Webサーバーは複数の方法で起動できます:

- ボタン/メニューコマンドの使用。
  - 4D: **Run\>Start Web Server** menu<br/>![](../assets/en/WebServer/start1.png)
  - 4D Server: **Start HTTP server** button of the HTTP Server page<br/>![](../assets/en/WebServer/start2.png)

- 4Dアプリケーション開始時に Webサーバーを自動起動。 To do this, display the **Web\/Configuration** page of the Settings and select the **Launch Web Server at Startup** check box:<br/>![](../assets/en/WebServer/config.png)

- Programmatically, by calling the [`webServer.start()`](API/WebServerClass.md#start) function or `WEB START SERVER` command.

The web server of any component can be launched by calling the [`webServer.start()`](API/WebServerClass.md#start) function on the component's web server object.

> Webサーバーを開始したり停止したりするために、4Dアプリケーションを再起動する必要はありません。

## 4D Webサーバーの停止

4D Webサーバーは複数の方法で停止できます:

- Using the **Run\>Stop Web Server** menu of 4D or the **Stop HTTP server** button of the HTTP Server page of 4D Server (both items show **Start...** when the server is not already started).

- Programmatically, by calling the [`webServer.stop()`](API/WebServerClass.md#stop) function or `WEB STOP SERVER` command.

The web server of any component can be stopped by calling the `webServer.stop()` function on the component's web server object.

## 4D Webサーバーのテスト

The **Test Web Server** command can be used to make sure the built-in web server is functioning correctly (4D only). This command is accessible in the **Run** menu when the web server is launched:

![](../assets/en/WebServer/test1.png)

このコマンドを選択すると、4Dアプリケーションが公開している Webサイトのホームページが、デフォルト Webブラウザーに表示されます:

![](../assets/en/WebServer/defaultHomePage.png)

このコマンドで Webサーバーの動作や、ホームページの表示などを検証できます。 The page is called using the _localhost_ URL, which is the standard shortcut designating the IP address of the machine on which the web browser is executed. The command takes into account the [TCP publication port](#http-port) number specified in the settings.

## キャッシュクリア

いつでもページやイメージをキャッシュからクリアできます (たとえば、スタティックページを更新し、キャッシュにそれをリロードさせたい場合)。

これをおこなうには:

- 4D: click on the **Clear Cache** button in the [Web/Options (I) page](../settings/web.md) of the Settings dialog box.
- 4D Server: click on the **Clear Cache** button in the HTTP page of the 4D Server Administration window.

キャッシュは即座にクリアされます。

> You can also use the [/4DCACHECLEAR](#cacheclear) URL.

## ランタイムエクスプローラー

The **Watch** page (**Web** heading) in the Runtime Explorer displays web server information, particularly:

- **Web Cache Usage**: indicates the number of pages present in the web cache as well as its use percentage. Webサーバーがアクティブでキャッシュサイズが 0 より大きい場合のみ、この情報が利用できます。

- **Web Server Elapsed Time**: indicates the duration of use (in hours:minutes:seconds format) of the Web server. Webサーバーがアクティブである場合のみ、この情報が利用できます。

- **Web Hits Count**: indicates the total number of HTTP requests received since the web server boot, as well as an instantaneous number of requests per second (measure taken between two Runtime Explorer updates). Webサーバーがアクティブである場合のみ、この情報が利用できます。

## 管理用 URL

Webサイト管理用の URL を使用して、サーバー上に公開している Webサイトをコントロールできます。 4D Web Server accepts four particular URLs: _/4DSTATS_, _/4DHTMLSTATS_, /_4DCACHECLEAR_ and _/4DWEBTEST_.

> _/4DSTATS_, _/4DHTMLSTATS_ and _/4DCACHECLEAR_ are only available to the Designer and Administrator of the database. 4D のパスワードシステムが起動されていないと、これらの URL はすべてのユーザーに対して利用可能となります。 <em x-id="3">/4DWEBTEST</em> は、常に利用可能です。

### /4DSTATS

The **/4DSTATS** URL returns several items of information in an HTML table (displayable in a browser):

| 項目                   | 説明                                                           |
| -------------------- | ------------------------------------------------------------ |
| 現在のキャッシュサイズ          | Webサーバーの現在のキャッシュサイズ (バイト単位)               |
| 最大キャッシュサイズ           | キャッシュの最大サイズ (バイト単位)                       |
| キャッシュされたオブジェクトの最大サイズ | キャッシュされたオブジェクト中で最も大きなもの (バイト単位)           |
| 使用キャッシュ              | キャッシュ使用率                                                     |
| キャッシュされているオブジェクト     | Number of objects found in the cache, **including pictures** |

この情報を用いて、サーバーの機能を確認することができ、最終的には対応するパラメーターを適合させます。

> The `WEB GET STATISTICS` command allows you to also obtain information about how the cache is being used for static pages.

### /4DHTMLSTATS

The _/4DHTMLSTATS_ URL returns, also as an HTML table, the same information as the _/4DSTATS_ URL. The difference is that the **Cached Objects** field only counts HTML pages (without counting picture files). Moreover, this URL returns the **Filtered Objects** field.

| 項目                   | 説明                                                         |
| -------------------- | ---------------------------------------------------------- |
| 現在のキャッシュサイズ          | Webサーバーの現在のキャッシュサイズ (バイト単位)             |
| 最大キャッシュサイズ           | キャッシュの最大サイズ (バイト単位)                     |
| キャッシュされたオブジェクトの最大サイズ | キャッシュされたオブジェクト中で最も大きなもの (バイト単位)         |
| 使用キャッシュ              | キャッシュ使用率                                                   |
| キャッシュされているオブジェクト     | Number of objects found in the cache, **without pictures** |
| フィルターされたオブジェクト       | URL でカウントされないキャッシュ中のオブジェクトの数 (特にピクチャー)。 |

### /4DCACHECLEAR

The _/4DCACHECLEAR_ URL immediately clears the cache of the static pages and images. そのため、修正されたページを "強制的に" 更新することができます。

### /4DWEBTEST

The _/4DWEBTEST_ URL is designed to check the web server status. このURLが呼び出されると、4D は以下の HTTPフィールドを記したテキストファイルを返します。

| HTTPフィールド  | 説明                                   | 例題                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 日付         | RFC 822 フォーマットでの現在の日付                | Mon, 7 Dec 2020 13:12:50 GMT                                                                                                                                                                                                                                                                                       |
| Server     | 4D/バージョン番号                           | 4D/18.5.0 (Build 18R5.257368)                                                                                                                                                                                                                                                   |
| User-Agent | 名前とバージョン @ IPクライアントアドレス | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 @ 127.0.0.1 |

## Logs

4Dでは、Webリクエストのログを2種類作成することができます:

- a debug log, useful in the web server development phase (_HTTPDebugLog.txt_),
- a standardized web request log, rather used for statistic purposes (_logweb.txt_).

Both log files are automatically created in the **Logs** folder of the application project.

### HTTPDebugLog.txt

The [http debug file](webServerConfig.md#debug-log) can be enabled using the [`web server` object](webServerObject.md) or the `WEB SET OPTION` command.

このログファイルは、各 HTTPリクエストとそれぞれのレスポンスを rawモードで記録します。 ヘッダーを含むリクエスト全体が記録され、オプションでボディ部分も記録することができます。

リクエストとレスポンスの両方に対して以下のフィールドが記録されます:

| フィールド名         | 説明                                                     |
| -------------- | ------------------------------------------------------ |
| SocketID       | 通信に使用されたソケットの ID                                       |
| PeerIP         | ホスト (あるいはクライアント) の IPv4アドレス         |
| PeerPort       | ホスト (あるいはクライアント) が使用したポート番号         |
| TimeStamp      | (システムが開始されてからの) ミリ秒単位でのタイムスタンプ      |
| ConnectionID   | 接続UUID (通信に使用された VTCPSocket の UUID) |
| SequenceNumber | ログセッション内で固有かつシーケンシャルなオペレーション番号                         |

### logweb.txt

The [web log recording file](webServerConfig.md#log-recording) can be enabled using the [`web server` object](webServerObject.md), the `WEB SET OPTION` command, or the **Web/Log (type)** page of the settings. ログのフォーマットを選択する必要があります。

#### CLF/DLF

Each line of the file represents a request, such as:
_host rfc931 user \[DD/MMM/YYYY:HH:MM:SS] "request" state length_
Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

DLF (Combined Log Format) フォーマットは CLF (Common Log Format) フォーマットと類似していて、まったく同じ構造を使用します。 さらに、各リクエストの最後に2つのHTTPフィールド、Referer と User-agent を追加します。 CLF/DLF フォーマット (カスタマイズ不可) についての説明です:

| フィールド名                                                               | 説明                                                                                                                                                                                                   |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host                                                                 | クライアントの IPアドレス (例: 192.100.100.10)                                                                                |
| rfc931                                                               | 4Dによって作成されない情報。常に - (マイナス記号) です。                                                                                                                                                  |
| user                                                                 | 認証されているユーザー名、あるいは、- (マイナス記号) 。 ユーザー名にスペースが含まれると、_ (下線) に置き換わります。                                                                          |
| DD/MMM/YYYY:HH:MM:SS | DD: 日、MMM: 月を表す3文字の略号 (Jan、Febなど)、YYYY: 年、HH: 時間、MM: 分、SS: 秒。 日付と時間はサーバーのローカルタイム。 |
| request                                                              | クライアントによって送られたリクエスト (例: GET /index.htm HTTP/1.0) 。                                                                                |
| state                                                                | サーバーの返答。                                                                                                                                                                                             |
| length                                                               | 返されたデータ (HTTPヘッダー以外) のサイズまたは 0                                                                                                                                                    |
| Referer                                                              | DLF のみ - リクエストされたドキュメントを指しているページの URL を含みます。                                                                                                                                                         |
| User-agent                                                           | DLF のみ - リクエストのオリジンにおけるクライアントのブラウザーまたはソフトウェアの名前とバージョンを含みます。                                                                                                                                          |

#### ELF/WLF

ELF (Extended Log Format) フォーマットは HTTPブラウザー界で広く普及しています。 そして、特別なニーズに応える洗練されたログを構築します。 この理由により、ELFフォーマットはカスタマイズされます。記録するフィールドやそのフィールドをファイルへ挿入する順番を選択することが可能です。

WLF (WebStar Log Format) フォーマットは 4D WebSTAR サーバー用として特別に開発されました。

##### フィールドの設定

ELF または WLF を選択すると、選択されたフォーマットに対して利用可能なフィールドが "Weg Log Token Selection" エリアに表示されます。 ログに含む各フィールドを選択する必要があります。 これには、選択するフィールドにチェックを入れます。

> 同じフィールドを 2度選択することはできません。

各フォーマットで利用可能なフィールド (アルファベット順) とその内容を以下のテーブルに示します:

| フィールド                                                  | ELF | WLF | 値                                                                                                                           |
| ------------------------------------------------------ | --- | --- | --------------------------------------------------------------------------------------------------------------------------- |
| BYTES_RECEIVED                    |     | X   | サーバーが受け取ったバイト数                                                                                                              |
| BYTES_SENT                        | X   | X   | サーバーがクライアントに送ったバイト数                                                                                                         |
| C_DNS                             | X   | X   | DNS の IPアドレス (ELF: C_IP フィールドと同一のフィールド)                             |
| C_IP                              | X   | X   | クライアントの IPアドレス (例: 192.100.100.10)       |
| CONNECTION_ID                     |     | X   | 接続ID番号                                                                                                                      |
| CS(COOKIE)                          | X   | X   | HTTPリクエストに格納されている cookie に関する情報                                                                                             |
| CS(HOST)                            | X   | X   | HTTPリクエストの Hostフィールド                                                                                                        |
| CS(REFERER)                         | X   | X   | リクエストされたドキュメントを指すページの URL                                                                                                   |
| CS(USER_AGENT) | X   | X   | クライアントのソフトウェアとオペレーティングシステムに関する情報                                                                                            |
| CS_SIP                            | X   | X   | サーバーの IPアドレス                                                                                                                |
| CS_URI                            | X   | X   | リクエストが作成された URI                                                                                                             |
| CS_URI_QUERY | X   | X   | リクエストのクエリ引数                                                                                                                 |
| CS_URI_STEM  | X   | X   | クエリ引数のないリクエストのパート                                                                                                           |
| DATE                                                   | X   | X   | DD: 日、MMM: 月を表す3文字の略号 (Jan、Febなど)、YYYY: 年                |
| METHOD                                                 | X   | X   | サーバーへ送られたリクエスト用の HTTPメソッド                                                                                                   |
| PATH_ARGS                         |     | X   | CGI引数: "$" の後に続く文字列                                                                                         |
| STATUS                                                 | X   | X   | サーバーの返答                                                                                                                     |
| TIME                                                   | X   | X   | HH: 時間、MM: 分、SS: 秒                                                          |
| TRANSFER_TIME                     | X   | X   | 返答を作成するためにサーバーが要求した時間                                                                                                       |
| USER                                                   | X   | X   | 認証されているユーザー名、あるいは、- (マイナス記号) 。 ユーザー名にスペースが含まれると、_ (下線) に置き換わります。 |
| URL                                                    |     | X   | クライアントがリクエストした URL                                                                                                          |

> 日付と時間は GMTで表されます。

#### 周期的なバックアップ

Since a _logweb.txt_ file can become considerably large, it is possible to set up an automatic archiving mechanism. バックアップはある周期 (時間、日、週、月単位) または、ファイルのサイズに基づいて起動します。設定の期限 (またはファイルサイズ) に近づくと、4D は自動的にカレントのログファイルを閉じてアーカイブします。そして新たにファイルを作成します。

When the web log file backup is triggered, the log file is archived in a folder named "Logweb Archives," which is created at the same level as the _logweb.txt_ file.

アーカイブされたファイルは、以下の例に基づいて名称変更されます: "DYYYY_MM_DD_Thh_mm_ss.txt"。 たとえば、ファイルがアーカイブされた時間が September 4, 2020 at 3:50 p.m. and 7 seconds である場合、"D2020_09_04_T15_50_07.txt" になります。

#### バックアップパラメーター

The automatic backup parameters for the logweb.txt are set on the **Web/Log (backup)** page of the Settings:

![](../assets/en/WebServer/backup.png)

First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. 必要に応じて、バックアップする正確な時間を指定します。

- **No Backup**: The scheduled backup function is deactivated.

- **Every X hour(s)**: This option is used to program backups on an hourly basis. 1 から 24 の値を入力します。
  - **starting at**: Used to set the time at which the first back up will begin.

- **Every X day(s) at X**: This option is used to program backups on a daily basis. バックアップを毎日実行するには、1を入力します。 このオプションをチェックすると、バックアップの開始時間を指定しなければなりません。

- **Every X week(s), day at X**: This option is used to program backups on a weekly basis. たとえば、毎週バックアップをおこなうには 1 と設定します。 このオプションをチェックすると、バックアップを開始する曜日と時間を指定しなければなりません。 複数の曜日を選択することもできます。 たとえば、毎週水曜日と金曜日にバックアップをするようプログラムできます。

- **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. たとえば、毎月バックアップをおこなうには 1 と設定します。 このオプションをチェックすると、バックアップ開始月の日時を設定しなければなりません。

- **Every X MB**: This option is used to program backups based on the size of the current request log file. ファイルが指定サイズに達すると、バックアップが自動的に起動します。 サイズ制限は 1、10、100 または 1000MB ごとに設定可能です。
