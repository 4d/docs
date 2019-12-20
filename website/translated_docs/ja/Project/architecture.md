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

| Contents                | Description                                                                                                                                                                           | Format |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| catalog.4DCatalog       | Table and field definitions                                                                                                                                                           | XML    |
| folders.json            | Explorer folder definitions                                                                                                                                                           | JSON   |
| menus.json              | Menu definitions                                                                                                                                                                      | JSON   |
| settings.4DSettings     | *Structure* database settings. If *user settings* are defined, they take priority over these settings. If *user settings for data* are defined, they take priority over user settings | XML    |
| tips.json               | Defined tips                                                                                                                                                                          | JSON   |
| lists.json              | Defined lists                                                                                                                                                                         | JSON   |
| filters.json            | Defined filters                                                                                                                                                                       | JSON   |
| styleSheets.css         | CSS style sheets                                                                                                                                                                      | CSS    |
| styleSheets_mac.css     | Mac css style sheets (from converted binary database)                                                                                                                                 | CSS    |
| styleSheets_windows.css | Windows css style sheets (from converted binary database)                                                                                                                             | CSS    |


#### DatabaseMethods フォルダー

| Contents                 | Description                                                            | Format |
| ------------------------ | ---------------------------------------------------------------------- | ------ |
| *databaseMethodName*.4dm | Database methods defined in the database. One file per database method | text   |


#### Methods フォルダー

| Contents         | Description                                                  | Format |
| ---------------- | ------------------------------------------------------------ | ------ |
| *methodName*.4dm | Project methods defined in the database. One file per method | text   |


#### Forms フォルダー

| Contents                                  | Description                                | Format  |
| ----------------------------------------- | ------------------------------------------ | ------- |
| *formName*/form.4DForm                    | Project form description                   | json    |
| *formName*/method.4dm                     | Project form method                        | text    |
| *formName*/Images/*pictureName*           | Project form static picture                | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Object methods. One file per object method | text    |


#### TableForms フォルダー

| Contents                                             | Description                                            | Format  |
| ---------------------------------------------------- | ------------------------------------------------------ | ------- |
| *n*/Input/*formName*/form.4DForm                     | Input table form description (n is the table number)   | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Input table form static pictures                       | picture |
| *n*/Input/*formName*/method.4dm                      | Input table form method                                | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Input form object methods. One file per object method  | text    |
| *n*/Output/*formName*/form.4DForm                    | Output table form description (n is the table number)  | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Output table form static pictures                      | picture |
| *n*/Output/*formName*/method.4dm                     | Output table form method                               | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Output form object methods. One file per object method | text    |


#### Triggers フォルダー

| Contents      | Description                                                                                 | Format |
| ------------- | ------------------------------------------------------------------------------------------- | ------ |
| table_*n*.4dm | Trigger methods defined in the database. One trigger file per table (n is the table number) | text   |


**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools.

### Trash フォルダー

The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:

- Methods
- Forms
- TableForms

Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder.

### DerivedData フォルダー

The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder.

## Resources フォルダー

The Resources folder contains any custom database resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the *4D Server Reference Manual*.

| Contents              | Description                                                                                                                                           | Format  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Database resource files and folders                                                                                                                   | various |
| Images/Library/*item* | Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name. | picture |


(*) only if the project was exported from a .4db binary database.

## Data フォルダー

The data folder contains the data file and all files and folders relating to the data.

| Contents     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Format |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| data.4dd(*)  | Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the *Open data file* dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                                                                                                                                                                                                                                                                                    | binary |
| data.journal | Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user’s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. | binary |
| data.match   | (internal) UUID matching table number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | XML    |


(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location.

### Settings フォルダー

This folder contains **user settings files for data** used for database administration.

> These settings take priority over **user settings files** and **structure settings** files.

| Contents            | Description                                                                                                                                                                                                          | Format |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when the database is run with this data file. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML    |
| settings.4DSettings | Custom database settings for this data file                                                                                                                                                                          | XML    |


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

| Contents            | Description                                                                                                                                                                                                                                                                                                                          | Format |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| directory.json      | Description of 4D groups and users for the database, as well as their access rights                                                                                                                                                                                                                                                  | JSON   |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML    |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the *backup journal*. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML    |


## userPreferences.*userName* フォルダー

This folder contains files that memorize user configurations, e.g. break point positions. You can just ignore this folder. It contains for example:

| Contents                     | Description                                            | Format |
| ---------------------------- | ------------------------------------------------------ | ------ |
| methodPreferences.json       | Current user method editor preferences                 | JSON   |
| methodWindowPositions.json   | Current user window positions for methods              | JSON   |
| formWindowPositions.json     | Current user window positions for forms                | JSON   |
| workspace.json               | List of opened windows; on macOS, order of tab windows | JSON   |
| debuggerCatches.json         | Caught calls to commands                               | JSON   |
| recentTables.json            | Ordered list of tables                                 | JSON   |
| preferencesv15.4DPreferences | User preferences                                       | JSON   |


## Components フォルダー

This folder contains the components to be available in the project database only. It must be stored at the same level as the Project folder.

> A project database can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host database. - for deployment: build the component (see [Building a project package](building.md)) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host database.

## Plugins フォルダー

This folder contains the plug-ins to be available in the project database only. It must be stored at the same level as the Project folder.