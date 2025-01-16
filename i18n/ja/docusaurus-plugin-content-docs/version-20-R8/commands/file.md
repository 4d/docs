---
id: file
title: File
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース  | 内容                            |
| ----- | ----------------------------- |
| 19 R4 | 新しい `HTTP Client log file` 定数 |
| 17 R5 | 追加                            |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->

| 引数           | 型                       |     | 説明                                                                |
| ------------ | ----------------------- | :-: | ----------------------------------------------------------------- |
| path         | Text                    |  →  | ファイルパス                                                            |
| fileConstant | Integer                 |  →  | 4Dファイル定数                                                          |
| pathType     | Integer                 |  →  | `fk posix path` (デフォルト) または `fk platform path` |
| \*           | operator                |  →  | ホストデータベースのファイルを返すには \* を渡します                                      |
| 戻り値          | 4D.File |  ←  | 新規ファイルオブジェクト                                                      |

<!-- END REF -->

#### 説明

`File` コマンドは、<!-- REF #_command_.File.Summary -->`4D.File` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 このコマンドは 2種類のシンタックスを受け入れます。

**File ( path { ; pathType } { ; \* })**

*path* には、ファイルパス文字列を渡します。 カスタムの文字列または [ファイルシステム](../Concepts/paths.md#ファイルシステムパス名) (例: "/DATA/myfile.txt") を渡すことができます。

> `File` コマンドでは絶対パス名のみがサポートされます。

デフォルトで、4D は POSIXシンタックスで表現されたパスを期待します。 プラットフォームパス名 (Windows または macOS) を使用する場合、*pathType* 引数を使用してそのことを宣言する必要があります。 以下の定数を使用することができます:

| 定数               | 値 | 説明                                                                |
| ---------------- | - | ----------------------------------------------------------------- |
| fk platform path | 1 | プラットフォーム特有のシンタックスで表現されたパス (プラットフォームパス名の場合には必須) |
| fk posix path    | 0 | POSIXシンタックスで表現されたパス (デフォルト)                    |

**File ( fileConstant { ; \* } )**

*fileConstant* には、以下の定数のどれか一つを指定して 4Dビルトインの、またはシステムファイルを渡します:

| 定数                                | 値  | 説明                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19 | バックアップ履歴ファイル。 バックアップ保存先フォルダに保存されています。                                                                                                                                                                                                                                                                                                                 |
| Backup log file                   | 13 | カレントのバックアップのログファイル。 アプリケーションの Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                                                    |
| Backup settings file              | 1  | プロジェクトの Settings フォルダーにある、デフォルトの backup.4DSettings ファイル (xml 形式)                                                                                                                                                                                                                                                   |
| Backup settings file for data     | 17 | データフォルダーの Settings フォルダーにある、データファイル用の backup.4DSettings ファイル (xml 形式)                                                                                                                                                                                                                                              |
| Build application log file        | 14 | アプリケーションビルダーのカレントログファイル (xml 形式)。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                             |
| Build application settings file   | 20 | アプリケーションビルダーのデフォルト設定ファイル ("buildApp.4DSettings")。 プロジェクトの Settings フォルダーに保存されています。                                                                                                                                                                                                                                 |
| Compacting log file               | 6  | Compact data file コマンドによって、あるいはメンテナンス&セキュリティセンター (MSC) によって作成された、直近の圧縮のログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                            |
| Current backup settings file      | 18 | アプリケーションが現在使用している backup.4DSettings ファイル。 使用されるのはデフォルトのバックアップ設定ファイル、または、データファイル用のユーザーバックアップ設定ファイルです。                                                                                                                                                                                                                                  |
| Debug log file                    | 12 | `SET DATABASE PARAMETER(Debug log recording)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                               |
| Diagnostic log file               | 11 | `SET DATABASE PARAMETER(Diagnostic log recording)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                          |
| Directory file                    | 16 | プロジェクトアプリケーションにおいて、ユーザーとグループ (あれば) の定義が格納された directory.json ファイル。 このファイルは、データベースの user settings フォルダー (デフォルト、プロジェクトに対してグローバル)、または data settings フォルダー (データファイル専用) に保管されます。                                                                                                   |
| HTTP Client log file              | 24 | `HTTP SET OPTION(HTTP client log)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                          |
| HTTP debug log file               | 9  | `WEB SET OPTION(Web debug log)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                             |
| HTTP log file                     | 8  | `WEB SET OPTION(Web log recording)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                         |
| IMAP Log file                     | 23 | `SET DATABASE PARAMETER(IMAP Log)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                          |
| Last backup file                  | 2  | 任意の場所に格納されている、最終バックアップファイル (名称は: `\<applicationName>[bkpNum].4BK`)                                                                                                                                                                                                                                                |
| Last journal integration log file | 22 | 最後のログ統合ログファイル (あれば) の完全なパス名 (復元されたアプリケーションの Logs フォルダー内に保存されます)。 このファイルは、自動修復モードにおいてログファイル統合が発生した時点で作成されます。                                                                                                                                                                                                     |
| Repair log file                   | 7  | メンテナンス&セキュリティセンター (MSC) 内からデータベースに対しておこなわれたデータベース修復のログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                               |
| Request log file                  | 10 | `SET DATABASE PARAMETER(4D Server log recording)` あるいは `SET DATABASE PARAMETER(Client log recording)` コマンドによって作成された標準のクライアント/サーバーログファイル (Webリクエストは除外)。 サーバー上で実行された場合には、サーバーログが返されます (ログファイルはサーバー上の Logsフォルダーに保存されています)。 クライアントで実行された場合には、クライアントのログが返されます (ログファイルはクライアントのLogsフォルダーに保存されています)。 |
| SMTP log file                     | 15 | `SET DATABASE PARAMETER(SMTP Log)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                                                          |
| User settings file                | 3  | 設定が有効化されている場合、ストラクチャーファイルと同じ階層にある Preferences フォルダーに格納された、全データファイルの settings.4DSettings ファイル。                                                                                                                                                                                                                                         |
| User settings file for data       | 4  | データファイルと同じ階層にある Preferences フォルダーに格納された、カレントデータファイルの settings.4DSettings ファイル。                                                                                                                                                                                                                                                        |
| Verification log file             | 5  | `VERIFY CURRENT DATA FILE` および `VERIFY DATA FILE` コマンドによって、あるいはメンテナンス&セキュリティセンター (MSC) によって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                   |

*fileConstant* 引数で指定したファイルが存在しない場合、null オブジェクトが返されます。 エラーは生成されません。

コマンドがコンポーネントから呼び出されている場合、`*` 引数を渡してホストデータベースのパスを取得するようにします。 `*` 引数を省略すると、常に null オブジェクトが返されます。

#### 参照

[Folder](folder.md)\
[Get 4D file](../commands-legacy/get-4d-file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1566                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
