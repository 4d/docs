---
id: Document
title: Document クラス
---

## 説明


<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.creationDate.Syntax -->
**.creationDate** : Date<!-- END REF -->


#### 説明

`.creationDate` プロパティは、 <!-- REF #document.creationDate.Summary -->ファイルの作成日<!-- END REF -->を返します。

このプロパティは **読み取り専用** です。 

<!-- END REF -->
 
 
 <!-- REF document.creationTime.Desc -->
## .creationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.creationTime.Syntax -->
**.creationTime** : Time<!-- END REF -->


#### 説明

`.creationTime` プロパティは、 <!-- REF #document.creationTime.Summary -->ファイルの作成時刻<!-- END REF --> を返します (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。 

<!-- END REF -->




<!-- REF document.exists.Desc -->
## .exists

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #document.exists.Syntax -->
**.exists** : Boolean<!-- END REF -->


#### 説明

`.exists` プロパティは、 <!-- REF #document.exists.Summary -->ディスク上にファイルが存在する場合は true を返します<!-- END REF -->(それ以外の場合は false)。

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

#### 説明

`.extension` プロパティは、 <!-- REF #document.extension.Summary -->ファイル名の拡張子<!-- END REF -->を返します (あれば)。 An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

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

#### 説明

`.fullName` プロパティは、 <!-- REF #document.fullName.Summary -->拡張子 (あれば) を含めたファイルの完全な名称<!-- END REF -->を返します。

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


#### 説明

`.hidden` プロパティは、 <!-- REF #document.hidden.Summary -->ファイルがシステムレベルで "非表示" に設定されていれば true<!-- END REF -->を返します (それ以外の場合は false)。

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


#### 説明

`.isAlias` プロパティは、 <!-- REF #document.isAlias.Summary -->ファイルがエイリアス、ショートカット、シンボリックリンクのいずれかである場合には true<!-- END REF -->を返し、それ以外の場合には false を返します。

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


#### 説明

`.isFile` プロパティは、 <!-- REF #document.isFile.Summary -->ファイルに対しては常に true<!-- END REF -->を返します。

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


#### 説明

`.isFolder` プロパティは、 <!-- REF #document.isFolder.Summary -->ファイルに対しては常に false<!-- END REF -->を返します。

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


#### 説明

`.isWritable` プロパティは、 <!-- REF #document.isWritable.Summary -->ファイルがディスク上に存在し、書き込み可能な場合に true<!-- END REF -->を返します。
> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

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


#### 説明

`.modificationDate` プロパティは、 <!-- REF #document.modificationDate.Summary -->ファイルの最終変更日<!-- END REF -->を返します。

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


##### 説明

`.modificationTime` プロパティは、 <!-- REF #document.modificationTime.Summary -->ファイルの最終変更時刻<!-- END REF --> を返します (00:00 からの経過秒数の形式)。

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


#### 説明

`.name` プロパティは、 <!-- REF #document.name.Summary -->拡張子 (あれば) を含まないファイル名<!-- END REF -->を返します。

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
**.original** : 4D.File<br>**.original** : 4D.Folder<!-- END REF -->


#### 説明

`.original` プロパティは、 <!-- REF #document.original.Summary -->エイリアス、ショートカット、シンボリックリンクファイルのターゲット要素<!-- END REF -->を返します。 ターゲット要素は以下のいずれかです:

*   File オブジェクト
*   Folder オブジェクト

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


#### 説明

`.parent` プロパティは、 <!-- REF #document.parent.Summary -->対象ファイルの親フォルダーオブジェクト<!-- END REF -->を返します。 If the path represents a system path (e.g., "/DATA/"), the system path is returned.

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


#### 説明

`.path` プロパティは、 <!-- REF #document.path.Summary -->ファイルの POSIXパス<!-- END REF -->を返します。 If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

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


#### 説明

`.platformPath` プロパティは、 <!-- REF #document.platformPath.Summary -->カレントプラットフォームのシンタックスで表現されたファイルのパス<!-- END REF -->を返します。

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


