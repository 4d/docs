---
id: BlobClass
title: BLOB
---

Blobクラスを使って、[BLOB オブジェクト](../Concepts/dt_blob.md#BLOB-の種類) (`4D.Blob`) を操作することができます。

### 概要

|                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob](#4dblobnew)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (scalar blob or `4D.Blob`). |
| [**.size** : Real](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the size of a `4D.Blob`, expressed in bytes.                                                                                                                                                                                                         |
| [**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp; creates and returns a `4D.Blob` that references data from a subset of the blob on which it's called. 元の BLOB は変更されません。               |

## 4D.Blob.new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R2 | 追加 |
</details>

**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob

| 引数   | タイプ             |    | 説明         |
| ---- | --------------- |:--:| ---------- |
| blob | Blob or 4D.Blob | -> | コピーする BLOB |
| 戻り値  | 4D.Blob         | <- | 新規 4D.Blob |

#### 説明

`4D.Blob.new` creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (scalar blob or `4D.Blob`). `blob` 引数が渡されなかった場合、関数は空の 4D.Blob を返します。

## .size

**.size** : Real
#### 説明
The `.size` property returns the size of a `4D.Blob`, expressed in bytes.
## .slice()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R2 | 追加 |
</details>

**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob
| 引数    | タイプ     |    | 説明                               |
| ----- | ------- |:--:| -------------------------------- |
| start | 実数      | -> | 新しい `4D.Blob` に含める最初のバイトのインデックス  |
| end   | 実数      | -> | 新しい `4D.Blob` に含めない最初のバイトのインデックス |
| 戻り値   | 4D.Blob | <- | New `4D.Blob`                    |
#### 説明

`.slice()`  creates and returns a `4D.Blob` that references data from a subset of the blob on which it's called. 元の BLOB は変更されません。 `start` 引数は、新しい `4D.Blob` に含める最初のバイトを示す BLOB のインデックスです。 負の値を指定した場合、4D は BLOB の末尾から先頭に向かってオフセットしたものとして扱います。 たとえば、-10 は BLOB の最後から 10番目のバイトを表します。 デフォルト値は 0 です。 start にソースBLOB のサイズより大きな値を指定すると、返される `4D.Blob` のサイズは 0 になり、データは含まれません。

`end` 引数は、新しい `4D.Blob` に含めない最初のバイトを示す BLOB のインデックスです。つまる、指定インデックスのバイトは新しい `4D.Blob` から除外されます。 負の値を指定した場合、4D は BLOB の末尾から先頭に向かってオフセットしたものとして扱います。 たとえば、-10 は BLOB の最後から 10番目のバイトを表します。 デフォルト値は BLOB のサイズです。

#### 例題

```4d
var $myBlob : 4D.Blob

// 4D.Blob にテキストを格納します
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   // True

$myString:=Convert to text($myBlob; "UTF-8")
// $myString は "Hello, World!" を格納しています

// $myBlob から新しい 4D.Blob を作成します
$myNewBlob:=$myBlob.slice(0; 5)

$myString:=Convert to text($myNewBlob; "UTF-8")
// $myString は "Hello" を格納します
```
