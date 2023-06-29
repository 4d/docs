---
id: FileClass
title: File
---

`File` オブジェクトは [`File`](#file) コマンドによって作成されます。 これらのオブジェクトには、(実在しているか否かに関わらず) ディスクファイルへの参照が格納されます。 たとえば、新規ファイルを作成するために `File` コマンドを実行した場合、有効な `File` オブジェクトが作成されますが、[`file.create()`](#create) 関数を呼び出すまで、ディスク上にはなにも保存されていません。

### 例題

プロジェクトフォルダーにプリファレンスファイルを作成します:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### パス名

`File` オブジェクトは、`filesystems` や `posix` シンタックスを含む、いくつかのパス名をサポートしています。 使用できるパス名についての詳細は [**パス名**](../Concepts/paths.md) ページを参照ください。



### File オブジェクト

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.create().Summary -->|
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.createAlias().Summary -->|
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationDate.Summary -->|
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationTime.Summary -->|
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.delete().Summary -->|
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.getAppInfo().Summary -->|
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->|
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getIcon().Summary -->|
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->|
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->|
| [<!-- INCLUDE #document.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.open().Summary -->|
| [<!-- INCLUDE #document.original.Syntax -->](#original)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
| [<!-- INCLUDE #document.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary -->|
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.platformPath.Summary -->|
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.rename().Summary -->|
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setAppInfo().Summary -->|
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setContent().Summary -->|
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setText().Summary -->|
| [<!-- INCLUDE #document.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.size.Summary -->|

## File

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; * } ) : 4D.File<!-- END REF -->


<!-- REF #_command_.File.Params -->
| 引数           | タイプ     |    | 説明                                             |
| ------------ | ------- |:--:| ---------------------------------------------- |
| path         | Text    | -> | ファイルパス                                         |
| fileConstant | Integer | -> | 4Dファイル定数                                       |
| pathType     | Integer | -> | `fk posix path` (デフォルト) または `fk platform path` |
| *            |         | -> | ホストデータベースのファイルを返すには * を渡します                    |
| 戻り値          | 4D.File | <- | 新規ファイルオブジェクト|<!-- END REF -->

|

#### 説明

`File` コマンドは、 <!-- REF #_command_.File.Summary -->`4D.File` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 このコマンドは 2種類のシンタックスを受け入れます。

**File ( path { ; pathType } { ; * })**

*path* には、ファイルパス文字列を渡します。 カスタムの文字列やファイルシステム (例: "/DATA/myfile.txt") を渡すことができます。

> `File` コマンドでは絶対パス名のみがサポートされます。

デフォルトで、4D は POSIXシンタックスで表現されたパスを期待します。 プラットフォームパス名 (Windows または macOS) を使用する場合、*pathType* 引数を使用してそのことを宣言する必要があります。 以下の定数を使用することができます:

| 定数               | 値 | 説明                                             |
| ---------------- | - | ---------------------------------------------- |
| fk platform path | 1 | プラットフォーム特有のシンタックスで表現されたパス (プラットフォームパス名の場合には必須) |
| fk posix path    | 0 | POSIXシンタックスで表現されたパス (デフォルト)                    |

**File ( fileConstant { ; * } )**

*fileConstant* には、以下の定数のどれか一つを指定して 4Dビルトインの、またはシステムファイルを渡します:

| 定数                                | 値  | 説明                                                                                                                                                                                                                                                                                           |
| --------------------------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19 | バックアップ履歴ファイル。 バックアップ保存先フォルダに保存されています。                                                                                                                                                                                                                                                        |
| Backup log file                   | 13 | カレントのバックアップのログファイル。 アプリケーションの Logs フォルダーに保存されています。                                                                                                                                                                                                                                           |
| Backup settings file              | 1  | プロジェクトの Settings フォルダーにある、デフォルトの backup.4DSettings ファイル (xml 形式)                                                                                                                                                                                                                             |
| Backup settings file for data     | 17 | データフォルダーの Settings フォルダーにある、データファイル用の backup.4DSettings ファイル (xml 形式)                                                                                                                                                                                                                        |
| Build application log file        | 14 | アプリケーションビルダーのカレントログファイル (xml 形式)。 Logs フォルダーに保存されています。                                                                                                                                                                                                                                       |
| Build application settings file   | 20 | アプリケーションビルダーのデフォルト設定ファイル ("buildApp.4DSettings")。 プロジェクトの Settings フォルダーに保存されています。                                                                                                                                                                                                           |
| Compacting log file               | 6  | Compact data file コマンドによって、あるいはメンテナンス&セキュリティセンター (MSC) によって作成された、直近の圧縮のログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                          |
| Current backup settings file      | 18 | アプリケーションが現在使用している backup.4DSettings ファイル。 使用されるのはデフォルトのバックアップ設定ファイル、または、データファイル用のユーザーバックアップ設定ファイルです。                                                                                                                                                                                         |
| Debug log file                    | 12 | `SET DATABASE PARAMETER(Debug log recording)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                      |
| Diagnostic log file               | 11 | `SET DATABASE PARAMETER(Diagnostic log recording)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                 |
| Directory file                    | 16 | プロジェクトアプリケーションにおいて、ユーザーとグループ (あれば) の定義が格納された directory.json ファイル。 このファイルは、データベースの user settings フォルダー (デフォルト、プロジェクトに対してグローバル)、または data settings フォルダー (データファイル専用) に保管されます。                                                                                                                   |
| HTTP debug log file               | 9  | `WEB SET OPTION(Web debug log)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                    |
| HTTP log file                     | 8  | `WEB SET OPTION(Web log recording)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                |
| IMAP Log file                     | 23 | `SET DATABASE PARAMETER(IMAP Log)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                 |
| Last backup file                  | 2  | 任意の場所に格納されている、最終バックアップファイル (名称は: `<applicationName>[bkpNum].4BK`)                                                                                                                                                                                                                      |
| Last journal integration log file | 22 | 最後のログ統合ログファイル (あれば) の完全なパス名 (復元されたアプリケーションの Logs フォルダー内に保存されます)。 このファイルは、自動修復モードにおいてログファイル統合が発生した時点で作成されます。                                                                                                                                                                                  |
| Repair log file                   | 7  | メンテナンス&セキュリティセンター (MSC) 内からデータベースに対しておこなわれたデータベース修復のログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                             |
| Request log file                  | 10 | `SET DATABASE PARAMETER(4D Server log recording)` あるいは `SET DATABASE PARAMETER(Client log recording)` コマンドによって作成された標準のクライアント/サーバーログファイル (Webリクエストは除外)。 サーバー上で実行された場合には、サーバーログが返されます (ログファイルはサーバー上の Logsフォルダーに保存されています)。 クライアントで実行された場合には、クライアントのログが返されます (ログファイルはクライアントのLogsフォルダーに保存されています)。 |
| SMTP log file                     | 15 | `SET DATABASE PARAMETER(SMTP Log)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                 |
| User settings file                | 3  | 設定が有効化されている場合、ストラクチャーファイルと同じ階層にある Preferences フォルダーに格納された、全データファイルの settings.4DSettings ファイル。                                                                                                                                                                                                |
| User settings file for data       | 4  | データファイルと同じ階層にある Preferences フォルダーに格納された、カレントデータファイルの settings.4DSettings ファイル。                                                                                                                                                                                                               |
| Verification log file             | 5  | `VERIFY CURRENT DATA FILE` および `VERIFY DATA FILE` コマンドによって、あるいはメンテナンス&セキュリティセンター (MSC) によって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                 |

*fileConstant* 引数で指定したファイルが存在しない場合、null オブジェクトが返されます。 エラーは生成されません。

コマンドがコンポーネントから呼び出されている場合、`*` 引数を渡してホストデータベースのパスを取得するようにします。 `*` 引数を省略すると、常に null オブジェクトが返されます。

## 4D.File.new()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #4D.File.new().Syntax -->
**4D.File.new** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer { ; * } ) : 4D.File<!-- END REF -->

#### 説明

`4D.File.new()` 関数は、 <!-- REF #4D.File.new().Summary -->`4D.File` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 この関数の機能は、[`File`](#file) コマンドと同一です。

> `4D.File.new()` よりも、短い [`File`](#file) コマンドの使用が推奨されます。

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->
## .create()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!--REF file.create().Note -->
**ZIPアーカイブには利用できません**<!-- END REF -->


<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->


<!--REF #FileClass.create().Params -->
| 引数  | タイプ     |    | 説明                                                              |
| --- | ------- | -- | --------------------------------------------------------------- |
| 戻り値 | Boolean | <- | ファイルが正常に作成された場合に true、それ以外の場合は false|<!-- END REF -->

|

#### 説明

`.create()` 関数は、 <!-- REF #FileClass.create().Summary -->`File` オブジェクトのプロパティに基づいてディスク上にファイルを作成します<!-- END REF -->。

必要であれば、 関数は [platformPath](#platformpath) あるいは [path](#path) プロパティの詳細に基づいてフォルダー階層を作成します。 ファイルがディスク上にすでに存在する場合、関数は何もせず、false を返します (エラーは返されません)。

**戻り値**

* ファイルが正常に作成された場合には **true**
* すでに同じ名前のファイルが存在する、あるいはエラーが発生した場合には **false**

#### 例題

データベースフォルダー内にプリファレンスファイルを作成します:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```
<!-- END REF -->

<!-- REF file.createAlias().Desc -->
## .createAlias()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->


<!--REF #FileClass.createAlias().Params -->
| 引数                | タイプ       |    | 説明                                                |
| ----------------- | --------- | -- | ------------------------------------------------- |
| destinationFolder | 4D.Folder | -> | エイリアスまたはショートカットの作成先フォルダー                          |
| aliasName         | Text      | -> | エイリアスまたはショートカットの名称                                |
| aliasType         | Integer   | -> | エイリアスリンクのタイプ                                      |
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのファイル参照|<!-- END REF -->

|

#### 説明

`.createAlias()` 関数は、 <!-- REF #FileClass.createAlias().Summary -->エイリアス (macOS) またはショートカット (Windows) を作成します<!-- END REF --> 。これらは、*destinationFolder* オブジェクトが指定するフォルダー内に、*aliasName* の名称で作成されます。

*aliasName* には、作成するエイリアスまたはショートカットの名前を渡します。

macOS 上では、この関数はデフォルトで標準エイリアスを作成します。 *aliasType* 引数を渡すことで、シンボリックリンクを作成することもできます。 以下の定数を使用することができます:

| 定数                 | 値 | 説明                  |
| ------------------ | - | ------------------- |
| `fk alias link`    | 0 | エイリアスリンク (デフォルト)    |
| `fk symbolic link` | 1 | シンボリックリンク (macOSのみ) |

Windows 上では、常にショートカット (.lnk ファイル) が作成されます (*aliasType* 引数は無視されます)。

**返されるオブジェクト**

`isAlias` プロパティが **true** に設定された `4D.File` オブジェクトを返します。

#### 例題

データベースフォルダー内のファイルへのエイリアスを作成します:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```
<!-- END REF -->

<!-- INCLUDE document.creationDate.Desc -->

<!-- INCLUDE document.creationTime.Desc -->

<!-- REF file.delete().Desc -->
## .delete()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->


<!-- REF #FileClass.delete().Params -->

| 引数 | タイプ |  | 説明                                           |
| -- | --- |  | -------------------------------------------- |
|    |     |  | このコマンドは引数を必要としません|<!-- END REF -->



|



#### 説明

`.delete()` 関数は、 <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->。

If the file is currently open, an error is generated.

If the file does not exist on disk, the function does nothing (no error is generated).
> **WARNING**: `.delete()` can delete any file on a disk. これには、他のアプリケーションで作成されたドキュメントや、アプリケーションそのものも対象になります。 `.delete()` should be used with extreme caution. ファイルの削除は恒久的な操作であり取り消しできません。

#### 例題

You want to delete a specific file in the database folder:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("ユーザーのプリファレンスファイルが削除されました。")
 End if
```
<!-- END REF -->

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- REF file.getAppInfo().Desc -->
## .getAppInfo()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |
</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->


<!--REF #FileClass.getAppInfo().Params -->
| 引数  | タイプ    |    | 説明                                                                               |
| --- | ------ | -- | -------------------------------------------------------------------------------- |
| 戻り値 | Object | <- | Contents of .exe/.dll version resource or .plist file|<!-- END REF -->


|


#### 説明

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->。

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function returns an empty object (no error is generated).

> この関数は xml形式の .plist ファイル (テキスト) のみをサポートしています。 バイナリ形式の .plist ファイルを対象に使用した場合、エラーが返されます。

**Returned object with a .exe or .dll file**

> .exe および .dll ファイルの読み取りは Windows上でのみ可能です。

All property values are Text.

| プロパティ            | タイプ  |
| ---------------- | ---- |
| InternalName     | Text |
| ProductName      | Text |
| CompanyName      | Text |
| LegalCopyright   | Text |
| ProductVersion   | Text |
| FileDescription  | Text |
| FileVersion      | Text |
| OriginalFilename | Text |

**Returned object with a .plist file**

The xml file contents is parsed and keys are returned as properties of the object, preserving their types (text, boolean, number). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

#### 例題

```4d
 // アプリケーションの .exe ファイルの著作権情報を表示します (Windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info.LegalCopyright)

  // info.plistの著作権情報を表示します (Windows および macOS)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=$infoPlistFile.getAppInfo()
ALERT($info.Copyright)
```

#### 参照

[.setAppInfo()](#setappinfo)

<!-- END REF -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE document.hidden.Desc -->

<!-- INCLUDE document.isAlias.Desc -->

<!-- INCLUDE document.isFile.Desc -->

<!-- INCLUDE document.isFolder.Desc -->

<!-- INCLUDE document.isWritable.Desc -->

<!-- INCLUDE document.modificationDate.Desc -->

<!-- INCLUDE document.modificationTime.Desc -->

<!-- REF file.moveTo().Desc -->
## .moveTo()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->


<!--REF #FileClass.moveTo().Params -->
| 引数                | タイプ       |    | 説明                                    |
| ----------------- | --------- | -- | ------------------------------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー                               |
| newName           | Text      | -> | Full name for the moved file          |
| 戻り値               | 4D.File   | <- | Moved file|<!-- END REF -->


|


#### 説明

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->。

*destinationFolder* 引数が指定するフォルダーはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the *newName* parameter. 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

**返されるオブジェクト**

The moved `File` object.

#### 例題

```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```
<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

<!-- REF file.open().Desc -->
## .open()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R7 | 追加 |
</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->


<!--REF #FileClass.open().Params -->
| 引数      | タイプ                              |    | 説明                                                |
| ------- | -------------------------------- | -- | ------------------------------------------------- |
| mode    | Text                             | -> | Opening mode: "read", "write", "append"           |
| options | Object                           | -> | Opening options                                   |
| 戻り値     | [4D.FileHandle](FileHandleClass) | <- | New File handle object|<!-- END REF -->

|

#### 説明

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified *mode* or with the specified *options*<!-- END REF -->。 You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

If you use the *mode* (text) parameter, pass the opening mode for the file handle:



| *mode*   | 説明                                                                                                                                                                                                                               |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "read"   | (Default) Creates a file handle to read values from the file. If the file does not exist on disk, an error is returned. You can open as many file handles as you want in "read" mode on the same File object.                    |
| "write"  | Creates a file handle to write values to the file (starting at the beginning of the file content). If the file does not exist on disk, it is created. You can open only one file handle in "write" mode on the same File object. |
| "append" | Creates a file handle to write values to the file (starting at the end of the file content). If the file does not exist on disk, it is created. You can open only one file handle in "append" mode on the same File object.      |

> *mode* の値は、文字の大小を区別します。

If you use the *options* (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

| *options*         | タイプ            | 説明                                                                                                                            | Default       |
| ----------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `.mode`           | Text           | Opening mode (see *mode* above)                                                                                               | "read"        |
| `.charset`        | Text           | Charset used when reading from or writing to the file. Use the standard name of the set (for example "ISO-8859-1" or "UTF-8") | "UTF-8"       |
| `.breakModeRead`  | Text or Number | Processing mode for line breaks used when reading in the file (see below)                                                     | "native" or 1 |
| `.breakModeWrite` | Text or Number | Processing mode for line breaks used when writing to the file (see below)                                                     | "native" or 1 |

The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. You can use one of the following values (text or number):

| Break mode as text | Break mode as number (constant)   | 説明                                                                                                                                                             |
| ------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"           | 1 (`Document with native format`) | (Default) Line breaks are converted to the native format of the operating system: LF (line feed) under macOS, CRLF (carriage return + line feed) under Windows |
| "crlf"             | 2 (`Document with CRLF`)          | Line breaks are converted to CRLF (carriage return + line feed), the default Windows format                                                                    |
| "cr"               | 3 (`Document with CR`)            | Line breaks are converted to CR (carriage return), the default Classic Mac OS format                                                                           |
| "lf"               | 4 (`Document with LF`)            | Line breaks are converted to LF (line feed), the default Unix and macOS format                                                                                 |

> *break mode as text* の値は、文字の大小を区別します。

#### 例題

You want to create a file handle for reading the "ReadMe.txt" file:

```4d
var $f : 4D.File
var $fhandle : 4D.FileHandle

$f:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
$fhandle:=$f.open("read")

```
<!-- END REF -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- REF file.rename().Desc -->
## .rename()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->


<!--REF #FileClass.rename().Params -->
| 引数      | タイプ     |    | 説明                                      |
| ------- | ------- | -- | --------------------------------------- |
| newName | Text    | -> | New full name for the file              |
| 戻り値     | 4D.File | <- | Renamed file|<!-- END REF -->

|

#### 説明

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->。

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.

**返されるオブジェクト**

The renamed `File` object.

#### 例題

You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->
## .setAppInfo()

<details><summary>履歴</summary>

| バージョン | 内容                 |
| ----- | ------------------ |
| v20   | Support of WinIcon |
| v19   | 追加                 |
</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->


<!--REF #FileClass.setAppInfo().Params -->
| 引数   | タイプ    |    | 説明                                                                                          |
| ---- | ------ | -- | ------------------------------------------------------------------------------------------- |
| info | Object | -> | Properties to write in .exe/.dll version resource or .plist file|<!-- END REF -->

|

#### 説明

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->。

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function does nothing (no error is generated).

> この関数は xml形式の .plist ファイル (テキスト) のみをサポートしています。 バイナリ形式の .plist ファイルを対象に使用した場合、エラーが返されます。

***info* parameter object with a .exe or .dll file**

> .exe および .dll ファイル情報の書き込みは Windows上でのみ可能です。

Each valid property set in the *info* object parameter is written in the version resource of the .exe or .dll file. Available properties are (any other property will be ignored):

| プロパティ            | タイプ  | 説明                                                                                    |
| ---------------- | ---- | ------------------------------------------------------------------------------------- |
| InternalName     | Text |                                                                                       |
| ProductName      | Text |                                                                                       |
| CompanyName      | Text |                                                                                       |
| LegalCopyright   | Text |                                                                                       |
| ProductVersion   | Text |                                                                                       |
| FileDescription  | Text |                                                                                       |
| FileVersion      | Text |                                                                                       |
| OriginalFilename | Text |                                                                                       |
| WinIcon          | Text | Posix path of .ico file. This property applies only to 4D generated executable files. |

For all properties except `WinIcon`, if you pass a null or empty text as value, an empty string is written in the property. If you pass a value type different from text, it is stringified.

For the `WinIcon` property, if the icon file does not exist or has an incorrect format, an error is generated.

***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Any key name is accepted. Value types are preserved when possible.

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Other existing keys in the .plist file are left untouched.

> 日付型の値を定義するには、Xcode plist エディターのようにミリ秒を除いた ISO UTC 形式の JSONタイムスタンプ文字列 (例: "2003-02-01T01:02:03Z") を使用します。

#### 例題

```4d
  // .exe ファイルの著作権、バージョン、およびアイコン情報を設定します (Windows)
var $exeFile; $iconFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$iconFile:=File("/RESOURCES/myApp.ico")
$info:=New object
$info.LegalCopyright:="Copyright 4D 2023"
$info.ProductVersion:="1.0.0"
$info.WinIcon:=$iconFile.path
$exeFile.setAppInfo($info)
```

```4d
  // info.plist ファイルのキーをいくつか設定します (すべてのプラットフォーム)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2023" // テキスト
$info.ProductVersion:=12 // 整数
$info.ShipmentDate:="2023-04-22T06:00:00Z" // タイムスタンプ
$info.CFBundleIconFile:="myApp.icns" // macOS 用
$infoPlistFile.setAppInfo($info)
```

#### 参照

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->
## .setContent()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->


<!--REF #FileClass.setContent().Params -->
| 引数      | タイプ  |    | 説明                                                   |
| ------- | ---- | -- | ---------------------------------------------------- |
| content | BLOB | -> | New contents for the file|<!-- END REF -->

|

#### 説明

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->。 BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。

#### 例題

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->

<!-- REF file.setText().Desc -->
## .setText()

<details><summary>履歴</summary>

| バージョン  | 内容                                                      |
| ------ | ------------------------------------------------------- |
| v19 R3 | Default for new projects: no BOM and (macOS) LF for EOL |
| v17 R5 | 追加                                                      |

</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->



<!--REF #FileClass.setText().Params -->
| 引数          | タイプ     |    | 説明                                                         |
| ----------- | ------- | -- | ---------------------------------------------------------- |
| text        | Text    | -> | Text to store in the file                                  |
| charSetName | Text    | -> | 文字セットの名前                                                   |
| charSetNum  | Integer | -> | 文字セットの番号                                                   |
| breakMode   | Integer | -> | Processing mode for line breaks|<!-- END REF -->


|


#### 説明

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->。

If the file referenced in the `File` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

Optionally, you can designate the character set to be used for writing the contents. これには、次の二つの方法があります:

* *charSetName* に標準の文字セット名を含んだ文字列 ("ISO-8859-1" や "UTF-8" など) を渡します。
* *charSetNum* に標準の文字セット名の MIBEnum ID (倍長整数) を渡します。

> 4D によってサポートされている文字セットの一覧については、`CONVERT FROM TEXT` コマンドを参照ください。

If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file unless the character set used contains the suffix "-no-bom" (e.g. "UTF-8-no-bom"). If you do not specify a character set, by default 4D uses the "UTF-8" character set without BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

| 定数                            | 値 | 説明                                                                                                       |
| ----------------------------- | - | -------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0 | 何も処理をしません。                                                                                               |
| `Document with native format` | 1 | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。 macOS では LF (ラインフィード) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2 | Line breaks are converted to CRLF (carriage return + line feed), the default Windows format              |
| `Document with CR`            | 3 | Line breaks are converted to CR (carriage return), the default Classic Mac OS format                     |
| `Document with LF`            | 4 | Line breaks are converted to LF (line feed), the default Unix and macOS format                           |

*breakMode* 引数を渡さなかった場合はデフォルトで、改行はネイティブモード (1) で処理されます。

> **互換性に関する注記:** EOL (改行コード) および BOM の管理については、互換性オプションが利用可能です。 doc.4d.com の[互換性ページ](https://doc.4d.com/4dv19R/help/title/ja/page3239.html) を参照ください。

#### 例題

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
