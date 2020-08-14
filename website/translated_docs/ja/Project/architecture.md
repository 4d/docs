---
id: architecture
title: プロジェクトのアーキテクチャー
---

A 4D project is made of several folders and files, stored within a single parent application folder (package folder). たとえば:

- MyProject
    - コンポーネント
    - Data
        - Logs
        - Settings
    - Documentation
    - Plugins
    - Project
        - DerivedData
        - Sources
        - Trash
    - Resources
    - Settings
    - userPreference.username
    - WebFolder

> バイナリデータベースから変換されたプロジェクトの場合には、追加のフォルダーが存在している場合があります  (doc.4d.com にて "[データベースをプロジェクトモードに変換する](https://doc.4d.com/4Dv18/4D/18/Converting-databases-to-projects.300-4606146.ja.html)" 参照)。


## Project フォルダー

典型的な Project フォルダーの構造です:

- *applicationName*.4DProject file
- Sources
    + Classes
    + DatabaseMethods
    + Methods
    + Forms
    + TableForms
    + Triggers
- DerivedData
- Trash (あれば)


### *applicationName*.4DProject file

プロジェクトを定義し、起動するためのプロジェクト開発ファイルです。 このファイルを開くには次のいずれかが必要です:

- 4D
- 4D Server (デザインモードは読み取り専用；[プロジェクトの開発](developing.md) 参照)

> In 4D projects, development is done with 4D and multi-user development is managed through source control tools. 4D Server は .4DProject ファイルを開くことができますが、クライアントからの開発はおこなえません。


### Sources フォルダー

| 内容                      | 説明                                                                                             | 形式   |
| ----------------------- | ---------------------------------------------------------------------------------------------- | ---- |
| catalog.4DCatalog       | テーブルおよびフィールド定義                                                                                 | XML  |
| folders.json            | 　エクスプローラーフォルダー定義                                                                               | JSON |
| menus.json              | メニュー定義                                                                                         | JSON |
| settings.4DSettings     | *ストラクチャー*データベース設定。 *ユーザー設定*が定義されている場合は、そちらの設定が優先されます。 *データファイル用のユーザー設定*が定義されている場合は、その設定が最優先です。 | XML  |
| tips.json               | 定義されたヘルプTips                                                                                   | JSON |
| lists.json              | 定義されたリスト                                                                                       | JSON |
| filters.json            | 定義されたフィルター                                                                                     | JSON |
| styleSheets.css         | CSS スタイルシート                                                                                    | CSS  |
| styleSheets_mac.css     | Mac用 CSS スタイルシート (変換されたバイナリデータベースより)                                                           | CSS  |
| styleSheets_windows.css | Windows用 CSS スタイルシート (変換されたバイナリデータベースより)                                                       | CSS  |


#### DatabaseMethods フォルダー

| 内容                       | 説明                                                                | 形式   |
| ------------------------ | ----------------------------------------------------------------- | ---- |
| *databaseMethodName*.4dm | Database methods defined in the project. (1つのデータベースメソッドにつき1ファイル)。 | text |

#### Methods フォルダー

| 内容               | 説明                                                          | 形式   |
| ---------------- | ----------------------------------------------------------- | ---- |
| *methodName*.4dm | Project methods defined in the project.  (1つのメソッドにつき1ファイル)。 | text |

#### Classes フォルダー

| 内容              | 説明                                                                    | 形式   |
| --------------- | --------------------------------------------------------------------- | ---- |
| *className*.4dm | 特定のオブジェクトをインスタンス化するための、ユーザークラス用の定義メソッド。 1クラスにつき1ファイル。ファイル名がクラス名になります。 | text |


#### Forms フォルダー

| 内容                                        | 説明                                  | 形式    |
| ----------------------------------------- | ----------------------------------- | ----- |
| *formName*/form.4DForm                    | プロジェクトフォームの定義                       | JSON  |
| *formName*/method.4dm                     | プロジェクトフォームメソッド                      | text  |
| *formName*/Images/*pictureName*           | プロジェクトフォームのスタティックピクチャー              | ピクチャー |
| *formName*/ObjectMethods/*objectName*.4dm | オブジェクトメソッド  (1つのオブジェクトメソッドにつき1ファイル) | text  |

#### TableForms フォルダー

| 内容                                                   | 説明                                             | 形式    |
| ---------------------------------------------------- | ---------------------------------------------- | ----- |
| *n*/Input/*formName*/form.4DForm                     | 入力テーブルフォームの定義 (n: テーブル番号)                      | JSON  |
| *n*/Input/*formName*/Images/*pictureName*            | 入力テーブルフォームのスタティックピクチャー                         | ピクチャー |
| *n*/Input/*formName*/method.4dm                      | 入力テーブルフォームのフォームメソッド                            | text  |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | 入力テーブルフォームのオブジェクトメソッド  (1つのオブジェクトメソッドにつき1ファイル) | text  |
| *n*/Output/*formName*/form.4DForm                    | 出力テーブルフォーム (n: テーブル番号)                         | JSON  |
| *n*/Output/*formName*/Images/*pictureName*           | 出力テーブルフォームのスタティックピクチャー                         | ピクチャー |
| *n*/Output/*formName*/method.4dm                     | 出力テーブルフォームのフォームメソッド                            | text  |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | 出力テーブルフォームのオブジェクトメソッド  (1つのオブジェクトメソッドにつき1ファイル) | text  |

