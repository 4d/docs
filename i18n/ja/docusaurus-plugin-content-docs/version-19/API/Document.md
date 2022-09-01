---
id: Document
title: Document クラス
---

## 詳細

<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.creationDate.Syntax -->

**.creationDate** : Date<!-- END REF -->

#### 詳細

The `.creationDate` property returns <!-- REF #document.creationDate.Summary -->The `.creationDate` property returns<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

## .creationTime

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.creationTime.Syntax -->

**.creationTime** : Time<!-- END REF -->

#### 詳細

The `.creationTime` property  returns <!-- REF #document.creationTime.Summary -->the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

このプロパティは **読み取り専用** です。

<!-- REF document.exists.Desc -->
## .exists

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.exists.Syntax -->

**.exists** : Boolean<!-- END REF -->

#### 詳細

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.extension.Syntax -->

**.extension** : Text<!-- END REF -->

#### 詳細

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. 拡張子は必ず"." で始まります。 ファイル名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.fullName.Desc -->
## .fullName

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.fullName.Syntax -->

**.fullName** : Text<!-- END REF -->

#### 詳細

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.hidden.Desc -->
## .hidden

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.hidden.Syntax -->

**.hidden** : Boolean<!-- END REF -->

#### 詳細

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.isAlias.Desc -->
## .isAlias

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.isAlias.Syntax -->

**.isAlias** : Boolean<!-- END REF -->

#### 詳細

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.isFile.Desc -->
## .isFile

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.isFile.Syntax -->

**.isFile** : Boolean<!-- END REF -->

#### 詳細

The `.isFile` property returns <!-- REF #document.isFile.Summary -->The `.copyTo()` function<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.isFolder.Desc -->
## .isFolder

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.isFolder.Syntax -->

**.isFolder** : Boolean<!-- END REF -->

#### 詳細

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always true for a file<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.isWritable.Desc -->
## .isWritable

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.isWritable.Syntax -->

**.isWritable** : Boolean<!-- END REF -->

#### 詳細

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.
> このプロパティは 4Dアプリケーションがディスクに書き込めるかどうか (アクセス権限) をチェックし、ファイルの *writable* (書き込み可能) 属性のみ依存するわけではありません。

このプロパティは **読み取り専用** です。

