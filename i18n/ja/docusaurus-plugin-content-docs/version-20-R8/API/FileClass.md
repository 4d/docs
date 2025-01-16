---
id: FileClass
title: File
---

`File` オブジェクトは [`File`](../commands/file.md) コマンドによって作成されます。 これらのオブジェクトには、(実在しているか否かに関わらず) ディスクファイルへの参照が格納されます。 たとえば、新規ファイルを作成するために `File` コマンドを実行した場合、有効な `File` オブジェクトが作成されますが、[`file.create()`](#create) 関数を呼び出すまで、ディスク上にはなにも保存されていません。

### 例題

プロジェクトフォルダーにプリファレンスファイルを作成します:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### パス名

`File` オブジェクトは、`filesystems` や `posix` シンタックスを含む、いくつかのパス名をサポートしています。 使用できるパス名についての詳細は [**パス名**](../Concepts/paths.md) ページを参照ください。

### File オブジェクト

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #document.copyTo().Summary -->                           |
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FileClass.create().Summary -->                         |
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FileClass.createAlias().Summary -->          |
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #document.creationDate.Summary -->             |
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #document.creationTime.Summary -->             |
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FileClass.delete().Summary -->                         |
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)<br/><!-- INCLUDE #document.exists.Summary -->                               |
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)<br/><!-- INCLUDE #document.extension.Summary -->                      |
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #document.fullName.Summary -->                         |
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)<br/><!-- INCLUDE #FileClass.getAppInfo().Summary -->             |
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->                    |
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #document.getIcon().Summary -->                        |
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #document.getText().Summary -->                        |
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #document.hidden.Summary -->                               |
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #document.isAlias.Summary -->                            |
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #document.isFile.Summary -->                               |
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #document.isFolder.Summary -->                         |
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)<br/><!-- INCLUDE #document.isWritable.Summary -->                   |
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #document.modificationDate.Summary --> |
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #document.modificationTime.Summary --> |
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FileClass.moveTo().Summary -->                         |
| [<!-- INCLUDE #document.name.Syntax -->](#name)<br/><!-- INCLUDE #document.name.Summary -->                                     |
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)<br/><!-- INCLUDE #FileClass.open().Summary -->                               |
| [<!-- INCLUDE #document.original.Syntax -->](#original)<br/><!-- INCLUDE #document.original.Summary -->                         |
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)<br/><!-- INCLUDE #document.parent.Summary -->                               |
| [<!-- INCLUDE #document.path.Syntax -->](#path)<br/><!-- INCLUDE #document.path.Summary -->                                     |
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #document.platformPath.Summary -->             |
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FileClass.rename().Summary -->                         |
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)<br/><!-- INCLUDE #FileClass.setAppInfo().Summary -->             |
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)<br/><!-- INCLUDE #FileClass.setContent().Summary -->             |
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)<br/><!-- INCLUDE #FileClass.setText().Summary -->                      |
| [<!-- INCLUDE #document.size.Syntax -->](#size)<br/><!-- INCLUDE #document.size.Summary -->                                     |

## 4D.File.new()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #4D.File.new().Syntax -->

**4D.File.new** ( *path* : Text { ; *pathType* : Integer } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer ) : 4D.File<!-- END REF -->

#### 説明

`4D.File.new()` 関数は、<!-- REF #4D.File.new().Summary -->`4D.File` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 この関数の機能は、[`File`](../commands/file.md) コマンドと同一です。

> `4D.File.new()` よりも、短い [`File`](../commands/file.md) コマンドの使用が推奨されます。

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->

## .create()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF file.create().Note -->

**ZIPアーカイブには利用できません**<!-- END REF -->

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->

<!--REF #FileClass.create().Params -->

| 引数  | 型       |                             | 説明                                   |
| --- | ------- | --------------------------- | ------------------------------------ |
| 戻り値 | Boolean | <- | ファイルが正常に作成された場合に true、それ以外の場合は false |

<!-- END REF -->

#### 説明

`.create()` 関数は、<!-- REF #FileClass.create().Summary -->`File` オブジェクトのプロパティに基づいてディスク上にファイルを作成します<!-- END REF -->。

必要であれば、 関数は [platformPath](#platformpath) あるいは [path](#path) プロパティの詳細に基づいてフォルダー階層を作成します。 ファイルがディスク上にすでに存在する場合、関数は何もせず、false を返します (エラーは返されません)。

**戻り値**

- ファイルが正常に作成された場合には **true**
- すでに同じ名前のファイルが存在する、あるいはエラーが発生した場合には **false**

#### 例題

データベースフォルダー内にプリファレンスファイルを作成します:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

<!-- END REF -->

<!-- REF file.createAlias().Desc -->

## .createAlias()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.createAlias().Params -->

| 引数                | 型                         |                             | 説明                       |
| ----------------- | ------------------------- | --------------------------- | ------------------------ |
| destinationFolder | 4D.Folder | ->                          | エイリアスまたはショートカットの作成先フォルダー |
| aliasName         | Text                      | ->                          | エイリアスまたはショートカットの名称       |
| aliasType         | Integer                   | ->                          | エイリアスリンクのタイプ             |
| 戻り値               | 4D.File   | <- | エイリアスまたはショートカットのファイル参照   |

<!-- END REF -->

#### 説明

`.createAlias()` 関数は、*destinationFolder* オブジェクトで指定されたフォルダー内に、*aliasName* が指定する名称で、対象ファイルへの<!-- REF #FileClass.createAlias().Summary -->エイリアス (macOS) またはショートカット (Windows) を作成します<!-- END REF -->。

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

データベースフォルダー内のファイルへのエイリアスを作成します:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```

<!-- END REF -->

<!-- INCLUDE document.creationDate.Desc -->

<!-- INCLUDE document.creationTime.Desc -->

<!-- REF file.delete().Desc -->

## .delete()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->

<!-- REF #FileClass.delete().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.delete()` 関数は、<!-- REF #FileClass.delete().Summary -->ファイルを削除します<!-- END REF -->。

ファイルがディスク上に存在しない場合、関数は何もしません (エラーは生成されません)。

ファイルが現在開かれている場合、結果は OS に依存します:

- Windows上では、エラーが生成されます。
- macOS上では、エラーは生成されず、ファイルが削除されます。

:::caution

`.delete()` はディスク上の任意のファイルを削除できます。 これには、他のアプリケーションで作成されたドキュメントや、アプリケーションそのものも対象になります。 そのため、`.delete()` は特に十分な注意を払って使用してください。 ファイルの削除は恒久的な操作であり取り消しできません。

:::

#### 例題

データベースフォルダー内の特定のファイルを削除します:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("ユーザーのプリファレンスファイルが削除されました。")
 End if
```

<!-- END REF -->

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- REF file.getAppInfo().Desc -->

## .getAppInfo()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->

<!--REF #FileClass.getAppInfo().Params -->

| 引数  | 型      |                             | 説明                                                                                   |
| --- | ------ | --------------------------- | ------------------------------------------------------------------------------------ |
| 戻り値 | Object | <- | .exe/.dll のバージョンリソースや .plist ファイルの中身 |

<!-- END REF -->

#### 説明

`.getAppInfo()` 関数は、<!-- REF #FileClass.getAppInfo().Summary -->**.exe** や **.dll**、**.plist** ファイルの情報をオブジェクトとして返します<!-- END REF -->。

この関数は、既存の .exe、.dll、あるいは .plist ファイルと使う必要があります。 ファイルがディスク上に存在しない、または、有効な .exe や .dll、.plist ファイルでない場合、この関数は空のオブジェクトを返します (エラーは生成されません)。

> この関数は xml形式の .plist ファイル (テキスト) のみをサポートしています。 バイナリ形式の .plist ファイルを対象に使用した場合、エラーが返されます。

**.exe または .dll ファイルの場合に返されるオブジェクト**

> .exe および .dll ファイルの読み取りは Windows上でのみ可能です。

プロパティ値はすべてテキストです。

| プロパティ            | 型    |
| ---------------- | ---- |
| InternalName     | Text |
| ProductName      | Text |
| CompanyName      | Text |
| LegalCopyright   | Text |
| ProductVersion   | Text |
| FileDescription  | Text |
| FileVersion      | Text |
| OriginalFilename | Text |

**.plist ファイルの場合に返されるオブジェクト**

xml ファイルの中身は解析され、オブジェクトのプロパティとしてキーが返されます。 キーの型 (テキスト、ブール、数値) は維持されます。 `.plist dict` は JSON オブジェクトとして返されます。 また、`.plist array` は JSON 配列として返されます。

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

<!-- END REF -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE document.hidden.Desc -->

<!-- INCLUDE document.isAlias.Desc -->

<!-- INCLUDE document.isFile.Desc -->

<!-- INCLUDE document.isFolder.Desc -->

<!-- INCLUDE document.isWritable.Desc -->

<!-- INCLUDE document.modificationDate.Desc -->

<!-- INCLUDE document.modificationTime.Desc -->

<!-- REF file.moveTo().Desc -->

## .moveTo()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->

| 引数                | 型                         |                             | 説明              |
| ----------------- | ------------------------- | --------------------------- | --------------- |
| destinationFolder | 4D.Folder | ->                          | 宛先フォルダー         |
| newName           | Text                      | ->                          | 移動先でのファイルの完全な名称 |
| 戻り値               | 4D.File   | <- | 移動したファイル        |

<!-- END REF -->

#### 説明

`.moveTo()` 関数は、<!-- REF #FileClass.moveTo().Summary -->`File` オブジェクトを *destinationFolder* が指定する移行先へと移動すると同時に、<em x-id="3">newName</em> を指定した場合は名称も変更します<!-- END REF -->。

*destinationFolder* 引数が指定するフォルダーはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。

デフォルトでは、移動したファイルは元の名前を維持します。 移動の際にファイル名を変更したい場合、新しい完全な名前を *newName* に渡します。 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

**返されるオブジェクト**

移動後の `File` オブジェクト。

#### 例題

```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```

<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

<!-- REF file.open().Desc -->

## .open()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->

<!--REF #FileClass.open().Params -->

| 引数      | 型                                                |                             | 説明                                               |
| ------- | ------------------------------------------------ | --------------------------- | ------------------------------------------------ |
| mode    | Text                                             | ->                          | 開くモード: "read", "write", "append" |
| options | Object                                           | ->                          | 開くオプション                                          |
| 戻り値     | [4D.FileHandle](FileHandleClass) | <- | 新規の FileHandle オブジェクト                            |

<!-- END REF -->

#### 説明

`.open()` 関数は、<!-- REF #FileClass.open().Summary -->対象のファイルについて、指定のモード (*mode*) またはオプション (*options*) で新規の [`4D.FileHandle`](FileHandleClass) オブジェクトを作成し、返します<!-- END REF -->。 [4D.FileHandle](FileHandleClass) クラスの関数とプロパティを使用して、ファイルにコンテンツを書き込んだり読み取ったり、追加したりすることができます。

*mode* (text) 引数として、どのモードで FileHandle を開くかを指定します。

| *mode*   | 説明                                                                                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "read"   | (デフォルト) ファイルから値を読み取るための FileHandle を作成します。 ディスク上にファイルが存在しない場合は、エラーが返されます。 "read" モードの FileHandle は、同じ File オブジェクトに対していくつでも開くことができます。        |
| "write"  | ファイルに値を書き込むための FileHandle を作成します (書き込みはファイルの先頭から)。 ディスク上にファイルが存在しない場合は、作成されます。 "write" モードの FileHandle は、同じ File オブジェクトに対して 1つのみ開くことができます。  |
| "append" | ファイルに値を書き込むための FileHandle を作成します (書き込みはファイルの最後から)。 ディスク上にファイルが存在しない場合は、作成されます。 "append" モードの FileHandle は、同じ File オブジェクトに対して 1つのみ開くことができます。 |

> *mode* の値は、文字の大小を区別します。

*option* (object) 引数を使って、以下のプロパティを通じて FileHandle にさらなるオプションを渡すことができます (これらのプロパティはその後、開かれた [FileHandle オブジェクト](FileHandleClass) から取得できます)。

| *オプション*           | 型               | 説明                                                                                        | デフォルト          |
| ----------------- | --------------- | ----------------------------------------------------------------------------------------- | -------------- |
| `.mode`           | Text            | 開くモード (上記の *mode* 参照)                                                  | "read"         |
| `.charset`        | Text            | ファイルの読み取りや書き込みに使用される文字セット。 セットの標準名を使用します (たとえば、"ISO-8859-1" や "UTF-8") | "UTF-8"        |
| `.breakModeRead`  | Text または Number | ファイルの読み取り時に使用される改行の処理モード (下記参照)                                        | "native" または 1 |
| `.breakModeWrite` | Text または Number | ファイルの書き込み時に使用される改行の処理モード (下記参照)                                        | "native" または 1 |

この関数は、元の改行文字をすべて置き換えます。 デフォルトではネイティブの区切り文字が使われますが、別の区切り文字を定義することも可能です。 `.breakModeRead` と `.breakModeWrite` は、改行文字に適用する処理を指定します。 以下のいずれかの値を使用できます (テキストまたは数値):

| 改行モードの値 (テキスト) | 改行モードの値 (数値/定数)                   | 説明                                                                                                                                                                |
| --------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"                          | 1 (`Document with native format`) | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。 macOS では LF (ラインフィード) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| "crlf"                            | 2 (`Document with CRLF`)          | 改行は Windows のデフォルトフォーマットである CRLF (キャリッジリターン＋ラインフィード) へと変換されます。                                                                                 |
| "cr"                              | 3 (`Document with CR`)            | 改行はクラシック Mac OS のデフォルトフォーマットである CR (キャリッジリターン) へと変換されます。                                                                                       |
| "lf"                              | 4 (`Document with LF`)            | 改行は Unix および macOS のデフォルトフォーマットである LF (ラインフィード) へと変換されます。                                                                                      |

> *break mode as text* の値は、文字の大小を区別します。

#### 例題

"ReadMe.txt" ファイルを読み取るための FileHandle を作成します:

```4d
var $f : 4D.File
var $fhandle : 4D.FileHandle

$f:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
$fhandle:=$f.open("read")

```

<!-- END REF -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- REF file.rename().Desc -->

## .rename()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->

<!--REF #FileClass.rename().Params -->

| 引数      | 型                       |                             | 説明            |
| ------- | ----------------------- | --------------------------- | ------------- |
| newName | Text                    | ->                          | ファイルの新しい完全な名称 |
| 戻り値     | 4D.File | <- | 名称変更されたファイル   |

<!-- END REF -->

#### 説明

`.rename()` 関数は、<!-- REF #FileClass.rename().Summary -->ファイル名を *newName* に指定した名称に変更し、名称変更後の `File` オブジェクトを返します<!-- END REF -->。

*newName* 引数は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。 そうでない場合、エラーが返されます。 同じ名前のファイルがすでに存在する場合には、エラーが返されます。

この関数はファイルの完全な名前を編集することに留意が必要です。 つまり、*newName* に拡張子を渡さなかった場合、新しいファイル名には拡張子がありません。

**返されるオブジェクト**

名称変更された `File` オブジェクト。

#### 例題

"ReadMe.txt" ファイルを "ReadMe_new.txt" というファイルに名称変更します:

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```

<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->

## .setAppInfo()

<details><summary>履歴</summary>

| リリース | 内容            |
| ---- | ------------- |
| 20   | WinIcon をサポート |
| 19   | 追加            |

</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->

<!--REF #FileClass.setAppInfo().Params -->

| 引数   | 型      |    | 説明                                                                                          |
| ---- | ------ | -- | ------------------------------------------------------------------------------------------- |
| info | Object | -> | .exe/.dll のバージョンリソースや .plist ファイルに書き込むプロパティ |

<!-- END REF -->

#### 説明

`.setAppInfo()` 関数は、<!-- REF #FileClass.setAppInfo().Summary -->*info* に渡したプロパティを **.exe** や **.dll**、**.plist** ファイルの情報として書き込みます<!-- END REF -->。

この関数は、既存の .exe、.dll、あるいは .plist ファイルと使う必要があります。 ファイルがディスク上に存在しない、または、有効な .exe や .dll、.plist ファイルでない場合、この関数は何もしません (エラーは生成されません)。

> この関数は xml形式の .plist ファイル (テキスト) のみをサポートしています。 バイナリ形式の .plist ファイルを対象に使用した場合、エラーが返されます。

**.exe または .dll ファイル用の *info* オブジェクト**

> .exe および .dll ファイル情報の書き込みは Windows上でのみ可能です。

*info* オブジェクトに設定された各プロパティは .exe または .dll ファイルのバージョンリソースに書き込まれます。 以下のプロパティが使用できます (それ以外のプロパティは無視されます):

| プロパティ            | 型    | 説明                                                                   |
| ---------------- | ---- | -------------------------------------------------------------------- |
| InternalName     | Text |                                                                      |
| ProductName      | Text |                                                                      |
| CompanyName      | Text |                                                                      |
| LegalCopyright   | Text |                                                                      |
| ProductVersion   | Text |                                                                      |
| FileDescription  | Text |                                                                      |
| FileVersion      | Text |                                                                      |
| OriginalFilename | Text |                                                                      |
| WinIcon          | Text | .icoファイルの Posixパス。 このプロパティは、4D が生成した実行ファイルにのみ適用されます。 |

`WinIcon` を除くすべてのプロパティにおいて、値として null または空テキストを渡すと、空の文字列がプロパティに書き込まれます。 テキストでない型の値を渡した場合には、文字列に変換されます。

`WinIcon` プロパティにおいては、アイコンファイルが存在しないか、フォーマットが正しくない場合、エラーが発生します。

**.plist ファイル用の *info* オブジェクト**

*info* オブジェクトに設定された各プロパティは .plist ファイルにキーとして書き込まれます。 あらゆるキーの名称が受け入れられます。 値の型は可能な限り維持されます。

*info* に設定されたキーが .plist ファイル内ですでに定義されている場合は、その値が更新され、元の型が維持されます。 .plist ファイルに既存のそのほかのキーはそのまま維持されます。

> 日付型の値を定義するには、Xcode plist エディターのようにミリ秒を除いた ISO UTC 形式の JSONタイムスタンプ文字列 (例: "2003-02-01T01:02:03Z") を使用します。

#### 例題

```4d
  // .exe ファイルの著作権、バージョン、およびアイコン情報を設定します (Windows)
var $exeFile; $iconFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$iconFile:=File("/RESOURCES/myApp.ico")
$info:=New object
$info.LegalCopyright:="Copyright 4D 2023"
$info.ProductVersion:="1.0.0"
$info.WinIcon:=$iconFile.path
$exeFile.setAppInfo($info)
```

```4d
  // info.plist ファイルのキーをいくつか設定します (すべてのプラットフォーム)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2023" // テキスト
$info.ProductVersion:=12 // 整数
$info.ShipmentDate:="2023-04-22T06:00:00Z" // タイムスタンプ
$info.CFBundleIconFile:="myApp.icns" // macOS 用
$infoPlistFile.setAppInfo($info)
```

#### 参照

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->

## .setContent()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->

<!--REF #FileClass.setContent().Params -->

| 引数      | 型    |    | 説明            |
| ------- | ---- | -- | ------------- |
| content | BLOB | -> | ファイルの新しいコンテンツ |

<!-- END REF -->

#### 説明

`.setContent()` 関数は、<!-- REF #FileClass.setContent().Summary -->*content* 引数の BLOB に保存されているデータを使用して、ファイルの全コンテンツを上書きします<!-- END REF -->。 BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。

#### 例題

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```

<!-- END REF -->

<!-- REF file.setText().Desc -->

## .setText()

<details><summary>履歴</summary>

| リリース  | 内容                                                                                  |
| ----- | ----------------------------------------------------------------------------------- |
| 19 R3 | 新規プロジェクトのデフォルト: BOMなし、(macOS の場合) EOL として LF を使用 |
| 17 R5 | 追加                                                                                  |

</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->

<!--REF #FileClass.setText().Params -->

| 引数          | 型       |    | 説明            |
| ----------- | ------- | -- | ------------- |
| text        | Text    | -> | ファイルに保存するテキスト |
| charSetName | Text    | -> | 文字セットの名前      |
| charSetNum  | Integer | -> | 文字セットの番号      |
| breakMode   | Integer | -> | 改行の処理モード      |

<!-- END REF -->

#### 説明

`.setText()` 関数は、<!-- REF #FileClass.setText().Summary -->*text* に渡されたテキストをファイルの新しいコンテンツとして書き込みます<!-- END REF -->。

`File` オブジェクトで参照されているファイルがディスク上に存在しない場合、このメソッドがそのファイルを作成します。 ディスク上にファイルが存在する場合、ファイルが開かれている場合を除き、以前のコンテンツは消去されます。 ファイルが開かれている場合はコンテンツはロックされ、エラーが生成されます。

*text* には、ファイルに書き込むテキストを渡します。 テキストリテラル ("my text" など) のほか、4Dテキストフィールドや変数も渡せます。

任意で、コンテンツの書き込みに使用する文字セットを渡します。 これには、次の二つの方法があります:

- *charSetName* に標準の文字セット名を含んだ文字列 ("ISO-8859-1" や "UTF-8" など) を渡します。
- *charSetNum* に標準の文字セット名の MIBEnum ID (倍長整数) を渡します。

> 4D によってサポートされている文字セットの一覧については、`CONVERT FROM TEXT` コマンドを参照ください。

文字セットにバイトオーダーマーク (BOM) が存在し、かつその文字セットに "-no-bom" 接尾辞 (例: "UTF-8-no-bom") が含まれていない場合、4D は BOM をファイルに挿入します。 文字セットを指定しない場合、 4D はデフォルトで "UTF-8" の文字セットを BOMなしで使用します。

*breakMode* には、ファイルを保存する前に改行文字に対しておこなう処理を指定する倍長整数を渡します。 **System Documents** テーマ内にある、以下の定数を使用することができます:

| 定数                            | 値 | 説明                                                                                                                                                                |
| ----------------------------- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0 | 何も処理をしません。                                                                                                                                                        |
| `Document with native format` | 1 | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。 macOS では LF (ラインフィード) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2 | 改行は Windows のデフォルトフォーマットである CRLF (キャリッジリターン＋ラインフィード) へと変換されます。                                                                                 |
| `Document with CR`            | 3 | 改行はクラシック Mac OS のデフォルトフォーマットである CR (キャリッジリターン) へと変換されます。                                                                                       |
| `Document with LF`            | 4 | 改行は Unix および macOS のデフォルトフォーマットである LF (ラインフィード) へと変換されます。                                                                                      |

*breakMode* 引数を渡さなかった場合はデフォルトで、改行はネイティブモード (1) で処理されます。

> **互換性に関する注記:** EOL (改行コード) および BOM の管理については、互換性オプションが利用可能です。 doc.4d.com の[互換性ページ](https://doc.4d.com/4dv19R/help/title/ja/page3239.html) を参照ください。

#### 例題

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```

<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
