---
id: webServerAdmin
title: 管理
---

4Dには、統合された Webサーバーを起動・停止・監視するためのツールがいくつか用意されています。


## 4D Webサーバーの開始

> 4D や 4D Server の Webサーバーを起動するには、"4D Web Application" ライセンスが必要です。 詳細については [4D Webサイト](https://www.4d.com) を参照ください。


4Dプロジェクトは、メイン (ホスト) アプリケーションおよび、ホストされた各コンポーネントの Webサーバーを起動して監視することができます。

4D Webサーバーは複数の方法で起動できます:

*   ボタン/メニューコマンドの使用。
    *   4D: **実行 ＞ Webサーバー開始** メニュー<br>![](assets/en/WebServer/start1.png)
    *   4D Server: HTTPサーバーページの **HTTPサーバー開始** ボタン<br>![](assets/en/WebServer/start2.png)

*   4Dアプリケーション開始時に Webサーバーを自動起動。 これには、ストラクチャー設定の **Web/設定**ページを表示し、**開始時にWebサーバーを起動** オプションを有効にします:<br>![](assets/en/WebServer/config.png)

*   [`webServer.start()`](API/WebServerClass.md#start) 関数または `WEB START SERVER` コマンドを呼び出してプログラムで開始。

コンポーネントの Webサーバーは、コンポーネントの WebServer オブジェクトに対して [`webServer.start()`](API/WebServerClass.md#start) 関数を呼び出すことで開始できます。
> Webサーバーを開始したり停止したりするために、4Dアプリケーションを再起動する必要はありません。

## 4D Webサーバーの停止

4D Webサーバーは複数の方法で停止できます:

*   4D の **実行 ＞ Webサーバー停止** メニューを使用するか、 4D Server にて HTTPサーバーページの **HTTPサーバー停止** ボタンを使用する (いずれも、サーバー開始前は **…開始** と表示されています)。

*   [`webServer.stop()`](API/WebServerClass.md#stop) 関数または `WEB STOP SERVER` コマンドを呼び出してプログラムで停止。

コンポーネントの Webサーバーは、コンポーネントの WebServer オブジェクトに対して `webServer.stop()` 関数を呼び出すことで停止できます。


## 4D Webサーバーのテスト

**Webサーバーテスト** メニューコマンドを使用してビルトインの Webサーバーが正しく実行されているか確認できます (4Dのみ)。 このメニューは Webサーバーが実行されているときに **実行** メニューからアクセスできます:

![](assets/en/WebServer/test1.png)


このコマンドを選択すると、4Dアプリケーションが公開している Webサイトのホームページが、デフォルト Webブラウザーに表示されます:

![](assets/en/WebServer/defaultHomePage.png)


このコマンドで Webサーバーの動作や、ホームページの表示などを検証できます。 ページは、Webブラウザーが実行されているマシンの IPアドレスを指定する標準のショートカットである、*ローカルホスト* の URL を使用して呼び出されます。 コマンドはストラクチャー設定で指定された [TCP 公開ポート](webServerConfig.md#http-ポート) 番号を考慮に入れます。



## Clearing the Cache

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).

To do so, you just have to click on the **Clear Cache** button in the Web/Options (I) page of the Settings dialog box. The cache is then immediately cleared.
> You can also use the [/4DCACHECLEAR](#cacheclear) URL.



## Runtime Explorer

The **Watch** page (**Web** heading) in the Runtime Explorer displays web server information, particularly:

*   **Web Cache Usage**: indicates the number of pages present in the web cache as well as its use percentage. This information is only available if the web server is active and if the cache size is greater than 0.

*   **Web Server Elapsed Time**: indicates the duration of use (in hours:minutes:seconds format) of the Web server. This information is only available if the web server is active.

*   **Web Hits Count**: indicates the total number of HTTP requests received since the web server boot, as well as an instantaneous number of requests per second (measure taken between two Runtime Explorer updates). This information is only available if the web server is active.




## 管理用 URL

Website administration URLS allow you to control the website published on your server. 4D Web Server accepts four particular URLs: */4DSTATS*, */4DHTMLSTATS*, /*4DCACHECLEAR* and */4DWEBTEST*.

> */4DSTATS*, */4DHTMLSTATS* and */4DCACHECLEAR* are only available to the Designer and Administrator of the database. If the 4D password system has not been activated, these URLs are available to all the users. /4DWEBTEST is always available.


### /4DSTATS

The **/4DSTATS** URL returns several items of information in an HTML table (displayable in a browser):

| Item                   | 説明                                                           |
| ---------------------- | ------------------------------------------------------------ |
| Cache Current Size     | Current size of web server cache (in bytes)                  |
| Cache Max Size         | Maximum size of cache (in bytes)                             |
| Cached Object Max Size | Maximum size of each object in the cache (in bytes)          |
| Cache Use              | Percentage of cache used                                     |
| Cached Objects         | Number of objects found in the cache, **including pictures** |

This information can allow you to check the functioning of your server and eventually adapt the corresponding parameters.
> The `WEB GET STATISTICS` command allows you to also obtain information about how the cache is being used for static pages.

### /4DHTMLSTATS

The */4DHTMLSTATS* URL returns, also as an HTML table, the same information as the */4DSTATS* URL. The difference is that the **Cached Objects** field only counts HTML pages (without counting picture files). Moreover, this URL returns the **Filtered Objects** field.

| Item                   | 説明                                                                     |
| ---------------------- | ---------------------------------------------------------------------- |
| Cache Current Size     | Current size of web server cache (in bytes)                            |
| Cache Max Size         | Maximum size of cache (in bytes)                                       |
| Cached Object Max Size | Maximum size of each object in the cache (in bytes)                    |
| Cache Use              | Percentage of cache used                                               |
| Cached Objects         | Number of objects found in the cache, **without pictures**             |
| Filtered Objects       | Number of objects in cache not counted by URL, in particular, pictures |


### /4DCACHECLEAR

The */4DCACHECLEAR* URL immediately clears the cache of the static pages and images. It allows you to therefore “force” the update of the pages that have been modified.

### /4DWEBTEST

The */4DWEBTEST* URL is designed to check the web server status. When this URL is called, 4D returns a text file with the following HTTP fields filled:

| HTTP Field | 説明                                   | 例題                                                                                                                              |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 日付         | current date at the RFC 822 format   | Mon, 7 Dec 2020 13:12:50 GMT                                                                                                    |
| Server     | 4D/version number                    | 4D/18.5.0 (Build 18R5.257368)                                                                                                   |
| User-Agent | name and version @ IP client address | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 @ 127.0.0.1 |



## Logs

4D allows you to generate two logs of web requests:

- a debug log, useful in the web server development phase (*HTTPDebugLog.txt*),
- a standardized web request log, rather used for statistic purposes (*logweb.txt*).

Both log files are automatically created in the **Logs** folder of the application project.

### HTTPDebugLog.txt

The [http debug file](webServerConfig.md#debug-log) can be enabled using the [`web server` object](webServerObject.md) or the `WEB SET OPTION` command.

This log file records each HTTP request and each response in raw mode. ヘッダーを含むリクエスト全体が記録され、オプションでボディ部分も記録することができます。

The following fields are logged for both Request and Response:

| Field name     | 説明                                                            |
| -------------- | ------------------------------------------------------------- |
| SocketID       | ID of socket used for communication                           |
| PeerIP         | IPv4 address of host (client)                                 |
| PeerPort       | Port used by host (client)                                    |
| TimeStamp      | Timestamp in milliseconds (since system startup)              |
| ConnectionID   | Connection UUID (UUID of VTCPSocket used for communication)   |
| SequenceNumber | Unique and sequential operation number in the logging session |


### logweb.txt

The [web log recording file](webServerConfig.md#log-recording) can be enabled using the [`web server` object](webServerObject.md), the `WEB SET OPTION` command, or the **Web/Log (type)** page of the settings. You need to select the log format.

#### CLF/DLF

Each line of the file represents a request, such as: *host rfc931 user \[DD/MMM/YYYY:HH:MM:SS] "request" state length* Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

DLF (Combined Log Format) format is similar to CLF (Common Log Format) format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent. Here is the description of CLF/DLF formats (not customizable):

| Field name           | 説明                                                                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host                 | IP address of the client (ex. 192.100.100.10)                                                                                                                       |
| rfc931               | information not generated by 4D, it’s always - (a minus sign                                                                                                        |
| user                 | user name as it is authenticated, or else it is - (a minus sign). If the user name contains spaces, they will be replaced by _ (an underscore).                     |
| DD/MMM/YYYY:HH:MM:SS | DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds. The date and time are local to the server. |
| request              | request sent by the client (ex. GET /index.htm HTTP/1.0                                                                                                             |
| state                | reply given by the server                                                                                                                                           |
| length               | size of the data returned (except the HTTP header) or 0                                                                                                             |
| Referer              | DLF only- Contains the URL of the page pointing to the requested document.                                                                                          |
| User-agent           | DLF only- Contains the name and version of the browser or software of the client at the origin of the request                                                       |

#### ELF/WLF

The ELF (Extended Log Format) format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

The WLF (WebStar Log Format) was developed specifically for the 4D WebSTAR server.

##### Configuring the fields

When you choose the ELF or WLF format, the “Web Log Token Selection” area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, check the desired fields.
> You cannot select the same field twice.

The following table lists the fields available for each format (in alphabetical order) and describes its contents:

| フィールド          | ELF | WLF | 値                                      |
| -------------- | --- | --- | -------------------------------------- |
| BYTES_RECEIVED |     | ○   | Number of bytes received by the server |
 BYTES_SENT| X|  X|  Number of bytes sent by the server to the client| C_DNS|  X|  X   |IP address of the DNS (ELF: field identical to the C_IP field)| C_IP|   X|  X|  IP address of the client (for example 192.100.100.10)| CONNECTION_ID|      |X| Connection ID number| CS(COOKIE)| X|  X|  Information about cookies contained in the HTTP request| CS(HOST)|   X|  X|  Host field of the HTTP request| CS(REFERER)|    X|  X|  URL of the page pointing to the requested document| CS(USER_AGENT)| X|  X|  Information about the software and operating system of the client| CS_SIP| X|  X|  IP address of the server| CS_URI| X|  X|  URI on which the request is made| CS_URI_QUERY|   X|  X|  Request query parameters| CS_URI_STEM|    X|  X|  Part of request without query parameters| DATE|   X|  X|  DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year| METHOD| X|  X|  HTTP method used for the request sent to the server| PATH_ARGS|  |   X|  CGI parameters: string located after the “$” character| STATUS| X|  X|  Reply provided by the server| TIME|   X|  X|  HH: hour, MM: minutes, SS: seconds| TRANSFER_TIME|  X|  X|  Time requested by server to generate the reply| USER|   X|  X|  User name if authenticated; otherwise - (minus sign).<p>If the user name contains spaces, they are replaced by _ (underlines)| URL |   |X| URL requested by the client|
> Dates and times are given in GMT.


#### Backup Frequency

Since a *logweb.txt* file can become considerably large, it is possible to set up an automatic archiving mechanism. The triggering of a backup can be based on a certain period of time (expressed in hours, days, week or months), or based on the file size; when the set deadline (or file size) is reached, 4D automatically closes and archives the current log file and creates a new one.

When the web log file backup is triggered, the log file is archived in a folder named "Logweb Archives," which is created at the same level as the *logweb.txt* file.

The archived file is renamed based on the following example: “DYYYY_MM_DD_Thh_mm_ss.txt.” For instance, for a file archived on September 4, 2020 at 3:50 p.m. and 7 seconds: “D2020_09_04_T15_50_07.txt.”

#### Backup Parameters

The automatic backup parameters for the logweb.txt are set on the **Web/Log (backup)** page of the Settings:

![](assets/en/WebServer/backup.png)

First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. You must then specify the precise moment of the backup if necessary.

*   **No Backup**: The scheduled backup function is deactivated.

*   **Every X hour(s)**: This option is used to program backups on an hourly basis. You can enter a value between 1 and 24 .
    *   **starting at**: Used to set the time at which the first back up will begin.

*   **Every X day(s) at X**: This option is used to program backups on a daily basis. Enter 1 if you want to perform a daily backup. When this option is checked, you must indicate the time when the backup must be started.

*   **Every X week(s), day at X**: This option is used to program backups on a weekly basis. たとえば、毎週バックアップをおこなうには 1 と設定します。 When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired. For example, you can use this option to set two weekly backups: one on Wednesdays and one on Fridays.

*   **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. たとえば、毎月バックアップをおこなうには 1 と設定します。 When this option is checked, you must indicate the day of the month and the time when the backup must be started.

*   **Every X MB**: This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. You can set a size limit of 1, 10, 100 or 1000 MB.