**例題**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```

<!-- END REF -->

<!-- REF document.modificationDate.Desc -->
## .modificationDate

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.modificationDate.Syntax -->

**.modificationDate** : Date<!-- END REF -->

#### 詳細

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->The `.modificationDate` property returns<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->
## .modificationTime

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.modificationTime.Syntax -->

**.modificationTime** : Time<!-- END REF -->

##### 詳細

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->The `.modificationTime` property returns<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.name.Desc -->
## .name

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.name.Syntax -->

**.name** : Text<!-- END REF -->

#### 詳細

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.original.Desc -->
## .original

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.original.Syntax -->

**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### 詳細

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. ターゲット要素は以下のいずれかです:

* File オブジェクト
* Folder オブジェクト

エイリアスでないファイルについては、プロパティは同じファイルオブジェクトをファイルとして返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.parent.Desc -->
## .parent

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.parent.Syntax -->

**.parent** : 4D.Folder<!-- END REF -->

#### 詳細

The `.parent` property returns <!-- REF #document.parent.Summary -->The `.parent` property returns<!-- END REF -->. .

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.path.Desc -->
## .path

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.path.Syntax -->

**.path** : Text<!-- END REF -->

#### 詳細

The `.path` property returns <!-- REF #document.path.Summary -->The `.path` property returns<!-- END REF -->. .

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.platformPath.Desc -->
## .platformPath

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.platformPath.Syntax -->

**.platformPath** : Text<!-- END REF -->

#### 詳細

The `.platformPath` property returns <!-- REF #document.platformPath.Summary -->The `.platformPath` property returns<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.size.Desc -->
## .size

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.size.Syntax -->

**.size** : Real<!-- END REF -->

#### 詳細

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. ファイルがディスク上に存在しない場合、サイズは 0 になります。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.copyTo().Desc -->
## .copyTo()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.copyTo().Syntax -->

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->

<!-- REF #document.copyTo().Params -->
| 引数                | タイプ       |    | 詳細                                    |
| ----------------- | --------- |:--:| ------------------------------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー                               |
| newName           | テキスト      | -> | コピー先フォルダーの名前                          |
| overwrite         | 整数        | -> | 既存要素を上書きするには `fk overwrite` を渡します     |
| Result            | 4D.File   | <- | コピーされたファイル|<!-- END REF -->

|

#### 詳細

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->The `.isFolder` property returns <!-- END REF -->.

*destinationFolder* 引数が指定するフォルダーはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。

デフォルトで、ファイルは元の名前を維持したままコピーされます。 コピーの際にフォルダー名を変更したい場合、新しい名前を *newName* に渡します。 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

*destinationFolder* 引数が指定するフォルダー内に同じ名前のファイルが既に存在する場合、4D はデフォルトでエラーを生成します。 *overwrite* に `fk overwrite` 定数を渡すことで、既存のフォルダーを無視して上書きすることができます:

| 定数             | Value | 説明                 |
| -------------- | ----- | ------------------ |
| `fk overwrite` | 4     | 既存要素があれば、それを上書きします |

**戻り値**

コピーされた `File` オブジェクト。

#### 例題

ユーザーのドキュメントフォルダーにあるピクチャーファイルを、アプリケーションフォルダー内にコピーします。

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

<!-- END REF -->

<!-- REF document.getContent().Desc -->
## .getContent()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.getContent().Syntax -->

**.getContent( )** : Blob<!-- END REF -->

<!-- REF #document.getContent().Params -->
| 引数     | タイプ  |    | 詳細                                    |
| ------ | ---- | -- | ------------------------------------- |
| Result | Blob | <- | ファイルのコンテンツ|<!-- END REF -->

|

#### 詳細

The `.getContent()` function  <!-- REF #document.getContent().Summary -->The `.getContent()` function<!-- END REF -->. .

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

<!-- END REF -->

<!-- REF document.getIcon().Desc -->
## .getIcon()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.getIcon().Syntax -->

**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #document.getIcon().Params -->
| 引数     | タイプ     |    | 詳細                              |
| ------ | ------- | -- | ------------------------------- |
| size   | 整数      | -> | 取得するピクチャーの一辺の長さ (ピクセル単位)        |
| Result | Picture | <- | アイコン|<!-- END REF -->

|

#### 詳細

The `.getIcon()` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

任意の *size* 引数を渡すと、返されるアイコンのサイズをピクセル単位で指定することができます。 この値は、実際にはアイコンを格納している正方形の一辺の長さを表しています。 アイコンは通常、32x32ピクセル ("大きいアイコン") または 16x16ピクセル ("小さいアイコン") で定義されています。 この引数に 0 を渡すか省略した場合、"大きいアイコン" が返されます。

ファイルがディスク上に存在しない場合、デフォルトの空のアイコンが返されます。

**戻り値**

ファイルアイコンの [ピクチャー](../Concepts/picture.html)。

<!-- END REF -->

<!-- REF document.getText().Desc -->
## .getText()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.getText().Syntax -->

**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->

<!-- REF #document.getText().Params -->
| 引数          | タイプ  |    | 詳細                                          |
| ----------- | ---- | -- | ------------------------------------------- |
| charSetName | テキスト | -> | 文字セットの名前                                    |
| charSetNum  | 整数   | -> | 文字セットの番号                                    |
| breakMode   | 整数   | -> | 改行の処理モード                                    |
| Result      | テキスト | <- | ドキュメントから取得したテキスト|<!-- END REF -->

|

#### 詳細

The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

任意で、コンテンツの読み取りに使用する文字セットを渡します。 これには、次の二つの方法があります:

* *charSetName* に標準の文字セット名を含んだ文字列 ("ISO-8859-1" や "UTF-8" など) を渡します。
* *charSetNum* に標準の文字セット名の MIBEnum ID (倍長整数) を渡します。

> 4D によってサポートされている文字セットの一覧については、`CONVERT FROM TEXT` コマンドを参照ください。

ドキュメントにバイトオーダーマーク (BOM) が含まれている場合、4D は *charSetName* または *charSetNum* 引数で設定されている文字セットではなく、BOM で指定されたものを使用します (結果として引数は無視されます)。 ドキュメントに BOM が含まれておらず、また *charSetName* および *charSetNum* 引数が渡されなかった場合、4D はデフォルトで "UTF-8" を文字セットとして使用します。

*breakMode* には、ドキュメントの改行文字に対しておこなう処理を指定する倍長整数を渡します。 "System Documents" テーマの、以下の定数を使用することができます:

| 定数                            | Value | 説明                                                                                                        |
| ----------------------------- | ----- | --------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | 何も処理をしません。                                                                                                |
| `Document with native format` | 1     | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。macOS では CR (キャリッジリターン) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2     | 改行は Windowsフォーマット (CRLF、キャリッジリターン＋ラインフィード) へと変換されます。                                                      |
| `Document with CR`            | 3     | 改行は macOSフォーマット (CR、キャリッジリターン) へと変換されます。                                                                  |
| `Document with LF`            | 4     | 改行は Unixフォーマット (LF、ラインフィード) へと変換されます。                                                                     |

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

以下の結果が `$txt` に得られます:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

このとき、区切り文字は `\t` (タブ) で、改行コードは `\r\n` (CRLF) です。

以下は、同じファイルで改行コードが異なる例です:

```4d
 $txt:=$myFile.getText("UTF-8", Document with LF)
```

この場合、`$txt` の値は次の通りです:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

このとき、改行コードは `\n` (LF) です。

<!-- END REF -->
