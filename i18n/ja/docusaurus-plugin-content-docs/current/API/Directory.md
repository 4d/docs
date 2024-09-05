---
id: Directory
title: Directory クラス
---

<!-- REF directory.creationDate.Desc -->

## .creationDate

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### 説明

`.creationDate` プロパティは、<!-- REF #directory.creationDate.Summary -->フォルダーの作成日<!-- END REF -->を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.creationTime.Desc -->

## .creationTime

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### 説明

`.creationTime` プロパティは、<!-- REF #directory.creationTime.Summary -->フォルダーの作成時刻<!-- END REF -->を返します (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.exists.Desc -->

## .exists

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### 説明

`.exists` プロパティは、<!-- REF #directory.exists.Summary -->ディスク上にフォルダーが存在する場合は true<!-- END REF --> を返します (それ以外の場合は false)。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.extension.Desc -->

## .extension

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### 説明

`.extension` プロパティは、<!-- REF #directory.extension.Summary -->フォルダー名の拡張子<!-- END REF -->を返します (あれば)。 拡張子は必ず"." で始まります。 フォルダー名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.fullName.Desc -->

## .fullName

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### 説明

`.fullName` プロパティは、<!-- REF #directory.fullName.Summary -->拡張子 (あれば) を含めたフォルダーの完全な名称<!-- END REF -->を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.hidden.Desc -->

## .hidden

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### 説明

`.hidden` プロパティは、<!-- REF #directory.hidden.Summary -->フォルダーがシステムレベルで "非表示" に設定されていれば true<!-- END REF --> を返します (それ以外の場合は false)。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.isAlias.Desc -->

## .isAlias

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### 説明

`.isAlias` プロパティは、<!-- REF #directory.isAlias.Summary -->`Folder` オブジェクトに対しては常に **false**<!-- END REF --> を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->

## .isFile

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### 説明

`.isFile` プロパティは、<!-- REF #directory.isFile.Summary -->フォルダーに対しては常に **false**<!-- END REF --> を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->

## .isFolder

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### 説明

`.isFolder` プロパティは、<!-- REF #directory.isFolder.Summary -->フォルダーに対しては常に **true**<!-- END REF --> を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->

## .isPackage

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.isPackage.Syntax -->**.isPackage** : Boolean<!-- END REF -->

#### 説明

`.isPackage` プロパティは、<!-- REF #directory.isPackage.Summary -->フォルダーが macOS上のパッケージである (かつディスク上に存在している) 場合に true<!-- END REF --> を返します。 それ以外の場合は false を返します。

Windows 上においては、`.isPackage` は常に **false** を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.modificationDate.Desc -->

## .modificationDate

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### 説明

`.modificationDate` プロパティは、<!-- REF #directory.modificationDate.Summary -->フォルダーの最終変更日<!-- END REF -->を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.modificationTime.Desc -->

## .modificationTime

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

#### 説明

`.modificationTime` プロパティは、<!-- REF #directory.modificationTime.Summary -->フォルダーの最終変更時刻<!-- END REF -->を返します (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.name.Desc -->

## .name

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

`.name` プロパティは、<!-- REF #directory.name.Summary -->拡張子 (あれば) を含まないフォルダー名<!-- END REF -->を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.original.Desc -->

## .original

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.original.Syntax -->**.original** : 4D.Folder<!-- END REF -->

#### 説明

`.original` プロパティは、<!-- REF #directory.original.Summary -->対象フォルダーと同じフォルダーオブジェクト<!-- END REF -->を返します。

このプロパティは **読み取り専用** です。

> このプロパティは、フォルダーやファイルを処理する汎用的なコードを書くために使用できます。

<!-- END REF -->

---

<!-- REF directory.parent.Desc -->

## .parent

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### 説明

`.parent` プロパティは、<!-- REF #directory.parent.Summary -->対象フォルダーの親フォルダーオブジェクト<!-- END REF -->を返します。 パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

親フォルダーが存在しない場合 (root) は、このプロパティは null値を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.path.Desc -->

## .path

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

`.path` プロパティは、<!-- REF #directory.path.Summary -->フォルダーの POSIXパス<!-- END REF -->を返します。 パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->

## .platformPath

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### 説明

`.platformPath` プロパティは、<!-- REF #directory.platformPath.Summary -->カレントプラットフォームのシンタックスで表現されたフォルダーのパス<!-- END REF -->を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

---

<!-- REF directory.copyTo().Desc -->

## .copyTo()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->

| 引数                | 型                         |     | 説明                                |
| ----------------- | ------------------------- | :-: | --------------------------------- |
| destinationFolder | 4D.Folder |  -> | 宛先フォルダー                           |
| newName           | テキスト                      |  -> | コピー先フォルダーの名前                      |
| overwrite         | 整数                        |  -> | 既存要素を上書きするには `fk overwrite` を渡します |
| 戻り値               | 4D.Folder |  <- | コピーされたフォルダー                       |

<!-- END REF -->

#### 説明

