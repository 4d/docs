---
id: Directory
title: Directory クラス
---

## 説明


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

 
--- 
 
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


---


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



---


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



---

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



---

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


---


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


---

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


---

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


---

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



---

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



---

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


---

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


---

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


---


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



---

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


---

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



---





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
 

---


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


---

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


---

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


---

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


---

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




