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

### File オブジェクト

|                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;copies the `File` object into the specified *destinationFolder*                                                          |
| [**.create()** : Boolean ](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a file on disk according to the properties of the `File` object                                                                                                                                     |
| [**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates an alias (macOS) or a shortcut (Windows)                                                                 |
| [**.creationDate** : Date](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation date of the file                                                                                                                                                                         |
| [**.creationTime** : Time](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation  time of the file                                                                                                                                                                        |
| [**.delete( )**](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;deletes the file                                                                                                                                                                                                      |
| [**.exists** : Boolean](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the file exists on disk                                                                                                                                                                                |
| [**.extension** : Text](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;the extension of the file name (if any)                                                                                                                                                                     |
| [**.fullName** : Text](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;the full name of the file, including its extension (if any)                                                                                                                                                   |
| [**.getAppInfo**() : Object](#getappinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the contents of a **.exe**, **.dll** or **.plist** file information as an object                                                                                                              |
| [**.getContent( )** : 4D.Blob](#getcontent)<p>returns a `4D.Blob` object containing the entire content of a file                                                                                                                                                          |
| [**.getIcon**( { *size* : Integer } ) : Picture](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;the icon of the file                                                                                                                                                                 |
| [**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text](#gettext)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the contents of the file as text                   |
| [**.hidden** : Boolean](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the file is set as "hidden" at the system level                                                                                                                                                        |
| [**.isAlias** : Boolean](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the file is an alias, a shortcut, or a symbolic link                                                                                                                                                 |
| [**.isFile** : Boolean](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;always true for a file                                                                                                                                                                                         |
| [**.isFolder** : Boolean](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;always false for a file                                                                                                                                                                                    |
| [**.isWritable** : Boolean](#iswritable)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the file exists on disk and is writable                                                                                                                                                        |
| [**.modificationDate** : Date](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the date of the file's last modification                                                                                                                                                      |
| [**.modificationTime** : Time](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the time of the file's last modification                                                                                                                                                      |
| [**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;moves or renames the `File` object into the specified *destinationFolder*                                                                            |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name of the file without extension (if any)                                                                                                                                                                       |
| [**.original** : 4D.File<br>**.original** : 4D.Folder](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;the target element for an alias, a shortcut, or a symbolic link file                                                                                                    |
| [**.parent** : 4D.Folder](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;the parent folder object of the file                                                                                                                                                                         |
| [**.path** : Text](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;the POSIX path of the file                                                                                                                                                                                            |
| [**.platformPath** : Text](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the file expressed with the current platform syntax                                                                                                                                       |
| [**.rename**( *newName* : Text ) : 4D.File](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;renames the file with the name you passed in *newName* and returns the renamed `File` object                                                                                               |
| [**.setAppInfo**( *info* : Object )](#setappinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file                                                                                               |
| [**.setContent** ( *content* : Blob ) ](#setcontent)<p>&nbsp;&nbsp;&nbsp;&nbsp;rewrites the entire content of the file using the data stored in the *content* BLOB                                                                                                        |
| [**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } ) ](#settext)<p>&nbsp;&nbsp;&nbsp;&nbsp;writes *text* as the new contents of the file |
| [**.size** : Real](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;the size of the file expressed in bytes                                                                                                                                                                               |



## File

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**File** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.File<br>**File** ( *fileConstant* : Integer { ; *\** } ) : 4D.File

| 引数           | タイプ     |    | 説明                                             |
| ------------ | ------- |:--:| ---------------------------------------------- |
| path         | テキスト    | -> | ファイルパス                                         |
| fileConstant | 整数      | -> | 4Dファイル定数                                       |
| pathType     | 整数      | -> | `fk posix path` (デフォルト) または `fk platform path` |
| *            |         | -> | ホストデータベースのファイルを返すには * を渡します                    |
| 戻り値          | 4D.File | <- | 新規ファイルオブジェクト                                   |


#### 説明

The `File` command creates and returns a new object of the `4D.File` type. このコマンドは 2種類のシンタックスを受け入れます。

**File ( path { ; pathType } { ; \* })**

*path* には、ファイルパス文字列を渡します。 カスタムの文字列やファイルシステム (例: "/DATA/myfile.txt") を渡すことができます。

> `File` コマンドでは絶対パス名のみがサポートされます。

デフォルトで、4D は POSIXシンタックスで表現されたパスを期待します。 プラットフォームパス名 (Windows または macOS) を使用する場合、*pathType* 引数を使用してそのことを宣言する必要があります。 以下の定数を使用することができます:

| 定数               | 値 | 説明                                             |
| ---------------- | - | ---------------------------------------------- |
| fk platform path | 1 | プラットフォーム特有のシンタックスで表現されたパス (プラットフォームパス名の場合には必須) |
| fk posix path    | 0 | POSIXシンタックスで表現されたパス (デフォルト)                    |

**File ( fileConstant { ; \* } )**

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
| Last backup file                  | 2  | 任意の場所に格納されている、最終バックアップファイル (名称は: \<applicationName>[bkpNum].4BK)                                                                                                                                                                                                                            |
| Last journal integration log file | 22 | 最後のログ統合ログファイル (あれば) の完全なパス名 (復元されたアプリケーションの Logs フォルダー内に保存されます)。 このファイルは、自動修復モードにおいてログファイル統合が発生した時点で作成されます。                                                                                                                                                                                  |
| Repair log file                   | 7  | メンテナンス&セキュリティセンター (MSC) 内からデータベースに対しておこなわれたデータベース修復のログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                             |
| Request log file                  | 10 | `SET DATABASE PARAMETER(4D Server log recording)` あるいは `SET DATABASE PARAMETER(Client log recording)` コマンドによって作成された標準のクライアント/サーバーログファイル (Webリクエストは除外)。 サーバー上で実行された場合には、サーバーログが返されます (ログファイルはサーバー上の Logsフォルダーに保存されています)。 クライアントで実行された場合には、クライアントのログが返されます (ログファイルはクライアントのLogsフォルダーに保存されています)。 |
| SMTP log file                     | 15 | `SET DATABASE PARAMETER(SMTP Log)` コマンドによって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                                                                 |
| User settings file                | 3  | 設定が有効化されている場合、ストラクチャーファイルと同じ階層にある Preferences フォルダーに格納された、全データファイルの settings.4DSettings ファイル。                                                                                                                                                                                                |
| User settings file for data       | 4  | データファイルと同じ階層にある Preferences フォルダーに格納された、カレントデータファイルの settings.4DSettings ファイル。                                                                                                                                                                                                               |
| Verification log file             | 5  | `VERIFY CURRENT DATA FILE` および `VERIFY DATA FILE` コマンドによって、あるいはメンテナンス&セキュリティセンター (MSC) によって作成されたログファイル。 Logs フォルダーに保存されています。                                                                                                                                                                 |

*fileConstant* 引数で指定したファイルが存在しない場合、null オブジェクトが返されます。 エラーは生成されません。

コマンドがコンポーネントから呼び出されている場合、 * 引数を渡してホストデータベースのパスを取得するようにします。 * 引数を省略すると、常に null オブジェクトが返されます。


## 4D.File.new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

**4D.File.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.File<br>**4D.File.new** ( *fileConstant* : Integer { ; *\** } ) : 4D.File

#### 説明

The `4D.File.new()` function creates and returns a new object of the `4D.File` type. この関数の機能は、[`File`](#file) コマンドと同一です。

> `4D.File.new()` よりも、短い [`File`](#file) コマンドの使用が推奨されます。


## .copyTo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File
| 引数                | タイプ       |    | 説明                                |
| ----------------- | --------- |:--:| --------------------------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー                           |
| newName           | テキスト      | -> | コピー先フォルダーの名前                      |
| overwrite         | 整数        | -> | 既存要素を上書きするには `fk overwrite` を渡します |
| 戻り値               | 4D.File   | <- | コピーされたファイル                        |


#### 説明

The `.copyTo()` function copies the `File` object into the specified *destinationFolder* .

*destinationFolder* 引数が指定するフォルダーはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。

デフォルトで、ファイルは元の名前を維持したままコピーされます。 コピーの際にフォルダー名を変更したい場合、新しい名前を *newName* に渡します。 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

*destinationFolder* 引数が指定するフォルダー内に同じ名前のファイルが既に存在する場合、4D はデフォルトでエラーを生成します。 *overwrite* に `fk overwrite` 定数を渡すことで、既存のフォルダーを無視して上書きすることができます:

| 定数             | 値 | 説明                 |
| -------------- | - | ------------------ |
| `fk overwrite` | 4 | 既存要素があれば、それを上書きします |


**戻り値**

コピーされた `File` オブジェクト。

#### 例題

ユーザーのドキュメントフォルダーにあるピクチャーファイルを、アプリケーションフォルダー内にコピーします。

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```





## .create()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**Not available for ZIP archives**

**.create()** : Boolean
| 引数  | タイプ |    | 説明                                   |
| --- | --- | -- | ------------------------------------ |
| 戻り値 | ブール | <- | ファイルが正常に作成された場合に true、それ以外の場合は false |

#### 説明

The `.create()` function creates a file on disk according to the properties of the `File` object.

必要であれば、 関数は [platformPath](#platformpath) あるいは [path](#path) プロパティの詳細に基づいてフォルダー階層を作成します。 ファイルがディスク上にすでに存在する場合、関数は何もせず、false を返します (エラーは返されません)。

**戻り値**

*   ファイルが正常に作成された場合には **true**
*   すでに同じ名前のファイルが存在する、あるいはエラーが発生した場合には **false**

#### 例題

データベースフォルダー内にプリファレンスファイルを作成します:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```





## .createAlias()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File
| 引数                | タイプ       |    | 説明                       |
| ----------------- | --------- | -- | ------------------------ |
| destinationFolder | 4D.Folder | -> | エイリアスまたはショートカットの作成先フォルダー |
| aliasName         | テキスト      | -> | エイリアスまたはショートカットの名称       |
| aliasType         | 整数        | -> | エイリアスリンクのタイプ             |
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのファイル参照   |


#### 説明

The `.createAlias()` function creates an alias (macOS) or a shortcut (Windows) to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

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




## .creationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.creationDate** : Date

#### 説明

The `.creationDate` property returns the creation date of the file.

このプロパティは **読み取り専用** です。






## .creationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.creationTime** : Time

#### 説明

The `.creationTime` property  returns the creation  time of the file (expressed as a number of seconds beginning at 00:00).

このプロパティは **読み取り専用** です。





## .delete()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.delete( )**

| 引数 | タイプ |  | 説明                |
| -- | --- |  | ----------------- |
|    |     |  | このコマンドは引数を必要としません |


#### 説明

The `.delete()` function deletes the file.

ファイルが現在開いている場合、エラーが生成されます。

ファイルがディスク上に存在しない場合、関数は何もしません (エラーは何も生成されません)。
> **警告**: `.delete( )` はディスク上の任意のファイルを削除することができます。 これには、他のアプリケーションで作成されたドキュメントや、アプリケーションそのものも対象になります。 そのため、`.delete( )` は特に十分な注意を払って使用してください。 ファイルの削除は恒久的な操作であり取り消しできません。

#### 例題

データベースフォルダー内の特定のファイルを削除します:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("ユーザーのプリファレンスファイルが削除されました。")
 End if
```




## .exists

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.exists** : Boolean

#### 説明

The `.exists` property returns true if the file exists on disk, and false otherwise.

このプロパティは **読み取り専用** です。







## .extension

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.extension** : Text
#### 説明

The `.extension` property returns the extension of the file name (if any). 拡張子は必ず"." で始まります。 ファイル名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

このプロパティは **読み取り専用** です。






## .fullName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.fullName** : Text
#### 説明

The `.fullName` property returns the full name of the file, including its extension (if any).

このプロパティは **読み取り専用** です。




## .getAppInfo()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |
</details>

**.getAppInfo**() : Object
| 引数  | タイプ    |    | 説明                                   |
| --- | ------ | -- | ------------------------------------ |
| 戻り値 | オブジェクト | <- | .exe/.dll のバージョンリソースや .plist ファイルの中身 |


#### 説明

The `.getAppInfo()` function returns the contents of a **.exe**, **.dll** or **.plist** file information as an object.

この関数は、既存の .exe、.dll、あるいは .plist ファイルと使う必要があります。 ファイルがディスク上に存在しない、または、有効な .exe や .dll、.plist ファイルでない場合、この関数は空のオブジェクトを返します (エラーは生成されません)。

> この関数は xml形式の .plist ファイル (テキスト) のみをサポートしています。 バイナリ形式の .plist ファイルを対象に使用した場合、エラーが返されます。

**.exe または .dll ファイルの場合に返されるオブジェクト**

> .exe および .dll ファイルの読み取りは Windows上でのみ可能です。

プロパティはすべてテキストです。

| プロパティ            | タイプ  |
| ---------------- | ---- |
| InternalName     | テキスト |
| ProductName      | テキスト |
| CompanyName      | テキスト |
| LegalCopyright   | テキスト |
| ProductVersion   | テキスト |
| FileDescription  | テキスト |
| FileVersion      | テキスト |
| OriginalFilename | テキスト |

**.plist ファイルの場合に返されるオブジェクト**

xml ファイルの中身は解析され、オブジェクトのプロパティとしてキーが返されます。キーの型 (テキスト、ブール、数値) は維持されます。 `.plist dict` は JSON オブジェクトとして返されます。また、`.plist array` は JSON 配列として返されます。

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



## .getContent()

<details><summary>履歴</summary>
| バージョン  | 内容            |
| ------ | ------------- |
| v19 R2 | 4D.Blob を返します |
| v17 R5 | 追加            |
</details>

**.getContent( )** : 4D.Blob
| 引数  | タイプ     |    | 説明         |
| --- | ------- | -- | ---------- |
| 戻り値 | 4D.Blob | <- | ファイルのコンテンツ |


#### 説明

The `.getContent()` function  returns a `4D.Blob` object containing the entire content of a file. BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。

**戻り値**

`4D.Blob` オブジェクト。

#### 例題

ドキュメントの中身を `BLOB` フィールドに保存します:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) // キュメントが選択されていれば
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```






## .getIcon()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.getIcon**( { *size* : Integer } ) : Picture
| 引数   | タイプ   |    | 説明                       |
| ---- | ----- | -- | ------------------------ |
| size | 整数    | -> | 取得するピクチャーの一辺の長さ (ピクセル単位) |
| 戻り値  | ピクチャー | <- | アイコン                     |


#### 説明

The `.getIcon()` function returns the icon of the file.

任意の *size* 引数を渡すと、返されるアイコンのサイズをピクセル単位で指定することができます。 この値は、実際にはアイコンを格納している正方形の一辺の長さを表しています。 アイコンは通常、32x32ピクセル ("大きいアイコン") または 16x16ピクセル ("小さいアイコン") で定義されています。 この引数に 0 を渡すか省略した場合、"大きいアイコン" が返されます。

ファイルがディスク上に存在しない場合、デフォルトの空のアイコンが返されます。

**戻り値**

ファイルアイコンの [ピクチャー](../Concepts/picture.html)。






## .getText()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text

| 引数          | タイプ  |    | 説明               |
| ----------- | ---- | -- | ---------------- |
| charSetName | テキスト | -> | 文字セットの名前         |
| charSetNum  | 整数   | -> | 文字セットの番号         |
| breakMode   | 整数   | -> | 改行の処理モード         |
| 戻り値         | テキスト | <- | ドキュメントから取得したテキスト |


#### 説明
The `.getText()` function returns the contents of the file as text .

任意で、コンテンツの読み取りに使用する文字セットを渡します。 これには、次の二つの方法があります:

- *charSetName* に標準の文字セット名を含んだ文字列 ("ISO-8859-1" や "UTF-8" など) を渡します。
- *charSetNum* に標準の文字セット名の MIBEnum ID (倍長整数) を渡します。

> 4D によってサポートされている文字セットの一覧については、`CONVERT FROM TEXT` コマンドを参照ください。

ドキュメントにバイトオーダーマーク (BOM) が含まれている場合、4D は *charSetName* または *charSetNum* 引数で設定されている文字セットではなく、BOM で指定されたものを使用します (結果として引数は無視されます)。 ドキュメントに BOM が含まれておらず、また *charSetName* および *charSetNum* 引数が渡されなかった場合、4D はデフォルトで "UTF-8" を文字セットとして使用します。

*breakMode* には、ドキュメントの改行文字に対しておこなう処理を指定する倍長整数を渡します。 "System Documents" テーマの、以下の定数を使用することができます:

| 定数                            | 値 | 説明                                                                                                        |
| ----------------------------- | - | --------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0 | 何も処理をしません。                                                                                                |
| `Document with native format` | 1 | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。macOS では CR (キャリッジリターン) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2 | 改行は Windowsフォーマット (CRLF、キャリッジリターン＋ラインフィード) へと変換されます。                                                      |
| `Document with CR`            | 3 | 改行は macOSフォーマット (CR、キャリッジリターン) へと変換されます。                                                                  |
| `Document with LF`            | 4 | 改行は Unixフォーマット (LF、ラインフィード) へと変換されます。                                                                     |

*breakMode* 引数を渡さなかった場合はデフォルトで、改行はネイティブモード (1) で処理されます。

**戻り値**

ファイルのテキスト。

#### 例題

以下のテキストを持つドキュメントがある場合を考えます (フィールドはタブ区切りです):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

以下のコードを実行すると:


```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") // デフォルトでUTF-8
 $txt:=$myFile.getText()
```
以下の結果が得られます:

```4d
  // $Text = "id name price vat\r\n3 thé 1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"
  // \t = tab
  // \r = CR (キャリッジリターン)
```







## .hidden

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.hidden** : Boolean

#### 説明

The `.hidden` property returns true if the file is set as "hidden" at the system level, and false otherwise.

このプロパティは **読み取り専用** です。





## .isAlias

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isAlias** : Boolean

#### 説明

The `.isAlias` property returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise.

このプロパティは **読み取り専用** です。





## .isFile

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFile** : Boolean

#### 説明

The `.isFile` property returns always true for a file.

このプロパティは **読み取り専用** です。






## .isFolder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFolder** : Boolean

#### 説明

The `.isFolder` property returns always false for a file.

このプロパティは **読み取り専用** です。






## .isWritable

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isWritable** : Boolean

#### 説明

The `.isWritable` property returns true if the file exists on disk and is writable.
> このプロパティは 4Dアプリケーションがディスクに書き込めるかどうか (アクセス権限) をチェックし、ファイルの *writable* (書き込み可能) 属性のみ依存するわけではありません。

このプロパティは **読み取り専用** です。

**例題**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```






## .modificationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.modificationDate** : Date

#### 説明

The `.modificationDate` property returns the date of the file's last modification.

このプロパティは **読み取り専用** です。






## .modificationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.modificationTime** : Time

##### 説明

The `.modificationTime` property returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00).

このプロパティは **読み取り専用** です。






## .moveTo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File
| 引数                | タイプ       |    | 説明              |
| ----------------- | --------- | -- | --------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー         |
| newName           | テキスト      | -> | 移動先でのファイルの完全な名称 |
| 戻り値               | 4D.File   | <- | 移動したファイル        |


#### 説明

The `.moveTo()` function moves or renames the `File` object into the specified *destinationFolder*.

*destinationFolder* 引数が指定するフォルダーはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。

デフォルトで、移動したファイルは元の名前を維持します。 移動の際にファイル名を変更したい場合、新しい完全な名前を *newName* に渡します。 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。


**返されるオブジェクト**

移動後の `File` オブジェクト。

#### 例題


```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```




## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.name** : Text

#### 説明

The `.name` property returns the name of the file without extension (if any).

このプロパティは **読み取り専用** です。





## .original

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.original** : 4D.File<br>**.original** : 4D.Folder

#### 説明

The `.original` property returns the target element for an alias, a shortcut, or a symbolic link file. ターゲット要素は以下のいずれかです:

*   File オブジェクト
*   Folder オブジェクト

エイリアスでないファイルについては、プロパティは同じファイルオブジェクトをファイルとして返します。

このプロパティは **読み取り専用** です。





## .parent

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.parent** : 4D.Folder

#### 説明

The `.parent` property returns the parent folder object of the file. パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

このプロパティは **読み取り専用** です。





## .path

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.path** : Text

#### 説明

The `.path` property returns the POSIX path of the file. パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

このプロパティは **読み取り専用** です。





## .platformPath

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.platformPath** : Text

#### 説明

The `.platformPath` property returns the path of the file expressed with the current platform syntax.

このプロパティは **読み取り専用** です。





## .rename()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.rename**( *newName* : Text ) : 4D.File
| 引数      | タイプ     |    | 説明            |
| ------- | ------- | -- | ------------- |
| newName | テキスト    | -> | ファイルの新しい完全な名称 |
| 戻り値     | 4D.File | <- | 名称変更されたファイル   |

#### 説明

The `.rename()` function renames the file with the name you passed in *newName* and returns the renamed `File` object.

*newName* 引数は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。 同じ名前のファイルがすでに存在する場合には、エラーが返されます。

この関数はファイルの完全な名前を編集することに留意が必要です。つまり、*newName* に拡張子を渡さなかった場合、新しいファイル名には拡張子がありません。


**返されるオブジェクト**

名称変更された `File` オブジェクト。

#### 例題

"ReadMe.txt" ファイルを "ReadMe_new.txt" というファイルに名称変更します:

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```


## .setAppInfo()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |
</details>

**.setAppInfo**( *info* : Object )
| 引数   | タイプ    |    | 説明                                          |
| ---- | ------ | -- | ------------------------------------------- |
| info | オブジェクト | -> | .exe/.dll のバージョンリソースや .plist ファイルに書き込むプロパティ |


#### 説明

The `.setAppInfo()` function writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file.

この関数は、既存の .exe、.dll、あるいは .plist ファイルと使う必要があります。 ファイルがディスク上に存在しない、または、有効な .exe や .dll、.plist ファイルでない場合、この関数は何もしません (エラーは生成されません)。

> この関数は xml形式の .plist ファイル (テキスト) のみをサポートしています。 バイナリ形式の .plist ファイルを対象に使用した場合、エラーが返されます。

**.exe または .dll ファイル用の *info* オブジェクト**

> .exe および .dll ファイル情報の書き込みは Windows上でのみ可能です。

*info* オブジェクトに設定された各プロパティは .exe または .dll ファイルのバージョンリソースに書き込まれます。 以下のプロパティが使用できます (それ以外のプロパティは無視されます):

| プロパティ            | タイプ  |
| ---------------- | ---- |
| InternalName     | テキスト |
| ProductName      | テキスト |
| CompanyName      | テキスト |
| LegalCopyright   | テキスト |
| ProductVersion   | テキスト |
| FileDescription  | テキスト |
| FileVersion      | テキスト |
| OriginalFilename | テキスト |

値として null または空テキストを渡すと、空の文字列がプロパティに書き込まれます。 テキストでない型の値を渡した場合には、文字列に変換されます。


**.plist ファイル用の *info* オブジェクト**

*info* オブジェクトに設定された各プロパティは .plist ファイルにキーとして書き込まれます。 あらゆるキーの名称が受け入れられます。 値の型は可能な限り維持されます。

*info* に設定されたキーが .plist ファイル内ですでに定義されている場合は、その値が更新され、元の型が維持されます。 .plist ファイルに既存のそのほかのキーはそのまま維持されます。

> 日付型の値を定義するには、Xcode plist エディターのようにミリ秒を除いた ISO UTC 形式の JSONタイムスタンプ文字列 (例: "2003-02-01T01:02:03Z") を使用します。

#### 例題

```4d
  // .exe ファイルの著作権およびバージョン情報を設定します (Windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=New object
$info.LegalCopyright:="Copyright 4D 2021"
$info.ProductVersion:="1.0.0"
$exeFile.setAppInfo($info)
```

```4d
  // info.plist ファイルのキーをいくつか設定します (Windows および macOS)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2021" // テキスト
$info.ProductVersion:=12 // 整数
$info.ShipmentDate:="2021-04-22T06:00:00Z" // タイムスタンプ
$infoPlistFile.setAppInfo($info)
```

#### 参照

[.getAppInfo()](#getappinfo)

## .setContent()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.setContent** ( *content* : Blob )
| 引数      | タイプ  |    | 説明            |
| ------- | ---- | -- | ------------- |
| content | BLOB | -> | ファイルの新しいコンテンツ |


#### 説明

The `.setContent( )` function rewrites the entire content of the file using the data stored in the *content* BLOB. BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。


#### 例題

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```





## .setText()


<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )

| 引数          | タイプ  |    | 説明            |
| ----------- | ---- | -- | ------------- |
| text        | テキスト | -> | ファイルに保存するテキスト |
| charSetName | テキスト | -> | 文字セットの名前      |
| charSetNum  | 整数   | -> | 文字セットの番号      |
| breakMode   | 整数   | -> | 改行の処理モード      |
#### 説明

The `.setText()` function writes *text* as the new contents of the file.

`File` オブジェクトで参照されているファイルがディスク上に存在しない場合、このメソッドがそのファイルを作成します。 ディスク上にファイルが存在する場合、ファイルが開かれている場合を除き、以前のコンテンツは消去されます。ファイルが開かれている場合はコンテンツはロックされ、エラーが生成されます。

*text* には、ファイルに書き込むテキストを渡します。 テキストリテラル ("my text" など) のほか、4Dテキストフィールドや変数も渡せます。

任意で、コンテンツの書き込みに使用する文字セットを渡します。 これには、次の二つの方法があります:

- *charSetName* に標準の文字セット名を含んだ文字列 ("ISO-8859-1" や "UTF-8" など) を渡します。
- *charSetNum* に標準の文字セット名の MIBEnum ID (倍長整数) を渡します。

> 4D によってサポートされている文字セットの一覧については、`CONVERT FROM TEXT` コマンドを参照ください。

文字セットにバイトオーダーマーク (BOM) が存在し、かつその文字セットに "-no-bom" 接尾辞 (例: "UTF-8-no-bom") が含まれていない場合、4D は BOM をファイルに挿入します。 文字セットを指定しない場合、 4D はデフォルトで "UTF-8" の文字セットを使用します。

*breakMode* には、ファイルを保存する前に改行文字に対しておこなう処理を指定する倍長整数を渡します。 **System Documents** テーマ内にある、以下の定数を使用することができます:

| 定数                            | 値 | 説明                                                                                                      |
| ----------------------------- | - | ------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0 | 何も処理をしません。                                                                                              |
| `Document with native format` | 1 | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。macOS では LF (ラインフィード) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2 | 改行は Windows のデフォルトフォーマットである CRLF (キャリッジリターン＋ラインフィード) へと変換されます。                                          |
| `Document with CR`            | 3 | 改行はクラシック Mac OS のデフォルトフォーマットである CR (キャリッジリターン) へと変換されます。                                                |
| `Document with LF`            | 4 | 改行は Unix および macOS のデフォルトフォーマットである LF (ラインフィード) へと変換されます。                                               |

*breakMode* 引数を渡さなかった場合はデフォルトで、改行はネイティブモード (1) で処理されます。

> **互換性に関する注記:** EOL (改行コード) および BOM の管理については、互換性オプションが利用可能です。 doc.4d.com の[互換性ページ](https://doc.4d.com/4dv19R/help/title/ja/page3239.html) を参照ください。

#### 例題

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```





## .size

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.size** : Real

#### 説明

The `.size` property returns the size of the file expressed in bytes. ファイルがディスク上に存在しない場合、サイズは 0 になります。

このプロパティは **読み取り専用** です。





<style> h2 { background: #d9ebff;}</style>
