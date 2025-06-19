---
id: openaiimage
title: OpenAIImage
---

# OpenAIImage

`OpenAIImage` クラスはOpenAI API によって生成された画像を表します。 このクラスは異なるフォーマットで生成された画像にアクセスするためのプロパティや、この画像を他の型へと変換するためのメソッドを提供します。

https://platform.openai.com/docs/api-reference/images/object

## プロパティ

| プロパティ            | 型       | 説明                                                                      |
| ---------------- | ------- | ----------------------------------------------------------------------- |
| `url`            | Text    | `response_format` が `url` (デフォルト値)である場合、生成された画像のURL。 |
| `b64_json`       | Text    | `response_format` が `b64_json` である場合、生成された画像のbase64 エンコードされたJSON。       |
| `revised_prompt` | Variant | プロンプトに改訂があった場合、画像を生成するのに使用されたプロンプト。                                     |

## 関数

### asBlob()

**asBlob**() : 4D.Blob

| 引数  | 型                       | 説明                                                                                                     |
| --- | ----------------------- | ------------------------------------------------------------------------------------------------------ |
| 戻り値 | 4D.Blob | Converts the generated image to a blob format based on its URL or base64-encoded JSON. |

#### 使用例

```4d
var $blob:=$image.asBlob()
```

### asPicture()

**asPicture**() : Picture

| 引数  | 型       | 説明                                                                      |
| --- | ------- | ----------------------------------------------------------------------- |
| 戻り値 | Picture | Creates a picture object from the blob converted image. |

#### 使用例

```4d
var $picture:=$image.asPicture()
```

### saveToDisk()

**saveToDisk**(*file* : 4D.File) : Boolean

| 引数     | 型                       | 説明                            |
| ------ | ----------------------- | ----------------------------- |
| *ファイル* | 4D.File | 画像が保存されるファイルオブジェクト。           |
| 戻り値    | Boolean                 | 画像が正常に保存された場合には `True` を返します。 |

画像をディスク上に保存します。もしURL の場合には最初にダウンロードをしようと試みます。 画像データが取得できなかった場合には `False` を返します。

#### 使用例

```4d
var $success:=$image.saveToDisk(Folder(fk desktop folder).file("image.png"))
```
