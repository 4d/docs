---
id: FileHandleClass
title: FileHandle
---

`FileHandle` クラスは、開かれた [`File`](FileClass) オブジェクトから内容を順次読み出したり、追加したりするための関数を備えています。 FileHandle は、ドキュメントのどの部分にもアクセスすることができます。

`FileHandle` オブジェクトは [`file.open()`](FileClass#open) 関数によって作成されます。

> ドキュメント全体を一括で読み書きするには、[file.getText()](FileClass.md#gettext) と [file.setText()](FileClass.md#settext) 関数の使用を検討されるとよいでしょう。

標準的な 4Dオブジェクトの *参照カウント* により、FileHandle は参照されなくなると自動的に削除され、要求された [`File`](FileClass) オブジェクトも自動的に閉じられます。 つまり、FileHandle を使えば、ドキュメントを閉じる必要がなくなります。

:::note

ドキュメントなどのオブジェクトリソースは、メモリ上で参照がなくなると解放されます。これはたとえば、メソッド実行終了時のローカル変数などで起こります。 任意の時点でオブジェクトリソースを "強制的に" 解放したい場合は、[その参照を無効化](../Concepts/dt_object.md#リソース) することができます。

:::

### 例題

```code4d
var $f : 4D.File
var $fhandle : 4D.FileHandle
$f:=Folder(Database folder).file("example.txt")

// 先頭から 1行ずつ書き込みます
$fhandle:=$f.open("write")
$text:="Hello World"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

// 終端から 1行ずつ追加で書き込みます
$fhandle:=$f.open("append")
$text:="Hello New World!"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

// オブジェクト引数を使い、読み取り停止文字を指定して読み取ります
$o:=New object()
$o.mode:="read"
$o.charset:="UTF-8"
$o.breakModeRead:=Document with CRLF
$stopChar:="!"
$fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

// 1行ずつ読み取ります
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
	$lines.push($fhandle.readLine())
End while

```

### FileHandle オブジェクト

FileHandle オブジェクトは共有できません。

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)<br/><!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->    |
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)<br/><!-- INCLUDE #FileHandleClass.breakModeWrite.Summary --> |
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)<br/><!-- INCLUDE #FileHandleClass.charset.Summary -->                      |
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)<br/><!-- INCLUDE #FileHandleClass.eof.Summary -->                                  |
| [<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)<br/><!-- INCLUDE #FileHandleClass.file.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)<br/><!-- INCLUDE #FileHandleClass.getSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)<br/><!-- INCLUDE #FileHandleClass.mode.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)<br/><!-- INCLUDE #FileHandleClass.offset.Summary -->                         |
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)<br/><!-- INCLUDE #FileHandleClass.readBlob().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)<br/><!-- INCLUDE #FileHandleClass.readLine().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)<br/><!-- INCLUDE #FileHandleClass.readText().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)<br/><!-- INCLUDE #FileHandleClass.setSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)<br/><!-- INCLUDE #FileHandleClass.writeBlob().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)<br/><!-- INCLUDE #FileHandleClass.writeLine().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)<br/><!-- INCLUDE #FileHandleClass.writeText().Summary -->            |

<!-- REF FileHandleClass.breakModeRead.Desc -->

## .breakModeRead

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->

#### 説明

`.breakModeRead` プロパティは、<!-- REF #FileHandleClass.breakModeRead.Summary -->ファイル読み取り時に使用される改行の処理モードを返します<!-- END REF -->。

