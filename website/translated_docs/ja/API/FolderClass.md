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

|                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;`Folder` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします|
| [**.create()** : Boolean](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;`Folder` オブジェクトのプロパティに基づいてディスク上にフォルダーを作成します|
| [**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;エイリアス (macOS) またはショートカット (Windows) を作成します |
| [**.creationDate** : Date](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーの作成日|
| [**.creationTime** : Time](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーの作成時刻|
| [**.delete**( { *option* : Integer } )](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーを削除します|
| [**.exists** : Boolean](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;ディスク上にフォルダーが存在する場合は true|
| [**.extension** : Text](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダー名の拡張子|
| [**.fullName** : Text](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;拡張子 (あれば) を含めたフォルダーの完全な名称|
| [**.getIcon**( { *size* : Integer } ) : Picture](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーのアイコンを返します|
| [**.hidden** : Boolean](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp; フォルダーがシステムレベルで "非表示" に設定されていれば true|
| [**.isAlias** : Boolean](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;`Folder` オブジェクトに対しては常に **false**|
| [**.isFile** : Boolean](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーに対しては常に **false**|
| [**.isFolder** : Boolean](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーに対しては常に **true**|
| [**.isPackage** : Boolean](#ispackage)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーが macOS上のパッケージである (かつディスク上に存在している) 場合に true|
| [**.modificationDate** : Date](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp; フォルダーの最終変更日|
| [**.modificationTime** : Time](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーの最終変更時刻|
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp; 拡張子 (あれば) を含まないフォルダー名|
| [**.original** : 4D.Folder](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;対象フォルダーと同じフォルダーオブジェクト|
| [**.parent** : 4D.Folder](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;対象フォルダーの親フォルダーオブジェクト|
| [**.path** : Text](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダーの POSIXパス|
| [**.platformPath** : Text](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;カレントプラットフォームのシンタックスで表現されたフォルダーのパス|
| [**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;`Folder` オブジェクト (ソースフォルダー) を *destinationFolder* が指定する移行先へと移動すると同時に、*newName* を指定した場合は名称も変更します|
| [**.rename**( *newName* : Text ) : 4D.Folder](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;フォルダー名を *newName* に指定した名称に変更し、名称変更後の `Folder` オブジェクトを返します|



## Folder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**Folder** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder

| 引数             | タイプ       |    | 説明                                             |
| -------------- | --------- |:--:| ---------------------------------------------- |
| path           | Text      | -> | フォルダーパス                                        |
| folderConstant | Integer   | -> | 4Dフォルダー定数                                      |
| pathType       | Integer   | -> | `fk posix path` (デフォルト) または `fk platform path` |
| *              |           | -> | ホストデータベースのフォルダーを返すには * を渡します                   |
| 戻り値            | 4D.Folder | <- | 新規フォルダーオブジェクト                                  |


#### 説明

`Folder` コマンドは、 `4D.Folder` 型の新しいオブジェクトを作成して返します。 このコマンドは 2種類のシンタックスを受け入れます。

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

`4D.Folder.new()` 関数は、 `4D.Folder` 型の新しいオブジェクトを作成して返します。 この関数の機能は、[`Folder`](#folder) コマンドと同一です。

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
| newName           | Text      | -> | コピー先フォルダーの名前                      |
| overwrite         | Integer   | -> | 既存要素を上書きするには `fk overwrite` を渡します |
| 戻り値               | 4D.Folder | <- | コピーされたフォルダー                       |


#### 説明

`.copyTo()` 関数は、 `Folder` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします。

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
| 引数  | タイプ     |    | 説明                                     |
| --- | ------- | -- | -------------------------------------- |
| 戻り値 | Boolean | <- | フォルダーが正常に作成された場合には true、それ以外の場合は false |



#### 説明

`.create()` 関数は、 `Folder` オブジェクトのプロパティに基づいてディスク上にフォルダーを作成します。

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
| aliasName         | Text      | -> | エイリアスまたはショートカットの名称       |
| aliasType         | Integer   | -> | エイリアスリンクのタイプ             |
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのフォルダー参照  |


#### 説明

`.createAlias()` 関数は、*destinationFolder* オブジェクトで指定されたフォルダー内に、*aliasName* が指定する名称で、対象フォルダーへの エイリアス (macOS) またはショートカット (Windows) を作成します 。

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

`.creationDate` プロパティは、 フォルダーの作成日を返します。

このプロパティは **読み取り専用** です。 




## .creationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.creationTime** : Time


#### 説明

`.creationTime` プロパティは、 フォルダーの作成時刻 を返します (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。 





## .delete()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>



**.delete**( { *option* : Integer } )

| 引数    | タイプ     |    | 説明            |
| ----- | ------- | -- | ------------- |
| オプション | Integer | -> | フォルダー削除のオプション |



#### 説明

`.delete()` 関数は、 フォルダーを削除します。

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

`.exists` プロパティは、 ディスク上にフォルダーが存在する場合は trueを返します (それ以外の場合は false)。

このプロパティは **読み取り専用** です。 





## .extension

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.extension** : Text

#### 説明

`.extension` プロパティは、 フォルダー名の拡張子を返します (あれば)。 拡張子は必ず"." で始まります。 フォルダー名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

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
| path | Text    | -> | ファイルのPOSIX相対パス名                 |
| 戻り値  | 4D.File | <- | `File` オブジェクト (無効なパスの場合には null) |

#### 説明

`.file()` 関数は、 `Folder` オブジェクト内に `File` オブジェクトを作成し、その参照を返します。

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
| 引数      | タイプ        |    | 説明                 |
| ------- | ---------- | -- | ------------------ |
| options | Integer    | -> | ファイルリストのオプション      |
| 戻り値     | Collection | <- | 子ファイルオブジェクトのコレクション |

#### 説明

`.files()` 関数は、 フォルダーに格納されている `File` オブジェクトのコレクションを返します。
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
| path | Text      | -> | ファイルのPOSIX相対パス名                               |
| 戻り値  | 4D.Folder | <- | 作成された `Folder` オブジェクト (無効な *path* の場合には null) |

#### 説明

`.folder()` 関数は、 親の `Folder` オブジェクト内に新しい `Folder` オブジェクトを作成し、その参照を返します。

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
| 引数      | タイプ        |    | 説明                  |
| ------- | ---------- | -- | ------------------- |
| options | Integer    | -> | フォルダーリストのオプション      |
| 戻り値     | Collection | <- | 子フォルダーオブジェクトのコレクション |

#### 説明

`.folders()` 関数は、 親フォルダーに格納されている `Folder` オブジェクトのコレクションを返します。

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

`.fullName` プロパティは、 拡張子 (あれば) を含めたフォルダーの完全な名称を返します。

このプロパティは **読み取り専用** です。 





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
| 戻り値  | Picture | <- | アイコン                     |


#### 説明

`.getIcon()` 関数は、 フォルダーのアイコンを返します。

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

`.hidden` プロパティは、  フォルダーがシステムレベルで "非表示" に設定されていれば trueを返します (それ以外の場合は false)。

このプロパティは **読み取り専用** です。 






## .isAlias

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isAlias** : Boolean


#### 説明

`.isAlias` プロパティは、 `Folder` オブジェクトに対しては常に **false**を返します。

このプロパティは **読み取り専用** です。 






## .isFile

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFile** : Boolean

#### 説明

`.isFile` プロパティは、 フォルダーに対しては常に **false**を返します。

このプロパティは **読み取り専用** です。 






## .isFolder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFolder** : Boolean

#### 説明

`.isFolder` プロパティは、 フォルダーに対しては常に **true**を返します。

このプロパティは **読み取り専用** です。 






## .isPackage

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isPackage** : Boolean

#### 説明

`.isPackage` プロパティは、 フォルダーが macOS上のパッケージである (かつディスク上に存在している) 場合に trueを返します。 それ以外の場合は false を返します。

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

`.modificationDate` プロパティは、  フォルダーの最終変更日を返します。

このプロパティは **読み取り専用** です。 






## .modificationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.modificationTime** : Time

#### 説明

`.modificationTime` プロパティは、 フォルダーの最終変更時刻 を返します (00:00 からの経過秒数の形式)。

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
| newName           | Text      | -> | 移動先でのフォルダーの完全な名称 |
| 戻り値               | 4D.Folder | <- | 移動したフォルダー        |


#### 説明

`.moveTo( )` 関数は、 `Folder` オブジェクト (ソースフォルダー) を *destinationFolder* が指定する移行先へと移動すると同時に、*newName* を指定した場合は名称も変更します。

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

`.name` プロパティは、  拡張子 (あれば) を含まないフォルダー名を返します。

このプロパティは **読み取り専用** です。 






## .original

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.original** : 4D.Folder

#### 説明

`.original` プロパティは、 対象フォルダーと同じフォルダーオブジェクトを返します。

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

`.parent` プロパティは、 対象フォルダーの親フォルダーオブジェクトを返します。 パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

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

`.path` プロパティは、 フォルダーの POSIXパスを返します。 パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

このプロパティは **読み取り専用** です。 





## .platformPath

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.platformPath** : Text

#### 説明

`.platformPath` プロパティは、 カレントプラットフォームのシンタックスで表現されたフォルダーのパスを返します。

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
| newName | Text      | -> | フォルダーの新しい完全な名称 |
| 戻り値     | 4D.Folder | <- | 名称変更されたフォルダー   |



#### 説明

`.rename()` 関数は、 フォルダー名を *newName* に指定した名称に変更し、名称変更後の `Folder` オブジェクトを返します。

*newName* 引数は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。 同じ名前のファイルがすでに存在する場合には、エラーが返されます。


**返されるオブジェクト**

名称変更された `Folder` オブジェクト。

#### 例題


```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<style> h2 { background: #d9ebff;}</style>
