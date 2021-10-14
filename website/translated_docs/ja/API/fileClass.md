---
id: fileClass
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

|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;`File` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします |
| [**.create()** : Boolean ](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;`File` オブジェクトのプロパティに基づいてディスク上にファイルを作成します|
| [**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;エイリアス (macOS) またはショートカット (Windows) を作成します|
| [**.creationDate** : Date](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルの作成日|
| [**.creationTime** : Time](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルの作成時刻|
| [**.delete( )**](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルを削除します|
| [**.exists** : Boolean](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;ディスク上にファイルが存在する場合は true を返します|
| [**.extension** : Text](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイル名の拡張子|
| [**.fullName** : Text](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;拡張子 (あれば) を含めたファイルの完全な名称|
| [**.getContent( )** : Blob](#getcontent)<p>ファイルの全コンテンツを格納した BLOB を返します|
| [**.getIcon**( { *size* : Integer } ) : Picture](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルのアイコンを返します|
| [**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text](#gettext)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルのコンテンツをテキストとして返します |
| [**.hidden** : Boolean](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルがシステムレベルで "非表示" に設定されていれば true|
| [**.isAlias** : Boolean](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルがエイリアス、ショートカット、シンボリックリンクのいずれかである場合には true
|
| [**.isFile** : Boolean](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルに対しては常に true|
| [**.isFolder** : Boolean](#isFolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルに対しては常に false|
| [**.isWritable** : Boolean](#iswritable)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルがディスク上に存在し、書き込み可能な場合に true|
| [**.modificationDate** : Date](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルの最終変更日|
| [**.modificationTime** : Time](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルの最終変更時刻|
| [**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;`File` オブジェクトを *destinationFolder* が指定する移行先へと移動すると同時に、*newName* を指定した場合は名称も変更します|
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;拡張子 (あれば) を含まないファイル名|
| [**.original** : 4D.File<br>**.original** : 4D.Folder](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;エイリアス、ショートカット、シンボリックリンクファイルのターゲット要素|
| [**.parent** : 4D.Folder](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;対象ファイルの親フォルダーオブジェクト|
| [**.path** : Text](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルの POSIXパス|
| [**.platformPath** : Text](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;カレントプラットフォームのシンタックスで表現されたファイルのパス|
| [**.rename**( *newName* : Text ) : 4D.File](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイル名を *newName* に指定した名称に変更し、名称変更後の `File` オブジェクトを返します|
| [**.setContent** ( *content* : Blob ) ](#setcontent)<p>&nbsp;&nbsp;&nbsp;&nbsp;*content* 引数の BLOB に保存されているデータを使用して、ファイルの全コンテンツを上書きします|
| [**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } ) ](#settext)<p>&nbsp;&nbsp;&nbsp;&nbsp;*text* に渡されたテキストをファイルの新しいコンテンツとして書き込みます|
| [**.size** : Real](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;ファイルのサイズ (バイト単位)|



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
| fileConstant | Integer | -> | 4Dファイル定数                                       |
| pathType     | Integer | -> | `fk posix path` (デフォルト) または `fk platform path` |
| *            |         | -> | ホストデータベースのファイルを返すには * を渡します                    |
| 戻り値          | 4D.File | <- | 新規ファイルオブジェクト                                   |


#### 説明

`File` コマンドは、 `4D.File` 型の新しいオブジェクトを作成して返します。 このコマンドは 2種類のシンタックスを受け入れます。

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

`4D.File.new()` 関数は、 `4D.File` 型の新しいオブジェクトを作成して返します。 この関数の機能は、[`File`](#file) コマンドと同一です。

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
| overwrite         | Integer   | -> | 既存要素を上書きするには `fk overwrite` を渡します |
| 戻り値               | 4D.File   | <- | コピーされたファイル                        |


#### 説明

`.copyTo()` 関数は、 `File` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします 。

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

**ZIPアーカイブには利用できません**

**.create()** : Boolean 
| 引数  | タイプ |    | 説明                                   |
| --- | --- | -- | ------------------------------------ |
| 戻り値 | ブール | <- | ファイルが正常に作成された場合に true、それ以外の場合は false |

#### 説明

`.create()` 関数は、 `File` オブジェクトのプロパティに基づいてディスク上にファイルを作成します。

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
| aliasType         | Integer   | -> | エイリアスリンクのタイプ             |
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのファイル参照   |


#### 説明

`.createAlias()` 関数は、*destinationFolder* オブジェクトで指定されたフォルダー内に、*aliasName* が指定する名称で、対象ファイルへの エイリアス (macOS) またはショートカット (Windows) を作成します 。

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

`.creationDate` プロパティは、 ファイルの作成日を返します。

このプロパティは **読み取り専用** です。 






## .creationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.creationTime** : Time

#### 説明

`.creationTime` プロパティは、 ファイルの作成時刻 を返します (00:00 からの経過秒数の形式)。

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

`.delete()` 関数は、 ファイルを削除します。

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

`.exists` プロパティは、 ディスク上にファイルが存在する場合は true を返します(それ以外の場合は false)。

このプロパティは **読み取り専用** です。 







## .extension

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.extension** : Text
#### 説明

`.extension` プロパティは、 ファイル名の拡張子を返します (あれば)。 拡張子は必ず"." で始まります。 ファイル名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

このプロパティは **読み取り専用** です。 






## .fullName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.fullName** : Text
#### 説明

`.fullName` プロパティは、 拡張子 (あれば) を含めたファイルの完全な名称を返します。

このプロパティは **読み取り専用** です。 






## .getContent()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.getContent( )** : Blob
| 引数  | タイプ  |    | 説明         |
| --- | ---- | -- | ---------- |
| 戻り値 | BLOB | <- | ファイルのコンテンツ |


#### 説明

`.getContent()` 関数は、  ファイルの全コンテンツを格納した BLOB を返します。 BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。

**戻り値**

`Blob`。

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
| 引数   | タイプ     |    | 説明                       |
| ---- | ------- | -- | ------------------------ |
| size | Integer | -> | 取得するピクチャーの一辺の長さ (ピクセル単位) |
| 戻り値  | ピクチャー   | <- | アイコン                     |


#### 説明

`.getIcon()` 関数は、 ファイルのアイコンを返します。

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

| 引数          | タイプ     |    | 説明               |
| ----------- | ------- | -- | ---------------- |
| charSetName | テキスト    | -> | 文字セットの名前         |
| charSetNum  | Integer | -> | 文字セットの番号         |
| breakMode   | Integer | -> | 改行の処理モード         |
| 戻り値         | テキスト    | <- | ドキュメントから取得したテキスト |


#### 説明
`.getText()` 関数は、 ファイルのコンテンツをテキストとして返します 。

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

`.hidden` プロパティは、 ファイルがシステムレベルで "非表示" に設定されていれば trueを返します (それ以外の場合は false)。

このプロパティは **読み取り専用** です。 





## .isAlias

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isAlias** : Boolean

#### 説明

`.isAlias` プロパティは、 ファイルがエイリアス、ショートカット、シンボリックリンクのいずれかである場合には trueを返し、それ以外の場合には false を返します。

このプロパティは **読み取り専用** です。 





## .isFile

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFile** : Boolean

#### 説明

`.isFile` プロパティは、 ファイルに対しては常に trueを返します。

このプロパティは **読み取り専用** です。 






## .isFolder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFolder** : Boolean

#### 説明

`.isFolder` プロパティは、 ファイルに対しては常に falseを返します。

このプロパティは **読み取り専用** です。 






## .isWritable

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isWritable** : Boolean

#### 説明

`.isWritable` プロパティは、 ファイルがディスク上に存在し、書き込み可能な場合に trueを返します。
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

`.modificationDate` プロパティは、 ファイルの最終変更日を返します。

このプロパティは **読み取り専用** です。 






## .modificationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.modificationTime** : Time

##### 説明

`.modificationTime` プロパティは、 ファイルの最終変更時刻 を返します (00:00 からの経過秒数の形式)。

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

`.moveTo()` 関数は、 `File` オブジェクトを *destinationFolder* が指定する移行先へと移動すると同時に、*newName* を指定した場合は名称も変更します。

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

`.name` プロパティは、 拡張子 (あれば) を含まないファイル名を返します。

このプロパティは **読み取り専用** です。 





## .original

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.original** : 4D.File<br>**.original** : 4D.Folder

#### 説明

`.original` プロパティは、 エイリアス、ショートカット、シンボリックリンクファイルのターゲット要素を返します。 ターゲット要素は以下のいずれかです:

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

`.parent` プロパティは、 対象ファイルの親フォルダーオブジェクトを返します。 パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

このプロパティは **読み取り専用** です。 





## .path

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.path** : Text

#### 説明

`.path` プロパティは、 ファイルの POSIXパスを返します。 パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

このプロパティは **読み取り専用** です。 





## .platformPath

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.platformPath** : Text

#### 説明

`.platformPath` プロパティは、 カレントプラットフォームのシンタックスで表現されたファイルのパスを返します。

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

`.rename()` 関数は、 ファイル名を *newName* に指定した名称に変更し、名称変更後の `File` オブジェクトを返します。

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

`.setContent( )` 関数は、 *content* 引数の BLOB に保存されているデータを使用して、ファイルの全コンテンツを上書きします。 BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。


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

| 引数          | タイプ     |    | 説明                                 |
| ----------- | ------- | -- | ---------------------------------- |
| text        | テキスト    | -> | ファイルに保存するテキスト                      |
| charSetName | テキスト    | -> | 文字セットの名前                           |
| charSetNum  | Integer | -> | 文字セットの番号                           |
| breakMode   | Integer | -> | 改行の処理モード
|

#### 説明

`.setText()` 関数は、 *text* に渡されたテキストをファイルの新しいコンテンツとして書き込みます。

`File` オブジェクトで参照されているファイルがディスク上に存在しない場合、このメソッドがそのファイルを作成します。 ディスク上にファイルが存在する場合、ファイルが開かれている場合を除き、以前のコンテンツは消去されます。ファイルが開かれている場合はコンテンツはロックされ、エラーが生成されます。

*text* には、ファイルに書き込むテキストを渡します。 テキストリテラル ("my text" など) のほか、4Dテキストフィールドや変数も渡せます。

任意で、コンテンツの書き込みに使用する文字セットを渡します。 これには、次の二つの方法があります:

- *charSetName* に標準の文字セット名を含んだ文字列 ("ISO-8859-1" や "UTF-8" など) を渡します。
- *charSetNum* に標準の文字セット名の MIBEnum ID (倍長整数) を渡します。

> 4D によってサポートされている文字セットの一覧については、`CONVERT FROM TEXT` コマンドを参照ください。

文字セットのバイトオーダーマーク (BOM) が存在する場合、4D はそれもファイルに挿入します。 文字セットを指定しない場合、 4D はデフォルトで "UTF-8" の文字セットと BOM を使用します。

*breakMode* には、ファイルを保存する前に改行文字に対しておこなう処理を指定する倍長整数を渡します。 **System Documents** テーマ内にある、以下の定数を使用することができます:

| 定数                            | 値 | 説明                                                                                                        |
| ----------------------------- | - | --------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0 | 何も処理をしません。                                                                                                |
| `Document with native format` | 1 | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。macOS では CR (キャリッジリターン) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2 | 改行は Windowsフォーマット (CRLF、キャリッジリターン＋ラインフィード) へと変換されます。                                                      |
| `Document with CR`            | 3 | 改行は macOSフォーマット (CR、キャリッジリターン) へと変換されます。                                                                  |
| `Document with LF`            | 4 | 改行は Unixフォーマット (LF、ラインフィード) へと変換されます。                                                                     |

*breakMode* 引数を渡さなかった場合はデフォルトで、改行はネイティブモード (1) で処理されます。



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

`.size` プロパティは、 ファイルのサイズ (バイト単位)を返します。 ファイルがディスク上に存在しない場合、サイズは 0 になります。

このプロパティは **読み取り専用** です。 





<style> h2 { background: #d9ebff;}</style>
