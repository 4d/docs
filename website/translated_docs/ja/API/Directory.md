---
id: Directory
title: Directory クラス
---

## 説明


<!-- REF directory.creationDate.Desc -->
## .creationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.creationDate.Syntax -->
**.creationDate** : Date<!-- END REF -->


#### 説明

`.creationDate` プロパティは、 <!-- REF #directory.creationDate.Summary -->フォルダーの作成日を返します<!-- END REF -->。

このプロパティは **読み取り専用** です。 

<!-- END REF -->
 
--- 
 
 <!-- REF directory.creationTime.Desc -->
## .creationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.creationTime.Syntax -->
**.creationTime** : Time<!-- END REF -->



#### 説明

`.creationTime` プロパティは、 <!-- REF #directory.creationTime.Summary -->フォルダーの作成時刻を返します<!-- END REF --> (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。 

<!-- END REF -->

---


<!-- REF directory.exists.Desc -->
## .exists

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.exists.Syntax -->
**.exists** : Boolean<!-- END REF -->


#### 説明

`.exists` プロパティは、 <!-- REF #directory.exists.Summary -->ディスク上にフォルダーが存在する場合は true を返します<!-- END REF -->(それ以外の場合は false)。

このプロパティは **読み取り専用** です。 

<!-- END REF -->


---


<!-- REF directory.extension.Desc -->
## .extension

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.extension.Syntax -->
**.extension** : Text<!-- END REF -->


#### 説明

`.extension` プロパティは、 <!-- REF #directory.extension.Summary -->フォルダー名の拡張子を返します (あれば)<!-- END REF -->。 An extension always starts with ".". The property returns an empty string if the folder name does not have an extension.

このプロパティは **読み取り専用** です。 

<!-- END REF -->


---

<!-- REF directory.fullName.Desc -->
## .fullName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.fullName.Syntax -->
**.fullName** : Text<!-- END REF -->


#### 説明

`.fullName` プロパティは、 <!-- REF #directory.fullName.Summary -->拡張子 (あれば) を含めたフォルダーの完全な名称を返します<!-- END REF -->。

このプロパティは **読み取り専用** です。 

<!-- END REF -->


---

<!-- REF directory.hidden.Desc -->
## .hidden

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.hidden.Syntax -->
**.hidden** : Boolean<!-- END REF -->


#### 説明

`.hidden` プロパティは、 <!-- REF #directory.hidden.Summary --> フォルダーがシステムレベルで "非表示" に設定されていれば true を返します<!-- END REF -->(それ以外の場合は false)。

このプロパティは **読み取り専用** です。 

<!-- END REF -->

---


<!-- REF directory.isAlias.Desc -->
## .isAlias

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.isAlias.Syntax -->
**.isAlias** : Boolean<!-- END REF -->



#### 説明

`.isAlias` プロパティは、 <!-- REF #directory.isAlias.Summary -->`Folder` オブジェクトに対しては常に **false** を返します<!-- END REF -->。

このプロパティは **読み取り専用** です。 

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->
## .isFile

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.isFile.Syntax -->
**.isFile** : Boolean<!-- END REF -->


#### 説明

`.isFile` プロパティは、 <!-- REF #directory.isFile.Summary -->フォルダーに対しては常に **false** を返します<!-- END REF -->。

このプロパティは **読み取り専用** です。 

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->
## .isFolder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.isFolder.Syntax -->
**.isFolder** : Boolean<!-- END REF -->


#### 説明

`.isFolder` プロパティは、 <!-- REF #directory.isFolder.Summary -->フォルダーに対しては常に **true** を返します<!-- END REF -->。

このプロパティは **読み取り専用** です。 

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->
## .isPackage

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.isPackage.Syntax -->
**.isPackage** : Boolean<!-- END REF -->


#### 説明

`.isPackage` プロパティは、 <!-- REF #directory.isPackage.Summary -->フォルダーが macOS上のパッケージである (かつディスク上に存在している) 場合に true を返します<!-- END REF -->。 それ以外の場合は false を返します。

