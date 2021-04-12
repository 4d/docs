---
id: folderClass
title: Folder
---



`Folder` objects are created with the [`Folder`](#folder) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`folder.create( )`](#create-) function.

### 例題

The following example creates a "JohnSmith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Folder object

|                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.copyTo().Summary -->|
| [<!-- INCLUDE #folderClass.create().Syntax -->](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folderClass.create().Summary -->|
| [<!-- INCLUDE #folderClass.createAlias().Syntax -->](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folderClass.createAlias().Summary --> |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationDate.Summary -->|
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationTime.Summary -->|
| [<!-- INCLUDE #folderClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folderClass.delete().Summary -->|
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.exists.Summary -->|
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.extension.Summary -->|
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.fullName.Summary -->|
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.getIcon().Summary -->|
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.hidden.Summary -->|
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isAlias.Summary -->|
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFile.Summary -->|
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFolder.Summary -->|
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isPackage.Summary -->|
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationDate.Summary -->|
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationTime.Summary -->|
| [<!-- INCLUDE #directory.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.name.Summary -->|
| [<!-- INCLUDE #directory.original.Syntax -->](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.original.Summary -->|
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.parent.Summary -->|
| [<!-- INCLUDE #directory.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.path.Summary -->|
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.platformPath.Summary -->|
| [<!-- INCLUDE #folderClass.moveTo().Syntax -->](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folderClass.moveTo().Summary -->|
| [<!-- INCLUDE #folderClass.rename().Syntax -->](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folderClass.rename().Summary -->|



## Folder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #_command_.Folder.Syntax -->
**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**Folder** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->


<!-- REF folderClass.Folder.Params -->
| 参照             | タイプ       |    | 説明                                             |
| -------------- | --------- |:--:| ---------------------------------------------- |
| path           | テキスト      | -> | フォルダーパス                                        |
| folderConstant | 整数        | -> | 4Dフォルダー定数                                      |
| pathType       | 整数        | -> | `fk posix path` (デフォルト) または `fk platform path` |
| *              |           | -> | ホストデータベースのフォルダーを返すには * を渡します                   |
| 戻り値            | 4D.Folder | <- | 新規フォルダーオブジェクト                                  |
<!-- END REF -->


#### 説明

`Folder` コマンドは、 <!-- REF #_command_.Folder.Summary -->`4D.Folder` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 The command accepts two syntaxes:

**Folder ( path { ; pathType } { ; \* } )**

In the *path* parameter, pass a folder path string. You can use a custom string or a filesystem (e.g., "/DATA").

> Only absolute pathnames are supported with the `Folder` command.

By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. The following constants are available:

| 定数               | 結果 | 説明                                                                                      |
| ---------------- | -- | --------------------------------------------------------------------------------------- |
| fk platform path | 1  | Path expressed with a platform-specific syntax (mandatory in case of platform pathname) |
| fk posix path    | 0  | Path expressed with POSIX syntax (default)                                              |

**Folder ( folderConstant { ; \* } )**

In the *folderConstant* parameter, pass a 4D built-in or system folder, using one of the following constants:

| 定数                         | 結果  | 説明                                                                                                  |
| -------------------------- | --- | --------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116 |                                                                                                     |
| fk data folder             | 9   | Associated filesystem: "/DATA"                                                                      |
| fk database folder         | 4   | Associated filesystem: "/PACKAGE"                                                                   |
| fk desktop folder          | 115 |                                                                                                     |
| fk documents folder        | 117 | Document folder of the user                                                                         |
| fk licenses folder         | 1   | Folder containing the machine's 4D license files                                                    |
| fk logs folder             | 7   | Associated filesystem: "/LOGS"                                                                      |
| fk mobileApps folder       | 10  | Associated filesystem: "/DATA"                                                                      |
| fk remote database folder  | 3   | 4D database folder created on each 4D remote machine                                                |
| fk resources folder        | 6   | Associated filesystem: "/RESOURCES"                                                                 |
| fk system folder           | 100 |                                                                                                     |
| fk user preferences folder | 0   | 4D folder that stores user preference files within the \<userName> directory.                      |
| fk web root folder         | 8   | Current Web root folder of the database: if within the package "/PACKAGE/path", otherwise full path |

If the command is called from a component, pass the optional * parameter to get the path of the host database. Otherwise, if you omit the * parameter, a null object is always returned.


## 4D.Folder.new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #4D.Folder.new().Syntax -->**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**4D.Folder.new** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->


#### 説明

`4D.Folder.new()` 関数は、 <!-- REF #4D.Folder.new().Summary -->`4D.Folder` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 It is identical to the [`Folder`](#folder) command (shortcut).

> It is recommended to use the [`Folder`](#folder) shortcut command instead of `4D.Folder.new()`. 


<!-- INCLUDE directory.copyTo().Desc -->



<!-- REF folder.create().Desc -->
## .create()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>



<!--REF #folderClass.create().Syntax -->
**.create()** : Boolean<!-- END REF -->

<!--REF #folderClass.create().Params -->
| 参照  | タイプ |    | 説明                                     |
| --- | --- | -- | -------------------------------------- |
| 戻り値 | ブール | <- | フォルダーが正常に作成された場合には true、それ以外の場合は false |
<!-- END REF -->



#### 説明

`.create()` 関数は、 <!-- REF #folderClass.create().Summary -->`Folder` オブジェクトのプロパティに基づいてディスク上にフォルダーを作成します<!-- END REF -->。

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**戻り値**

*   **True** if the folder is created successfully;
*   **False** if a folder with the same name already exists or if an error occured.

#### 例題 1

Create an empty folder in the database folder:

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### 例題 2

Creation of the "/Archives2019/January/" folder in the database folder:

```4d
$newFolder:=Folder("/PACKAGE/Archives2019/January")
If($newFolder.create())
    ALERT("The "+$newFolder.name+" folder was created.")
Else
    ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
```

<!-- END REF -->




<!-- REF folder.createAlias().Desc -->
## .createAlias()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>



<!--REF #folderClass.createAlias().Syntax -->
**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->


<!--REF #folderClass.createAlias().Params -->
| 参照                | タイプ       |    | 説明                       |
| ----------------- | --------- | -- | ------------------------ |
| destinationFolder | 4D.Folder | -> | エイリアスまたはショートカットの作成先フォルダー |
| aliasName         | テキスト      | -> | エイリアスまたはショートカットの名称       |
| aliasType         | 整数        | -> | エイリアスリンクのタイプ             |
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのフォルダー参照  |
<!-- END REF -->


#### 説明

`.createAlias()` 関数は、*destinationFolder* オブジェクトで指定されたフォルダー内に、*aliasName* が指定する名称で、対象フォルダーへの <!-- REF #folderClass.createAlias().Summary -->エイリアス (macOS) またはショートカット (Windows) を作成します<!-- END REF --> 。

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

| 定数                 | 結果 | 説明                         |
| ------------------ | -- | -------------------------- |
| `fk alias link`    | 0  | Alias link (default)       |
| `fk symbolic link` | 1  | Symbolic link (macOS only) |

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**返されるオブジェクト**

A `4D.File` object with the `isAlias` property set to **true**.

#### 例題

You want to create an alias to an archive folder in your database folder:

```4d
$myFolder:=Folder("C:\\Documents\\Archives\\2019\\January";fk platform path)
$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")
```
<!-- END REF -->


<!-- INCLUDE directory.creationDate.Desc -->


<!-- INCLUDE directory.creationTime.Desc -->



<!-- REF folder.delete().Desc -->
## .delete()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>



<!--REF #folderClass.delete().Syntax -->
**.delete**( { *option* : Integer } )<!-- END REF -->


<!-- REF #folderClass.delete().Params -->
| 参照    | タイプ |    | 説明            |
| ----- | --- | -- | ------------- |
| オプション | 整数  | -> | フォルダー削除のオプション |
<!-- END REF -->



#### 説明

`.delete()` 関数は、 <!-- REF #folderClass.delete().Summary -->フォルダーを削除します<!-- END REF -->。

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the option parameter with one of the following constants:

| 定数                     | 結果 | 説明                |
| ---------------------- | -- | ----------------- |
| `Delete only if empty` | 0  | フォルダーが空の場合のみ削除します |
| `Delete with contents` | 1  | フォルダーを中身ごと削除します   |

When `Delete only if empty` is passed or if you omit the option parameter:

*   The folder is only deleted if it is empty; otherwise, the command does nothing and an error -47 is generated.
*   If the folder does not exist, the error -120 is generated.

When `Delete with contents` is passed:

*   The folder, along with all of its contents, is deleted. **Warning**: Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted.
*   If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and an error(*) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use the `GET LAST ERROR STACK` command to retrieve the name and path of the offending file.
*   If the folder does not exist, the command does nothing and no error is returned. (*) Windows: -54 (Attempt to open locked file for writing) macOS: -45 (The file is locked or the pathname is not correct)

<!-- END REF -->
 
 

<!-- INCLUDE directory.exists.Desc -->



<!-- INCLUDE directory.extension.Desc -->



<!-- INCLUDE directory.file().Desc -->



<!-- INCLUDE directory.files().Desc -->



<!-- INCLUDE directory.folder().Desc -->



<!-- INCLUDE directory.folders().Desc -->



<!-- INCLUDE directory.fullName.Desc -->



<!-- INCLUDE directory.getIcon().Desc -->



<!-- INCLUDE directory.hidden.Desc -->




<!-- INCLUDE directory.isAlias.Desc -->




<!-- INCLUDE directory.isFile.Desc -->




<!-- INCLUDE directory.isFolder.Desc -->




<!-- INCLUDE directory.isPackage.Desc -->




<!-- INCLUDE directory.modificationDate.Desc -->




<!-- INCLUDE directory.modificationTime.Desc -->




<!-- REF folder.moveTo().Desc -->
## .moveTo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!--REF #folderClass.moveTo().Syntax -->
**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #folderClass.moveTo().Params -->
| 参照                | タイプ       |    | 説明               |
| ----------------- | --------- | -- | ---------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー          |
| newName           | テキスト      | -> | 移動先でのフォルダーの完全な名称 |
| 戻り値               | 4D.Folder | <- | 移動したフォルダー        |
<!-- END REF -->


#### 説明

`.moveTo( )` 関数は、 <!-- REF #folderClass.moveTo().Summary -->`Folder` オブジェクト (ソースフォルダー) を *destinationFolder* が指定する移行先へと移動すると同時に、*newName* を指定した場合は名称も変更します<!-- END REF -->。

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

**返されるオブジェクト**

The moved `Folder` object.

#### 例題

You want to move and rename a folder:

```4d
 var $tomove; $moved : Object
 $docs:=Folder(fk documents folder)
 $tomove:=$docs.folder("Pictures")
 $tomove2:=$tomove.moveTo($docs.folder("Archives");"Pic_Archives")
```
<!-- END REF -->


<!-- INCLUDE directory.name.Desc -->




<!-- INCLUDE directory.original.Desc -->




<!-- INCLUDE directory.parent.Desc -->




<!-- INCLUDE directory.path.Desc -->



<!-- INCLUDE directory.platformPath.Desc -->



<!-- REF folder.rename().Desc --> 
## .rename()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!--REF #folderClass.rename().Syntax -->
**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->


<!--REF #folderClass.rename().Params -->
| 参照      | タイプ       |    | 説明             |
| ------- | --------- | -- | -------------- |
| newName | テキスト      | -> | フォルダーの新しい完全な名称 |
| 戻り値     | 4D.Folder | <- | 名称変更されたフォルダー   |
<!-- END REF -->



#### 説明

`.rename()` 関数は、 <!-- REF #folderClass.rename().Summary -->フォルダー名を *newName* に指定した名称に変更し、名称変更後の `Folder` オブジェクトを返します<!-- END REF -->。

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.


**返されるオブジェクト**

名称変更された `Folder` オブジェクト。

#### 例題


```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
