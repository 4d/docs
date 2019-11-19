---
id: architecture
title: 4D プロジェクトのアーキテクチャー
---

4D プロジェクトは、一つの親プロジェクトフォルダーに格納された、複数のフォルダーやファイルから構成されています。 For example:

![](assets/en/Project/project1.png)

> バイナリデータベースから変換されたプロジェクトの場合には、追加のフォルダーが存在している場合があります (doc.4d.com にて "[データベースをプロジェクトモードに変換する](https://doc.4d.com/4Dv18/4D/18/Converting-databases-to-projects.300-4606146.ja.html)" 参照)。

## Project フォルダー

典型的な Project フォルダーの構造です:

- *databaseName*.4DProject ファイル
- Sources 
    + DatabaseMethods
    + Methods
    + Forms
    + TableForms
    + Triggers
+ DerivedData
+ Trash (あれば)

### *databaseName*.4DProject ファイル

プロジェクトを定義し、起動するためのプロジェクト開発ファイルです。 このファイルを開くには次のいずれかが必要です:

- 4D Developer
- 4D Server (読み取り専用モード；[プロジェクトの開発](developing.md) 参照)

**注:** 4D プロジェクトの開発は 4D Developer によっておこない、マルチユーザー開発はソースコントロールツールによって管理します。 4D Server は .4DProject ファイルをテスト用に開くことができます。

### Sources フォルダー

| 内容                      | Description                                                                                    | 形式   |
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

| 内容                       | Description                                        | 形式   |
| ------------------------ | -------------------------------------------------- | ---- |
| *databaseMethodName*.4dm | データベース内で定義されているデータベースメソッド (1つのデータベースメソッドにつき1ファイル)。 | text |


#### Methods フォルダー

| 内容               | Description                                  | 形式   |
| ---------------- | -------------------------------------------- | ---- |
| *methodName*.4dm | データベース内で定義されているプロジェクトメソッド (1つのメソッドにつき1ファイル)。 | text |


#### Forms フォルダー

| 内容                                        | Description                        | 形式      |
| ----------------------------------------- | ---------------------------------- | ------- |
| *formName*/form.4DForm                    | プロジェクトフォームの定義                      | json    |
| *formName*/method.4dm                     | プロジェクトフォームメソッド                     | text    |
| *formName*/Images/*pictureName*           | プロジェクトフォームのスタティックピクチャー             | picture |
| *formName*/ObjectMethods/*objectName*.4dm | オブジェクトメソッド (1つのオブジェクトメソッドにつき1ファイル) | text    |


#### TableForms フォルダー

| 内容                                                   | Description                                   | 形式      |
| ---------------------------------------------------- | --------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | 入力テーブルフォームの定義 (n: テーブル番号)                     | json    |
| *n*/Input/*formName*/Images/*pictureName*            | 入力テーブルフォームのスタティックピクチャー                        | picture |
| *n*/Input/*formName*/method.4dm                      | 入力テーブルフォームのフォームメソッド                           | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | 入力テーブルフォームのオブジェクトメソッド (1つのオブジェクトメソッドにつき1ファイル) | text    |
| *n*/Output/*formName*/form.4DForm                    | 出力テーブルフォーム (n: テーブル番号)                        | json    |
| *n*/Output/*formName*/Images/*pictureName*           | 出力テーブルフォームのスタティックピクチャー                        | picture |
| *n*/Output/*formName*/method.4dm                     | 出力テーブルフォームのフォームメソッド                           | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | 出力テーブルフォームのオブジェクトメソッド (1つのオブジェクトメソッドにつき1ファイル) | text    |


#### Triggers フォルダー

| 内容            | Description                                          | 形式   |
| ------------- | ---------------------------------------------------- | ---- |
| table_*n*.4dm | データベース内で定義されているトリガーメソッド ( 1つのテーブルにつき1ファイル；n: テーブル番号) | text |


**注:** 拡張子 .4dm のファイルは、4D メソッドのコードをテキスト形式で格納しており、 ソースコントロールツールに対応しています。

### Trash フォルダー

プロジェクトから削除されたメソッドやフォームがあれば、Trash フォルダーにはそれらが格納されます。 たとえば、つぎのフォルダーが格納されている場合があります:

- Methods
- Forms
- TableForms

