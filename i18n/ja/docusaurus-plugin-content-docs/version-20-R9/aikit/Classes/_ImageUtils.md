---
id: _imageutils
title: _ImageUtils
---

# _ImageUtils

`_ImageUtils` 内部クラスは、画像から Blob への変換、画像からbase64 へのエンコード、インライン PNG 表現の作成などを含めた、画像を扱うためのユーティリティ関数を提供します。

## 関数

### httpURLToBlob

HTTP リクエストを行うことで、URL を Blob オブジェクトへと変換します。

| 引数   | 型    | 説明           |
| ---- | ---- | ------------ |
| $url | Text | 変換したい画像の URL |

**戻り値**: Blob 、あるいはリクエストが失敗した場合には Null。

```4d
var $blob:=cs._ImageUtils.me.httpURLToBlob("http://example.com/image.png")
```

### base64ToBlob

base64 にエンコードされた文字列を Blob オブジェクトに変換します。

| 引数      | 型    | 説明                      |
| ------- | ---- | ----------------------- |
| $base64 | Text | base64 にエンコードされた画像の文字列。 |

**戻り値**: でコードされた画像を表す Blob。

```4d
var $blob:=cs._ImageUtils.me.base64ToBlob("iVBORw0KGgoAAAANSUhEUgAAAAUA...")
```

### toBlob

様々な種類の画像表現を Blob オブジェクトに変換します。

| 引数         | 型       | 説明                                                          |
| ---------- | ------- | ----------------------------------------------------------- |
| $imageInfo | Variant | 画像情報(ピクチャ、ファイルオブジェクト、URL、あるいはテキストのいずれか)。 |

**戻り値**: Blob 、あるいは入力が無効の場合には Null。

```4d
var $blob:=cs._ImageUtils.me.toBlob($image)
```

### toBase64

画像を base64 エンコードされた文字列へと変換します。

| 引数         | 型       | 説明                 |
| ---------- | ------- | ------------------ |
| $imageInfo | Variant | base64 に変換したい画像情報。 |

**戻り値**: Base64 にエンコードされたテキスト、あるいは変換に失敗した場合には空の文字列。

```4d
var $base64:=cs._ImageUtils.me.toBase64($image)
```

### toInlinedPng

与えられた画像情報からインラインPNG データURI を生成します。

| 引数         | 型       | 説明         |
| ---------- | ------- | ---------- |
| $imageInfo | Variant | 変換したい画像情報。 |

**戻り値**: インライン PNG データ URI を格納したテキスト、あるいは変換に失敗した場合には空の文字列。

```4d
var $dataUri:=cs._ImageUtils.me.toInlinedPng($image)
```

### toFormData

画像を、フォームデータ送信に適したテキスト形式に変換します。

| 引数         | 型       | 説明         |
| ---------- | ------- | ---------- |
| $imageInfo | Variant | 変換したい画像情報。 |

**戻り値**: フォームデータを表すテキスト、あるいは変換に失敗した場合には空の文字列。

```4d
var $formData:=cs._ImageUtils.me.toFormData($image)
```