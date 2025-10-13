---
id: data-collect
title: データ収集
---

4D製品を改善し続けるために、実行中の 4D Server アプリケーションの使用状況データを自動的に収集します。 収集されるデータは完全に匿名で、データ収集がユーザーエクスペリエンスに影響を与えることはありません。

このページは以下を説明します:

- どのような情報が収集されるか
- どこに情報が保存され、いつ 4Dに送信されるか
- ビルドされたクライアント/サーバーアプリケーションで自動データ収集を無効にする方法。

## 収集される情報

以下のイベント中にデータが収集されます:

- データベースが開かれる
- データベースが閉じられる
- Webサーバーが起動される
- 特定の機能(php、open datastore、リモートデバッガーなど)を使用する
- クライアントが接続される
- 収集データが送信される

また、一部のデータは一定時間ごとに収集されます。

| データ                                                         | 型                                 | 注記                                                                                                          |
| ----------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| buildNumber                                                 | Number                            | 4Dアプリケーションのビルド番号                                                                                            |
| cacheMissBytes                                              | Object                            | キャッシュミスバイト数                                                                                                 |
| cacheMissCount                                              | Object                            | キャッシュミス回数                                                                                                   |
| cacheReadBytes                                              | Object                            | キャッシュから読み出したバイト数                                                                                            |
| cacheReadCount                                              | Object                            | キャッシュの読み出し回数                                                                                                |
| cacheSize                                                   | Number                            | キャッシュのサイズ (バイト単位)                                                                        |
| compiled                                                    | Boolean                           | アプリケーションがコンパイル済みの場合は true                                                                                   |
| connectionSystems                                           | Collection                        | ビルド番号 (括弧内) なしのクライアントOSと、それを使用しているクライアント数                                                |
| CPU                                                         | Text                              | プロセッサーの名前、種類、および速度                                                                                          |
| dataFileSize                                                | Number                            | データファイルのサイズ (バイト単位)                                                                      |
| dataSegment1.diskReadBytes                  | Object                            | データファイルから読み取ったバイト数                                                                                          |
| dataSegment1.diskReadCount                  | Object                            | データファイルからの読み取り回数                                                                                            |
| dataSegment1.diskWriteBytes                 | Object                            | データファイルに書き込んだバイト数                                                                                           |
| dataSegment1.diskWriteCount                 | Object                            | データファイルへの書き込み回数                                                                                             |
| databases.externalDatastoreOpened           | Number                            | `Open datastore` への呼び出し回数                                                                                   |
| databases.internalDatastoreOpened           | Number                            | 外部サーバーによってデータストアが開かれた回数                                                                                     |
| databases.remoteDebugger4DRemoteAttachments | Number                            | リモート4D から有効化されているリモートデバッガの数                                                                                 |
| databases.remoteDebuggerQodlyAttachments    | Number                            | Qodly から有効化されているリモートデバッガの数                                                                                  |
| databases.remoteDebuggerVSCodeAttachments   | Number                            | VS Code から有効化されているリモートデバッガの数                                                                                |
| databases.restMaxLicensedSessions           | Number                            | webServer ライセンスを使用するREST Web セッションの最大数                                                                      |
| databases.restMaxUnlicensedSessions         | Number                            | サーバー上のその他のREST Web セッションの最大数                                                                                |
| databases.webIPAddressesNumber              | Number                            | 4D Server へのリクエストを行った異なるIP アドレスの数                                                                           |
| databases.webMaxLicensedSessions            | Number                            | webServer ライセンスを使用する非REST Web セッションの最大数                                                                     |
| databases.webMaxUnlicensedSessions          | Number                            | サーバー上のその他の非REST Web セッションの最大数                                                                               |
| databases.webScalableSessions               | Boolean                           | スケーラブルセッションが有効化されている場合にはTrue                                                                                |
| encrypted                                                   | Boolean                           | データファイルが暗号化されていれば true                                                                                      |
| encryptedConnections                                        | Boolean                           | クライアント/サーバー接続が暗号化されている場合は True                                                                              |
| externalPHP                                                 | Boolean                           | クライアントが `PHP execute` を呼び出して、独自のバージョンの php を使用した場合は True。                                                   |
| hasDataChangeTracking                                       | Boolean                           | "__DeletedRecords" テーブルが存在する場合にはTrue                              |
| headless                                                    | Boolean                           | アプリケーションがヘッドレスモードで実行されている場合は true                                                                           |
| id                                                          | Text (ハッシュ文字列) | データベースに関連付けられた一意の id (*データベース名の多項式ローリングハッシュ*)                                            |
| indexSegment.diskReadBytes                  | Number                            | インデックスファイルから読み取ったバイト数                                                                                       |
| indexSegment.diskReadCount                  | Number                            | インデックスファイルからの読み取り回数                                                                                         |
| indexSegment.diskWriteBytes                 | Number                            | インデックスファイルに書き込んだバイト数                                                                                        |
| indexSegment.diskWriteCount                 | Number                            | インデックスファイルへの書き込み回数                                                                                          |
| indexesSize                                                 | Number                            | インデックスのサイズ (バイト単位)                                                                       |
| isEngined                                                   | Boolean                           | アプリケーションに 4D Volume Desltop が組み込まれている場合は true                                                               |
| isRosetta                                                   | Boolean                           | macOS の Rosetta で 4D がエミュレートされている場合は True、そうでない場合は False (エミュレートされていない、または Windows の場合)。 |
| LDAPLogin                                                   | Number                            | `LDAP LOGIN` の呼び出し回数                                                                                        |
| license                                                     | Object                            | 製品ライセンスの名称と説明                                                                                               |
| maximum4DClientConnections                                  | Number                            | サーバーへのクライアントの最大接続数                                                                                          |
| maximumNumberOfWebProcesses                                 | Number                            | 最大同時Webプロセス数                                                                                                |
| maximumUsedPhysicalMemory                                   | Number                            | 最大使用した物理メモリ                                                                                                 |
| maximumUsedVirtualMemory                                    | Number                            | 最大使用した仮想メモリ                                                                                                 |
| memory                                                      | Number                            | マシン上で利用可能なメモリ容量 (バイト単位)                                                                  |
| mobile                                                      | Collection                        | モバイルセッションに関する情報                                                                                             |
| numberOfCores                                               | Number                            | コアの合計数                                                                                                      |
| numberOfFields                                              | Number                            | フィールドの数                                                                                                     |
| numberOfKeepRecordSyncInfo                                  | Number                            | "複製を許可"オプションがチェックされているテーブルの数                                                                                |
| numberOfRecordsMax                                          | Number                            | レコードの総数                                                                                                     |
| numberOfTables                                              | Number                            | テーブルの総数                                                                                                     |
| numberOfWebServices                                         | Number                            | Webサービスとして公開されているメソッドの数                                                                                     |
| ODBCLogin                                                   | Number                            | ODBC を使用しての `SQL LOGIN`への呼出回数                                                                               |
| phpCall                                                     | Number                            | `PHP execute` の呼び出し回数                                                                                       |
| projectMode                                                 | Boolean                           | アプリケーションがプロジェクトの場合は true                                                                                    |
| qodly.webforms                              | Number                            | Qodly Webフォームの数                                                                                             |
| QueryBySQL                                                  | Number                            | `QUERY BY SQL` への呼出回数                                                                                       |
| restHits                                                    | Number                            | データ収集中の RESTサーバーのヒット数                                                                                       |
| SQLBeginEndStatement                                        | Number                            | `Begin SQL` / `End SQL` の使用回数                                                                               |
| SQLLoginInternal                                            | Number                            | SQL_INTERNAL を使用しての `SQL LOGIN` の呼出回数                                                  |
| SQLServer                                                   | Number                            | ネットワーク経由のSQL リクエスト数                                                                                         |
| system                                                      | Text                              | OS のバージョンとビルド番号                                                                                             |
| uniqueID                                                    | Text                              | 4D Server の固有ID                                                                                             |
| uptime                                                      | Number                            | ローカル4Dデータベースが開かれてからの経過時間 (秒単位)                                                           |
| usingLegacyNetworkLayer                                     | Boolean                           | アプリケーションサーバーに旧式ネットワークレイヤーが使用されている場合は true                                                                   |
| usingQUICNetworkLayer                                       | Boolean                           | データベースが QUICネットワークレイヤーを使用している場合は True                                                                       |
| version                                                     | Number                            | 4Dアプリケーションのバージョン番号                                                                                          |
| webServer                                                   | Object                            | Webサーバーが起動中、または起動済みの場合は "started":true                                                      |
| webserverBytesIn                                            | Number                            | データ収集中に Webサーバーが受信したバイト数                                                                                    |
| webserverBytesOut                                           | Number                            | データ収集中に Webサーバーが送信したバイト数                                                                                    |
| webserverHits                                               | Number                            | データ収集中の Webサーバーのヒット数                                                                                        |

## 保存先と送信先

収集されたデータは、4D Server の終了時にデータベース毎にテキストファイル (JSON形式) に書き込まれます。 このファイルは[active 4D folder](../commands-legacy/get-4d-folder.md) 内、つまり以下の場所に保存されます:

- Windows: `Users\[userName]\AppData\Roaming\4D Server`
- macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

週に一度、ファイルはネットワーク経由で自動的に 4D に送信されます。 その後、ファイルは Active 4D Folder から削除されます。

![](../assets/en/Admin/data-collect.png)

> 何らかの理由でファイルを送信できなかった場合でも、ファイルは削除され、4D Server にエラーメッセージは表示されません。

このファイルは、次のサーバーアドレスに送信されます: `https://dcollector.4d.com` (ip: 195.68.52.83)。

## ビルドされたクライアント/サーバーアプリケーションで自動データ収集を無効にする

[ビルドされたクライアント/サーバーのアプリケーション](../Desktop/building.md#クライアントサーバーページ) で、自動データ収集を無効にすることができます。

データ収集を無効にするには、クライアント/サーバーアプリケーションのビルドに使用する `buildApp.4DSettings` ファイル内の [`ServerDataCollection`](https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.ja.html) キーに値 **False** を渡します。