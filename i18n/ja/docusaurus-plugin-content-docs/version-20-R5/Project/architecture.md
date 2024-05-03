---
id: architecture
title: プロジェクトのアーキテクチャー
---

4D プロジェクトは、一つのプロジェクトルートフォルダー (パッケージフォルダー) に格納された、複数のファイルやフォルダーから構成されています。 例:

- MyPackage (_project root folder_)
  - `Components`
  - `Data`
    - `ログ`
    - `Settings`
  - `ドキュメント`
  - `Plugins`
  - `Project`
    - `DerivedData`
    - `Sources`
    - `Trash`
  - `リソース`
  - `Settings`
  - `userPreferences.username`
  - `WebFolder`

> バイナリデータベースから変換されたプロジェクトの場合には、追加のフォルダーが存在している場合があります  See "Converting databases to projects" on [doc.4d.com](https://doc.4d.com).

## `Project` folder

典型的な Project フォルダーの構造です:

- `<applicationName>.4DProject` file
- `Sources`
  - `Classes`
  - `DatabaseMethods`
  - `Methods`
  - `フォーム`
  - `TableForms`
  - `トリガー`
- `DerivedData`
- `Trash` (if any)

### `<applicationName>.4DProject` file

プロジェクトを定義し、起動するためのプロジェクト開発ファイルです。 このファイルを開くには次のいずれかが必要です:

- 4D
- 4D Server (read-only, see [Opening a remote project](Desktop/clientServer.md#opening-a-remote-project))

> 4D プロジェクトの開発は 4D によっておこない、マルチユーザー開発はソース管理ツールによって管理します。 4D Server は .4DProject ファイルを開くことができますが、クライアントからの開発はおこなえません。

This text file can also contain configuration keys, in particular [`"tokenizedText": false`](../Preferences/general.md#excluding-tokens-in-existing-projects).

### `Sources`

| 内容                                                           | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 形式   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| catalog.4DCatalog                            | テーブルおよびフィールド定義                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | XML  |
| catalog_editor.json     | ストラクチャーエディターでのテーブル、フィールド、およびリンクのカスタム位置と色。 Depends on a [Compatibility setting](../settings/compatibility.md) in converted projects                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | JSON |
| folders.json                                 | 　エクスプローラーフォルダー定義                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | JSON |
| menus.json                                   | メニュー定義                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | JSON |
| settings.4DSettings                          | _Structure_ database settings. They are not taken into account if _[user settings](#settings-user)_ or _[user settings for data](#settings-user-data)_ are defined (see also [Priority of settings](../Desktop/user-settings.md#priority-of-settings). **Warning**: In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to [enable](../Desktop/user-settings.md#enabling-user-settings) and use _user settings_ or _user settings for data_ to define custom settings. | XML  |
| tips.json                                    | 定義されたヘルプTips                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | JSON |
| lists.json                                   | 定義されたリスト                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | JSON |
| filters.json                                 | 定義されたフィルター                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | JSON |
| dependencies.json                            | Names of [components to load](components.md) in the project                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | JSON |
| styleSheets.css                              | CSS スタイルシート                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | CSS  |
| styleSheets_mac.css     | Mac用 CSS スタイルシート (変換されたバイナリデータベースより)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | CSS  |
| styleSheets_windows.css | Windows用 CSS スタイルシート (変換されたバイナリデータベースより)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | CSS  |

#### `DatabaseMethods`

| 内容                                       | 説明                                                                    | 形式   |
| ---------------------------------------- | --------------------------------------------------------------------- | ---- |
| _databaseMethodName_.4dm | プロジェクト内で定義されているデータベースメソッド (1つのデータベースメソッドにつき1ファイル)。 | text |

#### `Methods`

| 内容                               | 説明                                                               | 形式   |
| -------------------------------- | ---------------------------------------------------------------- | ---- |
| _methodName_.4dm | プロジェクト内で定義されているプロジェクトメソッド  (1つのメソッドにつき1ファイル)。 | text |

#### `Classes`

| 内容                              | 説明                                                                    | 形式   |
| ------------------------------- | --------------------------------------------------------------------- | ---- |
| _className_.4dm | 特定のオブジェクトをインスタンス化するための、ユーザークラス用の定義メソッド。 1クラスにつき1ファイル。ファイル名がクラス名になります。 | text |

#### `フォーム`

| 内容                                                        | 説明                                                     | 形式      |
| --------------------------------------------------------- | ------------------------------------------------------ | ------- |
| _formName_/form.4DForm                    | プロジェクトフォームの定義                                          | json    |
| _formName_/method.4dm                     | プロジェクトフォームメソッド                                         | text    |
| _formName_/Images/_pictureName_                           | プロジェクトフォームのスタティックピクチャー                                 | picture |
| _formName_/ObjectMethods/_objectName_.4dm | オブジェクトメソッド  (1つのオブジェクトメソッドにつき1ファイル) | text    |

#### `TableForms`

| 内容                                                                   | 説明                                                                | 形式      |
| -------------------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| _n_/Input/_formName_/form.4DForm                     | 入力テーブルフォームの定義 (n: テーブル番号)      | json    |
| _n_/Input/_formName_/Images/_pictureName_                            | 入力テーブルフォームのスタティックピクチャー                                            | picture |
| _n_/Input/_formName_/method.4dm                      | 入力テーブルフォームのフォームメソッド                                               | text    |
| _n_/Input/_formName_/ObjectMethods/_objectName_.4dm  | 入力テーブルフォームのオブジェクトメソッド  (1つのオブジェクトメソッドにつき1ファイル) | text    |
| _n_/Output/_formName_/form.4DForm                    | 出力テーブルフォーム (n: テーブル番号)         | json    |
| _n_/Output/_formName_/Images/_pictureName_                           | 出力テーブルフォームのスタティックピクチャー                                            | picture |
| _n_/Output/_formName_/method.4dm                     | 出力テーブルフォームのフォームメソッド                                               | text    |
| _n_/Output/_formName_/ObjectMethods/_objectName_.4dm | 出力テーブルフォームのオブジェクトメソッド  (1つのオブジェクトメソッドにつき1ファイル) | text    |

#### `トリガー`

| 内容                                                 | 説明                                                                                       | 形式   |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---- |
| table__n_.4dm | プロジェクト内で定義されているトリガーメソッド  ( 1つのテーブルにつき1ファイル；n: テーブル番号) | text |

**Note:**
The .4dm file extension is a text-based file format, containing the code of a 4D method. ソース管理ツールに対応しています。

### `Trash`

プロジェクトから削除されたメソッドやフォームがあれば、Trash フォルダーにはそれらが格納されます。 たとえば、つぎのフォルダーが格納されている場合があります:

- `Methods`
- `フォーム`
- `TableForms`

削除された要素はファイル名に括弧が付いた形でフォルダー内に置かれます (例: "(myMethod).4dm")。 The folder organization is identical to the [Sources](#sources) folder.

### `DerivedData`

DerivedData フォルダーには、処理を最適化するため 4D が内部的に使用するキャッシュデーターが格納されます。 これらは必要に応じて自動的に生成・再生成されます。 このフォルダーは無視してかまいません。

## `Libraries`

> このフォルダーは macOS でのみ使用されます。

The Librairies folder contains the file resulting from a compilation with the [Silicon compiler](compiler.md#silicon-compiler) on macOS.

## `リソース`

Resources フォルダーには、追加のカスタムプロジェクトリソースファイルやフォルダーが格納されます。 アプリケーションインターフェースの翻訳やカスタマイズに必要なファイルはすべてここに格納します (ピクチャー、テキスト、XLIFF ファイルなど)。 4D は自動のメカニズムによってフォルダー内のファイル (とくに XLIFF ファイルおよびスタティックピクチャー) を扱います。 リモートモードにおいては、サーバーとすべてのクライアントマシン間でファイルを共有することが Resources フォルダーによって可能です See the _4D Server Reference Manual_.

| 内容                    | 説明                                                                                            | 形式      |
| --------------------- | --------------------------------------------------------------------------------------------- | ------- |
| _項目_                  | プロジェクトリソースファイルとフォルダー                                                                          | 様々      |
| Images/Library/_item_ | ピクチャーライブラリの個別ピクチャーファイル(\*)。 各アイテムの名称がファイル名となります。 名称が重複する場合には、名称に番号が追加されます。 | picture |

(\*) .4db バイナリデータベースから変換されたプロジェクトの場合のみ

## `Data`

Data フォルダーには、データファイルのほか、データに関わるするファイルやフォルダーがすべて格納されています。

| 内容                                              | 説明                                                                                                                                                                                                                                                                                                                                                                                           | 形式     |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| data.4dd(\*) | レコードとして入力されたデータと、レコードに属するデータが格納されたデータファイルです。 4D プロジェクトを開くと、アプリケーションはカレントデータファイルをデフォルトで開きます。 If you change the name or location of this file, the _Open data file_ dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                | binary |
| data.journal                    | データベースがログファイルを使用する場合のみ作成されます。 ログファイルは2つのバックアップ間のデータ保護を確実なものにするために使用されます。 データに対して実行されたすべての処理が、このファイルに順番に記録されます。 つまりデータに対して操作がおこなわれるたびに、データ上の処理 (操作の実行) とログファイル上の処理 (操作の記録) という 2つの処理が同時に発生します。 ログファイルはユーザーの処理を妨げたり遅くしたりすることなく、独立して構築されます。 データベースは 1つのログファイルしか同時に使用できません。 ログファイルにはレコードの追加・更新・削除やトランザクションなどの処理が記録されます。 ログファイルはデータベースが作成される際にデフォルトで生成されます。 | binary |
| data.match                      | (内部用) テーブル番号に対応する UUID                                                                                                                                                                                                                                                                                                                                                    | XML    |

(\*) .4db バイナリデータベースからプロジェクトに変換した場合、データファイルは変換による影響を受けません。 このデータファイルの名称を変更して移動させることができます。

### `Settings` (user data)

This folder contains [**user settings for data**](../Desktop/user-settings.md#user-settings-for-data-file) used for application administration.

> These settings take priority over [user settings](#settings-user) and [structure settings](#sources). See also [Priority of settings](../Desktop/user-settings.md#priority-of-settings).

| 内容                                  | 説明                                                                                                                                                                                                                                                  | 形式   |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| directory.json      | このデータファイルを使ってアプリケーションが実行されている場合に使用する 4D グループとユーザー、およびアクセス権の定義                                                                                                                                                                                       | JSON |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md) when the database is run with this data file. Keys concerning backup configuration are described in the _4D XML Keys Backup_ manual. | XML  |
| settings.4DSettings | データファイル用のカスタムデータベース設定。                                                                                                                                                                                                                              | XML  |

### `ログ`

Logs フォルダーには、プロジェクトが使用するすべてのログファイルが格納されます。 以下のログファイルが格納されます:

- データベース変換
- Webサーバーリクエスト
- backup/restore activities journal (_Backup Journal\[xxx].txt_, see [Backup journal](Backup/backup.md#backup-journal))
- コマンドデバッグ
- 4D Serverリクエスト (クライアントマシンおよびサーバー上で生成)

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4dv19R/help/command/en/page485.html) command) for maintenance log files and in cases where data folder is read-only.

## `Settings` (user)

This folder contains [**user settings**](../Desktop/user-settings.md#user-settings) used for application administration.

> These settings take priority over [structure settings](#sources) file. However, if [user settings for data](#settings-user-data) exist, they take priority over the user settings. See also [Priority of settings](../Desktop/user-settings.md#priority-of-settings).

| 内容                                  | 説明                                                                                                                                                                                                                                                                                                                                                                                   | 形式   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| directory.json      | 4D グループとユーザー、およびアクセス権の定義                                                                                                                                                                                                                                                                                                                                                             | JSON |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the _backup journal_. Keys concerning backup configuration are described in the _4D XML Keys Backup_ manual. | XML  |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                                                                          | XML  |
| settings.4DSettings | プロジェクト用のカスタム設定 (すべてのデータファイル)                                                                                                                                                                                                                                                                                                                                      | XML  |
| logConfig.json      | Custom [log configuration file](../Debugging/debugLogFiles.md#using-a-log-configuration-file)                                                                                                                                                                                                                                                                                        | json |

## `userPreferences.<userName>`

ブレークポイントやウィンドウの位置など、ユーザーの環境設定を定義するファイルを格納するフォルダーです。 このフォルダーは無視してかまいません。 格納されるファイルの例です:

| 内容                                         | 説明                                  | 形式     |
| ------------------------------------------ | ----------------------------------- | ------ |
| methodPreferences.json     | カレントユーザーのコードエディター環境設定               | JSON   |
| methodWindowPositions.json | カレントユーザーのメソッドのウィンドウポジション            | JSON   |
| formWindowPositions.json   | カレントユーザーのフォームのウィンドウポジション            | JSON   |
| workspace.json             | 開かれているウィンドウのリスト；macOS ではタブウィンドウの順序  | JSON   |
| debuggerCatches.json       | キャッチコマンドリスト                         | JSON   |
| recentTables.json          | 最近開かれたテーブルのリスト                      | JSON   |
| preferences.4DPreferences  | カレントデータパスおよび主なウィンドウの位置              | XML    |
| CompilerIntermediateFiles                  | Apple Silicon用にコンパイルした結果生成される中間ファイル | Folder |

## `Components`

コンポーネントを格納する従来のフォルダー (Projectフォルダーと同じ階層に保存する必要があります)。

:::info

It is now recommended to [use the **dependencies.json** and (optionnally) **environment4d.json** files](components.md) to declare your components instead of the Components folder.

:::

## `Plugins`

アプリケーションプロジェクトが利用するプラグインを格納するフォルダーです。 このフォルダーは、Project フォルダーと同じ階層に置きます。

## `ドキュメント`

このフォルダーには、クラス・メソッド・フォームなどのプロジェクト要素について作成されたドキュメンテーションファイル (.md) がすべて格納されます。 ドキュメンテーションファイルは、4D エクスプローラーにて表示・管理されます。

For more information, refer to [Documenting a project](Project/documentation.md).

## `WebFolder`

ページ、ピクチャーなどのための、4D Web サーバーのデフォルトのルートフォルダー。 Web サーバーが初回起動時に、自動で作成されます。

## `.gitignore` file (optional)

git が無視するファイルを指定します。 You can include a gitignore file in your projects using the **Create .gitignore file** option on the **General** page of the preferences. To configure the contents of that file, see [Create `.gitignore` file](Preferences/general.md#create-gitignore-file).
