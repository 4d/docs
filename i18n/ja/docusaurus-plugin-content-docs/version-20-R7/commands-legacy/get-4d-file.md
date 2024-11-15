---
id: get-4d-file
title: Get 4D file
slug: /commands/get-4d-file
displayed_sidebar: docs
---

<!--REF #_command_.Get 4D file.Syntax-->**Get 4D file** ( *file* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Get 4D file.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| file | Integer | &#8594;  | ファイルタイプ |
| * | 演算子 | &#8594;  | ホストデータベースのファイルを返す |
| 戻り値 | Text | &#8592; | 指定したファイルのパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get 4D file.Summary-->**Get 4D file**コマンドは、*file* パラメーターで指定された4D環境ファイルへのパス名を返します。<!-- END REF-->パスはシステムシンタックスで返されます。

このコマンドを使用して、データベースのコンテキストに依存する可能性のある、実際のファイル名や保存先を取得できます。このコマンドは 4D のバージョンやOSに限定されない、汎用的なコードを書くのに便利です。

任意のファイルを指定する値として、*file* には *4D Environment* テーマの次のいずれかの定数を渡します:

| 定数                                | 型    | 値  | コメント                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------- | ---- | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 倍長整数 | 19 | バックアップ保存先フォルダに保存されているバックアップ履歴ファイル(*バックアップジャーナル* 参照)。                                                                                                                                                                                                                                                                                          |
| Backup log file                   | 倍長整数 | 13 | カレントのバックアップジャーナルファイル (*バックアップジャーナル* 参照)。データベースのストラクチャーファイルのとなりにあるLogsフォルダーに保存されています。                                                                                                                                                                                                                                                          |
| Backup settings file              | 倍長整数 | 18 | アプリケーションが現在使用している backup.4DSettings ファイル。使用されるのはデフォルトのバックアップ設定ファイル、または、データファイル用のユーザーバックアップ設定ファイルです。                                                                                                                                                                                                                                           |
| Backup settings file for data     | 倍長整数 | 17 | データフォルダーの Settings フォルダーにある、backup.4DSettings ファイル (xml 形式)                                                                                                                                                                                                                                                                                   |
| Build application log file        | 倍長整数 | 14 | データベースの Logs フォルダーに保存されている、アプリケーションビルド設定ファイル (buildApp.4DSettings) のカレントログファイル (xml 形式)。                                                                                                                                                                                                                                                      |
| Build application settings file   | 倍長整数 | 20 | データベースの Settings フォルダーに保存された、アプリケーションビルダーのデフォルト設定ファイル ("buildApp.4DSettings")。                                                                                                                                                                                                                                                                |
| Compacting log file               | 倍長整数 | 6  | [Compact data file](compact-data-file.md) コマンドによって、あるいはメンテナンス&セキュリティセンター(MSC)によって作成された、直近の圧縮のログファイル。データベースのストラクチャーファイルのとなりにあるLogsフォルダーに保存されています。                                                                                                                                                                                              |
| Current backup settings file      | 倍長整数 | 1  | データベースの Settings フォルダーにある、デフォルトの backup.4DSettings ファイル (xml 形式)                                                                                                                                                                                                                                                                              |
| Debug log file                    | 倍長整数 | 12 | [SET DATABASE PARAMETER](set-database-parameter.md)(Debug log recording) コマンドによって作成されたログファイル。データベースのストラクチャーファイルのとなりにあるLogsフォルダーに保存されています。                                                                                                                                                                                                     |
| Diagnostic log file               | 倍長整数 | 11 | [SET DATABASE PARAMETER](set-database-parameter.md)(Diagnostic log recording) コマンドによって作成されたログファイル。データベースのストラクチャーファイルのとなりにあるLogsフォルダーに保存されています。                                                                                                                                                                                                |
| Directory file                    | 倍長整数 | 16 | プロジェクトデータベースにおいて、ユーザーとグループ (あれば) の定義が格納された directory.json ファイル。このファイルは、データベースのユーザー設定フォルダー (デフォルト、プロジェクトに対してグローバル)、またはデータ設定フォルダー (データファイル専用) に保管されます。                                                                                                                                                                                          |
| HTTP Client log file              | 倍長整数 | 24 | [HTTP SET OPTION](http-set-option.md)(HTTP client log;value) コマンドによって作成されたログファイル。Logs フォルダに保存されています。                                                                                                                                                                                                                                          |
| HTTP debug log file               | 倍長整数 | 9  | [WEB SET OPTION](web-set-option.md)(Web debug log) コマンドによって作成されたログファイル。データベースのストラクチャーファイルのとなりにあるLogsフォルダーに保存されています。                                                                                                                                                                                                                           |
| HTTP log file                     | 倍長整数 | 8  | [WEB SET OPTION](web-set-option.md)(Web log recording) コマンドによって作成されたログファイル。データベースのストラクチャーファイルのとなりにあるLogsフォルダーに保存されています。                                                                                                                                                                                                                       |
| IMAP Log file                     | 倍長整数 | 23 | [SET DATABASE PARAMETER](set-database-parameter.md)(IMAP Log) コマンドによって作成されたログファイル。データベースのLogs フォルダに保存されています。                                                                                                                                                                                                                                  |
| Last backup file                  | 倍長整数 | 2  | 任意の場所に格納されている、最終バックアップファイル (名称は: <databaseName>\[bkpNum\].4BK)                                                                                                                                                                                                                                                                                |
| Last journal integration log file | 倍長整数 | 22 | 最後のログ統合ログファイル(あれば)の完全なパス名(復元されたアプリケーションのLogs フォルダ内に保存されます)。このファイルは、自動修復モードにおいてログファイル統合が発生した時点で作成されます(参照)。                                                                                                                                                                                                                                     |
| POP3 Log file                     | 倍長整数 | 21 | [SET DATABASE PARAMETER](set-database-parameter.md)(POP3 Log) コマンドで作成されたログファイル。データベースのLogs フォルダに保存されています。                                                                                                                                                                                                                                     |
| Repair log file                   | 倍長整数 | 7  | メンテナンス&セキュリティセンター(MSC)内からデータベースに対して行われたデータベース修復のログファイル。データベースのストラクチャーファイルのとなりにあるLogsフォルダーに保存されています。                                                                                                                                                                                                                                           |
| Request log file                  | 倍長整数 | 10 | [SET DATABASE PARAMETER](set-database-parameter.md)(4D Server log recording) あるいは [SET DATABASE PARAMETER](set-database-parameter.md)(Client log recording) コマンドによって作成された標準のクライアント/サーバーログファイル(Webリクエストは除かれます)。サーバー上で実行された場合にはサーバーログが返されます(ログファイルはサーバー上のLogsフォルダーに保存されています)。クライアントで実行された場合にはクライアントのログが返されます(ログファイルはクライアントのLogsフォルダーに保存されています)。 |
| SMTP log file                     | 倍長整数 | 15 | [SET DATABASE PARAMETER](set-database-parameter.md)(SMTP Log) コマンドによって作成されたログファイル。データベースのストラクチャーファイルの隣にある Logs フォルダーに保存されます。                                                                                                                                                                                                                  |
| User settings file                | 倍長整数 | 3  | 設定が有効化されている場合、データベースストラクチャーファイルと同じ場所にある Settings フォルダーに格納された、全データファイルの settings.4DSettings ファイル                                                                                                                                                                                                                                               |
| User settings file for data       | 倍長整数 | 4  | データファイルと同じ場所にある Settings フォルダーに格納された、カレントデータファイルの settings.4DSettings ファイル。                                                                                                                                                                                                                                                                   |
| Verification log file             | 倍長整数 | 5  | [VERIFY CURRENT DATA FILE](verify-current-data-file.md) および [VERIFY DATA FILE](verify-data-file.md) コマンドによって、あるいはメンテナンス&セキュリティセンター(MSC)によって作成されたログファイル。データベースのストラクチャーファイルのとなりにあるLogsフォルダーに保存されています。                                                                                                                                           |

コンポーネントからコマンドが呼び出された場合、任意の *\** 引数を渡すとホストデータベースの *file* パスが得られます。この引数を受け渡さない場合には、空の文字列が返されます。

User settings file for data および User settings file の両ファイルに関しては、"データベース設定" ダイアログボックスの**外部ファイルのユーザー設定を有効にする** オプション( 参照)にチェックを入れている場合にのみ、パスが返されます。

#### 例題 

最終バックアップファイルのパスを取得します:

```4d
 var $path : Text
 $path:=Get 4D file(Last backup file)
  // 例: $path = "C:\Backups\Countries\Countries[0025].4BK"
```

#### 参照 

[File](file.md)  