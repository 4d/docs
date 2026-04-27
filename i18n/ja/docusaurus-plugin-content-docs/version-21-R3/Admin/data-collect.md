---
id: data-collect
title: データ収集
---

4D製品を改善し続けるために、実行中の 4D Server アプリケーションの使用状況データを自動的に収集します。 収集されたデータは、ユーザーエクスペリエンスに影響を与えない形で送信されます。 個人データは収集されません。 個人データ保護に関する4D ポリシーの詳細については、[こちらのページ](https://us.4d.com/privacy-policy)を参照してください。

以下の章では次のようなことを説明しています:

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

| データ                                                                                                               | 型                                 | 注記                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| appServer                                                                                                         | Object                            | アプリケーションサーバー情報に関する情報を格納したオブジェクト                                                                             |
| appServer.hits                                                                                    | Number                            | 内部プロセスからのリクエスト数                                                                                             |
| appServer.bytesIn                                                                                 | Number                            | 内部プロセスから受信したバイト数                                                                                            |
| appServer.bytesOut                                                                                | Number                            | 内部プロセスから送信されたバイト数                                                                                           |
| appServer.executionTime                                                                           | Number                            | 内部プロセスのCPU実行時間                                                                                              |
| cacheMissBytes                                                                                                    | Object                            | キャッシュミスバイト数                                                                                                 |
| cacheMissCount                                                                                                    | Object                            | キャッシュミス回数                                                                                                   |
| cacheReadBytes                                                                                                    | Object                            | キャッシュから読み出したバイト数                                                                                            |
| cacheReadCount                                                                                                    | Object                            | キャッシュの読み出し回数                                                                                                |
| classUsage                                                                                                        | Object                            | 特定の言語クラスのインスタンス数                                                                                            |
| connectionSystems                                                                                                 | Collection                        | ビルド番号 (括弧内) なしのクライアントOSと、それを使用しているクライアント数                                                |
| databases[].cacheSize                         | Number                            | キャッシュのサイズ (バイト単位)                                                                        |
| databases[].externalDatastoreOpened           | Number                            | `Open datastore` への呼び出し回数                                                                                   |
| databases[].id                                | Number                            | データベースID                                                                                                    |
| databases[].internalDatastoreOpened           | Number                            | 外部サーバーによってデータストアが開かれた回数                                                                                     |
| databases[].maxConcurrent4DClients            | Number                            | 回収期間の中での、(4D クライアントライセンスを使用した)同時4Dクライアントセッションの最大数                                        |
| databases[].maxConcurrentRestSessions         | Number                            | 回収期間の中での同時REST セッション最大数                                                                                     |
| databases[].maxConcurrentWebSessions          | Number                            | 回収期間の中での同時Web セッション(4DACTIPN およびSOAP)の最大数                                                |
| databases[].maximum4DClientConnections        | Number                            | サーバーへのクライアントの最大接続数                                                                                          |
| databases[].numberOfDistinctClients           | Number                            | 回収期間の中で見られた永続的なクライアントUUID の固有数                                                                              |
| databases[].numberOfFields                    | Number                            | フィールドの数                                                                                                     |
| databases[].numberOfKeepRecordSyncInfo        | Number                            | "複製を許可"オプションがチェックされているテーブルの数                                                                                |
| databases[].numberOfRecordsMax                | Number                            | レコードの総数                                                                                                     |
| databases[].numberOfTables                    | Number                            | テーブルの総数                                                                                                     |
| databases[].qodly.webforms    | Number                            | Qodly Webフォームの数                                                                                             |
| databases[].remoteDebugger4DRemoteAttachments | Number                            | リモート4D から有効化されているリモートデバッガの数                                                                                 |
| databases[].remoteDebuggerQodlyAttachments    | Number                            | Qodly から有効化されているリモートデバッガの数                                                                                  |
| databases[].remoteDebuggerVSCodeAttachments   | Number                            | VS Code から有効化されているリモートデバッガの数                                                                                |
| databases[].structureHash                     | Text                              |                                                                                                             |
| databases[].uniqueID                          | Text (ハッシュ文字列) | データベースに関連付けられた一意の id (*データベース名の多項式ローリングハッシュ*)                                            |
| databases[].uptime                            | Number                            | 二つの回収イベント間での経過時間(秒単位)                                                                    |
| databases[].uuid                              | Text                              | データベース UUID                                                                                                 |
| databases[].webIPAddressesNumber              | Number                            | 4D Server へのリクエストを行った異なるIP アドレスの数                                                                           |
| databases[].webMaxScalableSessions            | Number                            | Maximum number of scalable sessions on the server                                                           |
| databases[].webScalableSessions               | Boolean                           | スケーラブルセッションが有効化されている場合にはTrue                                                                                |
| dataSegment1.diskReadBytes                                                                        | Object                            | データファイルから読み取ったバイト数                                                                                          |
| dataSegment1.diskReadCount                                                                        | Object                            | データファイルからの読み取り回数                                                                                            |
| dataSegment1.diskWriteBytes                                                                       | Object                            | データファイルに書き込んだバイト数                                                                                           |
| dataSegment1.diskWriteCount                                                                       | Object                            | データファイルへの書き込み回数                                                                                             |
| dataSize                                                                                                          | Number                            | データファイルのサイズ (バイト単位)                                                                      |
| dbServer                                                                                                          | Object                            | Object containing DB4D server information                                                                   |
| dbServer.hits                                                                                     | Number                            | 内部プロセスからのリクエスト数                                                                                             |
| dbServer.bytesIn                                                                                  | Number                            | 内部プロセスから受信したバイト数                                                                                            |
| dbServer.bytesOut                                                                                 | Number                            | 内部プロセスから送信されたバイト数                                                                                           |
| dbServer.executionTime                                                                            | Number                            | 内部プロセスのCPU実行時間                                                                                              |
| encryptedConnections                                                                                              | Boolean                           | クライアント/サーバー接続が暗号化されている場合は True                                                                              |
| externalPHP                                                                                                       | Boolean                           | クライアントが `PHP execute` を呼び出して、独自のバージョンの php を使用した場合は True。                                                   |
| general.buildNumber                                                                               | Number                            | 4Dアプリケーションのビルド番号                                                                                            |
| general.headless                                                                                  | Boolean                           | アプリケーションがヘッドレスモードで実行されている場合は true                                                                           |
| general.isRosetta                                                                                 | Boolean                           | macOS の Rosetta で 4D がエミュレートされている場合は True、そうでない場合は False (エミュレートされていない、または Windows の場合)。 |
| general.license                                                                                   | Object                            | 製品ライセンスの名称と説明                                                                                               |
| general.uniqueID                                                                                  | Text                              | 4D Server の固有ID                                                                                             |
| general.version                                                                                   | Text                              | 4Dアプリケーションのバージョン番号                                                                                          |
| hasDataChangeTracking                                                                                             | Boolean                           | "__DeletedRecords" テーブルが存在する場合にはTrue                              |
| indexSegment.diskReadBytes                                                                        | Number                            | インデックスファイルから読み取ったバイト数                                                                                       |
| indexSegment.diskReadCount                                                                        | Number                            | インデックスファイルからの読み取り回数                                                                                         |
| indexSegment.diskWriteBytes                                                                       | Number                            | インデックスファイルに書き込んだバイト数                                                                                        |
| indexSegment.diskWriteCount                                                                       | Number                            | インデックスファイルへの書き込み回数                                                                                          |
| indexSize                                                                                                         | Number                            | インデックスのサイズ (バイト単位)                                                                       |
| isCompiled                                                                                                        | Boolean                           | アプリケーションがコンパイル済みの場合は true                                                                                   |
| isEncrypted                                                                                                       | Boolean                           | データファイルが暗号化されていれば true                                                                                      |
| isEngined                                                                                                         | Boolean                           | アプリケーションに 4D Volume Desltop が組み込まれている場合は true                                                               |
| isProjectMode                                                                                                     | Boolean                           | アプリケーションがプロジェクトの場合は true                                                                                    |
| LDAPLogin                                                                                                         | Number                            | `LDAP LOGIN` の呼び出し回数                                                                                        |
| license.sffPrimaryKey                                                                             | Number                            | Server master product number                                                                                |
| machine.CPU                                                                                       | Text                              | プロセッサーの名前、種類、および速度                                                                                          |
| machine.memory                                                                                    | Number                            | マシン上で利用可能なメモリ容量 (バイト単位)                                                                  |
| machine.numberOfCores                                                                             | Number                            | コアの合計数                                                                                                      |
| machine.system                                                                                    | Text                              | OS のバージョンとビルド番号                                                                                             |
| maximumNumberOfWebProcesses                                                                                       | Number                            | 最大同時Webプロセス数                                                                                                |
| maximumUsedPhysicalMemory                                                                                         | Number                            | 最大使用した物理メモリ                                                                                                 |
| maximumUsedVirtualMemory                                                                                          | Number                            | 最大使用した仮想メモリ                                                                                                 |
| mobile                                                                                                            | Collection                        | モバイルセッションに関する情報                                                                                             |
| numberOfWebServices                                                                                               | Number                            | Webサービスとして公開されているメソッドの数                                                                                     |
| ODBCLogin                                                                                                         | Number                            | ODBC を使用しての `SQL LOGIN`への呼出回数                                                                               |
| phpCall                                                                                                           | Number                            | `PHP execute` の呼び出し回数                                                                                       |
| QueryBySQL                                                                                                        | Number                            | `QUERY BY SQL` への呼出回数                                                                                       |
| restServer                                                                                                        | Object                            | Object containing REST server information                                                                   |
| restServer.bytesIn                                                                                | Number                            | Bytes received by the REST server                                                                           |
| restServer.bytesOut                                                                               | Number                            | Bytes sent by the REST server                                                                               |
| restServer.hits                                                                                   | Number                            | Number of hits on the REST server                                                                           |
| restServer.executionTime                                                                          | Number                            | CPU execution time for  the REST WEB server                                                                 |
| soapServer                                                                                                        | Object                            | Object containing SOAP server information                                                                   |
| soapServer.bytesIn                                                                                | Number                            | Bytes received by the SOAP server                                                                           |
| soapServer.bytesOut                                                                               | Number                            | Bytes sent by the SOAP server                                                                               |
| soapServer.hits                                                                                   | Number                            | Number of hits on the SOAP server                                                                           |
| soapServer.executionTime                                                                          | Number                            | CPU execution time for the SOAP server                                                                      |
| SQLBeginEndStatement                                                                                              | Number                            | `Begin SQL` / `End SQL` の使用回数                                                                               |
| SQLLoginInternal                                                                                                  | Number                            | SQL_INTERNAL を使用しての `SQL LOGIN` の呼出回数                                                  |
| sqlServer                                                                                                         | Object                            | Object containing SQL server information                                                                    |
| sqlServer.hits                                                                                    | Number                            | Number of SQL queries executed                                                                              |
| sqlServer.bytesIn                                                                                 | Number                            | Bytes received by the SQL engine                                                                            |
| sqlServer.bytesOut                                                                                | Number                            | Bytes sent by the SQL engine                                                                                |
| sqlServer.executionTime                                                                           | Number                            | CPU execution time for SQL queries                                                                          |
| usingQUICNetworkLayer                                                                                             | Boolean                           | データベースが QUICネットワークレイヤーを使用している場合は True                                                                       |
| totalExecutionTime                                                                                                | Number                            | Total CPU execution time: sum of all request types                                          |
| totalRequests                                                                                                     | Number                            | Total requests: sum of web, REST, SOAP, SQL, and internal traffic                           |
| webServer                                                                                                         | Object                            | Object containing Web server information                                                                    |
| webServer.bytesIn                                                                                 | Number                            | Bytes received by the Web server                                                                            |
| webServer.bytesOut                                                                                | Number                            | Bytes sent by the Web server                                                                                |
| webServer.hits                                                                                    | Number                            | Number of hits on the Web server                                                                            |
| webServer.executionTime                                                                           | Number                            | CPU execution time for the Web server                                                                       |
| webStaticServer                                                                                                   | Object                            | Object containing the static Web server information                                                         |
| webStaticServer.bytesIn                                                                           | Number                            | Bytes received by the static Web server                                                                     |
| webStaticServer.bytesOut                                                                          | Number                            | Bytes sent by the static Web server                                                                         |
| webStaticServer.hits                                                                              | Number                            | Number of hits on the static Web server                                                                     |
| webStaticServer.executionTime                                                                     | Number                            | CPU execution time for the static Web server                                                                |

## 保存先と送信先

収集されたデータは、4D Server の終了時にデータベース毎にテキストファイル (JSON形式) に書き込まれます。 このファイルは[active 4D folder](../commands/get-4d-folder) 内、つまり以下の場所に保存されます:

- Windows: `Users\[userName]\AppData\Roaming\4D Server`
- macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

週に一度、ファイルはネットワーク経由で自動的に 4D に送信されます。 その後、ファイルは Active 4D Folder から削除されます。

![](../assets/en/Admin/data-collect.png)

> 何らかの理由でファイルを送信できなかった場合でも、ファイルは削除され、4D Server にエラーメッセージは表示されません。

このファイルは、次のサーバーアドレスに送信されます: `https://dcollector.4d.com` (ip: 195.68.52.83)。

## ビルドされたクライアント/サーバーアプリケーションで自動データ収集を無効にする

[ビルドされたクライアント/サーバーのアプリケーション](../Desktop/building.md#クライアントサーバーページ) で、自動データ収集を無効にすることができます。

データ収集を無効にするには、クライアント/サーバーアプリケーションのビルドに使用する `buildApp.4DSettings` ファイル内の [`ServerDataCollection`](https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.ja.html) キーに値 **False** を渡します。