`.breakModeRead` プロパティは、FileHandle 作成時に [`file.open()`](FileClass.md#open) 関数で定義できます (詳細については [`.open()` 関数](FileClass.md#open) を参照ください)。 デフォルトは "native" です。

> `.breakModeRead` プロパティは、`.open()` のオプションが数値 (定数) を使って設定されていたとしても、常にテキスト値を格納します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF FileHandleClass.breakModeWrite.Desc -->

## .breakModeWrite

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : Text<!-- END REF -->

#### 説明

`.breakModeWrite` プロパティは、<!-- REF #FileHandleClass.breakModeWrite.Summary -->ファイル書き込み時に使用される改行の処理モードを返します<!-- END REF -->。

`.breakModeWrite` プロパティは、FileHandle 作成時に [`file.open()`](FileClass.md#open) 関数で定義できます (詳細については [`.open()` 関数](FileClass.md#open) を参照ください)。 デフォルトは "native" です。

> `.breakModeWrite` プロパティは、`.open()` のオプションが数値 (定数) を使って設定されていたとしても、常にテキスト値を格納します。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF FileHandleClass.charset.Desc -->

## .charset

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : Text<!-- END REF -->

#### 説明

`.charset` プロパティは、<!-- REF #FileHandleClass.charset.Summary -->ファイルの読み取りや書き込みに使用される文字セットを返します<!-- END REF -->。

文字セットは、FileHandle 作成時に [`file.open()`](FileClass#open) 関数で定義できます。 デフォルト値: "UTF-8"

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF FileHandleClass.eof.Desc -->

## .eof

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : Boolean<!-- END REF -->

#### 説明

`.eof` プロパティは、<!-- REF #FileHandleClass.eof.Summary -->`offset` がファイルの終端に達した場合に true、それ以外は false を返します<!-- END REF -->。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF FileHandleClass.file.Desc -->

## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### 説明

`.file` プロパティは、<!-- REF #FileHandleClass.file.Summary -->作成された FileHandle の対象である [4D.File](FileClass.md) オブジェクトを格納します<!-- END REF -->。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF FileHandleClass.getSize().Desc -->

## .getSize()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : Real <!-- END REF -->

<!--REF #FileHandleClass.getSize().Params -->

| 引数  | 型  |    | 説明                                    |
| --- | -- | -- | ------------------------------------- |
| 戻り値 | 実数 | <- | ドキュメントのサイズ (バイト単位) |

<!-- END REF -->

#### 説明

`.getSize()` 関数は、<!-- REF #FileHandleClass.getSize().Summary -->ドキュメントの現在のサイズをバイト単位で返します<!-- END REF -->。

> この関数は、`File` クラスの [.size](FileClass#size) プロパティと同じ値を返します。

#### 参照

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.mode.Desc -->

## .mode

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.mode.Syntax -->**.mode** : Text<!-- END REF -->

#### 説明

`.mode` プロパティは、<!-- REF #FileHandleClass.mode.Summary -->FileHandle が作成されたモード ("read"、"write"、"append" のいずれか) を返します<!-- END REF -->。

モードは、FileHandle 作成時に [`file.open()`](FileClass#open) 関数で定義できます。 デフォルトは "read" です。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF FileHandleClass.offset.Desc -->

## .offset

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : Real<!-- END REF -->

#### 説明

`.offset` プロパティは、<!-- REF #FileHandleClass.offset.Summary -->データストリームの現在のオフセット (ドキュメント内の位置) を返します<!-- END REF -->。 オフセット値は、読み取りおよび書き込み操作の後に自動的に更新されます。

`.offset` を設定すると、次の読み取り・書き取り操作の際に、その現在値が変更されます。

- 負の値が渡された場合、`.offset` はファイルの先頭 (ゼロ) に設定されます。
- ファイルサイズより大きい値が渡された場合、`.offset` はファイルの終端 (ファイルサイズ) に設定されます。

**読み書き可能** プロパティです。

:::caution

FileHandle の作成時、`.offset` の値はバイト数です。 しかしながら、オフセットの単位は読み取り関数によって異なります。[`readBlob()`](#readblob) の場合、`.offset` はバイト数ですが、[`readText()`](#readtext)/[`readLine()`](#readline) の場合は文字数になります。 ファイルの文字セットに応じて、1文字は 1バイトまたは複数バイトに対応します。 したがって、`readBlob()` で読み取りを開始してから `readText()` を呼び出すと、テキストの読み取りは一貫性のない位置から開始されます。 そのため、同じ FileHandle内で、BLOB の読み取り/書き込みからテキストの読み取り/書き込みに切り替える場合には、`.offset` プロパティを自分で設定することが不可欠です。 例:

```4d
  // utf-16エンコーディング (1文字につき 2バイト) を使用して、ヨーロッパのテキストファイルを開きます
  // 最初の 10文字をバイトとして、残りをテキストとして読み込みます
$fh:=File("/RESOURCES/sample_utf_16.txt").open()
  // 最初の 20バイト (=10文字) を読み取ります
$b:=$fh.readBlob(20) // $fh.offset=20
  // 次にすでに読み取った 10文字を飛ばして残りのテキストをすべて読み取ります
  // バイトからテキストの読み取りへと切り替えるため、オフセットの単位が変わります
  // そのため、オフセットをバイトから文字数に変換する必要があります
$fh.offset:=10 // 最初の 10文字 (20バイト) の utf-16文字をスキップさせます
$s:=$fh.readText()
```

:::

<!-- END REF -->

<!-- REF FileHandleClass.readBlob().Desc -->

## .readBlob()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) <!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->

| 引数      | 型                                    |    | 説明             |
| ------- | ------------------------------------ | -- | -------------- |
| *bytes* | 実数                                   | -> | 読み取るバイト数       |
| 戻り値     | [4D.Blob](BlobClass) | <- | ファイルから読み取ったバイト |

<!-- END REF -->

#### 説明

`.readBlob()` 関数は、<!-- REF #FileHandleClass.readBlob().Summary -->ファイルの現在の位置から bytes サイズの Blob を返します<!-- END REF -->。

この関数を実行すると、現在の位置 ([.offset](#offset)) が、最後に読み取ったバイトの後に更新されます。

#### 参照

[.writeBlob()](#writeblob)

<!-- END REF -->

<!-- REF FileHandleClass.readLine().Desc -->

## .readLine()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->

| 引数  | 型    |    | 説明      |
| --- | ---- | -- | ------- |
| 戻り値 | テキスト | <- | 1行のテキスト |

<!-- END REF -->

#### 説明

`.readLine()` 関数は、<!-- REF #FileHandleClass.readLine().Summary -->現在の位置から次の改行文字まで、あるいはドキュメントの終端に到達するまでのテキストを返します<!-- END REF -->。

この関数を実行すると、現在の位置 ([`.offset`](#offset)) が更新されます。

:::caution 警告

この関数は、[`.offset`](#offset) プロパティがバイト数ではなく文字数であることを前提としています。 詳細については、[.offset の説明](#offset) を参照ください。

:::

> この関数が FileHandle を対象に初めて実行されると、ドキュメント全体がバッファーに読み込まれます。

#### 参照

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->

<!-- REF FileHandleClass.readText().Desc -->

## .readText()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->

| 引数         | 型    |    | 説明          |
| ---------- | ---- | -- | ----------- |
| *stopChar* | テキスト | -> | 読み取りを停止する文字 |
| 戻り値        | テキスト | <- | ファイルのテキスト   |

<!-- END REF -->

#### 説明

`.readText()` 関数は、<!-- REF #FileHandleClass.readText().Summary -->現在の位置から、最初の stopChar 文字列まで (渡された場合)、あるいはファイルの終端に達するまでのテキストを返します<!-- END REF -->。

*stopChar* の文字列は、返されるテキストに含まれません。 *stopChar* を省略した場合、ドキュメント全体のテキストが返されます。

この関数を実行すると、[.offset](#offset) が *stopChar* 文字列の直後に移動します。

:::caution 警告

この関数は、[`.offset`](#offset) プロパティがバイト数ではなく文字数であることを前提としています。 詳細については、[.offset の説明](#offset) を参照ください。

:::

渡した *stopChar* が見つからない場合、`.readText()` は空の文字列を返し、[.offset](#offset) は更新されません。

> この関数が FileHandle を対象に初めて実行されると、ドキュメント全体がバッファーに読み込まれます。

#### 参照

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.setSize().Desc -->

## .setSize()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size* : Real )<!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->

| 引数   | 型  |    | 説明                                       |
| ---- | -- | -- | ---------------------------------------- |
| size | 実数 | -> | ドキュメントの新しいサイズ (バイト単位) |

<!-- END REF -->

#### 説明

`.setSize()` 関数は、<!-- REF #FileHandleClass.setSize().Summary -->ドキュメントの新しいサイズをバイト単位で設定します<!-- END REF -->。

*size* の値が現在のドキュメントサイズより小さい場合、内容は先頭から切り捨てられ、新しい *size* が取得されます。

#### 参照

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.writeBlob().Desc -->

## .writeBlob()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->

| 引数     | 型                                    |    | 説明             |
| ------ | ------------------------------------ | -- | -------------- |
| *blob* | [4D.Blob](BlobClass) | -> | ファイルに書き込む Blob |

<!-- END REF -->

#### 説明

`.writeBlob()` 関数は、<!-- REF #FileHandleClass.writeBlob().Summary -->ファイルの現在の位置から *blob* に渡した Blob を書き込みます<!-- END REF -->。

この関数を実行すると、現在の位置 ([.offset](#offset)) が、最後に書き込んだバイトの後に更新されます。

#### 参照

[.readBlob()](#readblob)

<!-- END REF -->

<!-- REF FileHandleClass.writeLine().Desc -->

## .writeLine()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->

| 引数           | 型    |    | 説明       |
| ------------ | ---- | -- | -------- |
| *lineOfText* | テキスト | -> | 書き込むテキスト |

<!-- END REF -->

#### 説明

`.writeLine()` 関数は、<!-- REF #FileHandleClass.writeLine().Summary -->現在の位置に *lineOfText* の内容を書き込み、改行文字を挿入します<!-- END REF --> ([.writeText()](#writetext) 関数とは異なります)。 デフォルトではネイティブの改行文字が使用されますが、[FileHandle](FileClass.md#open) を開く際に、[`.breakModeWrite`](#breakmodewrite) プロパティを設定することで、別の改行文字を定義することができます。

この関数を実行すると、現在の位置 ([.offset](#offset)) が、最後に書き込んだ改行文字の後に更新されます。

#### 参照

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.writeText().Desc -->

## .writeText()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->

| 引数            | 型    |    | 説明       |
| ------------- | ---- | -- | -------- |
| *textToWrite* | テキスト | -> | 書き込むテキスト |

<!-- END REF -->

#### 説明

`.writeText()` 関数は、<!-- REF #FileHandleClass.writeText().Summary -->現在の位置に *textToWrite* の内容を書き込み、改行文字は挿入しません<!-- END REF --> ([.writeLine()](#writeline) 関数とは異なります)。 デフォルトではネイティブの改行文字が使用されますが、[FileHandle](FileClass.md#open) を開く際に、[`.breakModeWrite`](#breakmodewrite) プロパティを設定することで、別の改行文字を定義することができます。

この関数を実行すると、現在の位置 ([.offset](#offset)) は、次の改行文字の後に更新されます。

#### 参照

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