Windows 上においては、`.isPackage` は常に **false** を返します。

このプロパティは **読み取り専用** です。 

<!-- END REF -->


---

<!-- REF directory.modificationDate.Desc -->
## .modificationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.modificationDate.Syntax -->
**.modificationDate** : Date<!-- END REF -->


#### 説明

`.modificationDate` プロパティは。 <!-- REF #directory.modificationDate.Summary --> フォルダーの最終変更日を返します<!-- END REF -->。

このプロパティは **読み取り専用** です。 

<!-- END REF -->


---

<!-- REF directory.modificationTime.Desc -->
## .modificationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.modificationTime.Syntax -->
**.modificationTime** : Time<!-- END REF -->


#### 説明

`.modificationTime` プロパティは、 <!-- REF #directory.modificationTime.Summary -->フォルダーの最終変更時刻を返します<!-- END REF --> (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。 

<!-- END REF -->

---

<!-- REF directory.name.Desc -->
## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>



<!-- REF #directory.name.Syntax -->
**.name** : Text<!-- END REF -->


#### 説明

`.name` プロパティは、 <!-- REF #directory.name.Summary --> フォルダーの名前を、拡張子 (あれば) を含まずに返します<!-- END REF -->。

このプロパティは **読み取り専用** です。 

<!-- END REF -->

---

<!-- REF directory.original.Desc -->
## .original

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.original.Syntax -->
**.original** : 4D.Folder<!-- END REF -->


#### 説明

`.original` プロパティは、 <!-- REF #directory.original.Summary -->対象フォルダーと同じフォルダーオブジェクトを返します<!-- END REF -->。

このプロパティは **読み取り専用** です。
> This property is available on folders to allow generic code to process folders or files.

<!-- END REF -->

---


<!-- REF directory.parent.Desc -->
## .parent

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.parent.Syntax -->
**.parent** : 4D.Folder<!-- END REF -->


#### 説明

`.parent` プロパティは、 <!-- REF #directory.parent.Summary -->対象フォルダーの親フォルダーオブジェクトを返します<!-- END REF -->。 If the path represents a system path (e.g., "/DATA/"), the system path is returned.

If the folder does not have a parent (root), the null value is returned.

このプロパティは **読み取り専用** です。 

<!-- END REF -->


---

<!-- REF directory.path.Desc -->
## .path

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.path.Syntax -->
**.path** : Text<!-- END REF -->


#### 説明

`.path` プロパティは、 <!-- REF #directory.path.Summary -->フォルダのPOSIXパスを返します<!-- END REF -->。 If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

このプロパティは **読み取り専用** です。 

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->
## .platformPath

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.platformPath.Syntax -->
**.platformPath** : Text<!-- END REF -->


#### 説明

`.platformPath` プロパティは、 <!-- REF #directory.platformPath.Summary -->カレントプラットフォームのシンタックスで表現されたフォルダーのパスを返します<!-- END REF -->。

このプロパティは **読み取り専用** です。 

<!-- END REF -->


---





<!-- REF directory.copyTo().Desc -->
## .copyTo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.copyTo().Syntax -->
**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->
| 参照                | タイプ       |    | 説明                                |
| ----------------- | --------- |:--:| --------------------------------- |
| destinationFolder | 4D.Folder | -> | コピー先フォルダー                         |
| newName           | テキスト      | -> | コピー先フォルダーの名前                      |
| overwrite         | 整数        | -> | 既存要素を上書きするには `fk overwrite` を渡します |
| 戻り値               | 4D.Folder | <- | コピーされたフォルダー                       |
<!-- END REF -->


#### 説明

`.copyTo()` 関数は、 <!-- REF #directory.copyTo().Summary -->`Folder` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします<!-- END REF -->。

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the folder is copied with the name of the original folder. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a folder with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| 定数             | 結果 | 説明                 |
| -------------- | -- | ------------------ |
| `fk overwrite` | 4  | 既存要素があれば、それを上書きします |


**戻り値**

