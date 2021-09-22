---
id: FolderClass
title: Folder
---



`Folder` オブジェクトは [`Folder`](#folder) コマンドによって作成されます。 これらのオブジェクトには、(実在しているか否かに関わらず) フォルダーへの参照が格納されます。 たとえば、新規フォルダーを作成するために `Folder` コマンドを実行した場合、有効な `Folder` オブジェクトが作成されますが、[`folder.create()`](#create) 関数を呼び出すまで、ディスク上にはなにも保存されていません。

### 例題

"JohnSmith" フォルダーを作成します:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Folder オブジェクト

|                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;copies the `Folder` object into the specified *destinationFolder* |
| [**.create()** : Boolean](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a folder on disk according to the properties of the `Folder` object                                                                             |
| [**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates an alias (macOS) or a shortcut (Windows)            |
| [**.creationDate** : Date](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation date of the folder                                                                                                                  |
| [**.creationTime** : Time](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the creation time of the folder                                                                                                                  |
| [**.delete**( { *option* : Integer } )](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;deletes the folder                                                                                                                        |
| [**.exists** : Boolean](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the folder exists on disk                                                                                                                         |
| [**.extension** : Text](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the extension of the folder name (if any)                                                                                                      |
| [**.fullName** : Text](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the full name of the folder, including its extension (if any)                                                                                    |
| [**.getIcon**( { *size* : Integer } ) : Picture](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the icon of the folder                                                                                                  |
| [**.hidden** : Boolean](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp; true if the folder is set as "hidden" at the system level                                                                                                |
| [**.isAlias** : Boolean](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **false** for a `Folder` object                                                                                                                  |
| [**.isFile** : Boolean](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **false** for a folder                                                                                                                             |
| [**.isFolder** : Boolean](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;always **true** for a folder                                                                                                                          |
| [**.isPackage** : Boolean](#ispackage)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the folder is a package on macOS  (and exists on disk)                                                                                      |
| [**.modificationDate** : Date](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp; the date of the folder's last modification                                                                                              |
| [**.modificationTime** : Time](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;the time of the folder's last modification                                                                                               |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp; the name of the folder, without extension (if any)                                                                                                              |
| [**.original** : 4D.Folder](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;the same Folder object as the folder                                                                                                                |
| [**.parent** : 4D.Folder](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;the parent folder object of the folder                                                                                                                  |
| [**.path** : Text](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;the POSIX path of the folder                                                                                                                                     |
| [**.platformPath** : Text](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the folder expressed with the current platform syntax                                                                                |
| [**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;moves or renames the `Folder` object (source folder) into the specified *destinationFolder*   |
| [**.rename**( *newName* : Text ) : 4D.Folder](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;renames the folder with the name you passed in *newName* and returns the renamed `Folder` object                                    |



## Folder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**Folder** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder

| 引数             | タイプ       |    | 説明                                             |
| -------------- | --------- |:--:| ---------------------------------------------- |
| path           | テキスト      | -> | フォルダーパス                                        |
| folderConstant | 整数        | -> | 4Dフォルダー定数                                      |
| pathType       | 整数        | -> | `fk posix path` (デフォルト) または `fk platform path` |
| *              |           | -> | ホストデータベースのフォルダーを返すには * を渡します                   |
| 戻り値            | 4D.Folder | <- | 新規フォルダーオブジェクト                                  |


#### 説明

The `Folder` command creates and returns a new object of the `4D.Folder` type. このコマンドは 2種類のシンタックスを受け入れます。

**Folder ( path { ; pathType } { ; \* } )**

*path* には、フォルダーパス文字列を渡します。 カスタムの文字列やファイルシステム (例: "/DATA") を渡すことができます。

> `Folder` コマンドでは絶対パス名のみがサポートされます。

デフォルトで、4D は POSIXシンタックスで表現されたパスを期待します。 プラットフォームパス名 (Windows または macOS) を使用する場合、*pathType* 引数を使用してそのことを宣言する必要があります。 以下の定数を使用することができます:

| 定数               | 値 | 説明                                             |
| ---------------- | - | ---------------------------------------------- |
| fk platform path | 1 | プラットフォーム特有のシンタックスで表現されたパス (プラットフォームパス名の場合には必須) |
| fk posix path    | 0 | POSIXシンタックスで表現されたパス (デフォルト)                    |

**Folder ( folderConstant { ; \* } )**

*folderConstant* には、以下の定数のどれか一つを指定して 4Dビルトインの、またはシステムフォルダーを渡します:

| 定数                         | 値   | 説明                                                                       |
| -------------------------- | --- | ------------------------------------------------------------------------ |
| fk applications folder     | 116 |                                                                          |
| fk data folder             | 9   | 関連づけられたファイルシステム: "/DATA"                                                 |
| fk database folder         | 4   | 関連づけられたファイルシステム: "/PACKAGE"                                              |
| fk desktop folder          | 115 |                                                                          |
| fk documents folder        | 117 | ユーザーのドキュメントフォルダー                                                         |
| fk licenses folder         | 1   | マシンの 4Dライセンスファイルを格納しているフォルダー                                             |
| fk logs folder             | 7   | 関連づけられたファイルシステム: "/LOGS"                                                 |
| fk mobileApps folder       | 10  | 関連づけられたファイルシステム: "/DATA"                                                 |
| fk remote database folder  | 3   | それぞれの 4Dリモートマシン上に作成された 4Dデータベースフォルダー                                     |
| fk resources folder        | 6   | 関連づけられたファイルシステム: "/RESOURCES"                                            |
| fk system folder           | 100 |                                                                          |
| fk user preferences folder | 0   | ユーザー環境設定ファイルを \<userName> ディレクトリに保存している 4Dフォルダー                         |
| fk web root folder         | 8   | データベースのカレントの Webルートフォルダー: ただし "/PACKAGE/path" のパッケージ内にある場合。そうでない場合はフルパス。 |

コマンドがコンポーネントから呼び出されている場合、 * 引数を渡してホストデータベースのパスを取得するようにします。 * 引数を省略すると、常に null オブジェクトが返されます。


## 4D.Folder.new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**4D.Folder.new** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder

#### 説明

The `4D.Folder.new()` function creates and returns a new object of the `4D.Folder` type. この関数の機能は、[`Folder`](#folder) コマンドと同一です。

> `4D.Folder.new()` よりも、短い [`Folder`](#folder) コマンドの使用が推奨されます。


## .copyTo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder
| 引数                | タイプ       |    | 説明                                |
| ----------------- | --------- |:--:| --------------------------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー                           |
| newName           | テキスト      | -> | コピー先フォルダーの名前                      |
| overwrite         | 整数        | -> | 既存要素を上書きするには `fk overwrite` を渡します |
| 戻り値               | 4D.Folder | <- | コピーされたフォルダー                       |


#### 説明

The `.copyTo()` function copies the `Folder` object into the specified *destinationFolder*.

*destinationFolder* 引数が指定するフォルダーはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。

デフォルトで、フォルダーは元の名前を維持したままコピーされます。 コピーの際にフォルダー名を変更したい場合、新しい名前を *newName* に渡します。 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

*destinationFolder* 引数が指定するフォルダー内に同じ名前のフォルダーが既に存在する場合、4D はデフォルトでエラーを生成します。 *overwrite* に `fk overwrite` 定数を渡すことで、既存のフォルダーを無視して上書きすることができます:

| 定数             | 値 | 説明                 |
| -------------- | - | ------------------ |
| `fk overwrite` | 4 | 既存要素があれば、それを上書きします |


**戻り値**

コピーされた `Folder` オブジェクト。

#### 例題

ユーザーのドキュメントフォルダーにあるピクチャーフォルダーを、データベースフォルダー内にコピーします。

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```





## .create()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>



**.create()** : Boolean
| 引数  | タイプ |    | 説明                                     |
| --- | --- | -- | -------------------------------------- |
| 戻り値 | ブール | <- | フォルダーが正常に作成された場合には true、それ以外の場合は false |



#### 説明

The `.create()` function creates a folder on disk according to the properties of the `Folder` object.

必要であれば、 関数は [platformPath](#platformpath) あるいは [path](#path) プロパティの詳細に基づいてフォルダー階層を作成します。 フォルダーがディスク上にすでに存在する場合、関数は何もせず、false を返します (エラーは返されません)。

**戻り値**

*   フォルダーが正常に作成された場合には **true**
*   すでに同じ名前のフォルダーが存在する、あるいはエラーが発生した場合には **false**

#### 例題 1

データベースフォルダー内に空のフォルダーを作成します:

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### 例題 2

データベースフォルダー内に "/Archives2019/January/" フォルダーを作成します:

```4d
$newFolder:=Folder("/PACKAGE/Archives2019/January")
If($newFolder.create())
    ALERT($newFolder.name+" フォルダーが作成されました。")
Else
    ALERT($newFolder.name+" フォルダーは作成できませんでした。")
End if
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
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのフォルダー参照  |


#### 説明

The `.createAlias()` function creates an alias (macOS) or a shortcut (Windows) to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

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

データベースフォルダー内のアーカイブフォルダーへのエイリアスを作成します:

```4d
$myFolder:=Folder("C:\\Documents\\Archives\\2019\\January";fk platform path)
$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")
```


## .creationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.creationDate** : Date

#### 説明

The `.creationDate` property returns the creation date of the folder.

このプロパティは **読み取り専用** です。




## .creationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.creationTime** : Time


#### 説明

The `.creationTime` property returns the creation time of the folder (expressed as a number of seconds beginning at 00:00).

このプロパティは **読み取り専用** です。





## .delete()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>



**.delete**( { *option* : Integer } )

| 引数    | タイプ |    | 説明            |
| ----- | --- | -- | ------------- |
| オプション | 整数  | -> | フォルダー削除のオプション |



#### 説明

The `.delete()` function deletes the folder.

セキュリティ上の理由から、option 引数を渡さなかった場合はデフォルトで、`.delete()` は空のフォルダーしか削除しません。 空でないフォルダーを削除するには、以下の定数のいずれか一つを option 引数として渡す必要があります:

| 定数                     | 値 | 説明                |
| ---------------------- | - | ----------------- |
| `Delete only if empty` | 0 | フォルダーが空の場合のみ削除します |
| `Delete with contents` | 1 | フォルダーを中身ごと削除します   |

`Delete only if empty` が渡された、または option 引数を渡さなかった場合:

*   フォルダーが空の場合にしか削除されません。そうでない場合、コマンドは何もせず、エラー-47 が生成されます。
*   フォルダーが存在しない場合、エラー-120 が生成されます。

`Delete with contents` を渡した場合:

*   フォルダーと、その中身がすべて削除されます。 **警告**: フォルダーまたはその中身がロックされている、あるいは読み取り専用に設定されていたとしても、カレントユーザーが適切なアクセス権を持っていた場合には、フォルダーはその中身ごと削除されます。
*   このフォルダー、またはその中のフォルダーのどいずれかが削除できなかった場合、削除できない要素が検知された時点で削除は中止され、エラー(*) が返されます。 このとき、フォルダーは途中までしか削除されていない可能性があります。 削除が中止された場合、`GET LAST ERROR STACK` コマンドを使用して原因となったファイルの名前とパスを取得することができます。
*   フォルダーが存在しない場合、コマンドは何もせず、エラーは返されません。 <br /><br /> (*) Windowsの場合: -54 (ロックされたファイルを書き込みのために開こうとした)<br /> macOSの場合: -45 (ファイルはロックされていたか不正なパス名)




## .exists

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.exists** : Boolean

#### 説明

The `.exists` property returns true if the folder exists on disk, and false otherwise.

このプロパティは **読み取り専用** です。





## .extension

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.extension** : Text

#### 説明

The `.extension` property returns the extension of the folder name (if any). 拡張子は必ず"." で始まります。 フォルダー名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

このプロパティは **読み取り専用** です。





## .file()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.file**( *path* : Text ) : 4D.File
| 引数   | タイプ     |    | 説明                              |
| ---- | ------- | -- | ------------------------------- |
| path | テキスト    | -> | ファイルのPOSIX相対パス名                 |
| 戻り値  | 4D.File | <- | `File` オブジェクト (無効なパスの場合には null) |

#### 説明

The `.file()` function creates a `File` object inside the `Folder` object and returns its reference.

*path* には、返すべきファイルの相対的パスを POSIX 形式で渡します。 このパスは、親フォルダーを起点として評価されます。

**戻り値**

`File` オブジェクト (無効な *path* の場合には null)。

#### 例題

```4d
var $myPDF : 4D.File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```





## .files()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.files**( { *options* : Integer } ) : Collection
| 引数      | タイプ    |    | 説明                 |
| ------- | ------ | -- | ------------------ |
| options | 整数     | -> | ファイルリストのオプション      |
| 戻り値     | コレクション | <- | 子ファイルオブジェクトのコレクション |

#### 説明

The `.files()` function returns a collection of `File` objects contained in the folder.
> エイリアスまたはシンボリックリンクは解決されません。

*options*引数を渡さなかった場合はデフォルトで、フォルダーの第一階層にあるファイルのみがコレクションに返されます。これには非表示のファイルや、フォルダーも含まれます。 *options* 引数に以下の定数を一つ以上渡すことで、このふるまいを変更することができます:

| 定数                    | 値 | 説明                                          |
| --------------------- | - | ------------------------------------------- |
| `fk recursive`        | 1 | コレクションには、指定フォルダーとそのサブフォルダーのファイル/フォルダーが含まれます |
| `fk ignore invisible` | 8 | 非表示設定のファイルやフォルダーは表示されません                    |

**戻り値**

`File` オブジェクトのコレクション。

#### 例題 1

データベースフォルダー内に非表示ファイルがないかどうかを調べます:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("データベースフォルダーには非表示のファイルが存在します。")
 End if
```

#### 例題 2

ドキュメントフォルダー内にある、非表示でないファイルをすべて取得します:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```





## .folder()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.folder**( *path* : Text ) : 4D.Folder
| 引数   | タイプ       |    | 説明                                            |
| ---- | --------- | -- | --------------------------------------------- |
| path | テキスト      | -> | ファイルのPOSIX相対パス名                               |
| 戻り値  | 4D.Folder | <- | 作成された `Folder` オブジェクト (無効な *path* の場合には null) |

#### 説明

The `.folder()` function creates a `Folder` object inside the parent `Folder` object and returns its reference.

*path* には、返すべきフォルダーの相対的パスを POSIX 形式で渡します。 このパスは、親フォルダーを起点として評価されます。

**戻り値**

`Folder` オブジェクト (無効な *path* の場合には null)。

#### 例題

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```





## .folders()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.folders**( { *options* : Integer } ) : Collection
| 引数      | タイプ    |    | 説明                  |
| ------- | ------ | -- | ------------------- |
| options | 整数     | -> | フォルダーリストのオプション      |
| 戻り値     | コレクション | <- | 子フォルダーオブジェクトのコレクション |

#### 説明

The `.folders()` function returns a collection of `Folder` objects contained in the parent folder.

*options*引数を渡さなかった場合はデフォルトで、フォルダーの第一階層にあるフォルダーのみがコレクションに返されます。 *options* 引数に以下の定数を一つ以上渡すことで、このふるまいを変更することができます:

| 定数                    | 値 | 説明                                          |
| --------------------- | - | ------------------------------------------- |
| `fk recursive`        | 1 | コレクションには、指定フォルダーとそのサブフォルダーのファイル/フォルダーが含まれます |
| `fk ignore invisible` | 8 | 非表示設定のファイルやフォルダーは表示されません                    |

**戻り値**

`Folder` オブジェクトのコレクション。

#### 例題

データベースフォルダー内にあるすべてのフォルダーおよびサブフォルダーのコレクションを取得します:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```





## .fullName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.fullName** : Text

#### 説明

The `.fullName` property returns the full name of the folder, including its extension (if any).

このプロパティは **読み取り専用** です。





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

The `.getIcon()` function returns the icon of the folder.

任意の *size* 引数を渡すと、返されるアイコンのサイズをピクセル単位で指定することができます。 この値は、実際にはアイコンを格納している正方形の一辺の長さを表しています。 アイコンは通常、32x32ピクセル ("大きいアイコン") または 16x16ピクセル ("小さいアイコン") で定義されています。 この引数に 0 を渡すか省略した場合、"大きいアイコン" が返されます。

フォルダーがディスク上に存在しない場合、デフォルトの空のアイコンが返されます。

**戻り値**

フォルダーアイコンの [ピクチャー](Concepts/dt_picture.md)。





## .hidden

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.hidden** : Boolean

#### 説明

The `.hidden` property returns  true if the folder is set as "hidden" at the system level, and false otherwise.

このプロパティは **読み取り専用** です。






## .isAlias

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isAlias** : Boolean


#### 説明

The `.isAlias` property returns always **false** for a `Folder` object.

このプロパティは **読み取り専用** です。






## .isFile

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFile** : Boolean

#### 説明

The `.isFile` property returns always **false** for a folder.

このプロパティは **読み取り専用** です。






## .isFolder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFolder** : Boolean

#### 説明

The `.isFolder` property returns always **true** for a folder.

このプロパティは **読み取り専用** です。






## .isPackage

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isPackage** : Boolean

#### 説明

The `.isPackage` property returns true if the folder is a package on macOS  (and exists on disk). それ以外の場合は false を返します。

Windows 上においては、`.isPackage` は常に **false** を返します。

このプロパティは **読み取り専用** です。






## .modificationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.modificationDate** : Date

#### 説明

The `.modificationDate` property returns  the date of the folder's last modification.

このプロパティは **読み取り専用** です。






## .modificationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.modificationTime** : Time

#### 説明

The `.modificationTime` property returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00).

このプロパティは **読み取り専用** です。






## .moveTo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder
| 引数                | タイプ       |    | 説明               |
| ----------------- | --------- | -- | ---------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー          |
| newName           | テキスト      | -> | 移動先でのフォルダーの完全な名称 |
| 戻り値               | 4D.Folder | <- | 移動したフォルダー        |


#### 説明

The `.moveTo( )` function moves or renames the `Folder` object (source folder) into the specified *destinationFolder*.

*destinationFolder* 引数が指定するフォルダーはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。

デフォルトで、移動したフォルダーは元の名前を維持します。 移動の際にフォルダー名を変更したい場合、新しい完全な名前を *newName* に渡します。 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

**返されるオブジェクト**

移動後の `Folder` オブジェクト。

#### 例題

フォルダーを移動し、名称も変更します:

```4d
 var $tomove; $moved : Object
 $docs:=Folder(fk documents folder)
 $tomove:=$docs.folder("Pictures")
 $tomove2:=$tomove.moveTo($docs.folder("Archives");"Pic_Archives")
```


## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>



**.name** : Text

#### 説明

The `.name` property returns  the name of the folder, without extension (if any).

このプロパティは **読み取り専用** です。






## .original

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.original** : 4D.Folder

#### 説明

The `.original` property returns the same Folder object as the folder.

このプロパティは **読み取り専用** です。
> このプロパティは、フォルダーやファイルを処理する汎用的なコードを書くために使用できます。






## .parent

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.parent** : 4D.Folder

#### 説明

The `.parent` property returns the parent folder object of the folder. パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

親フォルダーが存在しない場合 (root) は、このプロパティは null値を返します。

このプロパティは **読み取り専用** です。






## .path

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.path** : Text

#### 説明

The `.path` property returns the POSIX path of the folder. パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

このプロパティは **読み取り専用** です。





## .platformPath

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.platformPath** : Text

#### 説明

The `.platformPath` property returns the path of the folder expressed with the current platform syntax.

このプロパティは **読み取り専用** です。






## .rename()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.rename**( *newName* : Text ) : 4D.Folder

| 引数      | タイプ       |    | 説明             |
| ------- | --------- | -- | -------------- |
| newName | テキスト      | -> | フォルダーの新しい完全な名称 |
| 戻り値     | 4D.Folder | <- | 名称変更されたフォルダー   |



#### 説明

The `.rename()` function renames the folder with the name you passed in *newName* and returns the renamed `Folder` object.

*newName* 引数は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。 同じ名前のファイルがすでに存在する場合には、エラーが返されます。


**返されるオブジェクト**

名称変更された `Folder` オブジェクト。

#### 例題


```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<style> h2 { background: #d9ebff;}</style>
