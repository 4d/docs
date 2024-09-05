---
id: Document
title: Document クラス
---

## 説明

<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### 説明

`.creationDate` プロパティは、 <!-- REF #document.creationDate.Summary -->ファイルの作成日を返します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

## .creationTime

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### 説明

`.creationTime` プロパティは、 <!-- REF #document.creationTime.Summary -->ファイルの作成時刻を返します<!-- END REF --> (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。

<!-- REF document.exists.Desc -->
## .exists

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### 説明

`.exists` プロパティは、 <!-- REF #document.exists.Summary -->ディスク上にファイルが存在する場合は true を返します<!-- END REF -->(それ以外の場合は false)。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### 説明

`.extension` プロパティは、 <!-- REF #document.extension.Summary -->ファイル名の拡張子を返します (あれば)<!-- END REF -->. 拡張子は必ず"." で始まります。 ファイル名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.fullName.Desc -->
## .fullName

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### 説明

`.fullName` プロパティは、 <!-- REF #document.fullName.Summary -->拡張子 (あれば) を含めたファイルの完全な名称を返します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.hidden.Desc -->
## .hidden

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### 説明

`.hidden` プロパティは、 <!-- REF #document.hidden.Summary -->ファイルがシステムレベルで "非表示" に設定されていれば true を返します<!-- END REF -->(それ以外の場合は false)。

**読み書き可能** プロパティです。

<!-- END REF -->

<!-- REF document.isAlias.Desc -->
## .isAlias

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### 説明

`.isAlias` プロパティは、 <!-- REF #document.isAlias.Summary -->ファイルがエイリアス、ショートカット、シンボリックリンクのいずれかである場合に true を返します<!-- END REF -->(それ以外の場合は false)。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.isFile.Desc -->
## .isFile

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### 説明

`.isFile` プロパティは、 <!-- REF #document.isFile.Summary -->ファイルに対しては常に true を返します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.isFolder.Desc -->
## .isFolder

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### 説明

`.isFolder` プロパティは、 <!-- REF #document.isFolder.Summary -->ファイルに対しては常に false を返します。<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.isWritable.Desc -->
## .isWritable

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.isWritable.Syntax -->**.isWritable** : Boolean<!-- END REF -->

#### 説明

`.isWritable` プロパティは、 <!-- REF #document.isWritable.Summary -->ファイルがディスク上に存在し、書き込み可能な場合に true を返します<!-- END REF -->.
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

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### 説明

`.modificationDate` プロパティは、 <!-- REF #document.modificationDate.Summary -->ファイルの最終変更日を返します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->
## .modificationTime

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

##### 説明

`.modificationTime` プロパティは、 <!-- REF #document.modificationTime.Summary -->ファイルの最終変更時刻を返します<!-- END REF --> (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.name.Desc -->
## .name

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

`.name` プロパティは、 <!-- REF #document.name.Summary -->拡張子 (あれば) を含まないファイル名を返します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.original.Desc -->
## .original

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.original.Syntax -->**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### 説明

`.original` プロパティは、 <!-- REF #document.original.Summary -->エイリアス、ショートカット、シンボリックリンクファイルのターゲット要素を返します<!-- END REF -->. ターゲット要素は以下のいずれかです:

* File オブジェクト
* Folder オブジェクト

エイリアスでないファイルについては、プロパティは同じファイルオブジェクトをファイルとして返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.parent.Desc -->
## .parent

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### 説明

`.parent` プロパティは、 <!-- REF #document.parent.Summary -->対象ファイルの親フォルダーオブジェクトを返します<!-- END REF -->. パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.path.Desc -->
## .path

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

`.path` プロパティは、 <!-- REF #document.path.Summary -->ファイルの POSIXパスを返します<!-- END REF -->. パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.platformPath.Desc -->
## .platformPath

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### 説明

`.platformPath` プロパティは、 <!-- REF #document.platformPath.Summary -->カレントプラットフォームのシンタックスで表現されたファイルのパスを返します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.size.Desc -->
## .size

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.size.Syntax -->**.size** : Real<!-- END REF -->

#### 説明

`.size` プロパティは、 <!-- REF #document.size.Summary -->ファイルのサイズ (バイト単位) を返します<!-- END REF -->. ファイルがディスク上に存在しない場合、サイズは 0 になります。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF document.copyTo().Desc -->
## .copyTo()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->


<!-- REF #document.copyTo().Params -->
| 引数                | 型         |    | 説明                                    |
| ----------------- | --------- |:--:| ------------------------------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー                               |
| newName           | Text      | -> | コピー先フォルダーの名前                          |
| overwrite         | 整数        | -> | 既存要素を上書きするには `fk overwrite` を渡します     |
| 戻り値               | 4D.File   | <- | コピーされたファイル|<!-- END REF -->

|

#### 説明

`.copyTo()` 関数は、 <!-- REF #document.copyTo().Summary -->`File` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします <!-- END REF -->.

*destinationFolder* 引数が指定するフォルダーはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。