#### Triggers フォルダー

| 内容            | 説明                                                                    | 形式   |
| ------------- | --------------------------------------------------------------------- | ---- |
| table_*n*.4dm | Trigger methods defined in the project.  ( 1つのテーブルにつき1ファイル；n: テーブル番号) | text |

**注:** 拡張子 .4dm のファイルは、4D メソッドのコードをテキスト形式で格納しており、 ソース管理ツールに対応しています。


### Trash フォルダー

プロジェクトから削除されたメソッドやフォームがあれば、Trash フォルダーにはそれらが格納されます。 たとえば、つぎのフォルダーが格納されている場合があります:

- Methods
- Forms
- TableForms

削除された要素はファイル名に括弧が付いた形でフォルダー内に置かれます (例: "(myMethod).4dm")。 フォルダーの構成は [Sources](#sources) フォルダーと同じです。


### DerivedData フォルダー

DerivedData フォルダーには、処理を最適化するため 4D が内部的に使用するキャッシュデーターが格納されます。 これらは必要に応じて自動的に生成・再生成されます。 このフォルダーは無視してかまいません。


## Resources フォルダー

The Resources folder contains any custom project resource files and folders. アプリケーションインターフェースの翻訳やカスタマイズに必要なファイルはすべてここに格納します (ピクチャー、テキスト、XLIFF ファイルなど)。 4D は自動のメカニズムによってフォルダー内のファイル (とくに XLIFF ファイルおよびスタティックピクチャー) を扱います。 リモートモードにおいては、サーバーとすべてのクライアントマシン間でファイルを共有することが Resources フォルダーによって可能です  (*4D Server リファレンスマニュアル* の [リソースフォルダの管理](https://doc.4d.com/4Dv18/4D/18/Managing-the-Resources-folder.300-4672420.ja.html) を参照ください)。

| 内容                    | 説明                                                                        | 形式    |
| --------------------- | ------------------------------------------------------------------------- | ----- |
| *item*                | Project resource files and folders                                        | 様々    |
| Images/Library/*item* | ピクチャーライブラリの個別ピクチャーファイル(*)。 各アイテムの名称がファイル名となります。 名称が重複する場合には、名称に番号が追加されます。 | ピクチャー |

(*) .4db バイナリデータベースから変換されたプロジェクトの場合のみ


## Data フォルダー

Data フォルダーには、データファイルのほか、データに関わるするファイルやフォルダーがすべて格納されています。

| 内容           | 説明                                                                                                                                                                                                                                                                                                                                                     | 形式   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| data.4dd(*)  | レコードとして入力されたデータと、レコードに属するデータが格納されたデータファイルです。 4D プロジェクトを開くと、アプリケーションはカレントデータファイルをデフォルトで開きます。 このファイルの場所や名称を変更した場合は、*データファイルを開く* ダイアログボックスが表示され、使用するデータファイルを選択するか、新しいデータファイルを作成できます。                                                                                                                                                                      | バイナリ |
| data.journal | データベースがログファイルを使用する場合のみ作成されます。 ログファイルは2つのバックアップ間のデータ保護を確実なものにするために使用されます。 データに対して実行されたすべての処理が、このファイルに順番に記録されます。 つまりデータに対して操作がおこなわれるたびに、データ上の処理 (操作の実行) とログファイル上の処理 (操作の記録) という 2つの処理が同時に発生します。 ログファイルはユーザーの処理を妨げたり遅くしたりすることなく、独立して構築されます。 データベースは 1つのログファイルしか同時に使用できません。 ログファイルにはレコードの追加・更新・削除やトランザクションなどの処理が記録されます。 ログファイルはデータベースが作成される際にデフォルトで生成されます。 | バイナリ |
| data.match   | (内部用) テーブル番号に対応する UUID                                                                                                                                                                                                                                                                                                                                 | XML  |

(*) .4db バイナリデータベースからプロジェクトに変換した場合、データファイルは変換による影響を受けません。 このデータファイルの名称を変更して移動させることができます。

### Settings フォルダー

This folder contains **user settings files for data** used for application administration.

> この設定は **[ユーザー設定](#settings-folder-1)** や **ストラクチャー設定** より優先されます。

| 内容                  | 説明                                                                                                                                                                                                                      | 形式   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| Backup.4DSettings   | このデータファイルを使ってデータベースが実行されている場合に使用する [バックアップオプション](Backup/settings.md) を定義したデータベースバックアップ設定です。 バックアップ設定に使われるキーについての説明は [バックアップ設定ファイル](https://doc.4d.com/4Dv18/4D/18/4D-XML-Keys-Backup.100-4673706.ja.html) マニュアルを参照ください。 | XML  |
| settings.4DSettings | データファイル用のカスタムデータベース設定                                                                                                                                                                                                   | XML  |
| directory.json      | Description of 4D groups, users, and their access rights when the application is run with this data file.                                                                                                               | JSON |



### Logs フォルダー

Logs フォルダーには、プロジェクトが使用するすべてのログファイルが格納されます。 以下のログファイルが格納されます:

- データベース変換
- Webサーバーリクエスト
- バックアップ/復元アクションのジャーナル (*Backup Journal\[xxx].txt*、[バックアップジャーナル](Backup/backup.md#backup-journal) 参照)
- コマンドデバッグ
- 4D Serverリクエスト (クライアントマシンおよびサーバー上で生成)

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html) command) for maintenance log files and in cases where data folder is read-only.

## Settings フォルダー

This folder contains **user settings files** used for application administration. Files are added to the folder when necessary.

> [Data フォルダー](#settings-フォルダー)の Setting フォルダー内にデータファイル用のユーザー設定ファイルがある場合には、そちらが優先されます。

| 内容                  | 説明                                                                                                                                                                                                                                                              | 形式   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| directory.json      | Description of 4D groups and users for the application, as well as their access rights                                                                                                                                                                          | JSON |
| BuildApp.4DSettings | アプリケーションビルダーのダイアログボックス、または `BUILD APPLICATION` コマンドを使ったときに自動的に作成されるビルド設定ファイル                                                                                                                                                                                    | XML  |
| Backup.4DSettings   | バックアップ開始時に [バックアップオプション](Backup/settings.md) を指定するためのデータベースバックアップ設定です。 このファイルは、*バックアップジャーナル* に保存する情報量などの追加オプションの確認や設定にも使用することができます。 バックアップ設定に使われるキーについての説明は [バックアップ設定ファイル](https://doc.4d.com/4Dv18/4D/18/4D-XML-Keys-Backup.100-4673706.ja.html) マニュアルを参照ください。 | XML  |


## userPreferences.*userName* フォルダー

ブレークポイントの位置など、ユーザーの環境設定を定義するファイルを格納するフォルダーです。 このフォルダーは無視してかまいません。 格納されるファイルの例です:

| 内容                           | 説明                                 | 形式   |
| ---------------------------- | ---------------------------------- | ---- |
| methodPreferences.json       | カレントユーザーのメソッドエディター環境設定             | JSON |
| methodWindowPositions.json   | カレントユーザーのメソッドのウィンドウポジション           | JSON |
| formWindowPositions.json     | カレントユーザーのフォームのウィンドウポジション           | JSON |
| workspace.json               | 開かれているウィンドウのリスト；macOS ではタブウィンドウの順序 | JSON |
| debuggerCatches.json         | キャッチコマンドリスト                        | JSON |
| recentTables.json            | 最近開かれたテーブルのリスト                     | JSON |
| preferencesv15.4DPreferences | ユーザー環境設定                           | JSON |


## Components フォルダー

This folder contains the components to be available in the application project only. このフォルダーは、Project フォルダーと同じ階層に置きます。

> An application project can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host project. - for deployment: build the component (see [Building a project package](building.md)) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host application.


## Plugins フォルダー

This folder contains the plug-ins to be available in the application project only. このフォルダーは、Project フォルダーと同じ階層に置きます。


## Documentation フォルダー

このフォルダーには、クラス・メソッド・フォームなどのプロジェクト要素について作成されたドキュメンテーションファイル (.md) がすべて格納されます。 ドキュメンテーションファイルは、4D エクスプローラーにて表示・管理されます。

詳細については [プロジェクトのドキュメンテーション](Project/documentation.md) を参照ください。

## WebFolder

ページ、ピクチャーなどのための、4D Web サーバーのデフォルトのルートフォルダー。 Web サーバーが初回起動時に、自動で作成されます。 