削除された要素はファイル名に括弧が付いた形でフォルダー内に置かれます (例: "(myMethod).4dm")。 フォルダーの構成は [Sources](#sources) フォルダーと同じです。

### DerivedData フォルダー

DerivedData フォルダーには、処理を最適化するため 4D が内部的に使用するキャッシュデーターが格納されます。 これらは必要に応じて自動的に生成・再生成されます。 このフォルダーは無視してかまいません。

## Resources フォルダー

Resources フォルダーには追加のカスタムデータベースリソースファイルやフォルダーが格納されます。 アプリケーションインターフェースの翻訳やカスタマイズに必要なファイルはすべてここに格納します (ピクチャー、テキスト、XLIFF ファイルなど)。 4D は自動のメカニズムによってフォルダー内のファイル (とくに XLIFF ファイルおよびスタティックピクチャー) を扱います。 リモートモードにおいては、サーバーとすべてのクライアントマシン間でファイルを共有することが Resources フォルダーによって可能です (*4D Server リファレンスマニュアル* の [リソースフォルダの管理](https://doc.4d.com/4Dv18/4D/18/Managing-the-Resources-folder.300-4672420.ja.html) を参照ください)。

| 内容                    | Description                                                               | 形式      |
| --------------------- | ------------------------------------------------------------------------- | ------- |
| *item*                | データベースリソースファイルとフォルダー                                                      | 様々      |
| Images/Library/*item* | ピクチャーライブラリの個別ピクチャーファイル(*)。 各アイテムの名称がファイル名となります。 名称が重複する場合には、名称に番号が追加されます。 | picture |


(*) .4db バイナリデータベースから変換されたプロジェクトの場合のみ

## Data フォルダー

Data フォルダーにはデータファイルのほか、データに関わるするファイルやフォルダーがすべて格納されています。

| 内容           | Description                                                                                                                                                                                                                                                                                                                                            | 形式   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| data.4dd(*)  | レコードとして入力されたデータと、レコードに属するデータが格納されたデータファイルです。 4D プロジェクトを開くと、アプリケーションはカレントデータファイルをデフォルトで開きます。 このファイルの場所や名称を変更した場合は、*データファイルを開く* ダイアログボックスが表示され、使用するデータファイルを選択するか、新しいデータファイルを作成できます。                                                                                                                                                                      | バイナリ |
| data.journal | データベースがログファイルを使用する場合のみ作成されます。 ログファイルは2つのバックアップ間のデータ保護を確実なものにするために使用されます。 データに対して実行されたすべての処理が、このファイルに順番に記録されます。 つまりデータに対して操作がおこなわれるたびに、データ上の処理 (操作の実行) とログファイル上の処理 (操作の記録) という 2つの処理が同時に発生します。 ログファイルはユーザーの処理を妨げたり遅くしたりすることなく、独立して構築されます。 データベースは 1つのログファイルしか同時に使用できません。 ログファイルにはレコードの追加・更新・削除やトランザクションなどの処理が記録されます。 ログファイルはデータベースが作成される際にデフォルトで生成されます。 | バイナリ |
| data.match   | (内部用) テーブル番号に対応する UUID                                                                                                                                                                                                                                                                                                                                 | XML  |


(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location.

### Settings フォルダー

This folder contains **user settings files for data** used for database administration.

> These settings take priority over **user settings files** and **structure settings** files.

| 内容                  | Description                                                                                                                                                                                                          | 形式  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when the database is run with this data file. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML |
| settings.4DSettings | Custom database settings for this data file                                                                                                                                                                          | XML |


### Logs フォルダー

The Logs folder contains all log files used by the project. Log files include, in particular:

- database conversion,
- web server requests,
- backup/restore activities journal (*Backup Journal\[xxx].txt*, see [Backup journal](Backup/backup.md#backup-journal))
- command debugging,
- 4D Server requests (generated on client machines and on the server).

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command) for maintenance log files and in cases where data folder is read-only.

## Settings フォルダー

This folder contains **user settings files** used for database administration. File are added to the folder when necessary.

> If a data settings file exists in a Settings folder in the data folder, it takes priority over user settings file.

| 内容                  | Description                                                                                                                                                                                                                                                                                                                          | 形式   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| directory.json      | Description of 4D groups and users for the database, as well as their access rights                                                                                                                                                                                                                                                  | JSON |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML  |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the *backup journal*. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML  |


## userPreferences.*userName* フォルダー

This folder contains files that memorize user configurations, e.g. break point positions. You can just ignore this folder. It contains for example:

| 内容                           | Description                                            | 形式   |
| ---------------------------- | ------------------------------------------------------ | ---- |
| methodPreferences.json       | Current user method editor preferences                 | JSON |
| methodWindowPositions.json   | Current user window positions for methods              | JSON |
| formWindowPositions.json     | Current user window positions for forms                | JSON |
| workspace.json               | List of opened windows; on macOS, order of tab windows | JSON |
| debuggerCatches.json         | Caught calls to commands                               | JSON |
| recentTables.json            | Ordered list of tables                                 | JSON |
| preferencesv15.4DPreferences | User preferences                                       | JSON |


## Components フォルダー

This folder contains the components to be available in the project database only. It must be stored at the same level as the Project folder.

> A project database can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host database. - for deployment: build the component (see [Building a project package](building.md)) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host database.

## Plugins フォルダー

This folder contains the plug-ins to be available in the project database only. It must be stored at the same level as the Project folder.