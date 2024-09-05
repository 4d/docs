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

### パス名

`Folder` オブジェクトは、`filesystems` や `posix` シンタックスを含む、いくつかのパス名をサポートしています。 使用できるパス名についての詳細は [**パス名**](../Concepts/paths.md) ページを参照ください。

### Folder オブジェクト

|                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #directory.copyTo().Summary -->                           |
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FolderClass.create().Summary -->                       |
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FolderClass.createAlias().Summary -->        |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #directory.creationDate.Summary -->             |
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #directory.creationTime.Summary -->             |
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FolderClass.delete().Summary -->                       |
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)<br/><!-- INCLUDE #directory.exists.Summary -->                               |
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)<br/><!-- INCLUDE #directory.extension.Summary -->                      |
| [<!-- INCLUDE #directory.file().Syntax -->](#file)<br/><!-- INCLUDE #directory.file().Summary -->                                 |
| [<!-- INCLUDE #directory.files().Syntax -->](#files)<br/><!-- INCLUDE #directory.files().Summary -->                              |
| [<!-- INCLUDE #directory.folder().Syntax -->](#folder)<br/><!-- INCLUDE #directory.folder().Summary -->                           |
| [<!-- INCLUDE #directory.folders().Syntax -->](#folders)<br/><!-- INCLUDE #directory.folders().Summary -->                        |
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #directory.fullName.Summary -->                         |
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #directory.getIcon().Summary -->                        |
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #directory.hidden.Summary -->                               |
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #directory.isAlias.Summary -->                            |
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #directory.isFile.Summary -->                               |
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #directory.isFolder.Summary -->                         |
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)<br/><!-- INCLUDE #directory.isPackage.Summary -->                      |
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #directory.modificationDate.Summary --> |
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #directory.modificationTime.Summary --> |
| [<!-- INCLUDE #directory.name.Syntax -->](#name)<br/><!-- INCLUDE #directory.name.Summary -->                                     |
| [<!-- INCLUDE #directory.original.Syntax -->](#original)<br/><!-- INCLUDE #directory.original.Summary -->                         |
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)<br/><!-- INCLUDE #directory.parent.Summary -->                               |
| [<!-- INCLUDE #directory.path.Syntax -->](#path)<br/><!-- INCLUDE #directory.path.Summary -->                                     |
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #directory.platformPath.Summary -->             |
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FolderClass.moveTo().Summary -->                       |
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FolderClass.rename().Summary -->                       |

## Folder

<details><summary>履歴</summary>

| リリース  | 内容                     |
| ----- | ---------------------- |
| 19 R8 | `fk home folder` をサポート |
| 17 R5 | 追加                     |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| 引数             | 型                         |     | 説明                                                                |
| -------------- | ------------------------- | :-: | ----------------------------------------------------------------- |
| path           | テキスト                      |  -> | フォルダーパス                                                           |
| folderConstant | 整数                        |  -> | 4Dフォルダー定数                                                         |
| pathType       | 整数                        |  -> | `fk posix path` (デフォルト) または `fk platform path` |
| -              |                           |  -> | ホストデータベースのフォルダーを返すには \* を渡します                                     |
| 戻り値            | 4D.Folder |  <- | 新規フォルダーオブジェクト                                                     |

<!-- END REF -->

#### 説明

`Folder` コマンドは、<!-- REF #_command_.Folder.Summary -->`4D.Folder` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 このコマンドは 2種類のシンタックスを受け入れます。

**Folder ( path { ; pathType } { ; \* } )**

*path* には、フォルダーパス文字列を渡します。 カスタムの文字列または [ファイルシステム](../Concepts/paths.md#ファイルシステムパス名) (例: "/DATA") を渡すことができます。

> `Folder` コマンドでは絶対パス名のみがサポートされます。

デフォルトで、4D は POSIXシンタックスで表現されたパスを期待します。 プラットフォームパス名 (Windows または macOS) を使用する場合、*pathType* 引数を使用してそのことを宣言する必要があります。 以下の定数を使用することができます:

| 定数               | 値 | 説明                                                                |
| ---------------- | - | ----------------------------------------------------------------- |
| fk platform path | 1 | プラットフォーム特有のシンタックスで表現されたパス (プラットフォームパス名の場合には必須) |
| fk posix path    | 0 | POSIXシンタックスで表現されたパス (デフォルト)                    |

**Folder ( folderConstant { ; \* } )**

*folderConstant* には、以下の定数のどれか一つを指定して 4Dビルトインの、またはシステムフォルダーを渡します:

| 定数                         | 値   | 説明                                                                                       |
| -------------------------- | --- | ---------------------------------------------------------------------------------------- |
| fk applications folder     | 116 |                                                                                          |
| fk data folder             | 9   | 関連づけられたファイルシステム: "/DATA"                                                 |
| fk database folder         | 4   | 関連づけられたファイルシステム: "/PACKAGE"                                              |
| fk desktop folder          | 115 |                                                                                          |
| fk documents folder        | 117 | ユーザーのドキュメントフォルダー                                                                         |
| fk home folder             | 118 | ユーザーのカレントホームフォルダー (通常は `/Users/<username>/`)                          |
| fk licenses folder         | 1   | マシンの 4Dライセンスファイルを格納しているフォルダー                                                             |
| fk logs folder             | 7   | 関連づけられたファイルシステム: "/LOGS"                                                 |
| fk mobileApps folder       | 10  |                                                                                          |
| fk remote database folder  | 3   | それぞれの 4Dリモートマシン上に作成された 4Dデータベースフォルダー                                                     |
| fk resources folder        | 6   | 関連づけられたファイルシステム: "/RESOURCES"                                            |
| fk system folder           | 100 |                                                                                          |
| fk user preferences folder | 0   | ユーザー環境設定ファイルを保存している、ユーザーホームフォルダー内の 4Dフォルダー                                               |
| fk web root folder         | 8   | データベースのカレントの Webルートフォルダー: ただし "/PACKAGE/path" のパッケージ内にある場合。そうでない場合はフルパス。 |

コマンドがコンポーネントから呼び出されている場合、`*` 引数を渡してホストデータベースのパスを取得するようにします。 \* 引数を省略すると、常に null オブジェクトが返されます。

> Windows の場合、統合されたクライアントでは、`ShareLocalResourcesOnWindowsClient` [BuildApp キー](../Desktop/building.md#buildapp4dsettings) を使用すると、ビルトインフォルダーの場所が変更されます。

## 4D.Folder.new()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #4D.Folder.new().Syntax -->

**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**4D.Folder.new** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

#### 説明

`4D.Folder.new()` 関数は、<!-- REF #4D.Folder.new().Summary -->`4D.Folder` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 この関数の機能は、[`Folder`](#folder) コマンドと同一です。

> `4D.Folder.new()` よりも、短い [`Folder`](#folder) コマンドの使用が推奨されます。

<!-- INCLUDE directory.copyTo().Desc -->

<!-- REF folder.create().Desc -->

## .create()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FolderClass.create().Syntax -->**.create()** : Boolean<!-- END REF -->

<!--REF #FolderClass.create().Params -->

| 引数  | 型   |    | 説明                                     |
| --- | --- | -- | -------------------------------------- |
| 戻り値 | ブール | <- | フォルダーが正常に作成された場合には true、それ以外の場合は false |

<!-- END REF -->

#### 説明

`.create()` 関数は、<!-- REF #FolderClass.create().Summary -->
`Folder` オブジェクトのプロパティに基づいてディスク上にフォルダーを作成します<!-- END REF -->。

必要であれば、 関数は [platformPath](#platformpath) あるいは [path](#path) プロパティの詳細に基づいてフォルダー階層を作成します。 フォルダーがディスク上にすでに存在する場合、関数は何もせず、false を返します (エラーは返されません)。

**戻り値**

- フォルダーが正常に作成された場合には **true**
- すでに同じ名前のフォルダーが存在する、あるいはエラーが発生した場合には **false**

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

<!-- END REF -->

<!-- REF folder.createAlias().Desc -->

## .createAlias()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FolderClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FolderClass.createAlias().Params -->

| 引数                | 型                         |    | 説明                       |
| ----------------- | ------------------------- | -- | ------------------------ |
| destinationFolder | 4D.Folder | -> | エイリアスまたはショートカットの作成先フォルダー |
| aliasName         | テキスト                      | -> | エイリアスまたはショートカットの名称       |
| aliasType         | 整数                        | -> | エイリアスリンクのタイプ             |
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのフォルダー参照  |

<!-- END REF -->

#### 説明

`.createAlias()` 関数は、*destinationFolder* オブジェクトで指定されたフォルダー内に、*aliasName* が指定する名称で、対象フォルダーへの<!-- REF #FolderClass.createAlias().Summary -->エイリアス (macOS) またはショートカット (Windows) を作成します<!-- END REF -->。

*aliasName* には、作成するエイリアスまたはショートカットの名前を渡します。

macOS 上では、この関数はデフォルトで標準エイリアスを作成します。 *aliasType* 引数を渡すことで、シンボリックリンクを作成することもできます。 以下の定数を使用することができます:

| 定数                 | 値 | 説明                                     |
| ------------------ | - | -------------------------------------- |
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

<!-- END REF -->

<!-- INCLUDE directory.creationDate.Desc -->

<!-- INCLUDE directory.creationTime.Desc -->

<!-- REF folder.delete().Desc -->

## .delete()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FolderClass.delete().Syntax -->**.delete**( { *option* : Integer } )<!-- END REF -->

<!-- REF #FolderClass.delete().Params -->

| 引数     | 型  |    | 説明            |
| ------ | -- | -- | ------------- |
| option | 整数 | -> | フォルダー削除のオプション |

<!-- END REF -->

#### 説明

`.delete()` 関数は、<!-- REF #FolderClass.delete().Summary -->フォルダーを削除します<!-- END REF -->。

セキュリティ上の理由から、option 引数を渡さなかった場合はデフォルトで、`.delete()` は空のフォルダーしか削除しません。 空でないフォルダーを削除するには、以下の定数のいずれか一つを option 引数として渡す必要があります:

| 定数                     | 値 | 説明                |
| ---------------------- | - | ----------------- |
| `Delete only if empty` | 0 | フォルダーが空の場合のみ削除します |
| `Delete with contents` | 1 | フォルダーを中身ごと削除します   |

`Delete only if empty` が渡された、または option 引数を渡さなかった場合:

- フォルダーが空の場合にしか削除されません。そうでない場合、コマンドは何もせず、エラー-47 が生成されます。
- フォルダーが存在しない場合、エラー-120 が生成されます。

`Delete with contents` を渡した場合:

- フォルダーと、その中身がすべて削除されます。
  **警告**: フォルダーまたはその中身がロックされている、あるいは読み取り専用に設定されていたとしても、カレントユーザーが適切なアクセス権を持っていた場合には、フォルダーはその中身ごと削除されます。
- このフォルダー、またはその中のフォルダーのどいずれかが削除できなかった場合、削除できない要素が検知された時点で削除は中止され、エラー(\*) が返されます。 このとき、フォルダーは途中までしか削除されていない可能性があります。 削除が中止された場合、`GET LAST ERROR STACK` コマンドを使用して原因となったファイルの名前とパスを取得することができます。
- フォルダーが存在しない場合、コマンドは何もせず、エラーは返されません。 <br /><br /> (\*) Windowsの場合: -54 (ロックされたファイルを書き込みのために開こうとした)<br />
  macOSの場合: -45 (ファイルはロックされていたか不正なパス名)

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

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FolderClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.moveTo().Params -->

| 引数                | 型                         |    | 説明               |
| ----------------- | ------------------------- | -- | ---------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー          |
| newName           | テキスト                      | -> | 移動先でのフォルダーの完全な名称 |
| 戻り値               | 4D.Folder | <- | 移動したフォルダー        |

<!-- END REF -->

#### 説明

`.moveTo()` 関数は、<!-- REF #FolderClass.moveTo().Summary -->`Folder` オブジェクト (ソースフォルダー) を *destinationFolder* が指定する移行先へと移動すると同時に、*newName* を指定した場合は名称も変更します<!-- END REF -->。

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

<!-- END REF -->

<!-- INCLUDE directory.name.Desc -->

<!-- INCLUDE directory.original.Desc -->

<!-- INCLUDE directory.parent.Desc -->

<!-- INCLUDE directory.path.Desc -->

<!-- INCLUDE directory.platformPath.Desc -->

<!-- REF folder.rename().Desc -->

## .rename()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FolderClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.rename().Params -->

| 引数      | 型                         |    | 説明             |
| ------- | ------------------------- | -- | -------------- |
| newName | テキスト                      | -> | フォルダーの新しい完全な名称 |
| 戻り値     | 4D.Folder | <- | 名称変更されたフォルダー   |

<!-- END REF -->

#### 説明

`.rename()` 関数は、<!-- REF #FolderClass.rename().Summary -->*newName* に指定した名称にフォルダー名を変更し、名称変更後の `Folder` オブジェクトを返します<!-- END REF -->。

*newName* 引数は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。 そうでない場合、エラーが返されます。 同じ名前のファイルがすでに存在する場合には、エラーが返されます。

**返されるオブジェクト**

名称変更された `Folder` オブジェクト。

#### 例題

```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<!-- END REF -->