デフォルトで、ファイルは元の名前を維持したままコピーされます。 コピーの際にフォルダー名を変更したい場合、新しい名前を *newName* に渡します。 新しい名前は命名規則に則っている必要があります (例: ":", "/", 等の文字を含んでいない、など)。そうでない場合、エラーが返されます。

*destinationFolder* 引数が指定するフォルダー内に同じ名前のファイルが既に存在する場合、4D はデフォルトでエラーを生成します。 *overwrite* に `fk overwrite` 定数を渡すことで、既存のフォルダーを無視して上書きすることができます:

| 定数             | 値 | 説明                 |
| -------------- | - | ------------------ |
| `fk overwrite` | 4 | 既存要素があれば、それを上書きします |

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

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.getContent().Syntax -->**.getContent( )** : Blob<!-- END REF -->


<!-- REF #document.getContent().Params -->
| 引数  | 型    |    | 説明                                    |
| --- | ---- | -- | ------------------------------------- |
| 戻り値 | BLOB | <- | ファイルのコンテンツ|<!-- END REF -->

|

#### 説明

`.getContent()` 関数は、  <!-- REF #document.getContent().Summary -->ファイルの全コンテンツを格納した `BLOB` を返します<!-- END REF -->. BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。

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

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->


<!-- REF #document.getIcon().Params -->
| 引数   | 型     |    | 説明                              |
| ---- | ----- | -- | ------------------------------- |
| size | 整数    | -> | 取得するピクチャーの一辺の長さ (ピクセル単位)        |
| 戻り値  | ピクチャー | <- | アイコン|<!-- END REF -->

|

#### 説明

`.getIcon()` 関数は、 <!-- REF #document.getIcon().Summary -->ファイルのアイコンを返します<!-- END REF -->.

任意の *size* 引数を渡すと、返されるアイコンのサイズをピクセル単位で指定することができます。 この値は、実際にはアイコンを格納している正方形の一辺の長さを表しています。 アイコンは通常、32x32ピクセル ("大きいアイコン") または 16x16ピクセル ("小さいアイコン") で定義されています。 この引数に 0 を渡すか省略した場合、"大きいアイコン" が返されます。

ファイルがディスク上に存在しない場合、デフォルトの空のアイコンが返されます。

**戻り値**

ファイルアイコンの [ピクチャー](../Concepts/picture.html)。

<!-- END REF -->

<!-- REF document.getText().Desc -->
## .getText()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |
</details>

<!-- REF #document.getText().Syntax -->**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->


<!-- REF #document.getText().Params -->
| 引数          | 型    |    | 説明                                          |
| ----------- | ---- | -- | ------------------------------------------- |
| charSetName | Text | -> | 文字セットの名前                                    |
| charSetNum  | 整数   | -> | 文字セットの番号                                    |
| breakMode   | 整数   | -> | 改行の処理モード                                    |
| 戻り値         | Text | <- | ドキュメントから取得したテキスト|<!-- END REF -->

|

#### 説明

`.getText()` 関数は、 <!-- REF #document.getText().Summary -->ファイルのコンテンツをテキストとして返します <!-- END REF -->.

任意で、コンテンツの読み取りに使用する文字セットを渡します。 これには、次の二つの方法があります:

* *charSetName* に標準の文字セット名を含んだ文字列 ("ISO-8859-1" や "UTF-8" など) を渡します。
* *charSetNum* に標準の文字セット名の MIBEnum ID (倍長整数) を渡します。

> 4D によってサポートされている文字セットの一覧については、`CONVERT FROM TEXT` コマンドを参照ください。

ドキュメントにバイトオーダーマーク (BOM) が含まれている場合、4D は *charSetName* または *charSetNum* 引数で設定されている文字セットではなく、BOM で指定されたものを使用します (結果として引数は無視されます)。 ドキュメントに BOM が含まれておらず、また *charSetName* および *charSetNum* 引数が渡されなかった場合、4D はデフォルトで "UTF-8" を文字セットとして使用します。

*breakMode* には、ドキュメントの改行文字に対しておこなう処理を指定する倍長整数を渡します。 "System Documents" テーマの、以下の定数を使用することができます:

| 定数                            | 値 | 説明                                                                                                        |
| ----------------------------- | - | --------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0 | 何も処理をしません。                                                                                                |
| `Document with native format` | 1 | (デフォルト) 改行は OS のネイティブフォーマットに変換されます。macOS では CR (キャリッジリターン) に、Windows では CRLF (キャリッジリターン＋ラインフィード) に変換されます。 |
| `Document with CRLF`          | 2 | 改行は Windowsフォーマット (CRLF、キャリッジリターン＋ラインフィード) へと変換されます。                                                      |
| `Document with CR`            | 3 | 改行は macOSフォーマット (CR、キャリッジリターン) へと変換されます。                                                                  |
| `Document with LF`            | 4 | 改行は Unixフォーマット (LF、ラインフィード) へと変換されます。                                                                     |

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
 $txt:=$myFile.getText("UTF-8"; Document with LF)
```

この場合、`$txt` の値は次の通りです:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

このとき、改行コードは `\n` (LF) です。

<!-- END REF -->
