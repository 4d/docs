---
id: web
title: Web page
---

Using the tabs on the **Web** page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see [Web server](../WebServer/webServer.md). For more information about 4D Web services, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html) chapter.

## 設定

### Publishing Information

#### Launch Web Server at Startup

Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the [Web server administration](../WebServer/webServerAdmin.md#starting-the-4d-web-server) section.

#### HTTPを有効化

Indicates whether or not the Web server will accept non-secure connections. See [Enable HTTP](../WebServer/webServerConfig.md#enable-http).


#### HTTP ポート

HTTP接続を受け付ける IP (TCP) ポート番号。 See [HTTP Port](../WebServer/webServerConfig.md#http-port).

#### IP Address

IP address on which the 4D web server will receive HTTP requests (4D local and 4D Server). See [IP Address to listen](../WebServer/webServerConfig.md#ip-address-to-listen).


#### HTTPSを有効にする

Indicates whether or not the Web server will accept secure connections. See [Enable HTTPS](../WebServer/webServerConfig.md#enable-https).


#### HTTPS ポート

Allows you to modify the TCP/IP port number used by the Web server for secured HTTP connections over TLS (HTTPS protocol). See [HTTPS Port](../WebServer/webServerConfig.md#https-port).

#### Allow database access through 4DSYNC URLs

*Compatibility Note*: This option is [deprecated](../WebServer/webServerConfig.md#deprecated-settings). For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests.


### Paths

#### Default HTML Root

Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. See [Root Folder](../WebServer/webServerConfig.md#root-folder).

#### Default Home Page

Designate a default home page for the Web server. See [Default Home page](../WebServer/webServerConfig.md#default-home-page).




## Options (I)

### キャッシュ


#### Use the 4D Web cache

Enables the web page cache. See [Cache](../WebServer/webServerConfig.md#cache).

#### Pages Cache Size

Sets the cache size. See [Cache](../WebServer/webServerConfig.md#cache).


#### Clear Cache

いつでもページやイメージをキャッシュからクリアできます (たとえば、スタティックページを更新し、キャッシュにそれをリロードさせたい場合)。 To do so, you just have to click on the **Clear Cache** button. キャッシュは即座にクリアされます。

> You can also use the special URL [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Web Process

This area allows you to configure how the web server will handle user sessions and their associated processes.

> The **Legacy sessions** option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.

#### Scalable sessions (multi-process sessions)

When you select this option (recommended), a user session is managed through a **Session** object. See the [User sessions page](../WebServer/sessions.md#enabling-sessions).


#### No sessions

When this option is selected, the web server does not provide any specific support for [user sessions](../WebServer/sessions.md). Successive requests from web clients are always independent and no context is maintained on the server.

In this mode, you can configure additional web server setttings:

-   [最大同時Webプロセス](#maximum-concurrent-web-processes)
-   [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts)
-   [Use preemptive processes](#use-preemptive-web-processes)

#### Legacy sessions (single process sessions)

*Compatibility Note:* This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.

This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the [Web Sessions Management (Legacy)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html) section. See [Keep Session](../WebServer/webServerConfig.md#keep-session).

When selected, the [Reuse Temporary Contexts (4D in remote mode)](#reuse-temporary-contexts) option is automatically checked (and locked).

#### 最大同時Webプロセス

Not available with [scalable sessions](../WebServer/sessions.md).

Strictly high limit of concurrent web processes. See [Maximum Concurrent Web Processes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).


#### Reuse Temporary Contexts

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to optimize the operation of the 4D Web server in remote mode. See [Reuse temporary contexts in remote mode)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Use preemptive processes

Not available with [scalable sessions](../WebServer/sessions.md).

Enables preemptive web processes in your compiled applications. When **Use preemptive processes** is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see [Using preemptive Web processes](../WebServer/preemptiveWeb.md).

**Note:** This option does not apply to Web service processes (server or client). Preemptive mode is supported by Web service processes at method level: you just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.


#### 非動作プロセスのタイムアウト

Not available with [scalable sessions](../WebServer/sessions.md).

Allows you to set the maximum timeout before closing for inactive Web processes on the server. See [Inactive Process Timeout](../WebServer/webServerConfig.md#inactive-process-timeout).



### Web Passwords

Set the authentication system that you want to apply to your Web server. Three options are proposed:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Using **Custom** authentication is recommended. See [**Authentication**](../WebServer/authentication.md) chapter in the *Web Development* documentation.


## Options (II)

### Text Conversion

#### 拡張文字をそのまま送信

See [Deprecated Settings](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define the set of characters to be used by the 4D Web server. See [Character Set](../WebServer/webServerConfig.md#character-set).

### Keep-Alive接続を使用する

See [Deprecated Settings](../WebServer/webServerConfig.md#keep-alive-connections).

### CORS設定

#### Enable CORS

Enables Cross-origin resource sharing (CORS) service. See [Enable CORS Service](../WebServer/webServerConfig.md#enable-cors-service).

#### Domain names/HTTP methods allowed

CORSサービスで許可されたホストとメソッドの一覧 See [CORS Settings](../WebServer/webServerConfig.md#cors-settings).



## Log (type)


### Log Format

4D Web サーバーが受け取るリクエストのログを開始/停止します。ログは、*logweb.txt* ファイルに記録され、そのフォーマットを指定することができます。 See [Log Recording](../WebServer/webServerConfig.md#log-recording).

> The activation and deactivation of the log file of requests can also be carried out by programming using the [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html) command.


The log format menu provides the following options:

-   **No Log File**: When this option is selected, 4D will not generate a log file of requests.

-   **CLF (Common Log Format)**: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\ host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length\ Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

    -   host: IP address of the client (ex. 192.100.100.10)
    -   rfc931: information not generated by 4D, it's always - (a minus sign)
    -   user: user name as it is authenticated, or else it is - (a minus sign). ユーザー名にスペースが含まれると、_ (下線) に置き換わります。
    -   DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds

> 日付と時間はサーバーのローカルタイム。

-   request: request sent by the client (ex. GET /index.htm HTTP/1.0)
-   state: reply given by the server.
-   length: size of the data returned (except the HTTP header) or 0.

> **Note:** For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds. The possible values of state are as follows: 200: OK 204: No contents 302: Redirection 304: Not modified 400: Incorrect request 401: Authentication required 404: Not found 500: Internal error The CLF format cannot be customized.

-   **DLF (Combined Log Format)**: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. さらに、各リクエストの最後に2つのHTTPフィールド、Referer と User-agent を追加します。

    -   Referer: Contains the URL of the page pointing to the requested document.
    -   User-agent: Contains the name and version of the browser or software of the client at the origin of the request.

> The DLF format cannot be customized.

-   **ELF (Extended Log Format)**: When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. そして、特別なニーズに応える洗練されたログを構築します。 この理由により、ELFフォーマットはカスタマイズされます。記録するフィールドやそのフィールドをファイルへ挿入する順番を選択することが可能です。

-   **WLF (WebStar Log Format)**: When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Like the ELF format, it can be customized.

**Configuring the fields** When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. ログに含む各フィールドを選択する必要があります。 To do so, use the arrow buttons or simply drag and drop the desired fields into the "Selected Tokens" area.

**Note**: You cannot select the same field twice.

各フォーマットで利用可能なフィールド (アルファベット順) とその内容を以下のテーブルに示します:

| フィールド          | ELF | WLF | 値                                                                          |
| -------------- | --- | --- | -------------------------------------------------------------------------- |
| BYTES_RECEIVED |     | ○   | サーバーが受け取ったバイト数                                                             |
| BYTES_SENT     | ○   | ○   | Number of bytes sent by the server to the client                           |
| C_DNS          | ○   | ○   | IP address of the DNS (ELF: field identical to the C_IP field)             |
| C_IP           | ○   | ○   | IP address of the client (for example 192.100.100.10)                      |
| CONNECTION_ID  |     | ○   | Connection ID number                                                       |
| CS(COOKIE)     | ○   | ○   | Information about cookies contained in the HTTP request                    |
| CS(HOST)       | ○   | ○   | Host field of the HTTP request                                             |
| CS(REFERER)    | ○   | ○   | URL of the page pointing to the requested document                         |
| CS(USER_AGENT) | ○   | ○   | Information about the software and operating system of the client          |
| CS_SIP         | ○   | ○   | サーバーの IPアドレス                                                               |
| CS_URI         | ○   | ○   | URI on which the request is made                                           |
| CS_URI_QUERY | ○   | ○   | Request query parameters                                                   |
| CS_URI_STEM  | ○   | ○   | Part of request without query parameters                                   |
| DATE           | ○   | ○   | DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year |
| METHOD         | ○   | ○   | HTTP method used for the request sent to the server                        |
| PATH_ARGS      |     | ○   | CGI parameters: string located after the "$" character                     |
| STATUS         | ○   | ○   | Reply provided by the server                                               |
| TIME           | ○   | ○   | HH: hour, MM: minutes, SS: seconds                                         |
| TRANSFER_TIME  | ○   | ○   | Time requested by server to generate the reply                             |
| USER           | ○   | ○   | User name if authenticated; otherwise - (minus sign).                      |
|                |     |     | If the user name contains spaces, they are replaced by _ (underlines)      |
| URL            |     | ○   | URL requested by the client                                                |

> 日付と時間は GMTで表されます。

## Log (backup)

Configure the automatic backup parameters for the request log. 最初に、頻度 (日、週などの単位) またはファイルサイズの上限に対応するラジオボタンをクリックして選択します。 必要に応じて、バックアップする正確な時間を指定します。

-   **バックアップしない**: 周期的なバックアップ機能が無効になっています。
-   **X 時間ごと**: 1時間単位でバックアップをプログラムする際、このオプションを使用します。 1 から 24 の値を入力します。

    -   **開始時刻**: 最初のバックアップ開始時間の設定に使用します。
-   **X 日ごと**: 1日単位でバックアップをプログラムする際、このオプションを使用します。 バックアップを毎日実行するには、1を入力します。 このオプションをチェックすると、バックアップの開始時間を指定しなければなりません。
-   **X 週ごと**: 1週間単位でバックアップをプログラムする際、このオプションを使用します。 たとえば、毎週バックアップをおこなうには 1 と設定します。 このオプションをチェックすると、バックアップを開始する曜日と時間を指定しなければなりません。 複数の曜日を選択することもできます。 たとえば、水曜日と金曜日を 選択し、2つのバックアップを設定することができます。
-   **X 月ごと**: 1ヶ月単位でバックアップをプログラムする際、このオプションを使用します。 たとえば、毎月バックアップをおこなうには 1 と設定します。 このオプションをチェックすると、バックアップ開始月の日時を指定しなければなりません。
-   **X MB** (サイズ指定): カレントのリクエストログのファイルサイズに基づいてバックアップをプログラムする際、このオプションを使用します。 ファイルが指定サイズに達すると、バックアップが自動的に起動します。 サイズ制限は 1、10、100 または 1000MB ごとに設定可能です。

> In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.

## Web Services

You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).

For more information about the support of Web Services in 4D, refer to the [Publication and use of Web Services](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html) chapter.

### Server Side

This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.

-   **Allow Web Services Requests**: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the *Published in WSDL* attribute. When this option is checked, 4D creates the WSDL file.
-   **Web Service Name**: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. By default, 4D uses the name A_WebService.
-   **Web Services Namespace**: This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (http://mycompany.com/mynamespace). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: http://www.4d.com/namespace/default.

> In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).

### Client Side

This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.

-   **Wizard Method Prefix**: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. By default, 4D uses the prefix "proxy_".


## Web Features

This page contains the options used to enable and control advanced Web features such as the REST server.

### Publishing

#### Expose as REST server

Starts and stops the REST Server. See [REST Server Configuration](../REST/configuration.md).

### アクセス

This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See [Configuring REST access](../REST/configuration.md#configuring-rest-access).

### Web Studio

#### Enable access to the web studio

Enables general access to the web studio. You still need to configure it at every project level.