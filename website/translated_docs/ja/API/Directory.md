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

The `.creationDate` property returns the creation date of the folder.

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

The `.creationTime` property returns the creation time of the folder (expressed as a number of seconds beginning at 00:00).

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

The `.exists` property returns true if the folder exists on disk, and false otherwise.

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

The `.extension` property returns the extension of the folder name (if any). 拡張子は必ず"." で始まります。 フォルダー名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

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

The `.fullName` property returns the full name of the folder, including its extension (if any).

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

The `.hidden` property returns  true if the folder is set as "hidden" at the system level, and false otherwise.

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

The `.isAlias` property returns always **false** for a `Folder` object.

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

The `.isFile` property returns always **false** for a folder.

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

The `.isFolder` property returns always **true** for a folder.

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

The `.isPackage` property returns true if the folder is a package on macOS  (and exists on disk). それ以外の場合は false を返します。

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

The `.modificationDate` property returns  the date of the folder's last modification.

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

The `.modificationTime` property returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00).

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

The `.name` property returns  the name of the folder, without extension (if any).

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

The `.original` property returns the same Folder object as the folder.

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

The `.parent` property returns the parent folder object of the folder. パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

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

The `.path` property returns the POSIX path of the folder. パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

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

The `.platformPath` property returns the path of the folder expressed with the current platform syntax.

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


---

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


---

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


---

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