`.copyTo()` 関数は、<!-- REF #directory.copyTo().Summary -->`Folder` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします<!-- END REF -->。

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
$userImages:=Folder(fk documents folder).folder("Pictures")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```

<!-- END REF -->

---

<!-- REF directory.file().Desc -->

## .file()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.file().Syntax -->**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->

| 引数   | 型                       |    | 説明                                                       |
| ---- | ----------------------- | -- | -------------------------------------------------------- |
| path | テキスト                    | -> | ファイルのPOSIX相対パス名                                          |
| 戻り値  | 4D.File | <- | `File` オブジェクト (無効な POSIXパスの場合には null) |

<!-- END REF -->

#### 説明

`.file()` 関数は、<!-- REF #directory.file().Summary -->`Folder` オブジェクト内に `File` オブジェクトを作成し、その参照を返します<!-- END REF -->。

*path* には、返すべきファイルの相対的パスを POSIX 形式で渡します。 このパスは、親フォルダーを起点として評価されます。

**戻り値**

`File` オブジェクト (無効な POSIX *path* の場合には null)。

#### 例題

```4d
var $myPDF : 4D.File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```

<!-- END REF -->

---

<!-- REF directory.files().Desc -->

## .files()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.files().Syntax -->**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->

| 引数      | 型      |    | 説明                 |
| ------- | ------ | -- | ------------------ |
| options | 整数     | -> | ファイルリストのオプション      |
| 戻り値     | コレクション | <- | 子ファイルオブジェクトのコレクション |

<!-- END REF -->

#### 説明

`.files()` 関数は、<!-- REF #directory.files().Summary -->フォルダーに格納されている `File` オブジェクトのコレクションを返します<!-- END REF -->。

> エイリアスまたはシンボリックリンクは解決されません。

*options*引数を渡さなかった場合はデフォルトで、フォルダーの第一階層にあるファイルのみがコレクションに返されます。これには非表示のファイルや、フォルダーも含まれます。 *options* 引数に以下の定数を一つ以上渡すことで、このふるまいを変更することができます:

| 定数                    | 値 | 説明                                    |
| --------------------- | - | ------------------------------------- |
| `fk recursive`        | 1 | コレクションには、指定フォルダーとそのサブフォルダーのファイルが含まれます |
| `fk ignore invisible` | 8 | 非表示設定のファイルは表示されません                    |

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

<!-- END REF -->

---

<!-- REF directory.folder().Desc -->

## .folder()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.folder().Syntax -->**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->

| 引数   | 型                         |    | 説明                                                                     |
| ---- | ------------------------- | -- | ---------------------------------------------------------------------- |
| path | テキスト                      | -> | ファイルのPOSIX相対パス名                                                        |
| 戻り値  | 4D.Folder | <- | 作成された `Folder` オブジェクト (無効な POSIX *path* の場合には null) |

<!-- END REF -->

#### 説明

`.folder()` 関数は、<!-- REF #directory.folder().Summary -->親の `Folder` オブジェクト内に新しい `Folder` オブジェクトを作成し、その参照を返します<!-- END REF -->。

*path* には、返すべきフォルダーの相対的パスを POSIX 形式で渡します。 このパスは、親フォルダーを起点として評価されます。

**戻り値**

`Folder` オブジェクト (無効な POSIX *path* の場合には null)。

#### 例題

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->

---

<!-- REF directory.folders().Desc -->

## .folders()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.folders().Syntax -->**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->

| 引数      | 型      |    | 説明                  |
| ------- | ------ | -- | ------------------- |
| options | 整数     | -> | フォルダーリストのオプション      |
| 戻り値     | コレクション | <- | 子フォルダーオブジェクトのコレクション |

<!-- END REF -->

#### 説明

`.folders()` 関数は、<!-- REF #directory.folders().Summary -->親フォルダーに格納されている `Folder` オブジェクトのコレクションを返します<!-- END REF -->。

*options*引数を渡さなかった場合はデフォルトで、フォルダーの第一階層にあるフォルダーのみがコレクションに返されます。 *options* 引数に以下の定数を一つ以上渡すことで、このふるまいを変更することができます:

| 定数                    | 値 | 説明                                     |
| --------------------- | - | -------------------------------------- |
| `fk recursive`        | 1 | コレクションには、指定フォルダーとそのサブフォルダーのフォルダーが含まれます |
| `fk ignore invisible` | 8 | 非表示設定のフォルダーは表示されません                    |

**戻り値**

`Folder` オブジェクトのコレクション。

#### 例題

データベースフォルダー内にあるすべてのフォルダーおよびサブフォルダーのコレクションを取得します:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```

<!-- END REF -->

---

<!-- REF directory.getIcon().Desc -->

## .getIcon()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #directory.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->

| 引数   | 型     |    | 説明                                          |
| ---- | ----- | -- | ------------------------------------------- |
| size | 整数    | -> | 取得するピクチャーの一辺の長さ (ピクセル単位) |
| 戻り値  | ピクチャー | <- | アイコン                                        |

<!-- END REF -->

#### 説明

`.getIcon()` 関数は、<!-- REF #directory.getIcon().Summary -->フォルダーのアイコンを返します<!-- END REF -->。

任意の *size* 引数を渡すと、返されるアイコンのサイズをピクセル単位で指定することができます。 この値は、実際にはアイコンを格納している正方形の一辺の長さを表しています。 アイコンは通常、32x32ピクセル ("大きいアイコン") または 16x16ピクセル ("小さいアイコン") で定義されています。 この引数に 0 を渡すか省略した場合、"大きいアイコン" が返されます。

フォルダーがディスク上に存在しない場合、デフォルトの空のアイコンが返されます。

**戻り値**

フォルダーアイコンの [ピクチャー](Concepts/dt_picture.md)。

<!-- END REF -->
