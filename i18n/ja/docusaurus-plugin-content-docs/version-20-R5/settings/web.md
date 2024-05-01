---
id: web
title: Web ページ
---

Using the tabs on the **Web** page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see [Web server](../WebServer/webServer.md). For more information about 4D Web services, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html) chapter.

## 設定

### 公開情報

#### 開始時にWebサーバーを起動

4Dアプリケーションの起動時に Webサーバーを開始するか指定します。 This option is described in the [Web server administration](../WebServer/webServerAdmin.md#starting-the-4d-web-server) section.

#### HTTPを有効化

安全でない接続を Webサーバーが受け入れるかどうかを示します。 See [Enable HTTP](../WebServer/webServerConfig.md#enable-http).

#### HTTP ポート

HTTP接続を受け付ける IP (TCP) ポート番号。 See [HTTP Port](../WebServer/webServerConfig.md#http-port).

#### IPアドレス

4D Webサーバーが HTTPリクエストを受け付ける IPアドレスを指定できます (4Dローカルおよび 4D Server)。 See [IP Address to listen](../WebServer/webServerConfig.md#ip-address-to-listen).

#### HTTPSを有効にする

安全な接続を Webサーバーが受け入れるかどうかを示します。 See [Enable HTTPS](../WebServer/webServerConfig.md#enable-https).

#### HTTPS ポート

TLS (HTTPSプロトコル) を使用したセキュアな HTTP接続に対して Webサーバーが使用する TCP/IPポート番号を指定できます。 See [HTTPS Port](../WebServer/webServerConfig.md#https-port).

#### "4DSYNC" URLを使用したデータベースアクセスを許可

_Compatibility Note_: This option is [deprecated](../WebServer/webServerConfig.md#deprecated-settings). 今後、HTTP を介したデータベースアクセスには ORDA のリモートデータストア機能と RESTリクエストの使用が推奨されます。

### パス

#### デフォルトHTMLルート

Webサイトファイルのデフォルトの位置を指定し、それより上のファイルにはアクセス不能なディスク上の階層レベルを指定します。 See [Root Folder](../WebServer/webServerConfig.md#root-folder).

#### デフォルトホームページ

Webサーバー用のデフォルトホームページを指定します。 See [Default Home page](../WebServer/webServerConfig.md#default-home-page).

## オプション (I)

### キャッシュ

#### 4D Webキャッシュを使用する

Webページキャッシュを有効化します。 See [Cache](../WebServer/webServerConfig.md#cache).

#### ページキャッシュサイズ

キャッシュサイズを指定します。 See [Cache](../WebServer/webServerConfig.md#cache).

#### キャッシュクリア

いつでもページやイメージをキャッシュからクリアできます (たとえば、スタティックページを更新し、キャッシュにそれをリロードさせたい場合)。
To do so, you just have to click on the **Clear Cache** button. キャッシュは即座にクリアされます。

> You can also use the special URL [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Webプロセス

このエリアでは、ユーザーセッションとそれに関連するプロセスを Webサーバーがどのように管理するかを設定します。

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### スケーラブルセッション (マルチプロセスセッション)

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).

#### セッションなし

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Webクライアントからの連続したリクエストはどれも常に独立しており、サーバー上でコンテキストは維持されません。

このモードでは、以下の追加の Web サーバー設定を設定することができます:

- [Maximum Concurrent Web Processes](#maximum-concurrent-web-processes)
- [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
- [Use preemptive processes](#use-preemptive-web-processes)

#### 旧式セッション (シングルプロセスセッション)

_Compatibility Note:_ This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

このオプションは 4D HTTP サーバーの旧式ユーザーセッションの管理を有効化します。 This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### 最大同時Webプロセス

Not available with [scalable sessions](../WebServer/sessions.md).

Webプロセスの最大同時接続数の厳格な上限です。 See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).

#### 一時的なコンテキストを再利用する

Not available with [scalable sessions](../WebServer/sessions.md).

リモートモードで実行されている 4D Webサーバーの動作を最適化できます。 See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### プリエンプティブプロセスを使用

Not available with [scalable sessions](../WebServer/sessions.md).

コンパイル済みアプリケーションにおいてプリエンプティブWebプロセスを有効化します。 When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

> このオプションは スケーラブルセッション、RESTプロセス (コンパイル済みモード)、および Webサービスプロセス (サーバーあるいはクライアント) には適用されません。  See [Enabling the preemptive mode for the web server](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).

#### 非動作プロセスのタイムアウト

Not available with [scalable sessions](../WebServer/sessions.md).

サーバー上で活動していない Webプロセスを閉じるための最大タイムアウト時間を設定できます。 See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).

### Webパスワード

Webサーバーに対して適用する認証システムを設定します。 3つのオプションから選択できます:

カスタムの認証 (デフォルト)<br/>
BASIC認証のパスワード<br/>
DIGEST認証のパスワード

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the _Web Development_ documentation.

## オプション (II)

### テキスト変換

#### 拡張文字をそのまま送信

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### 文字コード

4D Webサーバーが使用する文字セットを定義します。 See [Character Set](../WebServer/webServerConfig.md#character-set).

### Keep-Alive接続を使用する

See [Deprecated Settings](../WebServer/webServerConfig.md#keep-alive-connections).

### CORS設定

#### CORSを有効化

クロスオリジンリソースシェアリング (CORS) サービスを有効化します。 See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### ドメイン名/許可されたHTTPメソッド

CORSサービスで許可されたホストとメソッドの一覧。 See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).

## ログ (タイプ)

### ログフォーマット

Starts or stops the recording of requests received by the 4D web server in the _logweb.txt_ file and sets its format. See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.

ログフォーマットメニューでは、次のオプションを提供します。

- **No Log File**: When this option is selected, 4D will not generate a log file of requests.

- **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\
  host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\
  Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

  - host: クライアントの IPアドレス (例: 192.100.100.10)
  - rfc931: 4Dによって作成されない情報。 常に - (マイナス記号) です。
  - use: 認証されているユーザー名、あるいは、- (マイナス記号) 。 ユーザー名にスペースが含まれると、_ (下線) に置き換わります。
  - DD: 日、MMM: 月を表す3文字の略号 (Jan、Febなど)、YYYY: 年、HH: 時間、MM: 分、SS: 秒。

> 日付と時間はサーバーのローカルタイム。

- request: クライアントによって送られたリクエスト (例: GET /index.htm HTTP/1.0)
- state: サーバーの返答。
- length: 返されたデータ (HTTPヘッダー以外) のサイズまたは 0。

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. 5秒間リクエストが発生しなくても、操作はディスクに書き込まれます。
> The possible values of state are as follows:
> 200: OK
> 204: No contents
> 302: Redirection
> 304: Not modified
> 400: Incorrect request
> 401: Authentication required
> 404: Not found
> 500: Internal error
> The CLF format cannot be customized.

- **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLFフォーマットは CLFフォーマットと類似していて、まったく同じ構造を使用します。 さらに、各リクエストの最後に2つのHTTPフィールド、Referer と User-agent を追加します。

  - Referer: リクエストされたドキュメントを指しているページの URL を含みます。
  - User-agent: リクエストのオリジンにおけるクライアントのブラウザーまたはソフトウェアの名前とバージョンを含みます。

> DLFフォーマットはカスタマイズされません。

- **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. ELFフォーマットは HTTPブラウザー界で広く普及しています。 そして、特別なニーズに応える洗練されたログを構築します。 この理由により、ELFフォーマットはカスタマイズされます。記録するフィールドやそのフィールドをファイルへ挿入する順番を選択することが可能です。

- **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. WLFフォーマットは 4D WebSTAR サーバー用として特別に開発されました。 いくつかの追加フィールドを持つ以外、EFLフォーマットと似ています。 EFLフォーマットと同様、 カスタマイズされます。

**Configuring the fields**
When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. ログに含む各フィールドを選択する必要があります。 ログに含む各フィールドを選択する必要があります。

**Note**: You cannot select the same field twice.

各フォーマットで利用可能なフィールド (アルファベット順) とその内容を以下のテーブルに示します:

| フィールド                                                  | ELF | WLF | 値                                                                                                                     |
| ------------------------------------------------------ | --- | --- | --------------------------------------------------------------------------------------------------------------------- |
| BYTES_RECEIVED                    |     | X   | サーバーが受け取ったバイト数                                                                                                        |
| BYTES_SENT                        | X   | X   | サーバーがクライアントに送ったバイト数                                                                                                   |
| C_DNS                             | X   | X   | DNS の IPアドレス (ELF: C_IP フィールドと同一のフィールド)                       |
| C_IP                              | X   | X   | クライアントの IPアドレス (例: 192.100.100.10) |
| CONNECTION_ID                     |     | X   | 接続ID番号                                                                                                                |
| CS(COOKIE)                          | X   | X   | HTTPリクエストに格納されている cookie に関する情報                                                                                       |
| CS(HOST)                            | X   | X   | HTTPリクエストの Hostフィールド                                                                                                  |
| CS(REFERER)                         | X   | X   | リクエストされたドキュメントを指すページの URL                                                                                             |
| CS(USER_AGENT) | X   | X   | クライアントのソフトウェアとオペレーティングシステムに関する情報                                                                                      |
| CS_SIP                            | X   | X   | サーバーの IPアドレス                                                                                                          |
| CS_URI                            | X   | X   | リクエストが作成された URI                                                                                                       |
| CS_URI_QUERY | X   | X   | リクエストのクエリ引数                                                                                                           |
| CS_URI_STEM  | X   | X   | クエリ引数のないリクエストのパート                                                                                                     |
| DATE                                                   | X   | X   | DD: 日、MMM: 月を表す3文字の略号 (Jan、Febなど)、YYYY: 年          |
| METHOD                                                 | X   | X   | サーバーへ送られたリクエスト用の HTTPメソッド                                                                                             |
| PATH_ARGS                         |     | X   | CGI引数: "$" の後に続く文字列                                                                                   |
| STATUS                                                 | X   | X   | サーバーの返答                                                                                                               |
| TIME                                                   | X   | X   | HH: 時間、MM: 分、SS: 秒                                                    |
| TRANSFER_TIME                     | X   | X   | 返答を作成するためにサーバーが要求した時間                                                                                                 |
| USER                                                   | X   | X   | 認証されているユーザー名、あるいは、- (マイナス記号) 。                                                                     |
|                                                        |     |     | ユーザー名にスペースが含まれると、_ (下線) に置き換わります。                                             |
| URL                                                    |     | X   | クライアントがリクエストした URL                                                                                                    |

> 日付と時間は GMTで表されます。

## ログ (バックアップ)

リクエストログの自動バックアップ設定を指定します。 First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. 必要に応じて、バックアップする正確な時間を指定します。

- **No Backup**: The scheduled backup function is deactivated.
- **Every X hour(s)**: This option is used to program backups on an hourly basis. 1 から 24 の値を入力します。

  - **starting at**: Used to set the time at which the first back up will begin.
- **Every X day(s) at X**: This option is used to program backups on a daily basis. バックアップを毎日実行するには、1を入力します。 このオプションをチェックすると、バックアップの開始時間を指定しなければなりません。
- **Every X week(s), day at X**: This option is used to program backups on a weekly basis. たとえば、毎週バックアップをおこなうには 1 と設定します。 このオプションをチェックすると、バックアップを開始する曜日と時間を指定しなければなりません。 複数の曜日を選択することもできます。 たとえば、毎週水曜日と金曜日にバックアップをするようプログラムできます。
- **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. たとえば、毎月バックアップをおこなうには 1 と設定します。 このオプションをチェックすると、バックアップ開始月の日時を設定しなければなりません。
- **Every X MB**: This option is used to program backups based on the size of the current request log file. ファイルが指定サイズに達すると、バックアップが自動的に起動します。 サイズ制限は 1、10、100 または 1000MB ごとに設定可能です。

> スケジュールされたバックアップの場合で、バックアップが開始する予定となっているときに Webサーバーが起動していないと、次回の起動において 4D はバックアップが失敗したと見なし、データベース設定で示されている適切な設定を適用します。

## Webサービス

このページのオプションを使用して 4Dプロジェクトの Webサービスを有効にし、(サーバーおよびクライアントの) 設定をすることができます。

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### サーバー側設定

このエリアでは 4D を Webサービスサーバーとして使用する (つまり、Webサービスの形でプロジェクトメソッドを公開する) ための設定をおこないます。

- **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the _Published in WSDL_ attribute. このオプションを選択すると、4D はメソッドプロパティに基づき WSDLファイルを生成します。
- **Web Service Name**: This area lets you change the "generic name" of the Web Service. この名前は、SOAPサーバーレベルでサービスを識別するために使用されます。 デフォルトで 4D は "A_WebService" を使用します。
- **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. インターネットに公開される各 Webサービスはユニークでなければなりません。 Webサービス名をユニークにするために XML名前空間が使用されます。 名前空間は任意の文字列で、XMLタグをユニークに識別するために使用されます。 典型的には、名前空間は会社の URL で始まります (http://mycompany.com/mynamespace)。 指定された文字列がユニークである限り、指定した URL に何か付け加える必要はありません。 デフォルトで 4D は以下の名前空間を使用します: http://www.4d.com/namespace/default。

> タグ名に関する XML標準に準拠するために、使用する文字には空白が含まれていてはなりません。また数字から始まっていてはなりません。 非互換性を避けるために、アクセント文字や日本語などの拡張文字は使用しないことを推奨します。

### クライアント側設定

このエリアでは Webサービスクライアントとして 4D を使用する (つまり、ネットワーク上に公開されているサービスにサブスクライブする) ための設定をおこないます。

- **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. プロキシプロジェクトメソッドは 4Dアプリケーションと Webサービスサーバーとのリンクを形成します。 デフォルトで "proxy_" が使用されます。

## Web機能

このページには、RESTサーバーなどの高度な Web機能を有効化および制御するためのオプションが含まれています。

### 公開

#### RESTサーバーとして公開

RESTサーバーを開始/停止します。 See [REST Server Configuration](../REST/configuration.md).

### アクセス

この設定は、RESTリクエストを使って 4Dデータベースへのリンクを設立することのできる 4Dユーザーのグループを指定します。 See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Qodly Studio

#### Qodly Studio へのアクセスを有効化する

:::note

このオプションは、Qodly Studio ライセンスが有効な場合にのみ表示されます。

:::

This option enables user access to [Qodly Studio](XXX) for the current project. Note that global access must be allowed at the [application level](../Admin/webAdmin.md).