コピーされた `Folder` オブジェクト。

#### 例題

You want to copy a Pictures *folder* from the user's Document folder to the Database folder:

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 
<!-- END REF -->

---


<!-- REF directory.file().Desc -->
## .file()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.file().Syntax -->
**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->
| 参照   | タイプ     |    | 説明                              |
| ---- | ------- | -- | ------------------------------- |
| path | テキスト    | -> | ファイルのPOSIX相対パス名                 |
| 戻り値  | 4D.File | <- | `File` オブジェクト (無効なパスの場合には null) |
<!-- END REF -->

#### 説明

`.file()` 関数は、 <!-- REF #directory.file().Summary -->`Folder` オブジェクト内に `File` オブジェクトを作成し、その参照を返します<!-- END REF -->。

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.

**戻り値**

`File` オブジェクト (無効な *path* の場合には null)。

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
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.files().Syntax -->
**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->
| 参照      | タイプ    |    | 説明                 |
| ------- | ------ | -- | ------------------ |
| options | 整数     | -> | ファイルリストのオプション      |
| 戻り値     | コレクション | <- | 子ファイルオブジェクトのコレクション |
<!-- END REF -->

#### 説明

`.files()` 関数は、 <!-- REF #directory.files().Summary -->フォルダーに格納されている `File` オブジェクトのコレクションを返します<!-- END REF -->。
> Aliases or symbolic links are not resolved.

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| 定数                    | 結果 | 説明                                          |
| --------------------- | -- | ------------------------------------------- |
| `fk recursive`        | 1  | コレクションには、指定フォルダーとそのサブフォルダーのファイル/フォルダーが含まれます |
| `fk ignore invisible` | 8  | 非表示設定のファイルやフォルダーは表示されません                    |

**戻り値**

`File` オブジェクトのコレクション。

#### 例題 1

You want to know if there are invisible files in the Database folder:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

#### 例題 2

You want to get all files that are not invisible in the Documents folder:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```

<!-- END REF -->

---

<!-- REF directory.folder().Desc -->
## .folder()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.folder().Syntax -->
**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->
| 参照   | タイプ       |    | 説明                                             |
| ---- | --------- | -- | ---------------------------------------------- |
| path | テキスト      | -> | ファイルのPOSIX相対パス名                                |
| 戻り値  | 4D.Folder | <- | Created folder object (null if invalid *path*) |
<!-- END REF -->

#### 説明

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.

**戻り値**

A `Folder` object or null if *path* is invalid.

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
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.folders().Syntax -->
**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->
| 参照      | タイプ    |    | 説明                                    |
| ------- | ------ | -- | ------------------------------------- |
| options | 整数     | -> | Folder list options                   |
| 戻り値     | コレクション | <- | Collection of children folder objects |
<!-- END REF -->

#### 説明

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

By default, if you omit the *options* parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| 定数                    | 結果 | 説明                                          |
| --------------------- | -- | ------------------------------------------- |
| `fk recursive`        | 1  | コレクションには、指定フォルダーとそのサブフォルダーのファイル/フォルダーが含まれます |
| `fk ignore invisible` | 8  | 非表示設定のファイルやフォルダーは表示されません                    |

**戻り値**

Collection of `Folder` objects.

#### 例題

You want the collection of all folders and subfolders of the database folder:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```

<!-- END REF -->

---

<!-- REF directory.getIcon().Desc -->
## .getIcon()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #directory.getIcon().Syntax -->
**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->
| 参照   | タイプ   |    | 説明                                            |
| ---- | ----- | -- | --------------------------------------------- |
| size | 整数    | -> | Side length for the returned picture (pixels) |
| 戻り値  | ピクチャー | <- | Icon                                          |
<!-- END REF -->


#### 説明

The `.getIcon()` function <!-- REF #directory.getIcon().Summary -->returns the icon of the folder<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels ("large icons") or 16x16 pixels ("small icons"). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.

**戻り値**

Folder icon [picture](Concepts/dt_picture.md).

<!-- END REF -->