#### 説明

`.size` プロパティは、 <!-- REF #document.size.Summary -->ファイルのサイズ (バイト単位)<!-- END REF -->を返します。 ファイルがディスク上に存在しない場合、サイズは 0 になります。

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
| 参照                | タイプ       |    | 説明                                |
| ----------------- | --------- |:--:| --------------------------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー                           |
| newName           | テキスト      | -> | コピー先フォルダーの名前                      |
| overwrite         | 整数        | -> | 既存要素を上書きするには `fk overwrite` を渡します |
| 戻り値               | 4D.File   | <- | Copied file                       |
<!-- END REF -->


#### 説明

`.copyTo()` 関数は、 <!-- REF #document.copyTo().Summary -->`File` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします <!-- END REF -->。

The *destinationFolder* must exist on disk, otherwise an error is generated.

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| 定数             | 結果 | 説明                 |
| -------------- | -- | ------------------ |
| `fk overwrite` | 4  | 既存要素があれば、それを上書きします |


**戻り値**

コピーされた `File` オブジェクト。

#### 例題

You want to copy a picture *file* from the user's document folder to the application folder:

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
| 参照  | タイプ  |    | 説明         |
| --- | ---- | -- | ---------- |
| 戻り値 | BLOB | <- | ファイルのコンテンツ |
<!-- END REF -->


#### 説明

`.getContent()` 関数は、  <!-- REF #document.getContent().Summary -->ファイルの全コンテンツを格納した BLOB を返します<!-- END REF -->。 BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。

**戻り値**

`Blob`。

#### 例題

To save a document's contents in a `BLOB` field:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
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
| 参照   | タイプ   |    | 説明                       |
| ---- | ----- | -- | ------------------------ |
| size | 整数    | -> | 取得するピクチャーの一辺の長さ (ピクセル単位) |
| 戻り値  | ピクチャー | <- | Icon                     |
<!-- END REF -->


#### 説明

`.getIcon()` 関数は、 <!-- REF #document.getIcon().Summary -->ファイルのアイコンを返します<!-- END REF -->。

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.

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
**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text<!-- END REF -->


<!-- REF #document.getText().Params -->
| 参照          | タイプ  |    | 説明                              |
| ----------- | ---- | -- | ------------------------------- |
| charSetName | テキスト | -> | Name of character set           |
| charSetNum  | 整数   | -> | Number of character set         |
| breakMode   | 整数   | -> | Processing mode for line breaks |
| 戻り値         | テキスト | <- | Text from the document          |
<!-- END REF -->


#### 説明
`.getText()` 関数は、 <!-- REF #document.getText().Summary -->ファイルのコンテンツをテキストとして返します <!-- END REF -->。

Optionally, you can designate the character set to be used for reading the contents. You can pass either:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or ""UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in *charSetName* or *charSetNum* (this parameter is then ignored). If the document does not contain a BOM and if *charSetName* or *charSetNum* is omitted, by default 4D uses the "UTF-8" character set.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters in the document. The following constants of the "System Documents" theme are available:

| 定数                            | 結果 | 説明                                                                                                                                                                  |
| ----------------------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0  | No processing                                                                                                                                                       |
| `Document with native format` | 1  | (Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows |
| `Document with CRLF`          | 2  | Line breaks are converted to Windows format: CRLF (carriage return + line feed)                                                                                     |
| `Document with CR`            | 3  | Line breaks are converted to OS X format: CR (carriage return)                                                                                                      |
| `Document with LF`            | 4  | Line breaks are converted to Unix format: LF (line feed)                                                                                                            |

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

**戻り値**

ファイルのテキスト。

#### 例題

Given the following text document (fields are separated by tabs):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

When you execute this code:


```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 by default
 $txt:=$myFile.getText()
```
... you get:

```4d
  // $Text = "id name price vat\r\n3 thé 1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"
  // \t = tab
  // \r = CR
```
 

<!-- END REF -->
 
 



