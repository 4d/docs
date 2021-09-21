---
id: Document
title: Document クラス
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

`.creationDate` プロパティは、 ファイルの作成日を返します。

このプロパティは **読み取り専用** です。 

 
 
 ## .creationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.creationTime** : Time

#### 説明

`.creationTime` プロパティは、 ファイルの作成時刻 を返します (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。 





## .exists

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.exists** : Boolean

#### 説明

`.exists` プロパティは、 ディスク上にファイルが存在する場合は true を返します(それ以外の場合は false)。

このプロパティは **読み取り専用** です。 







## .extension

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.extension** : Text
#### 説明

`.extension` プロパティは、 ファイル名の拡張子を返します (あれば)。 拡張子は必ず"." で始まります。 ファイル名が拡張子を持たない場合には、このプロパティは空の文字列を返します。

このプロパティは **読み取り専用** です。 






## .fullName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.fullName** : Text
#### 説明

`.fullName` プロパティは、 拡張子 (あれば) を含めたファイルの完全な名称を返します。

このプロパティは **読み取り専用** です。 





## .hidden

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.hidden** : Boolean

#### 説明

`.hidden` プロパティは、 ファイルがシステムレベルで "非表示" に設定されていれば trueを返します (それ以外の場合は false)。

このプロパティは **読み取り専用** です。 





## .isAlias

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isAlias** : Boolean

#### 説明

`.isAlias` プロパティは、 ファイルがエイリアス、ショートカット、シンボリックリンクのいずれかである場合には trueを返し、それ以外の場合には false を返します。

このプロパティは **読み取り専用** です。 




## .isFile

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFile** : Boolean

#### 説明

`.isFile` プロパティは、 ファイルに対しては常に trueを返します。

このプロパティは **読み取り専用** です。 




## .isFolder

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isFolder** : Boolean

#### 説明

`.isFolder` プロパティは、 ファイルに対しては常に falseを返します。

このプロパティは **読み取り専用** です。 





## .isWritable

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.isWritable** : Boolean

#### 説明

`.isWritable` プロパティは、 ファイルがディスク上に存在し、書き込み可能な場合に trueを返します。
> このプロパティは 4Dアプリケーションがディスクに書き込めるかどうか (アクセス権限) をチェックし、ファイルの *writable* (書き込み可能) 属性のみ依存するわけではありません。

このプロパティは **読み取り専用** です。

**例題**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```





## .modificationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.modificationDate** : Date

#### 説明

`.modificationDate` プロパティは、 ファイルの最終変更日を返します。

このプロパティは **読み取り専用** です。 





## .modificationTime

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.modificationTime** : Time

##### 説明

`.modificationTime` プロパティは、 ファイルの最終変更時刻 を返します (00:00 からの経過秒数の形式)。

このプロパティは **読み取り専用** です。 




## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.name** : Text

#### 説明

`.name` プロパティは、 拡張子 (あれば) を含まないファイル名を返します。

このプロパティは **読み取り専用** です。 



## .original

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.original** : 4D.File<br>**.original** : 4D.Folder

#### 説明

`.original` プロパティは、 エイリアス、ショートカット、シンボリックリンクファイルのターゲット要素を返します。 ターゲット要素は以下のいずれかです:

*   File オブジェクト
*   Folder オブジェクト

エイリアスでないファイルについては、プロパティは同じファイルオブジェクトをファイルとして返します。

このプロパティは **読み取り専用** です。 





## .parent

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.parent** : 4D.Folder

#### 説明

`.parent` プロパティは、 対象ファイルの親フォルダーオブジェクトを返します。 パスがシステムパスを表す場合 (例: "/DATA/")、システムパスが返されます。

このプロパティは **読み取り専用** です。 





## .path

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.path** : Text

#### 説明

`.path` プロパティは、 ファイルの POSIXパスを返します。 パスがファイルシステムを表す場合 (例: "/DATA/")、ファイルシステムが返されます。

このプロパティは **読み取り専用** です。 




## .platformPath

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.platformPath** : Text

#### 説明

`.platformPath` プロパティは、 カレントプラットフォームのシンタックスで表現されたファイルのパスを返します。

このプロパティは **読み取り専用** です。 





## .size

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.size** : Real

#### 説明

`.size` プロパティは、 ファイルのサイズ (バイト単位)を返します。 ファイルがディスク上に存在しない場合、サイズは 0 になります。

このプロパティは **読み取り専用** です。 











## .copyTo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File
| 引数                | タイプ       |    | 説明                                |
| ----------------- | --------- |:--:| --------------------------------- |
| destinationFolder | 4D.Folder | -> | 宛先フォルダー                           |
| newName           | Text      | -> | コピー先フォルダーの名前                      |
| overwrite         | Integer   | -> | 既存要素を上書きするには `fk overwrite` を渡します |
| 戻り値               | 4D.File   | <- | コピーされたファイル                        |


#### 説明

`.copyTo()` 関数は、 `File` オブジェクトを、*destinationFolder* 引数で指定したフォルダーへとコピーします 。

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

 


## .getContent()

<details><summary>履歴</summary>
| バージョン  | 内容            |
| ------ | ------------- |
| v19 R2 | 4D.Blob を返します |
| v17 R5 | 追加            |
</details>

**.getContent( )** : 4D.Blob
| 引数  | タイプ     |    | 説明         |
| --- | ------- | -- | ---------- |
| 戻り値 | 4D.Blob | <- | ファイルのコンテンツ |


#### 説明

`.getContent()` 関数は、  ファイルの全コンテンツを格納した `4D.Blob` オブジェクトを返します。 BLOB についての詳細は、[BLOB](Concepts/dt_blob.md) の章を参照してください。

**戻り値**

`4D.Blob` オブジェクト。

#### 例題

ドキュメントの中身を `BLOB` フィールドに保存します:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) // キュメントが選択されていれば
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```




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

`.getIcon()` 関数は、 ファイルのアイコンを返します。

任意の *size* 引数を渡すと、返されるアイコンのサイズをピクセル単位で指定することができます。 この値は、実際にはアイコンを格納している正方形の一辺の長さを表しています。 アイコンは通常、32x32ピクセル ("大きいアイコン") または 16x16ピクセル ("小さいアイコン") で定義されています。 この引数に 0 を渡すか省略した場合、"大きいアイコン" が返されます。

ファイルがディスク上に存在しない場合、デフォルトの空のアイコンが返されます。

**戻り値**

ファイルアイコンの [ピクチャー](../Concepts/picture.html)。






## .getText()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text

| 引数          | タイプ     |    | 説明               |
| ----------- | ------- | -- | ---------------- |
| charSetName | Text    | -> | 文字セットの名前         |
| charSetNum  | Integer | -> | 文字セットの番号         |
| breakMode   | Integer | -> | 改行の処理モード         |
| 戻り値         | Text    | <- | ドキュメントから取得したテキスト |


#### 説明
`.getText()` 関数は、 ファイルのコンテンツをテキストとして返します 。

任意で、コンテンツの読み取りに使用する文字セットを渡します。 これには、次の二つの方法があります:

- *charSetName* に標準の文字セット名を含んだ文字列 ("ISO-8859-1" や "UTF-8" など) を渡します。
- *charSetNum* に標準の文字セット名の MIBEnum ID (倍長整数) を渡します。

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
以下の結果が得られます:

```4d
  // $Text = "id name price vat\r\n3 thé 1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"
  // \t = tab
  // \r = CR (キャリッジリターン)
```
 

 
 



