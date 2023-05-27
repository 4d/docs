---
id: data-collect
title: データ収集
---

4D製品を改善し続けるために、実行中の 4D Server アプリケーションの使用状況データを自動的に収集します。 収集されるデータは完全に匿名で、データ収集がユーザーエクスペリエンスに影響を与えることはありません。

このページは以下を説明します:

- what information is collected,
- where information is stored and when it is sent to 4D,
- ビルドされたクライアント/サーバーアプリケーションで自動データ収集を無効にする方法。


## 収集される情報

以下のイベント中にデータが収集されます:

- database startup,
- データベースが閉じられる
- web server startup,
- php execution,
- client connection,
- data collection sending.

Some data is also collected at regular intervals.

### Collected at database startup

| データ                     | タイプ                  | 注記                                                                                             |
| ----------------------- | -------------------- | ---------------------------------------------------------------------------------------------- |
| CPU                     | Text                 | プロセッサーの名前、種類、および速度                                                                             |
| numberOfCores           | Number               | コアの合計数                                                                                         |
| memory                  | Number               | マシン上で利用可能なメモリ容量 (バイト単位)                                                                        |
| system                  | Text                 | OS のバージョンとビルド番号                                                                                |
| headless                | Boolean              | アプリケーションがヘッドレスモードで実行されている場合は true                                                              |
| version                 | Number               | 4Dアプリケーションのバージョン番号                                                                             |
| buildNumber             | Number               | 4Dアプリケーションのビルド番号                                                                               |
| license                 | Object               | 製品ライセンスの名称と説明                                                                                  |
| isRosetta               | Boolean              | True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows). |
| uniqueID                | Text                 | Unique ID of the 4D Server                                                                     |
| id                      | Text (hashed string) | データベースに関連付けられた一意の id (*データベース名の多項式ローリングハッシュ*)                                                  |
| dataFileSize            | Number               | データファイルのサイズ (バイト単位)                                                                            |
| indexesSize             | Number               | インデックスのサイズ (バイト単位)                                                                             |
| cacheSize               | Number               | キャッシュのサイズ (バイト単位)                                                                              |
| usingLegacyNetworkLayer | Boolean              | アプリケーションサーバーに旧式ネットワークレイヤーが使用されている場合は true                                                      |
| usingQUICNetworkLayer   | Boolean              | True if the database uses the QUIC network layer                                               |
| encryptedConnections    | Boolean              | True if client/server connections are encrypted                                                |
| encrypted               | Boolean              | データファイルが暗号化されていれば true                                                                         |
| compiled                | Boolean              | アプリケーションがコンパイル済みの場合は true                                                                      |
| isEngined               | Boolean              | アプリケーションに 4D Volume Desltop が組み込まれている場合は true                                                  |
| projectMode             | Boolean              | アプリケーションがプロジェクトの場合は true                                                                       |
| mobile                  | Collection           | モバイルセッションに関する情報                                                                                |


### Collected at web server startup and data collection sending

| データ       | タイプ    | 注記                                                      |
| --------- | ------ | ------------------------------------------------------- |
| webServer | Object | "started":true if the web server is starting or started |


### Collected at regular intervals

| データ                         | タイプ    | 注記                                           |
| --------------------------- | ------ | -------------------------------------------- |
| maximumNumberOfWebProcesses | Number | Maximum number of simultaneous web processes |
| maximumUsedPhysicalMemory   | Number | Maximum use of physical memory               |
| maximumUsedVirtualMemory    | Number | Maximum use of virtual memory                |


### Collected at data collection sending

| データ                         | タイプ    | 注記                                        |
| --------------------------- | ------ | ----------------------------------------- |
| uptime                      | Number | ローカル4Dデータベースが開かれてからの経過時間 (秒単位)            |
| cacheReadBytes              | Object | Number of bytes read from cache           |
| cacheMissBytes              | Object | Number of bytes missed from cache         |
| cacheReadCount              | Object | Number of reads in the cache              |
| cacheMissCount              | Object | Number of reads missed in the cache       |
| dataSegment1.diskReadBytes  | Object | Number of bytes read in the data file     |
| dataSegment1.diskWriteBytes | Object | Number of bytes written in the data file  |
| dataSegment1.diskReadCount  | Object | Number of reads in the data file          |
| dataSegment1.diskWriteCount | Object | Number of writes in the data file         |
| indexSegment.diskReadBytes  | Number | Number of bytes read in the index file    |
| indexSegment.diskWriteBytes | Number | Number of bytes written in the index file |
| indexSegment.diskReadCount  | Number | Number of reads in the index file         |
| indexSegment.diskWriteCount | Number | Number of writes in the index file        |



### Collected at database closure and data collection sending

| データ               | タイプ    | 注記                                                           |
| ----------------- | ------ | ------------------------------------------------------------ |
| webserverHits     | Number | Number of hits on the web server during the data collection  |
| restHits          | Number | Number of hits on the REST server during the data collection |
| webserverBytesIn  | Number | Bytes received by the web server during the data collection  |
| webserverBytesOut | Number | Bytes sent by the web server during the data collection      |




### Collected every time PHP execute is called

| データ         | タイプ     | 注記                                                                                  |
| ----------- | ------- | ----------------------------------------------------------------------------------- |
| phpCall     | Number  | Number of calls to `PHP execute`                                                    |
| externalPHP | Boolean | True if the client performs a call to `PHP execute` and uses its own version of php |


### Collected at client connection

| データ                        | タイプ        | 注記                                                                                 |
| -------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| maximum4DClientConnections | Number     | Maximum number of 4D Client connections to the server                              |
| connectionSystems          | Collection | Client OS without the build number (in parenthesis) and number of clients using it |



## 保存先と送信先

Collected data is written in a text file (JSON format) per database when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv20/help/command/en/page485.html), i.e.:

- Windows: `Users\[userName]\AppData\Roaming\4D Server`
- macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

週に一度、ファイルはネットワーク経由で自動的に 4D に送信されます。 その後、ファイルは Active 4D Folder から削除されます。

![](../assets/en/Admin/data-collect.png)

> 何らかの理由でファイルを送信できなかった場合でも、ファイルは削除され、4D Server にエラーメッセージは表示されません。

このファイルは、次のサーバーアドレスに送信されます: `https://dcollector.4d.com` (ip: 195.68.52.83)。


## ビルドされたクライアント/サーバーアプリケーションで自動データ収集を無効にする

[ビルドされたクライアント/サーバーのアプリケーション](../Desktop/building.md#クライアントサーバーページ) で、自動データ収集を無効にすることができます。

データ収集を無効にするには、クライアント/サーバーアプリケーションのビルドに使用する `buildApp.4DSettings` ファイル内の [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.ja.html) キーに値 **False** を渡します。